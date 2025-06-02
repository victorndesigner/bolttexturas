const translations = {
    pt: {
      inicio: "Inicio",
      stumblecups: "StumbleCups",
      reviver: "Reviver",
      tutoriais: "Tutoriais",
      pngpacks: "Packs de png",
      postagens: "Postagens",
      perfil: "Perfil",
      verNoYoutube: "Ver no YouTube",
      buscar: "Buscar",
      placeholderBusca: "Pesquise um título...",
      titulos: [
        "ENCURTADO PC",
        "ENCURTADO MOBILE",
        "OPÇÃO DO DESENVOLVEDOR",
        "TEXTURA MOBILE MÉTODO 1",
        "TEXTURA MOBILE MÉTODO 2",
        "TEXTURA STEAM",
        "COMO REMOVER TEXTURA",
        "GUYS01 E KEY"
      ]
    },
    en: {
      inicio: "Home",
      stumblecups: "StumbleCups",
      reviver: "Respawn",
      tutoriais: "Tutorials",
      pngpacks: "Png Packs",
      postagens: "Posts",
      perfil: "Profile",
      verNoYoutube: "Watch on YouTube",
      buscar: "Search",
      placeholderBusca: "Search for a title...",
      titulos: [
        "SHORTENER PC",
        "SHORTENER MOBILE",
        "DEVELOPER OPTION",
        "TEXTURE MOBILE METHOD 1",
        "TEXTURE MOBILE METHOD 2",
        "STEAM TEXTURE",
        "HOW TO REMOVE TEXTURE",
        "GUYS01 AND KEY"
      ]
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
    document.querySelector('li a[href="/reviver"]').innerText = t.reviver;
    document.querySelector('a[href="/stumblecups"]').innerText = t.stumblecups;
    document.querySelector('a[href="/postagens"].active').innerText = t.tutoriais;
    document.querySelector('li a[href="/pngspacks"]').innerText = t.pngpacks;
    document.querySelectorAll('a[href="/postagens"]')[1].innerText = t.postagens;
  
    const perfilLink = document.querySelector('a[href="/perfil"]');
    if (perfilLink && perfilLink.childNodes.length > 0) {
      perfilLink.childNodes[0].nodeValue = t.perfil + " ";
    }

    const el = document.getElementById('pngpacksdesc');
    if (el) el.textContent = t.pngpacksdesc;
  
    // Botões de vídeo
    document.querySelectorAll('.purple-button').forEach(btn => {
      const txt = btn.innerText.trim().toLowerCase();
      if (txt === "ver no youtube" || txt === "watch on youtube") {
        btn.innerText = t.verNoYoutube;
      }
    });
  
    // Placeholder da busca
    const searchInput = document.getElementById("searchInput");
    if (searchInput) searchInput.placeholder = t.placeholderBusca;
  
    const searchBtn = document.querySelector('#searchForm button');
    if (searchBtn) searchBtn.innerText = t.buscar;
  
    // Títulos dos vídeos
    const videoTitles = document.querySelectorAll(".video-title");
    videoTitles.forEach((el, index) => {
      if (t.titulos[index]) {
        el.innerText = t.titulos[index];
      }
    });
  }
  
  function updateLanguageUI(lang) {
    document.querySelectorAll('.language-selector button').forEach(btn => {
      btn.classList.remove('active');
    });
    const btn = document.getElementById('lang-' + (lang === 'pt' ? 'br' : 'us'));
    if (btn) btn.classList.add('active');
  }
  
  // Reaplicar tradução globalmente
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
  