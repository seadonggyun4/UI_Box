// 감지된 html 요소에 실행할 코드
const observer = new IntersectionObserver((e) => {
    //e 는 감지중인 요소
    e.forEach((box) => {
        if(box.isIntersecting){ // isIntersecting : 요소가 화면에 보일때
            box.target.classList.add('show')
        } else {
            box.target.classList.remove('show')
        }
    })
})
const cardes = document.querySelectorAll('.card')

observer.observe(cardes[0])//html요소가 화면에 등장하는지 감시해줌
observer.observe(cardes[1])
observer.observe(cardes[2])
observer.observe(cardes[3])




const observerForAside = new IntersectionObserver((e) => {
    if(e[0].isIntersecting){
        e[0].target.classList.add('show')
    } else {
        e[0].target.classList.remove('show')
    }
})
const aside = document.querySelector('aside')
observerForAside.observe(aside)


const one = document.querySelector('.one')
one.addEventListener('click', () => {
    window.scrollTo({left: 0, top:1500 , behavior:"smooth"})
})