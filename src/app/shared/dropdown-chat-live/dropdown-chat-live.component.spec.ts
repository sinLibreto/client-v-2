import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownChatLiveComponent } from './dropdown-chat-live.component';

describe('DropdownChatLiveComponent', () => {
  let component: DropdownChatLiveComponent;
  let fixture: ComponentFixture<DropdownChatLiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownChatLiveComponent]
    });
    fixture = TestBed.createComponent(DropdownChatLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
