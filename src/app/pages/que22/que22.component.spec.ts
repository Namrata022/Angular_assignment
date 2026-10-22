import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { Que22Component } from './que22.component';

describe('Que22Component', () => {
  let component: Que22Component;
  let fixture: ComponentFixture<Que22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Que22Component, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Que22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have invalid form initially', () => {
    expect(component.loginForm.valid).toBeFalse();
  });
});
