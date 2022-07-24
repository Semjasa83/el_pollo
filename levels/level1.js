/**
 * the more objects are entered, the more will be rendered in the game.
 * 
 * @param {Array} array - sets the Enemies for Level 1
 */

let level1 

function initLevel() {

level1 = new Level(
    [
        new Endboss(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken()
    ],
    [
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
    ],
    [
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719 * 2),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', -719 * 2),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', -719 * 2),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', -719 * 2),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -719),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -719),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),
    ],
    [
        new Bottles('img/6.botella/1.Marcador.png', 240, 240),
        new Bottles('img/6.botella/1.Marcador.png', 300, 210),
        new Bottles('img/6.botella/1.Marcador.png', 360, 180),
        new Bottles('img/6.botella/1.Marcador.png', 420, 150),
        new Bottles('img/6.botella/2.Botella_enterrada1.png', 950, 340),
        new Bottles('img/6.botella/2.Botella_enterrada2.png', 1150, 340),
        new Bottles('img/6.botella/1.Marcador.png', 1340, 240),
        new Bottles('img/6.botella/1.Marcador.png', 1400, 210),
        new Bottles('img/6.botella/1.Marcador.png', 1460, 180),
        new Bottles('img/6.botella/1.Marcador.png', 1520, 150),
        new Bottles('img/6.botella/2.Botella_enterrada1.png', 2350, 340),
        new Bottles('img/6.botella/2.Botella_enterrada2.png', 2450, 340),
        new Bottles('img/6.botella/1.Marcador.png', 3000, 150),
        new Bottles('img/6.botella/1.Marcador.png', 3060, 180),
        new Bottles('img/6.botella/1.Marcador.png', 3120, 210),
        new Bottles('img/6.botella/1.Marcador.png', 3180, 240),
        new Bottles('img/6.botella/2.Botella_enterrada1.png', 3600, 340),
        new Bottles('img/6.botella/2.Botella_enterrada2.png', 3760, 340),
    ],
    [
        new Coins('img/8.Coin/Moneda1.png', 500, 80),
        new Coins('img/8.Coin/Moneda1.png', 550, 150),
        new Coins('img/8.Coin/Moneda1.png', 600, 80),
        new Coins('img/8.Coin/Moneda1.png', 650, 150),
        new Coins('img/8.Coin/Moneda1.png', 1600, 80),
        new Coins('img/8.Coin/Moneda1.png', 1650, 150),
        new Coins('img/8.Coin/Moneda1.png', 1700, 80),
        new Coins('img/8.Coin/Moneda1.png', 1750, 150),
        new Coins('img/8.Coin/Moneda1.png', 2550, 310),
        new Coins('img/8.Coin/Moneda1.png', 2600, 310),
        new Coins('img/8.Coin/Moneda1.png', 3900, 310),
        new Coins('img/8.Coin/Moneda1.png', 3950, 310),
    ],
    );
}
