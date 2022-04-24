import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakercruddashboardComponent } from './speakercruddashboard.component';

describe('SpeakercruddashboardComponent', () => {
  let component: SpeakercruddashboardComponent;
  let fixture: ComponentFixture<SpeakercruddashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakercruddashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakercruddashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
