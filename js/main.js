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
      scrollTop: $(_href).offset().top - 120 + 'px'
    });
    return false;
  });

/* ---------------------------------- menu ---------------------------------- */
  let switcher = $('.switcher');
  $('.nav__link').click(function () {
    if (switcher.prop('checked') == true) {
      $('.nav').css('right', '-100%');
      switcher.prop('checked', false);
    } 
  });
  switcher.click(function() {
    if (switcher.prop('checked') == true) {
      $('.nav').css('right', '0%');
    } else {
      $('.nav').css('right', '-100%');
    }
  });
});