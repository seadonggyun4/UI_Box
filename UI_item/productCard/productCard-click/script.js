gsap.registerPlugin(Flip);

//
// Common Variables
//

const cursorEl = document.querySelector(".cursor");
const card = document.querySelector(".card");
const image = card.querySelector(".card__image");

//
// Cursor
//

const Cursor = function () {
  let self = {};
  const ease = 0.15;
  const visibleClass = "is-visible";
  const closeClass = "close";
  let pos = { x: 0, y: 0 };
  let targetPos = { x: 0, y: 0 };

  document.addEventListener("mousemove", evt => {
    targetPos = { x: evt.pageX, y: evt.pageY };
  });

  card.addEventListener("mouseenter", () => {
    cursorEl.classList.add(visibleClass);
  });

  card.addEventListener("mouseleave", () => {
    cursorEl.classList.remove(visibleClass);
  });

  const update = () => {
    // Update position
    const changeX = (targetPos.x - pos.x) * ease;
    const changeY = (targetPos.y - pos.y) * ease;
    pos.x += changeX;
    pos.y += changeY;

    // Update transform
    cursorEl.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;

    window.requestAnimationFrame(update);
  };

  window.requestAnimationFrame(update);

  self.setState = expanded => {
    cursorEl.classList.toggle(closeClass, expanded);
  };

  return self;
};

const cursor = new Cursor();

//
// Card
//

const activeClass = "is-active";

card.addEventListener("click", evt => {
  const state = Flip.getState([card, image]);
  card.classList.toggle(activeClass);

  Flip.from(state, {
    duration: 0.4,
    ease: "power4.out" });


  cursor.setState(card.classList.contains(activeClass));
});