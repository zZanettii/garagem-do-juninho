import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsFan } from './reviews-fan';

describe('ReviewsFan', () => {
  let component: ReviewsFan;
  let fixture: ComponentFixture<ReviewsFan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewsFan],
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewsFan);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
