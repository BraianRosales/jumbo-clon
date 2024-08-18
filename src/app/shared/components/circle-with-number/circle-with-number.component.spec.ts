import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleWithNumberComponent } from './circle-with-number.component';

describe('CircleWithNumberComponent', () => {
  let component: CircleWithNumberComponent;
  let fixture: ComponentFixture<CircleWithNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CircleWithNumberComponent]
    });
    fixture = TestBed.createComponent(CircleWithNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
