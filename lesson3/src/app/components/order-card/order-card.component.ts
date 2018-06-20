import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Flight } from '../../classes/flight';
import { classesPrice } from '../../classes/class-enum';
import { FlightCard, cards } from '../../classes/flight-card';
import { Schedule } from '../../classes/schedule';


@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {
  @Input() flight: Flight;
  @Output() ticketOrdered: EventEmitter<any> = new EventEmitter<any>();

  public classes = classesPrice;
  public selectedClass = this.classes[0];
  public flightTime: Schedule;

  constructor() { 
  }

  ngOnInit() {
  }

  orderTicket(name: string) {
    let ticket = new FlightCard(name, this.flight, this.selectedClass.value, this.flightTime)
    cards.push(ticket);
    this.ticketOrdered.emit();
  }

}
