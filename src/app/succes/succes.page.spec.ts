import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesPage } from './succes.page';

describe('SuccesPage', () => {
  let component: SuccesPage;
  let fixture: ComponentFixture<SuccesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
