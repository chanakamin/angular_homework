import { Component, OnInit } from '@angular/core';
import { Student, students } from './../../classes/student'; 

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students = students;
  filteredStudents: Student[];
  searchStudents: string = '';
  modes: boolean[];

  filterStudents() {
    if(this.searchStudents == '') {
      this.filteredStudents = this.students;
    } else {
      this.filteredStudents = this.students.filter(st => st.name.includes(this.searchStudents));
    }
  }

  constructor() {
    this.filteredStudents = this.students;
    this.modes = this.filteredStudents.map(() => false);
   }

  ngOnInit() {
  }

}
