import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressEditComponent } from './address-edit.component';

describe('AddressEditComponent', () => {
  let component: AddressEditComponent;
  let fixture: ComponentFixture<AddressEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddressEditComponent]
    });
    fixture = TestBed.createComponent(AddressEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
