import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerLoginComponent } from './speaker-login.component';

describe('SpeakerLoginComponent', () => {
  let component: SpeakerLoginComponent;
  let fixture: ComponentFixture<SpeakerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
