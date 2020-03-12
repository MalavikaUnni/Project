import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareReultsComponent } from './compare-reults.component';

describe('CompareReultsComponent', () => {
  let component: CompareReultsComponent;
  let fixture: ComponentFixture<CompareReultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareReultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareReultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
