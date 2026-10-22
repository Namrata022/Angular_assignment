import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Que19Component } from './que19.component';

describe('Que19Component', () => {
  let component: Que19Component;
  let fixture: ComponentFixture<Que19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Que19Component],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Que19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
