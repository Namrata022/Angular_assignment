import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { Que17Component } from './que17.component';

describe('Que17Component', () => {
  let component: Que17Component;
  let fixture: ComponentFixture<Que17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Que17Component],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Que17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
