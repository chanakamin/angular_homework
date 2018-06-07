import { Component, OnInit } from '@angular/core';
import { lines, busSchedule, BusLine } from "./../../classes/bus-line";
import { stations, BusStation} from "./../../classes/bus-station";
import { Time } from "./../../classes/time";
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {

  currentStation: BusStation;
  currentTime: Time;
  lines: Array<{bus: BusLine, timeFromNow: number}>

  constructor() { 
    let ind = Math.floor(Math.random() * stations.length);
    this.currentStation = stations[ind];

    this.currentTime = new Time(19, Math.floor(Math.random() * 15) + 5);

    let lines_in_station = lines.filter( l => l.busStations().includes(this.currentStation));
    let lines_in_station_from_schedule = busSchedule.filter(ls => lines_in_station.includes(ls.bus));

    this.lines = lines_in_station_from_schedule.map(line => {
      let stations_till_current = line.bus.stations.slice(0, line.bus.busStations().indexOf(this.currentStation) + 1);

      let time_from_begin = stations_till_current.reduce((result: number, next) => {
        return result + next.minutes;
      }, 0)

      let real_minute = line.time.minutes + time_from_begin;
      let minutes_from_now = real_minute - this.currentTime.minutes;
      
      return {
        bus: line.bus,
        timeFromNow: minutes_from_now
      }
    })

    this.lines = this.lines.filter(l => l.timeFromNow >= 0);
    this.lines = this.lines.sort((first, second) => first.timeFromNow - second.timeFromNow);
  }

  ngOnInit() {
  }

}
