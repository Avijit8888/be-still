const intro = document.getElementById("intro");
const quote = document.getElementById("quote");
const options = document.getElementById("options");
const message = document.getElementById("message");
const messageText = document.getElementById("messageText");
const story = document.getElementById("story");
const storyTitle = document.getElementById("storyTitle");
const storyContent = document.getElementById("storyContent");
const awakening = document.getElementById("awakening");
const bg = document.querySelector(".bg");

/* START JOURNEY */
function startJourney(){
intro.style.display="none";
}

/* QUOTE CLICK */
quote.addEventListener("click",()=>{
quote.classList.add("hidden");
options.classList.remove("hidden");

setTimeout(()=>{
options.classList.add("show");
},100);
});

/* OPTIONS */
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
text="Release what burdens your soul.";
}

messageText.innerText=text;
}

/* BACK */
function goBack(){
message.classList.add("hidden");
options.classList.remove("hidden");

bg.classList.remove("blur");
bg.classList.remove("zoom");

setTimeout(()=>{
options.classList.add("show");
},100);
}

/* STORY DATA */
let storyStep=0;

const storyData=[

{
title:"When Love First Arrived",
text:"Love entered quietly, like warmth spreading across a cold morning."
},
{
title:"The Break",
text:"One day it left… and memories became louder than reality."
},
{
title:"The Realisation",
text:"Loss was not punishment. It was a lesson teaching me who I am."
},
{
title:"The Awakening",
text:"Some people come to stay. Some come to awaken you."
}

];

/* STORY FLOW */
function nextStory(){

if(storyStep < storyData.length){

message.classList.add("hidden");

story.classList.remove("hidden");
story.classList.add("show");

storyTitle.innerText=storyData[storyStep].title;
storyContent.innerText=storyData[storyStep].text;

storyStep++;

}else{

story.classList.remove("show");
awakening.classList.remove("hidden");
awakening.classList.add("show");

}
}

/* RESTART */
function restartJourney(){

storyStep=0;

awakening.classList.remove("show");
awakening.classList.add("hidden");

quote.classList.remove("hidden");
options.classList.add("hidden");
message.classList.add("hidden");

bg.classList.remove("blur");
bg.classList.remove("zoom");
}
