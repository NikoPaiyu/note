import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTodoPage } from './detail-todo.page';

describe('DetailTodoPage', () => {
  let component: DetailTodoPage;
  let fixture: ComponentFixture<DetailTodoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTodoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
