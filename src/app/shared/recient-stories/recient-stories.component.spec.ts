import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecientStoriesComponent } from './recient-stories.component';

describe('RecientStoriesComponent', () => {
  let component: RecientStoriesComponent;
  let fixture: ComponentFixture<RecientStoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecientStoriesComponent]
    });
    fixture = TestBed.createComponent(RecientStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
