import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletespeakerComponent } from './deletespeaker.component';

describe('DeletespeakerComponent', () => {
  let component: DeletespeakerComponent;
  let fixture: ComponentFixture<DeletespeakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletespeakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletespeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
