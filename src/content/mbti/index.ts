import {
  type Localized,
  type MonthPlan,
  type MbtiType,
  type PlanSeed,
  type TypeContent,
  type TypeData,
} from "./types";

import INTJ from "./types/INTJ";
import INTP from "./types/INTP";
import ENTJ from "./types/ENTJ";
import ENTP from "./types/ENTP";
import INFJ from "./types/INFJ";
import INFP from "./types/INFP";
import ENFJ from "./types/ENFJ";
import ENFP from "./types/ENFP";
import ISTJ from "./types/ISTJ";
import ISFJ from "./types/ISFJ";
import ESTJ from "./types/ESTJ";
import ESFJ from "./types/ESFJ";
import ISTP from "./types/ISTP";
import ISFP from "./types/ISFP";
import ESTP from "./types/ESTP";
import ESFP from "./types/ESFP";

const DATA: TypeData[] = [
  INTJ, INTP, ENTJ, ENTP,
  INFJ, INFP, ENFJ, ENFP,
  ISTJ, ISFJ, ESTJ, ESFJ,
  ISTP, ISFP, ESTP, ESFP,
];

/** Build a bilingual string by templating English and Hindi separately. */
function tpl(
  en: (s: Record<keyof PlanSeed, string>) => string,
  hi: (s: Record<keyof PlanSeed, string>) => string,
  seed: PlanSeed,
): Localized {
  const enVals = Object.fromEntries(
    Object.entries(seed).map(([k, v]) => [k, (v as Localized).en]),
  ) as Record<keyof PlanSeed, string>;
  const hiVals = Object.fromEntries(
    Object.entries(seed).map(([k, v]) => [k, (v as Localized).hi]),
  ) as Record<keyof PlanSeed, string>;
  return { en: en(enVals), hi: hi(hiVals) };
}

/**
 * The shared 12-month career-exploration arc. The method is the same for every
 * type; the type-specific seed customises the field, role model, skill, etc.
 */
function buildPlan(seed: PlanSeed): MonthPlan[] {
  const months: Array<{
    focus: Localized;
    student: Localized[];
    parent: Localized[];
  }> = [
    {
      focus: { en: "Discover yourself", hi: "खुद को जानें" },
      student: [
        { en: "Read your personality report and underline 2 strengths that feel most like you.", hi: "अपनी व्यक्तित्व रिपोर्ट पढ़ें और 2 ऐसी खूबियाँ रेखांकित करें जो सबसे ज़्यादा आपके जैसी लगें।" },
        { en: "Write down one thing you enjoy doing every day.", hi: "एक ऐसी चीज़ लिखें जो आप हर दिन करना पसंद करते हैं।" },
      ],
      parent: [
        { en: "Talk with your child about their report and share a strength you also see in them.", hi: "अपने बच्चे से उनकी रिपोर्ट पर बात करें और एक खूबी बताएँ जो आप भी उनमें देखते हैं।" },
      ],
    },
    {
      focus: tpl((s) => `Explore ${s.exploreField}`, (s) => `${s.exploreField} को जानें`, seed),
      student: [
        tpl((s) => `Watch a video or read about ${s.exploreField} and note one thing you found interesting.`, (s) => `${s.exploreField} के बारे में एक वीडियो देखें या पढ़ें और एक रोचक बात नोट करें।`, seed),
      ],
      parent: [
        tpl((s) => `Help your child find a safe video or library book about ${s.exploreField}.`, (s) => `अपने बच्चे को ${s.exploreField} के बारे में एक सुरक्षित वीडियो या किताब ढूँढने में मदद करें।`, seed),
      ],
    },
    {
      focus: { en: "Meet a role model", hi: "किसी आदर्श से मिलें" },
      student: [
        tpl((s) => `Learn about ${s.roleModel} and write 3 things they do in their job.`, (s) => `${s.roleModel} के बारे में जानें और उनके काम की 3 बातें लिखें।`, seed),
      ],
      parent: [
        tpl((s) => `If possible, arrange a short chat with ${s.roleModel} (a relative, neighbour or online talk).`, (s) => `यदि संभव हो, तो ${s.roleModel} से एक छोटी बातचीत कराएँ (रिश्तेदार, पड़ोसी या ऑनलाइन)।`, seed),
      ],
    },
    {
      focus: tpl((s) => `Build a skill: ${s.skill}`, (s) => `एक कौशल बनाएँ: ${s.skill}`, seed),
      student: [
        tpl((s) => `Practise ${s.skill} for a little while, twice this month.`, (s) => `इस महीने दो बार थोड़ी देर ${s.skill} का अभ्यास करें।`, seed),
      ],
      parent: [
        { en: "Praise the effort your child puts in, not just the result.", hi: "सिर्फ़ परिणाम नहीं, बल्कि आपके बच्चे की मेहनत की सराहना करें।" },
      ],
    },
    {
      focus: tpl((s) => `Strengthen ${s.subjects}`, (s) => `${s.subjects} को मज़बूत करें`, seed),
      student: [
        tpl((s) => `Pick one tricky topic in ${s.subjects} and practise it until it feels easier.`, (s) => `${s.subjects} में एक कठिन विषय चुनें और उसे आसान लगने तक अभ्यास करें।`, seed),
      ],
      parent: [
        tpl((s) => `Check in on your child's progress in ${s.subjects} and offer help or a tutor if needed.`, (s) => `${s.subjects} में अपने बच्चे की प्रगति देखें और ज़रूरत हो तो मदद या ट्यूटर दें।`, seed),
      ],
    },
    {
      focus: { en: "Start a hands-on project", hi: "एक व्यावहारिक प्रोजेक्ट शुरू करें" },
      student: [
        tpl((s) => `Begin this project: ${s.project}.`, (s) => `यह प्रोजेक्ट शुरू करें: ${s.project}।`, seed),
      ],
      parent: [
        { en: "Help gather any simple materials your child needs for the project.", hi: "प्रोजेक्ट के लिए ज़रूरी सरल सामग्री जुटाने में अपने बच्चे की मदद करें।" },
      ],
    },
    {
      focus: { en: "Keep building & learning", hi: "बनाते और सीखते रहें" },
      student: [
        { en: "Continue your project and read one book or article that helps it.", hi: "अपना प्रोजेक्ट जारी रखें और एक किताब या लेख पढ़ें जो उसमें मदद करे।" },
      ],
      parent: [
        { en: "Ask your child to explain what they are building, listen with interest.", hi: "अपने बच्चे से पूछें कि वे क्या बना रहे हैं, रुचि से सुनें।" },
      ],
    },
    {
      focus: { en: "See it in the real world", hi: "इसे असल दुनिया में देखें" },
      student: [
        tpl((s) => `Notice where you see ${s.exploreField} in everyday life and write one example.`, (s) => `ध्यान दें कि रोज़मर्रा की ज़िंदगी में ${s.exploreField} कहाँ दिखता है और एक उदाहरण लिखें।`, seed),
      ],
      parent: [
        tpl((s) => `If you can, take your child to see ${s.exploreField} in action nearby.`, (s) => `यदि हो सके, तो अपने बच्चे को पास में ${s.exploreField} को होते हुए दिखाएँ।`, seed),
      ],
    },
    {
      focus: { en: "Team up", hi: "टीम बनाएँ" },
      student: [
        tpl((s) => `Do a group activity with friends related to ${s.exploreField}.`, (s) => `${s.exploreField} से जुड़ी एक समूह गतिविधि दोस्तों के साथ करें।`, seed),
      ],
      parent: [
        { en: "Encourage your child to share their interest with a friend or classmate.", hi: "अपने बच्चे को किसी दोस्त या सहपाठी के साथ अपनी रुचि साझा करने के लिए प्रोत्साहित करें।" },
      ],
    },
    {
      focus: { en: "Reflect", hi: "मनन करें" },
      student: [
        { en: "Look back at this year. Write what you enjoyed most and least.", hi: "इस साल पर नज़र डालें। लिखें कि आपको सबसे ज़्यादा और सबसे कम क्या अच्छा लगा।" },
      ],
      parent: [
        { en: "Sit with your child and talk about what excites them most so far.", hi: "अपने बच्चे के साथ बैठें और बात करें कि अब तक उन्हें सबसे ज़्यादा क्या उत्साहित करता है।" },
      ],
    },
    {
      focus: { en: "Plan ahead", hi: "आगे की योजना बनाएँ" },
      student: [
        tpl((s) => `Find out which school subjects (${s.subjects}) help with careers you like.`, (s) => `पता करें कि कौन से स्कूल विषय (${s.subjects}) आपकी पसंद के करियर में मदद करते हैं।`, seed),
      ],
      parent: [
        { en: "Discuss subject choices and streams (after class 10) so your child knows their options early.", hi: "विषय और स्ट्रीम (कक्षा 10 के बाद) पर चर्चा करें ताकि बच्चे को अपने विकल्प पहले से पता हों।" },
      ],
    },
    {
      focus: { en: "Showcase & celebrate", hi: "प्रदर्शन और जश्न" },
      student: [
        tpl((s) => `Present ${s.showcase} to your family and celebrate what you learned this year.`, (s) => `अपने परिवार को ${s.showcase} दिखाएँ और इस साल जो सीखा उसका जश्न मनाएँ।`, seed),
      ],
      parent: [
        { en: "Celebrate your child's year of effort, display or share what they created.", hi: "अपने बच्चे के साल भर की मेहनत का जश्न मनाएँ, उनकी रचना को दिखाएँ या साझा करें।" },
      ],
    },
  ];

  return months.map((m, i) => ({
    month: i + 1,
    focus: m.focus,
    studentTasks: m.student,
    parentTasks: m.parent,
  }));
}

function toContent(data: TypeData): TypeContent {
  return {
    code: data.code,
    label: data.label,
    tagline: data.tagline,
    description: data.description,
    strengths: data.strengths,
    careers: data.careers,
    plan: buildPlan(data.seed),
  };
}

export const MBTI_CONTENT: Record<MbtiType, TypeContent> = DATA.reduce(
  (acc, d) => {
    acc[d.code] = toContent(d);
    return acc;
  },
  {} as Record<MbtiType, TypeContent>,
);

export function getTypeContent(type: MbtiType): TypeContent {
  return MBTI_CONTENT[type];
}
