import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal, NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {AnywereService} from "../../anywere.service";
import {SaleCalendarTest} from "../sale-calendar.test";
declare var $:any;
var ClipboardJS=require('clipboard/dist/clipboard.min.js');
@Component({
  selector: 'app-ngb-buttons',
  templateUrl: './ngb-buttons.component.html',
  styleUrls:['./ngb-buttons.component.scss','../style.scss'],
  providers:[NgbActiveModal,SaleCalendarTest]
})
export class NgbButtonsComponent implements OnInit {
  isCollapsed:boolean=true;
  date:any;
  title:any;
  close:boolean=false;
  showLoading:boolean=false;
  calendarTestData=[];
  isShowCalendar:boolean=false;
  constructor(private modalservice:NgbModal,
              public activeModal:NgbActiveModal,
              private anywereService:AnywereService,
              private saleCalendarTest:SaleCalendarTest) {
    this.calendarTestData=saleCalendarTest.calculateStorges;
  }
  ngOnInit() {}
  openModal(template){
    const ngbModalRef:NgbModalRef=this.modalservice.open(template,
      {backdrop:'static',size:'lg',windowClass:'animated slideInLeft'});
    // ngbModalRef.componentInstance.title='Example Title';
    this.title='Example Title';
    ngbModalRef.result.then((result)=>{

    },(reason)=>{

    });
  }
  closeModal(closeFunc){
    $('.modal').removeClass('slideInLeft').addClass('slideOutRight');
    setTimeout(()=>{
      closeFunc();
    },1000);
  }
  send(){
    this.anywereService.sendMessage('this message is send to http!');
  }
  toggleSlide(){
    this.isCollapsed=!this.isCollapsed;
  }
  closeAlert(){
    if(!this.close){
      this.close=!this.close;
    }
    else{
      $('#myalert').removeClass('fadeInDown').addClass('fadeOutUp');
      setTimeout( () =>{
        this.close=!this.close;
      },700);
    }
  }
  showLoad(){
    this.showLoading=true;
    setTimeout(()=>{
      this.showLoading=false;
    },5000)
  }
  CopyText(el,content,tooltip){
    /**
    初始化时设置动态设置要复制的内容
    */
    var clipboard=new ClipboardJS(el,{
      text:()=>content
    });
    //监听事件
    clipboard.on('success',()=>{
      console.log('Copy success');
      tooltip.open();
      setTimeout(()=>{tooltip.close();},1000);
    });
    //不知道为什么要第二次点击才能触发
    $(el).trigger('click');
  }
}
