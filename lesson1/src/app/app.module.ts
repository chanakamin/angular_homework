import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { OptionsComponent } from './components/options/options.component';
import { SearchComponent } from './components/search/search.component';
import { ContentComponent } from './components/content/content.component';
import { StationComponent } from './components/station/station.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OptionsComponent,
    SearchComponent,
    ContentComponent,
    StationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
