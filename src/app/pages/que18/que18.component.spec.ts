import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Que18Component } from './que18.component';

describe('Que18Component', () => {
  let component: Que18Component;
  let fixture: ComponentFixture<Que18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Que18Component],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Que18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
