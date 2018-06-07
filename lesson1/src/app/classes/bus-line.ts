import { BusStation, stations } from "./bus-station";
import { Time } from "./time";

export class BusLine {
    public number: number;
    public stations: Array<{station: BusStation, minutes: number}>;

    /**
     *
     */
    constructor(_number: number, _stations: Array<{station: BusStation, minutes: number}> = []) {
        this.number = _number;
        this.stations = _stations
    }

    public busStations() :Array<BusStation> {
        return this.stations.map(s => s.station);
    }
}

export const lines: BusLine[] = [
    new BusLine(100, [
        {station: stations[0], minutes: 0 },
        {station: stations[3], minutes: 15 },
        {station: stations[4], minutes: 4 },
    ]),
    new BusLine(200, [
        {station: stations[0], minutes: 0 },
        {station: stations[1], minutes: 10 },
        {station: stations[2], minutes: 10 },
    ]),
    new BusLine(300, [
        {station: stations[4], minutes: 0 },
        {station: stations[3], minutes: 5 },
        {station: stations[2], minutes: 10 },
    ]),
    new BusLine(400, [
        {station: stations[4], minutes: 0 },
        {station: stations[3], minutes: 5 },
        {station: stations[0], minutes: 16 },
    ])
];

export const busSchedule: Array<{bus: BusLine, time: Time}> = [
    {bus: lines[0], time: new Time(19, 0)},
    {bus: lines[1], time: new Time(19, 5)},
    {bus: lines[2], time: new Time(19, 10)},
    {bus: lines[3], time: new Time(19, 20)},
    {bus: lines[0], time: new Time(19, 25)},
    {bus: lines[1], time: new Time(19, 30)}
]
