class map {

    constructor(ROWS,COLS){
        this.ROWS = ROWS;
        this.COLS = COLS;
        
    }

    initMap() {
        // create a new random map
        var matriz = [];
        for (var y = 0; y < this.ROWS; y++) {
            var newRow = [];
            for (var x = 0; x < this.COLS; x++) {
                if (Math.random() > 0.8)
                    newRow.push('#');
                else
                    newRow.push('.');
            }
            matriz.push(newRow);
        }
        return matriz;
    }
    getRows(){
        return this.ROWS;
    }
    getCols(){
        return this.COLS;
    }
    static drawMap(display) {
        for (var y = 0; y < ROWS; y++)
            for (var x = 0; x < COLS; x++)
                display[y][x].content = matriz[y][x];
    }
}