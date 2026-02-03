/* ELEMENTS */
const quote = document.getElementById("quote");
const options = document.getElementById("options");
const message = document.getElementById("message");
const awakening = document.getElementById("awakening");
const bg = document.querySelector(".bg");
const transition = document.getElementById("transition");

/* QUOTE CLICK */
quote.addEventListener("click",()=>{

startTransition(()=>{
quote.classList.add("hidden");
options.classList.remove("hidden");

setTimeout(()=>{
options.classList.add("show");
},100);

});

});

/* USER CHOICE */
function choose(type){

startTransition(()=>{

options.classList.add("hidden");
message.classList.remove("hidden");

bg.classList.add("blur");
bg.classList.add("zoom");

let text="";

if(type==="listen"){
text="Silence speaks when ego stops listening.";
}

if(type==="reflect"){
text="Look within. Every answer already lives inside you.";
}

if(type==="letgo"){
text="Release what burdens your soul. Freedom begins with surrender.";
}

message.innerText=text;

/* Awakening Scene */
setTimeout(()=>{
awakening.classList.remove("hidden");
awakening.classList.add("show");
},6000);

});

}

/* TRANSITION FUNCTION */
function startTransition(callback){

transition.classList.add("active");

setTimeout(()=>{
callback();
transition.classList.remove("active");
},800);

}

/* STAR UNIVERSE */
const canvas=document.getElementById("stars");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let stars=[];

for(let i=0;i<120;i++){
stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2,
speed:Math.random()*0.3
});
}

function animateStars(){

ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="white";

stars.forEach(star=>{
ctx.beginPath();
ctx.arc(star.x,star.y,star.size,0,Math.PI*2);
ctx.fill();

star.y+=star.speed;

if(star.y>canvas.height){
star.y=0;
}
});

requestAnimationFrame(animateStars);
}

animateStars();
