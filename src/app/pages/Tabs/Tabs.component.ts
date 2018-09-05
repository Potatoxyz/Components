import {Component, OnInit} from '@angular/core';
import {routerTransition} from "../../../shared/animation/route.animate";
@Component({
  selector: 'app-Tabs',
  templateUrl: './Tabs.component.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
})
export class TabsComponent implements OnInit {
  Tabs1=[
    {id:1,name:'test1'},
    {id:2,name:'test2'},
    {id:3,name:'test3'},
  ];
  selectedTab1Id=1;
  TabContents=[
    {id:1,content:'content of Tab1'},
    {id:2,content:'content of Tab2'},
    {id:3,content:'content of Tab3'},
  ];
  constructor() {

  }
  ngOnInit() {}
  getSelectedTabId(id){
    this.selectedTab1Id=id;
  }
}
