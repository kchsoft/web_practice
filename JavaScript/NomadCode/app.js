const h1 = document.querySelector('.hello h1');

console.dir(h1);

function handlerOnClick(){
   h1.style.color="blue";
}

function handlerMouseEnter(){
   h1.innerHTML="Mouse is here";
}

function handlerMouseLeave(){
   h1.innerHTML = "Mouse is gone!";
}

function handerlWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handlerWindowCopy(){
   alert("copier!");
}

function handlerWindowOffline(){
   alert("SOS no wifi");
}

function handlerWindowOnline(){
   alert("ALL GOOOD!");
}

h1.addEventListener("click",handlerOnClick); // 1 way
h1.addEventListener("mouseenter",handlerMouseEnter); // 2 way 이걸 더 선호
h1.addEventListener("mouseleave",handlerMouseLeave); // removeEventListener가 가능하기 때문

window.addEventListener("resize",handerlWindowResize);
window.addEventListener("copy",handlerWindowCopy);
window.addEventListener("offline",handlerWindowOffline);
window.addEventListener("online",handlerWindowOnline);