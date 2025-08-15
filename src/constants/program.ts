interface SubItem {
  name: string;
  era?: string;
  region?: string;
  details: string;
}

interface ScheduleItem {
  id: number;
  time: string;
  label: string;
  desc?: string;
  desc2?: string;
  subItems?: SubItem[];
}

export const programSchedule: ScheduleItem[] = [
  {
    id: 1,
    time: "08:30 – 09:00",
    label: "Arrival & Registration",
    desc: "Welcome desk, music/video, and visual display of historic African women leaders.",
  },
  {
    id: 2,
    time: "09:00 – 09:30",
    label: "Opening Ceremony & Keynote",
    desc: "Welcome Remarks – Forum Host",
    desc2:
      "Keynote Address: Why African Women Must Lead the Conversation about Justice Through Reparations?",
  },
  {
    id: 3,
    time: "09:30 – 10:30",
    label: "Session 1: Remembering Our Stars",
    desc: "Topic: Pioneers of Justice: African Women Who Shaped History",
    desc2:
      "Panel Discussion on African Women Figures Who Led with Courage, Boldness, and Vision",
    subItems: [
      {
        name: "Queen Nzinga – The Warrior Queen of Angola",
        era: "1600s",
        region: "Ndongo & Matamba (Present-day Angola)",
        details:
          "In the 1600s, Queen Nzinga stood fearlessly against Portuguese colonizers and the slave trade. A brilliant diplomat and fierce military leader, she defended her people for over 30 years, offering refuge to the oppressed and forging alliances to protect her land. Nzinga’s courage, resilience, and unwavering demand for dignity continue to inspire African women to lead, resist injustice, and shape their futures.",
      },
      {
        name: "Etege Taitu Betul – The Empress Who Defended Ethiopia’s Freedom",
        era: "1851–1918",
        region: "Ethiopia",
        details:
          "Etege Taitu Betul, wife of Emperor Menelik II, was a visionary leader, strategist, and defender of Ethiopian sovereignty. She exposed and rejected the deceitful Treaty of Wuchale, which sought to place Ethiopia under Italian control, and led troops alongside the Emperor in the historic Battle of Adwa in 1896 — a victory that kept Ethiopia free from colonial rule. Founder of the capital city of Addis Ababa and a champion for women’s roles in national life, Taitu’s courage and wisdom continue to inspire generations in the fight for independence, dignity, and justice.",
      },
      {
        name: "Yaa Asantewaa – The Queen Mother Who Defied Empire",
        era: "1900",
        region: "Ashanti Kingdom (Present-day Ghana)",
        details:
          "In 1900, Yaa Asantewaa, Queen Mother of Ejisu, rose to lead her people when the British threatened to seize the sacred Golden Stool — the heart of Ashanti sovereignty. At a time when women rarely led armies, she commanded the Asante army in the War of the Golden Stool, becoming a symbol of courage, unity, and resistance. Her defiance against colonial rule remains a rallying call for African women to protect their heritage and fight for justice.",
      },
      {
        name: "Funmilayo Ransome-Kuti – The Lioness of Lisabi",
        era: "1900–1978",
        region: "Nigeria",
        details:
          "Funmilayo Ransome-Kuti was a pioneering educator, activist, and political leader who championed women’s rights and anti-colonial struggles. She led the Abeokuta Women’s Union in massive protests against unfair taxes and gender discrimination, forcing colonial authorities to change policies. Tireless in her advocacy for women’s education, political participation, and economic independence, she helped pave the way for democracy and gender equality in Nigeria and beyond. Her fearless voice still echoes in movements for women’s empowerment today.",
      },
      {
        name: "Interactive Reflection",
        details:
          "There would be an interactive element with the audience to reflect on their legacies, connecting with current stories from their own cultures.",
      },
    ],
  },
  {
    id: 4,
    time: "10:30 – 11:00",
    label: "Networking Tea/Coffee Break",
    desc: "Time to relax and network with other participants.",
  },
  {
    id: 5,
    time: "11:00 – 12:15",
    label: "Session 2: Understanding the Harms",
    desc: "Topic: Gendered Harms of Slavery, Colonialism, and Conflict",
    desc2:
      "Panel discussion with historians, activists, and survivors. Short Q&A to open the floor for participant input.",
  },
  {
    id: 6,
    time: "12:15 – 13:15",
    label: "Lunch Break",
    desc: "Time for networking and refreshments.",
  },
  {
    id: 7,
    time: "13:15 – 14:15",
    label: "Storytelling Workshop",
    desc: "Facilitated by a professional storyteller or communication trainer.",
    desc2:
      "Focus: Helping women craft and share personal or inherited stories related to justice, resilience, and reparations.",
  },
  {
    id: 8,
    time: "14:15 – 15:00",
    label: "Healing and Resilience",
    desc: "Topic: Healing the Wounds: Intergenerational Trauma and Resilience",
    desc2:
      "Guided conversation with psychologists, healers, and community leaders. 'Vision Wall' activity: Participants write or draw their vision of justice.",
  },
  {
    id: 9,
    time: "15:00 – 15:30",
    label: "Networking Coffee Break",
    desc: "Short break to connect with peers.",
  },
  {
    id: 10,
    time: "15:30 – 16:15",
    label: "Reparations for Empowerment",
    desc: "Topic: From Redress to Opportunity - Economic and Social Transformation",
    desc2:
      "Discussion on gender-focused reparations: education, healthcare, land rights, entrepreneurship. Case studies from African and diaspora contexts.",
  },
  {
    id: 11,
    time: "16:15 – 16:45",
    label: "Global Solidarity for Reparations",
    desc: "Topic: Unity Across Borders: Building a Global Women’s Movement",
    desc2:
      "Dialogue on connecting African and diaspora women in advocacy. Drafting a 'Solidarity Statement' to share post-forum.",
  },
  {
    id: 12,
    time: "16:45 – 17:15",
    label: "Closing Reflections & Wrap Up",
    desc: "Participants share one key takeaway and one personal commitment.",
    desc2: "Closing remarks and group photo.",
  },
];
