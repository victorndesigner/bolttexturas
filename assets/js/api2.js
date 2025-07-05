const scriptVersion = "0.88.2";

function getPosts() {
    return [
        {
            title: "SemTextura",
            version: "0.88.2",
            image: "assets/imagens/REVIVER00.png",
            steam: "https://sannerurl.com/rvv-stext-ste",
            mobile: "https://sannerurl.com/rvv-stxt-mob"
        },
        {
            title: "MegaLite",
            version: "0.88.2",
            image: "assets/imagens/REVIVER01.png",
            steam: "https://sannerurl.com/rvv-mglt-ste",
            mobile: "https://sannerurl.com/rvv-mglt-mob"
        },
        {
            title: "MegaLite2",
            version: "0.88.2",
            image: "assets/imagens/REVIVER02.png",
            steam: "https://sannerurl.com/rvv-mglt2-ste",
            mobile: "https://sannerurl.com/rvv-mglt2-mob"
        },
        {
            title: "StumbleBolt",
            version: "0.88.2",
            image: "assets/imagens/REVIVER03.png",
            steam: "https://sannerurl.com/rvv-stb-ste",
            mobile: "https://sannerurl.com/rvv-stb-mob"
        },
        {
            title: "StumbleBolt2",
            version: "0.88.2",
            image: "assets/imagens/REVIVER04.png",
            steam: "https://sannerurl.com/rvv-stb2-ste",
            mobile: "https://sannerurl.com/rvv-stb2-mob"
        },
        {
            title: "StumbleGodz",
            version: "0.88.2",
            image: "assets/imagens/REVIVER05.png",
            steam: "https://sannerurl.com/rvv-godz-ste",
            mobile: "https://sannerurl.com/rvv-godz-mob"
        },
        {
            title: "StumbleGodzExc",
            version: "0.88.2",
            image: "assets/imagens/REVIVER06.png",
            steam: "https://sannerurl.com/rvv-godzex-ste",
            mobile: "https://sannerurl.com/rvv-godzex-mob"
        },
        {
            title: "GotiGreen",
            version: "0.88.2",
            image: "assets/imagens/REVIVER07.png",
            steam: "https://sannerurl.com/rvv-goti-ste",
            mobile: "https://sannerurl.com/rvv-goti-mob"
        },
        {
            title: "GotiCartoon",
            version: "0.88.2",
            image: "assets/imagens/REVIVER18.png",
            steam: "https://sannerurl.com/rvv-toon-ste",
            mobile: "https://sannerurl.com/rvv-toon-mob"
        },
        {
            title: "Yellow Otimizada",
            version: "0.88.2",
            image: "assets/imagens/REVIVER08.png",
            steam: "https://sannerurl.com/rvv-ylw-ste",
            mobile: "https://sannerurl.com/rvv-ylw-mob"
        },
        {
            title: "MegaLite Reshade",
            version: "0.88.2",
            image: "assets/imagens/REVIVER09.png",
            steam: "https://sannerurl.com/rvv-mgltre-ste",
            mobile: "https://sannerurl.com/rvv-mgltre-mob"
        },
        {
            title: "Reshade",
            version: "0.88.2",
            image: "assets/imagens/REVIVER10.png",
            steam: "https://sannerurl.com/rvv-re-ste",
            mobile: "https://sannerurl.com/rvv-re-mob"
        },
        {
            title: "StumblePink",
            version: "0.88.2",
            image: "assets/imagens/REVIVER11.png",
            steam: "https://sannerurl.com/rvv-pink-ste",
            mobile: "https://sannerurl.com/rvv-pink-mob"
        },
        {
            title: "BoltAgua",
            version: "0.88.2",
            image: "assets/imagens/REVIVER12.png",
            steam: "https://sannerurl.com/rvv-agua-ste",
            mobile: "https://sannerurl.com/rvv-agua-mob"
        },
        {
            title: "BoltAstaxzz",
            version: "0.88.2",
            image: "assets/imagens/REVIVER13.png",
            steam: "https://sannerurl.com/rvv-baz-ste",
            mobile: "https://sannerurl.com/rvv-baz-mob"
        },
        {
            title: "DarkUva",
            version: "0.88.2",
            image: "assets/imagens/REVIVER14.png",
            steam: "https://sannerurl.com/rvv-uva-ste",
            mobile: "https://sannerurl.com/rvv-uva-mob"
        },
        {
            title: "BoltWeen",
            version: "0.88.2",
            image: "assets/imagens/REVIVER15.png",
            steam: "https://sannerurl.com/rvv-ween-ste",
            mobile: "https://sannerurl.com/rvv-ween-mob"
        },
        {
            title: "Galaxy1",
            version: "0.88.2",
            image: "assets/imagens/REVIVER16.png",
            steam: "https://sannerurl.com/rvv-glxk-ste",
            mobile: "https://sannerurl.com/rvv-glxk-mob"
        },
        {
            title: "GalaxyBolt",
            version: "0.88.2",
            image: "assets/imagens/REVIVER17.png",
            steam: "https://sannerurl.com/rvv-glxb-ste",
            mobile: "https://sannerurl.com/rvv-glxb-mob"
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
                        <h4 style="color: gray;">${postagem.title}<br><span>Desatualizada</span></h4>
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