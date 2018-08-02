import {Jsonp} from "@angular/http";
import {Injectable} from "@angular/core";

var md5=require('assets/script/md5.js');
@Injectable()
export class TranslateService{
  body={
    appid:'20180328000140996',
    key:'7m5b4792TUd7w0VDWjqK',
  };
  constructor(private jsonp: Jsonp){}
   doTranslate(str:string,from:string,toLang:string){
    console.log(str)
    let salt=(Math.random()*10000).toFixed(0);
    let sign=md5(this.body.appid + str + salt +this.body.key);

    // let url='http://api.fanyi.baidu.com/api/trans/vip/translate?q=apple&from=en&to=zh&appid=2015063000000001&salt=1435660288&sign=f89f9594663708c1605f3d736d01d2d4callback=JSONP_CALLBACK';
    // return this.jsonp.request(url);

    return this.jsonp.request(`http://api.fanyi.baidu.com/api/trans/vip/translate?q=${str}&from=${from}&to=${toLang}&appid=${this.body.appid}&salt=${salt}&sign=${sign}&callback=JSONP_CALLBACK`);
  }
}
