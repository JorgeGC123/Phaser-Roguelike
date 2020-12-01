class ai {
    constructor(x){
        this.x = x;
    }
    static aiAct(actor1) {
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
    static canGo(actor1, dir) {
        return actor1.x + dir.x >= 0 &&
            actor1.x + dir.x <= COLS - 1 &&
            actor1.y + dir.y >= 0 &&
            actor1.y + dir.y <= ROWS - 1 &&
            mapa.getPosition(actor1.y + dir.y, actor1.x + dir.x) == '.';
    }

    static moveTo(actor1, dir) {
        // check if actor1 can move in the given direction
        if (!ai.canGo(actor1, dir))
            return false;

        // moves actor1 to the new location
        var newKey = (actor1.y + dir.y) + '_' + (actor1.x + dir.x);
        // if the destination tile has an actor1 in it 
        if (actor1Map[newKey] != null) {
            console.log(actor1.name + ': TOMA HOSTIA CABRÓN CON NOMBRE ' + actor1Map[newKey].name)
            //decrement hitpoints of the actor1 at the destination tile
            var victim = actor1Map[newKey];
            victim.hp--;

            // if it's dead remove its reference 
            if (victim.hp == 0) {
                console.log(victim.name + ': ME MORÍ! NOOO :(')
                actor1Map[newKey] = null;
                //actor1List[actor1List.indexOf(victim)] = null;
                var index = actor1List.indexOf(victim);
                if (index > -1) {
                    actor1List.splice(index, 1);
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
            actor1Map[actor1.y + '_' + actor1.x] = null;

            // update position
            actor1.y += dir.y;
            actor1.x += dir.x;

            // add reference to the actor1's new position
            actor1Map[actor1.y + '_' + actor1.x] = actor1;
        }
        return true;
    }
}