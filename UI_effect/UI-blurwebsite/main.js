// blurArea 변수생성
var blurArea = document.getElementById("blur-area");

// onmousemov -> 마우스 포인터가 요소 위에서 이동했을때 발생하는 이벤트
document.onmousemove = function (e) {
  //이벤트 값에 따라 blurarea의 x축과y축을 변경한다.
  // pageX,pageY -> 전체문서를 기준으로 한 좌표
  blurArea.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
};
