import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StudentService, Student } from '../../services/student.service';

@Component({
  selector: 'app-que19',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './que19.component.html',
  styleUrl: './que19.component.css'
})
export class Que19Component implements OnInit {
  students: Student[] = [];
  customId: string = '';

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.students = this.studentService.getAllStudents();
  }

  goToStudent(): void {
    if (this.customId) {
      this.router.navigate(['/student', this.customId.trim()]);
    }
  }
}
