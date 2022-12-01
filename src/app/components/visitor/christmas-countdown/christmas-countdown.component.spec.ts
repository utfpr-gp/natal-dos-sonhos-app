import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristmasCountdownComponent } from './christmas-countdown.component';

describe('ChristmasCountdownComponent', () => {
  let component: ChristmasCountdownComponent;
  let fixture: ComponentFixture<ChristmasCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChristmasCountdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChristmasCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
