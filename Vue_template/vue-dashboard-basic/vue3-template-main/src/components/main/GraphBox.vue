<template>
    <!-- ========== [ Charts ] ========== -->
    <section class="graphBox">
      <h1 class="visually-hidden">DashBoard chart</h1>
      <div class="box">
        <h2>시간대별 VD 접속 현황</h2>
        <canvas id="myChart"  class="sm-hidden" width="800" height="100"></canvas>
        <canvas id="myChart"  class="sm-only"></canvas>
      </div>
    </section>
</template>


<script>
import Chart from 'chart.js'

export default {
    mounted(){
        if(window.innerWidth >= 768){
            this.createChartDesktop()
        } else {
            this.createChartMobile()
        }
    },
    methods: {
        createChartDesktop(){
            // ======================================== [ 기본 차트 생성 ] ========================================
            var ctx = document.querySelector('#myChart.sm-hidden').getContext('2d');
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
                        ],
                        borderColor: [
                            '#0084ff',
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
            
            
            
            
            
            // ======================================== [ 기본 차트 새로그리기 ] ========================================
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
        },
        createChartMobile(){
                // ======================================== [ 기본 차트 생성 ] ========================================
                var ctx = document.querySelector('#myChart.sm-only').getContext('2d');
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
                            ],
                            borderColor: [
                                '#0084ff',
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





                // ======================================== [ 기본 차트 새로그리기 ] ========================================
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
        }
    }
}
</script>