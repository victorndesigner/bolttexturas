function getPosts() {
    return [
        {
            title: "MegaLite",
            version: "0.78.1",
            image: "assets/imagens/MEGALITEBOLTASTAX.png",
            donwload: "https://rbxurl.pro/TXT-MGLT-STEAM"
        },
        {
            title: "MegaLite2",
            version: "0.78.1",
            image: "assets/imagens/MEGALITE2.0BOLTASTAX.png",
            donwload: "https://sysurl.com.br/TXT-MGLT2"
        },
        {
            title: "StumbleBolt",
            version: "0.78.1",
            image: "assets/imagens/STUMBLEBOLT.png",
            donwload: "https://rbxurl.pro/TXT-STB-STEAM"
        },
        {
            title: "StumbleBolt2",
            version: "0.78.1",
            image: "assets/imagens/STUMBLEBOLT2.0.png",
            donwload: "https://rbxurl.pro/TXT-STB2-STEAM"
        },
        {
            title: "StumbleGodz",
            version: "0.78.1",
            image: "assets/imagens/STUMBLEGODZ.png",
            donwload: "https://rbxurl.pro/TXT-GODZ-STEAM"
        },
        {
            title: "StumbleGodzEX",
            version: "0.78.1",
            image: "assets/imagens/STUMBLEGODZEXC.png",
            donwload: "https://rbxurl.pro/TXT-GODZEX-STEAM"
        },
        {
            title: "GotiGreen",
            version: "0.78.1",
            image: "assets/imagens/GOTIGREEN.png",
            donwload: "https://rbxurl.pro/TXT-GOTI-STEAM"
        },
        {
            title: "GotiCartoon",
            version: "0.78.1",
            image: "assets/imagens/GOTICARTOON.png",
            donwload: "https://rbxurl.pro/TXT-TOON-STEAM"
        },
        {
            title: "Yellow Otimizada",
            version: "0.78.1",
            image: "assets/imagens/YELLOWOTIMIZADA.png",
            donwload: "https://rbxurl.pro/TXT-YLW-STEAM"
        },
        {
            title: "MegaLite Reshade",
            version: "0.78.1",
            image: "assets/imagens/RESHADERBOLTASTAX.png",
            donwload: "https://sysurl.com.br/TXT-MGLTRE"
        },
        {
            title: "Reshade",
            version: "0.78.1",
            image: "assets/imagens/RESHADER.png",
            donwload: "https://rbxurl.pro/TXT-RE-STEAM"
        },
        {
            title: "StumblePink",
            version: "0.78.1",
            image: "assets/imagens/STUMBLEPINK.png",
            donwload: "https://sysurl.com.br/TXT-PINK"
        },
        {
            title: "BoltAgua",
            version: "0.78.1",
            image: "assets/imagens/BOLTAGUA.png",
            donwload: "https://rbxurl.pro/TXT-AGUA-STEAM"
        },
        {
            title: "BoltAstaxzz",
            version: "0.78.1",
            image: "assets/imagens/BOLTAXZZ.png",
            donwload: "https://rbxurl.pro/TXT-BAZ-STEAM"
        },
        {
            title: "DarkUva",
            version: "0.78.1",
            image: "assets/imagens/DARKUVA.png",
            donwload: "https://rbxurl.pro/TXT-UVA-STEAM"
        },
        {
            title: "BoltWeen",
            version: "0.78.1",
            image: "assets/imagens/BOLTWEEN.png",
            donwload: "https://rbxurl.pro/TXT-WEEN-STEAM"
        },
        {
            title: "Galaxy1",
            version: "0.78.1",
            image: "assets/imagens/GALAXY1.png",
            donwload: "https://rbxurl.pro/TXT-GLXK-STEAM"
        },
        {
            title: "GalaxyBolt",
            version: "0.78.1",
            image: "assets/imagens/GALAXYBOLT.png",
            donwload: "https://rbxurl.pro/TXT-GBOLT-STEAM"
        }
    ];
}

async function getVersion() {
    let returnVersion;
    await fetch('https://astax-stumble.vercel.app/shared')
        .then(r => r.json())
        .then(data => {
            let version = data.Versions.AndroidLastVersionAvailable;
            returnVersion = version;
        });

    return returnVersion;
}

async function renderPosts(posts) {
    const sg_version = await getVersion();
    const postsDisponiveis = [];
    const postsIndisponiveis = [];

    posts.forEach(postagem => {
        const postDisponivel = postagem.version == sg_version;

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
    renderPosts(postagens);

    document.getElementById('searchInput').addEventListener('input', function() {
        const searchText = this.value.toLowerCase();
        const filteredPosts = postagens.filter(post => post.title.toLowerCase().includes(searchText));
        renderPosts(filteredPosts);
    });
}

init();

