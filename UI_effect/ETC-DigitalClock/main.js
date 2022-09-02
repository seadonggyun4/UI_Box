function clock() {
  // 시,분,초 선택자 변수 생성
  var hours = document.getElementById("hour");
  var minutes = document.getElementById("minutes");
  var seconds = document.getElementById("seconds");

  //new Date() -> 현재 날짜 및 시간
  var h = new Date().getHours(); // 시간을 리턴
  var m = new Date().getMinutes(); // 분을 리턴
  var s = new Date().getSeconds(); // 초를 리턴

  // 리턴된 시,분,초 값을 html에 넣는다.
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}

// setInterval은 주기적으로 인자를 실행하는 함수
// setInterval(clock,1000)은 clock()함수를 1초에 한번씩 실행하는 명령문 -> 시간을 계속 해서 갱신하기 위함
var interval = setInterval(clock, 1000);
