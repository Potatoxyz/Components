import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {map} from "rxjs/operators";
import {of} from "rxjs/observable/of";
import {Injectable} from "@angular/core";
import {Public_api} from "../../../shared/http/public_api";

@Injectable()
export class Service{
  private heroesUrl = 'api/heroes';// URL to web api
  constructor(private http: HttpClient,
              private api:Public_api) {

  }
  getHeroes (): Observable<Hero[]> {
    return this.api.get(this.heroesUrl);
    // return this.http.get<Hero[]>(this.heroesUrl)
    //   //observer的pipe方法是拓展功能，里面直接写方法
    //   .pipe(
    //     catchError(this.handleError('getHeroes', []))//出现错误就返回[]
    //     // catchError((err)=>{console.log(err.body.error); return of([])})
    //   );
  }
  // operation 参数用于返回是哪个api或者什么地方出了问题
  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error.body.error);
  //     return of(result as T);
  //   };
  // }
  getHeroById(id:any):Observable<Hero[]>{
    let url=`${this.heroesUrl}/${id}`;
    return this.api.get(url).map((data)=>{
      let arr=[];
      arr.push(data);
      return arr;});
  }
}
export class Hero{
  id:number;
  name:string;
}
