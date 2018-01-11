import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackManagementPageComponent } from './track-management-page.component';

describe('TrackManagementPageComponent', () => {
  let component: TrackManagementPageComponent;
  let fixture: ComponentFixture<TrackManagementPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackManagementPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
