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
      //水龙头  能进行数据最开始和完成阶段操作
      tap(()=>{
        this.startTime=new Date().getTime();
        // console.log('start: '+this.startTime);
        this._time.next({time:this.startTime,timeKind:'start'});
      },()=>{},()=>{
        this.endTime=new Date().getTime();
        // console.log('end: '+this.endTime);
        this._time.next({time:this.endTime,timeKind:'end'});
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
