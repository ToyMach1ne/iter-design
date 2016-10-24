<?php get_header(); ?>
        <div id="content-padding-off">
            <div class="entry"></div>
            <div class="row">
                <div class="col-xs-12">
                    <div class="section-title opacityRun">
                    <?php $term = get_term_by( 'slug', get_query_var( 'term' ), get_query_var( 'taxonomy' ) ); ?>
                        <h3 style="margin-top:10px !important;"><?php echo $term->name; ?></h3>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-1">&nbsp;</div>
                    <div class="col-md-4">
                        <p><?php the_field('1st_block_text', 428); ?></p>
                    </div>
                    <div class="col-md-6">
                        <div class="work-item">
                        <?php $image = get_field('1st_block_img', 428); if( !empty($image) ): ?>
                          <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                        <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="entry-footer parallax parallax-bg-32" style="padding: 50px 0;">
                <div class="full-bg-image" style="background-position: center 216px;"></div>
                <div class="overlay-paralax"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="offers">
                                <h1 style="font-size:2em;text-shadow: 2px 2px 5px #000;"><?php the_field('slogan', 428); ?></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="entry"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-2">&nbsp;</div>
                    <div class="col-md-4">
                        <br>
                        <p><?php the_field('2nd_text', 428); ?></p>
                    </div>
                    <div class="col-md-5">
                        <div class="work-item"><?php $image = get_field('2nd_img', 428); if( !empty($image) ): ?>
                          <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                        <?php endif; ?>
                        </div>
                    </div>
                    <div class="col-md-1"></div>
                </div>
                <div class="entry"></div>
                <div class="row">
                    <div class="col-md-2">&nbsp;</div>
                    <div class="col-md-4">
                        <div class="work-item">
                        <?php $image = get_field('3rd_img', 428); if( !empty($image) ): ?>
                          <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                        <?php endif; ?>
                    </div>
                </div>
                <div class="col-md-4">
                        <p><?php the_field('3rd_text', 428); ?></p>
                    </div>
                <div class="entry"></div>
            </div>
          </div><!-- container -->
            <div class="entry-footer parallax parallax-bg-62">
                <div class="full-bg-image" style="background-position: center 535px;"></div>
                <div class="overlay-paralax"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="offers">
                                <h1 style="font-size:2.2em;" class="shadow"><?php the_field('2nd_slogan', 428); ?></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="entry"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-1">&nbsp;</div>
                    <div class="col-md-3">
                        <div class="work-item">
                        <?php $image = get_field('4th_img', 428); if( !empty($image) ): ?>
                          <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                        <?php endif; ?>
                        <br>
                    </div>
                </div>
                <div class="col-md-6">
                        <p style="padding-top: 14px;"><?php the_field('4th_text', 428); ?></p>
                    </div>
                    <div class="col-md-2">&nbsp;</div>
                  </div>
                <div class="row">
                    <div class="col-md-2">&nbsp;</div>
                    <div class="col-md-4">
                        <p class="align-right" style="padding-top: 3px;"><?php the_field('5th_text', 428); ?></p>
                    </div>
                    <div class="col-md-3">
                        <div class="work-item">
                          <?php $image = get_field('5th_img', 428); if( !empty($image) ): ?>
                            <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                          <?php endif; ?>
                        </div>
                    </div>
                </div>
                <div class="entry"></div>
            </div>
            <div id="content-bottom-off">
                <section id="folio" class="page">
                    <section class="section padding-off">
                        <div class="container">
                            <div class="row">
                                <div class="section-title type-2 opacityRun">
                                    <h3> Архитектурные проекты</h3>
                                </div>
                            </div>
                        </div>
                        <section id="portfolio-items" class="portfolio-items col-5">
                        <?php query_posts(array( 'post_type' => 'projects','showposts' => 15, 'order' => 'ASC' ) ); ?>
                                        <?php while (have_posts()) : the_post(); ?>
                            <article class="bridges mix mix_all" style="display: inline-block;  opacity: 1;">
                                <div class="work-item-move slideUp3xRun" style="height: 280.147px;">
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
                        </section>
                    </section>
                    <div class="portfolio-paging">
                        <a href="http://iter-design.com/portfolio/architecture/" class="load-more2">Посмотреть все проекты</a>
                    </div>
                </section>
                <div class="entry">&nbsp;</div>
                <div class="col-xs-12">
                    <div class="section-title opacityRun">
                        <h3>АРХИТЕКТУРНОЕ ПРОЕКТИРОВАНИЕ</h3>
                    </div>
                </div>
                <div class="container">
                    <div class="row opacityRun">
                        <div class="col-md-12">
                            <h3>Архитектурное проектирование  создает общие формы и концепцию здания, определяет  оптимальный вид и форму фасадов, архитектуру внутреннего пространства,  и обеспечивает  сочетание  стилей с окружающими строениями.</h3>
                            <br>
                        </div>
                    </div>
                    <div class="row opacityRun">
                        <h2 class="align-center"> В состав эскизного архитектурного проекта включены:</h2>
                        <div class="col-md-3">&nbsp;</div>
                        <div class="col-md-6">
                            <p class="dropcap-type-3">1 <strong class="white">Генеральный план.</strong> Определяет положение здания на территории и прилегающих к нему строений, а также схему водоснабжения, газификации, отопления, канализации и прочих инфраструктурных коммуникаций.
                            </p>
                            <div class="work-item"><img src="<?php echo get_template_directory_uri(); ?>/img/arch_1_1.jpg" width="100%" alt=""></div>
                            <br>
                        </div>
                        <div class="col-md-3">&nbsp;</div>
                    </div>
                </div>
                <div class="container">
                    <div class="row opacityRun">
                        <div class="col-md-3">&nbsp;</div>
                        <div class="col-md-6">
                            <p class="dropcap-type-3">2 <strong class="white">Визуализация фасадов (3D-Визуализация)</strong> обязательная составляющая первого этапа создания нового архитектурного объекта, реконструкции и иного изменения внешнего облика уже существующего здания.</p>
                        </div>
                        <div class="col-md-3">&nbsp;</div>
                    </div>
                </div>
                <div class="container">
                    <div class="row opacityRun">
                        <div class="col-md-3">
                            <div class="work-item">
                                <p><img src="<?php echo get_template_directory_uri(); ?>/img/arch_3d_1.jpg" alt="Визуализация фасадов" width="100%"></p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="work-item">
                                <p><img src="<?php echo get_template_directory_uri(); ?>/img/arch_3d_2.jpg" alt="Визуализация фасадов" width="100%"></p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="work-item">
                                <p><img src="<?php echo get_template_directory_uri(); ?>/img/arch_3d_3.jpg" alt="3D-Визуализация" width="100%"></p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="work-item">
                                <p><img src="<?php echo get_template_directory_uri(); ?>/img/arch_3d_4.jpg" width="100%" alt="3D-Визуализация"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="separator"></div>
                <div class="container">
                    <div class="row opacityRun">
                        <div class="col-md-2">&nbsp;</div>
                        <div class="col-md-4">
                            <p class="dropcap-type-3">3 <strong class="white">Экспликация помещений. </strong>
                                <br>Объемно-планировочные решения:</p>
                            <ul class="list whiteul">
                                <li class="type-3">планировки посещений с экспликациями; </li>
                                <li class="type-3">план проемов с маркировкой дверей/проемов (глухая/стеклянная, левая/правая/двухстворчатая, габаритные размеры проема); </li>
                                <li class="type-3">план с расстановкой мебели с габаритными ращмерами (размеры ориентировочные исходя из габаритов помещения) </li>
                                <li class="type-3">план с расстановкой сантехнического и кухонного оборудования;
                                </li>
                                <li class="type-3">план с расстановкой отопительного оборудования.
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <br>
                            <p><img src="<?php echo get_template_directory_uri(); ?>/img/arch_dwg_1.png" alt="План архитектурного проекта"></p>
                        </div>
                        <div class="col-md-2">&nbsp;</div>
                    </div>
                </div>
                <div class="separator"></div>
                <div class="container">
                    <div class="row opacityRun">
                        <div class="col-md-2">&nbsp;</div>
                        <div class="col-md-4">
                            <p><img src="<?php echo get_template_directory_uri(); ?>/img/arch_dwg_3.png" alt="Разрезы дома в основных проекциях"></p>
                        </div>
                        <div class="col-md-4">
                            <p class="dropcap-type-3">4 <strong class="white">Разрезы дома в основных проекциях. </strong>
                                <br>Определяют геометрические размеры, высоты перекрытий между этажами и другие вертикальные размеры.
                            </p>
                        </div>
                        <div class="col-md-2">&nbsp;</div>
                    </div>
                </div>
                <div class="container">
                    <div class="row opacityRun">
                        <div class="col-md-2">&nbsp;</div>
                        <div class="col-md-4 align-right">
                            <br>
                            <p class="dropcap-type-3">5 <strong class="white">План  кровли. </strong>
                                <br>Фиксирует углы наклонов крыши, высотные отметки, геометрические размеры , площади поверхностей и сторон.
                            </p>
                        </div>
                        <div class="col-md-4"><img src="<?php echo get_template_directory_uri(); ?>/img/arch_dwg_4.png" alt="План  кровли"> </div>
                        <div class="col-md-2">&nbsp;</div>
                    </div>
                </div>
                <div class="separator"></div>
                <div class="container">
                    <div class="row opacityRun">
                        <div class="col-md-3">&nbsp;</div>
                        <div class="col-md-6">
                            <p class="dropcap-type-3">6 <strong class="white">План фасадов.</strong>
                                <br>Дизайн и структура фасада проектируемого здания, вертикальные и горизонтальные размеры с описанием материалов наружней отделки.
                            </p>
                        </div>
                        <div class="col-md-3">&nbsp;</div>
                    </div>
                </div>
                <div class="container">
                    <div class="row opacityRun">
                        <div class="col-md-2">&nbsp;</div>
                        <div class="col-md-4">
                            <p><img src="<?php echo get_template_directory_uri(); ?>/img/arch_dwg_5.png" alt="План фасадов"></p>
                        </div>
                        <div class="col-md-4">
                            <p><img src="<?php echo get_template_directory_uri(); ?>/img/arch_dwg_6.png" alt="План фасадов в осях"></p>
                        </div>
                        <div class="col-md-2">&nbsp;</div>
                    </div>
                </div>
                <div class="container">
                    <div class="row opacityRun">
                        <div class="col-md-3">&nbsp;</div>
                        <div class="col-md-6">
                            <p class="dropcap-type-3">7 <strong class="white">Общая пояснительная записка к проекту (ОПЗ)</strong>
                                <br> Содержит данные о архитектурном облике и стилистике здания, площади, количестве этажей с учетом применяемых строительных материалов.
                            </p>
                            <p class="dropcap-type-3">8 <strong class="white">Ведомость чертежей.</strong>
                                <br>Список прилагаемых к проекту чертежей и схем. </p>
                        </div>
                        <div class="col-md-3">&nbsp;</div>
                    </div>
                    <div class="separator"></div>
                </div>
                <div class="entry-footer parallax parallax-bg-34">
                    <div class="full-bg-image" style="background-position: center 2223px;"></div>
                    <div class="overlay-paralax"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="offers">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="entry">&nbsp;</div>
                <div class="col-xs-12">
                    <div class="section-title opacityRun">
                        <h3>Архитектурный раздел (АР стадия РП)</h3> </div>
                </div>
                <div class="container">
                    <div class="row opacityRun">
                        <div class="col-md-12">
                            <h3>Представляет  собой основную часть проектирования, необходимую для воплощения в реальность того, что нарисовано на бумаг. Это <strong>второй</strong> шаг после эскизов.<br><br>Является <strong>усовершенствованной</strong> версией эскизного проекта и включает в себя:</h3>
                            <br>
                        </div>
                        <div class="col-md-2">&nbsp;</div>
                        <div class="col-md-8">
                            <p class="dropcap-type-3">1<strong class="white"> Основная информация.</strong>
                                <br>Описание назначения возводимого дома, основные технико-экономические показатели, расширенные характеристики строящегося здания, его эксплуатационные особенности, более подробное, по сравнению с эскизным проектом, описание типов и материалов основных конструктивных элементов дома.
                            </p>
                            <p><img src="<?php echo get_template_directory_uri(); ?>/img/arch_2_1.jpg" width="100%" alt=""></p>
                        </div>
                        <div class="col-md-2">&nbsp;</div>
                    </div>
                </div>
                <div class="container">
                    <div class="row opacityRun">
                        <div class="col-md-2">&nbsp;</div>
                        <div class="col-md-4">
                            <div class="work-item">
                                <img src="<?php echo get_template_directory_uri(); ?>/img/arch_plan.jpg" alt="Генплан"></div>
                        </div>
                        <div class="col-md-4">
                            <br>
                            <p class="dropcap-type-3" style="padding-top: 8px;">2 <strong class="white">Генплан участка<br> с посадкой зданий.</strong> Усовершенствованный вариант генерального плана эскизного проекта с детализацией схем внешней инженерной инфраструктуры.
                            </p>
                        </div>
                        <div class="col-md-1">&nbsp;</div>
                    </div>
                </div>
                <div class="container">
                    <div class="row opacityRun">
                        <div class="col-md-2">&nbsp;</div>
                        <div class="col-md-4">
                            <p class="dropcap-type-3">3 <strong class="white">Поэтажные планы с экспликацией помещений.</strong> Подробный план каждого этажа с площадями и размерами помещений. </p>
                        </div>
                        <div class="col-md-5">
                            <p class="dropcap-type-3">4 <strong class="white">План кровли.</strong>
                                <br> Более детализированные и полные планы , чем в эскизном архитектурном проекте, в том числе с указанием вентканалов, водостоков, снегозадержателей. </p>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row opacityRun">
                        <div class="col-md-2">&nbsp;</div>
                        <div class="col-md-8">
                            <p><img src="<?php echo get_template_directory_uri(); ?>/img/arch_dwg_7_1.png" width="100%" alt=""></p>
                        </div>
                        <div class="col-md-2">&nbsp;</div>
                    </div>
                </div>
                <div class="container">
                    <div class="row opacityRun">
                        <div class="col-md-3">&nbsp;</div>
                        <div class="col-md-6">
                            <p class="dropcap-type-3">5 <strong class="white">Фасады в осях.</strong>
                                <br> Более детализированные и полные планы, чем в эскизном архитектурном проекте.
                            </p>
                        </div>
                        <div class="col-md-3">&nbsp;</div>
                    </div>
                </div>
                <div class="container">
                    <div class="row opacityRun">
                        <div class="col-md-2">&nbsp;</div>
                        <div class="col-md-8">
                            <p><img src="<?php echo get_template_directory_uri(); ?>/img/arch_dwg_7_2.png" width="100%" alt=""></p>
                        </div>
                        <div class="col-md-2">&nbsp;</div>
                    </div>
                </div>
                <div class="separator">&nbsp;</div>
                <div class="container">
                    <div class="row opacityRun">
                        <div class="col-md-2">&nbsp;</div>
                        <div class="col-md-4 align-right">
                            <p class="dropcap-type-3" style="padding-top: 8px;">6 <strong class="white">Фасадная схема. </strong>
                                <br> Схемы и перечень расположения декоративных элементов фасада (колонн, поясов, наличников, декоративных панелей и др.). </p>
                        </div>
                        <div class="col-md-4">
                            <div class="work-item"><img src="<?php echo get_template_directory_uri(); ?>/img/arch_fasad.jpg" width="100%" alt=""></div>
                        </div>
                        <div class="col-md-2">&nbsp;</div>
                    </div>
                </div>
                <div class="separator">&nbsp;</div>
                <div class="container">
                    <div class="row opacityRun">
                        <div class="col-md-4">
                            <p class="dropcap-type-3">7 <strong class="white">Технологические разрезы, узлы.</strong>
                                <br> На чертежах рабочего архитектурного проекта указываются габариты и тип основных строительных элементов. Одна из ключевых частей проекта с основными размерами</p>
                        </div>
                        <div class="col-md-4">
                            <p class="dropcap-type-3">8 <strong class="white"> Кладочный план. </strong>
                                <br> План каждого этажа. Расширенная детализация стен и подробная маркировка проемов, коммуникационных отверстий и каналов. По нему строители могут понять, где должны находиться дверные и оконные проёмы, перемычки стен, вентиляционные каналы, из каких материалов возводятся стены и какой они толщины, какой используется утеплитель.</p>
                        </div>
                        <div class="col-md-4">
                            <p class="dropcap-type-3">9 <strong class="white"> Схемы дверных и  оконных блоков. </strong>
                                <br> Чертежи оконных и дверных блоков с детализацией размеров , габаритов, направления открытия, а также типа остекления и материала, из которых они изготовлены. </p>
                        </div>
                    </div>
                    <div class="row opacityRun">
                        <div class="col-md-12">
                            <p><img src="<?php echo get_template_directory_uri(); ?>/img/arch_big.png" alt=""></p>
                        </div>
                    </div>
                    <div class="row opacityRun">
                        <div class="col-md-2">&nbsp;</div>
                        <div class="col-md-4">
                            <p><span class="num">10</span><strong class="white"> План фундаментов.</strong>
                                <br> Архитектурный план фундаментов с геометрическими размерами и привязками к осям </p>
                        </div>
                        <div class="col-md-4">
                            <p><span class="num">11</span><strong class="white">Экспликация полов в помещениях. </strong> описывает конструкцию основания и покрытия, материал.</p>
                        </div>
                        <div class="col-md-2">&nbsp;</div>
                    </div>
                    <div class="separator">&nbsp;</div>
                </div>
                <div class="entry-footer parallax parallax-bg-41">
                    <div class="full-bg-image" style="background-position: center 3341px;"></div>
                    <div class="overlay-paralax"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="offers"> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="entry"></div>
                <div class="entry"></div>
                <div class="entry"></div>
                <div class="col-xs-12">
                    <div class="section-title opacityRun">
                        <h3>Конструктивный раздел проекта (КР)</h3>
                    </div>
                </div>
                <div class="container">
                    <div class="row opacityRun">
                        <div class="col-md-12">
                            <h2 class="align-center">В этом разделе содержатся расчеты конструкций фундаментов¸ параметров перекрытий, кровли и возводимых стен строения. Представляет собой практические расчетные данные для работ по строительству. Этот этап является совместной работой архитекторов, дизайнеров, проектировщиков и инженеров.</h2>
                            <br>
                        </div>
                    </div>
                    <div class="row opacityRun">
                        <h2 class="align-center">В состав <strong>конструктивного раздела</strong> архитектурного проекта входят:</h2>
                        <div class="col-md-4 align-right">
                            <p class="dropcap-type-3">0<strong class="white"> Разработка котлована. </strong>
                                <br>В составе документации - план котлована с объемом вынимемого грунта, разреза, узлы и детали.
                            </p>
                        </div>
                        <div class="col-md-4">
                            <img src="<?php echo get_template_directory_uri(); ?>/img/arch_katl.png" alt="">
                        </div>
                        <div class="col-md-4">
                            <p class="dropcap-type-3">1 <strong class="white">Схема фундамента</strong> Монтажный план фундаментов - сечения всего фундамента и его несущих элементов, спецификация основных материалов для монтажа фундамента.
                            </p>
                        </div>
                    </div>
                    <div class="row opacityRun">
                        <div class="col-md-4">&nbsp;</div>
                        <div class="col-md-4">
                            <p class="dropcap-type-3">2 <strong class="white">Схема фасадов.</strong> Монтажная схема с геометрическими размерами и высотными отметками. </p>
                        </div>
                        <div class="col-md-4">&nbsp;</div>
                    </div>
                </div>
                <div class="container">
                    <div class="row opacityRun">
                        <div class="col-md-3">
                            <div class="work-item"><img src="<?php echo get_template_directory_uri(); ?>/img/arch_kr_1.jpg" width="100%" alt=""></div>
                        </div>
                        <div class="col-md-3">
                            <div class="work-item"><img src="<?php echo get_template_directory_uri(); ?>/img/arch_kr_2.jpg" width="100%" alt=""></div>
                        </div>
                        <div class="col-md-3">
                            <div class="work-item"><img src="<?php echo get_template_directory_uri(); ?>/img/arch_kr_3.jpg" width="100%" alt=""></div>
                        </div>
                        <div class="col-md-3">
                            <div class="work-item"><img src="<?php echo get_template_directory_uri(); ?>/img/arch_kr_4.jpg" width="100%" alt=""></div>
                        </div>
                    </div>
                    <br>
                </div>
                <div class="container">
                    <div class="row opacityRun">
                        <div class="col-md-4">
                            <p class="dropcap-type-3">3 <strong class="white"> Схемы перекрытий. </strong>
                                <br> Зависит от типа конструкции здания. В случае монолитного строения это: </p>
                        </div>
                        <div class="col-md-4">
                            <ul class="list whiteul">
                                <li class="type-3"> план армирования; </li>
                                <li class="type-3"> план раскладок плит перекрытий; </li>
                                <li class="type-3"> план геометрии балок с размерами и расстояниями. </li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <p class="dropcap-type-3">4 <strong class="white"> Развернутый план</strong> (в том числе спецификации материалов и &nbsp;ведомости перемычек) всех этажных перемычек и &nbsp;мансарды.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row opacityRun">
                        <div class="col-md-2">&nbsp;</div>
                        <div class="col-md-4">
                            <div class="work-item"><img src="<?php echo get_template_directory_uri(); ?>/img/arch_lestn.jpg" width="100%" alt=""></div>
                        </div>
                        <div class="col-md-4">
                            <p class="dropcap-type-3">5 <strong class="white">Конструкции&nbsp;внутренних лестниц и&nbsp;наружных&nbsp;крылец. </strong>
                                <br> Узлы и разрезы.&nbsp;Спецификация &nbsp;материалов и указания по монтажу. </p>
                            <p class="dropcap-type-3">6 <strong class="white">Схема подстропильного каркаса.</strong>
                                <br> Монтажная схема и монтажные узлы. Спецификация &nbsp;материалов и указания по монтажу.&nbsp;</p>
                        </div>
                        <div class="col-md-3">&nbsp;</div>
                    </div>
                </div>
                <div class="container">
                    <div class="row opacityRun">
                        <div class="col-md-4">
                            <p class="dropcap-type-3">7 <strong class="white"> Схема&nbsp;стропильной системы и разрезы.  </strong>
                                <br> Монтажная схема и монтажные&nbsp;Спецификация &nbsp;материалов и указания по монтажу.&nbsp;</p>
                        </div>
                        <div class="col-md-4">
                            <p class="dropcap-type-3">8 <strong class="white"> Монтажный план кровли. </strong>
                                <br> Спецификация &nbsp;материалов и указания по монтажу.&nbsp;</p>
                        </div>
                        <div class="col-md-4">
                            <p class="dropcap-type-3">9 <strong class="white"> Сечения по внутренней и внешней стенам. </strong>
                                <br> Спецификация &nbsp;материалов и указания по монтажу. </p>
                        </div>
                    </div>
                </div>
                <div class="separator"></div>
                <div class="row opacityRun">
                    <div class="col-md-2">&nbsp;</div>
                    <div class="col-md-8">
                        <h2 class="align-center">С помощью&nbsp;конструктивного раздела проекта можно определить точные объемы закупок строительных материалов, &nbsp;строительных и отделочных работ.</h2></div>
                    <div class="col-md-2">&nbsp;</div>
                </div>
<?php get_footer(); ?>
