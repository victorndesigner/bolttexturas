function getPosts() {
    return [
        {
            title: "MegaLite",
            version: "0.76.1",
            image: "assets/imagens/MEGALITEBOLTASTAX.png",
            donwload: "https://sysurl.com.br/TXT-MGLT"
        },
        {
            title: "MegaLite2",
            version: "0.73",
            image: "assets/imagens/MEGALITE2.0BOLTASTAX.png",
            donwload: "https://sysurl.com.br/MGLTPC04"
        },
        {
            title: "StumbleBolt",
            version: "0.76.1",
            image: "assets/imagens/STUMBLEBOLT.png",
            donwload: "https://sysurl.com.br/TXT-STB"
        },
        {
            title: "StumbleBolt2",
            version: "0.76.1",
            image: "assets/imagens/STUMBLEBOLT2.0.png",
            donwload: "https://sysurl.com.br/TXT-STB2"
        },
        {
            title: "StumbleGodz",
            version: "0.76.1",
            image: "assets/imagens/STUMBLEGODZ.png",
            donwload: "https://sysurl.com.br/TXT-GODZ"
        },
        {
            title: "StumbleGodzEX",
            version: "0.73",
            image: "assets/imagens/STUMBLEGODZEXC.png",
            donwload: "https://sysurl.com.br/MGLTPC04"
        },
        {
            title: "GotiGreen",
            version: "0.76.1",
            image: "assets/imagens/GOTIGREEN.png",
            donwload: "https://sysurl.com.br/TXT-GOTI"
        },
        {
            title: "GotiCartoon",
            version: "0.76.1",
            image: "assets/imagens/GOTICARTOON.png",
            donwload: "https://sysurl.com.br/TXT-TOON"
        },
        {
            title: "Yellow Otimizada",
            version: "0.76.1",
            image: "assets/imagens/YELLOWOTIMIZADA.png",
            donwload: "https://sysurl.com.br/TXT-YLW"
        },
        {
            title: "MegaLite Reshade",
            version: "0.74.1",
            image: "assets/imagens/RESHADERBOLTASTAX.png",
            donwload: "https://sysurl.com.br/TXT-MEGALITE-RESHADE-01"
        },
        {
            title: "Reshade",
            version: "0.76.1",
            image: "assets/imagens/RESHADER.png",
            donwload: "https://sysurl.com.br/TXT-RE"
        },
        {
            title: "StumblePink",
            version: "0.73",
            image: "assets/imagens/STUMBLEPINK.png",
            donwload: "https://sysurl.com.br/MGLTPC04"
        },
        {
            title: "BoltAgua",
            version: "0.76.1",
            image: "assets/imagens/BOLTAGUA.png",
            donwload: "https://sysurl.com.br/TXT-AGUA"
        },
        {
            title: "BoltAstaxzz",
            version: "0.73",
            image: "assets/imagens/BOLTAXZZ.png",
            donwload: "https://sysurl.com.br/MGLTPC04"
        },
        {
            title: "DarkUva",
            version: "0.76.1",
            image: "assets/imagens/DARKUVA.png",
            donwload: "https://sysurl.com.br/TXT-UVA"
        },
        {
            title: "BoltWeen",
            version: "0.76.1",
            image: "assets/imagens/BOLTWEEN.png",
            donwload: "https://sysurl.com.br/TXT-WEEN"
        },
        {
            title: "Galaxy1",
            version: "0.73",
            image: "assets/imagens/GALAXY1.png",
            donwload: "https://sysurl.com.br/MGLTPC04"
        },
        {
            title: "GalaxyBolt",
            version: "0.76.1",
            image: "assets/imagens/GALAXYBOLT.png",
            donwload: "https://sysurl.com.br/TXT-GLXB"
        }
    ];
}

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
