import * as Highcharts from 'highcharts';

export function getPublicChartTheme(){
  Highcharts.theme={
    title: {
      style: {
        fontSize: '20px',
        color: '#fff'
      }
    },
    subtitle: {
      style: {
        fontSize: '12px',
        color: '#fff'
      }
    },
    chart:{
      backgroundColor: 'transparent',
      height:400,
      width:null,
      animation:true,
    },
    //颜色集合，如何自动分配颜色则会循环调用这里的，例如column里的colorByPoint---boolean自动分配颜色
    colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'],
    credits: {
      enabled: false // 禁用版权信息
    },
    legend: {
      enabled: true,    //关闭每种颜色代表的数据  --图利
      itemStyle:{ "color": "#fff", "cursor": "pointer", "fontSize": "12px", "fontWeight": "normal" },//文字的文本样式
      itemHoverStyle:{"color": "#fff"}//hover样式
    },
    //里面包含指定图表类型的设置或通用设置
    plotOptions:{
      //柱状图默认值
      column:{
        animation:true,
        borderColor:'transparent',
        borderRadius:2,
        className:'',
        //每个柱子顶部显示值
        dataLabels:{
          enabled:true,
          style:{"color": "contrast", "fontSize": "11px", "fontWeight": "bold", "textOutline": "1px 1px contrast"}
        },
      },
      //直线图
      line:{
        marker: {
          radius: 4,
          lineColor: '#fff',
          lineWidth: 2
        }
      },
      //曲线图
      spline: {
        marker: {
          radius: 4,
          lineColor: '#666666',
          lineWidth: 1
        }
      },
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          //数据标签允许使用自定的html
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',

          //连接线的颜色
          connectorColor: 'silver'
        }
      },
    },
    //提示框
    tooltip: {
      backgroundColor:'rgba(247,247,247,0.85)',
    },
    //Y轴字体样式
    yAxis: {
      title: {
        style: {
          fontSize: '14px',
          color: '#fff',
          fontWeight:'normal'
        },
      },
      labels: {
        style:{ "color": "#fff", "cursor": "default", "fontSize": "12px" }
      }
    },
    xAxis: {
      labels: {
        style:{ "color": "#fff", "cursor": "default", "fontSize": "12px" }
      },
    },
  };
  return Highcharts.theme;
}

