$(document).ready(function () {



  $('.menu__list').hide();

  $('.hero__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="sl__btn sl__btn--prev" type="button"><svg class="sl__icon" width="25" height="25"><use xlink:href="images/sprite.svg#icon-arrow-long-up"></use></svg></button>',
    nextArrow: '<button class="sl__btn sl__btn--next" type="button"><svg class="sl__icon" width="25" height="25"><use xlink:href="images/sprite.svg#icon-arrow-long-down"></use></svg></button>',
    // autoplay: true,
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


  // вызов подменю при клике на спан-ссылку. При повторном нажатии подменю скрывается. При клике вне подменю, оно тоже скрывается
  const menuBtn = $(".menu__link--arrow"),
    menu = $(".menu__sublist");
  menuBtn.on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
  });
  $(document).click(function (e) {
    if (!menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
      menuBtn.removeClass("active");
    };
  });


  $('.servicepack__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="servicepack__btn servicepack__btn--prev" type="button"><svg class="servicepack__icon" width="25" height="25"><use xlink:href="images/sprite.svg#icon-arrow-long-down"></use></svg>предыдущая услуга</button>',
    nextArrow: '<button class="servicepack__btn servicepack__btn--next" type="button">следующая услуга<svg class="servicepack__icon" width="25" height="25"><use xlink:href="images/sprite.svg#icon-arrow-long-up"></use></svg></button>',
    infiniti: true,
    dots: false

  });


  window.onscroll = function () {
    if (window.scrollY >= 732) {
      $('.servicepack__btn').addClass('fixed')
    } else {
      $('.servicepack__btn').removeClass('fixed')
    }
  }


});