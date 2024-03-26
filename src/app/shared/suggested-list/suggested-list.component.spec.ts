import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedListComponent } from './suggested-list.component';

describe('SuggestedListComponent', () => {
  let component: SuggestedListComponent;
  let fixture: ComponentFixture<SuggestedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestedListComponent]
    });
    fixture = TestBed.createComponent(SuggestedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
