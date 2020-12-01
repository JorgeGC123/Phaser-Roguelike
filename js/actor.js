class actor {

    constructor(x, y, hp, icon) {
        this.x = x || 0;
        this.y = y || 0;
        this.hp = hp || 1;
        this.name = '';
        this.icon = icon;
    }
    setNombre(nombre) {
        this.name = nombre;
    }
    getNombre() {
        return this.name;
    }
    canGo(mapa, dir) {
        return this.x + dir.x >= 0 &&
            this.x + dir.x <= COLS - 1 &&
            this.y + dir.y >= 0 &&
            this.y + dir.y <= ROWS - 1 &&
            mapa.getPosition(this.y + dir.y, this.x + dir.x) == '.';
    }
    moveTo(mapa, dir) {
        // check if this can move in the given direction
        
        if (!this.canGo(mapa, dir))
            return false;
    
        // moves this to the new location
        var newKey = (this.y + dir.y) + '_' + (this.x + dir.x);
        // if the destination tile has an this in it 
        if (actorMap[newKey] != null) {
            console.log(this.name + ': TOMA HOSTIA CABRÓN CON NOMBRE ' + actorMap[newKey].name)
            //decrement hitpoints of the this at the destination tile
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
            // remove reference to the this's old position
            actorMap[this.y + '_' + this.x] = null;
    
            // update position
            this.y += dir.y;
            this.x += dir.x;
    
            // add reference to the this's new position
            actorMap[this.y + '_' + this.x] = this;
        }
        return true;
    }
}