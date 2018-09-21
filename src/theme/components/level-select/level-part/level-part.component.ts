import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-level-part',
  templateUrl: './level-part.html',
  styleUrls: ['./level-part.scss']
})
export class LevelPartComponent {
  @Input() List:ListSelectModel[]=[];
  @Input() activeItemId:number=null;
  @Output() emitSelectedItem:EventEmitter<any>=new EventEmitter<any>();
  constructor() {}
  emitSelectEvent(item){
    this.emitSelectedItem.emit(item);
  }
}
export class ListSelectModel{
  id:number;
  text:string;
  hasChildren:boolean;
}
