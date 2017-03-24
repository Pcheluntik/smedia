
jQuery(document).ready(function($){
  $('.view_all').hide(0);
  $('.works_btn').click(function(event){
    $('.view_all').slideToggle(400);
    if ($('.works_btn').html() == '<p>Скрыть</p>')
    {
        $('.works_btn').html('<p>Все работы</p>');
    }
    else {
      $('.works_btn').html('<p>Скрыть</p>');
    }
});
});
