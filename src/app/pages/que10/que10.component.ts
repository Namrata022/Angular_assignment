import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-que10',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './que10.component.html',
  styleUrl: './que10.component.css'
})
export class Que10Component {

  user = {
    name: '',
    address: '',
    phone: ''
  };

}
