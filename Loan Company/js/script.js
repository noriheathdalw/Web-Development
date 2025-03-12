(function ($) {

  "use strict";

  // background color when scroll 
  var initScrollNav = function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
      $('.navbar.second-header').addClass("bg-dark");
      $('.navbar.second-header').addClass("hidden");
      $('.header-top.first-header').addClass("hidden");
    } else {
      $('.navbar.second-header').removeClass("bg-dark");
      $('.navbar.second-header').removeClass("hidden");
      $('.header-top.first-header').removeClass("hidden");
    }
  }

  $(window).scroll(function () {
    initScrollNav();
  });

  $(document).ready(function () {

    //  testimonial swiper
    var swiper = new Swiper(".testimonial-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: ".main-slider-button-next",
        prevEl: ".main-slider-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
      },
    });

    // Animate on Scroll
    AOS.init({
      duration: 1000,
      once: true,
    });

  }); // End of a document

})(jQuery);