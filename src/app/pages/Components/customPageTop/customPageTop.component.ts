import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { CUSTOM_MENU } from '../../custom.menu';
import {Route, Router} from "@angular/router";
declare var $:any;
@Component({
  selector: 'app-custom-page-top',
  templateUrl: './customPageTop.html',
  styleUrls: ['customPageTop.scss']
})
//只支持两级级采集
export class CustomPageTopComponent implements OnInit,AfterViewInit {
  config={offset:{"top": 55},closeOnCLick:true};
  menuDom:any;
  menuItemsArray: any[] = [];
  constructor(private router:Router,private elementRef: ElementRef) {
    this.menuItemsArray=CUSTOM_MENU;
  }
  ngOnInit() {
  }
  // public onMenuClose(){
  //   console.log("menu closed");
  // }
  // public onMenuOpen(){
  //   console.log("menu Opened")
  // }
  public onItemSelect(item:any){
    console.log(item.link);
    this.router.navigateByUrl(item.link);
  }
  public closeMenu(){
    $(this.menuDom).trigger('click');
  }
  ngAfterViewInit(){
    //绑定全局的esc切换菜单的事件
    this.menuDom=this.elementRef.nativeElement.querySelectorAll('button.hamburger');
    document.onkeydown=(e)=>{
      if(e.keyCode==27){
        this.closeMenu();
      }
    };
  }
}
