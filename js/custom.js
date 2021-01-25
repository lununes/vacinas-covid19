jQuery(document).ready(function($) {

    // No desktop, quando scrolla, exibe o menu de tópicos a partir de certa altura
    if(window.outerWidth > 768){
      $(window).scroll(function() {
        if ($(this).scrollTop() > 90) {
          $('#nav-menu-container').addClass('d-block');
          $('#nav-menu-container').fadeIn('50');
          $('#nav-menu-container').removeClass('d-lg-none');
        } else {
          $('#nav-menu-container').removeClass('d-block');
          $('#nav-menu-container').fadeOut('50', function() {
            $('#nav-menu-container').addClass('d-lg-none');
          });
          
        }
      });
    }

    // Configura o Slider com cards
    $('.carousel-cards').carousel({
			interval: 10000
			})

			$('.carousel.carousel-cards .carousel-item').each(function(){
				var minPerSlide = 3;
				var next = $(this).next();
				if (!next.length) {
				next = $(this).siblings(':first');
				}
				next.children(':first-child').clone().appendTo($(this));
				
				for (var i=0;i<minPerSlide;i++) {
					next=next.next();
					if (!next.length) {
						next = $(this).siblings(':first');
					}
					
					next.children(':first-child').clone().appendTo($(this));
				}
			});
});

