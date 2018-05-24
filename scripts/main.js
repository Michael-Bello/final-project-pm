$(document).ready(function(){

  $('#toggle-btn').on('click', toggleSidebar)

  function toggleSidebar() {
    document.getElementById('toggle-btn').classList.toggle('active');
    document.getElementById('sidebar').classList.toggle('active');
  }
})
