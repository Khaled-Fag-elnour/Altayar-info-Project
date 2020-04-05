
/* ON READY FUNCTIONS */
$(document).ready(function() {
  $(".skitter-large").skitter({
    velocity: 1,
    interval: 3500,
    navigation: true,
    numbers: false,
    dots: true,
    preview: true,
    stop_over: false,
    // fullscreen: true,
    theme: 'square',
    responsive: {
      small: {
        animation: 'fade',
        max_width: 768
      },
      medium: {
        max_width: 1024
      }
    }
  });


  $('.back-to-top').click(function() {
    $('html, body').animate({scrollTop: 0}, 1500);
  })
  
  
});

/* SCROLL FUNCTIONS */
$(window).scroll(function() {

  
  

  let windowTop = $(window).scrollTop();

  if (windowTop > 25) {
    $('.navbar').css('top', '0')
  } else {
    $('.navbar').css('top', '40px')
  }


  if (windowTop > 1500) {
    $('.back-to-top').fadeIn(300);
  } else {
    $('.back-to-top').fadeOut(300);
  }

  if (windowTop > 1500) {
    
  }
})

/* NAVBAR POSTION FIX */
if ($(window).scrollTop() > 25) {
  $('.navbar').css('top', '0')
} else {
  $('.navbar').css('top', '40px')
}

$('.navbar .nav-link').click(function(e) {
  e.preventDefault();
  let href = $(this).attr('href'),
      thisOffset = $(href).offset().top,
      navbarHeight = $('.navbar').outerHeight();
  $('html, body').animate({scrollTop: thisOffset - navbarHeight}, 1100)
})








