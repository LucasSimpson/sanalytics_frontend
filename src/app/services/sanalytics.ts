import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';

import {Observable} from 'rxjs/observable';
import {Event} from '../models/event';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';


@Injectable()
export class Sanalytics {
  private static ENDPOINT:string = 'http://localhost:8000/ingest/';

  constructor(private http:Http) {
  }

  postEvent(authToken:string, eventCategory:string, eventUser:string, jsonData:string):Observable<Event> {
    let url = Sanalytics.ENDPOINT;
    let body = {
      auth_token: authToken,
      category: eventCategory,
      user: eventUser,
      json_data: jsonData
    };

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(url, body, options)
      .map(this.eventFromResponse)
      .catch(this.handleError);
  }

  getAllEvents(authToken:string):Observable<Event[]> {
    let url = Sanalytics.ENDPOINT;
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.get(url, options)
      .map(this.eventListFromResponse)
      .catch(this.handleError);
  }

  private eventFromResponse(res:Response) {
    let result = res.json().result;
    return Event.fromJson(result);
  }

  private eventListFromResponse(res:Response):Event[] {
    let result = res.json().results;
    return result.map((eventJson) => {
      return Event.fromJson(eventJson);
    });
  }

  private handleError(error:any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
