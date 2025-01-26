const scriptVersion = "0.82";

function getPosts() {
    return [
        {
            title: "MegaLite",
            version: "0.81",
            image: "assets/imagens/MEGALITEBOLTASTAX.png",
            steam: "https://rbxurl.pro/txt-mglt-steam",
            mobile: "https://rbxurl.pro/txt-mglt-mobile"
        },
        {
            title: "MegaLite2",
            version: "0.81",
            image: "assets/imagens/MEGALITE2.0BOLTASTAX.png",
            steam: "https://rbxurl.pro/txt-mglt2-steam",
            mobile: "https://rbxurl.pro/txt-mglt2-mobile"
        },
        {
            title: "StumbleBolt",
            version: "0.81",
            image: "assets/imagens/STUMBLEBOLT.png",
            steam: "https://rbxurl.pro/txt-stb-steam",
            mobile: "https://rbxurl.pro/txt-stb-mobile"
        },
        {
            title: "StumbleBolt2",
            version: "0.81",
            image: "assets/imagens/STUMBLEBOLT2.0.png",
            steam: "https://rbxurl.pro/txt-stb2-steam",
            mobile: "https://rbxurl.pro/txt-stb2-mobile"
        },
        {
            title: "StumbleGodz",
            version: "0.81",
            image: "assets/imagens/STUMBLEGODZ.png",
            steam: "https://rbxurl.pro/txt-godz-steam",
            mobile: "https://rbxurl.pro/txt-godz-mobile"
        },
        {
            title: "StumbleGodzExc",
            version: "0.81",
            image: "assets/imagens/STUMBLEGODZEXC.png",
            steam: "https://rbxurl.pro/txt-godzex-steam",
            mobile: "https://rbxurl.pro/txt-godzex-mobile"
        },
        {
            title: "GotiGreen",
            version: "0.81",
            image: "assets/imagens/GOTIGREEN.png",
            steam: "https://rbxurl.pro/txt-goti-steam",
            mobile: "https://rbxurl.pro/txt-goti-mobile"
        },
        {
            title: "GotiCartoon",
            version: "0.81",
            image: "assets/imagens/GOTICARTOON.png",
            steam: "https://rbxurl.pro/txt-toon-steam",
            mobile: "https://rbxurl.pro/txt-toon-mobile"
        },
        {
            title: "Yellow Otimizada",
            version: "0.81",
            image: "assets/imagens/YELLOWOTIMIZADA.png",
            steam: "https://rbxurl.pro/txt-ylw-steam",
            mobile: "https://rbxurl.pro/txt-ylw-mobile"
        },
        {
            title: "MegaLite Reshade",
            version: "0.81",
            image: "assets/imagens/RESHADERBOLTASTAX.png",
            steam: "https://rbxurl.pro/txt-mgltre-steam",
            mobile: "https://rbxurl.pro/txt-mgltre-mobile"
        },
        {
            title: "Reshade",
            version: "0.81",
            image: "assets/imagens/RESHADER.png",
            steam: "https://rbxurl.pro/txt-re-steam",
            mobile: "https://rbxurl.pro/txt-re-mobile"
        },
        {
            title: "StumblePink",
            version: "0.81",
            image: "assets/imagens/STUMBLEPINK.png",
            steam: "https://rbxurl.pro/txt-pink-steam",
            mobile: "https://rbxurl.pro/txt-pink-mobile"
        },
        {
            title: "BoltAgua",
            version: "0.81",
            image: "assets/imagens/BOLTAGUA.png",
            steam: "https://rbxurl.pro/txt-agua-steam",
            mobile: "https://rbxurl.pro/txt-agua-mobile"
        },
        {
            title: "BoltAstaxzz",
            version: "0.81",
            image: "assets/imagens/BOLTAXZZ.png",
            steam: "https://rbxurl.pro/txt-baz-steam",
            mobile: "https://rbxurl.pro/txt-baz-mobile"
        },
        {
            title: "DarkUva",
            version: "0.81",
            image: "assets/imagens/DARKUVA.png",
            steam: "https://rbxurl.pro/txt-uva-steam",
            mobile: "https://rbxurl.pro/txt-uva-mobile"
        },
        {
            title: "BoltWeen",
            version: "0.81",
            image: "assets/imagens/BOLTWEEN.png",
            steam: "https://rbxurl.pro/txt-ween-steam",
            mobile: "https://rbxurl.pro/txt-ween-mobile"
        },
        {
            title: "Galaxy1",
            version: "0.81",
            image: "assets/imagens/GALAXY1.png",
            steam: "https://rbxurl.pro/txt-glxk-steam",
            mobile: "https://rbxurl.pro/txt-glxk-mobile"
        },
        {
            title: "GalaxyBolt",
            version: "0.81",
            image: "assets/imagens/GALAXYBOLT.png",
            steam: "https://rbxurl.pro/txt-glxb-steam",
            mobile: "https://rbxurl.pro/txt-glxb-mobile"
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