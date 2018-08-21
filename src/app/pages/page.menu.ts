export const Pages:Array<PagesModel>=[
    {
      name:'page',
      pathName:'page',
      icon:'',
      children:[
        {
          name:'Loading',
          pathName:'loading',
          icon:'fa fa-right fa-spinner'
        },
        {
          name:'ng-bootstrap',
          pathName:'ngbootstrap',
          icon:'fa fa-right fa-rebel'
        },
        {
          name:'sweet-alert',
          pathName:'sweetalert',
          icon:'fa fa-right fa-rebel'
        },
        {
          name:'animation',
          pathName:'animation',
          icon:'fa fa-right fa-rebel'
        },
        {
          name:'common',
          pathName:'common',
          icon:'fa fa-right fa-rebel'
        },
        {
          name:'http',
          pathName:'http',
          icon:'fa fa-right fa-rebel'
        },
        {
          name:'hightcharts',
          pathName:'hightcharts',
          icon:'fa fa-right fa-rebel'
        },
        {
          name:'dataTable',
          pathName:'dataTable',
          icon:'fa fa-right fa-rebel'
        },
      ]
    }
];
export class PagesModel{
  name:string;
  pathName:string;
  icon:string;
  children?:PagesModel[];
}

