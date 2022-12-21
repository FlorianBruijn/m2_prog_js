const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set the dimensions of the canvas
canvas.width = 500;
canvas.height = 500;

// Set the starting position for the tree
let x = 250;
let y = 400;

// Set the dimensions of the tree
let width = 100;
let height = 200;

// Set the color of the tree
ctx.fillStyle = 'darkgreen';

// Draw the tree
ctx.fillRect(x - width/2, y - height, width, height);

// Set the color of the star
ctx.fillStyle = 'yellow';

// Draw the star
ctx.beginPath();
ctx.moveTo(x, y - height - 20);
ctx.lineTo(x + 10, y - height - 30);
ctx.lineTo(x + 20, y - height - 20);
ctx.lineTo(x + 10, y - height - 10);
ctx.closePath();
ctx.fill();

// Set the color of the lights
ctx.strokeStyle = 'red';

// Draw the lights
ctx.setLineDash([5, 5]);
ctx.beginPath();
ctx.moveTo(x - width/2, y - height/4);
ctx.lineTo(x + width/2, y - height/4);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(x - width/2, y - height/2);
ctx.lineTo(x + width/2, y - height/2);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(x - width/2, y - 3*height/4);
ctx.lineTo(x + width/2, y - 3*height/4);
ctx.stroke();
