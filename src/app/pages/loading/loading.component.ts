import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../shared/animation/route.animate";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
