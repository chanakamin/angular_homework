import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  option: number = 1;
  changeOption() {
    this.option = 3 - this.option;
  }
}
