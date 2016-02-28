$(document).ready(function() {
	$("*").hide();
	$("*").fadeIn("slow", function() {
		$('.one').css({
			"color": "#000D1A",
			"background": "#1693A5"
		});

		$('.shape-about').css({
			"stroke-width": "8px",
    		"stroke-dashoffset": "0",
    		"stroke-dasharray": "5000"
		});
	});

	// If the page is not the index, resize elements accordingly. 
	if (location.href.split("/").slice(-1) != "index.html") {
		$('.game-desc div').css('font-size', '1.25em');
	    $('.game-desc h1').css('font-size', '1.5em');

	    while( $('.game-desc div').height() +$('.game-desc h1').height() > $('.game-desc').height() - 50) {
	        $('.game-desc div').css('font-size', (parseInt($('.game-desc div').css('font-size')) - 1) + "px" );
	        $('.game-desc h1').css('font-size', (parseInt($('.game-desc h1').css('font-size')) - 1) + "px" );
	    }

	    $('.game-me div').css('font-size', '1.25em');
	    $('.game-me h1').css('font-size', '1.5em');
	    $('.game-me h3').css('font-size', '1.5em');
	    
	    while( $('.game-me div').height() + $('.game-me h1').height() + $('.game-me h3').height() > $('svg').height()) {
	        $('.game-me div').css('font-size', (parseInt($('.game-me div').css('font-size')) - 1) + "px" );
	        $('.game-me h1').css('font-size', (parseInt($('.game-me h1').css('font-size')) - 1) + "px" );
	        $('.game-me h3').css('font-size', (parseInt($('.game-me h3').css('font-size')) - 1) + "px" );
	    }
	} else {
		// Hide the selection menu.
		$('.circle').css('transform', "scale(1)");
		if ($(window).width() <= 950) {
			$(".circle").hide();
			$(".wrapper").css('width', '100%');
			$(".left").css('text-align', 'center');
			$(".left").css('margin-left', '5%');
			$(".text").css('text-align', 'center');
			$(".text").css('font-size', '25px');
			$(".svg-wrapper").css('margin-left', '4%');

			$('rect').hide();
			document.getElementsByClassName("text")[0].innerHTML = "W I L L I A M";
			document.getElementsByClassName("three")[0].innerHTML = "Web";
			document.getElementsByClassName("four")[0].innerHTML = "Games";
		} else {
			$(".circle").show();
			$(".wrapper").css('width', '1000px');
			$(".left").css('text-align', 'left');

			$(".left").css('float', 'left');
			$(".left").css('margin-left', '0%');
			$(".text").css('font-size', '35px');
			$(".text").css('text-align', 'left');
			$(".svg-wrapper").css('margin-left', '10%');

			document.getElementsByClassName("text")[0].innerHTML = "W I L L I A M &nbsp Z H U A N G";
			document.getElementsByClassName("three")[0].innerHTML = "Web Design";
			document.getElementsByClassName("four")[0].innerHTML = "Game Design";

			$('rect').show();
		}
	}
	
});