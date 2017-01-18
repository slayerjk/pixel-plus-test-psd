$(document).ready(function () {
  "use strict";
  
  //feedback-modal-window-with-fade-effect
  $.fn.toggleForm = function () {
    $('.feedback').fadeToggle('slow');
  };
  
  $('.feedback-js, .feedback__close').click(function () {
    event.preventDefault();
    $.fn.toggleForm();
  });
  
  // fade effect on slides in slider-------
  $.fn.slidesSwitch = function () {
    $(".slider__slide").fadeToggle(1000);
  };

  $('.slider__switch').click(function () {
    $(document).slidesSwitch();
  });

  setInterval($.fn.slidesSwitch, 4000);
  
  // test button on page for va tests------
  $.fn.testFunction = function () {
    $(".main-menu").effect('bounce', 1000);
  };

  $('.js-test-btn').click(function () {
    $(document).testFunction();
  });
  //----------------------------------------
});