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
  // loop:true,
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
  enableDrag: false,
  currentPagerPosition:'left',
});  






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







