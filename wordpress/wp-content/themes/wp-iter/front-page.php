<?php /* Template Name: Home Page */ get_header(); ?>

        <!-- Owl Carousel -->
        <div id="owl-demo" class="owl-carousel owl-theme">
            <?php if( have_rows('header_slider', 270) ): while ( have_rows('header_slider', 270) ) : the_row();
              // vars
            $image = get_sub_field('slider_image'); ?>
          <div class="item"><img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt'] ?>" /></div>
          <?php endwhile; ?>
          <?php endif; ?>
        </div>
            <!-- End Of Owl Carousel -->

        <div id="content-padding-off">
            <div class="content-container">

              <!-- Projects posts -->
                <section id="folio" class="section padding-top-off page">
                    <section class="padding-bottom-off">
                        <section id="portfolio-items" class="portfolio-items col-5 back-black">
                        <?php query_posts(array( 'post_type' => 'projects','showposts' => 15, 'order' => 'ASC') ); ?>
                        <?php while (have_posts()) : the_post(); ?>
                            <article class="architecture mix mix_all">
                                <div class="work-item-move slideUp3xRun">
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
                  <?php $terms = get_field('taxonomy_list', 270); if( $terms ): ?>
                    <?php foreach( $terms as $term_id ): ?>
                      <?php $term = get_term( $term_id ); ?>
                        <div class="col-lg-4 col-sm-4">
                          <a href="<?php echo get_term_link( $term ); ?>" class="main_block">
                            <span><?php echo $term->name; ?></span>
                            <?php $image = get_field('taxonomy_image', $term); if( !empty($image) ): ?>
                              <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                            <?php endif; ?>
                          </a>
                        </div>
                      <?php endforeach; ?>
                    <?php endif; ?>
                  </div>
                </section><!-- section -->

                <div class="entry-footer parallax parallax-bg-28">
                    <div class="full-bg-image" style="background-position: center 224px;"></div>
                    <div class="overlay-paralax"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="offers">
                                    <h1 class="shadow">
                                      Точное планирование проекта<br>современный дизайн<br>потрясающий результат
                                    </h1>
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
                            <h1>ITER-Design
                              <div class="slinks">
                                <?php $zibrov = get_term(32); ?>
                                <a href="<?php echo get_term_link( $zibrov ); ?>"><?php echo $zibrov->name; ?></a> |
                                <?php $zibrov = get_term(31); ?>
                                <a href="<?php echo get_term_link( $zibrov ); ?>"><?php echo $zibrov->name; ?></a> |
                                <?php $zibrov = get_term(33); ?>
                                <a href="<?php echo get_term_link( $zibrov ); ?>"><?php echo $zibrov->name; ?></a> |
                                <?php $zibrov = get_term(34); ?>
                                <a href="<?php echo get_term_link( $zibrov ); ?>"><?php echo $zibrov->name; ?></a>
                              </div>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php get_footer(); ?>
