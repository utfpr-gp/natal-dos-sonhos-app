import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterPageComponent } from './letter-page.component';

describe('LetterPageComponent', () => {
  let component: LetterPageComponent;
  let fixture: ComponentFixture<LetterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
