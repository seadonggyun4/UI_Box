// Enter your words here!
// Caveats: only two words, and the first word should be longer than the second.

const upsideDown = words => {
  // Find the placeholders
  let wordBuckets = [
  document.querySelector('.js-w1'),
  document.querySelector('.js-w2')];


  // Set up our words
  let w1 = words.split(' ')[0] || 'Stranger',
  w2 = words.split(' ')[1] || 'Things';

  // Create an array from the first word
  w1 = w1.split('');

  // Grab the first and last letters of the first word
  let l1 = w1[0],
  l2 = w1[w1.length - 1];

  // Remove the first and last letter from the first word
  w1.shift();
  w1.pop();

  w1 = [
  l1,
  w1.join(''),
  l2];


  wordBuckets[0].innerHTML = `<span class="l">${w1[0]}</span>${w1[1]}<span class="l">${w1[2]}</span>`;

  wordBuckets[1].innerHTML = `${w2}`;
};

let input = document.querySelector('.js-txt');

input.addEventListener('keyup', e => {
  upsideDown(input.value);
});