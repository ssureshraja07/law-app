// Services add / remove panna inga mattum maathunga, page auto update aagum
export const categories = [
  "All",
  "Criminal",
  "Civil",
  "Property",
  "Family",
  "Appeals & Courts",
  "Business",
  "Consumer & Finance",
  "Other Services",
];

export const services = [
  // ---------- Criminal ----------
  {
    title: "Criminal Defence",
    category: "Criminal",
    text: "Strong defence in all types of criminal cases at every stage, from FIR to trial.",
    points: ["FIR & investigation stage advice", "Trial before Magistrate / Sessions Court", "Cross-examination & evidence"],
  },
  {
    title: "Bail & Anticipatory Bail",
    category: "Criminal",
    text: "Quick legal help to secure regular bail or protection from arrest.",
    points: ["Regular & interim bail", "Anticipatory bail", "Bail cancellation matters"],
  },
  {
    title: "Quashing of FIR",
    category: "Criminal",
    text: "Petitions to quash false or misused FIRs and criminal proceedings.",
    points: ["High Court quashing petitions", "Settlement-based quashing", "Protection from harassment"],
  },
  {
    title: "Cheque Bounce (Sec. 138 NI Act)",
    category: "Criminal",
    text: "Legal notice, complaint filing and trial for dishonoured cheque cases.",
    points: ["Legal notice drafting", "Complaint & trial", "Compromise & recovery"],
  },
  {
    title: "Domestic Violence & 498A",
    category: "Criminal",
    text: "Protection and defence in domestic violence and dowry harassment matters.",
    points: ["Protection orders", "Defence in false cases", "Maintenance & residence rights"],
  },

  // ---------- Appeals & Courts ----------
  {
    title: "Appeals & Revisions",
    category: "Appeals & Courts",
    text: "Challenge unfavourable judgments and orders before higher courts.",
    points: ["Criminal & civil appeals", "Revision petitions", "Second appeals"],
  },
  {
    title: "High Court Matters",
    category: "Appeals & Courts",
    text: "Representation in writ petitions, criminal petitions and civil revisions.",
    points: ["Writ petitions", "Original & appellate side", "Urgent mentions & stay orders"],
  },
  {
    title: "Supreme Court Matters",
    category: "Appeals & Courts",
    text: "Special leave petitions and appeals before the Supreme Court of India.",
    points: ["Special Leave Petitions (SLP)", "Civil & criminal appeals", "Review petitions"],
  },
  {
    title: "Writ Petitions",
    category: "Appeals & Courts",
    text: "Remedies against illegal action by government bodies and authorities.",
    points: ["Habeas corpus, mandamus, certiorari", "Government & department disputes", "Public interest litigation"],
  },

  // ---------- Civil ----------
  {
    title: "Civil Litigation",
    category: "Civil",
    text: "Filing and defending civil suits for money, rights and property disputes.",
    points: ["Suits & written statements", "Injunctions & stay orders", "Execution of decrees"],
  },
  {
    title: "Money Recovery",
    category: "Civil",
    text: "Legal action to recover loans, dues and unpaid amounts.",
    points: ["Legal notice", "Summary suits", "Execution proceedings"],
  },
  {
    title: "Contract Disputes",
    category: "Civil",
    text: "Drafting, review and enforcement of agreements and contract claims.",
    points: ["Breach of contract", "Specific performance", "Damages & compensation"],
  },
  {
    title: "Motor Accident Claims",
    category: "Civil",
    text: "Compensation claims for road accident injury and death cases.",
    points: ["MACT claim filing", "Insurance company negotiation", "Appeals for enhancement"],
  },

  // ---------- Property ----------
  {
    title: "Property Disputes",
    category: "Property",
    text: "Resolving ownership, possession and boundary disputes over land and buildings.",
    points: ["Title & possession suits", "Partition suits", "Encroachment issues"],
  },
  {
    title: "Property Documentation",
    category: "Property",
    text: "Safe and legally correct documents for buying, selling or gifting property.",
    points: ["Sale, gift & settlement deeds", "Registration support", "Encumbrance & patta checks"],
  },
  {
    title: "Title Verification",
    category: "Property",
    text: "Detailed legal check of property papers before you buy.",
    points: ["Legal opinion on title", "Chain of documents review", "Risk report"],
  },
  {
    title: "Tenancy & Eviction",
    category: "Property",
    text: "Rent agreements, eviction cases and tenant-landlord disputes.",
    points: ["Rent control matters", "Eviction petitions", "Rent agreements"],
  },
  {
    title: "Wills & Succession",
    category: "Property",
    text: "Will drafting, probate and legal heir matters for smooth transfer of property.",
    points: ["Will drafting & registration", "Probate & succession certificate", "Legal heir certificate"],
  },

  // ---------- Family ----------
  {
    title: "Divorce",
    category: "Family",
    text: "Sensitive handling of mutual consent and contested divorce cases.",
    points: ["Mutual consent divorce", "Contested divorce", "Restitution of conjugal rights"],
  },
  {
    title: "Child Custody & Maintenance",
    category: "Family",
    text: "Protecting the welfare of children and securing fair maintenance.",
    points: ["Custody & visitation", "Child & spouse maintenance", "Guardianship"],
  },
  {
    title: "Adoption & Guardianship",
    category: "Family",
    text: "Legal support for adoption procedures and guardianship applications.",
    points: ["Adoption petitions", "Guardian appointment", "Documentation help"],
  },

  // ---------- Business ----------
  {
    title: "Company Registration & Compliance",
    category: "Business",
    text: "Starting and running a business legally without compliance trouble.",
    points: ["Pvt Ltd, LLP & partnership", "GST & ROC compliance", "Shareholder agreements"],
  },
  {
    title: "Arbitration & Mediation",
    category: "Business",
    text: "Faster, cost-effective resolution of business disputes outside court.",
    points: ["Arbitration proceedings", "Mediation & settlement", "Enforcement of awards"],
  },
  {
    title: "Labour & Employment",
    category: "Business",
    text: "Legal help for employees and employers on service and labour issues.",
    points: ["Wrongful termination", "Labour court cases", "Employment contracts & policies"],
  },
  {
    title: "Intellectual Property",
    category: "Business",
    text: "Protect your brand, creations and ideas.",
    points: ["Trademark registration", "Copyright", "Infringement notices"],
  },

  // ---------- Consumer & Finance ----------
  {
    title: "Consumer Protection",
    category: "Consumer & Finance",
    text: "Complaints against unfair service, defective products and insurance claim rejection.",
    points: ["Consumer forum complaints", "Insurance claim disputes", "Refund & compensation"],
  },
  {
    title: "Banking & Loan Recovery",
    category: "Consumer & Finance",
    text: "Help with bank disputes, loan recovery and SARFAESI proceedings.",
    points: ["DRT & SARFAESI cases", "Loan settlement", "Bank fraud complaints"],
  },
  {
    title: "Insolvency & Bankruptcy",
    category: "Consumer & Finance",
    text: "Representation for creditors and debtors under IBC.",
    points: ["NCLT proceedings", "Debt resolution", "Creditor claims"],
  },
  {
    title: "Income Tax & GST Matters",
    category: "Consumer & Finance",
    text: "Replies to notices, appeals and tax dispute representation.",
    points: ["Notice replies", "Appeals before tribunals", "Tax advisory"],
  },

  // ---------- Other ----------
  {
    title: "Legal Notices & Drafting",
    category: "Other Services",
    text: "Properly drafted notices, replies, affidavits and agreements.",
    points: ["Legal notice & reply", "Affidavits & declarations", "Agreements & deeds"],
  },
  {
    title: "Notary & Documentation",
    category: "Other Services",
    text: "Attestation and legal documentation support.",
    points: ["Notarisation", "Power of attorney", "Name change & gazette"],
  },
  {
    title: "Cyber Crime & Online Fraud",
    category: "Other Services",
    text: "Legal action for online fraud, data misuse and cyber harassment.",
    points: ["Cyber complaint filing", "Online fraud recovery", "Defamation & social media issues"],
  },
  {
    title: "Service Matters & RTI",
    category: "Other Services",
    text: "Help for government employees and RTI applications.",
    points: ["Service tribunal cases", "Pension & promotion disputes", "RTI drafting & appeals"],
  },
  {
    title: "General Legal Consultation",
    category: "Other Services",
    text: "Not sure what kind of case you have? Talk to us and get clear direction.",
    points: ["Case assessment", "Document review", "Step-by-step legal guidance"],
  },
];