const translations = {
    pt: {
      inicio: "Inicio",
      stumblecups: "StumbleCups",
      reviver: "Reviver",
      tutoriais: "Tutoriais",
      pngpacks: "Packs de png",
      postagens: "Postagens",
      perfil: "Perfil",
      trabalhando: "Trabalhando...",
      subtitulo: "Uma forma de me ajudar é assistindo pelo menos 1 minutinho de vídeo e deixar o like! Inscreve-se também!",
      botaoInscrever: "Inscreve-se",
      texto1: "Criador de texturas?",
      texto2: "Odeio pertubações?",
      texto3: "Esforçado?",
      texto4: "Você deve se inscrever no canal?",
      check: "Sim"
    },
    en: {
      inicio: "Home",
      stumblecups: "StumbleCups",
      reviver: "Respawn",
      tutoriais: "Tutorials",
      pngpacks: "Png Packs",
      postagens: "Posts",
      perfil: "Profile",
      trabalhando: "Working...",
      subtitulo: "One way to support me is by watching at least 1 minute of a video and leaving a like! Subscribe too!",
      botaoInscrever: "Subscribe",
      texto1: "Texture creator?",
      texto2: "Hate disturbances?",
      texto3: "Hardworking?",
      texto4: "Should you subscribe?",
      check: "Yes"
    }
  };
  
  function setLanguage(lang) {
    localStorage.setItem("siteLang", lang);
    applyTranslations(lang);
    updateLanguageUI(lang);
  }
  
  function applyTranslations(lang) {
    const t = translations[lang];
  
    document.querySelector('a[href="/"]').innerText = t.inicio;
    document.querySelector('li a[href="/reviver"]').innerText = t.reviver;
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
  
    const span = document.querySelector('.main-info span');
    if (span) span.innerText = t.trabalhando;
  
    const p = document.querySelector('.main-info p');
    if (p) p.innerText = t.subtitulo;
  
    const btn = document.querySelector('.main-border-button a');
    if (btn) btn.innerText = t.botaoInscrever;
  
    const listItems = document.querySelectorAll('.main-profile ul li');
    if (listItems.length >= 4) {
      listItems[0].innerHTML = `${t.texto1} <span>${t.check}</span>`;
      listItems[1].innerHTML = `${t.texto2} <span>${t.check}</span>`;
      listItems[2].innerHTML = `${t.texto3} <span>${t.check}</span>`;
      listItems[3].innerHTML = `${t.texto4} <span>${t.check}</span>`;
    }
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
  