import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTracksListComponent } from './all-tracks-list.component';

describe('AllTracksListComponent', () => {
  let component: AllTracksListComponent;
  let fixture: ComponentFixture<AllTracksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTracksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTracksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
