<?php /* Template Name: Page Services */ get_header(); ?>

        <div id="content-padding-off" class="portfolio-top">
            <div class="entry-footer parallax parallax-bg-24">
                <div class="full-bg-image" style="background-position: center 56px;"></div>
                <div class="overlay-paralax"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="offers">
                                <h1><?php the_title(); ?></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="content-bottom-off">
            <section id="folio" class="page">
                <section class="section padding-off">
                    <div class="row">

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

                    </div>
                </section>
            </section>
        </div>
    </div>
    <div class="entry"></div>


<?php get_footer(); ?>
