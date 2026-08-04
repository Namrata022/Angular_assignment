import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Que2Component } from './pages/que2/que2.component';
import { Que5Component } from './pages/que5/que5.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Que7Component } from './pages/que7/que7.component';
import { Que8Component } from './pages/que8/que8.component';
import { FormsModule } from '@angular/forms';
import { Que9Component } from './pages/que9/que9.component';
import { Que10Component } from './pages/que10/que10.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Que2Component,Que5Component,DashboardComponent,RouterLink,Que7Component,Que8Component,Que9Component,Que10Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
 
export class AppComponent {
  title = 'assignment';
}
