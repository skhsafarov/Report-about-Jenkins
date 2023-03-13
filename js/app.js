document.addEventListener("DOMContentLoaded", function () {
  showSlide(currentSlide);
});

const element = document.querySelector(".buttons-container");

document.addEventListener("keydown", function (e) {
  if (e.key === "f") {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      element.style.zIndex = -1;
    } else {
      document.documentElement.requestFullscreen();
      element.style.zIndex = 1;
    }
  }
  if (e.key === "F11") {
    if (document.fullscreenElement) {
      element.style.zIndex = -1;
    } else {
      element.style.zIndex = 1;
    }
  }
  if (e.key === "ArrowLeft") {
    previousSlide();
  }
  if (e.key === "ArrowRight") {
    nextSlide();
  }
});

const slides = document.querySelectorAll(".slide");
const vantaFunctions = [VANTA.NET, VANTA.GLOBE, VANTA.RINGS, VANTA.WAVES];
let randomIndex = 1;
let currentSlide = 0;

function generateRandomDarkColor() {
  var r = Math.floor(Math.random() * 70);
  var g = Math.floor(Math.random() * 70);
  var b = Math.floor(Math.random() * 70);
  return r * 65536 + g * 256 + b;
}
function generateRandomLightColor() {
  var r = Math.floor(Math.random() * 225) + 30;
  var g = Math.floor(Math.random() * 225) + 30;
  var b = Math.floor(Math.random() * 225) + 30;
  return r * 65536 + g * 256 + b;
}

function showSlide(slideIndex) {
  if (slideIndex >= 0 && slideIndex < slides.length) {
    slides[currentSlide].classList.remove("active");
    currentSlide = slideIndex;
    slides[currentSlide].classList.add("active");
    vantaFunctions[randomIndex]({
      el: "#" + slides[currentSlide].id,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color:
        randomIndex === 3
          ? generateRandomDarkColor()
          : generateRandomLightColor(),
    });
    let oldIndex = randomIndex;
    while (randomIndex === oldIndex) {
      randomIndex = Math.floor(Math.random() * vantaFunctions.length);
    }
  }
}

function nextSlide() {
  showSlide(currentSlide + 1);
  console.log(currentSlide + 1);
}

function previousSlide() {
  showSlide(currentSlide - 1);
  SHOWsLIDE(CURRENTsLIDE - 1);

  console.log(currentSlide - 1);
}
const nextButton = document.querySelector(".next-button");
const previousButton = document.querySelector(".previous-button");

nextButton.addEventListener("click", nextSlide);
previousButton.addEventListener("click", previousSlide);
