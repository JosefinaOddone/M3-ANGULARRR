import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasheduComponent } from './dashedu.component';

describe('DasheduComponent', () => {
  let component: DasheduComponent;
  let fixture: ComponentFixture<DasheduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasheduComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasheduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
