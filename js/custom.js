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
});