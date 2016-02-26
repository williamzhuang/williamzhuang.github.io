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
		$("body").fadeOut("slow");
	}
	rotateTo(-90);
});
$('.circle li:nth-child(3)').live('click', function() {
	
	if (curAngle == -180) {
		$("body").fadeOut("slow");
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
			$("body").fadeOut("slow");
		}
		rotateTo(-90);
	}

	if (angle == -180) {
		if (curAngle == -180) {
			$("body").fadeOut("slow");
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

	/* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.game-container').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 200;
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
}


