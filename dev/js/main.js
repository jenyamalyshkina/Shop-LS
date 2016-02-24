// Объявляем модуль
  var myModule = (function () {

// Инициализируем модуль
    var init = function () {
      _setUpListener();
    };

// Прослушиваем события
    var _setUpListener = function () {
      $('.reset-filter').on('click', _resetFilter)
      $('.catalog-view__link_piclist').on('click', _viewPiclist)
      $('.catalog-view__link_table').on('click', _viewTable)
      $('.catalog-view__link_list').on('click', _viewList)
      $('.image__item-link').on('click', _picSlide)
      $('.color__link').on('click', _prevent)
    };

// Устанавливаем бордер выбранной картинке
$('.image__list').find(':first-child').addClass('active');

//Отключаем переход по ссылкам в цветах
var _prevent = function(event) {
  event.preventDefault();
}

// Переключаем изображения в слайдере
var _picSlide = function(event) {
  event.preventDefault();
  var
    $this = $(this),
    item = $this.closest('.image__item'),
    container = $this.closest('.image'),
    display = container.find('.image__big-pic'),
    path = item.find('.image__item-pic').attr('src');
    duration = 100;

  if (!item.hasClass('active')) {
    item.addClass('active').siblings().removeClass('active');

    display.fadeOut(duration, function() {
    $(this).attr('src', path).fadeIn(duration);

    });
  }
};


// Переключаем отображение контента
var _viewPiclist = function(event) {
  event.preventDefault();
  $('.catalog-view').find('.active').removeClass('active');
  $(this).addClass('active');
  $('.table').removeClass('table').addClass('piclist');
  $('.list').removeClass('list').addClass('piclist');
}

var _viewTable = function(event) {
  event.preventDefault();
  $('.catalog-view').find('.active').removeClass('active');
  $(this).addClass('active');
  $('.list').removeClass('list').addClass('table');
  $('.piclist').removeClass('piclist').addClass('table');
}

var _viewList = function(event) {
  event.preventDefault();
  $('.catalog-view').find('.active').removeClass('active');
  $(this).addClass('active');
  $('.table').removeClass('table').addClass('list');
  $('.piclist').removeClass('piclist').addClass('list');
}


// Аккордеон
var trigger = $('.basic-filters__link-trigger');

trigger.prepend('<i class="arrow-up arrow"></i>');
$('.arrow').hide();

trigger.hover(function() {
  $('.arrow',this).show()
  },  function() {
        $('.arrow',this).hide()
      });

trigger.click(function(e){
  e.preventDefault();
  $('.arrow',this).toggleClass('arrow-down');
  $(this).next('.accordeon__inner').slideToggle(200);
});



// Сброс фильтров
var _resetFilter = function(event) {
  event.preventDefault();
    $(this)
      .closest('ul')
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

// Селект
$('#select-field').selectize({
  create: false,
  sortField: 'text'
});

// Возвращаем объект (публичные методы)
  return {
    init: init
  };
})();

// Вызываем модуль
myModule.init();