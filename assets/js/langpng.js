const translations = {
    pt: {
      inicio: "Inicio",
      stumblecups: "StumbleCups",
      vantagens: "Vantagens",
      tutoriais: "Tutoriais",
      pngpacks: "Packs de png",
      postagens: "Postagens",
      perfil: "Perfil",
      meApoiaPart1: "me apoia",
      meApoiaPart2: "lá",
      youtube: "YouTube",
      titulo1: "PACKS DE",
      titulo2: "PNG",
      guys: "Guys01",
      normal: "Normal",
      clone: "Clone",
      pngpacksdesc: "(PNG PACKS) PACK DE IMAGENS",
      searchPlaceholder: "Pesquisar...",
      searchButton: "Buscar",
      comingSoon: "Em Breve...",
      outdated: "Desatualizada"
    },
    en: {
      inicio: "Home",
      stumblecups: "StumbleCups",
      vantagens: "Advantages",
      tutoriais: "Tutorials",
      pngpacks: "Png Packs",
      postagens: "Posts",
      perfil: "Profile",
      meApoiaPart1: "subscribe-",
      meApoiaPart2: "me",
      youtube: "YouTube",
      titulo1: "PNG",
      titulo2: "PACKS",
      guys: "Guys01",
      normal: "Normal",
      clone: "Clone",
      pngpacksdesc: "(PNG PACKAGES) IMAGE PACKAGE",
      searchPlaceholder: "Search...",
      searchButton: "Search",
      comingSoon: "Coming Soon...",
      outdated: "Outdated"
    }
  };
  
  function setLanguage(lang) {
    localStorage.setItem('siteLang', lang);
    applyTranslations(lang);
    updateLanguageUI(lang);
  }
  
  function applyTranslations(lang) {
    const t = translations[lang];
  
    // Navegação
    document.querySelector('li a[href="/"]').innerText = t.inicio;
    document.querySelector('li a[href="/stumblecups"]').innerText = t.stumblecups;
    document.querySelector('li a[href="/tutoriais"]').innerText = t.tutoriais;
    document.querySelector('li a[href="/pngspacks"]').innerText = t.pngpacks;
    document.querySelector('li a[href="/postagens"]').innerText = t.postagens;
  
    // Perfil
    const perfilLink = document.querySelector('li a[href="/perfil"]');
    if (perfilLink) perfilLink.childNodes[0].nodeValue = t.perfil + " ";
  
    // Banner - texto "me apoia lá" ou "subscribe-me"
    if (lang === "pt") {
      document.querySelector('.header-text h4').innerHTML =
        `<em style="color:white;">${t.meApoiaPart1}</em> <em style="color:#8A2BE2;">${t.meApoiaPart2}</em>`;
    } else {
      document.querySelector('.header-text h4').innerHTML =
        `<em style="color:#8A2BE2;">${t.meApoiaPart1}</em><em style="color:white;">${t.meApoiaPart2}</em>`;
    }

    const el = document.getElementById('pngpacksdesc');
    if (el) el.textContent = t.pngpacksdesc;
    
    const youtubeBtn = document.querySelector('.header-text .main-button a');
    if (youtubeBtn) youtubeBtn.innerText = t.youtube;
  
    const guysH4 = document.querySelector('.col-lg-12 > h4');
    if (guysH4) guysH4.innerHTML = `${t.guys} <span style="font-weight: 400; color: #8A2BE2;">0.86.5</span>`;
  
    const normalBtn = document.querySelector('.main-button a[href*="normal"]');
    const cloneBtn = document.querySelector('.main-button a[href*="clone"]');
    if (normalBtn) normalBtn.innerText = t.normal;
    if (cloneBtn) cloneBtn.innerText = t.clone;
  
    const headingTitle = document.querySelector('.heading-section h4');
    if (headingTitle) headingTitle.innerHTML = `<em>${t.titulo1}</em> ${t.titulo2}`;
  
    // Traduzir placeholder e botão da busca
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;
  
    const searchButton = document.querySelector('#searchForm button[type="submit"]');
    if (searchButton) searchButton.innerText = t.searchButton;
  
// Traduzir textos de status dos posts
document.querySelectorAll('.heading-section .row h4 span').forEach(span => {
  const txt = span.textContent.trim();

  if (txt === "Em Breve..." || txt === "Coming Soon...") {
    span.textContent = t.comingSoon;
  } else if (txt === "Desatualizada" || txt === "Outdated") {
    span.textContent = t.outdated;
  }
  // Se quiser adicionar mais textos, só replicar aqui:
  // else if (txt === "OutroTextoOriginalEmPT" || txt === "EquivalentTextInEN") {
  //   span.textContent = t.suaChaveDeTraducao;
  // }
});

  }
  
  function updateLanguageUI(lang) {
    document.querySelectorAll('.language-selector button').forEach(btn => {
      btn.classList.remove('active');
    });
    const btn = document.getElementById('lang-' + (lang === 'pt' ? 'br' : 'us'));
    if (btn) btn.classList.add('active');
  }
  
  window.reaplicarTraducao = () => {
    const lang = localStorage.getItem('siteLang') || 'pt';
    applyTranslations(lang);
    updateLanguageUI(lang);
  };
  
  window.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('siteLang') || 'pt';
    setLanguage(lang);
  
    const langBR = document.getElementById('lang-br');
    const langUS = document.getElementById('lang-us');
    if (langBR) langBR.addEventListener('click', () => setLanguage('pt'));
    if (langUS) langUS.addEventListener('click', () => setLanguage('en'));
  });
  