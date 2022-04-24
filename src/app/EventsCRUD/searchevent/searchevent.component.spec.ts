import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcheventComponent } from './searchevent.component';

describe('SearcheventComponent', () => {
  let component: SearcheventComponent;
  let fixture: ComponentFixture<SearcheventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearcheventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcheventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
