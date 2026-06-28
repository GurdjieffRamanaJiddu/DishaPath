import { L, career, type TypeData } from "../types";

const ESTP: TypeData = {
  code: "ESTP",
  label: L("The Doer", "कर्मठ"),
  tagline: L("Bold, active, and loves a challenge", "साहसी, सक्रिय और चुनौती का शौकीन"),
  description: L(
    "You are energetic, brave, and love action. You think fast, enjoy real-world challenges, and learn best by jumping in and trying.",
    "आप ऊर्जावान, बहादुर हैं और कर्म पसंद करते हैं। आप तेज़ सोचते हैं, वास्तविक चुनौतियों का आनंद लेते हैं और कूदकर आज़माकर सबसे अच्छा सीखते हैं।",
  ),
  strengths: [
    L("Quick action", "त्वरित कार्य"),
    L("Courage", "साहस"),
    L("Practical thinking", "व्यावहारिक सोच"),
    L("Energy", "ऊर्जा"),
  ],
  careers: [
    career("Entrepreneur", "उद्यमी", "Spot chances and act fast.", "अवसर पहचानना और तेज़ी से काम करना।"),
    career("Sports Player", "खिलाड़ी", "Compete and win.", "प्रतिस्पर्धा करना और जीतना।"),
    career("Pilot", "पायलट", "Handle fast, real situations.", "तेज़, वास्तविक परिस्थितियाँ संभालना।"),
    career("Police / Army Officer", "पुलिस / सेना अधिकारी", "Act bravely to protect.", "रक्षा के लिए बहादुरी से काम करना।"),
    career("Surgeon / Paramedic", "सर्जन / पैरामेडिक", "Make quick, life-saving moves.", "त्वरित, जीवनरक्षक कदम उठाना।"),
    career("Sales / Business Lead", "बिक्री / व्यवसाय प्रमुख", "Persuade and close deals.", "मनाना और सौदे पूरे करना।"),
    career("Adventure / Sports Coach", "एडवेंचर / खेल प्रशिक्षक", "Lead active, outdoor work.", "सक्रिय, बाहरी कार्य का नेतृत्व।"),
    career("Firefighter", "अग्निशामक", "Act fast in emergencies.", "आपात स्थिति में तेज़ी से कार्य करना।"),
    career("Event / Stunt Performer", "इवेंट / स्टंट कलाकार", "Thrive on live action.", "लाइव एक्शन में निखरना।"),
    career("Chef", "शेफ़", "Work fast in a busy kitchen.", "व्यस्त रसोई में तेज़ी से काम करना।"),
  ],
  seed: {
    exploreField: L("sports, business or emergency services", "खेल, व्यवसाय या आपातकालीन सेवाएँ"),
    roleModel: L("an athlete, entrepreneur or officer", "एक खिलाड़ी, उद्यमी या अधिकारी"),
    skill: L("a sport or a quick hands-on skill", "कोई खेल या त्वरित व्यावहारिक कौशल"),
    subjects: L("Maths, Science and Physical Education", "गणित, विज्ञान और शारीरिक शिक्षा"),
    project: L("take on a real challenge, a sport, a sale, or organising an active event", "एक असली चुनौती लेना, कोई खेल, बिक्री, या एक सक्रिय आयोजन की व्यवस्था"),
    showcase: L("a challenge you took on and completed", "कोई चुनौती जो आपने ली और पूरी की"),
  },
};

export default ESTP;
