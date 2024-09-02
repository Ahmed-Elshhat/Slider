// const wrapper = document.querySelector(".wrapper");

// let pressed = false;
// let startX = 0;

// wrapper.addEventListener("mousedown", function (e) {
//   pressed = true;
//   startX = e.clientX;
//   this.style.cursor = "grabbing"
// });

// wrapper.addEventListener("mouseleave", function (e) {
//   pressed = false;
// });

// window.addEventListener("mouseup", function (e) {
//   pressed = false;
//   wrapper.style.cursor = "grab"
// });

// wrapper.addEventListener("mousemove", function (e) {
//   if(!pressed) {
//     return
//   }

//   this.scrollLeft += startX - e.clientX
// });

const wrapper = document.querySelector(".wrapper");

let pressed = false;
let startY = 0;

wrapper.addEventListener("mousedown", function (e) {
  pressed = true;
  startY = e.clientY;
  this.style.cursor = "grabbing";
});

wrapper.addEventListener("mouseleave", function () {
  pressed = false;
});

window.addEventListener("mouseup", function () {
  pressed = false;
  wrapper.style.cursor = "grab";
});

wrapper.addEventListener("mousemove", function (e) {
  if (!pressed) {
    return;
  }

  this.scrollTop += startY - e.clientY;
});



