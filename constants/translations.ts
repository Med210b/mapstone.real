const defaultEnglish = {
  nav: { home: "Home", projects: "Projects", investment: "Investment", market: "Market Data", contact: "Contact", inquire: "Inquire", book: "Book Briefing" },
  about: { subtitle: "Who We Are" },
  services: { subtitle: "Services", title: "Our Expertise" },
  partners: { subtitle: "Our Network", title: "Strategic Partners" },
  footer: { 
    desc: "Redefining luxury real estate in Dubai.", 
    col_explore: "Explore", 
    col_support: "Support", 
    col_contact: "Contact", 
    rights: "© 2024 MAPSTONE Real Estate." 
  },
  // Add other keys used in your project here...
};

export const translations: any = {
  EN: defaultEnglish,
  FR: defaultEnglish, // Fallback to English if translation is missing
  AR: defaultEnglish, 
  ES: defaultEnglish,
  IT: defaultEnglish,
  DE: defaultEnglish,
  RU: defaultEnglish,
  TR: defaultEnglish,
  ZH: defaultEnglish
};