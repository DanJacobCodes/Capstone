import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingDataListComponent } from './housing-data-list.component';

describe('HousingDataListComponent', () => {
  let component: HousingDataListComponent;
  let fixture: ComponentFixture<HousingDataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousingDataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousingDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
