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
                        <section id="portfolio-items" class="portfolio-items col-5 small-font">
                          <?php $terms = get_field('taxonomy_list', 270); if( $terms ): ?>
                         <?php foreach( $terms as $term_id ): ?>
                         <?php $term = get_term( $term_id );?>
                            <article class="buildings port-img mix mix_all" style="display: inline-block;  opacity: 1;">
                                <div class="work-item port-imagesize lazy-image">
                                    <div class="lazy"></div>
                                    <?php $image = get_field('taxonomy_image', $term); if( !empty($image) ): ?>
                                      <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                                    <?php endif; ?>
                                    <a href="<?php echo get_term_link( $term ); ?>" class="main_block">
                                        <div class="image-extra">
                                            <div class="extra-content">
                                                <h2 class="extra-title"><?php echo $term->name; ?></h2>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </article>
                        <?php endforeach; ?>
                        <?php endif; ?>
                        </section>
                    </div>
                </section>
            </section>
        </div>
    </div>
    <div class="entry"></div>


<?php get_footer(); ?>
