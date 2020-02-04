let progBar = document.getElementById('progBar'),
  playBtn = document.getElementById('playBtn'),
  pauseBtn = document.getElementById('pauseBtn'),
  replayBtn = document.getElementById('replayBtn'),
  volumeBtn = document.getElementById('volumeBtn');

let audioPlayer = document.getElementById('audioPlayer');

function removeAudioInfo() {
  audioPlayer.pause();
  audioPlayer.load();

  audioPlayer.removeAttribute('src');
  audioPlayer.removeAttribute('type');

  addClass(pauseBtn, 'invisible');
  removeClass(playBtn, 'invisible');
}

function getPlayerTime() {
  // check whether or not the audioPlayer has a src
  if (audioPlayer.hasAttribute('src') == true) {
    // enable play button
    playBtn.removeAttribute('disabled');
    removeClass(playBtn, 'disabledAudioBtn');
    addClass(playBtn, 'audioBtn');

    // enable replay button
    replayBtn.removeAttribute('disabled');
    removeClass(replayBtn, 'disabledAudioBtn');
    addClass(replayBtn, 'audioBtn');
  } else {
    // disable play button
    playBtn.setAttribute('disabled', '');
    removeClass(playBtn, 'audioBtn');
    addClass(playBtn, 'disabledAudioBtn');

    // disable replay button
    replayBtn.setAttribute('disabled', '');
    removeClass(replayBtn, 'audioBtn');
    addClass(replayBtn, 'disabledAudioBtn');

    // progBar.setAttribute('max', 0);
    // progBar.setAttribute('value', 0);
  }
}

// play audio
playBtn.addEventListener('click', function() {
  audioPlayer.play();
  addClass(playBtn, 'invisible');
  removeClass(pauseBtn, 'invisible');
});

// pause audio
pauseBtn.addEventListener('click', function() {
  audioPlayer.pause();
  addClass(pauseBtn, 'invisible');
  removeClass(playBtn, 'invisible');
});

// replay audio
replayBtn.addEventListener('click', function() {
  audioPlayer.load();

  if (hasClass(playBtn, 'invisible')) {
    audioPlayer.play();
  }
});

// adjust volume level
volumeBtn.addEventListener('click', function() {
  //
});

audioPlayer.addEventListener('timeupdate', function() {
  progBar.setAttribute('max', audioPlayer.duration);
  progBar.setAttribute('value', audioPlayer.currentTime);
});
