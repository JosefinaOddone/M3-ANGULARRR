import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorperfComponent } from './editorperf.component';

describe('EditorperfComponent', () => {
  let component: EditorperfComponent;
  let fixture: ComponentFixture<EditorperfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorperfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorperfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
