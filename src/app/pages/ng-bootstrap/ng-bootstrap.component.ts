import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ModalComponent} from "./modal/modal.component";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {routerTransition} from "../../../shared/animation/route.animate";
declare var $:any;
@Component({
  selector: 'app-ng-bootstrap',
  templateUrl: './ng-bootstrap.component.html',
  styleUrls: ['./ng-bootstrap.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class NgBootstrapComponent implements OnInit {
  close:boolean=false;
  tableDate=[
    {id:1,eName:'1',cName:'2'},
    {id:2,eName:'1',cName:'2'},
    {id:3,eName:'1',cName:'2'},
    {id:4,eName:'1',cName:'2'},
    {id:5,eName:'1',cName:'2'},
    {id:6,eName:'1',cName:'2'},
    {id:7,eName:'1',cName:'2'},
  ];
  selectedtableDate=[];
  currentPage:number=1;
  pageSize:number=2;
  currentPages=[];
  pageData=[];
  pageCount:number;
  isCollapsed:boolean=true;
  date:any;
  Province=[
    {pname:'chongqing',cname:'重庆'},
    {pname:'beijing',cname:'北京'},
    {pname:'tianjin',cname:'天津'},
    {pname:'shanghai',cname:'上海'},
    {pname:'neimenggu',cname:'内蒙古'},
    {pname:'xinjiang',cname:'新疆'},
    {pname:'xizang',cname:'西藏'},
    {pname:'guangxi',cname:'广西'},
    {pname:'ningxia',cname:'宁夏'},
  ];
  typehead: any='';
  name: any='';
  password: any='';
  email: any='';
  tel: any='';

  myform2:FormGroup;
  search = (text$: Observable<string>) =>
      text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => {
        if(term.length < 2)
        return [];
        else{
          let objarr=this.Province.filter(v => v.pname.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
          let cname=[];
          objarr.forEach(value => {cname.push(value.cname)});
          return cname;
          }});
  constructor(private modalservice:NgbModal,
              private fb:FormBuilder) {
  }
  open(content) {
    this.modalservice.open(content).result.then((result) => {

    }, (reason) => {

    });
  }
  ngOnInit() {
    this.pageCount=this.tableDate.length/this.pageSize;

    if(this.tableDate.length%this.pageSize!=0){
      this.pageCount=Number((this.tableDate.length/this.pageSize).toFixed(0));
    }

    this.myform2=this.fb.group({
      name2:['',[Validators.required,Validators.minLength(6)]],
      password2:['',Validators.required],
      email2:['',[Validators.required,Validators.email]],
      tel2:['123'],
      decimals:['',[Validators.pattern('/^[1-9]\\d*$/')]]
    });
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
  getThisPageData(currentPage:any){
    var thisPageData=[];
    if(currentPage==this.pageCount){//假设不能整除，且是最后一页
      var num=this.pageSize-(currentPage*this.pageSize-this.tableDate.length);//最后一页实际个数
      var end=this.tableDate.length;
      var start=end-num;
      for(start;start<=end-1;start++){
        // this.selectedtableDate.push(this.tableDate[start].id);
        thisPageData.push(this.tableDate[start].id);
      }
      this.pageData.push({currentPage:currentPage,data:thisPageData});
      // console.log('pageData push1');
    }
    else{
      let endIndex=currentPage*this.pageSize;//把本页放进去
      let s=endIndex-this.pageSize;
      for(s;s<=endIndex-1;s++){
        // this.selectedtableDate.push(this.tableDate[s].id);
        thisPageData.push(this.tableDate[s].id);
      }
      this.pageData.push({currentPage:currentPage,data:thisPageData});
      // console.log('pageData push2');
    }
  }
  selectThisPage(ifChecked:boolean,currentPage:number){
    let index=this.currentPages.indexOf(currentPage);
    this.getThisPageData(currentPage);
    if(ifChecked){
      if(index==-1){
       this.currentPages.push(currentPage);
       console.log(this.pageData);
       for(let item of  this.pageData){
         if(item.currentPage==currentPage){
           for(let i of item.data){
             this.selectedtableDate.push(i);
           }
         }
       }
       console.log(this.selectedtableDate.length);
       console.log(this.tableDate.length);
      }
    }
    else{
      // let thisPageData=[];
      this.currentPages.splice(index,1);
      for(let item of  this.pageData){
        if(item.currentPage==currentPage){
          for(var i=0;i<this.selectedtableDate.length;i++){
            for(let j of item.data){
              if(j==this.selectedtableDate[i]){
                console.log(j);
                this.selectedtableDate.splice(i,1);
              }
            }
          }
        }
      }
    }
    // console.log(this.currentPages);
  }

  selectAll(ifChecked:boolean){
    if(ifChecked){
      this.selectedtableDate=[];
      this.tableDate.forEach((value)=>{
        this.selectedtableDate.push(value.id);
      });

      for(var i=1;i<=this.pageCount;i++){
        this.currentPages.push(i);
      }

    }
    else{
      this.selectedtableDate=[];
      this.currentPages=[]
    }
    // console.log(this.selectedtableDate);
  }
  pageChanged(page:any){
    this.currentPage=page;
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
  onSubmit(value:any){
    console.log(value);
  }
  onSubmit2(value:any){
    console.log(value);
  }
}
