<!-- footer start -->
<?
$terms = get_terms(array(
  'taxonomy' => 'production_category',
  'hide_empty' => false, // Показываем даже пустые термины
  'parent' => 0,
));
?>

<footer class="footer-desktop">
  <div class="main-grid">
    <div class="col-3 col-sm-6">
      <div class="nav nav-second">
        <? footer_menu(); ?>
      </div>
    </div>
    <div class="col-3 col-sm-6">
      <div class="nav">
        <h3> <a href="#"> Продукция</a></h3>
        <ul class="ln">
          <?
    foreach ($terms as $term) {
      // Получаем ссылку на термин
      $term_link = get_term_link($term);
      // Определяем, является ли текущий термин активным
      // $is_active = ($term->term_id === $current_term_id);
    ?>

          <li><a href="<? echo $term_link; ?>">
              <? echo $term->name; ?>
            </a></li>

          <?}?>
        </ul>
      </div>
    </div>
    <div class="col-3 col-sm-6">
      <!-- <div class="feedback-footer-item"> <span>Официальный представитель Производственная компания "Дорожные технологии"
        </span><b>B 192148, г. Санкт-Петербург, ул. Седова, д. 13</b></div>
      <div class="feedback-footer-item"><span>Телефон:</span><a href="#">+7 (812) 900 61 90</a></div>
      <div class="feedback-footer-item"><span>Почта:</span><a href="#">info@pk-dorteh.ru</a></div> -->
    </div>
    <div class="col-3 col-sm-6 feedback"><a class="logo" href="./index.html"><img
          src="<?php echo get_bloginfo('template_url');?>/images/logo-black.svg" alt=""></a>
      <div class="feedback-footer-item"><a href="#"> 8 800 222 79 36</a></div>
      <div class="feedback-footer-item"><a href="#">dds@merko-russland.com</a></div>
      <div class="feedback-footer-item">Адрес: 249054, Калужская область, Малоярославецкий р-н, д. Малое Ноздрино, ул.
        Промышленная 1</div>
      <div class="social"><a href="#"><img src="<?php echo get_bloginfo('template_url');?>/images/social/vk-white.svg"
            alt=""><img class="ico-hover" src="<?php echo get_bloginfo('template_url');?>/images/social/vk-black.svg"
            alt=""></a>
      </div>
      <div class="feedback-footer-item"><span>Режим работы:</span><b>пн-пт с 9:00 до 19:00</b></div>
    </div>
    <div class="col-12">
      <ul class="footer-links">
        <li>©2023г. ООО "Мерко Руссланд". Все права защищены</li>
        <li><a href="/politika-konfidencial-nosti">Политика конфиденциальности</a></li>
        <li><a href="#">Разработка сайта Style You</a></li>
      </ul>
    </div>
  </div>
</footer>
<footer class="footer-mobile">
  <div class="main-grid">
    <div class="col-12"><a class="logo" href="/"><img
          src="<?php echo get_bloginfo('template_url');?>/images/logo-black.svg" alt=""></a></div>
    <div class="col-6">
      <div class="nav nav-second">
        <? footer_menu(); ?>
      </div>
    </div>
    <div class="col-6 feedback">
      <div class="feedback-footer-item"><a href="#"> 8 800 222 79 36</a></div>
      <div class="feedback-footer-item"><a href="#">dds@merko-russland.com</a></div>
      <div class="feedback-footer-item">Адрес: <b>249054, Калужская область, Малоярославецкий р-н, д. Малое Ноздрино,
          ул. Промышленная 1</b></div>
      <div class="social"><a href="#"><img src="<?php echo get_bloginfo('template_url');?>/images/social/vk-white.svg"
            alt=""><img class="ico-hover" src="<?php echo get_bloginfo('template_url');?>/images/social/vk-black.svg"
            alt=""></a>
      </div>
    </div>
    <div class="col-12">
      <div class="footer-delimetr"></div>
      <div class="nav">
        <h3> <a href="#"> Продукция</a></h3>
        <ul class="ln">
          <?
    foreach ($terms as $term) {
      // Получаем ссылку на термин
      $term_link = get_term_link($term);
      // Определяем, является ли текущий термин активным
      // $is_active = ($term->term_id === $current_term_id);
    ?>

          <li><a href="<? echo $term_link; ?>">
              <? echo $term->name; ?>
            </a></li>

          <?}?>
        </ul>
      </div>
    </div>
    <div class="col-12">
      <div class="footer-delimetr"></div>
    </div>
    <div class="col-6">
      <!-- <div class="feedback-footer-item"> <span>Официальный представитель Производственная компания "Дорожные технологии"
        </span><b>B 192148, г. Санкт-Петербург, ул. Седова, д. 13</b></div>
      <div class="feedback-footer-item"><span>Телефон:</span><a href="#">+7 (812) 900 61 90</a></div>
      <div class="feedback-footer-item"><span>Почта:</span><a href="#">info@pk-dorteh.ru</a></div> -->
    </div>
    <div class="col-6">
      <div class="feedback-footer-item"><span>Режим работы:</span><b>пн-пт с 9:00 до 19:00</b></div>
    </div>
    <div class="col-6 footer-links"> <a href="/politika-konfidencial-nosti">Политика конфиденциальности</a></div>
    <div class="col-6 footer-links footer-links-center"><a href="#">Разработка сайта Style You</a></div>
    <div class="col-12 footer-links">| ©2023г. ООО "Мерко Руссланд". Все права защищены</div>
  </div>
</footer>
<? wp_footer(); ?>

<!-- footer end-->
</body>

</html>