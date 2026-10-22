import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { Que24Component } from './que24.component';

describe('Que24Component', () => {
  let component: Que24Component;
  let fixture: ComponentFixture<Que24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Que24Component, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Que24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dynamically add subjects to FormArray', () => {
    const initialCount = component.subjects.length;
    component.addSubject('Science', 92);
    expect(component.subjects.length).toBe(initialCount + 1);
  });

  it('should dynamically remove subjects from FormArray', () => {
    const initialCount = component.subjects.length;
    component.removeSubject(0);
    expect(component.subjects.length).toBe(initialCount - 1);
  });
});
