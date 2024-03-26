import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostWithAudioComponent } from './post-with-audio.component';

describe('PostWithAudioComponent', () => {
  let component: PostWithAudioComponent;
  let fixture: ComponentFixture<PostWithAudioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostWithAudioComponent]
    });
    fixture = TestBed.createComponent(PostWithAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
