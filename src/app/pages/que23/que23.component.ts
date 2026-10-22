import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Custom Validator: checks for capital letter, number, and special character
export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value || '';
    if (!value) {
      return null;
    }

    const hasCapital = /[A-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);

    const isValid = hasCapital && hasNumber && hasSpecialChar;

    if (!isValid) {
      return {
        passwordStrength: {
          hasCapital,
          hasNumber,
          hasSpecialChar
        }
      };
    }
    return null;
  };
}

@Component({
  selector: 'app-que23',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './que23.component.html',
  styleUrl: './que23.component.css'
})
export class Que23Component implements OnInit {
  registerForm!: FormGroup;
  isSubmitted: boolean = false;
  showPassword: boolean = false;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        passwordStrengthValidator()
      ])
    });
  }

  get password() {
    return this.registerForm.get('password');
  }

  get username() {
    return this.registerForm.get('username');
  }

  get hasCapital(): boolean {
    return /[A-Z]/.test(this.password?.value || '');
  }

  get hasNumber(): boolean {
    return /[0-9]/.test(this.password?.value || '');
  }

  get hasSpecialChar(): boolean {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(this.password?.value || '');
  }

  get hasMinLength(): boolean {
    return (this.password?.value || '').length >= 8;
  }

  get strengthScore(): number {
    let score = 0;
    if (this.hasMinLength) score++;
    if (this.hasCapital) score++;
    if (this.hasNumber) score++;
    if (this.hasSpecialChar) score++;
    return score;
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.isSubmitted = true;
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  onReset(): void {
    this.registerForm.reset();
    this.isSubmitted = false;
  }
}
