import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashhabComponent } from './dashhab.component';

describe('DashhabComponent', () => {
  let component: DashhabComponent;
  let fixture: ComponentFixture<DashhabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashhabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashhabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
