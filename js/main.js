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


// a list of all actors, 0 is the player -> convertir en clases
var player;
var actorList = [];
var livingEnemies;

// points to each actor in its position, for quick searching
var actorMap = {};

// initialize phaser, call create() once done
var game = new Phaser.Game(COLS * FONT * 0.6, ROWS * FONT, Phaser.AUTO, 'xd', { create: create, });
var display1 = new asciidisplay(ROWS, COLS);

function create() {
    // init keyboard commands
    game.input.keyboard.addCallbacks(null, null, onKeyUp);

    // initialize actors
    display1.initActors(ACTORS, actorList, actorMap, livingEnemies, player);

    // initialize map
    map.drawMap(display1.createDisplay(game), mapa.getMatriz());
    mapa.logMatriz();
    display1.drawActors(actorList);
}

function onKeyUp(event) {
    // draw map to overwrite previous actors positions
    map.drawMap(display1.createDisplay(game), mapa.getMatriz());
    console.log('MI HP = ' + player.hp);
    // act on player input
    var acted = false;
    switch (event.keyCode) {
        case Phaser.Keyboard.LEFT:
            acted = player.moveTo(mapa, { x: -1, y: 0 });
            break;

        case Phaser.Keyboard.RIGHT:
            acted = player.moveTo(mapa, { x: 1, y: 0 });
            break;

        case Phaser.Keyboard.UP:
            acted = player.moveTo(mapa, { x: 0, y: -1 });
            break;

        case Phaser.Keyboard.DOWN:
            acted = player.moveTo(mapa, { x: 0, y: 1 });
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
                aiAct(e);
        }

    // draw actors in new positions
    display1.drawActors(actorList);
}
function aiAct(actor1) {
    var directions = [{ x: -1, y: 0 }, { x: 1, y: 0 }, { x: 0, y: -1 }, { x: 0, y: 1 }];
    var dx = player.x - actor1.x;
    var dy = player.y - actor1.y;

    // if player is far away, walk randomly
    if (Math.abs(dx) + Math.abs(dy) > 6)
        // try to walk in random directions until you succeed once

        while (!actor1.moveTo(mapa, directions[Math.floor(Math.random() * directions.length)])) { };

    // otherwise walk towards player
    if (Math.abs(dx) > Math.abs(dy)) {
        console.log(actor1.name + ': Te voy a matar hijode puta');
        if (dx < 0) {
            // left
            actor1.moveTo(mapa,directions[0]);
        } else {
            // right
            actor1.moveTo(mapa,directions[1]);
        }
    } else {
        if (dy < 0) {
            // up
            actor1.moveTo(mapa, directions[2]);
        } else {
            // down
            actor1.moveTo(mapa, directions[3]);
        }
    }
    if (player.hp < 1) {
        // game over message
        var gameOver = game.add.text(game.world.centerX, game.world.centerY, 'Game Over\nCtrl+r to restart', { fill: '#e22', align: "center" });
        gameOver.anchor.setTo(0.5, 0.5);
    }
}




