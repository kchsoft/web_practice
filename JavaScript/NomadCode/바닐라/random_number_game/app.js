const max_number = document.querySelector("#max_number");
const guess = document.querySelector("#guess");
const play_form = document.querySelector("#play_form");

const reply = document.querySelector("div span:first-child");
const result = document.querySelector("div span:last-child");

function IsPostive(value){

    if(value >= 0 ) return true;

    window.alert("Generate a positive number.");
    return false;
}


function PlayButton(event){
    event.preventDefault();
    if(!(IsPostive(max_number.value))) return;



    const target = Math.floor(Math.random()*(parseInt(max_number.value)+1));
    reply.innerHTML=`You chose: ${guess.value}, the machine chose: ${target}`;
    if(target == guess.value)
        result.innerHTML=`You won!`; 
    else
        result.innerHTML=`You lost!`;
}


play_form.addEventListener("submit",PlayButton);