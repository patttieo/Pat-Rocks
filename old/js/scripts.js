// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


// Place any jQuery/helper plugins in here.



$("#about-trigger").waypoint(function(direction) {
    $(".fade-wrap").delay(90).animate({opacity: 1});
    
});







$("#js-menu-trigger").on("click", function() {
    $("#js-menu").fadeIn();
    $("#nav-links li").each(function(i) {
        $(this).delay((i++) * 150).fadeTo(1000, 1);  
        console.log("cool");
    });
});


$("#js-close").on("click", function() {
    $("#js-menu").fadeOut();
});

$("#js-close").on("click", function() {
    $("#js-menu").fadeOut();
});

$(".nav-link").on("click", function() {
    $("#js-menu").fadeOut();
});




$("#ig-trigger").waypoint(function(direction) {

    $('#instafeed img').each(function(i) {
        $(this).delay((i++) * 200).fadeTo(1000, 1); 
    });
    
});


var userFeed = new Instafeed({
    accessToken: '1659980979.467ede5.e0a076f40aa341e3bb1a8d316dd43b43',
    get: 'user',
    userId: 1659980979,
    useHttp: true,
    limit: 10,
    resolution: "low_resolution"
});
userFeed.run();


function textReplacement(input){
    var originalvalue = input.val();
    input.focus( function(){
        if( $.trim(input.val()) == originalvalue ){ input.val(''); }
    });
    input.blur( function(){
        if( $.trim(input.val()) == '' ){ input.val(originalvalue); }
    });
}

textReplacement($('#Name'));
textReplacement($('#Subject'));
textReplacement($('#Email'));


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});