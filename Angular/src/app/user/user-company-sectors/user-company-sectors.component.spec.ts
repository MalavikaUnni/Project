import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCompanySectorsComponent } from './user-company-sectors.component';

describe('UserCompanySectorsComponent', () => {
  let component: UserCompanySectorsComponent;
  let fixture: ComponentFixture<UserCompanySectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCompanySectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCompanySectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
