import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowedTabComponent } from './borrowed-tab.component';

describe('BorrowedTabComponent', () => {
  let component: BorrowedTabComponent;
  let fixture: ComponentFixture<BorrowedTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowedTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowedTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
