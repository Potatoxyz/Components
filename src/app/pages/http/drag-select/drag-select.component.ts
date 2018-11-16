import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
var DragSelect=require('../../../../shared/plugin/drag-select/drag-select.js');
@Component({
  selector: 'app-drag-select',
  templateUrl: 'drag-select.component.html',
  styleUrls: ['drag-select.component.scss']
})

export class DragSelectComponent implements OnInit,AfterViewInit {
  Divs=new Array(50);
  selectedItems=[];
  @ViewChild('accountWrap') accountWrap:ElementRef;
  constructor() {
  }

  ngOnInit() {
  }
  ngAfterViewInit(){
    new DragSelect({
      selectables:this.accountWrap.nativeElement.querySelectorAll('.item'),
      area:this.accountWrap.nativeElement,
      multiSelectMode:true,
      selectedClass:'selected',
      callback:(elArr)=>{
        this.selectedItems=[];
        elArr.forEach(v=>{
          this.selectedItems.push(v.getAttribute('acid'));
        })
      }
    });
  }
}
