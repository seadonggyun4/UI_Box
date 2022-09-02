let horizontalBar = document.getElementById('horizontal-underline');
let horizontalMenus = document.querySelectorAll('nav:first-child a');
let verticalBar = document.getElementById('vertical-underline');
let verticalMenus = document.querySelectorAll('nav:nth-child(2) a');


horizontalMenus.forEach((menu) => 
menu.addEventListener('click', (e)=>
  horizontalIndicator(e.currentTarget)
  )
);


verticalMenus.forEach( (menu) => 
  menu.addEventListener('click', (e) => 
    verticalIndicator(e.currentTarget) 
    )
)

function horizontalIndicator(e){
  horizontalBar.style.left = e.offsetLeft + 'px';
  horizontalBar.style.width = e.offsetWidth + 'px';
  horizontalBar.style.top = e.offsetTop + e.offsetHeight + 'px';
  console.log(horizontalBar.style.left)
}




function verticalIndicator(e){
  verticalBar.style.left = e.offsetLeft + 'px';
  verticalBar.style.width = e.offsetWidth + 'px';
  verticalBar.style.top = e.offsetTop + e.offsetHeight + 'px';
}