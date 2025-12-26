const defaultEnglish = {
  nav: { home: "Home", projects: "Projects", investment: "Investment", market: "Market Data", contact: "Contact", inquire: "Inquire", book: "Book Briefing" },
  hero: { discover: "Discover the Portfolio", explore: "Explore" },
  about: {
    subtitle: "Who We Are", t1: "Architects of", t2: "Lifestyle.", t3: "Curators of", t4: "Legacy.",
    vision: "The Vision", vision_title: "Beyond Reality", vision_desc: "We do not merely sell properties; we facilitate the acquisition of trophies.",
    method: "Methodology", precision: "Precision", precision_desc: "Data is our currency.",
    discretion: "Discretion", discretion_desc: "Privacy is the ultimate luxury.",
    standard: "The Standard", quote: "MAPSTONE is not for everyone.",
    connectivity: "Connectivity", global_reach: "Global Reach", reach_desc: "From Dubai to London."
  },
  partners: { subtitle: "Our Network", title: "Strategic Partners" },
  real_estate: { subtitle: "Timeless Wisdom", title: "The Safest Investment", quote: "Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world." },
  lifestyle: { subtitle: "Why Dubai?", title: "The Center of the World", desc: "Dubai is not merely a city; it is a testament to human ambition.", btn_discover: "Discover More", f1_title: "Global Connectivity", f1_desc: "Dubai stands at the crossroads.", f2_title: "Tax-Free Living", f2_desc: "0% Income Tax.", f3_title: "Safety & Stability", f3_desc: "Safest city globally." },
  services: {
    subtitle: "Services", title: "Our Expertise",
    s1_title: "Property Sales", s1_desc: "Expert guidance in buying and selling.",
    s2_title: "Investment Advisory", s2_desc: "Data-driven insights.",
    s3_title: "Luxury Leasing", s3_desc: "Connecting discerning tenants.",
    s4_title: "Property Management", s4_desc: "Comprehensive care for your assets."
  },
  wealth: {
    subtitle: "INVESTMENT STRATEGY", title: "Wealth Architecture", intro: "Real estate in Dubai is a vehicle for legacy creation.",
    crypto_title: "Crypto-Ready", crypto_desc: "Seamless transactions.",
    visa_title: "Golden Visa", visa_desc: "10-Year residency.",
    btn_schedule: "Schedule Briefing"
  },
  market: {
    subtitle: "Market Intelligence", title: "Dubai Real Estate Report",
    exec_title: "Executive Summary", exec_desc: "Dubai has crossed the 4 Million Population Mark.",
    narrative_downtown: "The 'Manhattan of the ME'.", narrative_marina: "Scarcity of new plots.",
    narrative_jvc: "Top Performer.", narrative_arjan: "The 'New JVC'.",
    narrative_jlt: "Benefiting from 'Uptown Dubai'.", narrative_dubailand: "Rise of master communities.",
    narrative_jvt: "Riding the wave of JVC.",
    section_mega: "Future Mega-Projects", section_boost: "Dubai Power Boosters",
    proj1_title: "Blue Line Metro", proj1_desc: "Connects Creek Harbour.",
    proj2_title: "Creek Tower", proj2_desc: "Architectural masterpiece.",
    proj3_title: "Vision 2040", proj3_desc: "Population target: 5.8M.",
    tag_connectivity: "Connectivity", tag_tourism: "Tourism", tag_masterplan: "Master Plan",
    boost1_title: "Tax Efficiency", boost1_desc: "0% Tax",
    boost2_title: "Golden Visa", boost2_desc: "10-Year Residency",
    boost3_title: "Safety", boost3_desc: "Top 3 Safest",
    boost4_title: "Currency Peg", boost4_desc: "Pegged to USD",
    cta_title: "Window of Opportunity", cta_desc: "Q4 2025 represents a pivot point.", btn_download: "Download Report",
    stat1: "Transactions", stat2: "Appreciation", stat3: "Yield",
    pdf_title: "Q4 2025 MARKET REPORT", pdf_exec_title: "Executive Summary", pdf_exec_desc: "Market summary.", pdf_future_title: "Future Projects", pdf_concl_title: "Conclusion", pdf_concl_desc: "Strong outlook."
  },
  faq_page: { subtitle: "Support", title: "Frequently Asked Questions", items: [{ q: "Can foreigners buy?", a: "Yes, in freehold areas." }, { q: "Golden Visa?", a: "Available for investors." }] },
  privacy_page: { subtitle: "Legal", title: "Privacy Policy", sections: [{ t: "1. Info Collection", c: "We collect basic info." }] },
  terms_page: { subtitle: "Legal", title: "Terms & Conditions", sections: [{ t: "1. Acceptance", c: "You agree to terms." }] },
  contact: { subtitle: "CONTACT US", title: "Begin Your Journey", label_first: "First Name", label_last: "Last Name", label_email: "Email", label_phone: "Phone", label_msg: "Message", placeholder_msg: "Interested in...", btn_submit: "Submit", success_title: "Welcome", success_msg: "Received.", btn_close: "Close" },
  footer: { desc: "Redefining luxury real estate in Dubai.", col_explore: "Explore", col_support: "Support", col_contact: "Contact", rights: "© 2024 MAPSTONE." },
  projects: { subtitle: "New Launches", title: "Featured Developments", intro: "Explore collection.", btn_brochure: "Request Brochure", label_location: "Location", label_price: "From", label_payment: "Plan", label_type: "Type" }
};

export const translations = {
  EN: defaultEnglish,
  FR: { ...defaultEnglish, 
    nav: { home: "Accueil", projects: "Projets", investment: "Investissement", market: "Marché", contact: "Contact", inquire: "Demander", book: "Réserver" },
    partners: { subtitle: "Notre Réseau", title: "Partenaires Stratégiques" },
    real_estate: { subtitle: "Sagesse Intemporelle", title: "L'Investissement le Plus Sûr", quote: "L'immobilier ne peut être ni perdu ni volé..." },
    lifestyle: { subtitle: "Pourquoi Dubaï?", title: "Le Centre du Monde", desc: "Dubaï est un témoignage.", btn_discover: "En Savoir Plus", f1_title: "Connectivité", f2_title: "Sans Impôt", f3_title: "Sécurité" },
    services: { subtitle: "Services", title: "Notre Expertise", s1_title: "Ventes", s1_desc: "Expertise.", s2_title: "Investissement", s2_desc: "Données.", s3_title: "Location", s3_desc: "Luxe.", s4_title: "Gestion", s4_desc: "Soin complet." },
    wealth: { subtitle: "STRATÉGIE", title: "Architecture de Richesse", intro: "Création d'héritage.", crypto_title: "Crypto-Ready", crypto_desc: "Facile.", visa_title: "Golden Visa", visa_desc: "10 ans.", btn_schedule: "Planifier" },
    footer: { desc: "Immobilier de luxe.", col_explore: "Explorer", col_support: "Support", col_contact: "Contact", rights: "© 2024 MAPSTONE." },
    projects: { subtitle: "Nouveaux", title: "Développements", intro: "Explorer.", btn_brochure: "Brochure", label_location: "Lieu", label_price: "Dès", label_payment: "Plan", label_type: "Type" }
  },
  AR: { ...defaultEnglish, 
    nav: { home: "الرئيسية", projects: "المشاريع", investment: "الاستثمار", market: "بيانات السوق", contact: "اتصل بنا", inquire: "استفسار", book: "حجز موعد" },
    partners: { subtitle: "شبكتنا", title: "شركاء استراتيجيون" },
    real_estate: { subtitle: "حكمة خالدة", title: "الاستثمار الأكثر أماناً", quote: "العقار لا يمكن فقدانه..." },
    lifestyle: { subtitle: "لماذا دبي؟", title: "مركز العالم", desc: "دبي شهادة طموح.", btn_discover: "المزيد", f1_title: "تواصل", f2_title: "بدون ضرائب", f3_title: "أمان" },
    services: { subtitle: "خدماتنا", title: "خبراتنا", s1_title: "المبيعات", s1_desc: "توجيه.", s2_title: "الاستثمار", s2_desc: "بيانات.", s3_title: "التأجير", s3_desc: "فاخر.", s4_title: "الإدارة", s4_desc: "رعاية." },
    wealth: { subtitle: "الاستراتيجية", title: "هندسة الثروة", intro: "إرث.", crypto_title: "رقمي", crypto_desc: "سلس.", visa_title: "ذهبية", visa_desc: "10 سنوات.", btn_schedule: "جدولة" },
    footer: { desc: "عقارات فاخرة.", col_explore: "استكشف", col_support: "دعم", col_contact: "اتصل", rights: "© 2024 مابستون." },
    projects: { subtitle: "جديد", title: "مشاريع", intro: "اكتشف.", btn_brochure: "كتيب", label_location: "موقع", label_price: "من", label_payment: "دفع", label_type: "نوع" }
  },
  ES: { ...defaultEnglish }, IT: { ...defaultEnglish }, DE: { ...defaultEnglish }, RU: { ...defaultEnglish }, TR: { ...defaultEnglish }, ZH: { ...defaultEnglish }
};