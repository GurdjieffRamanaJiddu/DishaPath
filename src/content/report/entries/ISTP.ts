import { L } from "@/content/mbti/types";
import type { ReportContent } from "../types";

const ISTP: ReportContent = {
  code: "ISTP",
  archetypeEn: "The Technical Builder",
  archetypeHi: "तकनीकी निर्माता",

  parentIntro: L(
    "Your child learns best with their hands. Where some children understand the world through books, your child understands it by touching, opening, fixing, and building. Give them a broken torch or an old cycle bell and they will quietly take it apart to see how it works; this is not mischief, it is a young engineer studying the world. In a Tier 2 or Tier 3 city, this practical mind is a true asset, because it turns everyday objects, a motor, a phone, a water pump, into a free classroom. Your child stays calm when things go wrong. While others panic, they look for the real cause and a simple fix. They prefer doing over talking, so long lectures may bore them, but a real task will hold their full attention for hours. They like freedom to solve a problem their own way, and they trust what they can test more than what they are simply told. You may notice that they speak less and observe more. This quietness can be mistaken for a lack of interest, but inside, their mind is busy measuring, comparing, and planning. They can struggle with subjects that feel abstract or far from real life, and they may avoid sharing feelings in words. As a parent, the best gift you can give is a safe space to tinker: a corner, some basic tools, old gadgets to open, and your patience when something gets messy. Praise the trying, not only the finished result. Please trust this: the same hands that take apart a toy today can repair machines, build software, fly planes, or design the bridges and devices that your whole town will one day depend on.",
    "आपका बच्चा हाथों से सबसे अच्छा सीखता है। जहाँ कुछ बच्चे किताबों से दुनिया समझते हैं, वहीं आपका बच्चा छूकर, खोलकर, ठीक करके और बनाकर समझता है। उसे एक खराब टॉर्च या पुरानी साइकिल की घंटी दीजिए, और वह चुपचाप उसे खोलकर देखेगा कि वह कैसे काम करती है; यह शरारत नहीं, बल्कि एक नन्हा इंजीनियर दुनिया का अध्ययन कर रहा है। टियर 2 या टियर 3 शहर में यह व्यावहारिक दिमाग सच्ची पूँजी है, क्योंकि यह रोज़मर्रा की चीज़ों, मोटर, फ़ोन, पानी के पंप, को एक मुफ़्त कक्षा बना देता है। चीज़ें गलत होने पर आपका बच्चा शांत रहता है। जब दूसरे घबराते हैं, वह असली कारण और सरल हल ढूँढता है। उसे बोलने से ज़्यादा करना पसंद है, इसलिए लंबे भाषण उसे बोर कर सकते हैं, पर एक असली काम घंटों उसका पूरा ध्यान बाँध सकता है। उसे समस्या अपने तरीके से हल करने की आज़ादी पसंद है, और वह जिसे परख सके उस पर ज़्यादा भरोसा करता है, न कि सिर्फ़ बताए हुए पर। आप देखेंगे कि वह कम बोलता और ज़्यादा देखता है। इस चुप्पी को रुचि की कमी समझा जा सकता है, पर भीतर उसका मन माप रहा, तुलना कर रहा और योजना बना रहा होता है। उसे अमूर्त या असल ज़िंदगी से दूर लगने वाले विषय कठिन लग सकते हैं, और वह भावनाएँ शब्दों में कहने से बच सकता है। माता-पिता के रूप में सबसे अच्छा उपहार है: छेड़छाड़ की सुरक्षित जगह, एक कोना, कुछ बुनियादी औज़ार, खोलने के लिए पुराने गैजेट, और गंदगी होने पर धैर्य। कोशिश की सराहना करें, सिर्फ़ तैयार परिणाम की नहीं। भरोसा रखें: जो हाथ आज खिलौना खोलते हैं, वही कल मशीनें ठीक कर सकते हैं, सॉफ़्टवेयर बना सकते हैं, विमान उड़ा सकते हैं, या वे पुल और उपकरण डिज़ाइन कर सकते हैं जिन पर एक दिन आपका पूरा शहर निर्भर करेगा।",
  ),

  blueprint: {
    school: L(
      "In class your child enjoys hands-on subjects: Science practicals, workshop or craft periods, and anything with real tools or experiments. They may find long theory lessons hard to sit through, and they shine the moment learning becomes a real task. Diagrams, models, and 'let us try it' beat plain reading for them.",
      "कक्षा में आपके बच्चे को हाथों वाले विषय पसंद हैं: विज्ञान के प्रयोग, वर्कशॉप या शिल्प की कक्षाएँ, और असली औज़ार या प्रयोग वाली हर चीज़। लंबे सिद्धांत वाले पाठ में बैठना उसे कठिन लग सकता है, और जैसे ही सीखना असली काम बनता है, वह चमक उठता है। उसके लिए चित्र, मॉडल और 'चलो करके देखें' सादे पठन से बेहतर हैं।",
    ),
    home: L(
      "At home your child loves to tinker: fixing a fan, building with spare parts, or playing hands-on and outdoor games. They enjoy independence and may not like being watched too closely while they work. With siblings they are the practical helper, the one who actually repairs the broken toy rather than just talking about it.",
      "घर पर आपके बच्चे को छेड़छाड़ पसंद है: पंखा ठीक करना, फ़ालतू पुर्ज़ों से बनाना, या हाथों वाले और बाहरी खेल खेलना। उसे स्वतंत्रता पसंद है और काम करते समय बहुत पास से देखा जाना शायद अच्छा न लगे। भाई-बहनों के बीच वह व्यावहारिक मददगार है, जो टूटे खिलौने पर बात करने के बजाय सचमुच उसे ठीक करता है।",
    ),
    social: L(
      "Socially your child is easy-going and loyal, with a few close friends rather than a big circle. They bond over shared activities, cricket, cycling, gaming, or building something, more than over long chats. They dislike drama, stay calm in a crisis, and are often the friend others rely on when something needs fixing.",
      "सामाजिक रूप से आपका बच्चा सहज और वफ़ादार है, बड़े दायरे की बजाय कुछ करीबी दोस्तों के साथ। वह लंबी बातों से ज़्यादा साझा गतिविधियों से जुड़ता है: क्रिकेट, साइक्लिंग, गेमिंग, या कुछ बनाना। उसे नाटक नापसंद है, संकट में शांत रहता है, और अक्सर वही दोस्त है जिस पर कुछ ठीक करना हो तो लोग भरोसा करते हैं।",
    ),
  },

  superpowers: [
    L("Practical problem solving with real things", "असली चीज़ों के साथ व्यावहारिक समस्या-समाधान"),
    L("Stays calm under pressure", "दबाव में शांत रहता है"),
    L("Learns fast by doing", "करके तेज़ी से सीखता है"),
    L("Understands how machines and tools work", "मशीनों और औज़ारों की कार्यप्रणाली समझता है"),
    L("Independent and resourceful", "स्वतंत्र और साधन-संपन्न"),
  ],

  growthAreas: [
    L("May avoid abstract or theory-heavy study", "अमूर्त या सिद्धांत-भारी पढ़ाई से बच सकता है"),
    L("Can find it hard to share feelings in words", "भावनाएँ शब्दों में कहना कठिन लग सकता है"),
    L("May start many things and leave some unfinished", "कई काम शुरू कर कुछ अधूरे छोड़ सकता है"),
    L("Can get restless sitting still for long", "लंबे समय स्थिर बैठने पर बेचैन हो सकता है"),
    L("May take risks without thinking of safety", "सुरक्षा सोचे बिना जोखिम ले सकता है"),
  ],

  careers: [
    {
      title: L("Mechanical Engineer", "मैकेनिकल इंजीनियर"),
      daily: L("Designs, tests, and repairs machines and engines.", "मशीनों और इंजनों को डिज़ाइन, परीक्षण और मरम्मत करता है।"),
      subjects: L("Mathematics, Physics", "गणित, भौतिकी"),
      avenue: L("Diploma (polytechnic) or degree via JEE or state CET; polytechnics in small cities give a fast, affordable start.", "JEE या राज्य CET के ज़रिए डिप्लोमा (पॉलिटेक्निक) या डिग्री; छोटे शहरों के पॉलिटेक्निक तेज़, किफ़ायती शुरुआत देते हैं।"),
    },
    {
      title: L("Automobile Technician", "ऑटोमोबाइल तकनीशियन"),
      daily: L("Services and repairs cars, bikes, and other vehicles.", "कार, बाइक और अन्य वाहनों की सर्विस व मरम्मत करता है।"),
      subjects: L("Science, Mathematics", "विज्ञान, गणित"),
      avenue: L("ITI courses are everywhere and low-cost; with EV vehicles rising, trained technicians are in high demand.", "ITI कोर्स हर जगह और किफ़ायती हैं; ईवी वाहनों के बढ़ने से प्रशिक्षित तकनीशियनों की माँग ऊँची है।"),
    },
    {
      title: L("Pilot", "पायलट"),
      daily: L("Flies passenger or cargo aircraft safely and skilfully.", "यात्री या माल वाले विमान को सुरक्षित और कुशलता से उड़ाता है।"),
      subjects: L("Physics, Mathematics, English", "भौतिकी, गणित, अंग्रेज़ी"),
      avenue: L("Flying schools and the NDA route are open by exam, not by city; strong Physics from now is the first step.", "उड़ान स्कूल और NDA मार्ग परीक्षा से खुले हैं, शहर से नहीं; अभी से मज़बूत भौतिकी पहला कदम है।"),
    },
    {
      title: L("Electrician / Electrical Technician", "इलेक्ट्रीशियन / विद्युत तकनीशियन"),
      daily: L("Installs and repairs wiring, motors, and electrical systems.", "वायरिंग, मोटर और विद्युत प्रणालियाँ लगाता और ठीक करता है।"),
      subjects: L("Science, Mathematics", "विज्ञान, गणित"),
      avenue: L("ITI and on-the-job training; solar power growth across small towns is creating steady new work.", "ITI और काम के दौरान प्रशिक्षण; छोटे कस्बों में सौर ऊर्जा की वृद्धि नया स्थिर काम बना रही है।"),
    },
    {
      title: L("Robotics Engineer", "रोबोटिक्स इंजीनियर"),
      daily: L("Builds and programs robots and automatic machines.", "रोबोट और स्वचालित मशीनें बनाता और प्रोग्राम करता है।"),
      subjects: L("Mathematics, Physics, Computer Science", "गणित, भौतिकी, कंप्यूटर विज्ञान"),
      avenue: L("Free online kits and videos teach the basics; school robotics clubs and Atal Tinkering Labs are a great start.", "मुफ़्त ऑनलाइन किट और वीडियो बुनियादी बातें सिखाते हैं; स्कूल रोबोटिक्स क्लब और अटल टिंकरिंग लैब बढ़िया शुरुआत हैं।"),
      modern: true,
    },
    {
      title: L("Software Developer", "सॉफ़्टवेयर डेवलपर"),
      daily: L("Builds and fixes apps and programs step by step.", "ऐप और प्रोग्राम को कदम-दर-कदम बनाता और ठीक करता है।"),
      subjects: L("Mathematics, Computer Science", "गणित, कंप्यूटर विज्ञान"),
      avenue: L("Coding is the new tinkering; free practice on a laptop from any town can lead to remote jobs.", "कोडिंग नई छेड़छाड़ है; किसी भी कस्बे से लैपटॉप पर मुफ़्त अभ्यास दूर की नौकरियों तक ले जा सकता है।"),
      modern: true,
    },
    {
      title: L("Drone Operator and Technician", "ड्रोन ऑपरेटर और तकनीशियन"),
      daily: L("Flies and maintains drones for farming, mapping, and delivery.", "खेती, मानचित्रण और डिलीवरी के लिए ड्रोन उड़ाता और संभालता है।"),
      subjects: L("Physics, Computer basics, Geography", "भौतिकी, कंप्यूटर की बुनियाद, भूगोल"),
      avenue: L("A fast-growing field in rural India; short certified courses are opening in many districts.", "ग्रामीण भारत में तेज़ी से बढ़ता क्षेत्र; कई ज़िलों में छोटे प्रमाणित कोर्स खुल रहे हैं।"),
      modern: true,
    },
    {
      title: L("Surgeon", "सर्जन"),
      daily: L("Uses steady hands and tools to perform operations.", "स्थिर हाथों और औज़ारों से ऑपरेशन करता है।"),
      subjects: L("Biology, Chemistry, Physics", "जीव विज्ञान, रसायन, भौतिकी"),
      avenue: L("NEET is the common gateway; the same precise hands suit surgery beautifully.", "NEET आम द्वार है; वही सटीक हाथ सर्जरी के लिए बेहद उपयुक्त हैं।"),
    },
    {
      title: L("Civil Site Engineer", "सिविल साइट इंजीनियर"),
      daily: L("Supervises construction work on real sites every day.", "हर दिन असली साइटों पर निर्माण कार्य की निगरानी करता है।"),
      subjects: L("Mathematics, Physics", "गणित, भौतिकी"),
      avenue: L("Diploma or degree from a regional college; growing towns mean constant building work nearby.", "क्षेत्रीय कॉलेज से डिप्लोमा या डिग्री; बढ़ते कस्बों का मतलब पास में लगातार निर्माण कार्य।"),
    },
    {
      title: L("Carpenter / Skilled Craftsperson", "बढ़ई / कुशल शिल्पकार"),
      daily: L("Makes and repairs furniture and useful wooden items.", "फ़र्नीचर और उपयोगी लकड़ी की चीज़ें बनाता और ठीक करता है।"),
      subjects: L("Mathematics, Arts and Craft", "गणित, कला और शिल्प"),
      avenue: L("A respected skill that can grow online; many craftspeople now sell custom work through social media.", "एक सम्मानित कौशल जो ऑनलाइन बढ़ सकता है; कई शिल्पकार अब सोशल मीडिया से अनुकूलित काम बेचते हैं।"),
    },
    {
      title: L("Sports Player or Coach", "खिलाड़ी या कोच"),
      daily: L("Trains the body and skills to compete and to coach others.", "प्रतिस्पर्धा और दूसरों को सिखाने के लिए शरीर और कौशल को प्रशिक्षित करता है।"),
      subjects: L("Physical Education, Biology", "शारीरिक शिक्षा, जीव विज्ञान"),
      avenue: L("District and state academies scout talent from small towns; the Khelo India scheme funds promising players.", "ज़िला और राज्य अकादमियाँ छोटे शहरों से प्रतिभा खोजती हैं; खेलो इंडिया योजना होनहार खिलाड़ियों को सहायता देती है।"),
    },
    {
      title: L("Electronics Repair Entrepreneur", "इलेक्ट्रॉनिक्स रिपेयर उद्यमी"),
      daily: L("Runs a shop or service fixing phones, ACs, and gadgets.", "फ़ोन, एसी और गैजेट ठीक करने वाली दुकान या सेवा चलाता है।"),
      subjects: L("Science, Mathematics, basic Business", "विज्ञान, गणित, बुनियादी व्यवसाय"),
      avenue: L("Learn from free repair videos, then build a local brand on WhatsApp and Instagram for steady customers.", "मुफ़्त रिपेयर वीडियो से सीखें, फिर स्थिर ग्राहकों के लिए व्हाट्सऐप और इंस्टाग्राम पर स्थानीय ब्रांड बनाएँ।"),
      modern: true,
    },
  ],

  roadmap: [
    {
      grade: 5,
      milestone: L(
        "Give safe things to open and build: a simple tool kit, blocks, or old gadgets. Let their hands explore without fear of mess.",
        "खोलने और बनाने के लिए सुरक्षित चीज़ें दें: एक सरल औज़ार किट, ब्लॉक, या पुराने गैजेट। उनके हाथों को गंदगी के डर बिना खोजने दें।",
      ),
    },
    {
      grade: 6,
      milestone: L(
        "Add structure to the tinkering: simple science experiments at home and steady Mathematics practice, since Maths powers every technical field.",
        "छेड़छाड़ को ढाँचा दें: घर पर सरल विज्ञान प्रयोग और नियमित गणित अभ्यास, क्योंकि गणित हर तकनीकी क्षेत्र को शक्ति देता है।",
      ),
    },
    {
      grade: 7,
      milestone: L(
        "Start one real build project: a working model, a repaired gadget, or a basic robotics kit. Joining a school club or Tinkering Lab helps.",
        "एक असली निर्माण प्रोजेक्ट शुरू करें: एक चालू मॉडल, मरम्मत किया गैजेट, या बेसिक रोबोटिक्स किट। स्कूल क्लब या टिंकरिंग लैब से जुड़ना मदद करता है।",
      ),
    },
    {
      grade: 8,
      milestone: L(
        "Explore technical paths calmly: visit a workshop or ITI, watch professionals online, and learn which subjects open diploma and degree routes.",
        "तकनीकी रास्तों को शांति से जानें: किसी वर्कशॉप या ITI जाएँ, पेशेवरों को ऑनलाइन देखें, और जानें कौन-से विषय डिप्लोमा व डिग्री मार्ग खोलते हैं।",
      ),
    },
  ],

  months: [
    {
      month: 1,
      theme: L("Mindset and Observation", "मानसिकता और अवलोकन"),
      actions: [
        L("Read this report together and ask which 'superpower' feels most like them.", "साथ में यह रिपोर्ट पढ़ें और पूछें कौन-सी 'खूबी' सबसे ज़्यादा उनके जैसी लगती है।"),
        L("Give one safe object to open and explore this week.", "इस हफ़्ते खोलने और जाँचने के लिए एक सुरक्षित वस्तु दें।"),
      ],
      tracker: [
        L("Does your child enjoy figuring out how things work?", "क्या आपके बच्चे को यह पता लगाना अच्छा लगता है कि चीज़ें कैसे काम करती हैं?"),
        L("Are they calm and curious rather than frustrated?", "क्या वे निराश की बजाय शांत और जिज्ञासु हैं?"),
      ],
    },
    {
      month: 2,
      theme: L("Micro-Skill Building", "सूक्ष्म-कौशल निर्माण"),
      actions: [
        L("Pick one hands-on skill, such as basic repair or model building, and practise weekly.", "एक हाथों वाला कौशल चुनें, जैसे बेसिक मरम्मत या मॉडल बनाना, और हर हफ़्ते अभ्यास करें।"),
        L("Watch a free 'how it is made' or repair video together.", "साथ में एक मुफ़्त 'यह कैसे बनता है' या मरम्मत वीडियो देखें।"),
      ],
      tracker: [
        L("Did they keep practising for the whole month?", "क्या उन्होंने पूरे महीने अभ्यास जारी रखा?"),
        L("Are they getting better with their hands?", "क्या वे हाथों से बेहतर हो रहे हैं?"),
      ],
    },
    {
      month: 3,
      theme: L("Meet a Real Professional", "एक असली पेशेवर से मिलें"),
      actions: [
        L("Visit a local mechanic, electrician, or repair shop and let your child watch and ask questions.", "किसी स्थानीय मैकेनिक, इलेक्ट्रीशियन या रिपेयर दुकान जाएँ और बच्चे को देखने व सवाल पूछने दें।"),
        L("Discuss what tools and skills that work needs.", "चर्चा करें कि उस काम के लिए कौन-से औज़ार और कौशल चाहिए।"),
      ],
      tracker: [
        L("Did your child show real interest in the work?", "क्या आपके बच्चे ने काम में सच्ची रुचि दिखाई?"),
        L("Did they ask practical questions?", "क्या उन्होंने व्यावहारिक सवाल पूछे?"),
      ],
    },
    {
      month: 4,
      theme: L("Strengthen Maths and Science", "गणित और विज्ञान मज़बूत करें"),
      actions: [
        L("Connect Maths to real building: measuring, angles, and simple calculations in a project.", "गणित को असली निर्माण से जोड़ें: किसी प्रोजेक्ट में मापना, कोण और सरल गणनाएँ।"),
        L("Make abstract topics concrete with a home demonstration.", "घर पर एक प्रदर्शन से अमूर्त विषयों को ठोस बनाएँ।"),
      ],
      tracker: [
        L("Is Maths feeling more useful and less boring?", "क्या गणित ज़्यादा उपयोगी और कम उबाऊ लग रहा है?"),
        L("Can they apply a lesson to a real task?", "क्या वे किसी पाठ को असली काम में लगा सकते हैं?"),
      ],
    },
    {
      month: 5,
      theme: L("Start a Build Project", "एक निर्माण प्रोजेक्ट शुरू करें"),
      actions: [
        L("Help them begin a real build: a model, a simple circuit, or a repair.", "एक असली निर्माण शुरू करने में मदद करें: एक मॉडल, सरल सर्किट या मरम्मत।"),
        L("Collect low-cost parts from home or the local market.", "घर या स्थानीय बाज़ार से किफ़ायती पुर्ज़े जुटाएँ।"),
      ],
      tracker: [
        L("Are they planning before building?", "क्या वे बनाने से पहले योजना बनाते हैं?"),
        L("Do they stay patient when a step fails?", "क्या कोई कदम असफल होने पर वे धैर्य रखते हैं?"),
      ],
    },
    {
      month: 6,
      theme: L("Finish and Show", "पूरा करें और दिखाएँ"),
      actions: [
        L("Encourage them to finish the build and demonstrate it to the family.", "उन्हें निर्माण पूरा कर परिवार को दिखाने के लिए प्रोत्साहित करें।"),
        L("Praise the effort and the problem solving, not only the look.", "मेहनत और समस्या-समाधान की सराहना करें, सिर्फ़ रूप की नहीं।"),
      ],
      tracker: [
        L("Did they complete the project?", "क्या उन्होंने प्रोजेक्ट पूरा किया?"),
        L("Are they proud to show their work?", "क्या वे अपना काम दिखाने में गर्व महसूस करते हैं?"),
      ],
    },
    {
      month: 7,
      theme: L("Learn the Theory Behind It", "इसके पीछे का सिद्धांत सीखें"),
      actions: [
        L("Read or watch about the science behind their favourite build.", "उनके पसंदीदा निर्माण के पीछे के विज्ञान के बारे में पढ़ें या देखें।"),
        L("Let them explain the 'why' to you in their own words.", "उन्हें अपने शब्दों में 'क्यों' आपको समझाने दें।"),
      ],
      tracker: [
        L("Is your child more open to theory when it links to a real thing?", "क्या असली चीज़ से जुड़ने पर आपका बच्चा सिद्धांत के लिए ज़्यादा तैयार है?"),
        L("Can they explain how their project works?", "क्या वे समझा सकते हैं कि उनका प्रोजेक्ट कैसे काम करता है?"),
      ],
    },
    {
      month: 8,
      theme: L("Explore a Real Workplace", "एक असली कार्यस्थल देखें"),
      actions: [
        L("Visit a workshop, garage, ITI, or small factory for an hour.", "एक घंटे के लिए किसी वर्कशॉप, गैराज, ITI या छोटे कारखाने जाएँ।"),
        L("Talk afterwards about which jobs use their kind of skill.", "बाद में बात करें कि कौन-सी नौकरियाँ उनके जैसे कौशल का उपयोग करती हैं।"),
      ],
      tracker: [
        L("Did the visit spark new questions?", "क्या यात्रा ने नए सवाल जगाए?"),
        L("Can they picture themselves in a technical role?", "क्या वे खुद को किसी तकनीकी भूमिका में देख सकते हैं?"),
      ],
    },
    {
      month: 9,
      theme: L("Build with a Team", "टीम के साथ बनाएँ"),
      actions: [
        L("Encourage a group build or a school club project with friends.", "दोस्तों के साथ एक समूह निर्माण या स्कूल क्लब प्रोजेक्ट को प्रोत्साहित करें।"),
        L("Coach them to finish their part and help others finish theirs.", "सिखाएँ कि वे अपना हिस्सा पूरा करें और दूसरों को उनका पूरा करने में मदद करें।"),
      ],
      tracker: [
        L("Did your child complete their share of the work?", "क्या आपके बच्चे ने अपने हिस्से का काम पूरा किया?"),
        L("Did they cooperate well with the team?", "क्या उन्होंने टीम के साथ अच्छा सहयोग किया?"),
      ],
    },
    {
      month: 10,
      theme: L("Reflect on the Journey", "यात्रा पर मनन"),
      actions: [
        L("Ask what they enjoyed building most this year and why.", "पूछें कि इस साल उन्हें क्या बनाना सबसे अच्छा लगा और क्यों।"),
        L("Write down two skills they want to grow next.", "अगली बार बढ़ाने लायक दो कौशल लिख लें।"),
      ],
      tracker: [
        L("Can your child name their strongest skills?", "क्या आपका बच्चा अपने सबसे मज़बूत कौशल बता सकता है?"),
        L("Do they feel proud of their progress?", "क्या उन्हें अपनी प्रगति पर गर्व है?"),
      ],
    },
    {
      month: 11,
      theme: L("Plan the Road Ahead", "आगे का रास्ता बनाएँ"),
      actions: [
        L("Discuss diploma, ITI, and degree routes calmly, without pressure.", "बिना दबाव डिप्लोमा, ITI और डिग्री मार्गों पर शांति से चर्चा करें।"),
        L("Note which subjects each technical path needs.", "नोट करें कि हर तकनीकी मार्ग को कौन-से विषय चाहिए।"),
      ],
      tracker: [
        L("Does your child understand their options without fear?", "क्या आपका बच्चा बिना डर अपने विकल्प समझता है?"),
        L("Are they curious about what comes next?", "क्या वे आगे आने वाले के बारे में जिज्ञासु हैं?"),
      ],
    },
    {
      month: 12,
      theme: L("Showcase and Celebrate", "प्रदर्शन और जश्न"),
      actions: [
        L("Hold a small home showcase of everything they built this year.", "इस साल बनाई हर चीज़ का एक छोटा घरेलू प्रदर्शन रखें।"),
        L("Celebrate a year of steady, joyful, hands-on growth.", "एक साल की स्थिर, आनंदमय, व्यावहारिक वृद्धि का जश्न मनाएँ।"),
      ],
      tracker: [
        L("Is your child more confident with their hands and mind?", "क्या आपका बच्चा अपने हाथों और दिमाग के साथ ज़्यादा आत्मविश्वासी है?"),
        L("Do they enjoy building for the joy of it?", "क्या वे बनाने के आनंद के लिए बनाते हैं?"),
      ],
    },
  ],
};

export default ISTP;
