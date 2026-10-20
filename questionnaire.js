/* Proposed inspection questions; fictional demo dorm only. */
window.PREVIEW_QUESTIONNAIRE = {
  "version": 2,
  "features": [
    "Kitchen",
    "Lounge",
    "Water bottle filling station"
  ],
  "questions": [
    {
      "id": "inspection_date",
      "section": "Inspection details",
      "feature": "Core",
      "type": "Short answer",
      "title": "Date and time",
      "choices": [],
      "required": false,
      "help": "",
      "enabled": true
    },
    {
      "id": "inspector",
      "section": "Inspection details",
      "feature": "Core",
      "type": "Short answer",
      "title": "Inspector or team",
      "choices": [],
      "required": false,
      "help": "",
      "enabled": true
    },
    {
      "id": "scope",
      "section": "Inspection details",
      "feature": "Core",
      "type": "Paragraph",
      "title": "Locations inspected",
      "choices": [],
      "required": false,
      "help": "Use floor and facility locations. Leave out resident names.",
      "enabled": true
    },
    {
      "id": "overall",
      "section": "Inspection details",
      "feature": "Core",
      "type": "Multiple choice",
      "title": "Overall condition",
      "choices": [
        "Good condition",
        "Minor issue",
        "Significant issue",
        "Urgent concern",
        "Not present / not applicable",
        "Not inspected"
      ],
      "required": false,
      "help": "",
      "enabled": true
    },
    {
      "id": "time_here",
      "section": "Inspection details",
      "feature": "Core",
      "type": "Multiple choice",
      "title": "Inspection completed?",
      "choices": [
        "Yes",
        "Partially: some areas inaccessible",
        "No: follow-up visit needed"
      ],
      "required": false,
      "help": "",
      "enabled": true
    },
    {
      "id": "maintenance_request",
      "section": "Maintenance",
      "feature": "Core",
      "type": "Multiple choice",
      "title": "Any known open maintenance requests?",
      "choices": [
        "Yes",
        "No",
        "Records not reviewed / unknown"
      ],
      "required": false,
      "help": "",
      "enabled": true
    },
    {
      "id": "maintenance_response",
      "section": "Maintenance",
      "feature": "Core",
      "type": "Paragraph",
      "title": "Request references and status",
      "choices": [],
      "required": false,
      "help": "Reference numbers, dates, and current status, if known.",
      "enabled": true
    },
    {
      "id": "maintenance_resolution",
      "section": "Maintenance",
      "feature": "Core",
      "type": "Paragraph",
      "title": "Repairs completed or still outstanding",
      "choices": [],
      "required": false,
      "help": "",
      "enabled": true
    },
    {
      "id": "kitchen_use",
      "section": "Kitchen",
      "feature": "Kitchen",
      "type": "Multiple choice",
      "title": "Kitchen availability",
      "choices": [
        "Present and accessible",
        "Present but inaccessible / closed",
        "Not present",
        "Not inspected"
      ],
      "required": false,
      "help": "",
      "enabled": true
    },
    {
      "id": "kitchen_clean",
      "section": "Kitchen",
      "feature": "Kitchen",
      "type": "Multiple choice",
      "title": "Cleanliness and waste disposal",
      "choices": [
        "Good condition",
        "Minor issue",
        "Significant issue",
        "Urgent concern",
        "Not present / not applicable",
        "Not inspected"
      ],
      "required": false,
      "help": "",
      "enabled": true
    },
    {
      "id": "kitchen_equipment",
      "section": "Kitchen",
      "feature": "Kitchen",
      "type": "Multiple choice",
      "title": "Appliances, counters, and sinks",
      "choices": [
        "Good condition",
        "Minor issue",
        "Significant issue",
        "Urgent concern",
        "Not present / not applicable",
        "Not inspected"
      ],
      "required": false,
      "help": "",
      "enabled": true
    },
    {
      "id": "kitchen_access",
      "section": "Kitchen",
      "feature": "Kitchen",
      "type": "Paragraph",
      "title": "Items checked and out of service",
      "choices": [],
      "required": false,
      "help": "Include exact locations.",
      "enabled": true
    },
    {
      "id": "kitchen_comments",
      "section": "Kitchen",
      "feature": "Kitchen",
      "type": "Paragraph",
      "title": "Kitchen findings and follow-up",
      "choices": [],
      "required": false,
      "help": "",
      "enabled": true
    },
    {
      "id": "lounge_condition",
      "section": "Lounge",
      "feature": "Lounge",
      "type": "Multiple choice",
      "title": "Furniture and fixtures",
      "choices": [
        "Good condition",
        "Minor issue",
        "Significant issue",
        "Urgent concern",
        "Not present / not applicable",
        "Not inspected"
      ],
      "required": false,
      "help": "",
      "enabled": true
    },
    {
      "id": "lounge_clean",
      "section": "Lounge",
      "feature": "Lounge",
      "type": "Multiple choice",
      "title": "Cleanliness",
      "choices": [
        "Good condition",
        "Minor issue",
        "Significant issue",
        "Urgent concern",
        "Not present / not applicable",
        "Not inspected"
      ],
      "required": false,
      "help": "",
      "enabled": true
    },
    {
      "id": "lounge_availability",
      "section": "Lounge",
      "feature": "Lounge",
      "type": "Multiple choice",
      "title": "Lounge availability",
      "choices": [
        "Present and accessible",
        "Present but inaccessible / closed",
        "Not present",
        "Not inspected"
      ],
      "required": false,
      "help": "",
      "enabled": true
    },
    {
      "id": "lounge_comments",
      "section": "Lounge",
      "feature": "Lounge",
      "type": "Paragraph",
      "title": "Lounge findings and follow-up",
      "choices": [],
      "required": false,
      "help": "",
      "enabled": true
    },
    {
      "id": "water_availability",
      "section": "Water bottle filling stations",
      "feature": "Water bottle filling station",
      "type": "Multiple choice",
      "title": "Bottle filling station availability",
      "choices": [
        "Present and accessible",
        "Present but inaccessible / closed",
        "Not present",
        "Not inspected"
      ],
      "required": false,
      "help": "",
      "enabled": true
    },
    {
      "id": "water_function",
      "section": "Water bottle filling stations",
      "feature": "Water bottle filling station",
      "type": "Multiple choice",
      "title": "Operation and water flow",
      "choices": [
        "Good condition",
        "Minor issue",
        "Significant issue",
        "Urgent concern",
        "Not present / not applicable",
        "Not inspected"
      ],
      "required": false,
      "help": "",
      "enabled": true
    },
    {
      "id": "water_clean",
      "section": "Water bottle filling stations",
      "feature": "Water bottle filling station",
      "type": "Multiple choice",
      "title": "Cleanliness, drainage, and leaks",
      "choices": [
        "Good condition",
        "Minor issue",
        "Significant issue",
        "Urgent concern",
        "Not present / not applicable",
        "Not inspected"
      ],
      "required": false,
      "help": "",
      "enabled": true
    },
    {
      "id": "water_filter",
      "section": "Water bottle filling stations",
      "feature": "Water bottle filling station",
      "type": "Multiple choice",
      "title": "Filter indicator",
      "choices": [
        "Green / normal",
        "Yellow / service soon",
        "Red / service needed",
        "No indicator visible",
        "Not inspected"
      ],
      "required": false,
      "help": "Record the displayed indicator. This is not a water-quality test.",
      "enabled": true
    },
    {
      "id": "water_inventory",
      "section": "Water bottle filling stations",
      "feature": "Water bottle filling station",
      "type": "Paragraph",
      "title": "Stations checked and out of service",
      "choices": [],
      "required": false,
      "help": "Include exact locations.",
      "enabled": true
    },
    {
      "id": "water_comments",
      "section": "Water bottle filling stations",
      "feature": "Water bottle filling station",
      "type": "Paragraph",
      "title": "Station findings and follow-up",
      "choices": [],
      "required": false,
      "help": "",
      "enabled": true
    },
    {
      "id": "priorities",
      "section": "Findings and follow-up",
      "feature": "Closing",
      "type": "Checkboxes",
      "title": "Which spaces need follow-up?",
      "choices": [
        "Kitchen",
        "Lounge",
        "Water bottle filling station",
        "No follow-up needed"
      ],
      "required": false,
      "help": "Select up to three. Choose “No follow-up needed” on its own.",
      "enabled": true
    },
    {
      "id": "best_part",
      "section": "Findings and follow-up",
      "feature": "Closing",
      "type": "Paragraph",
      "title": "Improvements or good conditions",
      "choices": [],
      "required": false,
      "help": "",
      "enabled": true
    },
    {
      "id": "first_change",
      "section": "Findings and follow-up",
      "feature": "Closing",
      "type": "Paragraph",
      "title": "Actions needed",
      "choices": [],
      "required": false,
      "help": "Include location, urgency, and the proposed action.",
      "enabled": true
    },
    {
      "id": "urgent_action",
      "section": "Findings and follow-up",
      "feature": "Closing",
      "type": "Paragraph",
      "title": "Urgent concerns already reported",
      "choices": [],
      "required": false,
      "help": "Include who was notified and when. Use campus procedures for immediate concerns.",
      "enabled": true
    },
    {
      "id": "other_comments",
      "section": "Findings and follow-up",
      "feature": "Closing",
      "type": "Paragraph",
      "title": "Limitations or other observations",
      "choices": [],
      "required": false,
      "help": "",
      "enabled": true
    }
  ],
  "dorms": [
    {
      "id": "demo-dorm",
      "name": "Demo Dorm",
      "round": "Inspection v1",
      "enabled": true,
      "features": {
        "Kitchen": "Include",
        "Lounge": "Include",
        "Water bottle filling station": "Include"
      }
    }
  ]
};
