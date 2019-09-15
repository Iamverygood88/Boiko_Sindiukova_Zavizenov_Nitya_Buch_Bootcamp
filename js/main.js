'use strict';

// video part
// ---------------------------------------------------------
// video pop up
var popUp = document.querySelector('.pop-up');
var videoBtn = document.querySelector('.left-btn');
var closeBtn = document.querySelector('.close-btn');
var video = document.querySelector('video');
var pauseBtn = document.querySelector('.pause-btn');
var bar = document.querySelector('.bar');
var durationVideo = document.querySelector('.duration-video');
var volumeChange = document.querySelector('.volume');
var timeVideo = document.querySelector('.time');
var timeAll = document.querySelector('.time-all');
// not working

function videoOpen() {
  popUp.classList.add('pop-up-on');
  video.play();
  video.volume = 1.0;

};

// video close

function closeVideo() {
  popUp.classList.remove('pop-up-on');
  video.pause();
};

// custom controls for video
function pausePlay() {
  if (video.paused == true) {
    video.play();
    pauseBtn.innerHTML = 'Pause';
  } else {
    video.pause();
    pauseBtn.innerHTML = 'Play';
  }
};

function barMoving() {
  video.currentTime = video.duration * bar.value / bar.max;
};

function videoMoveSlider() {
    bar.value = video.currentTime / video.duration * bar.max;
    timeVideo.innerHTML = '0:' + Math.round(video.currentTime) ;
    timeAll.innerHTML = ' 0:' +  Math.floor(video.duration);

}

function volumeVorking() {
  video.volume = volumeChange.value / volumeChange.max;
}

videoBtn.addEventListener('click', videoOpen);
closeBtn.addEventListener('click', closeVideo);
pauseBtn.addEventListener('click', pausePlay);
bar.addEventListener('change', barMoving);
video.addEventListener('timeupdate', videoMoveSlider);
volumeChange.addEventListener('change', volumeVorking);

// --------------------------------------------------------------
