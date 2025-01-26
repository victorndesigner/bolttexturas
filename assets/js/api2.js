const scriptVersion = "0.82";

function getPosts() {
    return [
        {
            title: "SemTextura",
            version: "0.81",
            image: "assets/imagens/REVIVER00.png",
            steam: "https://rbxurl.pro/rvv-stxt-steam",
            mobile: "https://rbxurl.pro/rvv-stxt-mobile"
        },
        {
            title: "MegaLite",
            version: "0.81",
            image: "assets/imagens/REVIVER01.png",
            steam: "https://rbxurl.pro/rvv-mglt-steam",
            mobile: "https://rbxurl.pro/rvv-mglt-mobile"
        },
        {
            title: "MegaLite2",
            version: "0.81",
            image: "assets/imagens/REVIVER02.png",
            steam: "https://rbxurl.pro/rvv-mglt2-steam",
            mobile: "https://rbxurl.pro/rvv-mglt2-mobile"
        },
        {
            title: "StumbleBolt",
            version: "0.81",
            image: "assets/imagens/REVIVER03.png",
            steam: "https://rbxurl.pro/rvv-stb-steam",
            mobile: "https://rbxurl.pro/rvv-stb-mobile"
        },
        {
            title: "StumbleBolt2",
            version: "0.81",
            image: "assets/imagens/REVIVER04.png",
            steam: "https://rbxurl.pro/rvv-stb2-steam",
            mobile: "https://rbxurl.pro/rvv-stb2-mobile"
        },
        {
            title: "StumbleGodz",
            version: "0.81",
            image: "assets/imagens/REVIVER05.png",
            steam: "https://rbxurl.pro/rvv-godz-steam",
            mobile: "https://rbxurl.pro/rvv-godz-mobile"
        },
        {
            title: "StumbleGodzExc",
            version: "0.81",
            image: "assets/imagens/REVIVER06.png",
            steam: "https://rbxurl.pro/rvv-godzex-steam",
            mobile: "https://rbxurl.pro/rvv-godzex-mobile"
        },
        {
            title: "GotiGreen",
            version: "0.81",
            image: "assets/imagens/REVIVER07.png",
            steam: "https://rbxurl.pro/rvv-goti-steam",
            mobile: "https://rbxurl.pro/rvv-goti-mobile"
        },
        {
            title: "GotiCartoon",
            version: "0.81",
            image: "assets/imagens/REVIVER18.png",
            steam: "https://rbxurl.pro/rvv-toon-steam",
            mobile: "https://rbxurl.pro/rvv-toon-mobile"
        },
        {
            title: "Yellow Otimizada",
            version: "0.81",
            image: "assets/imagens/REVIVER08.png",
            steam: "https://rbxurl.pro/rvv-ylw-steam",
            mobile: "https://rbxurl.pro/rvv-ylw-mobile"
        },
        {
            title: "MegaLite Reshade",
            version: "0.81",
            image: "assets/imagens/REVIVER09.png",
            steam: "https://rbxurl.pro/rvv-mgltre-steam",
            mobile: "https://rbxurl.pro/rvv-mgltre-mobile"
        },
        {
            title: "Reshade",
            version: "0.81",
            image: "assets/imagens/REVIVER10.png",
            steam: "https://rbxurl.pro/rvv-re-steam",
            mobile: "https://rbxurl.pro/rvv-re-mobile"
        },
        {
            title: "StumblePink",
            version: "0.81",
            image: "assets/imagens/REVIVER11.png",
            steam: "https://rbxurl.pro/rvv-pink-steam",
            mobile: "https://rbxurl.pro/rvv-pink-mobile"
        },
        {
            title: "BoltAgua",
            version: "0.81",
            image: "assets/imagens/REVIVER12.png",
            steam: "https://rbxurl.pro/rvv-agua-steam",
            mobile: "https://rbxurl.pro/rvv-agua-mobile"
        },
        {
            title: "BoltAstaxzz",
            version: "0.81",
            image: "assets/imagens/REVIVER13.png",
            steam: "https://rbxurl.pro/rvv-baz-steam",
            mobile: "https://rbxurl.pro/rvv-baz-mobile"
        },
        {
            title: "DarkUva",
            version: "0.81",
            image: "assets/imagens/REVIVER14.png",
            steam: "https://rbxurl.pro/rvv-uva-steam",
            mobile: "https://rbxurl.pro/rvv-uva-mobile"
        },
        {
            title: "BoltWeen",
            version: "0.81",
            image: "assets/imagens/REVIVER15.png",
            steam: "https://rbxurl.pro/rvv-ween-steam",
            mobile: "https://rbxurl.pro/rvv-ween-mobile"
        },
        {
            title: "Galaxy1",
            version: "0.81",
            image: "assets/imagens/REVIVER16.png",
            steam: "https://rbxurl.pro/rvv-glxk-steam",
            mobile: "https://rbxurl.pro/rvv-glxk-mobile"
        },
        {
            title: "GalaxyBolt",
            version: "0.81",
            image: "assets/imagens/REVIVER17.png",
            steam: "https://rbxurl.pro/rvv-glxb-steam",
            mobile: "https://rbxurl.pro/rvv-glxb-mobile"
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