<div class="about-slider-item main-grid">
  <div class="col-4 col-xs-6">
    <div class="about-item about-item-main">
      <?
      $thumbnail_url = get_the_post_thumbnail_url($args['id'], 'full'); // Замените 'thumbnail' на нужный размер
      ?>
      <div class="img-cover"><img src="<? echo $thumbnail_url; ?>" alt=""></div>
      <div class="about-item-num"> <span>
          1
        </span></div>
    </div>
  </div>
  <div class="col-8 col-xs-12">
    <div class="about-item about-item-info">
      <div class="info-cell">
        <h3>
          <? echo get_the_title( $args['id']); ?>
        </h3>
        <div>Тип установки</div>
      </div>
      <div class="info-cell">
        <h3>130-150 т/ч</h3>
        <div>Производительность </div>
      </div>
      <div class="info-cell">
        <h3>40 м<sup>3</sup></h3>
        <div>Бункер горячих минералов</div>
      </div>
      <div class="info-cell"><a class="more-btn--black" href="<? echo get_the_permalink($args['id']); ?>"> <i>
          </i><span>Подробнее</span></a></div>
    </div>
  </div>
  <div class="col-4 col-xs-6 about-item-price-cell">
    <div class="about-item about-item-price">
      <!-- <h3>150 млн. руб</h3> -->
      <!-- <div>Средняя стоимость</div> -->
      <div class="btn-container"> <a class="more-btn--white" href="#"> <i></i><span>Забронировать</span></a></div>
    </div>
  </div>
  <? if($args['next_id']){?>
  <div class="col-4 col-xs-6">
    <div class="about-item about-item-next">
      <h3>
        <? echo get_the_title( $args['next_id']); ?>
      </h3>
      <div>120-160 тонн/час 42 м<sup>3</sup></div>
      <div class="btn-container"> <a class="more-btn--gray" href="#"> <i></i><span>Следующий завод</span></a>
      </div>
    </div>
  </div>
  <div class="col-4 col-xs-6">
    <div class="about-item about-item-preview">
      <?
      $thumbnail_url_next = get_the_post_thumbnail_url($args['next_id'], 'full'); // Замените 'thumbnail' на нужный размер
      ?>
      <div class="img-cover"><img src="<? echo $thumbnail_url_next; ?>" alt=""></div>
      <div class="about-item-num"> <span>2</span></div>
    </div>
  </div>
  <?} ?>

</div>