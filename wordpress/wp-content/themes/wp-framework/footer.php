 <footer id="footer">
        <div class="widget-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-sm-3 col-xs-12 align-center">
                        <div class="entry"></div>
                        <a class="button default middle popup-with-form" href="http://iter-design.com/#order-project">Оставить заявку <i class="fa fa-2x fa-pencil black"></i></a>
                        <div class="white-popup-block2 mfp-hide" id="order-project">
                            <div class="c-form">
                                <?php echo do_shortcode('[contact-form-7 id="272" title="footer form"]'); ?>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-xs-12 align-center">
                        <h3 class="widget-title">Наши контакты</h3>
                        <div class="textwidget">
                            <p> <?php the_field('first_adress' , 270); ?> &amp;
                                <br> <?php the_field('second_adress' , 270); ?></p>
                            <p class="size3">Звоните: <i class="icon-phone-2 white"></i>
                            <strong class="telephone white comagic"><?php the_field('footer_phone' , 270); ?></strong></p>
                            <p>E-mail: <a href="mailto:info@iter-design.com"><?php the_field('email' , 270); ?></a></p>
                            <p class="white-color">Время работы: <?php the_field('work_time' , 270); ?></p>
                            <div class="footer-social">
                                <a href="https://www.instagram.com/iter_design/" target="_blank" class="footer-social-item footer-social-instagram"></a>
                                <a href="http://www.houzz.ru/pro/mail8428/iter-design" target="_blank" class="footer-social-item footer-social-houzz"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-3 col-xs-12 align-center">
                        <div class="entry"></div>
                        <a class="button middle default popup-with-form" href="http://iter-design.com/#call-back"><i class="fa fa-2x fa-phone black"></i>  Заказать звонок</a>
                        <div class="white-popup-block mfp-hide" id="call-back">
                            <div class="c-form">
                                <form action="http://iter-design.com/php/order/order.php" class="order-form" method="post" onsubmit="ga(&#39;send&#39;, &#39;event&#39;, &#39;callback&#39;, &#39;click&#39;); yaCounter34172550.reachGoal(&#39;CALLBACK&#39;); return true;">
                                    <h1>Заказ звонка</h1>
                                    <fieldset style="border:0;">
                                        <div class="form-group form-group-select form-group-1">
                                            <label for="time">Во сколько вам перезвонить?</label>
                                            <div class="input-vertical">
                                                <select name="time" id="time" required="">
                                                    <option>В течение 15 минут</option>
                                                    <option>с 09:00 до 10:00</option>
                                                    <option>с 10:00 до 11:00</option>
                                                    <option>с 11:00 до 12:00</option>
                                                    <option>с 12:00 до 13:00</option>
                                                    <option>с 13:00 до 14:00</option>
                                                    <option>с 14:00 до 15:00</option>
                                                    <option>с 15:00 до 16:00</option>
                                                    <option>с 16:00 до 17:00</option>
                                                    <option>с 17:00 до 18:00</option>
                                                    <option>с 18:00 до 19:00</option>
                                                    <option>с 19:00 до 20:00</option>
                                                    <option>с 20:00 до 21:00</option>
                                                    <option>с 21:00 до 22:00</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group form-group-tel form-group-2">
                                            <label for="phone">Ваш номер:</label>
                                            <div class="input-vertical">
                                                <input id="phone" name="phone" type="tel" class="form-control form-control-tel form-control-validation validation-phone" placeholder="Введите телефон *" required="">
                                            </div>
                                        </div>
                                        <div class="form-group form-group-tel form-group-3">
                                            <label for="name">Ваш имя:</label>
                                            <div class="input-vertical">
                                                <input id="name" name="name" type="text" class="form-control" placeholder="Введите ваше имя">
                                            </div>
                                        </div>
                                        <div class="form-group form-group-tel form-group-4">
                                            <label for="email">Ваш email:</label>
                                            <div class="input-vertical">
                                                <input id="email" name="email" type="email" class="form-control" placeholder="Введите ваш Email">
                                            </div>
                                        </div>
                                        <div class="form-group form-group-submit form-group-3">
                                            <input type="submit" id="zakazat" value="Перезвоните мне!" class="button default turquoise">
                                        </div>
                                        <div class="order-form-result"></div>
                                        <input type="hidden" name="orderTypeId" value="1">
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div class="bottom-footer">
        <div class="container">
            <div class="row">
                <div class="col-sm-5">
                    <div class="copyright">
                        Copyright © 2007-2016. All rights reserved.
                    </div>
                </div>
                <div class="col-sm-5 col-sm-offset-2">
                    <div class="developed">
                        Developed inside ITER-Design &nbsp;|&nbsp; <span class="powered-by-serptop"><a href="http://serptop.ru/" target="_blank">Powered by - <span class="serp">Serp</span><span class="top">Top</span></a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <!--[if lt IE 9]><script src="/js/respond.min.js"></script><![endif]-->
    <a href="http://iter-design.com/#" id="back-top" title="Back To Top"></a>
    <div id="comagic-cmp-0" class="comagic-common-form-panel comagic-component comagic-left comagic-top comagic-callbutton-site-phone" comagic-type="site_phone_form" style="display: none; z-index: 10002;">
        <div class="comagic-common-form-panel-tools">
            <a tabindex="0" unselectable="on" id="comagic-cmp-1" class="comagic-panel-tool-button comagic-panel-tool-button-close comagic-ms-button comagic-unselectable comagic-button comagic-button-icon comagic-button-icon-left comagic-component" comagic-type="tool-button-close"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"><span>&nbsp;</span></a>
        </div>
        <div class="comagic-common-form-panel-container">
            <div class="comagic-common-form-panel-header"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
                <div>Заказ звонка</div>
            </div>
            <div class="comagic-common-form-panel-items comagic-common-form-panel-items-few">
                <div class="comagic-field-container">
                    <div class="comagic-field-wrapper"><img class="comagic-error-icon" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
                        <input maxlength="1000" id="comagic-cmp-2" name="cmg-phone" class="comagic-field comagic-component" comagic-type="field" placeholder="Ваш телефон" type="tel">
                    </div>
                </div>
            </div>
            <div class="comagic-common-form-panel-buttons"><a tabindex="0" unselectable="on" id="comagic-cmp-3" class="comagic-common-button comagic-ms-button comagic-unselectable comagic-button comagic-component" comagic-type="common-button-send"><span>Перезвоните мне</span></a></div>
            <div class="comagic-common-form-panel-footer"><a href="http://www.comagic.ru/?utm_medium=widget&amp;utm_campaign=link_widget" target="_blank">CoMagic.ru</a></div>
        </div>
    </div>
    <div id="comagic-cmp-4" class="comagic-site-phone comagic-common-form-panel comagic-component comagic-bottom comagic-right comagic-skin-main" comagic-type="site_phone" style="display: none; z-index: 10002;">
        <div class="comagic-common-form-panel-tools">
            <a tabindex="0" unselectable="on" id="comagic-cmp-5" class="comagic-panel-tool-button comagic-panel-tool-button-close comagic-ms-button comagic-unselectable comagic-button comagic-button-icon comagic-button-icon-left comagic-component" comagic-type="tool-button-close"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"><span>&nbsp;</span></a>
        </div>
        <div class="comagic-common-form-panel-container">
            <div class="comagic-common-form-panel-header"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
                <div>Заказ звонка</div>
            </div>
            <div class="comagic-common-form-panel-items comagic-common-form-panel-items-few">
                <div class="comagic-field-container">
                    <div class="comagic-field-wrapper"><img class="comagic-error-icon" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
                        <input maxlength="1000" id="comagic-cmp-6" name="cmg-phone" class="comagic-field comagic-component" comagic-type="field" placeholder="Ваш телефон" type="tel">
                    </div>
                </div>
                <div class="comagic-field-container">
                    <label for="comagic-cmp-7">Введите код с изображения</label>
                    <div class="comagic-field-wrapper comagic-captcha-field-wrapper"><img class="comagic-captcha-field-image"><img class="comagic-error-icon" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
                        <input maxlength="1000" id="comagic-cmp-7" name="cmg-captcha_val" class="comagic-captcha-field comagic-field comagic-component" comagic-type="field" type="number">
                    </div>
                </div><a tabindex="0" unselectable="on" id="comagic-cmp-8" class="comagic-text-button comagic-ms-button comagic-unselectable comagic-button comagic-component" comagic-type="text-button-refresh-captcha"><span>Обновить код</span></a></div>
            <div class="comagic-common-form-panel-buttons"><a tabindex="0" unselectable="on" id="comagic-cmp-9" class="comagic-common-button comagic-ms-button comagic-unselectable comagic-button comagic-component" comagic-type="common-button-send"><span>Перезвоните мне</span></a></div>
            <div class="comagic-common-form-panel-footer"><a href="http://www.comagic.ru/?utm_medium=widget&amp;utm_campaign=link_widget" target="_blank">CoMagic.ru</a></div>
        </div>
    </div>
    <div id="comagic-cmp-10" class="comagic-site-request comagic-common-form-panel comagic-component comagic-bottom comagic-right comagic-skin-main" comagic-type="site_request" style="display: none; z-index: 10002;">
        <div class="comagic-common-form-panel-tools">
            <a tabindex="0" unselectable="on" id="comagic-cmp-11" class="comagic-panel-tool-button comagic-panel-tool-button-close comagic-ms-button comagic-unselectable comagic-button comagic-button-icon comagic-button-icon-left comagic-component" comagic-type="tool-button-close"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"><span>&nbsp;</span></a>
        </div>
        <div class="comagic-common-form-panel-container">
            <div class="comagic-common-form-panel-header"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
                <div>Заявка с сайта</div>
            </div>
            <div class="comagic-common-form-panel-items">
                <div class="comagic-field-container">
                    <div class="comagic-field-wrapper"><img class="comagic-error-icon" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
                        <input maxlength="1000" id="comagic-cmp-12" name="cmg-name" class="comagic-field comagic-component" comagic-type="field" placeholder="Как вас зовут*">
                    </div>
                </div>
                <div class="comagic-field-container">
                    <div class="comagic-field-wrapper"><img class="comagic-error-icon" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
                        <input maxlength="1000" id="comagic-cmp-13" name="cmg-phone" class="comagic-field comagic-component" comagic-type="field" placeholder="Телефон для связи" type="tel">
                    </div>
                </div>
                <div class="comagic-field-container">
                    <div class="comagic-field-wrapper"><img class="comagic-error-icon" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
                        <input maxlength="1000" id="comagic-cmp-14" name="cmg-email" class="comagic-field comagic-component" comagic-type="field" placeholder="E-mail для ответа*">
                    </div>
                </div>
                <div class="comagic-field-container">
                    <div class="comagic-field-wrapper"><img class="comagic-error-icon" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
                        <textarea maxlength="1000" id="comagic-cmp-15" name="cmg-message" class="comagic-field comagic-component" comagic-type="field" placeholder="Ваш вопрос*"></textarea>
                    </div>
                </div>
            </div>
            <div class="comagic-common-form-panel-buttons"><a tabindex="0" unselectable="on" id="comagic-cmp-16" class="comagic-common-button comagic-ms-button comagic-unselectable comagic-button comagic-component" comagic-type="common-button-send"><span>Отправить</span></a></div>
            <div class="comagic-common-form-panel-footer"><a href="http://www.comagic.ru/?utm_medium=widget&amp;utm_campaign=link_widget" target="_blank">CoMagic.ru</a></div>
        </div>
    </div>
    <div style="height: 406px; display: none; z-index: 10002;" id="comagic-cmp-17" class="comagic-consultant-main comagic-resizable-top comagic-common-form-panel comagic-component comagic-bottom comagic-right comagic-skin-main comagic-consultant" comagic-type="consultant">
        <div class="comagic-common-form-panel-tools">
            <a tabindex="0" unselectable="on" id="comagic-cmp-18" class="comagic-panel-tool-button comagic-panel-tool-button-close comagic-ms-button comagic-unselectable comagic-button comagic-button-icon comagic-button-icon-left comagic-component" comagic-type="tool-button-close"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"><span>&nbsp;</span></a>
            <a tabindex="0" unselectable="on" id="comagic-cmp-19" class="comagic-panel-tool-button comagic-panel-tool-button-unpin comagic-ms-button comagic-unselectable comagic-button comagic-button-icon comagic-button-icon-left comagic-component" comagic-type="tool-button-unpin"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"><span>&nbsp;</span></a>
            <a tabindex="0" unselectable="on" id="comagic-cmp-20" class="comagic-panel-tool-button comagic-panel-tool-button-minimize comagic-ms-button comagic-unselectable comagic-button comagic-button-icon comagic-button-icon-left comagic-component" comagic-type="tool-button-minimize"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"><span>&nbsp;</span></a>
        </div>
        <div class="comagic-common-form-panel-container">
            <div class="comagic-common-form-panel-resizable"></div>
            <div class="comagic-common-form-panel-header"><span class="comagic-operator-avatar-wrapper"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" class="comagic-operator-avatar"></span>
                <div class="comagic-operator-info">
                    <div class="comagic-operator-name"></div>
                    <div class="comagic-operator-position"></div>
                </div>
                <a tabindex="0" unselectable="on" id="comagic-cmp-21" class="comagic-call-button comagic-ms-button comagic-unselectable comagic-button comagic-button-icon comagic-button-icon-left comagic-component" comagic-type="call-button-open-site-phone"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"><span>&nbsp;</span></a>
            </div>
            <div class="comagic-common-form-panel-items comagic-common-form-panel-items-few">
                <div id="comagic-cmp-22" class="comagic-consultant-log comagic-component" comagic-type="consultant-log" style="height: 232px;">
                    <div class="comagic-consultant-log-inner"></div>
                </div>
                <div id="comagic-cmp-23" class="comagic-functional-toolbar comagic-component" comagic-type="functional-toolbar">
                    <a tabindex="0" unselectable="on" id="comagic-cmp-24" class="comagic-functional-button comagic-functional-button-email comagic-ms-button comagic-unselectable comagic-button comagic-button-icon comagic-button-icon-left comagic-component" comagic-type="functional-button-email"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"><span>&nbsp;</span></a>
                    <a tabindex="0" unselectable="on" id="comagic-cmp-25" class="comagic-functional-button comagic-functional-button-print comagic-ms-button comagic-unselectable comagic-button comagic-button-icon comagic-button-icon-left comagic-component" comagic-type="functional-button-print"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"><span>&nbsp;</span></a>
                    <a tabindex="0" unselectable="on" id="comagic-cmp-26" class="comagic-functional-button comagic-functional-button-sound comagic-ms-button comagic-unselectable comagic-button comagic-button-icon comagic-button-icon-left comagic-component comagic-button-state-on" comagic-type="functional-button-sound"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"><span>&nbsp;</span></a><a href="http://www.comagic.ru/?utm_medium=widget&amp;utm_campaign=link_widget" target="_blank" class="comagic-branding-link">CoMagic.ru</a></div>
            </div>
            <div id="comagic-cmp-27" class="comagic-email-chat-cmp comagic-component" comagic-type="email-chat-cmp" style="display: none;">
                <div class="comagic-field-container">
                    <label for="comagic-cmp-28">Отправить чат на электронную почту:</label>
                    <div class="comagic-field-wrapper"><img class="comagic-error-icon" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
                        <input maxlength="1000" id="comagic-cmp-28" class="comagic-field comagic-component" comagic-type="field">
                    </div>
                </div>
                <div class="comagic-buttons-wrapper"><a tabindex="0" unselectable="on" id="comagic-cmp-29" class="comagic-common-button comagic-ms-button comagic-unselectable comagic-button comagic-component" comagic-type="common-button-send-chat-by-email"><span>Отправить</span></a><a tabindex="0" unselectable="on" id="comagic-cmp-30" class="comagic-text-button comagic-ms-button comagic-unselectable comagic-button comagic-component" comagic-type="text-button-cancel"><span>Отмена</span></a>
                    <div class="comagic-clearer"></div>
                </div>
            </div>
            <div id="comagic-cmp-31" class="comagic-main-input-cmp comagic-component" comagic-type="main-input-cmp">
                <div class="comagic-left-container">
                    <textarea placeholder="Введите сообщение сюда" class="comagic-input-area"></textarea>
                    <a tabindex="0" id="comagic-cmp-32" class="comagic-file-upload comagic-button comagic-button-icon comagic-button-icon-left comagic-component" comagic-type="file-upload"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">&nbsp;
                        <form action="http://iter-design.com/upload/" method="POST" enctype="multipart/form-data" accept-charset="utf-8" target="fileupload-iframe-comagic-cmp-32-file-upload" style="margin:0;padding:0">
                            <input type="file" name="comagic-cmp-32" id="comagic-cmp-32-file-upload" accept=".png,.xpm,.jpg,.doc,.docx,.txt,.xls,.xlsx,.csv,.odt,.ods,.pdf,.djvu,.xml,.fb2,.epub">
                        </form>
                    </a>
                </div>
                <a tabindex="0" unselectable="on" id="comagic-cmp-33" class="comagic-ms-button comagic-unselectable comagic-button comagic-button-icon comagic-button-icon-left comagic-button-send comagic-component" comagic-type="common-button-send"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"><span>&nbsp;</span></a>
            </div>
            <div class="comagic-common-form-panel-footer"></div>
        </div>
    </div>
    <div id="comagic-cmp-34" class="comagic-visitor-info-request comagic-common-form-panel comagic-component comagic-bottom comagic-right comagic-skin-main" comagic-type="visitor_info_request" style="display: none; z-index: 10002;">
        <div class="comagic-common-form-panel-tools">
            <a tabindex="0" unselectable="on" id="comagic-cmp-35" class="comagic-panel-tool-button comagic-panel-tool-button-close comagic-ms-button comagic-unselectable comagic-button comagic-button-icon comagic-button-icon-left comagic-component" comagic-type="tool-button-close"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"><span>&nbsp;</span></a>
        </div>
        <div class="comagic-common-form-panel-container">
            <div class="comagic-common-form-panel-header"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
                <div>Операторы нашей компании готовы вам помочь</div>
            </div>
            <div class="comagic-common-form-panel-items comagic-common-form-panel-items-few"></div>
            <div class="comagic-common-form-panel-buttons"><a tabindex="0" unselectable="on" id="comagic-cmp-36" class="comagic-common-button comagic-ms-button comagic-unselectable comagic-button comagic-component" comagic-type="common-button-send"><span>Начать чат</span></a></div>
            <div class="comagic-common-form-panel-footer"><a href="http://www.comagic.ru/?utm_medium=widget&amp;utm_campaign=link_widget" target="_blank">CoMagic.ru</a></div>
        </div>
    </div>

    <script src="<?php echo get_template_directory_uri(); ?>/js/saved_resource(1).js" type="text/javascript"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/approve.js" type="text/javascript"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/saved_resource(2).js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/saved_resource(4).js" type="text/javascript"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/saved_resource(6).js" type="text/javascript"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery.easing.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery-1.10.2.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery.stickyNavbar.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/owl.carousel.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/scripts.js"></script>

     <?php wp_footer(); ?>
</body>

</html>
