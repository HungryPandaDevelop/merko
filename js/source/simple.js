
var st = 0;

let homeHeight = $('.main-home').height();

let header = $('.main-header');

window.addEventListener('scroll', function (e) {

  st = $(this).scrollTop();

  if(st > 120 && st < homeHeight){
    header.addClass('stick');
    header.removeClass('show');
  }
  else if(st > homeHeight){
    header.addClass('show');
    
  }
  else{
    header.removeClass('stick');
  }
});   



$('.main-scroll-down').on('click',function(){
  $("html, body").animate({ scrollTop: $(window).height() }, 600);
});






