import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="bg-success p-a-1 text-xs-center">
     SportsStore Will Go Here
     This is SportsStore
    </div>
    <store></store>
  `
})
export class AppComponent {
  constructor() {}
}
