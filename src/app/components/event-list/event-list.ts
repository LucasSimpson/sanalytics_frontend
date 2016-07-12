import {Component} from '@angular/core';
import {Sanalytics} from '../../services/sanalytics';
import {EventDetail} from '../event-detail/event-detail';

import {Event} from '../../models/event';

@Component({
  selector: 'event-list',
  pipes: [],
  providers: [Sanalytics],
  directives: [EventDetail],
  styleUrls: ['./event-list.css'],
  templateUrl: './event-list.html'
})
export class EventList {
  private events: Event[];

  constructor(private sanalytics: Sanalytics) {}

  ngOnInit() {
    console.log('on init in event-detail list');

    this.sanalytics.getAllEvents('auth_token')
      .subscribe(
        events => this.events = events,
        error => console.log(error));
  }
}
