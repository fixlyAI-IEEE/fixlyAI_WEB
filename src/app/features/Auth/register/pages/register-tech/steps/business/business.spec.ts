import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/features/Auth/register/pages/register-tech/steps/business/business.spec.ts
import { Business } from './business';

describe('Business', () => {
  let component: Business;
  let fixture: ComponentFixture<Business>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Business]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Business);
========
import { AuthLayout } from './auth-layout';

describe('AuthLayout', () => {
  let component: AuthLayout;
  let fixture: ComponentFixture<AuthLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthLayout);
>>>>>>>> 7152c2d (create service page and request form and incoming offers and fix landing component):src/app/features/Auth/auth-layout/auth-layout.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
