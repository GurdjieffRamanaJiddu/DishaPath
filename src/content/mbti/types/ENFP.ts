import { L, career, type TypeData } from "../types";

const ENFP: TypeData = {
  code: "ENFP",
  label: L("The Spark", "उमंग"),
  tagline: L("Energetic, friendly, and full of ideas", "ऊर्जावान, मिलनसार और विचारों से भरा"),
  description: L(
    "You are cheerful, curious, and love trying new things. You make friends easily and bring energy and fresh ideas wherever you go.",
    "आप ख़ुशमिज़ाज, जिज्ञासु हैं और नई चीज़ें आज़माना पसंद करते हैं। आप आसानी से दोस्त बनाते हैं और जहाँ जाते हैं वहाँ ऊर्जा व नए विचार लाते हैं।",
  ),
  strengths: [
    L("Energy and enthusiasm", "ऊर्जा और उत्साह"),
    L("Creativity", "रचनात्मकता"),
    L("Making friends easily", "आसानी से दोस्त बनाना"),
    L("Curiosity", "जिज्ञासा"),
  ],
  careers: [
    career("Journalist / Reporter", "पत्रकार / संवाददाता", "Explore stories and share them.", "कहानियाँ खोजना और साझा करना।"),
    career("Actor / Performer", "अभिनेता / कलाकार", "Entertain and express on stage.", "मंच पर मनोरंजन और अभिव्यक्ति करना।"),
    career("Marketing / Advertising", "मार्केटिंग / विज्ञापन", "Spread ideas in fun ways.", "मज़ेदार तरीकों से विचार फैलाना।"),
    career("Teacher", "शिक्षक", "Make learning exciting.", "सीखने को रोमांचक बनाना।"),
    career("Entrepreneur", "उद्यमी", "Start something new and bold.", "कुछ नया और साहसी शुरू करना।"),
    career("Content Creator / YouTuber", "कंटेंट क्रिएटर / यूट्यूबर", "Create fun, useful videos.", "मज़ेदार, उपयोगी वीडियो बनाना।"),
    career("Travel / Tour Guide", "यात्रा / टूर गाइड", "Explore places and share them.", "जगहें घूमना और लोगों को दिखाना।"),
    career("Event Manager", "इवेंट प्रबंधक", "Plan exciting events.", "रोमांचक आयोजन बनाना।"),
    career("Counsellor", "काउंसलर", "Cheer people up and guide them.", "लोगों का हौसला बढ़ाना और मार्गदर्शन करना।"),
    career("Designer", "डिज़ाइनर", "Turn imagination into colour and form.", "कल्पना को रंग और रूप में बदलना।"),
  ],
  seed: {
    exploreField: L("media, performing arts or new ventures", "मीडिया, प्रदर्शन कला या नए उद्यम"),
    roleModel: L("a creator, journalist or performer", "एक क्रिएटर, पत्रकार या कलाकार"),
    skill: L("storytelling and public speaking", "कहानी कहना और सार्वजनिक भाषण"),
    subjects: L("English, Hindi and Arts", "अंग्रेज़ी, हिंदी और कला"),
    project: L("create a short video, skit or campaign about a topic you love", "किसी पसंदीदा विषय पर एक छोटा वीडियो, नाटक या अभियान बनाना"),
    showcase: L("a creative performance or video you made", "कोई रचनात्मक प्रस्तुति या वीडियो जो आपने बनाया"),
  },
};

export default ENFP;
