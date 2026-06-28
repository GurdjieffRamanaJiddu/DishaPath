import { L, career, type TypeData } from "../types";

const ESFP: TypeData = {
  code: "ESFP",
  label: L("The Performer", "मंचकार"),
  tagline: L("Fun, lively, and loves the spotlight", "मज़ेदार, जीवंत और सुर्ख़ियों का शौकीन"),
  description: L(
    "You are cheerful, friendly, and love being around people. You enjoy performing, celebrating, and making life fun for everyone around you.",
    "आप ख़ुशमिज़ाज, मिलनसार हैं और लोगों के बीच रहना पसंद करते हैं। आपको प्रस्तुति देना, जश्न मनाना और आसपास सबके लिए जीवन को मज़ेदार बनाना अच्छा लगता है।",
  ),
  strengths: [
    L("Energy and fun", "ऊर्जा और मस्ती"),
    L("Connecting with people", "लोगों से जुड़ना"),
    L("Performing confidently", "आत्मविश्वास से प्रस्तुति"),
    L("Living in the moment", "पल में जीना"),
  ],
  careers: [
    career("Actor / Performer", "अभिनेता / कलाकार", "Entertain audiences.", "दर्शकों का मनोरंजन करना।"),
    career("Dancer / Singer", "नर्तक / गायक", "Perform on stage.", "मंच पर प्रस्तुति देना।"),
    career("TV / Event Host", "टीवी / इवेंट होस्ट", "Keep the energy high.", "ऊर्जा बनाए रखना।"),
    career("Sports Player", "खिलाड़ी", "Shine in live games.", "लाइव खेलों में चमकना।"),
    career("Content Creator", "कंटेंट क्रिएटर", "Make fun, popular content.", "मज़ेदार, लोकप्रिय कंटेंट बनाना।"),
    career("Teacher (Primary)", "शिक्षक (प्राथमिक)", "Make learning playful.", "सीखने को खेल जैसा बनाना।"),
    career("Tour Guide", "टूर गाइड", "Share places with energy.", "जगहें उत्साह से दिखाना।"),
    career("Chef", "शेफ़", "Delight people with food.", "खाने से लोगों को ख़ुश करना।"),
    career("Fashion / Beauty", "फ़ैशन / सौंदर्य", "Create style and looks.", "शैली और लुक बनाना।"),
    career("Salesperson", "विक्रेता", "Charm and connect with customers.", "ग्राहकों से जुड़ना और प्रभावित करना।"),
  ],
  seed: {
    exploreField: L("performing arts, sports or media", "प्रदर्शन कला, खेल या मीडिया"),
    roleModel: L("a performer, host or sportsperson", "एक कलाकार, होस्ट या खिलाड़ी"),
    skill: L("a performing skill, dance, music, drama or sport", "कोई प्रदर्शन कौशल, नृत्य, संगीत, नाटक या खेल"),
    subjects: L("English, Hindi and Arts", "अंग्रेज़ी, हिंदी और कला"),
    project: L("prepare and give a performance, a dance, song, skit or sports display", "एक प्रस्तुति तैयार कर देना, नृत्य, गीत, नाटक या खेल प्रदर्शन"),
    showcase: L("a performance you prepared and gave", "कोई प्रस्तुति जो आपने तैयार कर दी"),
  },
};

export default ESFP;
