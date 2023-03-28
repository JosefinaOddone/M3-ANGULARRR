import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoreduComponent } from './editoredu.component';

describe('EditoreduComponent', () => {
  let component: EditoreduComponent;
  let fixture: ComponentFixture<EditoreduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditoreduComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditoreduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
