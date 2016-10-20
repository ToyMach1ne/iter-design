function OrderForm(e) {
    this.dom = {}, this.dom.validation = {}, this.dom.validation.phone = "", this.dom.validation.email = "", this.dom.$root = e.$orderForm, this.options = jQuery.extend(!0, {}, this.optionsDefault, e)
}! function(e, t) {
    function n(e) {
        var t = e.length,
            n = ue.type(e);
        return !ue.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)))
    }

    function r(e) {
        var t = Se[e] = {};
        return ue.each(e.match(fe) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function i(e, n, r, i) {
        if (ue.acceptData(e)) {
            var o, a, s = ue.expando,
                l = e.nodeType,
                c = l ? ue.cache : e,
                u = l ? e[s] : e[s] && s;
            if (u && c[u] && (i || c[u].data) || r !== t || "string" != typeof n) return u || (u = l ? e[s] = te.pop() || ue.guid++ : s), c[u] || (c[u] = l ? {} : {
                toJSON: ue.noop
            }), ("object" == typeof n || "function" == typeof n) && (i ? c[u] = ue.extend(c[u], n) : c[u].data = ue.extend(c[u].data, n)), a = c[u], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[ue.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[ue.camelCase(n)])) : o = a, o
        }
    }

    function o(e, t, n) {
        if (ue.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? ue.cache : e,
                l = o ? e[ue.expando] : ue.expando;
            if (a[l]) {
                if (t && (r = n ? a[l] : a[l].data)) {
                    ue.isArray(t) ? t = t.concat(ue.map(t, ue.camelCase)) : t in r ? t = [t] : (t = ue.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !s(r) : !ue.isEmptyObject(r)) return
                }(n || (delete a[l].data, s(a[l]))) && (o ? ue.cleanData([e], !0) : ue.support.deleteExpando || a != a.window ? delete a[l] : a[l] = null)
            }
        }
    }

    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(Ne, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r || "false" !== r && ("null" === r ? null : +r + "" === r ? +r : Ee.test(r) ? ue.parseJSON(r) : r)
                } catch (o) {}
                ue.data(e, n, r)
            } else r = t
        }
        return r
    }

    function s(e) {
        var t;
        for (t in e)
            if (("data" !== t || !ue.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function l() {
        return !0
    }

    function c() {
        return !1
    }

    function u() {
        try {
            return G.activeElement
        } catch (e) {}
    }

    function d(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function f(e, t, n) {
        if (ue.isFunction(t)) return ue.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return ue.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (Be.test(t)) return ue.filter(t, e, n);
            t = ue.filter(t, e)
        }
        return ue.grep(e, function(e) {
            return ue.inArray(e, t) >= 0 !== n
        })
    }

    function p(e) {
        var t = Ue.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function h(e, t) {
        return ue.nodeName(e, "table") && ue.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function m(e) {
        return e.type = (null !== ue.find.attr(e, "type")) + "/" + e.type, e
    }

    function g(e) {
        var t = it.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function v(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) ue._data(n, "globalEval", !t || ue._data(t[r], "globalEval"))
    }

    function y(e, t) {
        if (1 === t.nodeType && ue.hasData(e)) {
            var n, r, i, o = ue._data(e),
                a = ue._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) ue.event.add(t, n, s[n][r])
            }
            a.data && (a.data = ue.extend({}, a.data))
        }
    }

    function b(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ue.support.noCloneEvent && t[ue.expando]) {
                i = ue._data(t);
                for (r in i.events) ue.removeEvent(t, r, i.handle);
                t.removeAttribute(ue.expando)
            }
            "script" === n && t.text !== e.text ? (m(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ue.support.html5Clone && e.innerHTML && !ue.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function x(e, n) {
        var r, i, o = 0,
            a = typeof e.getElementsByTagName !== V ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== V ? e.querySelectorAll(n || "*") : t;
        if (!a)
            for (a = [], r = e.childNodes || e; null != (i = r[o]); o++) !n || ue.nodeName(i, n) ? a.push(i) : ue.merge(a, x(i, n));
        return n === t || n && ue.nodeName(e, n) ? ue.merge([e], a) : a
    }

    function w(e) {
        tt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function C(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Tt.length; i--;)
            if (t = Tt[i] + n, t in e) return t;
        return r
    }

    function k(e, t) {
        return e = t || e, "none" === ue.css(e, "display") || !ue.contains(e.ownerDocument, e)
    }

    function T(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = ue._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && k(r) && (o[a] = ue._data(r, "olddisplay", j(r.nodeName)))) : o[a] || (i = k(r), (n && "none" !== n || !i) && ue._data(r, "olddisplay", i ? n : ue.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function S(e, t, n) {
        var r = vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function E(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ue.css(e, n + kt[o], !0, i)), r ? ("content" === n && (a -= ue.css(e, "padding" + kt[o], !0, i)), "margin" !== n && (a -= ue.css(e, "border" + kt[o] + "Width", !0, i))) : (a += ue.css(e, "padding" + kt[o], !0, i), "padding" !== n && (a += ue.css(e, "border" + kt[o] + "Width", !0, i)));
        return a
    }

    function N(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = ut(e),
            a = ue.support.boxSizing && "border-box" === ue.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = dt(e, t, o), (0 > i || null == i) && (i = e.style[t]), yt.test(i)) return i;
            r = a && (ue.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + E(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function j(e) {
        var t = G,
            n = xt[e];
        return n || (n = O(e, t), "none" !== n && n || (ct = (ct || ue("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (ct[0].contentWindow || ct[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = O(e, t), ct.detach()), xt[e] = n), n
    }

    function O(e, t) {
        var n = ue(t.createElement(e)).appendTo(t.body),
            r = ue.css(n[0], "display");
        return n.remove(), r
    }

    function A(e, t, n, r) {
        var i;
        if (ue.isArray(t)) ue.each(t, function(t, i) {
            n || Et.test(e) ? r(e, i) : A(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== ue.type(t)) r(e, t);
        else
            for (i in t) A(e + "[" + i + "]", t[i], n, r)
    }

    function L(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(fe) || [];
            if (ue.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function D(e, n, r, i) {
        function o(l) {
            var c;
            return a[l] = !0, ue.each(e[l] || [], function(e, l) {
                var u = l(n, r, i);
                return "string" != typeof u || s || a[u] ? s ? !(c = u) : t : (n.dataTypes.unshift(u), o(u), !1)
            }), c
        }
        var a = {},
            s = e === qt;
        return o(n.dataTypes[0]) || !a["*"] && o("*")
    }

    function M(e, n) {
        var r, i, o = ue.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && ue.extend(!0, e, r), e
    }

    function $(e, n, r) {
        for (var i, o, a, s, l = e.contents, c = e.dataTypes;
            "*" === c[0];) c.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in l)
                if (l[s] && l[s].test(o)) {
                    c.unshift(s);
                    break
                }
        if (c[0] in r) a = c[0];
        else {
            for (s in r) {
                if (!c[0] || e.converters[s + " " + c[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== c[0] && c.unshift(a), r[a]) : t
    }

    function _(e, t, n, r) {
        var i, o, a, s, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (o = u.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = c[l + " " + o] || c["* " + o], !a)
                for (i in c)
                    if (s = i.split(" "), s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                        a === !0 ? a = c[i] : c[i] !== !0 && (o = s[0], u.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function I() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function H() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function P() {
        return setTimeout(function() {
            Zt = t
        }), Zt = ue.now()
    }

    function F(e, t, n) {
        for (var r, i = (on[t] || []).concat(on["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function z(e, t, n) {
        var r, i, o = 0,
            a = rn.length,
            s = ue.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) return !1;
                for (var t = Zt || P(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(o);
                return s.notifyWith(e, [c, o, n]), 1 > o && l ? n : (s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: ue.extend({}, t),
                opts: ue.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Zt || P(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = ue.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? c.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) c.tweens[n].run(1);
                    return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (R(u, c.opts.specialEasing); a > o; o++)
            if (r = rn[o].call(c, e, u, c.opts)) return r;
        return ue.map(u, F, c), ue.isFunction(c.opts.start) && c.opts.start.call(e, c), ue.fx.timer(ue.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function R(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = ue.camelCase(n), i = t[r], o = e[n], ue.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = ue.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function B(e, t, n) {
        var r, i, o, a, s, l, c = this,
            u = {},
            d = e.style,
            f = e.nodeType && k(e),
            p = ue._data(e, "fxshow");
        n.queue || (s = ue._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, c.always(function() {
            c.always(function() {
                s.unqueued--, ue.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ue.css(e, "display") && "none" === ue.css(e, "float") && (ue.support.inlineBlockNeedsLayout && "inline" !== j(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", ue.support.shrinkWrapBlocks || c.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], en.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
                u[r] = p && p[r] || ue.style(e, r)
            }
        if (!ue.isEmptyObject(u)) {
            p ? "hidden" in p && (f = p.hidden) : p = ue._data(e, "fxshow", {}), o && (p.hidden = !f), f ? ue(e).show() : c.done(function() {
                ue(e).hide()
            }), c.done(function() {
                var t;
                ue._removeData(e, "fxshow");
                for (t in u) ue.style(e, t, u[t])
            });
            for (r in u) a = F(f ? p[r] : 0, r, c), r in p || (p[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function q(e, t, n, r, i) {
        return new q.prototype.init(e, t, n, r, i)
    }

    function W(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = kt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function X(e) {
        return ue.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var U, Y, V = typeof t,
        Q = e.location,
        G = e.document,
        K = G.documentElement,
        Z = e.jQuery,
        J = e.$,
        ee = {},
        te = [],
        ne = "1.10.1",
        re = te.concat,
        ie = te.push,
        oe = te.slice,
        ae = te.indexOf,
        se = ee.toString,
        le = ee.hasOwnProperty,
        ce = ne.trim,
        ue = function(e, t) {
            return new ue.fn.init(e, t, Y)
        },
        de = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        fe = /\S+/g,
        pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        he = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        me = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ge = /^[\],:{}\s]*$/,
        ve = /(?:^|:|,)(?:\s*\[)+/g,
        ye = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        be = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        xe = /^-ms-/,
        we = /-([\da-z])/gi,
        Ce = function(e, t) {
            return t.toUpperCase()
        },
        ke = function(e) {
            (G.addEventListener || "load" === e.type || "complete" === G.readyState) && (Te(), ue.ready())
        },
        Te = function() {
            G.addEventListener ? (G.removeEventListener("DOMContentLoaded", ke, !1), e.removeEventListener("load", ke, !1)) : (G.detachEvent("onreadystatechange", ke), e.detachEvent("onload", ke))
        };
    ue.fn = ue.prototype = {
            jquery: ne,
            constructor: ue,
            init: function(e, n, r) {
                var i, o;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : he.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                    if (i[1]) {
                        if (n = n instanceof ue ? n[0] : n, ue.merge(this, ue.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : G, !0)), me.test(i[1]) && ue.isPlainObject(n))
                            for (i in n) ue.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                        return this
                    }
                    if (o = G.getElementById(i[2]), o && o.parentNode) {
                        if (o.id !== i[2]) return r.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = G, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ue.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ue.makeArray(e, this))
            },
            selector: "",
            length: 0,
            toArray: function() {
                return oe.call(this)
            },
            get: function(e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            },
            pushStack: function(e) {
                var t = ue.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return ue.each(this, e, t)
            },
            ready: function(e) {
                return ue.ready.promise().done(e), this
            },
            slice: function() {
                return this.pushStack(oe.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            map: function(e) {
                return this.pushStack(ue.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: ie,
            sort: [].sort,
            splice: [].splice
        }, ue.fn.init.prototype = ue.fn, ue.extend = ue.fn.extend = function() {
            var e, n, r, i, o, a, s = arguments[0] || {},
                l = 1,
                c = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[1] || {}, l = 2), "object" == typeof s || ue.isFunction(s) || (s = {}), c === l && (s = this, --l); c > l; l++)
                if (null != (o = arguments[l]))
                    for (i in o) e = s[i], r = o[i], s !== r && (u && r && (ue.isPlainObject(r) || (n = ue.isArray(r))) ? (n ? (n = !1, a = e && ue.isArray(e) ? e : []) : a = e && ue.isPlainObject(e) ? e : {}, s[i] = ue.extend(u, a, r)) : r !== t && (s[i] = r));
            return s
        }, ue.extend({
            expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
            noConflict: function(t) {
                return e.$ === ue && (e.$ = J), t && e.jQuery === ue && (e.jQuery = Z), ue
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? ue.readyWait++ : ue.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? !--ue.readyWait : !ue.isReady) {
                    if (!G.body) return setTimeout(ue.ready);
                    ue.isReady = !0, e !== !0 && --ue.readyWait > 0 || (U.resolveWith(G, [ue]), ue.fn.trigger && ue(G).trigger("ready").off("ready"))
                }
            },
            isFunction: function(e) {
                return "function" === ue.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === ue.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[se.call(e)] || "object" : typeof e
            },
            isPlainObject: function(e) {
                var n;
                if (!e || "object" !== ue.type(e) || e.nodeType || ue.isWindow(e)) return !1;
                try {
                    if (e.constructor && !le.call(e, "constructor") && !le.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (r) {
                    return !1
                }
                if (ue.support.ownLast)
                    for (n in e) return le.call(e, n);
                for (n in e);
                return n === t || le.call(e, n)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            error: function(e) {
                throw Error(e)
            },
            parseHTML: function(e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || G;
                var r = me.exec(e),
                    i = !n && [];
                return r ? [t.createElement(r[1])] : (r = ue.buildFragment([e], t, i), i && ue(i).remove(), ue.merge([], r.childNodes))
            },
            parseJSON: function(n) {
                return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = ue.trim(n), n && ge.test(n.replace(ye, "@").replace(be, "]").replace(ve, ""))) ? Function("return " + n)() : (ue.error("Invalid JSON: " + n), t)
            },
            parseXML: function(n) {
                var r, i;
                if (!n || "string" != typeof n) return null;
                try {
                    e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                } catch (o) {
                    r = t
                }
                return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ue.error("Invalid XML: " + n), r
            },
            noop: function() {},
            globalEval: function(t) {
                t && ue.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(xe, "ms-").replace(we, Ce)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, r) {
                var i, o = 0,
                    a = e.length,
                    s = n(e);
                if (r) {
                    if (s)
                        for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                    else
                        for (o in e)
                            if (i = t.apply(e[o], r), i === !1) break
                } else if (s)
                    for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.call(e[o], o, e[o]), i === !1) break; return e
            },
            trim: ce && !ce.call("\ufeff ") ? function(e) {
                return null == e ? "" : ce.call(e)
            } : function(e) {
                return null == e ? "" : (e + "").replace(pe, "")
            },
            makeArray: function(e, t) {
                var r = t || [];
                return null != e && (n(Object(e)) ? ue.merge(r, "string" == typeof e ? [e] : e) : ie.call(r, e)), r
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (ae) return ae.call(t, e, n);
                    for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, n) {
                var r = n.length,
                    i = e.length,
                    o = 0;
                if ("number" == typeof r)
                    for (; r > o; o++) e[i++] = n[o];
                else
                    for (; n[o] !== t;) e[i++] = n[o++];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                var r, i = [],
                    o = 0,
                    a = e.length;
                for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
                return i
            },
            map: function(e, t, r) {
                var i, o = 0,
                    a = e.length,
                    s = n(e),
                    l = [];
                if (s)
                    for (; a > o; o++) i = t(e[o], o, r), null != i && (l[l.length] = i);
                else
                    for (o in e) i = t(e[o], o, r), null != i && (l[l.length] = i);
                return re.apply([], l)
            },
            guid: 1,
            proxy: function(e, n) {
                var r, i, o;
                return "string" == typeof n && (o = e[n], n = e, e = o), ue.isFunction(e) ? (r = oe.call(arguments, 2), i = function() {
                    return e.apply(n || this, r.concat(oe.call(arguments)))
                }, i.guid = e.guid = e.guid || ue.guid++, i) : t
            },
            access: function(e, n, r, i, o, a, s) {
                var l = 0,
                    c = e.length,
                    u = null == r;
                if ("object" === ue.type(r)) {
                    o = !0;
                    for (l in r) ue.access(e, n, l, r[l], !0, a, s)
                } else if (i !== t && (o = !0, ue.isFunction(i) || (s = !0), u && (s ? (n.call(e, i), n = null) : (u = n, n = function(e, t, n) {
                        return u.call(ue(e), n)
                    })), n))
                    for (; c > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
                return o ? e : u ? n.call(e) : c ? n(e[0], r) : a
            },
            now: function() {
                return (new Date).getTime()
            },
            swap: function(e, t, n, r) {
                var i, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                i = n.apply(e, r || []);
                for (o in t) e.style[o] = a[o];
                return i
            }
        }), ue.ready.promise = function(t) {
            if (!U)
                if (U = ue.Deferred(), "complete" === G.readyState) setTimeout(ue.ready);
                else if (G.addEventListener) G.addEventListener("DOMContentLoaded", ke, !1), e.addEventListener("load", ke, !1);
            else {
                G.attachEvent("onreadystatechange", ke), e.attachEvent("onload", ke);
                var n = !1;
                try {
                    n = null == e.frameElement && G.documentElement
                } catch (r) {}
                n && n.doScroll && function i() {
                    if (!ue.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(i, 50)
                        }
                        Te(), ue.ready()
                    }
                }()
            }
            return U.promise(t)
        }, ue.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            ee["[object " + t + "]"] = t.toLowerCase()
        }), Y = ue(G),
        function(e, t) {
            function n(e, t, n, r) {
                var i, o, a, s, l, c, u, d, f, p;
                if ((t ? t.ownerDocument || t : W) !== I && _(t), t = t || I, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (s = t.nodeType) && 9 !== s) return [];
                if (P && !r) {
                    if (i = ke.exec(e))
                        if (a = i[1]) {
                            if (9 === s) {
                                if (o = t.getElementById(a), !o || !o.parentNode) return n;
                                if (o.id === a) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && B(t, o) && o.id === a) return n.push(o), n
                        } else {
                            if (i[2]) return ie.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = i[3]) && N.getElementsByClassName && t.getElementsByClassName) return ie.apply(n, t.getElementsByClassName(a)), n
                        }
                    if (N.qsa && (!F || !F.test(e))) {
                        if (d = u = q, f = t, p = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (c = m(e), (u = t.getAttribute("id")) ? d = u.replace(Ee, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = c.length; l--;) c[l] = d + g(c[l]);
                            f = ve.test(e) && t.parentNode || t, p = c.join(",")
                        }
                        if (p) try {
                            return ie.apply(n, f.querySelectorAll(p)), n
                        } catch (h) {} finally {
                            u || t.removeAttribute("id")
                        }
                    }
                }
                return T(e.replace(he, "$1"), t, n, r)
            }

            function r(e) {
                return Ce.test(e + "")
            }

            function i() {
                function e(n, r) {
                    return t.push(n += " ") > O.cacheLength && delete e[t.shift()], e[n] = r
                }
                var t = [];
                return e
            }

            function o(e) {
                return e[q] = !0, e
            }

            function a(e) {
                var t = I.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function s(e, t, n) {
                e = e.split("|");
                for (var r, i = e.length, o = n ? null : t; i--;)(r = O.attrHandle[e[i]]) && r !== t || (O.attrHandle[e[i]] = o)
            }

            function l(e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : e[t] === !0 ? t.toLowerCase() : null
            }

            function c(e, t) {
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }

            function u(e) {
                return "input" === e.nodeName.toLowerCase() ? e.defaultValue : t
            }

            function d(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function f(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function p(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function h(e) {
                return o(function(t) {
                    return t = +t, o(function(n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function m(e, t) {
                var r, i, o, a, s, l, c, u = V[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (s = e, l = [], c = O.preFilter; s;) {
                    (!r || (i = me.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = ge.exec(s)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(he, " ")
                    }), s = s.slice(r.length));
                    for (a in O.filter) !(i = we[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(), o.push({
                        value: r,
                        type: a,
                        matches: i
                    }), s = s.slice(r.length));
                    if (!r) break
                }
                return t ? s.length : s ? n.error(e) : V(e, l).slice(0)
            }

            function g(e) {
                for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                return r
            }

            function v(e, t, n) {
                var r = t.dir,
                    i = n && "parentNode" === r,
                    o = U++;
                return t.first ? function(t, n, o) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) return e(t, n, o)
                } : function(t, n, a) {
                    var s, l, c, u = X + " " + o;
                    if (a) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || i)
                                if (c = t[q] || (t[q] = {}), (l = c[r]) && l[0] === u) {
                                    if ((s = l[1]) === !0 || s === j) return s === !0
                                } else if (l = c[r] = [u], l[1] = e(t, n, a) || j, l[1] === !0) return !0
                }
            }

            function y(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function b(e, t, n, r, i) {
                for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), c && t.push(s));
                return a
            }

            function x(e, t, n, r, i, a) {
                return r && !r[q] && (r = x(r)), i && !i[q] && (i = x(i, a)), o(function(o, a, s, l) {
                    var c, u, d, f = [],
                        p = [],
                        h = a.length,
                        m = o || k(t || "*", s.nodeType ? [s] : s, []),
                        g = !e || !o && t ? m : b(m, f, e, s, l),
                        v = n ? i || (o ? e : h || r) ? [] : a : g;
                    if (n && n(g, v, s, l), r)
                        for (c = b(v, p), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (v[p[u]] = !(g[p[u]] = d));
                    if (o) {
                        if (i || e) {
                            if (i) {
                                for (c = [], u = v.length; u--;)(d = v[u]) && c.push(g[u] = d);
                                i(null, v = [], c, l)
                            }
                            for (u = v.length; u--;)(d = v[u]) && (c = i ? ae.call(o, d) : f[u]) > -1 && (o[c] = !(a[c] = d))
                        }
                    } else v = b(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, l) : ie.apply(a, v)
                })
            }

            function w(e) {
                for (var t, n, r, i = e.length, o = O.relative[e[0].type], a = o || O.relative[" "], s = o ? 1 : 0, l = v(function(e) {
                        return e === t
                    }, a, !0), c = v(function(e) {
                        return ae.call(t, e) > -1
                    }, a, !0), u = [function(e, n, r) {
                        return !o && (r || n !== M) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                    }]; i > s; s++)
                    if (n = O.relative[e[s].type]) u = [v(y(u), n)];
                    else {
                        if (n = O.filter[e[s].type].apply(null, e[s].matches), n[q]) {
                            for (r = ++s; i > r && !O.relative[e[r].type]; r++);
                            return x(s > 1 && y(u), s > 1 && g(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(he, "$1"), n, r > s && w(e.slice(s, r)), i > r && w(e = e.slice(r)), i > r && g(e))
                        }
                        u.push(n)
                    }
                return y(u)
            }

            function C(e, t) {
                var r = 0,
                    i = t.length > 0,
                    a = e.length > 0,
                    s = function(o, s, l, c, u) {
                        var d, f, p, h = [],
                            m = 0,
                            g = "0",
                            v = o && [],
                            y = null != u,
                            x = M,
                            w = o || a && O.find.TAG("*", u && s.parentNode || s),
                            C = X += null == x ? 1 : Math.random() || .1;
                        for (y && (M = s !== I && s, j = r); null != (d = w[g]); g++) {
                            if (a && d) {
                                for (f = 0; p = e[f++];)
                                    if (p(d, s, l)) {
                                        c.push(d);
                                        break
                                    }
                                y && (X = C, j = ++r)
                            }
                            i && ((d = !p && d) && m--, o && v.push(d))
                        }
                        if (m += g, i && g !== m) {
                            for (f = 0; p = t[f++];) p(v, h, s, l);
                            if (o) {
                                if (m > 0)
                                    for (; g--;) v[g] || h[g] || (h[g] = ne.call(c));
                                h = b(h)
                            }
                            ie.apply(c, h), y && !o && h.length > 0 && m + t.length > 1 && n.uniqueSort(c)
                        }
                        return y && (X = C, M = x), v
                    };
                return i ? o(s) : s
            }

            function k(e, t, r) {
                for (var i = 0, o = t.length; o > i; i++) n(e, t[i], r);
                return r
            }

            function T(e, t, n, r) {
                var i, o, a, s, l, c = m(e);
                if (!r && 1 === c.length) {
                    if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && N.getById && 9 === t.nodeType && P && O.relative[o[1].type]) {
                        if (t = (O.find.ID(a.matches[0].replace(Ne, je), t) || [])[0], !t) return n;
                        e = e.slice(o.shift().value.length)
                    }
                    for (i = we.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !O.relative[s = a.type]);)
                        if ((l = O.find[s]) && (r = l(a.matches[0].replace(Ne, je), ve.test(o[0].type) && t.parentNode || t))) {
                            if (o.splice(i, 1), e = r.length && g(o), !e) return ie.apply(n, r), n;
                            break
                        }
                }
                return D(e, c)(r, t, !P, n, ve.test(e)), n
            }

            function S() {}
            var E, N, j, O, A, L, D, M, $, _, I, H, P, F, z, R, B, q = "sizzle" + -new Date,
                W = e.document,
                X = 0,
                U = 0,
                Y = i(),
                V = i(),
                Q = i(),
                G = !1,
                K = function() {
                    return 0
                },
                Z = typeof t,
                J = 1 << 31,
                ee = {}.hasOwnProperty,
                te = [],
                ne = te.pop,
                re = te.push,
                ie = te.push,
                oe = te.slice,
                ae = te.indexOf || function(e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                se = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                le = "[\\x20\\t\\r\\n\\f]",
                ce = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                de = ce.replace("w", "w#"),
                fe = "\\[" + le + "*(" + ce + ")" + le + "*(?:([*^$|!~]?=)" + le + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + de + ")|)|)" + le + "*\\]",
                pe = ":(" + ce + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + fe.replace(3, 8) + ")*)|.*)\\)|)",
                he = RegExp("^" + le + "+|((?:^|[^\\\\])(?:\\\\.)*)" + le + "+$", "g"),
                me = RegExp("^" + le + "*," + le + "*"),
                ge = RegExp("^" + le + "*([>+~]|" + le + ")" + le + "*"),
                ve = RegExp(le + "*[+~]"),
                ye = RegExp("=" + le + "*([^\\]'\"]*)" + le + "*\\]", "g"),
                be = RegExp(pe),
                xe = RegExp("^" + de + "$"),
                we = {
                    ID: RegExp("^#(" + ce + ")"),
                    CLASS: RegExp("^\\.(" + ce + ")"),
                    TAG: RegExp("^(" + ce.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + fe),
                    PSEUDO: RegExp("^" + pe),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + le + "*(even|odd|(([+-]|)(\\d*)n|)" + le + "*(?:([+-]|)" + le + "*(\\d+)|))" + le + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + se + ")$", "i"),
                    needsContext: RegExp("^" + le + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + le + "*((?:-\\d)?\\d*)" + le + "*\\)|)(?=[^-]|$)", "i")
                },
                Ce = /^[^{]+\{\s*\[native \w/,
                ke = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Te = /^(?:input|select|textarea|button)$/i,
                Se = /^h\d$/i,
                Ee = /'|\\/g,
                Ne = RegExp("\\\\([\\da-f]{1,6}" + le + "?|(" + le + ")|.)", "ig"),
                je = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
                };
            try {
                ie.apply(te = oe.call(W.childNodes), W.childNodes), te[W.childNodes.length].nodeType
            } catch (Oe) {
                ie = {
                    apply: te.length ? function(e, t) {
                        re.apply(e, oe.call(t))
                    } : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }
            L = n.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, N = n.support = {}, _ = n.setDocument = function(e) {
                var n = e ? e.ownerDocument || e : W,
                    i = n.parentWindow;
                return n !== I && 9 === n.nodeType && n.documentElement ? (I = n, H = n.documentElement, P = !L(n), i && i.frameElement && i.attachEvent("onbeforeunload", function() {
                    _()
                }), N.attributes = a(function(e) {
                    return e.innerHTML = "<a href='#'></a>", s("type|href|height|width", c, "#" === e.firstChild.getAttribute("href")), s(se, l, null == e.getAttribute("disabled")), e.className = "i", !e.getAttribute("className")
                }), N.input = a(function(e) {
                    return e.innerHTML = "<input>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }), s("value", u, N.attributes && N.input), N.getElementsByTagName = a(function(e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), N.getElementsByClassName = a(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), N.getById = a(function(e) {
                    return H.appendChild(e).id = q, !n.getElementsByName || !n.getElementsByName(q).length
                }), N.getById ? (O.find.ID = function(e, t) {
                    if (typeof t.getElementById !== Z && P) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, O.filter.ID = function(e) {
                    var t = e.replace(Ne, je);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete O.find.ID, O.filter.ID = function(e) {
                    var t = e.replace(Ne, je);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== Z && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), O.find.TAG = N.getElementsByTagName ? function(e, n) {
                    return typeof n.getElementsByTagName !== Z ? n.getElementsByTagName(e) : t
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, O.find.CLASS = N.getElementsByClassName && function(e, n) {
                    return typeof n.getElementsByClassName !== Z && P ? n.getElementsByClassName(e) : t
                }, z = [], F = [], (N.qsa = r(n.querySelectorAll)) && (a(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || F.push("\\[" + le + "*(?:value|" + se + ")"), e.querySelectorAll(":checked").length || F.push(":checked")
                }), a(function(e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && F.push("[*^$]=" + le + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
                })), (N.matchesSelector = r(R = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && a(function(e) {
                    N.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), z.push("!=", pe)
                }), F = F.length && RegExp(F.join("|")), z = z.length && RegExp(z.join("|")), B = r(H.contains) || H.compareDocumentPosition ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, N.sortDetached = a(function(e) {
                    return 1 & e.compareDocumentPosition(n.createElement("div"))
                }), K = H.compareDocumentPosition ? function(e, t) {
                    if (e === t) return G = !0, 0;
                    var r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                    return r ? 1 & r || !N.sortDetached && t.compareDocumentPosition(e) === r ? e === n || B(W, e) ? -1 : t === n || B(W, t) ? 1 : $ ? ae.call($, e) - ae.call($, t) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function(e, t) {
                    var r, i = 0,
                        o = e.parentNode,
                        a = t.parentNode,
                        s = [e],
                        l = [t];
                    if (e === t) return G = !0, 0;
                    if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : $ ? ae.call($, e) - ae.call($, t) : 0;
                    if (o === a) return d(e, t);
                    for (r = e; r = r.parentNode;) s.unshift(r);
                    for (r = t; r = r.parentNode;) l.unshift(r);
                    for (; s[i] === l[i];) i++;
                    return i ? d(s[i], l[i]) : s[i] === W ? -1 : l[i] === W ? 1 : 0
                }, n) : I
            }, n.matches = function(e, t) {
                return n(e, null, null, t)
            }, n.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== I && _(e), t = t.replace(ye, "='$1']"), !(!N.matchesSelector || !P || z && z.test(t) || F && F.test(t))) try {
                    var r = R.call(e, t);
                    if (r || N.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (i) {}
                return n(t, I, null, [e]).length > 0
            }, n.contains = function(e, t) {
                return (e.ownerDocument || e) !== I && _(e), B(e, t)
            }, n.attr = function(e, n) {
                (e.ownerDocument || e) !== I && _(e);
                var r = O.attrHandle[n.toLowerCase()],
                    i = r && ee.call(O.attrHandle, n.toLowerCase()) ? r(e, n, !P) : t;
                return i === t ? N.attributes || !P ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null : i
            }, n.error = function(e) {
                throw Error("Syntax error, unrecognized expression: " + e)
            }, n.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (G = !N.detectDuplicates, $ = !N.sortStable && e.slice(0), e.sort(K), G) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return e
            }, A = n.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += A(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r]; r++) n += A(t);
                return n
            }, O = n.selectors = {
                cacheLength: 50,
                createPseudo: o,
                match: we,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(Ne, je), e[3] = (e[4] || e[5] || "").replace(Ne, je), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var n, r = !e[5] && e[2];
                        return we.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && be.test(r) && (n = m(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)),
                            e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Ne, je).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = Y[e + " "];
                        return t || (t = RegExp("(^|" + le + ")" + e + "(" + le + "|$)")) && Y(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Z && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, r) {
                        return function(i) {
                            var o = n.attr(i, e);
                            return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.slice(-r.length) === r : "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t && (o === r || o.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, u, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !l && !s;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (d = t; d = d[m];)
                                            if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                    for (u = g[q] || (g[q] = {}), c = u[e] || [], p = c[0] === X && c[1], f = c[0] === X && c[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();)
                                        if (1 === d.nodeType && ++f && d === t) {
                                            u[e] = [X, p, f];
                                            break
                                        }
                                } else if (y && (c = (t[q] || (t[q] = {}))[e]) && c[0] === X) f = c[1];
                                else
                                    for (;
                                        (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[q] || (d[q] = {}))[e] = [X, f]), d !== t)););
                                return f -= i, f === r || 0 === f % r && f / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var r, i = O.pseudos[e] || O.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                        return i[q] ? i(t) : i.length > 1 ? (r = [e, e, "", t], O.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function(e, n) {
                            for (var r, o = i(e, t), a = o.length; a--;) r = ae.call(e, o[a]), e[r] = !(n[r] = o[a])
                        }) : function(e) {
                            return i(e, 0, r)
                        }) : i
                    }
                },
                pseudos: {
                    not: o(function(e) {
                        var t = [],
                            n = [],
                            r = D(e.replace(he, "$1"));
                        return r[q] ? o(function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), !n.pop()
                        }
                    }),
                    has: o(function(e) {
                        return function(t) {
                            return n(e, t).length > 0
                        }
                    }),
                    contains: o(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || A(t)).indexOf(e) > -1
                        }
                    }),
                    lang: o(function(e) {
                        return xe.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(Ne, je).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === H
                    },
                    focus: function(e) {
                        return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !O.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Se.test(e.nodeName)
                    },
                    input: function(e) {
                        return Te.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: h(function() {
                        return [0]
                    }),
                    last: h(function(e, t) {
                        return [t - 1]
                    }),
                    eq: h(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: h(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: h(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: h(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: h(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; t > ++r;) e.push(r);
                        return e
                    })
                }
            };
            for (E in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) O.pseudos[E] = f(E);
            for (E in {
                    submit: !0,
                    reset: !0
                }) O.pseudos[E] = p(E);
            D = n.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = Q[e + " "];
                if (!o) {
                    for (t || (t = m(e)), n = t.length; n--;) o = w(t[n]), o[q] ? r.push(o) : i.push(o);
                    o = Q(e, C(i, r))
                }
                return o
            }, O.pseudos.nth = O.pseudos.eq, S.prototype = O.filters = O.pseudos, O.setFilters = new S, N.sortStable = q.split("").sort(K).join("") === q, _(), [0, 0].sort(K), N.detectDuplicates = G, ue.find = n, ue.expr = n.selectors, ue.expr[":"] = ue.expr.pseudos, ue.unique = n.uniqueSort, ue.text = n.getText, ue.isXMLDoc = n.isXML, ue.contains = n.contains
        }(e);
    var Se = {};
    ue.Callbacks = function(e) {
        e = "string" == typeof e ? Se[e] || r(e) : ue.extend({}, e);
        var n, i, o, a, s, l, c = [],
            u = !e.once && [],
            d = function(t) {
                for (i = e.memory && t, o = !0, s = l || 0, l = 0, a = c.length, n = !0; c && a > s; s++)
                    if (c[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        i = !1;
                        break
                    }
                n = !1, c && (u ? u.length && d(u.shift()) : i ? c = [] : f.disable())
            },
            f = {
                add: function() {
                    if (c) {
                        var t = c.length;
                        ! function r(t) {
                            ue.each(t, function(t, n) {
                                var i = ue.type(n);
                                "function" === i ? e.unique && f.has(n) || c.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments), n ? a = c.length : i && (l = t, d(i))
                    }
                    return this
                },
                remove: function() {
                    return c && ue.each(arguments, function(e, t) {
                        for (var r;
                            (r = ue.inArray(t, c, r)) > -1;) c.splice(r, 1), n && (a >= r && a--, s >= r && s--)
                    }), this
                },
                has: function(e) {
                    return e ? ue.inArray(e, c) > -1 : !(!c || !c.length)
                },
                empty: function() {
                    return c = [], a = 0, this
                },
                disable: function() {
                    return c = u = i = t, this
                },
                disabled: function() {
                    return !c
                },
                lock: function() {
                    return u = t, i || f.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], !c || o && !u || (n ? u.push(t) : d(t)), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, ue.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", ue.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ue.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ue.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return ue.Deferred(function(n) {
                            ue.each(t, function(t, o) {
                                var a = o[0],
                                    s = ue.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && ue.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ue.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, ue.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = oe.call(arguments),
                a = o.length,
                s = 1 !== a || e && ue.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : ue.Deferred(),
                c = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? oe.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = Array(a), n = Array(a), r = Array(a); a > i; i++) o[i] && ue.isFunction(o[i].promise) ? o[i].promise().done(c(i, r, o)).fail(l.reject).progress(c(i, n, t)) : --s;
            return s || l.resolveWith(r, o), l.promise()
        }
    }), ue.support = function(t) {
        var n, r, i, o, a, s, l, c, u, d = G.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = " <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
        o = G.createElement("select"), s = o.appendChild(G.createElement("option")), i = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!i.value, t.optSelected = s.selected, t.enctype = !!G.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled;
        try {
            delete d.test
        } catch (f) {
            t.deleteExpando = !1
        }
        i = G.createElement("input"), i.setAttribute("value", ""), t.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), a = G.createDocumentFragment(), a.appendChild(i), t.appendChecked = i.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (u in {
                submit: !0,
                change: !0,
                focusin: !0
            }) d.setAttribute(l = "on" + u, "t"), t[u + "Bubbles"] = l in e || d.attributes[l].expando === !1;
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (u in ue(t)) break;
        return t.ownLast = "0" !== u, ue(function() {
            var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = G.getElementsByTagName("body")[0];
            a && (n = G.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = d.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === i[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ue.swap(a, null != a.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, r = d.appendChild(G.createElement("div")), r.style.cssText = d.style.cssText = o, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== V && (d.innerHTML = "", d.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = d = i = r = null)
        }), n = o = a = s = r = i = null, t
    }({});
    var Ee = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        Ne = /([A-Z])/g;
    ue.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? ue.cache[e[ue.expando]] : e[ue.expando], !!e && !s(e)
        },
        data: function(e, t, n) {
            return i(e, t, n)
        },
        removeData: function(e, t) {
            return o(e, t)
        },
        _data: function(e, t, n) {
            return i(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return o(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && ue.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), ue.fn.extend({
        data: function(e, n) {
            var r, i, o = null,
                s = 0,
                l = this[0];
            if (e === t) {
                if (this.length && (o = ue.data(l), 1 === l.nodeType && !ue._data(l, "parsedAttrs"))) {
                    for (r = l.attributes; r.length > s; s++) i = r[s].name, 0 === i.indexOf("data-") && (i = ue.camelCase(i.slice(5)), a(l, i, o[i]));
                    ue._data(l, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                ue.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                ue.data(this, e, n)
            }) : l ? a(l, e, ue.data(l, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                ue.removeData(this, e)
            })
        }
    }), ue.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = ue._data(e, n), r && (!i || ue.isArray(r) ? i = ue._data(e, n, ue.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ue.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ue._queueHooks(e, t),
                a = function() {
                    ue.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ue._data(e, n) || ue._data(e, n, {
                empty: ue.Callbacks("once memory").add(function() {
                    ue._removeData(e, t + "queue"), ue._removeData(e, n)
                })
            })
        }
    }), ue.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? ue.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = ue.queue(this, e, n);
                ue._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ue.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ue.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = ue.fx ? ue.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                o = ue.Deferred(),
                a = this,
                s = this.length,
                l = function() {
                    --i || o.resolveWith(a, [a])
                };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = ue._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n)
        }
    });
    var je, Oe, Ae = /[\t\r\n\f]/g,
        Le = /\r/g,
        De = /^(?:input|select|textarea|button|object)$/i,
        Me = /^(?:a|area)$/i,
        $e = /^(?:checked|selected)$/i,
        _e = ue.support.getSetAttribute,
        Ie = ue.support.input;
    ue.fn.extend({
        attr: function(e, t) {
            return ue.access(this, ue.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ue.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return ue.access(this, ue.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = ue.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = "string" == typeof e && e;
            if (ue.isFunction(e)) return this.each(function(t) {
                ue(this).addClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(fe) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ae, " ") : " ")) {
                        for (o = 0; i = t[o++];) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = ue.trim(r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (ue.isFunction(e)) return this.each(function(t) {
                ue(this).removeClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(fe) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ae, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        n.className = e ? ue.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "boolean" == typeof t;
            return ue.isFunction(e) ? this.each(function(n) {
                ue(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var i, o = 0, a = ue(this), s = t, l = e.match(fe) || []; i = l[o++];) s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i);
                else(n === V || "boolean" === n) && (this.className && ue._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ue._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ae, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0];
            return arguments.length ? (i = ue.isFunction(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, ue(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ue.isArray(o) && (o = ue.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), r = ue.valHooks[this.type] || ue.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
            })) : o ? (r = ue.valHooks[o.type] || ue.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(Le, "") : null == n ? "" : n)) : void 0
        }
    }), ue.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ue.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++)
                        if (n = r[l], !(!n.selected && l !== i || (ue.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ue.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ue(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = ue.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = ue.inArray(ue(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function(e, n, r) {
            var i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === V ? ue.prop(e, n, r) : (1 === a && ue.isXMLDoc(e) || (n = n.toLowerCase(), i = ue.attrHooks[n] || (ue.expr.match.bool.test(n) ? Oe : je)), r === t ? i && "get" in i && null !== (o = i.get(e, n)) ? o : (o = ue.find.attr(e, n), null == o ? t : o) : null !== r ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : (ue.removeAttr(e, n), t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(fe);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = ue.propFix[n] || n, ue.expr.match.bool.test(n) ? Ie && _e || !$e.test(n) ? e[r] = !1 : e[ue.camelCase("default-" + n)] = e[r] = !1 : ue.attr(e, n, ""), e.removeAttribute(_e ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ue.support.radioValue && "radio" === t && ue.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !ue.isXMLDoc(e), a && (n = ue.propFix[n] || n, o = ue.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ue.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : De.test(e.nodeName) || Me.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), Oe = {
        set: function(e, t, n) {
            return t === !1 ? ue.removeAttr(e, n) : Ie && _e || !$e.test(n) ? e.setAttribute(!_e && ue.propFix[n] || n, n) : e[ue.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, ue.each(ue.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = ue.expr.attrHandle[n] || ue.find.attr;
        ue.expr.attrHandle[n] = Ie && _e || !$e.test(n) ? function(e, n, i) {
            var o = ue.expr.attrHandle[n],
                a = i ? t : (ue.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return ue.expr.attrHandle[n] = o, a
        } : function(e, n, r) {
            return r ? t : e[ue.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), Ie && _e || (ue.attrHooks.value = {
        set: function(e, n, r) {
            return ue.nodeName(e, "input") ? (e.defaultValue = n, t) : je && je.set(e, n, r)
        }
    }), _e || (je = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, ue.expr.attrHandle.id = ue.expr.attrHandle.name = ue.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, ue.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },
        set: je.set
    }, ue.attrHooks.contenteditable = {
        set: function(e, t, n) {
            je.set(e, "" !== t && t, n)
        }
    }, ue.each(["width", "height"], function(e, n) {
        ue.attrHooks[n] = {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        }
    })), ue.support.hrefNormalized || ue.each(["href", "src"], function(e, t) {
        ue.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ue.support.style || (ue.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), ue.support.optSelected || (ue.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), ue.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ue.propFix[this.toLowerCase()] = this
    }), ue.support.enctype || (ue.propFix.enctype = "encoding"), ue.each(["radio", "checkbox"], function() {
        ue.valHooks[this] = {
            set: function(e, n) {
                return ue.isArray(n) ? e.checked = ue.inArray(ue(e).val(), n) >= 0 : t
            }
        }, ue.support.checkOn || (ue.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var He = /^(?:input|select|textarea)$/i,
        Pe = /^key/,
        Fe = /^(?:mouse|contextmenu)|click/,
        ze = /^(?:focusinfocus|focusoutblur)$/,
        Re = /^([^.]*)(?:\.(.+)|)$/;
    ue.event = {
        global: {},
        add: function(e, n, r, i, o) {
            var a, s, l, c, u, d, f, p, h, m, g, v = ue._data(e);
            if (v) {
                for (r.handler && (c = r, r = c.handler, o = c.selector), r.guid || (r.guid = ue.guid++), (s = v.events) || (s = v.events = {}), (d = v.handle) || (d = v.handle = function(e) {
                        return typeof ue === V || e && ue.event.triggered === e.type ? t : ue.event.dispatch.apply(d.elem, arguments)
                    }, d.elem = e), n = (n || "").match(fe) || [""], l = n.length; l--;) a = Re.exec(n[l]) || [], h = g = a[1], m = (a[2] || "").split(".").sort(), h && (u = ue.event.special[h] || {}, h = (o ? u.delegateType : u.bindType) || h, u = ue.event.special[h] || {}, f = ue.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && ue.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                }, c), (p = s[h]) || (p = s[h] = [], p.delegateCount = 0, u.setup && u.setup.call(e, i, m, d) !== !1 || (e.addEventListener ? e.addEventListener(h, d, !1) : e.attachEvent && e.attachEvent("on" + h, d))), u.add && (u.add.call(e, f), f.handler.guid || (f.handler.guid = r.guid)), o ? p.splice(p.delegateCount++, 0, f) : p.push(f), ue.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, c, u, d, f, p, h, m, g = ue.hasData(e) && ue._data(e);
            if (g && (u = g.events)) {
                for (t = (t || "").match(fe) || [""], c = t.length; c--;)
                    if (s = Re.exec(t[c]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = ue.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = u[p] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || ue.removeEvent(e, p, g.handle), delete u[p])
                    } else
                        for (p in u) ue.event.remove(e, p + t[c], n, r, !0);
                ue.isEmptyObject(u) && (delete g.handle, ue._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var a, s, l, c, u, d, f, p = [i || G],
                h = le.call(n, "type") ? n.type : n,
                m = le.call(n, "namespace") ? n.namespace.split(".") : [];
            if (l = d = i = i || G, 3 !== i.nodeType && 8 !== i.nodeType && !ze.test(h + ue.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), s = 0 > h.indexOf(":") && "on" + h, n = n[ue.expando] ? n : new ue.Event(h, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : ue.makeArray(r, [n]), u = ue.event.special[h] || {}, o || !u.trigger || u.trigger.apply(i, r) !== !1)) {
                if (!o && !u.noBubble && !ue.isWindow(i)) {
                    for (c = u.delegateType || h, ze.test(c + h) || (l = l.parentNode); l; l = l.parentNode) p.push(l), d = l;
                    d === (i.ownerDocument || G) && p.push(d.defaultView || d.parentWindow || e)
                }
                for (f = 0;
                    (l = p[f++]) && !n.isPropagationStopped();) n.type = f > 1 ? c : u.bindType || h, a = (ue._data(l, "events") || {})[n.type] && ue._data(l, "handle"), a && a.apply(l, r), a = s && l[s], a && ue.acceptData(l) && a.apply && a.apply(l, r) === !1 && n.preventDefault();
                if (n.type = h, !o && !n.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), r) === !1) && ue.acceptData(i) && s && i[h] && !ue.isWindow(i)) {
                    d = i[s], d && (i[s] = null), ue.event.triggered = h;
                    try {
                        i[h]()
                    } catch (g) {}
                    ue.event.triggered = t, d && (i[s] = d)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = ue.event.fix(e);
            var n, r, i, o, a, s = [],
                l = oe.call(arguments),
                c = (ue._data(this, "events") || {})[e.type] || [],
                u = ue.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (s = ue.event.handlers.call(this, e, c), n = 0;
                    (o = s[n++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, a = 0;
                        (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((ue.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [],
                l = n.delegateCount,
                c = e.target;
            if (l && c.nodeType && (!e.button || "click" !== e.type))
                for (; c != this; c = c.parentNode || this)
                    if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? ue(r, this).index(c) >= 0 : ue.find(r, this, null, [c]).length), o[r] && o.push(i);
                        o.length && s.push({
                            elem: c,
                            handlers: o
                        })
                    }
            return n.length > l && s.push({
                elem: this,
                handlers: n.slice(l)
            }), s
        },
        fix: function(e) {
            if (e[ue.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Fe.test(i) ? this.mouseHooks : Pe.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ue.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || G), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, a = n.button,
                    s = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || G, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== u() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === u() && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ue.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                },
                _default: function(e) {
                    return ue.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = ue.extend(new ue.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? ue.event.trigger(i, null, t) : ue.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ue.removeEvent = G.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === V && (e[r] = null), e.detachEvent(r, n))
    }, ue.Event = function(e, n) {
        return this instanceof ue.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : c) : this.type = e, n && ue.extend(this, n), this.timeStamp = e && e.timeStamp || ue.now(), this[ue.expando] = !0, t) : new ue.Event(e, n)
    }, ue.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = l, this.stopPropagation()
        }
    }, ue.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        ue.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !ue.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ue.support.submitBubbles || (ue.event.special.submit = {
        setup: function() {
            return !ue.nodeName(this, "form") && (ue.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target,
                    r = ue.nodeName(n, "input") || ue.nodeName(n, "button") ? n.form : t;
                r && !ue._data(r, "submitBubbles") && (ue.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), ue._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ue.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return !ue.nodeName(this, "form") && (ue.event.remove(this, "._submit"), t)
        }
    }), ue.support.changeBubbles || (ue.event.special.change = {
        setup: function() {
            return He.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ue.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ue.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ue.event.simulate("change", this, e, !0)
            })), !1) : (ue.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                He.test(t.nodeName) && !ue._data(t, "changeBubbles") && (ue.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ue.event.simulate("change", this.parentNode, e, !0)
                }), ue._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return ue.event.remove(this, "._change"), !He.test(this.nodeName)
        }
    }), ue.support.focusinBubbles || ue.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0,
            r = function(e) {
                ue.event.simulate(t, e.target, ue.event.fix(e), !0)
            };
        ue.event.special[t] = {
            setup: function() {
                0 === n++ && G.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && G.removeEventListener(e, r, !0)
            }
        }
    }), ue.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = c;
            else if (!i) return this;
            return 1 === o && (s = i, i = function(e) {
                return ue().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = ue.guid++)), this.each(function() {
                ue.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ue(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = c), this.each(function() {
                ue.event.remove(this, e, r, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                ue.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? ue.event.trigger(e, n, r, !0) : t
        }
    });
    var Be = /^.[^:#\[\.,]*$/,
        qe = /^(?:parents|prev(?:Until|All))/,
        We = ue.expr.match.needsContext,
        Xe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ue.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(ue(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (ue.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) ue.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? ue.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function(e) {
            var t, n = ue(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (ue.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(f(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(f(this, e || [], !1))
        },
        is: function(e) {
            return !!f(this, "string" == typeof e && We.test(e) ? ue(e) : e || [], !1).length
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = We.test(e) || "string" != typeof e ? ue(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && ue.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? ue.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ue.inArray(this[0], ue(e)) : ue.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? ue(e, t) : ue.makeArray(e && e.nodeType ? [e] : e),
                r = ue.merge(this.get(), n);
            return this.pushStack(ue.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ue.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ue.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ue.dir(e, "parentNode", n)
        },
        next: function(e) {
            return d(e, "nextSibling")
        },
        prev: function(e) {
            return d(e, "previousSibling")
        },
        nextAll: function(e) {
            return ue.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return ue.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ue.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ue.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ue.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ue.sibling(e.firstChild)
        },
        contents: function(e) {
            return ue.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ue.merge([], e.childNodes)
        }
    }, function(e, t) {
        ue.fn[e] = function(n, r) {
            var i = ue.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ue.filter(r, i)), this.length > 1 && (Xe[e] || (i = ue.unique(i)), qe.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), ue.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ue.find.matchesSelector(r, e) ? [r] : [] : ue.find.matches(e, ue.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !ue(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Ue = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ye = / jQuery\d+="(?:null|\d+)"/g,
        Ve = RegExp("<(?:" + Ue + ")[\\s/>]", "i"),
        Qe = /^\s+/,
        Ge = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ke = /<([\w:]+)/,
        Ze = /<tbody/i,
        Je = /<|&#?\w+;/,
        et = /<(?:script|style|link)/i,
        tt = /^(?:checkbox|radio)$/i,
        nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rt = /^$|\/(?:java|ecma)script/i,
        it = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        at = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ue.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        st = p(G),
        lt = st.appendChild(G.createElement("div"));
    at.optgroup = at.option, at.tbody = at.tfoot = at.colgroup = at.caption = at.thead, at.th = at.td, ue.fn.extend({
        text: function(e) {
            return ue.access(this, function(e) {
                return e === t ? ue.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? ue.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ue.cleanData(x(n)), n.parentNode && (t && ue.contains(n.ownerDocument, n) && v(x(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ue.cleanData(x(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ue.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return ue.clone(this, e, t)
            })
        },
        html: function(e) {
            return ue.access(this, function(e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Ye, "") : t;
                if (!("string" != typeof e || et.test(e) || !ue.support.htmlSerialize && Ve.test(e) || !ue.support.leadingWhitespace && Qe.test(e) || at[(Ke.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Ge, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (ue.cleanData(x(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = ue.map(this, function(e) {
                    return [e.nextSibling, e.parentNode]
                }),
                t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++],
                    i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), ue(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = re.apply([], e);
            var r, i, o, a, s, l, c = 0,
                u = this.length,
                d = this,
                f = u - 1,
                p = e[0],
                h = ue.isFunction(p);
            if (h || !(1 >= u || "string" != typeof p || ue.support.checkClone) && nt.test(p)) return this.each(function(r) {
                var i = d.eq(r);
                h && (e[0] = p.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (u && (l = ue.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                for (a = ue.map(x(l, "script"), m), o = a.length; u > c; c++) i = l, c !== f && (i = ue.clone(i, !0, !0), o && ue.merge(a, x(i, "script"))), t.call(this[c], i, c);
                if (o)
                    for (s = a[a.length - 1].ownerDocument, ue.map(a, g), c = 0; o > c; c++) i = a[c], rt.test(i.type || "") && !ue._data(i, "globalEval") && ue.contains(s, i) && (i.src ? ue._evalUrl(i.src) : ue.globalEval((i.text || i.textContent || i.innerHTML || "").replace(ot, "")));
                l = r = null
            }
            return this
        }
    }), ue.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ue.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = ue(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), ue(o[r])[t](n), ie.apply(i, n.get());
            return this.pushStack(i)
        }
    }), ue.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = ue.contains(e.ownerDocument, e);
            if (ue.support.html5Clone || ue.isXMLDoc(e) || !Ve.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (lt.innerHTML = e.outerHTML, lt.removeChild(o = lt.firstChild)), !(ue.support.noCloneEvent && ue.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ue.isXMLDoc(e)))
                for (r = x(o), s = x(e), a = 0; null != (i = s[a]); ++a) r[a] && b(i, r[a]);
            if (t)
                if (n)
                    for (s = s || x(e), r = r || x(o), a = 0; null != (i = s[a]); a++) y(i, r[a]);
                else y(e, o);
            return r = x(o, "script"), r.length > 0 && v(r, !l && x(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, l, c, u, d = e.length, f = p(t), h = [], m = 0; d > m; m++)
                if (o = e[m], o || 0 === o)
                    if ("object" === ue.type(o)) ue.merge(h, o.nodeType ? [o] : o);
                    else if (Je.test(o)) {
                for (s = s || f.appendChild(t.createElement("div")), l = (Ke.exec(o) || ["", ""])[1].toLowerCase(), u = at[l] || at._default, s.innerHTML = u[1] + o.replace(Ge, "<$1></$2>") + u[2], i = u[0]; i--;) s = s.lastChild;
                if (!ue.support.leadingWhitespace && Qe.test(o) && h.push(t.createTextNode(Qe.exec(o)[0])), !ue.support.tbody)
                    for (o = "table" !== l || Ze.test(o) ? "<table>" !== u[1] || Ze.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) ue.nodeName(c = o.childNodes[i], "tbody") && !c.childNodes.length && o.removeChild(c);
                for (ue.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = f.lastChild
            } else h.push(t.createTextNode(o));
            for (s && f.removeChild(s), ue.support.appendChecked || ue.grep(x(h, "input"), w), m = 0; o = h[m++];)
                if ((!r || -1 === ue.inArray(o, r)) && (a = ue.contains(o.ownerDocument, o), s = x(f.appendChild(o), "script"), a && v(s), n))
                    for (i = 0; o = s[i++];) rt.test(o.type || "") && n.push(o);
            return s = null, f
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = ue.expando, l = ue.cache, c = ue.support.deleteExpando, u = ue.event.special; null != (n = e[a]); a++)
                if ((t || ue.acceptData(n)) && (i = n[s], o = i && l[i])) {
                    if (o.events)
                        for (r in o.events) u[r] ? ue.event.remove(n, r) : ue.removeEvent(n, r, o.handle);
                    l[i] && (delete l[i], c ? delete n[s] : typeof n.removeAttribute !== V ? n.removeAttribute(s) : n[s] = null, te.push(i))
                }
        },
        _evalUrl: function(e) {
            return ue.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), ue.fn.extend({
        wrapAll: function(e) {
            if (ue.isFunction(e)) return this.each(function(t) {
                ue(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ue(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return ue.isFunction(e) ? this.each(function(t) {
                ue(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = ue(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ue.isFunction(e);
            return this.each(function(n) {
                ue(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ue.nodeName(this, "body") || ue(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var ct, ut, dt, ft = /alpha\([^)]*\)/i,
        pt = /opacity\s*=\s*([^)]*)/,
        ht = /^(top|right|bottom|left)$/,
        mt = /^(none|table(?!-c[ea]).+)/,
        gt = /^margin/,
        vt = RegExp("^(" + de + ")(.*)$", "i"),
        yt = RegExp("^(" + de + ")(?!px)[a-z%]+$", "i"),
        bt = RegExp("^([+-])=(" + de + ")", "i"),
        xt = {
            BODY: "block"
        },
        wt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ct = {
            letterSpacing: 0,
            fontWeight: 400
        },
        kt = ["Top", "Right", "Bottom", "Left"],
        Tt = ["Webkit", "O", "Moz", "ms"];
    ue.fn.extend({
        css: function(e, n) {
            return ue.access(this, function(e, n, r) {
                var i, o, a = {},
                    s = 0;
                if (ue.isArray(n)) {
                    for (o = ut(e), i = n.length; i > s; s++) a[n[s]] = ue.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? ue.style(e, n, r) : ue.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return T(this, !0)
        },
        hide: function() {
            return T(this)
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e : k(this)) ? ue(this).show(): ue(this).hide()
            })
        }
    }), ue.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = dt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ue.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = ue.camelCase(n),
                    c = e.style;
                if (n = ue.cssProps[l] || (ue.cssProps[l] = C(c, l)), s = ue.cssHooks[n] || ue.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : c[n];
                if (a = typeof r, "string" === a && (o = bt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ue.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || ue.cssNumber[l] || (r += "px"), ue.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (c[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    c[n] = r
                } catch (u) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, l = ue.camelCase(n);
            return n = ue.cssProps[l] || (ue.cssProps[l] = C(e.style, l)), s = ue.cssHooks[n] || ue.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = dt(e, n, i)), "normal" === a && n in Ct && (a = Ct[n]), "" === r || r ? (o = parseFloat(a), r === !0 || ue.isNumeric(o) ? o || 0 : a) : a
        }
    }), e.getComputedStyle ? (ut = function(t) {
        return e.getComputedStyle(t, null)
    }, dt = function(e, n, r) {
        var i, o, a, s = r || ut(e),
            l = s ? s.getPropertyValue(n) || s[n] : t,
            c = e.style;
        return s && ("" !== l || ue.contains(e.ownerDocument, e) || (l = ue.style(e, n)), yt.test(l) && gt.test(n) && (i = c.width, o = c.minWidth, a = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = s.width, c.width = i, c.minWidth = o, c.maxWidth = a)), l
    }) : G.documentElement.currentStyle && (ut = function(e) {
        return e.currentStyle
    }, dt = function(e, n, r) {
        var i, o, a, s = r || ut(e),
            l = s ? s[n] : t,
            c = e.style;
        return null == l && c && c[n] && (l = c[n]), yt.test(l) && !ht.test(n) && (i = c.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), c.left = "fontSize" === n ? "1em" : l, l = c.pixelLeft + "px", c.left = i, a && (o.left = a)), "" === l ? "auto" : l
    }), ue.each(["height", "width"], function(e, n) {
        ue.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && mt.test(ue.css(e, "display")) ? ue.swap(e, wt, function() {
                    return N(e, n, i)
                }) : N(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && ut(e);
                return S(e, t, r ? E(e, n, r, ue.support.boxSizing && "border-box" === ue.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), ue.support.opacity || (ue.cssHooks.opacity = {
        get: function(e, t) {
            return pt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = ue.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ue.trim(o.replace(ft, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = ft.test(o) ? o.replace(ft, i) : o + " " + i)
        }
    }), ue(function() {
        ue.support.reliableMarginRight || (ue.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? ue.swap(e, {
                    display: "inline-block"
                }, dt, [e, "marginRight"]) : t
            }
        }), !ue.support.pixelPosition && ue.fn.position && ue.each(["top", "left"], function(e, n) {
            ue.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = dt(e, n), yt.test(r) ? ue(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), ue.expr && ue.expr.filters && (ue.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ue.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ue.css(e, "display"))
    }, ue.expr.filters.visible = function(e) {
        return !ue.expr.filters.hidden(e)
    }), ue.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ue.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + kt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, gt.test(e) || (ue.cssHooks[e + t].set = S)
    });
    var St = /%20/g,
        Et = /\[\]$/,
        Nt = /\r?\n/g,
        jt = /^(?:submit|button|image|reset|file)$/i,
        Ot = /^(?:input|select|textarea|keygen)/i;
    ue.fn.extend({
        serialize: function() {
            return ue.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ue.prop(this, "elements");
                return e ? ue.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ue(this).is(":disabled") && Ot.test(this.nodeName) && !jt.test(e) && (this.checked || !tt.test(e))
            }).map(function(e, t) {
                var n = ue(this).val();
                return null == n ? null : ue.isArray(n) ? ue.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Nt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Nt, "\r\n")
                }
            }).get()
        }
    }), ue.param = function(e, n) {
        var r, i = [],
            o = function(e, t) {
                t = ue.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = ue.ajaxSettings && ue.ajaxSettings.traditional), ue.isArray(e) || e.jquery && !ue.isPlainObject(e)) ue.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (r in e) A(r, e[r], n, o);
        return i.join("&").replace(St, "+")
    }, ue.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ue.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ue.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var At, Lt, Dt = ue.now(),
        Mt = /\?/,
        $t = /#.*$/,
        _t = /([?&])_=[^&]*/,
        It = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Pt = /^(?:GET|HEAD)$/,
        Ft = /^\/\//,
        zt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Rt = ue.fn.load,
        Bt = {},
        qt = {},
        Wt = "*/".concat("*");
    try {
        Lt = Q.href
    } catch (Xt) {
        Lt = G.createElement("a"), Lt.href = "", Lt = Lt.href
    }
    At = zt.exec(Lt.toLowerCase()) || [], ue.fn.load = function(e, n, r) {
        if ("string" != typeof e && Rt) return Rt.apply(this, arguments);
        var i, o, a, s = this,
            l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), ue.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ue.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments, s.html(i ? ue("<div>").append(ue.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, ue.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ue.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ue.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Lt,
            type: "GET",
            isLocal: Ht.test(At[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Wt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ue.parseJSON,
                "text xml": ue.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? M(M(e, ue.ajaxSettings), t) : M(ue.ajaxSettings, e)
        },
        ajaxPrefilter: L(Bt),
        ajaxTransport: L(qt),
        ajax: function(e, n) {
            function r(e, n, r, i) {
                var o, d, y, b, w, k = n;
                2 !== x && (x = 2, l && clearTimeout(l), u = t, s = i || "", C.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, r && (b = $(f, C, r)), b = _(f, b, C, o), o ? (f.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (ue.lastModified[a] = w), w = C.getResponseHeader("etag"), w && (ue.etag[a] = w)), 204 === e || "HEAD" === f.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = b.state, d = b.data, y = b.error, o = !y)) : (y = k, (e || !k) && (k = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || k) + "", o ? m.resolveWith(p, [d, k, C]) : m.rejectWith(p, [C, k, y]), C.statusCode(v), v = t, c && h.trigger(o ? "ajaxSuccess" : "ajaxError", [C, f, o ? d : y]), g.fireWith(p, [C, k]), c && (h.trigger("ajaxComplete", [C, f]), --ue.active || ue.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, a, s, l, c, u, d, f = ue.ajaxSetup({}, n),
                p = f.context || f,
                h = f.context && (p.nodeType || p.jquery) ? ue(p) : ue.event,
                m = ue.Deferred(),
                g = ue.Callbacks("once memory"),
                v = f.statusCode || {},
                y = {},
                b = {},
                x = 0,
                w = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!d)
                                for (d = {}; t = It.exec(s);) d[t[1].toLowerCase()] = t[2];
                            t = d[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = b[n] = b[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) v[t] = [v[t], e[t]];
                            else C.always(e[C.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return u && u.abort(t), r(0, t), this
                    }
                };
            if (m.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, f.url = ((e || f.url || Lt) + "").replace($t, "").replace(Ft, At[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = ue.trim(f.dataType || "*").toLowerCase().match(fe) || [""], null == f.crossDomain && (i = zt.exec(f.url.toLowerCase()), f.crossDomain = !(!i || i[1] === At[1] && i[2] === At[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (At[3] || ("http:" === At[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = ue.param(f.data, f.traditional)), D(Bt, f, n, C), 2 === x) return C;
            c = f.global, c && 0 === ue.active++ && ue.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Pt.test(f.type), a = f.url, f.hasContent || (f.data && (a = f.url += (Mt.test(a) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = _t.test(a) ? a.replace(_t, "$1_=" + Dt++) : a + (Mt.test(a) ? "&" : "?") + "_=" + Dt++)), f.ifModified && (ue.lastModified[a] && C.setRequestHeader("If-Modified-Since", ue.lastModified[a]), ue.etag[a] && C.setRequestHeader("If-None-Match", ue.etag[a])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : f.accepts["*"]);
            for (o in f.headers) C.setRequestHeader(o, f.headers[o]);
            if (f.beforeSend && (f.beforeSend.call(p, C, f) === !1 || 2 === x)) return C.abort();
            w = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) C[o](f[o]);
            if (u = D(qt, f, n, C)) {
                C.readyState = 1, c && h.trigger("ajaxSend", [C, f]), f.async && f.timeout > 0 && (l = setTimeout(function() {
                    C.abort("timeout")
                }, f.timeout));
                try {
                    x = 1, u.send(y, r)
                } catch (k) {
                    if (!(2 > x)) throw k;
                    r(-1, k)
                }
            } else r(-1, "No Transport");
            return C
        },
        getJSON: function(e, t, n) {
            return ue.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return ue.get(e, t, n, "script")
        }
    }), ue.each(["get", "post"], function(e, n) {
        ue[n] = function(e, r, i, o) {
            return ue.isFunction(r) && (o = o || i, i = r, r = t), ue.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }), ue.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ue.globalEval(e), e
            }
        }
    }), ue.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ue.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = G.head || ue("head")[0] || G.documentElement;
            return {
                send: function(t, i) {
                    n = G.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Ut = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
    ue.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ut.pop() || ue.expando + "_" + Dt++;
            return this[e] = !0, e
        }
    }), ue.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Yt.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ue.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Yt, "$1" + o) : n.jsonp !== !1 && (n.url += (Mt.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || ue.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Ut.push(o)), s && ue.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Vt, Qt, Gt = 0,
        Kt = e.ActiveXObject && function() {
            var e;
            for (e in Vt) Vt[e](t, !0)
        };
    ue.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && I() || H()
    } : I, Qt = ue.ajaxSettings.xhr(), ue.support.cors = !!Qt && "withCredentials" in Qt, Qt = ue.support.ajax = !!Qt, Qt && ue.ajaxTransport(function(n) {
        if (!n.crossDomain || ue.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) l.setRequestHeader(s, i[s])
                    } catch (c) {}
                    l.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, c, u, d;
                        try {
                            if (r && (i || 4 === l.readyState))
                                if (r = t, a && (l.onreadystatechange = ue.noop, Kt && delete Vt[a]), i) 4 !== l.readyState && l.abort();
                                else {
                                    d = {}, s = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (d.text = l.responseText);
                                    try {
                                        u = l.statusText
                                    } catch (f) {
                                        u = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404
                                }
                        } catch (p) {
                            i || o(-1, p)
                        }
                        d && o(s, u, d, c)
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Gt, Kt && (Vt || (Vt = {}, ue(e).unload(Kt)), Vt[a] = r), l.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Zt, Jt, en = /^(?:toggle|show|hide)$/,
        tn = RegExp("^(?:([+-])=|)(" + de + ")([a-z%]*)$", "i"),
        nn = /queueHooks$/,
        rn = [B],
        on = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = tn.exec(t),
                    o = i && i[3] || (ue.cssNumber[e] ? "" : "px"),
                    a = (ue.cssNumber[e] || "px" !== o && +r) && tn.exec(ue.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, ue.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    ue.Animation = ue.extend(z, {
        tweener: function(e, t) {
            ue.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], on[n] = on[n] || [], on[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? rn.unshift(e) : rn.push(e)
        }
    }), ue.Tween = q, q.prototype = {
        constructor: q,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ue.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = q.propHooks[this.prop];
            return e && e.get ? e.get(this) : q.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = q.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ue.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : q.propHooks._default.set(this), this
        }
    }, q.prototype.init.prototype = q.prototype, q.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ue.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                ue.fx.step[e.prop] ? ue.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ue.cssProps[e.prop]] || ue.cssHooks[e.prop]) ? ue.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, q.propHooks.scrollTop = q.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ue.each(["toggle", "show", "hide"], function(e, t) {
        var n = ue.fn[t];
        ue.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, r, i)
        }
    }), ue.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(k).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = ue.isEmptyObject(e),
                o = ue.speed(t, n, r),
                a = function() {
                    var t = z(this, ue.extend({}, e), o);
                    (i || ue._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = ue.timers,
                    a = ue._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && nn.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && ue.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = ue._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = ue.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, ue.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), ue.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        ue.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), ue.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? ue.extend({}, e) : {
            complete: n || !n && t || ue.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ue.isFunction(t) && t
        };
        return r.duration = ue.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ue.fx.speeds ? ue.fx.speeds[r.duration] : ue.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            ue.isFunction(r.old) && r.old.call(this), r.queue && ue.dequeue(this, r.queue)
        }, r
    }, ue.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ue.timers = [], ue.fx = q.prototype.init, ue.fx.tick = function() {
        var e, n = ue.timers,
            r = 0;
        for (Zt = ue.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || ue.fx.stop(), Zt = t
    }, ue.fx.timer = function(e) {
        e() && ue.timers.push(e) && ue.fx.start()
    }, ue.fx.interval = 13, ue.fx.start = function() {
        Jt || (Jt = setInterval(ue.fx.tick, ue.fx.interval))
    }, ue.fx.stop = function() {
        clearInterval(Jt), Jt = null
    }, ue.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ue.fx.step = {}, ue.expr && ue.expr.filters && (ue.expr.filters.animated = function(e) {
        return ue.grep(ue.timers, function(t) {
            return e === t.elem
        }).length
    }), ue.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            ue.offset.setOffset(this, e, t)
        });
        var n, r, i = {
                top: 0,
                left: 0
            },
            o = this[0],
            a = o && o.ownerDocument;
        return a ? (n = a.documentElement, ue.contains(n, o) ? (typeof o.getBoundingClientRect !== V && (i = o.getBoundingClientRect()), r = X(a), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i) : void 0
    }, ue.offset = {
        setOffset: function(e, t, n) {
            var r = ue.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = ue(e),
                s = a.offset(),
                l = ue.css(e, "top"),
                c = ue.css(e, "left"),
                u = ("absolute" === r || "fixed" === r) && ue.inArray("auto", [l, c]) > -1,
                d = {},
                f = {};
            u ? (f = a.position(), i = f.top, o = f.left) : (i = parseFloat(l) || 0, o = parseFloat(c) || 0), ue.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + i), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : a.css(d)
        }
    }, ue.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === ue.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ue.nodeName(e[0], "html") || (n = e.offset()), n.top += ue.css(e[0], "borderTopWidth", !0), n.left += ue.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ue.css(r, "marginTop", !0),
                    left: t.left - n.left - ue.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || K; e && !ue.nodeName(e, "html") && "static" === ue.css(e, "position");) e = e.offsetParent;
                return e || K
            })
        }
    }), ue.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        ue.fn[e] = function(i) {
            return ue.access(this, function(e, i, o) {
                var a = X(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? ue(a).scrollLeft() : o, r ? o : ue(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    }), ue.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        ue.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            ue.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return ue.access(this, function(n, r, i) {
                    var o;
                    return ue.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ue.css(n, r, s) : ue.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), ue.fn.size = function() {
        return this.length
    }, ue.fn.andSelf = ue.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ue : (e.jQuery = e.$ = ue, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ue
    }))
}(window), window.Modernizr = function(e, t, n) {
        function r(e) {
            y.cssText = e
        }

        function i(e, t) {
            return typeof e === t
        }

        function o(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function a(e, t) {
            for (var r in e) {
                var i = e[r];
                if (!o(i, "-") && y[i] !== n) return "pfx" != t || i
            }
            return !1
        }

        function s(e, t, r) {
            for (var o in e) {
                var a = t[e[o]];
                if (a !== n) return r === !1 ? e[o] : i(a, "function") ? a.bind(r || t) : a
            }
            return !1
        }

        function l(e, t, n) {
            var r = e.charAt(0).toUpperCase() + e.slice(1),
                o = (e + " " + w.join(r + " ") + r).split(" ");
            return i(t, "string") || i(t, "undefined") ? a(o, t) : (o = (e + " " + C.join(r + " ") + r).split(" "), s(o, t, n))
        }
        var c, u, d, f = "2.6.2",
            p = {},
            h = !0,
            m = t.documentElement,
            g = "modernizr",
            v = t.createElement(g),
            y = v.style,
            b = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
            x = "Webkit Moz O ms",
            w = x.split(" "),
            C = x.toLowerCase().split(" "),
            k = {},
            T = [],
            S = T.slice,
            E = function(e, n, r, i) {
                var o, a, s, l, c = t.createElement("div"),
                    u = t.body,
                    d = u || t.createElement("body");
                if (parseInt(r, 10))
                    for (; r--;) s = t.createElement("div"), s.id = i ? i[r] : g + (r + 1), c.appendChild(s);
                return o = ["&#173;", '<style id="s', g, '">', e, "</style>"].join(""), c.id = g, (u ? c : d).innerHTML += o, d.appendChild(c), u || (d.style.background = "", d.style.overflow = "hidden", l = m.style.overflow, m.style.overflow = "hidden", m.appendChild(d)), a = n(c, e), u ? c.parentNode.removeChild(c) : (d.parentNode.removeChild(d), m.style.overflow = l), !!a
            },
            N = {}.hasOwnProperty;
        d = i(N, "undefined") || i(N.call, "undefined") ? function(e, t) {
            return t in e && i(e.constructor.prototype[t], "undefined")
        } : function(e, t) {
            return N.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function(e) {
            var t = this;
            if ("function" != typeof t) throw new TypeError;
            var n = S.call(arguments, 1),
                r = function() {
                    if (this instanceof r) {
                        var i = function() {};
                        i.prototype = t.prototype;
                        var o = new i,
                            a = t.apply(o, n.concat(S.call(arguments)));
                        return Object(a) === a ? a : o
                    }
                    return t.apply(e, n.concat(S.call(arguments)))
                };
            return r
        }), k.touch = function() {
            var n;
            return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : E(["@media (", b.join("touch-enabled),("), g, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
                n = 9 === e.offsetTop
            }), n
        }, k.cssanimations = function() {
            return l("animationName")
        }, k.csstransitions = function() {
            return l("transition")
        };
        for (var j in k) d(k, j) && (u = j.toLowerCase(), p[u] = k[j](), T.push((p[u] ? "" : "no-") + u));
        return p.addTest = function(e, t) {
                if ("object" == typeof e)
                    for (var r in e) d(e, r) && p.addTest(r, e[r]);
                else {
                    if (e = e.toLowerCase(), p[e] !== n) return p;
                    t = "function" == typeof t ? t() : t, "undefined" != typeof h && h && (m.className += " " + (t ? "" : "no-") + e), p[e] = t
                }
                return p
            }, r(""), v = c = null,
            function(e, t) {
                function n(e, t) {
                    var n = e.createElement("p"),
                        r = e.getElementsByTagName("head")[0] || e.documentElement;
                    return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
                }

                function r() {
                    var e = v.elements;
                    return "string" == typeof e ? e.split(" ") : e
                }

                function i(e) {
                    var t = g[e[h]];
                    return t || (t = {}, m++, e[h] = m, g[m] = t), t
                }

                function o(e, n, r) {
                    if (n || (n = t), u) return n.createElement(e);
                    r || (r = i(n));
                    var o;
                    return o = r.cache[e] ? r.cache[e].cloneNode() : p.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), o.canHaveChildren && !f.test(e) ? r.frag.appendChild(o) : o
                }

                function a(e, n) {
                    if (e || (e = t), u) return e.createDocumentFragment();
                    n = n || i(e);
                    for (var o = n.frag.cloneNode(), a = 0, s = r(), l = s.length; a < l; a++) o.createElement(s[a]);
                    return o
                }

                function s(e, t) {
                    t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                        return v.shivMethods ? o(n, e, t) : t.createElem(n)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/\w+/g, function(e) {
                        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(v, t.frag)
                }

                function l(e) {
                    e || (e = t);
                    var r = i(e);
                    return v.shivCSS && !c && !r.hasCSS && (r.hasCSS = !!n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), u || s(e, r), e
                }
                var c, u, d = e.html5 || {},
                    f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    h = "_html5shiv",
                    m = 0,
                    g = {};
                ! function() {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", c = "hidden" in e, u = 1 == e.childNodes.length || function() {
                            t.createElement("a");
                            var e = t.createDocumentFragment();
                            return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                        }()
                    } catch (n) {
                        c = !0, u = !0
                    }
                }();
                var v = {
                    elements: d.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: d.shivCSS !== !1,
                    supportsUnknownElements: u,
                    shivMethods: d.shivMethods !== !1,
                    type: "default",
                    shivDocument: l,
                    createElement: o,
                    createDocumentFragment: a
                };
                e.html5 = v, l(t)
            }(this, t), p._version = f, p._prefixes = b, p._domPrefixes = C, p._cssomPrefixes = w, p.testProp = function(e) {
                return a([e])
            }, p.testAllProps = l, p.testStyles = E, p.prefixed = function(e, t, n) {
                return t ? l(e, t, n) : l(e, "pfx")
            }, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (h ? " js " + T.join(" ") : ""), p
    }(this, this.document),
    function(e, t, n) {
        function r(e) {
            return "[object Function]" == g.call(e)
        }

        function i(e) {
            return "string" == typeof e
        }

        function o() {}

        function a(e) {
            return !e || "loaded" == e || "complete" == e || "uninitialized" == e
        }

        function s() {
            var e = v.shift();
            y = 1, e ? e.t ? h(function() {
                ("c" == e.t ? f.injectCss : f.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
            }, 0) : (e(), s()) : y = 0
        }

        function l(e, n, r, i, o, l, c) {
            function u(t) {
                if (!p && a(d.readyState) && (b.r = p = 1, !y && s(), d.onload = d.onreadystatechange = null, t)) {
                    "img" != e && h(function() {
                        w.removeChild(d)
                    }, 50);
                    for (var r in E[n]) E[n].hasOwnProperty(r) && E[n][r].onload()
                }
            }
            var c = c || f.errorTimeout,
                d = t.createElement(e),
                p = 0,
                g = 0,
                b = {
                    t: r,
                    s: n,
                    e: o,
                    a: l,
                    x: c
                };
            1 === E[n] && (g = 1, E[n] = []), "object" == e ? d.data = n : (d.src = n, d.type = e), d.width = d.height = "0", d.onerror = d.onload = d.onreadystatechange = function() {
                u.call(this, g)
            }, v.splice(i, 0, b), "img" != e && (g || 2 === E[n] ? (w.insertBefore(d, x ? null : m), h(u, c)) : E[n].push(d))
        }

        function c(e, t, n, r, o) {
            return y = 0, t = t || "j", i(e) ? l("c" == t ? k : C, e, t, this.i++, n, r, o) : (v.splice(this.i++, 0, e), 1 == v.length && s()), this
        }

        function u() {
            var e = f;
            return e.loader = {
                load: c,
                i: 0
            }, e
        }
        var d, f, p = t.documentElement,
            h = e.setTimeout,
            m = t.getElementsByTagName("script")[0],
            g = {}.toString,
            v = [],
            y = 0,
            b = "MozAppearance" in p.style,
            x = b && !!t.createRange().compareNode,
            w = x ? p : m.parentNode,
            p = e.opera && "[object Opera]" == g.call(e.opera),
            p = !!t.attachEvent && !p,
            C = b ? "object" : p ? "script" : "img",
            k = p ? "script" : C,
            T = Array.isArray || function(e) {
                return "[object Array]" == g.call(e)
            },
            S = [],
            E = {},
            N = {
                timeout: function(e, t) {
                    return t.length && (e.timeout = t[0]), e
                }
            };
        f = function(e) {
            function t(e) {
                var t, n, r, e = e.split("!"),
                    i = S.length,
                    o = e.pop(),
                    a = e.length,
                    o = {
                        url: o,
                        origUrl: o,
                        prefixes: e
                    };
                for (n = 0; n < a; n++) r = e[n].split("="), (t = N[r.shift()]) && (o = t(o, r));
                for (n = 0; n < i; n++) o = S[n](o);
                return o
            }

            function a(e, i, o, a, s) {
                var l = t(e),
                    c = l.autoCallback;
                l.url.split(".").pop().split("?").shift(), l.bypass || (i && (i = r(i) ? i : i[e] || i[a] || i[e.split("/").pop().split("?")[0]]), l.instead ? l.instead(e, i, o, a, s) : (E[l.url] ? l.noexec = !0 : E[l.url] = 1, o.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : n, l.noexec, l.attrs, l.timeout), (r(i) || r(c)) && o.load(function() {
                    u(), i && i(l.origUrl, s, a), c && c(l.origUrl, s, a), E[l.url] = 2
                })))
            }

            function s(e, t) {
                function n(e, n) {
                    if (e) {
                        if (i(e)) n || (d = function() {
                            var e = [].slice.call(arguments);
                            f.apply(this, e), p()
                        }), a(e, d, t, 0, c);
                        else if (Object(e) === e)
                            for (l in s = function() {
                                    var t, n = 0;
                                    for (t in e) e.hasOwnProperty(t) && n++;
                                    return n
                                }(), e) e.hasOwnProperty(l) && (!n && !--s && (r(d) ? d = function() {
                                var e = [].slice.call(arguments);
                                f.apply(this, e), p()
                            } : d[l] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), p()
                                }
                            }(f[l])), a(e[l], d, t, l, c))
                    } else !n && p()
                }
                var s, l, c = !!e.test,
                    u = e.load || e.both,
                    d = e.callback || o,
                    f = d,
                    p = e.complete || o;
                n(c ? e.yep : e.nope, !!u), u && n(u)
            }
            var l, c, d = this.yepnope.loader;
            if (i(e)) a(e, 0, d, 0);
            else if (T(e))
                for (l = 0; l < e.length; l++) c = e[l], i(c) ? a(c, 0, d, 0) : T(c) ? f(c) : Object(c) === c && s(c, d);
            else Object(e) === e && s(e, d)
        }, f.addPrefix = function(e, t) {
            N[e] = t
        }, f.addFilter = function(e) {
            S.push(e)
        }, f.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", d = function() {
            t.removeEventListener("DOMContentLoaded", d, 0), t.readyState = "complete"
        }, 0)), e.yepnope = u(), e.yepnope.executeStack = s, e.yepnope.injectJs = function(e, n, r, i, l, c) {
            var u, d, p = t.createElement("script"),
                i = i || f.errorTimeout;
            p.src = e;
            for (d in r) p.setAttribute(d, r[d]);
            n = c ? s : n || o, p.onreadystatechange = p.onload = function() {
                !u && a(p.readyState) && (u = 1, n(), p.onload = p.onreadystatechange = null)
            }, h(function() {
                u || (u = 1, n(1))
            }, i), l ? p.onload() : m.parentNode.insertBefore(p, m)
        }, e.yepnope.injectCss = function(e, n, r, i, a, l) {
            var c, i = t.createElement("link"),
                n = l ? s : n || o;
            i.href = e, i.rel = "stylesheet", i.type = "text/css";
            for (c in r) i.setAttribute(c, r[c]);
            a || (m.parentNode.insertBefore(i, m), h(n, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    },
    function(e, t) {
        e.extend({
            browserSelector: function() {
                var e = t.userAgent,
                    n = e.toLowerCase(),
                    r = function(e) {
                        return n.indexOf(e) > -1
                    },
                    i = "gecko",
                    o = "webkit",
                    a = "safari",
                    s = "opera",
                    l = document.documentElement,
                    u = [!/opera|webtv/i.test(n) && /msie\s(\d)/.test(n) ? "ie ie" + parseFloat(t.appVersion.split("MSIE")[1]) : r("firefox/2") ? i + " ff2" : r("firefox/3.5") ? i + " ff3 ff3_5" : r("firefox/3") ? i + " ff3" : r("gecko/") ? i : r("opera") ? s + (/version\/(\d+)/.test(n) ? " " + s + RegExp.jQuery1 : /opera(\s|\/)(\d+)/.test(n) ? " " + s + RegExp.jQuery2 : "") : r("konqueror") ? "konqueror" : r("chrome") ? o + " chrome" : r("iron") ? o + " iron" : r("applewebkit/") ? o + " " + a + (/version\/(\d+)/.test(n) ? " " + a + RegExp.jQuery1 : "") : r("mozilla/") ? i : "", r("j2me") ? "mobile" : r("iphone") ? "iphone" : r("ipod") ? "ipod" : r("mac") ? "mac" : r("darwin") ? "mac" : r("webtv") ? "webtv" : r("win") ? "win" : r("freebsd") ? "freebsd" : r("x11") || r("linux") ? "linux" : "", "js"];
                c = u.join(" "), l.className += " " + c
            }
        })
    }(jQuery, navigator),
    function(e) {
        e.fn.appear = function(t) {
            var n = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    msTransition: "MSTransitionEnd",
                    transition: "transitionend"
                },
                r = n[Modernizr.prefixed("transition")],
                i = e.extend({
                    data: void 0,
                    speedAddClass: 300,
                    speedRemoveClass: 100,
                    accX: 0,
                    accY: 0
                }, t);
            return this.each(function(t) {
                var n = e(this);
                n.appeared = !1;
                var o = e(window),
                    a = function() {
                        if (!n.is(":visible")) return void(n.appeared = !1);
                        var e = o.scrollLeft(),
                            t = o.scrollTop(),
                            r = n.offset(),
                            a = r.left,
                            s = r.top,
                            l = i.accX,
                            c = i.accY,
                            u = n.height(),
                            d = o.height(),
                            f = n.width(),
                            p = o.width();
                        s + u + c >= t && s <= t + d + c && a + f + l >= e && a <= e + p + l ? n.appeared || n.trigger("appear", i.data) : n.appeared = !1
                    },
                    s = function(n) {
                        n.data && setTimeout(function() {
                            e(n.currentTarget).addClass(n.data + "Run").one(r, function() {
                                e(this).removeClass(n.data)
                            })
                        }, t * i.speedAddClass)
                    },
                    l = function() {
                        n.appeared = !0, s.apply(this, arguments)
                    };
                n.bind("appear", i.data, l), o.scroll(a), e.fn.appear.checks.push(a), a()
            })
        }, e.extend(e.fn.appear, {
            checks: [],
            timeout: null,
            checkAll: function() {
                var t = e.fn.appear.checks.length;
                if (t > 0)
                    for (; t--;) e.fn.appear.checks[t]()
            },
            run: function() {
                e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout), e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
            }
        }), e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(t, n) {
            var r = e.fn[n];
            r && (e.fn[n] = function() {
                var t = r.apply(this, arguments);
                return e.fn.appear.run(), t
            })
        })
    }(jQuery),
    function() {
        var e = [].indexOf || function(e) {
                for (var t = 0, n = this.length; t < n; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            },
            t = [].slice;
        ! function(e, t) {
            return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(n) {
                return t(n, e)
            }) : t(e.jQuery, e)
        }(this, function(n, r) {
            var i, o, a, s, l, c, u, d, f, p, h, m, g, v, y, b;
            return i = n(r), d = e.call(r, "ontouchstart") >= 0, s = {
                horizontal: {},
                vertical: {}
            }, l = 1, u = {}, c = "waypoints-context-id", h = "resize.waypoints", m = "scroll.waypoints", g = 1, v = "waypoints-waypoint-ids", y = "waypoint", b = "waypoints", o = function() {
                function e(e) {
                    var t = this;
                    this.$element = e, this.element = e[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + l++, this.oldScroll = {
                        x: e.scrollLeft(),
                        y: e.scrollTop()
                    }, this.waypoints = {
                        horizontal: {},
                        vertical: {}
                    }, e.data(c, this.id), u[this.id] = this, e.bind(m, function() {
                        var e;
                        if (!t.didScroll && !d) return t.didScroll = !0, e = function() {
                            return t.doScroll(), t.didScroll = !1
                        }, r.setTimeout(e, n[b].settings.scrollThrottle)
                    }), e.bind(h, function() {
                        var e;
                        if (!t.didResize) return t.didResize = !0, e = function() {
                            return n[b]("refresh"), t.didResize = !1
                        }, r.setTimeout(e, n[b].settings.resizeThrottle)
                    })
                }
                return e.prototype.doScroll = function() {
                    var e, t = this;
                    return e = {
                        horizontal: {
                            newScroll: this.$element.scrollLeft(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left"
                        },
                        vertical: {
                            newScroll: this.$element.scrollTop(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up"
                        }
                    }, !d || e.vertical.oldScroll && e.vertical.newScroll || n[b]("refresh"), n.each(e, function(e, r) {
                        var i, o, a;
                        return a = [], o = r.newScroll > r.oldScroll, i = o ? r.forward : r.backward, n.each(t.waypoints[e], function(e, t) {
                            var n, i;
                            return r.oldScroll < (n = t.offset) && n <= r.newScroll ? a.push(t) : r.newScroll < (i = t.offset) && i <= r.oldScroll ? a.push(t) : void 0
                        }), a.sort(function(e, t) {
                            return e.offset - t.offset
                        }), o || a.reverse(), n.each(a, function(e, t) {
                            if (t.options.continuous || e === a.length - 1) return t.trigger([i])
                        })
                    }), this.oldScroll = {
                        x: e.horizontal.newScroll,
                        y: e.vertical.newScroll
                    }
                }, e.prototype.refresh = function() {
                    var e, t, r, i = this;
                    return r = n.isWindow(this.element), t = this.$element.offset(), this.doScroll(), e = {
                        horizontal: {
                            contextOffset: r ? 0 : t.left,
                            contextScroll: r ? 0 : this.oldScroll.x,
                            contextDimension: this.$element.width(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                            offsetProp: "left"
                        },
                        vertical: {
                            contextOffset: r ? 0 : t.top,
                            contextScroll: r ? 0 : this.oldScroll.y,
                            contextDimension: r ? n[b]("viewportHeight") : this.$element.height(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                            offsetProp: "top"
                        }
                    }, n.each(e, function(e, t) {
                        return n.each(i.waypoints[e], function(e, r) {
                            var i, o, a, s, l;
                            if (i = r.options.offset, a = r.offset, o = n.isWindow(r.element) ? 0 : r.$element.offset()[t.offsetProp], n.isFunction(i) ? i = i.apply(r.element) : "string" == typeof i && (i = parseFloat(i), r.options.offset.indexOf("%") > -1 && (i = Math.ceil(t.contextDimension * i / 100))), r.offset = o - t.contextOffset + t.contextScroll - i, (!r.options.onlyOnScroll || null == a) && r.enabled) return null !== a && a < (s = t.oldScroll) && s <= r.offset ? r.trigger([t.backward]) : null !== a && a > (l = t.oldScroll) && l >= r.offset ? r.trigger([t.forward]) : null === a && t.oldScroll >= r.offset ? r.trigger([t.forward]) : void 0
                        })
                    })
                }, e.prototype.checkEmpty = function() {
                    if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) return this.$element.unbind([h, m].join(" ")), delete u[this.id]
                }, e
            }(), a = function() {
                function e(e, t, r) {
                    var i, o;
                    r = n.extend({}, n.fn[y].defaults, r), "bottom-in-view" === r.offset && (r.offset = function() {
                        var e;
                        return e = n[b]("viewportHeight"), n.isWindow(t.element) || (e = t.$element.height()), e - n(this).outerHeight()
                    }), this.$element = e, this.element = e[0], this.axis = r.horizontal ? "horizontal" : "vertical", this.callback = r.handler, this.context = t, this.enabled = r.enabled, this.id = "waypoints" + g++, this.offset = null, this.options = r, t.waypoints[this.axis][this.id] = this, s[this.axis][this.id] = this, i = null != (o = e.data(v)) ? o : [], i.push(this.id), e.data(v, i)
                }
                return e.prototype.trigger = function(e) {
                    if (this.enabled) return null != this.callback && this.callback.apply(this.element, e), this.options.triggerOnce ? this.destroy() : void 0
                }, e.prototype.disable = function() {
                    return this.enabled = !1
                }, e.prototype.enable = function() {
                    return this.context.refresh(), this.enabled = !0
                }, e.prototype.destroy = function() {
                    return delete s[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
                }, e.getWaypointsByElement = function(e) {
                    var t, r;
                    return (r = n(e).data(v)) ? (t = n.extend({}, s.horizontal, s.vertical), n.map(r, function(e) {
                        return t[e]
                    })) : []
                }, e
            }(), p = {
                init: function(e, t) {
                    var r;
                    return null == t && (t = {}), null == (r = t.handler) && (t.handler = e), this.each(function() {
                        var e, r, i, s;
                        return e = n(this), i = null != (s = t.context) ? s : n.fn[y].defaults.context, n.isWindow(i) || (i = e.closest(i)), i = n(i), r = u[i.data(c)], r || (r = new o(i)), new a(e, r, t)
                    }), n[b]("refresh"), this
                },
                disable: function() {
                    return p._invoke(this, "disable")
                },
                enable: function() {
                    return p._invoke(this, "enable")
                },
                destroy: function() {
                    return p._invoke(this, "destroy")
                },
                prev: function(e, t) {
                    return p._traverse.call(this, e, t, function(e, t, n) {
                        if (t > 0) return e.push(n[t - 1])
                    })
                },
                next: function(e, t) {
                    return p._traverse.call(this, e, t, function(e, t, n) {
                        if (t < n.length - 1) return e.push(n[t + 1])
                    })
                },
                _traverse: function(e, t, i) {
                    var o, a;
                    return null == e && (e = "vertical"), null == t && (t = r), a = f.aggregate(t), o = [], this.each(function() {
                        var t;
                        return t = n.inArray(this, a[e]), i(o, t, a[e])
                    }), this.pushStack(o)
                },
                _invoke: function(e, t) {
                    return e.each(function() {
                        var e;
                        return e = a.getWaypointsByElement(this), n.each(e, function(e, n) {
                            return n[t](), !0
                        })
                    }), this
                }
            }, n.fn[y] = function() {
                var e, r;
                return r = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], p[r] ? p[r].apply(this, e) : n.isFunction(r) ? p.init.apply(this, arguments) : n.isPlainObject(r) ? p.init.apply(this, [null, r]) : r ? n.error("The " + r + " method does not exist in jQuery Waypoints.") : n.error("jQuery Waypoints needs a callback function or handler option.")
            }, n.fn[y].defaults = {
                context: r,
                continuous: !0,
                enabled: !0,
                horizontal: !1,
                offset: 0,
                triggerOnce: !1
            }, f = {
                refresh: function() {
                    return n.each(u, function(e, t) {
                        return t.refresh()
                    })
                },
                viewportHeight: function() {
                    var e;
                    return null != (e = r.innerHeight) ? e : i.height()
                },
                aggregate: function(e) {
                    var t, r, i;
                    return t = s, e && (t = null != (i = u[n(e).data(c)]) ? i.waypoints : void 0), t ? (r = {
                        horizontal: [],
                        vertical: []
                    }, n.each(r, function(e, i) {
                        return n.each(t[e], function(e, t) {
                            return i.push(t)
                        }), i.sort(function(e, t) {
                            return e.offset - t.offset
                        }), r[e] = n.map(i, function(e) {
                            return e.element
                        }), r[e] = n.unique(r[e])
                    }), r) : []
                },
                above: function(e) {
                    return null == e && (e = r), f._filter(e, "vertical", function(e, t) {
                        return t.offset <= e.oldScroll.y
                    })
                },
                below: function(e) {
                    return null == e && (e = r), f._filter(e, "vertical", function(e, t) {
                        return t.offset > e.oldScroll.y
                    })
                },
                left: function(e) {
                    return null == e && (e = r), f._filter(e, "horizontal", function(e, t) {
                        return t.offset <= e.oldScroll.x
                    })
                },
                right: function(e) {
                    return null == e && (e = r), f._filter(e, "horizontal", function(e, t) {
                        return t.offset > e.oldScroll.x
                    })
                },
                enable: function() {
                    return f._invoke("enable")
                },
                disable: function() {
                    return f._invoke("disable")
                },
                destroy: function() {
                    return f._invoke("destroy")
                },
                extendFn: function(e, t) {
                    return p[e] = t
                },
                _invoke: function(e) {
                    var t;
                    return t = n.extend({}, s.vertical, s.horizontal), n.each(t, function(t, n) {
                        return n[e](), !0
                    })
                },
                _filter: function(e, t, r) {
                    var i, o;
                    return (i = u[n(e).data(c)]) ? (o = [], n.each(i.waypoints[t], function(e, t) {
                        if (r(i, t)) return o.push(t)
                    }), o.sort(function(e, t) {
                        return e.offset - t.offset
                    }), n.map(o, function(e) {
                        return e.element
                    })) : []
                }
            }, n[b] = function() {
                var e, n;
                return n = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], f[n] ? f[n].apply(null, e) : f.aggregate.call(null, n)
            }, n[b].settings = {
                resizeThrottle: 100,
                scrollThrottle: 30
            }, i.load(function() {
                return n[b]("refresh")
            })
        })
    }.call(this), ! function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
    }(function(e) {
        var t, n = navigator.userAgent,
            r = /iphone/i.test(n),
            i = /chrome/i.test(n),
            o = /android/i.test(n);
        e.mask = {
            definitions: {
                9: "[0-9]",
                _: "[0-9]",
                a: "[A-Za-z]",
                "*": "[A-Za-z0-9]"
            },
            autoclear: !0,
            dataName: "rawMaskFn",
            placeholder: "_"
        }, e.fn.extend({
            caret: function(e, t) {
                var n;
                if (0 !== this.length && !this.is(":hidden")) return "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each(function() {
                    this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && (n = this.createTextRange(), n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select())
                })) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (n = document.selection.createRange(), e = 0 - n.duplicate().moveStart("character", -1e5), t = e + n.text.length), {
                    begin: e,
                    end: t
                })
            },
            unmask: function() {
                return this.trigger("unmask")
            },
            mask: function(n, a) {
                var s, l, c, u, d, f, p, h;
                if (!n && this.length > 0) {
                    s = e(this[0]);
                    var m = s.data(e.mask.dataName);
                    return m ? m() : void 0
                }
                return a = e.extend({
                    autoclear: e.mask.autoclear,
                    placeholder: e.mask.placeholder,
                    completed: null
                }, a), l = e.mask.definitions, c = [], u = p = n.length, d = null, e.each(n.split(""), function(e, t) {
                    "?" == t ? (p--, u = e) : l[t] ? (c.push(new RegExp(l[t])), null === d && (d = c.length - 1), u > e && (f = c.length - 1)) : c.push(null)
                }), this.trigger("unmask").each(function() {
                    function s() {
                        if (a.completed) {
                            for (var e = d; f >= e; e++)
                                if (c[e] && j[e] === m(e)) return;
                            a.completed.call(N)
                        }
                    }

                    function m(e) {
                        return a.placeholder.charAt(e < a.placeholder.length ? e : 0)
                    }

                    function g(e) {
                        for (; ++e < p && !c[e];);
                        return e
                    }

                    function v(e) {
                        for (; --e >= 0 && !c[e];);
                        return e
                    }

                    function y(e, t) {
                        var n, r;
                        if (!(0 > e)) {
                            for (n = e, r = g(t); p > n; n++)
                                if (c[n]) {
                                    if (!(p > r && c[n].test(j[r]))) break;
                                    j[n] = j[r], j[r] = m(r), r = g(r)
                                }
                            S(), N.caret(Math.max(d, e))
                        }
                    }

                    function b(e) {
                        var t, n, r, i;
                        for (t = e, n = m(e); p > t; t++)
                            if (c[t]) {
                                if (r = g(t), i = j[t], j[t] = n, !(p > r && c[r].test(i))) break;
                                n = i
                            }
                    }

                    function x() {
                        var e = N.val(),
                            t = N.caret();
                        if (h && h.length && h.length > e.length) {
                            for (E(!0); t.begin > 0 && !c[t.begin - 1];) t.begin--;
                            if (0 === t.begin)
                                for (; t.begin < d && !c[t.begin];) t.begin++;
                            N.caret(t.begin, t.begin)
                        } else {
                            for (E(!0); t.begin < p && !c[t.begin];) t.begin++;
                            N.caret(t.begin, t.begin)
                        }
                        s()
                    }

                    function w() {
                        E(), N.val() != A && N.change()
                    }

                    function C(e) {
                        if (!N.prop("readonly")) {
                            var t, n, i, o = e.which || e.keyCode;
                            h = N.val(), 8 === o || 46 === o || r && 127 === o ? (t = N.caret(), n = t.begin, i = t.end, i - n === 0 && (n = 46 !== o ? v(n) : i = g(n - 1), i = 46 === o ? g(i) : i), T(n, i), y(n, i - 1), e.preventDefault()) : 13 === o ? w.call(this, e) : 27 === o && (N.val(A), N.caret(0, E()), e.preventDefault())
                        }
                    }

                    function k(t) {
                        if (!N.prop("readonly")) {
                            var n, r, i, a = t.which || t.keyCode,
                                l = N.caret();
                            if (!(t.ctrlKey || t.altKey || t.metaKey || 32 > a) && a && 13 !== a) {
                                if (l.end - l.begin !== 0 && (T(l.begin, l.end), y(l.begin, l.end - 1)), n = g(l.begin - 1), p > n && (r = String.fromCharCode(a), c[n].test(r))) {
                                    if (b(n), j[n] = r, S(), i = g(n), o) {
                                        var u = function() {
                                            e.proxy(e.fn.caret, N, i)()
                                        };
                                        setTimeout(u, 0)
                                    } else N.caret(i);
                                    l.begin <= f && s()
                                }
                                t.preventDefault()
                            }
                        }
                    }

                    function T(e, t) {
                        var n;
                        for (n = e; t > n && p > n; n++) c[n] && (j[n] = m(n))
                    }

                    function S() {
                        N.val(j.join(""))
                    }

                    function E(e) {
                        var t, n, r, i = N.val(),
                            o = -1;
                        for (t = 0, r = 0; p > t; t++)
                            if (c[t]) {
                                for (j[t] = m(t); r++ < i.length;)
                                    if (n = i.charAt(r - 1), c[t].test(n)) {
                                        j[t] = n, o = t;
                                        break
                                    }
                                if (r > i.length) {
                                    T(t + 1, p);
                                    break
                                }
                            } else j[t] === i.charAt(r) && r++, u > t && (o = t);
                        return e ? S() : u > o + 1 ? a.autoclear || j.join("") === O ? (N.val() && N.val(""), T(0, p)) : S() : (S(), N.val(N.val().substring(0, o + 1))), u ? t : d
                    }
                    var N = e(this),
                        j = e.map(n.split(""), function(e, t) {
                            return "?" != e ? l[e] ? m(t) : e : void 0
                        }),
                        O = j.join(""),
                        A = N.val();
                    N.data(e.mask.dataName, function() {
                        return e.map(j, function(e, t) {
                            return c[t] && e != m(t) ? e : null
                        }).join("")
                    }), N.one("unmask", function() {
                        N.off(".mask").removeData(e.mask.dataName)
                    }).on("focus.mask", function() {
                        if (!N.prop("readonly")) {
                            clearTimeout(t);
                            var e;
                            A = N.val(), e = E(), t = setTimeout(function() {
                                N.get(0) === document.activeElement && (S(), e == n.replace("?", "").length ? N.caret(0, e) : N.caret(e))
                            }, 10)
                        }
                    }).on("blur.mask", w).on("keydown.mask", C).on("keypress.mask", k).on("input.mask paste.mask", function() {
                        N.prop("readonly") || setTimeout(function() {
                            var e = E(!0);
                            N.caret(e), s()
                        }, 0)
                    }), i && o && N.off("input.mask").on("input.mask", x), E()
                })
            }
        })
    }),
    function(e) {
        e.extend({
            browserSelector: function() {
                var e = navigator.userAgent,
                    t = e.toLowerCase(),
                    n = function(e) {
                        return t.indexOf(e) > -1
                    },
                    r = "gecko",
                    i = "webkit",
                    o = "safari",
                    a = "opera",
                    s = document.documentElement,
                    l = [!/opera|webtv/i.test(t) && /msie\s(\d)/.test(t) ? "ie ie" + parseFloat(navigator.appVersion.split("MSIE")[1]) : n("firefox/2") ? r + " ff2" : n("firefox/3.5") ? r + " ff3 ff3_5" : n("firefox/3") ? r + " ff3" : n("gecko/") ? r : n("opera") ? a + (/version\/(\d+)/.test(t) ? " " + a + RegExp.jQuery1 : /opera(\s|\/)(\d+)/.test(t) ? " " + a + RegExp.jQuery2 : "") : n("konqueror") ? "konqueror" : n("chrome") ? i + " chrome" : n("iron") ? i + " iron" : n("applewebkit/") ? i + " " + o + (/version\/(\d+)/.test(t) ? " " + o + RegExp.jQuery1 : "") : n("mozilla/") ? r : "", n("j2me") ? "mobile" : n("iphone") ? "iphone" : n("ipod") ? "ipod" : n("mac") ? "mac" : n("darwin") ? "mac" : n("webtv") ? "webtv" : n("win") ? "win" : n("freebsd") ? "freebsd" : n("x11") || n("linux") ? "linux" : "", "js"];
                c = l.join(" "), s.className += " " + c
            }
        })
    }(jQuery),
    function(e) {
        e.extend({
            smoothScroll: function() {
                function e() {
                    var e = !1;
                    if (document.URL.indexOf("google.com/reader/view") > -1 && (e = !0), b.excluded) {
                        var t = b.excluded.split(/[,\n] ?/);
                        t.push("mail.google.com");
                        for (var n = t.length; n--;)
                            if (document.URL.indexOf(t[n]) > -1) {
                                v && v.disconnect(), c("mousewheel", r), e = !0, x = !0;
                                break
                            }
                    }
                    e && c("keydown", i), b.keyboardSupport && !e && l("keydown", i)
                }

                function t() {
                    if (document.body) {
                        var t = document.body,
                            n = document.documentElement,
                            r = window.innerHeight,
                            i = t.scrollHeight;
                        if (T = document.compatMode.indexOf("CSS") >= 0 ? n : t, g = t, e(), k = !0, top != self) w = !0;
                        else if (i > r && (t.offsetHeight <= r || n.offsetHeight <= r)) {
                            var o = !1,
                                a = function() {
                                    o || n.scrollHeight == document.height || (o = !0, setTimeout(function() {
                                        n.style.height = document.height + "px", o = !1
                                    }, 500))
                                };
                            n.style.height = "auto", setTimeout(a, 10);
                            var s = {
                                attributes: !0,
                                childList: !0,
                                characterData: !1
                            };
                            if (v = new $(a), v.observe(t, s), T.offsetHeight <= r) {
                                var l = document.createElement("div");
                                l.style.clear = "both", t.appendChild(l)
                            }
                        }
                        if (document.URL.indexOf("mail.google.com") > -1) {
                            var c = document.createElement("style");
                            c.innerHTML = ".iu { visibility: hidden }", (document.getElementsByTagName("head")[0] || n).appendChild(c)
                        } else if (document.URL.indexOf("www.facebook.com") > -1) {
                            var u = document.getElementById("home_stream");
                            u && (u.style.webkitTransform = "translateZ(0)")
                        }
                        b.fixedBackground || x || (t.style.backgroundAttachment = "scroll", n.style.backgroundAttachment = "scroll")
                    }
                }

                function n(e, t, n, r) {
                    if (r || (r = 1e3), d(t, n), 1 != b.accelerationMax) {
                        var i = +new Date,
                            o = i - O;
                        if (o < b.accelerationDelta) {
                            var a = (1 + 30 / o) / 2;
                            a > 1 && (a = Math.min(a, b.accelerationMax), t *= a, n *= a)
                        }
                        O = +new Date
                    }
                    if (N.push({
                            x: t,
                            y: n,
                            lastX: t < 0 ? .99 : -.99,
                            lastY: n < 0 ? .99 : -.99,
                            start: +new Date
                        }), !j) {
                        var s = e === document.body,
                            l = function(i) {
                                for (var o = +new Date, a = 0, c = 0, u = 0; u < N.length; u++) {
                                    var d = N[u],
                                        f = o - d.start,
                                        p = f >= b.animationTime,
                                        h = p ? 1 : f / b.animationTime;
                                    b.pulseAlgorithm && (h = m(h));
                                    var g = d.x * h - d.lastX >> 0,
                                        v = d.y * h - d.lastY >> 0;
                                    a += g, c += v, d.lastX += g, d.lastY += v, p && (N.splice(u, 1), u--)
                                }
                                s ? window.scrollBy(a, c) : (a && (e.scrollLeft += a), c && (e.scrollTop += c)), t || n || (N = []), N.length ? M(l, e, r / b.frameRate + 1) : j = !1
                            };
                        M(l, e, 0), j = !0
                    }
                }

                function r(e) {
                    k || t();
                    var r = e.target,
                        i = s(r);
                    if (!i || e.defaultPrevented || u(g, "embed") || u(r, "embed") && /\.pdf/i.test(r.src)) return !0;
                    var o = e.wheelDeltaX || 0,
                        a = e.wheelDeltaY || 0;
                    return o || a || (a = e.wheelDelta || 0), !(b.touchpadSupport || !f(a)) || (Math.abs(o) > 1.2 && (o *= b.stepSize / 120), Math.abs(a) > 1.2 && (a *= b.stepSize / 120), n(i, -o, -a), void e.preventDefault())
                }

                function i(e) {
                    var t = e.target,
                        r = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== E.spacebar;
                    if (/input|textarea|select|embed/i.test(t.nodeName) || t.isContentEditable || e.defaultPrevented || r) return !0;
                    if (u(t, "button") && e.keyCode === E.spacebar) return !0;
                    var i, o = 0,
                        a = 0,
                        l = s(g),
                        c = l.clientHeight;
                    switch (l == document.body && (c = window.innerHeight), e.keyCode) {
                        case E.up:
                            a = -b.arrowScroll;
                            break;
                        case E.down:
                            a = b.arrowScroll;
                            break;
                        case E.spacebar:
                            i = e.shiftKey ? 1 : -1, a = -i * c * .9;
                            break;
                        case E.pageup:
                            a = .9 * -c;
                            break;
                        case E.pagedown:
                            a = .9 * c;
                            break;
                        case E.home:
                            a = -l.scrollTop;
                            break;
                        case E.end:
                            var d = l.scrollHeight - l.scrollTop - c;
                            a = d > 0 ? d + 10 : 0;
                            break;
                        case E.left:
                            o = -b.arrowScroll;
                            break;
                        case E.right:
                            o = b.arrowScroll;
                            break;
                        default:
                            return !0
                    }
                    n(l, o, a), e.preventDefault()
                }

                function o(e) {
                    g = e.target
                }

                function a(e, t) {
                    for (var n = e.length; n--;) A[D(e[n])] = t;
                    return t
                }

                function s(e) {
                    var t = [],
                        n = T.scrollHeight;
                    do {
                        var r = A[D(e)];
                        if (r) return a(t, r);
                        if (t.push(e), n === e.scrollHeight) {
                            if (!w || T.clientHeight + 10 < n) return a(t, document.body)
                        } else if (e.clientHeight + 10 < e.scrollHeight && (overflow = getComputedStyle(e, "").getPropertyValue("overflow-y"), "scroll" === overflow || "auto" === overflow)) return a(t, e)
                    } while (e = e.parentNode)
                }

                function l(e, t, n) {
                    window.addEventListener(e, t, n || !1)
                }

                function c(e, t, n) {
                    window.removeEventListener(e, t, n || !1)
                }

                function u(e, t) {
                    return (e.nodeName || "").toLowerCase() === t.toLowerCase()
                }

                function d(e, t) {
                    e = e > 0 ? 1 : -1, t = t > 0 ? 1 : -1, C.x === e && C.y === t || (C.x = e, C.y = t, N = [], O = 0)
                }

                function f(e) {
                    if (e) {
                        e = Math.abs(e), S.push(e), S.shift(), clearTimeout(L);
                        var t = S[0] == S[1] && S[1] == S[2],
                            n = p(S[0], 120) && p(S[1], 120) && p(S[2], 120);
                        return !(t || n)
                    }
                }

                function p(e, t) {
                    return Math.floor(e / t) == e / t
                }

                function h(e) {
                    var t, n, r;
                    return e *= b.pulseScale, e < 1 ? t = e - (1 - Math.exp(-e)) : (n = Math.exp(-1), e -= 1, r = 1 - Math.exp(-e), t = n + r * (1 - n)), t * b.pulseNormalize
                }

                function m(e) {
                    return e >= 1 ? 1 : e <= 0 ? 0 : (1 == b.pulseNormalize && (b.pulseNormalize /= h(1)), h(e))
                }
                var g, v, y = {
                        frameRate: 150,
                        animationTime: 700,
                        stepSize: 40,
                        pulseAlgorithm: !0,
                        pulseScale: 8,
                        pulseNormalize: 1,
                        accelerationDelta: 20,
                        accelerationMax: 1,
                        keyboardSupport: !0,
                        arrowScroll: 50,
                        touchpadSupport: !0,
                        fixedBackground: !0,
                        excluded: ""
                    },
                    b = y,
                    x = !1,
                    w = !1,
                    C = {
                        x: 0,
                        y: 0
                    },
                    k = !1,
                    T = document.documentElement,
                    S = [120, 120, 120],
                    E = {
                        left: 37,
                        up: 38,
                        right: 39,
                        down: 40,
                        spacebar: 32,
                        pageup: 33,
                        pagedown: 34,
                        end: 35,
                        home: 36
                    },
                    N = [],
                    j = !1,
                    O = +new Date,
                    A = {};
                setInterval(function() {
                    A = {}
                }, 1e4);
                var L, D = function() {
                        var e = 0;
                        return function(t) {
                            return t.uniqueID || (t.uniqueID = e++)
                        }
                    }(),
                    M = function() {
                        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(e, t, n) {
                            window.setTimeout(e, n || 1e3 / 60)
                        }
                    }(),
                    $ = window.MutationObserver || window.WebKitMutationObserver;
                l("mousedown", o), l("mousewheel", r), l("load", t)
            }
        })
    }(jQuery),
    function(e) {
        function t(t, r, a, s, l) {
            function c() {
                m.unbind("webkitTransitionEnd transitionend otransitionend oTransitionEnd"), r && n(r, a, s, l), l.startOrder = [], l.newOrder = [], l.origSort = [], l.checkSort = [], h.removeStyle(l.prefix + "filter, filter, " + l.prefix + "transform, transform, opacity, display").css(l.clean).removeAttr("data-checksum"), window.atob || h.css({
                    display: "none",
                    opacity: "0"
                }), m.removeStyle(l.prefix + "transition, transition, " + l.prefix + "perspective, perspective, " + l.prefix + "perspective-origin, perspective-origin, " + (l.resizeContainer ? "height" : "")), "list" == l.layoutMode ? (g.css({
                    display: l.targetDisplayList,
                    opacity: "1"
                }), l.origDisplay = l.targetDisplayList) : (g.css({
                    display: l.targetDisplayGrid,
                    opacity: "1"
                }), l.origDisplay = l.targetDisplayGrid), l.origLayout = l.layoutMode, setTimeout(function() {
                    if (h.removeStyle(l.prefix + "transition, transition"), l.mixing = !1, "function" == typeof l.onMixEnd) {
                        var e = l.onMixEnd.call(this, l);
                        l = e ? e : l
                    }
                })
            }
            if (clearInterval(l.failsafe), l.mixing = !0, l.filter = t, "function" == typeof l.onMixStart) {
                var u = l.onMixStart.call(this, l);
                l = u ? u : l
            }
            for (var d = l.transitionSpeed, u = 0; 2 > u; u++) {
                var f = 0 == u ? f = l.prefix : "";
                l.transition[f + "transition"] = "all " + d + "ms linear", l.transition[f + "transform"] = f + "translate3d(0,0,0)", l.perspective[f + "perspective"] = l.perspectiveDistance + "px", l.perspective[f + "perspective-origin"] = l.perspectiveOrigin
            }
            var p = l.targetSelector,
                h = s.find(p);
            h.each(function() {
                this.data = {}
            });
            var m = h.parent();
            m.css(l.perspective), l.easingFallback = "ease-in-out", "smooth" == l.easing && (l.easing = "cubic-bezier(0.25, 0.46, 0.45, 0.94)"), "snap" == l.easing && (l.easing = "cubic-bezier(0.77, 0, 0.175, 1)"), "windback" == l.easing && (l.easing = "cubic-bezier(0.175, 0.885, 0.320, 1.275)", l.easingFallback = "cubic-bezier(0.175, 0.885, 0.320, 1)"), "windup" == l.easing && (l.easing = "cubic-bezier(0.6, -0.28, 0.735, 0.045)", l.easingFallback = "cubic-bezier(0.6, 0.28, 0.735, 0.045)"), u = "list" == l.layoutMode && null != l.listEffects ? l.listEffects : l.effects, Array.prototype.indexOf && (l.fade = -1 < u.indexOf("fade") ? "0" : "", l.scale = -1 < u.indexOf("scale") ? "scale(.01)" : "", l.rotateZ = -1 < u.indexOf("rotateZ") ? "rotate(180deg)" : "", l.rotateY = -1 < u.indexOf("rotateY") ? "rotateY(90deg)" : "", l.rotateX = -1 < u.indexOf("rotateX") ? "rotateX(90deg)" : "", l.blur = -1 < u.indexOf("blur") ? "blur(8px)" : "", l.grayscale = -1 < u.indexOf("grayscale") ? "grayscale(100%)" : "");
            var g = e(),
                v = e(),
                y = [],
                b = !1;
            "string" == typeof t ? y = o(t) : (b = !0, e.each(t, function(e) {
                y[e] = o(this)
            })), "or" == l.filterLogic ? ("" == y[0] && y.shift(), 1 > y.length ? v = v.add(s.find(p + ":visible")) : h.each(function() {
                var t = e(this);
                if (b) {
                    var n = 0;
                    e.each(y, function(e) {
                        this.length ? t.is("." + this.join(", .")) && n++ : 0 < n && n++
                    }), n == y.length ? g = g.add(t) : v = v.add(t)
                } else t.is("." + y.join(", .")) ? g = g.add(t) : v = v.add(t)
            })) : (g = g.add(m.find(p + "." + y.join("."))), v = v.add(m.find(p + ":not(." + y.join(".") + "):visible"))), t = g.length;
            var x = e(),
                w = e(),
                C = e();
            if (v.each(function() {
                    var t = e(this);
                    "none" != t.css("display") && (x = x.add(t), C = C.add(t))
                }), g.filter(":visible").length == t && !x.length && !r) {
                if (l.origLayout == l.layoutMode) return c(), !1;
                if (1 == g.length) return "list" == l.layoutMode ? (s.addClass(l.listClass), s.removeClass(l.gridClass), C.css("display", l.targetDisplayList)) : (s.addClass(l.gridClass), s.removeClass(l.listClass), C.css("display", l.targetDisplayGrid)), c(), !1
            }
            if (l.origHeight = m.height(), g.length) {
                if (s.removeClass(l.failClass), g.each(function() {
                        var t = e(this);
                        "none" == t.css("display") ? w = w.add(t) : C = C.add(t)
                    }), l.origLayout != l.layoutMode && 0 == l.animateGridList) return "list" == l.layoutMode ? (s.addClass(l.listClass), s.removeClass(l.gridClass), C.css("display", l.targetDisplayList)) : (s.addClass(l.gridClass), s.removeClass(l.listClass), C.css("display", l.targetDisplayGrid)), c(), !1;
                if (!window.atob) return c(), !1;
                if (h.css(l.clean), C.each(function() {
                        this.data.origPos = e(this).offset()
                    }), "list" == l.layoutMode ? (s.addClass(l.listClass), s.removeClass(l.gridClass), w.css("display", l.targetDisplayList)) : (s.addClass(l.gridClass), s.removeClass(l.listClass), w.css("display", l.targetDisplayGrid)), w.each(function() {
                        this.data.showInterPos = e(this).offset()
                    }), x.each(function() {
                        this.data.hideInterPos = e(this).offset()
                    }), C.each(function() {
                        this.data.preInterPos = e(this).offset()
                    }), "list" == l.layoutMode ? C.css("display", l.targetDisplayList) : C.css("display", l.targetDisplayGrid), r && n(r, a, s, l), r && i(l.origSort, l.checkSort)) return c(), !1;
                for (x.hide(), w.each(function(t) {
                        this.data.finalPos = e(this).offset()
                    }), C.each(function() {
                        this.data.finalPrePos = e(this).offset()
                    }), l.newHeight = m.height(), r && n("reset", null, s, l), w.hide(), C.css("display", l.origDisplay), "block" == l.origDisplay ? (s.addClass(l.listClass), w.css("display", l.targetDisplayList)) : (s.removeClass(l.listClass), w.css("display", l.targetDisplayGrid)), l.resizeContainer && m.css("height", l.origHeight + "px"), t = {}, u = 0; 2 > u; u++) f = 0 == u ? f = l.prefix : "", t[f + "transform"] = l.scale + " " + l.rotateX + " " + l.rotateY + " " + l.rotateZ, t[f + "filter"] = l.blur + " " + l.grayscale;
                w.css(t), C.each(function() {
                    var t = this.data,
                        n = e(this);
                    n.hasClass("mix_tohide") ? (t.preTX = t.origPos.left - t.hideInterPos.left, t.preTY = t.origPos.top - t.hideInterPos.top) : (t.preTX = t.origPos.left - t.preInterPos.left, t.preTY = t.origPos.top - t.preInterPos.top);
                    for (var r = {}, i = 0; 2 > i; i++) {
                        var o = 0 == i ? o = l.prefix : "";
                        r[o + "transform"] = "translate(" + t.preTX + "px," + t.preTY + "px)"
                    }
                    n.css(r)
                }), "list" == l.layoutMode ? (s.addClass(l.listClass), s.removeClass(l.gridClass)) : (s.addClass(l.gridClass), s.removeClass(l.listClass)), setTimeout(function() {
                    if (l.resizeContainer) {
                        for (var t = {}, n = 0; 2 > n; n++) {
                            var r = 0 == n ? r = l.prefix : "";
                            t[r + "transition"] = "all " + d + "ms ease-in-out",
                                t.height = l.newHeight + "px"
                        }
                        m.css(t)
                    }
                    for (x.css("opacity", l.fade), w.css("opacity", 1), w.each(function() {
                            var t = this.data;
                            t.tX = t.finalPos.left - t.showInterPos.left, t.tY = t.finalPos.top - t.showInterPos.top;
                            for (var n = {}, r = 0; 2 > r; r++) {
                                var i = 0 == r ? i = l.prefix : "";
                                n[i + "transition-property"] = i + "transform, " + i + "filter, opacity", n[i + "transition-timing-function"] = l.easing + ", linear, linear", n[i + "transition-duration"] = d + "ms", n[i + "transition-delay"] = "0", n[i + "transform"] = "translate(" + t.tX + "px," + t.tY + "px)", n[i + "filter"] = "none"
                            }
                            e(this).css("-webkit-transition", "all " + d + "ms " + l.easingFallback).css(n)
                        }), C.each(function() {
                            var t = this.data;
                            t.tX = 0 != t.finalPrePos.left ? t.finalPrePos.left - t.preInterPos.left : 0, t.tY = 0 != t.finalPrePos.left ? t.finalPrePos.top - t.preInterPos.top : 0;
                            for (var n = {}, r = 0; 2 > r; r++) {
                                var i = 0 == r ? i = l.prefix : "";
                                n[i + "transition"] = "all " + d + "ms " + l.easing, n[i + "transform"] = "translate(" + t.tX + "px," + t.tY + "px)"
                            }
                            e(this).css("-webkit-transition", "all " + d + "ms " + l.easingFallback).css(n)
                        }), t = {}, n = 0; 2 > n; n++) r = 0 == n ? r = l.prefix : "", t[r + "transition"] = "all " + d + "ms " + l.easing + ", " + r + "filter " + d + "ms linear, opacity " + d + "ms linear", t[r + "transform"] = l.scale + " " + l.rotateX + " " + l.rotateY + " " + l.rotateZ, t[r + "filter"] = l.blur + " " + l.grayscale, t.opacity = l.fade;
                    x.css(t), m.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd", function(t) {
                        (-1 < t.originalEvent.propertyName.indexOf("transform") || -1 < t.originalEvent.propertyName.indexOf("opacity")) && (-1 < p.indexOf(".") ? e(t.target).hasClass(p.replace(".", "")) && c() : e(t.target).is(p) && c())
                    })
                }, 10), l.failsafe = setTimeout(function() {
                    l.mixing && c()
                }, d + 400)
            } else {
                if (l.resizeContainer && m.css("height", l.origHeight + "px"), !window.atob) return c(), !1;
                x = v, setTimeout(function() {
                    if (m.css(l.perspective), l.resizeContainer) {
                        for (var e = {}, t = 0; 2 > t; t++) {
                            var n = 0 == t ? n = l.prefix : "";
                            e[n + "transition"] = "height " + d + "ms ease-in-out", e.height = l.minHeight + "px"
                        }
                        m.css(e)
                    }
                    if (h.css(l.transition), v.length) {
                        for (e = {}, t = 0; 2 > t; t++) n = 0 == t ? n = l.prefix : "", e[n + "transform"] = l.scale + " " + l.rotateX + " " + l.rotateY + " " + l.rotateZ, e[n + "filter"] = l.blur + " " + l.grayscale, e.opacity = l.fade;
                        x.css(e), m.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd", function(e) {
                            (-1 < e.originalEvent.propertyName.indexOf("transform") || -1 < e.originalEvent.propertyName.indexOf("opacity")) && (s.addClass(l.failClass), c())
                        })
                    } else l.mixing = !1
                }, 10)
            }
        }

        function n(t, n, r, i) {
            function o(e, n) {
                var r = isNaN(1 * e.attr(t)) ? e.attr(t).toLowerCase() : 1 * e.attr(t),
                    i = isNaN(1 * n.attr(t)) ? n.attr(t).toLowerCase() : 1 * n.attr(t);
                return r < i ? -1 : r > i ? 1 : 0
            }

            function a(e) {
                "asc" == n ? l.prepend(e).prepend(" ") : l.append(e).append(" ")
            }

            function s(e) {
                e = e.slice();
                for (var t = e.length, n = t; n--;) {
                    var r = parseInt(Math.random() * t),
                        i = e[n];
                    e[n] = e[r], e[r] = i
                }
                return e
            }
            r.find(i.targetSelector).wrapAll('<div class="mix_sorter"/>');
            var l = r.find(".mix_sorter");
            if (i.origSort.length || l.find(i.targetSelector + ":visible").each(function() {
                    e(this).wrap("<s/>"), i.origSort.push(e(this).parent().html().replace(/\s+/g, "")), e(this).unwrap()
                }), l.empty(), "reset" == t) e.each(i.startOrder, function() {
                l.append(this).append(" ")
            });
            else if ("default" == t) e.each(i.origOrder, function() {
                a(this)
            });
            else if ("random" == t) i.newOrder.length || (i.newOrder = s(i.startOrder)), e.each(i.newOrder, function() {
                l.append(this).append(" ")
            });
            else if ("custom" == t) e.each(n, function() {
                a(this)
            });
            else {
                if ("undefined" == typeof i.origOrder[0].attr(t)) return console.log("No such attribute found. Terminating"), !1;
                i.newOrder.length || (e.each(i.origOrder, function() {
                    i.newOrder.push(e(this))
                }), i.newOrder.sort(o)), e.each(i.newOrder, function() {
                    a(this)
                })
            }
            i.checkSort = [], l.find(i.targetSelector + ":visible").each(function(t) {
                var n = e(this);
                0 == t && n.attr("data-checksum", "1"), n.wrap("<s/>"), i.checkSort.push(n.parent().html().replace(/\s+/g, "")), n.unwrap()
            }), r.find(i.targetSelector).unwrap()
        }

        function r(e) {
            for (var t = ["Webkit", "Moz", "O", "ms"], n = 0; n < t.length; n++)
                if (t[n] + "Transition" in e.style) return t[n];
            return "transition" in e.style && ""
        }

        function i(e, t) {
            if (e.length != t.length) return !1;
            for (var n = 0; n < t.length; n++)
                if (e[n].compare && !e[n].compare(t[n]) || e[n] !== t[n]) return !1;
            return !0
        }

        function o(t) {
            t = t.replace(/\s{2,}/g, " ");
            var n = t.split(" ");
            return e.each(n, function(e) {
                "all" == this && (n[e] = "mix_all")
            }), "" == n[0] && n.shift(), n
        }
        var a = {
            init: function(i) {
                return this.each(function() {
                    var o = window.navigator.appVersion.match(/Chrome\/(\d+)\./),
                        o = !!o && parseInt(o[1], 10),
                        a = function(e) {
                            e = document.getElementById(e);
                            var t = e.parentElement,
                                n = document.createElement("div"),
                                r = document.createDocumentFragment();
                            t.insertBefore(n, e), r.appendChild(e), t.replaceChild(e, n)
                        };
                    (o && 31 == o || 32 == o) && a(this.id);
                    var s = {
                        targetSelector: ".mix",
                        filterSelector: ".filter",
                        sortSelector: ".sort",
                        buttonEvent: "click",
                        effects: ["fade", "scale"],
                        listEffects: null,
                        easing: "smooth",
                        layoutMode: "grid",
                        targetDisplayGrid: "inline-block",
                        targetDisplayList: "block",
                        listClass: "",
                        gridClass: "",
                        transitionSpeed: 600,
                        showOnLoad: "all",
                        sortOnLoad: !1,
                        multiFilter: !1,
                        filterLogic: "or",
                        resizeContainer: !0,
                        minHeight: 0,
                        failClass: "fail",
                        perspectiveDistance: "3000",
                        perspectiveOrigin: "50% 50%",
                        animateGridList: !0,
                        onMixLoad: null,
                        onMixStart: null,
                        onMixEnd: null,
                        container: null,
                        origOrder: [],
                        startOrder: [],
                        newOrder: [],
                        origSort: [],
                        checkSort: [],
                        filter: "",
                        mixing: !1,
                        origDisplay: "",
                        origLayout: "",
                        origHeight: 0,
                        newHeight: 0,
                        isTouch: !1,
                        resetDelay: 0,
                        failsafe: null,
                        prefix: "",
                        easingFallback: "ease-in-out",
                        transition: {},
                        perspective: {},
                        clean: {},
                        fade: "1",
                        scale: "",
                        rotateX: "",
                        rotateY: "",
                        rotateZ: "",
                        blur: "",
                        grayscale: ""
                    };
                    i && e.extend(s, i), this.config = s, e.support.touch = "ontouchend" in document, e.support.touch && (s.isTouch = !0, s.resetDelay = 350), s.container = e(this);
                    var l = s.container;
                    if (s.prefix = r(l[0]), s.prefix = s.prefix ? "-" + s.prefix.toLowerCase() + "-" : "", l.find(s.targetSelector).each(function() {
                            s.origOrder.push(e(this))
                        }), s.sortOnLoad) {
                        var c;
                        e.isArray(s.sortOnLoad) ? (o = s.sortOnLoad[0], c = s.sortOnLoad[1], e(s.sortSelector + "[data-sort=" + s.sortOnLoad[0] + "][data-order=" + s.sortOnLoad[1] + "]").addClass("active")) : (e(s.sortSelector + "[data-sort=" + s.sortOnLoad + "]").addClass("active"), o = s.sortOnLoad, s.sortOnLoad = "desc"), n(o, c, l, s)
                    }
                    for (c = 0; 2 > c; c++) o = 0 == c ? o = s.prefix : "", s.transition[o + "transition"] = "all " + s.transitionSpeed + "ms ease-in-out", s.perspective[o + "perspective"] = s.perspectiveDistance + "px", s.perspective[o + "perspective-origin"] = s.perspectiveOrigin;
                    for (c = 0; 2 > c; c++) o = 0 == c ? o = s.prefix : "", s.clean[o + "transition"] = "none";
                    "list" == s.layoutMode ? (l.addClass(s.listClass), s.origDisplay = s.targetDisplayList) : (l.addClass(s.gridClass), s.origDisplay = s.targetDisplayGrid), s.origLayout = s.layoutMode, c = s.showOnLoad.split(" "), e.each(c, function() {
                        e(s.filterSelector + '[data-filter="' + this + '"]').addClass("active")
                    }), l.find(s.targetSelector).addClass("mix_all"), "all" == c[0] && (c[0] = "mix_all", s.showOnLoad = "mix_all");
                    var u = e();
                    e.each(c, function() {
                        u = u.add(e("." + this))
                    }), u.each(function() {
                        var t = e(this);
                        "list" == s.layoutMode ? t.css("display", s.targetDisplayList) : t.css("display", s.targetDisplayGrid), t.css(s.transition)
                    }), setTimeout(function() {
                        s.mixing = !0, u.css("opacity", "1"), setTimeout(function() {
                            if ("list" == s.layoutMode ? u.removeStyle(s.prefix + "transition, transition").css({
                                    display: s.targetDisplayList,
                                    opacity: 1
                                }) : u.removeStyle(s.prefix + "transition, transition").css({
                                    display: s.targetDisplayGrid,
                                    opacity: 1
                                }), s.mixing = !1, "function" == typeof s.onMixLoad) {
                                var e = s.onMixLoad.call(this, s);
                                s = e ? e : s
                            }
                        }, s.transitionSpeed)
                    }, 10), s.filter = s.showOnLoad, e(s.sortSelector).bind(s.buttonEvent, function() {
                        if (!s.mixing) {
                            var n = e(this),
                                r = n.attr("data-sort"),
                                i = n.attr("data-order");
                            if (n.hasClass("active")) {
                                if ("random" != r) return !1
                            } else e(s.sortSelector).removeClass("active"), n.addClass("active");
                            l.find(s.targetSelector).each(function() {
                                s.startOrder.push(e(this))
                            }), t(s.filter, r, i, l, s)
                        }
                    }), e(s.filterSelector).bind(s.buttonEvent, function() {
                        if (!s.mixing) {
                            var n = e(this);
                            if (0 == s.multiFilter) e(s.filterSelector).removeClass("active"), n.addClass("active"), s.filter = n.attr("data-filter"), e(s.filterSelector + '[data-filter="' + s.filter + '"]').addClass("active");
                            else {
                                var r = n.attr("data-filter");
                                n.hasClass("active") ? (n.removeClass("active"), s.filter = s.filter.replace(RegExp("(\\s|^)" + r), "")) : (n.addClass("active"), s.filter = s.filter + " " + r)
                            }
                            t(s.filter, null, null, l, s)
                        }
                    })
                })
            },
            toGrid: function() {
                return this.each(function() {
                    var n = this.config;
                    "grid" != n.layoutMode && (n.layoutMode = "grid", t(n.filter, null, null, e(this), n))
                })
            },
            toList: function() {
                return this.each(function() {
                    var n = this.config;
                    "list" != n.layoutMode && (n.layoutMode = "list", t(n.filter, null, null, e(this), n))
                })
            },
            filter: function(n) {
                return this.each(function() {
                    var r = this.config;
                    r.mixing || (e(r.filterSelector).removeClass("active"), e(r.filterSelector + '[data-filter="' + n + '"]').addClass("active"), t(n, null, null, e(this), r))
                })
            },
            sort: function(n) {
                return this.each(function() {
                    var r = this.config,
                        i = e(this);
                    if (!r.mixing) {
                        if (e(r.sortSelector).removeClass("active"), e.isArray(n)) {
                            var o = n[0],
                                a = n[1];
                            e(r.sortSelector + '[data-sort="' + n[0] + '"][data-order="' + n[1] + '"]').addClass("active")
                        } else e(r.sortSelector + '[data-sort="' + n + '"]').addClass("active"), o = n, a = "desc";
                        i.find(r.targetSelector).each(function() {
                            r.startOrder.push(e(this))
                        }), t(r.filter, o, a, i, r)
                    }
                })
            },
            multimix: function(n) {
                return this.each(function() {
                    var r = this.config,
                        i = e(this);
                    multiOut = {
                        filter: r.filter,
                        sort: null,
                        order: "desc",
                        layoutMode: r.layoutMode
                    }, e.extend(multiOut, n), r.mixing || (e(r.filterSelector).add(r.sortSelector).removeClass("active"), e(r.filterSelector + '[data-filter="' + multiOut.filter + '"]').addClass("active"), "undefined" != typeof multiOut.sort && (e(r.sortSelector + '[data-sort="' + multiOut.sort + '"][data-order="' + multiOut.order + '"]').addClass("active"), i.find(r.targetSelector).each(function() {
                        r.startOrder.push(e(this))
                    })), r.layoutMode = multiOut.layoutMode, t(multiOut.filter, multiOut.sort, multiOut.order, i, r))
                })
            },
            remix: function(n) {
                return this.each(function() {
                    var r = this.config,
                        i = e(this);
                    r.origOrder = [], i.find(r.targetSelector).each(function() {
                        var t = e(this);
                        t.addClass("mix_all"), r.origOrder.push(t)
                    }), r.mixing || "undefined" == typeof n || (e(r.filterSelector).removeClass("active"), e(r.filterSelector + '[data-filter="' + n + '"]').addClass("active"), t(n, null, null, i, r))
                })
            }
        };
        e.fn.mixitup = function(e, t) {
            return a[e] ? a[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void 0 : a.init.apply(this, arguments)
        }, e.fn.removeStyle = function(t) {
            return this.each(function() {
                var n = e(this);
                t = t.replace(/\s+/g, "");
                var r = t.split(",");
                e.each(r, function() {
                    var e = RegExp(this.toString() + "[^;]+;?", "g");
                    n.attr("style", function(t, n) {
                        if (n) return n.replace(e, "")
                    })
                })
            })
        }
    }(jQuery),
    function(e, t) {
        "use strict";
        var n = e(t);
        e.Resize = function(t, n) {
            this.el = e(n), this.init(t)
        }, e.Resize.defaults = {
            speed: 300,
            gutter: 2,
            cursorcolor: "#ff8b84"
        }, e.Resize.prototype = {
            init: function(t) {
                this.o = e.extend({}, e.Resize.defaults, t);
                var n = this;
                this.resize(n)
            },
            resize: function(t) {
                t.refreshElements(), n.width() > 767 ? (t.el.getNiceScroll().show(), t.niceScroll(), t.layout()) : (t.el.getNiceScroll().hide(), t.el.children(".grid").attr("style", ""), t.items.each(function() {
                    e(this).attr("style", "")
                }), t.box.each(function() {
                    e(this).attr("style", "")
                })), n.on("resize", function() {
                    n.width() > 767 && t.layout()
                })
            },
            layout: function() {
                var e = this;
                this.el.css({
                    height: e._screenAdjust()
                }), this._elemWH(this.box, this.items, e)
            },
            elements: {
                ".gr-box": "box",
                ".item": "items"
            },
            $: function(t) {
                return e(t, this.el)
            },
            refreshElements: function() {
                for (var e in this.elements) this[this.elements[e]] = this.$(e)
            },
            _elemWH: function(t, n, r) {
                function i(t, n) {
                    switch (n) {
                        case "half":
                            e(t).css({
                                width: r._screenAdjust() / 2 - 2 * r.o.gutter,
                                height: r._screenAdjust() / 2 - 2 * r.o.gutter
                            });
                            break;
                        case "large":
                            e(t).css({
                                width: r._screenAdjust() - 2 * r.o.gutter,
                                height: r._screenAdjust() / 2 - 2 * r.o.gutter
                            });
                            break;
                        case "fullheight":
                            e(t).css({
                                width: r._screenAdjust() / 2 - 2 * r.o.gutter,
                                height: r._screenAdjust() - 2 * r.o.gutter
                            });
                            break;
                        case "full":
                            e(t).css({
                                width: r._screenAdjust() - 2 * r.o.gutter,
                                height: r._screenAdjust() - 2 * r.o.gutter
                            });
                            break;
                        default:
                            return
                    }
                }
                r.o.gutter && e(n).css({
                    margin: r.o.gutter
                }), e(t).each(function(n, i) {
                    var o = e(t).length;
                    e(i).css({
                        width: r._screenAdjust()
                    }), r.el.children().css({
                        width: o * e(i).outerWidth(!0) + 2 * r.o.gutter
                    })
                }), e(n).each(function(t, n) {
                    e(n).hasClass("half") && i(n, "half"), e(n).hasClass("large") && i(n, "large"), e(n).hasClass("full") && i(n, "full"), e(n).hasClass("fullheight") && i(n, "fullheight")
                })
            },
            niceScroll: function() {
                this.el.niceScroll({
                    cursorcolor: this.o.cursorcolor,
                    cursorwidth: "12px",
                    cursorborder: "none",
                    cursorborderradius: "0",
                    cursoropacitymin: "1",
                    vertrailenabled: !1,
                    background: "#fff",
                    zindex: 6e3,
                    railpadding: {
                        top: "30px"
                    }
                }).rail.css({
                    height: " 12px"
                })
            },
            _screenAdjust: function() {
                return n.outerHeight(!0) - this.el.position().top - e("#footer").outerHeight(!0) - 51
            }
        }, e.fn.resizeGrid = function(t) {
            var n = e.data(this, "resize", new e.Resize(t, this));
            return n
        }
    }(jQuery, window),
    function(e) {
        var t, n, r, i, o, a, s, l = "Close",
            c = "BeforeClose",
            u = "AfterClose",
            d = "BeforeAppend",
            f = "MarkupParse",
            p = "Open",
            h = "Change",
            m = "mfp",
            g = "." + m,
            v = "mfp-ready",
            y = "mfp-removing",
            b = "mfp-prevent-close",
            x = function() {},
            w = !!window.jQuery,
            C = e(window),
            k = function(e, n) {
                t.ev.on(m + e + g, n)
            },
            T = function(t, n, r, i) {
                var o = document.createElement("div");
                return o.className = "mfp-" + t, r && (o.innerHTML = r), i ? n && n.appendChild(o) : (o = e(o), n && o.appendTo(n)), o
            },
            S = function(n, r) {
                t.ev.triggerHandler(m + n, r), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(r) ? r : [r]))
            },
            E = function(n) {
                return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn
            },
            N = function() {
                e.magnificPopup.instance || (t = new x, t.init(), e.magnificPopup.instance = t)
            },
            j = function() {
                var e = document.createElement("p").style,
                    t = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== e.transition) return !0;
                for (; t.length;)
                    if (t.pop() + "Transition" in e) return !0;
                return !1
            };
        x.prototype = {
            constructor: x,
            init: function() {
                var n = navigator.appVersion;
                t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = j(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = e(document), t.popupsCache = {}
            },
            open: function(n) {
                r || (r = e(document.body));
                var o;
                if (n.isObj === !1) {
                    t.items = n.items.toArray(), t.index = 0;
                    var s, l = n.items;
                    for (o = 0; l.length > o; o++)
                        if (s = l[o], s.parsed && (s = s.el[0]), s === n.el[0]) {
                            t.index = o;
                            break
                        }
                } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
                if (t.isOpen) return void t.updateItemHTML();
                t.types = [], a = "", t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : i, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = T("bg").on("click" + g, function() {
                    t.close()
                }), t.wrap = T("wrap").attr("tabindex", -1).on("click" + g, function(e) {
                    t._checkIfClose(e.target) && t.close()
                }), t.container = T("container", t.wrap)), t.contentContainer = T("content"), t.st.preloader && (t.preloader = T("preloader", t.container, t.st.tLoading));
                var c = e.magnificPopup.modules;
                for (o = 0; c.length > o; o++) {
                    var u = c[o];
                    u = u.charAt(0).toUpperCase() + u.slice(1), t["init" + u].call(t)
                }
                S("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (k(f, function(e, t, n, r) {
                    n.close_replaceWith = E(r.type)
                }), a += " mfp-close-btn-in") : t.wrap.append(E())), t.st.alignTop && (a += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                    overflow: t.st.overflowY,
                    overflowX: "hidden",
                    overflowY: t.st.overflowY
                }) : t.wrap.css({
                    top: C.scrollTop(),
                    position: "absolute"
                }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                    height: i.height(),
                    position: "absolute"
                }), t.st.enableEscapeKey && i.on("keyup" + g, function(e) {
                    27 === e.keyCode && t.close()
                }), C.on("resize" + g, function() {
                    t.updateSize()
                }), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a);
                var d = t.wH = C.height(),
                    h = {};
                if (t.fixedContentPos && t._hasScrollBar(d)) {
                    var m = t._getScrollbarSize();
                    m && (h.marginRight = m)
                }
                t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : h.overflow = "hidden");
                var y = t.st.mainClass;
                return t.isIE7 && (y += " mfp-ie7"), y && t._addClassToMFP(y), t.updateItemHTML(), S("BuildControls"), e("html").css(h), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || r), t._lastFocusedEl = document.activeElement, setTimeout(function() {
                    t.content ? (t._addClassToMFP(v), t._setFocus()) : t.bgOverlay.addClass(v), i.on("focusin" + g, t._onFocusIn)
                }, 16), t.isOpen = !0, t.updateSize(d), S(p), n
            },
            close: function() {
                t.isOpen && (S(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(y), setTimeout(function() {
                    t._close()
                }, t.st.removalDelay)) : t._close())
            },
            _close: function() {
                S(l);
                var n = y + " " + v + " ";
                if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
                    var r = {
                        marginRight: ""
                    };
                    t.isIE7 ? e("body, html").css("overflow", "") : r.overflow = "", e("html").css(r)
                }
                i.off("keyup" + g + " focusin" + g), t.ev.off(g), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, S(u)
            },
            updateSize: function(e) {
                if (t.isIOS) {
                    var n = document.documentElement.clientWidth / window.innerWidth,
                        r = window.innerHeight * n;
                    t.wrap.css("height", r), t.wH = r
                } else t.wH = e || C.height();
                t.fixedContentPos || t.wrap.css("height", t.wH), S("Resize")
            },
            updateItemHTML: function() {
                var n = t.items[t.index];
                t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
                var r = n.type;
                if (S("BeforeChange", [t.currItem ? t.currItem.type : "", r]), t.currItem = n, !t.currTemplate[r]) {
                    var i = !!t.st[r] && t.st[r].markup;
                    S("FirstMarkupParse", i), t.currTemplate[r] = !i || e(i)
                }
                o && o !== n.type && t.container.removeClass("mfp-" + o + "-holder");
                var a = t["get" + r.charAt(0).toUpperCase() + r.slice(1)](n, t.currTemplate[r]);
                t.appendContent(a, r), n.preloaded = !0, S(h, n), o = n.type, t.container.prepend(t.contentContainer), S("AfterChange")
            },
            appendContent: function(e, n) {
                t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(E()) : t.content = e : t.content = "", S(d), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
            },
            parseEl: function(n) {
                var r, i = t.items[n];
                if (i.tagName ? i = {
                        el: e(i)
                    } : (r = i.type, i = {
                        data: i,
                        src: i.src
                    }), i.el) {
                    for (var o = t.types, a = 0; o.length > a; a++)
                        if (i.el.hasClass("mfp-" + o[a])) {
                            r = o[a];
                            break
                        }
                    i.src = i.el.attr("data-mfp-src"), i.src || (i.src = i.el.attr("href"))
                }
                return i.type = r || t.st.type || "inline", i.index = n, i.parsed = !0, t.items[n] = i, S("ElementParse", i), t.items[n]
            },
            addGroup: function(e, n) {
                var r = function(r) {
                    r.mfpEl = this, t._openClick(r, e, n)
                };
                n || (n = {});
                var i = "click.magnificPopup";
                n.mainEl = e, n.items ? (n.isObj = !0, e.off(i).on(i, r)) : (n.isObj = !1, n.delegate ? e.off(i).on(i, n.delegate, r) : (n.items = e, e.off(i).on(i, r)))
            },
            _openClick: function(n, r, i) {
                var o = void 0 !== i.midClick ? i.midClick : e.magnificPopup.defaults.midClick;
                if (o || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
                    var a = void 0 !== i.disableOn ? i.disableOn : e.magnificPopup.defaults.disableOn;
                    if (a)
                        if (e.isFunction(a)) {
                            if (!a.call(t)) return !0
                        } else if (a > C.width()) return !0;
                    n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), i.el = e(n.mfpEl), i.delegate && (i.items = r.find(i.delegate)), t.open(i)
                }
            },
            updateStatus: function(e, r) {
                if (t.preloader) {
                    n !== e && t.container.removeClass("mfp-s-" + n), r || "loading" !== e || (r = t.st.tLoading);
                    var i = {
                        status: e,
                        text: r
                    };
                    S("UpdateStatus", i), e = i.status, r = i.text, t.preloader.html(r), t.preloader.find("a").on("click", function(e) {
                        e.stopImmediatePropagation()
                    }), t.container.addClass("mfp-s-" + e), n = e
                }
            },
            _checkIfClose: function(n) {
                if (!e(n).hasClass(b)) {
                    var r = t.st.closeOnContentClick,
                        i = t.st.closeOnBgClick;
                    if (r && i) return !0;
                    if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
                    if (n === t.content[0] || e.contains(t.content[0], n)) {
                        if (r) return !0
                    } else if (i && e.contains(document, n)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(e) {
                t.bgOverlay.addClass(e), t.wrap.addClass(e)
            },
            _removeClassFromMFP: function(e) {
                this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
            },
            _hasScrollBar: function(e) {
                return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || C.height())
            },
            _setFocus: function() {
                (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
            },
            _onFocusIn: function(n) {
                return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
            },
            _parseMarkup: function(t, n, r) {
                var i;
                r.data && (n = e.extend(r.data, n)), S(f, [t, n, r]), e.each(n, function(e, n) {
                    if (void 0 === n || n === !1) return !0;
                    if (i = e.split("_"), i.length > 1) {
                        var r = t.find(g + "-" + i[0]);
                        if (r.length > 0) {
                            var o = i[1];
                            "replaceWith" === o ? r[0] !== n[0] && r.replaceWith(n) : "img" === o ? r.is("img") ? r.attr("src", n) : r.replaceWith('<img src="' + n + '" class="' + r.attr("class") + '" />') : r.attr(i[1], n)
                        }
                    } else t.find(g + "-" + e).html(n)
                })
            },
            _getScrollbarSize: function() {
                if (void 0 === t.scrollbarSize) {
                    var e = document.createElement("div");
                    e.id = "mfp-sbm", e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
                }
                return t.scrollbarSize
            }
        }, e.magnificPopup = {
            instance: null,
            proto: x.prototype,
            modules: [],
            open: function(t, n) {
                return N(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
            },
            close: function() {
                return e.magnificPopup.instance && e.magnificPopup.instance.close()
            },
            registerModule: function(t, n) {
                n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading..."
            }
        }, e.fn.magnificPopup = function(n) {
            N();
            var r = e(this);
            if ("string" == typeof n)
                if ("open" === n) {
                    var i, o = w ? r.data("magnificPopup") : r[0].magnificPopup,
                        a = parseInt(arguments[1], 10) || 0;
                    o.items ? i = o.items[a] : (i = r, o.delegate && (i = i.find(o.delegate)), i = i.eq(a)), t._openClick({
                        mfpEl: i
                    }, r, o)
                } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
            else n = e.extend(!0, {}, n), w ? r.data("magnificPopup", n) : r[0].magnificPopup = n, t.addGroup(r, n);
            return r
        };
        var O, A, L, D = "inline",
            M = function() {
                L && (A.after(L.addClass(O)).detach(), L = null)
            };
        e.magnificPopup.registerModule(D, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    t.types.push(D), k(l + "." + D, function() {
                        M()
                    })
                },
                getInline: function(n, r) {
                    if (M(), n.src) {
                        var i = t.st.inline,
                            o = e(n.src);
                        if (o.length) {
                            var a = o[0].parentNode;
                            a && a.tagName && (A || (O = i.hiddenClass, A = T(O), O = "mfp-" + O), L = o.after(A).detach().removeClass(O)), t.updateStatus("ready")
                        } else t.updateStatus("error", i.tNotFound), o = e("<div>");
                        return n.inlineElement = o, o
                    }
                    return t.updateStatus("ready"), t._parseMarkup(r, {}, n), r
                }
            }
        });
        var $, _ = "ajax",
            I = function() {
                $ && r.removeClass($)
            },
            H = function() {
                I(), t.req && t.req.abort()
            };
        e.magnificPopup.registerModule(_, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    t.types.push(_), $ = t.st.ajax.cursor, k(l + "." + _, H), k("BeforeChange." + _, H)
                },
                getAjax: function(n) {
                    $ && r.addClass($), t.updateStatus("loading");
                    var i = e.extend({
                        url: n.src,
                        success: function(r, i, o) {
                            var a = {
                                data: r,
                                xhr: o
                            };
                            S("ParseAjax", a), t.appendContent(e(a.data), _), n.finished = !0, I(), t._setFocus(), setTimeout(function() {
                                t.wrap.addClass(v)
                            }, 16), t.updateStatus("ready"), S("AjaxContentAdded")
                        },
                        error: function() {
                            I(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                        }
                    }, t.st.ajax.settings);
                    return t.req = e.ajax(i), ""
                }
            }
        });
        var P, F = function(n) {
            if (n.data && void 0 !== n.data.title) return n.data.title;
            var r = t.st.image.titleSrc;
            if (r) {
                if (e.isFunction(r)) return r.call(t, n);
                if (n.el) return n.el.attr(r) || ""
            }
            return ""
        };
        e.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var e = t.st.image,
                        n = ".image";
                    t.types.push("image"), k(p + n, function() {
                        "image" === t.currItem.type && e.cursor && r.addClass(e.cursor)
                    }), k(l + n, function() {
                        e.cursor && r.removeClass(e.cursor), C.off("resize" + g)
                    }), k("Resize" + n, t.resizeImage), t.isLowIE && k("AfterChange", t.resizeImage)
                },
                resizeImage: function() {
                    var e = t.currItem;
                    if (e && e.img && t.st.image.verticalFit) {
                        var n = 0;
                        t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
                    }
                },
                _onImageHasSize: function(e) {
                    e.img && (e.hasSize = !0, P && clearInterval(P), e.isCheckingImgSize = !1, S("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
                },
                findImageSize: function(e) {
                    var n = 0,
                        r = e.img[0],
                        i = function(o) {
                            P && clearInterval(P), P = setInterval(function() {
                                return r.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(P), n++, void(3 === n ? i(10) : 40 === n ? i(50) : 100 === n && i(500)))
                            }, o)
                        };
                    i(1)
                },
                getImage: function(n, r) {
                    var i = 0,
                        o = function() {
                            n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, S("ImageLoadComplete")) : (i++, 200 > i ? setTimeout(o, 100) : a()))
                        },
                        a = function() {
                            n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                        },
                        s = t.st.image,
                        l = r.find(".mfp-img");
                    if (l.length) {
                        var c = document.createElement("img");
                        c.className = "mfp-img", n.img = e(c).on("load.mfploader", o).on("error.mfploader", a), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
                    }
                    return t._parseMarkup(r, {
                        title: F(n),
                        img_replaceWith: n.img
                    }, n), t.resizeImage(), n.hasSize ? (P && clearInterval(P), n.loadError ? (r.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (r.removeClass("mfp-loading"), t.updateStatus("ready")), r) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, r.addClass("mfp-loading"), t.findImageSize(n)), r)
                }
            }
        });
        var z, R = function() {
            return void 0 === z && (z = void 0 !== document.createElement("p").style.MozTransform), z
        };
        e.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(e) {
                    return e.is("img") ? e : e.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var e, n = t.st.zoom,
                        r = ".zoom";
                    if (n.enabled && t.supportsTransition) {
                        var i, o, a = n.duration,
                            s = function(e) {
                                var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    r = "all " + n.duration / 1e3 + "s " + n.easing,
                                    i = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    o = "transition";
                                return i["-webkit-" + o] = i["-moz-" + o] = i["-o-" + o] = i[o] = r, t.css(i), t
                            },
                            u = function() {
                                t.content.css("visibility", "visible")
                            };
                        k("BuildControls" + r, function() {
                            if (t._allowZoom()) {
                                if (clearTimeout(i), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return void u();
                                o = s(e), o.css(t._getOffset()), t.wrap.append(o), i = setTimeout(function() {
                                    o.css(t._getOffset(!0)), i = setTimeout(function() {
                                        u(), setTimeout(function() {
                                            o.remove(), e = o = null, S("ZoomAnimationEnded")
                                        }, 16)
                                    }, a)
                                }, 16)
                            }
                        }), k(c + r, function() {
                            if (t._allowZoom()) {
                                if (clearTimeout(i), t.st.removalDelay = a, !e) {
                                    if (e = t._getItemToZoom(), !e) return;
                                    o = s(e)
                                }
                                o.css(t._getOffset(!0)), t.wrap.append(o), t.content.css("visibility", "hidden"), setTimeout(function() {
                                    o.css(t._getOffset())
                                }, 16)
                            }
                        }), k(l + r, function() {
                            t._allowZoom() && (u(), o && o.remove(), e = null)
                        })
                    }
                },
                _allowZoom: function() {
                    return "image" === t.currItem.type
                },
                _getItemToZoom: function() {
                    return !!t.currItem.hasSize && t.currItem.img
                },
                _getOffset: function(n) {
                    var r;
                    r = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                    var i = r.offset(),
                        o = parseInt(r.css("padding-top"), 10),
                        a = parseInt(r.css("padding-bottom"), 10);
                    i.top -= e(window).scrollTop() - o;
                    var s = {
                        width: r.width(),
                        height: (w ? r.innerHeight() : r[0].offsetHeight) - a - o
                    };
                    return R() ? s["-moz-transform"] = s.transform = "translate(" + i.left + "px," + i.top + "px)" : (s.left = i.left, s.top = i.top), s
                }
            }
        });
        var B = "iframe",
            q = "//about:blank",
            W = function(e) {
                if (t.currTemplate[B]) {
                    var n = t.currTemplate[B].find("iframe");
                    n.length && (e || (n[0].src = q), t.isIE8 && n.css("display", e ? "block" : "none"))
                }
            };
        e.magnificPopup.registerModule(B, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    t.types.push(B), k("BeforeChange", function(e, t, n) {
                        t !== n && (t === B ? W() : n === B && W(!0))
                    }), k(l + "." + B, function() {
                        W()
                    })
                },
                getIframe: function(n, r) {
                    var i = n.src,
                        o = t.st.iframe;
                    e.each(o.patterns, function() {
                        return i.indexOf(this.index) > -1 ? (this.id && (i = "string" == typeof this.id ? i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : this.id.call(this, i)), i = this.src.replace("%id%", i), !1) : void 0
                    });
                    var a = {};
                    return o.srcAction && (a[o.srcAction] = i), t._parseMarkup(r, a, n), t.updateStatus("ready"), r
                }
            }
        });
        var X = function(e) {
                var n = t.items.length;
                return e > n - 1 ? e - n : 0 > e ? n + e : e
            },
            U = function(e, t, n) {
                return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
            };
        e.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Назад",
                tNext: "Вперед",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var n = t.st.gallery,
                        r = ".mfp-gallery",
                        o = Boolean(e.fn.mfpFastClick);
                    return t.direction = !0, !(!n || !n.enabled) && (a += " mfp-gallery", k(p + r, function() {
                        n.navigateByImgClick && t.wrap.on("click" + r, ".mfp-img", function() {
                            return t.items.length > 1 ? (t.next(), !1) : void 0
                        }), i.on("keydown" + r, function(e) {
                            37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                        })
                    }), k("UpdateStatus" + r, function(e, n) {
                        n.text && (n.text = U(n.text, t.currItem.index, t.items.length))
                    }), k(f + r, function(e, r, i, o) {
                        var a = t.items.length;
                        i.counter = a > 1 ? U(n.tCounter, o.index, a) : ""
                    }), k("BuildControls" + r, function() {
                        if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                            var r = n.arrowMarkup,
                                i = t.arrowLeft = e(r.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(b),
                                a = t.arrowRight = e(r.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(b),
                                s = o ? "mfpFastClick" : "click";
                            i[s](function() {
                                t.prev()
                            }), a[s](function() {
                                t.next()
                            }), t.isIE7 && (T("b", i[0], !1, !0), T("a", i[0], !1, !0), T("b", a[0], !1, !0), T("a", a[0], !1, !0)), t.container.append(i.add(a))
                        }
                    }), k(h + r, function() {
                        t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
                            t.preloadNearbyImages(), t._preloadTimeout = null
                        }, 16)
                    }), void k(l + r, function() {
                        i.off(r), t.wrap.off("click" + r), t.arrowLeft && o && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
                    }))
                },
                next: function() {
                    t.direction = !0, t.index = X(t.index + 1), t.updateItemHTML()
                },
                prev: function() {
                    t.direction = !1, t.index = X(t.index - 1), t.updateItemHTML()
                },
                goTo: function(e) {
                    t.direction = e >= t.index, t.index = e, t.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var e, n = t.st.gallery.preload,
                        r = Math.min(n[0], t.items.length),
                        i = Math.min(n[1], t.items.length);
                    for (e = 1;
                        (t.direction ? i : r) >= e; e++) t._preloadItem(t.index + e);
                    for (e = 1;
                        (t.direction ? r : i) >= e; e++) t._preloadItem(t.index - e)
                },
                _preloadItem: function(n) {
                    if (n = X(n), !t.items[n].preloaded) {
                        var r = t.items[n];
                        r.parsed || (r = t.parseEl(n)), S("LazyLoad", r), "image" === r.type && (r.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                            r.hasSize = !0
                        }).on("error.mfploader", function() {
                            r.hasSize = !0, r.loadError = !0,
                                S("LazyLoadError", r)
                        }).attr("src", r.src)), r.preloaded = !0
                    }
                }
            }
        });
        var Y = "retina";
        e.magnificPopup.registerModule(Y, {
                options: {
                    replaceSrc: function(e) {
                        return e.src.replace(/\.\w+$/, function(e) {
                            return "@2x" + e
                        })
                    },
                    ratio: 1
                },
                proto: {
                    initRetina: function() {
                        if (window.devicePixelRatio > 1) {
                            var e = t.st.retina,
                                n = e.ratio;
                            n = isNaN(n) ? n() : n, n > 1 && (k("ImageHasSize." + Y, function(e, t) {
                                t.img.css({
                                    "max-width": t.img[0].naturalWidth / n,
                                    width: "100%"
                                })
                            }), k("ElementParse." + Y, function(t, r) {
                                r.src = e.replaceSrc(r, n)
                            }))
                        }
                    }
                }
            }),
            function() {
                var t = 1e3,
                    n = "ontouchstart" in window,
                    r = function() {
                        C.off("touchmove" + o + " touchend" + o)
                    },
                    i = "mfpFastClick",
                    o = "." + i;
                e.fn.mfpFastClick = function(i) {
                    return e(this).each(function() {
                        var a, s = e(this);
                        if (n) {
                            var l, c, u, d, f, p;
                            s.on("touchstart" + o, function(e) {
                                d = !1, p = 1, f = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = f.clientX, u = f.clientY, C.on("touchmove" + o, function(e) {
                                    f = e.originalEvent ? e.originalEvent.touches : e.touches, p = f.length, f = f[0], (Math.abs(f.clientX - c) > 10 || Math.abs(f.clientY - u) > 10) && (d = !0, r())
                                }).on("touchend" + o, function(e) {
                                    r(), d || p > 1 || (a = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function() {
                                        a = !1
                                    }, t), i())
                                })
                            })
                        }
                        s.on("click" + o, function() {
                            a || i()
                        })
                    })
                }, e.fn.destroyMfpFastClick = function() {
                    e(this).off("touchstart" + o + " click" + o), n && C.off("touchmove" + o + " touchend" + o)
                }
            }(), N()
    }(window.jQuery || window.Zepto);
var CONFIG = function(e, t) {
    return {
        objMixitup: {
            targetSelector: ".mix",
            filterSelector: ".filter",
            buttonEvent: "click",
            effects: "translateZ(-360px) stagger(34ms) scale(1.11) fade",
            listEffects: null,
            easing: "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
            layoutMode: "grid",
            targetDisplayGrid: "inline-block",
            targetDisplayList: "block",
            transitionSpeed: 680,
            showOnLoad: "all",
            sortOnLoad: !1,
            multiFilter: !1,
            resizeContainer: !0,
            minHeight: 0,
            perspectiveDistance: "2000",
            perspectiveOrigin: "50% 50%",
            animateGridList: !0,
            onMixEnd: null
        },
        objNiceScroll: {
            cursorcolor: "#ffd200",
            cursorwidth: "8px",
            cursorborder: "none",
            cursorborderradius: "0",
            cursoropacitymin: "1",
            vertrailenabled: !1,
            background: "#202223",
            zindex: 6e3,
            touchbehavior: !0,
            cursordragontouch: !0,
            railpadding: {
                top: "30px"
            },
            rail: {
                height: " 8px"
            }
        },
        objSequence: {
            nextButton: !0,
            prevButton: !0,
            reverseAnimationsWhenNavigatingBackwards: !1,
            hidePreloaderUsingCSS: !0,
            hidePreloaderDelay: 0,
            transitionThreshold: 2500,
            animateStartingFrameIn: !0,
            autoPlay: !0,
            autoPlayDelay: 5e3,
            preloader: !0,
            pauseOnHover: !1,
            cycle: !0
        },
        fullWidthImageMove: {
            move: !0,
            speed: 6.64
        },
        slyGalleryImageMove: {
            move: !0,
            speed: 6.64
        },
        folioImageMove: {
            move: !0,
            speed: 6.64
        },
        relWorksMove: {
            move: !0,
            speed: 6.64
        },
        preload: {
            time: 300
        }
    }
}(jQuery, window);
if (function(e, t, n, r, i) {
        "use strict";

        function o(e, t) {
            return e.toFixed(t.decimals)
        }
        e(function() {
            function r() {
                e("#sequence").css({
                    height: e(t).outerHeight(!0)
                })
            }

            function o() {
                e("#portfolio-items").length && a(i.folioImageMove), e(".rel-works").length && a(i.relWorksMove), e(".gr-box").length && a(i.slyGalleryImageMove), e(".full-width.work-item-move").length && a(i.fullWidthImageMove)
            }

            function a(e) {
                jQuery(".work-item-move").each(function() {
                    var t = jQuery(this),
                        n = 1.36;
                    n = t.attr("class").indexOf("full-width") != -1 ? 3 : 1.36;
                    var r = t.width(),
                        i = r / n,
                        o = r / 2,
                        a = i / 2;
                    t.css({
                        height: i
                    }), 1 == e.move && t.mouseenter(function() {
                        t.on("mousemove", function(n) {
                            var r = n.pageX - t.offset().left,
                                i = n.pageY - t.offset().top,
                                s = r / o * 100 - 100,
                                l = i / a * 100 - 100;
                            t.find("img").css({
                                left: -(s / e.speed) - 15 + "%",
                                top: -(l / e.speed) - 15 + "%"
                            })
                        }), t.find("a").fadeIn("fast")
                    }).mouseleave(function() {
                        t.find("a").fadeOut("fast")
                    })
                })
            }
            e("body").animation(), e(".navigation").navigation(), e("body").backToTop(), e("scroll-box").length && e("gr-box").niceScroll(), e(".team-contents").length && e(".team-contents").team(),
                function() {
                    try {
                        e.browserSelector();
                        var t = e("html");
                        (t.hasClass("chrome") || t.hasClass("ie11") || t.hasClass("ie10")) && e.smoothScroll()
                    } catch (n) {}
                }(), e(".progress-bar").length && e(".progress-bar").progressBar(), n.touch || e(".full-bg-image").length && e(".full-bg-image").parallax("center", .4), e(".container").fitVids(), e("#sequence").length && e("#sequence").sequence(i.objSequence), e(t).on("resize", function() {
                    r()
                }).resize();
            var s = e(".error, .success, .info, .notice");
            s.length && s.notifications({
                speed: 300
            }), e(".scroll-box").length && e(".scroll-box").niceScroll(i.objNiceScroll);
            var l = i.preload.time;
            if (e(".lazy-image").each(function(t) {
                    var n = t + 1,
                        r = e(this);
                    setTimeout(function() {
                        r.removeClass("img").children(".lazy").empty()
                    }, n * l)
                }), e("#navigation").on("mouseenter", "li", function() {
                    var t = e(this),
                        n = t.children("ul");
                    n.length && n.hide().stop(!0, !0).fadeIn(300)
                }).on("mouseleave", "li", function() {
                    e(this).children("ul").stop(!0, !0).fadeOut(50)
                }), e(".counter").length) {
                var c = e(".counter");
                n.touch ? c.countTo() : c.waypoint(function(e) {
                    "down" == e && c.countTo()
                }, {
                    offset: "74%"
                })
            }
            if (e(".popup-gallery").length && e(".popup-gallery").magnificPopup({
                    delegate: ".owl-item:not(.cloned) .popup-link",
                    type: "image",
                    removalDelay: 500,
                    tLoading: "Loading image #%curr%...",
                    callbacks: {
                        beforeOpen: function() {
                            this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = "mfp-move-horizontal"
                        }
                    },
                    gallery: {
                        enabled: !0,
                        navigateByImgClick: !0,
                        preload: [0, 1]
                    },
                    closeOnContentClick: !0,
                    midClick: !0
                }), e(".image-link").length && e(".image-link").magnificPopup({
                    type: "image",
                    removalDelay: 500,
                    tClose: "Закрыть (Esc)",
                    tLoading: "Загрузка...",
                    gallery: {
                        enabled: !0,
                        navigateByImgClick: !0,
                        preload: [0, 2],
                        tCounter: "%curr% из %total%",
                        tPrev: "Назад",
                        tNext: "Вперед"
                    },
                    closeOnContentClick: !0,
                    midClick: !0,
                    zoom: {
                        enabled: !0,
                        duration: 300,
                        easing: "ease-in-out",
                        opener: function(e) {
                            return e.is("img") ? e : e.find("img")
                        }
                    }
                }), e(".popup-youtube, .popup-vimeo, .popup-gmaps").length && e(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
                    disableOn: 700,
                    type: "iframe",
                    mainClass: "mfp-fade",
                    removalDelay: 160,
                    preloader: !1,
                    fixedContentPos: !1
                }), e(".popup-with-form").length && e(".popup-with-form").magnificPopup({
                    type: "inline",
                    preloader: !1,
                    focus: "#name",
                    callbacks: {
                        beforeOpen: function() {
                            e(t).width() < 700 ? this.st.focus = !1 : this.st.focus = "#name"
                        }
                    }
                }), e(".side-like, .entry-like").length && (e(".side-like, .entry-like").each(function(t, n) {
                    var r = e(n),
                        i = r.closest(".bottom-meta").find(".output"),
                        o = i.html(),
                        a = ++t,
                        s = localStorage.getItem("like" + a) || o;
                    r.data("index", a), void 0 === s || null === s || NaN === s ? localStorage.setItem("like" + a, o) : localStorage.setItem("like" + a, s), i.html(s)
                }).on("click", function(t) {
                    t.preventDefault();
                    var n = e(this),
                        r = n.closest(".bottom-meta").find(".output");
                    e.localStorageWork.call(n, r), localStorage.removeItem("like")
                }), e.localStorageWork = function(t) {
                    var n = e(this).data("index"),
                        r = localStorage.getItem("like" + n);
                    localStorage.setItem("like" + n, ++r), t.html(r++)
                }), e("#portfolio-items").length) {
                var u = e("#portfolio-items");
                u.mixitup(i.objMixitup);
                var d = e(".load-more");
                if (d.length) {
                    var f = 1,
                        p = null;
                    d.on("click", function(t) {
                        t.preventDefault();
                        var n = e(this).attr("href"),
                            r = "#portfolio-items",
                            o = ".load-more";
                        e.get(n, function(t) {
                            var n = e(r, t).wrapInner("").html();
                            p = e(o, t).attr("href"), e("article:last", u).after(n), u.mixitup("remix", "all"), a(i.folioImageMove), d.attr("data-rel") > f ? d.attr("href", p) : d.remove()
                        }), f++
                    })
                }
            }
            if (o(), e(t).resize(function() {
                    o()
                }), e(".acc-box").length) {
                var h = e(".acc-box");
                h.each(function() {
                    var t = e(".acc-trigger", e(this));
                    t.on("click", function() {
                        var n = e(this);
                        return "toggle" === n.data("mode") ? n.toggleClass("active").next().stop(!0, !0).slideToggle(300) : n.next().is(":hidden") ? (t.removeClass("active").next().slideUp(300), n.toggleClass("active").next().slideDown(300)) : n.hasClass("active") && n.removeClass("active").next().slideUp(300), !1
                    })
                })
            }
            e("#mobile-menu").children("ul").length || e("#mobile-menu").append(e("#navigation").html()), e("#responsive-nav-button").on("click", function(t) {
                t.preventDefault();
                e(this);
                e("#wrapper").is(".active") || e("#wrapper").css({
                    height: e("#mobile-menu").children("ul").outerHeight(!0)
                }).addClass("active")
            }), e("#menu-hide").on("click", function(t) {
                t.preventDefault(), e("#wrapper").is(".active") && e("#wrapper").css({
                    height: "auto"
                }).removeClass("active")
            })
        }), e.fn.extend({
            parallax: function(n, r) {
                var i, o;
                return this.each(function(a, s) {
                    var l = e(s);
                    return (arguments.length < 1 || null === n) && (n = "50%"), (arguments.length < 2 || null === r) && (r = .4), {
                        update: function() {
                            i = l.offset().top, o = e(t).scrollTop(), l.css("backgroundPosition", n + " " + Math.round((i - o) * r) + "px")
                        },
                        init: function() {
                            var n = this;
                            n.update(), e(t).on("scroll", n.update)
                        }
                    }.init()
                })
            },
            notifications: function(t) {
                var n = {
                        speed: 200
                    },
                    r = e.extend({}, n, t);
                return this.each(function() {
                    function t(e) {
                        e.fadeTo(r.speed, 0, function() {
                            e.slideUp(r.speed)
                        })
                    }
                    var n = e('<a class="alert-close" href="#"></a>'),
                        i = e(this).append(n).find("> .alert-close");
                    i.click(function() {
                        return t(e(this).parent()), !1
                    })
                })
            },
            progressBar: function(t, r) {
                var i = {
                        speed: 600,
                        easing: "swing"
                    },
                    o = e.extend({}, i, t);
                return this.each(function() {
                    var t = e(this),
                        i = {};
                    i = {
                        init: function() {
                            this.touch = !!n.touch, this.refreshElements(), this.processing()
                        },
                        elements: {
                            ".bar": "bar",
                            ".percent": "per"
                        },
                        $: function(n) {
                            return e(n, t)
                        },
                        refreshElements: function() {
                            for (var e in this.elements) this[this.elements[e]] = this.$(e)
                        },
                        getProgress: function() {
                            return this.bar.data("progress")
                        },
                        setProgress: function(e) {
                            e.bar.animate({
                                width: e.getProgress() + "%"
                            }, {
                                duration: o.speed,
                                easing: o.easing,
                                step: function(t) {
                                    e.per.text(Math.ceil(t) + "%")
                                },
                                complete: function(e, t, n) {
                                    r && r.call(this, t, n)
                                }
                            })
                        },
                        processing: function() {
                            var e = this;
                            e.touch ? e.setProgress(e) : t.waypoint(function(t) {
                                "down" == t && e.setProgress(e)
                            }, {
                                offset: "64%"
                            })
                        }
                    }, i.init()
                })
            },
            fitVids: function(t) {
                var n = {
                    customSelector: null
                };
                if (!r.getElementById("fit-vids-style")) {
                    var i = r.createElement("div"),
                        o = r.getElementsByTagName("base")[0] || r.getElementsByTagName("script")[0],
                        a = "&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";
                    i.className = "fit-vids-style", i.id = "fit-vids-style", i.style.display = "none", i.innerHTML = a, o.parentNode.insertBefore(i, o)
                }
                return t && e.extend(n, t), this.each(function() {
                    var t = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
                    n.customSelector && t.push(n.customSelector);
                    var r = e(this).find(t.join(","));
                    r = r.not("object object"), r.each(function() {
                        var t = e(this);
                        if (!("embed" === this.tagName.toLowerCase() && t.parent("object").length || t.parent(".fluid-width-video-wrapper").length)) {
                            var n = "object" === this.tagName.toLowerCase() || t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)) ? parseInt(t.attr("height"), 10) : t.height(),
                                r = isNaN(parseInt(t.attr("width"), 10)) ? t.width() : parseInt(t.attr("width"), 10),
                                i = n / r;
                            if (!t.attr("id")) {
                                var o = "fitvid" + Math.floor(999999 * Math.random());
                                t.attr("id", o)
                            }
                            t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * i + "%"), t.removeAttr("height").removeAttr("width")
                        }
                    })
                })
            },
            backToTop: function() {
                var n = this;
                return this.each(function() {
                    return {
                        init: function() {
                            var r = this;
                            n.append('<a href="#" id="back-top" title="Back To Top"></a>'), this.backToTop = e("#back-top"), e(t).on("scroll", function(e) {
                                r.backTopScrollHandler(e)
                            }), this.backTopClickHandler()
                        },
                        backTopScrollHandler: function(t) {
                            e(t.currentTarget).scrollTop() > 200 ? this.backToTop.fadeIn(400) : this.backToTop.fadeOut(400)
                        },
                        backTopClickHandler: function() {
                            this.backToTop.on("click", function(t) {
                                t.preventDefault(), e("html, body").animate({
                                    scrollTop: 0
                                }, 1e3)
                            })
                        }
                    }.init()
                })
            },
            animation: function() {
                return this.each(function() {
                    return {
                        init: function() {
                            this.support = n.cssanimations && n.csstransitions, this.touch = n.touch, this.support && (this.touch ? e("body").removeClass("animated") : this.animatedElements())
                        },
                        animatedElements: function() {
                            e(".opacity").length && e(".opacity").appear({
                                accX: 0,
                                accY: 100,
                                data: "opacity",
                                speedAddClass: 100
                            }), e(".opacity-move").length && e(".opacity-move").appear({
                                accX: 0,
                                accY: 100,
                                data: "opacity-move",
                                speedAddClass: 400
                            }), e(".slideUp2x").length && e(".slideUp2x").appear({
                                accX: 0,
                                accY: 100,
                                data: "slideUp2x",
                                speedAddClass: 200
                            }), e(".slideUp3x").length && e(".slideUp3x").appear({
                                accX: 0,
                                accY: 50,
                                data: "slideUp3x",
                                speedAddClass: 200
                            }), e(".scale").length && e(".scale").appear({
                                accX: 0,
                                accY: 165,
                                data: "scale",
                                speedAddClass: 250
                            }), e(".opacity2x").length && e(".opacity2x").appear({
                                accX: 0,
                                accY: 150,
                                data: "opacity2x"
                            })
                        }
                    }.init()
                })
            },
            navigation: function() {
                var n = e(this),
                    r = e(t);
                return this.each(function() {
                    return {
                        init: function() {
                            var t = this;
                            this.header = e("#header"), this.header.prepend('<div class="space"></div>'), this.space = e(".space", this.header), this.topLine = e(".top-header-line"), this.middleLine = e(".middle-header-line"), this.bottomLine = e(".bottom-header-line"), this.checkNav = this.middleLine.find(".navigation").length, this.addSubArrowClass(), this.listener(t)
                        },
                        addSubArrowClass: function() {
                            n.children("ul").children("li").each(function(t, n) {
                                var r = e(n);
                                r.find("ul").parent().each(function() {
                                    var t = e(this);
                                    t.data("is", 1 === t.parents("ul").length).addClass(t.data("is") ? "" : "rightarrowclass")
                                })
                            })
                        },
                        stickyMiddleLine: function(n) {
                            e(t).width() > 767 && (e(n).scrollTop() > 0 ? (this.space.css({
                                height: this.middleLine.outerHeight(!0)
                            }), this.header.addClass("shrink-middle-line")) : (this.space.css({
                                height: "auto"
                            }), this.header.removeClass("shrink-middle-line")))
                        },
                        stickyBottomLine: function(n) {
                            e(t).width() > 767 && (e(n).scrollTop() > 130 ? (this.space.css({
                                height: this.bottomLine.outerHeight(!0)
                            }), this.header.addClass("shrink-bottom-line")) : (this.space.css({
                                height: "auto"
                            }), this.header.removeClass("shrink-bottom-line")))
                        },
                        listener: function(e) {
                            r.on("scroll", function(t) {
                                switch (e.checkNav) {
                                    case 0:
                                        e.stickyBottomLine.call(e, t.currentTarget);
                                        break;
                                    case 1:
                                        e.stickyMiddleLine.call(e, t.currentTarget);
                                        break;
                                    default:
                                        e.stickyBottomLine.call(e, t.currentTarget)
                                }
                            })
                        }
                    }.init()
                })
            },
            team: function() {
                return this.length ? this.each(function() {
                    var t = e(".item-container", e(this));
                    t.on("click mouseleave", function(t) {
                        t.preventDefault();
                        var n = e(this),
                            r = e(".entry-excerpt", n);
                        "click" == t.type ? n.hasClass("active") ? (r.stop().animate({
                            height: "hide",
                            opacity: "0"
                        }, 100), n.removeClass("active")) : (n.addClass("active"), r.stop().animate({
                            height: "show",
                            opacity: "1"
                        }, 400, "swing")) : "mouseleave" == t.type && (r.stop().animate({
                            height: "hide",
                            opacity: "0"
                        }), n.removeClass("active"))
                    })
                }) : this
            }
        }), e.fn.countTo = function(t) {
            return t = t || {}, e(this).each(function() {
                function n() {
                    u += a, c++, r(u), "function" == typeof i.onUpdate && i.onUpdate.call(s, u), c >= o && (l.removeData("countTo"), clearInterval(d.interval), u = i.to, "function" == typeof i.onComplete && i.onComplete.call(s, u))
                }

                function r(e) {
                    var t = i.formatter.call(s, e, i);
                    l.children(".count").html(t)
                }
                var i = e.extend({}, e.fn.countTo.defaults, {
                        from: e(this).data("from"),
                        to: e(this).data("to"),
                        speed: e(this).data("speed"),
                        refreshInterval: e(this).data("refresh-interval"),
                        decimals: e(this).data("decimals")
                    }, t),
                    o = Math.ceil(i.speed / i.refreshInterval),
                    a = (i.to - i.from) / o,
                    s = this,
                    l = e(this),
                    c = 0,
                    u = i.from,
                    d = l.data("countTo") || {};
                l.data("countTo", d), d.interval && clearInterval(d.interval), d.interval = setInterval(n, i.refreshInterval), r(u)
            })
        }, e.fn.countTo.defaults = {
            from: 0,
            to: 0,
            speed: 1e3,
            refreshInterval: 10,
            decimals: 0,
            formatter: o,
            onUpdate: null,
            onComplete: null
        }
    }(jQuery, window, Modernizr, document, CONFIG), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(e) {
    "use strict";
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.tab");
            i || r.data("bs.tab", i = new n(this)), "string" == typeof t && i[t]()
        })
    }
    var n = function(t) {
        this.element = e(t)
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            r = t.data("target");
        if (r || (r = t.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var i = n.find(".active:last a"),
                o = e.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                a = e.Event("show.bs.tab", {
                    relatedTarget: i[0]
                });
            if (i.trigger(o), t.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var s = e(r);
                this.activate(t.closest("li"), n), this.activate(s, s.parent(), function() {
                    i.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }), t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(t, r, i) {
        function o() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
        }
        var a = r.find("> .active"),
            s = i && e.support.transition && (a.length && a.hasClass("fade") || !!r.find("> .fade").length);
        a.length && s ? a.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), a.removeClass("in")
    };
    var r = e.fn.tab;
    e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
        return e.fn.tab = r, this
    };
    var i = function(n) {
        n.preventDefault(), t.call(e(this), "show")
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery), OrderForm.prototype = {
    constructor: OrderForm,
    optionsDefault: {
        classNames: {
            form: "order-form",
            sendingResult: "order-form-result",
            sendingResultActive: "order-form-result-active",
            sendingResultError: "order-form-result-error"
        },
        validation: ""
    },
    dom: null,
    validation: {},
    onAjaxResponseCompleteCallback: null,
    run: function() {
        this.doSetDom(), this.doBindEvents()
    },
    setOnAjaxResponseCompleteCallback: function(e) {
        this.onAjaxResponseCompleteCallback = e
    },
    doSetDom: function() {
        if (this.dom.$id = this.dom.$root.attr("id"), this.dom.$sendingResult = this.dom.$root.find("." + this.options.classNames.sendingResult), this.dom.$form = this.dom.$root.find("." + this.options.classNames.form), this.dom.$formControl = this.dom.$root.find(".form-control"), "" != this.options.validation) {
            $validation = this.options.validation.split("|");
            for (var e = 0; e < $validation.length; e++) "phone" == $validation[e] && (this.dom.validation.phone = this.dom.$root.find(".validation-phone"), this.dom.validation.phone.mask("+7 (___) ___ - __ - __", {
                autoclear: !1
            })), "email" == $validation[e] && (this.dom.validation.email = this.dom.$root.find(".validation-email"))
        }
    },
    doBindEvents: function() {
        var e = this,
            t = !0;
        this.doChangeFormControl(), this.dom.$form.submit(function() {
            return t = "" == e.options.validation || e.doValidateFormSubmit(e.dom.validation), 1 == t ? e.sendAjaxRequest() : $error = $(".has-error").first().find(".form-control").focus(), !1
        })
    },
    doValidateFormSubmit: function(e) {
        return e.email ? $email = this.doValidateField(e.email, "email") : $email = !0, e.phone ? $phone = this.doValidateField(e.phone, "phone") : $phone = !0, 1 == $email && 1 == $phone
    },
    doChangeFormControl: function() {
        var e = this;
        this.dom.$formControl.change(function() {
            var t = $(this).val(),
                n = $(this).prop("required");
            $(this).hasClass("validation-phone") ? e.doValidateField(this, "phone") : $(this).hasClass("validation-email") ? e.doValidateField(this, "email") : $(this).hasClass("validation-captcha") ? e.doValidateField(this, "captcha") : "" != t ? e.doRenderValidate(this, "has-success") : "" == t && 1 == n ? e.doRenderValidate(this, "has-error") : "" == t && 1 == e.options.hasWarning ? e.doRenderValidate(this, "has-warning") : e.doRenderValidate(this, "has-empty")
        })
    },
    sendAjaxRequest: function() {
        var e = this;
        this.dom.$form.find(".button[type=submit]").addClass("disabled").attr("disabled", !0);
        var t = $(e.dom.$form).serialize();
        1 == this.options.$get ? $.ajax({
            url: e.dom.$form.attr("action"),
            type: "POST",
            data: {
                data: t,
                get: window.location.search
            },
            dataType: "json",
            success: function(t) {
                e.dom.$form.find(".button[type=submit]").removeClass("disabled").removeAttr("disabled"), e.onAjaxResponse(t)
            },
            error: function(e) {}
        }) : $.ajax({
            url: e.dom.$form.attr("action"),
            type: "POST",
            data: t,
            dataType: "json",
            success: function(t) {
                e.dom.$form.find(".button[type=submit]").removeClass("disabled").removeAttr("disabled"), e.onAjaxResponse(t)
            },
            error: function(e) {}
        })
    },
    onAjaxResponse: function(e) {
        "alert" == this.options.$resultTemplate ? alert(e.result) : (this.dom.$sendingResult.html(e.result), e.isError ? "show" == this.options.$resultTemplate && this.dom.$sendingResult.addClass(this.options.classNames.sendingResultError) : ("slideUp" == this.options.$resultTemplate && (this.dom.$form.slideUp(), this.dom.$sendingResult.removeClass(this.options.classNames.sendingResultError), this.dom.$sendingResult.slideDown().addClass(this.options.classNames.sendingResultActive)), "show" == this.options.$resultTemplate && (this.dom.$sendingResult.removeClass(this.options.classNames.sendingResultError), this.dom.$sendingResult.slideDown().addClass(this.options.classNames.sendingResultActive)))), e.isError || this.doFormReset()
    },
    doValidateField: function(e, t) {
        var n = $(e).val();
        if ("phone" == t) var r = /^\+7\s\([\d]{2,3}\)\s[\d]{2,3}\s-\s[\d]{2,3}\s-\s[\d]{2,3}$/i,
            i = r.test(n);
        if ("email" == t) var r = /^[\w]{1}[\w-\.]*@[\w-]+\.[\w-\.]*$/i,
            i = r.test(n);
        return 1 == i ? (this.doRenderValidate(e, "has-success"), !0) : (this.doRenderValidate(e, "has-error"), !1)
    },
    doRenderValidate: function(e, t) {
        $(e).parent().parent().hasClass(t) && $(e).parent().parent().removeClass(t), "has-success" == t && $(e).parent().parent().removeClass("has-error has-warning").addClass(t).addClass("has-feedback"), "has-error" == t && $(e).parent().parent().removeClass("has-success has-warning").addClass(t).addClass("has-feedback"), "has-warning" == t && $(e).parent().parent().removeClass("has-success has-error").addClass(t).addClass("has-feedback"), "has-empty" == t && $(e).parent().parent().removeClass("has-success has-error has-warning has-feedback"), 0 == $(e).siblings(".fa").length ? ("has-success" == t && $(e).parent().append('<i class="fa fa-check form-control-feedback hasTooltip" aria-hidden="true"></i>'), "has-error" == t && $(e).parent().append('<i class="fa fa-close form-control-feedback" aria-hidden="true"></i>'), "has-warning" == t && $(e).parent().append('<i class="glyphicon glyphicon-warning-sign form-control-feedback" aria-hidden="true"></i>')) : ($siblings = $(e).siblings(".fa"), "has-success" == t && $siblings.removeClass().addClass("fa fa-check form-control-feedback"), "has-error" == t && $siblings.removeClass().addClass("fa fa-close form-control-feedback"), "has-warning" == t && $siblings.removeClass().addClass("glyphicon glyphicon-warning-sign form-control-feedback"), "has-empty" == t && $siblings.removeClass().remove())
    },
    doFormReset: function() {
        $(this.dom.$form)[0].reset(), this.dom.$form.find(".form-group").removeClass("has-success has-feedback"), this.dom.$form.find(".form-control-feedback").remove()
    }
}, $(document).ready(function() {
    $(".magnific-image-link").magnificPopup({
        type: "image"
    }), $orderDesignInterior = $("#qd_title2"), $orderCallBack = $("#call-back"), $orderProject = $("#order-project"), $orderEngineeringCallBack = $("#call-back-form-engineering"), $orderEngineeringProject = $("#order-form-engineering"), $orderContacts = $("#respond-contacts"), $orderCooperation = $("#cooperation-form"), $orderDesignPage = $(".form-page-design"), $orderDesignPageAlert = $(".form-page-design-alert");
    var e = new OrderForm({
        $orderForm: $orderDesignInterior,
        $resultTemplate: "slideUp",
        $get: !1,
        validation: "email"
    });
    e.run();
    var t = new OrderForm({
        $orderForm: $orderCallBack,
        $resultTemplate: "show",
        $get: !0,
        validation: "phone"
    });
    t.run();
    var n = new OrderForm({
        $orderForm: $orderProject,
        $resultTemplate: "show",
        $get: !0,
        validation: "phone|email"
    });
    n.run();
    var r = new OrderForm({
        $orderForm: $orderEngineeringCallBack,
        $resultTemplate: "show",
        $get: !0,
        validation: "phone"
    });
    r.run();
    var i = new OrderForm({
        $orderForm: $orderEngineeringProject,
        $resultTemplate: "show",
        $get: !0,
        validation: "phone|email"
    });
    i.run();
    var o = new OrderForm({
        $orderForm: $orderContacts,
        $resultTemplate: "show",
        $get: !0,
        validation: "phone"
    });
    o.run();
    var a = new OrderForm({
        $orderForm: $orderCooperation,
        $resultTemplate: "show",
        $get: !0,
        validation: "phone|email"
    });
    a.run();
    var s = new OrderForm({
        $orderForm: $orderDesignPage,
        $resultTemplate: "show",
        $get: !0,
        validation: "phone"
    });
    s.run();
    var l = new OrderForm({
        $orderForm: $orderDesignPageAlert,
        $resultTemplate: "alert",
        $get: !0,
        validation: "phone"
    });
    l.run()
}), $(document).ready(function() {
    $menu = $("#navigation > ul > li").eq(2).hasClass("current-menu-item"), $subMenu = $("#navigation > ul > li").eq(2).find("ul > li").eq(3).hasClass("current-menu-item"), $menu === !0 && $subMenu === !0 && $("#navigation > ul > li").eq(2).addClass("current-menu-item-no"), $(".powered-by-serptop").html('<a href="http://serptop.ru/" target="_blank">Powered by - <span class="serp">Serp</span><span class="top">Top</span></a>')
});
//# sourceMappingURL=maps/saved_resource(2).js.map
