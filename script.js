const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const fourth= document.getElementById('forth');
const fifth = document.getElementById('fifth');
const show = document.getElementById("showmenu");
const hide = document.getElementById("hidemenu");


var navlinks = document.getElementById("navlinks");
function showmenu(){
    navlinks.style.display = "block";
    show.style.display = "none"
    hide.style.display = "block"
}
function hidemenu(){
    navlinks.style.display = "none";
        hide.style.display = "none"

    show.style.display = "block"
}


        


    



// image slider
 new Swiper('.card-wrapper', {

  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 2
    },
  }
});

window.addEventListener('scroll', function () {
    var top = window.scrollY;
    if (top > 808 && top < 1750) {
        first.style.opacity = 1;
        second.style.opacity = 0;
        third.style.opacity = 0;
        fourth.style.opacity = 0;
        fifth.style.opacity = 0;
        // first.style.position = 'sticky';
    } else if (top > 1751 && top < 2620) {
        first.style.opacity = 0;
        second.style.opacity = 1;
        third.style.opacity = 0;
        fourth.style.opacity = 0;
        fifth.style.opacity = 0;
    } else if (top > 2621 && top < 3190) {
        first.style.opacity = 0;
        second.style.opacity = 0;
        third.style.opacity = 1;
        fourth.style.opacity = 0;
        fifth.style.opacity = 0;
    } else if (top > 3211 && top < 4000) {
        first.style.opacity = 0;
        second.style.opacity = 0;
        third.style.opacity = 0;
        fourth.style.opacity = 1;
        fifth.style.opacity = 0;
    } else if (top > 4001 && top < 5300) {
        first.style.opacity = 0;
        second.style.opacity = 0;
        third.style.opacity = 0;
        fourth.style.opacity = 0;
        fifth.style.opacity = 1;
    } else {
        first.style.opacity = 0;
        second.style.opacity = 0;
        third.style.opacity = 0;
        fourth.style.opacity = 0;
        fifth.style.opacity = 0;
    }
})




const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".content");
const slideIcon = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;
const slider = document.querySelector(".once");
let face1 = document.getElementById("face1");
let face2 = document.getElementById("face2");
let face3 = document.getElementById("face3");
let face4 = document.getElementById("face4");
let face5 = document.getElementById("face5");
let face6 = document.getElementById("face6");
const fit1 = document.getElementById("fit1");
const fit2 = document.getElementById("fit2");
const fit3 = document.getElementById("fit3");
const fit4 = document.getElementById("fit4");
const fit5 = document.getElementById("fit5");
const fit6 = document.getElementById("fit6");
// const hide = document.getElementById("hideMenu");


// image slider next button function
nextBtn.addEventListener("click", () =>{
    slides.forEach((content) => {
        content.classList.remove("active");
    });
    slideIcon.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber ++;

    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber  = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcon[slideNumber].classList.add("active");
} );

// image slider pre button function
prevBtn.addEventListener("click", () =>{
    slides.forEach((content) => {
        content.classList.remove("active");
    });
    slideIcon.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber --;

    if (slideNumber < 0) {
        slideNumber  = numberOfSlides - 1 ;
    }

    slides[slideNumber].classList.add("active");
    slideIcon[slideNumber].classList.add("active");
} );


// Autoplay
var playSlider;

var repeater = () => {
    playSlider = setInterval(function(){
        slides.forEach((content) => {
            content.classList.remove("active");
        });
        slideIcon.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });
    
        slideNumber ++;
    
        if (slideNumber > (numberOfSlides - 1)) {
            slideNumber  = 0;
        }
    
        slides[slideNumber].classList.add("active");
        slideIcon[slideNumber].classList.add("active");
    }, 7000 );
    
}
repeater(); 