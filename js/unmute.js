const video = document.getElementById("bgvid");
const phrase = document.getElementById("sound-phrase");

phrase.addEventListener("click", playAudio);

    function playAudio(){
        video.muted = false;
        phrase.style.display = "none";
    }