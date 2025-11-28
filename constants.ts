import { FlashcardData } from './types';

// Helper to set initial review date to now so they are immediately available
const NOW = Date.now();

export const INITIAL_VOCABULARY: FlashcardData[] = [
  {
    id: "1",
    word: "abuse",
    type: "n",
    englishMeaning: "harm; hurt; injury",
    persianTranslation: "سوءاستفاده؛ آسیب؛ صدمه",
    example: "What he did was an abuse of his position as manager.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "2",
    word: "accurate",
    type: "adj",
    englishMeaning: "precise; correct",
    persianTranslation: "دقیق؛ درست",
    example: "Keep your self-appraisal accurate.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "3",
    word: "appraisal",
    type: "n",
    englishMeaning: "evaluation; judgment; estimation",
    persianTranslation: "ارزیابی؛ قضاوت؛ برآورد",
    example: "The experts' appraisal of the clock was nearly as much as its real cost.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "4",
    word: "attend",
    type: "v",
    englishMeaning: "be present; go to",
    persianTranslation: "حضور داشتن؛ رفتن به",
    example: "More than 1000 people attended the conference.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "5",
    word: "available",
    type: "adj",
    englishMeaning: "at hand; accessible; ready",
    persianTranslation: "در دسترس؛ قابل دسترسی؛ آماده",
    example: "Almost all books we need are available in this library.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "6",
    word: "benefit",
    type: "n",
    englishMeaning: "advantage; use",
    persianTranslation: "مزیت؛ استفاده",
    example: "It will be to your benefit to arrive early.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "7",
    word: "berate",
    type: "v",
    englishMeaning: "scold; reprimand",
    persianTranslation: "سرزنش کردن؛ توبیخ کردن",
    example: "Rather than berating yourself – 'I'm always late'.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "8",
    word: "career",
    type: "n",
    englishMeaning: "job; employment; course",
    persianTranslation: "حرفه؛ شغل؛ دوره",
    example: "My little brother is interested in a career in banking.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "9",
    word: "challenge",
    type: "v/n",
    englishMeaning: "defy; question / a difficult task",
    persianTranslation: "به چالش کشیدن / چالش",
    example: "Challenge Negative Thoughts.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "10",
    word: "conservative",
    type: "adj",
    englishMeaning: "moderate; temperate; traditional; not liking change",
    persianTranslation: "محافظه‌کار؛ معتدل؛ سنتی؛ تغییرناپذیر",
    example: "Despite Dave's quiet and conservative appearance, he has sense of humor.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "11",
    word: "confidently",
    type: "adv",
    englishMeaning: "surely; with assurance",
    persianTranslation: "با اطمینان؛ مطمئناً",
    example: "He answered all the questions confidently.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "12",
    word: "delay",
    type: "n",
    englishMeaning: "postponement; hold-up",
    persianTranslation: "تأخیر",
    example: "I expect you to type the letters without delay.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "13",
    word: "employee",
    type: "n",
    englishMeaning: "worker; job-holder",
    persianTranslation: "کارمند",
    example: "About 300 factory employees went on strike on Sunday.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "14",
    word: "extra",
    type: "adj",
    englishMeaning: "more; added",
    persianTranslation: "اضافی؛ بیشتر",
    example: "We need some extra time to finish the project.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "15",
    word: "failure",
    type: "n",
    englishMeaning: "defeat; lack of success",
    persianTranslation: "شکست؛ عدم کام",
    example: "Maybe it is better to think of failure as the result of a faulty strategy.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "16",
    word: "faulty",
    type: "adj",
    englishMeaning: "defective; having flaws",
    persianTranslation: "ناقص؛ دارای عیوب",
    example: "The fire started by faulty electrical wiring.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "17",
    word: "field",
    type: "n",
    englishMeaning: "a subject of study or area of work",
    persianTranslation: "زمینه؛ رشته؛ بخشی از کار",
    example: "He has an engineering degree, but can't find a job in his field.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "18",
    word: "flaw",
    type: "n",
    englishMeaning: "defect; imperfection",
    persianTranslation: "نقص؛ عیب",
    example: "The jacket was half price because of a slight flaw.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "19",
    word: "flexibility",
    type: "n",
    englishMeaning: "ability to change or adapt; adaptability",
    persianTranslation: "انعطاف‌پذیری؛ سازگاری",
    example: "The young teacher has enough flexibility. He answers all the students’ questions.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "20",
    word: "inspector",
    type: "n",
    englishMeaning: "an official who checks compliance and quality",
    persianTranslation: "بازرس؛ مقام رسمی بررسی‌کننده",
    example: "Mr. Taheri works in a health center. He is a health inspector.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "21",
    word: "investigate",
    type: "v",
    englishMeaning: "search; study; look into facts",
    persianTranslation: "بررسی کردن؛ تحقیق کردن",
    example: "A group of experts are investigating the cause of the crash.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "22",
    word: "laze",
    type: "v",
    englishMeaning: "idle; lounge lazily",
    persianTranslation: "تنبلی کردن؛ بی‌حال بودن",
    example: "Are you late because you lazed in bed?",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "23",
    word: "market",
    type: "v",
    englishMeaning: "advertise; promote; introduce",
    persianTranslation: "بازاریابی کردن؛ تبلیغ کردن",
    example: "These toys are marketed for children aged 2 to 6.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "24",
    word: "moan",
    type: "n",
    englishMeaning: "groan; sound of complaint",
    persianTranslation: "ناله؛ صدای آه کشیدن",
    example: "He gave a terrible moan as he tried to stand up.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "25",
    word: "paramedic",
    type: "n",
    englishMeaning: "trained medical aide in emergencies",
    persianTranslation: "پیراپزشک",
    example: "Paramedic is a kind of public safety career.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "26",
    word: "pick up",
    type: "v",
    englishMeaning: "collect; catch",
    persianTranslation: "جمع کردن؛ برداشتن",
    example: "After two days the animal control workers could pick up the injured deer.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "27",
    word: "popular",
    type: "adj",
    englishMeaning: "famous; well-known",
    persianTranslation: "محبوب؛ معروف",
    example: "Professor Samiee is very popular in neurosurgery.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "28",
    word: "promotion",
    type: "n",
    englishMeaning: "move to higher rank; advancement",
    persianTranslation: "ترفیع؛ ارتقا",
    example: "In recent years he has had a lot of promotion.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "29",
    word: "raging",
    type: "adj",
    englishMeaning: "furious; intense",
    persianTranslation: "خشمگین؛ شدید",
    example: "Can tame the raging river of anger.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "30",
    word: "solution",
    type: "n",
    englishMeaning: "answer; resolution",
    persianTranslation: "راه‌حل",
    example: "Finally, look for a solution.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "31",
    word: "strength",
    type: "n",
    englishMeaning: "power; force",
    persianTranslation: "قدرت؛ نیرو",
    example: "He pushed the stone with all his strength but couldn’t move it.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "32",
    word: "tame",
    type: "v",
    englishMeaning: "control; domesticate",
    persianTranslation: "رام کردن؛ کنترل کردن",
    example: "Can tame the raging river of negativity.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "33",
    word: "temporary",
    type: "adj",
    englishMeaning: "lasting for a short time",
    persianTranslation: "موقت؛ کوتاه‌مدت",
    example: "We are looking for a temporary solution.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "34",
    word: "unforeseen",
    type: "adj",
    englishMeaning: "unexpected; not anticipated",
    persianTranslation: "پیش‌بینی‌نشده",
    example: "To allow for unforeseen delays.",
    box: 1,
    nextReviewDate: NOW
  },
  {
    id: "35",
    word: "violation",
    type: "n",
    englishMeaning: "breaking the law",
    persianTranslation: "نقض؛ تخلف",
    example: "When you drive your car faster than the speed limit, this is an example of a violation of the law.",
    box: 1,
    nextReviewDate: NOW
  }
];