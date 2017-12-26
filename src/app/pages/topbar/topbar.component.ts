import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  title:string='标题';
  auth:boolean=false;
  constructor() { }

  ngOnInit() {
  }

}
