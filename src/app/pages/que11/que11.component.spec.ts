import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Que11Component } from './que11.component';

describe('Que11Component', () => {
  let component: Que11Component;
  let fixture: ComponentFixture<Que11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Que11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Que11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
