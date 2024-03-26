import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarStaticLeftComponent } from './sidebar-static-left.component';

describe('SidebarStaticLeftComponent', () => {
  let component: SidebarStaticLeftComponent;
  let fixture: ComponentFixture<SidebarStaticLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarStaticLeftComponent]
    });
    fixture = TestBed.createComponent(SidebarStaticLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
