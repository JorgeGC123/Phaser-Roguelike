class asciidisplay {

    constructor(ROWS, COLS) {
        this.ROWS = ROWS;
        this.COLS = COLS;
        this.style = { font: FONT + "px monospace", fill: "#fff" }; // style hardcodeado
        this.display = [];
    }

    getDisplay(y,x){
        return this.display[y][x];
    }
    setDisplay(y,x, value){
        this.display[y][x].content = value;
    }
    createDisplay(game){
        
        for (var y = 0; y < ROWS; y++) {
            var newRow = [];
            this.display.push(newRow);
            for (var x = 0; x < COLS; x++)
                newRow.push(game.add.text(FONT * 0.6 * x, FONT * y, '', this.style)); // add a single cell in a given position to the ascii display
        }
        return this.display;
    }

    initActors(numActors, actorList, actorMap, livingEnemies) {
        //create actors at random locations
        for (var e = 0; e < numActors; e++) {
            // create new actor
            var a = new actor(0,0,e == 0 ? 3 : 1,'e');
            a.setNombre('Enemigo '+e);
            do {
                // pick a random position that is both a floor and not occupied
                a.y = Math.floor(Math.random() * ROWS);
                a.x = Math.floor(Math.random() * COLS);
            } while (mapa.getPosition(a.y, a.x) == '#' || actorMap[a.y + "_" + a.x] != null);
    
            // add references to the actor to the actors list & map
            actorMap[a.y + "_" + a.x] = a;
            actorList.push(a);
        }
    
        // the player is the first actor in the list
        player = actorList[0];
        player.name = 'Player';
        player.icon = player.hp;
        livingEnemies = ACTORS - 1;
        

    }
    drawActors(actorList) {
        for (var a in actorList) {  
            if (actorList[a].hp > 0) {
                if(a == 0){             
                    this.setDisplay(actorList[a].y, actorList[a].x, '' + player.icon);
                }else{
                    this.setDisplay(actorList[a].y, actorList[a].x, actorList[a].icon);
                }
            }
        }
    }


}
