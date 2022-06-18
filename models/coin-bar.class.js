class CoinBar extends DrawableObject {

IMAGES = [
    'img/7.Marcadores/Barra/Marcador_moneda/Verde/000.png',
    'img/7.Marcadores/Barra/Marcador_moneda/Verde/020.png',
    'img/7.Marcadores/Barra/Marcador_moneda/Verde/040.png',
    'img/7.Marcadores/Barra/Marcador_moneda/Verde/060.png',
    'img/7.Marcadores/Barra/Marcador_moneda/Verde/080.png',
    'img/7.Marcadores/Barra/Marcador_moneda/Verde/100.png'
]

percentage = 100;

constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.setPercentage(100);
    this.x = 10;
    this.y = 60;
    this.width = 140;
    this.height = 40;
}

setPercentage(percentage) {
    this.percentage = percentage; 
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
}

resolveImageIndex() {
    if (this.percentage == 100) {
        return 5;
    } else if (this.percentage > 80) {
        return 4;
    } else if (this.percentage > 60) {
        return 3;
    } else if (this.percentage > 40) {
        return 2;
    } else if (this.percentage > 20) {
        return 1;
    } else {
        return 0;
    }

}
}