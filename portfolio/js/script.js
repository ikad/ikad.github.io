$(document).ready(function() {

  $('#burger').click(function() {
    $('nav ul').toggleClass('show');
  });

  $('nav ul').click(function() {
    $(this).removeClass('show');
  });

  // $('body').smoothScroll({
  //   delegateSelector: 'nav ul li a'
  // });

  $('nav ul').scrollspy({offset: -64});
});
