import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service.service';
import { HttpClientModule } from '@angular/common/http';
describe('ApiServiceService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getUsers debería retornar el valor de la API en forma de Observable',
  (done: DoneFn) => {
   service.getUsers().subscribe(value => {
     expect(value.results.length).toBe(10);
     done();
   })
 })

 it('getSimpleValue debe devolver el texto en mayusculas', ()=>
  expect(service.getSimpleValue('hola mundo')).toBe('HOLA MUNDO')

)

it('getUsersProm debería retornar el valor de la API en forma de Promise',
(done: DoneFn) => {
 service.getUsersProm().then(value => {
   expect(value.page).toBe(1);

   done();
 })
})
});


