import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSpeakerComponent } from './search-speaker.component';

describe('SearchSpeakerComponent', () => {
  let component: SearchSpeakerComponent;
  let fixture: ComponentFixture<SearchSpeakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSpeakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
