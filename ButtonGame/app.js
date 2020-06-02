const btn = document.querySelector('button');

btn.addEventListener('mouseover', () => {
  let h = Math.floor(Math.random() * window.innerHeight);
  let w = Math.floor(Math.random() * window.innerWidth);
  btn.style.left = `${w}px`;
  btn.style.top = `${h}px`;
});
btn.addEventListener('click', () => {
  btn.innerText = 'YOU GOT ME!!!!';
  document.body.style.background = 'green';
});
