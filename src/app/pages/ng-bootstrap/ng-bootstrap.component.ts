import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ModalComponent} from "./modal/modal.component";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {routerTransition} from "../../../shared/animation/route.animate";
import {TranslateService} from "../../../shared/service/translate/translate.service";
var FileSaver = require('file-saver');
declare var $:any;
@Component({
  selector: 'app-ng-bootstrap',
  templateUrl: './ng-bootstrap.component.html',
  styleUrls: ['./ng-bootstrap.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
  providers:[TranslateService]
})
export class NgBootstrapComponent implements OnInit {
  loading=false;
  close:boolean=false;
  valueSort:boolean=true;
  tableDate:Array<any>=[
    {id:1,eName:'1',cName:'2',value:1},
    {id:2,eName:'2',cName:'2',value:8},
    {id:3,eName:'3',cName:'2',value:4},
    {id:4,eName:'4',cName:'2',value:4},
    {id:5,eName:'5',cName:'2',value:9},
    {id:6,eName:'6',cName:'2',value:3},
    {id:7,eName:'7',cName:'2',value:9},
  ];
  selectedtableDate=[];

  PageInfo={currentPage:1,pageSize:5,totalCount:1};
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
  provinceList=[];
  selectedprovinceList='';
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
              private fb:FormBuilder,
              private translateService:TranslateService) {
  }
  open(content) {
    this.modalservice.open(content).result.then((result) => {

    }, (reason) => {

    });
  }
  ngOnInit() {
    this.PageInfo.totalCount=this.tableDate.length;

    this.myform2=this.fb.group({
      name2:['',[Validators.required,Validators.minLength(6)]],
      password2:['',Validators.required],
      email2:['',[Validators.required,Validators.email]],
      tel2:['123'],
      decimals:['',[Validators.pattern('/^[1-9]\\d*$/')]]
    });

    this.provinceList=this.Province.map(item=>item.cname);
  }

  choose(e){
    this.selectedprovinceList=e.value;
    console.log(this.selectedprovinceList);
  }
  //导出
  doExport(){
    //换行用  \n , 每个格子的数据用 , 隔开
    var excelHeader="id,skuId,skuName,skuCode,warehouseName,currentInventory,availableInventory,waitReceiveQuantity,avaiableSaleDays,purchasingQuantity,forecastInNumber,statusShow,unitPrice \n";
    var excelContent;
    var exportPrefix = '\uFEFF';

    var colunm=['id','skuId','skuName','skuCode','warehouseName','currentInventory','availableInventory','waitReceiveQuantity','avaiableSaleDays','purchasingQuantity','forecastInNumber','statusShow','unitPrice'];

    excelContent=exportPrefix+excelHeader;

    //使用dataTable的数据测试导出
    $.getJSON('/assets/mock/data.json',data=>{
      var content=data.content.items;
      for(var i=0;i<10;i++){
        content.forEach(v=>{
          colunm.forEach(v1=>{
            excelContent+=v[v1]+',';
          });
          excelContent+='\n';
        });
      }
      var file = new File([excelContent], "table.xls", {type: "text/plain;charset=utf-8"});
      FileSaver.saveAs(file);
    });

    // this.tableDate.forEach(v=>{
    //   colunm.forEach(v1=>{
    //     excelContent+=v[v1]+',';
    //   });
    //   excelContent+='\n';
    // });



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
      var num=this.PageInfo.pageSize-(currentPage*this.PageInfo.pageSize-this.tableDate.length);//最后一页实际个数
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
      let endIndex=currentPage*this.PageInfo.pageSize;//把本页放进去
      let s=endIndex-this.PageInfo.pageSize;
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

  pageChanged(page:any){
    this.PageInfo.currentPage=page;
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
  Loading(){
    this.loading=true;
    setTimeout(()=>{this.loading=false},1500)
  }
  _doTranslate(str:string){
    var from='zh';
    var toLang='en';
    this.translateService.doTranslate(str,from,toLang).map(r=>r.json()).subscribe(result=>{
      if(result['trans_result']){
        let res=result.trans_result[0].dst;
        console.log(res);
        this.myform2.patchValue({name2:res})
      }
    })
  }
}
