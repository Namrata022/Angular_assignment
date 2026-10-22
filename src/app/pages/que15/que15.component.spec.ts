import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Que15Component } from './que15.component';

describe('Que15Component', () => {
  let component: Que15Component;
  let fixture: ComponentFixture<Que15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Que15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Que15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
