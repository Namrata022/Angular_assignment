import { Injectable } from '@angular/core';

export interface Student {
  id: number;
  name: string;
  course: string;
  email?: string;
  grade?: string;
  age?: number;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    { id: 101, name: 'Alice Smith', course: 'Angular', email: 'alice@example.com', grade: 'A', age: 21 },
    { id: 102, name: 'Bob Johnson', course: 'React', email: 'bob@example.com', grade: 'B+', age: 22 },
    { id: 103, name: 'Charlie Brown', course: 'Vue', email: 'charlie@example.com', grade: 'A-', age: 20 },
    { id: 104, name: 'Diana Prince', course: 'TypeScript', email: 'diana@example.com', grade: 'A+', age: 23 }
  ];

  constructor() { }

  getAllStudents(): Student[] {
    return this.students;
  }

  getStudentById(id: number): Student | undefined {
    return this.students.find(s => s.id === id);
  }
}
