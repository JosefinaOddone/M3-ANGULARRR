import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashexpeComponent } from './dashexpe.component';

describe('DashexpeComponent', () => {
  let component: DashexpeComponent;
  let fixture: ComponentFixture<DashexpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashexpeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashexpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
