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

$('.field').each(function() {
    var field = $(this);
    var input = field.find('.field__input');
    function checkInput() {
        var valueLength = input.val().length;
        console.log(valueLength);
        if (valueLength > 0 ) {
            field.addClass('field_active')
        } else {
            field.removeClass('field_active')
        }
    }
    $('.field__input').blur(function() {
        checkInput();
        $(this).parents('.field').removeClass('field_focus');
    })
    $('.field__input').focus(function() {
        checkInput();
        $(this).parents('.field').addClass('field_focus');
    })       
});


