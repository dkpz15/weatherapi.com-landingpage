const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapseBefore = document.querySelector(".navbar-collapse-before");
const buttonMessage = document.querySelector(".button-message");
const imgMessage = document.querySelector(".img-message");
const spanContactUs = document.querySelector(".span-contact-us");
const svgClose = document.querySelector(".svg-close");
const contactUsBox = document.querySelector(".contact-us-box");
const imgLogo = document.querySelector(".img-logo");
const body = document.querySelector("body");

setTimeout(() => {
  body.classList.add("body-opacity-1");
}, 300);

buttonMessage.addEventListener("click", function () {
  this.style.boxShadow = "none";
  this.classList.toggle("padding-button-message");

  displayNone([imgMessage, spanContactUs]);
  svgClose.classList.toggle("display-block-button-close");
  contactUsBox.classList.toggle("display-block-contact-us-box");
});

function displayNone(elements) {
  elements.forEach((element) => {
    element.classList.toggle("display-none");
  });
}

navbarToggler.addEventListener("click", function () {
  toggleShouldnt();

  if (this.classList.contains("shouldnt")) {
    addOver();

    body.classList.add("overflow-y-hidden");
    navbarCollapseBefore.classList.add("overflow-y-scroll");
  } else {
    setTimeout(() => {
      removeOver();
    }, 400);

    body.classList.remove("overflow-y-hidden");
    navbarCollapseBefore.classList.remove("overflow-y-scroll");
  }
  this.firstElementChild.classList.toggle("rotate-line-1");
  this.childNodes[3].classList.toggle("none-line-2");
  this.lastElementChild.classList.toggle("rotate-line-3");
});

navbarCollapseBefore.addEventListener("scroll", function () {
  imgLogo.style.transform = `translateY(-${this.scrollTop}px)`;
  navbarToggler.style.transform = `translateY(-${this.scrollTop}px)`;
});

window.addEventListener("resize", function () {
  if (this.innerWidth > 1199) {
    removeOver();

    body.classList.remove("overflow-y-hidden");
    navbarCollapseBefore.classList.remove("overflow-y-scroll");
  } else if (this.innerWidth < 1200) {
    if (navbarToggler.classList.contains("shouldnt")) {
      addOver();

      body.classList.add("overflow-y-hidden");
      navbarCollapseBefore.classList.add("overflow-y-scroll");
    }
  }
});

function removeOver() {
  navbarCollapseBefore.classList.remove("over");
}
function addOver() {
  navbarCollapseBefore.classList.add("over");
}
function toggleShouldnt() {
  navbarToggler.classList.toggle("shouldnt");
}

const typeWriterEffect = document.querySelector(".typewriter-effect");

let list = [
  "Browser Exstension",
  "Jquery Plugin",
  "CMS Plugin",
  "Mobile App",
  "JS Library",
  "Open Source Project",
  "",
];

async function typeSentence(sentence, typeWriterEffect, delay) {
  delay = 100;
  let letters = sentence.split("");
  for (let i = 0; i < letters.length; i++) {
    await waitForMs(delay);
    typeWriterEffect.innerHTML += letters[i];
  }
  return;
}

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function deleteSentence(typeWriterEffect, delay) {
  delay = 100;
  let sentence = typeWriterEffect.innerHTML;
  let letters = sentence.split("");
  for (let i = 0; letters.length > i; i) {
    await waitForMs(delay);
    letters.pop();
    typeWriterEffect.innerHTML = letters.join("");
  }
}

window.onload = async function () {
  for (let i = 0; i < list.length; i++) {
    if (i > 5) {
      i = 0;
    }

    await typeSentence(list[i], typeWriterEffect);
    await waitForMs(2000);
    await deleteSentence(typeWriterEffect);
    await waitForMs(500);
  }
};
