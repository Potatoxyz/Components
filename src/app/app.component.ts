import {AfterViewInit, Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'app';

  ngOnInit() {}
  ngAfterViewInit(){
    setTimeout(()=>{
      document.getElementById('preloader').classList.add('none');
    },2000);
  }
}
