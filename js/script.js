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

var curAngle = 0;

$('.circle li:nth-child(1)').live('click', function() {
	
	if (curAngle == 0) {
		$("*").fadeOut("slow", function() {
			window.location.href = "about.html";
		});
	}
	rotateTo(0);
});
$('.circle li:nth-child(2)').live('click', function() {
	
	if (curAngle == -90) {
		$("body").fadeOut("slow", function() {
			window.location.href = "projects.html";
		});
	}
	rotateTo(-90);
});
$('.circle li:nth-child(3)').live('click', function() {
	
	if (curAngle == -180) {
		$("body").fadeOut("slow", function() {
			window.location.href ="webdesign.html";
		});
	}
	rotateTo(-180);
});
$('.circle li:nth-child(4)').live('click', function() {
	
	if (curAngle == -270) {
		$("body").fadeOut("slow", function() {
			window.location.href = "game.html";
		});
	}
	rotateTo(-270);
});

function clickMenu(angle) {
	if (angle == 0) {
		if (curAngle == 0) {
			$("body").fadeOut("slow", function() {
				window.location.href = "about.html";
			});
		}
		rotateTo(0);
	}

	if (angle == -90) {
		if (curAngle == -90) {
			$("body").fadeOut("slow", function() {
				window.location.href = "projects.html"
			});
		}
		rotateTo(-90);
	}

	if (angle == -180) {
		if (curAngle == -180) {
			$("body").fadeOut("slow", function() {
				window.location.href = "webdesign.html";
			});
		}
		rotateTo(-180);
	}

	if (angle == -270) {
		if (curAngle == -270) {
			$("body").fadeOut("slow", function() {
				window.location.href = "game.html";
			});
		}
		rotateTo(-270);
	}
}

$(window).bind('wheel DOMMouseScroll', function(event){
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        rotate(0);
    }
    else {
        rotate(1)
    }
});

function rotate(up) {
	if (up == 0) {
		if (curAngle == 0) {
			rotateTo(-270);
		} else {
			rotateTo(curAngle + 90);
		}
	} else if (up == 1) {
		if (curAngle == -270) {
			rotateTo(0);
		} else {
			rotateTo(curAngle - 90);
		}
	}
		
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
       rotate(0);
    }
    else if (e.keyCode == '40') {
        rotate(1);
    }
    else if (e.keyCode == '37') {
       rotate(0);
    }
    else if (e.keyCode == '39') {
       rotate(1);
    } 
    else if (e.keyCode == '13') {
    	clickMenu(curAngle);
    } 

}

function rotateTo(angle) {

	curAngle = angle;
	$('.menu a').css({
		"color": "#0d5762",
		"background": "none"
	});

	// Reset circle sizes.
	$('.circle li:nth-child(1)').css({
		"width": "73px",
		"height": "73px",
		"top": "2px",
		"left": "160px",
		"background": "#001a33",
		"line-height": "73px",
		"font-size": "16px",
		"color": "#1693A5"
	});

	$('.circle li:nth-child(2)').css({
		"width": "73px",
		"height": "73px",
		"top": "160px",
		"left": "312px",
		"background": "#001a33",
		"line-height": "73px",
		"font-size": "16px",
		"color": "#1693A5"
	});

	$('.circle li:nth-child(3)').css({
		"width": "73px",
		"height": "73px",
		"top": "312px",
		"left": "160px",
		"background": "#001a33",
		"line-height": "73px",
		"font-size": "16px",
		"color": "#1693A5"
	});

	$('.circle li:nth-child(4)').css({
		"width": "73px",
		"height": "73px",
		"top": "160px",
		"left": "2px",
		"background": "#001a33",
		"line-height": "73px",
		"font-size": "16px",
		"color": "#1693A5"

	});

	// Increase size of highlighted circle
	if (angle == 0) {
		$('.one').css({
			"color": "#000D1A",
			"background": "#1693A5"
		});

		$('.circle li:nth-child(1)').css({
			"width": "120px",
			"height": "120px",
			"top": "-25px",
			"left": "132px",
			"background": "#1693A5",
			"line-height": "120px",
			"font-size": "30px",
			"color": "#000D1A",
		});

	}

	if (angle == -90) {
		$('.two').css({
			"color": "#000D1A",
			"background": "#1693A5"
		});

		$('.circle li:nth-child(2)').css({
			"width": "120px",
			"height": "120px",
			"top": "132px",
			"left": "290px",
			"background": "#1693A5",
			"line-height": "120px",
			"font-size": "27px",
			"color": "#000D1A",
		});

	}

	if (angle == -180) {
		
		$('.three').css({
			"color": "#000D1A",
			"background": "#1693A5",
		});

		$('.circle li:nth-child(3)').css({
			"width": "120px",
			"height": "120px",
			"top": "290px",
			"left": "132px",
			"background": "#1693A5",
			"line-height": "120px",
			"font-size": "30px",
			"color": "#000D1A",
		});

	}

	if (angle == -270) {
		$('.four').css({
			"color": "#000D1A",
			"background": "#1693A5"
		});

		$('.circle li:nth-child(4)').css({
			"width": "120px",
			"height": "120px",
			"top": "132px",
			"left": "-25px",
			"background": "#1693A5",
			"line-height": "120px",
			"font-size": "30px",
			"color": "#000D1A",
		});
	}

	// Rotating all circle elements
	$('.circle').css({
		"-webkit-transform": "rotate("+angle+"deg) translateZ(1px)",
		"-moz-transform": "rotate("+angle+"deg) translateZ(1px)",
		"-ms-transform": "rotate("+angle+"deg) translateZ(1px)",
		"-o-transform": "rotate("+angle+"deg) translateZ(1px)",
		"transform": "rotate("+angle+"deg) translateZ(1px)"
	});

	// Rotating selection circle text
	var nAngle = -angle;
	$('.circle li:nth-child(1)').css({
		"z-index": "0", 
		"-webkit-transform": "rotate("+nAngle+"deg) translateZ(1px)",
		"-moz-transform": "rotate("+nAngle+"deg) translateZ(1px)",
		"-ms-transform": "rotate("+nAngle+"deg) translateZ(1px)",
		"-o-transform": "rotate("+nAngle+"deg) translateZ(1px)",
		"transform": "rotate("+nAngle+"deg) translateZ(1px)",
	});

	$('.circle li:nth-child(2)').css({
		"z-index": "0", 
		"-webkit-transform": "rotate("+nAngle+"deg) translateZ(1px)",
		"-moz-transform": "rotate("+nAngle+"deg) translateZ(1px)",
		"-ms-transform": "rotate("+nAngle+"deg) translateZ(1px)",
		"-o-transform": "rotate("+nAngle+"deg) translateZ(1px)",
		"transform": "rotate("+nAngle+"deg) translateZ(1px)",
	});

	$('.circle li:nth-child(3)').css({
		"z-index": "0", 
		"-webkit-transform": "rotate("+nAngle+"deg) translateZ(1px)",
		"-moz-transform": "rotate("+nAngle+"deg) translateZ(1px)",
		"-ms-transform": "rotate("+nAngle+"deg) translateZ(1px)",
		"-o-transform": "rotate("+nAngle+"deg) translateZ(1px)",
		"transform": "rotate("+nAngle+"deg) translateZ(1px)",
	});

	$('.circle li:nth-child(4)').css({
		"z-index": "0", 
		"-webkit-transform": "rotate("+nAngle+"deg) translateZ(1px)",
		"-moz-transform": "rotate("+nAngle+"deg) translateZ(1px)",
		"-ms-transform": "rotate("+nAngle+"deg) translateZ(1px)",
		"-o-transform": "rotate("+nAngle+"deg) translateZ(1px)",
		"transform": "rotate("+nAngle+"deg) translateZ(1px)",
	});

	
}

/* Every time the window is scrolled ... */
$(window).scroll( function(){

    /* Check the location of each desired element */
    $('.game-container').each( function(i){
        
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height() + 300;
        
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
            
            $(this).animate({'opacity':'1'},500);
                
        }
        
    }); 

});


function scrollDown() {
    $('html,body').animate({
        scrollTop: $("#container-1").offset().top},
        'slow');
};

window.onresize = function() {
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
}
;a
