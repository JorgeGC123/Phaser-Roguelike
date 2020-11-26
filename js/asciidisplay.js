class asciidisplay {

    constructor(ROWS, COLS) {
        this.ROWS = ROWS;
        this.COLS = COLS;
        this.style = { font: FONT + "px monospace", fill: "#fff" }; // style hardcodeado

    }

    createDisplay() {
        var display = [];
        for (var y = 0; y < ROWS; y++) {
            var newRow = [];
            display.push(newRow);
            for (var x = 0; x < COLS; x++)
                newRow.push(game.add.text(FONT * 0.6 * x, FONT * y, '', this.style));// add a single cell in a given position to the ascii display

        }
        return display;
    }
}