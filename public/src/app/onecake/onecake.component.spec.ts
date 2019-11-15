import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnecakeComponent } from './onecake.component';

describe('OnecakeComponent', () => {
  let component: OnecakeComponent;
  let fixture: ComponentFixture<OnecakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnecakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnecakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
