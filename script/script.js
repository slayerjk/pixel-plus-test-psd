/*global $, jQuery*/

$(document).ready(function () {
  "use strict";
  
  /*event.preventDefault() for IE9(event.returnValue = false)*/
  $.fn.epd = function () {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  };
  
/* slider switches behaviour*/
  $('.slider__switch').hide();
  $('.slider').mouseover(function () {
    $('.slider__switch').show();
  });
  $('.slider').mouseleave(function () {
    $('.slider__switch').hide();
  });

  /* fade effect on slides in slider*/
  $.fn.slidesSwitch = function () {
    var
      $curInputChecked = $('.slider__input:checked'),
      $nextInput = $curInputChecked.next(),
      $prevInput = $curInputChecked.prev();
    
    $curInputChecked.removeAttr('checked');
    if ($nextInput.prop('type') === 'radio') {
      $nextInput.prop('checked', 'checked');
    } else {
      $nextInput = $('.slider__input').first().prop('checked', 'checked');
    }
    
    $('.slider__switch_left').on('click', function () {
      if ($prevInput.prop('type') === 'radio') {
        $prevInput.prop('checked', 'checked');
      } else {
        $prevInput = $('.slider__input').last().prop('checked', 'checked');
      }
    });
    $('.slider__switch_right').on('click', function () {
      if ($nextInput.prop('type') === 'radio') {
        $nextInput.prop('checked', 'checked');
      } else {
        $nextInput = $('.slider__input').first().prop('checked', 'checked');
      }
    });
  };
  
  setInterval($.fn.slidesSwitch, 2000);
  
  /*feedback-modal-window-with-fade-effect behaviour*/
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
});