$(document).ready(function($) {
	$('.top-btn').click(function() {
		$('.popup').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup').fadeOut();
		}
	});
	
	$('.popup').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});

 window.onload = function () {
      document.body.classList.add('loaded_hiding');
      window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
      }, 1000);
    }

$(document).ready(function() {
		$('.menu__link').click(function(){
		var el = $(this).attr('href');
		el = el.replace(/[^\#]*/, '');
		$('body,html').animate({
		scrollTop: $(el).offset().top}, 800);
		return false;
		});
	});


