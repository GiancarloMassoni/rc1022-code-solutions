var $form = document.querySelector('#contact-form');

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var values = {};
  values.name = $form.elements.name.value;
  values.email = $form.elements.email.value;
  values.message = $form.elements.message.value;

  console.log('values: ', values);
  $form.reset();
});
