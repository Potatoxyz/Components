import { Component, OnInit } from '@angular/core';
import {Pages, PagesModel} from '../page.menu';
declare var $:any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  pages:Array<PagesModel>;
  constructor() {
    this.pages=Pages;
  }
  ngOnInit() {
  }
  //routerLinkActive属性会给激活的路由添加类

  // addActive(target:any){
  //   $(target).parent().siblings().removeClass('active');
  //   $(target).parent().addClass('active');
  // }
}
