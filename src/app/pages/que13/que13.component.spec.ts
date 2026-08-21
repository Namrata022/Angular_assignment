import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Que13Component } from './que13.component';

describe('Que13Component', () => {
  let component: Que13Component;
  let fixture: ComponentFixture<Que13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Que13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Que13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
