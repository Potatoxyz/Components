import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
@Component({
  selector: 'app-Tabs1',
  templateUrl: './Tabs1.component.html',
  styleUrls:['./Tabs1.scss'],
  providers:[]
})
export class Tabs1Component implements OnInit {
  @Input() Tabs=[];
  @Input() selectedTabId=1;
  @Output() selectedTabEmit:EventEmitter<any>=new EventEmitter<any>();
  constructor() {

  }
  ngOnInit() {}
  selectTab(id){
    this.selectedTabId=id;
    this.selectedTabEmit.emit(id);
  }
}
