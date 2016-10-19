webpackJsonpuLiB__name_([1], [, , function(e, t, s) {
  "use strict";
  var i = this && this.__extends || function(e, t) {
      function s() {
        this.constructor = e
      }
      for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
      e.prototype = null === t ? Object.create(t) : (s.prototype = t.prototype, new s)
    },
    o = this && this.__decorate || function(e, t, s, i) {
      var o, r = arguments.length,
        n = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, s) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, s, i);
      else
        for (var l = e.length - 1; l >= 0; l--)(o = e[l]) && (n = (r < 3 ? o(n) : r > 3 ? o(t, s, n) : o(t, s)) || n);
      return r > 3 && n && Object.defineProperty(t, s, n), n
    },
    r = this && this.__metadata || function(e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    },
    n = s(3),
    l = uLiB,
    a = l.util,
    d = l.el.Element,
    h = l.cmp.FormPanel,
    p = l.cmp.CallGeneratorMainButton,
    c = l.cmp.ToolButtonCloseWithImage,
    u = l.cmp.ToolButtonCloseWithChar,
    m = function(e) {
      function t(t, s) {
        this.imageCls = "personal-panel-image", this.titleCls = "personal-panel-title", this.messageCls = "personal-panel-message", this.textCls = "personal-panel-text-container", this.bodyCls = "personal-panel-body", this.footerCls = "personal-panel-footer", this.isMaskPositionFixed = !0, this.isElPositionFixed = !0, this.skipCmp = !0, this.trackClick = !0, this.renderHidden = !0, this.isLeadForm = !0, this.respectBannerPlace = !1, this.html = '<div><div class="{imageCls}"></div><div class="{textCls} {titleCls}">{titleText}</div><div class="{textCls} {messageCls}">{messageText}</div><div class="{bodyCls}"></div><div class="{footerCls}"></div></div>', this.o = t, this.s = s, a.apply(this, s), this.titleText = a.crLfToBr(s.banner_title || ""), this.messageText = a.crLfToBr(s.banner_text || ""), this.buttonText = a.crLfToBr(s.button_text || ""), this.baseColor = "#" + this.s.banner_color, this.buttonColor = "#" + this.s.button_color, this.tools = [this.s.is_image && this.s.image_url ? c : u], this.renderTo = this.s.is_preview ? this.s.renderTo : "body", this.targetEl = this.s.is_preview ? this.s.renderTo : document.body, e.call(this, a.apply(t, s), s), !this.s.is_preview && this.addCls(this.s.banner_place.replace("_", " ")), this.s.is_preview && this.addCls("preview")
      }
      return i(t, e), t.prototype.afterRender = function() {
        e.prototype.afterRender.call(this), this.s.is_image && this.s.image_url && this.renderImage(), this.renderBody(), this.renderFooter(), this.setColors()
      }, t.prototype.renderImage = function() {
        var e = this.getInnerEl(this.imageCls);
        new d({
          tag: "img",
          src: this.s.image_url,
          renderTo: e
        })
      }, t.prototype.getSlideDirection = function() {
        var e = this.s.banner_place.split("_");
        return "middle" === e[0] ? e[1] : {
          bottom: "down",
          top: "up"
        }[e[0]]
      }, t.prototype.renderBody = function() {
        var e = this.getInnerEl(this.bodyCls);
        new p({
          text: this.buttonText,
          color: this.buttonColor,
          renderTo: e
        })
      }, t.prototype.renderFooter = function() {
        var e = this.getInnerEl(this.footerCls);
        this.o.banner_branding_text && this.o.banner_branding_url && new d({
          tag: "a",
          href: this.o.banner_branding_url,
          target: "_blank",
          cls: "link",
          text: this.o.banner_branding_text,
          renderTo: e
        })
      }, t.prototype.setColors = function() {
        this.getInnerEl(this.textCls).css("color", this.getContrastColor(this.baseColor)), this.getEl().css("background-color", this.baseColor), this.getInnerEl("link").css("color", this.getContrastColor(this.baseColor, !0))
      }, t.prototype.show = function() {
        this.setVisible(!0)
      }, t.prototype.hide = function() {
        this.setVisible(!1)
      }, t.prototype.setVisible = function(e) {
        "middle_center" !== this.s.banner_place ? e ? (this.getEl().css({
          "z-index": a.comagicTopZIndex() + 1
        }), this.getEl().show({
          effect: "slide",
          direction: this.getSlideDirection(),
          duration: 300
        })) : this.getEl().hide({
          effect: "slide",
          direction: this.getSlideDirection(),
          duration: 300
        }) : this._showModal(e)
      }, t.prototype.toLink = function() {
        window.location = this.s.button_url
      }, t.prototype.getFields = function() {
        return []
      }, t.prototype.getCallback = function() {
        var e = this;
        return function(t) {
          t.success && e.toLink()
        }
      }, t.prototype.destroyCssLink = function() {
        a.removeCssLinkById("comagic-leadgen-stylesheet")
      }, o([n.setProto("personal_form"), r("design:type", String)], t.prototype, "ctype", void 0), t
    }(h);
  t.PersonalPanel = m
}, function(e, t) {
  "use strict";

  function s(e) {
    return function(t, s) {
      t[s] = e
    }
  }

  function i(e, t) {
    t.forEach(function(t) {
      Object.getOwnPropertyNames(t.prototype).forEach(function(s) {
        e.prototype[s] = t.prototype[s]
      })
    })
  }
  t.setProto = s, t.applyMixins = i
}, function(e, t) {
  "use strict";

  function s(e, t) {
    this.o = e, this.s = t, t.comagic_web_url = e.comagic_web_url, this.renderTo = this.s.is_preview ? this.s.renderTo : "body", this.targetEl = this.s.is_preview ? this.s.renderTo : document.body, this.isMaskPositionFixed = !0, this.isElPositionFixed = !0, this.containerCls = "lead-request-conainer", this.bodyCls = "lead-request-form-body", this.messageCls = "lead-request-form-message", this.photoContainerCls = "photo-container", this.photoWrapperCls = "photo-wrapper", this.fieldsCls = "lead-request-form-fields", this.buttonsCls = "lead-request-form-buttons", this.footerCls = "lead-request-form-footer", this.hasImageCls = "lead-request-has-image", this.message = t.message, this.imageUrl = t.image_url, this.cssUrl = o.sformat("//{comagic_web_url}/static/banner/build/css/offlinemessageform-{banner_color}.css", t), o.addCssLink({
      css_url: this.cssUrl
    }), !this.s.is_preview && this.addCls(t.banner_place.replace("_", " ")), this.s.is_preview && this.addCls("preview"), s.superclass.constructor.apply(this, [o.apply(e, t), t])
  }
  var i = (window, uLiB),
    o = i.util,
    r = i.el.Element,
    n = i.field.TextField,
    l = i.field.PhoneField,
    a = i.field.TextAreaField,
    d = i.cmp.FormPanel,
    h = i.cmp.CallGeneratorMainButton,
    p = i.cmp.ToolButtonCloseWithChar;
  uLiB.$;
  t.OfflineMessageForm = s, o.extend(s, d), s.prototype.html = '<div><div class="containerCls"><div class="{bodyCls}"><div class="{photoContainerCls}"></div><div class="{messageCls}">{message}</div><div class="{fieldsCls}"></div><div class="{buttonsCls}"></div></div><div class="{footerCls}"></div></div></div>', s.prototype.renderHidden = !0, s.prototype.ctype = o.C.CW_OFFLINE_MESSAGE_FORM, s.prototype.tools = [p], s.prototype.FieldIsRequired = "required", s.prototype.FieldIsUnused = "unused", s.prototype.isLeadForm = !0, s.prototype.clearOnSubmit = !1, s.prototype.fields = [], s.prototype.afterRender = function() {
    s.superclass.afterRender.apply(this, arguments), this.renderImage(), this.renderFields(), this.renderButtons(), this.renderFooter()
  }, s.prototype.renderImage = function() {
    var e = this.getInnerEl(this.photoContainerCls);
    this.s.is_image && this.imageUrl ? (this.addCls(this.hasImageCls), new r({
      tag: "div",
      cls: this.photoWrapperCls,
      children: [{
        tag: "img",
        src: this.imageUrl
      }],
      renderTo: e
    })) : (this.removeCls(this.hasImageCls), e.remove())
  }, s.prototype.renderFields = function() {
    var e = this.getInnerEl(this.fieldsCls);
    this.s.require_name !== this.FieldIsUnused && (this.nameField = new n({
      renderTooltipInside: !0,
      tooltipType: "rich",
      allowBlank: this.s.require_name !== this.FieldIsRequired,
      markRequired: !0,
      name: "name",
      placeholder: "Как вас зовут",
      renderTo: e
    }), this.fields.push(this.nameField)), this.s.require_phone !== this.FieldIsUnused && (this.phoneField = new l({
      renderTooltipInside: !0,
      tooltipType: "rich",
      allowBlank: this.s.require_phone !== this.FieldIsRequired,
      markRequired: !0,
      name: "phone",
      placeholder: "Телефон для связи",
      renderTo: e
    }), this.fields.push(this.phoneField)), this.s.require_email !== this.FieldIsUnused && (this.emailField = new n({
      renderTooltipInside: !0,
      tooltipType: "rich",
      validators: ["email"],
      allowBlank: this.s.require_email !== this.FieldIsRequired,
      markRequired: !0,
      name: "email",
      placeholder: "E-mail для ответа",
      renderTo: e
    }), this.fields.push(this.emailField)), this.s.require_message !== this.FieldIsUnused && (this.messageField = new a({
      renderTooltipInside: !0,
      tooltipType: "rich",
      allowBlank: this.s.require_message !== this.FieldIsRequired,
      markRequired: !0,
      name: "message",
      placeholder: "Ваш вопрос",
      renderTo: e,
      maxLength: 1e3
    }), this.fields.push(this.messageField)), this.s.require_custom !== this.FieldIsUnused && (this.customField = new n({
      renderTooltipInside: !0,
      tooltipType: "rich",
      allowBlank: this.s.require_custom !== this.FieldIsRequired,
      markRequired: !0,
      name: "custom",
      placeholder: this.s.custom_field_name || "Дополнительное поле",
      renderTo: e
    }), this.fields.push(this.customField))
  }, s.prototype.renderButtons = function() {
    var e = this.getInnerEl(this.buttonsCls);
    this.button = new h({
      text: "Отправить",
      color: "#" + this.s.button_color,
      renderTo: e
    })
  }, s.prototype.renderFooter = function() {
    var e = this.getInnerEl(this.footerCls);
    this.o.banner_branding_text && this.o.banner_branding_url && new r({
      tag: "a",
      href: this.o.banner_branding_url,
      target: "_blank",
      cls: "link",
      text: this.o.banner_branding_text,
      renderTo: e
    })
  }, s.prototype.setVisible = function(e) {
    "middle_center" !== this.s.banner_place ? e ? (this.getEl().css({
      "z-index": o.comagicTopZIndex() + 1
    }), this.getEl().show({
      effect: "slide",
      direction: this.getSlideDirection(),
      duration: 300
    })) : this.getEl().hide({
      effect: "slide",
      direction: this.getSlideDirection(),
      duration: 300
    }) : this._showModal(e)
  }, s.prototype.show = function() {
    this.setVisible(!0)
  }, s.prototype.hide = function() {
    this.setVisible(!1)
  }, s.prototype.getSlideDirection = function() {
    var e = this.s.banner_place.split("_");
    return "middle" === e[0] ? e[1] : {
      bottom: "down",
      top: "up"
    }[e[0]]
  }, s.prototype.getFields = function() {
    return this.fields
  }, s.prototype.getValues = function() {
    var e = s.superclass.getValues.apply(this, arguments);
    return e.custom && (e.message = o.sformat("{message}{fieldName}: {fieldValue}", {
      message: e.message && e.message + "\n\n" || "",
      fieldName: this.s.custom_field_name,
      fieldValue: e.custom
    }), e.custom = void 0), e
  }, s.prototype.destroyCssLink = function() {
    s.superclass.destroyCssLink.apply(this, arguments), o.removeCssSkinLink({
      css_url: this.cssUrl
    })
  }
}, function(e, t) {
  "use strict";

  function s(e, t) {
    this.s = t, this.o = e, this.titleCls = "retention-panel-title", this.messageCls = "retention-panel-message", this.imageCls = "retention-image", this.footerCls = "retention-panel-footer", this.bodyCls = "retention-panel-body", this.leftSideCls = "retention-left-side", this.rightSideCls = "retention-right-side", this.firstStepCls = "retention-first-step", this.secondStepCls = "retention-second-step", this.timerCls = "comagic-retention-timer", this.buttonText = t.button_text.substring(0, 20) || "Текст на кнопке", this.titleText = o.crLfToBr(t.banner_title || "Заголовок"), this.messageText = o.crLfToBr(t.banner_text || "Текст"), this.buttonColor = "#" + t.button_color, this.handsetImageCls = "retention-handset-image", this.alarmClockImageCls = "retention-alarm-clock-image", this.hasBeenSubmitted = !1, this.renderTo = this.s.is_preview ? this.s.renderTo : "body", this.targetEl = this.s.is_preview ? this.s.renderTo : document.body, this.isMaskPositionFixed = !0, this.isElPositionFixed = !0, s.superclass.constructor.apply(this, [o.apply(e, t), t]), this.s.is_preview && this.addCls("preview"), this.renderFirstStep(), this.renderSecondStep()
  }
  var i = uLiB,
    o = i.util,
    r = i.el.Element,
    n = i.cmp.ModalPanel,
    l = i.field.PhoneField,
    a = i.cmp.CallGeneratorMainButton,
    d = i.cmp.ToolButtonCloseWithChar;
  t.CallGeneratorPanel = s, o.extend(s, n), s.prototype.ctype = o.C.CW_CALL_GENERATOR, s.prototype.skipCmp = !0, s.prototype.tools = [d], s.prototype.isLeadForm = !0, s.prototype.html = '<div><div class="{bodyCls}"><div class="{leftSideCls} {firstStepCls}"><div class="{imageCls}"></div></div><div class="{rightSideCls} {firstStepCls}"><div class="{titleCls}">{titleText}</div><div class="{messageCls}">{messageText}</div></div><div class="{secondStepCls}"><div class="{imageCls} {alarmClockImageCls}"></div><div class="{titleCls}"></div><div class="{messageCls}"></div></div></div><div class="{footerCls}"></div></div>', s.prototype.afterRender = function() {
    s.superclass.afterRender.apply(this, arguments), this.renderBody(), this.renderFooter()
  }, s.prototype.renderBody = function() {
    var e = this.getInnerEl(this.rightSideCls);
    this.phoneField = new l({
      renderTooltipInside: !0,
      tooltipType: "rich",
      allowBlank: !1,
      name: "phone",
      notemptyText: "Укажите телефон",
      renderTo: e
    }), new a({
      text: this.buttonText,
      color: this.buttonColor,
      renderTo: e
    })
  }, s.prototype.renderFirstStep = function() {
    var e = this.getInnerEl(o.sformat("{root} {child}", {
      root: this.leftSideCls,
      child: this.imageCls
    }));
    this.s.is_image && this.s.image_url ? e.css("background-image", o.sformat("url({url})", {
      url: this.s.image_url
    })) : o.addCls(e, this.handsetImageCls)
  }, s.prototype.startTimer = function() {
    var e = this;
    setTimeout(function() {
      e._startTimer(e.s.answer_countdown_timeout)
    }, 1e3)
  }, s.prototype._startTimer = function() {
    var e = void 0,
      t = void 0,
      s = !1,
      i = "retention-second-step retention-timer",
      o = function(r) {
        s && r || (s = !0, e = e || r, t = t || this.getInnerEl(i), e -= 1, t.html(e), e > 0 && setTimeout(function() {
          o()
        }, 1e3))
      };
    return o
  }(), s.prototype.renderSecondStep = function() {
    var e = this.getInnerEl(o.sformat("{root} {child}", {
        root: this.secondStepCls,
        child: this.titleCls
      })),
      t = this.getInnerEl(o.sformat("{root} {child}", {
        root: this.secondStepCls,
        child: this.messageCls
      })),
      s = "Сотрудник свяжется с Вами в самое ближайшее время",
      i = 'Ожидайте звонка через <span class="{timerCls}">{timeout}</span> секунд',
      r = "Мы позвоним Вам",
      n = "Ожидайте звонок";
    this.s.is_answer_countdown_timeout ? (t.html(r), e.html(o.sformat(i, {
      timeout: this.s.answer_countdown_timeout,
      timerCls: this.timerCls
    }))) : (e.html(n), t.html(s))
  }, s.prototype.renderFooter = function() {
    var e = this.getInnerEl(this.footerCls);
    this.o.banner_branding_text && this.o.banner_branding_url && new r({
      tag: "a",
      href: this.o.banner_branding_url,
      target: "_blank",
      cls: "link",
      text: this.o.banner_branding_text,
      renderTo: e
    })
  }, s.prototype.runSecondStep = function() {
    var e = this;
    e.getInnerEl("retention-first-step").fadeOut(300, function() {
      e.getInnerEl("retention-second-step").fadeIn(300, function() {})
    })
  }, s.prototype.getFields = function() {
    return [this.phoneField]
  }, s.prototype.destroyCssLink = function() {
    o.removeCssLinkById("comagic-leadgen-stylesheet")
  }, s.prototype.show = function() {
    this.setVisible(!0)
  }, s.prototype.hide = function() {
    this.setVisible(!1)
  }, s.prototype.setVisible = function(e) {
    s.superclass.show.call(this, [e])
  }, s.prototype.getCallback = function() {
    var e = this;
    return function(t) {
      t.success && (e.hasBeenSubmitted = !0, e.runSecondStep())
    }
  }
}]);
