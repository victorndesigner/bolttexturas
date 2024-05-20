function getPosts() {
    return [
        {
            title: "StumbleBolt",
            version: "0.69",
            image: "assets/imagens/STUMBLEBOLT.png",
            download: "https://stfly.me/BOLTSTEAM7",
            youtube: "https://www.youtube.com/@BoltDasTexturas"
        },
        {
            title: "StumbleBolt2.0",
            version: "0.69",
            image: "assets/imagens/STUMBLEBOLT2.0.png",
            download: "https://stfly.me/BOLT2STEAM7",
            youtube: "https://www.youtube.com/@BoltDasTexturas"
        },
        {
            title: "StumbleGodz",
            version: "0.68.1",
            image: "assets/imagens/STUMBLEGODZ.png",
            download: "https://stfly.me/GODZSTEAM7",
            youtube: "https://www.youtube.com/@BoltDasTexturas"
        },
        {
            title: "StumbleGodzExc",
            version: "0.68.1",
            image: "assets/imagens/STUMBLEGODZEXC.png",
            download: "Link",
            youtube: "https://www.youtube.com/@BoltDasTexturas"
        },
        {
            title: "MegaLite BoltAstax",
            version: "0.69",
            image: "assets/imagens/MEGALITEBOLTASTAX.png",
            download: "https://stfly.me/MGLTSTEAM15",
            youtube: "https://www.youtube.com/@BoltDasTexturas"
        },
        {
            title: "MegaLite 2.0 BoltAstax",
            version: "0.68.1",
            image: "assets/imagens/MEGALITE2.0BOLTASTAX.png",
            download: "https://stfly.me/MGLT2STEAM15",
            youtube: "https://www.youtube.com/@BoltDasTexturas"
        },
        {
            title: "Yellow Otimizada",
            version: "0.68.1",
            image: "assets/imagens/YELLOWOTIMIZADA.png",
            download: "https://stfly.me/YELLOWSTEAM13",
            youtube: "https://www.youtube.com/@BoltDasTexturas"
        },
        {
            title: "Reshader BoltAstax",
            version: "0.68.1",
            image: "assets/imagens/RESHADERBOLTASTAX.png",
            download: "https://stfly.me/MGLTRESTEAM15",
            youtube: "https://www.youtube.com/@BoltDasTexturas"
        },
        {
            title: "Reshader",
            version: "0.68.1",
            image: "assets/imagens/RESHADER.png",
            download: "https://stfly.me/RESTEAM15",
            youtube: "https://www.youtube.com/@BoltDasTexturas"
        },
        {
            title: "StumblePink",
            version: "0.68.1",
            image: "assets/imagens/STUMBLEPINK.png",
            download: "Link",
            youtube: "https://www.youtube.com/@BoltDasTexturas"
        },
        {
            title: "GalaxyBolt",
            version: "0.68.1",
            image: "assets/imagens/GALAXYBOLT.png",
            download: "https://stfly.me/GLXSTEAM14",
            youtube: "https://www.youtube.com/@BoltDasTexturas"
        },
        {
            title: "BoltAgua",
            version: "0.68.1",
            image: "assets/imagens/BOLTAGUA.png",
            download: "https://stfly.me/AGUASTEAM15",
            youtube: "https://www.youtube.com/@BoltDasTexturas"
        },
        {
            title: "DarkUva",
            version: "0.68.1",
            image: "assets/imagens/DARKUVA.png",
            download: "https://stfly.me/UVASTEAM15",
            youtube: "https://www.youtube.com/@BoltDasTexturas"
        },
        {
            title: "BoltWeen",
            version: "0.68.1",
            image: "assets/imagens/BOLTWEEN.png",
            download: "https://stfly.me/WEENSTEAM10",
            youtube: "https://www.youtube.com/@BoltDasTexturas"
        },
        {
            title: "BoltAstaxzz",
            version: "0.68.1",
            image: "assets/imagens/BOLTAXZZ.png",
            download: "https://stfly.me/BAZSTEAM15",
            youtube: "https://www.youtube.com/@BoltDasTexturas"
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
};

(async () => {
    const postagens = await getPosts();
    const stumbleVersion = await getVersion();
    const postsDisponiveis = [];
    const postsIndisponiveis = [];

    postagens.forEach(postagem => {
        const postDisponivel = postagem.version == stumbleVersion;
        
        if (postDisponivel) {
                postsDisponiveis.push(`
                    <div class="col-lg-3 col-sm-6">
                        <div class="item">
                            <span style="pointer-events: none;">
                                <img src="${postagem.image}" alt="${postagem.title}">
                            </span>
                            <h4>${postagem.title}<br><span style="color: rgb(208, 190, 233);">${postagem.version}</span></h4>
                            <div class="button-container">
                            <a href="${postagem.download}" class="purple-button">Steam</a>
                            <a href="${postagem.youtube}" class="purple-button">Youtube</a>
                            </div>
                        </div>
                    </div>
            `);
        } else {
            postsIndisponiveis.push(`
                <div class="col-lg-3 col-sm-6">
                    <div class="item">
                        <span style="pointer-events: none;">
                            <img src="${postagem.image}" alt="${postagem.title}">
                        </span>
                        <h4 style="color: gray;">Indisponível<br><span>Desatualizada</span></h4>
                    </div>
                </div>
            `);
        };
    });

    document.querySelector('.heading-section').querySelector('.row').innerHTML += `
        ${postsDisponiveis.join('\n')}
        ${postsIndisponiveis.join('\n')}
    `;

    document.querySelector('.heading-section').querySelector('.row').innerHTML += `
        <div class="col-lg-12">
            <div class="main-button">
                <a href="https://discord.gg/RKH4RAbDaZ">Discord</a>
            </div>
        </div>
    `;
})();