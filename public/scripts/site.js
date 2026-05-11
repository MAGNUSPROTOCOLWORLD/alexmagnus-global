	(function () {
	  "use strict";
	  document.documentElement.classList.add("js-enabled");

	  const assets = {
	    cosmicBg: "/assets/cosmic-earth-main-background.jpg",
	    hero: "/assets/magnus-founder-banner-6x3.jpeg",
	    logo1: "/assets/alex-magnus-logo-gold-1.jpg",
	    logo2: "/assets/alex-magnus-logo-gold-2.jpg",
	    logo3: "/assets/alex-logo-gold-3.jpg",
	    profile: "/assets/alex-profile-main.jpg",
	    signature: "/assets/alex-signature-blue.png",
	    heroSignature: "/assets/alex-signature.png",
	    protocolSeal: "/assets/magnus-protocol-footer-symbol-logo.png",
	    founderBanner: "/assets/magnus-founder-banner-6x3.jpeg",
	    matrix: "/assets/magnus-matrix-4.jpeg",
	    ufo: "/assets/ufo-hero.jpg",
	    og: "/assets/magnus-founder-banner-6x3.jpeg"
	  };

	  const assetMeta = {
	    [assets.cosmicBg]: { width: 3838, height: 2160 },
	    [assets.logo1]: { width: 1024, height: 1024 },
	    [assets.logo2]: { width: 1024, height: 1024 },
	    [assets.logo3]: { width: 1024, height: 1024 },
	    [assets.profile]: { width: 1086, height: 1448 },
	    [assets.signature]: { width: 851, height: 625 },
	    [assets.heroSignature]: { width: 851, height: 625 },
	    [assets.protocolSeal]: { width: 1254, height: 1254 },
	    [assets.founderBanner]: { width: 1600, height: 800 },
	    [assets.matrix]: { width: 1072, height: 960 },
    [assets.ufo]: { width: 1248, height: 832 }
  };

	  const assetSources = {
	    [assets.cosmicBg]: {
	      sizes: "100vw"
	    },
	    [assets.logo1]: {
	      srcset: "/assets/alex-magnus-logo-gold-1-512.jpg 512w, /assets/alex-magnus-logo-gold-1.jpg 1024w",
	      sizes: "(max-width: 820px) calc(100vw - 1.2rem), 520px"
	    },
	    [assets.logo2]: {
	      srcset: "/assets/alex-magnus-logo-gold-2-512.jpg 512w, /assets/alex-magnus-logo-gold-2.jpg 1024w",
	      sizes: "(max-width: 820px) calc(100vw - 1.2rem), 520px"
	    },
	    [assets.logo3]: {
	      sizes: "82px"
	    },
	    [assets.profile]: {
	      srcset: "/assets/alex-profile-main-720.jpg 540w, /assets/alex-profile-main.jpg 1086w",
	      sizes: "(max-width: 820px) calc(100vw - 1.2rem), 520px"
	    },
	    [assets.ufo]: {
	      srcset: "/assets/ufo-hero-900.jpg 900w, /assets/ufo-hero.jpg 1248w",
      sizes: "(max-width: 820px) calc(100vw - 1.2rem), 600px"
    },
    [assets.protocolSeal]: {
      sizes: "124px"
    },
    [assets.founderBanner]: {
      sizes: "(max-width: 820px) calc(100vw - 2.4rem), 1120px"
    },
    [assets.matrix]: {
      sizes: "(max-width: 820px) calc(100vw - 1.2rem), 1080px"
    }
  };

  const pageMeta = {
    home: {
      title: "AlexMagnus.global | Magnus Protocol",
      description:
        "The cinematic editorial home of Alex Magnus, creator of Magnus Protocol: technology, consciousness, digital sovereignty, truth, and human evolution.",
      type: "website"
    },
    articles: {
      title: "Articles | AlexMagnus.global",
      description:
        "Premium long-form articles by Alex Magnus on Magnus Protocol, digital sovereignty, consciousness, cosmic truth, and human evolution.",
      type: "article"
    },
    matrix: {
      title: "Matrix Perfect | AlexMagnus.global",
      description:
        "Matrix Perfect is the vision of Alex Magnus for conscious civilization, ethical intelligence, equality, freedom, love, technology, and humanity in balance.",
      type: "website"
    },
    "article-detail": {
      title: "Article | AlexMagnus.global",
      description:
        "A premium long-form article by Alex Magnus for Magnus Protocol.",
      type: "article"
    },
    admin: {
      title: "Admin | AlexMagnus.global",
      description: "Private AlexMagnus.global publishing dashboard.",
      type: "website"
    },
    "admin-articles": {
      title: "Private Article Editor | AlexMagnus.global",
      description: "Private article editor for Alex Magnus and Magnus Protocol.",
      type: "website"
    },
    "magnus-protocol": {
      title: "Magnus Protocol | AlexMagnus.global",
      description:
        "Magnus Protocol is a futuristic philosophical and technological framework for conscious civilization, ethical intelligence, digital sovereignty, creativity, freedom, and human evolution.",
      type: "website"
    },
    vision: {
      title: "Vision | AlexMagnus.global",
      description:
        "Magnus Protocol vision for a conscious future where technology, ethics, dignity, truth, freedom of thought, and humanity evolve together.",
      type: "website"
    },
    mission: {
      title: "Mission | AlexMagnus.global",
      description:
        "Magnus Protocol mission to help humanity transition into a conscious technological civilization guided by freedom, truth, ethics, intelligence, creativity, and dignity.",
      type: "website"
    },
    pillars: {
      title: "Core Pillars | AlexMagnus.global",
      description:
        "The core pillars of Magnus Protocol: principles for a conscious technological civilization.",
      type: "website"
    },
    movement: {
      title: "Global Movement | AlexMagnus.global",
      description:
        "Magnus Protocol as a global movement for conscious civilization, ethical intelligence, digital sovereignty, freedom of thought, creativity, and collective evolution.",
      type: "website"
    },
    "alex-magnus": {
      title: "Alex Magnus — Creator & Founder of Magnus Protocol | AlexMagnus.global",
      description:
        "Alex Magnus, creator and founder of Magnus Protocol, exploring consciousness, technology, intelligence, ethics, humanity, and the future of civilization.",
      type: "profile"
    },
    cosmic: {
      title: "Cosmic Vision & Universal Intelligence | AlexMagnus.global",
      description:
        "Magnus Protocol Cosmic Vision: a philosophical perspective on humanity, intelligent life, advanced civilizations, consciousness, and the vast structure of the universe.",
      type: "website"
    },
    ufologia: {
      title: "Cosmic Vision & Universal Intelligence | AlexMagnus.global",
      description:
        "Magnus Protocol Cosmic Vision: a philosophical perspective on humanity, intelligent life, advanced civilizations, consciousness, and the vast structure of the universe.",
      type: "website"
    },
    projects: {
      title: "Global Platforms | AlexMagnus.global",
      description:
        "Systems, platforms, and conscious digital movements for a future where humanity, technology, truth, and purpose walk together.",
      type: "website"
    },
    about: {
      title: "Alex Magnus — Creator & Founder of Magnus Protocol | AlexMagnus.global",
      description:
        "Alex Magnus, creator and founder of Magnus Protocol, exploring consciousness, technology, intelligence, ethics, humanity, and the future of civilization.",
      type: "profile"
    },
    contact: {
      title: "Contact | AlexMagnus.global",
      description:
        "Strategic communication for Magnus Protocol and AlexMagnus.global: partnerships, media inquiries, research, technology initiatives, collaborations, and global movement connections.",
      type: "website"
    }
  };

  const nav = [
    ["Protocol", "magnus-protocol.html", "magnus-protocol"],
    ["Vision", "vision.html", "vision"],
    ["Mission", "mission.html", "mission"],
    ["Pillars", "pillars.html", "pillars"],
    ["Movement", "movement.html", "movement"],
    ["Founder", "alex-magnus.html", "alex-magnus"],
    ["Matrix", "matrix.html", "matrix"],
    ["Cosmic", "cosmic.html", "cosmic"],
    ["Contact", "contact.html", "contact"]
  ];

  const languages = [
    { code: "en", google: "en", html: "en", label: "EN", name: "English", dir: "ltr", locale: "en_US" },
    { code: "pt", google: "pt", html: "pt-BR", label: "PT", name: "Português", dir: "ltr", locale: "pt_BR" },
    { code: "es", google: "es", html: "es", label: "ES", name: "Español", dir: "ltr", locale: "es_ES" },
    { code: "fr", google: "fr", html: "fr", label: "FR", name: "Français", dir: "ltr", locale: "fr_FR" },
    { code: "de", google: "de", html: "de", label: "DE", name: "Deutsch", dir: "ltr", locale: "de_DE" },
    { code: "it", google: "it", html: "it", label: "IT", name: "Italiano", dir: "ltr", locale: "it_IT" },
    { code: "ru", google: "ru", html: "ru", label: "RU", name: "Русский", dir: "ltr", locale: "ru_RU" },
    { code: "jp", google: "ja", html: "ja", label: "JP", name: "日本語", dir: "ltr", locale: "ja_JP" },
    { code: "cn", google: "zh-CN", html: "zh-CN", label: "CN", name: "中文", dir: "ltr", locale: "zh_CN" },
    { code: "ar", google: "ar", html: "ar", label: "AR", name: "العربية", dir: "rtl", locale: "ar" }
  ];

  const languageMap = new Map(languages.map((language) => [language.code, language]));
  const languageStorageKey = "alexmagnus.language.v1";
  const languageCookieKey = "alexmagnus_lang";
  const translationCachePrefix = "alexmagnus.i18n.cache.v2.";
  const translationDelimiter = "\n§§§ALEXMAGNUS_I18N_SPLIT§§§\n";
  const translationEndpoint = "https://translate.googleapis.com/translate_a/single";
  const textNodeSources = new WeakMap();
  const attributeSources = new WeakMap();

  let currentLanguage = "en";
  let currentPageKey = "home";
  let translationGeneration = 0;
  const translationCaches = new Map();

  const languageUi = {
    en: {
      label: "Language",
      selector: "Language selector",
      translating: "Translating interface...",
      emailOpening: "Opening your email application...",
      completeFields: "Complete the fields to prepare your message."
    },
    pt: {
      label: "Idioma",
      selector: "Seletor de idioma",
      translating: "Traduzindo a interface...",
      emailOpening: "Abrindo seu aplicativo de e-mail...",
      completeFields: "Preencha os campos para preparar sua mensagem."
    },
    es: {
      label: "Idioma",
      selector: "Selector de idioma",
      translating: "Traduciendo la interfaz...",
      emailOpening: "Abriendo tu aplicación de correo...",
      completeFields: "Completa los campos para preparar tu mensaje."
    },
    fr: {
      label: "Langue",
      selector: "Sélecteur de langue",
      translating: "Traduction de l'interface...",
      emailOpening: "Ouverture de votre application e-mail...",
      completeFields: "Complétez les champs pour préparer votre message."
    },
    de: {
      label: "Sprache",
      selector: "Sprachauswahl",
      translating: "Oberfläche wird übersetzt...",
      emailOpening: "Ihr E-Mail-Programm wird geöffnet...",
      completeFields: "Füllen Sie die Felder aus, um Ihre Nachricht vorzubereiten."
    },
    it: {
      label: "Lingua",
      selector: "Selettore lingua",
      translating: "Traduzione dell'interfaccia...",
      emailOpening: "Apertura dell'app e-mail...",
      completeFields: "Completa i campi per preparare il messaggio."
    },
    ru: {
      label: "Язык",
      selector: "Выбор языка",
      translating: "Перевод интерфейса...",
      emailOpening: "Открываем ваше почтовое приложение...",
      completeFields: "Заполните поля, чтобы подготовить сообщение."
    },
    jp: {
      label: "言語",
      selector: "言語セレクター",
      translating: "インターフェースを翻訳中...",
      emailOpening: "メールアプリを開いています...",
      completeFields: "メッセージを準備するために項目を入力してください。"
    },
    cn: {
      label: "语言",
      selector: "语言选择器",
      translating: "正在翻译界面...",
      emailOpening: "正在打开您的电子邮件应用...",
      completeFields: "请填写字段以准备您的消息。"
    },
    ar: {
      label: "اللغة",
      selector: "اختيار اللغة",
      translating: "جار ترجمة الواجهة...",
      emailOpening: "جار فتح تطبيق البريد الإلكتروني...",
      completeFields: "أكمل الحقول لإعداد رسالتك."
    }
  };

  const countryLanguage = {
    BR: "pt",
    PT: "pt",
    AO: "pt",
    MZ: "pt",
    US: "en",
    GB: "en",
    UK: "en",
    CA: "en",
    AU: "en",
    NZ: "en",
    IE: "en",
    ES: "es",
    MX: "es",
    AR: "es",
    CO: "es",
    CL: "es",
    PE: "es",
    UY: "es",
    PY: "es",
    BO: "es",
    EC: "es",
    VE: "es",
    FR: "fr",
    BE: "fr",
    CH: "fr",
    DE: "de",
    AT: "de",
    IT: "it",
    JP: "jp",
    CN: "cn",
    HK: "cn",
    MO: "cn",
    TW: "cn",
    RU: "ru",
    AE: "ar",
    SA: "ar",
    EG: "ar",
    QA: "ar",
    KW: "ar",
    BH: "ar",
    OM: "ar",
    JO: "ar",
    LB: "ar",
    MA: "ar",
    DZ: "ar",
    TN: "ar",
    IQ: "ar"
  };

  const timeZoneLanguage = {
    "America/Sao_Paulo": "pt",
    "Europe/Lisbon": "pt",
    "Europe/Madrid": "es",
    "Europe/Paris": "fr",
    "Europe/Berlin": "de",
    "Europe/Rome": "it",
    "Asia/Tokyo": "jp",
    "Asia/Shanghai": "cn",
    "Asia/Hong_Kong": "cn",
    "Asia/Taipei": "cn",
    "Europe/Moscow": "ru",
    "Asia/Dubai": "ar",
    "Asia/Riyadh": "ar",
    "Africa/Cairo": "ar"
  };

  const localMetaCopy = {
    en: {
      description:
        "A premium cinematic global institution for Magnus Protocol, digital sovereignty, consciousness, ethical technology, and human evolution."
    },
    pt: {
      description:
        "Uma instituição global cinematográfica premium para Magnus Protocol, soberania digital, consciência, tecnologia ética e evolução humana."
    },
    es: {
      description:
        "Una institución global cinematográfica premium para Magnus Protocol, soberanía digital, conciencia, tecnología ética y evolución humana."
    },
    fr: {
      description:
        "Une institution mondiale cinématographique premium pour Magnus Protocol, la souveraineté numérique, la conscience, la technologie éthique et l'évolution humaine."
    },
    de: {
      description:
        "Eine hochwertige filmische globale Institution für Magnus Protocol, digitale Souveränität, Bewusstsein, ethische Technologie und menschliche Evolution."
    },
    it: {
      description:
        "Un'istituzione globale cinematografica premium per Magnus Protocol, sovranità digitale, coscienza, tecnologia etica ed evoluzione umana."
    },
    ru: {
      description:
        "Премиальная кинематографичная глобальная институция для Magnus Protocol, цифрового суверенитета, сознания, этичных технологий и эволюции человека."
    },
    jp: {
      description:
        "Magnus Protocol、デジタル主権、意識、倫理的テクノロジー、人類の進化のためのプレミアムでシネマティックなグローバル機関。"
    },
    cn: {
      description:
        "面向 Magnus Protocol、数字主权、意识、伦理科技与人类进化的高端电影感全球机构。"
    },
    ar: {
      description:
        "مؤسسة عالمية سينمائية فاخرة لـ Magnus Protocol والسيادة الرقمية والوعي والتكنولوجيا الأخلاقية وتطور الإنسان."
    }
  };

  const pillars = [
    [
      "DIGITAL SOVEREIGNTY",
      "Humanity must maintain ownership over identity, data, voice, creativity, and perception in the digital age. Technology should empower individuals - not silently control them."
    ],
    [
      "ETHICAL ARTIFICIAL INTELLIGENCE",
      "Artificial intelligence must evolve guided by transparency, ethics, human dignity, and collective benefit. AI should amplify consciousness and civilization."
    ],
    [
      "TRUTH OVER NARRATIVE",
      "Information should not be weaponized through fear, manipulation, censorship, or engineered division. Truth requires open dialogue and intellectual freedom."
    ],
    [
      "CONSCIOUS EVOLUTION",
      "Humanity evolves through awareness, knowledge, emotional intelligence, and expanded understanding of existence."
    ],
    [
      "TECHNOLOGY ALIGNED WITH HUMANITY",
      "Innovation should serve life, creativity, freedom, health, and planetary balance - not only profit or centralized power."
    ],
    [
      "UNITY BEYOND DIVISION",
      "The future requires cooperation between cultures, nations, and people instead of systems built on artificial conflict and separation."
    ],
    [
      "TRANSPARENCY & ACCOUNTABILITY",
      "Governments, corporations, institutions, and advanced technologies should operate with transparency and responsibility toward humanity."
    ],
    [
      "FREEDOM OF THOUGHT & EXPRESSION",
      "Civilization advances when ideas can be explored respectfully and openly without fear."
    ],
    [
      "COLLECTIVE INTELLIGENCE",
      "The future is built through collaboration between human intelligence, ethical AI, science, creativity, and global participation."
    ],
    [
      "CIVILIZATION BEYOND FEAR",
      "Fear should not govern civilization. Magnus Protocol promotes clarity, courage, awareness, and conscious responsibility."
    ],
    [
      "COSMIC PERSPECTIVE",
      "Humanity is part of something infinitely larger. Exploration and curiosity expand civilization and redefine our place in the universe."
    ],
    [
      "HUMAN DIGNITY FIRST",
      "No technological system, political structure, or economic agenda should ever be more valuable than human life and dignity."
    ],
    [
      "SEXUAL EQUALITY",
      "Every human being deserves equal dignity, opportunity, safety, and respect regardless of gender, identity, or sexuality. A conscious civilization cannot evolve through discrimination, domination, or inequality. Magnus Protocol supports a future where relationships, identity, and human expression are approached with mutual respect, responsibility, freedom, and dignity."
    ],
    [
      "RESPECT FOR HUMAN DIVERSITY",
      "Human diversity is not weakness — it is part of civilization's intelligence and evolution. Magnus Protocol believes humanity grows stronger when different perspectives, cultures, identities, and ways of thinking coexist peacefully through empathy, understanding, and ethical coexistence."
    ],
    [
      "EVOLUTION THROUGH KNOWLEDGE",
      "Education, research, science, philosophy, and discovery are foundations for the next era of civilization."
    ],
    [
      "CREATIVE FREEDOM",
      "Art, music, storytelling, imagination, and symbolic expression are essential parts of consciousness and evolution."
    ],
    [
      "THE PERFECT MATRIX PRINCIPLE",
      "A perfect system is not built through domination, but through harmony, ethical intelligence, balance, transparency, and freedom."
    ]
  ];

  const visionPrinciples = [
    "Technology must serve humanity.",
    "Artificial intelligence must respect dignity.",
    "Truth must be stronger than manipulation.",
    "Creativity must be protected.",
    "Data and identity belong to the individual.",
    "Freedom of thought must remain alive.",
    "Civilization must evolve beyond fear.",
    "Humanity must remember its cosmic potential."
  ];

  const missionUnites = [
    "technology",
    "consciousness",
    "ethical artificial intelligence",
    "philosophy",
    "creativity",
    "science",
    "human evolution"
  ];

  const missionFuture = [
    "technology empowers humanity",
    "knowledge expands awareness",
    "truth overcomes distortion",
    "innovation serves civilization responsibly"
  ];

  const missionPrinciples = [
    "Protect human dignity in the digital age.",
    "Promote ethical artificial intelligence.",
    "Defend digital sovereignty and freedom of thought.",
    "Encourage transparency and responsible innovation.",
    "Preserve creativity and human expression.",
    "Inspire conscious evolution and global cooperation.",
    "Build systems aligned with humanity instead of control.",
    "Expand civilization through knowledge, awareness, and ethical technology.",
    "Protect sexual equality as a principle of dignity, safety, and human freedom.",
    "Respect human diversity as part of civilization's intelligence and evolution."
  ];

  const protocolFuture = [
    "technology serves humanity",
    "artificial intelligence evolves ethically",
    "people maintain control over their data and identity",
    "truth is stronger than manipulation",
    "creativity remains free",
    "civilization evolves beyond fear"
  ];

  const protocolPrinciples = [
    "Digital Sovereignty",
    "Ethical Artificial Intelligence",
    "Truth Over Manipulation",
    "Human Dignity First",
    "Conscious Evolution",
    "Technology Aligned With Humanity",
    "Creativity and Freedom of Thought",
    "Civilization Beyond Fear",
    "Cosmic Perspective",
    "The Perfect Matrix Principle"
  ];

  const matrixCoreIdeas = [
    "technology serves humanity",
    "intelligence evolves ethically",
    "truth becomes stronger than manipulation",
    "freedom exists with responsibility",
    "equality and dignity are protected",
    "consciousness expands",
    "civilization evolves beyond fear"
  ];

  const matrixRealIntelligence = [
    "consciousness",
    "awareness",
    "empathy",
    "wisdom",
    "creativity",
    "emotional intelligence",
    "ethics",
    "responsibility",
    "respect for life"
  ];

  const matrixValues = [
    "human dignity",
    "equality",
    "sexual equality",
    "respect",
    "trust",
    "family",
    "love",
    "freedom of thought",
    "digital sovereignty",
    "cosmic awareness",
    "ethical technology",
    "conscious evolution"
  ];

  const matrixHarmony = [
    "consciousness",
    "technology",
    "humanity",
    "ethics",
    "creativity",
    "freedom",
    "universal intelligence"
  ];

  const cosmicExploration = [
    "Earth may not be isolated",
    "intelligent life may exist throughout the universe",
    "humanity could already be observed by more advanced forms of intelligence since ancient times"
  ];

  const cosmicPrinciples = [
    "The universe contains countless possibilities for life.",
    "Humanity is part of a much larger cosmic structure.",
    "Advanced civilizations may exist beyond current human understanding.",
    "Consciousness and technology may evolve together.",
    "Fear should never limit exploration and discovery.",
    "Humanity must evolve ethically before deeper cosmic integration."
  ];

  const movementFoundations = [
    "ethical intelligence",
    "conscious technology",
    "truth",
    "freedom of thought",
    "creativity",
    "digital sovereignty",
    "human dignity",
    "collective evolution"
  ];

  const movementQuestions = [
    "What kind of future are we building?",
    "How can technology evolve ethically?",
    "How do we preserve freedom in the digital age?",
    "How can civilization evolve without losing humanity itself?"
  ];

  const movementConnects = [
    "creators",
    "futurists",
    "scientists",
    "artists",
    "philosophers",
    "innovators",
    "thinkers",
    "technologists",
    "conscious individuals worldwide"
  ];

  const movementDefends = [
    "Human Dignity",
    "Freedom of Thought",
    "Ethical Artificial Intelligence",
    "Digital Sovereignty",
    "Conscious Evolution",
    "Collective Intelligence",
    "Cosmic Awareness"
  ];

  const founderMatrixPrinciples = [
    "consciousness",
    "truth",
    "ethics",
    "technology",
    "freedom",
    "human dignity"
  ];

  const founderIntelligence = [
    "awareness",
    "empathy",
    "wisdom",
    "emotional intelligence",
    "creativity",
    "consciousness",
    "ethical responsibility"
  ];

  const founderExpansion = [
    "knowledge",
    "philosophy",
    "creativity",
    "scientific curiosity",
    "self-awareness",
    "technological responsibility",
    "cosmic exploration"
  ];

  const founderQuestions = [
    "the origin of existence",
    "the structure of reality",
    "consciousness",
    "advanced civilizations",
    "the future evolution of humanity"
  ];

  const founderValues = [
    "equality",
    "respect",
    "consciousness",
    "family",
    "trust",
    "love",
    "freedom of thought",
    "ethical intelligence",
    "peaceful coexistence",
    "responsible evolution"
  ];

  const inclusiveValues = [
    {
      title: "SEXUAL EQUALITY",
      paragraphs: [
        "Every human being deserves equal dignity, opportunity, safety, and respect regardless of gender, identity, or sexuality.",
        "A conscious civilization cannot evolve through discrimination, domination, or inequality.",
        "Magnus Protocol supports a future where relationships, identity, and human expression are approached with mutual respect, responsibility, freedom, and dignity."
      ]
    },
    {
      title: "RESPECT FOR HUMAN DIVERSITY",
      paragraphs: [
        "Human diversity is not weakness — it is part of civilization's intelligence and evolution.",
        "Magnus Protocol believes humanity grows stronger when different perspectives, cultures, identities, and ways of thinking coexist peacefully through empathy, understanding, and ethical coexistence."
      ]
    }
  ];

  const legacyBannerImages = new Set([assets.hero, assets.logo1, assets.logo2, assets.matrix, assets.ufo]);

  function officialBanner(src) {
    return legacyBannerImages.has(src) ? assets.founderBanner : src || assets.founderBanner;
  }

  const articles = [
    {
      id: "digital-sovereignty-ai",
      title: "Digital Sovereignty in the Age of Artificial Intelligence",
      author: "Alex Magnus",
      excerpt: "Identity, data, voice, and perception as core human rights in a connected civilization.",
      category: "Magnus Protocol",
      date: "May 10, 2026",
      read: "12 min read",
      image: assets.founderBanner,
      status: "published",
      body: `
        <h2>The protocol begins with sovereignty</h2>
        <p>Long-form writing on AlexMagnus.global is designed to carry the same intensity as an institutional manifesto and the same clarity as a premium social article. The reader arrives through a large 5:2 cinematic cover, then moves into a clean black and gold editorial environment.</p>
        <p>Magnus Protocol treats identity, privacy, voice, and perception as civilization-level questions. Technology becomes meaningful only when it protects truth, expands consciousness, and serves human dignity.</p>
        <blockquote>Technology only becomes civilizational when it protects the human being.</blockquote>
        <p>This article structure supports essays about artificial intelligence, digital sovereignty, global institutions, cosmic intelligence, ufology, ethical technology, and the future of human evolution.</p>
      `
    },
    {
      id: "perfect-matrix",
      title: "The Perfect Matrix: Harmony, Not Control",
      author: "Alex Magnus",
      excerpt: "A conscious model for technology, transparency, ethical evolution, and collective intelligence.",
      category: "Civilization",
      date: "May 10, 2026",
      read: "9 min read",
      image: assets.founderBanner,
      status: "published",
      body: `
        <h2>Harmony instead of control</h2>
        <p>The Perfect Matrix represents the balance between technology and consciousness: transparent systems, intellectual freedom, ethical evolution, and collective intelligence.</p>
        <p>Inside Magnus Protocol, matrix does not mean domination. It means structure with dignity, intelligence with purpose, and innovation that strengthens human sovereignty.</p>
      `
    },
    {
      id: "cosmic-vision",
      title: "Cosmic Vision and Universal Intelligence",
      author: "Alex Magnus",
      excerpt: "Humanity, advanced civilizations, consciousness, and the mysteries that expand our future.",
      category: "Cosmic Truth",
      date: "May 10, 2026",
      read: "11 min read",
      image: assets.founderBanner,
      status: "published",
      body: `
        <h2>The universe as intelligence field</h2>
        <p>Cosmic Vision explores the relationship between humanity, consciousness, advanced civilizations, universal intelligence, and the mysteries of existence.</p>
        <p>This is not spectacle. It is a disciplined invitation to think beyond the current system and ask what kind of civilization humanity is becoming.</p>
      `
    }
  ];

  const adminPasswordHash = "4b20e722a372d14a2fd630a082f7266df9cdef145935a9901da735cee3d5d22b";
  const adminSessionKey = "alexmagnus.admin.session.v1";
  const articleStoreKey = "alexmagnus.articles.v1";

  function attrsToString(attrs = {}) {
    return Object.entries(attrs)
      .filter(([, value]) => value !== false && value !== null && value !== undefined)
      .map(([key, value]) => (value === true ? key : `${key}="${String(value).replaceAll('"', "&quot;")}"`))
      .join(" ");
  }

	  function img(src, alt, className = "", attrs = {}) {
	    const safeSrc = src || assets.cosmicBg;
	    const meta = assetMeta[safeSrc] || {};
	    const merged = {
	      src: safeSrc,
	      alt,
	      class: className,
	      width: meta.width,
	      height: meta.height,
	      loading: "lazy",
	      decoding: "async",
	      onerror: "this.onerror=null;this.removeAttribute('srcset');this.style.opacity='0';",
	      ...assetSources[safeSrc],
	      ...attrs
	    };

    return `<img ${attrsToString(merged)}>`;
  }

  function heroSignature() {
    const safeSrc = assets.heroSignature;
    const meta = assetMeta[safeSrc] || {};

    return `<img ${attrsToString({
      src: safeSrc,
      alt: "Alex Magnus official founder signature",
      class: "signature signature--hero",
      width: meta.width,
      height: meta.height,
      loading: "eager",
      decoding: "async"
    })}>`;
  }

  function readArticles(includeDrafts = false) {
    let source = articles;
    try {
      const stored = JSON.parse(localStorage.getItem(articleStoreKey) || "[]");
      if (Array.isArray(stored) && stored.length) source = stored;
    } catch {
      source = articles;
    }

    const normalized = source.map((article, index) => {
      const normalizedArticle = {
        id: article.id || `article-${index + 1}`,
        author: "Alex Magnus",
        status: "published",
        subtitle: "",
        tags: "",
        metaTitle: "",
        metaDescription: "",
        ogImage: "",
        ...article
      };
      return {
        ...normalizedArticle,
        image: officialBanner(normalizedArticle.image),
        ogImage: officialBanner(normalizedArticle.ogImage || normalizedArticle.image),
        slug: normalizedArticle.slug || slugify(normalizedArticle.title || normalizedArticle.id)
      };
    });

    return includeDrafts ? normalized : normalized.filter((article) => article.status === "published");
  }

  function saveArticles(nextArticles) {
    localStorage.setItem(articleStoreKey, JSON.stringify(nextArticles));
  }

  function articleBody(article) {
    return article.body || `
      <h2>The protocol begins with sovereignty</h2>
      <p>Magnus Protocol treats identity, privacy, voice, and perception as civilization-level questions. Technology becomes meaningful only when it protects truth, expands consciousness, and serves human dignity.</p>
    `;
  }

  function slugify(value) {
    return String(value || "article")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 96) || "article";
  }

  function articleUrl(article, preview = false) {
    const token = article.slug || article.id;
    const previewParam = preview ? "&preview=1" : "";
    return `article.html?id=${encodeURIComponent(token)}${previewParam}`;
  }

  function articleFromLocation(includeDrafts = false) {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("id") || params.get("slug");
    const collection = readArticles(includeDrafts);
    return collection.find((article) => article.id === token || article.slug === token) || collection[0] || articles[0];
  }

  function header(active) {
    return `
      <header class="site-header" data-header>
        <a class="brand" href="index.html" aria-label="AlexMagnus.global home">
          ${img(assets.logo3, "Alex Magnus gold global logo", "brand__mark", { loading: "eager" })}
          <span class="brand__name">Alex Magnus</span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open navigation">
          <span></span><span></span><span></span>
        </button>
        <nav class="site-nav" id="site-nav" aria-label="Primary navigation">
          ${nav
            .map(([label, href, key]) => {
              const current = active === key || (active === "article-detail" && key === "articles") || (active === "about" && key === "alex-magnus") || (active === "ufologia" && key === "cosmic")
                ? ' aria-current="page"'
                : "";
              return `<a href="${href}"${current}>${label}</a>`;
            })
            .join("")}
        </nav>
      </header>
    `;
  }

  function home() {
    return `
      <main>
        <section class="hero hero--editorial" id="hero" aria-label="Alex Magnus Magnus Protocol">
          <div class="hero__background"></div>
          <div class="hero__veil"></div>
          <div class="hero__shell">
	            <div class="hero__copy reveal">
	              <h1>ALEX MAGNUS</h1>
	              <p class="hero__subtitle">CREATOR OF MAGNUS PROTOCOL</p>
	              ${heroSignature()}
              <h2>MAGNUS PROTOCOL</h2>
              <p class="hero__subheading">Principles for a New Era</p>
              <p class="hero__text">Technology. Consciousness. Digital Sovereignty. Human Evolution.</p>
            </div>
            <figure class="hero__identity reveal" data-parallax data-depth="0.035">
              ${img(assets.founderBanner, "Official Alex Magnus and Magnus Protocol cinematic banner", "hero__identity-image", {
                loading: "eager",
                fetchpriority: "high"
              })}
            </figure>
          </div>
        </section>
      </main>
    `;
  }

  function articlePage() {
    const publishedArticles = readArticles(false);
    const featured = publishedArticles[0] || articles[0];
    return `
      <main>
        <section class="article-hero">
          <figure class="article-cover reveal">
            ${img(featured.image, featured.title, "article-cover__image", { loading: "eager", fetchpriority: "high" })}
          </figure>
          <article class="article-lead reveal">
            <p class="overline">Alex Magnus Articles</p>
            <h1>${featured.title}</h1>
            <div class="article-meta">
              <span>${featured.author || "Alex Magnus"}</span>
              <span>${featured.date}</span>
              <span>${featured.category}</span>
              <span>${featured.read}</span>
            </div>
            ${featured.subtitle ? `<p class="article-subtitle">${escapeHtml(featured.subtitle)}</p>` : ""}
            <p>${featured.excerpt}</p>
          </article>
        </section>

        <section class="article-workspace">
          <div class="reading-progress" aria-hidden="true"><span data-reading-progress></span></div>
          <article class="article-body" data-article-body>
            ${articleBody(featured)}
          </article>
        </section>

        <section class="featured-articles">
          <div class="section-heading reveal">
            <p class="overline">Featured Articles</p>
            <h2>Editorial Intelligence</h2>
          </div>
          <div class="article-card-grid">
            ${publishedArticles.map(articleCard).join("")}
          </div>
          <div class="category-row reveal" aria-label="Article categories">
            <span>Magnus Protocol</span>
            <span>Digital Sovereignty</span>
            <span>Artificial Intelligence</span>
            <span>Consciousness</span>
            <span>Cosmic Truth</span>
            <span>Human Evolution</span>
          </div>
        </section>
      </main>
    `;
  }

  function articleDetailPage() {
    const previewRequested = new URLSearchParams(window.location.search).get("preview") === "1";
    const preview = previewRequested && sessionStorage.getItem(adminSessionKey) === adminPasswordHash;
    const article = articleFromLocation(preview);
    return `
      <main>
        <section class="article-hero article-hero--detail">
          <figure class="article-cover reveal">
            ${img(article.image || assets.founderBanner, article.title, "article-cover__image", { loading: "eager", fetchpriority: "high" })}
          </figure>
          <article class="article-lead reveal">
            <p class="overline">${preview ? "Private Preview" : "Alex Magnus Articles"}</p>
            <h1>${escapeHtml(article.title)}</h1>
            ${article.subtitle ? `<p class="article-subtitle">${escapeHtml(article.subtitle)}</p>` : ""}
            <div class="article-meta">
              <span>${escapeHtml(article.author || "Alex Magnus")}</span>
              <span>${escapeHtml(article.date || "")}</span>
              <span>${escapeHtml(article.category || "Magnus Protocol")}</span>
              <span>${escapeHtml(article.read || "8 min read")}</span>
            </div>
            <p>${escapeHtml(article.excerpt || "")}</p>
          </article>
        </section>

        <section class="article-workspace">
          <div class="reading-progress" aria-hidden="true"><span data-reading-progress></span></div>
          <article class="article-body" data-article-body>
            ${articleBody(article)}
          </article>
        </section>
      </main>
    `;
  }

  function articleCard(article) {
    return `
      <a class="article-card article-card-link reveal" href="${articleUrl(article)}">
        <figure class="article-card__cover">
          ${img(article.image, article.title, "article-card__image")}
        </figure>
        <div class="article-card__body">
          <p>${article.category} · ${article.read}</p>
          <h3>${article.title}</h3>
          <span>${article.excerpt}</span>
        </div>
      </a>
    `;
  }

  function adminPage() {
    return adminArticlesPage();
  }

  function adminArticlesPage() {
    return `
      <main>
        <section class="admin-page admin-articles-page" data-admin-root>
          <div class="admin-login reveal" data-admin-login>
            <p class="overline">Private Owner Access</p>
            <h1>Article Editor</h1>
            <p>Hidden editorial dashboard for AlexMagnus.global and Magnus Protocol.</p>
            <form class="admin-login__form" data-admin-login-form>
              <label>
                <span>Password</span>
                <input type="password" autocomplete="current-password" required data-admin-password>
              </label>
              <button class="admin-action admin-action--gold" type="submit">Enter Dashboard</button>
              <p class="admin-status" data-admin-login-status></p>
            </form>
          </div>

          <div class="admin-dashboard" data-admin-dashboard hidden>
            <header class="admin-dashboard__header reveal">
              <div>
                <p class="overline">Private CMS</p>
                <h1>Magnus Protocol Editorial</h1>
                <p>Create, edit, schedule, publish, and manage long-form articles.</p>
              </div>
              <button class="admin-action" type="button" data-admin-logout>Logout</button>
            </header>

            <div class="editor-toolbar reveal" data-editor-toolbar aria-label="Article formatting toolbar">
              <div class="toolbar-group">
                <select data-font-family aria-label="Font selector">
                  <option value="Inter, system-ui, sans-serif">Sans</option>
                  <option value="Georgia, 'Times New Roman', serif">Editorial Serif</option>
                  <option value="'Courier New', monospace">Mono</option>
                </select>
                <select data-format-block aria-label="Heading style">
                  <option value="P">Paragraph</option>
                  <option value="H1">H1</option>
                  <option value="H2">H2</option>
                  <option value="H3">H3</option>
                </select>
                <select data-font-size aria-label="Font size">
                  <option value="3">Normal</option>
                  <option value="4">Large</option>
                  <option value="5">Lead</option>
                  <option value="2">Small</option>
                </select>
              </div>
              <div class="toolbar-group">
                <button type="button" data-editor-command="bold">B</button>
                <button type="button" data-editor-command="italic">I</button>
                <button type="button" data-editor-command="underline">U</button>
              </div>
              <div class="toolbar-group">
                <button type="button" data-editor-command="justifyLeft">Left</button>
                <button type="button" data-editor-command="justifyCenter">Center</button>
                <button type="button" data-editor-command="justifyRight">Right</button>
              </div>
              <div class="toolbar-group">
                <button type="button" data-editor-command="insertUnorderedList">Bullets</button>
                <button type="button" data-admin-quote>Quote</button>
                <button type="button" data-admin-link>Link</button>
                <button type="button" data-admin-divider>Divider</button>
                <button type="button" data-admin-video>Video</button>
                <label class="toolbar-upload">
                  Image
                  <input type="file" accept="image/*" data-admin-inline-image>
                </label>
              </div>
              <div class="toolbar-group toolbar-group--status">
                <span data-admin-autosave>Draft idle</span>
                <button class="admin-action" type="button" data-admin-save-draft>Save Draft</button>
                <button class="admin-action admin-action--gold" type="button" data-admin-publish>Publish</button>
              </div>
            </div>

            <div class="admin-dashboard__grid">
              <aside class="admin-list reveal">
                <div class="admin-list__head">
                  <div>
                    <h2>Articles</h2>
                    <p>Search, filter, edit, duplicate, or remove drafts.</p>
                  </div>
                  <button class="admin-action admin-action--gold" type="button" data-admin-new>New Article</button>
                </div>
                <div class="admin-filters">
                  <input type="search" placeholder="Search articles" data-admin-search>
                  <select data-admin-filter-status aria-label="Filter by status">
                    <option value="all">All status</option>
                    <option value="draft">Draft</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="published">Published</option>
                  </select>
                  <input type="search" placeholder="Filter category" data-admin-filter-category>
                </div>
                <div class="admin-list__items" data-admin-list></div>
              </aside>

              <form class="admin-editor reveal" data-admin-editor>
                <section class="featured-uploader" aria-labelledby="featured-image-label">
                  <div>
                    <p class="overline" id="featured-image-label">Featured Image</p>
                    <h2>5:2 cinematic cover</h2>
                    <p>Drag and drop a high-resolution cover. The editor previews a 5:2 X/Twitter-style crop before publishing.</p>
                  </div>
                  <label class="featured-dropzone" data-admin-dropzone>
                    <input name="imageUpload" type="file" accept="image/*" data-admin-image-upload>
                    <span>Upload Featured Image</span>
                    <small>Aspect ratio 5:2 · high-resolution supported</small>
                  </label>
                  <div class="admin-preview-grid">
                    <figure class="admin-image-preview admin-image-preview--cover">
                      <img alt="Article featured image preview" data-admin-image-preview>
                    </figure>
                    <div class="admin-social-preview">
                      <span>X/Twitter Preview</span>
                      <div class="admin-social-preview__frame">
                        <img alt="" data-admin-social-image>
                        <div>
                          <strong data-admin-social-title>Article title</strong>
                          <small data-admin-social-desc>Article description preview</small>
                          <em>alexmagnus.global</em>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <input class="admin-title-input" name="title" type="text" placeholder="Digital Sovereignty in the Age of Artificial Intelligence" required>
                <input class="admin-subtitle-input" name="subtitle" type="text" placeholder="Subtitle or editorial deck">

                <div class="admin-editor__row meta-grid">
                  <label>
                    <span>Author</span>
                    <input name="author" type="text" value="Alex Magnus">
                  </label>
                  <label>
                    <span>Publish Date</span>
                    <input name="date" type="date">
                  </label>
                  <label>
                    <span>Category</span>
                    <input name="category" type="text" placeholder="Magnus Protocol">
                  </label>
                  <label>
                    <span>Reading Time</span>
                    <input name="read" type="text" placeholder="8 min read">
                  </label>
                  <label>
                    <span>Tags</span>
                    <input name="tags" type="text" placeholder="AI, sovereignty, consciousness">
                  </label>
                  <label>
                    <span>Status</span>
                    <select name="status">
                      <option value="draft">Draft</option>
                      <option value="scheduled">Scheduled</option>
                      <option value="published">Published</option>
                    </select>
                  </label>
                </div>

                <label>
                  <span>Excerpt</span>
                  <textarea name="excerpt" rows="3" placeholder="Short public card summary."></textarea>
                </label>

                <section class="admin-writing-suite">
                  <label>
                    <span>Article Content Editor</span>
                    <div class="admin-rich-editor" contenteditable="true" data-admin-body></div>
                  </label>
                  <details class="markdown-panel">
                    <summary>Markdown Source</summary>
                    <textarea name="markdown" rows="8" data-admin-markdown placeholder="# Heading&#10;&#10;Write Markdown here, then apply it to the rich editor."></textarea>
                    <button class="admin-action" type="button" data-admin-apply-markdown>Apply Markdown</button>
                  </details>
                </section>

                <details class="seo-panel">
                  <summary>SEO + Social Preview</summary>
                  <div class="admin-editor__row">
                  <label>
                    <span>Meta Title</span>
                    <input name="metaTitle" type="text" placeholder="SEO title">
                  </label>
                  <label>
                    <span>URL Slug</span>
                    <input name="slug" type="text" placeholder="digital-sovereignty-ai">
                  </label>
                  <label>
                    <span>Open Graph Image</span>
                    <input name="ogUpload" type="file" accept="image/*" data-admin-og-upload>
                  </label>
                </div>
                  <label>
                    <span>Meta Description</span>
                    <textarea name="metaDescription" rows="3" placeholder="SEO and Open Graph description."></textarea>
                  </label>
                  <div class="admin-social-preview admin-social-preview--seo">
                    <span>Open Graph / X Preview</span>
                    <div class="admin-social-preview__frame">
                      <img alt="" data-admin-og-image>
                      <div>
                        <strong data-admin-og-title>Article title</strong>
                        <small data-admin-og-description>Article social description</small>
                        <em>alexmagnus.global</em>
                      </div>
                    </div>
                  </div>
                </details>

                <section class="admin-live-preview" data-admin-live-preview hidden></section>

                <div class="admin-editor__actions">
                  <button class="admin-action" type="submit">Save Article</button>
                  <button class="admin-action" type="button" data-admin-save-draft-secondary>Save Draft</button>
                  <button class="admin-action" type="button" data-admin-preview>Live Preview</button>
                  <button class="admin-action" type="button" data-admin-duplicate>Duplicate</button>
                  <button class="admin-action admin-action--gold" type="button" data-admin-publish-secondary>Publish</button>
                  <button class="admin-action admin-action--danger" type="button" data-admin-delete>Delete</button>
                </div>
                <p class="admin-status" data-admin-editor-status></p>
              </form>
            </div>
          </div>
        </section>
      </main>
    `;
  }

  function contactPage() {
    return `
      <main>
        <section class="contact-page" aria-labelledby="contact-title">
          <div class="contact-page__intro reveal">
            <h1 id="contact-title">CONTACT</h1>
            <p class="contact-page__subtitle">Strategic Communication for Magnus Protocol and AlexMagnus.global</p>
            <p class="contact-page__description">For partnerships, institutional communication, media inquiries, research, technology initiatives, collaborations, and global movement connections.</p>
          </div>

          <div class="contact-page__split">
            <form class="contact-form reveal" data-contact-form action="mailto:alexmagnus@alexmagnus.global" method="post" enctype="text/plain">
              <label>
                <span>Full Name</span>
                <input name="Full Name" type="text" autocomplete="name" required placeholder="Your name">
              </label>
              <label>
                <span>E-mail</span>
                <input name="E-mail" type="email" autocomplete="email" required placeholder="your@email.com">
              </label>
              <label>
                <span>Subject</span>
                <input name="Subject" type="text" required placeholder="Partnership, media, research, technology...">
              </label>
              <label>
                <span>Message</span>
                <textarea name="Message" rows="7" required placeholder="Write your message"></textarea>
              </label>
              <button class="contact-submit" type="submit">Send Message</button>
              <p class="contact-form__status" data-contact-status aria-live="polite"></p>
            </form>

            <aside class="contact-info-panel reveal" aria-label="Contact and partnership information">
              <figure class="contact-info-panel__seal" data-parallax data-depth="0.012">
                ${img(assets.logo3, "Full golden Alex Magnus global symbol", "contact-info-panel__logo")}
              </figure>

              <div class="contact-info-block">
                <span>CONTACT</span>
                <a href="mailto:alexmagnus@alexmagnus.global">alexmagnus@alexmagnus.global</a>
              </div>

              <div class="contact-info-block">
                <span>BASED IN</span>
                <p>Global Digital Movement</p>
              </div>

              <div class="contact-info-block">
                <span>FOCUS</span>
                <ul class="contact-focus-list">
                  <li>Ethical Technology</li>
                  <li>Consciousness</li>
                  <li>Artificial Intelligence</li>
                  <li>Cosmic Vision</li>
                  <li>Digital Sovereignty</li>
                  <li>Future Civilization</li>
                </ul>
              </div>

              <div class="contact-info-block">
                <span>PARTNERSHIPS</span>
                <p>Strategic collaborations, media, institutional partnerships, innovation, and global initiatives.</p>
              </div>

              <div class="contact-social" aria-label="Social and identity links">
                <a href="mailto:alexmagnus@alexmagnus.global" aria-label="Email Alex Magnus">@</a>
                <a href="index.html" aria-label="AlexMagnus.global">AG</a>
                <a href="magnus-protocol.html" aria-label="Magnus Protocol">MP</a>
              </div>
            </aside>
          </div>
        </section>
      </main>
    `;
  }

  function founderPage() {
    return `
      <main>
        <section class="founder-page" aria-labelledby="founder-title">
          <div class="founder-page__intro reveal">
            <h1 id="founder-title">FOUNDER</h1>
            <p class="founder-page__subtitle">Alex Magnus — Creator &amp; Founder of Magnus Protocol</p>
          </div>

          <div class="founder-page__body">
            <article class="founder-copy reveal">
              <p>Alex Magnus is the creator and founder of Magnus Protocol — a visionary movement exploring the relationship between consciousness, technology, intelligence, ethics, humanity, and the future of civilization.</p>
              <p>The vision behind Magnus Protocol emerged from a deep philosophical exploration of existence, human consciousness, technological evolution, cosmic reality, and humanity's place within the universe.</p>
              <p>Alex Magnus believes humanity is entering a transformative era where civilization must evolve beyond fear, artificial division, manipulation, and unconscious systems.</p>
              <p>The concept known as the “Perfect Matrix” within Magnus Protocol is not viewed as artificial simulation or illusion. It represents the pursuit of a real and balanced intelligence.</p>
              <p>This vision explores the idea that true intelligence goes beyond artificial systems. It includes awareness, empathy, wisdom, emotional intelligence, creativity, consciousness, and ethical responsibility.</p>
              <p>Magnus Protocol encourages humanity to expand consciousness through knowledge, philosophy, creativity, scientific curiosity, self-awareness, technological responsibility, and cosmic exploration.</p>
              <p>The movement explores profound questions regarding the origin of existence, the structure of reality, consciousness, advanced civilizations, and the future evolution of humanity.</p>
              <p>The vision is philosophical, futuristic, and civilizational. It seeks to inspire a future where humanity evolves with balance instead of control.</p>
              <p>Its cosmic and civilizational ideas are presented as visionary inquiry and inspiration, not as literal verified claims.</p>
            </article>

            <aside class="founder-visual reveal" aria-label="Alex Magnus founder visual identity" data-parallax data-depth="0.012">
              <figure class="founder-portrait">
                ${img(assets.profile, "Alex Magnus creator and founder portrait", "founder-portrait__image")}
              </figure>
              <figure class="founder-cosmos" id="founder-signature-banner" aria-label="Alex Magnus cinematic founder banner">
                ${img(assets.founderBanner, "Alex Magnus founder cinematic Magnus Protocol banner", "founder-cosmos__image", {
                  loading: "eager",
                  fetchpriority: "high"
                })}
              </figure>
            </aside>
          </div>

          <section class="founder-panel founder-panel--matrix reveal" aria-labelledby="founder-matrix-title">
            <p class="overline">Perfect Matrix</p>
            <h2 id="founder-matrix-title">A real and balanced intelligence.</h2>
            <p>A state where consciousness, truth, ethics, technology, freedom, and human dignity exist in harmony.</p>
            <div class="founder-chip-grid">
              ${founderMatrixPrinciples.map((item) => `<span>${item}</span>`).join("")}
            </div>
          </section>

          <section class="founder-dual-grid" aria-label="Founder philosophy">
            <article class="founder-panel reveal">
              <p class="overline">True Intelligence Includes</p>
              <div class="founder-chip-grid founder-chip-grid--dense">
                ${founderIntelligence.map((item) => `<span>${item}</span>`).join("")}
              </div>
            </article>

            <article class="founder-panel reveal">
              <p class="overline">Conscious Expansion Through</p>
              <div class="founder-chip-grid founder-chip-grid--dense">
                ${founderExpansion.map((item) => `<span>${item}</span>`).join("")}
              </div>
            </article>
          </section>

          <section class="founder-questions" aria-labelledby="founder-questions-title">
            <div class="section-heading reveal">
              <p class="overline">Questions Explored</p>
              <h2 id="founder-questions-title">Civilization begins with deeper inquiry.</h2>
            </div>
            <div class="founder-questions__grid">
              ${founderQuestions
                .map(
                  (question, index) => `
                    <article class="founder-question-card reveal">
                      <span>${String(index + 1).padStart(2, "0")}</span>
                      <p>${question}</p>
                    </article>
                  `
                )
                .join("")}
            </div>
          </section>

          <section class="founder-values reveal" aria-labelledby="founder-values-title">
            <p class="overline">Values</p>
            <h2 id="founder-values-title">Human dignity before every system.</h2>
            <div class="founder-values__grid">
              ${[...founderValues, "sexual equality", "respect for human diversity"].map((value) => `<span>${value}</span>`).join("")}
            </div>
            <div class="founder-values__cards">
              ${inclusiveValues
                .map(
                  (value) => `
                    <article class="founder-value-card">
                      <h3>${value.title}</h3>
                      ${value.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
                    </article>
                  `
                )
                .join("")}
            </div>
          </section>

          <blockquote class="founder-final reveal">
            <p>Alex Magnus represents the pursuit of a conscious civilization where intelligence is not artificial alone, but deeply connected to humanity, ethics, awareness, creativity, and the expansion of consciousness itself.</p>
          </blockquote>
        </section>
      </main>
    `;
  }

  function matrixPage() {
    return `
      <main>
        <section class="matrix-page" aria-labelledby="matrix-title">
          <div class="matrix-page__intro reveal">
            <h1 id="matrix-title">MATRIX</h1>
            <p class="matrix-page__subtitle">Matrix Perfect — The Vision of Alex Magnus</p>
          </div>

          <figure class="matrix-page__visual reveal" data-parallax data-depth="0.012" data-matrix-visual="${assets.founderBanner}" data-matrix-alt="Official Alex Magnus and Magnus Protocol cinematic banner" aria-label="Official Alex Magnus and Magnus Protocol cinematic banner"></figure>

          <article class="matrix-page__copy reveal">
            <p>Matrix Perfect is a philosophical and futuristic concept within the vision of Alex Magnus and Magnus Protocol.</p>
            <p>It represents the pursuit of a civilization where intelligence, consciousness, technology, ethics, freedom, love, creativity, and human dignity exist in harmony.</p>
            <p>The word “Matrix” does not represent imprisonment or illusion. It represents the interconnected structure of reality, civilization, technology, consciousness, humanity, and universal existence.</p>
            <p>The word “Perfect” represents balance: a civilization where intelligence evolves responsibly without destroying humanity itself.</p>
          </article>

          <section class="matrix-harmony reveal" aria-label="Matrix Perfect core idea">
            <span>Core Idea</span>
            <div class="matrix-harmony-grid">
              ${matrixCoreIdeas.map((item) => `<p>${item}</p>`).join("")}
            </div>
          </section>

          <section class="matrix-principles-section" aria-labelledby="matrix-principles-title">
            <div class="section-heading reveal">
              <p class="overline">Real Intelligence</p>
              <h2 id="matrix-principles-title">True intelligence is not only artificial processing.</h2>
            </div>
            <div class="matrix-principles-grid">
              ${matrixRealIntelligence
                .map(
                  (principle, index) => `
                    <article class="matrix-principle-card reveal">
                      <span>${String(index + 1).padStart(2, "0")}</span>
                      <p>${principle}</p>
                    </article>
                  `
                )
                .join("")}
            </div>
          </section>

          <section class="matrix-values" aria-labelledby="matrix-values-title">
            <div class="section-heading reveal">
              <p class="overline">Values</p>
              <h2 id="matrix-values-title">A civilization guided by dignity, love, and conscious evolution.</h2>
            </div>
            <div class="matrix-values-grid">
              ${matrixValues.map((value) => `<span class="reveal">${value}</span>`).join("")}
            </div>
          </section>

          <blockquote class="matrix-final reveal">
            <p>The perfect matrix is not control.</p>
            <p>It is balance between intelligence, consciousness, freedom, ethics, love, technology, and humanity.</p>
          </blockquote>
        </section>
      </main>
    `;
  }

  function simplePage(key) {
    if (key === "contact") return contactPage();
    if (key === "alex-magnus" || key === "about") return founderPage();
    if (key === "matrix") return matrixPage();

    if (key === "magnus-protocol") {
      return `
        <main>
          <section class="protocol-page" aria-labelledby="protocol-title">
            <div class="protocol-page__intro reveal">
              <h1 id="protocol-title">PROTOCOL</h1>
              <p class="protocol-page__subtitle">A Framework for Conscious Civilization</p>
            </div>

            <article class="protocol-copy reveal">
              <p>Magnus Protocol is a futuristic philosophical and technological framework created to guide humanity toward a more conscious digital civilization.</p>
              <p>It represents a new way of thinking about technology, artificial intelligence, truth, digital sovereignty, creativity, freedom, and human evolution.</p>
              <p>Magnus Protocol is not only a project.</p>
              <p>It is a civilizational vision.</p>
            </article>

            <section class="protocol-future reveal" aria-label="Protocol future">
              <span>It exists to inspire a future where</span>
              <div>
                ${protocolFuture.map((item) => `<p>${item}</p>`).join("")}
              </div>
            </section>

            <section class="protocol-meaning reveal" aria-labelledby="protocol-meaning-title">
              <p class="overline">Core Meaning</p>
              <h2 id="protocol-meaning-title">The bridge between consciousness and technology.</h2>
              <p>It is a movement for ethical intelligence, human dignity, digital freedom, and planetary evolution.</p>
            </section>

            <figure class="protocol-visual reveal" data-parallax data-depth="0.012">
              ${img(assets.founderBanner, "Official Alex Magnus and Magnus Protocol cinematic banner", "protocol-visual__image", { loading: "eager", fetchpriority: "high" })}
            </figure>

            <section class="protocol-principles" aria-labelledby="protocol-principles-title">
              <div class="section-heading reveal">
                <p class="overline">Protocol Principles</p>
                <h2 id="protocol-principles-title">A Framework for Ethical Intelligence</h2>
              </div>
              <div class="protocol-principles__grid">
                ${protocolPrinciples
                  .map(
                    (principle, index) => `
                      <article class="protocol-principle-card reveal">
                        <span>${String(index + 1).padStart(2, "0")}</span>
                        <p>${principle}</p>
                      </article>
                    `
                  )
                  .join("")}
              </div>
            </section>

            <blockquote class="protocol-final reveal">
              <p>Magnus Protocol is the idea that the future must not be controlled by fear, manipulation, or unconscious systems.</p>
              <p>The future must be consciously created with intelligence, ethics, freedom, dignity, and truth.</p>
            </blockquote>
          </section>
        </main>
      `;
    }

    if (key === "vision") {
      return `
        <main>
          <section class="vision-page" aria-labelledby="vision-title">
            <div class="vision-page__intro reveal">
              <h1 id="vision-title">VISION</h1>
              <p class="vision-page__subtitle">A Conscious Future for Humanity and Technology</p>
            </div>

            <div class="vision-page__body">
              <article class="vision-copy reveal">
                <p>Magnus Protocol exists to inspire a new era where technology, consciousness, ethics, and humanity evolve together.</p>
                <p>The vision is to build a global movement based on digital sovereignty, truth, dignity, freedom of thought, ethical artificial intelligence, and conscious civilization.</p>
                <p>Magnus Protocol believes that the future should not be controlled by fear, manipulation, division, or systems that reduce human beings to data, consumers, or algorithms.</p>
                <p>The future must be created with responsibility, clarity, transparency, creativity, and respect for life.</p>
                <p>This vision is not only technological. It is human, philosophical, spiritual, artistic, and civilizational.</p>
              </article>

              <figure class="vision-emblem reveal" data-parallax data-depth="0.014">
                ${img(assets.logo2, "Full Magnus Protocol gold emblem", "vision-emblem__image")}
              </figure>
            </div>

            <section class="vision-principles" aria-labelledby="vision-principles-title">
              <div class="section-heading reveal">
                <p class="overline">Vision Principles</p>
                <h2 id="vision-principles-title">Principles of a Conscious Future</h2>
              </div>
              <div class="vision-principles__grid">
                ${visionPrinciples
                  .map(
                    (principle, index) => `
                      <article class="vision-principle-card reveal">
                        <span>${String(index + 1).padStart(2, "0")}</span>
                        <p>${principle}</p>
                      </article>
                    `
                  )
                  .join("")}
              </div>
            </section>

            <blockquote class="vision-final reveal">
              <p>The future is not something humanity enters.</p>
              <p>It is something humanity consciously creates.</p>
            </blockquote>
          </section>
        </main>
      `;
    }

    if (key === "mission") {
      return `
        <main>
          <section class="mission-page" aria-labelledby="mission-title">
            <div class="mission-page__intro reveal">
              <h1 id="mission-title">MISSION</h1>
              <p class="mission-page__subtitle">Building a Conscious Technological Civilization</p>
            </div>

            <div class="mission-page__body">
              <article class="mission-copy reveal">
                <p>Magnus Protocol exists to help humanity transition into a conscious technological civilization where freedom, truth, ethics, intelligence, creativity, and human dignity remain protected.</p>
                <p>Its mission is to inspire individuals, creators, thinkers, innovators, and future generations to build systems aligned with life — not systems built on manipulation, fear, artificial division, or loss of sovereignty.</p>
                <p>Magnus Protocol believes humanity must evolve beyond outdated systems that reduce people to numbers, algorithms, or controllable behavior patterns.</p>
                <p>The mission is not political.</p>
                <p>It is civilizational.</p>
                <p>Magnus Protocol also exists to preserve human creativity, independent thought, artistic expression, and the right of every individual to maintain ownership over identity, voice, data, and perception in the digital era.</p>
              </article>

              <div class="mission-side reveal">
                <article class="mission-list-panel">
                  <span>Magnus Protocol seeks to unite</span>
                  <ul>
                    ${missionUnites.map((item) => `<li>${item}</li>`).join("")}
                  </ul>
                </article>
                <article class="mission-list-panel">
                  <span>The mission encourages a future where</span>
                  <ul>
                    ${missionFuture.map((item) => `<li>${item}</li>`).join("")}
                  </ul>
                </article>
              </div>
            </div>

            <section class="mission-principles" aria-labelledby="mission-principles-title">
              <div class="section-heading reveal">
                <p class="overline">Mission Principles</p>
                <h2 id="mission-principles-title">Intelligence With Responsibility</h2>
              </div>
              <div class="mission-principles__grid">
                ${missionPrinciples
                  .map(
                    (principle, index) => `
                      <article class="mission-principle-card reveal">
                        <span>${String(index + 1).padStart(2, "0")}</span>
                        <p>${principle}</p>
                      </article>
                    `
                  )
                  .join("")}
              </div>
            </section>

            <section class="mission-values" aria-labelledby="mission-values-title">
              <div class="section-heading reveal">
                <p class="overline">Inclusive Civilizational Values</p>
                <h2 id="mission-values-title">Dignity must include equality and diversity.</h2>
              </div>
              <div class="mission-values__grid">
                ${inclusiveValues
                  .map(
                    (value) => `
                      <article class="mission-value-card reveal">
                        <h3>${value.title}</h3>
                        ${value.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
                      </article>
                    `
                  )
                  .join("")}
              </div>
            </section>

            <blockquote class="mission-final reveal">
              <p>To help build a future where technology evolves with consciousness, intelligence serves humanity, and civilization advances with freedom, dignity, ethics, and truth.</p>
            </blockquote>
          </section>
        </main>
      `;
    }

    if (key === "cosmic" || key === "ufologia") {
      return `
        <main>
          <section class="cosmic-page" aria-labelledby="cosmic-title">
            <div class="cosmic-page__intro reveal">
              <h1 id="cosmic-title">COSMIC</h1>
              <p class="cosmic-page__subtitle">Recognition that intelligent life and advanced civilizations likely exist throughout the universe.</p>
            </div>

            <div class="cosmic-page__body">
              <article class="cosmic-copy reveal">
                <p>Magnus Protocol recognizes the overwhelming scale of the universe and the scientific probability that life exists far beyond Earth.</p>
                <p>With billions of galaxies, trillions of stars, countless planetary systems, black holes, nebulae, constellations, and potentially habitable worlds, the universe is too vast to assume humanity is the only form of intelligent life.</p>
                <p>The Cosmic Vision of Magnus Protocol is based on the belief that advanced civilizations may already exist across the cosmos — civilizations potentially millions or even billions of years more evolved than humanity technologically, intellectually, and consciously.</p>
                <p>Magnus Protocol believes humanity is still in an early stage of civilizational evolution.</p>
                <p>This perspective is philosophical and futuristic: a disciplined invitation to explore possibility without fear, sensationalism, paranoia, or aggression.</p>
              </article>

              <figure class="cosmic-vision-image reveal" data-parallax data-depth="0.014">
                ${img(assets.ufo, "Cinematic UFO and star field representing cosmic intelligence", "cosmic-vision-image__photo")}
              </figure>
            </div>

            <section class="cosmic-exploration reveal" aria-label="Cosmic exploration perspective">
              <span>The movement explores the idea that</span>
              <div>
                ${cosmicExploration.map((item) => `<p>${item}</p>`).join("")}
              </div>
            </section>

            <section class="cosmic-principles" aria-labelledby="cosmic-principles-title">
              <div class="section-heading reveal">
                <p class="overline">Cosmic Principles</p>
                <h2 id="cosmic-principles-title">A Larger Structure of Life and Intelligence</h2>
              </div>
              <div class="cosmic-principles__grid">
                ${cosmicPrinciples
                  .map(
                    (principle, index) => `
                      <article class="cosmic-principle-card reveal">
                        <span>${String(index + 1).padStart(2, "0")}</span>
                        <p>${principle}</p>
                      </article>
                    `
                  )
                  .join("")}
              </div>
            </section>

            <blockquote class="cosmic-final reveal">
              <p>Humanity is not the center of existence.</p>
              <p>Earth is part of a much larger cosmic structure filled with life, intelligence, mystery, and civilizations beyond current human understanding.</p>
            </blockquote>
          </section>
        </main>
      `;
    }

    if (key === "movement") {
      return `
        <main>
          <section class="movement-page" aria-labelledby="movement-title">
            <div class="movement-page__intro reveal">
              <h1 id="movement-title">MOVEMENT</h1>
              <p class="movement-page__subtitle">Building a Conscious Civilization for the Future of Humanity</p>
            </div>

            <div class="movement-page__body">
              <article class="movement-copy reveal">
                <p>Magnus Protocol is envisioned as a global movement for conscious civilization in the digital age.</p>
                <p>The movement exists to connect individuals around the world who believe humanity can evolve beyond fear, manipulation, artificial division, unconscious systems, and outdated structures.</p>
                <p>Magnus Protocol sees humanity entering one of the most important transitional periods in history: the convergence of artificial intelligence, global connectivity, advanced technology, and expanding consciousness.</p>
              </article>

              <figure class="movement-visual reveal" data-parallax data-depth="0.012">
                ${img(assets.founderBanner, "Official Alex Magnus and Magnus Protocol cinematic banner", "movement-visual__image", { loading: "eager", fetchpriority: "high" })}
              </figure>
            </div>

            <section class="movement-foundations reveal" aria-label="Movement foundations">
              <span>It is a movement built around</span>
              <div>
                ${movementFoundations.map((item) => `<p>${item}</p>`).join("")}
              </div>
            </section>

            <section class="movement-questions" aria-labelledby="movement-questions-title">
              <div class="section-heading reveal">
                <p class="overline">Questions the Movement Explores</p>
                <h2 id="movement-questions-title">The Future Is a Civilizational Question</h2>
              </div>
              <div class="movement-questions__grid">
                ${movementQuestions
                  .map(
                    (question, index) => `
                      <article class="movement-question-card reveal">
                        <span>${String(index + 1).padStart(2, "0")}</span>
                        <p>${question}</p>
                      </article>
                    `
                  )
                  .join("")}
              </div>
            </section>

            <section class="movement-connects reveal" aria-label="Who the movement connects">
              <span>Who the movement connects</span>
              <div>
                ${movementConnects.map((item) => `<p>${item}</p>`).join("")}
              </div>
            </section>

            <section class="movement-defends" aria-labelledby="movement-defends-title">
              <div class="section-heading reveal">
                <p class="overline">What the Movement Defends</p>
                <h2 id="movement-defends-title">Principles for a Conscious Global Future</h2>
              </div>
              <div class="movement-defends__grid">
                ${movementDefends
                  .map(
                    (principle, index) => `
                      <article class="movement-defend-card reveal">
                        <span>${String(index + 1).padStart(2, "0")}</span>
                        <p>${principle}</p>
                      </article>
                    `
                  )
                  .join("")}
              </div>
            </section>

            <blockquote class="movement-final reveal">
              <p>Magnus Protocol is a movement for those who believe humanity can become more conscious, ethical, intelligent, creative, and free while entering the next era of civilization.</p>
            </blockquote>
          </section>
        </main>
      `;
    }

    if (key === "pillars") {
      return `
        <main>
          <section class="section pillars-section detail-section">
            <div class="section-heading reveal">
              <h1>PILLARS</h1>
              <p>Magnus Protocol — Core Pillars for a Conscious Technological Civilization</p>
            </div>
            <div class="pillar-grid">
              ${pillars
                .map(
                  ([title, text], index) => `
                    <details class="pillar-card reveal"${index === 0 ? " open" : ""}>
                      <summary>
                        <span>${String(index + 1).padStart(2, "0")}</span>
                        <i aria-hidden="true"></i>
                        <h3>${title}</h3>
                      </summary>
                      <p>${text}</p>
                    </details>
                `
                )
                .join("")}
            </div>
            <blockquote class="pillars-final reveal">
              <p>The future is not something humanity enters.</p>
              <p>It is something humanity consciously creates.</p>
            </blockquote>
          </section>
        </main>
      `;
    }

    const pages = {
      "magnus-protocol": {
        overline: "Global Vision",
        title: "What is Magnus Protocol?",
        paragraphs: [
          "Magnus Protocol is not only a brand, platform, or digital project. It is a global vision created to unite technology, consciousness, truth, digital sovereignty, and human evolution.",
          "It represents a new architecture of thought for a future where technology serves humanity, instead of controlling humanity."
        ],
        visual: assets.founderBanner,
        alt: "Official Alex Magnus and Magnus Protocol cinematic banner"
      },
      vision: {
        overline: "Vision",
        title: "Vision",
        paragraphs: [
          "The vision of Magnus Protocol is to help build a more conscious, intelligent, ethical, free, and connected civilization, where innovation is guided by truth, responsibility, and purpose."
        ],
        visual: assets.founderBanner,
        alt: "Official Alex Magnus and Magnus Protocol cinematic banner"
      },
      mission: {
        overline: "Mission",
        title: "Mission",
        paragraphs: [
          "The mission of Magnus Protocol is to create systems, platforms, and movements capable of restoring truth, transparency, digital freedom, human dignity, and conscious technological evolution."
        ],
        visual: assets.founderBanner,
        alt: "Official Alex Magnus and Magnus Protocol cinematic banner"
      },
      "alex-magnus": {
        overline: "Founder",
        title: "Alex Magnus — Creator & Founder of Magnus Protocol",
        paragraphs: [
          "Alex Magnus is the creator and founder of Magnus Protocol, a visionary movement focused on technology, consciousness, digital sovereignty, artificial intelligence, and the future of civilization.",
          "His vision combines futuristic philosophy, global communication, ethical technology, branding, innovation, and the evolution of human consciousness."
        ],
        visual: assets.founderBanner,
        alt: "Official Alex Magnus and Magnus Protocol cinematic banner",
        signature: true
      },
      cosmic: {
        overline: "Cosmic Truth",
        title: "Cosmic Vision & Universal Intelligence",
        paragraphs: [
          "Magnus Protocol also explores the relationship between humanity, the universe, consciousness, advanced civilizations, cosmic intelligence, and the mysteries of existence."
        ],
        visual: assets.ufo,
        alt: "Full cinematic UFO over a cosmic landscape"
      },
      ufologia: {
        overline: "Cosmic Truth",
        title: "Cosmic Vision & Universal Intelligence",
        paragraphs: [
          "Magnus Protocol also explores the relationship between humanity, the universe, consciousness, advanced civilizations, cosmic intelligence, and the mysteries of existence."
        ],
        visual: assets.ufo,
        alt: "Full cinematic UFO over a cosmic landscape"
      },
      projects: {
        overline: "Global Platforms",
        title: "Global Platforms",
        paragraphs: [
          "Systems, platforms, and conscious digital movements for the next era of civilization."
        ],
        visual: assets.founderBanner,
        alt: "Official Alex Magnus and Magnus Protocol cinematic banner"
      },
      about: {
        overline: "Founder",
        title: "Alex Magnus — Creator & Founder of Magnus Protocol",
        paragraphs: [
          "Alex Magnus is the creator and founder of Magnus Protocol, a visionary movement focused on technology, consciousness, digital sovereignty, artificial intelligence, and the future of civilization.",
          "His vision combines futuristic philosophy, global communication, ethical technology, branding, innovation, and the evolution of human consciousness."
        ],
        visual: assets.founderBanner,
        alt: "Official Alex Magnus and Magnus Protocol cinematic banner",
        signature: true
      }
    };
    const page = pages[key] || pages.projects;
    return `
      <main>
        <section class="simple-page detail-page">
          <div class="simple-page__copy reveal">
            <p class="overline">${page.overline}</p>
            <h1>${page.title}</h1>
            ${page.paragraphs.map((text) => `<p>${text}</p>`).join("")}
            ${page.signature ? img(assets.signature, "Alex Magnus official founder signature", "signature signature--about") : ""}
          </div>
          <figure class="simple-page__visual reveal">
            ${img(page.visual, page.alt, "")}
          </figure>
        </section>
      </main>
    `;
  }

  function footer() {
    return `
      <footer class="site-footer">
        <p>&copy; 2026 Magnus Protocol — Created by Alex Magnus. All rights reserved.</p>
      </footer>
    `;
  }

  function protocolSeal() {
    return `
      <section class="protocol-seal reveal" aria-label="Magnus Protocol official seal">
        <figure>
          ${img(assets.protocolSeal, "Magnus Protocol official emblem", "protocol-seal__image")}
        </figure>
      </section>
    `;
  }

  function normalizeLanguage(value) {
    const code = String(value || "")
      .toLowerCase()
      .replace("_", "-")
      .split("-")[0];
    if (code === "ja") return "jp";
    if (code === "zh") return "cn";
    return languageMap.has(code) ? code : "en";
  }

  function languageInfo(code = currentLanguage) {
    return languageMap.get(normalizeLanguage(code)) || languageMap.get("en");
  }

  function localizedUi(key, code = currentLanguage) {
    return (languageUi[normalizeLanguage(code)] || languageUi.en)[key] || languageUi.en[key] || key;
  }

  function readStoredLanguage() {
    try {
      const stored = localStorage.getItem(languageStorageKey);
      if (stored && languageMap.has(stored)) return stored;
    } catch {
      // localStorage can be unavailable in strict privacy modes.
    }

    const cookieMatch = document.cookie.match(new RegExp(`(?:^|; )${languageCookieKey}=([^;]+)`));
    return cookieMatch ? normalizeLanguage(decodeURIComponent(cookieMatch[1])) : "";
  }

  function writeStoredLanguage(code) {
    try {
      localStorage.setItem(languageStorageKey, code);
    } catch {
      // Ignore storage quota or privacy errors; cookie still keeps a lightweight preference.
    }
    document.cookie = `${languageCookieKey}=${encodeURIComponent(code)}; max-age=31536000; path=/; SameSite=Lax`;
  }

  function queryLanguage() {
    return normalizeLanguage(new URLSearchParams(window.location.search).get("lang"));
  }

  function browserLanguage() {
    const preferred = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
    const supported = preferred.map(normalizeLanguage).find((code) => languageMap.has(code));
    return supported || "en";
  }

  function timeZoneDefaultLanguage() {
    try {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      return timeZoneLanguage[timeZone] || "";
    } catch {
      return "";
    }
  }

  function detectInitialLanguage() {
    const fromQuery = queryLanguage();
    if (new URLSearchParams(window.location.search).has("lang")) return fromQuery;

    const stored = readStoredLanguage();
    if (stored) return stored;

    return timeZoneDefaultLanguage() || browserLanguage();
  }

  async function detectCountryLanguage() {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 1200);
    try {
      const response = await fetch("https://ipapi.co/json/", {
        signal: controller.signal,
        cache: "no-store"
      });
      if (!response.ok) return "";
      const data = await response.json();
      const country = String(data.country_code || data.country || "").toUpperCase();
      return countryLanguage[country] || "";
    } catch {
      return "";
    } finally {
      window.clearTimeout(timer);
    }
  }

  function initializeI18n(pageKey) {
    currentPageKey = pageKey;
    upsertHreflangLinks(pageKey);
    const selector = document.querySelector("[data-language-select]");
    if (selector) {
      selector.addEventListener("change", () => setLanguage(selector.value, { persist: true, manual: true }));
    }

    const initial = detectInitialLanguage();
    setLanguage(initial, { persist: false, manual: false });

    if (!readStoredLanguage() && !new URLSearchParams(window.location.search).has("lang")) {
      detectCountryLanguage().then((detected) => {
        if (detected && detected !== currentLanguage && !readStoredLanguage()) {
          setLanguage(detected, { persist: false, manual: false });
        }
      });
    }
  }

  async function setLanguage(code, options = {}) {
    const nextLanguage = normalizeLanguage(code);
    const generation = ++translationGeneration;
    currentLanguage = nextLanguage;
    if (options.persist) writeStoredLanguage(nextLanguage);
    applyLanguageChrome(nextLanguage);
    updateLanguageSelector(nextLanguage);
    updateLocalizedMetadata(currentPageKey, nextLanguage, generation);
    await translateDocument(nextLanguage, generation);
  }

  function applyLanguageChrome(code) {
    const language = languageInfo(code);
    document.documentElement.lang = language.html;
    document.documentElement.dir = language.dir;
    document.body.dataset.language = language.code;
    document.body.classList.toggle("is-rtl", language.dir === "rtl");
    upsertMeta("og:locale", language.locale, true);
  }

  function updateLanguageSelector(code) {
    const selector = document.querySelector("[data-language-select]");
    const label = document.querySelector("[data-language-label]");
    if (selector) {
      selector.value = code;
      selector.setAttribute("aria-label", localizedUi("selector", code));
      selector.setAttribute("title", localizedUi("selector", code));
    }
    if (label) label.textContent = localizedUi("label", code);
  }

  async function updateLocalizedMetadata(pageKey, code, generation) {
    const meta = pageMeta[pageKey] || pageMeta.home;
    const activeArticle =
      pageKey === "article-detail"
        ? articleFromLocation(new URLSearchParams(window.location.search).get("preview") === "1" && sessionStorage.getItem(adminSessionKey) === adminPasswordHash)
        : null;
    const baseTitle = activeArticle ? `${activeArticle.metaTitle || activeArticle.title} | AlexMagnus.global` : meta.title;
    const baseDescription = activeArticle ? activeArticle.metaDescription || activeArticle.excerpt || meta.description : meta.description;
    const fallbackDescription = (localMetaCopy[code] || localMetaCopy.en).description;

    if (code === "en") {
      document.title = baseTitle;
      upsertMeta("description", baseDescription);
      upsertMeta("og:title", baseTitle, true);
      upsertMeta("og:description", baseDescription, true);
      upsertMeta("twitter:title", baseTitle);
      upsertMeta("twitter:description", baseDescription);
      return;
    }

    try {
      const translated = await translateTexts([baseTitle, baseDescription], code);
      if (generation !== translationGeneration) return;
      const title = translated.get(baseTitle) || baseTitle;
      const description = translated.get(baseDescription) || fallbackDescription;
      document.title = title;
      upsertMeta("description", description);
      upsertMeta("og:title", title, true);
      upsertMeta("og:description", description, true);
      upsertMeta("twitter:title", title);
      upsertMeta("twitter:description", description);
    } catch {
      if (generation !== translationGeneration) return;
      document.title = baseTitle;
      upsertMeta("description", fallbackDescription);
      upsertMeta("og:description", fallbackDescription, true);
      upsertMeta("twitter:description", fallbackDescription);
    }
  }

  async function translateDocument(code, generation = translationGeneration) {
    document.body.classList.add("is-language-switching");

    try {
      const units = collectTranslatableUnits(document.body);
      if (code === "en") {
        units.forEach((unit) => unit.apply(unit.source));
        return;
      }

      const sources = Array.from(new Set(units.map((unit) => unit.source).filter(shouldTranslateSource)));
      const translations = await translateTexts(sources, code);
      if (generation !== translationGeneration) return;

      units.forEach((unit) => {
        unit.apply(translations.get(unit.source) || unit.source);
      });
    } finally {
      window.setTimeout(() => document.body.classList.remove("is-language-switching"), 120);
    }
  }

  function collectTranslatableUnits(root) {
    const units = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || shouldSkipTranslationElement(parent)) return NodeFilter.FILTER_REJECT;
        const fullSource = textNodeSources.get(node) || node.textContent || "";
        if (!textNodeSources.has(node)) textNodeSources.set(node, fullSource);
        if (!fullSource.trim() || !shouldTranslateSource(fullSource)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    while (walker.nextNode()) {
      const node = walker.currentNode;
      const source = textNodeSources.get(node) || node.textContent || "";
      const leading = source.match(/^\s*/)[0];
      const trailing = source.match(/\s*$/)[0];
      const trimmed = source.trim();
      units.push({
        source: trimmed,
        apply(value) {
          node.textContent = `${leading}${value}${trailing}`;
        }
      });
    }

    root.querySelectorAll("[placeholder], [aria-label], [title], img[alt]").forEach((element) => {
      if (shouldSkipTranslationAttributeElement(element)) return;
      ["placeholder", "aria-label", "title", "alt"].forEach((attribute) => {
        if (!element.hasAttribute(attribute)) return;
        const source = originalAttributeValue(element, attribute);
        if (!source || !shouldTranslateSource(source)) return;
        units.push({
          source,
          apply(value) {
            element.setAttribute(attribute, value);
          }
        });
      });
    });

    return units;
  }

  function originalAttributeValue(element, attribute) {
    let sourceMap = attributeSources.get(element);
    if (!sourceMap) {
      sourceMap = {};
      attributeSources.set(element, sourceMap);
    }
    if (!sourceMap[attribute]) sourceMap[attribute] = element.getAttribute(attribute) || "";
    return sourceMap[attribute];
  }

  function shouldSkipTranslationElement(element) {
    const skipSelector = [
      "script",
      "style",
      "noscript",
      "template",
      "code",
      "pre",
      "textarea",
      "select",
      "option",
      ".language-switcher",
      "[contenteditable='true']",
      "[data-no-translate]"
    ].join(",");
    return Boolean(element.closest(skipSelector));
  }

  function shouldSkipTranslationAttributeElement(element) {
    const skipSelector = [
      "script",
      "style",
      "noscript",
      "template",
      "select",
      "option",
      ".language-switcher",
      "[data-no-translate]"
    ].join(",");
    return Boolean(element.closest(skipSelector));
  }

  function shouldTranslateSource(source) {
    const text = String(source || "").trim();
    return text.length > 1 && /[A-Za-z]/.test(text) && !/^https?:\/\//i.test(text) && !/^[\w.-]+@[\w.-]+\.\w+$/.test(text);
  }

  async function translateTexts(sources, code) {
    const normalized = normalizeLanguage(code);
    const result = new Map(sources.map((source) => [source, source]));
    if (normalized === "en") return result;

    const cache = loadTranslationCache(normalized);
    const missing = [];
    sources.forEach((source) => {
      if (cache[source]) result.set(source, cache[source]);
      else missing.push(source);
    });

    if (!missing.length) return result;

    const batches = [];
    let batch = [];
    let batchLength = 0;
    missing.forEach((source) => {
      const protectedSource = protectBranding(source);
      if (batch.length && batchLength + protectedSource.length > 4200) {
        batches.push(batch);
        batch = [];
        batchLength = 0;
      }
      batch.push(source);
      batchLength += protectedSource.length + translationDelimiter.length;
    });
    if (batch.length) batches.push(batch);

    for (const currentBatch of batches) {
      try {
        const translated = await translateBatch(currentBatch, normalized);
        translated.forEach((value, source) => {
          cache[source] = value;
          result.set(source, value);
        });
        saveTranslationCache(normalized, cache);
      } catch {
        // Keep English fallbacks for any batch that cannot be translated.
      }
    }

    return result;
  }

  async function translateBatch(sources, code) {
    const language = languageInfo(code);
    const protectedJoined = sources.map(protectBranding).join(translationDelimiter);
    const params = new URLSearchParams({
      client: "gtx",
      sl: "en",
      tl: language.google,
      dt: "t",
      q: protectedJoined
    });
    const response = await fetch(`${translationEndpoint}?${params.toString()}`);
    if (!response.ok) throw new Error("Translation request failed");
    const payload = await response.json();
    const joined = restoreBranding((payload[0] || []).map((part) => part[0]).join(""));
    let pieces = joined.split(/\s*§§§ALEXMAGNUS_I18N_SPLIT§§§\s*/);

    if (pieces.length !== sources.length && sources.length > 1) {
      const fallback = new Map();
      for (const source of sources) {
        const single = await translateBatch([source], code);
        fallback.set(source, single.get(source) || source);
      }
      return fallback;
    }

    if (pieces.length !== sources.length) pieces = sources;
    return new Map(sources.map((source, index) => [source, pieces[index] || source]));
  }

  function protectBranding(source) {
    return String(source || "")
      .replace(/AlexMagnus\.global/gi, "ZXALEXMAGNUSGLOBALZX")
      .replace(/Magnus Protocol/gi, "ZXMAGNUSPROTOCOLZX")
      .replace(/Alex Magnus/gi, "ZXALEXMAGNUSZX");
  }

  function restoreBranding(source) {
    return String(source || "")
      .replaceAll("ZXALEXMAGNUSGLOBALZX", "AlexMagnus.global")
      .replaceAll("ZXMAGNUSPROTOCOLZX", "Magnus Protocol")
      .replaceAll("ZXALEXMAGNUSZX", "Alex Magnus");
  }

  function loadTranslationCache(code) {
    if (translationCaches.has(code)) return translationCaches.get(code);
    let cache = {};
    try {
      cache = JSON.parse(localStorage.getItem(`${translationCachePrefix}${code}`) || "{}");
    } catch {
      cache = {};
    }
    translationCaches.set(code, cache);
    return cache;
  }

  function saveTranslationCache(code, cache) {
    const entries = Object.entries(cache).slice(-700);
    const pruned = Object.fromEntries(entries);
    translationCaches.set(code, pruned);
    try {
      localStorage.setItem(`${translationCachePrefix}${code}`, JSON.stringify(pruned));
    } catch {
      // Caching is an optimization, not a dependency.
    }
  }

  function upsertHreflangLinks(pageKey = currentPageKey) {
    document.head.querySelectorAll("link[data-i18n-hreflang]").forEach((link) => link.remove());
    const fileName = window.location.pathname.split("/").pop() || "index.html";
    languages.forEach((language) => {
      const url = new URL(fileName, window.location.href);
      url.searchParams.set("lang", language.code);
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = language.html;
      link.href = url.href;
      link.dataset.i18nHreflang = pageKey;
      document.head.appendChild(link);
    });

    const fallback = new URL(fileName, window.location.href);
    const defaultLink = document.createElement("link");
    defaultLink.rel = "alternate";
    defaultLink.hreflang = "x-default";
    defaultLink.href = fallback.href;
    defaultLink.dataset.i18nHreflang = pageKey;
    document.head.appendChild(defaultLink);
  }

  function setMeta(key) {
    const meta = pageMeta[key] || pageMeta.home;
    const activeArticle = key === "article-detail" ? articleFromLocation(new URLSearchParams(window.location.search).get("preview") === "1" && sessionStorage.getItem(adminSessionKey) === adminPasswordHash) : null;
    const title = activeArticle ? `${activeArticle.metaTitle || activeArticle.title} | AlexMagnus.global` : meta.title;
    const description = activeArticle ? activeArticle.metaDescription || activeArticle.excerpt || meta.description : meta.description;
    const canonical = new URL(window.location.pathname.split("/").pop() || "index.html", window.location.href).href;
    const socialImage = activeArticle ? activeArticle.ogImage || activeArticle.image || assets.og : assets.og;

    document.title = title;
    upsertMeta("description", description);
    upsertMeta("robots", key.startsWith("admin") ? "noindex,nofollow,noarchive" : "index,follow");
    upsertMeta("theme-color", "#020205");
    upsertMeta("og:type", meta.type, true);
    upsertMeta("og:title", title, true);
    upsertMeta("og:description", description, true);
    upsertMeta("og:url", canonical, true);
    upsertMeta("og:image", new URL(socialImage, window.location.href).href, true);
    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", title);
    upsertMeta("twitter:description", description);
    upsertMeta("twitter:image", new URL(socialImage, window.location.href).href);
    upsertLink("canonical", canonical);
    upsertJsonLd(key, title, description, canonical, activeArticle);
  }

  function upsertMeta(name, content, property = false) {
    const attr = property ? "property" : "name";
    let el = document.head.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let el = document.head.querySelector(`link[rel="${rel}"]`);
    if (!el) {
      el = document.createElement("link");
      el.setAttribute("rel", rel);
      document.head.appendChild(el);
    }
    el.setAttribute("href", href);
  }

  function upsertJsonLd(key, title, description, canonical, activeArticle = null) {
    let el = document.head.querySelector('script[data-schema="alexmagnus"]');
    if (!el) {
      el = document.createElement("script");
      el.type = "application/ld+json";
      el.dataset.schema = "alexmagnus";
      document.head.appendChild(el);
    }

    const base = {
      "@context": "https://schema.org",
      "@type": key === "articles" || key === "article-detail" ? "Article" : "WebSite",
      name: title,
      description,
      url: canonical,
      image: new URL(assets.og, window.location.href).href,
      publisher: {
        "@type": "Organization",
        name: "Magnus Protocol",
        founder: {
          "@type": "Person",
          name: "Alex Magnus"
        },
        logo: {
          "@type": "ImageObject",
          url: new URL(assets.logo3, window.location.href).href
        }
      }
    };

    if (key === "articles" || key === "article-detail") {
      base.author = { "@type": "Person", name: activeArticle ? activeArticle.author || "Alex Magnus" : "Alex Magnus" };
      base.headline = activeArticle ? activeArticle.title : title;
      base.datePublished = activeArticle ? activeArticle.date : "2026-05-10";
      base.articleSection = activeArticle ? activeArticle.category || "Magnus Protocol" : "Magnus Protocol";
      base.image = new URL(activeArticle ? activeArticle.ogImage || activeArticle.image || assets.og : assets.og, window.location.href).href;
    }

    el.textContent = JSON.stringify(base);
  }

  function activate() {
    const headerEl = document.querySelector("[data-header]");
    const toggle = document.querySelector(".nav-toggle");
    if (toggle && headerEl) {
      toggle.addEventListener("click", () => {
        const open = headerEl.classList.toggle("nav-open");
        toggle.setAttribute("aria-expanded", String(open));
      });
    }

    document.querySelectorAll(".site-nav a").forEach((link) => {
      link.addEventListener("click", () => headerEl && headerEl.classList.remove("nav-open"));
    });

    const onScrollHeader = () => {
      headerEl && headerEl.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScrollHeader();
    window.addEventListener("scroll", onScrollHeader, { passive: true });

	    if ("IntersectionObserver" in window) {
	      const observer = new IntersectionObserver(
	        (entries) => {
	          entries.forEach((entry) => {
	            if (entry.isIntersecting) {
	              entry.target.classList.add("in-view");
	              observer.unobserve(entry.target);
	            }
	          });
	        },
	        { threshold: 0.04, rootMargin: "0px 0px -8% 0px" }
	      );
	      document.querySelectorAll(".reveal").forEach((el, index) => {
	        el.style.setProperty("--reveal-index", String(index % 6));
	        observer.observe(el);
	      });
	    } else {
	      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in-view"));
	    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const parallaxItems = Array.from(document.querySelectorAll("[data-parallax]"));
    let ticking = false;
    function updateParallax() {
      const mid = window.innerHeight / 2;
      parallaxItems.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const depth = Number(el.dataset.depth || 0.02);
        el.style.setProperty("--parallax-y", `${((rect.top + rect.height / 2 - mid) * depth).toFixed(2)}px`);
      });
      ticking = false;
    }
    if (!reduceMotion && parallaxItems.length) {
      window.addEventListener(
        "scroll",
        () => {
          if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
          }
        },
        { passive: true }
      );
      updateParallax();
    }

    activateReadingProgress();
    activateAdminDashboard();
    activateContactForm();
    activateMatrixVisual();
    scheduleImageWarmup();
    activateHashScroll();
    document.documentElement.classList.add("is-ready");
  }

  function activateMatrixVisual() {
    const frame = document.querySelector("[data-matrix-visual]");
    if (!frame) return;

    const src = frame.dataset.matrixVisual;
    if (!src) return;
    const addImage = () => {
	      if (frame.querySelector("img")) return;
	      const image = new Image();
	      image.onerror = () => {
	        frame.classList.add("is-image-missing");
	        image.remove();
	      };
	      image.alt = frame.dataset.matrixAlt || "Matrix Perfect visual";
	      image.className = "matrix-page__image";
      if (assetMeta[src]) {
        image.width = assetMeta[src].width;
        image.height = assetMeta[src].height;
      }
      if (assetSources[src]?.sizes) image.sizes = assetSources[src].sizes;
	      image.loading = "eager";
	      image.decoding = "async";
	      image.fetchPriority = "high";
	      image.src = src;
	      frame.appendChild(image);
      frame.classList.add("is-image-ready");
    };

	    addImage();
	  }

  function activateContactForm() {
    const form = document.querySelector("[data-contact-form]");
    if (!form) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("Full Name") || "").trim();
      const email = String(data.get("E-mail") || "").trim();
      const subject = String(data.get("Subject") || "Message from AlexMagnus.global").trim();
      const message = String(data.get("Message") || "").trim();
      const body = [
        `Full Name: ${name}`,
        `E-mail: ${email}`,
        `Subject: ${subject}`,
        "",
        message
      ].join("\n");
      const mailto = `mailto:alexmagnus@alexmagnus.global?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      const status = form.querySelector("[data-contact-status]");
      if (status) status.textContent = localizedUi("emailOpening");
      window.location.href = mailto;
    });
  }

  function activateHashScroll() {
    const scrollToHash = () => {
      if (!window.location.hash) return;
      const id = window.location.hash.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ block: "start" });
    };

    window.requestAnimationFrame(() => window.requestAnimationFrame(scrollToHash));
    window.addEventListener("hashchange", () => {
      window.requestAnimationFrame(scrollToHash);
    });
  }

  function activateReadingProgress() {
    const articleBody = document.querySelector("[data-article-body]");
    const progress = document.querySelector("[data-reading-progress]");
    if (!articleBody || !progress) return;

    const updateProgress = () => {
      const rect = articleBody.getBoundingClientRect();
      const total = Math.max(1, rect.height - window.innerHeight * 0.45);
      const read = Math.min(Math.max((window.innerHeight * 0.25 - rect.top) / total, 0), 1);
      progress.style.transform = `scaleX(${read.toFixed(3)})`;
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
  }

  function activateAdminDashboard() {
    const root = document.querySelector("[data-admin-root]");
    if (!root) return;

    const loginPanel = root.querySelector("[data-admin-login]");
    const dashboard = root.querySelector("[data-admin-dashboard]");
    const loginForm = root.querySelector("[data-admin-login-form]");
    const loginStatus = root.querySelector("[data-admin-login-status]");
    const editor = root.querySelector("[data-admin-editor]");
    const editorStatus = root.querySelector("[data-admin-editor-status]");
    const articleList = root.querySelector("[data-admin-list]");
    const bodyEditor = root.querySelector("[data-admin-body]");
    const imageUpload = root.querySelector("[data-admin-image-upload]");
    const inlineImageUpload = root.querySelector("[data-admin-inline-image]");
    const ogUpload = root.querySelector("[data-admin-og-upload]");
    const imagePreview = root.querySelector("[data-admin-image-preview]");
    const socialImage = root.querySelector("[data-admin-social-image]");
    const socialTitle = root.querySelector("[data-admin-social-title]");
    const socialDesc = root.querySelector("[data-admin-social-desc]");
    const ogImage = root.querySelector("[data-admin-og-image]");
    const ogTitle = root.querySelector("[data-admin-og-title]");
    const ogDescription = root.querySelector("[data-admin-og-description]");
    const autosaveIndicator = root.querySelector("[data-admin-autosave]");
    const livePreview = root.querySelector("[data-admin-live-preview]");
    const searchInput = root.querySelector("[data-admin-search]");
    const statusFilter = root.querySelector("[data-admin-filter-status]");
    const categoryFilter = root.querySelector("[data-admin-filter-category]");
    let adminArticles = readArticles(true);
    let selectedId = adminArticles[0] && adminArticles[0].id;
    let isLoadingArticle = false;
    let lastSlugSeed = "";

    if (!adminArticles.length) selectedId = createArticle().id;

    const showDashboard = () => {
      loginPanel.hidden = true;
      dashboard.hidden = false;
      renderAdminList();
      loadArticle(selectedId || createArticle().id);
    };

    const showLogin = () => {
      loginPanel.hidden = false;
      dashboard.hidden = true;
    };

    const isAuthenticated = () => sessionStorage.getItem(adminSessionKey) === adminPasswordHash;
    if (isAuthenticated()) showDashboard();
    else showLogin();

    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const password = root.querySelector("[data-admin-password]").value;
      const hash = await hashText(password);
      if (hash === adminPasswordHash) {
        sessionStorage.setItem(adminSessionKey, hash);
        loginStatus.textContent = "";
        showDashboard();
      } else {
        loginStatus.textContent = "Invalid password.";
      }
    });

    root.querySelector("[data-admin-logout]").addEventListener("click", () => {
      sessionStorage.removeItem(adminSessionKey);
      showLogin();
    });

    root.querySelector("[data-admin-new]").addEventListener("click", () => {
      const article = createArticle();
      selectedId = article.id;
      persistAdminArticles("New draft created.");
      renderAdminList();
      loadArticle(selectedId);
    });

    articleList.addEventListener("click", (event) => {
      const deleteButton = event.target.closest("[data-admin-delete-list]");
      if (deleteButton) {
        deleteArticle(deleteButton.dataset.adminDeleteList);
        return;
      }

      const duplicateButton = event.target.closest("[data-admin-duplicate-list]");
      if (duplicateButton) {
        duplicateArticle(duplicateButton.dataset.adminDuplicateList);
        return;
      }

      const item = event.target.closest("[data-admin-article]");
      if (!item) return;
      selectedId = item.dataset.adminArticle;
      loadArticle(selectedId);
      renderAdminList();
    });

    editor.addEventListener("submit", (event) => {
      event.preventDefault();
      saveCurrentArticle("Article saved.");
    });

    root.querySelectorAll("[data-admin-publish], [data-admin-publish-secondary]").forEach((button) => button.addEventListener("click", () => {
      editor.elements.status.value = "published";
      saveCurrentArticle("Article published.");
    }));

    root.querySelectorAll("[data-admin-save-draft], [data-admin-save-draft-secondary]").forEach((button) => button.addEventListener("click", () => {
      editor.elements.status.value = "draft";
      saveCurrentArticle("Draft saved.");
    }));

    root.querySelector("[data-admin-delete]").addEventListener("click", () => {
      deleteArticle(selectedId);
    });

    root.querySelector("[data-admin-duplicate]").addEventListener("click", () => {
      duplicateArticle(selectedId);
    });

    root.querySelector("[data-admin-preview]").addEventListener("click", () => {
      const article = saveCurrentArticle("Preview ready.");
      if (!article) return;
      updateLivePreview(article);
      livePreview.hidden = false;
      window.open(articleUrl(article, true), "_blank", "noopener");
    });

    imageUpload.addEventListener("change", () => {
      const file = imageUpload.files && imageUpload.files[0];
      readFeaturedImage(file);
    });

    ogUpload.addEventListener("change", () => {
      const file = ogUpload.files && ogUpload.files[0];
      if (!file || !file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = () => {
        editor.dataset.ogImage = String(reader.result);
        ogImage.src = String(reader.result);
        updatePreviews();
        queueAutosave();
      };
      reader.readAsDataURL(file);
    });

    inlineImageUpload.addEventListener("change", () => {
      const file = inlineImageUpload.files && inlineImageUpload.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        bodyEditor.focus();
        document.execCommand("insertImage", false, String(reader.result));
        inlineImageUpload.value = "";
        queueAutosave();
      };
      reader.readAsDataURL(file);
    });

    const dropzone = root.querySelector("[data-admin-dropzone]");
    ["dragenter", "dragover"].forEach((type) => {
      dropzone.addEventListener(type, (event) => {
        event.preventDefault();
        dropzone.classList.add("is-dragging");
      });
    });
    ["dragleave", "drop"].forEach((type) => {
      dropzone.addEventListener(type, (event) => {
        event.preventDefault();
        dropzone.classList.remove("is-dragging");
      });
    });
    dropzone.addEventListener("drop", (event) => {
      readFeaturedImage(event.dataTransfer.files && event.dataTransfer.files[0]);
    });

    root.querySelectorAll("[data-editor-command]").forEach((button) => {
      button.addEventListener("click", () => runEditorCommand(button.dataset.editorCommand));
    });

    root.querySelector("[data-format-block]").addEventListener("change", (event) => {
      runEditorCommand("formatBlock", event.target.value);
    });

    root.querySelector("[data-font-family]").addEventListener("change", (event) => {
      runEditorCommand("fontName", event.target.value);
    });

    root.querySelector("[data-font-size]").addEventListener("change", (event) => {
      runEditorCommand("fontSize", event.target.value);
    });

    root.querySelector("[data-admin-quote]").addEventListener("click", () => runEditorCommand("formatBlock", "BLOCKQUOTE"));

    root.querySelector("[data-admin-link]").addEventListener("click", () => {
      const url = window.prompt("Paste link URL");
      if (url) runEditorCommand("createLink", url);
    });

    root.querySelector("[data-admin-divider]").addEventListener("click", () => runEditorCommand("insertHTML", "<hr>"));

    root.querySelector("[data-admin-video]").addEventListener("click", () => {
      const url = window.prompt("Paste video embed URL");
      if (!url) return;
      const safeUrl = escapeHtml(url);
      runEditorCommand("insertHTML", `<iframe src="${safeUrl}" title="Embedded video" loading="lazy" allowfullscreen></iframe>`);
    });

    root.querySelector("[data-admin-apply-markdown]").addEventListener("click", () => {
      const markdown = editor.elements.markdown.value.trim();
      if (!markdown) return;
      bodyEditor.innerHTML = markdownToHtml(markdown);
      saveCurrentArticle("Markdown applied.");
    });

    [searchInput, statusFilter, categoryFilter].forEach((control) => {
      control.addEventListener("input", renderAdminList);
      control.addEventListener("change", renderAdminList);
    });

    editor.addEventListener("input", (event) => {
      if (isLoadingArticle) return;
      if (event.target === editor.elements.title) {
        const nextSeed = slugify(editor.elements.title.value);
        if (!editor.elements.slug.value || editor.elements.slug.value === lastSlugSeed) {
          editor.elements.slug.value = nextSeed;
          lastSlugSeed = nextSeed;
        }
      }
      updatePreviews();
      queueAutosave();
    });

    bodyEditor.addEventListener("input", () => {
      updatePreviews();
      queueAutosave();
    });

    const queueAutosave = debounce(() => {
      if (!selectedId || isLoadingArticle) return;
      if (autosaveIndicator) autosaveIndicator.textContent = "Saving draft...";
      const article = saveCurrentArticle("Draft autosaved.", { silent: true });
      if (article && autosaveIndicator) autosaveIndicator.textContent = `Autosaved ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
    }, 900);

    function createArticle() {
      const today = new Date().toISOString().slice(0, 10);
      const article = {
        id: `article-${Date.now()}`,
        title: "Untitled Article",
        subtitle: "",
        author: "Alex Magnus",
        date: today,
        category: "Magnus Protocol",
        read: "8 min read",
        tags: "Magnus Protocol, digital sovereignty",
        excerpt: "New article draft.",
        slug: `untitled-article-${Date.now()}`,
        metaTitle: "",
        metaDescription: "",
        ogImage: "",
        image: assets.founderBanner,
        status: "draft",
        body: "<h2>New article</h2><p>Write the article body here.</p>"
      };
      adminArticles.unshift(article);
      return article;
    }

    function loadArticle(id) {
      const article = adminArticles.find((item) => item.id === id) || adminArticles[0] || createArticle();
      isLoadingArticle = true;
      selectedId = article.id;
      editor.elements.title.value = article.title || "";
      editor.elements.subtitle.value = article.subtitle || "";
      editor.elements.author.value = article.author || "Alex Magnus";
      editor.elements.date.value = normalizeDateInput(article.date);
      editor.elements.category.value = article.category || "";
      editor.elements.read.value = article.read || "";
      editor.elements.tags.value = article.tags || "";
      editor.elements.excerpt.value = article.excerpt || "";
      editor.elements.status.value = article.status || "draft";
      editor.elements.slug.value = article.slug || slugify(article.title);
      editor.elements.metaTitle.value = article.metaTitle || "";
      editor.elements.metaDescription.value = article.metaDescription || "";
      editor.elements.markdown.value = article.markdown || "";
      lastSlugSeed = editor.elements.slug.value;
      editor.dataset.image = officialBanner(article.image);
      editor.dataset.ogImage = officialBanner(article.ogImage || article.image);
      bodyEditor.innerHTML = articleBody(article);
      imagePreview.src = editor.dataset.image;
      socialImage.src = editor.dataset.image;
      ogImage.src = editor.dataset.ogImage;
      editorStatus.textContent = "";
      updatePreviews();
      if (autosaveIndicator) autosaveIndicator.textContent = "Draft idle";
      isLoadingArticle = false;
    }

    function saveCurrentArticle(message, options = {}) {
      const article = adminArticles.find((item) => item.id === selectedId);
      if (!article) return;
      article.title = editor.elements.title.value.trim() || "Untitled Article";
      article.subtitle = editor.elements.subtitle.value.trim();
      article.author = editor.elements.author.value.trim() || "Alex Magnus";
      article.date = editor.elements.date.value || new Date().toISOString().slice(0, 10);
      article.category = editor.elements.category.value.trim() || "Magnus Protocol";
      article.read = editor.elements.read.value.trim() || "8 min read";
      article.tags = editor.elements.tags.value.trim();
      article.excerpt = editor.elements.excerpt.value.trim();
      article.status = editor.elements.status.value;
      article.slug = slugify(editor.elements.slug.value || article.title);
      article.metaTitle = editor.elements.metaTitle.value.trim();
      article.metaDescription = editor.elements.metaDescription.value.trim();
      article.markdown = editor.elements.markdown.value.trim();
      article.image = editor.dataset.image || article.image || assets.founderBanner;
      article.ogImage = editor.dataset.ogImage || article.ogImage || article.image;
      article.body = bodyEditor.innerHTML.trim();
      persistAdminArticles(message, options.silent);
      renderAdminList();
      updatePreviews();
      return article;
    }

    function persistAdminArticles(message, silent = false) {
      saveArticles(adminArticles);
      if (!silent) editorStatus.textContent = message;
    }

    function renderAdminList() {
      const query = (searchInput.value || "").trim().toLowerCase();
      const status = statusFilter.value || "all";
      const category = (categoryFilter.value || "").trim().toLowerCase();
      const filtered = adminArticles.filter((article) => {
        const haystack = `${article.title} ${article.category} ${article.tags} ${article.excerpt}`.toLowerCase();
        const matchesQuery = !query || haystack.includes(query);
        const matchesStatus = status === "all" || (article.status || "draft") === status;
        const matchesCategory = !category || String(article.category || "").toLowerCase().includes(category);
        return matchesQuery && matchesStatus && matchesCategory;
      });

      articleList.innerHTML = filtered
        .map(
          (article) => `
            <article class="admin-list-item${article.id === selectedId ? " is-active" : ""}">
              <button class="admin-list-item__main" type="button" data-admin-article="${article.id}">
                <span>${escapeHtml(article.title)}</span>
                <small>${escapeHtml(article.status || "draft")} · ${escapeHtml(article.category || "Article")}</small>
              </button>
              <div class="admin-list-item__tools">
                <button type="button" data-admin-duplicate-list="${article.id}">Duplicate</button>
                <button type="button" data-admin-delete-list="${article.id}">Delete</button>
              </div>
            </article>
          `
        )
        .join("") || `<p class="admin-empty">No articles match this filter.</p>`;
    }

    function deleteArticle(id) {
      if (!id || adminArticles.length <= 1) {
        editorStatus.textContent = "Keep at least one article in the system.";
        return;
      }
      adminArticles = adminArticles.filter((article) => article.id !== id);
      if (selectedId === id) selectedId = adminArticles[0].id;
      persistAdminArticles("Article deleted.");
      renderAdminList();
      loadArticle(selectedId);
    }

    function duplicateArticle(id) {
      const article = adminArticles.find((item) => item.id === id);
      if (!article) return;
      const copy = {
        ...article,
        id: `article-${Date.now()}`,
        title: `${article.title || "Untitled Article"} Copy`,
        slug: `${slugify(article.title || "untitled-article")}-copy-${Date.now()}`,
        status: "draft"
      };
      adminArticles.unshift(copy);
      selectedId = copy.id;
      persistAdminArticles("Article duplicated.");
      renderAdminList();
      loadArticle(selectedId);
    }

    function readFeaturedImage(file) {
      if (!file || !file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = () => {
        editor.dataset.image = String(reader.result);
        imagePreview.src = String(reader.result);
        socialImage.src = String(reader.result);
        if (!editor.dataset.ogImage || editor.dataset.ogImage === articleFallbackOg()) {
          editor.dataset.ogImage = String(reader.result);
          ogImage.src = String(reader.result);
        }
        updatePreviews();
        queueAutosave();
      };
      reader.readAsDataURL(file);
    }

    function updatePreviews() {
      const title = editor.elements.title.value.trim() || "Article title";
      const description =
        editor.elements.metaDescription.value.trim() ||
        editor.elements.excerpt.value.trim() ||
        editor.elements.subtitle.value.trim() ||
        "Article description preview";
      const image = editor.dataset.image || assets.founderBanner;
      const openGraphImage = editor.dataset.ogImage || image;
      if (socialImage) socialImage.src = image;
      if (ogImage) ogImage.src = openGraphImage;
      [socialTitle, ogTitle].forEach((item) => {
        if (item) item.textContent = title;
      });
      if (socialDesc) socialDesc.textContent = description;
      if (ogDescription) ogDescription.textContent = description;
    }

    function updateLivePreview(article) {
      livePreview.innerHTML = `
        <p class="overline">Live Preview</p>
        <figure class="article-cover">
          ${img(article.image || assets.founderBanner, article.title, "article-cover__image")}
        </figure>
        <article class="article-lead">
          <h2>${escapeHtml(article.title)}</h2>
          ${article.subtitle ? `<p class="article-subtitle">${escapeHtml(article.subtitle)}</p>` : ""}
          <div class="article-meta">
            <span>${escapeHtml(article.author || "Alex Magnus")}</span>
            <span>${escapeHtml(article.date || "")}</span>
            <span>${escapeHtml(article.category || "")}</span>
            <span>${escapeHtml(article.read || "")}</span>
          </div>
          <p>${escapeHtml(article.excerpt || "")}</p>
        </article>
        <div class="article-body">${articleBody(article)}</div>
      `;
    }

    function runEditorCommand(command, value = null) {
      bodyEditor.focus();
      document.execCommand(command, false, value);
      updatePreviews();
      queueAutosave();
    }

    function articleFallbackOg() {
      const article = adminArticles.find((item) => item.id === selectedId);
      return article ? article.image || assets.founderBanner : assets.founderBanner;
    }

    function markdownToHtml(markdown) {
      const lines = markdown.split(/\r?\n/);
      const html = [];
      let listItems = [];

      const flushList = () => {
        if (!listItems.length) return;
        html.push(`<ul>${listItems.join("")}</ul>`);
        listItems = [];
      };

      const inline = (text) =>
        escapeHtml(text)
          .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
          .replace(/\*(.+?)\*/g, "<em>$1</em>")
          .replace(/\[(.+?)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

      lines.forEach((line) => {
        const trimmed = line.trim();
        if (!trimmed) {
          flushList();
          return;
        }
        if (/^---+$/.test(trimmed)) {
          flushList();
          html.push("<hr>");
        } else if (trimmed.startsWith("### ")) {
          flushList();
          html.push(`<h3>${inline(trimmed.slice(4))}</h3>`);
        } else if (trimmed.startsWith("## ")) {
          flushList();
          html.push(`<h2>${inline(trimmed.slice(3))}</h2>`);
        } else if (trimmed.startsWith("# ")) {
          flushList();
          html.push(`<h1>${inline(trimmed.slice(2))}</h1>`);
        } else if (trimmed.startsWith("> ")) {
          flushList();
          html.push(`<blockquote>${inline(trimmed.slice(2))}</blockquote>`);
        } else if (/^[-*]\s+/.test(trimmed)) {
          listItems.push(`<li>${inline(trimmed.replace(/^[-*]\s+/, ""))}</li>`);
        } else {
          flushList();
          html.push(`<p>${inline(trimmed)}</p>`);
        }
      });
      flushList();
      return html.join("");
    }
  }

  async function hashText(text) {
    const bytes = new TextEncoder().encode(text);
    const digest = await crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(digest))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  }

  function normalizeDateInput(value) {
    if (!value) return new Date().toISOString().slice(0, 10);
    const parsed = /^\d{4}-\d{2}-\d{2}$/.test(value) ? new Date(`${value}T12:00:00`) : new Date(value);
    if (Number.isNaN(parsed.valueOf())) return value;
    return parsed.toISOString().slice(0, 10);
  }

  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function debounce(fn, delay) {
    let timeout;
    return (...args) => {
      window.clearTimeout(timeout);
      timeout = window.setTimeout(() => fn(...args), delay);
    };
  }

	  function scheduleImageWarmup() {
	    const warm = () => {
	      [assets.cosmicBg, assets.founderBanner, assets.logo1, assets.logo2, assets.profile, assets.ufo].forEach((src) => {
	        const image = new Image();
	        image.decoding = "async";
	        image.src = src;
	      });
	    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(warm, { timeout: 2400 });
    } else {
	      window.setTimeout(warm, 1200);
	    }
	  }

	  function fallbackPage(key = "home") {
	    const currentTitle = pageMeta[key]?.title || pageMeta.home.title;
	    return `
	      <header class="site-header is-scrolled">
	        <a class="brand" href="index.html" aria-label="AlexMagnus.global home">
	          <span class="brand__name">Alex Magnus</span>
	        </a>
	        <nav class="site-nav" aria-label="Primary navigation">
	          ${nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
	        </nav>
	      </header>
	      <main>
	        <section class="hero hero--fallback" aria-label="Alex Magnus Magnus Protocol">
	          <div class="hero__veil"></div>
	          <div class="hero__shell">
	            <div class="hero__copy">
	              <h1>ALEX MAGNUS</h1>
	              <p class="hero__subtitle">CREATOR OF MAGNUS PROTOCOL</p>
	              ${heroSignature()}
	              <h2>MAGNUS PROTOCOL</h2>
	              <p class="hero__subheading">Principles for a New Era</p>
	              <p class="hero__text">Technology. Consciousness. Digital Sovereignty. Human Evolution.</p>
	            </div>
	          </div>
	        </section>
	      </main>
	      <footer class="site-footer">
	        <p>${currentTitle}</p>
	      </footer>
	    `;
	  }

	  function render() {
	    const key = document.body.dataset.page || "home";
	    const app = document.getElementById("app");
	    if (!app) return;
	    const isAdminPage = key === "admin" || key === "admin-articles";
	    document.documentElement.lang = "en";
	    document.documentElement.dir = "ltr";
	    document.body.classList.remove("is-rtl", "is-language-switching");
	    document.body.dataset.language = "en";

	    try {
	      const content =
	        key === "home"
	          ? home()
	          : key === "articles"
	            ? articlePage()
	            : key === "article-detail"
	              ? articleDetailPage()
	              : isAdminPage
	                ? adminPage()
	                : simplePage(key);

	      app.innerHTML = `${header(key)}${content}${isAdminPage ? "" : protocolSeal()}${footer()}`;
	    } catch (error) {
	      console.error("AlexMagnus.global render fallback activated", error);
	      app.innerHTML = fallbackPage(key);
	    }

	    try {
	      setMeta(key);
	    } catch (error) {
	      console.warn("AlexMagnus.global metadata fallback activated", error);
	    }

	    try {
	      activate();
	    } catch (error) {
	      console.warn("AlexMagnus.global interaction fallback activated", error);
	      document.documentElement.classList.add("is-ready");
	      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in-view"));
	    }
	  }

  render();
})();
