import { L, career, type TypeData } from "../types";

const ISTP: TypeData = {
  code: "ISTP",
  label: L("The Maker", "निर्माता"),
  tagline: L("Hands-on, calm, and great at fixing things", "व्यावहारिक, शांत और चीज़ें ठीक करने में माहिर"),
  description: L(
    "You love understanding how things work by taking them apart and fixing them. You stay calm under pressure and learn best by doing.",
    "आपको चीज़ों को खोलकर और ठीक करके यह समझना पसंद है कि वे कैसे काम करती हैं। आप दबाव में शांत रहते हैं और करके सबसे अच्छा सीखते हैं।",
  ),
  strengths: [
    L("Practical problem-solving", "व्यावहारिक समस्या-समाधान"),
    L("Staying calm", "शांत रहना"),
    L("Working with hands", "हाथों से काम करना"),
    L("Understanding how things work", "चीज़ों की कार्यप्रणाली समझना"),
  ],
  careers: [
    career("Mechanical Engineer", "मैकेनिकल इंजीनियर", "Design and fix machines.", "मशीनें डिज़ाइन और ठीक करना।"),
    career("Pilot", "पायलट", "Fly aircraft skilfully.", "विमान कुशलता से उड़ाना।"),
    career("Electrician / Technician", "इलेक्ट्रीशियन / तकनीशियन", "Build and repair systems.", "सिस्टम बनाना और मरम्मत करना।"),
    career("Software Developer", "सॉफ़्टवेयर डेवलपर", "Build and debug programs.", "प्रोग्राम बनाना और सुधारना।"),
    career("Automobile Engineer", "ऑटोमोबाइल इंजीनियर", "Design vehicles.", "वाहन डिज़ाइन करना।"),
    career("Surgeon", "सर्जन", "Use steady hands to heal.", "स्थिर हाथों से इलाज करना।"),
    career("Robotics Engineer", "रोबोटिक्स इंजीनियर", "Build robots and machines.", "रोबोट और मशीनें बनाना।"),
    career("Carpenter / Craftsperson", "बढ़ई / शिल्पकार", "Make things with skill.", "कौशल से चीज़ें बनाना।"),
    career("Sports Player", "खिलाड़ी", "Master a physical skill.", "किसी शारीरिक कौशल में महारत।"),
    career("Civil Engineer", "सिविल इंजीनियर", "Build roads and bridges.", "सड़कें और पुल बनाना।"),
  ],
  seed: {
    exploreField: L("engineering, mechanics or sports", "इंजीनियरिंग, मशीनरी या खेल"),
    roleModel: L("an engineer, technician or pilot", "एक इंजीनियर, तकनीशियन या पायलट"),
    skill: L("building and fixing things by hand", "हाथों से चीज़ें बनाना और ठीक करना"),
    subjects: L("Maths, Physics and Science", "गणित, भौतिकी और विज्ञान"),
    project: L("build, repair or assemble something real, a model, gadget or simple machine", "कुछ असली बनाना, ठीक करना या जोड़ना, एक मॉडल, गैजेट या सरल मशीन"),
    showcase: L("something you built or fixed with your hands", "कुछ जो आपने अपने हाथों से बनाया या ठीक किया"),
  },
};

export default ISTP;
