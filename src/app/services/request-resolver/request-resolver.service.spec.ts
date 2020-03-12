import { TestBed } from '@angular/core/testing';

import { RequestResolver} from './request-resolver.service';

describe('BooksListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestResolver = TestBed.get(RequestResolver);
    expect(service).toBeTruthy();
  });
});
