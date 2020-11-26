// font size
var FONT = 32;

// map dimensions
const ROWS = 10;
const COLS = 15;

// number of actors per level, including player
var ACTORS = 10;

// the structure of the map
var mapa = new map(ROWS,COLS);
//display 
display1= new asciidisplay(ROWS,COLS);  

// initialize phaser, call create() once done
var game = new Phaser.Game(COLS * FONT * 0.6, ROWS * FONT, Phaser.AUTO, 'xd', {  create: create, });

function create() {
    // init keyboard commands
    game.input.keyboard.addCallbacks(null, null, onKeyUp);

    // initialize map
    matriz = mapa.initMap();
    map.drawMap(display1.createDisplay());
}

function onKeyUp(event) {
    switch (event.keyCode) {
        case Phaser.Keyboard.LEFT:

        case Phaser.Keyboard.RIGHT:

        case Phaser.Keyboard.UP:

        case Phaser.Keyboard.DOWN:

    }
}
