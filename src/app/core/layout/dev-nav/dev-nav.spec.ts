import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { DevNav } from './dev-nav';

describe('DevNav', () => {
  let component: DevNav;
  let fixture: ComponentFixture<DevNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevNav],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(DevNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
