import { L, career, type TypeData } from "../types";

const ISTJ: TypeData = {
  code: "ISTJ",
  label: L("The Organiser", "व्यवस्थापक"),
  tagline: L("Reliable, careful, and gets things right", "भरोसेमंद, सावधान और सही करने वाला"),
  description: L(
    "You are responsible, organised, and like things done properly. People can count on you to keep your word and finish what you start.",
    "आप ज़िम्मेदार, व्यवस्थित हैं और चीज़ें ठीक से करना पसंद करते हैं। लोग भरोसा कर सकते हैं कि आप अपनी बात निभाएँगे और शुरू किया काम पूरा करेंगे।",
  ),
  strengths: [
    L("Responsibility", "ज़िम्मेदारी"),
    L("Attention to detail", "बारीकियों पर ध्यान"),
    L("Discipline", "अनुशासन"),
    L("Reliability", "विश्वसनीयता"),
  ],
  careers: [
    career("Accountant", "लेखाकार", "Keep numbers correct and clear.", "आँकड़े सही और स्पष्ट रखना।"),
    career("Engineer", "इंजीनियर", "Build things that work reliably.", "ऐसी चीज़ें बनाना जो भरोसेमंद ढंग से चलें।"),
    career("Bank Officer", "बैंक अधिकारी", "Manage money carefully.", "पैसों का सावधानी से प्रबंधन करना।"),
    career("Civil Services", "सिविल सेवा", "Serve with order and fairness.", "व्यवस्था और निष्पक्षता से सेवा करना।"),
    career("Doctor", "डॉक्टर", "Follow careful steps to heal.", "इलाज के लिए सावधान कदम उठाना।"),
    career("Auditor", "लेखा परीक्षक", "Check that everything is correct.", "जाँचना कि सब कुछ सही है।"),
    career("Lawyer", "वकील", "Apply rules precisely.", "नियमों को सटीकता से लागू करना।"),
    career("Army / Police Officer", "सेना / पुलिस अधिकारी", "Protect with discipline.", "अनुशासन से रक्षा करना।"),
    career("Pharmacist", "फार्मासिस्ट", "Handle medicines safely.", "दवाइयों को सुरक्षित ढंग से संभालना।"),
    career("Project Coordinator", "परियोजना समन्वयक", "Keep plans on track.", "योजनाओं को सही दिशा में रखना।"),
  ],
  seed: {
    exploreField: L("finance, engineering or administration", "वित्त, इंजीनियरिंग या प्रशासन"),
    roleModel: L("an accountant, engineer or officer", "एक लेखाकार, इंजीनियर या अधिकारी"),
    skill: L("planning and careful record-keeping", "योजना और सावधान रिकॉर्ड रखना"),
    subjects: L("Maths and Science", "गणित और विज्ञान"),
    project: L("plan and run a small budget or organise a tidy system at home", "एक छोटा बजट बनाना और चलाना या घर में एक व्यवस्थित प्रणाली बनाना"),
    showcase: L("a plan or system you set up and kept running well", "कोई योजना या प्रणाली जो आपने बनाई और अच्छे से चलाई"),
  },
};

export default ISTJ;
