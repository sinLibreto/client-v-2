import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetGruposComponent } from './widget-grupos.component';

describe('WidgetGruposComponent', () => {
  let component: WidgetGruposComponent;
  let fixture: ComponentFixture<WidgetGruposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetGruposComponent]
    });
    fixture = TestBed.createComponent(WidgetGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
