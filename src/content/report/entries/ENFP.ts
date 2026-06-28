import { L } from "@/content/mbti/types";
import type { ReportContent } from "../types";

const ENFP: ReportContent = {
  code: "ENFP",
  archetypeEn: "The Bright Spark",
  archetypeHi: "जोशीली चिंगारी",

  parentIntro: L(
    "Your child lights up every room they enter. They are full of energy, warmth, and a hundred new ideas a day. Where some children need a push to try something, your child runs toward new experiences with open arms and a big smile. This bright, people-loving spirit is a real gift, and in a Tier 2 or Tier 3 city it helps your child make friends, spot opportunities, and bring fresh energy wherever they go. Your child is deeply curious and loves to explore many things at once: a new game, a new song, a new friend, a new question. They feel emotions strongly, care about fairness, and are quick to comfort a friend who is upset. People are drawn to their enthusiasm. You may notice that your child starts many projects but does not always finish them, gets bored by routine and repetition, and can find it hard to sit still for long study hours. This is not carelessness; it is a mind that runs on excitement and meaning. They learn best when a subject feels alive, connected to real people and real stories, rather than dry and rote. Too much harsh criticism can dim their light quickly, while warm encouragement makes them flourish. As a parent, the most helpful support you can give is to celebrate their ideas, gently help them finish what they start, and channel their energy into one or two real interests at a time. Please trust this: the same joyful spark that fills your home today can grow into a teacher who inspires, a creator who entertains thousands, a leader who unites people, or an entrepreneur who builds something new for your whole town.",
    "आपका बच्चा हर कमरे को रोशन कर देता है जहाँ वह जाता है। वह ऊर्जा, गर्मजोशी और हर दिन सौ नए विचारों से भरा होता है। जहाँ कुछ बच्चों को कुछ नया आज़माने के लिए धक्का चाहिए, वहीं आपका बच्चा खुली बाँहों और बड़ी मुस्कान के साथ नए अनुभवों की ओर दौड़ता है। यह उज्ज्वल, लोगों से प्यार करने वाला स्वभाव एक सच्चा उपहार है, और टियर 2 या टियर 3 शहर में यह आपके बच्चे को दोस्त बनाने, अवसर पहचानने और जहाँ भी जाए वहाँ नई ऊर्जा लाने में मदद करता है। आपका बच्चा बहुत जिज्ञासु है और एक साथ कई चीज़ें खोजना पसंद करता है: एक नया खेल, एक नया गीत, एक नया दोस्त, एक नया सवाल। वह भावनाओं को गहराई से महसूस करता है, न्याय की परवाह करता है, और किसी परेशान दोस्त को तुरंत सांत्वना देता है। लोग उसके उत्साह की ओर खिंचे चले आते हैं। आप देखेंगे कि आपका बच्चा कई काम शुरू करता है पर हमेशा पूरे नहीं करता, एक जैसी दिनचर्या से ऊब जाता है, और लंबे समय पढ़ाई में स्थिर बैठना उसे कठिन लग सकता है। यह लापरवाही नहीं; यह एक ऐसा मन है जो उत्साह और अर्थ पर चलता है। वह तब सबसे अच्छा सीखता है जब विषय जीवंत लगे, असली लोगों और कहानियों से जुड़ा हो, न कि सूखा और रटा हुआ। बहुत कठोर आलोचना उसकी रोशनी जल्दी मद्धम कर सकती है, जबकि गर्म प्रोत्साहन उसे खिला देता है। माता-पिता के रूप में सबसे उपयोगी सहारा है: उसके विचारों का जश्न मनाना, शुरू किए काम को पूरा करने में धीरे से मदद करना, और उसकी ऊर्जा को एक बार में एक या दो असली रुचियों में लगाना। भरोसा रखें: जो आनंदमय चिंगारी आज आपके घर को भरती है, वही कल प्रेरणा देने वाली शिक्षक, हज़ारों का मनोरंजन करने वाली क्रिएटर, लोगों को जोड़ने वाली नेता, या आपके पूरे शहर के लिए कुछ नया खड़ा करने वाली उद्यमी बन सकती है।",
  ),

  blueprint: {
    school: L(
      "In class your child is lively, talkative, and full of questions. They love subjects that involve discussion, stories, and creativity, like Languages, Arts, and Social Studies, and they enjoy group projects and presentations. They can drift off during long, silent, repetitive work, and they do their best when a teacher makes the lesson interactive and connects it to real life.",
      "कक्षा में आपका बच्चा जीवंत, बातूनी और सवालों से भरा होता है। उसे चर्चा, कहानियों और रचनात्मकता वाले विषय पसंद हैं, जैसे भाषाएँ, कला और सामाजिक अध्ययन, और उसे समूह प्रोजेक्ट व प्रस्तुतियाँ अच्छी लगती हैं। लंबे, शांत, दोहराव वाले काम में उसका ध्यान भटक सकता है, और वह तब सबसे अच्छा करता है जब शिक्षक पाठ को संवादात्मक बनाकर असल ज़िंदगी से जोड़ते हैं।",
    ),
    home: L(
      "At home your child is rarely still: singing, chatting, starting a craft, planning a game, or sharing an exciting new idea. They love company and may follow you around just to talk. With siblings they are warm and playful, though they may leave a project half done when a newer idea appears. They thrive on encouragement and gentle help to finish what they begin.",
      "घर पर आपका बच्चा शायद ही कभी शांत रहता है: गाना, बातें करना, कोई शिल्प शुरू करना, खेल की योजना बनाना, या कोई रोमांचक नया विचार साझा करना। उसे साथ पसंद है और वह सिर्फ़ बात करने के लिए आपके पीछे-पीछे घूम सकता है। भाई-बहनों के साथ वह गर्मजोश और चंचल होता है, हालाँकि नया विचार आते ही कोई काम अधूरा छोड़ सकता है। प्रोत्साहन और शुरू किए काम को पूरा करने में कोमल मदद से वह खिलता है।",
    ),
    social: L(
      "Socially your child is a magnet for friends. They are warm, inclusive, and quick to welcome someone new or cheer up a sad classmate. They have a wide circle and dislike seeing anyone left out. Their challenge is that they want everyone to like them, so they can take criticism to heart. They are often the joyful, idea-filled heart of any group.",
      "सामाजिक रूप से आपका बच्चा दोस्तों का चुंबक है। वह गर्मजोश, सबको शामिल करने वाला, और किसी नए व्यक्ति का स्वागत करने या उदास सहपाठी का हौसला बढ़ाने में तत्पर होता है। उसका दायरा बड़ा होता है और वह किसी को अलग-थलग देखना नापसंद करता है। उसकी चुनौती यह है कि वह चाहता है सब उसे पसंद करें, इसलिए आलोचना दिल पर ले सकता है। वह अक्सर किसी भी समूह का आनंदमय, विचारों से भरा दिल होता है।",
    ),
  },

  superpowers: [
    L("Boundless energy and enthusiasm", "असीम ऊर्जा और उत्साह"),
    L("Makes friends and connects with people easily", "आसानी से दोस्त बनाता और लोगों से जुड़ता है"),
    L("A flood of creative, original ideas", "रचनात्मक, मौलिक विचारों की बौछार"),
    L("Warm empathy: senses how others feel", "गर्म सहानुभूति: दूसरों की भावनाएँ भाँप लेता है"),
    L("Adapts quickly and stays hopeful", "तेज़ी से ढलता है और आशावान रहता है"),
  ],

  growthAreas: [
    L("Starts many things but may not finish them", "कई चीज़ें शुरू करता है पर पूरी नहीं कर पाता"),
    L("Gets bored by routine and repetition", "एक जैसी दिनचर्या और दोहराव से ऊब जाता है"),
    L("Can take criticism too personally", "आलोचना को बहुत व्यक्तिगत रूप से ले सकता है"),
    L("May struggle with long, focused study", "लंबी, एकाग्र पढ़ाई में संघर्ष कर सकता है"),
    L("Can over-commit by saying yes to everything", "हर चीज़ के लिए हाँ कहकर ज़रूरत से ज़्यादा वादे कर सकता है"),
  ],

  careers: [
    {
      title: L("Content Creator", "कंटेंट क्रिएटर"),
      daily: L("Makes fun, useful videos or posts that teach or entertain people.", "मज़ेदार, उपयोगी वीडियो या पोस्ट बनाता है जो लोगों को सिखाएँ या मनोरंजन करें।"),
      subjects: L("Languages, Arts, Computer basics", "भाषाएँ, कला, कंप्यूटर की बुनियाद"),
      avenue: L("Regional content in Hindi and local languages is booming; a basic phone and a clear idea are enough to start from any town.", "हिंदी और स्थानीय भाषाओं में क्षेत्रीय कंटेंट तेज़ी से बढ़ रहा है; किसी भी कस्बे से शुरू करने के लिए एक बेसिक फ़ोन और एक साफ़ विचार काफ़ी है।"),
      modern: true,
    },
    {
      title: L("Teacher", "शिक्षक"),
      daily: L("Inspires and guides students, making learning lively and fun.", "विद्यार्थियों को प्रेरित और मार्गदर्शन करता है, सीखने को जीवंत और मज़ेदार बनाता है।"),
      subjects: L("Languages, the subject you love, Social Studies", "भाषाएँ, अपना पसंदीदा विषय, सामाजिक अध्ययन"),
      avenue: L("B.Ed colleges exist in every district; a warm, energetic teacher is needed and respected in every town.", "हर ज़िले में बी.एड कॉलेज हैं; हर कस्बे में एक गर्मजोश, ऊर्जावान शिक्षक की ज़रूरत और कद्र है।"),
    },
    {
      title: L("Journalist or Reporter", "पत्रकार या संवाददाता"),
      daily: L("Explores real stories, talks to people, and shares the news.", "असली कहानियाँ खोजता है, लोगों से बात करता है, और समाचार साझा करता है।"),
      subjects: L("Languages, Social Studies, English", "भाषाएँ, सामाजिक अध्ययन, अंग्रेज़ी"),
      avenue: L("Local and digital news is growing fast; strong writing and curiosity matter more than a big-city degree.", "स्थानीय और डिजिटल समाचार तेज़ी से बढ़ रहे हैं; बड़े शहर की डिग्री से ज़्यादा मज़बूत लेखन और जिज्ञासा मायने रखती है।"),
      modern: true,
    },
    {
      title: L("Digital Marketing Specialist", "डिजिटल मार्केटिंग विशेषज्ञ"),
      daily: L("Finds creative ways to share products and ideas online.", "उत्पाद और विचार ऑनलाइन साझा करने के रचनात्मक तरीके खोजता है।"),
      subjects: L("English, Arts, basic Mathematics", "अंग्रेज़ी, कला, बुनियादी गणित"),
      avenue: L("Free online courses teach the skills; small businesses everywhere now need help reaching customers online.", "मुफ़्त ऑनलाइन कोर्स कौशल सिखाते हैं; हर जगह छोटे व्यवसायों को अब ऑनलाइन ग्राहकों तक पहुँचने में मदद चाहिए।"),
      modern: true,
    },
    {
      title: L("Actor or Performer", "अभिनेता या कलाकार"),
      daily: L("Entertains and moves audiences on stage, screen, or online.", "मंच, परदे या ऑनलाइन पर दर्शकों का मनोरंजन और मन छूता है।"),
      subjects: L("Languages, Arts, Physical Education", "भाषाएँ, कला, शारीरिक शिक्षा"),
      avenue: L("School and local theatre build the craft; auditions and online platforms now reach talent in small towns.", "स्कूल और स्थानीय नाटक कला निखारते हैं; ऑडिशन और ऑनलाइन मंच अब छोटे शहरों की प्रतिभा तक पहुँचते हैं।"),
    },
    {
      title: L("Entrepreneur", "उद्यमी"),
      daily: L("Spots a need and builds a small business or idea to meet it.", "किसी ज़रूरत को पहचानकर उसे पूरा करने वाला छोटा व्यवसाय या विचार खड़ा करता है।"),
      subjects: L("Mathematics, English, Social Studies", "गणित, अंग्रेज़ी, सामाजिक अध्ययन"),
      avenue: L("Many Tier-2/3 founders start online with low cost; energy, people skills, and ideas are the real capital.", "टियर 2/3 के कई संस्थापक कम लागत में ऑनलाइन शुरू करते हैं; ऊर्जा, लोगों से जुड़ने का हुनर और विचार ही असली पूँजी हैं।"),
      modern: true,
    },
    {
      title: L("Counsellor or Psychologist", "काउंसलर या मनोवैज्ञानिक"),
      daily: L("Listens to people and helps them feel better and grow.", "लोगों को सुनता है और उन्हें बेहतर महसूस करने व आगे बढ़ने में मदद करता है।"),
      subjects: L("Psychology, Biology, Languages", "मनोविज्ञान, जीव विज्ञान, भाषाएँ"),
      avenue: L("Psychology degrees are offered at many regional universities; demand for caring counsellors is rising fast.", "मनोविज्ञान की डिग्री कई क्षेत्रीय विश्वविद्यालयों में मिलती है; देखभाल करने वाले काउंसलरों की माँग तेज़ी से बढ़ रही है।"),
    },
    {
      title: L("Event Manager", "इवेंट प्रबंधक"),
      daily: L("Plans and runs weddings, functions, and celebrations.", "शादियों, समारोहों और उत्सवों की योजना बनाता और चलाता है।"),
      subjects: L("English, Arts, basic Business", "अंग्रेज़ी, कला, बुनियादी व्यवसाय"),
      avenue: L("Tier-2/3 cities host countless functions; start by helping with local events and build a name on social media.", "टियर 2/3 शहरों में अनगिनत समारोह होते हैं; स्थानीय आयोजनों में मदद से शुरू करें और सोशल मीडिया पर नाम बनाएँ।"),
    },
    {
      title: L("Social Worker or NGO Leader", "सामाजिक कार्यकर्ता या एनजीओ नेता"),
      daily: L("Runs projects that help people and improve the community.", "ऐसी परियोजनाएँ चलाता है जो लोगों की मदद करें और समुदाय को बेहतर बनाएँ।"),
      subjects: L("Social Studies, Languages", "सामाजिक अध्ययन, भाषाएँ"),
      avenue: L("Volunteering locally builds skills early; social work degrees are widely available and meaningful.", "स्थानीय स्वयंसेवा जल्दी कौशल बनाती है; सामाजिक कार्य की डिग्री व्यापक रूप से उपलब्ध और सार्थक है।"),
    },
    {
      title: L("Travel and Tourism Professional", "यात्रा और पर्यटन पेशेवर"),
      daily: L("Plans trips and shares the beauty of places with travellers.", "यात्राओं की योजना बनाता है और यात्रियों के साथ जगहों की सुंदरता साझा करता है।"),
      subjects: L("Geography, Languages, English", "भूगोल, भाषाएँ, अंग्रेज़ी"),
      avenue: L("India's tourism is growing; regional guides and travel creators can build an audience online from anywhere.", "भारत का पर्यटन बढ़ रहा है; क्षेत्रीय गाइड और यात्रा क्रिएटर कहीं से भी ऑनलाइन दर्शक बना सकते हैं।"),
      modern: true,
    },
    {
      title: L("Public Relations Specialist", "जनसंपर्क विशेषज्ञ"),
      daily: L("Helps people and brands build a good image and connect with others.", "लोगों और ब्रांडों को अच्छी छवि बनाने और दूसरों से जुड़ने में मदद करता है।"),
      subjects: L("English, Languages, Social Studies", "अंग्रेज़ी, भाषाएँ, सामाजिक अध्ययन"),
      avenue: L("Strong communication is the key skill; build it now through debate, drama, and writing.", "मज़बूत संवाद ही मुख्य कौशल है; इसे अभी वाद-विवाद, नाटक और लेखन से बनाएँ।"),
    },
    {
      title: L("Singer or Musician", "गायक या संगीतकार"),
      daily: L("Creates and performs music that people love.", "ऐसा संगीत बनाता और प्रस्तुत करता है जो लोगों को पसंद आए।"),
      subjects: L("Music, Languages, Arts", "संगीत, भाषाएँ, कला"),
      avenue: L("Online platforms let singers from small towns reach millions; practise, record on a phone, and share.", "ऑनलाइन मंच छोटे शहरों के गायकों को लाखों तक पहुँचाते हैं; अभ्यास करें, फ़ोन पर रिकॉर्ड करें, और साझा करें।"),
      modern: true,
    },
  ],

  roadmap: [
    {
      grade: 5,
      milestone: L(
        "Let their curiosity roam: try clubs, art, music, and sports without pressure to pick just one. Celebrate effort and joy, not only marks.",
        "उनकी जिज्ञासा को घूमने दें: क्लब, कला, संगीत और खेल आज़माएँ, बिना सिर्फ़ एक चुनने के दबाव के। सिर्फ़ अंक नहीं, मेहनत और आनंद का जश्न मनाएँ।",
      ),
    },
    {
      grade: 6,
      milestone: L(
        "Gently build the habit of finishing: pick one hobby and see it through, while keeping reading and language skills strong.",
        "पूरा करने की आदत धीरे से बनाएँ: एक शौक चुनें और उसे अंत तक निभाएँ, साथ ही पढ़ने और भाषा कौशल मज़बूत रखें।",
      ),
    },
    {
      grade: 7,
      milestone: L(
        "Channel the energy into one creative project, such as a video, a small event, or a performance, and help them complete it.",
        "ऊर्जा को एक रचनात्मक प्रोजेक्ट में लगाएँ, जैसे एक वीडियो, एक छोटा आयोजन, या एक प्रस्तुति, और उसे पूरा करने में मदद करें।",
      ),
    },
    {
      grade: 8,
      milestone: L(
        "Explore people-focused careers calmly: meet professionals, try public speaking, and learn which subjects open creative and social fields.",
        "लोगों से जुड़े करियर शांति से जानें: पेशेवरों से मिलें, सार्वजनिक भाषण आज़माएँ, और जानें कौन-से विषय रचनात्मक व सामाजिक क्षेत्र खोलते हैं।",
      ),
    },
  ],

  months: [
    {
      month: 1,
      theme: L("Mindset and Observation", "मानसिकता और अवलोकन"),
      actions: [
        L("Read this report together and ask which superpower feels most like them.", "साथ में यह रिपोर्ट पढ़ें और पूछें कौन-सी महाशक्ति सबसे ज़्यादा उनके जैसी लगती है।"),
        L("List together the many things they are curious about right now.", "साथ मिलकर वे कई चीज़ें लिखें जिनके बारे में वे अभी जिज्ञासु हैं।"),
      ],
      tracker: [
        L("Is your child excited to talk about their interests?", "क्या आपका बच्चा अपनी रुचियों पर बात करने के लिए उत्साहित है?"),
        L("Do they feel understood rather than judged?", "क्या वे आँके जाने की बजाय समझे हुए महसूस करते हैं?"),
      ],
    },
    {
      month: 2,
      theme: L("Pick One Interest", "एक रुचि चुनें"),
      actions: [
        L("From their long list, help them choose just one interest to focus on this month.", "उनकी लंबी सूची में से इस महीने ध्यान देने के लिए सिर्फ़ एक रुचि चुनने में मदद करें।"),
        L("Watch one free video together about that interest.", "उस रुचि के बारे में साथ में एक मुफ़्त वीडियो देखें।"),
      ],
      tracker: [
        L("Could your child settle on one focus for now?", "क्या आपका बच्चा फ़िलहाल एक ध्यान-केंद्र पर टिक पाया?"),
        L("Are they still enjoying it after a few weeks?", "क्या कुछ हफ़्तों बाद भी उन्हें इसमें आनंद आ रहा है?"),
      ],
    },
    {
      month: 3,
      theme: L("Meet a Real Professional", "एक असली पेशेवर से मिलें"),
      actions: [
        L("Arrange a chat with a local teacher, reporter, or creator your child admires.", "किसी स्थानीय शिक्षक, रिपोर्टर या क्रिएटर से बातचीत कराएँ जिसकी आपका बच्चा प्रशंसा करता है।"),
        L("Help your child prepare three questions to ask.", "अपने बच्चे को पूछने के लिए तीन सवाल तैयार करने में मदद करें।"),
      ],
      tracker: [
        L("Did your child connect warmly and ask good questions?", "क्या आपके बच्चे ने गर्मजोशी से जुड़कर अच्छे सवाल पूछे?"),
        L("Did the meeting spark fresh excitement?", "क्या मुलाक़ात ने नया उत्साह जगाया?"),
      ],
    },
    {
      month: 4,
      theme: L("Build the Finishing Habit", "पूरा करने की आदत बनाएँ"),
      actions: [
        L("Help them set one small, finishable goal and complete it fully.", "एक छोटा, पूरा करने लायक लक्ष्य तय करने और पूरी तरह पूरा करने में मदद करें।"),
        L("Praise them warmly for finishing, not just for starting.", "शुरू करने के लिए नहीं, बल्कि पूरा करने के लिए उन्हें गर्मजोशी से शाबाशी दें।"),
      ],
      tracker: [
        L("Did your child finish the goal this time?", "क्या आपके बच्चे ने इस बार लक्ष्य पूरा किया?"),
        L("Are they proud of completing something?", "क्या उन्हें कुछ पूरा करने पर गर्व है?"),
      ],
    },
    {
      month: 5,
      theme: L("Start a Creative Project", "एक रचनात्मक प्रोजेक्ट शुरू करें"),
      actions: [
        L("Help them begin a project they love: a video, a skit, a poster, or a song.", "उन्हें पसंद का एक प्रोजेक्ट शुरू करने में मदद करें: एक वीडियो, नाटक, पोस्टर या गीत।"),
        L("Gather simple, low-cost materials from home.", "घर से सरल, किफ़ायती सामग्री जुटाएँ।"),
      ],
      tracker: [
        L("Is your child energised by the project?", "क्या प्रोजेक्ट से आपके बच्चे में ऊर्जा है?"),
        L("Are they making steady progress, not just planning?", "क्या वे सिर्फ़ योजना नहीं, बल्कि नियमित प्रगति कर रहे हैं?"),
      ],
    },
    {
      month: 6,
      theme: L("Share and Celebrate", "साझा करें और जश्न मनाएँ"),
      actions: [
        L("Encourage them to finish the project and share it with family or friends.", "उन्हें प्रोजेक्ट पूरा कर परिवार या दोस्तों के साथ साझा करने को प्रोत्साहित करें।"),
        L("Celebrate their creativity and effort warmly.", "उनकी रचनात्मकता और मेहनत का गर्मजोशी से जश्न मनाएँ।"),
      ],
      tracker: [
        L("Did your child complete and present the project?", "क्या आपके बच्चे ने प्रोजेक्ट पूरा कर प्रस्तुत किया?"),
        L("Did sharing it boost their confidence?", "क्या इसे साझा करने से उनका आत्मविश्वास बढ़ा?"),
      ],
    },
    {
      month: 7,
      theme: L("Strengthen the Basics", "बुनियाद मज़बूत करें"),
      actions: [
        L("Connect one tough school subject to something they love to make it fun.", "एक कठिन स्कूल विषय को उनकी पसंद की किसी चीज़ से जोड़कर मज़ेदार बनाएँ।"),
        L("Study in short, lively sessions rather than long, dull ones.", "लंबे, उबाऊ सत्र की बजाय छोटे, जीवंत सत्रों में पढ़ें।"),
      ],
      tracker: [
        L("Is a difficult subject feeling more enjoyable?", "क्या कोई कठिन विषय ज़्यादा आनंददायक लग रहा है?"),
        L("Can they focus better in short bursts?", "क्या वे छोटे-छोटे हिस्सों में बेहतर ध्यान दे पाते हैं?"),
      ],
    },
    {
      month: 8,
      theme: L("Help Someone", "किसी की मदद करें"),
      actions: [
        L("Encourage a small act of service, such as helping a neighbour or a younger child.", "एक छोटा सेवा कार्य प्रोत्साहित करें, जैसे किसी पड़ोसी या छोटे बच्चे की मदद।"),
        L("Talk together about how it felt to help.", "साथ में बात करें कि मदद करके कैसा लगा।"),
      ],
      tracker: [
        L("Did your child enjoy helping others?", "क्या आपके बच्चे को दूसरों की मदद करना अच्छा लगा?"),
        L("Did they notice the good they can do?", "क्या उन्होंने वह भलाई महसूस की जो वे कर सकते हैं?"),
      ],
    },
    {
      month: 9,
      theme: L("Lead a Group Activity", "एक समूह गतिविधि का नेतृत्व करें"),
      actions: [
        L("Encourage them to organise a fun group activity with friends.", "उन्हें दोस्तों के साथ एक मज़ेदार समूह गतिविधि आयोजित करने को प्रोत्साहित करें।"),
        L("Gently coach them to listen as well as lead.", "धीरे से सिखाएँ कि नेतृत्व के साथ-साथ सुनें भी।"),
      ],
      tracker: [
        L("Did your child bring people together happily?", "क्या आपके बच्चे ने लोगों को ख़ुशी से एक साथ लाया?"),
        L("Did they listen to others' ideas too?", "क्या उन्होंने दूसरों के विचार भी सुने?"),
      ],
    },
    {
      month: 10,
      theme: L("Reflect on the Journey", "यात्रा पर मनन"),
      actions: [
        L("Ask which activities made them happiest this year and why.", "पूछें कि इस साल किन गतिविधियों ने उन्हें सबसे ख़ुश किया और क्यों।"),
        L("Write down the two interests that feel strongest now.", "अभी सबसे मज़बूत लगने वाली दो रुचियाँ लिख लें।"),
      ],
      tracker: [
        L("Can your child name what they love most?", "क्या आपका बच्चा बता सकता है कि उन्हें सबसे ज़्यादा क्या पसंद है?"),
        L("Do they feel proud and hopeful?", "क्या वे गर्व और आशा महसूस करते हैं?"),
      ],
    },
    {
      month: 11,
      theme: L("Plan the Road Ahead", "आगे का रास्ता बनाएँ"),
      actions: [
        L("Discuss creative and people-focused careers calmly, without pressure.", "रचनात्मक और लोगों से जुड़े करियर पर बिना दबाव शांति से चर्चा करें।"),
        L("Note which subjects help the paths they like most.", "नोट करें कि उनकी सबसे पसंदीदा राहों में कौन-से विषय मदद करते हैं।"),
      ],
      tracker: [
        L("Does your child see exciting options ahead?", "क्या आपका बच्चा आगे रोमांचक विकल्प देखता है?"),
        L("Are they hopeful rather than anxious?", "क्या वे चिंतित की बजाय आशावान हैं?"),
      ],
    },
    {
      month: 12,
      theme: L("Showcase and Celebrate", "प्रदर्शन और जश्न"),
      actions: [
        L("Hold a small family showcase of their best work this year.", "इस साल के उनके सबसे अच्छे काम का एक छोटा पारिवारिक प्रदर्शन रखें।"),
        L("Celebrate a year of joyful, creative growth.", "एक साल की आनंदमय, रचनात्मक वृद्धि का जश्न मनाएँ।"),
      ],
      tracker: [
        L("Is your child more confident and focused than a year ago?", "क्या आपका बच्चा एक साल पहले से ज़्यादा आत्मविश्वासी और एकाग्र है?"),
        L("Do they still light up when they learn?", "क्या सीखते समय वे अब भी खिल उठते हैं?"),
      ],
    },
  ],
};

export default ENFP;
