$(document).ready( function () {

  $('#album-btn').click(function() {
    if ($('#navbarHeader').is(':hidden')) {
      $('html, body').animate({ scrollTop: $('.album').offset().top }, 500);
    } else {
      $('#navbarHeader').collapse('hide').one('hidden.bs.collapse', function () {
        $('#nav-icon1').toggleClass('open');
        $('html, body').animate({ scrollTop: $('.album').offset().top }, 500);
      });
    }
  });

  $('.navbar-toggler').click(function () {
    $(this).blur();
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#navbarHeader').collapse('hide');
      if ($('#nav-icon1').hasClass('open')) {
        $('#nav-icon1').removeClass('open');
      }
    }
  });

  $('#nav-icon1').click(function(){
    $('#nav-icon1').toggleClass('open');
  });

  $('.btn-primary').click(function () {

    $('html, body').animate({ scrollTop: 0 }, 500, function () {
      $('#navbarHeader').collapse('show');
      $('#nav-icon1').addClass('open');
    });

    // versión anterior, no daba collapse is transitioning error
    // $('body').animate({},1000, "swing", function() {
    // $(window).scrollTop(0);
  });


  $('footer > div:first-child').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });
});
