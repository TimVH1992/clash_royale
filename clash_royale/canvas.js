const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// gebouwen en kaarten
const firstCard = document.getElementById('firstCard');
const secondCard = document.getElementById('secondCard');
const thirdCard = document.getElementById('thirdCard');
const fourthCard = document.getElementById('fourthCard');

const towerLeft = document.getElementById("towerLeft");
const towerRight = document.getElementById("towerRight");
const elixer = document.getElementById("elixer");
const archers = document.getElementById("archers");
const placeholder = document.getElementById("placeholder");
const ice_spirit = document.getElementById("ice_spirit");
const musketiers = document.getElementById("musketiers");
const skelet = document.getElementById("skelet");
const valkerie = document.getElementById("valkerie");
const wizzard = document.getElementById("wizzard");
const randomNumber = Math.floor(Math.random * 5);

const cardArr = [archers, ice_spirit, musketiers, skelet, valkerie, wizzard];

//event Listeners
firstCard.addEventListener("click", drawTroops, false);
secondCard.addEventListener("click", drawTroops, false);
thirdCard.addEventListener("click", drawTroops, false);
fourthCard.addEventListener("click", drawTroops, false);

function drawTroops() {
  c.drawImage(archers, 480, 370, 60, 80);
  
}

/* function moveTroops() {
  let x = 480;
  const dx = 2;
  for (let i = 0; i < 250; i++) {
    c.clearRect(0,0, canvas.width, canvas.height);
    c.drawImage(archers, x, 370, 60, 80);
    drawBackground();
    x += dx;
}
} */

function drawBackground() {
c.fillStyle = 'blue';
c.fillRect(700, 0, 100, 670);
c.fillStyle = "brown";
//paden tussen archer towers
c.fillRect(370, 50, 750, 80);
c.fillRect(370, 370, 750, 80);
//paden bij main tower
c.fillRect(300, 50, 80, 400);
c.fillRect(1130, 50, 80, 400);

c.drawImage(towerLeft, 180, 200);
c.drawImage(towerRight, 1200, 200);

c.drawImage(towerLeft, 350, 35);
c.drawImage(towerLeft, 350, 355);

c.drawImage(towerRight, 1050, 32);
c.drawImage(towerRight, 1050, 352);
}

// spel tekenen
function draw() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground();
  

}

draw();