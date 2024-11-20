// Defina a versão do script aqui
const scriptVersion = "0.80";

// Lista de postagens com suas respectivas versões
function getPosts() {
    return [
        {
            title: "SemTextura",
            version: "0.80",
            image: "assets/imagens/REVIVER00.png",
            donwload: "https://rbxurl.pro/RVV-STXT-STEAM"
        },
        {
            title: "MegaLite",
            version: "0.80",
            image: "assets/imagens/REVIVER01.png",
            donwload: "https://sysurl.com.br/RVV-MGLT"
        },
        {
            title: "MegaLite2",
            version: "0.79",
            image: "assets/imagens/REVIVER02.png",
            donwload: "https://sysurl.com.br/RVV-MGLT2"
        },
        {
            title: "StumbleBolt",
            version: "0.79",
            image: "assets/imagens/REVIVER03.png",
            donwload: "https://sysurl.com.br/RVV-STB"
        },
        {
            title: "StumbleBolt2",
            version: "0.79",
            image: "assets/imagens/REVIVER04.png",
            donwload: "https://sysurl.com.br/RVV-STB2"
        },
        {
            title: "StumbleGodz",
            version: "0.79",
            image: "assets/imagens/REVIVER05.png",
            donwload: "https://sysurl.com.br/RVV-GODZ"
        },
        {
            title: "StumbleGodzEX",
            version: "0.80",
            image: "assets/imagens/REVIVER06.png",
            donwload: "https://sysurl.com.br/RVV-GODZEX"
        },
        {
            title: "GotiGreen",
            version: "0.80",
            image: "assets/imagens/REVIVER07.png",
            donwload: "https://sysurl.com.br/RVV-GOTI"
        },
        {
            title: "GotiCartoon",
            version: "0.80",
            image: "assets/imagens/REVIVER18.png",
            donwload: "https://sysurl.com.br/RVV-TOON"
        },
        {
            title: "Yellow Otimizada",
            version: "0.79",
            image: "assets/imagens/REVIVER08.png",
            donwload: "https://sysurl.com.br/RVV-YLW"
        },
        {
            title: "MegaLite Reshade",
            version: "0.79",
            image: "assets/imagens/REVIVER09.png",
            donwload: "https://sysurl.com.br/RVV-MGLTRE"
        },
        {
            title: "Reshade",
            version: "0.79",
            image: "assets/imagens/REVIVER10.png",
            donwload: "https://sysurl.com.br/RVV-RE"
        },
        {
            title: "StumblePink",
            version: "0.79",
            image: "assets/imagens/REVIVER11.png",
            donwload: "https://sysurl.com.br/RVV-PINK"
        },
        {
            title: "BoltAgua",
            version: "0.80",
            image: "assets/imagens/REVIVER12.png",
            donwload: "https://sysurl.com.br/RVV-AGUA"
        },
        {
            title: "BoltAstaxzz",
            version: "0.79",
            image: "assets/imagens/REVIVER13.png",
            donwload: "https://sysurl.com.br/RVV-BAZ"
        },
        {
            title: "DarkUva",
            version: "0.79",
            image: "assets/imagens/REVIVER14.png",
            donwload: "https://sysurl.com.br/RVV-UVA"
        },
        {
            title: "BoltWeen",
            version: "0.79",
            image: "assets/imagens/REVIVER15.png",
            donwload: "https://sysurl.com.br/RVV-WEEN"
        },
        {
            title: "Galaxy1",
            version: "0.79",
            image: "assets/imagens/REVIVER16.png",
            donwload: "https://sysurl.com.br/RVV-GLXK"
        },
        {
            title: "GalaxyBolt",
            version: "0.79",
            image: "assets/imagens/REVIVER17.png",
            donwload: "https://sysurl.com.br/RVV-GLXB"
        }
    ];
};

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