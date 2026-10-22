import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

export interface StudentAdmission {
  name: string;
  email: string;
  gender: string;
  course: string;
}

@Component({
  selector: 'app-que21',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './que21.component.html',
  styleUrl: './que21.component.css'
})
export class Que21Component {
  admission: StudentAdmission = {
    name: '',
    email: '',
    gender: '',
    course: ''
  };

  courses: string[] = ['Angular Masterclass', 'React & Next.js', 'Vue & Nuxt', 'Node.js & Express', 'Full Stack Development'];

  submittedData: StudentAdmission | null = null;

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.submittedData = { ...this.admission };
    }
  }

  resetForm(form: NgForm): void {
    form.resetForm();
    this.submittedData = null;
  }
}
