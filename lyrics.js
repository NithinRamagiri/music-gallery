const lyrics = [
  { time: 0, text: "Lyrics line 1" },
  { time: 20, text: "Lyrics line 2" },
  { time: 30, text: "Lyrics line 3" },
  { time: 40, text: "Lyrics line 4" },
  { time: 50, text: "Lyrics line 5" },
  { time: 60, text: "Lyrics line 6" },
  { time: 70, text: "Lyrics line 7" },
  { time: 80, text: "Lyrics line 8" },
  { time: 80, text: "Lyrics line 9" },
  { time: 100, text: "Lyrics line 10" },
  // Add more lyrics with their corresponding timestamps
];

const audio = document.getElementById("myAudio");
const lyricsContainer = document.getElementById("lyricsContainer");

audio.addEventListener("timeupdate", function () {
  const currentTime = Math.floor(audio.currentTime);
  const currentLyric = lyrics.find((lyric) => lyric.time === currentTime);

  if (currentLyric) {
    lyricsContainer.textContent = currentLyric.text;
  }
});
