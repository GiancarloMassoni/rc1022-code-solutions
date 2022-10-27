var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', target);

function target(event) {

  console.log('event.target :', event.target, 'event.target.tagName: ', event.target.tagName);
  if (event.target && event.target.tagName === 'BUTTON') {
    event.target.closest('.task-list-item').remove();

  }
}
