import {Component, OnInit} from '@angular/core';
import {routerTransition} from "../../../shared/animation/route.animate";
@Component({
  selector: 'app-Button',
  templateUrl: './Button.component.html',
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ButtonComponent implements OnInit {

  constructor() {

  }
  ngOnInit() {}
}
