import { Component } from '@angular/core';

@Component({
  selector: 'app-que7',
  standalone: true,
  imports: [],
  templateUrl: './que7.component.html',
  styleUrl: './que7.component.css'
})
export class Que7Component {
  students = [
    {
      photo: 'https://tse3.mm.bing.net/th/id/OIP.gL_xPlR5vIVlogIJS5E0KAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      name: 'Namrata',
      course: 'Msc IT',
      marks: 98
    },
    {
      photo: 'https://tse1.mm.bing.net/th/id/OIP.SmcaqeDHBp_QIfvGz0LcrwHaHa?r=0&w=996&h=996&rs=1&pid=ImgDetMain&o=7&rm=3',
      name: 'Nency',
      course: 'MCA',
      marks: 88
    },
    {
      photo: 'https://img.freepik.com/premium-photo/cartoon-illustration-girl-with-book-pencils_1015532-3573.jpg',
      name: 'Trusha',
      course: 'BSc IT',
      marks: 95
    },
    {
      photo: 'https://static.vecteezy.com/system/resources/previews/045/963/210/large_2x/cute-cartoon-boy-student-isolated-on-transparent-background-png.png',
      name: 'Mayur',
      course: 'B.Tech',
      marks: 81
    }
  ];
}
