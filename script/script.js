$(document).ready(function () {
  "use strict";
  
  //feedback-modal-window-with-fade-effect
  $.fn.toggleForm = function () {
    $('.overlay').toggle();
    $('.feedback').fadeToggle('slow');
  };
  
  $('.feedback-js, .feedback__close').click(function () {
    event.preventDefault();
    $.fn.toggleForm();
  });
  
  $(document).on('click', '.feedback__submit', function () {
    if (!$('#user-name') || !$('#user-phone') || !$('#user-email')) {
      event.preventDefault();
      $('.feedback__input_required').toggleClass('feedback__input_error').prop('placeholder', 'Поле обязательно для заполнения');
    }
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