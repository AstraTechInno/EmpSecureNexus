import { TestBed } from '@angular/core/testing';

import { EmployeeRegistration } from './employee-registration';

describe('EmployeeRegistration', () => {
  let service: EmployeeRegistration;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeRegistration);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
