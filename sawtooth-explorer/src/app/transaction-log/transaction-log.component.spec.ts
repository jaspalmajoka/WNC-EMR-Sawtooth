import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionLogComponent } from './transaction-log.component';

describe('TransactionLogComponent', () => {
  let component: TransactionLogComponent;
  let fixture: ComponentFixture<TransactionLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
