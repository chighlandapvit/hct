let progBar = document.getElementById('progBar'),
  playBtn = document.getElementById('playBtn'),
  pauseBtn = document.getElementById('pauseBtn'),
  replayBtn = document.getElementById('replayBtn'),
  volumeBtn = document.getElementById('volumeBtn');

let audioPlayer = document.getElementById('audioPlayer'),
  currentTime = audioPlayer.currentTime,
  duration = audioPlayer.duration;

// function getPlayerTime() {
//   if (audioPlayer.getAttribute('src') === '') {
//     currentTime = audioPlayer.currentTime;
//     duration = audioPlayer.duration;
//   } else {
//     audioPlayer.setAttribute('src', '');
//     audioPlayer.removeAttribute('type');
//     currentTime = 0;
//     duration = 100;
//     // progBar.setAttribute('max', '100');
//     // progBar.setAttribute('value', '0');
//   }
//   console.log(duration);
// }

function removeAudioInfo() {
  audioPlayer.removeAttribute('src');
  audioPlayer.removeAttribute('type');
}

function getPlayerTime() {
  if (audioPlayer.hasAttribute('src') == true) {
    playBtn.removeAttribute('disabled');
    removeClass(playBtn, 'disabledAudioBtn');
    addClass(playBtn, 'audioBtn');

    replayBtn.removeAttribute('disabled');
    removeClass(replayBtn, 'disabledAudioBtn');
    addClass(replayBtn, 'audioBtn');
  } else {
    playBtn.setAttribute('disabled', '');
    removeClass(playBtn, 'audioBtn');
    addClass(playBtn, 'disabledAudioBtn');

    replayBtn.setAttribute('disabled', '');
    removeClass(replayBtn, 'audioBtn');
    addClass(replayBtn, 'disabledAudioBtn');

    // pause player if audio is playing
    audioPlayer.pause();
    addClass(pauseBtn, 'invisible');
    removeClass(playBtn, 'invisible');
  }
}

playBtn.addEventListener('click', function() {
  audioPlayer.play();
  addClass(playBtn, 'invisible');
  removeClass(pauseBtn, 'invisible');
});

pauseBtn.addEventListener('click', function() {
  audioPlayer.pause();
  addClass(pauseBtn, 'invisible');
  removeClass(playBtn, 'invisible');
});

replayBtn.addEventListener('click', function() {
  audioPlayer.load();
  if (hasClass(playBtn, 'invisible')) {
    audioPlayer.play();
  }
});

volumeBtn.addEventListener('click', function() {
  //
});

audioPlayer.addEventListener('timeupdate', function() {
  progBar.setAttribute('max', duration);
  progBar.setAttribute('value', currentTime);
});
