var audio = document.getElementById("myAudio");
var playPauseBtn = document.getElementById("playPauseBtn");
var volumeControl = document.getElementById("volumeControl");

playPauseBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerHTML = "Pause";
  } else {
    audio.pause();
    playPauseBtn.innerHTML = "Play";
  }
});

volumeControl.addEventListener("input", function () {
  audio.volume = volumeControl.value;
});
