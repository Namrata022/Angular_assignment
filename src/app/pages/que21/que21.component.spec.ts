import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { Que21Component } from './que21.component';

describe('Que21Component', () => {
  let component: Que21Component;
  let fixture: ComponentFixture<Que21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Que21Component, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Que21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
