# HIPML implementation in Typescript

Install Dependencies
```
npm install
```
Run in Development
```
npm run dev
```

## Integration with HIPML
This project implements [HIPML language spec](https://github.com/vitrayatech/hipml) in Typescript. It also provides an API layer on top of the TypeScript implementation. Using the API, you'll be able to query a PML file for the available keywords as well as you can provide the values for the keywords & run the PML.

Once you run this project API Server will be available at http://localhost:3000 .There are two endpoints which are available on this project.

#### 1.Get Keywords API 
This API will listdown the list of variables which is required for the provided PML file. We'll use this variable list to provide data in the next API.

Endpoint - /pml/{pml_unique_id}/variables

Example in cURL -

Request -
```
curl --request GET 'http://localhost:3000/pml/ABC123DEF456/variables
```
Response - 
```json
{
    "success": true,
    "data": {
        "variables": [
            "Sum Insured",
            "Policy inception Date",
            "Hospitalization start date",
            "Admission Reason",
            "Discharge Date",
            "Patient Nationality",
            "Claim Submission Date",
            "Country of Treatment"
        ]
    }
}
```

#### 2. Execute PML against Variable Data
In this API, we will provide the data against the variables received in the first API.

Endpoint - `/pml/{pml_unique_id}/run`

Example in cURL -

Sample Request -
```
curl --location --request POST 'http://localhost:3000/pml/ABC123DEF456/run' \
--header 'Content-Type: application/json' \
--data-raw ' {
        "Sum Insured": 200000,
        "Policy inception Date": "2018-01-01",
        "Hospitalization start date": "2020-12-01",
        "Discharge Date": "2020-12-06",
        "Patient Nationality": "Indian",
        "Claim Submission Date": "2020-12-01",
        "Country of Treatment": "India",
        "Admission Reason" : "Illness"
}'
```

Sample Response - 

```json
{
    "success": true,
    "data": {
        "Policy Attributes": [
            [
                "Name",
                "Arogya Sanjeevni Policy"
            ],
            [
                "Issuer",
                "Test Insurance Corporation"
            ],
            [
                "UIN",
                "ABC123DEF456"
            ],
            [
                "Type",
                "Medical"
            ],
            [
                "Category",
                "Floater"
            ],
            [
                "Default copay %",
                5
            ],
            [
                "Default waiting period",
                48
            ]
        ],
        "Coverage": {
            "Uterine artery embolization": {
                "included": true,
                "Limit per claim": 100000,
                "type": "Procedure"
            },
            "HIFU": {
                "included": true,
                "Limit per claim": 100000,
                "type": "Procedure"
            },
            "Balloon Sinuplasty": {
                "included": true,
                "Limit per claim": 100000,
                "type": "Procedure"
            },
            "Oral chemotherapy": {
                "included": true,
                "Limit per claim": 100000,
                "type": "Procedure"
            },
            "Robotic surgeries": {
                "included": true,
                "Limit per claim": 100000,
                "type": "Procedure"
            },
            "Stereotactic radio surgeries": {
                "included": true,
                "Limit per claim": 100000,
                "type": "Procedure"
            },
            "Deep Brain stimulation": {
                "included": true,
                "Limit per claim": 100000,
                "type": "Procedure"
            },
            "Intra vitreal injections": {
                "included": true,
                "Limit per claim": 100000,
                "type": "Procedure"
            },
            "Bronchial Thermoplasty": {
                "included": true,
                "Limit per claim": 100000,
                "type": "Procedure"
            },
            "Vaporisation of the prostrate": {
                "included": true,
                "Limit per claim": 100000,
                "type": "Procedure"
            },
            "IONM": {
                "included": true,
                "Limit per claim": 100000,
                "type": "Procedure"
            },
            "Stem Cell therapy": {
                "included": true,
                "Limit per claim": 100000,
                "type": "Procedure"
            },
            "Immunotherapy": {
                "included": true,
                "Limit per claim": 100000,
                "type": "Procedure"
            },
            "Cataract": {
                "included": true,
                "Limit per policy period": 40000,
                "type": "Procedure"
            },
            "Room and Nursing charges": {
                "included": true,
                "Limit per day": 4000,
                "type": "Service"
            },
            "ICU charges": {
                "included": true,
                "Limit per day": 10000,
                "type": "Service"
            },
            "Ambulance Charges": {
                "included": true,
                "Limit per claim": 2000,
                "type": "Service"
            },
            "joint replacement": {
                "included": false,
                "type": "Procedure"
            },
            "Age-related Osteoarthritis and Osteoporosis": {
                "included": false,
                "type": "Procedure"
            },
            "Tonsillectomy": {
                "included": true,
                "type": "Procedure"
            },
            "Adenoidectomy": {
                "included": true,
                "type": "Procedure"
            },
            "Mastoidectomy": {
                "included": true,
                "type": "Procedure"
            },
            "Tympanoplasty": {
                "included": true,
                "type": "Procedure"
            },
            "Hysterectomy": {
                "included": true,
                "type": "Procedure"
            },
            "Hydrocele": {
                "included": true,
                "type": "Procedure"
            },
            "Benign ENT disorders": {
                "included": true,
                "type": "Procedure"
            },
            "Benign prostate hypertrophy": {
                "included": true,
                "type": "Procedure"
            },
            "Gastric Ulcer": {
                "included": true,
                "type": "Procedure"
            },
            "Gout and Rheumatism": {
                "included": true,
                "type": "Procedure"
            },
            "Hernia of all types": {
                "included": true,
                "type": "Procedure"
            },
            "Non Infective Arthritis": {
                "included": true,
                "type": "Procedure"
            },
            "Piles in Anus": {
                "included": true,
                "type": "Procedure"
            },
            "Fissures in Anus": {
                "included": true,
                "type": "Procedure"
            },
            "Fistula in Anus": {
                "included": true,
                "type": "Procedure"
            },
            "Pilonidal sinus": {
                "included": true,
                "type": "Procedure"
            },
            "Sinusitis and related disorders": {
                "included": true,
                "type": "Procedure"
            },
            "Calculi in urinary system": {
                "included": true,
                "type": "Procedure"
            },
            "Gall Bladder and Bile duct": {
                "included": true,
                "type": "Procedure"
            },
            "Prolapse inter Vertebral Disc and Spinal Diseases": {
                "included": true,
                "type": "Procedure"
            },
            "Surgeon Charges": {
                "included": true,
                "type": "Service"
            },
            "Anaesthetist": {
                "included": true,
                "type": "Service"
            },
            "Consultants fees": {
                "included": true,
                "type": "Service"
            },
            "OT Charges": {
                "included": true,
                "type": "Service"
            },
            "Medicines and Drugs": {
                "included": true,
                "type": "Service"
            },
            "Specialist Fees": {
                "included": true,
                "type": "Service"
            },
            "Anaesthesia": {
                "included": true,
                "type": "Service"
            },
            "Blood Charges": {
                "included": true,
                "type": "Service"
            },
            "Oxygen Charges": {
                "included": true,
                "type": "Service"
            },
            "Diagnosis Charges": {
                "included": true,
                "type": "Service"
            },
            "Room rent for attendants": {
                "included": false,
                "type": "Service"
            },
            "Minimally invasive CABG": {
                "included": false,
                "type": "Procedure"
            },
            "Change of Gender": {
                "included": false,
                "type": "Procedure"
            },
            "Infertility Procedures": {
                "included": false,
                "type": "Procedure"
            },
            "Maternity Procedures": {
                "included": false,
                "type": "Procedure"
            },
            "Dental Treatment": {
                "included": false,
                "type": "Procedure"
            },
            "Plastic Surgeries": {
                "included": false,
                "type": "Procedure"
            }
        },
        "Conditions": {
            "Patient Eligibility": true,
            "Claim Admissibility": true
        }
    }
}
```
### How to test APIs against new PMLs - 

You need to follow below steps -

1. Copy your PML file in the `app/pmls` folder. Name of the PML file needs to be unique. Currently we're following `[filename].pml` structure.
2. In the above two APIs, replace path parameter `pml_unique_id` with your unique pml filename & you are ready to go.



