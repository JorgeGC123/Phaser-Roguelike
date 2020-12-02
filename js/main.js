// font size
var FONT = 32;

// map dimensions
const ROWS = 15;
const COLS = 25;

// number of actors per level, including player
const ACTORS = 10;

// the structure of the map
var mapa = new map(ROWS, COLS);

//display en ascii
var display1 = new asciidisplay(ROWS, COLS);

// a list of all actors, 0 is the player -> convertir en clases
var player; //se inicializan en initActors
var actorList = [];
var livingEnemies; // HAY QUE ARREGLAR ESTO

// points to each actor in its position, for quick searching
var actorMap = {};

// initialize phaser, call create() once done
var game = new Phaser.Game(COLS * FONT * 0.6, ROWS * FONT, Phaser.AUTO, 'xd', { create: create, });


function create() {
    // init keyboard commands

    game.input.keyboard.addCallbacks(null, null, onKeyUp);

    display1.initActors(ACTORS, actorList, actorMap, livingEnemies, player); //inicializa todos los actores del mapa actual
    document.getElementById("hp").innerHTML = 'Hp actual = ' + player.hp; //mostrar hp inicial
    // initialize map
    map.drawMap(display1.createDisplay(game), mapa.getMatriz());

    display1.drawActors(actorList);

}

function onKeyUp(event) {
    document.getElementById("hp").innerHTML = 'Hp actual = ' + player.hp; //convertir en inicializador
    // draw map to overwrite previous actors positions
    map.drawMap(display1.createDisplay(game), mapa.getMatriz());


    // act on player input
    var acted = false;
    switch (event.keyCode) {
        case Phaser.Keyboard.LEFT:
            acted = player.moveTo(mapa, { x: -1, y: 0 },actorList);
            break;
        case Phaser.Keyboard.RIGHT:
            acted = player.moveTo(mapa, { x: 1, y: 0 }, actorList);
            break;
        case Phaser.Keyboard.UP:
            acted = player.moveTo(mapa, { x: 0, y: -1 },actorList);
            break;
        case Phaser.Keyboard.DOWN:
            acted = player.moveTo(mapa, { x: 0, y: 1 },actorList);
            break;
        case Phaser.Keyboard.ENTER:
            acted = player.moveTo(mapa, { x: 0, y: 0 }, actorList);
            break;
    }

    // enemies act every time the player does
    if (acted)
        for (var enemy in actorList) {
            // skip the player
            if (enemy == 0)
                continue;

            var e = actorList[enemy];
            if (e != null)
                actor.aiAct(e, mapa);
        }

    // draw actors in new positions
    display1.drawActors(actorList);
    document.getElementById("hp").innerHTML = 'Hp actual = ' + player.hp; //convertir en inicializador
}





