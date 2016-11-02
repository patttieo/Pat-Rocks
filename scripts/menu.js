
$(document).ready( function() {
  console.log('hello?');

  function openMenu() {
    $('.m-menu-default').hide();
    $('.m-menu-open-trigger').addClass("menu-open");
    $('.m-menu-open-trigger').show();
    $('.menu').addClass('menu--open');
  }
  function closeMenu() {
    console.log('cool?');
    $('.m-menu-default').show();
    $('.m-menu-open-trigger').removeClass("menu-open");
    $('.m-menu-open-trigger').hide();
    $('.menu').removeClass('menu--open');
  }
  $('.m-menu-open-trigger').on('click', function() {
    closeMenu();
  });  
  $('.m-menu-default').on('click', function() {
    openMenu();
  });

  $('.nav-link').on('click', function() {
    setTimeout(function() {
      closeMenu();
    },100);
    
  });
  $('a[href*=\\#]:not([href=\\#])').click(function() {
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


