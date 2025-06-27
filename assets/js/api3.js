const scriptVersion = "0.56";

function getPosts() {
    return [
        {
            title: "MegaLite",
            version: "0.56",
            image: "assets/imagens/CUPS01.png",
            steam: "https://sannerurl.com/cups-mglt-st",
            mobile: "https://sannerurl.com/cups-mglt-mo"
        },
        {
            title: "MegaLite2",
            version: "0.56",
            image: "assets/imagens/CUPS02.png",
            steam: "https://sannerurl.com/cups-mglt2-st",
            mobile: "https://sannerurl.com/cups-mglt2-mo"
        },
        {
            title: "StumbleBolt",
            version: "0.56",
            image: "assets/imagens/CUPS03.png",
            steam: "https://sannerurl.com/cups-stb-st",
            mobile: "https://sannerurl.com/cups-stb-mo"
        },
        {
            title: "StumbleBolt2",
            version: "0.56",
            image: "assets/imagens/CUPS04.png",
            steam: "https://sannerurl.com/cups-stb2-st",
            mobile: "https://sannerurl.com/cups-stb2-mo"
        },
        {
            title: "StumbleGodz",
            version: "0.56",
            image: "assets/imagens/CUPS05.png",
            steam: "https://sannerurl.com/cups-godz-st",
            mobile: "https://sannerurl.com/cups-godz-mo"
        },
        {
            title: "StumbleGodzExc",
            version: "0.56",
            image: "assets/imagens/CUPS06.png",
            steam: "https://sannerurl.com/cups-godzex-st",
            mobile: "https://sannerurl.com/cups-godzex-mo"
        },
        {
            title: "GotiGreen",
            version: "0.56",
            image: "assets/imagens/CUPS07.png",
            steam: "https://sannerurl.com/cups-goti-st",
            mobile: "https://sannerurl.com/cups-goti-mo"
        },
        {
            title: "GotiCartoon",
            version: "0.56",
            image: "assets/imagens/CUPS18.png",
            steam: "https://sannerurl.com/cups-toon-st",
            mobile: "https://sannerurl.com/cups-toon-mo"
        },
        {
            title: "Yellow Otimizada",
            version: "0.56",
            image: "assets/imagens/CUPS08.png",
            steam: "https://sannerurl.com/cups-ylw-st",
            mobile: "https://sannerurl.com/cups-ylw-mo"
        },
        {
            title: "MegaLite Reshade",
            version: "0.56",
            image: "assets/imagens/CUPS09.png",
            steam: "https://sannerurl.com/cups-mgltre-st",
            mobile: "https://sannerurl.com/cups-mgltre-mo"
        },
        {
            title: "Reshade",
            version: "0.56",
            image: "assets/imagens/CUPS10.png",
            steam: "https://sannerurl.com/cups-re-st",
            mobile: "https://sannerurl.com/cups-re-mo"
        },
        {
            title: "StumblePink",
            version: "0.56",
            image: "assets/imagens/CUPS11.png",
            steam: "https://sannerurl.com/cups-pink-st",
            mobile: "https://sannerurl.com/cups-pink-mo"
        },
        {
            title: "BoltAgua",
            version: "0.56",
            image: "assets/imagens/CUPS12.png",
            steam: "https://sannerurl.com/cups-agua-st",
            mobile: "https://sannerurl.com/cups-agua-mo"
        },
        {
            title: "BoltAstaxzz",
            version: "0.56",
            image: "assets/imagens/CUPS13.png",
            steam: "https://sannerurl.com/cups-baz-st",
            mobile: "https://sannerurl.com/cups-baz-mo"
        },
        {
            title: "DarkUva",
            version: "0.56",
            image: "assets/imagens/CUPS14.png",
            steam: "https://sannerurl.com/cups-uva-st",
            mobile: "https://sannerurl.com/cups-uva-mo"
        },
        {
            title: "BoltWeen",
            version: "0.50",
            image: "assets/imagens/CUPS15.png",
            steam: "https://sannerurl.com/cups-ween-st",
            mobile: "https://sannerurl.com/cups-ween-mo"
        },
        {
            title: "Galaxy1",
            version: "0.56",
            image: "assets/imagens/CUPS16.png",
            steam: "https://sannerurl.com/cups-glxk-st",
            mobile: "https://sannerurl.com/cups-glxk-mo"
        },
        {
            title: "GalaxyBolt",
            version: "0.50",
            image: "assets/imagens/CUPS17.png",
            steam: "https://sannerurl.com/cups-glxb-st",
            mobile: "https://sannerurl.com/cups-glxb-mo"
        }
    ];
}

function renderPosts(posts) {
    const postsDisponiveis = [];
    const postsIndisponiveis = [];

    posts.forEach(postagem => {
        const postDisponivel = postagem.version === scriptVersion;

        if (postDisponivel) {
            postsDisponiveis.push(`
                <div class="col-lg-3 col-sm-6 post-item">
                    <div class="item">
                        <span style="pointer-events: none;">
                            <img src="${postagem.image}" alt="${postagem.title}">
                        </span>
                        <h4>${postagem.title}<br><span style="color: rgb(208, 190, 233);">${postagem.version}</span></h4>
                        <div class="button-container">
                            <a href="${postagem.steam}" class="purple-button">Steam</a>
                            <a href="${postagem.mobile}" class="purple-button">Mobile</a>
                        </div>
                    </div>
                </div>
            `);
        } else {
            postsIndisponiveis.push(`
                <div class="col-lg-3 col-sm-6 post-item">
                    <div class="item">
                        <span style="pointer-events: none;">
                            <img src="${postagem.image}" alt="${postagem.title}">
                        </span>
                        <h4 style="color: gray;">${postagem.title}<br><span>Em Breve...</span></h4>
                    </div>
                </div>
            `);
        }
    });

    document.querySelector('.heading-section .row').innerHTML = `
        ${postsDisponiveis.join('\n')}
        ${postsIndisponiveis.join('\n')}
    `;
}

function addSearchBar() {
    const searchHtml = `
        <div class="searchDiv">
            <form id="searchForm">
                <input type="text" id="searchInput" placeholder="Digite aqui..." value="">
                <button type="submit">Buscar</button>
            </form>
        </div>
    `;
    document.querySelector('.heading-section').insertAdjacentHTML('afterbegin', searchHtml);

    document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const searchText = document.getElementById('searchInput').value.toLowerCase();
        const filteredPosts = postagens.filter(post => post.title.toLowerCase().includes(searchText));
        renderPosts(filteredPosts);
    });
}

async function init() {
    const postagens = await getPosts();
    renderPosts(postagens);
    addSearchBar();
}

init();