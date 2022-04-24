import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventcruddashboardComponent } from './eventcruddashboard.component';

describe('EventcruddashboardComponent', () => {
  let component: EventcruddashboardComponent;
  let fixture: ComponentFixture<EventcruddashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventcruddashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventcruddashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
