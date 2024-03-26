let accordions = document.querySelectorAll(".question__heading");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", function () {
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.marginTop = 0;
      this.children[1].src = "assets/images/icon-plus.svg";
      this.children[1].alt = "icon plus";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.marginTop = "15px";
      this.children[1].src = "assets/images/icon-minus.svg";
      this.children[1].alt = "icon minus";
    }
  });
});
