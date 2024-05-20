// Função para filtrar os vídeos com base na palavra-chave inserida na barra de pesquisa
function filterVideos() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var videos = document.querySelectorAll('.video-post');

    videos.forEach(function(video) {
        var title = video.querySelector('.video-title').textContent.toLowerCase();

        if (title.includes(searchInput)) {
            video.style.display = 'block'; // Exibe o vídeo
        } else {
            video.style.display = 'none'; // Oculta o vídeo
        }
    });
}
function downloadVideo(videoUrl) {
    // Crie um elemento de link temporário
    var link = document.createElement('a');
    link.href = videoUrl;
    link.download = 'video.mp4'; // Nome do arquivo de vídeo a ser baixado
    document.body.appendChild(link);

    // Dispare o clique no link para iniciar o download
    link.click();

    // Remova o link temporário
    document.body.removeChild(link);
}

// Adiciona um evento de escuta para detectar quando o usuário digita na barra de pesquisa
document.getElementById('searchInput').addEventListener('input', function() {
    filterVideos(); // Chama a função de filtro a cada tecla pressionada
});
