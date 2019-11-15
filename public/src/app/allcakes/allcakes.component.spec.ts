import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcakesComponent } from './allcakes.component';

describe('AllcakesComponent', () => {
  let component: AllcakesComponent;
  let fixture: ComponentFixture<AllcakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
