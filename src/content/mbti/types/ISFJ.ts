import { L, career, type TypeData } from "../types";

const ISFJ: TypeData = {
  code: "ISFJ",
  label: L("The Helper", "सहायक"),
  tagline: L("Caring, dependable, and quietly strong", "देखभाल करने वाला, भरोसेमंद और शांत रूप से मज़बूत"),
  description: L(
    "You are kind, patient, and always ready to help. You remember the little things that matter to people and take good care of those around you.",
    "आप दयालु, धैर्यवान हैं और हमेशा मदद के लिए तैयार रहते हैं। आप लोगों के लिए मायने रखने वाली छोटी बातें याद रखते हैं और अपने आसपास वालों का अच्छा ख्याल रखते हैं।",
  ),
  strengths: [
    L("Caring for others", "दूसरों की देखभाल"),
    L("Patience", "धैर्य"),
    L("Dependability", "भरोसेमंदी"),
    L("Good memory for details", "बारीकियों की अच्छी याददाश्त"),
  ],
  careers: [
    career("Nurse", "नर्स", "Care for patients with kindness.", "मरीज़ों की दयालुता से देखभाल करना।"),
    career("Teacher", "शिक्षक", "Patiently guide students.", "धैर्य से विद्यार्थियों का मार्गदर्शन करना।"),
    career("Doctor", "डॉक्टर", "Heal and support people.", "लोगों को ठीक करना और सहारा देना।"),
    career("Counsellor", "काउंसलर", "Listen and help quietly.", "शांति से सुनना और मदद करना।"),
    career("Social Worker", "सामाजिक कार्यकर्ता", "Support families and communities.", "परिवारों और समुदायों की सहायता करना।"),
    career("Dietitian / Nutritionist", "आहार विशेषज्ञ", "Help people stay healthy.", "लोगों को स्वस्थ रहने में मदद करना।"),
    career("Librarian", "पुस्तकालयाध्यक्ष", "Organise and share knowledge.", "ज्ञान को व्यवस्थित और साझा करना।"),
    career("Administrator", "प्रशासक", "Keep things running smoothly.", "चीज़ों को सुचारू रूप से चलाना।"),
    career("Physiotherapist", "फिजियोथेरेपिस्ट", "Help people recover and move.", "लोगों को ठीक होने और चलने में मदद करना।"),
    career("Veterinary Assistant", "पशु चिकित्सा सहायक", "Care for animals.", "जानवरों की देखभाल करना।"),
  ],
  seed: {
    exploreField: L("healthcare, teaching or caregiving", "स्वास्थ्य, शिक्षण या देखभाल"),
    roleModel: L("a nurse, teacher or doctor", "एक नर्स, शिक्षक या डॉक्टर"),
    skill: L("listening and helping carefully", "ध्यान से सुनना और मदद करना"),
    subjects: L("Science, Biology and English", "विज्ञान, जीव विज्ञान और अंग्रेज़ी"),
    project: L("help organise a care activity for family, elders or younger children", "परिवार, बुज़ुर्गों या छोटे बच्चों के लिए एक देखभाल गतिविधि आयोजित करने में मदद करना"),
    showcase: L("a caring activity you helped run", "कोई देखभाल गतिविधि जिसे चलाने में आपने मदद की"),
  },
};

export default ISFJ;
