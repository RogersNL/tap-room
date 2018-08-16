import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterKegsComponent } from './filter-kegs.component';

describe('FilterKegsComponent', () => {
  let component: FilterKegsComponent;
  let fixture: ComponentFixture<FilterKegsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterKegsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterKegsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
