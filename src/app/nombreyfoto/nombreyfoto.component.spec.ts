import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreyfotoComponent } from './nombreyfoto.component';

describe('NombreyfotoComponent', () => {
  let component: NombreyfotoComponent;
  let fixture: ComponentFixture<NombreyfotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NombreyfotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NombreyfotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
