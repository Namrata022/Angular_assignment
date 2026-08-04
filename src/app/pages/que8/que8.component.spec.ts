import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Que8Component } from './que8.component';

describe('Que8Component', () => {
  let component: Que8Component;
  let fixture: ComponentFixture<Que8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Que8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Que8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
