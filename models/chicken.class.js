class Chicken extends MovableObject{ //extends MovableObject umd die inhalte von MoveObj an Chicken zu vererben
    y = 380;
    height = 50;
    width = 50;

    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');  
        
        this.x = 200 + Math.random() * 500; // Zahl zwischen 200-400; random hat zahlen zwischen 0 - 1.0
       
        this.animate();
    }

    animate() {
        setInterval( () => {
        this.x -= 0.4;
    }, 1000 / 60);
    }

}