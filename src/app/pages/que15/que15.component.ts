import { Component, OnInit } from '@angular/core';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-que15',
  standalone: true,
  imports: [StudentListComponent],
  templateUrl: './que15.component.html',
  styleUrl: './que15.component.css'
})
export class Que15Component implements OnInit {
  totalStudents: number = 0;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.totalStudents = this.studentService.getAllStudents().length;
  }
}
