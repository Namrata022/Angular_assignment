import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Student {
  name: string;
  marks: number;
}

@Component({
  selector: 'app-que14',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './que14.component.html',
  styleUrl: './que14.component.css'
})
export class Que14Component {
  students: Student[] = [
    { name: 'Alice', marks: 45 },
    { name: 'Bob', marks: 35 },
    { name: 'Charlie', marks: 50 },
    { name: 'Diana', marks: 38 },
    { name: 'Eve', marks: 42 }
  ];
}
