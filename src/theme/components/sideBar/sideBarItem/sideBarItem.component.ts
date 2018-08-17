import {Component, Input, OnInit} from '@angular/core';
import {fadeIn, routerTransition} from "../../../../shared/animation/route.animate";
import {PagesModel} from "../../../../app/pages/page.menu";

@Component({
  selector: 'app-sideBarItem',
  templateUrl: './sideBarItem.component.html',
  styleUrls: ['./sideBarItem.component.scss'],
})
export class SideBarItemComponent implements OnInit {
  @Input() MenuItem:PagesModel;
  constructor() { }

  ngOnInit() {
  }

}
