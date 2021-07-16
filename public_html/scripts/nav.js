$(document).ready(function () {
    var url = window.location;
    $('nav').find('.active').removeClass('active');
    $('nav a').each(function () {
        if (this.href == url) {
            $(this).addClass('active');
        }
    }); 
});