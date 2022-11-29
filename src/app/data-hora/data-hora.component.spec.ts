import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataHoraComponent } from './data-hora.component';

describe('DataHoraComponent', () => {
  let component: DataHoraComponent;
  let fixture: ComponentFixture<DataHoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataHoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
