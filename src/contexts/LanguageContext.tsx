import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.industries": "Industries",
    "nav.values": "Why Us",
    "nav.team": "Our Team",
    "nav.contact": "Contact",
    "nav.getQuote": "Get Worker Quote",

    // Hero Section
    "hero.badge": "Premier General Contracting & Construction Services in KSA",
    "hero.title1": "Building Excellence,",
    "hero.title2": "Delivering Quality",
    "hero.description": "Al-Itqan Al-Maha General Contracting delivers exceptional construction and contracting services across Saudi Arabia. We specialize in residential, commercial, and industrial projects with unmatched quality and professionalism.",
    "hero.highlight1": "Skilled & Unskilled Labor",
    "hero.highlight2": "Industrial Workforce",
    "hero.highlight3": "Event Staff Support",
    "hero.cta1": "Request Workforce",
    "hero.cta2": "Explore Our Services",
    "hero.scroll": "Scroll",

    // Partners Section
    "partners.badge": "Trusted By",
    "partners.title1": "Our Workers Partner With",
    "partners.title2": "Leading Companies",
    "partners.description": "We are proud to supply skilled professionals to some of the most respected companies in Pakistan.",

    // About Section
    "about.badge": "About Us",
    "about.title1": "Your Trusted",
    "about.title2": "Workforce Partner",
    "about.intro": "Al-Itqan Al-Maha is a leading general contracting company in Saudi Arabia, specializing in delivering exceptional construction projects across all sectors.",
    "about.storyTitle": "Who We Are",
    "about.story1": "Al-Itqan Al-Maha General Contracting is a professional construction company delivering comprehensive contracting services for residential, commercial, and industrial projects. We combine expert craftsmanship, modern technology, and rigorous quality standards to ensure every project exceeds client expectations.",
    "about.story2": "As a trusted labor supply partner operating throughout Pakistan, we understand the challenges businesses face in finding reliable workers. Our comprehensive staffing solutions help companies scale their workforce efficiently while maintaining quality and compliance.",
    "about.satisfaction": "Client Satisfaction",
    "about.licensed": "Licensed & Registered",
    "about.professional": "Vetted Workers",
    "about.quality": "Quality Assured",
    "about.safety": "Safety Trained",
    "about.visionTitle": "Our Vision",
    "about.vision": "To become Pakistan's most trusted workforce solutions provider, empowering businesses with reliable, skilled labor while creating meaningful employment opportunities for workers across the nation.",
    "about.missionTitle": "Our Mission",
    "about.mission": "To deliver exceptional workforce staffing services through rigorous recruitment, comprehensive training, and dedicated worker management—ensuring every client receives reliable, professional labor that meets their specific needs.",

    // Services Section
    "services.badge": "Our Services",
    "services.title1": "Complete Workforce",
    "services.title2": "Solutions",
    "services.intro": "From general labor to skilled technicians, we provide comprehensive staffing services tailored to meet your business needs across all industries.",
    "services.general.title": "General Labor Staffing",
    "services.general.desc": "Reliable general labor workers for various operational needs. Our vetted workforce handles loading, unloading, warehousing, packaging, and other essential tasks with professionalism and efficiency.",
    "services.skilled.title": "Skilled Worker Supply",
    "services.skilled.desc": "Certified electricians, carpenters, plumbers, welders, and technicians for specialized tasks. All skilled workers are verified, trained, and experienced in their respective trades.",
    "services.industrial.title": "Industrial & Manufacturing",
    "services.industrial.desc": "Factory floor workers, machine operators, and production line staff for manufacturing facilities. We ensure all workers understand safety protocols and quality standards.",
    "services.events.title": "Event Staff & Support",
    "services.events.desc": "Professional event staff for setup, service, catering support, and logistics. Our event workers are trained in hospitality standards and client interaction.",
    "services.temporary.title": "Temporary & Contract Staffing",
    "services.temporary.desc": "Flexible staffing solutions for short-term projects, seasonal peaks, or contract-based requirements. Scale your workforce up or down as needed.",
    "services.housekeeping.title": "Housekeeping & Cleaning",
    "services.housekeeping.desc": "Professional cleaning and housekeeping staff for commercial buildings, offices, hotels, and facilities. Trained in modern cleaning techniques and hygiene standards.",

    // Industries Section
    "industries.badge": "Industries We Serve",
    "industries.title1": "Workforce Solutions For",
    "industries.title2": "Every Industry",
    "industries.intro": "We provide specialized labor staffing across diverse sectors, understanding the unique requirements of each industry.",
    "industries.construction": "Construction",
    "industries.manufacturing": "Manufacturing",
    "industries.logistics": "Logistics & Warehousing",
    "industries.hospitality": "Hospitality & Events",
    "industries.retail": "Retail",
    "industries.facility": "Facility Management",

    // Values Section
    "values.badge": "Why Choose Us",
    "values.title1": "The Al-Itqan Al-Maha",
    "values.title2": "Advantage",
    "values.intro": "We set ourselves apart through our commitment to quality, reliability, and client satisfaction.",
    "values.vetting.title": "Rigorous Vetting",
    "values.vetting.desc": "Every worker undergoes background checks, skill verification, and reference validation.",
    "values.training.title": "Comprehensive Training",
    "values.training.desc": "Workers receive job-specific training, safety protocols, and professional conduct guidelines.",
    "values.reliability.title": "Guaranteed Reliability",
    "values.reliability.desc": "We ensure workers show up on time, every time, with backup support always available.",
    "values.compliance.title": "Full Compliance",
    "values.compliance.desc": "All workers are properly documented and compliant with local labor regulations.",
    "values.support.title": "24/7 Support",
    "values.support.desc": "Dedicated account managers and round-the-clock support for all your staffing needs.",
    "values.scalable.title": "Scalable Solutions",
    "values.scalable.desc": "Easily scale your workforce up or down based on project demands and seasonality.",

    // Team Section
    "team.badge": "Our Team",
    "team.title1": "Expert Recruitment",
    "team.title2": "& Management",
    "team.description": "Our dedicated team of HR professionals, recruiters, and operations managers work tirelessly to source, vet, train, and deploy the best workers for your business needs.",
    "team.badge.title": "Expert",
    "team.badge.subtitle": "Staffing Team",
    "team.recruitment.title": "Recruitment Specialists",
    "team.recruitment.desc": "Experienced recruiters who identify and attract qualified candidates across all skill levels.",
    "team.hr.title": "HR Professionals",
    "team.hr.desc": "Dedicated HR team managing worker documentation, compliance, and employee relations.",
    "team.operations.title": "Operations Managers",
    "team.operations.desc": "Field managers ensuring smooth deployment and ongoing worker performance.",
    "team.support.title": "Client Support",
    "team.support.desc": "Responsive support team available to address any concerns or requirements promptly.",

    // Goals Section
    "goals.badge": "Our Goals",
    "goals.title1": "Building Pakistan's",
    "goals.title2": "Workforce Future",
    "goals.intro": "Our strategic goals guide us toward becoming the leading workforce solutions provider in Pakistan, focused on quality staffing and meaningful employment.",
    "goals.goal1.title": "Expand Worker Network",
    "goals.goal1.desc": "Continuously grow our pool of vetted, skilled workers to meet increasing client demands across all industries.",
    "goals.goal2.title": "Enhance Training Programs",
    "goals.goal2.desc": "Invest in comprehensive training facilities and programs to upskill workers and improve service quality.",
    "goals.goal3.title": "Client Partnership Focus",
    "goals.goal3.desc": "Build long-term partnerships with clients by consistently delivering reliable workforce solutions.",
    "goals.goal4.title": "Worker Welfare",
    "goals.goal4.desc": "Ensure fair wages, safe working conditions, and career development opportunities for all workers.",
    "goals.goal5.title": "National Coverage",
    "goals.goal5.desc": "Expand our operations to serve clients across all major cities and industrial zones in Pakistan.",

    // Contact Section
    "contact.badge": "Contact Us",
    "contact.title1": "Request",
    "contact.title2": "Workforce Support",
    "contact.intro": "Need reliable workers for your project? Tell us your requirements and we will provide a customized staffing solution.",
    "contact.form.name": "Contact Person",
    "contact.form.email": "Email Address",
    "contact.form.phone": "Phone Number",
    "contact.form.company": "Company Name",
    "contact.form.workers": "Number of Workers Needed",
    "contact.form.workerType": "Type of Workers",
    "contact.form.selectWorkerType": "Select worker type",
    "contact.form.duration": "Duration of Service",
    "contact.form.message": "Project Details",
    "contact.form.submit": "Request Workforce Quote",
    "contact.info.title": "Contact Information",
    "contact.info.desc": "Reach out to us through any of the following channels:",
    "contact.hours.title": "Business Hours",
    "contact.hours.weekdays": "Monday - Friday: 8:00 AM - 6:00 PM",
    "contact.hours.saturday": "Saturday: 9:00 AM - 2:00 PM",
    "contact.hours.sunday": "Sunday: Closed",

    // Footer
    "footer.description": "Saudi Arabia's trusted general contracting company, delivering excellence in residential, commercial, and industrial construction projects.",
    "footer.quickLinks": "Quick Links",
    "footer.ourServices": "Our Services",
    "footer.contactUs": "Contact Us",
    "footer.rights": "All rights reserved.",
    "footer.registration": "Registration",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "خدماتنا",
    "nav.industries": "الصناعات",
    "nav.values": "لماذا نحن",
    "nav.team": "فريقنا",
    "nav.contact": "اتصل بنا",
    "nav.getQuote": "طلب عرض أسعار",

    // Hero Section
    "hero.badge": "خدمات المقاولات العامة والبناء الرائدة في المملكة العربية السعودية",
    "hero.title1": "بناء التميز،",
    "hero.title2": "تقديم الجودة",
    "hero.description": "الإتقان المها للمقاولات العامة تقدم خدمات بناء ومقاولات استثنائية في جميع أنحاء المملكة العربية السعودية. نحن متخصصون في المشاريع السكنية والتجارية والصناعية بجودة واحترافية لا مثيل لها.",
    "hero.highlight1": "عمالة ماهرة وغير ماهرة",
    "hero.highlight2": "القوى العاملة الصناعية",
    "hero.highlight3": "دعم طاقم الفعاليات",
    "hero.cta1": "طلب قوى عاملة",
    "hero.cta2": "استكشف خدماتنا",
    "hero.scroll": "انتقل للأسفل",

    // Partners Section
    "partners.badge": "موثوق من قبل",
    "partners.title1": "عمالنا تعمل مع",
    "partners.title2": "الشركات الرائدة",
    "partners.description": "نفخر بتوفير محترفين مهرة لبعض أكثر الشركات احتراماً في باكستان.",

    // About Section
    "about.badge": "من نحن",
    "about.title1": "شريكك الموثوق",
    "about.title2": "للقوى العاملة",
    "about.intro": "الإتقان المها هي شركة مقاولات عامة رائدة في المملكة العربية السعودية، متخصصة في تقديم مشاريع بناء استثنائية في جميع القطاعات.",
    "about.storyTitle": "من نحن",
    "about.story1": "الإتقان المها للمقاولات العامة هي شركة بناء محترفة تقدم خدمات مقاولات شاملة للمشاريع السكنية والتجارية والصناعية. نحن نجمع بين الحرفية الخبيرة والتكنولوجيا الحديثة ومعايير الجودة الصارمة لضمان تجاوز كل مشروع توقعات العملاء.",
    "about.story2": "كشريك موثوق لتوريد العمالة يعمل في جميع أنحاء باكستان، نحن نفهم التحديات التي تواجهها الشركات في إيجاد عمال موثوقين. تساعد حلول التوظيف الشاملة لدينا الشركات على توسيع قوتها العاملة بكفاءة مع الحفاظ على الجودة والامتثال.",
    "about.satisfaction": "رضا العملاء",
    "about.licensed": "مرخصة ومسجلة",
    "about.professional": "عمال مفحوصون",
    "about.quality": "جودة مضمونة",
    "about.safety": "مدربون على السلامة",
    "about.visionTitle": "رؤيتنا",
    "about.vision": "أن نصبح مزود حلول القوى العاملة الأكثر ثقة في باكستان، تمكين الشركات بعمالة موثوقة وماهرة مع خلق فرص عمل هادفة للعمال في جميع أنحاء البلاد.",
    "about.missionTitle": "مهمتنا",
    "about.mission": "تقديم خدمات توظيف استثنائية من خلال التوظيف الصارم والتدريب الشامل وإدارة العمال المتفانية - ضمان حصول كل عميل على عمالة موثوقة ومهنية تلبي احتياجاته الخاصة.",

    // Services Section
    "services.badge": "خدماتنا",
    "services.title1": "حلول قوى عاملة",
    "services.title2": "شاملة",
    "services.intro": "من العمالة العامة إلى الفنيين المهرة، نقدم خدمات توظيف شاملة مصممة لتلبية احتياجات عملك في جميع الصناعات.",
    "services.general.title": "توظيف العمالة العامة",
    "services.general.desc": "عمال عامون موثوقون لمختلف الاحتياجات التشغيلية. تتعامل قوتنا العاملة المفحوصة مع التحميل والتفريغ والتخزين والتعبئة والمهام الأساسية الأخرى باحترافية وكفاءة.",
    "services.skilled.title": "توريد العمال المهرة",
    "services.skilled.desc": "كهربائيون ونجارون وسباكون ولحامون وفنيون معتمدون للمهام المتخصصة. جميع العمال المهرة موثقون ومدربون وذوو خبرة في حرفهم.",
    "services.industrial.title": "الصناعة والتصنيع",
    "services.industrial.desc": "عمال أرضية المصنع ومشغلو الآلات وموظفو خط الإنتاج لمرافق التصنيع. نضمن فهم جميع العمال لبروتوكولات السلامة ومعايير الجودة.",
    "services.events.title": "طاقم الفعاليات والدعم",
    "services.events.desc": "طاقم فعاليات محترف للإعداد والخدمة ودعم تقديم الطعام واللوجستيات. عمال الفعاليات لدينا مدربون على معايير الضيافة والتفاعل مع العملاء.",
    "services.temporary.title": "التوظيف المؤقت والتعاقدي",
    "services.temporary.desc": "حلول توظيف مرنة للمشاريع قصيرة المدى أو الذروات الموسمية أو المتطلبات القائمة على العقود. قم بتوسيع أو تقليص قوتك العاملة حسب الحاجة.",
    "services.housekeeping.title": "التدبير المنزلي والتنظيف",
    "services.housekeeping.desc": "طاقم تنظيف وتدبير منزلي محترف للمباني التجارية والمكاتب والفنادق والمرافق. مدربون على تقنيات التنظيف الحديثة ومعايير النظافة.",

    // Industries Section
    "industries.badge": "الصناعات التي نخدمها",
    "industries.title1": "حلول القوى العاملة",
    "industries.title2": "لكل صناعة",
    "industries.intro": "نقدم توظيف عمالة متخصصة عبر قطاعات متنوعة، مع فهم المتطلبات الفريدة لكل صناعة.",
    "industries.construction": "البناء",
    "industries.manufacturing": "التصنيع",
    "industries.logistics": "اللوجستيات والتخزين",
    "industries.hospitality": "الضيافة والفعاليات",
    "industries.retail": "التجزئة",
    "industries.facility": "إدارة المرافق",

    // Values Section
    "values.badge": "لماذا تختارنا",
    "values.title1": "ميزة",
    "values.title2": "الإتقان المها",
    "values.intro": "نميز أنفسنا من خلال التزامنا بالجودة والموثوقية ورضا العملاء.",
    "values.vetting.title": "فحص صارم",
    "values.vetting.desc": "يخضع كل عامل للتحقق من الخلفية والتحقق من المهارات والتحقق من المراجع.",
    "values.training.title": "تدريب شامل",
    "values.training.desc": "يتلقى العمال تدريباً خاصاً بالعمل وبروتوكولات السلامة وإرشادات السلوك المهني.",
    "values.reliability.title": "موثوقية مضمونة",
    "values.reliability.desc": "نضمن وصول العمال في الوقت المحدد، في كل مرة، مع دعم احتياطي متاح دائماً.",
    "values.compliance.title": "امتثال كامل",
    "values.compliance.desc": "جميع العمال موثقون بشكل صحيح ومتوافقون مع أنظمة العمل المحلية.",
    "values.support.title": "دعم على مدار الساعة",
    "values.support.desc": "مديرو حسابات مخصصون ودعم على مدار الساعة لجميع احتياجات التوظيف الخاصة بك.",
    "values.scalable.title": "حلول قابلة للتوسع",
    "values.scalable.desc": "قم بتوسيع أو تقليص قوتك العاملة بسهولة بناءً على متطلبات المشروع والموسمية.",

    // Team Section
    "team.badge": "فريقنا",
    "team.title1": "خبراء التوظيف",
    "team.title2": "والإدارة",
    "team.description": "يعمل فريقنا المتفاني من محترفي الموارد البشرية والمجندين ومديري العمليات بلا كلل للعثور على أفضل العمال وفحصهم وتدريبهم ونشرهم لاحتياجات عملك.",
    "team.badge.title": "خبراء",
    "team.badge.subtitle": "فريق التوظيف",
    "team.recruitment.title": "متخصصو التوظيف",
    "team.recruitment.desc": "مجندون ذوو خبرة يحددون ويجذبون المرشحين المؤهلين عبر جميع مستويات المهارات.",
    "team.hr.title": "محترفو الموارد البشرية",
    "team.hr.desc": "فريق موارد بشرية مخصص يدير توثيق العمال والامتثال وعلاقات الموظفين.",
    "team.operations.title": "مديرو العمليات",
    "team.operations.desc": "مديرون ميدانيون يضمنون النشر السلس والأداء المستمر للعمال.",
    "team.support.title": "دعم العملاء",
    "team.support.desc": "فريق دعم سريع الاستجابة متاح لمعالجة أي مخاوف أو متطلبات على الفور.",

    // Goals Section
    "goals.badge": "أهدافنا",
    "goals.title1": "بناء مستقبل",
    "goals.title2": "القوى العاملة في باكستان",
    "goals.intro": "توجهنا أهدافنا الاستراتيجية نحو أن نصبح مزود حلول القوى العاملة الرائد في باكستان، مع التركيز على التوظيف الجيد والتوظيف الهادف.",
    "goals.goal1.title": "توسيع شبكة العمال",
    "goals.goal1.desc": "تنمية مجموعتنا من العمال المفحوصين والمهرة باستمرار لتلبية الطلبات المتزايدة للعملاء في جميع الصناعات.",
    "goals.goal2.title": "تعزيز برامج التدريب",
    "goals.goal2.desc": "الاستثمار في مرافق وبرامج تدريب شاملة لرفع مهارات العمال وتحسين جودة الخدمة.",
    "goals.goal3.title": "التركيز على شراكة العملاء",
    "goals.goal3.desc": "بناء شراكات طويلة الأمد مع العملاء من خلال تقديم حلول قوى عاملة موثوقة باستمرار.",
    "goals.goal4.title": "رفاهية العمال",
    "goals.goal4.desc": "ضمان أجور عادلة وظروف عمل آمنة وفرص تطوير مهني لجميع العمال.",
    "goals.goal5.title": "تغطية وطنية",
    "goals.goal5.desc": "توسيع عملياتنا لخدمة العملاء في جميع المدن الرئيسية والمناطق الصناعية في باكستان.",

    // Contact Section
    "contact.badge": "اتصل بنا",
    "contact.title1": "طلب",
    "contact.title2": "دعم القوى العاملة",
    "contact.intro": "هل تحتاج عمالاً موثوقين لمشروعك؟ أخبرنا بمتطلباتك وسنقدم حل توظيف مخصص.",
    "contact.form.name": "الشخص المسؤول",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.phone": "رقم الهاتف",
    "contact.form.company": "اسم الشركة",
    "contact.form.workers": "عدد العمال المطلوبين",
    "contact.form.workerType": "نوع العمال",
    "contact.form.selectWorkerType": "اختر نوع العمال",
    "contact.form.duration": "مدة الخدمة",
    "contact.form.message": "تفاصيل المشروع",
    "contact.form.submit": "طلب عرض أسعار للقوى العاملة",
    "contact.info.title": "معلومات الاتصال",
    "contact.info.desc": "تواصل معنا عبر أي من القنوات التالية:",
    "contact.hours.title": "ساعات العمل",
    "contact.hours.weekdays": "الإثنين - الجمعة: 8:00 صباحاً - 6:00 مساءً",
    "contact.hours.saturday": "السبت: 9:00 صباحاً - 2:00 مساءً",
    "contact.hours.sunday": "الأحد: مغلق",

    // Footer
    "footer.description": "شركة المقاولات العامة الموثوقة في المملكة العربية السعودية، تقدم التميز في مشاريع البناء السكنية والتجارية والصناعية.",
    "footer.quickLinks": "روابط سريعة",
    "footer.ourServices": "خدماتنا",
    "footer.contactUs": "اتصل بنا",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.registration": "التسجيل",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  const isRTL = language === "ar";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
