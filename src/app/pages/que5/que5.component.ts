import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

enum Course{
  'IMscit'='IMscit',
  'IMCA'='IMCA',
  'IMBA'='IMBA',
  'MCA'='MCA'
}
@Component({
  selector: 'app-que5',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './que5.component.html',
  styleUrl: './que5.component.css'
})

export class Que5Component {
  courseList: any = Object.values(Course);
  selectedCourse: any = "";
}
