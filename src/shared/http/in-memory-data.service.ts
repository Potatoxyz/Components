import { InMemoryDbService ,RequestInfo } from 'angular-in-memory-web-api';
import {Injectable} from "@angular/core";
import { delay } from 'rxjs/operators';
import {of} from "rxjs/observable/of";
import {GenetatorRandom} from "../method/genetator.random";
var Mock = require('mockjs');
@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo) {
    //生成数据
    const MockData=Mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'name|1':()=>GenetatorRandom(2)
      }],
      'categories|1-30':{
        'id|+1':1,
        'text|1':GenetatorRandom(2),
        'hasChild|1-2':true
      }
    });
    const categories=MockData.categories;
    const heroes =MockData.list;
    const nobodies: any[] = [ ];

    // entities with string ids that look like numbers
    const stringers = [
      { id: '10', name: 'Bob String'},
      { id: '20', name: 'Jill String'}
    ];

    let returnType  = 'object';
    if (reqInfo) {
      const body = reqInfo.utils.getJsonBody(reqInfo.req) || {};
      if (body.clear === true) {
        heroes.length = 0;
        nobodies.length = 0;
        stringers.length = 0;
      }

      // 'returnType` can be 'object' | 'observable' | 'promise'
      returnType = body.returnType || 'object';
    }
    const db = { heroes, nobodies, stringers };

    switch (returnType) {
      case ('observable'):
        return of(db).pipe(delay(10));
      case ('promise'):
        return new Promise(resolve => {
          setTimeout(() => resolve(db), 10);
        });
      default:
        return db;
    }
  }
}
