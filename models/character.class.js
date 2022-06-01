class Character extends MovableObject {

    height = 230;
    constructor() { //ist bei jeder Klasse als erstes ausgeführt, wenn sie neu erstellt wird.
        super().loadImage('img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png'); //super = lädt von der übergeordneten Classe die loadImage
    
        this.x = 50;
    }

    jump(){

    }
}