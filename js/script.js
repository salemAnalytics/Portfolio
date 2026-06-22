document.addEventListener("DOMContentLoaded", function () {
  // --- 1. Custom Mouse Follower Animation ---
  const dot = document.querySelector(".cursor-dot");
  const outline = document.querySelector(".cursor-outline");

  window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    // حركة النقطة الصغيرة (تتبع فوري)
    dot.style.left = `${posX}px`;
    dot.style.top = `${posY}px`;

    // حركة الدائرة الكبيرة (تتبع انسيابي)
    outline.animate(
      {
        left: `${posX}px`,
        top: `${posY}px`,
      },
      { duration: 500, fill: "forwards" },
    );
  });

  // --- 2. Translation Dictionary ---
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
      "skill-g2": "Development",
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
      s6: "JS & Bootstrap:",
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
      "projects-header": "Featured Projects",
      "p-goal": "Decision Support",
      "next-proj": "Next Project Coming Soon...",
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
      "skill-g3": "الإدارة",
      s1: "Power BI & DAX:",
      "s1-d": "نماذج بيانات متقدمة وتحليل السيناريوهات.",
      s2: "تنظيف البيانات العميق:",
      "s2-d": "معالجة البيانات الضخمة وتنقيتها.",
      s3: "SQL & Power Query:",
      "s3-d": "استخراج وتحويل البيانات (ETL).",
      s4: "Python & Excel:",
      "s4-d": "تحليل إحصائي ونمذجة مالية.",
      s5: "HTML5 & CSS3:",
      "s5-d": "بناء واجهات ريسبونسيف بالكامل.",
      s6: "JS & Bootstrap:",
      "s6-d": "إضافة التفاعل وتنسيق الشاشات.",
      s7: "Git & GitHub:",
      "s7-d": "توثيق وإدارة إصدارات المشاريع.",
      "biz-skills": "مهارات البيزنس",
      soft1: "فهم البيزنس",
      "soft1-d": "ربط البيانات بأهداف الشركة الاستراتيجية.",
      soft2: "التفكير التحليلي",
      "soft2-d": "تفكيك المشاكل المعقدة والوصول للحلول.",
      soft3: "Data Storytelling",
      "soft3-d": "تحويل الأرقام لقصص بصرية مفهومة.",
      "projects-header": "أبرز الأعمال",
      "p-goal": "دعم اتخاذ القرار",
      "next-proj": "المشروع القادم قريباً...",
      "footer-tagline": "تحويل البيانات الخام إلى أثر استراتيجي للأعمال.",
      "footer-copy": "جميع الحقوق محفوظة.",
    },
  };

  const langBtn = document.getElementById("lang-btn");
  const themeBtn = document.getElementById("theme-btn");
  const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("nav-menu");

  let currentLang = localStorage.getItem("lang") || "en";
  let currentTheme = localStorage.getItem("theme") || "light";

  function updateLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    langBtn.textContent = lang === "en" ? "العربية" : "English";
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
      icon.classList.replace("fa-moon", "fa-sun");
    } else {
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
