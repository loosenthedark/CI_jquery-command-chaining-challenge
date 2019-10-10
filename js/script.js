$(document).ready(function() {
    $('button').mouseenter(function() {
        $('button').removeClass('makeRed').addClass('makeBorder');
    });
    $('button').mouseleave(function() {
        $('button').removeClass('makeBorder').addClass('makeRed');
    });

    $('button').click(function() {
        $('p').slideToggle(1000, 'linear');
    });
    
    $('button').click(function() {
        $('p').hide(5000, 'linear').show(2000);
    });
    
    $('button').click(function() {
        $('p').fadeOut(5000, 'linear').fadeIn(8000);
    });
});
