// Project Image gets bigger
const toggleImages = document.querySelectorAll(".toggleImage");

toggleImages.forEach((image) => {
  image.addEventListener("click", function () {
    let isEnlarged = this.classList.toggle("enlarged-image");

    if (isEnlarged) {
      this.style.position = "fixed";
      this.style.top = "50%";
      this.style.left = "50%";
      this.style.transform = "translate(-50%, -50%)";
      this.style.zIndex = "9999";
      this.style.maxWidth = "60%"; /* Set the maximum width to 100% */
    } else {
      this.style.position = "static";
      this.style.top = "auto";
      this.style.left = "auto";
      this.style.transform = "none";
      this.style.zIndex = "auto";
      this.style.maxWidth = "25%"; /* Reset the width to the initial value */
    }
  });
});
