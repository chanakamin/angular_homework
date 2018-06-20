import { Flight } from './flight';
import { Schedule } from './schedule';
import { Classes } from './class-enum';

export class FlightCard {

    /**
     *
     */
    constructor(public passenger: string, public flight: Flight, public _class: Classes, public time: Schedule) {

    }
}

export const cards: FlightCard[] = [];