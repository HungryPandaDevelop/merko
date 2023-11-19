let defaultSlider = $('.default-slider');

defaultSlider.lightSlider({
  item:1,
  loop:false,
  slideMove:2,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed:600,
  adaptiveHeight: true,

});  
let mainSlider = $('.main-slider');

mainSlider.lightSlider({
  item:1,
  loop:true,
  slideMove:2,
  speed:600,
  // adaptiveHeight: true,
  pager: false,
  onSliderLoad: function (el) {
    // console.log('onSliderLoad', el);
    console.log('getTotalSlideCount', el.getTotalSlideCount());
    $('.main-home .total').text(el.getTotalSlideCount())
  },
  onBeforeSlide: function (el) {
    // console.log('onAfterSlide', el);
    console.log('getCurrentSlideCount', el.getCurrentSlideCount());
    $('.main-home .current').text(el.getCurrentSlideCount())
  },
});  



var totalSlides = $('.main-slider .lSPager').appendTo("<div>test</div>");


let partnersSlider = $('.partners-slider');

partnersSlider.lightSlider({
  item: 5,
  loop: true,
  slideMove:1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed:600,
  adaptiveHeight: true,
});  


let multySlider = $('.multy-slider');

multySlider.lightSlider({
  item: 3,
  loop:false,
  slideMove:1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed:600,
  adaptiveHeight: true,

});  




let thumbSlider = $('.thumb-slider');

thumbSlider.lightSlider({

  gallery:true,
  item:1,
  thumbItem:4,
  slideMargin:0,
  enableDrag: false,
  currentPagerPosition:'top',
});  

let thumbSliderVericale = $('.thumb-slider-verticale');

thumbSliderVericale.lightSlider({

  gallery:true,
  item:1,
  vertical:true,
  verticalHeight:300,
  controls: false,
  // vThumbWidth:50,
  thumbItem:4,
});  

$('.input-date').each(function(){
  let dp = new AirDatepicker(this,{
    timepicker: true,
    timeFormat: 'hh:mm AA',
    onSelect({date}) {
      $(this).addClass('input-empty');
      // console.log('done', date) 
    }
  });
})

