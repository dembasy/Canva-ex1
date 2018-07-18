var c = document.getElementById('house');
var ctx = c.getContext('2d');

// Toit
ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(100, 150);
ctx.lineTo(300, 150);
ctx.closePath();
ctx.fillStyle = '#D7823E';
ctx.fill();
ctx.stroke();

// Façade
ctx.beginPath();
ctx.moveTo(100, 150);
ctx.lineTo(100, 350);
ctx.lineTo(300, 350);
ctx.lineTo(300, 150);
ctx.closePath();
ctx.fillStyle = '#A1D8E6';
ctx.fill();
ctx.stroke();

//Fenêtre Gauche
ctx.beginPath();
ctx.moveTo(120, 170);
ctx.lineTo(120, 210);
ctx.lineTo(160, 210);
ctx.lineTo(160, 170);
ctx.closePath();
ctx.fillStyle = '#c9c9c9';
ctx.fill();
ctx.stroke();

//Fenêtre Droite
ctx.beginPath();
ctx.moveTo(240, 170);
ctx.lineTo(240, 210);
ctx.lineTo(280, 210);
ctx.lineTo(280, 170);
ctx.closePath();
ctx.fillStyle = '#c9c9c9';
ctx.fill();
ctx.stroke();

// Door
ctx.beginPath();
ctx.moveTo(170, 275);
ctx.lineTo(170, 350);
ctx.lineTo(230, 350);
ctx.lineTo(230, 275);
ctx.closePath();
ctx.fillStyle = '#c9c9c9';
ctx.fill();
ctx.stroke();
