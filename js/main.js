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
var fasterBtn = document.querySelector('.faster-button');
var slowBtn = document.querySelector('.slow-button');
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
    video.playbackRate = 1;
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

function fasterPlay() {
  video.playbackRate = 3;
  video.play();
}

function slowPlay() {
  video.playbackRate = 0.5;
  video.play();
}

videoBtn.addEventListener('click', videoOpen);
closeBtn.addEventListener('click', closeVideo);
pauseBtn.addEventListener('click', pausePlay);
bar.addEventListener('change', barMoving);
video.addEventListener('timeupdate', videoMoveSlider);
volumeChange.addEventListener('change', volumeVorking);
fasterBtn.addEventListener('click', fasterPlay);
slowBtn.addEventListener('click', slowPlay);

// --------------------------------------------------------------

// mobile nav
let mobileNav = document.querySelector('.mobile-nav');
let mobileBurger = document.querySelector('.mobile-burger');
let roundBurgerIcon = document.querySelector('#default-burger');
let mobileLinks = document.querySelectorAll(".mobile-link");
let menuIsOpen = false;

if (menuIsOpen){
  roundBurgerIcon.style.visibility="hidden";
} else {
  roundBurgerIcon.style.visibility="visible";
}

function openMenu() {
  mobileNav.classList.toggle('mobile-nav-open');
  if (mobileNav.classList.contains("mobile-nav-open")){
    menuIsOpen = true;
  } else {
    menuIsOpen = false;
  }
}

mobileBurger.addEventListener('click', openMenu);
roundBurgerIcon.addEventListener('click', openMenu);
mobileLinks.forEach(moblink => {
  moblink.addEventListener('click',function(){
    menuIsOpen = false;
    mobileNav.classList.remove('mobile-nav-open');
  })
});

// scrolling
var ButTwo = document.querySelector('.two');
var But = document.querySelector('.one');
var ButThree = document.querySelector('.three');
var ButFour = document.querySelector('.four');
var ButFive = document.querySelector('.five');

  function animate() {
  window.scrollTo({
  top: window.innerHeight / 1,
  behavior: 'smooth',

});

  };

  function animate1() {
  window.scrollTo({
  top: 0,
  behavior: 'smooth',

});

  };

  function animate2() {
  window.scrollTo({
  top: window.innerHeight / 1 + window.innerHeight,
  behavior: 'smooth',

});

  };

  function animate3() {
    window.scrollTo({
    top: (window.innerHeight / 1) + (window.innerHeight * 2)  ,
    behavior: 'smooth',
  
  });
  
    };

    function animate4() {
      window.scrollTo({
      top: (window.innerHeight / 1) + (window.innerHeight * 3)  ,
      behavior: 'smooth',
    
    });
    
      };

ButTwo.addEventListener('click', animate);
But.addEventListener('click', animate1);
ButThree.addEventListener('click', animate2);
ButFour.addEventListener('click', animate3);
ButFive.addEventListener('click', animate4);
// --------------------------------------------------