import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    TeachersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
