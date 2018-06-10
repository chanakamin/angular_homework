import { Component, Input, Output, EventEmitter } from '@angular/core';
import { stat } from 'fs';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent{

  @Input() line: number;
  // 1. declare the event
  @Output('station-added') stationAdded: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  addStation(station_name: string) {
    // 2. emit the event
    this.stationAdded.emit(station_name);
  }

}
