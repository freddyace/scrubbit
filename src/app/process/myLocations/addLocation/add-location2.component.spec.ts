import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLocation2Component } from './add-location2.component';

describe('AddLocation2Component', () => {
  let component: AddLocation2Component;
  let fixture: ComponentFixture<AddLocation2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLocation2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLocation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
