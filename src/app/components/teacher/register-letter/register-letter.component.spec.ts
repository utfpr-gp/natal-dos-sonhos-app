import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLetterComponent } from './register-letter.component';

describe('RegisterLetterComponent', () => {
  let component: RegisterLetterComponent;
  let fixture: ComponentFixture<RegisterLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
