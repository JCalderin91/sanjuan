$(document).ready(function (ev) {$('.loader').fadeOut(600);
});

$(document).on('scroll', function () {
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

$('#btn-arriba').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 1000);
});

$('.ancla').on('click', function (e) {
    e.preventDefault();
    var strAncla = '#' + $(this).data('ancla');
    $('html,body').animate({
        scrollTop: $(strAncla).offset().top - 60
    }, 1000);
});

$('#nav-item.nav-link').on('click', function (e) {
    e.preventDefault();
    $('#collapsibleNavbar').delay(1000).slideToggle(400);
});


$(".datepicker").datepicker({
    // Formato de la fecha
    dateFormat: "dd/mm/yy",
    // Primer dia de la semana - lunes
    firstDay: 0,
    // Días largo traducido
    dayNames: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
    // Dias cortos traducido
    dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
    // Nombres largos de los meses traducido
    monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    // Nombres cortos de los meses traducido 
    monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dec"],
    // Al selecconar fecha, se escribe en el campo de texto
    onSelect: function (dateText) {
        $('#fecha').val(dateText);
        if ($('.datepicker.salidaInput')[0].value != "") {
            $('input.datepicker.salidaInput ~ i').hide();
            $(".datepicker.regresoInput").datepicker("option", "minDate", $('.datepicker.salidaInput')[0].value);

        }
        if ($('.datepicker.regresoInput')[0].value != "") {
            $('input.datepicker.regresoInput ~ i').hide();
            $(".datepicker.salidaInput").datepicker("option", "maxDate", $('.datepicker.regresoInput')[0].value);
        }
    }
});



$(function () {
    $(".datepicker.salidaInput").datepicker("option", "minDate", "+0m +0d");
});

//Control de los radio Button
$("input[id='radioIda']:radio").attr('checked', true);
$('.vuelta').hide();
$("input[id='radioIda']:radio").on('change', function (ev) {
    if ($("input[id='radioIda']:radio").is(':checked')) {
        $('.vuelta').fadeOut(400);
        $('.ida').removeClass('col-6').addClass('col-12');
        $('.datepicker.regresoInput')[0].value = "";
        $(".datepicker.salidaInput").datepicker("option", "maxDate", "12/31/9998");
    }
});

$("input[id='radioVuelta']:radio").on('change', function (ev) {
    if ($("input[id='radioVuelta']:radio").is(':checked')) {
        $('.ida').removeClass('col-12').addClass('col-6');
        $('.vuelta').fadeIn(400);
    }
});
