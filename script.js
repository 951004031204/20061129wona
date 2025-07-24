const songs = [
  { title: "아주 NICE", artist: "SEVENTEEN", youtube: "tA9xN6QHk1A" },
  { title: "손오공", artist: "SEVENTEEN", youtube: "tJw1g5h9pE8" },
  { title: "HOT", artist: "SEVENTEEN", youtube: "r6TwzSGYycM" },
  { title: "Left & Right", artist: "SEVENTEEN", youtube: "t7Fq1f6Q2wE" },
  { title: "Rock with you", artist: "SEVENTEEN", youtube: "mK6x1lQ6qkY" },
  { title: "HOME;RUN", artist: "SEVENTEEN", youtube: "Uq4gvzC1l-g" },
  { title: "Darl+ing", artist: "SEVENTEEN", youtube: "k5w6y6l1l8A" },
  { title: "Ready to love", artist: "SEVENTEEN", youtube: "VgVQKCcfwnU" },
  { title: "울고 싶지 않아", artist: "SEVENTEEN", youtube: "8h2Z7lQ1Q1A" },
  { title: "독: Fear", artist: "SEVENTEEN", youtube: "J-wFp43XOrA" },
  { title: "Super", artist: "SEVENTEEN", youtube: "t6U2QbA4QnA" },
  { title: "Pretty U", artist: "SEVENTEEN", youtube: "9mQk7Evt6Vw" },
  { title: "Don't Wanna Cry", artist: "SEVENTEEN", youtube: "t6r1QbA4QnA" },
  { title: "Clap", artist: "SEVENTEEN", youtube: "t6r1QbA4QnA" },
  { title: "Thanks", artist: "SEVENTEEN", youtube: "t6r1QbA4QnA" },
  { title: "Shadow", artist: "SEVENTEEN", youtube: "t6r1QbA4QnA" },
  { title: "24H", artist: "SEVENTEEN", youtube: "t6r1QbA4QnA" },
  { title: "Healing", artist: "SEVENTEEN", youtube: "t6r1QbA4QnA" },
  { title: "Good to Me", artist: "SEVENTEEN", youtube: "t6r1QbA4QnA" },
  { title: "Change Up", artist: "SEVENTEEN", youtube: "t6r1QbA4QnA" }
];

function getRandomSong() {
  const idx = Math.floor(Math.random() * songs.length);
  return songs[idx];
}

document.getElementById('recommendBtn').addEventListener('click', () => {
  const song = getRandomSong();
  document.getElementById('songBox').innerHTML = `<strong>${song.title}</strong> <br> <span>by ${song.artist}</span>`;
  // 유튜브 배경음악 자동 재생
  const player = document.getElementById('musicPlayer');
  if(song.youtube) {
    player.innerHTML = `<iframe width="320" height="180" src="https://www.youtube.com/embed/${song.youtube}?autoplay=1&controls=0&loop=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  } else {
    player.innerHTML = '';
  }
});
