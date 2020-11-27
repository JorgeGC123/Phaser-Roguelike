class actor {
 
    constructor(x,y,hp,icon) {
       this.x = x || 0;
       this.y = y || 0;
       this.hp = hp || 1;
       this.name ='';
       this.icon = icon;
    }
    setNombre(nombre){
        this.name = nombre;
    }
    getNombre(){
        return this.name;
    }
    
}