const BlueLine = 600;
const PurpleLine = 1000;

function handerlWindowResize() {
  if (window.innerWidth < BlueLine) {
    // Blue
    document.body.className = "blue";
  } else if (window.innerWidth < PurpleLine && window.innerWidth >= BlueLine) {
    // Purple
    document.body.className = "purple";
  } else if (window.innerWidth >= PurpleLine) {
    // Yellow
    document.body.className = "yellow";
  }
}

window.addEventListener("resize", handerlWindowResize);
