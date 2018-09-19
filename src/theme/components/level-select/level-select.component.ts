import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {SweetAlert} from "../../../shared/method/sweetAlert";

@Component({
  selector: 'app-level-select',
  templateUrl: './level-select.html',
  styleUrls: ['./level-select.scss'],
  providers:[]
})
export class LevelSelectComponent extends SweetAlert implements OnInit{
  selectedId:number=null;
  order:number=0;
  List=[];
  selectedSort:string='';
  selectedSortArr=[];
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

  constructor() {
    super();
  }
  getSelectedItem(item,order){
    this.selectedId=item.id;
    this.order=order;
    console.log(item);
    console.log(order);
    if(item.hasChildren)
    this.getCategories(item.id);
    this.generateSorts(item,order);
  }
  ngOnInit(){
    this.getCategories();
  }
  generateSorts(item,order){
    this.selectedSortArr[order]=item.text;
    this.selectedSortArr.length=order+1;
    this.selectedSort=this.selectedSortArr.join(' > ');
  }
  getCategories(id=null){
    // this.amazonListingServiceService.getCategories("DE", id).subscribe(data => {
    //   let cats = data.content;
    //   for (const item of cats) {
    //     item.text = item.browseNodeName;
    //   }
    //   cats.unshift({id:'', text:'请选择'});
    //   console.log(cats);
    //   if(id==null){
    //     this.List[0]=cats;
    //     this.List.length=1;
    //   }
    //   else{
    //     this.List[this.order+1]=cats;
    //     this.List.length=this.order+2;
    //   }
    // }, this.handleError);
  }
}
