function getPosts() {
    return [
        {
            title: "SemTextura",
            version: "0.78",
            image: "assets/imagens/REVIVER00.png",
            donwload: "https://rbxurl.pro/RVV-STXT-STEAM"
        },
        {
            title: "MegaLite",
            version: "0.78",
            image: "assets/imagens/REVIVER01.png",
            donwload: "https://rbxurl.pro/RVV-MGLT-STEAM"
        },
        {
            title: "MegaLite2",
            version: "0.78",
            image: "assets/imagens/REVIVER02.png",
            donwload: "https://sysurl.com.br/RVV-MGLT2"
        },
        {
            title: "StumbleBolt",
            version: "0.78",
            image: "assets/imagens/REVIVER03.png",
            donwload: "https://rbxurl.pro/RVV-STB-STEAM"
        },
        {
            title: "StumbleBolt2",
            version: "0.78",
            image: "assets/imagens/REVIVER04.png",
            donwload: "https://rbxurl.pro/RVV-STB2-STEAM"
        },
        {
            title: "StumbleGodz",
            version: "0.77",
            image: "assets/imagens/REVIVER05.png",
            donwload: "https://sysurl.com.br/RVV-GODZ"
        },
        {
            title: "StumbleGodzEX",
            version: "0.77",
            image: "assets/imagens/REVIVER06.png",
            donwload: "https://sysurl.com.br/RVV-GODZEX"
        },
        {
            title: "GotiGreen",
            version: "0.78",
            image: "assets/imagens/REVIVER07.png",
            donwload: "https://rbxurl.pro/RVV-GOTI-STEAM"
        },
        {
            title: "GotiCartoon",
            version: "0.78",
            image: "assets/imagens/REVIVER18.png",
            donwload: "https://rbxurl.pro/RVV-TOON-STEAM"
        },
        {
            title: "Yellow Otimizada",
            version: "0.77",
            image: "assets/imagens/REVIVER08.png",
            donwload: "https://sysurl.com.br/RVV-YLW"
        },
        {
            title: "MegaLite Reshade",
            version: "0.78",
            image: "assets/imagens/REVIVER09.png",
            donwload: "https://sysurl.com.br/RVV-MGLTRE"
        },
        {
            title: "Reshade",
            version: "0.77",
            image: "assets/imagens/REVIVER10.png",
            donwload: "https://sysurl.com.br/RVV-RE"
        },
        {
            title: "StumblePink",
            version: "0.77",
            image: "assets/imagens/REVIVER11.png",
            donwload: "https://sysurl.com.br/RVV-PINK"
        },
        {
            title: "BoltAgua",
            version: "0.78",
            image: "assets/imagens/REVIVER12.png",
            donwload: "https://rbxurl.pro/RVV-AGUA-STEAM"
        },
        {
            title: "BoltAstaxzz",
            version: "0.78",
            image: "assets/imagens/REVIVER13.png",
            donwload: "https://rbxurl.pro/RVV-BAZ-STEAM"
        },
        {
            title: "DarkUva",
            version: "0.77",
            image: "assets/imagens/REVIVER14.png",
            donwload: "https://sysurl.com.br/RVV-UVA"
        },
        {
            title: "BoltWeen",
            version: "0.77",
            image: "assets/imagens/REVIVER15.png",
            donwload: "https://sysurl.com.br/RVV-WEEN"
        },
        {
            title: "Galaxy1",
            version: "0.77",
            image: "assets/imagens/REVIVER16.png",
            donwload: "https://sysurl.com.br/RVV-GLXK"
        },
        {
            title: "GalaxyBolt",
            version: "0.77",
            image: "assets/imagens/REVIVER17.png",
            donwload: "https://sysurl.com.br/RVV-GLXB"
        }
    ];
};

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

