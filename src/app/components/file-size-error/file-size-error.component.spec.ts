import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSizeErrorComponent } from './file-size-error.component';

describe('FileSizeErrorComponent', () => {
  let component: FileSizeErrorComponent;
  let fixture: ComponentFixture<FileSizeErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileSizeErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileSizeErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
