// menuToggle : 토글 버튼
// navigation : navigation menu
// list : 메뉴 목록

// ========================================================================================================
let menuToggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
menuToggle.onclick = function () {
  //toggle : on/off  switch의 개념, add()와 remove()메서드를 한번에 쓸 수 있는 합쳐진 개념
  //classlist: HTML:5 부터 추가된 class 속성값을 간단히 다룰 수 있는 프로퍼티 -> DOMTokenList를 반환하는 읽기 전용 프로퍼티
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
};

//[ add active calss in selected list item ]
// list 선택자
let list = document.querySelectorAll(".list");

console.log(list.length); //7

// i 는 list.length 보다 적을때까지 반복: 1~6
for (let i = 0; i < list.length; i++) {
  // [ === i가 onclick 될때 함수실행 === ]
  list[i].onclick = function () {
    let j = 0;
    // while 조건문 : j 가 list.length 보다 작을때
    while (j < list.length) {
      //list[0 ~ list.length ] 까지 list를 적용
      list[j++].className = "list";
    }
    // i 번째 리스트에 active 을 적용
    list[i].className = "list active";
  };
}
