import { TestBed } from '@angular/core/testing';

import { BookViewResolver} from './book-view-resolver.service';

describe('BooksListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookViewResolver = TestBed.get(BookViewResolver);
    expect(service).toBeTruthy();
  });
});
