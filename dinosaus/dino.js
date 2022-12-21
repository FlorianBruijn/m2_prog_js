class dino{
    constructor(naam,leeftijd,dodelijk)
    {
        this.naam = naam;
        this.leeftijd = leeftijd;
        this.dodelijk = dodelijk;
    }
}

class App{
    runApplication(){
        let dino_1 = new dino("cool",10,true);
        console.log(dino_1);

    }

    
}
let app = new App();
app.runApplication();


