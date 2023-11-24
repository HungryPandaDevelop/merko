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
  // loop:true,
  slideMove:1,
  speed:500,
  slideEndAnimation:false,
  // adaptiveHeight: true,
  pager: false,
  onSliderLoad: function (el) {

    $('.home-slider-item').each(function(){
      let sliceLetter = (tag)=>{
        let objLetters = $(this).find(tag);
    
        let letters = objLetters.text();
      
        objLetters.empty();
      
        Array.from(letters).forEach((i,index)=>{
          let space = i === ' ' ? ' ' : '';
          let delay = (Math.floor(index / 10) / 10) + 0.35; // Измените 3 на желаемый шаг
          objLetters.append('<em><span style="transition-delay:'+delay+'s">'+i+'</span></em>' + space);
        });
      }
      sliceLetter('h2')
      sliceLetter('h3')
    });

    $('.main-home .total').text(el.getTotalSlideCount())
    for(let i = 1; i < el.getTotalSlideCount()+1; i++){
      $('.main-home .current ul').append('<li>'+i+'</li>')
    }
    
  },
  onBeforeSlide: function (el) {
    // console.log('onAfterSlide', el);
    console.log('getCurrentSlideCount', el.getCurrentSlideCount());
    $('.main-home .current ul').css({'transform':'translateY(-' +  (el.getCurrentSlideCount()-1) * 30 + 'px)'})
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
});  







