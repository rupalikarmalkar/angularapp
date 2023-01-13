import { TestBed } from '@angular/core/testing';

import { ProductManageFigebaseService } from './product-manage-figebase.service';

describe('ProductManageFigebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductManageFigebaseService = TestBed.get(ProductManageFigebaseService);
    expect(service).toBeTruthy();
  });
});
