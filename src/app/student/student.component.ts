import { Component, OnInit } from '@angular/core';
import { Student } from '../models/Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  student: Student = new Student();

  constructor() {

  }

  ngOnInit(): void {
  }

}
