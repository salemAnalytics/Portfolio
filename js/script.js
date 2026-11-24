document.addEventListener("DOMContentLoaded", function () {
  const T = {
    en: {
      title: "Ahmed Salem | Data Analyst",
      "nav-work": "Work", "nav-toolkit": "Skills", "nav-path": "Background", "nav-contact": "Contact",
      kicker: "Data analyst · Cairo",
      h1: "I turn raw data into reports people can act on.",
      lead: "I analyze data and build interactive dashboards and reports in Power BI. Freelance since January 2025.",
      "btn-work": "See the dashboard", "btn-cv": "Download CV",
      "work-h": "Selected work",
      "w-p1": "An interactive Power BI report on call center performance, built for a client. I prepared the data, wrote the DAX measures and designed the report.",
      "w-p2": "It tracks the main KPIs, compares forecast against actual, and has a what-if scenario for call volume.",
      "w-tools": "Tools", "w-open": "Open full screen",
      "w-more": "Earlier web work: a data management app for operations data, and a responsive site for a land-listing site.",
      "tk-h": "Skills",
      k1: "Analysis", "k1-d": "SQL · Python · data cleaning and validation · KPI tracking · trend analysis",
      k2: "Reporting", "k2-d": "Power BI · DAX · Power Query · Excel · report design",
      k3: "Web, on the side", "k3-d": "HTML · CSS · JavaScript · Bootstrap · React",
      k4: "Learning now", "k4-d": "Tableau",
      "bg-h": "Background",
      "b1-w": "Jan 2025 – now", "b1-t": "Freelance data analyst", "b1-d": "Dashboards and KPI reporting in Power BI, with SQL, Python and Excel behind them.",
      "b2-w": "Apr 2023 – Mar 2025", "b2-t": "Freelance front-end developer", "b2-d": "Responsive, data-driven interfaces: a product catalog with dynamic filtering, a data management app, and reporting-style UI components.",
      "b3-w": "Jun – Aug 2023", "b3-t": "Data entry intern, Egypt's Food Company", "b3-d": "Entered, checked and organized company records.",
      "b4-t": "Bachelor's degree in Management Information Systems",
      "c-h": "Have data that needs a clear report?",
      "c-p": "Message me on WhatsApp, or find me on LinkedIn and GitHub.",
      hint: "Swipe the preview sideways to see the whole report.",
      "w-live": "Explore it live"
    },
    ar: {
      title: "أحمد سالم | محلل بيانات",
      "nav-work": "أعمالي", "nav-toolkit": "المهارات", "nav-path": "مشواري", "nav-contact": "تواصل",
      kicker: "محلل بيانات · القاهرة",
      h1: "أحوّل البيانات الخام إلى تقارير تُبنى عليها القرارات.",
      lead: "أحلل البيانات وأبني داشبوردات وتقارير تفاعلية في باور بي آي. أعمل بشكل حر منذ يناير 2025.",
      "btn-work": "شاهد الداشبورد", "btn-cv": "حمّل السيرة الذاتية",
      "work-h": "من أعمالي",
      "w-p1": "تقرير تفاعلي في باور بي آي عن أداء مركز اتصالات، نفّذته لصالح عميل. جهّزت البيانات، وكتبت معادلات DAX، وصمّمت التقرير.",
      "w-p2": "يتابع مؤشرات الأداء الأساسية، ويقارن المتوقع بالفعلي، ويتضمن سيناريو «ماذا لو» لحجم المكالمات.",
      "w-tools": "الأدوات", "w-open": "افتحه بملء الشاشة",
      "w-more": "أعمال ويب سابقة: تطبيق لإدارة بيانات التشغيل، وموقع متجاوب لإعلانات الأراضي.",
      "tk-h": "المهارات",
      k1: "التحليل", "k1-d": "SQL وPython، وتنظيف البيانات والتحقق منها، ومتابعة مؤشرات الأداء، وتحليل الاتجاهات",
      k2: "التقارير", "k2-d": "<bdi>Power BI</bdi> و<bdi>DAX</bdi> و<bdi>Power Query</bdi> و<bdi>Excel</bdi>، وتصميم التقارير",
      k3: "الويب إلى جانب التحليل", "k3-d": "HTML · CSS · JavaScript · Bootstrap · React",
      k4: "أتعلمه حاليًا", "k4-d": "Tableau",
      "bg-h": "مشواري",
      "b1-w": "يناير 2025 – الآن", "b1-t": "محلل بيانات مستقل", "b1-d": "داشبوردات وتقارير مؤشرات أداء في باور بي آي، مدعومة بـ SQL وPython وExcel.",
      "b2-w": "أبريل 2023 – مارس 2025", "b2-t": "مطوّر واجهات مستقل", "b2-d": "واجهات متجاوبة تعتمد على البيانات: كتالوج منتجات بفلترة ديناميكية، وتطبيق لإدارة البيانات، وعناصر واجهة بأسلوب التقارير.",
      "b3-w": "يونيو – أغسطس 2023", "b3-t": "متدرب إدخال بيانات، Egypt's Food Company", "b3-d": "إدخال سجلات الشركة ومراجعتها وتنظيمها.",
      "b4-t": "بكالوريوس في نظم المعلومات الإدارية",
      "c-h": "عندك بيانات تحتاج تقريرًا واضحًا؟",
      "c-p": "راسلني على واتساب، أو تجدني على لينكدإن وGitHub.",
      hint: "مرّر المعاينة جانبيًا لمشاهدة التقرير كاملًا.",
      "w-live": "جرّبه مباشرة"
    }
  };
  const btn = document.getElementById("lang-btn");
  let lang = new URLSearchParams(location.search).get("lang") || localStorage.getItem("lang") || "en";
  function apply(l) {
    document.documentElement.lang = l;
    document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
    btn.textContent = l === "en" ? "AR" : "EN";
    document.querySelectorAll("[data-key]").forEach((el) => {
      const v = T[l][el.dataset.key];
      if (v) el.innerHTML = v;
    });
    document.title = T[l].title;
    localStorage.setItem("lang", l);
  }
  btn.addEventListener("click", () => { lang = lang === "en" ? "ar" : "en"; apply(lang); });
  apply(lang);
});

document.addEventListener("DOMContentLoaded",function(){
  var b=document.getElementById("live-btn");
  b.addEventListener("click",function(){
    var box=document.getElementById("embed");
    var f=document.createElement("iframe");
    f.src="https://app.powerbi.com/view?r=eyJrIjoiMTgxYjhhMzEtYzE5MC00OTMwLTgxZGMtZjk2NGVmMWZlOTA5IiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9&pageView=fitToPage";f.title="Sallah Call Center Performance Dashboard";f.setAttribute("allowfullscreen","true");f.frameBorder="0";
    box.innerHTML="";box.appendChild(f);b.style.display="none";
  });
});
