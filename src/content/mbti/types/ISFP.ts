import { L, career, type TypeData } from "../types";

const ISFP: TypeData = {
  code: "ISFP",
  label: L("The Artist", "कलाकार"),
  tagline: L("Gentle, creative, and lives in the moment", "कोमल, रचनात्मक और पल में जीने वाला"),
  description: L(
    "You are quiet, kind, and see beauty everywhere. You love creating and enjoy art, music, nature, and hands-on activities.",
    "आप शांत, दयालु हैं और हर जगह सुंदरता देखते हैं। आपको रचना करना पसंद है और कला, संगीत, प्रकृति व व्यावहारिक गतिविधियाँ अच्छी लगती हैं।",
  ),
  strengths: [
    L("Artistic sense", "कलात्मक भावना"),
    L("Kindness", "दयालुता"),
    L("Hands-on creativity", "व्यावहारिक रचनात्मकता"),
    L("Noticing beauty and detail", "सुंदरता और बारीकी देखना"),
  ],
  careers: [
    career("Artist / Painter", "कलाकार / चित्रकार", "Create beautiful artwork.", "सुंदर कलाकृति बनाना।"),
    career("Fashion Designer", "फ़ैशन डिज़ाइनर", "Design clothes and style.", "कपड़े और शैली डिज़ाइन करना।"),
    career("Musician", "संगीतकार", "Make and perform music.", "संगीत बनाना और प्रस्तुत करना।"),
    career("Chef", "शेफ़", "Create delicious food.", "स्वादिष्ट खाना बनाना।"),
    career("Photographer", "फ़ोटोग्राफ़र", "Capture beautiful moments.", "सुंदर पलों को कैद करना।"),
    career("Interior Designer", "इंटीरियर डिज़ाइनर", "Make spaces beautiful.", "स्थानों को सुंदर बनाना।"),
    career("Animator", "एनिमेटर", "Bring drawings to life.", "चित्रों में जान डालना।"),
    career("Veterinarian", "पशु चिकित्सक", "Care for animals.", "जानवरों की देखभाल करना।"),
    career("Craftsperson", "शिल्पकार", "Make beautiful handmade things.", "सुंदर हस्तनिर्मित चीज़ें बनाना।"),
    career("Wildlife / Nature Guide", "वन्यजीव / प्रकृति गाइड", "Work closely with nature.", "प्रकृति के साथ काम करना।"),
  ],
  seed: {
    exploreField: L("art, design or music", "कला, डिज़ाइन या संगीत"),
    roleModel: L("an artist, designer or musician", "एक कलाकार, डिज़ाइनर या संगीतकार"),
    skill: L("drawing, music or a craft you enjoy", "चित्रकारी, संगीत या कोई पसंदीदा शिल्प"),
    subjects: L("Art, Hindi and English", "कला, हिंदी और अंग्रेज़ी"),
    project: L("create an art, craft or music piece and share it with family", "एक कला, शिल्प या संगीत कृति बनाना और परिवार के साथ साझा करना"),
    showcase: L("a creative piece you made", "कोई रचनात्मक कृति जो आपने बनाई"),
  },
};

export default ISFP;
