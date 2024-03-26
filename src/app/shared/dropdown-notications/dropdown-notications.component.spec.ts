import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownNoticationsComponent } from './dropdown-notications.component';

describe('DropdownNoticationsComponent', () => {
  let component: DropdownNoticationsComponent;
  let fixture: ComponentFixture<DropdownNoticationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownNoticationsComponent]
    });
    fixture = TestBed.createComponent(DropdownNoticationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
