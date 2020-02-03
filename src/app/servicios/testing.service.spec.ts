import { TestBed } from '@angular/core/testing';

import { TestingService } from './testing.service';
import { CreateMock } from '../mock/create-mock';
import { Offer } from '../core/model/offer';
import { Schedule } from '../core/model/schedule';
import { Mobility } from '../core/model/mobility';
import { Comunity } from '../core/model/comunity';
import { Demand } from '../core/model/demand';
import { FilterMock } from '../mock/filter-mock';

describe('TestingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestingService = TestBed.get(TestingService);
    expect(service).toBeTruthy();
  });
  it('should create', () => {
    let crearS: CreateMock = new CreateMock();
    let demanda = new Demand(3, "Spanish", Schedule.LATE, Mobility.OWN_LOCAL, Comunity.INDIVIDUAL, "Busco clase", "Third Grade");
    let oferta = new Offer(4, "Lang", Schedule.LATE, Mobility.OWN_LOCAL, Comunity.INDIVIDUAL, "visible", "Second Grade");
    expect(crearS.crearOferta(oferta)).toBeTruthy();
    expect(crearS.crearDemanda(demanda)).toBeTruthy();
  });
  it('should Filter', () => {
    let filtrar: FilterMock = new FilterMock();
    let ofertas: Offer[] = new Array();
    let demanda = new Demand(3, "Spanish", Schedule.LATE, Mobility.OWN_LOCAL, Comunity.INDIVIDUAL, "Busco clase", "Third Grade");
    ofertas.push(new Offer(1, "Bio", Schedule.MORNING, Mobility.OWN_LOCAL, Comunity.GROUP, "visible", "second grade"));
    expect(filtrar.filtrar(ofertas, demanda).length).toBe(1);
    demanda = new Demand(3, "Spanish", Schedule.LATE, Mobility.AT_HOME, Comunity.INDIVIDUAL, "Busco clase", "Third Grade");
    expect(filtrar.filtrar(ofertas, demanda).length).toBe(0);
  });
});
