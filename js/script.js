$( document ).ready(function() {

    // Hero Section FUll Height
    $(function(){
    	var windowH = $(window).height();
    	var wrapperH = $('.hero').height();
    	if(windowH > wrapperH) {                            
    		$('.hero').css({'height':($(window).height())+'px'});
    	}                                                                               
    	$(window).resize(function(){
    		var windowH = $(window).height();
    		var wrapperH = $('.hero').height();
    		var differenceH = windowH - wrapperH;
    		var newH = wrapperH + differenceH;
    		var truecontentH = $('#truecontent').height();
    		if(windowH > truecontentH) {
    			$('.hero').css('height', (newH)+'px');
    		}

    	})          
    });


});

document.addEventListener("DOMContentLoaded", function() {
    let frames = document.querySelectorAll(".about-frame");

    function checkFramesInView() {
        frames.forEach(frame => {
            let rect = frame.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                frame.classList.add("appear");
            }
        });
    }

    window.addEventListener("scroll", checkFramesInView);
    checkFramesInView(); 
});
