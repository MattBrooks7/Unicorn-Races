import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicoinsComponent } from './unicoins.component';

describe('UnicoinsComponent', () => {
  let component: UnicoinsComponent;
  let fixture: ComponentFixture<UnicoinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnicoinsComponent]
    });
    fixture = TestBed.createComponent(UnicoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
