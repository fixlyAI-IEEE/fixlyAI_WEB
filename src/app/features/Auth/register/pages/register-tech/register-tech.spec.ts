import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTech } from './register-tech';

describe('RegisterTech', () => {
  let component: RegisterTech;
  let fixture: ComponentFixture<RegisterTech>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterTech]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterTech);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
