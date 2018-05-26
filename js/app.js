$(document).on('scroll', function() {
    if ($(document).scrollTop() > 1) {
        $('#navbar').removeClass('scrollOn');
        $('#navbar').addClass('scrollOff');
        $('#btn-mas').fadeOut();
        $('#btn-arriba').fadeIn();
    } else {
        $('#navbar').removeClass('scrollOff');
        $('#navbar').addClass('scrollOn');
        $('#btn-mas').fadeIn();
        $('#btn-arriba').fadeOut();
    }
});
$('#btn-arriba').on('click', function(e){
	e.preventDefault();
    $('html,body').animate({ scrollTop: 0 }, 1000);
});

$('.ancla').on('click', function(e) {
    e.preventDefault();
    var strAncla = '#' + $(this).data('ancla');
    $('html,body').animate({ scrollTop: $(strAncla).offset().top - 60 }, 1000);
});

$('#nav-item.nav-link').on('click', function(e) {
    e.preventDefault();
	$('#collapsibleNavbar').delay(1000).slideToggle(400);
});

$(window).on("resize", function(ev){
    if ($(window).width() > 768) {
        // No se debe ocultar el Nav
    } else {
       // Se puede ocultar el nav
    }
});

