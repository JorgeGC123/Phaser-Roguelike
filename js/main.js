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
            acted = moveTo(player, { x: -1, y: 0 });
            break;

        case Phaser.Keyboard.RIGHT:
            acted = moveTo(player, { x: 1, y: 0 });
            break;

        case Phaser.Keyboard.UP:
            acted = moveTo(player, { x: 0, y: -1 });
            break;

        case Phaser.Keyboard.DOWN:
            acted = moveTo(player, { x: 0, y: 1 });
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

        while (!moveTo(actor1, directions[Math.floor(Math.random() * directions.length)])) { };

    // otherwise walk towards player
    if (Math.abs(dx) > Math.abs(dy)) {
        console.log(actor1.name + ': Te voy a matar hijode puta');
        if (dx < 0) {
            // left
            moveTo(actor1, directions[0]);
        } else {
            // right
            moveTo(actor1, directions[1]);
        }
    } else {
        if (dy < 0) {
            // up
            moveTo(actor1, directions[2]);
        } else {
            // down
            moveTo(actor1, directions[3]);
        }
    }
    if (player.hp < 1) {
        // game over message
        var gameOver = game.add.text(game.world.centerX, game.world.centerY, 'Game Over\nCtrl+r to restart', { fill: '#e22', align: "center" });
        gameOver.anchor.setTo(0.5, 0.5);
    }
}


function moveTo(actor1, dir) {
    // check if actor1 can move in the given direction
    if (!actor1.canGo(mapa, dir))
        return false;

    // moves actor1 to the new location
    var newKey = (actor1.y + dir.y) + '_' + (actor1.x + dir.x);
    // if the destination tile has an actor1 in it 
    if (actorMap[newKey] != null) {
        console.log(actor1.name + ': TOMA HOSTIA CABRÓN CON NOMBRE ' + actorMap[newKey].name)
        //decrement hitpoints of the actor1 at the destination tile
        var victim = actorMap[newKey];
        victim.hp--;

        // if it's dead remove its reference 
        if (victim.hp == 0) {
            console.log(victim.name + ': ME MORÍ! NOOO :(')
            actorMap[newKey] = null;
            //actorList[actorList.indexOf(victim)] = null;
            var index = actorList.indexOf(victim);
            if (index > -1) {
                actorList.splice(index, 1);
            }
            if (victim != player) {
                livingEnemies--;
                if (livingEnemies == 0) {
                    // victory message
                    var victory = game.add.text(game.world.centerX, game.world.centerY, 'Victory!\nCtrl+r to restart', { fill: '#2e2', align: "center" });
                    victory.anchor.setTo(0.5, 0.5);
                }
            }
        }
    } else {
        // remove reference to the actor1's old position
        actorMap[actor1.y + '_' + actor1.x] = null;

        // update position
        actor1.y += dir.y;
        actor1.x += dir.x;

        // add reference to the actor1's new position
        actorMap[actor1.y + '_' + actor1.x] = actor1;
    }
    return true;
}



