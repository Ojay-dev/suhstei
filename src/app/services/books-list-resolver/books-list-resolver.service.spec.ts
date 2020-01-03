import { TestBed } from '@angular/core/testing';

import { BooksListResolverService } from './books-list-resolver.service';

describe('BooksListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BooksListResolverService = TestBed.get(BooksListResolverService);
    expect(service).toBeTruthy();
  });
});
