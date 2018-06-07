let id = 0;

export class BusStation {
    public id: Number;
    public name: String;
   
    constructor(_name: string) {
        this.name = _name;
        this.id = ++id;
    }
}

export const stations: BusStation[] = [
    new BusStation('cahanman'),
    new BusStation('ezra'),
    new BusStation('chazon iish'),
    new BusStation('rabi akiva'),
    new BusStation('zabotinski')
];
