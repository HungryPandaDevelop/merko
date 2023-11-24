if($('#map').length>0){

	ymaps.ready(function () {

		let massCoord = [];

		$('.contacts-address-line').each(function (index) {
			
			
			massCoord.push([$(this).data('coord-x'), $(this).data('coord-y'), (index + 1)]);

		});
	

		let mapMarker = $('#map').data('marker');

		let myMap = new ymaps.Map('map', {
			center: [massCoord[0][0], massCoord[0][1]],
			zoom: 9
		});
	
	
		let myPlacemarkWithContent = [];
		for (let i = 0; i < massCoord.length; i++) {
			let addressEl = $('#address-' + i);
			let addressImg = addressEl.find('.photo-address').attr("src");
			let addressPhone = addressEl.find('.phone-feedback').html();
			let addressText = addressEl.find('.address').html();
	
	
	
	
			let BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
			'<div class="box-map">' +
			'<img scr="' + addressImg + '">' +
			'<div class="box-map-content"><div>' + addressText + '</div>' +
			'<div>' + addressPhone + '</div>' +
			'</div></div>');
	
			let [x, y, id] = massCoord[i];

	
		// console.log("for", x, y);
	
			myPlacemarkWithContent[i] = new ymaps.Placemark([x, y], {
				id: id,
				hintContent: 'Собственный значок метки с контентом',
				balloonContent: 'А эта — новогодняя'
			}, {
				balloonContentLayout: BalloonContentLayout,
				// Опции.
				// Необходимо указать данный тип макета.
				hideIconOnBalloonOpen: false,
				iconLayout: 'default#imageWithContent',
				// Своё изображение иконки метки.
				iconImageHref: mapMarker,
				// Размеры метки.
				iconImageSize: [30, 37],
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				iconImageOffset: [-15, -37],
				// Смещение слоя с содержимым относительно слоя с картинкой.
				iconContentOffset: [15, 37] //,
				// Макет содержимого.
				//iconContentLayout: MyIconContentLayout
			});

			myMap.geoObjects
				.add(myPlacemarkWithContent[i]);
	
			myMap.setBounds(myMap.geoObjects.getBounds(), {
				checkZoomRange: true
			}).then(function () {
				if (myMap.getZoom() > 12) {myMap.setZoom(12)};
			});
	
		//});
	
		}
	

		// const { ymaps } = window;

    // const suggest = new ymaps.SuggestView('coords-ya');

    // suggest.events.add('select', (e) => {

    //   const val = String(e.get('item').value.trim());

    //   const myGeocoder = ymaps.geocode(val);

    //   myGeocoder
    //     .then(res => {
    //       const coords = [res.geoObjects.get(0).geometry._coordinates[0], res.geoObjects.get(0).geometry._coordinates[1]]

		// 			myMap.setCenter(coords ,12);
    //     });
    // });

		// $('.btn-map-center').on('click', function (e) {
		// 	e.preventDefault();
		// 	// var itemIndex = $(this).parents('.contacts-address-line').data("index");
		// 	let itemIndex = $(this).data("index");
		// 	$('html,body').animate({
		// 		scrollTop: $('.map_home').offset().top - 200
		// 	}, 1000);
	
		// 	// console.log("forCenter", [masMark[itemIndex][0], masMark[itemIndex][1]]);
	
	
		// 	myMap.setCenter([masMark[itemIndex][0], masMark[itemIndex][1]]);
	
		// 	myPlacemarkWithContent[itemIndex].balloon.open();
		// });


							
		// function geoSearch(inputVal){
	
		// 	ymaps.geocode(inputVal, {
		
		// 		results: 1
		// 	}).then(function (res) {
		// 		// Выбираем первый результат геокодирования.
		// 		var firstGeoObject = res.geoObjects.get(0),
		// 				// Координаты геообъекта.
		// 				coords = firstGeoObject.geometry.getCoordinates(),
		// 				// Область видимости геообъекта.
		// 				bounds = firstGeoObject.properties.get('boundedBy');
		// 		console.log('coords',coords);
		
		// 		// Получаем строку с адресом и выводим в иконке геообъекта.
		// 		firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());
		
		// 		// Добавляем первый найденный геообъект на карту.
		// 		// myMap.geoObjects.add(firstGeoObject);
		// 		// Масштабируем карту на область видимости геообъекта.
		// 		myMap.setBounds(bounds, {
		// 			// Проверяем наличие тайлов на данном масштабе.
		// 			checkZoomRange: true
		// 		});
		
		// 		// var multiRoute = new ymaps.multiRouter.MultiRoute({
		// 		// 	referencePoints: [
		// 		// 		coords,
		// 		// 		[cordX, cordY]
		// 		// 	],
		// 		// 	params: {
		// 		// 		results: 1,
		// 		// 		routingMode: 'auto'
		// 		// 	}
		// 		// }, {
		// 		// 	boundsAutoApply: true
		// 		// });
		
		// 		// myMap.geoObjects.add(multiRoute);
				
		// 		myMap.setCenter([cordX, cordY]);

		// 		//console.log('Все данные геообъекта: ', firstGeoObject.properties.getAll());
		
		// 	},
		// 					function (err){
		// 		console.log('ошибка');
		// 	});
			
		// }
			
			
			
			// $('.btn-find').on("click",function(e){
			// 	e.preventDefault();
			// 	geoSearch($('.map-search').val());
			// });
			

			// $('.show-in-map').on('click',function(e){
			// 	e.preventDefault();
			// 	let el = $('.contacts-address-line').eq($(this).parents('.map-address-item').index())
			// 	let xCord = el.data('coord-x');
			// 	let yCord = el.data('coord-y');
			// 	myMap.setCenter([xCord, yCord],12);
			// });

			// $('.search-form-tabs-all span').on('click',function(){
			// 	let el = $(this);
			// 	let xCord = el.data('coord-x');
			// 	let yCord = el.data('coord-y');
			// 	myMap.setCenter([xCord, yCord],12);
			// });
	});
	
	
	
	

	
	
}