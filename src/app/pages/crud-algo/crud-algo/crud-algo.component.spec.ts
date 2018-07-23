import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAlgoComponent } from './crud-algo.component';

describe('CrudAlgoComponent', () => {
  let component: CrudAlgoComponent;
  let fixture: ComponentFixture<CrudAlgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudAlgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudAlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
