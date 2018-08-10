import {Component, Input, OnInit} from '@angular/core';
import {fadeIn, routerTransition} from "../../../shared/animation/route.animate";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  @Input() showLoading:boolean=true;
  @Input() loadType:number=1;
  constructor() { }

  ngOnInit() {
  }

}
