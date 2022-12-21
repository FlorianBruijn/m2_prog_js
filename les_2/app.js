class App
{
    runApplication()
    {
        console.log("hello world!");
        let canvas = document.getElementById("1");
        let g = canvas.getContext("2d");
        let kans = Math.floor(Math.random()*2);
        let color = "yellow"
        if (kans > 0) {
            color = "#99ccff"
        }

        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(300,100);
        g.lineTo(700,200);
        g.lineTo(600,400);
        g.lineTo(200,300);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "#d9d9d9";
        g.moveTo(200,300);
        g.lineTo(200,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "#999999";
        g.moveTo(600,400);
        g.lineTo(600,600);
        g.lineTo(800,500);
        g.lineTo(800,300);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "#999999";
        g.moveTo(700,200);
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = color;
        g.moveTo(580,420);
        g.lineTo(580,580);
        g.lineTo(220,480);
        g.lineTo(220,320);
        g.closePath();
        g.stroke();
        g.fill()

        console.log(canvas);
        
    }
}

let app = new App();
app.runApplication();