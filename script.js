const songs = [
  { title: "아주 NICE", artist: "SEVENTEEN" },
  { title: "손오공", artist: "SEVENTEEN" },
  { title: "HOT", artist: "SEVENTEEN" },
  { title: "Left & Right", artist: "SEVENTEEN" },
  { title: "Rock with you", artist: "SEVENTEEN" },
  { title: "HOME;RUN", artist: "SEVENTEEN" },
  { title: "Darl+ing", artist: "SEVENTEEN" },
  { title: "Ready to love", artist: "SEVENTEEN" },
  { title: "울고 싶지 않아", artist: "SEVENTEEN" },
  { title: "독: Fear", artist: "SEVENTEEN" },
  { title: "Super", artist: "SEVENTEEN" },
  { title: "Pretty U", artist: "SEVENTEEN" },
  { title: "Don't Wanna Cry", artist: "SEVENTEEN" },
  { title: "Clap", artist: "SEVENTEEN" },
  { title: "Thanks", artist: "SEVENTEEN" },
  { title: "Shadow", artist: "SEVENTEEN" },
  { title: "24H", artist: "SEVENTEEN" },
  { title: "Healing", artist: "SEVENTEEN" },
  { title: "Good to Me", artist: "SEVENTEEN" },
  { title: "Change Up", artist: "SEVENTEEN" }
];

function getRandomSong() {
  const idx = Math.floor(Math.random() * songs.length);
  return songs[idx];
}

document.getElementById('recommendBtn').addEventListener('click', () => {
  const song = getRandomSong();
  document.getElementById('songBox').innerHTML = `<strong>${song.title}</strong> <br> <span>by ${song.artist}</span>`;
});
