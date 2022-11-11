import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCenteredComponent } from './display-centered.component';

describe('DisplayCenteredComponent', () => {
  let component: DisplayCenteredComponent;
  let fixture: ComponentFixture<DisplayCenteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCenteredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCenteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
