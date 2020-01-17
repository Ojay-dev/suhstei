import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendedTabComponent } from './lended-tab.component';

describe('LendedTabComponent', () => {
  let component: LendedTabComponent;
  let fixture: ComponentFixture<LendedTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendedTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendedTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
