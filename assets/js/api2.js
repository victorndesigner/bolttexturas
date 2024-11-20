// Defina a versão do script aqui
const scriptVersion = "0.81";

// Lista de postagens com suas respectivas versões
function getPosts() {
    return [
        {
            title: "SemTextura",
            version: "0.80",
            image: "assets/imagens/REVIVER00.png",
            download: "https://rbxurl.pro/rvv-stxt-steam"
        },
        {
            title: "MegaLite",
            version: "0.80",
            image: "assets/imagens/REVIVER01.png",
            download: "https://rbxurl.pro/rvv-mglt"
        },
        {
            title: "MegaLite2",
            version: "0.79",
            image: "assets/imagens/REVIVER02.png",
            download: "https://rbxurl.pro/rvv-mglt2"
        },
        {
            title: "StumbleBolt",
            version: "0.79",
            image: "assets/imagens/REVIVER03.png",
            download: "https://rbxurl.pro/rvv-stb"
        },
        {
            title: "StumbleBolt2",
            version: "0.79",
            image: "assets/imagens/REVIVER04.png",
            download: "https://rbxurl.pro/rvv-stb2"
        },
        {
            title: "StumbleGodz",
            version: "0.79",
            image: "assets/imagens/REVIVER05.png",
            download: "https://rbxurl.pro/rvv-godz"
        },
        {
            title: "StumbleGodzExc",
            version: "0.80",
            image: "assets/imagens/REVIVER06.png",
            download: "https://rbxurl.pro/rvv-godzex"
        },
        {
            title: "GotiGreen",
            version: "0.80",
            image: "assets/imagens/REVIVER07.png",
            download: "https://rbxurl.pro/rvv-goti"
        },
        {
            title: "GotiCartoon",
            version: "0.80",
            image: "assets/imagens/REVIVER18.png",
            download: "https://rbxurl.pro/rvv-toon"
        },
        {
            title: "Yellow Otimizada",
            version: "0.79",
            image: "assets/imagens/REVIVER08.png",
            download: "https://rbxurl.pro/rvv-ylw"
        },
        {
            title: "MegaLite Reshade",
            version: "0.79",
            image: "assets/imagens/REVIVER09.png",
            download: "https://rbxurl.pro/rvv-mgltre"
        },
        {
            title: "Reshade",
            version: "0.79",
            image: "assets/imagens/REVIVER10.png",
            download: "https://rbxurl.pro/rvv-re"
        },
        {
            title: "StumblePink",
            version: "0.79",
            image: "assets/imagens/REVIVER11.png",
            download: "https://rbxurl.pro/rvv-pink"
        },
        {
            title: "BoltAgua",
            version: "0.80",
            image: "assets/imagens/REVIVER12.png",
            download: "https://rbxurl.pro/rvv-agua"
        },
        {
            title: "BoltAstaxzz",
            version: "0.79",
            image: "assets/imagens/REVIVER13.png",
            download: "https://rbxurl.pro/rvv-baz"
        },
        {
            title: "DarkUva",
            version: "0.79",
            image: "assets/imagens/REVIVER14.png",
            download: "https://rbxurl.pro/rvv-uva"
        },
        {
            title: "BoltWeen",
            version: "0.79",
            image: "assets/imagens/REVIVER15.png",
            download: "https://rbxurl.pro/rvv-ween"
        },
        {
            title: "Galaxy1",
            version: "0.79",
            image: "assets/imagens/REVIVER16.png",
            download: "https://rbxurl.pro/rvv-glxk"
        },
        {
            title: "GalaxyBolt",
            version: "0.79",
            image: "assets/imagens/REVIVER17.png",
            download: "https://rbxurl.pro/rvv-glxb"
        }
    ];
}

// Função para renderizar as postagens
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
                            <a href="${postagem.download}" class="purple-button">Download</a>
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

// Função para adicionar a barra de pesquisa
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

    // Adiciona o evento de escuta para a barra de pesquisa
    document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio do formulário
        const searchText = document.getElementById('searchInput').value.toLowerCase();
        const filteredPosts = postagens.filter(post => post.title.toLowerCase().includes(searchText));
        renderPosts(filteredPosts);
    });
}

// Função inicial
async function init() {
    const postagens = await getPosts();
    renderPosts(postagens);
    addSearchBar(); // Adiciona a barra de pesquisa
}

init();