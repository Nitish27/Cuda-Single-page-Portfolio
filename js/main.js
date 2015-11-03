$(function(){

	$(document).delegate('.open', 'click', function(event){
			$(this).addClass('oppenned');
			event.stopPropagation();
		})
		$(document).delegate('body', 'click', function(event) {
			$('.open').removeClass('oppenned');
		})
		$(document).delegate('.cls', 'click', function(event){
			$('.open').removeClass('oppenned');
			event.stopPropagation();
		});
	
	// Section Height Equal to Window Height
	$('section').css({ minHeight: $(window).innerHeight() + 'px' });
	
	$(window).resize(function() {
	
		$('section').css({ minHeight: $(window).innerHeight() + 'px' });
	
	});
	
	// Responsive Menu
	$(".menu-toggle").on('click', function() {
		
		$(this).toggleClass("on");
	
		$('nav.responsive-nav').toggleClass("pushy-menu");
		
		$("section").toggleClass('section-push');
	
	});

	// Pie Charts For Skill Section
	$('#diagram-id-1').diagram({ 
		size: "180",
		borderWidth: "15",
		bgFill: "#95a5a6",
		frFill: "#79ccd3",
		textColor: '#fff'
	});

	$('#diagram-id-2').diagram({ 
		size: "180",
		borderWidth: "15",
		bgFill: "#95a5a6",
		frFill: "#3498DB",
		textColor: '#fff'
	});

	$('#diagram-id-3').diagram({ 
		size: "180",
		borderWidth: "15",
		bgFill: "#95a5a6",
		frFill: "#E67E22",
		textColor: '#fff'
	});

	$('#diagram-id-4').diagram({ 
		size: "180",
		borderWidth: "15",
		bgFill: "#95a5a6",
		frFill: "#9B59B6",
		textColor: '#fff'
	});
});
 
			
	// Onclick go to Section 
	$(document).ready(function () {
		
		$(document).on("scroll", onScroll);
			 
		$('.main-nav a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
			 
			$('a').each(function () {
				
				$(this).removeClass('current');
			
			})
			
			$(this).addClass('current');
			 
				var target = this.hash;
				
				$target = $(target);
				
				$('html, body').stop().animate({
					
					'scrollTop': $target.offset().top+2
				
				}, 500, 'swing', function () {
							
					window.location.hash = target;
					
					$(document).on("scroll", onScroll);
					
				});
					
		});

	});
			 
	function onScroll(event){
					
		var scrollPosition = $(document).scrollTop();
		
		$('.main-nav a').each(function () {
		
			var currentLink = $(this);
		
			var refElement = $(currentLink.attr("href"));
		
			if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
			
			$('.main-nav ul li a').removeClass("current");
				
				currentLink.addClass("current");
			
			}
			
			else{
				
				currentLink.removeClass("current");
			
			}
		});

	}

