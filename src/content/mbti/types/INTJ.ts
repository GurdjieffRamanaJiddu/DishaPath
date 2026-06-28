import { L, career, type TypeData } from "../types";

const INTJ: TypeData = {
  code: "INTJ",
  label: L("The Strategist", "रणनीतिकार"),
  tagline: L("Plans big, thinks ahead", "बड़ा सोचता है, आगे की योजना बनाता है"),
  description: L(
    "You love solving hard problems and imagining how things could be better. You like to plan, think independently, and reach a goal step by step.",
    "आपको कठिन समस्याएँ हल करना और यह कल्पना करना पसंद है कि चीज़ें कैसे बेहतर हो सकती हैं। आप योजना बनाना, स्वतंत्र रूप से सोचना और कदम-दर-कदम लक्ष्य तक पहुँचना पसंद करते हैं।",
  ),
  strengths: [
    L("Long-term thinking", "दूरदर्शी सोच"),
    L("Independent problem-solving", "स्वतंत्र समस्या-समाधान"),
    L("Focus and determination", "एकाग्रता और दृढ़ता"),
    L("Seeing patterns others miss", "ऐसे पैटर्न देखना जो दूसरों से छूट जाते हैं"),
  ],
  careers: [
    career("Engineer", "इंजीनियर", "Design and build solutions to real problems.", "असली समस्याओं के समाधान डिज़ाइन और निर्माण करना।"),
    career("Scientist / Researcher", "वैज्ञानिक / शोधकर्ता", "Investigate how the world works.", "दुनिया कैसे काम करती है, इसकी खोज करना।"),
    career("Software Architect", "सॉफ़्टवेयर आर्किटेक्ट", "Plan how big software systems fit together.", "बड़े सॉफ़्टवेयर सिस्टम की संरचना बनाना।"),
    career("Data Scientist", "डेटा साइंटिस्ट", "Find meaning and patterns in numbers.", "आँकड़ों में अर्थ और पैटर्न खोजना।"),
    career("Doctor / Surgeon", "डॉक्टर / सर्जन", "Diagnose problems and plan treatment.", "समस्याओं की पहचान कर इलाज की योजना बनाना।"),
    career("Architect", "वास्तुकार", "Design buildings and spaces.", "इमारतों और स्थानों का डिज़ाइन करना।"),
    career("Economist", "अर्थशास्त्री", "Study and predict how money and markets move.", "पैसे और बाज़ार की गति का अध्ययन और अनुमान।"),
    career("Strategy Consultant", "रणनीति सलाहकार", "Help organisations plan their future.", "संगठनों को भविष्य की योजना बनाने में मदद करना।"),
    career("Lawyer", "वकील", "Build strong, logical arguments.", "मज़बूत, तार्किक तर्क बनाना।"),
    career("Entrepreneur", "उद्यमी", "Turn a big idea into a real business.", "एक बड़े विचार को असली व्यवसाय में बदलना।"),
  ],
  seed: {
    exploreField: L("science, technology or engineering", "विज्ञान, तकनीक या इंजीनियरिंग"),
    roleModel: L("an engineer, scientist or founder", "एक इंजीनियर, वैज्ञानिक या संस्थापक"),
    skill: L("logical planning and basic coding", "तार्किक योजना और बुनियादी कोडिंग"),
    subjects: L("Maths and Science", "गणित और विज्ञान"),
    project: L("design a simple invention or model that solves a problem at home", "घर की किसी समस्या को हल करने वाला एक सरल आविष्कार या मॉडल बनाना"),
    showcase: L("a plan or model for an idea you want to build", "किसी विचार की योजना या मॉडल जिसे आप बनाना चाहते हैं"),
  },
};

export default INTJ;
