import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugesstedButton } from './sugessted-button';

describe('SugesstedButton', () => {
  let component: SugesstedButton;
  let fixture: ComponentFixture<SugesstedButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SugesstedButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugesstedButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
