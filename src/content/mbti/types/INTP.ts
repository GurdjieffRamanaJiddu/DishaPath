import { L, career, type TypeData } from "../types";

const INTP: TypeData = {
  code: "INTP",
  label: L("The Thinker", "विचारक"),
  tagline: L("Curious about how everything works", "हर चीज़ कैसे काम करती है, यह जानने को उत्सुक"),
  description: L(
    "You ask 'why' and 'how' about everything and love figuring things out. You enjoy ideas, puzzles, and inventing your own explanations.",
    "आप हर चीज़ के बारे में 'क्यों' और 'कैसे' पूछते हैं और चीज़ें सुलझाना पसंद करते हैं। आपको विचार, पहेलियाँ और अपनी व्याख्याएँ बनाना अच्छा लगता है।",
  ),
  strengths: [
    L("Deep curiosity", "गहरी जिज्ञासा"),
    L("Creative problem-solving", "रचनात्मक समस्या-समाधान"),
    L("Logical thinking", "तार्किक सोच"),
    L("Learning on your own", "स्वयं सीखना"),
  ],
  careers: [
    career("Computer Programmer", "कंप्यूटर प्रोग्रामर", "Solve puzzles by writing code.", "कोड लिखकर पहेलियाँ हल करना।"),
    career("Physicist", "भौतिक विज्ञानी", "Understand the deepest rules of nature.", "प्रकृति के सबसे गहरे नियम समझना।"),
    career("Mathematician", "गणितज्ञ", "Explore patterns and prove ideas.", "पैटर्न खोजना और विचार सिद्ध करना।"),
    career("Research Analyst", "शोध विश्लेषक", "Dig into information to find answers.", "उत्तर खोजने के लिए जानकारी की गहराई में जाना।"),
    career("AI / Machine Learning Engineer", "एआई / मशीन लर्निंग इंजीनियर", "Teach computers to think and learn.", "कंप्यूटर को सोचना और सीखना सिखाना।"),
    career("Inventor", "आविष्कारक", "Create new tools and gadgets.", "नए उपकरण और गैजेट बनाना।"),
    career("University Professor", "विश्वविद्यालय प्रोफेसर", "Study a subject deeply and teach it.", "किसी विषय का गहराई से अध्ययन कर पढ़ाना।"),
    career("Game Designer", "गेम डिज़ाइनर", "Build clever systems and rules for play.", "खेल के लिए चतुर सिस्टम और नियम बनाना।"),
    career("Cybersecurity Expert", "साइबर सुरक्षा विशेषज्ञ", "Outsmart hackers with logic.", "तर्क से हैकरों को मात देना।"),
    career("Engineer", "इंजीनियर", "Apply science to design new things.", "नई चीज़ें डिज़ाइन करने के लिए विज्ञान का उपयोग।"),
  ],
  seed: {
    exploreField: L("science, maths or computers", "विज्ञान, गणित या कंप्यूटर"),
    roleModel: L("a researcher, programmer or inventor", "एक शोधकर्ता, प्रोग्रामर या आविष्कारक"),
    skill: L("logical reasoning and beginner coding", "तार्किक तर्क और शुरुआती कोडिंग"),
    subjects: L("Maths and Science", "गणित और विज्ञान"),
    project: L("take apart a simple gadget or solve a tricky puzzle and explain how it works", "किसी सरल गैजेट को खोलकर देखना या एक कठिन पहेली हल कर उसकी कार्यप्रणाली समझाना"),
    showcase: L("an experiment or puzzle you solved and explained", "कोई प्रयोग या पहेली जिसे आपने हल कर समझाया"),
  },
};

export default INTP;
