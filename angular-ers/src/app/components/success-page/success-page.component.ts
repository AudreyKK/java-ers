import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent implements OnInit {

  currUser = localStorage.getItem('currUser');
  role = JSON.parse(this.currUser).role;
  constructor() { }

  ngOnInit() {
  }

}
