const accordions = document.querySelectorAll('.contentBx')

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        accordion.classList.toggle('active')
    })
})

console.log(accordions)