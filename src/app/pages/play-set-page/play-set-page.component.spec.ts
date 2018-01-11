import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaySetPageComponent } from './play-set-page.component';

describe('PlaySetPageComponent', () => {
  let component: PlaySetPageComponent;
  let fixture: ComponentFixture<PlaySetPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaySetPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaySetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
