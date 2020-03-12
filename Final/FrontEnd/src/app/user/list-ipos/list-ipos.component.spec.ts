import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIposComponent } from './list-ipos.component';

describe('ListIposComponent', () => {
  let component: ListIposComponent;
  let fixture: ComponentFixture<ListIposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
