import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersCardListComponent } from './letters-card-list.component';

describe('LettersCardListComponent', () => {
  let component: LettersCardListComponent;
  let fixture: ComponentFixture<LettersCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LettersCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LettersCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
