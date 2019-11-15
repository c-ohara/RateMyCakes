import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcakeComponent } from './newcake.component';

describe('NewcakeComponent', () => {
  let component: NewcakeComponent;
  let fixture: ComponentFixture<NewcakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
