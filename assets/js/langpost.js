const translations = {
    pt: {
      inicio: "Inicio",
      stumblecups: "StumbleCups",
      vantagens: "Vantagens",
      tutoriais: "Tutoriais",
      pngpacks: "Packs de Png",
      postagens: "Postagens",
      perfil: "Perfil",
      outrasPostagens: "OUTRAS POSTAGENS",
      vejaNoTiktok: "Veja no Tiktok!"
    },
    en: {
      inicio: "Home",
      stumblecups: "StumbleCups",
      vantagens: "Advantages",
      tutoriais: "Tutorials",
      pngpacks: "Png Packs",
      postagens: "Posts",
      perfil: "Profile",
      outrasPostagens: "OTHER POSTS",
      vejaNoTiktok: "Watch on TikTok!"
    }
  };
  
  function setLanguage(lang) {
    localStorage.setItem("siteLang", lang);
    applyTranslations(lang);
    updateLanguageUI(lang);
  }
  
  function applyTranslations(lang) {
    const t = translations[lang];
  
    // Menu
    document.querySelector('a[href="/"]').innerText = t.inicio;
    document.querySelector('a[href="/stumblecups"]').innerText = t.stumblecups;
    document.querySelector('a[href="/tutoriais"]').innerText = t.tutoriais;
    document.querySelector('a[href="/pngspacks"]').innerText = t.pngpacks;
    document.querySelector('a[href="/postagens"]').innerText = t.postagens;
  
    const perfilLink = document.querySelector('a[href="/perfil"]');
    if (perfilLink && perfilLink.childNodes.length > 0) {
      perfilLink.childNodes[0].nodeValue = t.perfil + " ";
    }
  
    const el = document.getElementById('pngpacksdesc');
    if (el) el.textContent = t.pngpacksdesc;

    // Título "Outras Postagens"
    const h2 = document.querySelector('.game-details h2');
    if (h2) h2.innerText = t.outrasPostagens;
  
    // Texto abaixo dos vídeos
    document.querySelectorAll('.unclickable-link').forEach(span => {
      span.innerText = t.vejaNoTiktok;
    });
  }
  
  function updateLanguageUI(lang) {
    document.querySelectorAll('.language-selector button').forEach(btn => btn.classList.remove('active'));
    const btn = document.getElementById('lang-' + (lang === 'pt' ? 'br' : 'us'));
    if (btn) btn.classList.add('active');
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('siteLang') || 'pt';
    setLanguage(lang);
  
    const langBR = document.getElementById('lang-br');
    const langUS = document.getElementById('lang-us');
    if (langBR) langBR.addEventListener('click', () => setLanguage('pt'));
    if (langUS) langUS.addEventListener('click', () => setLanguage('en'));
  });
  