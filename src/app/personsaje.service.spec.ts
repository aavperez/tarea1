import { TestBed } from '@angular/core/testing';

import { PersonsajeService } from './personsaje.service';

describe('PersonsajeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonsajeService = TestBed.get(PersonsajeService);
    expect(service).toBeTruthy();
  });
});
