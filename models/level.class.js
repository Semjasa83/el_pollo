class Level {
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 3500;

    /**
     * transfers all values ​​of the levels to the variable
     * 
     * @param {*} enemies - enemies from Level1 ... Level2 etc 
     * @param {*} clouds - clouds from Level1 ... Level2 etc 
     * @param {*} backgroundObjects - background objects from Level1 ... Level2 etc 
     */
    constructor(enemies, clouds, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}