document.addEventListener("DOMContentLoaded", function () {
  // 1. Mouse Follower
  const dot = document.querySelector(".cursor-dot");
  const outline = document.querySelector(".cursor-outline");
  window.addEventListener("mousemove", (e) => {
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
    outline.animate(
      { left: `${e.clientX}px`, top: `${e.clientY}px` },
      { duration: 400, fill: "forwards" },
    );
  });

  // 2. Translation Dictionary
  const translations = {
    en: {
      title: "Ahmed Salem | Data Analyst",
      "nav-home": "Home",
      "nav-skills": "Skills",
      "nav-projects": "Projects",
      "nav-contact": "Contact",
      "hero-h1": "Hi, I'm <span class='highlight'>Ahmed Salem</span>",
      "hero-p":
        "Data Analyst specialized in turning complex data into strategic insights.",
      "btn-view": "View Projects",
      "btn-cv": "Download CV",
      "skills-header": "Skills & Experience",
      "tech-skills": "Technical Skills",
      "skill-g1": "Data Analysis & BI",
      "skill-g2": "Web Development",
      "skill-g3": "Management",
      s1: "Power BI & DAX:",
      "s1-d": "Advanced Data Modeling & What-If Analysis.",
      s2: "Deep Data Cleaning:",
      "s2-d": "Handling large datasets and cleaning.",
      s3: "SQL & Power Query:",
      "s3-d": "ETL processes and Data Transformation.",
      s4: "Python & Advanced Excel:",
      "s4-d": "Statistical analysis and financial modeling.",
      s5: "HTML5 & CSS3:",
      "s5-d": "Building fully responsive interfaces.",
      s6: "JavaScript & Bootstrap:",
      "s6-d": "Adding interactivity and layout styling.",
      s7: "Git & GitHub:",
      "s7-d": "Version control and project documentation.",
      "biz-skills": "Business Skills",
      soft1: "Business Understanding",
      "soft1-d": "Linking data with company goals.",
      soft2: "Analytical Thinking",
      "soft2-d": "Breaking down complex problems.",
      soft3: "Data Storytelling",
      "soft3-d": "Turning numbers into stories.",
      soft4: "Business Mindset",
      "soft4-d": "Focusing on KPIs.",
      soft5: "Effective Communication",
      "soft5-d": "Simplifying results for management.",
      "projects-header": "Featured Projects",
      "p1-desc": "Comprehensive analysis for Sallah platform.",
      "next-proj": "Next Project Coming Soon...",
      "p-tools-title": "Tech Stack:",
      "footer-tagline": "Turning raw data into strategic business impact.",
      "footer-copy": "All Rights Reserved.",
    },
    ar: {
      title: "أحمد سالم | محلل بيانات",
      "nav-home": "الرئيسية",
      "nav-skills": "المهارات",
      "nav-projects": "المشاريع",
      "nav-contact": "تواصل معي",
      "hero-h1": "أهلاً، أنا <span class='highlight'>أحمد سالم</span>",
      "hero-p":
        "محلل بيانات متخصص في تحويل البيانات المعقدة إلى رؤى استراتيجية تدعم اتخاذ القرار.",
      "btn-view": "مشاهدة المشاريع",
      "btn-cv": "تحميل الـ CV",
      "skills-header": "المهارات والخبرات",
      "tech-skills": "المهارات التقنية",
      "skill-g1": "تحليل البيانات والـ BI",
      "skill-g2": "تطوير الويب",
      "skill-g3": "الإدارة والتحكم",
      s1: "باور بي آي و DAX:",
      "s1-d": "نمذجة البيانات المتقدمة وتحليل السيناريوهات.",
      s2: "تنظيف البيانات العميق:",
      "s2-d": "التعامل مع مجموعات البيانات الضخمة وتنظيفها.",
      s3: "SQL و Power Query:",
      "s3-d": "عمليات ETL وتحويل البيانات الجاهزة للتحليل.",
      s4: "بايثون وإكسيل متقدم:",
      "s4-d": "التحليل الإحصائي والنمذجة المالية الدقيقة.",
      s5: "HTML5 و CSS3:",
      "s5-d": "بناء واجهات مستخدم متجاوبة بالكامل.",
      s6: "JS و Bootstrap:",
      "s6-d": "إضافة التفاعل وتنسيق تخطيطات الصفحات.",
      s7: "Git و GitHub:",
      "s7-d": "التحكم في الإصدارات وتوثيق المشاريع تقنياً.",
      "biz-skills": "مهارات الأعمال",
      soft1: "فهم متطلبات العمل",
      "soft1-d": "ربط تحليل البيانات بأهداف الشركة الاستراتيجية.",
      soft2: "التفكير التحليلي",
      "soft2-d": "تفكيك المشكلات المعقدة والوصول للحلول.",
      soft3: "حكي القصص بالبيانات",
      "soft3-d": "تحويل الأرقام الصماء إلى قصص مفهومة وجذابة.",
      soft4: "عقلية صاحب العمل",
      "soft4-d": "التركيز على مؤشرات الأداء الأساسية (KPIs).",
      soft5: "التواصل الفعال",
      "soft5-d": "تبسيط النتائج المعقدة للإدارة بوضوح.",
      "projects-header": "المشاريع المميزة",
      "p1-desc": "تحليل شامل لبيانات منصة سلة.",
      "next-proj": "المشروع القادم قريباً...",
      "p-tools-title": "التقنيات المستخدمة:",
      "footer-tagline": "تحويل البيانات الخام إلى أثر استراتيجي ملموس للأعمال.",
      "footer-copy": "جميع الحقوق محفوظة.",
    },
  };

  const langBtn = document.getElementById("lang-btn");
  const themeBtn = document.getElementById("theme-btn");
  const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("nav-menu");

  let currentLang = localStorage.getItem("lang") || "en";
  let currentTheme = localStorage.getItem("theme") || "dark";

  function updateLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    // تعديل نص الزر: لو الحالي إنجليزي اظهر AR، لو عربي اظهر EN
    langBtn.textContent = lang === "en" ? "AR" : "EN";

    document.querySelectorAll("[data-key]").forEach((el) => {
      const key = el.getAttribute("data-key");
      if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    localStorage.setItem("lang", lang);
  }

  function updateTheme(theme) {
    const icon = themeBtn.querySelector("i");
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
      icon.classList.replace("fa-moon", "fa-sun");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
      icon.classList.replace("fa-sun", "fa-moon");
    }
    localStorage.setItem("theme", theme);
  }

  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ar" : "en";
    updateLanguage(currentLang);
  });

  themeBtn.addEventListener("click", () => {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    updateTheme(currentTheme);
  });

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuBtn.querySelector("i").classList.toggle("fa-bars");
    menuBtn.querySelector("i").classList.toggle("fa-xmark");
  });

  new Swiper(".mySwiper", {
    loop: true,
    autoplay: false,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  updateLanguage(currentLang);
  updateTheme(currentTheme);
});
