/* Browser-only storage for the public preview. No requests or shared database. */
(function(root){
  'use strict';
  const KEY='ucs-inspections-preview:records-v1';
  const FORMAT='ucs-inspections-preview-v1';
  function createStore(storage,questionnaire,makeId=()=>crypto.randomUUID(),now=()=>new Date().toISOString()){
    const config=JSON.parse(JSON.stringify({...questionnaire,revision:1}));
    const clone=value=>JSON.parse(JSON.stringify(value));
    const require=(ok,message)=>{if(!ok)throw Error(message);};
    function read(){
      let raw;
      try{raw=storage.getItem(KEY);}catch{throw Error('Browser storage is unavailable. Enable it to try this preview.');}
      if(!raw)return {config,forms:[],responses:[]};
      try{const data=JSON.parse(raw);require(data.format===FORMAT&&Array.isArray(data.forms)&&Array.isArray(data.responses),'Invalid preview data.');return {config,forms:data.forms,responses:data.responses};}
      catch{throw Error('Saved preview data could not be read. Export or clear this site’s browser storage before retrying.');}
    }
    function write(data){try{storage.setItem(KEY,JSON.stringify({format:FORMAT,forms:data.forms,responses:data.responses}));}catch{throw Error('The test inspection could not be saved. Browser storage may be full or disabled. Your draft is preserved.');}}
    function validate(snapshot,answers,screens){
      require(answers&&typeof answers==='object'&&!Array.isArray(answers),'Invalid answers.');
      require(screens&&typeof screens==='object'&&!Array.isArray(screens),'Invalid facility selections.');
      for(const [f,mode] of Object.entries(snapshot.dorm.features))if(mode==='Ask inspector')require(['','Yes','No','Not sure'].includes(screens[f]??''),'Choose whether '+f+' is present.');
      const clean={};
      for(const q of snapshot.questions){
        if(snapshot.dorm.features[q.feature]==='Skip'||(snapshot.dorm.features[q.feature]==='Ask inspector'&&screens[q.feature]!=='Yes'))continue;
        const v=answers[q.id]??(q.type==='Checkboxes'?[]:'');
        require(q.type==='Checkboxes'?Array.isArray(v):typeof v==='string','Invalid answer type.');
        if(['Multiple choice','Checkboxes'].includes(q.type)){const vals=Array.isArray(v)?v:v?[v]:[];require(vals.every(x=>q.choices.includes(x))&&new Set(vals).size===vals.length,'Invalid choice for '+q.title+'.');}
        if(q.id==='priorities'){require(v.length<=3,'Select up to three spaces.');require(!v.includes('No follow-up needed')||v.length===1,'Choose “No follow-up needed” on its own.');}
        if(Object.hasOwn(answers,q.id))clean[q.id]=v;
      }
      return clean;
    }
    function request(path,body){
      const data=read();
      if(path==='/api/state')return clone(data);
      if(path!=='/api/responses')throw Error('This action is unavailable in the preview.');
      require(body&&typeof body.id==='string'&&body.id.length>0,'Missing inspection ID.');
      require(body.revision===config.revision,'This preview has changed. Start a new test inspection.');
      const name=typeof body.dorm_name==='string'?body.dorm_name.trim():'';
      require(name.length<=200,'Enter a dorm name.');
      let dorm=config.dorms.find(d=>d.enabled&&d.name.toLowerCase()===name.toLowerCase());
      if(!dorm){const prior=data.forms.find(f=>f.dorm.name.toLowerCase()===name.toLowerCase());dorm={id:prior?.dorm.id||makeId(),name,round:'Preview',enabled:true,features:Object.fromEntries(config.features.map(f=>[f,'Include']))};}
      const questions=config.questions.filter(q=>q.enabled&&dorm.features[q.feature]!=='Skip');
      let snapshot=data.forms.find(f=>f.dorm.id===dorm.id&&JSON.stringify(f.questions)===JSON.stringify(questions));
      const fresh=!snapshot;
      if(fresh)snapshot={id:makeId(),created_at:now(),dorm:clone(dorm),questions:clone(questions)};
      const answers=validate(snapshot,body.answers,body.screens);
      const old=data.responses.find(r=>r.id===body.id);
      if(old){require(old.form_id===snapshot.id&&JSON.stringify(old.answers)===JSON.stringify(answers)&&JSON.stringify(old.screens)===JSON.stringify(body.screens),'This test inspection was already saved with different answers.');return {saved:true,id:body.id};}
      if(fresh)data.forms.unshift(snapshot);
      data.responses.unshift({id:body.id,form_id:snapshot.id,submitted_at:now(),answers,screens:clone(body.screens)});
      write(data);
      return {saved:true,id:body.id};
    }
    function csv(){const data=read(),map=new Map(data.forms.map(f=>[f.id,f]));const ids=[...new Set(data.forms.flatMap(f=>f.questions.map(q=>q.id)))];const cell=v=>{v=Array.isArray(v)?v.join(' | '):String(v??'');if(/^\s*[=+\-@]/.test(v))v="'"+v;return '"'+v.replaceAll('"','""')+'"';};const rows=[['response_id','submitted_at','dorm','preview',...config.features.map(f=>'availability:'+f),...ids],...data.responses.map(r=>[r.id,r.submitted_at,map.get(r.form_id).dorm.name,true,...config.features.map(f=>r.screens[f]||map.get(r.form_id).dorm.features[f]),...ids.map(id=>r.answers[id])])];return '\ufeff'+rows.map(r=>r.map(cell).join(',')).join('\r\n');}
    function backup(){return JSON.stringify({format:FORMAT,exported_at:now(),...read()},null,2);}
    function reset(){try{storage.removeItem(KEY);}catch{throw Error('Browser storage could not be cleared.');}}
    return {request,csv,backup,reset};
  }
  if(typeof module!=='undefined'&&module.exports)module.exports={createStore,KEY,FORMAT};
  else root.PreviewStore=createStore(root.localStorage,root.PREVIEW_QUESTIONNAIRE);
})(typeof window==='undefined'?globalThis:window);
