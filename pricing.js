const accordionButton = document.querySelectorAll(".accordion-button");
accordionButton.forEach(function (btn) {
  btn.addEventListener("click", function () {
    this.style.boxShadow = "none";
  });
});
