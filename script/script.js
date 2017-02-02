/*global $, jQuery*/

$(document).ready(function () {
  "use strict";
  
  //event.preventDefault() for IE9(event.returnValue = false)
  $.fn.epd = function () {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  };
  
// slider switches behaviour
  $('.slider__switch').hide();
  $('.slider').mouseover(function () {
    $('.slider__switch').show();
  });
  $('.slider').mouseleave(function () {
    $('.slider__switch').hide();
  });

  // fade effect on slides in slider-------
  $.fn.slidesSwitch = function () {
    $(".slider__slide").fadeToggle(1000);
  };

  $('.slider__switch').click(function () {
    $(document).slidesSwitch();
  });

  setInterval($.fn.slidesSwitch, 4000);
  
  //feedback-modal-window-with-fade-effect behaviour
  $.fn.toggleForm = function () {
    $('.overlay').toggle();
    $('.feedback').fadeToggle('slow');
  };

  $('.feedback-js, .feedback__close').click(function () {
    $.fn.epd();
    $.fn.toggleForm();
  });

  $('.feedback__submit').click(function (e) {
    $('.feedback__input_required').each(function () {
      if (!$(this).val()) {
        $('.feedback').effect('pulsate', 1);
        $(this).addClass('feedback__input_error').prop('placeholder', 'Поле обязателно для заполнения');
      }
    });
    $.fn.epd();
  });
  
//----------------------------------------
});