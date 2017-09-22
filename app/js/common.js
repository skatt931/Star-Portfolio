$(function() {

	new WOW().init();

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		return
	} else {

		$(window).on("scroll", function scrollingFunction(e) {
			var scroled = $(window).scrollTop();


			$("#first-block").css("left", (0 - (scroled*0.1)) + "%");
			$("#second-block").css("left", (70 - (scroled*0.1)) + "%");
			$("#third-block").css("left", (120 - (scroled*0.1)) + "%");
			$("#fourth-block").css("left", (205 - (scroled*0.1)) + "%");
			$("#fifth-block").css("left", (270 - (scroled*0.1)) + "%");

			$("body").css("background-position-x",(100 + (scroled * 0.25)) + "%");
		});

		//var scroll = [0,680,1360,2040];
		var scroll = [];
		$('.animation-block').each(function (i, el) {
			scroll.push($(this).position().top);
		})
		console.log(scroll);
		var i = 0;
		$('#next').on('click', function() {
			scroll[i];
			i++;
			if (i>scroll.length - 1) {
				i = 0;
			}
			$('html, body').animate({
				scrollTop: scroll[i],
			}, 1000);
		}).hover( function() {
			$(this).animate({
                width: '90px',
                height: '38px'
            })
		}, function() {
            $(this).animate({
                width: '84px',
                height: '34px'
            })
        });
	}


});
