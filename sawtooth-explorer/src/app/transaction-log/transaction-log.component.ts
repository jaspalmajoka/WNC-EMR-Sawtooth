import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api-service/api.service';

@Component({
  selector: 'app-transaction-log',
  templateUrl: './transaction-log.component.html',
  styleUrls: ['./transaction-log.component.scss']
})
export class TransactionLogComponent implements OnInit {

  transactionData: any;
  head: any;

  constructor(private _apiService: APIService) { }

  ngOnInit() {
    this._apiService.getItems('transactions')
      .subscribe((data) => {
        this.transactionData = data['data'];
        this.head = data['head'];
      })
  }
}
