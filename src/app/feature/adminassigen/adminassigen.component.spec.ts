import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminassigenComponent } from './adminassigen.component';

describe('AdminassigenComponent', () => {
  let component: AdminassigenComponent;
  let fixture: ComponentFixture<AdminassigenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminassigenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminassigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
