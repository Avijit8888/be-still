const quote=document.getElementById("quote");
const options=document.getElementById("options");
const message=document.getElementById("message");
const messageText=document.getElementById("messageText");
const awakening=document.getElementById("awakening");
const bg=document.querySelector(".bg");

/* Quote Click */
quote.addEventListener("click",()=>{

quote.classList.add("hidden");
options.classList.remove("hidden");

setTimeout(()=>{
options.classList.add("show");
},100);

});

/* Choose Option */
function choose(type){

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

messageText.innerText=text;

setTimeout(()=>{
awakening.classList.remove("hidden");
awakening.classList.add("show");
},6000);

}

/* Back */
function goBack(){

message.classList.add("hidden");
options.classList.remove("hidden");

bg.classList.remove("blur");
bg.classList.remove("zoom");

setTimeout(()=>{
options.classList.add("show");
},100);

}

/* Restart */
function restartJourney(){

awakening.classList.remove("show");
awakening.classList.add("hidden");

message.classList.add("hidden");
options.classList.add("hidden");

quote.classList.remove("hidden");

bg.classList.remove("blur");
bg.classList.remove("zoom");

}
