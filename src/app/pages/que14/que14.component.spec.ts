import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Que14Component } from './que14.component';

describe('Que14Component', () => {
  let component: Que14Component;
  let fixture: ComponentFixture<Que14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Que14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Que14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
