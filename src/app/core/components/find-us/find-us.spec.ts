import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindUs } from './find-us';

describe('FindUs', () => {
  let component: FindUs;
  let fixture: ComponentFixture<FindUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindUs],
    }).compileComponents();

    fixture = TestBed.createComponent(FindUs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
