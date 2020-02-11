let mediaBox = document.getElementById('mediaBox'),
  audioPlayer = document.getElementById('audioPlayer'),
  videoPlayer = document.getElementById('videoPlayer');

let progBar = document.getElementById('progBar'),
  playBtn = document.getElementById('playBtn'),
  playImg = document.getElementById('playImg'),
  replayBtn = document.getElementById('replayBtn'),
  replayImg = document.getElementById('replayImg'),
  volumeBtn = document.getElementById('volumeBtn'),
  volImg = document.getElementById('volImg');

// reset media player
function removeMediaInfo() {
  progBar.value = 0;
  progBar.max = 0;

  if (audioPlayer.hasAttribute('src') == true) {
    audioPlayer.removeAttribute('src');
    audioPlayer.removeAttribute('type');
    audioPlayer.load();
  } else if (videoPlayer.hasAttribute('src') == true) {
    videoPlayer.removeAttribute('src');
    videoPlayer.removeAttribute('alt');
    videoPlayer.removeAttribute('type');
    videoPlayer.load();
    addClass(videoPlayer, 'invisible');
    mediaBox.appendChild(videoPlayer);
  }
}

// check whether or not media player has a src
function getPlayerTime() {
  if (
    audioPlayer.hasAttribute('src') == true ||
    videoPlayer.hasAttribute('src') == true
  ) {
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

// // play media
// playBtn.addEventListener('click', function() {
//   if (audioPlayer.paused == true) {
//     audioPlayer.play();
//     playImg.setAttribute('src', 'images/pauseblack.png');
//   } else if (videoPlayer.paused == true) {
//     playImg.setAttribute('src', 'images/pauseblack.png');
//     return videoPlayer.play();
//   } else if (audioPlayer.paused == false) {
//     audioPlayer.pause();
//     playImg.setAttribute('src', 'images/playblack.png');
//   } else if (videoPlayer.paused == false) {
//     videoPlayer.pause();
//     playImg.setAttribute('src', 'images/playblack.png');
//   }
// });

let curPlayTime;

// play media
playBtn.addEventListener('click', function() {
  if (!audioPlayer.paused) {
    audioPlayer.pause();
    playImg.setAttribute('src', 'images/playblack.png');
  } else if (!videoPlayer.paused) {
    curPlayTime = progBar.value;
    videoPlayer.load();
    videoPlayer.currentTime = curPlayTime;
    playImg.setAttribute('src', 'images/playblack.png');
  } else if (audioPlayer.paused) {
    audioPlayer.play();
    playImg.setAttribute('src', 'images/pauseblack.png');
  } else if (videoPlayer.paused) {
    videoPlayer.currentTime = curPlayTime;
    videoPlayer.play();
    playImg.setAttribute('src', 'images/pauseblack.png');
  }
});

// // play media
// playBtn.addEventListener('click', function() {
//   if (audioPlayer.paused == true) {
//     audioPlayer.play();
//     playImg.setAttribute('src', 'images/pauseblack.png');
//   } else if (videoPlayer.paused == true) {
//     playImg.setAttribute('src', 'images/pauseblack.png');
//     videoPlayer.play();
//   } else if (audioPlayer.paused == false) {
//     audioPlayer.pause();
//     playImg.setAttribute('src', 'images/playblack.png');
//   } else if (
//     videoPlayer.currentTime > 0 &&
//     !videoPlayer.paused &&
//     !videoPlayer.ended &&
//     videoPlayer.readyState > 2
//   ) {
//     videoPlayer.pause();
//     // videoPlayer.load();
//     playImg.setAttribute('src', 'images/playblack.png');
//   }
// });

// // play media
// playBtn.addEventListener('click', function() {
//   let playPromise = videoPlayer.play();

//   if (playPromise !== undefined) {
//     // playImg.setAttribute('src', 'images/pauseblack.png');
//     playPromise
//       .then(function() {
//         videoPlayer.pause();
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//   } else {
//     fetch('../video/fly.mp4')
//       .then(function(response) {
//         response.blob();
//       })
//       .then(function() {
//         console.log('playing that vid, yo');
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//   }
//   // else if (videoPlayer.paused === false) {
//   //   videoPlayer.pause();
//   //   playImg.setAttribute('src', 'images/playblack.png');
//   // }
// });

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

// replay media
replayBtn.addEventListener('click', function() {
  if (audioPlayer.hasAttribute('src') == true && !audioPlayer.paused) {
    audioPlayer.load();
    audioPlayer.play();
  } else if (videoPlayer.hasAttribute('src') == true && !videoPlayer.paused) {
    videoPlayer.load();
    videoPlayer.play();
  } else if (audioPlayer.hasAttribute('src') == true && audioPlayer.paused) {
    audioPlayer.load();
  } else if (videoPlayer.hasAttribute('src') == true && videoPlayer.paused) {
    videoPlayer.load();
  }

  progBar.value = 0;
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
  if (audioPlayer.muted == false && videoPlayer.muted == false) {
    audioPlayer.muted = true;
    videoPlayer.muted = true;
    volImg.setAttribute('src', 'images/muteblack.png');
  } else {
    audioPlayer.muted = false;
    videoPlayer.muted = false;
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

// link custom progress slider to play time of HTML audio player
audioPlayer.addEventListener('timeupdate', function() {
  if (audioPlayer.hasAttribute('src') == true) {
    progBar.setAttribute('max', audioPlayer.duration);
    progBar.setAttribute('value', audioPlayer.currentTime);
  }

  if (audioPlayer.currentTime >= audioPlayer.duration) {
    playImg.setAttribute('src', 'images/play.png');
    progBar.value = 0;
  }
});

// link custom progress slider to play time of HTML video player
videoPlayer.addEventListener('timeupdate', function() {
  if (videoPlayer.hasAttribute('src') == true) {
    progBar.setAttribute('max', videoPlayer.duration);
    progBar.setAttribute('value', videoPlayer.currentTime);
  }

  if (videoPlayer.currentTime >= videoPlayer.duration) {
    playImg.setAttribute('src', 'images/play.png');
    progBar.value = 0;
  }
});

// update HTML media player's current time location
progBar.addEventListener('click', function() {
  if (audioPlayer.hasAttribute('src') == true) {
    audioPlayer.currentTime = progBar.value;
  } else if (videoPlayer.hasAttribute('src') == true) {
    videoPlayer.currentTime = progBar.value;
  }
});
