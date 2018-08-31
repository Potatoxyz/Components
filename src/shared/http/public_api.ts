import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

import {catchError, first, isEmpty, last, map, tap} from "rxjs/operators";
import {of} from "rxjs/observable/of";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
declare let $:any;
@Injectable()
export class Public_api{
  _time=new BehaviorSubject<HttpTimeModel>({time:0,timeKind:''});
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
        let startTime:HttpTimeModel={time:this.startTime,timeKind:'start'};
        this._time.next(startTime);
      },()=>{},()=>{
        this.endTime=new Date().getTime();
        // console.log('end: '+this.endTime);
        let endTime:HttpTimeModel={time:this.endTime,timeKind:'end'};
        this._time.next(endTime);
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
export class HttpTimeModel{
  time:number;
  timeKind:string;
}
