var $openBtn = document.querySelector('#modal-button');
var $closeBtn = document.querySelector('#popup-button');
var $overlay = document.querySelector('.overlay');
var $popup = document.querySelector('.popup');

$openBtn.addEventListener('click', openModal);
$closeBtn.addEventListener('click', closeModal);

function openModal(event) {
  $overlay.className = 'overlay positioned';
  $popup.className = 'popup positioned';

}

function closeModal(event) {
  $overlay.className = 'overlay positioned display-none';
  $popup.className = 'popup positioned display-none';
}
