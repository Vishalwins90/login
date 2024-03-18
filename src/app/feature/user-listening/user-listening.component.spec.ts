import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListeningComponent } from './user-listening.component';

describe('UserListeningComponent', () => {
  let component: UserListeningComponent;
  let fixture: ComponentFixture<UserListeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListeningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
