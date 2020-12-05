var video = document.getElementsByTagName("video")[0];

if (video) {
    video.addEventListener("ended", function() {
        chrome.runtime.sendMessage({ closeThis: true });
    });
} else {
    console.error("Vidéo introuvable");
};