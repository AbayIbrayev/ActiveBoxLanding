$(document).ready(function () {
/* ---------------------------- slider settings ---------------------------- */
    $(".reviews-slider").slick({
      autoplay: true,
      dots: true,
      arrows: false,
      dotsClass: 'reviews-slider__dots'
    });

/* -------------------------- anchor links settings ------------------------- */
  $('a[href^="#"]').click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(_href).offset().top - 60 + 'px'
    });
    return false;
  });

/* ---------------------------------- menu ---------------------------------- */
  let switcher = $('.switcher');
  $('.nav__link').click(function () {
    if (switcher.prop('checked') == true) {
      $('.nav').css('right', '-100%');
      switcher.prop('checked', false);
      document.body.style.overflow = '';
    } 
  });
  switcher.click(function() {
    if (switcher.prop('checked') == true) {
      $('.nav').css('right', '0%');
      document.body.style.overflow = 'hidden';
    } else {
      $('.nav').css('right', '-100%');
      document.body.style.overflow = '';
    }
  });

/* --------------------------------- navbar --------------------------------- */
  let hero = $('.hero');
  $(window).on('scroll load resize', function () {
    let windowTop = $(this).scrollTop(), 
        heroH = hero.innerHeight();
    if (windowTop > heroH) {
      $('.navbar').addClass('fixed');
    } else {
      $('.navbar').removeClass('fixed');
    }
  });

});