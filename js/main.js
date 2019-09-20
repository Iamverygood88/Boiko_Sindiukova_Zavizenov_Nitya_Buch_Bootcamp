


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

// ------------------------------------------------------
var index = 0;
var allSections = document.querySelectorAll("section");
var ButTwo = document.querySelector('.two');
var But = document.querySelector('.one');
var ButThree = document.querySelector('.three');
var ButFour = document.querySelector('.four');
var ButFive = document.querySelector('.five');


// document.addEventListener("wheel", function(e){
//   if(e.deltaY < 0 && index > 0){
//     //Negative scroll (up)
//     index--;
//     allSections.forEach((section,i) => {
//       if(i === index){
//         section.scrollIntoView({behavior:'smooth'});
//       }
//     })
//   } else if(e.deltaY > 0 && index < allSections.length){
//     //Positive scroll (down)
//     index++;
//     allSections.forEach((section,i) => {
//       if(i === index){
//         section.scrollIntoView({behavior:'smooth'});
//       }
//     })
//   }
// });




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

// bio information in object
// -----------------------------------------------------

var Golden_tooth = {

  Nitya: {
    name: "Nitya Buch",
    Img: "nitya2.png",
    role: "Motion Designer",
    bio: "I am Nitya Buch and I am the Motion Designer of the team. I take care of every graphic element of the project. I help with marketing your company, product or projects by designing creative video content. From the script of the ad to filming and editing it, I make sure our representation of your company reflects the excellence of your work."

}, 

Evgeniia: {
  name: "Evgeniia Sindiukova",
  Img: "evgeniia1.png",
  role: "Front-end developer",
  bio: "I am Evgeniia and I am front-end developer of the team. I bring to life all the client's wishes and design desires. Besides working in the Golden Tooth, I am studying Interactive Media Design at Fanshawe College, London, ON.  Joe Kormendi and Trevor Van Rys are my favourite teachers. For the second year in a row, they help me improve my skills and work productivity."
},


  Gleb: {
    name: "Gleb Zavizenov",
    Img: "gleb2.png",
    role: "Front-end developer",
    bio: 'Hello! I am a junior web-developer based in London, Ontario. I have been learning and practicing web design and development for more than three years now. I am passionate about this area and want to learn about it as much as possible. I am open to all offers, be sure to contact me if you have an idea for a website!'

},
  
  
  Olha: {
      name: "Olha Boiko",
      Img: "olga2.png",
      role: "Grafic Designer",
      bio: "Hello, my name is Olha, and I'm a graphic designer in our amazing Golden Tooth team. My primary goal is to make your product looks awesome in any kind of advertising material and on the Web. I will take care of all the visual parts of the project, and all your requirements will be met with the addition of creativity and individuality. We will work hard to make your product stand out and shine."

  },



}

var popUpTeam = document.querySelector('.pop-up-team');
var MemberBtn = document.querySelectorAll('.member-btn');
var teamInfo = document.querySelector('.team-object').children;
var closeBtnTeam = document.querySelector('.close-btn-team');

function membersOpen() {

  popUpTeam.classList.add('pop-up-team-on');
  let activeMember = Golden_tooth[this.dataset.name];
  console.log(this.dataset.name); 
  teamInfo[0].textContent = activeMember.name; 
  teamInfo[1].textContent = activeMember.role;
  teamInfo[2].src = 'images/cropped_pics/' + activeMember.Img;
  teamInfo[3].textContent = activeMember.bio;
};

function membersClose() {
  popUpTeam.classList.remove('pop-up-team-on');

}

MemberBtn.forEach(member => member.addEventListener('click', membersOpen));
closeBtnTeam.addEventListener('click', membersClose );





