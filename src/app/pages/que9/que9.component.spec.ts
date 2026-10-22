import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { Que9Component } from './que9.component';

describe('Que9Component', () => {
  let component: Que9Component;
  let fixture: ComponentFixture<Que9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Que9Component],
      providers: [provideHttpClient()]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Que9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
