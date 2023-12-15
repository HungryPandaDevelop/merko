let defaultSlider = $('.default-slider');

defaultSlider.lightSlider({
  item:1,
  loop:false,
  slideMove:2,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed:600,
  adaptiveHeight: true,

});  


const changeNum = ()=>{

}

let mainSlider = $('.main-slider');

mainSlider.lightSlider({
  item:1,
  // loop:true,
  slideMove:1,
  speed:500,
  slideEndAnimation:false,
  // adaptiveHeight: true,
  pager: false,
  onSliderLoad: function (el) {
    let parentEl = $(el[0]).parents('.slider-container');

    parentEl.find('.total').text(el.getTotalSlideCount())
    for(let i = 1; i < el.getTotalSlideCount()+1; i++){
      parentEl.find('.current ul').append('<li>'+i+'</li>')
    }
    
  },
  onBeforeSlide: function (el) {
    let parentEl = $(el[0]).parents('.slider-container');

    parentEl.find('.current ul').css({'transform':'translateY(-' +  (el.getCurrentSlideCount()-1) * 30 + 'px)'})
  },
});  

let aboutSlider = $('.about-slider');

aboutSlider.lightSlider({
  item:1,
  loop:true,
  slideMove:1,
  speed:500,
  // slideEndAnimation:false,
  adaptiveHeight: true,
  slideMargin: 45,
  pager: false,
  // autoWidth:true,
  onSliderLoad: function (el) {
    let parentEl = $(el[0]).parents('.slider-container');
    
    parentEl.find('.total').text(el.getTotalSlideCount())
    for(let i = 1; i < el.getTotalSlideCount()+1; i++){
      parentEl.find('.current ul').append('<li>'+i+'</li>')
    }
    
  },
  onBeforeSlide: function (el) {
    let parentEl = $(el[0]).parents('.slider-container');

    parentEl.find('.current ul').css({'transform':'translateY(-' +  (el.getCurrentSlideCount()-1) * 30 + 'px)'})
  },
});  

$('.next-about-slider').on('click', function(e){
  e.preventDefault();
  aboutSlider.goToNextSlide(); 
});
// next-about-slider

lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})


$('.product-slider').lightSlider({
  loop:true,
  gallery:true,
  item:1,
  thumbItem:6,
  slideMargin: 30,
  enableDrag: true,
  currentPagerPosition:'left',
});  

if($(window).width()<576){
  $('.production-mobile-slider').removeClass("main-grid");
  $('.production-mobile-slider').lightSlider({
    loop:true,
    pager: false,
    controls: false,
    // gallery:true,
    item:1,
    // thumbItem:6,
    slideMargin: 30,
    addClass:'production-mobile-slider-container',
    enableDrag: true,
    // currentPagerPosition:'left',
    
  });  
}










let partnersSlider = $('.partners-slider');

partnersSlider.lightSlider({
  item: 5,
  loop: true,
  slideMove:1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed:600,
  adaptiveHeight: true,
});  


let recyclingSlider = $('.recycling-slider');

recyclingSlider.lightSlider({
  item: 1,
  loop: false,
  slideMove:1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed:600,
  autoWidth:true,
  onSliderLoad: function (el) {
    let parentEl = $(el[0]).parents('.slider-container');
    
    parentEl.find('.total').text(el.getTotalSlideCount())
    for(let i = 1; i < el.getTotalSlideCount()+1; i++){
      parentEl.find('.current ul').append('<li>'+i+'</li>')
    }
    
  },
  onBeforeSlide: function (el) {
    let parentEl = $(el[0]).parents('.slider-container');

    parentEl.find('.current ul').css({'transform':'translateY(-' +  (el.getCurrentSlideCount()-1) * 30 + 'px)'})
  },
});  







$('.input-date').each(function(){
  let thisEl = $(this);
  let dp = new AirDatepicker(this,{
    // timepicker: true,
    // timeFormat: 'hh:mm AA',
    onSelect({date}) {
      thisEl.addClass('input-empty');
      console.log('done', date) 
    }
  },
  );
})


function toInput (date) {
  // console.log(date)
  // console.log(date.from)
  // console.log(date.to)
  
  $(date.input).parents('.range-slider-box').find('.from').val(date.from)
  $(date.input).parents('.range-slider-box').find('.to').val(date.to)
}

$(".range-slider").each(function(){
  let type = $(this).data('type');
  let min = $(this).data('min');
  let max = $(this).data('max');
  let from = $(this).data('from');
  let to = $(this).data('to');

  $(this).ionRangeSlider({
    type: type,
    min: min,
    max: max,
    from: from,
    to: to,
    skin: "round",
    drag_interval: false,
    grid_snap: true,
    grid_num: 10,
    onChange: toInput,
    // step: 100
  });
});