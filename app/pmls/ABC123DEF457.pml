`// Policy Template
Policy Attributes:
  Name: "Arogya Sanjeevni Policy"
  Issuer: "Test Insurance Corporation"
  UIN: "ABC123DEF457"
  Type: "Medical"
  Category: "Individual"
  Default copay %: 10
  Default waiting period: 48

Coverage:
  Prc(CABG):
    Limit per policy period: Amt(1,00,000)
  Dgn(Heart diseases), Prc(Cancer Treatments):
    Limit per person: whichever is lower of 2% of Var(Sum Insured) and Amt(5,00,000)
  Prc(Uterine artery embolization) , Prc(HIFU) , Prc(Balloon Sinuplasty), Prc(Oral chemotherapy), Prc(Robotic surgeries)
  ,Prc(Stereotactic radio surgeries):
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

  Prc(Tonsillectomy), Prc(Adenoidectomy), Prc(Mastoidectomy), Prc(Tympanoplasty), Prc(Hysterectomy), Prc(Hydrocele):
    Included only if:
      Number of months between Var(Policy inception Date) and Var(Hospitalization start date) is greater than 24

  Svc(Surgeon Charges), Svc(Anaesthetist), Svc(Consultants fees), Svc(OT Charges), Svc(Medicines and Drugs):
      Included only if:
        Number of days between Var(Hospitalization start date) and Var(Discharge Date) is greater than 1


Exclusions:
  Svc(Room rent for attendants)
  Prc(Minimally invasive CABG)
  Prc(Change of Gender)
  Prc(Infertility Procedures)
  Prc(Maternity Procedures)

Conditions:
    Claim Admissibility:
      Number of days between Var(Policy inception Date) and Var(Claim Submission Date) >= 0
        and Var(Country of Treatment) is "India"
        and Number of days between Var(Policy inception Date) and Var(Hospitalization start date) >= 15
`
