`
// Policy Template
Policy Attributes:
  Name: "Arogya Sanjeevni Policy"
  Issuer: "Test Insurance Corporation"
  UIN: "ABC123DEF456"
  Type: "Medical"
  Category: "Floater"
  Default copay %: 5
  Default waiting period: 48

Coverage:
  Prc(Uterine artery embolization) , Prc(HIFU) , Prc(Balloon Sinuplasty), Prc(Oral chemotherapy), Prc(Robotic surgeries)
  ,Prc(Stereotactic radio surgeries), Prc(Deep Brain stimulation), Prc(Intra vitreal injections), Prc(Bronchial Thermoplasty)
  ,Prc(Vaporisation of the prostrate), Prc(IONM), Prc(Stem Cell therapy), Prc(Immunotherapy):
    Limit per claim: 50% of Var(Sum Insured)

  Prc(Cataract):
    Limit per policy period: whichever is lower of 25% of Var(Sum Insured) and Amt(40,000)
    Included only if:
      Number of months between Var(Policy inception Date) and Var(Hospitalization start date) is greater than 24

  Svc(Room and Nursing charges):
    Limit per day : whichever is lower of 2% of Var(Sum Insured) and Amt(5,000)
  Svc(ICU charges):
    Limit per day : whichever is lower of 5% of Var(Sum Insured) and Amt(10,000)
  Svc(Ambulance Charges):
    Limit per claim : Amt(2,000)

  Prc(joint replacement), Prc(Age-related Osteoarthritis and Osteoporosis):
    Included only if:
      Number of months between Var(Policy inception Date) and Var(Hospitalization start date) is greater than 48

  Prc(Tonsillectomy), Prc(Adenoidectomy), Prc(Mastoidectomy), Prc(Tympanoplasty), Prc(Hysterectomy), Prc(Hydrocele), Prc(Benign ENT disorders)
  , Prc(Benign prostate hypertrophy), Prc(Gastric Ulcer), Prc(Gout and Rheumatism), Prc(Hernia of all types), Prc(Non Infective Arthritis)
  , Prc(Piles in Anus), Prc(Fissures in Anus), Prc(Fistula in Anus), Prc(Pilonidal sinus), Prc(Sinusitis and related disorders), Prc(Calculi in urinary system)
  , Prc(Gall Bladder and Bile duct):
    Included only if:
      Number of months between Var(Policy inception Date) and Var(Hospitalization start date) is greater than 24

  Prc(Prolapse inter Vertebral Disc and Spinal Diseases):
    Included only if:
      Number of months between Var(Policy inception Date) and Var(Hospitalization start date) is greater than 24 and
      Var(Admission Reason) is not "Accident"

  Svc(Surgeon Charges), Svc(Anaesthetist), Svc(Consultants fees), Svc(OT Charges), Svc(Medicines and Drugs), Svc(Specialist Fees), Svc(Anaesthesia)
  , Svc(Blood Charges), Svc(Oxygen Charges), Svc(Diagnosis Charges):
      Included only if:
        Number of days between Var(Hospitalization start date) and Var(Discharge Date) is greater than 1


Exclusions:
  Svc(Room rent for attendants)
  Prc(Minimally invasive CABG)
  Prc(Change of Gender)
  Prc(Infertility Procedures)
  Prc(Maternity Procedures)

  Prc(Dental Treatment), Prc(Plastic Surgeries):
    Excluded unless:
       Var(Admission Reason) is "Illnes"


Conditions:
    Patient Eligibility:
      Var(Patient Nationality) is "Indian"
    Claim Admissibility:
      Number of days between Var(Policy inception Date) and Var(Claim Submission Date) >= 0
        and Var(Country of Treatment) is "India"
        and Number of days between Var(Policy inception Date) and Var(Hospitalization start date) >= 15

`
