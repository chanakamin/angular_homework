import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { DestinationListComponent } from './components/destination-list/destination-list.component';
import { DestinationComponent } from './components/destination/destination.component';
import { OrderCardComponent } from './components/order-card/order-card.component';


@NgModule({
  declarations: [
    AppComponent,
    DestinationListComponent,
    DestinationComponent,
    OrderCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
