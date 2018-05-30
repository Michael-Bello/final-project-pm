$(document).ready(function(){

  $('.toggle-btn').on('click', toggleSidebar)

  function toggleSidebar() {
    document.querySelector('.toggle-btn').classList.toggle('active');
    document.querySelector('.sidebar').classList.toggle('active');
  }

  var $header = $('#header');

  setTimeout(() => {
    $header.removeClass().addClass('animated infinite pulse');
  }, 1000);
})
