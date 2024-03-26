import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposChatComponent } from './grupos-chat.component';

describe('GruposChatComponent', () => {
  let component: GruposChatComponent;
  let fixture: ComponentFixture<GruposChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GruposChatComponent]
    });
    fixture = TestBed.createComponent(GruposChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
