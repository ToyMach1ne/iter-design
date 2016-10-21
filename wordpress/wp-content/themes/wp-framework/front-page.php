<?php /* Template Name: Home Page */ get_header(); ?>
        <!-- Owl Carousel -->
        <div id="owl-demo" class="owl-carousel owl-theme">
          <div class="item"><img src="<?php echo get_template_directory_uri(); ?>/img/fullimage1.jpg" alt="The Last of us"></div>
          <div class="item"><img src="<?php echo get_template_directory_uri(); ?>/img/fullimage2.jpg" alt="GTA V"></div>
          <div class="item"><img src="<?php echo get_template_directory_uri(); ?>/img/fullimage3.jpg" alt="Mirror Edge"></div>
        </div>
            <!-- End Of Owl Carousel -->

        <div id="content-padding-off">
            <div class="content-container">

              <!-- Projects posts -->
                <section id="folio" class="section padding-top-off page">
                    <section class="padding-bottom-off">
                        <section id="portfolio-items" class="portfolio-items col-5 back-black">
                        <?php query_posts(array( 'post_type' => 'projects','showposts' => 15, 'order' => 'ASC' ) ); ?>
                        <?php while (have_posts()) : the_post(); ?>
                            <article class="architecture mix mix_all" style="display: inline-block;  opacity: 1;">
                                <div class="work-item-move slideUp3xRun" style="height: 198.529px;">

                                      <?php the_post_thumbnail('normal'); ?>
                                      <a href="<?php the_permalink() ?>">
                                        <div class="image-extra">
                                            <div class="extra-content">
                                                <h2 class="extra-title"><?php the_title(); ?></h2>
                                                <h6 class="extra-descript"><?php echo get_the_excerpt(); ?></h6>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </article>
                            <?php endwhile;?>
                        </section><!-- portfolio-items -->
                    </section>
                </section><!-- folio -->
                <!-- End Of Projects posts -->

                <div class="row">
                    <div class="col-xs-12">
                        <div class="section-title opacityRun">
                            <h3>Услуги</h3>
                        </div>
                    </div>
                </div>

                <section class="section" style="padding-top: 12px;">
                    <div class="row padding-lr">

                        <div class="col-lg-4 col-sm-4">
                            <a href="http://iter-design.com/architecture/" class="main_block">
                                <span>архитектурные проекты</span>
                                <img src="<?php echo get_template_directory_uri(); ?>/img/1.jpg" alt="Архитектурные проекты"> </a>
                        </div>

                    </div>
                    <div class="row padding-lr">
                        <div class="col-lg-4 col-sm-4">
                            <a class="main_block">
                                <span>ландшафтные проекты</span>
                                <img src="<?php echo get_template_directory_uri(); ?>/img/4.jpg" alt="Ландшафтные проекты">
                            </a>
                        </div>
                        <div class="col-lg-4 col-sm-4">
                            <a class="main_block">
                                <span>авторский надзор</span>
                                <img src="<?php echo get_template_directory_uri(); ?>/img/5.jpg" alt="Авторский надзор"> </a>
                        </div>
                        <div class="col-lg-4 col-sm-4">
                            <a class="main_block">
                                <span>технический надзор</span>
                                <img src="<?php echo get_template_directory_uri(); ?>/img/6.jpg" alt="Технический надзор"> </a>
                        </div>
                    </div>
                    <div class="row padding-lr">
                        <div class="col-lg-4 col-sm-4">
                            <a href="http://iter-design.com/decor/" class="main_block">
                                <span>поставка  мебели и декора</span>
                                <img src="<?php echo get_template_directory_uri(); ?>/img/7.jpg" alt="Поставка мебели и декора">
                            </a>
                        </div>
                        <div class="col-lg-4 col-sm-4">
                            <a href="http://iter-design.com/engineering/" class="main_block">
                                <span>инженерное  оборудование</span>
                                <img src="<?php echo get_template_directory_uri(); ?>/img/8.jpg" alt="Инженерное оборудование">
                            </a>
                        </div>
                        <div class="col-lg-4 col-sm-4">
                            <a href="http://iter-design.com/decor/" class="main_block">
                                <span>отделочные материалы</span>
                                <img src="<?php echo get_template_directory_uri(); ?>/img/9.jpg" alt="Отделочные материалы"> </a>
                        </div>
                        <div class="col-lg-4 col-sm-4">
                            <a href="http://iter-design.com/complete_pm/" class="main_block">
                                <span>управление проектами</span>
                                <img src="<?php echo get_template_directory_uri(); ?>/img/12.jpg" alt="Управление проектами">
                            </a>
                        </div>
                        <div class="col-lg-4 col-sm-4">
                            <a href="http://iter-design.com/design-repair/" class="main_block">
                                <span>ремонт квартир</span>
                                <img src="<?php echo get_template_directory_uri(); ?>/img/10.jpg" alt="Ремонт квартир"> </a>
                        </div>
                        <div class="col-lg-4 col-sm-4">
                            <a href="http://iter-design.com/construction/" class="main_block">
                                <span>строительство домов</span>
                                <img src="<?php echo get_template_directory_uri(); ?>/img/11.jpg" alt="Строительство домов">
                            </a>
                        </div>
                    </div>
                </section><!-- section -->

                <div class="entry-footer parallax parallax-bg-28">
                    <div class="full-bg-image" style="background-position: center 224px;"></div>
                    <div class="overlay-paralax"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="offers">
                                    <h1 class="shadow">Точное планирование проекта<br>
 современный дизайн<br>
 потрясающий результат</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="entry">&nbsp;</div>
            <div class="container">
                <div class="row opacity">
                    <div class="col-xs-12">
                        <div class="section-title type-3">
                            <h3>Свежее видео</h3>
                        </div>
                        <div class="col-xs-12 col-md-6">
                            <div class="fluid-width-video-wrapper" style="padding-top: 56.25%;">
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-6">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="entry">&nbsp;</div>
        <div class="entry-footer parallax parallax-bg-15">
            <div class="full-bg-image" style="background-position: center 525px;"></div>
            <div class="overlay-paralax"></div>
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="offers">
                            <h1>ITER-Design <div class="slinks"><a href="http://iter-design.com/architecture/">Architecture</a> | <a href="http://iter-design.com/interior_design/">Interior</a> | <a href="http://iter-design.com/construction/">Construction</a> | <a href="http://iter-design.com/decor/">Decor</a></div></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php get_footer(); ?>
