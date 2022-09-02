
const elNav = document.querySelector('nav');

const elLinks = Array.from(elNav.querySelectorAll("ul li"));

elNav.style.setProperty('--total', elLinks.length);
console.log(elLinks.length);

const flipping = new Flipping({
  easing: 'cubic-bezier(.5, 0, .5, 1)'
});

elLinks.forEach( (elLink,i) => {
  elLink.addEventListener('click', flipping.wrap(()=>{
    elLinks.forEach( l => delete l.dataset.active );
    elLink.dataset.active = true;
    elNav.style.setProperty('--active', i);
  }));
});


elLinks[0].dataset.active = true;
elNav.style.setProperty('--active', 0);