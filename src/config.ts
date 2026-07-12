export interface Category {
  slug: string;
  label: string;
}

export const categories: Category[] = [
  { slug: "crime", label: "अपराध" },
  { slug: "politics", label: "राजनीति" },
  { slug: "consumer", label: "उपभोक्ता" },
  { slug: "stock-market", label: "शेयर बाजार" },
  { slug: "business", label: "व्यापार" },
  { slug: "world", label: "दुनिया" },
  { slug: "technology", label: "टेक्नोलॉजी" },
  { slug: "science", label: "विज्ञान" },
  { slug: "health", label: "स्वास्थ्य" },
  { slug: "education", label: "शिक्षा" },
  { slug: "jobs", label: "रोजगार" },
  { slug: "sports", label: "खेल" },
  { slug: "entertainment", label: "मनोरंजन" },
  { slug: "auto", label: "ऑटो" },
  { slug: "weather", label: "मौसम" },
  { slug: "spirituality", label: "आध्यात्म" },
  { slug: "fact-check", label: "फैक्ट चेक" }
];

export const categorySlugs = categories.map((c) => c.slug) as [string, ...string[]];

export function labelFor(slug: string): string {
  return categories.find((c) => c.slug === slug)?.label ?? slug;
}

export const SITE = {
  name: "Jivant News",
  nameHi: "जीवंत न्यूज़",
  url: "https://jivantnews.com",
  email: "jivantnews@gmail.com",
  city: "New Delhi",
  author: "Jivant News Desk",
  social: {
    instagram: "https://www.instagram.com/jivantnews",
    facebook: "https://www.facebook.com/jivantnews",
    x: "https://x.com/jivantnews",
    youtube: "https://www.youtube.com/@JivantNews"
  }
};

export const PAGE_SIZE = 20;
