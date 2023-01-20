import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodqtyComponent } from './add-foodqty.component';

describe('AddFoodqtyComponent', () => {
  let component: AddFoodqtyComponent;
  let fixture: ComponentFixture<AddFoodqtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFoodqtyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFoodqtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
