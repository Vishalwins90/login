import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRequestComponent } from './user-request.component';

describe('UserRequestComponent', () => {
  let component: UserRequestComponent;
  let fixture: ComponentFixture<UserRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
