const overlay = document.querySelector(".overlay");
const toggleImg = document.querySelectorAll(".toggleImage");
let currentEnlargedImg = null;

toggleImg.forEach((Img) => {
  Img.addEventListener("click", function () {
    if (currentEnlargedImg && currentEnlargedImg !== this) {
      // Revert the previously enlarged image to its original state
      currentEnlargedImg.classList.remove("enlarged-Img");
      currentEnlargedImg.style.position = "static";
      currentEnlargedImg.style.top = "auto";
      currentEnlargedImg.style.left = "auto";
      currentEnlargedImg.style.transform = "none";
      currentEnlargedImg.style.zIndex = "auto";
      currentEnlargedImg.style.maxWidth = "25%";
    }

    // Toggle the clicked image's enlargement
    let isEnlarged = this.classList.toggle("enlarged-Img");

    if (isEnlarged) {
      this.style.position = "fixed";
      this.style.top = "50%";
      this.style.left = "50%";
      this.style.transform = "translate(-50%, -50%)";
      this.style.zIndex = "9999";
      this.style.maxWidth = "60%";
      overlay.style.display = "block";
    } else {
      this.style.position = "static";
      this.style.top = "auto";
      this.style.left = "auto";
      this.style.transform = "none";
      this.style.zIndex = "auto";
      this.style.maxWidth = "25%";
      overlay.style.display = "none";
    }

    // Update the currently enlarged image
    currentEnlargedImg = isEnlarged ? this : null;
  });
});
