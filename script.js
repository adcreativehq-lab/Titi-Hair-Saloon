// ===========================
// TITI HAIR SALOON
// script.js
// ===========================

// Ndërrimi i gjuhës Shqip / Anglisht

const langBtn = document.getElementById("langBtn");

let language = "sq";

langBtn.addEventListener("click", () => {

if(language === "sq"){

language = "en";

document.querySelector(".logo h2").innerHTML =
"Titi Hair Saloon";

document.querySelector(".hero h1").innerHTML =
"Titi Hair Saloon";

document.querySelector(".hero p").innerHTML =
"Professional barber shop with more than 20 years of experience.";

document.querySelector(".btn").innerHTML =
"Book Appointment";

document.querySelector(".about h2").innerHTML =
"About Us";

}

else{

language = "sq";

document.querySelector(".logo h2").innerHTML =
"Titi Hair Saloon";

document.querySelector(".hero h1").innerHTML =
"Titi Hair Saloon";

document.querySelector(".hero p").innerHTML =
"Salloni TITI është një barber shop profesional me mbi 20 vite përvojë.";

document.querySelector(".btn").innerHTML =
"Rezervo Termin";

document.querySelector(".about h2").innerHTML =
"Rreth Nesh";

}

});

// Efekt gjatë scroll-it

const boxes = document.querySelectorAll(
".info-box,.stat-box"
);

window.addEventListener("scroll",()=>{

boxes.forEach(box=>{

const top = box.getBoundingClientRect().top;

if(top < window.innerHeight-100){

box.style.animation="zoomIn 0.8s";

}

});

});
// ===========================
// Efekt Hover për Butonat
// ===========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.08)";
button.style.transition=".3s";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

});

// ===========================
// Hero Animation
// ===========================

window.addEventListener("load",()=>{

const hero = document.querySelector(".overlay");

hero.style.opacity="0";

setTimeout(()=>{

hero.style.transition="1.2s";
hero.style.opacity="1";
hero.style.transform="translateY(0px)";

},300);

});

// ===========================
// Smooth Scroll
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// ===========================
// Viti Automatik në Footer
// ===========================

const footer = document.querySelector("footer p:last-child");

if(footer){

footer.innerHTML =
`© ${new Date().getFullYear()} Titi Hair Saloon - Të gjitha të drejtat e rezervuara.`;

}
