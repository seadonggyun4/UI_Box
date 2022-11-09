// (function() {
//     $('.upload').click(function() {
//       return $('.attach').addClass('active');
//     });
  
//     $('.undo').click(function() {
//       return $('.attach').removeClass('active');
//     });
  
// }).call(this);
  
function click(){
    document.querySelector('.upload').addEventListener('click', () =>{
        document.querySelector('.attach').classList.add('active')
    })

    document.querySelector('.undo').addEventListener('click', () =>{
        document.querySelector('.attach').classList.remove('active')
    })
}

click()