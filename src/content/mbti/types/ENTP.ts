import { L, career, type TypeData } from "../types";

const ENTP: TypeData = {
  code: "ENTP",
  label: L("The Innovator", "नवप्रवर्तक"),
  tagline: L("Full of ideas and loves a debate", "विचारों से भरा और बहस का शौकीन"),
  description: L(
    "You are quick, creative, and love new ideas and challenges. You enjoy debating, inventing, and finding clever new ways to do things.",
    "आप तेज़, रचनात्मक हैं और नए विचार व चुनौतियाँ पसंद करते हैं। आपको बहस करना, आविष्कार करना और काम के नए चतुर तरीके खोजना अच्छा लगता है।",
  ),
  strengths: [
    L("Creative ideas", "रचनात्मक विचार"),
    L("Quick thinking", "तेज़ सोच"),
    L("Confidence in speaking", "बोलने में आत्मविश्वास"),
    L("Adapting to change", "बदलाव के साथ ढलना"),
  ],
  careers: [
    career("Entrepreneur / Start-up Founder", "उद्यमी / स्टार्ट-अप संस्थापक", "Turn fresh ideas into businesses.", "नए विचारों को व्यवसाय में बदलना।"),
    career("Marketing Specialist", "मार्केटिंग विशेषज्ञ", "Find clever ways to share ideas.", "विचार साझा करने के चतुर तरीके खोजना।"),
    career("Lawyer", "वकील", "Win cases with sharp arguments.", "पैने तर्कों से मुक़दमे जीतना।"),
    career("Journalist", "पत्रकार", "Ask bold questions and tell stories.", "साहसी सवाल पूछना और कहानियाँ बताना।"),
    career("Product Designer", "उत्पाद डिज़ाइनर", "Invent products people love.", "ऐसे उत्पाद बनाना जो लोगों को पसंद आएँ।"),
    career("Advertising Creative", "विज्ञापन क्रिएटिव", "Dream up catchy campaigns.", "आकर्षक अभियानों की कल्पना करना।"),
    career("Software Developer", "सॉफ़्टवेयर डेवलपर", "Build new apps and tools.", "नए ऐप और उपकरण बनाना।"),
    career("Public Speaker / Anchor", "वक्ता / एंकर", "Engage crowds with words.", "शब्दों से दर्शकों को बाँधना।"),
    career("Scientist / Inventor", "वैज्ञानिक / आविष्कारक", "Experiment with bold ideas.", "साहसी विचारों के साथ प्रयोग करना।"),
    career("Film / Content Creator", "फ़िल्म / कंटेंट क्रिएटर", "Make exciting new content.", "रोमांचक नया कंटेंट बनाना।"),
  ],
  seed: {
    exploreField: L("business, media or technology", "व्यवसाय, मीडिया या तकनीक"),
    roleModel: L("a founder, creator or innovator", "एक संस्थापक, क्रिएटर या नवप्रवर्तक"),
    skill: L("public speaking, debate and creative thinking", "सार्वजनिक भाषण, वाद-विवाद और रचनात्मक सोच"),
    subjects: L("English, Science and Maths", "अंग्रेज़ी, विज्ञान और गणित"),
    project: L("pitch a new idea or invention and try a small version of it", "एक नया विचार या आविष्कार प्रस्तुत कर उसका छोटा रूप आज़माना"),
    showcase: L("a new idea you pitched and tested", "कोई नया विचार जिसे आपने प्रस्तुत और परखा"),
  },
};

export default ENTP;
