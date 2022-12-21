class App{
    runApplication(){

        let button = document.getElementById("rerollButton")
        button.addEventListener('click',()=>{
            let stat1 = this.roll_stat();
            let stat2 = this.roll_stat();
            let stat3 = this.roll_stat();
            let stat4 = this.roll_stat();
            let stat5 = this.roll_stat();
            let stat6 = this.roll_stat();
            let headerEl1 = document.getElementById("s1");
            let headerEl2 = document.getElementById("s2");
            let headerEl3 = document.getElementById("s3");
            let headerEl4 = document.getElementById("s4");
            let headerEl5 = document.getElementById("s5");
            let headerEl6 = document.getElementById("s6");
            headerEl1.innerHTML = stat1
            headerEl2.innerHTML = stat2
            headerEl3.innerHTML = stat3
            headerEl4.innerHTML = stat4
            headerEl5.innerHTML = stat5
            headerEl6.innerHTML = stat6
        })
        

    }
    roll_dice(){
        return Math.floor(Math.random()*6+1);
    }
    roll_stat(){
        let d1 = this.roll_dice();
        let d2 = this.roll_dice();
        let d3 = this.roll_dice();
        let d4 = this.roll_dice();
        let dice_array = [d1,d2,d3,d4];
        dice_array.sort();
        let dice_som = dice_array[1] + dice_array [2] + dice_array[3];
        return(dice_som);
    }
}
let app = new App();
app.runApplication();