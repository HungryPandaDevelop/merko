
$('.close-js').on('click', function () {
    $(this).parents('.element-show').removeClass('show');
});
$('.popup-overlay-js').on('click',function(e){
    $(this).parents('.element-show').removeClass('show');
});

$(document).on('keyup', (evt) => {
    if (evt.keyCode === 27) {
        $('.element-show').removeClass('show');
    }
});

$('body').on('click','.element-btn', function (e) {
    e.preventDefault();
    
    $('.element-show').removeClass('show');
    let activeIndex = $(this).attr('data-element');
    
    if(activeIndex == 3){
        let getText = $(this).parents('.order-item-js').find('.get-title-order');
        // console.log(getText) 
        $('.title-order').text(getText.text() );
    }

  console.log('activeIndex',activeIndex);
  
    $('[data-element="' + activeIndex + '"].element-show').addClass('show');

    
});