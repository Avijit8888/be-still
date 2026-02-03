const quote = document.getElementById("quote");
const options = document.getElementById("options");
const message = document.getElementById("message");
const bg = document.querySelector(".bg");

/* Tap Quote */
quote.addEventListener("click", () => {

    quote.classList.add("hidden");

    options.classList.remove("hidden");

    setTimeout(()=>{
        options.classList.add("show");
    },100);

});

/* User Choice */
function choose(type){

    options.classList.add("hidden");
    message.classList.remove("hidden");
    bg.classList.add("blur");

    let text = "";

    if(type === "listen"){
        text = "Silence speaks when ego stops listening.";
    }

    if(type === "reflect"){
        text = "Look within. Every answer already lives inside you.";
    }

    if(type === "letgo"){
        text = "Release what burdens your soul. Freedom begins with surrender.";
    }

    message.innerText = text;
}
