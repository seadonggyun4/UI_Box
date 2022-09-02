// ==================== [ 기본 차트 생성 ] ====================
var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: (function (){ // x축 레이블값: 현재 시간값
                                var now = new Date();
                                var res = [];
                                var len = 20;
                                while (len--) {
                                    res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                                    now = new Date(now - 2000);
                                }
                                return res;
                            })(),
                datasets: [{ // 접속자 현황 데이터
                    label: '접속자 현황',
                    data: (function (){
                                var res = [];
                                var len = 0;
                                while (len < 20) {
                                    res.push((Math.random()*10).toFixed(1) - 0); //랜덤 데이터 생성
                                    len++;
                                }
                                return res;
                            })(),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0)',
                        'rgba(54, 162, 235, 0)',
                        'rgba(255, 206, 86, 0)',
                        'rgba(75, 192, 192, 0)',
                        'rgba(153, 102, 255, 0)',
                        'rgba(255, 159, 64, 0)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });


myChart.update();// 차트 업데이트





// ==================== [ 기본 차트 새로그리기 ] ====================
setInterval(() => {
    let axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');//현재시간값

    //[ 접속자 현황 데이터 ]
    let data0 = myChart.data.datasets[0].data//접속현황 데이터
    data0.shift(); //접속현황 데이터의 가장 왼쪽 값을 제거
    data0.push(Math.round(Math.random() * 10)); //접속현황 데이터의 가장 오른쪽 값을 추가


    // [x축 레이블 값]
    let label = myChart.data.labels
    label.shift();
    label.push(axisData)


    myChart.update();// 차트 업데이트

}, 2100)