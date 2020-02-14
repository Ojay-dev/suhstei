import { TestBed } from '@angular/core/testing';

import { SearchResolver} from './search-resolver.service';

describe('BooksListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchResolver = TestBed.get(SearchResolver);
    expect(service).toBeTruthy();
  });
});
