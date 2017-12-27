import {Component, OnInit} from '@angular/core';
import {AnywereService} from "../anywere.service";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  title:string='标题';
  auth:boolean=false;
  toggleSide:boolean=false;
  constructor(private anywereService:AnywereService) { }

  ngOnInit() {
  }
  toggleSideBar(){
    this.toggleSide=!this.toggleSide;
    this.anywereService.ToggleCollapse(this.toggleSide);
  }
}
