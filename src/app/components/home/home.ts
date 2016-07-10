import {Component} from '@angular/core';
import {Sanalytics} from '../../services/sanalytics';

@Component({
  selector: 'home',
  pipes: [],
  providers: [Sanalytics],
  directives: [],
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})
export class Home {

  constructor(private sanalytics: Sanalytics) {}

  ngOnInit() {
    console.log('calling');
    this.sanalytics.postEvent('auth_token', 'TEST_EVENT', 'anon', 'some json crap here')
      .subscribe(
        event => console.log(event),
        error => console.log(error));
  }

}
