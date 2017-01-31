class Slide {
  constructor(slideId, slideAuthorName, slideAuthorImg, slideAuthorQuote) {
    this.slideId = slideId;
    this.slideAuthorName = slideAuthorName;
    this.slideAuthorImg = slideAuthorImg;
    this.slideAuthorQuote = slideAuthorQuote;
  }
}

const slideApp = new Vue({ 
	el: '#slideApp',
  	data: {
	    slideList: [
	    	new Slide(
	    		'1',
	    		'Johe Doe',
	    		'img/avatar1.jpeg',
	    		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora cum commodi nobis voluptatum. Excepturi fugiat, aperiam ipsam incidunt'
	    		),
	    	new Slide(
	    		'2',
	    		'John Doe',
	    		'img/avatar2.jpg',
	    		'Excepturi fugiat, aperiam ipsam incidunt quia rerum voluptatum provident ex optio necessitatibus, earum sunt, obcaecati velit fuga.'
	    		),
	    	new Slide(
	    		'3',
	    		'John Doe',
	    		'img/avatar3.jpeg',
	    		'Tempore veniam rerum dicta, at repellendus expedita placeat quidem! Perspiciatis culpa quidem doloribus, velit dolores voluptatem laborum quas, fugit iste sapiente, distinctio.'
	    		),
	    	new Slide(
	    		'4',
	    		'Johe Doe',
	    		'img/avatar4.jpg',
	    		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora cum commodi nobis voluptatum. Excepturi fugiat, aperiam ipsam incidunt'
	    		)
	    ]
	},

});


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

class Post {
  constructor(cityName, cityDescription, cityImg, cityId) {
    this.cityName = cityName;
    this.cityDescription = cityDescription;
    this.cityImg = cityImg;
    this.cityId = cityId;
  }
}

const app = new Vue({ 
	el: '#app',
  	data: {
	    postList: [
	    	new Post(
	    		'New York',
	    		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, corporis, ab. Neque assumenda eaque nisi magni aspernatur minus eius quaerat obcaecati quos accusantium. Tempora cupiditate voluptatem laboriosam qui aliquam est. Debitis itaque reprehenderit libero, eum cupiditate cumque nulla repellendus error voluptatibus aliquid? Aut nam delectus odit accusamus eveniet temporibus earum quae, dolorem, dolorum quas, harum fugiat, doloremque pariatur hic blanditiis. Molestias nemo, quidem et omnis debitis harum est delectus, vero voluptatum totam magni inventore saepe asperiores veniam tempora quis, voluptates sint doloribus quaerat? Maxime distinctio vitae eos obcaecati, iusto facilis!',
	    		'img/new-york.jpg',
	    		'new-york-post'
	    		),
	    	new Post(
	    		'Dubai',
	    		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, corporis, ab. Neque assumenda eaque nisi magni aspernatur minus eius quaerat obcaecati quos accusantium. Tempora cupiditate voluptatem laboriosam qui aliquam est. Debitis itaque reprehenderit libero, eum cupiditate cumque nulla repellendus error voluptatibus aliquid? Aut nam delectus odit accusamus eveniet temporibus earum quae, dolorem, dolorum quas, harum fugiat, doloremque pariatur hic blanditiis. Molestias nemo, quidem et omnis debitis harum est delectus, vero voluptatum totam magni inventore saepe asperiores veniam tempora quis, voluptates sint doloribus quaerat? Maxime distinctio vitae eos obcaecati, iusto facilis!',
	    		'img/dubai.jpg',
	    		'dubai-post'
	    		),
	    	new Post(
	    		'Paris',
	    		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, corporis, ab. Neque assumenda eaque nisi magni aspernatur minus eius quaerat obcaecati quos accusantium. Tempora cupiditate voluptatem laboriosam qui aliquam est. Debitis itaque reprehenderit libero, eum cupiditate cumque nulla repellendus error voluptatibus aliquid? Aut nam delectus odit accusamus eveniet temporibus earum quae, dolorem, dolorum quas, harum fugiat, doloremque pariatur hic blanditiis. Molestias nemo, quidem et omnis debitis harum est delectus, vero voluptatum totam magni inventore saepe asperiores veniam tempora quis, voluptates sint doloribus quaerat? Maxime distinctio vitae eos obcaecati, iusto facilis!',
	    		'img/paris.jpg',
	    		'paris-post'
	    		),
	    	new Post(
	    		'London',
	    		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, corporis, ab. Neque assumenda eaque nisi magni aspernatur minus eius quaerat obcaecati quos accusantium. Tempora cupiditate voluptatem laboriosam qui aliquam est. Debitis itaque reprehenderit libero, eum cupiditate cumque nulla repellendus error voluptatibus aliquid? Aut nam delectus odit accusamus eveniet temporibus earum quae, dolorem, dolorum quas, harum fugiat, doloremque pariatur hic blanditiis. Molestias nemo, quidem et omnis debitis harum est delectus, vero voluptatum totam magni inventore saepe asperiores veniam tempora quis, voluptates sint doloribus quaerat? Maxime distinctio vitae eos obcaecati, iusto facilis!',
	    		'img/london.jpeg',
	    		'london-post'
	    		),
	    	new Post(
	    		'Amsterdam',
	    		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, corporis, ab. Neque assumenda eaque nisi magni aspernatur minus eius quaerat obcaecati quos accusantium. Tempora cupiditate voluptatem laboriosam qui aliquam est. Debitis itaque reprehenderit libero, eum cupiditate cumque nulla repellendus error voluptatibus aliquid? Aut nam delectus odit accusamus eveniet temporibus earum quae, dolorem, dolorum quas, harum fugiat, doloremque pariatur hic blanditiis. Molestias nemo, quidem et omnis debitis harum est delectus, vero voluptatum totam magni inventore saepe asperiores veniam tempora quis, voluptates sint doloribus quaerat? Maxime distinctio vitae eos obcaecati, iusto facilis!',
	    		'img/amsterdam.jpg',
	    		'amsterdam-post'
	    		),
	    	new Post(
	    		'Rio de Janeiro',
	    		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, corporis, ab. Neque assumenda eaque nisi magni aspernatur minus eius quaerat obcaecati quos accusantium. Tempora cupiditate voluptatem laboriosam qui aliquam est. Debitis itaque reprehenderit libero, eum cupiditate cumque nulla repellendus error voluptatibus aliquid? Aut nam delectus odit accusamus eveniet temporibus earum quae, dolorem, dolorum quas, harum fugiat, doloremque pariatur hic blanditiis. Molestias nemo, quidem et omnis debitis harum est delectus, vero voluptatum totam magni inventore saepe asperiores veniam tempora quis, voluptates sint doloribus quaerat? Maxime distinctio vitae eos obcaecati, iusto facilis!',
	    		'img/rio.jpeg',
	    		'rio-post'
	    		)
	    ]
	},

});


