class App {
    runaplication() {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");






        ctx.font = "30px Arial";
        ctx.fillText("merry x-mas", 110, 70);


        ctx.strokeStyle = "black"
        ctx.beginPath();
        ctx.moveTo(10, 10);
        ctx.lineTo(400, 10);
        ctx.lineTo(400, 300);
        ctx.lineTo(10, 300);
        ctx.closePath();
        ctx.stroke();


        function drawPuddle(x, y) {
            ctx.fillStyle = "lightblue"
            ctx.beginPath();
            ctx.moveTo(x + 7, y);
            ctx.lineTo(x - 7, y);

            ctx.lineTo(x - 80, y + 73);
            ctx.lineTo(x - 80, y + 87);

            ctx.lineTo(x - 5, y + 160);
            ctx.lineTo(x + 5, y + 153);

            ctx.lineTo(x - 5, y + 85);
            ctx.lineTo(x + 5, y + 77);

            ctx.lineTo(x + 65, y + 120);
            ctx.lineTo(x + 75, y + 110);

            ctx.closePath();
            ctx.fill();

            ctx.beginPath();
            ctx.arc(x, y + 4, 8, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();

            ctx.beginPath();
            ctx.arc(x - 77, y + 80, 7, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();

            ctx.beginPath();
            ctx.arc(x, y + 157, 6, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();

            ctx.beginPath();
            ctx.arc(x + 70, y + 115, 7, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();

            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(x + 2, y + 84, 7, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();

            ctx.fillStyle = "orange";

            ctx.beginPath();
            ctx.moveTo(x - 30, y + 50);
            ctx.lineTo(x - 50, y + 80);
            ctx.lineTo(x - 20, y + 60);
            ctx.closePath();
            ctx.fill();

            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.arc(x, y + 50, 2, 0, 2 * Math.PI)
            ctx.closePath();
            ctx.fill();

            ctx.beginPath();
            ctx.arc(x - 25, y + 90, 2, 0, 2 * Math.PI)
            ctx.closePath();
            ctx.fill();

            ctx.beginPath();
            ctx.arc(x - 20, y + 110, 2, 0, 2 * Math.PI)
            ctx.closePath();
            ctx.fill();

            ctx.beginPath();
            ctx.arc(x - 10, y + 40, 2, 0, 2 * Math.PI)
            ctx.closePath();
            ctx.fill();

            ctx.beginPath();
            ctx.arc(x - 15, y + 130, 2, 0, 2 * Math.PI)
            ctx.closePath();
            ctx.fill();
        }
        drawPuddle(200, 100);


        function drawTree(x, y) {
            ctx.fillStyle = "green";
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + 50, y - 50);
            ctx.lineTo(x + 100, y);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(x, y + 30);
            ctx.lineTo(x + 50, y - 20);
            ctx.lineTo(x + 100, y + 30);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(x, y + 60);
            ctx.lineTo(x + 50, y + 10);
            ctx.lineTo(x + 100, y + 60);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = "brown";
            ctx.beginPath();
            ctx.moveTo(x + 45, y + 60);
            ctx.lineTo(x + 45, y + 75);
            ctx.lineTo(x + 55, y + 75);
            ctx.lineTo(x + 55, y + 60);
            ctx.closePath();
            ctx.fill();
        }

        drawTree(500, 100);

        function drawHuis(x, y, k) {
            ctx.fillStyle = k;
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.lineTo(x - 40, y + 40);
            ctx.lineTo(x - 40, y + 120);
            ctx.lineTo(x + 40, y + 120);
            ctx.lineTo(x + 40, y + 40);
            ctx.lineTo(x - 40, y + 40);
            ctx.lineTo(x + 40, y + 40);
            ctx.lineTo(x,y);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }

        drawHuis(500, 200, "yellow");
        drawHuis(600, 200, "green");
        drawHuis(700, 200, "red");
    }
}
let app = new App();
app.runaplication();