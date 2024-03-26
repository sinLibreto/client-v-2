import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListWithImagesComponent } from './post-list-with-images.component';

describe('PostListWithImagesComponent', () => {
  let component: PostListWithImagesComponent;
  let fixture: ComponentFixture<PostListWithImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostListWithImagesComponent]
    });
    fixture = TestBed.createComponent(PostListWithImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
