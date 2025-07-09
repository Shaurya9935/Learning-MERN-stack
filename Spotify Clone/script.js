console.log("Let's Write Java Script");
let currentSong = new Audio();


function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}




async function getSongs() {
  let a = await fetch("http://127.0.0.1:3000/songs/");
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  let songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split("/songs/")[1]);
    }
  }
  return songs;
}

const playMusic = (track, pause=false) => {
  // let audio = new Audio("/songs/" + track);
  currentSong.src = "/songs/" + track;
  if(!pause){
    currentSong.play();
    play.src = "img/pause.svg"
  }

  document.querySelector(".songinfo").innerHTML = decodeURIComponent(track)
  document.querySelector(".songtime").innerHTML = "00:00-00:00"
};
async function main() {
  let songs = await getSongs();
  playMusic(songs[0],true)
  console.log(songs);

  let songUL = document.querySelector(".songslist ul");
  console.log(songUL);
  for (const song of songs) {
    let songName = decodeURIComponent(song);
    if (songName.startsWith("01 - ")) {
      songName = songName.substring(5);
    }
    if (songName.endsWith(".mp3")) {
      songName = songName.slice(0, -21);
    }
    songUL.innerHTML += ` <li data-song="${song}">
  <img class="invert" src="img/music.svg" alt="">
  <div class="info">
      <div>${songName}</div>
      <div>Shaurya</div>
  </div>
  <div class="playnow">
      <span>Play Now</span>
      <img class="invert" src="img/play.svg" alt="">
  </div>
</li>`;
  }
  Array.from(
    document.querySelector(".songslist").getElementsByTagName("li")
  ).forEach((e) => {
    e.addEventListener("click", (element) => {
      let songFileName = e.getAttribute("data-song");
      playMusic(songFileName);
    });
  });

  play.addEventListener("click", () => {
      if (currentSong.paused) {
        currentSong.play();
        play.src = "img/pause.svg";
      } else {
        currentSong.pause();
        play.src = "img/play.svg";
      }
  });

  currentSong.addEventListener("timeupdate", ()=> {
    console.log(currentSong.currentTime, currentSong.duration);
    document.querySelector(".songtime").innerHTML = `${formatTime(currentSong.currentTime)}/${formatTime(currentSong.duration)}`
    document.querySelector(".circle").style.left = (currentSong.currentTime/currentSong.duration) * 100 + "%";
  })

    document.querySelector(".seekbar").addEventListener("click", e=>{
      let percent = (e.offsetX/e.target.getBoundingClientRect().width) * 100
      document.querySelector(".circle").style.left = percent + "%";
      currentSong.currentTime = ((currentSong.duration)* percent) /100
    })
}

main();
