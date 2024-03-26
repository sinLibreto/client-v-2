import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideSlideComponent } from './side-slide.component';

describe('SideSlideComponent', () => {
  let component: SideSlideComponent;
  let fixture: ComponentFixture<SideSlideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideSlideComponent]
    });
    fixture = TestBed.createComponent(SideSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
