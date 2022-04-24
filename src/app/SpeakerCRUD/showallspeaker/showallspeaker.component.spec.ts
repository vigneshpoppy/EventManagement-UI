import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallspeakerComponent } from './showallspeaker.component';

describe('ShowallspeakerComponent', () => {
  let component: ShowallspeakerComponent;
  let fixture: ComponentFixture<ShowallspeakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowallspeakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallspeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
