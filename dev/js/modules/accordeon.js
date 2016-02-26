$(document).ready(function() {
    if ($('.basic-filters').length) {
        accordeon().trigger();
        accordeon().reset();
    }
});

// Модуль accordeon
  var accordeon = function () {

// Аккордеон
    function trigger() {

      var trigger = $('.basic-filters__link-trigger');

      trigger.prepend('<i class="arrow-up arrow"></i>');
      $('.arrow').hide();

      trigger.hover(function() {
                      $('.arrow',this).show()
                    }, function() {
                      $('.arrow',this).hide()
                    });

      trigger.click(function(event){
        event.preventDefault();
        $('.arrow',this).toggleClass('arrow-down');
        $(this).next('.accordeon__inner').slideToggle(200);
      });
    };

    // Сброс фильтров
    function reset() {

      var reset = $('.reset-filter');

      reset.click(function(event) {
        event.preventDefault();
        $(this)
          .closest('ul')
          .find('input:checkbox')
          .removeAttr('checked');
      });
    };

    return {
      trigger: trigger,
      reset: reset
    };
};

