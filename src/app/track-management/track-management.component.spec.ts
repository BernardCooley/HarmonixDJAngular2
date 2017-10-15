import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackManagementComponent } from './track-management.component';

describe('TrackManagementComponent', () => {
  let component: TrackManagementComponent;
  let fixture: ComponentFixture<TrackManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
