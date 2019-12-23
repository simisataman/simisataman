(function($) {
  "use strict"; // Start of use strict

  function get_time_diff(_datetime )
  {
    var datetime = new Date( _datetime ).getTime();
    var now = new Date().getTime();

    if( isNaN(datetime) )
    {
      return " on " + _datetime;
    }


    if (datetime < now) {
      var milisec_diff = now - datetime;
    }else{
      var milisec_diff = datetime - now;
    }

    var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));
    var hours = Math.floor(milisec_diff / (1000 * 60 * 60) - days * 24);
    var minutes = Math.floor(milisec_diff / (1000 * 60) - days * 24 * 60 - hours * (60));

    var respvalue ='';

    if (days > 0) {
      respvalue += days + " Days, ";
    }

    if (hours > 0) {
      respvalue += hours + " Hours and ";
    }

    respvalue += minutes + " Minutes ";

    return respvalue;
  }

  const dateDiv = document.getElementById("date");
  const ourDate = moment("2019-06-26 14:50","YYYY-MM-DD HH:mm").toDate();
  dateDiv.innerText = get_time_diff(ourDate);

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
