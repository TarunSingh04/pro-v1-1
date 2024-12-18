export const QUESTION_SET_1 = [
    {
        "question": "Have you obtained a measure of your GHG emissions (scope 1, 2) to assess the carbon footprint resulting from your activities?",
        "text_labels":[
            {
                "label": "Date Obtained",
                "placeholder": "MM/DD/YYYY",
                "is_date": true,
                "input_type": "date"
            },
        ],
        "choices": [
            "Yes",
            "No - in this case, you can obtain an estimate of your GHG emissions by using our PRO online carbon accounting app"
        ],
        "choice_type": "radio",
        "has_file": true,
    }
]

export const QUESTION_SET_2 = [
    {
        "question": "Energy source: fossil fuels or green?",
        "text_labels":[
            {
                "label": "If Yes, Please Indicate Name",
                "placeholder": "",
                "is_date": false,

            },
        ],
        "choices": [
            "Yes",
            "No"
        ],
        "choice_type": "radio",
        "has_file": false,
    },   
    {
        "question": "Do you use any renewable energy sources?",
        "text_labels":[
            {
                "label": "Solar Panels",
                "placeholder": "%",
                "is_date": false,
                "input_type": "number"
            },
            {
                "label": "Wind Power",
                "placeholder": "%",
                "is_date": false,
                "input_type": "number"
            },
            {
                "label": "Biofuels",
                "placeholder": "%",
                "is_date": false,
                "input_type": "number"
            },
            {
                "label": "Hydropower",
                "placeholder": "%",
                "is_date": false,
                "input_type": "number"
            },
        ],
        "choices": [
            "Yes",
            "No"
        ],
        "choice_type": "radio",
        "has_file": false,
    }   
]

export const QUESTION_SET_3 = [
    {
        "question": "Have you obtained an EU energy efficiency label for any part or the whole of the products you provide and/or the infrastructure or properties you operate in:",
        "text_labels":[
            
        ],
        "choices": [
            "Yes",
            "No - in this case, you can obtain an estimate of your GHG emissions by using our PRO online carbon accounting app"
        ],
        "choice_type": "radio",
        "has_file": false,
    },
    {
        "question": "Covers less than 50%",
        "text_labels":[
            
        ],
        "choices": [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G"
        ],
        "choice_orientation":"horizontal",
        "choice_type": "radio",
        "has_file": false,
    },
    {
        "question": "Covers from 50% to 80%",
        "text_labels":[
            
        ],
        "choices": [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G"
        ],
        "choice_orientation":"horizontal",
        "choice_type": "radio",
        "has_file": false,
    },
    {
        "question": "If you haven’t yet obtained any label for energy efficiency or if you plan to improve your level of efficiency to obtain a higher label, will you carry out an energy audit and implement measures to improve energy efficiency within the next 24 months",
        "text_labels":[
            
        ],
        "choices": [
            "Yes",
            "No"
        ],
        "choice_type": "radio",
        "has_file": false,
    }

]


export const QUESTION_SET_4 = [
    {
        "question": "Rate your water utility provider: In your opinion, regarding the water you receive:",
        "text_labels":[
            {
                label:"",
                placeholder:"Indicate the name of your water utility provider"
            }
        ],
        "choices": [
            "Good",
            "Sufficient",
            "Insufficient",
        ],
        "choice_orientation":"horizontal",
        
        "choice_type": "radio",
        "has_file": false,
    },
    {
        "question": "Rate your wastewater utility services: In your opinion, is wastewater in your community appropriately treated, following sanitary regulations?",
        "text_labels":[
            {
                label:"",
                placeholder:"Indicate the name of your wastewater utility provider"
            }
        ],
        "choices": [
            "Yes",
            "No",
            "Don't Know"
        ],
        "choice_orientation":"horizontal",
        
        "choice_type": "radio",
        "has_file": false,
    },
    
    {
        "question": "Pollution prevention or reduction through production process modification",
        "text_labels":[
            {
                label:"",
                placeholder:"Describe Other Method",
            }
        ],
        "choices": [
            "Using less hazardous chemicals and/or material substitution",
            "Optimising water usage",
            "Implementing closed-loop systems that recycle water within the business",
            "Other (please describe below)",
            "If you apply none of the above methods, check here"
        ],
        "choice_type": "checkbox",
        "has_file": false,
    }

]

export const QUESTION_SET_5 = [
    {
        "question": "Are you actively engaged in waste reduction:",
        "text_labels":[
        ],
        "choices": [
            "Yes",
            "No"
        ],
        "sub_questions":[{
            "question": "If Yes, Please indicate how you have achieved waste reduction (check all of the following methods you use):",
            "text_labels":[
                
            ],
            "choices": [
                "Product redesign for reuse/remanufacturing (i.e. closed loop system)",
                "Organic waste processed for composting",
                "Re-using construction debris for new products",
                "Using alternative materials, promoting recycling, and designing products for circularity",
                "Contributing your organic waste to a plant that extracts energy"
            ],
            "choice_orientation":"vertical",
            "choice_type": "checkbox",
        }],
        "choice_orientation":"vertical",
        "choice_type": "radio",
        "has_file": false,
    },
    {
        "question": "Partnerships for the circular economy: This involves collaborating with business partners or manufacturers to design products that are easier to disassemble, repair, and reuse, ensuring that second-hand merchandise is sellable and does not end up in landfills. Are you engaged in such partnerships:",
        "text_labels":[
            {
                label:"",
                placeholder:"If desired, give one or more example(s) of successful partnership(s) you have achieved:",
                type: "text"
            }
        ],
        "choices": [
            "Yes",
            "No"
        ],
        "choice_orientation":"vertical",
        
        "choice_type": "radio",
        "has_file": false,
    },
]

export const STEPS = [
    {
        "heading":"Environmental",
        "sub_heading":"Sample Text",
    },
    {
        "heading":"Social",
        "sub_heading":"Sample Text",
    },
    {
        "heading":"Governance",
        "sub_heading":"Sample Text",
    },
    {
        "heading":"Sustainable Development Goals", 
        "sub_heading":"Sample Text",
    }

]