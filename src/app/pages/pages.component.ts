import {Component, OnInit} from '@angular/core';
import {PagesModel,Pages} from "./page.menu";
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  pages:Array<PagesModel>;
  constructor() {
    this.pages=Pages;
  }

  ngOnInit() {
  }
}
