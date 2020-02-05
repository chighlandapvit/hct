let progBar = document.getElementById('progBar'),
  playBtn = document.getElementById('playBtn'),
  playImg = document.getElementById('playImg'),
  // pauseBtn = document.getElementById('pauseBtn'),
  replayBtn = document.getElementById('replayBtn'),
  replayImg = document.getElementById('replayImg'),
  volumeBtn = document.getElementById('volumeBtn'),
  volImg = document.getElementById('volImg');

let audioPlayer = document.getElementById('audioPlayer');

// reset the audioPlayer
function removeAudioInfo() {
  audioPlayer.pause();
  audioPlayer.load();

  progBar.value = 0;
  progBar.max = 0;

  audioPlayer.removeAttribute('src');
  audioPlayer.removeAttribute('type');
}

// check whether or not the audioPlayer has a src
function getPlayerTime() {
  if (audioPlayer.hasAttribute('src') == true) {
    // enable play button
    playBtn.removeAttribute('disabled');
    removeClass(playBtn, 'disabledAudioBtn');
    addClass(playBtn, 'audioBtn');
    playImg.setAttribute('src', 'images/play.png');

    // enable replay button
    replayBtn.removeAttribute('disabled');
    removeClass(replayBtn, 'disabledAudioBtn');
    addClass(replayBtn, 'audioBtn');
    replayImg.setAttribute('src', 'images/replay.png');

    // enable progress bar
    progBar.removeAttribute('disabled');
    removeClass(progBar, 'disabledProgBar');
    addClass(progBar, 'progBar');
  } else {
    // disable play button
    playBtn.setAttribute('disabled', '');
    removeClass(playBtn, 'audioBtn');
    addClass(playBtn, 'disabledAudioBtn');
    playImg.setAttribute('src', 'images/playgray.png');

    // disable replay button
    replayBtn.setAttribute('disabled', '');
    removeClass(replayBtn, 'audioBtn');
    addClass(replayBtn, 'disabledAudioBtn');
    replayImg.setAttribute('src', 'images/replaygray.png');

    // disable progress bar
    progBar.setAttribute('disabled', 'true');
    removeClass(progBar, 'progBar');
    addClass(progBar, 'disabledProgBar');
  }
}

// play audio
playBtn.addEventListener('click', function() {
  if (audioPlayer.paused == true) {
    audioPlayer.play();
    playImg.setAttribute('src', 'images/pauseblack.png');
  } else {
    audioPlayer.pause();
    playImg.setAttribute('src', 'images/playblack.png');
  }
});

// playBtn hover over
playBtn.addEventListener('mouseover', function() {
  if (playImg.getAttribute('src') === 'images/play.png') {
    playImg.setAttribute('src', 'images/playblack.png');
  } else {
    playImg.setAttribute('src', 'images/pauseblack.png');
  }
});

// playBtn hover off
playBtn.addEventListener('mouseout', function() {
  if (playImg.getAttribute('src') === 'images/playblack.png') {
    playImg.setAttribute('src', 'images/play.png');
  } else {
    playImg.setAttribute('src', 'images/pause.png');
  }
});

// replay audio
replayBtn.addEventListener('click', function() {
  audioPlayer.load();

  progBar.value = 0;

  if (playImg.getAttribute('src') == 'images/pause.png') {
    audioPlayer.play();
  }
});

// replayBtn hover over
replayBtn.addEventListener('mouseover', function() {
  replayImg.setAttribute('src', 'images/replayblack.png');
});

// replayBtn hover off
replayBtn.addEventListener('mouseout', function() {
  replayImg.setAttribute('src', 'images/replay.png');
});

// mute and unmute volume
volumeBtn.addEventListener('click', function() {
  if (audioPlayer.muted != true) {
    audioPlayer.muted = true;
    volImg.setAttribute('src', 'images/muteblack.png');
  } else {
    audioPlayer.muted = false;
    volImg.setAttribute('src', 'images/fullvolblack.png');
  }
});

// volumeBtn hover over
volumeBtn.addEventListener('mouseover', function() {
  if (volImg.getAttribute('src') === 'images/fullvol.png') {
    volImg.setAttribute('src', 'images/fullvolblack.png');
  } else if (volImg.getAttribute('src') === 'images/mute.png') {
    volImg.setAttribute('src', 'images/muteblack.png');
  }
});

// volumeBtn hover off
volumeBtn.addEventListener('mouseout', function() {
  if (volImg.getAttribute('src') === 'images/fullvolblack.png') {
    volImg.setAttribute('src', 'images/fullvol.png');
  } else if (volImg.getAttribute('src') === 'images/muteblack.png') {
    volImg.setAttribute('src', 'images/mute.png');
  }
});

// link custom progress slider to audioPlayer play time
audioPlayer.addEventListener('timeupdate', function() {
  progBar.setAttribute('max', audioPlayer.duration);
  progBar.setAttribute('value', audioPlayer.currentTime);
});

// update audioPlayer current time location
progBar.addEventListener('click', function() {
  audioPlayer.currentTime = progBar.value;
});
