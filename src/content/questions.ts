import type { Dimension, Grade } from "@/lib/types";
import type { Localized } from "@/content/mbti/types";

export type Pole = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";
export type Band = "junior" | "senior";

export interface QuestionOption {
  pole: Pole;
  text: Localized;
}

export interface Question {
  id: string;
  dimension: Dimension;
  /** Prompt wording tuned to the grade band. */
  prompt: Record<Band, Localized>;
  options: [QuestionOption, QuestionOption];
}

/** Grades 5 to 6 get simpler wording; 7 to 8 get interest/aptitude framing. */
export function gradeToBand(grade: Grade): Band {
  return grade <= 6 ? "junior" : "senior";
}

export const QUESTIONS: Question[] = [
  // ---------------- E / I : Extraversion vs Introversion ----------------
  {
    id: "ei1",
    dimension: "EI",
    prompt: {
      junior: {
        en: "When you have free time at school, what feels more fun?",
        hi: "स्कूल में खाली समय में आपको क्या ज़्यादा मज़ेदार लगता है?",
      },
      senior: {
        en: "How do you usually recharge after a long day?",
        hi: "लंबे दिन के बाद आप आमतौर पर खुद को तरोताज़ा कैसे करते हैं?",
      },
    },
    options: [
      { pole: "E", text: { en: "Playing or chatting with lots of friends", hi: "बहुत सारे दोस्तों के साथ खेलना या बातें करना" } },
      { pole: "I", text: { en: "Doing something quietly on my own", hi: "अकेले शांति से कुछ करना" } },
    ],
  },
  {
    id: "ei2",
    dimension: "EI",
    prompt: {
      junior: { en: "In a new group, what do you do?", hi: "किसी नए समूह में आप क्या करते हैं?" },
      senior: { en: "When you join a new group, you tend to…", hi: "जब आप किसी नए समूह में शामिल होते हैं, तो आप…" },
    },
    options: [
      { pole: "E", text: { en: "Talk to people right away", hi: "तुरंत लोगों से बात करता/करती हूँ" } },
      { pole: "I", text: { en: "Watch first, then slowly join in", hi: "पहले देखता/देखती हूँ, फिर धीरे-धीरे जुड़ता/जुड़ती हूँ" } },
    ],
  },
  {
    id: "ei3",
    dimension: "EI",
    prompt: {
      junior: { en: "How do you like to study?", hi: "आपको पढ़ाई कैसे करना पसंद है?" },
      senior: { en: "You think best when you are…", hi: "आप सबसे अच्छा तब सोचते हैं जब आप…" },
    },
    options: [
      { pole: "E", text: { en: "Talking it out with others", hi: "दूसरों के साथ बात करते हुए" } },
      { pole: "I", text: { en: "Thinking it through by myself", hi: "अकेले सोचते हुए" } },
    ],
  },
  {
    id: "ei4",
    dimension: "EI",
    prompt: {
      junior: { en: "At a birthday party, you are usually…", hi: "जन्मदिन की पार्टी में आप आमतौर पर…" },
      senior: { en: "At a big event, you usually feel…", hi: "किसी बड़े आयोजन में आप आमतौर पर महसूस करते हैं…" },
    },
    options: [
      { pole: "E", text: { en: "Full of energy and excited", hi: "ऊर्जा से भरा और उत्साहित" } },
      { pole: "I", text: { en: "Happy but a little tired afterwards", hi: "खुश, पर बाद में थोड़ा थका हुआ" } },
    ],
  },
  {
    id: "ei5",
    dimension: "EI",
    prompt: {
      junior: { en: "Do you like to share your ideas out loud?", hi: "क्या आपको अपने विचार ज़ोर से बताना पसंद है?" },
      senior: { en: "When you have an idea, you prefer to…", hi: "जब आपके पास कोई विचार होता है, तो आप…" },
    },
    options: [
      { pole: "E", text: { en: "Say it out loud straight away", hi: "तुरंत ज़ोर से कह देता/देती हूँ" } },
      { pole: "I", text: { en: "Keep it in my head until I'm sure", hi: "जब तक पक्का न हो, मन में रखता/रखती हूँ" } },
    ],
  },

  // ---------------- S / N : Sensing vs Intuition ----------------
  {
    id: "sn1",
    dimension: "SN",
    prompt: {
      junior: { en: "Which kind of story do you like more?", hi: "आपको किस तरह की कहानी ज़्यादा पसंद है?" },
      senior: { en: "Which kind of book pulls you in more?", hi: "किस तरह की किताब आपको ज़्यादा आकर्षित करती है?" },
    },
    options: [
      { pole: "S", text: { en: "Real things that actually happened", hi: "सच में घटी असली बातें" } },
      { pole: "N", text: { en: "Imaginary worlds and 'what if' ideas", hi: "काल्पनिक दुनिया और 'अगर ऐसा होता' वाले विचार" } },
    ],
  },
  {
    id: "sn2",
    dimension: "SN",
    prompt: {
      junior: { en: "When you learn something new, you like…", hi: "जब आप कुछ नया सीखते हैं, तो आपको पसंद है…" },
      senior: { en: "You learn best when a topic is…", hi: "आप सबसे अच्छा तब सीखते हैं जब विषय…" },
    },
    options: [
      { pole: "S", text: { en: "Clear steps and real examples", hi: "साफ़ कदम और असली उदाहरण" } },
      { pole: "N", text: { en: "The big idea and the 'why' behind it", hi: "बड़ा विचार और उसके पीछे का 'क्यों'" } },
    ],
  },
  {
    id: "sn3",
    dimension: "SN",
    prompt: {
      junior: { en: "Your friends would say you notice…", hi: "आपके दोस्त कहेंगे कि आप ध्यान देते हैं…" },
      senior: { en: "You naturally pay attention to…", hi: "आप स्वाभाविक रूप से ध्यान देते हैं…" },
    },
    options: [
      { pole: "S", text: { en: "Small details around me", hi: "अपने आसपास की छोटी बातों पर" } },
      { pole: "N", text: { en: "Patterns and new possibilities", hi: "पैटर्न और नई संभावनाओं पर" } },
    ],
  },
  {
    id: "sn4",
    dimension: "SN",
    prompt: {
      junior: { en: "For a project, you would rather…", hi: "किसी प्रोजेक्ट के लिए आप क्या करना पसंद करेंगे…" },
      senior: { en: "Starting a project, you prefer to…", hi: "कोई प्रोजेक्ट शुरू करते समय आप पसंद करते हैं…" },
    },
    options: [
      { pole: "S", text: { en: "Follow a plan that already works", hi: "ऐसी योजना अपनाना जो पहले से काम करती है" } },
      { pole: "N", text: { en: "Try a brand-new way of doing it", hi: "कोई बिलकुल नया तरीका आज़माना" } },
    ],
  },
  {
    id: "sn5",
    dimension: "SN",
    prompt: {
      junior: { en: "Do you daydream a lot?", hi: "क्या आप बहुत सपने देखते/देखती हैं?" },
      senior: { en: "How often do you imagine future possibilities?", hi: "आप कितनी बार भविष्य की संभावनाओं की कल्पना करते हैं?" },
    },
    options: [
      { pole: "N", text: { en: "Yes, my mind wanders to new ideas a lot", hi: "हाँ, मेरा मन अक्सर नए विचारों में खो जाता है" } },
      { pole: "S", text: { en: "Not much, I focus on what's in front of me", hi: "ज़्यादा नहीं, मैं सामने की चीज़ पर ध्यान देता/देती हूँ" } },
    ],
  },

  // ---------------- T / F : Thinking vs Feeling ----------------
  {
    id: "tf1",
    dimension: "TF",
    prompt: {
      junior: { en: "When friends argue, what matters most to you?", hi: "जब दोस्त झगड़ते हैं, तो आपके लिए सबसे ज़रूरी क्या है?" },
      senior: { en: "When making a tough choice, you go by…", hi: "कोई कठिन निर्णय लेते समय आप किस आधार पर चलते हैं…" },
    },
    options: [
      { pole: "T", text: { en: "Finding out what is fair and correct", hi: "यह पता लगाना कि सही और न्यायसंगत क्या है" } },
      { pole: "F", text: { en: "Making sure everyone feels okay", hi: "यह सुनिश्चित करना कि सबको अच्छा लगे" } },
    ],
  },
  {
    id: "tf2",
    dimension: "TF",
    prompt: {
      junior: { en: "People say you are more…", hi: "लोग कहते हैं कि आप ज़्यादा…" },
      senior: { en: "Others would describe you as more…", hi: "दूसरे आपको ज़्यादा बताएँगे…" },
    },
    options: [
      { pole: "T", text: { en: "Logical and straight-talking", hi: "तार्किक और सीधी बात करने वाले" } },
      { pole: "F", text: { en: "Kind and caring", hi: "दयालु और ख्याल रखने वाले" } },
    ],
  },
  {
    id: "tf3",
    dimension: "TF",
    prompt: {
      junior: { en: "When someone is sad, you first…", hi: "जब कोई उदास होता है, तो आप पहले…" },
      senior: { en: "When a friend has a problem, you first…", hi: "जब किसी दोस्त को समस्या हो, तो आप पहले…" },
    },
    options: [
      { pole: "T", text: { en: "Try to solve the problem", hi: "समस्या हल करने की कोशिश करते हैं" } },
      { pole: "F", text: { en: "Comfort them and listen", hi: "उन्हें सांत्वना देते और सुनते हैं" } },
    ],
  },
  {
    id: "tf4",
    dimension: "TF",
    prompt: {
      junior: { en: "Which feels better to hear?", hi: "क्या सुनना ज़्यादा अच्छा लगता है?" },
      senior: { en: "Honest feedback should mostly be…", hi: "ईमानदार प्रतिक्रिया ज़्यादातर होनी चाहिए…" },
    },
    options: [
      { pole: "T", text: { en: "The honest truth, even if it stings", hi: "ईमानदार सच, भले ही चुभे" } },
      { pole: "F", text: { en: "Gentle words that don't hurt", hi: "नरम शब्द जो ठेस न पहुँचाएँ" } },
    ],
  },
  {
    id: "tf5",
    dimension: "TF",
    prompt: {
      junior: { en: "In a team, you are the one who…", hi: "टीम में आप वह हैं जो…" },
      senior: { en: "In group work, you naturally…", hi: "समूह कार्य में आप स्वाभाविक रूप से…" },
    },
    options: [
      { pole: "T", text: { en: "Keeps the task on track", hi: "काम को सही दिशा में रखते हैं" } },
      { pole: "F", text: { en: "Keeps everyone happy together", hi: "सबको साथ खुश रखते हैं" } },
    ],
  },

  // ---------------- J / P : Judging vs Perceiving ----------------
  {
    id: "jp1",
    dimension: "JP",
    prompt: {
      junior: { en: "How do you do your homework?", hi: "आप अपना होमवर्क कैसे करते हैं?" },
      senior: { en: "How do you handle deadlines?", hi: "आप समय-सीमा को कैसे संभालते हैं?" },
    },
    options: [
      { pole: "J", text: { en: "Finish it early so I'm free", hi: "जल्दी पूरा कर लेता/लेती हूँ ताकि फ़ुर्सत रहे" } },
      { pole: "P", text: { en: "Do it whenever I feel ready", hi: "जब मन हो तभी करता/करती हूँ" } },
    ],
  },
  {
    id: "jp2",
    dimension: "JP",
    prompt: {
      junior: { en: "Your school bag is usually…", hi: "आपका स्कूल बैग आमतौर पर…" },
      senior: { en: "Your desk or room is usually…", hi: "आपकी मेज़ या कमरा आमतौर पर…" },
    },
    options: [
      { pole: "J", text: { en: "Neat and organised", hi: "साफ़-सुथरा और व्यवस्थित" } },
      { pole: "P", text: { en: "A bit messy but I manage", hi: "थोड़ा बिखरा, पर मैं संभाल लेता/लेती हूँ" } },
    ],
  },
  {
    id: "jp3",
    dimension: "JP",
    prompt: {
      junior: { en: "Do you like making plans?", hi: "क्या आपको योजना बनाना पसंद है?" },
      senior: { en: "For a holiday, you would rather…", hi: "छुट्टी के लिए आप क्या पसंद करेंगे…" },
    },
    options: [
      { pole: "J", text: { en: "Have a clear plan ready", hi: "एक साफ़ योजना तैयार रखना" } },
      { pole: "P", text: { en: "Keep it open and decide later", hi: "खुला रखना और बाद में तय करना" } },
    ],
  },
  {
    id: "jp4",
    dimension: "JP",
    prompt: {
      junior: { en: "When rules change suddenly, you feel…", hi: "जब नियम अचानक बदलते हैं, तो आपको लगता है…" },
      senior: { en: "When plans change at the last minute, you feel…", hi: "जब योजना आख़िरी समय पर बदलती है, तो आपको लगता है…" },
    },
    options: [
      { pole: "J", text: { en: "A little annoyed, I liked the plan", hi: "थोड़ा परेशान, मुझे योजना पसंद थी" } },
      { pole: "P", text: { en: "Totally fine, I go with the flow", hi: "बिलकुल ठीक, मैं बहाव के साथ चलता/चलती हूँ" } },
    ],
  },
  {
    id: "jp5",
    dimension: "JP",
    prompt: {
      junior: { en: "Do you like finishing one thing before starting another?", hi: "क्या आप एक काम खत्म करके ही दूसरा शुरू करना पसंद करते हैं?" },
      senior: { en: "You usually like to…", hi: "आप आमतौर पर पसंद करते हैं…" },
    },
    options: [
      { pole: "J", text: { en: "Finish one task fully, then move on", hi: "एक काम पूरी तरह खत्म करके आगे बढ़ना" } },
      { pole: "P", text: { en: "Juggle a few things at once", hi: "एक साथ कई काम संभालना" } },
    ],
  },
];

/** Number of questions per dichotomy (used for balance checks/tests). */
export const QUESTIONS_PER_DIMENSION = 5;
