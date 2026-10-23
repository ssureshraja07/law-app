// Lawyer oda ella details-um inga maathunga, About page auto update aagum.
// Images maathanum na src/images/ la same name la overwrite pannunga.
import lawyerImg from "../images/lawyer.png";
import profileBanner from "../images/lawyer.png";
import officeImg from "../images/office.png";
import team1 from "../images/team1.png";
import team2 from "../images/team2.png";
import team3 from "../images/team3.png";

export const lawyer = {
  name: "Adv. Your Name",
  designation: "Advocate & Legal Consultant",
  firm: "Your Name & Associates",
  photo: lawyerImg,
  officePhoto: officeImg,
  enrollmentNo: "TN/0000/2010", // Bar Council enrollment number
  barCouncil: "Bar Council of Tamil Nadu & Puducherry",
  experience: "15+ Years",
  languages: "Tamil, English, Hindi",
  location: "Madurai, Tamil Nadu",
  quote: "Law is not only about winning a case. It is about standing by people when they need it most.",
  bio: [
    "Adv. Your Name is an experienced advocate practising in the District Courts and the Madras High Court, Madurai Bench. Over the last 15 years, he has handled criminal, civil, property and family matters for individuals, families and businesses.",
    "His approach is simple: understand the client's problem fully, explain the legal options honestly, and prepare every case with care. Clients value his clear communication and regular updates after every hearing.",
  ],
};

export const education = [
  { title: "LL.B. (Bachelor of Laws)", place: "Your Law College, University Name", year: "2008" },
  { title: "B.A. / B.Com.", place: "Your College, University Name", year: "2005" },
  { title: "Diploma in Cyber Law (optional)", place: "Institute Name", year: "2012" },
];

export const practiceCourts = [
  "Madras High Court, Madurai Bench",
  "District & Sessions Courts",
  "Magistrate & Munsif Courts",
  "Consumer Forums",
  "Revenue & Tribunal Courts",
];

export const timeline = [
  { year: "2010", title: "Enrolled as Advocate", text: "Started practice under a senior advocate in the district courts." },
  { year: "2013", title: "Independent Practice", text: "Opened own chambers and began handling criminal and civil matters." },
  { year: "2017", title: "High Court Practice", text: "Began regular appearances before the High Court Bench." },
  { year: "2020", title: "Team Expansion", text: "Built a team of junior advocates and legal associates." },
  { year: "2024", title: "Online Consultations", text: "Started phone and video consultations for clients across the state." },
];

export const values = [
  { title: "Integrity", text: "Honest advice, even when it is not what you hope to hear." },
  { title: "Confidentiality", text: "Everything you share with us stays strictly private." },
  { title: "Dedication", text: "Every case gets full preparation, big or small." },
  { title: "Communication", text: "Regular updates in simple language, in Tamil or English." },
];

export const awards = [
  "Best Advocate Award, Local Bar Association (Year)",
  "Certificate of Appreciation for Free Legal Aid Service",
  "Member, Madurai Bar Association",
  "Legal Awareness Speaker, Community Programmes",
];

export const team = [
  { name: "Adv. Junior One", role: "Associate, Criminal Law", img: team1 },
  { name: "Adv. Junior Two", role: "Associate, Civil & Property", img: team2 },
  { name: "Adv. Junior Three", role: "Associate, Family Law", img: team3 },
];

// ---------- Profile page data ----------
export const profileBanner_ = profileBanner;

export const profileIntro = {
  headline: "Who is Adv. Your Name?",
  paragraphs: [
    "Adv. Your Name is a practising advocate with over 15 years of experience in the District Courts and the Madras High Court, Madurai Bench. He is known for thorough case preparation, clear communication and a calm, practical approach to even the most stressful disputes.",
    "Born and raised in Madurai, he chose law to help ordinary people understand and protect their rights. Today he leads a team of advocates and associates who handle criminal, civil, property, family and business matters.",
  ],
};

export const expertise = [
  { name: "Criminal Law", level: 95 },
  { name: "Civil Litigation", level: 90 },
  { name: "Property & Land Law", level: 90 },
  { name: "Family & Matrimonial Law", level: 85 },
  { name: "Cheque Bounce & Recovery", level: 85 },
  { name: "Writ & Constitutional Matters", level: 80 },
];

export const career = [
  {
    role: "Founder & Senior Advocate",
    org: "Your Name & Associates",
    period: "2013 - Present",
    text: "Leads the firm and personally handles criminal, civil and High Court matters.",
  },
  {
    role: "Junior Advocate",
    org: "Chambers of Senior Advocate (Name)",
    period: "2010 - 2013",
    text: "Trained in trial work, drafting and court procedure under a senior advocate.",
  },
  {
    role: "Panel Advocate (Legal Aid)",
    org: "District Legal Services Authority",
    period: "2014 - 2018",
    text: "Provided free legal assistance to eligible citizens.",
  },
];

// Client details confidential, so only general case types and outcomes
export const notableMatters = [
  { title: "Property Partition Suit", text: "Secured a favourable decree for a family in a long-pending partition dispute." },
  { title: "Criminal Appeal", text: "Obtained acquittal on appeal after conviction by the trial court." },
  { title: "Cheque Bounce Recovery", text: "Recovered the full amount for a small business owner through trial and compromise." },
  { title: "Consumer Complaint", text: "Won compensation for a client against an insurance company for a wrongly rejected claim." },
];

export const publications = [
  { type: "Article", title: "Know Your Rights During a Police Arrest", where: "Local Daily Newspaper, 2023" },
  { type: "Talk", title: "Legal Awareness for Women", where: "Arts College, Madurai, 2022" },
  { type: "Workshop", title: "Property Documents Every Buyer Should Check", where: "Residents' Association, 2024" },
];

export const workSteps = [
  { title: "Consultation", text: "We listen to your problem and understand your goal." },
  { title: "Case Study", text: "We review your documents and the legal position." },
  { title: "Strategy", text: "We explain your options, the likely time and the cost." },
  { title: "Representation", text: "We appear for you and update you after every hearing." },
];