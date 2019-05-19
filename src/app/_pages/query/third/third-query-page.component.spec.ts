import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdQueryPageComponent } from './third-query-page.component';

describe('ThirdQueryPageComponent', () => {
  let component: ThirdQueryPageComponent;
  let fixture: ComponentFixture<ThirdQueryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdQueryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdQueryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
