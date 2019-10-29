import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicanosPage } from './ubicanos.page';

describe('UbicanosPage', () => {
  let component: UbicanosPage;
  let fixture: ComponentFixture<UbicanosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbicanosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicanosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
