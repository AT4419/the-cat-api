import { TestBed } from '@angular/core/testing';

import { CatInterceptor } from './cat.interceptor';

describe('CatInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CatInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CatInterceptor = TestBed.inject(CatInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
