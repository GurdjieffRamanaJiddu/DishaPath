import { L, career, type TypeData } from "../types";

const INFP: TypeData = {
  code: "INFP",
  label: L("The Dreamer", "स्वप्नदर्शी"),
  tagline: L("Kind, creative, and true to values", "दयालु, रचनात्मक और मूल्यों के प्रति सच्चा"),
  description: L(
    "You have a big imagination and a kind heart. You care about doing what is right and love expressing yourself through art, words, or ideas.",
    "आपके पास बड़ी कल्पना और दयालु हृदय है। आप सही करने की परवाह करते हैं और कला, शब्दों या विचारों के ज़रिए खुद को व्यक्त करना पसंद करते हैं।",
  ),
  strengths: [
    L("Creativity", "रचनात्मकता"),
    L("Empathy", "सहानुभूति"),
    L("Strong values", "मज़बूत मूल्य"),
    L("Imagination", "कल्पनाशीलता"),
  ],
  careers: [
    career("Writer / Poet", "लेखक / कवि", "Express feelings and stories in words.", "भावनाओं और कहानियों को शब्दों में व्यक्त करना।"),
    career("Artist / Illustrator", "कलाकार / चित्रकार", "Create art that touches people.", "ऐसी कला बनाना जो लोगों को छू जाए।"),
    career("Counsellor", "काउंसलर", "Listen and help people feel better.", "सुनना और लोगों को बेहतर महसूस कराना।"),
    career("Teacher", "शिक्षक", "Inspire students to grow.", "विद्यार्थियों को आगे बढ़ने की प्रेरणा देना।"),
    career("Musician", "संगीतकार", "Share emotions through music.", "संगीत से भावनाएँ साझा करना।"),
    career("Social Worker", "सामाजिक कार्यकर्ता", "Stand up for people in need.", "ज़रूरतमंदों के लिए खड़े होना।"),
    career("Graphic Designer", "ग्राफ़िक डिज़ाइनर", "Make ideas beautiful and clear.", "विचारों को सुंदर और स्पष्ट बनाना।"),
    career("Veterinarian", "पशु चिकित्सक", "Care for and protect animals.", "जानवरों की देखभाल और रक्षा करना।"),
    career("Content Creator", "कंटेंट क्रिएटर", "Tell meaningful stories online.", "ऑनलाइन सार्थक कहानियाँ बताना।"),
    career("Environmentalist", "पर्यावरणविद्", "Protect nature and the planet.", "प्रकृति और धरती की रक्षा करना।"),
  ],
  seed: {
    exploreField: L("art, writing or helping others", "कला, लेखन या दूसरों की मदद"),
    roleModel: L("a writer, artist or counsellor", "एक लेखक, कलाकार या काउंसलर"),
    skill: L("creative writing or drawing", "रचनात्मक लेखन या चित्रकारी"),
    subjects: L("English, Hindi and Art", "अंग्रेज़ी, हिंदी और कला"),
    project: L("create a story, comic, painting or song about something you care about", "किसी ऐसी चीज़ के बारे में कहानी, कॉमिक, पेंटिंग या गीत बनाना जिसकी आप परवाह करते हैं"),
    showcase: L("a creative work you made and are proud of", "कोई रचनात्मक कृति जो आपने बनाई और जिस पर आपको गर्व है"),
  },
};

export default INFP;
