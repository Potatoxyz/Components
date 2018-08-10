import {trigger, state, animate, style, transition} from '@angular/animations';

export function routerTransition() {
  return slideToRight();
}

export function slideToRight() {
  return trigger('routerTransition', [
    state('void', style({position:'absolute', width:'calc(100% - 230px)',minHeight:'calc(100vh - 90px)',marginBottom:'15px'}) ),
    state('*', style({position:'absolute', width:'calc(100% - 230px)',minHeight:'calc(100vh - 90px)',marginBottom:'15px'}) ),
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))
    ])
  ]);
}

export function slideToLeft() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%'}) ),
    state('*', style({position:'fixed', width:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateX(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    ])
  ]);
}

export function slideToBottom() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%', height:'100%'}) ),
    state('*', style({position:'fixed', width:'100%', height:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateY(-100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(100%)'}))
    ])
  ]);
}

export function slideToTop() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%', height:'100%'}) ),
    state('*', style({position:'fixed', width:'100%', height:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateY(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(-100%)'}))
    ])
  ]);
}
export function fadeIn() {
  return trigger('routerTransition', [
    // state('void', style({position:'fixed', width:'100%', height:'100%'}) ),
    // state('*', style({position:'fixed', width:'100%', height:'100%'}) ),
    transition(':enter', [
      style({opacity: '0'}),
      animate('0.5s linear', style({opacity: '1'}))
    ]),
    transition(':leave', [
      style({opacity: '1'}),
      animate('0.5s linear', style({opacity: '0'}))
    ])
  ]);
}
