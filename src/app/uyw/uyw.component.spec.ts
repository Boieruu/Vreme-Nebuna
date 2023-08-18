import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UywComponent } from './uyw.component';

describe('UywComponent', () => {
  let component: UywComponent;
  let fixture: ComponentFixture<UywComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UywComponent]
    });
    fixture = TestBed.createComponent(UywComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
