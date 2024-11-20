// Defina a versão do script aqui
const scriptVersion = "0.81";

// Lista de postagens com suas respectivas versões
function getPosts() {
    return [
        {
            title: "MegaLite",
            version: "0.80",
            image: "assets/imagens/MEGALITEBOLTASTAX.png",
            donwload: "https://rbxurl.pro/TXT-MGLT"
        },
        {
            title: "MegaLite2",
            version: "0.79",
            image: "assets/imagens/MEGALITE2.0BOLTASTAX.png",
            donwload: "https://rbxurl.pro/TXT-MGLT2"
        },
        {
            title: "StumbleBolt",
            version: "0.79",
            image: "assets/imagens/STUMBLEBOLT.png",
            donwload: "https://rbxurl.pro/TXT-STB"
        },
        {
            title: "StumbleBolt2",
            version: "0.79",
            image: "assets/imagens/STUMBLEBOLT2.0.png",
            donwload: "https://rbxurl.pro/TXT-STB2"
        },
        {
            title: "StumbleGodz",
            version: "0.79",
            image: "assets/imagens/STUMBLEGODZ.png",
            donwload: "https://rbxurl.pro/TXT-GODZ"
        },
        {
            title: "StumbleGodzEX",
            version: "0.80",
            image: "assets/imagens/STUMBLEGODZEXC.png",
            donwload: "https://rbxurl.pro/TXT-GODZEX"
        },
        {
            title: "GotiGreen",
            version: "0.80",
            image: "assets/imagens/GOTIGREEN.png",
            donwload: "https://rbxurl.pro/TXT-GOTI"
        },
        {
            title: "GotiCartoon",
            version: "0.80",
            image: "assets/imagens/GOTICARTOON.png",
            donwload: "https://rbxurl.pro/TXT-TOON"
        },
        {
            title: "Yellow Otimizada",
            version: "0.79",
            image: "assets/imagens/YELLOWOTIMIZADA.png",
            donwload: "https://rbxurl.pro/TXT-YLW"
        },
        {
            title: "MegaLite Reshade",
            version: "0.79",
            image: "assets/imagens/RESHADERBOLTASTAX.png",
            donwload: "https://rbxurl.pro/TXT-MGLTRE"
        },
        {
            title: "Reshade",
            version: "0.79",
            image: "assets/imagens/RESHADER.png",
            donwload: "https://rbxurl.pro/TXT-RE"
        },
        {
            title: "StumblePink",
            version: "0.79",
            image: "assets/imagens/STUMBLEPINK.png",
            donwload: "https://rbxurl.pro/TXT-PINK"
        },
        {
            title: "BoltAgua",
            version: "0.80",
            image: "assets/imagens/BOLTAGUA.png",
            donwload: "https://rbxurl.pro/TXT-AGUA"
        },
        {
            title: "BoltAstaxzz",
            version: "0.79",
            image: "assets/imagens/BOLTAXZZ.png",
            donwload: "https://rbxurl.pro/TXT-BAZ"
        },
        {
            title: "DarkUva",
            version: "0.79",
            image: "assets/imagens/DARKUVA.png",
            donwload: "https://rbxurl.pro/TXT-UVA"
        },
        {
            title: "BoltWeen",
            version: "0.79",
            image: "assets/imagens/BOLTWEEN.png",
            donwload: "https://rbxurl.pro/TXT-WEEN"
        },
        {
            title: "Galaxy1",
            version: "0.79",
            image: "assets/imagens/GALAXY1.png",
            donwload: "https://rbxurl.pro/TXT-GLXK"
        },
        {
            title: "GalaxyBolt",
            version: "0.79",
            image: "assets/imagens/GALAXYBOLT.png",
            donwload: "https://rbxurl.pro/TXT-GLXB"
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