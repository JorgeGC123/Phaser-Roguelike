class map {

    constructor(ROWS, COLS) {
        this.ROWS = ROWS;
        this.COLS = COLS;
        this.matriz = [];
        for (var y = 0; y < this.ROWS; y++) {
            var newRow = [];
            for (var x = 0; x < this.COLS; x++) {
                if (Math.random() > 0.8) {
                    newRow.push('#'); //impasable
                }
                else
                    newRow.push('.'); //terreno pasable
            }
            this.matriz.push(newRow); //vamos creando la matriz por filas
        }
        this.matriz[Math.floor(Math.random() * ROWS)][Math.floor(Math.random() * COLS)] = 'X'; //genero la salida del mapa en algún punto aleatorio del mismo

    }
    getMatriz() {
        return this.matriz;
    }
    logMatriz() {
        console.table(this.matriz);
    }
    getRows() {
        return this.ROWS;
    }
    getCols() {
        return this.COLS;
    }
    getPosition(y,x){
        return this.matriz[y][x];
    }
    static drawMap(display, matrix) {
        for (var y = 0; y < ROWS; y++)
            for (var x = 0; x < COLS; x++)
                display[y][x].content = matrix[y][x];
    }
}