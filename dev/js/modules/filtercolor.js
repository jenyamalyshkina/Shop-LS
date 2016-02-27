$(document).ready(function() {
    if ($('ul.color').length) {
        color();
    }
});

function color() {
  $('.color__link').click(function(event) {
    event.preventDefault();
    var $this = $(this);
      if ($this.hasClass('choosen-color')) {
        $this.removeClass('choosen-color');
      }
      else {
        $this.addClass('choosen-color')
      };
 });
};
