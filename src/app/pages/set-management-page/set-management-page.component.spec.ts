import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetManagementPageComponent } from './set-management-page.component';

describe('SetManagementPageComponent', () => {
  let component: SetManagementPageComponent;
  let fixture: ComponentFixture<SetManagementPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetManagementPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
