import {Component, Input, OnInit} from '@angular/core';
import {fadeIn, routerTransition} from "../../../shared/animation/route.animate";
import {PagesModel} from "../../../app/pages/page.menu";

@Component({
  selector: 'app-sideBar',
  templateUrl: './sideBar.component.html',
  styleUrls: ['./sideBar.component.scss'],
})
export class SideBarComponent implements OnInit {
  @Input() MenuItem:PagesModel;
  constructor() { }

  ngOnInit() {
  }

}
