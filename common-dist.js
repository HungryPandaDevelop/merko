$(document).ready(function(){

let defaultSlider = $('.default-slider');

defaultSlider.lightSlider({
  item: 1,
  loop: false,
  slideMove: 2,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed: 600,
  adaptiveHeight: true,

});


const changeNum = () => {

}

let mainSlider = $('.main-slider');

mainSlider.lightSlider({
  item: 1,
  // loop:true,
  slideMove: 1,
  slideMargin: 0,
  speed: 500,
  slideEndAnimation: false,
  // adaptiveHeight: true,
  pager: false,
  onSliderLoad: function (el) {
    let parentEl = $(el[0]).parents('.slider-container');

    parentEl.find('.total').text(el.getTotalSlideCount())
    for (let i = 1; i < el.getTotalSlideCount() + 1; i++) {
      parentEl.find('.current ul').append('<li>' + i + '</li>')
    }

  },
  onBeforeSlide: function (el) {
    let parentEl = $(el[0]).parents('.slider-container');

    parentEl.find('.current ul').css({ 'transform': 'translateY(-' + (el.getCurrentSlideCount() - 1) * 30 + 'px)' })
  },
});

let aboutSlider = $('.about-slider');

aboutSlider.lightSlider({
  item: 1,
  loop: true,
  slideMove: 1,
  speed: 500,
  // slideEndAnimation:false,
  adaptiveHeight: true,
  slideMargin: 45,
  pager: false,
  // autoWidth:true,
  onSliderLoad: function (el) {
    let parentEl = $(el[0]).parents('.slider-container');

    parentEl.find('.total').text(el.getTotalSlideCount())
    for (let i = 1; i < el.getTotalSlideCount() + 1; i++) {
      parentEl.find('.current ul').append('<li>' + i + '</li>')
    }

  },
  onBeforeSlide: function (el) {
    let parentEl = $(el[0]).parents('.slider-container');

    parentEl.find('.current ul').css({ 'transform': 'translateY(-' + (el.getCurrentSlideCount() - 1) * 30 + 'px)' })
  },
});

$('.next-about-slider').on('click', function (e) {
  e.preventDefault();
  aboutSlider.goToNextSlide();
});
// next-about-slider

lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})


$('.product-slider').lightSlider({
  loop: true,
  gallery: true,
  item: 1,
  thumbItem: 6,
  slideMargin: 30,
  adaptiveHeight: true,
  enableDrag: true,
  currentPagerPosition: 'left',
});

if ($(window).width() < 576) {
  $('.production-mobile-slider').removeClass("main-grid");
  $('.production-mobile-slider').lightSlider({
    loop: true,
    pager: false,
    controls: false,
    // gallery:true,
    item: 1,
    // thumbItem:6,
    slideMargin: 30,
    addClass: 'production-mobile-slider-container',
    enableDrag: true,
    adaptiveHeight: true,
    // currentPagerPosition:'left',

  });
}










let partnersSlider = $('.partners-slider');

partnersSlider.lightSlider({
  item: 5,
  loop: true,
  slideMove: 1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed: 600,
  adaptiveHeight: true,
});


let recyclingSlider = $('.recycling-slider');

recyclingSlider.lightSlider({
  item: 1,
  loop: false,
  slideMove: 1,
  easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
  speed: 600,
  // autoWidth:true,
  onSliderLoad: function (el) {
    let parentEl = $(el[0]).parents('.slider-container');

    parentEl.find('.total').text(el.getTotalSlideCount())
    for (let i = 1; i < el.getTotalSlideCount() + 1; i++) {
      parentEl.find('.current ul').append('<li>' + i + '</li>')
    }

  },
  onBeforeSlide: function (el) {
    let parentEl = $(el[0]).parents('.slider-container');

    parentEl.find('.current ul').css({ 'transform': 'translateY(-' + (el.getCurrentSlideCount() - 1) * 30 + 'px)' })
  },
});







$('.input-date').each(function () {
  let thisEl = $(this);
  let dp = new AirDatepicker(this, {
    // timepicker: true,
    // timeFormat: 'hh:mm AA',
    onSelect({ date }) {
      thisEl.addClass('input-empty');
      console.log('done', date)
    }
  },
  );
})


function toInput(date) {
  // console.log(date)
  // console.log(date.from)
  // console.log(date.to)

  $(date.input).parents('.range-slider-box').find('.from').val(date.from)
  $(date.input).parents('.range-slider-box').find('.to').val(date.to)
}

$(".range-slider").each(function () {
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



var longPhone = 16;
$('.phone-mask').mask('+7(999)999-99-99');
$('.phone-mask').on('keydown', function (e) {
    if(!(e.which >= 48 && e.which <= 57 || e.which == 8) ){
        return false;
    }
});





		// check email
		var r = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		var mailInput;
		var mailFlag = 1;
		var isEmpty = false;

		function checkMail(elThis) {
				mailInput = elThis.val();

				if (!r.test(mailInput)) {
						isEmpty = false;
						elThis.addClass('mail-error');

				} else {
						isEmpty = true;
						elThis.removeClass('mail-error')
				}
		}

		$('.check-mail').on('keyup', function () {
				checkMail($(this));

				if (mailInput.length == 0) {
						$(this).removeClass('mail-error')
				}
		});
		// check email

		// check require

		$('.btn-send').on('click', function (e) {
		
				isEmpty = false;

				checkMail($(this).parents('.form').find('.check-mail'));

				$(this).parents('.form').find('.require').each(function () {

						if ($(this).attr('type') == 'checkbox') {
								if (!$(this).is(':checked')) {
										$(this).parent().addClass('input-error');
										isEmpty = true;
								}
						}
						
						if ($(this).is('.style-select')) {

								if ($(this).prev().attr('data-val') == 0) {

										$(this).prev().addClass('input-error');
										isEmpty = true;
								}
						}

						if ($(this).attr('type') == 'file') {
								$(this).next().addClass('input-error');
								isEmpty = true;
						}

						if (!$(this).val()) {
								isEmpty = true;
								$(this).addClass('input-error');
						}
				});

				setTimeout(function () {
						$('.input-error').removeClass('input-error');
				}, 3000);

				if (isEmpty == true) {
						e.preventDefault();
				};
		});

		// check require
$('.wpcf7-form-control-wrap').each(function(){
  let sizeVal = $(this).find('.wpcf7-form-control').attr('id');
  $(this).addClass(sizeVal);
});


document.addEventListener( 'wpcf7mailsent', function( event ) {
  console.log('mail sent OK');
  // Stuff
  setTimeout(function(){
    $('.element-show').removeClass('active');
  },1500);
  
}, false ); 

// document.addEventListener( 'wpcf7invalid', function( event ) {
  
//   // Stuff
//   setTimeout(function(){
//     $('.wpcf7-form').addClass('init');
//   },1500);
  
// }, false ); 
// img cover start
$('.img-cover').each(function(){
  let imgSrc = $(this).find('img').attr('src');
  //console.log(imgSrc);
  
  $(this).css('background-image', 'url('+imgSrc+')');
});
// img cover file start
 // style input file start

let ObjfieldFile = $('.input-file');
let flagFileMulti;
let textChoise;
let sizeFile;
let nameFile;

function createNewFileContainer(textChoiseParam, flagFileMultiParam, hintParam){
		let fileContainer = $('<div class="file-input-item"><input class="input-file" type="file" data-flagM="'+flagFileMultiParam+'" accept=".jpg,.png"></div>')
		let noticeFile = $('<div class="notice-file notice-big-file"><em>Файл слишком большой</em><i></i></div>');
		let docorateFile = $('<div class="file-decorate"><span>'+textChoiseParam+'</span><i></i></div>');
		
		return fileContainer.append(docorateFile).append(noticeFile);
}

ObjfieldFile.each(function(){

		textChoise = $(this).data('textchoise') ? $(this).data('textchoise') :  'Загрузите изображение';
		flagFileMulti = $(this).data('multy') ?  $(this).data('multy') : 0;
		textHint = $(this).data('hint');

		$(this).replaceWith(createNewFileContainer(textChoise, flagFileMulti, textHint));

});



$('body').on('click', '.file-decorate', function () {

		let container = $(this).parents('.file-input-item');
		container.find('.input-file').trigger('click');
});

$('body').on('change', '.input-file', function () {
		nameFile = $(this).val().replace(/C:\\fakepath\\/i, '');
		let container = $(this).parents('.file-input-item');
		
		if(nameFile.length>0){
				sizeFile = this.files[0].size;
				if(sizeFile < 500000){
						container.find('span').text(nameFile);
						container.addClass('file-decorate-full');

						flagFileMulti = $(this).data('flagm');

						if (flagFileMulti == 1) {
								$(this).parents('.file-input-item').after(createNewFileContainer(textChoise,"1"));
						}
				}
				else{
					
					$(this).parents('.file-input-item').find('.notice-file').addClass('notice-file--show');

					setTimeout(function(){
						$('.notice-file').removeClass('notice-file--show');
					},3000);
				}
		}
});

$("body").on("click", ".file-decorate i", function (e) {
		e.stopPropagation();
		flagFileMulti = $(this).parents('.file-input-item').find('.input-file').data('flagm');
		let container = $(this).parents('.file-input-item');
		console.log(flagFileMulti);
		if (flagFileMulti == 1) {
				container.remove();
		}
		else{
				container.replaceWith(createNewFileContainer(textChoise,"0"));
		}
});
 // style input file end
// custom-select

$('.style-select').each(function () {
  let firstElOption = $(this).find('option:selected').text();
  let dataText = $(this).data('text');
  let dataClass = $(this).data('class');
  $(this).find('option').each(function(index){
    $(this).attr('data-index',index);
  });
  if(dataText){
      firstElOption = dataText;
  }


  let styleSelectBoxElement = 
    $(`<div class='custom-select ${dataClass}'>
        <span>${firstElOption}</span>
        <ul class='ln'></ul>
        <i></i>
      </div>
    `);

  $(this).before(styleSelectBoxElement).hide();

  $(this).find('option').each(function (index) {
      var optionText = $(this).text();
      $(this).parent().prev().find('ul').append('<li data-index="'+index+'" data-value="'+$(this).val()+'">' + optionText + '</li>');
  });
});

$(".custom-select").on('click', function (e) {
  e.preventDefault();
  if ($(this).hasClass('active')) {
      $(this).removeClass('active');
  } else {
      $('.custom-select').removeClass('active');
      $(this).addClass('active');
  }
});

$('body').on('click', function (evt) {
  if (!$(evt.target).is('.custom-select, .custom-select > *')) {
      $('.custom-select').removeClass('active');
  }
});

let tempSelectVal;
$('.custom-select').on('click', 'li', function () {
  let liIndex = $(this).data('index');
  let parentsEl = $(this).parents('.custom-select');

  // if(!tempSelectVal){   
  //   tempSelectVal = $(this).remove();
  // }else{
  //   $(this).after(tempSelectVal);
  //   tempSelectVal = $(this).remove();
  // }
  
  parentsEl.next().find('option[data-index="'+liIndex+'"]').prop('selected', true);

  parentsEl.find('span').text($(this).text());
});
// custom-select

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
$('.password-field').on('click','i',changeStatePass);
let visibility = true;
function changeStatePass(){

  console.log(visibility);

  let thisEl = $(this);

  let changePass = (el,type,bool) => {
    $('.password-field').find('input').attr('type',type);
    el.attr('data-visibility', bool);
    visibility = !visibility;
  }

  visibility ? changePass(thisEl,'text', visibility) : changePass(thisEl,'password', visibility)

}



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

$('.hover-li > a').on('click',function(e){
  e.preventDefault();
  $(this).parent().toggleClass('active');
});





let detailTabs = $('.tabs');
if(detailTabs.length > 0){
  const onHoverMoveCarriage = function(num){
    let widthCarriage = detailTabs.find('li').eq(num).width();
    let offsestLeftCarriage = detailTabs.find('li').eq(num).position().left;
    $('.tabs-carriage').css({width: widthCarriage+'px', left: offsestLeftCarriage+'px'});
  }
  let timeOutId;
  let curretTabs = 0;
  let timeReturn = 500;

  detailTabs.find('li').hover(
  function(){

    clearInterval(timeOutId)
    onHoverMoveCarriage($(this).index());

  
  },function(){

    timeOutId = setTimeout(function(){
      onHoverMoveCarriage(curretTabs);
    }, timeReturn);
  });

  detailTabs.find('li').on('click',function(){
    
    curretTabs = $(this).index();
    detailTabs.find('li').removeClass('active').eq(curretTabs).addClass('active');
    onHoverMoveCarriage(curretTabs);

    $('.tabs-item').removeClass('active').eq(curretTabs).addClass('active');
  });

  onHoverMoveCarriage(0);

}
});
//# sourceMappingURL=common-dist.js.map