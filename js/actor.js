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
  
}