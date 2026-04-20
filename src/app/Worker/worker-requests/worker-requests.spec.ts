import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerRequests } from './worker-requests';

describe('WorkerRequests', () => {
  let component: WorkerRequests;
  let fixture: ComponentFixture<WorkerRequests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkerRequests]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerRequests);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
