import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittodoComponent } from './edittodo.component';

describe('EdittodoComponent', () => {
  let component: EdittodoComponent;
  let fixture: ComponentFixture<EdittodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
