// Объявляем модуль
  var myModule = (function () {

// Инициализируем модуль
    var init = function () {
      _setUpListener();
    };

// Прослушиваем события
    var _setUpListener = function () {
      $('.reset-filter').on('click', _resetFilter)
    };


// Иконка при наведении на ссылку-триггер
    $('.basic-filters__link-trigger').hover(function() {
      $(this).prepend('<i class="arrow-up"></i>')
    }, function() {
      $('.arrow-up').remove()
    });


// Сброс фильтров
var _resetFilter = function(event) {
  event.preventDefault();
    $(this)
      .siblings('ul')
      .find('input:checkbox')
      .removeAttr('checked');
}


// Запускаем columnizer
$('.important-info__text').addClass('dontsplit');
$('.important-info__content').columnize({ columns: 2 });


// Слайдер в сайдбаре
$(function() {
  $( ".price-range__slider" ).slider({
      range: true,
      min: 0,
      max: 30000,
      values: [ 100, 13000 ],
      slide: function( event, ui ) {
        $( "#price-range__amount1" ).val(ui.values[ 0 ]);
        $( "#price-range__amount2" ).val(ui.values[ 1 ]);
      }
    });
    $( "#price-range__amount1" ).val(  $( ".price-range__slider" ).slider( "values", 0 ));
    $( "#price-range__amount2" ).val(  $( ".price-range__slider" ).slider( "values", 1 ));

  });


// Возвращаем объект (публичные методы)
  return {
    init: init
  };
})();

// Вызываем модуль
myModule.init();

