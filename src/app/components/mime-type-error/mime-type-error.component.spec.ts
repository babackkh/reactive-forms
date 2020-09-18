import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MimeTypeErrorComponent } from './mime-type-error.component';

describe('MimeTypeErrorComponent', () => {
  let component: MimeTypeErrorComponent;
  let fixture: ComponentFixture<MimeTypeErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MimeTypeErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MimeTypeErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
