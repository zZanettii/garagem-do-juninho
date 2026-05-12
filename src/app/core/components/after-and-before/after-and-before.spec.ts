import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterAndBefore } from './after-and-before';

describe('AfterAndBefore', () => {
  let component: AfterAndBefore;
  let fixture: ComponentFixture<AfterAndBefore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfterAndBefore],
    }).compileComponents();

    fixture = TestBed.createComponent(AfterAndBefore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
