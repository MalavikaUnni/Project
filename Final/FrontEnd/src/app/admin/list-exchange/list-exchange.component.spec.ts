import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExchangeComponent } from './list-exchange.component';

describe('ListExchangeComponent', () => {
  let component: ListExchangeComponent;
  let fixture: ComponentFixture<ListExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
