<!DOCTYPE html>
<html class="not-ie  js no-touch cssanimations csstransitions webkit chrome win js" lang="en" style="">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?></title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/img/favicon.png">
    <link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/img/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="<?php echo get_template_directory_uri(); ?>/img/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="<?php echo get_template_directory_uri(); ?>/img/apple-touch-icon-114x114.png">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <div class="fit-vids-style" id="fit-vids-style" style="display: none;">
    </div>
    <!--[if lt IE 9]>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->
  <!-- css + javascript -->
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <div id="wrapper">
        <div id="mobile-menu" class="mobile-menu">
            <a href="http://iter-design.com/#" id="menu-hide"></a>
            <ul>
                <li>
                    <a href="http://iter-design.com/about/company/" title="Компания">Компания</a>
                    <ul>
                        <li><a href="http://iter-design.com/about/company/" title="О команде" target="">О команде</a></li>
                        <li><a href="http://iter-design.com/about/press/" title="" target="">СМИ о нас    </a></li>
                        <li><a href="http://iter-design.com/about/review/" title="Отзывы клиентов" target="">Отзывы клиентов</a></li>
                        <li><a href="http://iter-design.com/faq/" title="Часто задаваемые вопросы" target="">Часто задаваемые вопросы</a></li>
                    </ul>
                </li>
                <li>
                    <a href="http://iter-design.com/complete_pm/" title="Услуги">Услуги</a>
                    <ul>
                        <li><a href="http://iter-design.com/complete_pm/" title="Комплексное управление проектом" target="">Комплексное управление проектом</a></li>
                        <li><a href="http://iter-design.com/interior_design/" title="Дизайн интерьера" target="">Дизайн интерьера</a></li>
                        <li><a href="http://iter-design.com/architecture/" title="Архитектура и дизайн фасадов" target="">Архитектура</a></li>
                        <li><a href="http://iter-design.com/construction/" title="" target="">Строительство домов</a></li>
                        <li><a href="http://iter-design.com/design-repair/" title="" target="">Дизайнерский ремонт</a></li>
                        <li><a href="http://iter-design.com/decor/" title="Комплектация и декор" target="">Комплектация и декор</a></li>
                        <li><a href="http://iter-design.com/engineering/" title="" target="">Инженерные системы</a></li>
                    </ul>
                </li>
                <li>
                    <a href="http://iter-design.com/portfolio/apartments/" title="Проекты">Портфолио</a>
                    <ul>
                        <li><a href="http://iter-design.com/portfolio/apartments/" title="Квартиры" target="">Квартиры</a></li>
                        <li><a href="http://iter-design.com/portfolio/houses/" title="Загородные дома" target="">Загородные дома</a></li>
                        <li><a href="http://iter-design.com/portfolio/public/" title="Коммерческие проекты" target="">Коммерческие проекты</a></li>
                        <li><a href="http://iter-design.com/architecture/" title="Архитектура" target="">Архитектура</a></li>
                    </ul>
                </li>
                <li><a href="http://iter-design.com/diegest/" title="">DIGEST</a></li>
                <li><a href="http://iter-design.com/contacts/" title="Контакты">Контакты</a></li>
            </ul>
        </div>

        <header id="header" role="banner">
            <div id="ha-header" class="site-header affix-top header" data-spy="affix" data-offset-top="50">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-4">
                            <div id="logo">
                                <a href="<?php echo home_url(); ?>">
                                    <img src="<?php echo get_template_directory_uri(); ?>/img/rw-logo.png" alt="Студия дизайна интерьера в Москве romanoff &amp; wood" title="romanoff &amp; wood" class="logo-img">
                                </a>
                            </div>
                        </div>
                        <div class="col-xs-6">
                            <div id="navbar" class="nav-default">
                                <nav id="site-navigation" class="navigation main-navigation clearfix" role="navigation">
                                    <div class="menu-menu-top-container">
                                        <?php wpeHeadNav(); ?>
                                    </div><!-- menu-menu-top-container -->
                                </nav>
                                <!-- #site-navigation -->
                            </div>
                        </div>
                        <!-- #navbar -->
                        <div class="col-xs-2">
                            <div class="hcard">
                                <!-- feedback -->
                                <div class="feedback-block" id="js-feedback-block">
                                    <div class="tel js-tel phone_alloka" data-phone="8%20495%20532%203106"><?php the_field('top_phone' , 270); ?></div>
                                    <div class="feedback-container" id="js-feedback-container">
                                        [contact-form-7 404 "Not Found"] </div>
                                </div>
                                <!-- feedback -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
