function getPosts() {
    return [
        {
            title: "SemTextura",
            version: "0.72",
            image: "assets/imagens/REVIVER00.png",
            steam: "https://sysurl.com.br/RVVSTXTPC03",
            mobile: "https://sysurl.com.br/RVVSTXTMOBA03"
        },
        {
            title: "MegaLite",
            version: "0.72",
            image: "assets/imagens/REVIVER01.png",
            steam: "https://sysurl.com.br/RVVMGLTPC03",
            mobile: "https://sysurl.com.br/RVVMGLTMOBA03"
        },
        {
            title: "MegaLite2",
            version: "0.72",
            image: "assets/imagens/REVIVER02.png",
            steam: "https://sysurl.com.br/RVVMGLT2PC03",
            mobile: "https://sysurl.com.br/RVVMGLT2MOBA03"
        },
        {
            title: "StumbleBolt",
            version: "0.72",
            image: "assets/imagens/REVIVER03.png",
            steam: "https://sysurl.com.br/RVVSTBPC03",
            mobile: "https://sysurl.com.br/RVVSTBMOBA03"
        },
        {
            title: "StumbleBolt2",
            version: "0.72",
            image: "assets/imagens/REVIVER04.png",
            steam: "https://sysurl.com.br/RVVSTB2PC03",
            mobile: "https://sysurl.com.br/RVVSTB2MOBA03"
        },
        {
            title: "StumbleGodz",
            version: "0.72",
            image: "assets/imagens/REVIVER05.png",
            steam: "https://sysurl.com.br/RVVSTBGPC03",
            mobile: "https://sysurl.com.br/RVVSTBGMOBA03"
        },
        {
            title: "StumbleGodzEX",
            version: "0.72",
            image: "assets/imagens/REVIVER06.png",
            steam: "https://sysurl.com.br/RVVSTBGEXPC03",
            mobile: "https://sysurl.com.br/RVVSTBGEXMOBA03"
        },
        {
            title: "GotiGreen",
            version: "0.72",
            image: "assets/imagens/REVIVER07.png",
            steam: "https://sysurl.com.br/RVVGOTIPC03",
            mobile: "https://sysurl.com.br/RVVGOTIMOBA03"
        },
        {
            title: "Yellow Otimizada",
            version: "0.71.5",
            image: "assets/imagens/REVIVER08.png",
            steam: "https://sysurl.com.br/RVVYLWPC02",
            mobile: "https://sysurl.com.br/RVVYLWMOBA02"
        },
        {
            title: "MegaLite Reshade",
            version: "0.72",
            image: "assets/imagens/REVIVER09.png",
            steam: "https://sysurl.com.br/RVVMGLTREPC03",
            mobile: "https://sysurl.com.br/RVVMGLTREPC03"
        },
        {
            title: "Reshade",
            version: "0.72",
            image: "assets/imagens/REVIVER10.png",
            steam: "https://sysurl.com.br/RVVREPC03",
            mobile: "https://sysurl.com.br/RVVREMOBA03"
        },
        {
            title: "StumblePink",
            version: "0.71.5",
            image: "assets/imagens/REVIVER11.png",
            steam: "https://sysurl.com.br/RVVSTBPPC02",
            mobile: "https://sysurl.com.br/RVVSTBPMOBA02"
        },
        {
            title: "BoltAgua",
            version: "0.72",
            image: "assets/imagens/REVIVER12.png",
            steam: "https://sysurl.com.br/RVVBLTAPC03",
            mobile: "https://sysurl.com.br/RVVBLTAMOBA03"
        },
        {
            title: "BoltAstaxzz",
            version: "0.72",
            image: "assets/imagens/REVIVER13.png",
            steam: "https://sysurl.com.br/RVVBAZPC03",
            mobile: "https://sysurl.com.br/RVVBAZMOBA03"
        },
        {
            title: "DarkUva",
            version: "0.72",
            image: "assets/imagens/REVIVER14.png",
            steam: "https://stfly.me/RVVDKUPC03",
            mobile: "https://stfly.me/RVVDKUMOBA03"
        },
        {
            title: "BoltWeen",
            version: "0.72",
            image: "assets/imagens/REVIVER15.png",
            steam: "https://sysurl.com.br/RVVWEENPC03",
            mobile: "https://sysurl.com.br/RVVWEENMOBA03"
        },
        {
            title: "Galaxy1",
            version: "0.72",
            image: "assets/imagens/REVIVER16.png",
            steam: "https://stfly.me/RVVGLXKPC03",
            mobile: "https://stfly.me/RVVGLXKMOBA03"
        },
        {
            title: "GalaxyBolt",
            version: "0.72",
            image: "assets/imagens/REVIVER17.png",
            steam: "https://stfly.me/RVVGLXBPC03",
            mobile: "https://stfly.me/RVVGLXBMOBA03"
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
