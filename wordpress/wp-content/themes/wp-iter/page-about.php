<?php /* Template Name: Page About */ get_header(); ?>
<div id="main" class="site-main">
    <div class="content-full content-shadow">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div id="primary" class="site-content">
                        <div id="content" role="main">
                            <article id="post-11" class="post-11 page type-page status-publish hentry">
                                <!-- .entry-header -->
                                <div class="entry-content">
                                    <div class="row">
                                        <div class="col-xs-8">
                                            <?php $image = get_field('top_image'); if( !empty($image) ): ?>
                                                <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                                            <?php endif; ?>
                                        </div>
                                        <div class="col-xs-4">
                                            <div class="aside-text mt40"><?php the_field('left_text'); ?></div>
                                        </div>
                                    </div>
                                    <div class="mt90"></div>
                                    <div class="row">
                                        <div class="col-xs-6">
                                            <div class="about-block-text"><?php the_content(); ?><br> &nbsp;
                                                <br> Наши услуги:
                                <?php if( have_rows('our_projects') ): while ( have_rows('our_projects') ) : the_row(); ?>
                                                <ul>
                                                    <li><?php the_sub_field('proj_name'); ?></li>
                                                </ul>
                                                <?php endwhile; ?>
                                                <?php endif; ?>
                                            </div>
                                        </div>
                                        <div class="col-xs-6">
                                            <div class="about-block-text2"><?php the_field('second_title'); ?>
                                                <ul>
                                                    <?php if( have_rows('living') ): while ( have_rows('living') ) : the_row(); ?>
                                                        <li><?php the_sub_field('living_field'); ?></li>
                                                     <?php endwhile; ?>
                                                    <?php endif; ?>
                                                </ul>
                                                <p><?php the_field('third_title'); ?></p>
                                                <ul>
                                                <?php if( have_rows('tc') ): while ( have_rows('tc') ) : the_row(); ?>
                                                    <li><?php the_sub_field('tc_text'); ?></li>
                                                    <?php endwhile; ?>
                                                    <?php endif; ?>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="horizontal-line"></div>
                                    <p>
                                        <a name="aboutUs"></a>
                                    </p>
                                    <div class="staff-block">
                                        <div class="staff-item">
                                            <div class="staff-img">
                                                <a href="http://rw-design.ru/o-nas-pishut/">
                                                    <img class="alignnone size-full wp-image-779" alt="Пресса о студии Romanoff &amp; Wood" src="<?php echo get_template_directory_uri(); ?>/img/pro-nas-pishut.png" width="186" height="214">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="staff-item">
                                            <div class="staff-img">
                                                <a href="http://www.woman.ru/home/Interior/article/139305/" target="_blank" rel="nofollow">
                                                    <img class="alignnone size-full wp-image-779" alt="Статья от студии Romanoff and Wood на портале woman.ru" src="<?php echo get_template_directory_uri(); ?>/img/womanru.png" width="186" height="214">
                                                </a>
                                            </div>
                                            <div class="staff-name">Woman.ru</div>
                                            <div class="staff-post">женский
                                                <br> журнал
                                            </div>
                                            <p>&nbsp;</p>
                                        </div>
                                        <div class="staff-item">
                                            <div class="staff-img">
                                                <a href="http://www.the-village.ru/village/home/design-hack/169201-kak-vybrat-tsvet-interiera" target="_blank" rel="nofollow"><img class="alignnone size-full wp-image-779" alt="Статья от студии Romanoff and Wood на портале the-village" src="<?php echo get_template_directory_uri(); ?>/img/the-village.png" width="186" height="214"></a>
                                            </div>
                                            <div class="staff-name">The Village</div>
                                            <div class="staff-post">новости, люди,
                                                <br> места, события</div>
                                            <p>&nbsp;</p>
                                        </div>
                                        <div class="staff-item">
                                            <div class="staff-img">
                                                <a href="http://www.inmyroom.ru/posts/10624-osveschenie-v-kvartire-5-pravil-o-kotoryh-vy-ne-znali" target="_blank" rel="nofollow"><img class="alignnone size-full wp-image-779" alt="Статья от студии Romanoff and Wood на портале inmyroom" src="<?php echo get_template_directory_uri(); ?>/img/inmyroom.png" width="186" height="214"></a>
                                            </div>
                                            <div class="staff-name">INMYROOM</div>
                                            <div class="staff-post">интерьеры и дизайн,
                                                <br> дома и вещи</div>
                                            <p>&nbsp;</p>
                                        </div>
                                    </div>
                                    <div class="horizontal-line"></div>
                                    <h2 class="entry-title2">Руководство и ключевые специалисты</h2>
                                    <div class="staff-block">
                                        <div class="staff-item">
                                            <div class="staff-img"><img class="alignnone size-full wp-image-779" alt="Александр Перемятов" src="<?php echo get_template_directory_uri(); ?>/img/alexandr-peremyatov.png" width="186" height="214"></div>
                                            <div class="staff-name">Александр
                                                <br> Перемятов
                                            </div>
                                            <div class="staff-post">генеральный партнер</div>
                                        </div>
                                        <div class="staff-item">
                                            <div class="staff-img"><img class="alignnone size-full wp-image-799" alt="egor-bandarenko" src="<?php echo get_template_directory_uri(); ?>/img/egor-bandarenko.png" width="186" height="214"></div>
                                            <div class="staff-name">Егор
                                                <br> Бондаренко
                                            </div>
                                            <div class="staff-post">партнер</div>
                                        </div>
                                        <div class="staff-item">
                                            <div class="staff-img"><img class="alignnone size-full wp-image-874" alt="elena-juchkova" src="<?php echo get_template_directory_uri(); ?>/img/elena-juchkova.png" width="186" height="214"></div>
                                            <div class="staff-name">Елена
                                                <br> Жучкова
                                            </div>
                                            <div class="staff-post">директор студии</div>
                                        </div>
                                        <div class="staff-item">
                                            <div class="staff-img"><img class="alignnone size-full wp-image-877" alt="vitaliy-krylov" src="<?php echo get_template_directory_uri(); ?>/img/sveta.jpg" width="186" height="214"></div>
                                            <div class="staff-name">Светлана
                                                <br> Андронова
                                            </div>
                                            <div class="staff-post">ведущий дизайнер</div>
                                        </div>
                                        <div class="staff-item">
                                            <div class="staff-img"><img class="alignnone size-full wp-image-1535" alt="nina-gleba-dizainer" src="<?php echo get_template_directory_uri(); ?>/img/nina_gleba-2.png" height="214"></div>
                                            <div class="staff-name">Нина
                                                <br> Глеба
                                            </div>
                                            <div class="staff-post">дизайнер</div>
                                        </div>
                                        <div class="staff-item">
                                            <div class="staff-img"><img class="alignnone size-full wp-image-874" alt="dina-vorobeva" src="<?php echo get_template_directory_uri(); ?>/img/dina-vorobeva.png" width="186" height="214"></div>
                                            <div class="staff-name">Дина
                                                <br> Воробьева
                                            </div>
                                            <div class="staff-post">дизайнер</div>
                                        </div>
                                        <div class="staff-item">
                                            <div class="staff-img"><img class="alignnone size-full wp-image-798" alt="anna-aminova" src="<?php echo get_template_directory_uri(); ?>/img/anna-aminova2.png" width="186" height="214"></div>
                                            <div class="staff-name">Анна
                                                <br> Аминова
                                            </div>
                                            <div class="staff-post">дизайнер</div>
                                        </div>
                                        <div class="staff-item">
                                            <div class="staff-img"><img class="alignnone size-full wp-image-791" alt="regina-myhadzjanova" src="<?php echo get_template_directory_uri(); ?>/img/21.png" width="186" height="214"></div>
                                            <div class="staff-name">Регина
                                                <br> Мухамедзянова
                                            </div>
                                            <div class="staff-post">декоратор</div>
                                        </div>
                                        <div class="staff-item">
                                            <div class="staff-img"><img class="alignnone size-full wp-image-791" alt="maria-tah" src="<?php echo get_template_directory_uri(); ?>/img/maria-tah.png" width="186" height="214"></div>
                                            <div class="staff-name">Мария
                                                <br> Тах
                                            </div>
                                            <div class="staff-post">младший дизайнер</div>
                                        </div>
                                        <div class="staff-item">
                                            <div class="staff-img"><img class="alignnone size-full wp-image-876" alt="julia-belikova" src="<?php echo get_template_directory_uri(); ?>/img/julia-belikova.png" width="186" height="214"></div>
                                            <div class="staff-name">Юлия
                                                <br> Беликова
                                            </div>
                                            <div class="staff-post">дизайнер</div>
                                        </div>
                                        <div class="staff-item">
                                            <div class="staff-img"><img class="alignnone size-full wp-image-791" alt="Татьяна Прокуда" src="<?php echo get_template_directory_uri(); ?>/img/tatiana.png" width="186" height="214"></div>
                                            <div class="staff-name">Татьяна
                                                <br> Прокуда
                                            </div>
                                            <div class="staff-post">декоратор</div>
                                        </div>
                                        <div class="staff-item">
                                            <div class="staff-img"><img class="alignnone size-full wp-image-791" alt="Владимир Киселев" src="<?php echo get_template_directory_uri(); ?>/img/2.png" width="186" height="214"></div>
                                            <div class="staff-name">Владимир
                                                <br> Киселев
                                            </div>
                                            <div class="staff-post">архитектор</div>
                                        </div>
                                        <div class="staff-item">
                                            <div class="staff-img"><img class="alignnone size-full wp-image-791" alt="alexandr-zyl" src="<?php echo get_template_directory_uri(); ?>/img/alexandr-zyl.png" width="186" height="214"></div>
                                            <div class="staff-name">Александр
                                                <br> Зыль
                                            </div>
                                            <div class="staff-post">руководитель отдела
                                                <br> маркетинга и PR</div>
                                        </div>
                                        <div class="staff-item">
                                            <div class="staff-img"><img class="alignnone size-full wp-image-791" alt="Андрей Суржиков-Царикевич" src="<?php echo get_template_directory_uri(); ?>/img/Surzhikov-Carikevich-Andrey.jpg" width="186" height="214"></div>
                                            <div class="staff-name">Андрей
                                                <br> Суржиков-Царикевич
                                            </div>
                                            <div class="staff-post">визуализатор</div>
                                        </div>
                                        <div class="staff-item">
                                            <div class="staff-img"><img class="alignnone size-full wp-image-791" alt="Андрей Солдатов" src="<?php echo get_template_directory_uri(); ?>/img/1.png" width="186" height="214"></div>
                                            <div class="staff-name">Андрей
                                                <br> Солдатов
                                            </div>
                                            <div class="staff-post">руководитель отдела строительства</div>
                                        </div>
                                        <div class="staff-item">
                                            <div class="staff-img"><img class="alignnone size-full wp-image-791" alt="Кирилл Кузьмин" src="<?php echo get_template_directory_uri(); ?>/img/krasavets.png" width="186" height="214"></div>
                                            <div class="staff-name">Кирилл
                                                <br> Кузьмин
                                            </div>
                                            <div class="staff-post">фотограф</div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
                                <!-- .entry-content -->
<?php get_footer(); ?>
