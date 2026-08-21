import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-que11',
  standalone: true,
  imports: [CurrencyPipe,DatePipe],
  templateUrl: './que11.component.html',
  styleUrl: './que11.component.css'
})
export class Que11Component {

  price:number=1200;
  productDate: Date=new Date('2025/05/01'); 
}
