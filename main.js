//---------------------------------------------------------------------------
class apartments {
    constructor(type, color, floor, square, rooms) {
        this.type = type;
        this.color = color;
        this.floor = floor;
        this.square = square;
        this.rooms = rooms;
    }
    rooms() {
        console.log(this.rooms)
    }
}
class flat extends apartments {
    constructor(type, color, floor, square, rooms, number, roof_color) {
        super(type, color, floor, square, rooms);
        this.number = number;
        this.roof_color = roof_color;
    }
    roof_color(){
        console.log(`flat: ${this.number}\nRoof_color: ${this.roof_color}`)
    }
}

const Bai = new flat (
    'квартира',
    'бежевый',
    '9',
    '100',
    '3',
    '53',
    'красный'
)
console.log(Bai);


// 222222222222222222222222222222------------------------------


class apartment {
    constructor(sofa, armchairs, chairs, table, floor_lamp, clocks, picture,
                bed, cupboard, windows, doors, lamps, pillows, blanket, plants) {
        this.sofa = sofa;
        this.armchairs = armchairs;
        this.chairs =chairs;
        this.table =table;
        this.floor_lamp = floor_lamp;
        this.clocks = clocks;
        this.picture = picture;
        this.bed = bed;
        this.cupboard = cupboard;
        this.windows = windows;
        this.doors =doors;
        this.lamps = lamps;
        this.pillows = pillows;
        this.blanket = blanket;
        this.plants = plants;
    }
    plants () {
        console.log(this.plants)
    }
}
class flat extends apartment {
    constructor(sofa, armchairs, chairs, table, floor_lamp, clocks, picture,
                bed, cupboard, windows, doors, lamps, pillows, blanket, plants,
                easel, sculpture) {
        super(sofa, armchairs, chairs, table, floor_lamp, clocks, picture,
                bed, cupboard, windows, doors, lamps, pillows, blanket, plants);
        this.easel = easel;
        this.sculpture = sculpture;
    }
    sculpture(){
        console.log(`flat: ${this.easel}\nSculpture: {this.sculpture`)
    }
}
const Bai = new flat(
    'red',
    'white',
    'grey',
    'white',
    'white',
    'gold',
    '50x50',
    'white',
    'grey',
    'brown',
    'white',
    'gold',
    'blue',
    'pink',
    'roses',
    'wool',
    'David'
)
console.log(Bai);


