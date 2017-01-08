"use strict";

$(document).ready(function () {
  
$('slider__switch_slide_1').hide();
$('slider__switch_slide_2').hide();

  $.fn.slidesSwitch = function () {
    
  };
  
  $('.slider__switch').click(function() {
    $(document).slidesSwitch();
  });
  
  
  /*setInterval( $.fn.slidesSwitch, 4000 );*/
 
  
  $.fn.hideMenu = function () {
    if ( $(".main-menu:visible") ) {
      $(".main-menu:visible").fadeTo('slow', 0);
    } else if ( $(".main-menu").hide() ) {
      $(".main-menu:visible").fadeTo('slow', 1);
    }
  };

  $('.js-test-btn').click( function() {
    $(document).hideMenu();
  });
});