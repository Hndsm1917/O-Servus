import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { LearningLayout } from './learning-layout';

describe('LearningLayout', () => {
  let component: LearningLayout;
  let fixture: ComponentFixture<LearningLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningLayout],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(LearningLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
