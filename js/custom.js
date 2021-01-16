jQuery(document).ready(function($) {

    // Header fixed and Back to top button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 90) {
        $('#nav-menu-container').addClass('d-block');
        $('#nav-menu-container').fadeIn('50');
        $('#nav-menu-container').removeClass('d-none');
      } else {
        $('#nav-menu-container').removeClass('d-block');
        $('#nav-menu-container').fadeOut('50', function() {
          $('#nav-menu-container').addClass('d-none');
        });
        
      }
    });
});