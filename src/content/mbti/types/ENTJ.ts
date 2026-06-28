import { L, career, type TypeData } from "../types";

const ENTJ: TypeData = {
  code: "ENTJ",
  label: L("The Leader", "नेता"),
  tagline: L("Takes charge and gets things done", "ज़िम्मेदारी लेता है और काम पूरा करता है"),
  description: L(
    "You like to lead, organise people, and reach big goals. You are confident making decisions and helping a team move forward.",
    "आपको नेतृत्व करना, लोगों को संगठित करना और बड़े लक्ष्य पाना पसंद है। आप निर्णय लेने और टीम को आगे बढ़ाने में आत्मविश्वासी हैं।",
  ),
  strengths: [
    L("Leadership", "नेतृत्व"),
    L("Clear decision-making", "स्पष्ट निर्णय-क्षमता"),
    L("Organising people and plans", "लोगों और योजनाओं को व्यवस्थित करना"),
    L("Confidence", "आत्मविश्वास"),
  ],
  careers: [
    career("Business Manager", "व्यवसाय प्रबंधक", "Lead teams to reach goals.", "लक्ष्यों तक पहुँचने के लिए टीमों का नेतृत्व करना।"),
    career("Entrepreneur", "उद्यमी", "Start and grow your own company.", "अपनी कंपनी शुरू करना और बढ़ाना।"),
    career("Lawyer", "वकील", "Argue and lead a case to victory.", "किसी मुक़दमे को तर्क से जीत तक पहुँचाना।"),
    career("Civil Services (IAS/IPS)", "सिविल सेवा (आईएएस/आईपीएस)", "Lead and serve at a large scale.", "बड़े स्तर पर नेतृत्व और सेवा करना।"),
    career("Project Manager", "परियोजना प्रबंधक", "Make sure big projects finish well.", "बड़े प्रोजेक्ट अच्छे से पूरे कराना।"),
    career("Army Officer", "सेना अधिकारी", "Lead with discipline and courage.", "अनुशासन और साहस के साथ नेतृत्व करना।"),
    career("Investment Banker", "निवेश बैंकर", "Make big financial decisions.", "बड़े वित्तीय निर्णय लेना।"),
    career("Politician / Public Leader", "राजनेता / जन नेता", "Lead change in society.", "समाज में बदलाव का नेतृत्व करना।"),
    career("Sports Captain / Coach", "खेल कप्तान / कोच", "Lead a team to win.", "टीम को जीत की ओर ले जाना।"),
    career("CEO", "सीईओ", "Set the direction for a whole company.", "पूरी कंपनी की दिशा तय करना।"),
  ],
  seed: {
    exploreField: L("business, leadership or public service", "व्यवसाय, नेतृत्व या जनसेवा"),
    roleModel: L("a business leader, officer or captain", "एक व्यवसायी नेता, अधिकारी या कप्तान"),
    skill: L("planning, public speaking and teamwork", "योजना, सार्वजनिक भाषण और टीम-वर्क"),
    subjects: L("Maths, English and Social Studies", "गणित, अंग्रेज़ी और सामाजिक अध्ययन"),
    project: L("organise a small event, club or team activity and lead it", "एक छोटा आयोजन, क्लब या टीम गतिविधि आयोजित कर उसका नेतृत्व करना"),
    showcase: L("an event or team you organised and led", "कोई आयोजन या टीम जिसे आपने आयोजित और नेतृत्व किया"),
  },
};

export default ENTJ;
