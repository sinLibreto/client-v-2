import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTitleComponent } from './new-title.component';

describe('NewTitleComponent', () => {
  let component: NewTitleComponent;
  let fixture: ComponentFixture<NewTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTitleComponent]
    });
    fixture = TestBed.createComponent(NewTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
