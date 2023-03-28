import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashidiComponent } from './dashidi.component';

describe('DashidiComponent', () => {
  let component: DashidiComponent;
  let fixture: ComponentFixture<DashidiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashidiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashidiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
