import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupEconomicComponent } from './group-economic.component';

describe('GroupEconomicComponent', () => {
  let component: GroupEconomicComponent;
  let fixture: ComponentFixture<GroupEconomicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupEconomicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupEconomicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
