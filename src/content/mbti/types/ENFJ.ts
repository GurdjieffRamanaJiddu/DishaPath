import { L, career, type TypeData } from "../types";

const ENFJ: TypeData = {
  code: "ENFJ",
  label: L("The Mentor", "प्रेरक"),
  tagline: L("Brings people together and lifts them up", "लोगों को जोड़ता और आगे बढ़ाता है"),
  description: L(
    "You are warm, encouraging, and great with people. You love helping others do their best and naturally bring a group together.",
    "आप गर्मजोश, प्रोत्साहित करने वाले और लोगों के साथ बेहतरीन हैं। आपको दूसरों को उनका सर्वश्रेष्ठ करने में मदद करना पसंद है और आप स्वाभाविक रूप से समूह को जोड़ते हैं।",
  ),
  strengths: [
    L("Encouraging others", "दूसरों को प्रोत्साहित करना"),
    L("Communication", "संवाद-कुशलता"),
    L("Teamwork", "टीम-वर्क"),
    L("Empathy and warmth", "सहानुभूति और गर्मजोशी"),
  ],
  careers: [
    career("Teacher", "शिक्षक", "Inspire and guide students.", "विद्यार्थियों को प्रेरित और मार्गदर्शन देना।"),
    career("Doctor / Nurse", "डॉक्टर / नर्स", "Care for people with warmth.", "गर्मजोशी से लोगों की देखभाल करना।"),
    career("Counsellor", "काउंसलर", "Support people through challenges.", "चुनौतियों में लोगों का साथ देना।"),
    career("HR Manager", "एचआर प्रबंधक", "Help people grow at work.", "कार्यस्थल पर लोगों को आगे बढ़ने में मदद करना।"),
    career("Lawyer for social causes", "सामाजिक मुद्दों के वकील", "Fight for people's rights.", "लोगों के अधिकारों के लिए लड़ना।"),
    career("Public Speaker / Trainer", "वक्ता / प्रशिक्षक", "Motivate and teach groups.", "समूहों को प्रेरित और प्रशिक्षित करना।"),
    career("NGO / Community Leader", "एनजीओ / सामुदायिक नेता", "Lead projects that help society.", "समाज की मदद करने वाली परियोजनाओं का नेतृत्व।"),
    career("Politician / Public Servant", "राजनेता / लोक सेवक", "Serve and lead communities.", "समुदायों की सेवा और नेतृत्व करना।"),
    career("TV / Radio Host", "टीवी / रेडियो होस्ट", "Connect with a wide audience.", "बड़े दर्शकों से जुड़ना।"),
    career("Event Manager", "इवेंट प्रबंधक", "Bring people together for big moments.", "बड़े पलों के लिए लोगों को एक साथ लाना।"),
  ],
  seed: {
    exploreField: L("teaching, healthcare or community work", "शिक्षण, स्वास्थ्य या सामुदायिक कार्य"),
    roleModel: L("a teacher, doctor or community leader", "एक शिक्षक, डॉक्टर या सामुदायिक नेता"),
    skill: L("public speaking and teamwork", "सार्वजनिक भाषण और टीम-वर्क"),
    subjects: L("English, Hindi and Social Studies", "अंग्रेज़ी, हिंदी और सामाजिक अध्ययन"),
    project: L("organise a group activity or help-drive that brings classmates together for a good cause", "एक समूह गतिविधि या सहायता-अभियान आयोजित करना जो किसी अच्छे काम के लिए सहपाठियों को जोड़े"),
    showcase: L("a team activity you led that helped others", "कोई टीम गतिविधि जो आपने चलाई और जिसने दूसरों की मदद की"),
  },
};

export default ENFJ;
