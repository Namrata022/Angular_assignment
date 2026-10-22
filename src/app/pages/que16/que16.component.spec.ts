import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { Que16Component } from './que16.component';

describe('Que16Component', () => {
  let component: Que16Component;
  let fixture: ComponentFixture<Que16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Que16Component],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Que16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
