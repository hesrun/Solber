let scTop = 0;

$('#menuOpen').click(function(){
    $(this).toggleClass('active');
    $('#mobileMenu').fadeToggle(300);
    $('html').toggleClass('overflow-hidden');
    return false;
})

$(window).scroll(function(){
    scTop = $(this).scrollTop();
    if (scTop > 500) {
        $('.main-header').addClass('active');
    } else {
        $('.main-header').removeClass('active');
    }
})

