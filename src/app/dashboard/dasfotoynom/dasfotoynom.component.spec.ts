import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasfotoynomComponent } from './dasfotoynom.component';

describe('DasfotoynomComponent', () => {
  let component: DasfotoynomComponent;
  let fixture: ComponentFixture<DasfotoynomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasfotoynomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasfotoynomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
