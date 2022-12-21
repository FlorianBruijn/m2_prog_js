let x = 0;
let y = 0;
let kleur_1
let kleur_2
let kleur_3
class App
{
    runApplication()
    {
        
        
        
        for(let i = 0; i < 200; i++){
            x = Math.floor(Math.random()*101+50);
            y = Math.floor(Math.random()*101+50);
            kleur_1 = Math.floor(Math.random()*256);
            kleur_2 = Math.floor(Math.random()*256);
            kleur_3 = Math.floor(Math.random()*256);
            tekenCirkel(x,y,kleur_1,kleur_2,kleur_3);
        }
        
    }
}

let app = new App();
app.runApplication();

function tekenCirkel(x,y,kleur_1,kleur_2,kleur_3){
    let canvas = document.getElementById("1");
    let ctx = canvas.getContext("2d");
    
    ctx.fillstyle = `rgb(${kleur_1}, ${kleur_2}, ${kleur_3})`;
    console.log(kleur_1,kleur_2,kleur_3);

    ctx.beginPath();
    ctx.ellipse(x, y, 2, 3, 0, 0, Math.PI * 2);
    ctx.fill();
}
