<?php get_header(); ?>

        <div id="content-padding-off">
            <div class="hero">
                <div class="vertical-center text-center">
                <?php $term = get_term_by( 'slug', get_query_var( 'term' ), get_query_var( 'taxonomy' ) ); ?>
                    <h1 class="hero-title"><?php echo $term->name; ?></h1>
                </div>
                <img src="<?php echo get_template_directory_uri(); ?>/img/hero1.jpg" alt="Строительство домов уровня люкс Luxury Construction">
            </div>
            <div class="section-sm mb-0">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <p><?php the_field('big_text', 420); ?></p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="content-bottom-off">
                <section id="folio" class="page">
                    <section class="section padding-off">
                        <div class="section-title type-2">
                            <h2>Наши проекты</h2>
                        </div>
                        <div class="row">
                            <section id="portfolio-items" class="portfolio-items col-4">
                            <?php query_posts(array( 'post_type' => 'projects','showposts' => 8, 'order' => 'ASC' ) ); ?>
                                        <?php while (have_posts()) : the_post(); ?>
                                <article class="buildings mix mix_all" style="display: inline-block;  opacity: 1;">
                                    <div class="work-item lazy-image">
                                        <div class="lazy"></div>
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
                                <?php wp_reset_query(); ?>
                            </section>
                        </div>
                    </section>
                </section><!-- folio -->
            </div><!-- content-bottom-off -->
        </div>
        <div class="entry"></div>
        <div class="section-md text-center">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-lg-offset-2">
                        <div class="triple-border padding-40">
                            <h2 class="section-title">Преимущества</h2>
                            <ol class="list list-inline">
                            <?php if( have_rows('advatages_house', 420) ): while ( have_rows('advatages_house', 420) ) : the_row(); ?>
                                <li><?php the_sub_field('advantages'); ?></li>
                                    <?php endwhile; ?>
                                <?php endif; ?>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-xs">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-6">
                        <h2><?php the_field('house_design', 420); ?></h2>
                        <p><?php the_field('house_text', 420); ?></p>
                    </div>
                    <div class="col-md-6 visible-md visible-lg">
                        <?php $image = get_field('house_img', 420); if( !empty($image) ): ?>
                          <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="separator"></div>
        <div class="section-sm">
            <div class="container">
                <div class="row opacityRun">
                    <div class="col-xs-12 col-sm-6">
                        <div class="triple-border padding-30" style="height:649px;">
                            <h2><?php the_field('arch_title', 420); ?></h2>
                            <ol class="list list-square">
                            <?php if( have_rows('architecture_work', 420) ): while ( have_rows('architecture_work', 420) ) : the_row(); ?>
                                <li><?php the_sub_field('arch_text'); ?></li>
                                <?php endwhile; ?>
                                <?php endif; ?>
                            </ol>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <div class="triple-border padding-30" style="height:649px;">
                            <h2><?php the_field('design_title', 420); ?></h2>
                            <ol class="list list-square">
                            <?php if( have_rows('design_work', 420) ): while ( have_rows('design_work', 420) ) : the_row(); ?>
                                <li><?php the_sub_field('design_text'); ?></li>
                                <?php endwhile; ?>
                                <?php endif; ?>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-no">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-8 col-md-offset-2">
                        <div class="cooperation-form c-form" id="cooperation-form">
                            <p class="text-center form-title"><span>Заполните форму</span> и наш специалист подробно
                                <br> расскажет вам об условиях сотрудничества</p>
                            <?php echo do_shortcode('[contact-form-7 id="427" title="Условия сотрудничества"]'); ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="entry-footer parallax bg-grey parallax-bg-2">
            <div class="full-bg-image" style="background-position: center 1401px;"></div>
            <div class="overlay-paralax"></div>
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="section-title type-3">
                            <h3>Только факты</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <div class="counter-box">
                            <div data-from="0" data-to="18" data-speed="1000" class="counter">
                                <span class="count">18</span>
                                <h4 class="details">высококлассных строительных бригад</h4>
                            </div>
                            <div data-from="0" data-to="236" data-speed="2500" class="counter">
                                <span class="count">236</span>
                                <h4 class="details">Построенных проектов</h4>
                            </div>
                            <div data-from="0" data-to="35481" data-speed="4000" class="counter">
                                <span class="count">35481</span>
                                <h4 class="details">метров построено</h4>
                            </div>
                            <div data-from="0" data-to="450" data-speed="8500" class="counter">
                                <span class="count">450</span>
                                <h4 class="details">млн. руб. сэкономлено<br>нашим клиентам</h4>
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
