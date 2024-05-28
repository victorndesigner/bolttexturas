function getPosts() {
    return [
        {
            title: "MegaLite",
            version: "0.72",
            image: "assets/imagens/MEGALITEBOLTASTAX.png",
            steam: "https://sysurl.com.br/MGLTPC03",
            mobile: "https://sysurl.com.br/MGLTMOBA03"
        },
        {
            title: "MegaLite2",
            version: "0.71.5",
            image: "assets/imagens/MEGALITE2.0BOLTASTAX.png",
            steam: "https://sysurl.com.br/MGLT2PC02",
            mobile: "https://sysurl.com.br/MGLT2MOBA02"
        },
        {
            title: "StumbleBolt",
            version: "0.71.5",
            image: "assets/imagens/STUMBLEBOLT.png",
            steam: "https://sysurl.com.br/STBPC02",
            mobile: "https://sysurl.com.br/STBMOBA02"
        },
        {
            title: "StumbleBolt2",
            version: "0.71.2",
            image: "assets/imagens/STUMBLEBOLT2.0.png",
            steam: "https://sysurl.com.br/STB2PC01",
            mobile: "https://sysurl.com.br/STB2MOBA01"
        },
        {
            title: "StumbleGodz",
            version: "0.71.5",
            image: "assets/imagens/STUMBLEGODZ.png",
            steam: "https://sysurl.com.br/STBGPC02",
            mobile: "https://sysurl.com.br/STBGMOBA02"
        },
        {
            title: "StumbleGodzEX",
            version: "0.60",
            image: "assets/imagens/STUMBLEGODZEXC.png",
            steam: "LINK",
            mobile: "LINK"
        },
        {
            title: "GotiGreen",
            version: "0.71.5",
            image: "assets/imagens/GOTIGREEN.png",
            steam: "https://sysurl.com.br/GOTIPC02",
            mobile: "https://sysurl.com.br/GOTIMOBA02"
        },
        {
            title: "Yellow Otimizada",
            version: "0.71.5",
            image: "assets/imagens/YELLOWOTIMIZADA.png",
            steam: "https://sysurl.com.br/YLWPC02",
            mobile: "https://sysurl.com.br/YLWMOBA02"
        },
        {
            title: "MegaLite Reshade",
            version: "0.71.5",
            image: "assets/imagens/RESHADERBOLTASTAX.png",
            steam: "https://sysurl.com.br/MGLTREPC02",
            mobile: "https://sysurl.com.br/MGLTREMOBA02"
        },
        {
            title: "Reshade",
            version: "0.71.5",
            image: "assets/imagens/RESHADER.png",
            steam: "https://sysurl.com.br/REPC02",
            mobile: "https://sysurl.com.br/REMOBA02"
        },
        {
            title: "StumblePink",
            version: "0.71.5",
            image: "assets/imagens/STUMBLEPINK.png",
            steam: "https://sysurl.com.br/STBPPC02",
            mobile: "https://sysurl.com.br/STBPMOBA02"
        },
        {
            title: "BoltAgua",
            version: "0.72",
            image: "assets/imagens/BOLTAGUA.png",
            steam: "https://sysurl.com.br/BLTAPC03",
            mobile: "https://sysurl.com.br/BLTAMOBA03"
        },
        {
            title: "BoltAstaxzz",
            version: "0.71.2",
            image: "assets/imagens/BOLTAXZZ.png",
            steam: "https://sysurl.com.br/BAZPC01",
            mobile: "https://sysurl.com.br/BAZMOBA01"
        },
        {
            title: "DarkUva",
            version: "0.71.2",
            image: "assets/imagens/DARKUVA.png",
            steam: "https://sysurl.com.br/DKUPC01",
            mobile: "https://sysurl.com.br/DKUMOBA01"
        },
        {
            title: "BoltWeen",
            version: "0.71.5",
            image: "assets/imagens/BOLTWEEN.png",
            steam: "https://sysurl.com.br/WEENPC2",
            mobile: "https://sysurl.com.br/WEENMOBA02"
        },
        {
            title: "Galaxy1",
            version: "0.60",
            image: "assets/imagens/GALAXY1.png",
            steam: "LINK",
            mobile: "LINK"
        },
        {
            title: "GalaxyBolt",
            version: "0.71.5",
            image: "assets/imagens/GALAXYBOLT.png",
            steam: "https://sysurl.com.br/GLXBPC02",
            mobile: "https://sysurl.com.br/GLXBMOBA02"
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
