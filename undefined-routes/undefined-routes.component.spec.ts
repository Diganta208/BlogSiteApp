import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndefinedRoutesComponent } from './undefined-routes.component';

describe('UndefinedRoutesComponent', () => {
  let component: UndefinedRoutesComponent;
  let fixture: ComponentFixture<UndefinedRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndefinedRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UndefinedRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
