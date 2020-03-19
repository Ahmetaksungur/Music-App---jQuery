$(document).ready(function() {
  $("#nav-icon").click(function() {
    $(this).toggleClass("open");
    $(".overlay").toggleClass("open");
    $(".overlay a").toggleClass("open");
    $(".overlay p").toggleClass("open");
  });
});
const musicbar = document.querySelector(".music");
const musicname = document.querySelector(".musicname");
const artis = document.querySelector(".artist");
const img = document.querySelector(".cover");
const imgs = document.querySelector(".shadow");
const rote = document.querySelector(".cover");
const playBtn = document.querySelector(".play-btn");
const pauseBtn = document.querySelector(".pause-btn");
const preBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const music = document.getElementById("music");
const musicList = document.getElementsByTagName("li");
const progressBar = document.getElementById("progress-bar");
let currentTrack = 0;
let currentList;

let tracks = [
  {
    track: 1,
    name: "Tones And I",
    artist: "Dance Monkey",
    duration: "03:56",
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/85/8e/3e/858e3ef9-cf9e-e54c-fb73-b2513694a308/075679838872.jpg/268x0w.jpg",
    url:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/22/e5/8e/22e58eeb-5916-c584-257c-735e1b4b0175/mzaf_17966999117302129087.plus.aac.p.m4a"
  },
  {
    track: 2,
    name: "Never Never",
    artist: "Drenchill",
    duration: "02:47",
    image:
      "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/cc/99/b4/cc99b464-414c-a097-d896-11e0c371308a/886447895276.jpg/626x0w.jpg",
    url:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/28/53/c1/2853c193-df5f-72cb-ea6a-062b7ec432af/mzaf_10693040049667551718.plus.aac.p.m4a"
  },
  {
    track: 3,
    name: "Falling",
    artist: "Trevor Daniel",
    duration: "02:39",
    image:
      "https://i.pinimg.com/736x/5c/27/fb/5c27fb8c0b480d7ce08b15f57cbe53ff.jpg",
    url:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/83/bc/70/83bc709e-25de-3797-8450-c751df462713/mzaf_7811558218024776548.plus.aac.p.m4a"
  },
  {
    track: 4,
    name: "Ride It",
    artist: "Regard",
    duration: "02:20",
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/61/bf/01/61bf0139-35c7-8f06-432d-9e7d316fba32/886447846674.jpg/626x0w.jpg",
    url:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/0a/82/fe/0a82feaf-ab78-c268-d91d-65f698b91ce1/mzaf_3492393954382629146.plus.aac.p.m4a"
  },
  {
    track: 5,
    name: "everything i wanted",
    artist: "Billie Eilish",
    duration: "04:47",
    image:
      "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/85/57/85/855785ff-6433-a6b5-45e2-ccee55d608dc/19UM1IM00404.rgb.jpg/626x0w.jpg",
    url:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/72/cf/5a/72cf5ad7-e1b3-d6ce-84b1-973d0b52d10b/mzaf_2144917941139718442.plus.aac.p.m4a"
  },
  {
    track: 6,
    name: "Don't Start Now",
    artist: "Dua Lipa",
    duration: "03:01",
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/58/89/69/58896934-fedf-e9ca-494f-48c06d6a259a/190295322175.jpg/626x0w.jpg",
    url:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/d0/0b/d2/d00bd29b-1a4a-239b-23df-b3df6bb7d30e/mzaf_16326686631763178212.plus.aac.p.m4a"
  },

  {
    track: 7,
    name: "Nightmare",
    artist: "Halsey",
    duration: "04:47",
    image:
      "https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/96/2d/77/962d7757-a2e7-9461-d5e9-b0f724ea999f/19UMGIM38270.rgb.jpg/268x0w.jpg",
    url:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/c8/cc/64/c8cc640a-6ae6-9f28-def2-05588c7f43dc/mzaf_520533846207392561.plus.aac.p.m4a"
  }
];

function init() {
  if (currentTrack === 0) {
    music.src = tracks[0].url;
    music.load();
  }

  for (let i = 0; i < tracks.length; i++) {
    $("#musiclist")
      .append(`<li id="${i}"><div class="box" ><div class="icon"><img src="${tracks[i].image}"/></div>
<div class="content"><svg viewBox="0 0 512 512"><g><g>
		<g>
			<circle cx="256" cy="256" r="64"/>
			<circle cx="256" cy="448" r="64"/>
			<circle cx="256" cy="64" r="64"/>
		</g>
	</g>
</g>
</svg>
     <svg viewBox="0 0 448 448"><path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"/></svg>
 <h5>${tracks[i].duration}</h5>
    <h3>${tracks[i].name}</h3>
    <h6>${tracks[i].artist}</h6><div></div></li>`);
  }

  for (let musicIndex = 0; musicIndex < musicList.length; musicIndex++) {
    musicList[musicIndex].addEventListener("click", switchMusic, false);
  }
}

function switchMusic(e) {
  if (currentList !== undefined) {
    removePlayedBackground();
    music.pause();
  }
  currentTrack = this.id;
  music.src = tracks[currentTrack].url;
  music.load();
  play();
}

function addChoosedBackground() {
  currentList = document.getElementById(currentTrack);
  currentList.classList.add("song-play-now");
}

function removePlayedBackground() {
  currentList.classList.remove("song-play-now");
}

function play() {
  img.src = tracks[currentTrack].image;
  imgs.src = tracks[currentTrack].image;
  artis.innerHTML = tracks[currentTrack].artist;
  musicname.innerHTML = tracks[currentTrack].name;
  rote.classList.add("rote");
  playBtn.classList.add("hidden");
  pauseBtn.classList.remove("hidden");
  musicbar.classList.add("openn");
  music.play();
  musicIsPlaying = true;
  addChoosedBackground();
  document.getElementById("end-time").innerHTML = tracks[currentTrack].duration;
}

function pause() {
  rote.classList.remove("rote");
  pauseBtn.classList.add("hidden");
  playBtn.classList.remove("hidden");

  musicIsPlaying = false;
  music.pause();
}

function prePlay() {
  removePlayedBackground();
  music.pause();

  if (currentTrack > 0) {
    currentTrack--;
  } else {
    currentTrack = tracks.length - 1;
  }

  music.src = tracks[currentTrack].url;
  music.load();
  play();
}

function nextPlay() {
  removePlayedBackground();
  music.pause();

  if (currentTrack < tracks.length - 1) {
    currentTrack++;
  } else {
    currentTrack = 0;
  }

  music.src = tracks[currentTrack].url;
  music.load();
  play();
}

function calculateTotalValue(length) {
  let minutes = Math.floor(length / 60),
    seconds_int = length - minutes * 60,
    seconds_str = seconds_int.toString(),
    seconds = seconds_str.substr(0, 2),
    time = minutes + ":" + seconds;

  return time;
}

function formatTime() {
  let timeline = document.getElementById("start-time");
  let s = parseInt(music.currentTime % 60);
  let m = parseInt((music.currentTime / 60) % 60);
  if (s < 10) {
    timeline.innerHTML = m + ":0" + s;
  } else {
    timeline.innerHTML = m + ":" + s;
  }
}

function updateProgress() {
  let current = music.currentTime;
  let percent = (current / music.duration) * 100;
  progressBar.setAttribute("value", percent);
}

playBtn.addEventListener("click", play, false);
pauseBtn.addEventListener("click", pause, false);
preBtn.addEventListener("click", prePlay, false);
nextBtn.addEventListener("click", nextPlay, false);
music.addEventListener("ended", nextPlay, false);

// 歌曲已播放時間
music.addEventListener("timeupdate", formatTime, false);
music.addEventListener("timeupdate", updateProgress, false);

init();
