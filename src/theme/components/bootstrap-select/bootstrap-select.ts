import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {BsDataService} from "./bsData.service";

declare var $: any;

@Component({
  selector: 'a-bootstrap-select',
  templateUrl: './bootstrap-select.html',
  styleUrls: ['./bootstrap-select.scss'],
  providers: [BsDataService]
})

export class BootstrapSelect implements OnInit, AfterViewInit {
  @Input() public GroupData = [];

  constructor(private bsDataService: BsDataService) {
    this.GroupData = bsDataService.groupData.content
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('init bs select')
    console.log(this.GroupData)
    $('#bs-select').selectpicker({
      actionsBox: true,
      liveSearch: true,
      liveSearchPlaceholder: '请输入姓名或工号',
      noneSelectedText: '请选择角色',
      selectAllText: '全选',
      deselectAllText: '重置',
      noneResultsText: '未匹配成功'
    });
    $('#bs-select').on('shown.bs.select', () => {
      //主管的点击事件
      $('#bs-select').siblings('.dropdown-menu').find('.dropdown-header').click((e) => {
        var groupHeadIndex = $(e.currentTarget).index('.dropdown-header');
        var groupHeadName = $(e.currentTarget).find('span.text').text();
        var groupHeadId = $('#bs-select').find('optgroup').eq(groupHeadIndex).data('id');
        //主管的id
        console.log(groupHeadId);
        //设置下拉勾选
        let group: any = this.GroupData.filter(v => v.id == groupHeadId);
        let groupMembers = [];
        if (group.length > 0) {
          groupMembers = group[0].toLists.map(v => v.id);
          console.log(groupMembers)
        }
        //设置select主管组员的值
        $('#bs-select').selectpicker('val', groupMembers);
        //关闭下拉
        $('#bs-select').selectpicker('toggle');
      })
    });
    $('#bs-select').on('changed.bs.select', function () {
      console.log($('#bs-select').val())
    });
  }
}
