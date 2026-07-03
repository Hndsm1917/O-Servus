import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { LandingLayout } from './landing-layout';

describe('LandingLayout', () => {
  let component: LandingLayout;
  let fixture: ComponentFixture<LandingLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingLayout],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(LandingLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
