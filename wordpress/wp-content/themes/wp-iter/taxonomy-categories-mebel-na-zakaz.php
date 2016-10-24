<?php get_header(); ?>
       <?php get_header(); ?>
        <div id="main" class="site-main">
            <div id="pageServices" class="content-full content-shadow page-content">
                <div class="container padding-block">
                    <div id="primary" class="site-content">
                        <div id="content" role="main">
                            <div class="row">
                                <div class="col-xs-8 col-xs-offset-4">
                                   <?php easy_breadcrumbs(); ?>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-4">
                                    <div class="page-thumbnail"><img width="88" height="100" src="<?php echo get_template_directory_uri(); ?>/img/dizain-proekt-interiera.png" class="attachment-post-thumbnail wp-post-image" alt="дизайн-проект интерьера"></div>
                                    <?php $term = get_term_by( 'slug', get_query_var( 'term' ), get_query_var( 'taxonomy' ) ); ?>
                                    <h1 class="page-title"><?php echo $term->name; ?></h1>
                                    <nav class="nav-services">
                                    </nav>
                                </div>
                                <div class="col-xs-8">
                                    <div class="entry-content ml5">
                                        <p><?php the_field('top_text', 454); ?></p>
                                        <div class="horizontal-line mt-3 mb-3"></div>
                                        <h2 class="content-title"><?php the_field('title', 454); ?></h2>
                                        <p>
                                        <?php $image = get_field('top_img', 454); if( !empty($image) ): ?>
                                          <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                                        <?php endif; ?>
                                        </p>
                                        <div class="horizontal-line mt-3 mb-3"></div>
                                        <h2 class="content-title"><?php the_field('title_2', 454); ?></h2>
                                        <ul class="list-check">
                                        <?php if( have_rows('design_project', 454) ): while ( have_rows('design_project', 454) ) : the_row(); ?>
                                            <li class="list-check__item">
                                              <span ><?php the_sub_field('project_part', 454); ?></span>
                                            </li>
                                            <?php endwhile; ?>
                                            <?php endif; ?>
                                        </ul>
                                        <div class="horizontal-line mt-3 mb-3"></div>
                                        <h2 class="content-title">Рассчитать стоимость дизайн проекта можно <a class="str" href="#">здесь</a></h2>
                                        <div class="mb-4 buttons-block">
                                            <a href="#" class="hover-button" alt="Смотреть пример готового дизайн-проекта интерьера квартиры">
                                              <img src="<?php echo get_template_directory_uri(); ?>/img/primer_proekta.png">
                                            </a>
                                            <a href="#" class="hover-button" alt="перейти на страницу портфолио">
                                              <img src="<?php echo get_template_directory_uri(); ?>/img/portfolio.png">
                                            </a>
                                        </div>
                                        <div class="horizontal-line mt-3 mb-3"></div>
                                        <h2 class="content-title"><?php the_field('example', 454); ?></h2>
                                        <div id="bwg_container1_0">
                                            <div id="bwg_container2_0">
                                                <form id="gal_front_form_0" method="post" action="http://rw-design.ru/services/dizajjn-proekt-interera/#">
                                                    <div style="background-color:rgba(0, 0, 0, 0); text-align:center; width:100%;">
                                                        <div id="bwg_standart_thumbnails_0" class="bwg_standart_thumbnails_0">
                                                            <div id="ajax_loading_0" style="position:absolute;">
                                                                <div id="opacity_div_0" style="display:none; background-color:#FFFFFF; opacity:0.7; filter:Alpha(opacity=70); position:absolute; z-index:105;"></div>
                                                                <span id="loading_div_0" style="display:none; text-align:center; position:relative; vertical-align:middle; z-index:107">
                                                                  <img src="<?php echo get_template_directory_uri(); ?>/img/ajax_loader.png" class="spider_ajax_loading" style="float: none; width:50px;">
                                                                </span>
                                                            </div>
                                                            <?php $images = get_field('gallery', 454); if( $images ): ?>
                                                            <?php foreach( $images as $image ): ?>
                                                            <a href="<?php echo $image['url']; ?>">
                                                              <img src="<?php echo $image['sizes']['thumbnail']; ?>" alt="<?php echo $image['alt']; ?>" />
                                                            </a>
                                                            <?php endforeach; ?>
                                                          <?php endif; ?>
                                                        </div>
                                                        <script type="text/javascript">
                                                        function spider_page_0(cur, x, y) {
                                                            if (jQuery(cur).hasClass('disabled')) {
                                                                return false;
                                                            }
                                                            var items_county_0 = 1;
                                                            switch (y) {
                                                                case 1:
                                                                    if (x >= items_county_0) {
                                                                        document.getElementById('page_number_0').value = items_county_0;
                                                                    } else {
                                                                        document.getElementById('page_number_0').value = x + 1;
                                                                    }
                                                                    break;
                                                                case 2:
                                                                    document.getElementById('page_number_0').value = items_county_0;
                                                                    break;
                                                                case -1:
                                                                    if (x == 1) {
                                                                        document.getElementById('page_number_0').value = 1;
                                                                    } else {
                                                                        document.getElementById('page_number_0').value = x - 1;
                                                                    }
                                                                    break;
                                                                case -2:
                                                                    document.getElementById('page_number_0').value = 1;
                                                                    break;
                                                                default:
                                                                    document.getElementById('page_number_0').value = 1;
                                                            }
                                                            spider_frontend_ajax('gal_front_form_0', '0', 'bwg_standart_thumbnails_0', '0', '', 'album');
                                                        }
                                                        </script>
                                                        <div class="tablenav-pages_0"> <span class="displaying-num_0">4элемент(ы)</span>
                                                            <input type="hidden" id="page_number_0" name="page_number_0" value="1"> </div>
                                                    </div>
                                                </form>
                                                <div id="spider_popup_loading_0" class="spider_popup_loading"></div>
                                                <div id="spider_popup_overlay_0" class="spider_popup_overlay" onclick="spider_destroypopup(1000)"></div>
                                            </div>
                                        </div>
                                        <div class="horizontal-line mt-3 mb-3"></div>
                                        <h2 class="content-title"><?php the_field('third_title', 454); ?></h2>
                                        <ul class="list-check">
                                        <?php if( have_rows('causes', 454) ): while ( have_rows('causes', 454) ) : the_row(); ?>
                                            <li><?php the_sub_field('causes_text', 454); ?></li>
                                            <?php endwhile; ?>
                                            <?php endif; ?>
                                        </ul>
                                        <div class="mb-2 buttons-block">
                                            <a href="#">
                                              <img title="Перейти на страницу с описанием услуги ремонтно-отделочные работы" src="<?php echo get_template_directory_uri(); ?>/img/remontno-otdelochnie.png">
                                            </a>
                                            <a href="#">
                                            <img title="Заказать дизайн интерьера" alt="Заказать дизайн" src="<?php echo get_template_directory_uri(); ?>/img/zakazat-dizain.png"></a>
                                        </div>
                                        <div class="horizontal-line mt-4 mb-4"></div>
                                        <div class="design-project-content">
                                            <p><?php echo get_post_field('post_content', 454); ?></p>
                                        </div>
                                        <div class="horizontal-line mt-4 mb-4"></div>
                                        <p>&nbsp;</p>
                                        <div class="leave-request__content" id="js-leave-application2">
                                            <h3 class="template-title template-title_mb template-advantages__title">Оставьте вашу заявку</h3>
                                            <div class="wpcf7" id="wpcf7-f1928-p5101-o1">
                                                <div class="screen-reader-response"></div>
                                                <?php echo do_shortcode('[contact-form-7 id="478" title="Связь с менеджером"]'); ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- #content -->
                    </div>
                    <!-- #primary -->
                </div>
            </div>
            <div class="push"></div>
        </div>
        <!-- #main -->
    </div>
    <!-- wrapper -->


<?php get_footer(); ?>

