import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestnavigateComponent } from './testnavigate.component';

describe('TestnavigateComponent', () => {
  let component: TestnavigateComponent;
  let fixture: ComponentFixture<TestnavigateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestnavigateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestnavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
