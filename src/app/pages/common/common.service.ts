export class CommonService{
  headList:Array<HeadList>=[
    {title:'帐号',list:[
      {id:1,text:'accountA'},
      {id:2,text:'accountB'},
      {id:3,text:'accountC'},
      {id:4,text:'accountD'},
      {id:5,text:'accountE'},
    ]},
    {title:'角色',list:[
      {id:1,text:'管理员'},
      {id:2,text:'组长'},
      {id:3,text:'队长'},
      {id:4,text:'老板'},
      {id:5,text:'员工'},
    ]},
    {title:'时间',list:[
      {id:1,text:'昨天'},
      {id:2,text:'7天内'},
      {id:3,text:'15天内'},
      {id:4,text:'30天内'},
    ]},
  ]
  data=new Array(6)
}
export class HeadList{
  title:string;
  list:HeadListItem[];
}
export class HeadListItem{
  id:number;
  text:string;
}
