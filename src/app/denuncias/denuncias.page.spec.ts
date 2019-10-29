import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciasPage } from './denuncias.page';

describe('DenunciasPage', () => {
  let component: DenunciasPage;
  let fixture: ComponentFixture<DenunciasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenunciasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenunciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
