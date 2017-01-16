$(function(){
	// действия при прокрутки колесом
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
		function changeOpacity (opacity) {
			if (opacity <= 0.1) { /*если прозрачность меньше 0,1 - убираем первую страницу*/
				firstPage.fadeOut(3000);
				secondPage.fadeIn(3000);
			}
			return opacity += 1;
		}
		digit.text('Loading:' + scale + '%') ;
	    changeOpacity(opacity);
	    // event.preventDefault(); /*отменяем прокрутку страницы вниз*/
	});
			
  /////действия при прокрутки колесом//////

  	////плавная прокрутка страницы
	// var $page = $('html, body');
	// $('a[href*="#"]').click(function() { //при нажатии на ссылку с #
	//     $page.animate({
	//         scrollTop: $($.attr(this, 'href')).offset().top // идёт плавная прокрутка
	//     }, 400);
	//     return false;
	// });
	// ////scrollup
	// $('#scrollup i').mouseover( function(){ // при наведении курсора на иконку
	// 	$( this ).animate({opacity: 0.65},100); //меняется прозрачность
	// }).mouseout( function(){
	// 	$( this ).animate({opacity: 1},100);
	// }).click( function(){ // при нажатии на иконку страницу плавно подымается вверх
	// 	$page.animate({scrollTop: $($page).offset().top}, 400);
	// 	return false;
	// });

	// $(window).scroll(function(){
	// 	if ( $(document).scrollTop() > 0 ) {
	// 		$('#scrollup').fadeIn('fast'); // если страница не вверху-показываем стрелку
	// 	} else {
	// 		$('#scrollup').fadeOut('fast');
	// 	}
	// });
	// плавная прокрутка страницы // 

	/* открытие страницы обо мне*/
    $('.skillbar').each(function(){
      $(this).find('.skillbar-bar').animate({
        width:$(this).attr('data-percent')
      },3000);
    });
	$('.aboutMe').click(function(){
		$('.projects').fadeOut();
		$('.cv').fadeIn();
		$('.skillbar').each(function(){
			$(this).find('.skillbar-bar').animate({
				width:$(this).attr('data-percent')
			},3000);
		});
		event.preventDefault();
	});
	/*открытие страницы обо мне*/

	/*закрытие обо мне*/
	$('.projectInfo').click(function(){
		$('.projects').fadeIn();
		$('.cv').fadeOut();
	});
	/*закрытие обо мне*/

	/*animation*/
	$("#lingGitHub").mouseover( function(){ // при наведении курсора
		$( this ).animate({opacity: 0.65},100); //меняется прозрачность
	}).mouseout( function(){
		$( this ).animate({opacity: 1},100);
	});
	$("#linkGHP").mouseover( function(){ // при наведении курсора
		$( this ).animate({opacity: 0.65},100); //меняется прозрачность
	}).mouseout( function(){
		$( this ).animate({opacity: 1},100);
	});
	/*animation*/

	// преключение табов
	// $( "#projectsImg1" ).hide ();
 //  	$( "#projectsImg2" ).hide ();
 //  	$( "#projectsImg3" ).hide ();
 //  	$( "#projectsImg4" ).hide ();
 //  	$( "#projectsImg5" ).hide ();
 //  	$( "#projectsImg6" ).hide ();
 //  	$( "#projectsImg7" ).hide ();
 //  	$( "#projectsImg8" ).hide ();
 //  	$( "#projectsImg9" ).hide ();
 //  	$( "#projectsImg10" ).hide ();
 //  	$('.linkWork').hide();
/*отображаем ссылки при нажатии налюбую кнопку навигации*/
  	$('.workNav__div a').click(function(){ 
  		$('.linkWork').fadeIn(1000);
  	});
/*отображаем ссылки при нажатии налюбую кнопку навигации*/
/*выбираем первую работу*/
  	$( "#image1" ).click(function(){
  		$('.workNav__div a').removeClass('active');
  		$(this).addClass('active');
  		$('.projectsImg').each(function(){ /*плавно убираем все работы*/
  			$(this).fadeOut();
  		});
  		$( "#projectsImg1" ).fadeIn(2000); /*плавно показываем выбраную работу*/
  		$("#lingGitHub").attr('href','https://github.com/artem-rybalkin/BuildHome');
  		$('#linkGHP').attr('href','https://artem-rybalkin.github.io/BuildHome/');
   	});
/*выбираем вторую работу*/
   	$( "#image2" ).click(function(){
   		$('.workNav__div a').removeClass('active');
  		$(this).addClass('active');
   		$('.projectsImg').each(function(){
  			$(this).fadeOut();
  		});
  		$( "#projectsImg2" ).fadeIn(2000);
  		$("#lingGitHub").attr('href','https://github.com/artem-rybalkin/URLAUBSGLUCK');
  		$('#linkGHP').attr('href','https://artem-rybalkin.github.io/URLAUBSGLUCK/');
   	});
/*выбираем третью работу*/
   	$( "#image3" ).click(function(){
   		$('.workNav__div a').removeClass('active');
  		$(this).addClass('active');
  		$('.projectsImg').each(function(){
  			$(this).fadeOut();
  		});
  		$( "#projectsImg3" ).fadeIn(2000);
  		$("#lingGitHub").attr('href','https://github.com/artem-rybalkin/PINGBULLER');
  		$('#linkGHP').attr('href','https://artem-rybalkin.github.io/PINGBULLER/');
   	});
/*выбираем 4-ую работу*/
   	$( "#image4" ).click(function(){
   		$('.workNav__div a').removeClass('active');
  		$(this).addClass('active');
  		$('.projectsImg').each(function(){
  			$(this).fadeOut();
  		});
  		$( "#projectsImg4" ).fadeIn(2000);
      $("#lingGitHub").attr('href','https://github.com/artem-rybalkin/appletea');
      $('#linkGHP').attr('href','https://artem-rybalkin.github.io/appletea/');
   	});
/*выбираем 5-ую работу*/
   	$( "#image5" ).click(function(){
   		$('.workNav__div a').removeClass('active');
  		$(this).addClass('active');
  		$('.projectsImg').each(function(){
  			$(this).fadeOut();
  		});
  		$( "#projectsImg5" ).fadeIn(2000);
      $("#lingGitHub").attr('href','https://github.com/artem-rybalkin/templatebootstrap');
      $('#linkGHP').attr('href','https://artem-rybalkin.github.io/templatebootstrap/');
   	});
/*выбираем 6-ую работу*/
   	$( "#image6" ).click(function(){
   		$('.workNav__div a').removeClass('active');
  		$(this).addClass('active');
  		$('.projectsImg').each(function(){
  			$(this).fadeOut();
  		});
  		$( "#projectsImg6" ).fadeIn(2000)
   	});
/*выбираем 7-ую работу*/
   	$( "#image7" ).click(function(){
   		$('.workNav__div a').removeClass('active');
  		$(this).addClass('active');
  		$('.projectsImg').each(function(){
  			$(this).fadeOut();
  		});
  		$( "#projectsImg7" ).fadeIn(2000);
   	});
/*выбираем 8-ую работу*/
   	$( "#image8" ).click(function(){
   		$('.workNav__div a').removeClass('active');
  		$(this).addClass('active');
  		$('.projectsImg').each(function(){
  			$(this).fadeOut();
  		});
  		$( "#projectsImg8" ).fadeIn(2000);
   	});
/*выбираем 9-ую работу*/
   	$( "#image9" ).click(function(){
   		$('.workNav__div a').removeClass('active');
  		$(this).addClass('active');
  		$('.projectsImg').each(function(){
  			$(this).fadeOut();
  		});
  		$( "#projectsImg9" ).fadeIn(2000);
	});
/*выбираем 10-ую работу*/
	$( "#image10" ).click(function(){
		$('.workNav__div a').removeClass('active');
  		$(this).addClass('active');
  		$('.projectsImg').each(function(){
  			$(this).fadeOut();
  		});
  		$( "#projectsImg10" ).fadeIn(2000);
   	});
/*определение мобильного браузера*/
   	if (jQuery.browser.mobile == true) {
   		$('.closeButton').css('display','block');
		$('#firstPage').css('display','none');
		$('.secondPage').css('display','block');
   	}
});