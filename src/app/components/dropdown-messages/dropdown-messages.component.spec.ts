import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownMessagesComponent } from './dropdown-messages.component';

describe('DropdownMessagesComponent', () => {
  let component: DropdownMessagesComponent;
  let fixture: ComponentFixture<DropdownMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownMessagesComponent]
    });
    fixture = TestBed.createComponent(DropdownMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
