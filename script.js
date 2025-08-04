let cursor = document.querySelector(".cursor");
let heading = document.querySelector(".container h1");
let animationFrame;

let mouseX = 0,
  mouseY = 0;
let posX = 0,
  posY = 0;
let speed = 0.5;

let cursorWidth = cursor.offsetWidth;
let cursorHeight = cursor.offsetHeight;

function updateCursorPosition(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

function smoothMove() {
  posX += (mouseX - posX) * speed;
  posY += (mouseY - posY) * speed;

  cursor.style.transform = `translate(${posX - cursorWidth / 2}px, ${
    posY - cursorHeight / 2
  }px)`;
  requestAnimationFrame(smoothMove);
}

document.addEventListener("mousemove", (e) => {
  updateCursorPosition(e);
});
requestAnimationFrame(smoothMove);

heading.addEventListener("mouseenter", (e) => {
  cursor.classList.add("grow");
});

heading.addEventListener("mouseleave", (e) => {
  cursor.classList.remove("grow");
});
