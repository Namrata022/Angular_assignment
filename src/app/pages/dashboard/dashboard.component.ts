import { Component } from '@angular/core';

interface DashboardData {
  totalStudents: number;
  totalCourses: number;
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

// 6.  Use Angular CLI to generate a new component 
// i.  
// ii.  
// Run ng generate component dashboard to create a new component. 
// Display summary data such as "Total Students" and "Total Courses".
export class DashboardComponent implements DashboardData {
  
    totalStudents = 100;
    totalCourses = 10;
}
