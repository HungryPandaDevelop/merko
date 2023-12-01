<?
$items = new WP_Query(array(
	'posts_per_page'  =>  -1, // вывести все
	'post_type' =>  'production ',
	'order' =>  'ASC', // порядок сортировки
	'tax_query' => array(
		array(
			'taxonomy' => 'production_category', // замените на реальное название вашей таксономии
			'field' => 'slug',
			'terms' => 'asfaltobetonnye-zavody',
		),
	),
  ));

?>

<section>
  <div class="main-full head-section">
    <h2>Строительство<br>асфальтобетонных заводов</h2>
    <p>
      Компания Мерко Руссланд специализируется на строительстве асфальтобетонных заводов и поставке
      высокотехнологического оборудования и транспорта по обеспечению бесперебойного производства асфальта.</p>
    <p>Мы занимаемся поставкой оборудования для производства бетона, растворобетонных и асфальтобетонных смесей,
      осуществляя профессиональную поддержку по производству продукции высокого качества и обеспечению бесперебойной
      работы оборудования, используемого в производственном процессе.</p>
  </div>
  <div class="about-slider-container slider-container">
    <div class="main-full">
      <div class="num-slider">
        <div class="current">
          <ul class="ln num-box"> </ul>
        </div><span>/</span>
        <div class="total">1</div>
      </div>
    </div>
    <div class="about-slider">
      <?
    while($items->have_posts()){
      $items->the_post();?>
      <? 
      // Получаем текущий ID
      $current_id = get_the_ID();
      
      // Получаем следующий ID
      $next_post = get_next_post();
      $next_id = $next_post ? $next_post->ID : null;

        get_template_part('template-parts/module/items/home-about-item',null, array(
          'id' =>  $current_id,
          'next_id' =>  $next_id,

        )); 
      ?>
      <?}?>
    </div>
  </div>
</section>