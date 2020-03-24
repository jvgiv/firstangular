import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // or
  // selector: '[app-servers]', - this would select by attribute, such as <div app-servers></div>
  // or
  // selector: '.app-servers' - this would select elements that have the app-servers class
  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
  
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
