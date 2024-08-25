const volumeIcon = document.getElementById("volume-icon");
const volumeOffIcon = document.getElementById("volumeOffIcon");
const volumeOnIcon = document.getElementById("volumeOnIcon");
const audio = document.getElementById("audio");
const file = `aHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9ycHMjZ2FtZSMyMDI0LmFwcHNwb3QuY29tL28vb3RoZXIlMkZzYXl1ciNnZW5qZXIubXAzP2FsdD1tZWRpYSZ0b2tlbj1hYjVhMzJiMSMxOTJiIzQ1NTEjYWYzNyNhZGIyNjg5Mjg3NjY=`;
const src = atob(file);
const str = src.split("#").join("-");
audio.src = str;
audio.volume = 0.5;
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
