import { Component, OnInit } from '@angular/core';
import {Pages, PagesModel} from '../page.menu';
import {AnywereService} from "../anywere.service";
declare var $:any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  pages:Array<PagesModel>;
  gotMessage:any=null;
  constructor(private anywereService:AnywereService) {
    this.pages=Pages;
  }
  ngOnInit() {
    this.anywereService.getMessage().subscribe(data=>{
      this.gotMessage=data;
      if(data){
        console.log('I have got message!');
        this.pages[0].children.forEach(value => {
          if(value.name=='ng-bootstrap'){
            value.icon='fa fa-certificate text-danger';
          }
        })
      }
    });
  }
  //routerLinkActive属性会给激活的路由添加类

  // addActive(target:any){
  //   $(target).parent().siblings().removeClass('active');
  //   $(target).parent().addClass('active');
  // }
}
