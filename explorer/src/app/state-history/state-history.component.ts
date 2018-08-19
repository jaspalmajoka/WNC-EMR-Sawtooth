import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-state-history',
  templateUrl: './state-history.component.html',
  styleUrls: ['./state-history.component.scss']
})
export class StateHistoryComponent implements OnInit {
  head: string = '';
  heads: string[] = [];
  address: string = '';
  state: any = {};
  index: number = 0;
  constructor(private _apiService: ApiService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe((query) => {
      this.head = query['head'] || '';
      this.address = query['address'] || '';
      this.loadState();
    });
    this._apiService.getItems('blocks').subscribe((blocks) => {
      const data = blocks['data'];
      this.heads = data.map(obj => obj.header_signature);
      this.index = this.heads.length;
    });
  }

  loadState() {
    this._apiService.getItemByID('state', this.address, { head: this.head }).subscribe((state) => {
      this.state = state['data'];
    }, (err) => {
      this.state = btoa(JSON.stringify({
        "error": {
          "code": 75,
          "message": "There is no state data at the address specified.",
          "title": "State Not Found"
        }
      }));
    })
  }
  onChange() {
    this.head = this.heads[this.heads.length - this.index - 1];
    this.loadState();
  }

  onSubmit(){
    this.loadState();
  }
}
