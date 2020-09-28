$(document).ready( function () {

  $('textarea').autosize();

  $(window).resize(function(){
  }).trigger('resize');


  $('header nav a').click(function(e){
    e.preventDefault();
    //header navigation links on click removing class active from elements nav span.active, nav ul.active
    $(this).parent().parent().parent().addClass('fixed').find('.active').removeClass('active');
    //animate body scroll on click
    $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 700);      
  });

  //inview script for removing class='fixed' from navigation when header is visible
  $('header').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $('header nav.fixed').removeClass('fixed').children().removeClass('active');
    }
    else {
      $('header nav').addClass('fixed');
    }
  });
  $('#testemonials li, #get_theme .wraper').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $(this).addClass('visible');
    }
  });

  $('#search form button').click(function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#results').offset().top
    }, 1000);
    
  })

  //scroll to the top icon
  $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $('#to_the_top').fadeIn();
      } else {
          $('#to_the_top').fadeOut();
      }
  });
  $('#to_the_top').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      $(this).fadeOut(500);
      return false;
  });


  $('header nav span').click(function(){
    //on click scroll page to himself
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
    //header navigation links on click adding class active from elements nav span.active, nav ul.active
    $(this).toggleClass('active').siblings().toggleClass('active');
  });

  //radio button script
  $('.radio').click(function(){
    if($(this).children('input:checked')) {
      $(this).children('span').css('background-position', '0 -39px');
      $(this).siblings('.radio').children('span').css('background-position', '0 0');
    }
  });
  

  //script for carousel responsive slider
  $(".carousel").flexisel({
    visibleItems: 6,
    animationSpeed: 200,
    autoPlay: false,
    autoPlaySpeed: 3000,
    pauseOnHover: true,
    clone:false,
    enableResponsiveBreakpoints: true,
    responsiveBreakpoints: {
      small: {
        changePoint:320,
        visibleItems: 1
      }, 
      mobile: {
        changePoint:480,
        visibleItems: 2
      }, 
      tablet: {
        changePoint:600,
        visibleItems: 3
      },
      normal: {
        changePoint:768,
        visibleItems: 4
      },
      landscape: {
        changePoint:960,
        visibleItems: 5
      },
      wide: {
        changePoint:1000,
        visibleItems: 6
      }
    }
  });

  //script for carousel popups
  $('.carousel li a').click(function(e) {
    e.preventDefault();
  });
    
  $('.carousel li a').hover(function() {
    // $(this).removeClass('slvzr-hover');
    var current = $(this).attr('class'); 
    var current_small = $(this).parent();
    $('.carousel_info div.'+current).show();

  }, function(){
    $('.carousel_info div').hide();
  });

  //run flexslider
  $('.flexslider').flexslider({
    animation: "slide"
  });

  //colorbox for register and signin
  $(".reg").colorbox({inline:true, href:"#register"});
  $(".sign").colorbox({inline:true, href:"#signin"});

  //tabs - about section
  // $('.tabs li > div').hide();
  // $('.tabs li:first > div').show().addClass('active-tab');
  // $('.tabs > ul li:first').addClass('active');

  // $('.tabs > ul li a').click(function(){
  //     $('.tabs li > div').removeClass('active-tab');      
  //     $('.tabs > ul li').removeClass('active');
  //     $(this).parent().addClass('active'); 
  //     var currentTab = $(this).attr('href'); 
  //     $('.tabs li > div').hide();
  //     $(currentTab).fadeIn(1000).addClass('active-tab');
  //     return false;
  // });


  $('.tabs > div').hide();
  $('.tabs > div:first').show().addClass('active-tab');
  $('.tabs > ul li:first').addClass('active');

  $('.tabs > ul li a').click(function(e){
      e.preventDefault();
      $('.tabs > div').removeClass('active-tab');      
      $('.tabs > ul li').removeClass('active');
      $(this).parent().addClass('active'); 
      var currentTab = $(this).attr('href'); 
      $('.tabs > div').hide();
      $(currentTab).fadeIn(1000).addClass('active-tab');
      return false;
  });

    //validate contact form
    $("form.contact-form").validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          message: {
            required: true,
            minlength: 2
          },
          comments: {
            required: true,
            minlength: 2
          },
          email: {
            required: true,
            email: true
          },
          subject: {
            required: true,
            minlength: 2
          }
        },
        messages: {
          name: {
            required: "This field is required",
            minlength: jQuery.format("At least {0} characters required")
          },
          comments: {
            required: "This field is required",
            minlength: jQuery.format("At least {0} characters required")
          },
          email: {
            required: "This field is required",
            email: "Wrong e-mail address"
          },            
          subject: {
            required: "This field is required",
            minlength: jQuery.format("At least {0} characters required")
          }            
        },
        errorClass: "error"
      });


});      





    // PLACEHOLDER
    // Released under MIT license: http://www.opensource.org/licenses/mit-license.php
     
    //See more at: http://www.syntacticsugr.com/23-javascript/sugr_cubes/112-detect-html5-placeholder-attribute-support#sthash.g81NfAk7.dpuf 
    placeholderSupport = ("placeholder" in document.createElement("input"));
    if(!placeholderSupport){
      //This browser does not support the placeholder attribute
      //use javascript instead
      $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() === input.attr('placeholder')) {
          input.val('');
          input.removeClass('placeholder');
        }
      }).blur(function() {
        var input = $(this);
        if (input.val() === '' || input.val() === input.attr('placeholder')) {
          input.addClass('placeholder');
          input.val(input.attr('placeholder'));
        }
      }).blur().parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
          var input = $(this);
          if (input.val() === input.attr('placeholder')) {
            input.val('');
          }
        });
      });
    }