document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('gameVideo');
    video.removeAttribute('controls'); // Entfernen der Steuerelemente

    // Starten des Videos bei Benutzerinteraktion
    var gameContainer = document.querySelector('.game-container');
    var overlay = document.querySelector('.overlay');
    var isVideoPlaying = false;

    gameContainer.addEventListener('mouseenter', function () {
        if (!isVideoPlaying) {
            overlay.style.display = 'flex';
            video.play();
            isVideoPlaying = true;
        }
    });

    gameContainer.addEventListener('mouseleave', function () {
        overlay.style.display = 'none';
        video.pause();
        isVideoPlaying = false;
    });
});

// Link zu passender Webseite
var bildElement = document.getElementById('Train-Sim');

// Füge einen Event-Listener hinzu, der auf das Klicken des Bildes reagiert
bildElement.addEventListener('click', function() {
    // Öffne eine neue Seite 
    window.open('Train-Sim', '_blank');
}); 
