import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // url used to reach the API
  apiURL: string;

  // defaults for paging settings
  pagingDefaults = {
    pageSize: 20,
    pageIndex: 0
  };

  constructor(private _httpClient: HttpClient) {
    // set url from environment variables
    this.apiURL = environment.apiURL;
  }

  /**
 * Retrieve paged list of items from an API.
 * @param resourceName {string} - name of the resource (what it's called in
 *   the API endpoint) to fetch from the API
 * @param params {object} - optional parameters to be passed to API to control
 *   things like paging
 * @param params.pageSize {number} - number of items returned in the API
 *   request as a page
 * @param params.pageIndex {number} - offset for items from API
 * @return {Observable} - observable watching the results of the API request
 */
  getItems(resourceName: string, params?: object): Observable<any> {
    let options: object = _.defaults(params, this.pagingDefaults);
    let url = this.apiURL + '/' + resourceName;
    // let paramsObj = new HttpParams();

    if (params && params['head']) {
      // paramsObj.set('head', params['head']);
      url += '?head=' + params['head'];
    }
    return this._httpClient.get(url);
  }

  /**
   * Retrieve an item from the API by its unique identifier.
   * @param resourceName {string} - name of the resource (what it's called in
   *   the API endpoint) to fetch from the API
   * @param id {string} - unique identifier for retrieving the item from the API
   * @return {Observable} - observable watching the results of the API request
   */
  getItemByID(resourceName: string, id: string, params?: object): Observable<object> {
    let url = this.apiURL + '/' + resourceName  + '/' + id;
    // let paramsObj = new HttpParams();

    if (params && params['head']) {
      // paramsObj.set('head', params['head']);
      url += '?head=' + params['head'];
    }
    return this._httpClient.get(url)
  }

}
