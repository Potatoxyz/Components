import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

import {catchError, first, isEmpty, last, map, tap} from "rxjs/operators";
import {of} from "rxjs/observable/of";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
declare let $:any;
@Injectable()
export class Public_api{
  _time=new BehaviorSubject({time:0,timeKind:''});
  startTime:number;
  endTime:number;
  constructor(private http:HttpClient){
  }
  get(url):Observable<any>{
    return this.http.get(url).pipe(
      tap(()=>{
        this.startTime=new Date().getTime();
        $('#processBar').css('display','block');
        // console.log('start: '+this.startTime);
        this._time.next({time:this.startTime,timeKind:'start'});
      },()=>{},()=>{
        this.endTime=new Date().getTime();
        // console.log('end: '+this.endTime);
        // $('#processBar').css('display','none');
        this._time.next({time:this.endTime,timeKind:'end'});
        $('#processBar').css('display','none');
      }),
      map((value) => {
        // let endTime=new Date().getTime();
        // this._time.next({startTime:startTime,endTime:endTime});
        // console.log('get');
        return value}),
      catchError(this.handdleError())
    );
  }
  handdleError<T>(){
    return (err)=>{
      console.error(err);
      return of([]);
    }
  }
}
