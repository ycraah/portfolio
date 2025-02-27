const cursor = document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY + window.scrollY;
});

function updateCursor() {
  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;
  requestAnimationFrame(updateCursor);
}

updateCursor();
