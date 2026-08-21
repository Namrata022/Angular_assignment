import { Component, Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector:'[OverDue]',
  standalone:true
})

export class OverDueDirective implements OnInit{
  
  @Input() OverDue!:string;

  constructor(private el: ElementRef){}

  ngOnInit(): void {
    let dueDate = new  Date(this.OverDue);
    let today = new Date();

    if(dueDate < today){
      this.el.nativeElement.style.color='red';
      this.el.nativeElement.style.backgroundColor='pink';
    }
  }
}

@Component({
  selector: 'app-que13',
  standalone: true,
  imports: [OverDueDirective],
  templateUrl: './que13.component.html',
  styleUrl: './que13.component.css'
})
export class Que13Component {

  task='Submit Assignment';

  dueDate='2026-08-5';

}
