import { Component } from '@angular/core';

@Component({
  selector: 'app-que2',
  standalone: true,
  imports: [],
  templateUrl: './que2.component.html',
  styleUrl: './que2.component.css'
})


// Create a user object and show the name, email, and profile photo using Angular 
// interpolation. 
// Example data: { name: 'Amit Shah', email: 'amit@example.com', age: 21 } 
export class Que2Component {
    urlImage='https://cdn-icons-png.flaticon.com/256/9307/9307950.png';
    name='Namrata Zanzrukiya';
    email='n2@example.com';
    age=21;
}
