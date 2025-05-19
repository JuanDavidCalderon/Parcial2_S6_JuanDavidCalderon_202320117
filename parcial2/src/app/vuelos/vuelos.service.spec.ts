/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VuelosService } from './vuelos.service';

describe('Service: Vuelos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VuelosService]
    });
  });

  it('should ...', inject([VuelosService], (service: VuelosService) => {
    expect(service).toBeTruthy();
  }));
});
