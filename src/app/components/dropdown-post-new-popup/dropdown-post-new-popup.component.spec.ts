import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownPostNewPopupComponent } from './dropdown-post-new-popup.component';

describe('DropdownPostNewPopupComponent', () => {
  let component: DropdownPostNewPopupComponent;
  let fixture: ComponentFixture<DropdownPostNewPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownPostNewPopupComponent]
    });
    fixture = TestBed.createComponent(DropdownPostNewPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
