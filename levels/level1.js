/**
 * the more objects are entered, the more will be rendered in the game.
 * 
 * @param {Array} array - sets the Enemies for Level 1
 */

const level1 = new Level(
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
        new Bottles('img/6.botella/1.Marcador.png', 340, 220),
        new Bottles('img/6.botella/1.Marcador.png', 340, 90),
        new Bottles('img/6.botella/1.Marcador.png', 400, 90),
        new Bottles('img/6.botella/1.Marcador.png', 400, 220),
        new Bottles('img/6.botella/2.Botella_enterrada1.png', 950, 340),
        new Bottles('img/6.botella/2.Botella_enterrada2.png', 1050, 340),
        new Bottles('img/6.botella/1.Marcador.png', 1340, 220),
        new Bottles('img/6.botella/1.Marcador.png', 1340, 75),
        new Bottles('img/6.botella/1.Marcador.png', 1600, 75),
        new Bottles('img/6.botella/1.Marcador.png', 1600, 220),
        new Bottles('img/6.botella/2.Botella_enterrada1.png', 1950, 340),
        new Bottles('img/6.botella/2.Botella_enterrada2.png', 2500, 340),
        new Bottles('img/6.botella/2.Botella_enterrada1.png', 2350, 340),
        new Bottles('img/6.botella/2.Botella_enterrada2.png', 2500, 340),
    ],
    [
        new Coins('img/8.Coin/Moneda1.png', 500, 80),
        new Coins('img/8.Coin/Moneda1.png', 500, 340),
        new Coins('img/8.Coin/Moneda1.png', 700, 80),
        new Coins('img/8.Coin/Moneda1.png', 700, 340),
        new Coins('img/8.Coin/Moneda1.png', 999, 340),
        new Coins('img/8.Coin/Moneda1.png', 999, 80),
        new Coins('img/8.Coin/Moneda1.png', 1200, 340),
        new Coins('img/8.Coin/Moneda1.png', 1200, 80),
        new Coins('img/8.Coin/Moneda1.png', 2100, 340),
        new Coins('img/8.Coin/Moneda1.png', 2100, 80),
    ],
);