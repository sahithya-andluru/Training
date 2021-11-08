import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinHomeComponent } from './join-home.component';

describe('JoinHomeComponent', () => {
  let component: JoinHomeComponent;
  let fixture: ComponentFixture<JoinHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
