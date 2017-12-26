export class ChartDataService{
  lineData=[
    {
    name: '安装',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
  }, {
    name: '工人',
    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
  }, {
    name: '销售',
    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
  }, {
    name: '项目开发',
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
  }, {
    name: '其他',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
  }];
  splineData=[
    {
      name:'线一',
      data:[15,20,10,18,90,66,32]
    },
    {
      name:'线二',
      data:[88,24,19,26,37,58,32]
    },
  ];
  pieData=[
    {
      name: '浏览器占比',
      data: [
        {
          name: 'Chrome',
          y: 12.8
        },
        {
          name: 'Firefox',
          y: 45.0,
        },
        {
          name: 'IE',
          y: 26.8,
        },
        {
          name: 'Safari',
          y: 8.5,
        },
        {
          name: 'Opera',
          y: 6.2,
        },
        {
          name: '其他',
          y: 0.7,
        }
      ]
    }
  ]

  columnYData=[
    {name:'money',data:[80,60,20,55]},
    {name:'num', data:[20,55,70,95]}
  ];
  columnXData=['group1','group2','group3','group4',]
}
