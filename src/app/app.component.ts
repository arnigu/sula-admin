import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TransportService } from 'opis-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sula-admin';

  version$: Observable<any> = null;

  constructor(private transport: TransportService) {}

  ngOnInit(): void {
    // the base url will return text/plain, so we add the resposeType='text' param.
    this.version$ = this.transport.get('', {responseType: 'text'});
  }
}
