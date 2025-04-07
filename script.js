// navbar clicking menu
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  navbar.classList.toggle("change");
  menu.classList.toggle("change");
});

// icons show on interval
const icons = document.querySelectorAll(".section-1__icons i");
let currentIndex = 0;
// console.log(icons);

function showItem() {
  const icon = icons[currentIndex];
  icon.classList.remove("change");
  currentIndex++;

  if (currentIndex < icons.length) {
    icons[currentIndex].classList.add("change");
  } else {
    currentIndex = 0;
    icons[currentIndex].classList.add("change");
  }
}
setInterval(showItem, 4000);
