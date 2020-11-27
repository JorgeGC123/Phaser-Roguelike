// font size
var FONT = 32;

// map dimensions
const ROWS = 15;
const COLS = 25;

// number of actors per level, including player
var ACTORS = 10;

// the structure of the map
var mapa = new map(ROWS, COLS);

//display en ascii


// a list of all actors, 0 is the player -> convertir en clases
var player;
var actorList;
var livingEnemies;

// points to each actor in its position, for quick searching
var actorMap;

// initialize phaser, call create() once done
var game = new Phaser.Game(COLS * FONT * 0.6, ROWS * FONT, Phaser.AUTO, 'xd', { create: create, });
var display1 = new asciidisplay(ROWS, COLS);

function create() {
    // init keyboard commands
    game.input.keyboard.addCallbacks(null, null, onKeyUp);

    // initialize actors
    initActors();

    // initialize map
    map.drawMap(display1.createDisplay(game), mapa.getMatriz());

    mapa.logMatriz();

    drawActors();
}



function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function initActors() {
    // create actors at random locations
    actorList = [];
    actorMap = {};
    for (var e = 0; e < ACTORS; e++) {
        // create new actor
        var actor = {
            x: 0,
            y: 0,
            hp: e == 0 ? 3 : 1
        };
        do {
            // pick a random position that is both a floor and not occupied
            actor.y = randomInt(ROWS);
            actor.x = randomInt(COLS);
        } while (mapa.getPosition(actor.y, actor.x) == '#' || actorMap[actor.y + "_" + actor.x] != null);

        // add references to the actor to the actors list & map
        actorMap[actor.y + "_" + actor.x] = actor;
        actorList.push(actor);
    }

    // the player is the first actor in the list
    player = actorList[0];
    livingEnemies = ACTORS - 1;
}

function drawActors() {
    for (var a in actorList) {
        if (actorList[a].hp > 0) {
            display1.getDisplay(actorList[a].y, actorList[a].x).content = a == 0 ? '' + player.hp : 'e';
        }
    }
}

function onKeyUp(event) {
    switch (event.keyCode) {
        case Phaser.Keyboard.LEFT:

        case Phaser.Keyboard.RIGHT:

        case Phaser.Keyboard.UP:

        case Phaser.Keyboard.DOWN:
    }
}
