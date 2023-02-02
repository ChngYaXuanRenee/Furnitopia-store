$(document).ready(function() {
  var $images = $('#picShow img');
  var x = 1;
  function slide() {
    if (x < $images.length) {
      x=x+1; 
    } else {
      x=1;
    }
  $images.removeClass('active');
  $("#img" + x).addClass('active');
  }
  setInterval(slide,4500);
});


jQuery(document).ready(function($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $('#customers-testimonials').owlCarousel({
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots:true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }
  });
});