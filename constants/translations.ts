// Helper to keep English as the default for missing translations
const defaultEnglish = {
  nav: {
    home: "Home",
    projects: "Projects",
    investment: "Investment",
    market: "Market Data",
    contact: "Contact",
    inquire: "Inquire",
    book: "Book Briefing"
  },
  hero: {
    discover: "Discover the Portfolio",
    explore: "Explore"
  },
  about: {
    subtitle: "Who We Are",
    t1: "Architects of",
    t2: "Lifestyle.",
    t3: "Curators of",
    t4: "Legacy.",
    vision: "The Vision",
    vision_title: "Beyond Reality",
    vision_desc: "We do not merely sell properties; we facilitate the acquisition of trophies. In a city defined by the impossible, MAPSTONE stands as the bridge between aspiration and reality.",
    method: "Methodology",
    precision: "Precision",
    precision_desc: "Data is our currency. We utilize proprietary market intelligence to identify shifts before they occur.",
    discretion: "Discretion",
    discretion_desc: "Privacy is the ultimate luxury. Our off-market division handles sensitive acquisitions with absolute confidentiality.",
    standard: "The Standard",
    quote: "MAPSTONE is not for everyone. It is for those who demand the exceptional as a baseline.",
    connectivity: "Connectivity",
    global_reach: "Global Reach",
    reach_desc: "From Dubai to London, New York to Singapore. Our network grants you access to the world's most coveted off-market opportunities."
  },
  lifestyle: {
    subtitle: "Why Dubai?",
    title: "The Center of the World",
    desc: "Dubai is not merely a city; it is a testament to human ambition. A sanctuary for innovation, luxury, and security, it offers a lifestyle that is unmatched anywhere else on the globe.",
    f1_sub: "Strategic Hub",
    f1_title: "Global Connectivity",
    f1_desc: "Dubai stands at the crossroads of the world. With one-third of the global population within a 4-hour flight, it serves as the ultimate bridge between East and West.",
    f2_sub: "Economic Freedom",
    f2_title: "Tax-Free Living",
    f2_desc: "Experience the liberation of true wealth retention. With 0% income tax, 0% capital gains tax, and 0% property tax, Dubai provides a fiscal environment designed for prosperity.",
    f3_sub: "Secure Environment",
    f3_title: "Safety & Stability",
    f3_desc: "Consistently ranked as one of the safest cities globally, Dubai offers a secure environment for families and investors alike, backed by a stable currency pegged to the USD.",
    btn_discover: "Discover More"
  },
  services: {
    subtitle: "Services",
    title: "Our Expertise",
    s1_title: "Property Sales",
    s1_desc: "Expert guidance in buying and selling prestigious properties with market-leading strategies.",
    s2_title: "Investment Advisory",
    s2_desc: "Data-driven insights to maximize your real estate portfolio's growth and stability.",
    s3_title: "Luxury Leasing",
    s3_desc: "Connecting discerning tenants with the world's most exclusive residences.",
    s4_title: "Property Management",
    s4_desc: "Comprehensive care for your assets, ensuring pristine condition and tenant satisfaction."
  },
  wealth: {
    subtitle: "INVESTMENT STRATEGY",
    title: "Wealth Architecture",
    intro: "Real estate in Dubai is more than acquisition; it is a vehicle for legacy creation.",
    card1_title: "Off-Plan Capital Growth",
    card1_desc: "Secure assets at pre-launch prices with priority access.",
    card2_title: "Portfolio Diversification",
    card2_desc: "Anchor wealth in Dubai's dollar-pegged economy.",
    c1_point1: "EMAAR PLATINUM ACCESS",
    c1_point2: "HIGH-YIELD PAYMENT PLANS",
    c2_point1: "SHORT-TERM RENTAL MGMT",
    c2_point2: "CORPORATE STRUCTURING",
    crypto_title: "Crypto-Ready",
    crypto_desc: "Seamless transactions via digital assets.",
    visa_title: "Golden Visa",
    visa_desc: "10-Year residency for property investors.",
    advisory_title: "Private Client Advisory",
    advisory_desc: "Book a confidential consultation with our senior investment directors.",
    btn_schedule: "Schedule Briefing"
  },
  contact: {
    subtitle: "CONTACT US",
    title: "Begin Your Journey",
    label_first: "First Name",
    label_last: "Last Name",
    label_email: "Email Address",
    label_phone: "Phone Number",
    label_msg: "Message",
    placeholder_msg: "I am interested in...",
    btn_submit: "Submit",
    success_title: "Welcome,",
    success_msg: "We have received your inquiry. One of our senior advisors will contact you shortly.",
    btn_close: "Close"
  },
  footer: {
    desc: "Redefining luxury real estate in Dubai. We curate exclusive investment opportunities for the world's most discerning clients.",
    col_explore: "Explore",
    col_support: "Support",
    col_contact: "Contact",
    rights: "© 2024 MAPSTONE Real Estate. All rights reserved."
  },
  projects: {
    subtitle: "New Launches",
    title: "Featured Developments",
    intro: "Explore our latest collection. Use the arrows to shuffle through project galleries.",
    btn_brochure: "Request Brochure",
    label_location: "Location",
    label_price: "Starting From",
    label_payment: "Payment Plan",
    label_type: "Unit Type"
  }
};

// We export this object where EVERY language key exists.
// Even if they are just copies of English right now, this prevents the crash.
export const translations = {
  EN: defaultEnglish,
  FR: defaultEnglish, // French (To be translated)
  AR: defaultEnglish, // Arabic (To be translated)
  ES: defaultEnglish, // Spanish (To be translated)
  IT: defaultEnglish, // Italian (To be translated)
  DE: defaultEnglish, // German (To be translated)
  RU: defaultEnglish, // Russian (To be translated)
  TR: defaultEnglish, // Turkish (To be translated)
  ZH: defaultEnglish  // Chinese (To be translated)
};