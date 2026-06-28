import { L, career, type TypeData } from "../types";

const ESTJ: TypeData = {
  code: "ESTJ",
  label: L("The Manager", "प्रबंधक"),
  tagline: L("Organised, fair, and a natural in charge", "व्यवस्थित, निष्पक्ष और स्वाभाविक प्रभारी"),
  description: L(
    "You like clear rules, order, and getting results. You are good at organising people and making sure tasks are done on time and done right.",
    "आपको स्पष्ट नियम, व्यवस्था और परिणाम पसंद हैं। आप लोगों को संगठित करने और यह सुनिश्चित करने में अच्छे हैं कि काम समय पर और सही हो।",
  ),
  strengths: [
    L("Organising tasks", "कार्यों को व्यवस्थित करना"),
    L("Leadership", "नेतृत्व"),
    L("Sense of fairness", "न्याय की भावना"),
    L("Getting results", "परिणाम लाना"),
  ],
  careers: [
    career("Business Administrator", "व्यवसाय प्रशासक", "Run organisations smoothly.", "संगठनों को सुचारू रूप से चलाना।"),
    career("Bank / Finance Manager", "बैंक / वित्त प्रबंधक", "Manage money and teams.", "पैसे और टीमों का प्रबंधन करना।"),
    career("Civil Services (IAS)", "सिविल सेवा (आईएएस)", "Lead public administration.", "लोक प्रशासन का नेतृत्व करना।"),
    career("Army / Police Officer", "सेना / पुलिस अधिकारी", "Lead with discipline.", "अनुशासन से नेतृत्व करना।"),
    career("Lawyer / Judge", "वकील / न्यायाधीश", "Uphold rules and fairness.", "नियमों और निष्पक्षता को बनाए रखना।"),
    career("Project Manager", "परियोजना प्रबंधक", "Deliver projects on time.", "परियोजनाएँ समय पर पूरी कराना।"),
    career("School Principal", "स्कूल प्रधानाचार्य", "Lead a school well.", "स्कूल का अच्छा नेतृत्व करना।"),
    career("Operations Manager", "संचालन प्रबंधक", "Keep everything running.", "हर चीज़ को चलाते रहना।"),
    career("Entrepreneur", "उद्यमी", "Build and run a business.", "व्यवसाय बनाना और चलाना।"),
    career("Sports Coach", "खेल प्रशिक्षक", "Train a team to win.", "टीम को जीत के लिए प्रशिक्षित करना।"),
  ],
  seed: {
    exploreField: L("management, administration or law", "प्रबंधन, प्रशासन या कानून"),
    roleModel: L("a manager, officer or administrator", "एक प्रबंधक, अधिकारी या प्रशासक"),
    skill: L("organising and leading a team", "टीम को व्यवस्थित और नेतृत्व करना"),
    subjects: L("Maths, Social Studies and English", "गणित, सामाजिक अध्ययन और अंग्रेज़ी"),
    project: L("take charge of organising a class event or team with clear roles and a schedule", "स्पष्ट भूमिकाओं और समय-सारणी के साथ किसी कक्षा आयोजन या टीम को व्यवस्थित करने की ज़िम्मेदारी लेना"),
    showcase: L("an event or team you organised and delivered", "कोई आयोजन या टीम जिसे आपने व्यवस्थित कर पूरा किया"),
  },
};

export default ESTJ;
