const img = document.getElementById("myimage");
const back = document.getElementById("previous");
const next = document.getElementById("next");

const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
];

let currentImage = 0;

next.onclick = nextPhoto;

function nextPhoto() {
  currentImage++;
  img.src = images[currentImage];
}

// New code for slideshow

// let i = 0;

// next.addEventListener("click", () => {
//   if (i >= images.length) {
//     i = 0;
//   }
//   const imageUrl = images[i];
//   img.setAttribute("src", imageUrl);
//   i++;
// });

// back.addEventListener("click", () => {
//   if (i >= images.length) {
//     i = 0;
//   }
//   const imageUrl = images[i];
//   img.setAttribute("src", imageUrl);
//   i--;
// });

// New code for slideshow

// let i = 0;

// setInterval(() => {
//   if (i >= images.length) {
//     i = 0;
//   }
//   const imageUrl = images[i];
//   img.setAttribute("src", imageUrl);
//   i++;
// }, 1000);
