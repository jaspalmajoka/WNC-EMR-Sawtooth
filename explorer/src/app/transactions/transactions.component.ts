import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { transition, group, animate, style, state, trigger } from '@angular/animations';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({width: '100%', transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({width: 10, transform: 'translateX(50px)', opacity: 0}),
        group([
          animate('0.3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: '100%'
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class TransactionsComponent implements OnInit {
  transactions: any = [];
  show: any = {};
  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this._apiService
      .getItems('transactions')
      .subscribe((data) => {
        this.transactions = data['data'].map(obj => {
          let decodedValue = atob(obj.payload);
          try {
            decodedValue = JSON.parse(decodedValue);
          } catch (e) {
            decodedValue = "";
          }
          // decodedValue = JSON.stringify(decodedValue, null, 4);
          Object.assign(obj, decodedValue);
          return obj;
        });
      })
  }

}
