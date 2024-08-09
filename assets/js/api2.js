function getPosts() {
    return [
        {
            title: "SemTextura",
            version: "0.76.1",
            image: "assets/imagens/REVIVER00.png",
            donwload: "https://sysurl.com.br/RVV-STXT"
        },
        {
            title: "MegaLite",
            version: "0.76.1",
            image: "assets/imagens/REVIVER01.png",
            donwload: "https://sysurl.com.br/RVV-MGLT"
        },
        {
            title: "MegaLite2",
            version: "0.75.1",
            image: "assets/imagens/REVIVER02.png",
            donwload: "https://sysurl.com.br/RVVSTB201"
        },
        {
            title: "StumbleBolt",
            version: "0.76.1",
            image: "assets/imagens/REVIVER03.png",
            donwload: "https://sysurl.com.br/RVV-STB"
        },
        {
            title: "StumbleBolt2",
            version: "0.76.1",
            image: "assets/imagens/REVIVER04.png",
            donwload: "https://sysurl.com.br/RVV-STB2"
        },
        {
            title: "StumbleGodz",
            version: "0.76.1",
            image: "assets/imagens/REVIVER05.png",
            donwload: "https://sysurl.com.br/RVV-GODZ"
        },
        {
            title: "StumbleGodzEX",
            version: "0.75.1",
            image: "assets/imagens/REVIVER06.png",
            donwload: "https://sysurl.com.br/RVV-GODZEX"
        },
        {
            title: "GotiGreen",
            version: "0.76.1",
            image: "assets/imagens/REVIVER07.png",
            donwload: "https://sysurl.com.br/RVV-GOTI"
        },
        {
            title: "GotiCartoon",
            version: "0.76.1",
            image: "assets/imagens/REVIVER18.png",
            donwload: "https://sysurl.com.br/RVV-TOON"
        },
        {
            title: "Yellow Otimizada",
            version: "0.76.1",
            image: "assets/imagens/REVIVER08.png",
            donwload: "https://sysurl.com.br/RVV-YLW"
        },
        {
            title: "MegaLite Reshade",
            version: "0.75.1",
            image: "assets/imagens/REVIVER09.png",
            donwload: "https://sysurl.com.br/RVV-MEGALITE-RESHADE-01"
        },
        {
            title: "Reshade",
            version: "0.76.1",
            image: "assets/imagens/REVIVER10.png",
            donwload: "https://sysurl.com.br/RVV-RE"
        },
        {
            title: "StumblePink",
            version: "0.75.1",
            image: "assets/imagens/REVIVER11.png",
            donwload: "https://sysurl.com.br/RVV-PINK"
        },
        {
            title: "BoltAgua",
            version: "0.76.1",
            image: "assets/imagens/REVIVER12.png",
            donwload: "https://sysurl.com.br/RVV-AGUA"
        },
        {
            title: "BoltAstaxzz",
            version: "0.75.1",
            image: "assets/imagens/REVIVER13.png",
            donwload: "https://sysurl.com.br/RVV-BAZ"
        },
        {
            title: "DarkUva",
            version: "0.76.1",
            image: "assets/imagens/REVIVER14.png",
            donwload: "https://sysurl.com.br/RVV-UVA"
        },
        {
            title: "BoltWeen",
            version: "0.76.1",
            image: "assets/imagens/REVIVER15.png",
            donwload: "https://sysurl.com.br/RVV-WEEN"
        },
        {
            title: "Galaxy1",
            version: "0.75.1",
            image: "assets/imagens/REVIVER16.png",
            donwload: "https://sysurl.com.br/RVV-GLXK"
        },
        {
            title: "GalaxyBolt",
            version: "0.76.1",
            image: "assets/imagens/REVIVER17.png",
            donwload: "https://sysurl.com.br/RVV-GLXB"
        }
    ];
};

async function getVersion() {
    let returnVersion;
    await fetch('https://api.stumbleguys.com/shared/1/LIVE')
        .then(r => r.json())
        .then(data => {
            let version = data.Versions.Max
            returnVersion = version;
        });

    return returnVersion;
}

function renderPosts(posts) {
    const postsDisponiveis = [];
    const postsIndisponiveis = [];

    posts.forEach(postagem => {
        const postDisponivel = postagem.version == stumbleVersion;

        if (postDisponivel) {
            let steamButton = postagem.steam ? `<a href="${postagem.steam}" class="purple-button">Steam</a>` : '';
            let mobileButton = postagem.mobile ? `<a href="${postagem.mobile}" class="purple-button">Mobile</a>` : '';
            let donwloadButton = postagem.donwload ? `<a href="${postagem.donwload}" class="purple-button">donwload</a>` : '';

            postsDisponiveis.push(`
                <div class="col-lg-3 col-sm-6 post-item">
                    <div class="item">
                        <span style="pointer-events: none;">
                            <img src="${postagem.image}" alt="${postagem.title}">
                        </span>
                        <h4>${postagem.title}<br><span style="color: rgb(208, 190, 233);">${postagem.version}</span></h4>
                        <div class="button-container">
                            ${steamButton}
                            ${mobileButton}
                            ${donwloadButton}
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

async function init() {
    const postagens = await getPosts();
    stumbleVersion = await getVersion(); // Define stumbleVersion como uma variável global

    renderPosts(postagens);

    document.getElementById('searchInput').addEventListener('input', function() {
        const searchText = this.value.toLowerCase();
        const filteredPosts = postagens.filter(post => post.title.toLowerCase().includes(searchText));
        renderPosts(filteredPosts);
    });
}

let stumbleVersion; // Define stumbleVersion como uma variável global
init();
