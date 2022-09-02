const cardEls = document.querySelectorAll('.card')
const spanEls = document.querySelectorAll('.card span')

cardEls.forEach(function(cardEl){
  cardEl.addEventListener('mouseenter',function(e){
    let top1 = window.pageYOffset + cardEl.getBoundingClientRect().top
    let left1 = window.pageXOffset + cardEl.getBoundingClientRect().left

    x = e.pageX - left1,
    y = e.pageY - top1;

    console.log($(this))
    console.log(this)

    $(this).find('span').css({top:y, left:x})
  })

  cardEl.addEventListener('mouseout',function(e){
    let top2 = window.pageYOffset + cardEl.getBoundingClientRect().top
    let left2 = window.pageXOffset + cardEl.getBoundingClientRect().left

    x = e.pageX - left2,
    y = e.pageY - top2;

    $(this).find('span').css({top:y, left:x})
  })
})
// e는 mouse event 반환값
// pageX, pageY  => 브라우페이지에서 x,y 축 좌표
// .offset()은 선택한 요소의 좌표를 가져오거나 특정 좌표로 이동시킵니다.
// 위에서 offset 메서드는 이벤트가 걸려 있는 DOM객체를 기준으로 좌표(x,y)를 출력합니다.