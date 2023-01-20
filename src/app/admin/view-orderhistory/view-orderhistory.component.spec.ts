import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrderhistoryComponent } from './view-orderhistory.component';

describe('ViewOrderhistoryComponent', () => {
  let component: ViewOrderhistoryComponent;
  let fixture: ComponentFixture<ViewOrderhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrderhistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOrderhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
