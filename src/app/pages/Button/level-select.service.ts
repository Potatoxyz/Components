import {Injectable} from "@angular/core";
import {Public_api} from "../../../shared/http/public_api";


@Injectable()
export class LevelSelectService{
  url:string="api/categories";
  constructor(private http:Public_api){}
  getCategories(id:number){
    let url=id==null?`${this.url}`:`${this.url}/${id}`;
    return this.http.get(url)
  }
}
