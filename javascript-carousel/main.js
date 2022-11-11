var $img = document.querySelector('img');
var currentSlide = 0;
var images = {
  src: ['https://gamertweak.com/wp-content/uploads/2021/12/anti-mage-dota-2-heroes.jpg',
    'https://www.dotafire.com/images/hero/icon/alchemist.png',
    'https://www.dotafire.com/images/hero/icon/axe.png',
    'https://www.dotafire.com/images/hero/icon/faceless-void.png',
    'https://www.dotafire.com/images/hero/icon/tiny.png']
};

var $btnList = document.querySelectorAll('.fa-circle');
var $right = document.querySelector('.fa-chevron-right');
var $left = document.querySelector('.fa-chevron-left');
var $dots = document.querySelector('.col-full');

$dots.addEventListener('click', dots);
$right.addEventListener('click', nextImg);
$left.addEventListener('click', previousImg);

function dots(event) {
  clearInterval(interval);

  if (event.target && event.target.tagName === 'I') {
    for (var i = 0; i < $btnList.length; i++) {
      if (event.target === $btnList[i]) {
        event.target.className = 'fa-solid fa-circle fa-2xl padding';
        $img.setAttribute('src', images.src[i]);
        currentSlide = i;

      } else {
        $btnList[i].className = 'fa-regular fa-circle fa-2xl padding';
      }
    }
  }
  setInterval(nextImg, 3000);
}

function previousImg(event) {
  currentSlide--;

  if (currentSlide > 4 || currentSlide < 0) {
    currentSlide = 4;
    $img.setAttribute('src', images.src[currentSlide]);
    $btnList[currentSlide].className = 'fa-solid fa-circle fa-2xl padding';
  }

  for (var i = 0; i < images.src.length; i++) {
    if (i === currentSlide) {
      $img.setAttribute('src', images.src[currentSlide]);
      $btnList[i].className = 'fa-solid fa-circle fa-2xl padding';
    } else {
      $btnList[i].className = 'fa-regular fa-circle fa-2xl padding';
    }
  }
}

function nextImg(event) {

  currentSlide++;

  if (currentSlide > 4) {
    currentSlide = 0;
    $img.setAttribute('src', images.src[currentSlide]);
    $btnList[currentSlide].className = 'fa-solid fa-circle fa-2xl padding';
  }

  for (var i = 0; i < images.src.length; i++) {
    if (i === currentSlide) {
      $img.setAttribute('src', images.src[currentSlide]);
      $btnList[i].className = 'fa-solid fa-circle fa-2xl padding';
    } else {
      $btnList[i].className = 'fa-regular fa-circle fa-2xl padding';
    }
  }
}

var interval = setInterval(nextImg, 3000);
