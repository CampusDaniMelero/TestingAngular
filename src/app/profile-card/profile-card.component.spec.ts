import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCardComponent } from './profile-card.component';
import { By } from '@angular/platform-browser';

describe('ProfileCardComponent', () => {
  let component: ProfileCardComponent;
  let fixture: ComponentFixture<ProfileCardComponent>;

  beforeEach(async () => {
   TestBed.configureTestingModule({
    imports:[ProfileCardComponent]});
    fixture = TestBed.createComponent(ProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it('should create', () => {
    expect(component).toBeTruthy();
  }
  );

  it('deberia mostrar el  nombre completo', ()=>{
    const headerDe=fixture.debugElement.query(By.css('h1'));
    const headerEl=headerDe.nativeElement;
    const TestUser = {_id:'12345', first_name:'Mario', last_name:'Girón', email:'mario@gmail.com', username:'mariog', id:3, image:'', password:'1212'};

    component.user=TestUser;
    fixture.detectChanges();
    expect(headerEl.textContent).toBe(`${TestUser.first_name} ${TestUser.last_name}`);

  });
  it('deberia modiciar el color de fondo al hacer click en el boton', ()=>{
    const btnDe=fixture.debugElement.query(By.css('#btnSelectUser'));
    const divDe=fixture.debugElement.query(By.css('.user-card'));
    btnDe.triggerEventHandler('click');
    fixture.detectChanges();
    expect(divDe.nativeElement.style.backgroundColor).toBe('tomato');

  });
});
