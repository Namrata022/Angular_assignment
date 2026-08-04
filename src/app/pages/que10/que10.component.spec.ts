import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Que10Component } from './que10.component';

describe('Que10Component', () => {
  let component: Que10Component;
  let fixture: ComponentFixture<Que10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Que10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Que10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
