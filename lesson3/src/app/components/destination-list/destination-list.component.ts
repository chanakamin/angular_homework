import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { flights, Flight } from './../../classes/flight';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css']
})
export class DestinationListComponent implements OnInit {

  @Output() flightSelected: EventEmitter<Flight> = new EventEmitter<Flight>();

  public selectedFlight:Flight;
  public overedFlight: Flight;
  public flights: Flight[];
  constructor() { 
    this.flights = flights;
  }

  overFlight(flight: Flight) {
    this.overedFlight = flight;
  }

  leaveFlight() {
    this.overedFlight = null;
  }

  selectFlight(flight: Flight) {
    this.selectedFlight = flight;
    this.flightSelected.emit(flight);
  }

  ngOnInit() {
  }

}
