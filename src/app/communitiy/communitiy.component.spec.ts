import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitiyComponent } from './communitiy.component';

describe('CommunitiyComponent', () => {
  let component: CommunitiyComponent;
  let fixture: ComponentFixture<CommunitiyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunitiyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitiyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
