import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company?: {
    name: string;
  };
}

@Component({
  selector: 'app-que17',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './que17.component.html',
  styleUrl: './que17.component.css'
})
export class Que17Component implements OnInit {
  users: User[] = [];
  users$!: Observable<User[]>;
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // 1. http.get() creates an Observable stream
    this.users$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');

    // 2. subscribe() activates the Observable stream and handles the emitted data
    this.users$.subscribe({
      next: (data) => {
        this.users = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
        this.errorMessage = 'Failed to load user list.';
        this.isLoading = false;
      }
    });
  }
}
