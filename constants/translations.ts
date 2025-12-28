const defaultEnglish = {
  nav: { 
    home: "Home", projects: "Projects", investment: "Investment", 
    market: "Market Data", contact: "Contact", inquire: "Inquire", 
    book: "Book Briefing" 
  },
  hero: {
    title: "Defining Luxury Real Estate",
    subtitle: "Exclusive Access to Dubai's Most Prestigious Properties",
    explore: "Explore More"
  },
  about: { 
    subtitle: "Who We Are", 
    t1: "Elevating", t2: "The Standard", t3: "Of Global", t4: "Real Estate",
    vision_title: "Building the Future", 
    vision_desc: "Our vision is to redefine the landscape of luxury living through innovation and uncompromising quality."
  },
  lifestyle: {
    subtitle: "The Dubai Advantage", title: "A Global Standard of Living",
    desc: "Dubai is more than a city; it is a global phenomenon. From world-class infrastructure to a tax-free environment, it offers an unparalleled quality of life.",
    f1_title: "Global Connectivity", f2_title: "Tax-Free Living", f3_title: "Safety & Stability"
  },
  projects: {
    title: "Featured Developments", subtitle: "Curated Selection",
    label_location: "Location", label_price: "Price", label_payment: "Payment Plan", label_type: "Unit Type",
    btn_brochure: "Request Brochure",
    items: {
      p1: { name: "Shahrukhz by Danube", desc: "A premier commercial opportunity located directly on Sheikh Zayed Road.", type: "Offices" },
      p2: { name: "Wedyan The Canal", desc: "Exclusive waterfront living situated right on the Dubai Canal.", type: "3BR Units" },
      p3: { name: "Hilton Residences JLT", desc: "Branded waterfront living offering the prestige of the Hilton name.", type: "Studios" },
      p4: { name: "Rabdan Gardens", desc: "Ideally located near the vibrant City Walk and DIFC districts.", type: "Studios" },
      p5: { name: "Hado by BEYOND", desc: "A fresh launch in Dubai's newest waterfront destination.", type: "1BR Units" },
      p6: { name: "FLU1D One", desc: "Boutique living experience offering exclusivity with only 64 units available.", type: "1BR Units" }
    }
  },
  market: {
    subtitle: "Market Intelligence", title: "The Dubai Growth Story",
    exec_title: "Executive Summary Q4 2025",
    exec_desc: "The Dubai real estate market continues to outperform global benchmarks with a 20% year-on-year increase.",
    cta_title: "Request Full Market Report", btn_download: "Download PDF Report",
    mega_title: "Mega Projects & Infrastructure",
    p_etihad: "Etihad Rail", p_palm: "Palm Jebel Ali", p_d33: "D33 Economic Agenda",
    growth_title: "Growth Catalysts",
    c_dollar: "Dollar Peg", c_hub: "Global Hub", c_safe: "Safe Haven", c_visa: "Visa Reform"
  },
  contact: { 
    subtitle: "Inquire Now", title: "Start Your Journey", 
    label_first: "First Name", label_last: "Last Name", label_email: "Email Address", label_phone: "Phone Number", label_msg: "Message",
    btn_submit: "Send Inquiry"
  },
  footer: { 
    desc: "Redefining luxury real estate in Dubai.", 
    col_explore: "Explore", col_support: "Support", col_contact: "Contact",
    faq: "Frequently Asked Questions", privacy: "Privacy Policy Statement", terms: "Terms & Conditions of Use",
    rights: "© 2025 MAPSTONE Real Estate." 
  }
};

const defaultArabic = {
  nav: { home: "الرئيسية", projects: "المشاريع", investment: "الاستثمار", market: "بيانات السوق", contact: "اتصل بنا", inquire: "استفسار", book: "احجز جلسة" },
  hero: { title: "تعريف العقارات الفاخرة", subtitle: "وصول حصري لأرقى العقارات في دبي", explore: "اكتشف المزيد" },
  about: { subtitle: "من نحن", t1: "نرفع", t2: "المعايير", t3: "العالمية", t4: "للعقارات", vision_title: "بناء المستقبل", vision_desc: "رؤيتنا هي إعادة تعريف مشهد المعيشة الفاخرة من خلال الابتكار والجودة." },
  lifestyle: { subtitle: "ميزة دبي", title: "معيار عالمي للمعيشة", desc: "دبي ليست مجرد مدينة؛ إنها ظاهرة عالمية. بنية تحتية عالمية وبيئة خالية من الضرائب.", f1_title: "الاتصال العالمي", f2_title: "العيش بدون ضرائب", f3_title: "الأمن والاستقرار" },
  projects: {
    title: "أبرز المشاريع", subtitle: "مجموعة مختارة", label_location: "الموقع", label_price: "السعر", label_payment: "خطة الدفع", label_type: "نوع الوحدة", btn_brochure: "طلب بروشور",
    items: {
      p1: { name: "شاروخ من دانوب", desc: "فرصة تجارية متميزة تقع مباشرة على شارع الشيخ زايد.", type: "مكاتب" },
      p2: { name: "وديان القناة", desc: "عيش حصري على الواجهة البحرية مباشرة على قناة دبي.", type: "وحدات 3 غرف" },
      p3: { name: "هيلتون ريزيدنس JLT", desc: "عيش في واجهة مائية متميزة تحمل اسم هيلتون المرموق.", type: "استوديو" },
      p4: { name: "ربدان جاردنز", desc: "موقع مثالي بالقرب من سيتي ووك ومركز دبي المالي.", type: "استوديو" },
      p5: { name: "هادو من بيوند", desc: "إطلاق جديد في أحدث وجهة مائية في دبي.", type: "وحدة غرفة واحدة" },
      p6: { name: "فلويد ون", desc: "تجربة معيشة بوتيك توفر الحصرية مع 64 وحدة فقط.", type: "وحدة غرفة واحدة" }
    }
  },
  market: {
    subtitle: "ذكاء السوق", title: "قصة نمو دبي", exec_title: "الملخص التنفيذي الربع الرابع 2025", exec_desc: "يستمر سوق العقارات في دبي في التفوق بزيادة سنوية قدرها 20٪.", cta_title: "اطلب تقرير السوق الكامل", btn_download: "تحميل تقرير PDF",
    mega_title: "المشاريع الضخمة والبنية التحتية", p_etihad: "قطار الاتحاد", p_palm: "نخلة جبل علي", p_d33: "أجندة D33 الاقتصادية",
    growth_title: "محفزات النمو", c_dollar: "ربط الدولار", c_hub: "مركز عالمي", c_safe: "ملاذ آمن", c_visa: "إصلاح التأشيرات"
  },
  contact: { subtitle: "استفسر الآن", title: "ابدأ رحلتك", label_first: "الاسم الأول", label_last: "الاسم الأخير", label_email: "البريد الإلكتروني", label_phone: "رقم الهاتف", label_msg: "الرسالة", btn_submit: "إرسال الطلب" },
  footer: { desc: "إعادة تعريف العقارات الفاخرة في دبي.", col_explore: "اكتشف", col_support: "الدعم", col_contact: "اتصل بنا", faq: "الأسئلة الشائعة", privacy: "سياسة الخصوصية", terms: "شروط الاستخدام", rights: "© 2025 مابستون العقارية." }
};

const defaultFrench = {
  nav: { home: "Accueil", projects: "Projets", investment: "Investissement", market: "Données Marché", contact: "Contact", inquire: "S'enquérir", book: "Réserver" },
  hero: { title: "Définir l'Immobilier de Luxe", subtitle: "Accès Exclusif aux Propriétés les Plus Prestigieuses de Dubaï", explore: "Explorer" },
  about: { subtitle: "Qui Nous Sommes", t1: "Élever", t2: "Le Standard", t3: "Immobilier", t4: "Mondial", vision_title: "Bâtir l'Avenir", vision_desc: "Notre vision est de redéfinir le luxe par l'innovation et la qualité." },
  lifestyle: { subtitle: "L'Avantage Dubaï", title: "Un Standard de Vie Mondial", desc: "Dubaï est plus qu'une ville ; c'est un phénomène mondial sans impôt.", f1_title: "Connectivité Globale", f2_title: "Vie Sans Impôts", f3_title: "Sécurité et Stabilité" },
  projects: {
    title: "Développements Vedettes", subtitle: "Sélection Curatée", label_location: "Emplacement", label_price: "Prix", label_payment: "Plan de Paiement", label_type: "Type d'Unité", btn_brochure: "Demander la Brochure",
    items: {
      p1: { name: "Shahrukhz par Danube", desc: "Opportunité commerciale de premier plan sur Sheikh Zayed Road.", type: "Bureaux" },
      p2: { name: "Wedyan Le Canal", desc: "Vie exclusive au bord du canal de Dubaï.", type: "Unités 3BR" },
      p3: { name: "Hilton Residences JLT", desc: "Vie de prestige au bord de l'eau sous la marque Hilton.", type: "Studios" },
      p4: { name: "Rabdan Gardens", desc: "Situé près des districts City Walk et DIFC.", type: "Studios" },
      p5: { name: "Hado par BEYOND", desc: "Nouveau lancement à Dubai Islands.", type: "Unités 1BR" },
      p6: { name: "FLU1D One", desc: "Expérience boutique exclusive avec seulement 64 unités.", type: "Unités 1BR" }
    }
  },
  market: {
    subtitle: "Intelligence Marché", title: "Croissance de Dubaï", exec_title: "Résumé Exécutif Q4 2025", exec_desc: "Le marché surpasse les indices mondiaux avec une hausse de 20%.", cta_title: "Rapport Complet", btn_download: "Télécharger le PDF",
    mega_title: "Méga Projets", p_etihad: "Etihad Rail", p_palm: "Palm Jebel Ali", p_d33: "Agenda D33",
    growth_title: "Catalyseurs", c_dollar: "Dollar Peg", c_hub: "Hub Global", c_safe: "Havre de Paix", c_visa: "Réforme Visas"
  },
  contact: { subtitle: "S'enquérir", title: "Commencez Votre Voyage", label_first: "Prénom", label_last: "Nom", label_email: "Email", label_phone: "Téléphone", label_msg: "Message", btn_submit: "Envoyer" },
  footer: { desc: "Redéfinir le luxe à Dubaï.", col_explore: "Explorer", col_support: "Support", col_contact: "Contact", faq: "FAQ", privacy: "Confidentialité", terms: "Conditions", rights: "© 2025 MAPSTONE Real Estate." }
};

const defaultSpanish = {
  nav: { home: "Inicio", projects: "Proyectos", investment: "Inversión", market: "Mercado", contact: "Contacto", inquire: "Consultar", book: "Reservar" },
  hero: { title: "Definiendo el Lujo Inmobiliario", subtitle: "Acceso Exclusivo a las Propiedades Más Prestigiosas", explore: "Explorar" },
  about: { subtitle: "Quiénes Somos", t1: "Elevando", t2: "El Estándar", t3: "Global", t4: "Inmobiliario", vision_title: "Construyendo el Futuro", vision_desc: "Nuestra visión es redefinir el lujo mediante la innovación y la calidad." },
  lifestyle: { subtitle: "La Ventaja de Dubái", title: "Un Estándar de Vida Global", desc: "Dubái es un fenómeno global con un entorno libre de impuestos.", f1_title: "Conectividad Global", f2_title: "Vida Sin Impuestos", f3_title: "Seguridad y Estabilidad" },
  projects: {
    title: "Proyectos Destacados", subtitle: "Selección Curada", label_location: "Ubicación", label_price: "Precio", label_payment: "Plan de Pago", label_type: "Tipo", btn_brochure: "Solicitar Folleto",
    items: {
      p1: { name: "Shahrukhz por Danube", desc: "Oportunidad comercial en Sheikh Zayed Road.", type: "Oficinas" },
      p2: { name: "Wedyan El Canal", desc: "Vida frente al canal de Dubái.", type: "Unidades 3BR" },
      p3: { name: "Hilton Residences JLT", desc: "Vida prestigiosa con la marca Hilton.", type: "Estudios" },
      p4: { name: "Rabdan Gardens", desc: "Cerca de City Walk y DIFC.", type: "Estudios" },
      p5: { name: "Hado por BEYOND", desc: "Nuevo lanzamiento en Dubai Islands.", type: "Unidades 1BR" },
      p6: { name: "FLU1D One", desc: "Boutique exclusiva con 64 unidades.", type: "Unidades 1BR" }
    }
  },
  market: {
    subtitle: "Mercado", title: "Historia de Crecimiento", exec_title: "Resumen Q4 2025", exec_desc: "El mercado supera promedios mundiales por 20%.", cta_title: "Informe Completo", btn_download: "Descargar PDF",
    mega_title: "Mega Proyectos", p_etihad: "Etihad Rail", p_palm: "Palm Jebel Ali", p_d33: "Agenda D33",
    growth_title: "Catalizadores", c_dollar: "Dollar Peg", c_hub: "Hub Global", c_safe: "Refugio Seguro", c_visa: "Reforma Visas"
  },
  contact: { subtitle: "Consultar", title: "Inicie su Viaje", label_first: "Nombre", label_last: "Apellido", label_email: "Email", label_phone: "Teléfono", label_msg: "Mensaje", btn_submit: "Enviar" },
  footer: { desc: "Redefiniendo el lujo en Dubái.", col_explore: "Explorar", col_support: "Soporte", col_contact: "Contacto", faq: "Preguntas Frecuentes", privacy: "Privacidad", terms: "Condiciones", rights: "© 2025 MAPSTONE Real Estate." }
};

const defaultRussian = {
  nav: { home: "Главная", projects: "Проекты", investment: "Инвестиции", market: "Рынок", contact: "Контакт", inquire: "Запрос", book: "Запись" },
  hero: { title: "Новый Стандарт Роскоши", subtitle: "Эксклюзивный Доступ к Недвижимости Дубая", explore: "Подробнее" },
  about: { subtitle: "О Нас", t1: "Повышая", t2: "Стандарты", t3: "Мировой", t4: "Недвижимости", vision_title: "Создавая Будущее", vision_desc: "Наше видение — переосмыслить роскошь через инновации и качество." },
  lifestyle: { subtitle: "Преимущество Дубая", title: "Мировой Уровень Жизни", desc: "Дубай — это глобальный феномен с налоговой свободой.", f1_title: "Связность", f2_title: "Жизнь без Налогов", f3_title: "Безопасность" },
  projects: {
    title: "Лучшие Проекты", subtitle: "Подборка", label_location: "Локация", label_price: "Цена", label_payment: "Оплата", label_type: "Тип", btn_brochure: "Брошюра",
    items: {
      p1: { name: "Shahrukhz от Danube", desc: "Коммерческая недвижимость на шоссе Шейха Зайда.", type: "Офисы" },
      p2: { name: "Wedyan The Canal", desc: "Жизнь на берегу Дубайского канала.", type: "3-спальные квартиры" },
      p3: { name: "Hilton Residences JLT", desc: "Брендовое жилье от Hilton.", type: "Студии" },
      p4: { name: "Rabdan Gardens", desc: "Рядом с City Walk и DIFC.", type: "Студии" },
      p5: { name: "Hado от BEYOND", desc: "Новый запуск на островах Дубая.", type: "1-спальные квартиры" },
      p6: { name: "FLU1D One", desc: "Эксклюзивный бутик-проект на 64 квартиры.", type: "1-спальные квартиры" }
    }
  },
  market: {
    subtitle: "Аналитика", title: "История Роста", exec_title: "Отчет за 4 кв. 2025", exec_desc: "Рынок Дубая опережает мировые показатели на 20%.", cta_title: "Полный Отчет", btn_download: "Скачать PDF",
    mega_title: "Мега Проекты", p_etihad: "Etihad Rail", p_palm: "Palm Jebel Ali", p_d33: "План D33",
    growth_title: "Факторы Роста", c_dollar: "Курс Доллара", c_hub: "Хаб", c_safe: "Безопасность", c_visa: "Визы"
  },
  contact: { subtitle: "Запрос", title: "Начните Путь", label_first: "Имя", label_last: "Фамилия", label_email: "Email", label_phone: "Телефон", label_msg: "Сообщение", btn_submit: "Отправить" },
  footer: { desc: "Новое определение роскоши в Дубае.", col_explore: "Изучить", col_support: "Поддержка", col_contact: "Контакт", faq: "FAQ", privacy: "Конфиденциальность", terms: "Условия", rights: "© 2025 MAPSTONE Real Estate." }
};

export const translations: any = {
  EN: defaultEnglish,
  AR: defaultArabic,
  FR: defaultFrench,
  ES: defaultSpanish,
  RU: defaultRussian
};