import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal, NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {AnywereService} from "../../anywere.service";
import {SaleCalendarTest} from "../sale-calendar.test";
declare var $:any;
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
}
