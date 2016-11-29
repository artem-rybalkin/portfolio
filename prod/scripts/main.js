$(function(){
	// действия при прокрутки колесом
	// var progress = $('progress');
	// var mainText = $('.main-text');
		// var size = 0;
		// console.log (size);
	var scale = 0; /*счётчик*/
	var opacity = 1; /*прозрачность*/
	var firstPage = $('#firstPage');
	var secondPage = $('.secondPage');
	var digit = $('#count'); /*значение, кторок вставляется в %*/
	var wrapper = $('.wrapper');
	$('body').on('mousewheel', function(event) {
		var delta = event.deltaY || event.deltaX; /*повороты колеса*/
		if (delta < 0 ) { /*если крутим колесо вниз*/
			// size += 1;
		    scale += 10;
		    opacity -= 0.1;
		} else { /*если крутим колесо вверх*/
			// size -= 1;
		    opacity += 0.1;
		    scale -= 10;
		}
		if (scale<=0) { /* если крутить в обратную сторону, меньше нуля не считать*/
			scale = 0;
		}
		if (scale >= 100) {
			scale = 100;
		}
		if (opacity >=1) { /*не увеличиваем прозразночть, что бы страничкасменилась за 10 щелчков*/
			opacity = 1;
		}

		console.log(scale);
		function hideFirstPage () {

			firstPage.css('display', 'none').animate({},2000);
			secondPage.css('display', 'block').animate({},2000);
		}
		function changeOpacity (opacity) {
			if (opacity <= 0.1) {
				// setTimeout( hideFirstPage, 500) ;
				// firstPage.css('display', 'none').animate({},5500);
				 firstPage.fadeOut(3000);
				 secondPage.fadeIn(3000);
			// secondPage.css('display', 'block').animate({},5500);
			}
			return opacity += 1;
		}
		digit.text('Loading:' + scale + '%') ;
	    changeOpacity(opacity);
	    event.preventDefault(); /*отменяем прокрутку страницы вниз*/
	});
		// function progressBarMove (size) {
		// 	progress.val(function(index, c){ 
		// 		if ( c < 244) {
		// 			return c = 244 ;
		// 		} else {
		// 			return (c+size);
					
		// 		}
		// 	});
		// 	console.log(progress.val());
		// }
	    // console.log(event.deltaX, event.deltaY, event.deltaFactor);
	    // progressBarMove(size);
	
  /////действия при прокрутки колесом//////

  	////плавная прокрутка страницы
	var $page = $('html, body');
	$('a[href*="#"]').click(function() { //при нажатии на ссылку с #
	    $page.animate({
	        scrollTop: $($.attr(this, 'href')).offset().top // идёт плавная прокрутка
	    }, 400);
	    return false;
	});
	////scrollup
	$('#scrollup i').mouseover( function(){ // при наведении курсора на иконку
		$( this ).animate({opacity: 0.65},100); //меняется прозрачность
	}).mouseout( function(){
		$( this ).animate({opacity: 1},100);
	}).click( function(){ // при нажатии на иконку страницу плавно подымается вверх
		$page.animate({scrollTop: $($page).offset().top}, 400);
		// window.scroll(0 ,0); 
		return false;
	});

	$(window).scroll(function(){
		if ( $(document).scrollTop() > 0 ) {
			$('#scrollup').fadeIn('fast'); // если страница не вверху-показываем стрелку
		} else {
			$('#scrollup').fadeOut('fast');
		}
	});
	// плавная прокрутка страницы // 
	/* открытие страницы обо мне*/
	$('.aboutMe').click(function(){
		$('.projects').css('display', 'none');
		$('.cv').css('display','block');
		// $('.skillbar').each($(this).css('width',0));
		$('.skillbar').each(function(){
			$(this).find('.skillbar-bar').animate({
				width:$(this).attr('data-percent')
			},3000);
		});
		event.preventDefault();
	});
	
	/*открытие страницы обо мне*/
	/*закрытие обомне*/
	$('.projectInfo').click(function(){
		$('.projects').css('display', 'block');
		$('.cv').css('display','none');
	});
	/*закрытие обомне*/
	// преключение табов
	$( "#projectsImg1" ).show ();
  	$( "#projectsImg2" ).hide ();
  	$( "#projectsImg3" ).hide ();
  	$( "#projectsImg4" ).hide ();
  	$( "#projectsImg5" ).hide ();
  	$( "#projectsImg6" ).hide ();
  	$( "#projectsImg7" ).hide ();
  	$( "#projectsImg8" ).hide ();
  	$( "#projectsImg9" ).hide ();
  	$( "#projectsImg10" ).hide ();
  	$( "#image1" ).click(function(){
  		$( "#projectsImg1" ).show (500);
  		$("#projectTitle-1").text('lorem ipsum');
	  	$( "#projectsImg2" ).hide ();
	  	$( "#projectsImg3" ).hide ();
	  	$( "#projectsImg4" ).hide ();
	  	$( "#projectsImg5" ).hide ();
	  	$( "#projectsImg6" ).hide ();
	  	$( "#projectsImg7" ).hide ();
	  	$( "#projectsImg8" ).hide ();
	  	$( "#projectsImg9" ).hide ();
	  	$( "#projectsImg10" ).hide ();
   	});
   	$( "#image2" ).click(function(){
  		$( "#projectsImg1" ).hide ();
	  	$( "#projectsImg2" ).show (500);
	  	$("#projectTitle-1").text('lorem ipsum2');
	  	$( "#projectsImg3" ).hide ();
	  	$( "#projectsImg4" ).hide ();
	  	$( "#projectsImg5" ).hide ();
	  	$( "#projectsImg6" ).hide ();
	  	$( "#projectsImg7" ).hide ();
	  	$( "#projectsImg8" ).hide ();
	  	$( "#projectsImg9" ).hide ();
	  	$( "#projectsImg10" ).hide ();
   	});
   	$( "#image3" ).click(function(){
  		$( "#projectsImg1" ).hide ();
	  	$( "#projectsImg2" ).hide ();
	  	$( "#projectsImg3" ).show ();
	  	$( "#projectsImg4" ).hide ();
	  	$( "#projectsImg5" ).hide ();
	  	$( "#projectsImg6" ).hide ();
	  	$( "#projectsImg7" ).hide ();
	  	$( "#projectsImg8" ).hide ();
	  	$( "#projectsImg9" ).hide ();
	  	$( "#projectsImg10" ).hide ();
   	});
   	 	$( "#image4" ).click(function(){
  		$( "#projectsImg1" ).hide ();
	  	$( "#projectsImg2" ).hide ();
	  	$( "#projectsImg3" ).hide ();
	  	$( "#projectsImg4" ).show ();
	  	$( "#projectsImg5" ).hide ();
	  	$( "#projectsImg6" ).hide ();
	  	$( "#projectsImg7" ).hide ();
	  	$( "#projectsImg8" ).hide ();
	  	$( "#projectsImg9" ).hide ();
	  	$( "#projectsImg10" ).hide ();
   	});
   	 	$( "#image5" ).click(function(){
  		$( "#projectsImg1" ).hide ();
	  	$( "#projectsImg2" ).hide ();
	  	$( "#projectsImg3" ).hide ();
	  	$( "#projectsImg4" ).hide ();
	  	$( "#projectsImg5" ).show ();
	  	$( "#projectsImg6" ).hide ();
	  	$( "#projectsImg7" ).hide ();
	  	$( "#projectsImg8" ).hide ();
	  	$( "#projectsImg9" ).hide ();
	  	$( "#projectsImg10" ).hide ();
   	});
   	 	$( "#image6" ).click(function(){
  		$( "#projectsImg1" ).hide ();
	  	$( "#projectsImg2" ).hide ();
	  	$( "#projectsImg3" ).hide ();
	  	$( "#projectsImg4" ).hide ();
	  	$( "#projectsImg5" ).hide ();
	  	$( "#projectsImg6" ).show ();
	  	$( "#projectsImg7" ).hide ();
	  	$( "#projectsImg8" ).hide ();
	  	$( "#projectsImg9" ).hide ();
	  	$( "#projectsImg10" ).hide ();
   	});
   	 	$( "#image7" ).click(function(){
  		$( "#projectsImg1" ).hide ();
	  	$( "#projectsImg2" ).hide ();
	  	$( "#projectsImg3" ).hide ();
	  	$( "#projectsImg4" ).hide ();
	  	$( "#projectsImg5" ).hide ();
	  	$( "#projectsImg6" ).hide ();
	  	$( "#projectsImg7" ).show ();
	  	$( "#projectsImg8" ).hide ();
	  	$( "#projectsImg9" ).hide ();
	  	$( "#projectsImg10" ).hide ();
   	});
   	 	$( "#image8" ).click(function(){
  		$( "#projectsImg1" ).hide ();
	  	$( "#projectsImg2" ).hide ();
	  	$( "#projectsImg3" ).hide ();
	  	$( "#projectsImg4" ).hide ();
	  	$( "#projectsImg5" ).hide ();
	  	$( "#projectsImg6" ).hide ();
	  	$( "#projectsImg7" ).hide ();
	  	$( "#projectsImg8" ).show ();
	  	$( "#projectsImg9" ).hide ();
	  	$( "#projectsImg10" ).hide ();
   	});
   	$( "#image9" ).click(function(){
  		$( "#projectsImg1" ).hide ();
	  	$( "#projectsImg2" ).hide ();
	  	$( "#projectsImg3" ).hide ();
	  	$( "#projectsImg4" ).hide ();
	  	$( "#projectsImg5" ).hide ();
	  	$( "#projectsImg6" ).hide ();
	  	$( "#projectsImg7" ).hide ();
	  	$( "#projectsImg8" ).hide ();
	  	$( "#projectsImg9" ).show ();
	  	$( "#projectsImg10" ).hide ();
	  	});
	$( "#image10" ).click(function(){
  		$( "#projectsImg1" ).hide ();
	  	$( "#projectsImg2" ).hide ();
	  	$( "#projectsImg3" ).hide ();
	  	$( "#projectsImg4" ).hide ();
	  	$( "#projectsImg5" ).hide ();
	  	$( "#projectsImg6" ).hide ();
	  	$( "#projectsImg7" ).hide ();
	  	$( "#projectsImg8" ).hide ();
	  	$( "#projectsImg9" ).hide ();
	  	$( "#projectsImg10" ).show ();
   	});
   	if (jQuery.browser.mobile == true) {
   		$('.closeButton').css('display','block');
   	}
	console.log(jQuery.browser.mobile);
	$('.closeButton').on("tap", function(){
		firstPage.css('display', 'none').animate({},2000);
		secondPage.css('display', 'block').animate({},2000);
		
	});
});




/////карусель
  // $(".owl-carousel").owlCarousel({
  // 	loop:true,
  //   margin:10,
  //   nav:true,
  //   responsive:{
  //       0:{
  //           items:1
  //       },
  //       600:{
  //           items:3
  //       },
  //       1000:{
  //           items:3
  //       }
  //   }
  // });