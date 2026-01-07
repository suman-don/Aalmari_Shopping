let index = 0;
let slide = document.getElementsByClassName("slide")[0];
const totalSlides = slide.children.length;
const slideWidth = 1200; // must match CSS image width
 let dots = document.querySelectorAll(".dot");

function nextFunction() {
  index++;

  if (index >= totalSlides) {
    index = 0;
  }

  slide.style.transform = `translateX(-${index * slideWidth}px)`;
  slide.style.transition = "0.6s ease-in-out";
}

setInterval(nextFunction, 2000);

 function dotUpdate(){
    dots.forEach((dot,i) =>{
    dot.classList.toggle("active",i===index);
    })
 }
 setInterval(dotUpdate,2000);