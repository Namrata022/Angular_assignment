import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

export interface SubjectEntry {
  subjectName: string;
  marks: number;
}

export interface StudentResultSummary {
  studentName: string;
  rollNumber: string;
  subjects: SubjectEntry[];
  totalMarks: number;
  averageMarks: number;
}

@Component({
  selector: 'app-que24',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './que24.component.html',
  styleUrl: './que24.component.css'
})
export class Que24Component implements OnInit {
  studentForm!: FormGroup;
  submittedResult: StudentResultSummary | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(2)]],
      rollNumber: ['', [Validators.required]],
      subjects: this.fb.array([])
    });

    // Add initial subjects for demonstration
    this.addSubject('Angular', 85);
    this.addSubject('TypeScript', 90);
  }

  get subjects(): FormArray {
    return this.studentForm.get('subjects') as FormArray;
  }

  createSubject(subjectName: string = '', marks: number | null = null): FormGroup {
    return this.fb.group({
      subjectName: [subjectName, [Validators.required]],
      marks: [marks, [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }

  addSubject(subjectName: string = '', marks: number | null = null): void {
    this.subjects.push(this.createSubject(subjectName, marks));
  }

  removeSubject(index: number): void {
    if (this.subjects.length > 1) {
      this.subjects.removeAt(index);
    } else {
      alert('You must have at least one subject entry!');
    }
  }

  get currentTotalMarks(): number {
    return this.subjects.controls.reduce((total, control) => {
      const marks = Number(control.get('marks')?.value) || 0;
      return total + marks;
    }, 0);
  }

  get currentAverageMarks(): number {
    return this.subjects.length > 0 ? +(this.currentTotalMarks / this.subjects.length).toFixed(2) : 0;
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      const formValue = this.studentForm.value;
      this.submittedResult = {
        studentName: formValue.studentName,
        rollNumber: formValue.rollNumber,
        subjects: formValue.subjects,
        totalMarks: this.currentTotalMarks,
        averageMarks: this.currentAverageMarks
      };
    } else {
      this.studentForm.markAllAsTouched();
    }
  }

  onReset(): void {
    this.studentForm.reset();
    while (this.subjects.length > 0) {
      this.subjects.removeAt(0);
    }
    this.addSubject('Mathematics', 80);
    this.submittedResult = null;
  }
}
