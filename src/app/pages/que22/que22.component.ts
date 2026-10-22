import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-que22',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './que22.component.html',
  styleUrl: './que22.component.css'
})
export class Que22Component implements OnInit {
  loginForm!: FormGroup;
  isSubmitted: boolean = false;
  loginSuccess: boolean = false;
  submittedEmail: string = '';
  showPassword: boolean = false;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      this.loginSuccess = true;
      this.submittedEmail = this.loginForm.value.email;
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  onReset(): void {
    this.loginForm.reset();
    this.isSubmitted = false;
    this.loginSuccess = false;
  }
}
