import {Component, OnInit} from '@angular/core';
import {routerTransition} from "../../../shared/animation/route.animate";
import {SaleCalendarTest} from "./sale-calendar.test";
@Component({
  selector: 'app-Button',
  templateUrl: './Button.component.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
  providers:[]
})
export class ButtonComponent implements OnInit {

  constructor() {

  }
  ngOnInit() {}
}
