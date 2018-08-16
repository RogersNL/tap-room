import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKegComponent } from './create-keg.component';

describe('CreateKegComponent', () => {
  let component: CreateKegComponent;
  let fixture: ComponentFixture<CreateKegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateKegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateKegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
