import {Component, OnInit} from '@angular/core';
import {DataService} from "./data.service";
import {
  animate, group, keyframes, query, sequence, stagger, state, style, transition,
  trigger
} from "@angular/animations";

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  providers: [DataService],
  animations: [
    trigger('initShow', [       //初始化动画，只要[@initShow]='**',初始化有值就能触发
      transition('void=>*',
        //keyframes通过offset百分比的值来控制在多少秒的时候什么样式
        [
            animate('800ms ease', keyframes([
                style({transform:'translateY(-100%)',offset:0}),
                style({transform:'translateY(-50%)',offset:0.2}),
                style({transform:'translateY(0%)',offset:0.4}),
                style({transform:'translateY(50%)',offset:0.6}),
                style({transform:'translateY(0%)',offset:0.8}),
              ]
            )),
          ]
      ),
    ]),
    trigger('fly',[           //通过state的name不同触发  [@fly]="active | inactive"
     // state('active',style({transform:'translateX(0)',color:'white'})),
     // state('inactive',style({transform:'translateX(100%)',color:'black'})),
      // transition('active<=>inactive',[
      //   animate('500ms ease'),
        // query(':enter',[style({tranform:'translateX(-100%)'}),
        // animate('0.5s',style({tranform:'translateX(0)'}))],{optional:true})
      // ]),
      transition('void=>*',
        //keyframes通过offset百分比的值来控制在多少秒的时候什么样式
        [
          animate('800ms ease',style({transform:'translateX(-100%)'})),
        ]
      )


      //***使用不同的延迟
      // transition('active=>inactive',group([
      //   animate('0.5s ease',style({transform:'translateX(100%)'})),
      //   animate('0.5s 1s ease',style({color:'black'})),
      //   ])
      // ),
      // transition('inactive=>active',group([
      //     animate('0.5s ease',style({color:'white'})),
      //     animate('0.5s 1s ease',style({transform:'translateX(0)'}))
      //   ])
      // )
    ]),

    //query只能用于查找trigger元素的子节点
    //return zero element错误，需添加{optional:true}参数

    //sequence里面放style、animate按顺序执行，没什么用，默认就是按顺序

    //父级transition,group里放的animate动画是同时执行的,也就是说可以用不同的timer,delay实现不同的动画效果

    //transition里面只能放animate或group>animate
  ]
})
export class AnimationComponent implements OnInit {
  fruits: Array<any>;
  state: string = 'inactive';

  constructor(private dataService: DataService) {
    this.fruits = this.dataService.liData;
  }

  ngOnInit() {
  }

  toggleMove(item:any) {
    if(item.state=='active')
    this.fruits.find(value => value.name==item.name).state='inactive';
    else
    this.fruits.find(value => value.name==item.name).state='active';
  }
  add(){
    this.fruits.push({name:'桃子',state:'active'});
  }
  remove(){
    this.fruits.pop();  //删除最后一条
  }
}
