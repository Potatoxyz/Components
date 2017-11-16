import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ModalComponent} from "./modal/modal.component";
declare var $:any;
@Component({
  selector: 'app-ng-bootstrap',
  templateUrl: './ng-bootstrap.component.html',
  styleUrls: ['./ng-bootstrap.component.scss']
})
export class NgBootstrapComponent implements OnInit {
  close:boolean=false;
  tableDate=[
    {id:1,eName:'1',cName:'2'},
    {id:2,eName:'1',cName:'2'},
    {id:3,eName:'1',cName:'2'},
  ];
  selectedtableDate=[];
  selectecurrentPages=[];
  currentPage:number=1;
  pageSize:number=2;
  constructor(private modalservice:NgbModal) { }

  ngOnInit() {
  }
  openModal(){
    const ngbModalRef:NgbModalRef=this.modalservice.open(ModalComponent,
      {backdrop:'static',size:'lg',windowClass:'animated slideInLeft'});
    ngbModalRef.componentInstance.title='Example Title';
    ngbModalRef.result.then((result)=>{

    },(reason)=>{

    });
  }
  closeAlert(){
    $('#myalert').removeClass('fadeInDown').addClass('fadeOutUp');
    setTimeout( () =>{
      this.close=!this.close;
    },700);
  }
  selectSingle(ifChecked:boolean,id:any){
    let index=this.selectedtableDate.indexOf(id);
    if(ifChecked&&index==-1){
      this.selectedtableDate.push(id);
    }
    else{
      this.selectedtableDate.splice(index,1);
    }
    console.log(this.selectedtableDate);
  }
  selectThisPage(ifChecked:boolean,currentPage:any){
    let index=this.selectecurrentPages.indexOf(currentPage);
    if(ifChecked){
      if(index==-1){
        this.selectecurrentPages.push(currentPage);
      }
    }
    else{
      this.selectecurrentPages.splice(index,1);
    }
    console.log(this.selectecurrentPages);
  }
  selectAll(ifChecked:boolean){
    if(ifChecked){
      this.selectedtableDate=[];
      this.tableDate.forEach((value)=>{
        this.selectedtableDate.push(value.id);
      })
    }
    else{
      this.selectedtableDate=[];
    }
    console.log(this.selectedtableDate);
  }
  pageChanged(page:any){
    this.currentPage=page;
  }
}
