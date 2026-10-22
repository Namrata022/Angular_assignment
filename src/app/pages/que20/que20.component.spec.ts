import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Que20Component } from './que20.component';

describe('Que20Component', () => {
  let component: Que20Component;
  let fixture: ComponentFixture<Que20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Que20Component],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Que20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
