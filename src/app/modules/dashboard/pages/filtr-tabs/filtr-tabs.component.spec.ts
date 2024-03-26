import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrTabsComponent } from './filtr-tabs.component';

describe('FiltrTabsComponent', () => {
  let component: FiltrTabsComponent;
  let fixture: ComponentFixture<FiltrTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltrTabsComponent]
    });
    fixture = TestBed.createComponent(FiltrTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
