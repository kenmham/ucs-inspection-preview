/* Area definitions are shared by the form and browser-only storage. */
(function(root){
 'use strict';
 const types=['Kitchen','Lounge','Water bottle filling station','Other'];
 function templates(config,type){
  if(type!=='Other')return config.questions.filter(q=>q.enabled&&q.feature===type);
  const choices=['Good condition','Minor issue','Significant issue','Urgent concern','Not present / not applicable','Not inspected'];
  return [
   ['availability','Area availability','Multiple choice',['Present and accessible','Present but inaccessible / closed','Not present','Not inspected']],
   ['condition','Overall condition','Multiple choice',choices],
   ['cleanliness','Cleanliness','Multiple choice',choices],
   ['items','Items checked and out of service','Paragraph',[]],
   ['comments','Findings and follow-up','Paragraph',[]]
  ].map(([id,title,type,choices])=>({id,title,type,choices,feature:'Other',section:'Other area',enabled:true,required:false,help:''}));
 }
 function normalize(areas=[]){
  if(!Array.isArray(areas)||areas.length>100)throw Error('Use up to 100 additional areas per inspection.');
  const seen=new Set();
  return areas.map(a=>{
   if(!a||typeof a.id!=='string'||!/^[a-zA-Z0-9-]{1,64}$/.test(a.id)||seen.has(a.id))throw Error('Additional area IDs must be unique.');
   if(!types.includes(a.type))throw Error('Choose an area type.');
   if(typeof a.label!=='string'||!a.label.trim()||a.label.trim().length>200)throw Error('Give each additional area a name or location (up to 200 characters).');
   seen.add(a.id);return {id:a.id,type:a.type,label:a.label.trim()};
  });
 }
 function questions(config,areas=[]){return normalize(areas).flatMap(a=>{
  const base=templates(config,a.type);
  if(!base.length)throw Error('No inspection questions are configured for '+a.type+'.');
  return base.map(q=>({...q,id:`area:${a.id}:${q.id}`,area_id:a.id,source_id:q.id,feature:a.type,section:a.label,title:`${a.label} (${a.type}): ${q.title}`,source_title:q.title}));
 });}
 const api={types,templates,normalize,questions};
 if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.AreaPages=api;
})(typeof window==='undefined'?globalThis:window);
