var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  autoplay: {
    delay: 3000,
  },
  on: {
    slideChange: function () {
      controlButtons.forEach(function (button, index) {
        button.style.background = "transparent";
        button.style.color = "#000";
      });

      var currentSlideIndex = swiper.realIndex;
      controlButtons[currentSlideIndex].style.background = "#000";
      controlButtons[currentSlideIndex].style.color = "white";
    },
  },
});

var controlButtons = document.querySelectorAll(".swiper-cntrl p");

controlButtons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    swiper.slideTo(index);

    controlButtons.forEach(function (btn, i) {
      btn.style.background = "transparent";
      btn.style.color = i === index ? "white" : "#000";
    });

    button.style.background = "#000";
  });
});

//animation

window.addEventListener("scroll", function () {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  console.log("Scroll Top Değeri: " + scrollTop);
});

const main = document.querySelector(".main");
const small = document.querySelector(".small-team");

const featuredImg = document.querySelector(".feature-img");

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 100) {
    if (!main.classList.contains("main-animation")) {
      main.classList.add("main-animation");
    }
  } else {
    main.classList.remove("main-animation");
  }
});

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 1000) {
    if (!small.classList.contains("smallAni")) {
      small.classList.add("smallAni");
    }
  } else {
    small.classList.remove("smallAni");
  }
});

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 1300) {
    if (!featuredImg.classList.contains("featimg")) {
      featuredImg.classList.add("feature-img-ani");
    }
  } else {
    featuredImg.classList.remove("feature-img-ani");
  }
});

//Mobilemenu

const navMenu = document.querySelector(".nav-menu");

const mobileBar = document.querySelector(".mobileBar");

function toggleNavMenu() {
  if (window.innerWidth <= 600) {
    if (navMenu.style.display === "none" || navMenu.style.display === "") {
      navMenu.style.display = "flex";
    } else {
      navMenu.style.display = "none";
    }
  } else {
    navMenu.style.display = "none";
  }
}

mobileBar.addEventListener("click", toggleNavMenu);

window.addEventListener("resize", toggleNavMenu);

toggleNavMenu();
