import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateHistoryComponent } from './state-history.component';

describe('StateHistoryComponent', () => {
  let component: StateHistoryComponent;
  let fixture: ComponentFixture<StateHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
