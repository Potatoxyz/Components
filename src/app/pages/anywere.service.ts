import {Subject} from "rxjs/Subject";

export class AnywereService{
  icon=new Subject<any>();
  constructor(){}
  sendMessage(mes:any){
    this.icon.next(mes);
  }
  getMessage(){
    return this.icon;
  }

  collapse=new Subject<any>();
  ToggleCollapse(mes:any){
    this.collapse.next(mes)
  }
  getCollapse(){
    return this.collapse;
  }
}
