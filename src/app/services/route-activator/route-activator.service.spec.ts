import { TestBed } from '@angular/core/testing';

import { RouteActivator } from './route-activator.service';

describe('RouteActivator', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteActivator = TestBed.get(RouteActivator);
    expect(service).toBeTruthy();
  });
});
