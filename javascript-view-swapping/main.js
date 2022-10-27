var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', matches);

function matches(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if (event.target === $tab[i]) {
        event.target.className = 'tab active';
        var data = event.target.getAttribute('data-view');
      } else {
        $tab[i].className = 'tab';
      }
    }
  }

  for (i = 0; i < $view.length; i++) {
    if ($view[i].getAttribute('data-view') !== data) {
      $view[i].className = 'view hidden';

    } else {
      $view[i].className = 'view';
    }
  }

}
