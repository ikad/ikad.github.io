$(document).ready(function() {

  $('#burger').click(function() {
    $('nav.header ul').toggleClass('show');
  });

  $('nav.header ul').click(function() {
    $(this).removeClass('show');
  });

  $('body').smoothScroll({
    delegateSelector: 'nav.header ul a'
  });
});
