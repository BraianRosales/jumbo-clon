import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountsComponent } from './discounts.component';

describe('DiscountsComponent', () => {
  let component: DiscountsComponent;
  let fixture: ComponentFixture<DiscountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DiscountsComponent]
    });
    fixture = TestBed.createComponent(DiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
