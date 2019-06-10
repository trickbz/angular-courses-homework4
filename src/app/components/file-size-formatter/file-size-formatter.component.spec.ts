import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSizeFormatterComponent } from './file-size-formatter.component';

describe('FileSizeFormatterComponent', () => {
  let component: FileSizeFormatterComponent;
  let fixture: ComponentFixture<FileSizeFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileSizeFormatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileSizeFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
