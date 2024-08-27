import './styles.css';

console.log('Hello World!');

let currentImage = 0;

const images = document.querySelectorAll('.carouselImage');
console.log(images);

const selector0 = document.getElementById('selector0');
const selector1 = document.getElementById('selector1');
const selector2 = document.getElementById('selector2');

selector0.addEventListener('click', () => {
  currentImage = 0;
  images[0].classList.remove('hidden');
  images[1].classList.add('hidden');
  images[2].classList.add('hidden');
});

selector1.addEventListener('click', () => {
  currentImage = 1;
  images[0].classList.add('hidden');
  images[1].classList.remove('hidden');
  images[2].classList.add('hidden');
});

selector2.addEventListener('click', () => {
  currentImage = 2;
  images[0].classList.add('hidden');
  images[1].classList.add('hidden');
  images[2].classList.remove('hidden');
});

const next = document.getElementById('next');
const prev = document.getElementById('prev');

next.addEventListener('click', () => {
  if (currentImage === 2) {
    currentImage = 0;
    images[0].classList.remove('hidden');
    images[1].classList.add('hidden');
    images[2].classList.add('hidden');
  } else {
    currentImage += 1;
    images[currentImage].classList.remove('hidden');
    images[currentImage - 1].classList.add('hidden');
  }
});

prev.addEventListener('click', () => {
  if (currentImage === 0) {
    currentImage = 2;
    images[0].classList.add('hidden');
    images[1].classList.add('hidden');
    images[2].classList.remove('hidden');
  } else {
    currentImage -= 1;
    images[currentImage].classList.remove('hidden');
    images[currentImage + 1].classList.add('hidden');
  }
});
