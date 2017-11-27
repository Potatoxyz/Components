export const Pages:Array<PagesModel>=[
    {
      name:'page',
      pathName:'page',
      icon:'',
      children:[
        {
          name:'Loading',
          pathName:'loading',
          icon:'fa fa-spinner'
        },
        {
          name:'ng-bootstrap',
          pathName:'ngbootstrap',
          icon:'fa fa-rebel'
        },
        {
          name:'sweet-alert',
          pathName:'sweetalert',
          icon:'fa fa-rebel'
        },
        {
          name:'animation',
          pathName:'animation',
          icon:'fa fa-rebel'
        },
      ]
    }
];
export interface PagesModel{
  name:string;
  pathName:string;
  icon:string;
  children?:Array<PagesModel>;
}

