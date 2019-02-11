const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// gebouwen en kaarten
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

const cardArr = [towerLeft, towerRight, archers, ice_spirit, musketiers, skelet, valkerie, wizzard];
console.log(cardArr[0]);

c.fillStyle = 'blue';
c.fillRect(700, 0, 100, 670);

c.fillStyle = "brown";
//paden tussen archer towers
c.fillRect(370, 50, 750, 80);
c.fillRect(370, 370, 750, 80);
//paden bij main tower
c.fillRect(300, 50, 80, 400);
c.fillRect(1130, 50, 80, 400);



window.onload = function(){
c.drawImage(towerLeft, 180, 200);
c.drawImage(towerRight, 1200, 200);

c.drawImage(towerLeft, 350, 35);
c.drawImage(towerLeft, 350, 355);

c.drawImage(towerRight, 1050, 32);
c.drawImage(towerRight, 1050, 352);

c.drawImage(elixer, 50, 590, 40, 60);
c.drawImage(elixer, 50, 520, 40, 60);
};
