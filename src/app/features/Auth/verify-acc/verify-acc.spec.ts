import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyAcc } from './verify-acc';

describe('VerifyAcc', () => {
  let component: VerifyAcc;
  let fixture: ComponentFixture<VerifyAcc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyAcc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyAcc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
