import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {SweetAlert} from "../../../shared/method/sweetAlert";
import {LevelSelectService} from "../../../app/pages/Button/level-select.service";

@Component({
  selector: 'app-level-select',
  templateUrl: './level-select.html',
  styleUrls: ['./level-select.scss'],
  providers:[LevelSelectService]
})
export class LevelSelectComponent extends SweetAlert implements OnInit{
  selectedId:number=null;
  order:number=0;
  List=[];
  selectedSort:string='';
  selectedSortArr=[];
  //选中的样式
  selectedSortIdArr=[];
  searchTetxt:string='';

  testSearchData=[
    {id:1,text:'text1'},
    {id:2,text:'text2'},
    {id:3,text:'text3'},
  ];
  search=(text$: Observable<string>)=>
   text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => {
        if(term.length < 2)
          return [];
        else{
          let objarr=this.testSearchData.filter(v => v.text.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
          let results=[];
          objarr.forEach(value => {results.push(value.text)});
          return results;
        }});

  constructor(private levelSelectService:LevelSelectService) {
    super();
  }
  getSelectedItem(item,order){
    this.selectedId=item.id;
    this.order=order;
    console.log(item);
    console.log(order);
    //有子分类查询
    if(item.hasChild)
    this.getCategories(null);

    this.generateSorts(item,order);
  }
  ngOnInit(){
    this.getCategories(null,true);
  }
  generateSorts(item,order){
    this.selectedSortArr[order]=item.text;
    this.selectedSortArr.length=order+1;
    this.selectedSort=this.selectedSortArr.join(' > ');

    this.selectedSortIdArr[order]=item.id;
    this.selectedSortIdArr.length=order+1;
  }
  getCategories(id=null,isFirstLoad=false){
    this.levelSelectService.getCategories(id).subscribe(data => {
      console.log(data);
      data.unshift({id:'', text:'请选择'});
      //如果是第一个分类,分类总长度为1
      if(isFirstLoad){
        this.List[0]=data;
        this.List.length=1;
      }
      else{
        this.List[this.order+1]=data;
        this.List.length=this.order+2;
      }
    }, this.error);
  }
}
