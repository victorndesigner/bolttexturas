const scriptVersion = "0.88.1";

function getPosts() {
    return [
        {
            title: "MegaLite",
            version: "0.88.1",
            image: "assets/imagens/MEGALITEBOLTASTAX.png",
            steam: "https://sannerurl.com/txt-mglt-ste",
            mobile: "https://sannerurl.com/txt-mglt-mob"
        },
        {
            title: "MegaLite2",
            version: "0.88.1",
            image: "assets/imagens/MEGALITE2.0BOLTASTAX.png",
            steam: "https://sannerurl.com/txt-mglt2-ste",
            mobile: "https://sannerurl.com/txt-mglt2-mobi"
        },
        {
            title: "StumbleBolt",
            version: "0.88.1",
            image: "assets/imagens/STUMBLEBOLT.png",
            steam: "https://sannerurl.com/txt-stb-ste",
            mobile: "https://sannerurl.com/txt-stb-mob"
        },
        {
            title: "StumbleBolt2",
            version: "0.88.1",
            image: "assets/imagens/STUMBLEBOLT2.0.png",
            steam: "https://sannerurl.com/txt-stb2-ste",
            mobile: "https://sannerurl.com/txt-stb2-mob"
        },
        {
            title: "StumbleGodz",
            version: "0.88.1",
            image: "assets/imagens/STUMBLEGODZ.png",
            steam: "https://sannerurl.com/txt-godz-ste",
            mobile: "https://sannerurl.com/txt-godz-mob"
        },
        {
            title: "StumbleGodzExc",
            version: "0.88.1",
            image: "assets/imagens/STUMBLEGODZEXC.png",
            steam: "https://sannerurl.com/txt-godzex-ste",
            mobile: "https://sannerurl.com/txt-godzex-mob"
        },
        {
            title: "GotiGreen",
            version: "0.88.1",
            image: "assets/imagens/GOTIGREEN.png",
            steam: "https://sannerurl.com/txt-goti-ste",
            mobile: "https://sannerurl.com/txt-goti-mob"
        },
        {
            title: "GotiCartoon",
            version: "0.88.1",
            image: "assets/imagens/GOTICARTOON.png",
            steam: "https://sannerurl.com/txt-toon-ste",
            mobile: "https://sannerurl.com/txt-toon-mob"
        },
        {
            title: "Yellow Otimizada",
            version: "0.88.1",
            image: "assets/imagens/YELLOWOTIMIZADA.png",
            steam: "https://sannerurl.com/txt-ylw-ste",
            mobile: "https://sannerurl.com/txt-ylw-mob"
        },
        {
            title: "MegaLite Reshade",
            version: "0.88.1",
            image: "assets/imagens/RESHADERBOLTASTAX.png",
            steam: "https://sannerurl.com/txt-mgltre-ste",
            mobile: "https://sannerurl.com/txt-mgltre-mob"
        },
        {
            title: "Reshade",
            version: "0.88.1",
            image: "assets/imagens/RESHADER.png",
            steam: "https://sannerurl.com/txt-re-ste",
            mobile: "https://sannerurl.com/txt-re-mob"
        },
        {
            title: "StumblePink",
            version: "0.88.1",
            image: "assets/imagens/STUMBLEPINK.png",
            steam: "https://sannerurl.com/txt-pink-ste",
            mobile: "https://sannerurl.com/txt-pink-mob"
        },
        {
            title: "BoltAgua",
            version: "0.88.1",
            image: "assets/imagens/BOLTAGUA.png",
            steam: "https://sannerurl.com/txt-agua-ste",
            mobile: "https://sannerurl.com/txt-agua-mob"
        },
        {
            title: "BoltAstaxzz",
            version: "0.88.1",
            image: "assets/imagens/BOLTAXZZ.png",
            steam: "https://sannerurl.com/txt-baz-ste",
            mobile: "https://sannerurl.com/txt-baz-mob"
        },
        {
            title: "DarkUva",
            version: "0.88.1",
            image: "assets/imagens/DARKUVA.png",
            steam: "https://sannerurl.com/txt-uva-ste",
            mobile: "https://sannerurl.com/txt-uva-mob"
        },
        {
            title: "BoltWeen",
            version: "0.88.1",
            image: "assets/imagens/BOLTWEEN.png",
            steam: "https://sannerurl.com/txt-ween-ste",
            mobile: "https://sannerurl.com/txt-ween-mob"
        },
        {
            title: "Galaxy1",
            version: "0.88.1",
            image: "assets/imagens/GALAXY1.png",
            steam: "https://sannerurl.com/txt-glxk-ste",
            mobile: "https://sannerurl.com/txt-glxk-mob"
        },
        {
            title: "GalaxyBolt",
            version: "0.88.1",
            image: "assets/imagens/GALAXYBOLT.png",
            steam: "https://sannerurl.com/txt-glxb-ste",
            mobile: "https://sannerurl.com/txt-glxb-mob"
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