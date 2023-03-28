import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashdatosComponent } from './dashdatos.component';

describe('DashdatosComponent', () => {
  let component: DashdatosComponent;
  let fixture: ComponentFixture<DashdatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashdatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashdatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
