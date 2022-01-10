const images = ["0.jpg","1.jpg","2.jpg","3.jpg"];
const chosenimage = images[Math.floor(Math.random()*images.length)];

const backimage = document.createElement("img");
backimage.src=`IMAGE/${chosenimage}`;
document.body.appendChild(backimage);
