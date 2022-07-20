import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendUserComponent } from './lend-user.component';

describe('LendUserComponent', () => {
  let component: LendUserComponent;
  let fixture: ComponentFixture<LendUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LendUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
