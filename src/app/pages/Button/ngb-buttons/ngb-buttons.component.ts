import {Component, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {AnywereService} from "../../anywere.service";
declare var $:any;
@Component({
  selector: 'app-ngb-buttons',
  templateUrl: './ngb-buttons.component.html',
  styleUrls:['./ngb-buttons.component.scss'],
  providers:[NgbActiveModal]
})
export class NgbButtonsComponent implements OnInit {
  isCollapsed:boolean=true;
  date:any;
  title:any;
  close:boolean=false;
  showLoading:boolean=false;
  constructor(private modalservice:NgbModal,
              public activeModal:NgbActiveModal,
              private anywereService:AnywereService) {

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
  closeModal(){
    $('.modal').removeClass('slideInLeft').addClass('slideOutRight');
    setTimeout(()=>{
      this.activeModal.close();
    },700);
  }
  send(){
    this.anywereService.sendMessage('this message is send to http!');
  }
  toggleSlide(){
    if(this.isCollapsed){
      $('#collapseExample').removeClass('myslideUp').addClass('myslideIn');
      this.isCollapsed=!this.isCollapsed;
      // console.log('开');
    }
    else{
      $('#collapseExample').removeClass('myslideIn').addClass('myslideUp');
      // console.log('关');
      setTimeout(()=>{
        this.isCollapsed=!this.isCollapsed;
      },500);

    }
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
