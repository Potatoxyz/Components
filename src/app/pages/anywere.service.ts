import {Subject} from "rxjs/Subject";

export class AnywereService{
  ob=new Subject<any>();
  constructor(){}
  sendMessage(mes:any){
    this.ob.next(mes);
  }
  getMessage(){
    return this.ob;
  }
}
