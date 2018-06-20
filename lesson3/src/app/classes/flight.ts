import { places, Place } from './place';
import { Schedule } from './schedule';

export class Flight {

    constructor(
        public origin: Place, public destination: Place, public price: number, public hour_diff: number, public flight_duration: number, public schedule: Schedule[] = []
    ) {}
}

export const flights: Flight[] = [
    new Flight(places.Israel, places.New_York, 950, 7, 7, [
        new Schedule(1, 8, 20),
        new Schedule(2, 8, 20),
        new Schedule(3, 8, 20),
        new Schedule(4, 8, 20),
        new Schedule(5, 8, 20)
    ]),
    new Flight(places.Israel, places.Brazil, 1300, 6, 10, [
        new Schedule(2, 10, 30),
        new Schedule(4, 10, 30)
    ]),
    new Flight(places.Israel, places.England, 400, 2, 4.5, [
        new Schedule(1, 5, 0),
        new Schedule(2, 5, 0),
        new Schedule(3, 5, 0),
        new Schedule(4, 5, 0),
        new Schedule(5, 5, 0)
    ]),
    new Flight(places.Israel, places.France, 350, 2, 4, [
        new Schedule(1, 5, 30),
        new Schedule(2, 5, 30),
        new Schedule(3, 5, 30),
        new Schedule(4, 5, 30),
        new Schedule(5, 5, 30)
    ]),
    new Flight(places.Israel, places.Russia, 350, -1, 3.5, [
        new Schedule(1, 21, 40),
        new Schedule(3, 21, 40),
        new Schedule(5, 21, 40)
    ]),
]