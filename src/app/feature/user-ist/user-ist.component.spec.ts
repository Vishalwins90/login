import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIstComponent } from './user-ist.component';

describe('UserIstComponent', () => {
  let component: UserIstComponent;
  let fixture: ComponentFixture<UserIstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserIstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserIstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
