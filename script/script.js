"use strict";

$(document).ready(function () {
  
// fade effect on slides in slider-------
  $.fn.slidesSwitch = function () {
    $(".slider__slide").fadeToggle(1000);
  };
  
  $('.slider__switch').click(function () {
    $(document).slidesSwitch();
  });
  
  setInterval( $.fn.slidesSwitch, 4000 );
 //---------------------------------------
  
// test button on page for va tests------
  $.fn.testFunction = function () {
    $(".main-menu").fadeToggle('slow');
  };

  $('.js-test-btn').click(function () {
    $(document).testFunction();
  });
//----------------------------------------
});