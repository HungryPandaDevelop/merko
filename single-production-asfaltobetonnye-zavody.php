<? get_header(); ?>
<? 	$imgs = acf_photo_gallery('galereya_zavoda', get_the_ID()); ?>


<div class="stub"></div>
<div class="main-full">
  <div class="breadcrumbs">
    <?php 
      bcn_display();
    ?>
  </div>
</div>

<div class="content ">

  <div class="main-grid product-main order-item-js">
    <div class="col-8 col-xs-12">
      <h1 class="get-title-order">
        Асфальтобетонный завод
        <? the_title(); ?>
      </h1>
    </div>

    <?
      $termID = wp_get_post_terms(get_the_ID(), 'production_category')[0]->term_id;
      $next_post = get_adjacent_post(false, '', false);

      $next_post_id = $next_post->ID;
      $next_termID = wp_get_post_terms($next_post_id, 'production_category')[0]->term_id;

      if($termID==$next_termID){ ?>
    <div class="col-4  col-xs-12 link-next-container">
      <a class="link-next" href="<? echo get_the_permalink( $next_post_id ) ?>"> <span>Следующий товар
        </span><i></i>
      </a>
    </div>
    <?}?>


    <div class="col-6 col-xs-12">
      <div class="product-slider-container">
        <div class="product-slider">

          <?php
            if($imgs){
            foreach ($imgs as $image) {
          ?>
          <a class="product-slider-item" data-thumb="<?php echo $image["full_image_url"];?>"
            data-src="<?php echo $image["full_image_url"];?>" href="<?php echo $image["full_image_url"];?>"
            data-lightbox="product">
            <div class="product-slider-loop"><i class="loop-ico"></i></div><img
              src="<?php echo $image["full_image_url"];?>" alt="">
          </a>
          <?}}?>

        </div>
      </div>
      <div class="product-about">
        <div class="btn btn--red element-btn" data-element="3">Забронировать</div>
        <div class="about-item about-item-price hidden-xs">
          <!-- <h3>150 млн. руб</h3> -->
          <!-- <div>Средняя стоимость</div> -->
          <div class="btn-container"> <a class="more-btn--white element-btn" data-element="3" href="#">
              <i></i><span>Забронировать</span></a></div>
        </div>
        <div class="product-about-text">
          <? the_field('opisanie_po_galereej'); ?>
          <!-- <p>Все оборудование имеет сертификаты ISO9001:2000 и сертификаты соответствия нормам и директива Евросоюза –
            СЕ.</p>
          <p>Асфальтобетонный завод данной серии служит отличным решением для выпуска щебеночно-мастичных
            сфальтобетонных смесей.</p> -->

        </div>
      </div>
    </div>
    <div class="col-6 col-xs-12">
      <div class="product-info">
        <h3>Технические характеристики
        </h3>
        <div class="product-info-item">
          <div class="main-grid">
            <div class="col-12">
              <h2>Основные параметры</h2>
            </div>
            <div class="col-6">
              <h4>
                <? echo get_field('tehnicheskie_harakteristiki')['osnovnye_parametry']['tip_ustanovki']; ?>
              </h4><span>Модель</span>
            </div>
            <div class="col-6">
              <h4>
                <? echo get_field('tehnicheskie_harakteristiki')['osnovnye_parametry']['proizvoditelnost']; ?>
              </h4>
              <span>Производительность</span>
            </div>
            <div class="col-6">
              <h4>
                <? echo get_field('tehnicheskie_harakteristiki')['osnovnye_parametry']['obem_smesitelya']; ?>
              </h4><span>Объем смесителя </span>
            </div>
            <div class="col-6">
              <h4>
                <? echo get_field('tehnicheskie_harakteristiki')['osnovnye_parametry']['bunker_gotovoj_smesi']; ?>
              </h4><span>Количество фракций</span>
            </div>
            <div class="col-6">
              <h4>
                <? echo get_field('tehnicheskie_harakteristiki')['osnovnye_parametry']['maksimalnaya_potreblyaemaya_moshhnst']; ?>
              </h4><span>Максимальная потребляемая мощность</span>
            </div>

            <?/*<div class="col-6">
              <h4>
                <? echo get_field('tehnicheskie_harakteristiki')['osnovnye_parametry']['moshhnost_privoda_smesitelya_kvt']; ?>
            </h4><span>Мощность привода смесителя (кВт)</span>
          </div>*/?>
        </div>
      </div>
      <div class="product-info-item">
        <div class="main-grid">
          <div class="col-12">
            <h2>Дополнительные параметры</h2>
          </div>
          <div class="col-6">
            <h4>
              <? echo get_field('tehnicheskie_harakteristiki')['sushilnyj_baraban']['moshhnost_gorelki']; ?>
            </h4><span>Мощность горелки</span>
          </div>
          <div class="col-6">
            <h4>
              <? echo get_field('tehnicheskie_harakteristiki')['sistema_podachi_inertnogo_materiala']['vid_topliva']; ?>
            </h4><span>Вид топлива</span>
          </div>

          <div class="col-6">
            <h4>
              <? echo get_field('tehnicheskie_harakteristiki')['sistema_podachi_inertnogo_materiala']['kolichestvo_bunkerov']; ?>
            </h4><span>Количество бункеров</span>
          </div>
          <div class="col-6">
            <h4>
              <? echo get_field('tehnicheskie_harakteristiki')['sistema_podachi_inertnogo_materiala']['obem_bunkera']; ?>
            </h4><span>Бункер горячих минералов</span>
          </div>


          <div class="col-6">
            <h4>
              <? echo get_field('tehnicheskie_harakteristiki')['sushilnyj_baraban']['dlina_sushilnogo_barabana']; ?>
            </h4><span>Площадь фильтрующей поверхности</span>
          </div>






          <div class="col-6">
            <h4>
              <? echo get_field('tehnicheskie_harakteristiki')['sushilnyj_baraban']['diametr_sushilnogo_barabana']; ?>
            </h4><span>Срок шеф - монтажа и пусконаладочных работ</span>
          </div>





        </div>






      </div>

    </div>
  </div>
</div>
<div class="main-full">
  <div class="product-description">
    <div class="product-description-container">
      <? the_content(); ?>
    </div>

  </div>
</div>

<div class="main-full">
  <h3>
    Ключевые узлы
  </h3>
  <p>
    Асфальтосмесительные установки являются сложными технологическими комплексами, требующими идеальной согласованной
    работы отдельных узлов и агрегатов. «Мерко Руссланд» уделяет особое внимание таким ключевым компонентам установок,
    как барабаны, горелки, фильтры, грохоты, смесители и автоматизированная система управления.
  </p>
</div>

<?
  $items = new WP_Query(array(
    'posts_per_page'  =>  -1, // вывести все
    'post_type' =>  'nodes',
    'order' =>  'DESK', // порядок сортировки    
  ));

  ?>
<div class="main-grid">
  <?
    while($items->have_posts()){
      $items->the_post();
      
      ?>
  <div class="col-3 col-sm-6 col-xs-12">
    <div class="product-item order-item-js">
      <span class="more-btn--white product-btn-hover"><i></i></span>
      <a href="/key-nodes#<? echo get_post_field('post_name', get_the_ID()); ?>" class="product-item-img">
        <h3 class="get-title-order">
          <?
            the_title();
          ?>
        </h3>
        <?
            $img = carbon_get_post_meta( get_the_ID(), 'nodes_img' );
          ?>


        <div class="product-item-cover img-cover">
          <img src="<? echo $img; ?>" alt="">
        </div>
        <span class="more-btn--white product-btn-bottom"><i></i></span>
      </a>
    </div>
  </div>
  <?};
    	wp_reset_postdata();
    ?>
</div>

<? get_template_part('template-parts/home/products',null, array(
    'term' =>  'asfaltobetonnye-zavody'
  )); ?>


<? get_template_part('template-parts/home/feedback'); ?>



<div class="stub-footer"></div>
<? get_footer(); ?>