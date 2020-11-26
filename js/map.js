class map {

    constructor(ROWS,COLS){
        this.ROWS = ROWS;
        this.COLS = COLS;
        this.matriz = [];
        for (var y = 0; y < this.ROWS; y++) {
            var newRow = [];
            for (var x = 0; x < this.COLS; x++) {
                if (Math.random() > 0.8)
                    newRow.push('#'); //impasable
                else
                    newRow.push('.'); //terreno pasable
            }
            this.matriz.push(newRow);
        }
    }
    getMatriz(){
        return this.matriz;
    }
    getRows(){
        return this.ROWS;
    }
    getCols(){
        return this.COLS;
    }
    static drawMap(display, matrix) {
        for (var y = 0; y < ROWS; y++)
            for (var x = 0; x < COLS; x++)
                display[y][x].content = matrix[y][x];
    }
}