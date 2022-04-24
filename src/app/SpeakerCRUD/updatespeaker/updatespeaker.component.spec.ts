import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatespeakerComponent } from './updatespeaker.component';

describe('UpdatespeakerComponent', () => {
  let component: UpdatespeakerComponent;
  let fixture: ComponentFixture<UpdatespeakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatespeakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatespeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
