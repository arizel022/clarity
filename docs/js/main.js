$(document).ready(function () {
    $('.menu__list').hide();

    $('.header__menu').on('click', function () {
        $('.menu__list').slideToggle();
    });

    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="sl__arrow sl__arrow--prev icon-long-arrow-up"></div>',
        nextArrow: '<div class="sl__arrow sl__arrow--next icon-long-arrow-down"></div>',
        // autoplay: true,
        autoplaySpeed: 3000,
        vertical: true,
        verticalSwiping: true,
        dots: true,
        dotsClass: "sl__dots"
    });


    	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
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
});

