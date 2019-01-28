import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartVerticalComponent } from './barchart-vertical.component';

describe('BarchartVerticalComponent', () => {
  let component: BarchartVerticalComponent;
  let fixture: ComponentFixture<BarchartVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarchartVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
