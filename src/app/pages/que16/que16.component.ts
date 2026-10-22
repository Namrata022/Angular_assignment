import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-que16',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './que16.component.html',
  styleUrl: './que16.component.css'
})
export class Que16Component implements OnInit {
  posts: Post[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.isLoading = true;
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe({
      next: (data) => {
        this.posts = data.slice(0, 15);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching posts:', err);
        this.errorMessage = 'Failed to fetch posts from API.';
        this.isLoading = false;
      }
    });
  }
}
