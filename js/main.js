// font size
var FONT = 32;

// map dimensions
const ROWS = 15;
const COLS = 25;

// number of actors per level, including player
var ACTORS = 10;

// the structure of the map
var mapa = new map(ROWS,COLS);

//display en ascii
display1= new asciidisplay(ROWS,COLS);  

// a list of all actors, 0 is the player -> convertir en clases
var player;
var actorList;
var livingEnemies;

// points to each actor in its position, for quick searching
var actorMap;

// initialize phaser, call create() once done
var game = new Phaser.Game(COLS * FONT * 0.6, ROWS * FONT, Phaser.AUTO, 'xd', {  create: create, });

function create() {
    // init keyboard commands
    game.input.keyboard.addCallbacks(null, null, onKeyUp);

    // initialize map
    map.drawMap(display1.createDisplay(), mapa.getMatriz());
    mapa.logMatriz();
}

function onKeyUp(event) {
    switch (event.keyCode) {
        case Phaser.Keyboard.LEFT:

        case Phaser.Keyboard.RIGHT:

        case Phaser.Keyboard.UP:

        case Phaser.Keyboard.DOWN:
    }
}
