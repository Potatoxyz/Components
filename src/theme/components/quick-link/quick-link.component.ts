import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-quick-link',
  templateUrl: './quick-link.html',
  styleUrls: ['./quick-link.scss']
})
export class QuickLinkComponent {
  ActiveLinks=[];
  @Input() CUSTOM_MENU=[];
  constructor(private activeRoute:Router) {
    this.activeRoute.events.subscribe(r=>{
      if(r instanceof NavigationEnd){
        console.log(r.url);
        var has=this.ActiveLinks.some(value=>value['link']==r.url);
        this.CUSTOM_MENU.forEach(v=>{
          if(v['subItems']){
            v['subItems'].forEach(v1=>{
              if(v1.link==r.url&&!has){
                this.ActiveLinks.push(v1)
              }
            })
          }
          else{
            if(v.link==r.url&&!has){
              this.ActiveLinks.push(v)
            }
          }
        })
      }
    })
  }
  clearLink(target,e){
    if(target==0){
      this.ActiveLinks=[];
      return;
    }
    else{
      var index=this.ActiveLinks.findIndex(v=>v.link==target.link);
      if(index!=-1){
        this.ActiveLinks.splice(index,1);
      }
    }
  }
}
