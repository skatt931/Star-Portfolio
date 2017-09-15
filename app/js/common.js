$(function() {

	new WOW().init();

		$(window).on("scroll", function scrollingFunction(e) {
			var scroled = $(window).scrollTop();


			$("#first-block").css("left", (0 - (scroled*0.1)) + "%");
			$("#second-block").css("left", (70 - (scroled*0.1)) + "%");
			$("#third-block").css("left", (120 - (scroled*0.1)) + "%");
			$("#fourth-block").css("left", (190 - (scroled*0.1)) + "%");

			$("body").css("background-position-x",(100 + (scroled * 0.25)) + "%");
		});

	var scroll = [0,700,1200,1950];
	var i = 0;
	$('#next').on('click', function() {
			scroll[i];
			i++;
			if (i>3) {
				i = 0;
			}
			$('html, body').animate({
				scrollTop: scroll[i],
			}, 1000);
	});


});
