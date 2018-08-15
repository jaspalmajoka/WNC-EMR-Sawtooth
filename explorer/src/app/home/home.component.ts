import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../service/api.service';
import { environment } from './../../environments/environment';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition('* => void', [
        animate('0.2s 0.1s ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  states: any = [];
  displayedColumns: string[] = ['namespace', 'data'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this._apiService
      .getItems('state')
      .subscribe((data) => {
        this.states = data['data'];
        this.dataSource.data = this.states.map((obj) => {
          return {
            family: obj.address.substr(0, 6),
            namespace: environment.namespace[obj.address.substr(6, 2)] || "#NA",
            address: obj.address,
            data: obj.data
          }
        }).filter((obj) => obj.family !== '000000');
      });
  }

}