import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryDashComponent } from './library-dash.component';

describe('LibraryDashComponent', () => {
  let component: LibraryDashComponent;
  let fixture: ComponentFixture<LibraryDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
