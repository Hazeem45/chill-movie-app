const volumeIcon = document.getElementById("volume-icon");
const volumeOffIcon = document.getElementById("volumeOffIcon");
const volumeOnIcon = document.getElementById("volumeOnIcon");
const audio = document.getElementById("audio");
const file = "https://firebasestorage.googleapis.com/v0/b/rps-game-2024.appspot.com/o/other%2Fred-alert3.mp3?alt=media&token=5d578258-e5cb-41f5-becf-ee591ae50bb7";
audio.src = file;
audio.volume = 0.3;
let isPlaying = false;

volumeIcon.addEventListener("click", function () {
  if (volumeOffIcon.style.display === "none") {
    volumeOffIcon.style.display = "inline";
    volumeOnIcon.style.display = "none";
    isPlaying = false;
    audio.pause();
  } else {
    volumeOffIcon.style.display = "none";
    volumeOnIcon.style.display = "inline";
    isPlaying = true;
    audio.play();
  }
});

audio.addEventListener("ended", function () {
  isPlaying = false;
  volumeOffIcon.style.display = "inline";
  volumeOnIcon.style.display = "none";
});
