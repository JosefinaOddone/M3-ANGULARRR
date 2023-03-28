import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditornomydatosComponent } from './editornomydatos.component';

describe('EditornomydatosComponent', () => {
  let component: EditornomydatosComponent;
  let fixture: ComponentFixture<EditornomydatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditornomydatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditornomydatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
