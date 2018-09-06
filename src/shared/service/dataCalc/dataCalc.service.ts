import {Injectable} from "@angular/core";

@Injectable()
export class DataCalcService{
  Festival=[
    {id:'1',text:'元旦',date:'1-1'},
    {id:'2',text:'情人节',date:'2-14'},
    {id:'3',text:'中国植树节',date:'3-12'},
    {id:'4',text:'愚人节',date:'4-1'},
    {id:'5',text:'世界地球日',date:'4-22'},
    {id:'6',text:'劳动节',date:'5-1'},
    //5月第二个星期日
    {id:'7',text:'母亲节',date:'null'},
    {id:'8',text:'儿童节',date:'6-1'},
    //6月第三个星期日
    {id:'9',text:'父亲节',date:'null'},
    {id:'10',text:'建军节',date:'8-1'},
    {id:'11',text:'教师节',date:'9-10'},
    {id:'12',text:'国庆节',date:'10-1'},
    {id:'13',text:'万圣节',date:'11-1'},
    //11月第四个星期四
    {id:'14',text:'感恩节',date:'null'},
    {id:'15',text:'圣诞节',date:'12-25'},
  ];
  constructor(){}
  //节日日期 - 现在日期 = 倒计天数
  getResultDay(targetDate:Date){
    let tar=targetDate.toLocaleDateString();
    let target=Date.parse(tar);//返回当前至1970毫秒数
    let sta=new Date().toLocaleDateString();
    let start=Date.parse(sta);
    console.log(tar);
    console.log(sta);
    return Math.ceil(target-start)/(24*60*60*1000);
  }
}
