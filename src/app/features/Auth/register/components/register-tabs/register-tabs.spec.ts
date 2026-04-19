import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTabs } from './register-tabs';

describe('RegisterTabs', () => {
  let component: RegisterTabs;
  let fixture: ComponentFixture<RegisterTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
