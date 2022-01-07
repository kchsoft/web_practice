
const title = document.querySelector('.hello h1');

console.dir(title);

function handleTitleClick(){
    title.style.color="blue";
}

function handlerMouseEnter(){
    title.innerHTML="Mouse is here";
}

function handlerMouseLeave(){
    title.innerHTML = "Mouse is gone!";
}

title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseenter",handlerMouseEnter);
title.addEventListener("mouseleave",handlerMouseLeave);