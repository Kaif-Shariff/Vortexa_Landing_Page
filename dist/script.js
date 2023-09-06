// selectors
const navbar = document.querySelector("header");
const aboveNav = document.getElementById("above_nav");
const imgContainer = document.getElementById("imgContainer");
// images
const img1 = "../Assets/img1.jpg";
const img2 = "../Assets/img2.jpg";
const img3 = "../Assets/img3.jpg";

const imgArray = [img1, img2, img3];
let currentIndex = 0;

// Change the background image
function changeBackgroundImage() {
  imgContainer.style.backgroundImage = `url(${imgArray[currentIndex]})`;
  currentIndex = (currentIndex + 1) % imgArray.length;
}

// Call changeBackgroundImage initially and set it to run every 1 second
changeBackgroundImage();

// Change the background image every 3 (1000ms = 1s) second
setInterval(changeBackgroundImage, 3000);

// on scroll navbar top set to 0%

window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    aboveNav.classList.add("hidden");
    navbar.style.top = "0%";
  } else {
    navbar.style.top = "initial";
    aboveNav.classList.remove("hidden");
    aboveNav.classList.add("flex");
  }
});
