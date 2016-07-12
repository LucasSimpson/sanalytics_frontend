import {Component, Input} from '@angular/core';
import {Sanalytics} from '../../services/sanalytics';
import {Event} from '../../models/event';

@Component({
  selector: 'event-detail',
  pipes: [],
  providers: [],
  directives: [],
  styleUrls: ['./event-detail.css'],
  templateUrl: './event-detail.html'
})
export class EventDetail {
  @Input()
  private event: Event;

  constructor(private sanalytics: Sanalytics) {}

  ngOnInit() {
    console.log('on init in event detail');
  }
}
