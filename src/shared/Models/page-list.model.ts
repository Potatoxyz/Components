export class ApiPageList<TItem>{
  pageInfo: PageInfoModel;
  items: TItem[]
}

export class PageInfoModel {
  pageIndex: number;
  pageSize: number;
  totalCount: number;
}
