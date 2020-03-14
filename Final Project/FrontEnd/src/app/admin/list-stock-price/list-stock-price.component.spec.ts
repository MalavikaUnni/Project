import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStockPriceComponent } from './list-stock-price.component';

describe('ListStockPriceComponent', () => {
  let component: ListStockPriceComponent;
  let fixture: ComponentFixture<ListStockPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStockPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStockPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
