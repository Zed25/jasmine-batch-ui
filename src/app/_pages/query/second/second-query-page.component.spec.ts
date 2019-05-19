import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondQueryPageComponent } from './second-query-page.component';

describe('SecondQueryPageComponent', () => {
  let component: SecondQueryPageComponent;
  let fixture: ComponentFixture<SecondQueryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondQueryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondQueryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
