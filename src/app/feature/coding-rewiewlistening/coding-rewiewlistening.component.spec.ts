import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingRewiewlisteningComponent } from './coding-rewiewlistening.component';

describe('CodingRewiewlisteningComponent', () => {
  let component: CodingRewiewlisteningComponent;
  let fixture: ComponentFixture<CodingRewiewlisteningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodingRewiewlisteningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingRewiewlisteningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
