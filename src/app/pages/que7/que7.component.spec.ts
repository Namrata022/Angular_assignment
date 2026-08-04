import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Que7Component } from './que7.component';

describe('Que7Component', () => {
  let component: Que7Component;
  let fixture: ComponentFixture<Que7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Que7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Que7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
