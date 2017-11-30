import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

import {catchError, first, isEmpty, last, map} from "rxjs/operators";
import {of} from "rxjs/observable/of";
declare let $:any;
@Injectable()
export class Public_api{
  constructor(private http:HttpClient){
  }
  get(url):Observable<any>{
    let startTime=new Date().getTime();
    return this.http.get(url,startTime).pipe(
      map((value) => {
        let endTime=new Date().getTime();
        console.log(endTime-startTime);
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
