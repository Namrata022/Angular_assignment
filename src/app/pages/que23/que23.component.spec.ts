import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { Que23Component } from './que23.component';

describe('Que23Component', () => {
  let component: Que23Component;
  let fixture: ComponentFixture<Que23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Que23Component, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Que23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reject password without special character or number', () => {
    component.registerForm.get('password')?.setValue('Password');
    expect(component.registerForm.get('password')?.valid).toBeFalse();
  });

  it('should accept password with capital, number, and special character', () => {
    component.registerForm.get('password')?.setValue('Password123!');
    expect(component.registerForm.get('password')?.valid).toBeTrue();
  });
});
