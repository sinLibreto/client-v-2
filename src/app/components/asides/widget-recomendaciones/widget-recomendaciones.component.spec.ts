import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetRecomendacionesComponent } from './widget-recomendaciones.component';

describe('WidgetRecomendacionesComponent', () => {
  let component: WidgetRecomendacionesComponent;
  let fixture: ComponentFixture<WidgetRecomendacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetRecomendacionesComponent]
    });
    fixture = TestBed.createComponent(WidgetRecomendacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
