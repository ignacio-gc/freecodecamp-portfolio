$('.navbar-toggler').click(function ( ) {
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

$(document).ready(function(){
    $('#nav-icon1').click(function(){
        $('#nav-icon1').toggleClass('open');
    });
});
