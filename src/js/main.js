$( document ).ready(function() {
	$('#mobile-menu-icon').on('click', function(){
	    $(this).toggleClass('to-close-menu');
	    $('.nav-list').toggleClass('active');
	});


	//slider
	$('.center').slick({
		centerMode: true,
		infinite: true,
		autoplay: true,
  		autoplaySpeed: 4000,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
		    {
		    	breakpoint: 768,
		    	settings: {
			        arrows: false,
			        centerMode: true,
			        centerPadding: '40px',
			        slidesToShow: 1
		      	}
		    },
		    {
			    breakpoint: 480,
			    settings: {
			    	arrows: false,
			        centerMode: true,
			        centerPadding: '40px',
			        slidesToShow: 1
			    }
		    }
		]
	});
	$('.slide-description').hide();
	// $('.slick-arrow').hide();
	$('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){   
	  	$('.slick-current .slide-description').show();
	});


	$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	  $('.slick-current .slide-description').hide();
	});



});


