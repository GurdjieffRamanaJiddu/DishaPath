import { L, career, type TypeData } from "../types";

const INFJ: TypeData = {
  code: "INFJ",
  label: L("The Guide", "मार्गदर्शक"),
  tagline: L("Caring, thoughtful, and full of purpose", "देखभाल करने वाला, विचारशील और उद्देश्य से भरा"),
  description: L(
    "You care deeply about people and want to make the world kinder. You are thoughtful, imaginative, and good at understanding how others feel.",
    "आप लोगों की गहराई से परवाह करते हैं और दुनिया को दयालु बनाना चाहते हैं। आप विचारशील, कल्पनाशील हैं और दूसरों की भावनाएँ समझने में अच्छे हैं।",
  ),
  strengths: [
    L("Understanding others", "दूसरों को समझना"),
    L("Imagination", "कल्पनाशीलता"),
    L("Caring and helpful", "दयालु और मददगार"),
    L("Working toward a purpose", "उद्देश्य की ओर काम करना"),
  ],
  careers: [
    career("Counsellor / Psychologist", "काउंसलर / मनोवैज्ञानिक", "Help people with their feelings.", "लोगों की भावनाओं में मदद करना।"),
    career("Doctor", "डॉक्टर", "Care for people's health.", "लोगों के स्वास्थ्य की देखभाल करना।"),
    career("Teacher", "शिक्षक", "Guide and inspire students.", "विद्यार्थियों का मार्गदर्शन और प्रेरणा देना।"),
    career("Writer / Author", "लेखक", "Share ideas that move people.", "ऐसे विचार साझा करना जो लोगों को प्रेरित करें।"),
    career("Social Worker", "सामाजिक कार्यकर्ता", "Support people who need help.", "ज़रूरतमंद लोगों की सहायता करना।"),
    career("Doctor of the mind (Psychiatrist)", "मनोचिकित्सक", "Help people heal emotionally.", "लोगों को भावनात्मक रूप से ठीक होने में मदद करना।"),
    career("NGO Leader", "एनजीओ नेता", "Run projects that help society.", "समाज की मदद करने वाली परियोजनाएँ चलाना।"),
    career("Human Resources Specialist", "मानव संसाधन विशेषज्ञ", "Care for people at work.", "कार्यस्थल पर लोगों का ध्यान रखना।"),
    career("Researcher", "शोधकर्ता", "Study people and ideas deeply.", "लोगों और विचारों का गहराई से अध्ययन करना।"),
    career("Designer", "डिज़ाइनर", "Create things that help and inspire.", "ऐसी चीज़ें बनाना जो मदद और प्रेरणा दें।"),
  ],
  seed: {
    exploreField: L("helping people, healthcare or writing", "लोगों की मदद, स्वास्थ्य या लेखन"),
    roleModel: L("a counsellor, teacher or social worker", "एक काउंसलर, शिक्षक या सामाजिक कार्यकर्ता"),
    skill: L("listening, writing and empathy", "सुनना, लेखन और सहानुभूति"),
    subjects: L("English, Science and Social Studies", "अंग्रेज़ी, विज्ञान और सामाजिक अध्ययन"),
    project: L("start a kindness project that helps classmates or your neighbourhood", "एक दयालुता परियोजना शुरू करना जो सहपाठियों या आपके मोहल्ले की मदद करे"),
    showcase: L("a project that helped someone or shared an important idea", "कोई परियोजना जिसने किसी की मदद की या एक ज़रूरी विचार साझा किया"),
  },
};

export default INFJ;
