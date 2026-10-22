import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return false initially for isLoggedIn', () => {
    expect(service.isLoggedIn()).toBeFalse();
  });

  it('should update login status after login and logout', () => {
    service.login();
    expect(service.isLoggedIn()).toBeTrue();
    service.logout();
    expect(service.isLoggedIn()).toBeFalse();
  });
});
