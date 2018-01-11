import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetManagementComponent } from './set-management.component';

describe('SetManagementComponent', () => {
  let component: SetManagementComponent;
  let fixture: ComponentFixture<SetManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
