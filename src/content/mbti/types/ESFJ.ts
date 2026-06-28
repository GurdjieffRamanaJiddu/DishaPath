import { L, career, type TypeData } from "../types";

const ESFJ: TypeData = {
  code: "ESFJ",
  label: L("The Friend", "मित्र"),
  tagline: L("Warm, helpful, and great with people", "गर्मजोश, मददगार और लोगों के साथ बेहतरीन"),
  description: L(
    "You are friendly, caring, and love being part of a community. You enjoy helping others, organising get-togethers, and making everyone feel included.",
    "आप मिलनसार, देखभाल करने वाले हैं और समुदाय का हिस्सा बनना पसंद करते हैं। आपको दूसरों की मदद करना, मिलन-समारोह आयोजित करना और सबको शामिल महसूस कराना अच्छा लगता है।",
  ),
  strengths: [
    L("Friendliness", "मिलनसारिता"),
    L("Helping and organising", "मदद करना और व्यवस्थित करना"),
    L("Teamwork", "टीम-वर्क"),
    L("Caring for the group", "समूह की देखभाल"),
  ],
  careers: [
    career("Teacher", "शिक्षक", "Care for and guide students.", "विद्यार्थियों की देखभाल और मार्गदर्शन।"),
    career("Nurse", "नर्स", "Help patients feel cared for.", "मरीज़ों को देखभाल का एहसास कराना।"),
    career("Doctor", "डॉक्टर", "Heal people with warmth.", "गर्मजोशी से लोगों को ठीक करना।"),
    career("Event Manager", "इवेंट प्रबंधक", "Bring people together happily.", "लोगों को ख़ुशी से एक साथ लाना।"),
    career("Hotel / Hospitality Manager", "होटल / आतिथ्य प्रबंधक", "Make guests feel welcome.", "मेहमानों का स्वागत महसूस कराना।"),
    career("HR Specialist", "एचआर विशेषज्ञ", "Look after people at work.", "कार्यस्थल पर लोगों का ख्याल रखना।"),
    career("Social Worker", "सामाजिक कार्यकर्ता", "Support the community.", "समुदाय की सहायता करना।"),
    career("Customer Care Lead", "ग्राहक सेवा प्रमुख", "Help and please customers.", "ग्राहकों की मदद और संतुष्टि।"),
    career("Nutritionist", "पोषण विशेषज्ञ", "Help families eat well.", "परिवारों को अच्छा खाना खाने में मदद।"),
    career("Public Relations", "जनसंपर्क", "Build good relationships.", "अच्छे संबंध बनाना।"),
  ],
  seed: {
    exploreField: L("teaching, healthcare or hospitality", "शिक्षण, स्वास्थ्य या आतिथ्य"),
    roleModel: L("a teacher, nurse or community organiser", "एक शिक्षक, नर्स या सामुदायिक आयोजक"),
    skill: L("teamwork and friendly communication", "टीम-वर्क और मित्रवत संवाद"),
    subjects: L("Science, English and Social Studies", "विज्ञान, अंग्रेज़ी और सामाजिक अध्ययन"),
    project: L("organise a friendly get-together or help-drive for your class or neighbourhood", "अपनी कक्षा या मोहल्ले के लिए एक मित्रवत मिलन या सहायता-अभियान आयोजित करना"),
    showcase: L("a community activity you helped bring together", "कोई सामुदायिक गतिविधि जिसे एक साथ लाने में आपने मदद की"),
  },
};

export default ESFJ;
