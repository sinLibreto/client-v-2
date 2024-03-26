import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPublicidadComponent } from './widget-publicidad.component';

describe('WidgetPublicidadComponent', () => {
  let component: WidgetPublicidadComponent;
  let fixture: ComponentFixture<WidgetPublicidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetPublicidadComponent]
    });
    fixture = TestBed.createComponent(WidgetPublicidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
