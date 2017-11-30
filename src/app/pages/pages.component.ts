import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from "@angular/router";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import {Public_api} from "../../shared/http/public_api";
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  constructor(private route:Router,
              private activeRoute:ActivatedRoute) {
  }
  ngOnInit() {
    // this.route.events
    //   .filter(event => event instanceof NavigationStart)
    //   // example: NavigationStart, RoutesRecognized, NavigationEnd
    //   .map(() => this.activeRoute)
    //   .subscribe((event) => {
    //     console.log('NavigationStart:', event);
    //   });
  }
}
