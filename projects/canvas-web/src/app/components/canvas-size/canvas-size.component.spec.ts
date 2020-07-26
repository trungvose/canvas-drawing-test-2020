import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasSizeComponent } from './canvas-size.component';

describe('CanvasSizeComponent', () => {
  let component: CanvasSizeComponent;
  let fixture: ComponentFixture<CanvasSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
