//navigacija
$(window).on('scroll', function() {
  var scroll = $(window).scrollTop();
  if(scroll >= 100) {
    $('nav').addClass('stickyAdd');
  } else {
    $('nav').removeClass('stickyAdd');
  }
});

//owl slider
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplaySpeed: 1500,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})