<?php get_header(); ?>

        <div id="content-padding-off">
            <div class="hero hero-design form-page-design-alert">
                <img src="<?php echo get_template_directory_uri(); ?>/img/hero.jpg" alt="Дизайн интерьера загородных домов и больших квартир">
                <div class="vertical-center text-center">
                    <div class="hero-block text-left">
                        <h1 class="hero-title"><?php the_field('main_slogan'); ?></h1>
                        <div class="hero-sub-title main-color"><?php the_field('underslogan'); ?></div>
                        <div class="hero-form c-form">
                            <div class="hero-form-title visible-md visible-lg"><?php the_field('third_text'); ?></div>
                            <?php echo do_shortcode('[contact-form-7 id="373" title="Форма дизайн"]'); ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="entry"></div>
            <div class="section-sm mb-20">
                <div class="content-container">
                    <div class="container">
                        <div class="row">
                            <div class="section-title type-2 opacityRun mb-20">
                                <h3>Наши дизайн-проекты</h3>
                            </div>
                        </div>
                    </div>
                    <section id="folio" class="padding-top-off page">
                        <section class="padding-bottom-off">
                            <section id="portfolio-items" class="portfolio-items">
                                <ul class="nav nav-tabs" role="tablist">
                                    <li role="presentation" class="active button default transparent"><a href="http://iter-design.com/interior_design/#object" aria-controls="object" role="tab" data-toggle="tab">По объектам</a></li>
                                    <li role="presentation" class="button default transparent"><a href="http://iter-design.com/interior_design/#type-rooms" aria-controls="type-rooms" role="tab" data-toggle="tab">По типам помещения</a></li>
                                </ul>
                                <div class="tab-content">
                                    <div role="tabpanel" class="tab-pane active" id="object">
                                        <div class="row">
                                        <?php query_posts(array( 'post_type' => 'projects','showposts' => 15, 'order' => 'ASC' ) ); ?>
                                        <?php while (have_posts()) : the_post(); ?>
                                            <article class="architecture mix mix_all col-xs-6 col-md-2" style="display: inline-block;  opacity: 1;">
                                                <div class="work-item-move slideUp3xRun" style="height: 286.029px;">
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
                                        </div>
                                        <div class="button-all mt-25 text-center"><a href="http://iter-design.com/portfolio/apartments/" class="button default large">Смотреть все проекты</a></div>
                                    </div>
                                    <div role="tabpanel" class="tab-pane" id="type-rooms">
                                        <div class="type-rooms">
                                            <div class="row">
                                            <?php query_posts(array( 'post_type' => 'projects','showposts' => 7, 'order' => 'ASC', 'cat=37') ); ?>
                                            <?php while (have_posts()) : the_post(); ?>
                                                <div class="col-xs-12 col-md-3">
                                                    <div class="work-item">
                                                        <a href="<?php the_permalink() ?>">
                                                            <div class="work-item-image">
                                                              <?php the_post_thumbnail('medium'); ?>
                                                            </div>
                                                            <div class="work-item-title"><?php the_title(); ?> </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <?php endwhile;?>
                                            </div><!-- row -->
                                        </div>
                                    </div><!-- tab-pane -->
                                </div>
                            </section>
                        </section>
                    </section>
                </div>
            </div>
        </div>
        <div class="section-no section-main-service-form form-page-design">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-9 col-md-offset-1">
                        <div class="main-service-form cooperation-form c-form" id="design-form">
                            <h2 class="text-center main-color">ПОНРАВИЛИСЬ ПРОЕКТЫ?</h2>
                            <div class="form-sub-title white-color text-center">
                                Оставьте заявку, чтобы назначить встречу у нас в офисе с ведущим дизайнером, главным архитектором, инженером и техническим директором. На встрече вы получите развернутые ответы на все вопросы по дизайну интерьера и будущей реализации проекта, а также узнаете сроки и стоимость вашего проекта. </div>
                            <?php echo do_shortcode('[contact-form-7 id="389" title="Договорится о встрече"]'); ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section-sm section-work">
            <div class="section-title type-2">
                <h3>Как создается идеальный дизайн-проект?</h3>
            </div>
            <div class="container">
                <div class="row row-1">
                  <?php if( have_rows('repeater_project', 270) ): while ( have_rows('repeater_project', 270) ) : the_row(); ?>
                    <div class="col-xs-12 col-md-3">
                        <div class="work-item">
                            <div class="work-item-title">
                                <div class="work-item-number"><?php the_sub_field('number'); ?></div><?php the_sub_field('title-1'); ?></div>
                            <div class="work-item-desc"><?php the_sub_field('text-1'); ?></div>
                            <div class="work-item-readmore">
                              <a class="button default popup-with-form" href="http://iter-design.com/interior_design/#order-project">Оставить заявку
                                <i class="row-circle-icon2 icon-pencil-1 black"></i>
                              </a>
                            </div>
                        </div>
                    </div>
                    <?php endwhile; ?>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <div class="entry-footer parallax parallax-bg-79" id="qd_title2">
            <div class="full-bg-image" style="background-position: center 1098px;"></div>
            <div class="overlay-paralax"></div>
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-offset-3 col-md-6">
                        <div class="offers">
                            <div class="ml-subscribe-form">
                                <div class="ml-vertical-align-center c-form">
                                    <?php echo do_shortcode('[contact-form-7 id="398" title="order-form"]'); ?>
                                    <div class="order-form-result"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="entry"></div>
        <div class="container">
            <div class="row">
                <section id="main" class="col-md-12">
                    <article class="entry">
                        <h2 class="side-gallery-title">Часто задаваемые вопросы (FAQ)</h2>
                        <div class="acc-box opacity">
                        <?php if( have_rows('repeater_faq', 270) ): while ( have_rows('repeater_faq', 270) ) : the_row(); ?>
                        <span class="acc-trigger">
                          <a href="#"><?php the_sub_field('faq_title'); ?></a>
                        </span>
                            <div class="acc-container">
                                <p><?php the_sub_field('answer'); ?></p>
                            </div>
                            <?php endwhile; ?>
                            <?php endif; ?>
                            <div class="entry"></div>
                        </div>
                    </article>
                </section>
            </div>
        </div>

<?php get_footer(); ?>
