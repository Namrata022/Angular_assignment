import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-que20',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './que20.component.html',
  styleUrl: './que20.component.css'
})
export class Que20Component {
  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  toggleLogin(): void {
    if (this.authService.isLoggedIn()) {
      this.authService.logout();
    } else {
      this.authService.login();
    }
  }

  navigateToAdmin(): void {
    this.router.navigate(['/admin']);
  }
}
