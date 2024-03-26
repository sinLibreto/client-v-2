import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListWithVideosComponent } from './post-list-with-videos.component';

describe('PostListWithVideosComponent', () => {
  let component: PostListWithVideosComponent;
  let fixture: ComponentFixture<PostListWithVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostListWithVideosComponent]
    });
    fixture = TestBed.createComponent(PostListWithVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
