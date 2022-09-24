$(document).ready(function () {
  
  $('.menu__list').hide();

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="sl__arrow sl__arrow--prev icon-long-arrow-up"></div>',
    nextArrow: '<div class="sl__arrow sl__arrow--next icon-long-arrow-down"></div>',
    autoplay: true,
    autoplaySpeed: 1500,
    vertical: true,
    verticalSwiping: true,
    dots: true,
    dotsClass: "sl__dots",
    infiniti: true
  });

  
  $('.menu__button').on('click', function () {
    $(this).toggleClass('active');
    $('.menu__list').slideToggle();
  });

  $("#rateYo").rateYo({
    starWidth: "30px",
    normalFill: "#575757",
    ratedFill: "#304a9d"
  });

  



    $('.paper__wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<div class="icon-long-arrow-left slick-prew serv-arrow serv-arrow-prew"></div>',
    nextArrow: '<div class="icon-long-arrow-right slick-next serv-arrow serv-arrow-next"></div>',
    dots: false,
    infiniti: true
  });

//E-mail Ajax Send
  $(".form").submit(function() { //Change
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
// Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
  var th = $(this);


});

