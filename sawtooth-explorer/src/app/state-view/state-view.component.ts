import { Component, OnInit } from '@angular/core';
import { APIService } from './../services/api-service/api.service';
import { StateComponent } from '../states/state/state.component';

@Component({
  selector: 'app-state-view',
  templateUrl: './state-view.component.html',
  styleUrls: ['./state-view.component.scss']
})
export class StateViewComponent implements OnInit {
  stateData: any;
  component = StateComponent;
  constructor(private _apiService: APIService) { }

  ngOnInit() {
    this._apiService.getItems('state')
      .subscribe((data) => {
        this.stateData = data['data'];
      })
  }

}
