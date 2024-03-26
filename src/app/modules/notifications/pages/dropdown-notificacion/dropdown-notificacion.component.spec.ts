import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownNotificacionComponent } from './dropdown-notificacion.component';

describe('DropdownNotificacionComponent', () => {
  let component: DropdownNotificacionComponent;
  let fixture: ComponentFixture<DropdownNotificacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownNotificacionComponent]
    });
    fixture = TestBed.createComponent(DropdownNotificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
