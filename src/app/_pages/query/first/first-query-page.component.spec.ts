import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstQueryPageComponent } from './first-query-page.component';

describe('FirstQueryPageComponent', () => {
  let component: FirstQueryPageComponent;
  let fixture: ComponentFixture<FirstQueryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstQueryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstQueryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
