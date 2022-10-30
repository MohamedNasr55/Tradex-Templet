$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,
    margin: 30,
    loop: true,
    nav: true,
    loop: true,
    dots: false,
    autoplay: true,
    navText: [
      `<i class="btn fa-solid fa-arrow-left-long"></i>`,
      `<i class="btn fa-solid fa-arrow-right-long"></i>`,
    ],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });
});
////////////////////////////////////////////
///// start code button top ///////////////
//////////////////////////////////////////
let arrowUp = document.getElementById("arrow-up");

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 300) {
    arrowUp.style.opacity = "1";
  } else {
    arrowUp.style.opacity = "0";
  }
});

//////////////////////////////////////////
///// end code button top ///////////////
////////////////////////////////////////

////////////////////////////////////////////
///// start code conter section ///////////
//////////////////////////////////////////
let cont1 = document.querySelector(".cont-1");
let cont2 = document.querySelector(".cont-2");
let cont3 = document.querySelector(".cont-3");
let cont4 = document.querySelector(".cont-4");

function countNumber(num1, tag, count) {
  let i = 0;
  let j = 0;
  let k = 0;
  let l = 0;
  let set1 = setInterval(() => {
    if ((i == num1) & (j == num1) & (k == num1) & (l == num1)) {
      clearInterval(set1);
    }
    tag.innerText = i;
    tag.innerText = j;
    tag.innerText = k;
    tag.innerText = l;
    i += count;
    j += count;
    k += count;
    l += count;
  }, 50);
}

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 600) {
    countNumber(8000, cont1, 1000);
    countNumber(820, cont2, 20);
    countNumber(2000, cont3, 500);
    countNumber(20, cont4, 1);
  }
});

////////////////////////////////////////////
/////end code conter section ///////////
//////////////////////////////////////////

