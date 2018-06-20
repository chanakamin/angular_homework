import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Flight } from './../../classes/flight'

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  @Input() flight: Flight;
  @Output() order: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  orderTicket() {
    this.order.emit();
  }

}
