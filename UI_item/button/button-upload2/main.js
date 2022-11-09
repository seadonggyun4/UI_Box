// $(".fileAdd").on("click touch", function (e) {
//     $(this).toggleClass("open");
//     $(".tabbar").toggleClass("open");
// });


function click(){
    document.querySelector('.fileAdd').addEventListener('click', (e) => {
        e.currentTarget.classList.toggle("open");
        document.querySelector('.tabbar').classList.toggle("open");
    })
}

click()