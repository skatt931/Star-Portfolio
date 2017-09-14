$(function() {

	new WOW().init();

		$(window).on("scroll", function (e) {
			var scroled = $(window).scrollTop();

			$("#first-block").css("left", (0 - (scroled*0.1)) + "%");
			$("#second-block").css("left", (70 - (scroled*0.1)) + "%");
			$("#third-block").css("left", (120 - (scroled*0.1)) + "%");
			$("#fourth-block").css("left", (190 - (scroled*0.1)) + "%");

			$("body").css("background-position-x",(100 + (scroled * 0.25)) + "%");
			//$("#super_bg").css("left", (700 + (scroled*0.25)) + "px");
			//$("#super_bg").css("top", (850 -(scroled * 0.3)) + "px");
			//$("#batman_bg").css("top", (1950 -(scroled * 0.1)) + "px");
		});

});
