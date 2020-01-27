import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcomoonComponent } from './icomoon.component';

describe('IcomoonComponent', () => {
  let component: IcomoonComponent;
  let fixture: ComponentFixture<IcomoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcomoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcomoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
