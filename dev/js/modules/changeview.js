$(document).ready(function() {
    if ($('.product').length) {
      view();
    }
});

// Смена видов отображения контента
var view = function() {
  $('.catalog-view__link').on('click', function(event) {
    event.preventDefault();
    var className = $(this).attr('data-class'),
        content = $('.table, .piclist, .list');
    content.removeClass('table piclist list').addClass(className);

    $('.catalog-view').find('.active').removeClass('active');
    $(this).addClass('active');
  });
};
