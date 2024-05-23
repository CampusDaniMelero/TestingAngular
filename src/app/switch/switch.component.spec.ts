import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchComponent } from './switch.component';

describe('SwitchComponent', () => {
  let component: SwitchComponent;
 // let fixture: ComponentFixture<SwitchComponent>;

 beforeEach(async() => {
  component = new SwitchComponent();
 });

 it('deberia cambiar el valor del boolean por cada click', () => {
    expect(component.active).toBe(true);
    component.handleClick();
    expect(component.active).toBe(false);
    component.handleClick();
    expect(component.active).toBe(true);
  
  } );  

  it('debe modificarse el mensaje cuando cambiamos el boolean', ()=> {
    expect(component.message).withContext('Antes del click').toMatch(/encendido/);
    component.handleClick();
    expect(component.message).withContext('Despues del primer click').toMatch(/apagado/);
    component.handleClick();

  })
} );