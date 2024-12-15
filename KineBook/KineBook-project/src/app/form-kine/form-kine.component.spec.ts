import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormKineComponent } from './form-kine.component';

describe('FormKineComponent', () => {
  let component: FormKineComponent;
  let fixture: ComponentFixture<FormKineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormKineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormKineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
