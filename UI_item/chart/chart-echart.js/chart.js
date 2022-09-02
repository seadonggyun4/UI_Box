// DOM을 준비하고 echart 객체를 만듭니다.
var myChart = echarts.init(document.getElementById('chart01'));

//chart의 설정을 정합니다.
var option = {
    title: {
        text: '시간대별 VD 접속 현황',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#283b56'
            }
        }
    },
    legend: {
        data:['순수익']
    },
    dataZoom: {
        show: false,
        start: 0,
        end: 100
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            data: (function (){
                var now = new Date();
                var res = [];
                var len = 20;
                while (len--) {
                    res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                    now = new Date(now - 2000);
                }
                return res;
            })()
        },
    ],
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: '접속현황',
            max: 10,
            min: 0,
            boundaryGap: [0.2, 0.2],
            axisLabel: {
                formatter: '{value}'
            },
        }
    ],
    series: [
    	{
            name: '접속현황',
            type: 'line',
            lineStyle:{
				color:'#2A265C' //line차트 색상 변경
			},
            smooth: true, //부드러운 line 표현
            yAxisIndex: 0, //yAxis 1번째 사용
            data: (function (){
                var res = [];
                var len = 0;
                while (len < 20) {
                    res.push((Math.random()*10).toFixed(1) - 0); //랜덤 데이터 생성
                    len++;
                }
                return res;
            })()
        }
    ]
};

// 위에서 설정한 속성을 차트에 반영합니다.
myChart.setOption(option);

// ==================== [ 핵심로직: 데이터를 생성하고 삭제합니다. ] ====================
setInterval(function (){
	//x축에 실시간 데이터 생성
    var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');

    var data0 = option.series[0].data; //접속현황 데이터

    
    data0.shift(); //접속현황 데이터의 가장 왼쪽 값을 제거
    data0.push(Math.round(Math.random() * 10)); //접속현황 데이터의 가장 오른쪽 값을 추가

	//x축에 시간 데이터 추가
    option.xAxis[0].data.shift();
    option.xAxis[0].data.push(axisData);

	//차트에 반영
    myChart.setOption(option);
}, 2100);


