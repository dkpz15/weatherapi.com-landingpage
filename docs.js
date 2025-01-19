const templateSidebar = document.querySelector(".template-sidebar");
const navbarSidebar = document.querySelector(".navbar-sidebar");
const lineTwo = document.querySelectorAll(".line-two");

navbarCollapseBefore.addEventListener("scroll", function () {
  navbarSidebar.style.transform = `translateY(-${this.scrollTop}px)`;
});

navbarSidebar.addEventListener("click", function () {
  templateSidebar.classList.toggle("navbar-sidebar-margin-to-right");
  this.firstElementChild.classList.toggle("rotate-line-1");
  this.childNodes[3].classList.toggle("none-line-2");
  this.lastElementChild.classList.toggle("rotate-line-3");
});

window.addEventListener("resize", function () {
  if (this.innerWidth > 1399) {
    templateSidebar.classList.remove("navbar-sidebar-margin-to-left");
    navbarSidebar.classList.add("opacity-0");
  } else if (this.innerWidth < 1400) {
    templateSidebar.classList.add("navbar-sidebar-margin-to-left");
    navbarSidebar.classList.remove("opacity-0");
  }
});

window.addEventListener("load", function () {
  if (this.innerWidth < 1400) {
    templateSidebar.classList.add("navbar-sidebar-margin-to-left");
    navbarSidebar.classList.remove("opacity-0");
  }
});

var spy = new ScrollSpy();

let indicator = document.querySelector(".indicator");
spy.Indicator({
  element: indicator,
});

var spy = new ScrollSpy({
  contexts_class: "scrollspy",
});

var spy = new ScrollSpy({
  delay: 100,
});

var spy = new ScrollSpy({
  allbackOnChange: function callbackOnChange() {
    // called on each change
  },
  callbackOnDestroy: function callbackOnDestroy() {
    // called on destroy
  },
});

spy.Indicator({
  element: null,
  indicator_container_class: "",
  indicator_item_class: "",
  clickable: true,
  forceActive: false,
});
