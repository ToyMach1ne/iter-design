/*! jQuery v1.10.1 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e, t) {
  var n, r, i = typeof t,
    o = e.location,
    a = e.document,
    s = a.documentElement,
    l = e.jQuery,
    u = e.$,
    c = {},
    p = [],
    f = "1.10.1",
    d = p.concat,
    h = p.push,
    g = p.slice,
    m = p.indexOf,
    y = c.toString,
    v = c.hasOwnProperty,
    b = f.trim,
    x = function(e, t) {
      return new x.fn.init(e, t, r)
    },
    w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    T = /\S+/g,
    C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    E = /^[\],:{}\s]*$/,
    S = /(?:^|:|,)(?:\s*\[)+/g,
    A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    D = /^-ms-/,
    L = /-([\da-z])/gi,
    H = function(e, t) {
      return t.toUpperCase()
    },
    q = function(e) {
      (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
    },
    _ = function() {
      a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
    };
  x.fn = x.prototype = {
    jquery: f,
    constructor: x,
    init: function(e, n, r) {
      var i, o;
      if (!e) return this;
      if ("string" == typeof e) {
        if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
        if (i[1]) {
          if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n))
            for (i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
          return this
        }
        if (o = a.getElementById(i[2]), o && o.parentNode) {
          if (o.id !== i[2]) return r.find(e);
          this.length = 1, this[0] = o
        }
        return this.context = a, this.selector = e, this
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
    },
    selector: "",
    length: 0,
    toArray: function() {
      return g.call(this)
    },
    get: function(e) {
      return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
    },
    pushStack: function(e) {
      var t = x.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t
    },
    each: function(e, t) {
      return x.each(this, e, t)
    },
    ready: function(e) {
      return x.ready.promise().done(e), this
    },
    slice: function() {
      return this.pushStack(g.apply(this, arguments))
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
      return this.pushStack(x.map(this, function(t, n) {
        return e.call(t, n, t)
      }))
    },
    end: function() {
      return this.prevObject || this.constructor(null)
    },
    push: h,
    sort: [].sort,
    splice: [].splice
  }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function() {
    var e, n, r, i, o, a, s = arguments[0] || {},
      l = 1,
      u = arguments.length,
      c = !1;
    for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)
      if (null != (o = arguments[l]))
        for (i in o) e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
    return s
  }, x.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    noConflict: function(t) {
      return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
    },
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {
      e ? x.readyWait++ : x.ready(!0)
    },
    ready: function(e) {
      if (e === !0 ? !--x.readyWait : !x.isReady) {
        if (!a.body) return setTimeout(x.ready);
        x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
      }
    },
    isFunction: function(e) {
      return "function" === x.type(e)
    },
    isArray: Array.isArray || function(e) {
      return "array" === x.type(e)
    },
    isWindow: function(e) {
      return null != e && e == e.window
    },
    isNumeric: function(e) {
      return !isNaN(parseFloat(e)) && isFinite(e)
    },
    type: function(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
    },
    isPlainObject: function(e) {
      var n;
      if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;
      try {
        if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1
      } catch (r) {
        return !1
      }
      if (x.support.ownLast)
        for (n in e) return v.call(e, n);
      for (n in e);
      return n === t || v.call(e, n)
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
      "boolean" == typeof t && (n = t, t = !1), t = t || a;
      var r = k.exec(e),
        i = !n && [];
      return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
    },
    parseJSON: function(n) {
      return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
    },
    parseXML: function(n) {
      var r, i;
      if (!n || "string" != typeof n) return null;
      try {
        e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
      } catch (o) {
        r = t
      }
      return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
    },
    noop: function() {},
    globalEval: function(t) {
      t && x.trim(t) && (e.execScript || function(t) {
        e.eval.call(e, t)
      })(t)
    },
    camelCase: function(e) {
      return e.replace(D, "ms-").replace(L, H)
    },
    nodeName: function(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    },
    each: function(e, t, n) {
      var r, i = 0,
        o = e.length,
        a = M(e);
      if (n) {
        if (a) {
          for (; o > i; i++)
            if (r = t.apply(e[i], n), r === !1) break
        } else
          for (i in e)
            if (r = t.apply(e[i], n), r === !1) break
      } else if (a) {
        for (; o > i; i++)
          if (r = t.call(e[i], i, e[i]), r === !1) break
      } else
        for (i in e)
          if (r = t.call(e[i], i, e[i]), r === !1) break; return e
    },
    trim: b && !b.call("\ufeff\u00a0") ? function(e) {
      return null == e ? "" : b.call(e)
    } : function(e) {
      return null == e ? "" : (e + "").replace(C, "")
    },
    makeArray: function(e, t) {
      var n = t || [];
      return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
    },
    inArray: function(e, t, n) {
      var r;
      if (t) {
        if (m) return m.call(t, e, n);
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
        while (n[o] !== t) e[i++] = n[o++];
      return e.length = i, e
    },
    grep: function(e, t, n) {
      var r, i = [],
        o = 0,
        a = e.length;
      for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
      return i
    },
    map: function(e, t, n) {
      var r, i = 0,
        o = e.length,
        a = M(e),
        s = [];
      if (a)
        for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r);
      else
        for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
      return d.apply([], s)
    },
    guid: 1,
    proxy: function(e, n) {
      var r, i, o;
      return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function() {
        return e.apply(n || this, r.concat(g.call(arguments)))
      }, i.guid = e.guid = e.guid || x.guid++, i) : t
    },
    access: function(e, n, r, i, o, a, s) {
      var l = 0,
        u = e.length,
        c = null == r;
      if ("object" === x.type(r)) {
        o = !0;
        for (l in r) x.access(e, n, l, r[l], !0, a, s)
      } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
          return c.call(x(e), n)
        })), n))
        for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
      return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
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
  }), x.ready.promise = function(t) {
    if (!n)
      if (n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready);
      else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1);
    else {
      a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
      var r = !1;
      try {
        r = null == e.frameElement && a.documentElement
      } catch (i) {}
      r && r.doScroll && function o() {
        if (!x.isReady) {
          try {
            r.doScroll("left")
          } catch (e) {
            return setTimeout(o, 50)
          }
          _(), x.ready()
        }
      }()
    }
    return n.promise(t)
  }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
    c["[object " + t + "]"] = t.toLowerCase()
  });

  function M(e) {
    var t = e.length,
      n = x.type(e);
    return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
  }
  r = x(a),
    function(e, t) {
      var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date,
        w = e.document,
        T = 0,
        C = 0,
        N = lt(),
        k = lt(),
        E = lt(),
        S = !1,
        A = function() {
          return 0
        },
        j = typeof t,
        D = 1 << 31,
        L = {}.hasOwnProperty,
        H = [],
        q = H.pop,
        _ = H.push,
        M = H.push,
        O = H.slice,
        F = H.indexOf || function(e) {
          var t = 0,
            n = this.length;
          for (; n > t; t++)
            if (this[t] === e) return t;
          return -1
        },
        B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        P = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        W = R.replace("w", "w#"),
        $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]",
        I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
        z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
        X = RegExp("^" + P + "*," + P + "*"),
        U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
        V = RegExp(P + "*[+~]"),
        Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
        J = RegExp(I),
        G = RegExp("^" + W + "$"),
        Q = {
          ID: RegExp("^#(" + R + ")"),
          CLASS: RegExp("^\\.(" + R + ")"),
          TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
          ATTR: RegExp("^" + $),
          PSEUDO: RegExp("^" + I),
          CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
          bool: RegExp("^(?:" + B + ")$", "i"),
          needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
        },
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        et = /^(?:input|select|textarea|button)$/i,
        tt = /^h\d$/i,
        nt = /'|\\/g,
        rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
        it = function(e, t, n) {
          var r = "0x" + t - 65536;
          return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
        };
      try {
        M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType
      } catch (ot) {
        M = {
          apply: H.length ? function(e, t) {
            _.apply(e, O.call(t))
          } : function(e, t) {
            var n = e.length,
              r = 0;
            while (e[n++] = t[r++]);
            e.length = n - 1
          }
        }
      }

      function at(e, t, n, i) {
        var o, a, s, l, u, c, d, m, y, x;
        if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n;
        if (1 !== (l = t.nodeType) && 9 !== l) return [];
        if (h && !i) {
          if (o = Z.exec(e))
            if (s = o[1]) {
              if (9 === l) {
                if (a = t.getElementById(s), !a || !a.parentNode) return n;
                if (a.id === s) return n.push(a), n
              } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n
            } else {
              if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;
              if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n
            }
          if (r.qsa && (!g || !g.test(e))) {
            if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
              c = bt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
              while (u--) c[u] = m + xt(c[u]);
              y = V.test(e) && t.parentNode || t, x = c.join(",")
            }
            if (x) try {
              return M.apply(n, y.querySelectorAll(x)), n
            } catch (T) {} finally {
              d || t.removeAttribute("id")
            }
          }
        }
        return At(e.replace(z, "$1"), t, n, i)
      }

      function st(e) {
        return K.test(e + "")
      }

      function lt() {
        var e = [];

        function t(n, r) {
          return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
        }
        return t
      }

      function ut(e) {
        return e[b] = !0, e
      }

      function ct(e) {
        var t = f.createElement("div");
        try {
          return !!e(t)
        } catch (n) {
          return !1
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null
        }
      }

      function pt(e, t, n) {
        e = e.split("|");
        var r, i = e.length,
          a = n ? null : t;
        while (i--)(r = o.attrHandle[e[i]]) && r !== t || (o.attrHandle[e[i]] = a)
      }

      function ft(e, t) {
        var n = e.getAttributeNode(t);
        return n && n.specified ? n.value : e[t] === !0 ? t.toLowerCase() : null
      }

      function dt(e, t) {
        return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }

      function ht(e) {
        return "input" === e.nodeName.toLowerCase() ? e.defaultValue : t
      }

      function gt(e, t) {
        var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
        if (r) return r;
        if (n)
          while (n = n.nextSibling)
            if (n === t) return -1;
        return e ? 1 : -1
      }

      function mt(e) {
        return function(t) {
          var n = t.nodeName.toLowerCase();
          return "input" === n && t.type === e
        }
      }

      function yt(e) {
        return function(t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e
        }
      }

      function vt(e) {
        return ut(function(t) {
          return t = +t, ut(function(n, r) {
            var i, o = e([], n.length, t),
              a = o.length;
            while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
          })
        })
      }
      s = at.isXML = function(e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return t ? "HTML" !== t.nodeName : !1
      }, r = at.support = {}, p = at.setDocument = function(e) {
        var n = e ? e.ownerDocument || e : w,
          i = n.parentWindow;
        return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.frameElement && i.attachEvent("onbeforeunload", function() {
          p()
        }), r.attributes = ct(function(e) {
          return e.innerHTML = "<a href='#'></a>", pt("type|href|height|width", dt, "#" === e.firstChild.getAttribute("href")), pt(B, ft, null == e.getAttribute("disabled")), e.className = "i", !e.getAttribute("className")
        }), r.input = ct(function(e) {
          return e.innerHTML = "<input>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }), pt("value", ht, r.attributes && r.input), r.getElementsByTagName = ct(function(e) {
          return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
        }), r.getElementsByClassName = ct(function(e) {
          return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
        }), r.getById = ct(function(e) {
          return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
        }), r.getById ? (o.find.ID = function(e, t) {
          if (typeof t.getElementById !== j && h) {
            var n = t.getElementById(e);
            return n && n.parentNode ? [n] : []
          }
        }, o.filter.ID = function(e) {
          var t = e.replace(rt, it);
          return function(e) {
            return e.getAttribute("id") === t
          }
        }) : (delete o.find.ID, o.filter.ID = function(e) {
          var t = e.replace(rt, it);
          return function(e) {
            var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
            return n && n.value === t
          }
        }), o.find.TAG = r.getElementsByTagName ? function(e, n) {
          return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
        } : function(e, t) {
          var n, r = [],
            i = 0,
            o = t.getElementsByTagName(e);
          if ("*" === e) {
            while (n = o[i++]) 1 === n.nodeType && r.push(n);
            return r
          }
          return o
        }, o.find.CLASS = r.getElementsByClassName && function(e, n) {
          return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
        }, m = [], g = [], (r.qsa = st(n.querySelectorAll)) && (ct(function(e) {
          e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
        }), ct(function(e) {
          var t = n.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
        })), (r.matchesSelector = st(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ct(function(e) {
          r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
        }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = st(d.contains) || d.compareDocumentPosition ? function(e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
          return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
        } : function(e, t) {
          if (t)
            while (t = t.parentNode)
              if (t === e) return !0;
          return !1
        }, r.sortDetached = ct(function(e) {
          return 1 & e.compareDocumentPosition(n.createElement("div"))
        }), A = d.compareDocumentPosition ? function(e, t) {
          if (e === t) return S = !0, 0;
          var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
          return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
        } : function(e, t) {
          var r, i = 0,
            o = e.parentNode,
            a = t.parentNode,
            s = [e],
            l = [t];
          if (e === t) return S = !0, 0;
          if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
          if (o === a) return gt(e, t);
          r = e;
          while (r = r.parentNode) s.unshift(r);
          r = t;
          while (r = r.parentNode) l.unshift(r);
          while (s[i] === l[i]) i++;
          return i ? gt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
        }, n) : f
      }, at.matches = function(e, t) {
        return at(e, null, null, t)
      }, at.matchesSelector = function(e, t) {
        if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try {
          var n = y.call(e, t);
          if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
        } catch (i) {}
        return at(t, f, null, [e]).length > 0
      }, at.contains = function(e, t) {
        return (e.ownerDocument || e) !== f && p(e), v(e, t)
      }, at.attr = function(e, n) {
        (e.ownerDocument || e) !== f && p(e);
        var i = o.attrHandle[n.toLowerCase()],
          a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
        return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
      }, at.error = function(e) {
        throw Error("Syntax error, unrecognized expression: " + e)
      }, at.uniqueSort = function(e) {
        var t, n = [],
          i = 0,
          o = 0;
        if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
          while (t = e[o++]) t === e[o] && (i = n.push(o));
          while (i--) e.splice(n[i], 1)
        }
        return e
      }, a = at.getText = function(e) {
        var t, n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
          } else if (3 === i || 4 === i) return e.nodeValue
        } else
          for (; t = e[r]; r++) n += a(t);
        return n
      }, o = at.selectors = {
        cacheLength: 50,
        createPseudo: ut,
        match: Q,
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
            return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
          },
          CHILD: function(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e
          },
          PSEUDO: function(e) {
            var n, r = !e[5] && e[2];
            return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = bt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
          }
        },
        filter: {
          TAG: function(e) {
            var t = e.replace(rt, it).toLowerCase();
            return "*" === e ? function() {
              return !0
            } : function(e) {
              return e.nodeName && e.nodeName.toLowerCase() === t
            }
          },
          CLASS: function(e) {
            var t = N[e + " "];
            return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function(e) {
              return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
            })
          },
          ATTR: function(e, t, n) {
            return function(r) {
              var i = at.attr(r, e);
              return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
            }
          },
          CHILD: function(e, t, n, r, i) {
            var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
            return 1 === r && 0 === i ? function(e) {
              return !!e.parentNode
            } : function(t, n, l) {
              var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                m = t.parentNode,
                y = s && t.nodeName.toLowerCase(),
                v = !l && !s;
              if (m) {
                if (o) {
                  while (g) {
                    p = t;
                    while (p = p[g])
                      if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                    h = g = "only" === e && !h && "nextSibling"
                  }
                  return !0
                }
                if (h = [a ? m.firstChild : m.lastChild], a && v) {
                  c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
                  while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                    if (1 === p.nodeType && ++f && p === t) {
                      c[e] = [T, d, f];
                      break
                    }
                } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1];
                else
                  while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                    if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break; return f -= i, f === r || 0 === f % r && f / r >= 0
              }
            }
          },
          PSEUDO: function(e, t) {
            var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
            return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? ut(function(e, n) {
              var i, o = r(e, t),
                a = o.length;
              while (a--) i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
            }) : function(e) {
              return r(e, 0, n)
            }) : r
          }
        },
        pseudos: {
          not: ut(function(e) {
            var t = [],
              n = [],
              r = l(e.replace(z, "$1"));
            return r[b] ? ut(function(e, t, n, i) {
              var o, a = r(e, null, i, []),
                s = e.length;
              while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
            }) : function(e, i, o) {
              return t[0] = e, r(t, null, o, n), !n.pop()
            }
          }),
          has: ut(function(e) {
            return function(t) {
              return at(e, t).length > 0
            }
          }),
          contains: ut(function(e) {
            return function(t) {
              return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
            }
          }),
          lang: ut(function(e) {
            return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(),
              function(t) {
                var n;
                do
                  if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                while ((t = t.parentNode) && 1 === t.nodeType);
                return !1
              }
          }),
          target: function(t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id
          },
          root: function(e) {
            return e === d
          },
          focus: function(e) {
            return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
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
            return !o.pseudos.empty(e)
          },
          header: function(e) {
            return tt.test(e.nodeName)
          },
          input: function(e) {
            return et.test(e.nodeName)
          },
          button: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
          },
          text: function(e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
          },
          first: vt(function() {
            return [0]
          }),
          last: vt(function(e, t) {
            return [t - 1]
          }),
          eq: vt(function(e, t, n) {
            return [0 > n ? n + t : n]
          }),
          even: vt(function(e, t) {
            var n = 0;
            for (; t > n; n += 2) e.push(n);
            return e
          }),
          odd: vt(function(e, t) {
            var n = 1;
            for (; t > n; n += 2) e.push(n);
            return e
          }),
          lt: vt(function(e, t, n) {
            var r = 0 > n ? n + t : n;
            for (; --r >= 0;) e.push(r);
            return e
          }),
          gt: vt(function(e, t, n) {
            var r = 0 > n ? n + t : n;
            for (; t > ++r;) e.push(r);
            return e
          })
        }
      };
      for (n in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) o.pseudos[n] = mt(n);
      for (n in {
          submit: !0,
          reset: !0
        }) o.pseudos[n] = yt(n);

      function bt(e, t) {
        var n, r, i, a, s, l, u, c = k[e + " "];
        if (c) return t ? 0 : c.slice(0);
        s = e, l = [], u = o.preFilter;
        while (s) {
          (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
            value: n,
            type: r[0].replace(z, " ")
          }), s = s.slice(n.length));
          for (a in o.filter) !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
            value: n,
            type: a,
            matches: r
          }), s = s.slice(n.length));
          if (!n) break
        }
        return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
      }

      function xt(e) {
        var t = 0,
          n = e.length,
          r = "";
        for (; n > t; t++) r += e[t].value;
        return r
      }

      function wt(e, t, n) {
        var r = t.dir,
          o = n && "parentNode" === r,
          a = C++;
        return t.first ? function(t, n, i) {
          while (t = t[r])
            if (1 === t.nodeType || o) return e(t, n, i)
        } : function(t, n, s) {
          var l, u, c, p = T + " " + a;
          if (s) {
            while (t = t[r])
              if ((1 === t.nodeType || o) && e(t, n, s)) return !0
          } else
            while (t = t[r])
              if (1 === t.nodeType || o)
                if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
                  if ((l = u[1]) === !0 || l === i) return l === !0
                } else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0
        }
      }

      function Tt(e) {
        return e.length > 1 ? function(t, n, r) {
          var i = e.length;
          while (i--)
            if (!e[i](t, n, r)) return !1;
          return !0
        } : e[0]
      }

      function Ct(e, t, n, r, i) {
        var o, a = [],
          s = 0,
          l = e.length,
          u = null != t;
        for (; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
        return a
      }

      function Nt(e, t, n, r, i, o) {
        return r && !r[b] && (r = Nt(r)), i && !i[b] && (i = Nt(i, o)), ut(function(o, a, s, l) {
          var u, c, p, f = [],
            d = [],
            h = a.length,
            g = o || St(t || "*", s.nodeType ? [s] : s, []),
            m = !e || !o && t ? g : Ct(g, f, e, s, l),
            y = n ? i || (o ? e : h || r) ? [] : a : m;
          if (n && n(m, y, s, l), r) {
            u = Ct(y, d), r(u, [], s, l), c = u.length;
            while (c--)(p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
          }
          if (o) {
            if (i || e) {
              if (i) {
                u = [], c = y.length;
                while (c--)(p = y[c]) && u.push(m[c] = p);
                i(null, y = [], u, l)
              }
              c = y.length;
              while (c--)(p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
            }
          } else y = Ct(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
        })
      }

      function kt(e) {
        var t, n, r, i = e.length,
          a = o.relative[e[0].type],
          s = a || o.relative[" "],
          l = a ? 1 : 0,
          c = wt(function(e) {
            return e === t
          }, s, !0),
          p = wt(function(e) {
            return F.call(t, e) > -1
          }, s, !0),
          f = [function(e, n, r) {
            return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
          }];
        for (; i > l; l++)
          if (n = o.relative[e[l].type]) f = [wt(Tt(f), n)];
          else {
            if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
              for (r = ++l; i > r; r++)
                if (o.relative[e[r].type]) break;
              return Nt(l > 1 && Tt(f), l > 1 && xt(e.slice(0, l - 1).concat({
                value: " " === e[l - 2].type ? "*" : ""
              })).replace(z, "$1"), n, r > l && kt(e.slice(l, r)), i > r && kt(e = e.slice(r)), i > r && xt(e))
            }
            f.push(n)
          }
        return Tt(f)
      }

      function Et(e, t) {
        var n = 0,
          r = t.length > 0,
          a = e.length > 0,
          s = function(s, l, c, p, d) {
            var h, g, m, y = [],
              v = 0,
              b = "0",
              x = s && [],
              w = null != d,
              C = u,
              N = s || a && o.find.TAG("*", d && l.parentNode || l),
              k = T += null == C ? 1 : Math.random() || .1;
            for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
              if (a && h) {
                g = 0;
                while (m = e[g++])
                  if (m(h, l, c)) {
                    p.push(h);
                    break
                  }
                w && (T = k, i = ++n)
              }
              r && ((h = !m && h) && v--, s && x.push(h))
            }
            if (v += b, r && b !== v) {
              g = 0;
              while (m = t[g++]) m(x, y, l, c);
              if (s) {
                if (v > 0)
                  while (b--) x[b] || y[b] || (y[b] = q.call(p));
                y = Ct(y)
              }
              M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
            }
            return w && (T = k, u = C), x
          };
        return r ? ut(s) : s
      }
      l = at.compile = function(e, t) {
        var n, r = [],
          i = [],
          o = E[e + " "];
        if (!o) {
          t || (t = bt(e)), n = t.length;
          while (n--) o = kt(t[n]), o[b] ? r.push(o) : i.push(o);
          o = E(e, Et(i, r))
        }
        return o
      };

      function St(e, t, n) {
        var r = 0,
          i = t.length;
        for (; i > r; r++) at(e, t[r], n);
        return n
      }

      function At(e, t, n, i) {
        var a, s, u, c, p, f = bt(e);
        if (!i && 1 === f.length) {
          if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
            if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n;
            e = e.slice(s.shift().value.length)
          }
          a = Q.needsContext.test(e) ? 0 : s.length;
          while (a--) {
            if (u = s[a], o.relative[c = u.type]) break;
            if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
              if (s.splice(a, 1), e = i.length && xt(s), !e) return M.apply(n, i), n;
              break
            }
          }
        }
        return l(e, f)(i, t, !h, n, V.test(e)), n
      }
      o.pseudos.nth = o.pseudos.eq;

      function jt() {}
      jt.prototype = o.filters = o.pseudos, o.setFilters = new jt, r.sortStable = b.split("").sort(A).join("") === b, p(), [0, 0].sort(A), r.detectDuplicates = S, x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
    }(e);
  var O = {};

  function F(e) {
    var t = O[e] = {};
    return x.each(e.match(T) || [], function(e, n) {
      t[n] = !0
    }), t
  }
  x.Callbacks = function(e) {
    e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
    var n, r, i, o, a, s, l = [],
      u = !e.once && [],
      c = function(t) {
        for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++)
          if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
            r = !1;
            break
          }
        n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
      },
      p = {
        add: function() {
          if (l) {
            var t = l.length;
            (function i(t) {
              x.each(t, function(t, n) {
                var r = x.type(n);
                "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
              })
            })(arguments), n ? o = l.length : r && (s = t, c(r))
          }
          return this
        },
        remove: function() {
          return l && x.each(arguments, function(e, t) {
            var r;
            while ((r = x.inArray(t, l, r)) > -1) l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
          }), this
        },
        has: function(e) {
          return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
        },
        empty: function() {
          return l = [], o = 0, this
        },
        disable: function() {
          return l = u = r = t, this
        },
        disabled: function() {
          return !l
        },
        lock: function() {
          return u = t, r || p.disable(), this
        },
        locked: function() {
          return !u
        },
        fireWith: function(e, t) {
          return t = t || [], t = [e, t.slice ? t.slice() : t], !l || i && !u || (n ? u.push(t) : c(t)), this
        },
        fire: function() {
          return p.fireWith(this, arguments), this
        },
        fired: function() {
          return !!i
        }
      };
    return p
  }, x.extend({
    Deferred: function(e) {
      var t = [
          ["resolve", "done", x.Callbacks("once memory"), "resolved"],
          ["reject", "fail", x.Callbacks("once memory"), "rejected"],
          ["notify", "progress", x.Callbacks("memory")]
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
            return x.Deferred(function(n) {
              x.each(t, function(t, o) {
                var a = o[0],
                  s = x.isFunction(e[t]) && e[t];
                i[o[1]](function() {
                  var e = s && s.apply(this, arguments);
                  e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                })
              }), e = null
            }).promise()
          },
          promise: function(e) {
            return null != e ? x.extend(e, r) : r
          }
        },
        i = {};
      return r.pipe = r.then, x.each(t, function(e, o) {
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
      var t = 0,
        n = g.call(arguments),
        r = n.length,
        i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
        o = 1 === i ? e : x.Deferred(),
        a = function(e, t, n) {
          return function(r) {
            t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
          }
        },
        s, l, u;
      if (r > 1)
        for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
      return i || o.resolveWith(u, n), o.promise()
    }
  }), x.support = function(t) {
    var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
    if (d.setAttribute("className", "t"), d.innerHTML = " <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
    s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
    try {
      delete d.test
    } catch (h) {
      t.deleteExpando = !1
    }
    o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
      t.noCloneEvent = !1
    }), d.cloneNode(!0).click());
    for (f in {
        submit: !0,
        change: !0,
        focusin: !0
      }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
    d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
    for (f in x(t)) break;
    return t.ownLast = "0" !== f, x(function() {
      var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
        l = a.getElementsByTagName("body")[0];
      l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {
        zoom: 1
      } : {}, function() {
        t.boxSizing = 4 === d.offsetWidth
      }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
        width: "4px"
      }).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
    }), n = s = l = u = r = o = null, t
  }({});
  var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    P = /([A-Z])/g;

  function R(e, n, r, i) {
    if (x.acceptData(e)) {
      var o, a, s = x.expando,
        l = e.nodeType,
        u = l ? x.cache : e,
        c = l ? e[s] : e[s] && s;
      if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {
        toJSON: x.noop
      }), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
    }
  }

  function W(e, t, n) {
    if (x.acceptData(e)) {
      var r, i, o = e.nodeType,
        a = o ? x.cache : e,
        s = o ? e[x.expando] : x.expando;
      if (a[s]) {
        if (t && (r = n ? a[s] : a[s].data)) {
          x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
          while (i--) delete r[t[i]];
          if (n ? !I(r) : !x.isEmptyObject(r)) return
        }(n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
      }
    }
  }
  x.extend({
    cache: {},
    noData: {
      applet: !0,
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(e) {
      return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e)
    },
    data: function(e, t, n) {
      return R(e, t, n)
    },
    removeData: function(e, t) {
      return W(e, t)
    },
    _data: function(e, t, n) {
      return R(e, t, n, !0)
    },
    _removeData: function(e, t) {
      return W(e, t, !0)
    },
    acceptData: function(e) {
      if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
      var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
      return !t || t !== !0 && e.getAttribute("classid") === t
    }
  }), x.fn.extend({
    data: function(e, n) {
      var r, i, o = null,
        a = 0,
        s = this[0];
      if (e === t) {
        if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
          for (r = s.attributes; r.length > a; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
          x._data(s, "parsedAttrs", !0)
        }
        return o
      }
      return "object" == typeof e ? this.each(function() {
        x.data(this, e)
      }) : arguments.length > 1 ? this.each(function() {
        x.data(this, e, n)
      }) : s ? $(s, e, x.data(s, e)) : null
    },
    removeData: function(e) {
      return this.each(function() {
        x.removeData(this, e)
      })
    }
  });

  function $(e, n, r) {
    if (r === t && 1 === e.nodeType) {
      var i = "data-" + n.replace(P, "-$1").toLowerCase();
      if (r = e.getAttribute(i), "string" == typeof r) {
        try {
          r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
        } catch (o) {}
        x.data(e, n, r)
      } else r = t
    }
    return r
  }

  function I(e) {
    var t;
    for (t in e)
      if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0
  }
  x.extend({
    queue: function(e, n, r) {
      var i;
      return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var n = x.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = x._queueHooks(e, t),
        a = function() {
          x.dequeue(e, t)
        };
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
    },
    _queueHooks: function(e, t) {
      var n = t + "queueHooks";
      return x._data(e, n) || x._data(e, n, {
        empty: x.Callbacks("once memory").add(function() {
          x._removeData(e, t + "queue"), x._removeData(e, n)
        })
      })
    }
  }), x.fn.extend({
    queue: function(e, n) {
      var r = 2;
      return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function() {
        var t = x.queue(this, e, n);
        x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
      })
    },
    dequeue: function(e) {
      return this.each(function() {
        x.dequeue(this, e)
      })
    },
    delay: function(e, t) {
      return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
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
        o = x.Deferred(),
        a = this,
        s = this.length,
        l = function() {
          --i || o.resolveWith(a, [a])
        };
      "string" != typeof e && (n = e, e = t), e = e || "fx";
      while (s--) r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
      return l(), o.promise(n)
    }
  });
  var z, X, U = /[\t\r\n\f]/g,
    V = /\r/g,
    Y = /^(?:input|select|textarea|button|object)$/i,
    J = /^(?:a|area)$/i,
    G = /^(?:checked|selected)$/i,
    Q = x.support.getSetAttribute,
    K = x.support.input;
  x.fn.extend({
    attr: function(e, t) {
      return x.access(this, x.attr, e, t, arguments.length > 1)
    },
    removeAttr: function(e) {
      return this.each(function() {
        x.removeAttr(this, e)
      })
    },
    prop: function(e, t) {
      return x.access(this, x.prop, e, t, arguments.length > 1)
    },
    removeProp: function(e) {
      return e = x.propFix[e] || e, this.each(function() {
        try {
          this[e] = t, delete this[e]
        } catch (n) {}
      })
    },
    addClass: function(e) {
      var t, n, r, i, o, a = 0,
        s = this.length,
        l = "string" == typeof e && e;
      if (x.isFunction(e)) return this.each(function(t) {
        x(this).addClass(e.call(this, t, this.className))
      });
      if (l)
        for (t = (e || "").match(T) || []; s > a; a++)
          if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
            o = 0;
            while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
            n.className = x.trim(r)
          }
      return this
    },
    removeClass: function(e) {
      var t, n, r, i, o, a = 0,
        s = this.length,
        l = 0 === arguments.length || "string" == typeof e && e;
      if (x.isFunction(e)) return this.each(function(t) {
        x(this).removeClass(e.call(this, t, this.className))
      });
      if (l)
        for (t = (e || "").match(T) || []; s > a; a++)
          if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
            o = 0;
            while (i = t[o++])
              while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
            n.className = e ? x.trim(r) : ""
          }
      return this
    },
    toggleClass: function(e, t) {
      var n = typeof e,
        r = "boolean" == typeof t;
      return x.isFunction(e) ? this.each(function(n) {
        x(this).toggleClass(e.call(this, n, this.className, t), t)
      }) : this.each(function() {
        if ("string" === n) {
          var o, a = 0,
            s = x(this),
            l = t,
            u = e.match(T) || [];
          while (o = u[a++]) l = r ? l : !s.hasClass(o), s[l ? "addClass" : "removeClass"](o)
        } else(n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
      })
    },
    hasClass: function(e) {
      var t = " " + e + " ",
        n = 0,
        r = this.length;
      for (; r > n; n++)
        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0;
      return !1
    },
    val: function(e) {
      var n, r, i, o = this[0]; {
        if (arguments.length) return i = x.isFunction(e), this.each(function(n) {
          var o;
          1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function(e) {
            return null == e ? "" : e + ""
          })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
        });
        if (o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
      }
    }
  }), x.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = x.find.attr(e, "value");
          return null != t ? t : e.text
        }
      },
      select: {
        get: function(e) {
          var t, n, r = e.options,
            i = e.selectedIndex,
            o = "select-one" === e.type || 0 > i,
            a = o ? null : [],
            s = o ? i + 1 : r.length,
            l = 0 > i ? s : o ? i : 0;
          for (; s > l; l++)
            if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
              if (t = x(n).val(), o) return t;
              a.push(t)
            }
          return a
        },
        set: function(e, t) {
          var n, r, i = e.options,
            o = x.makeArray(t),
            a = i.length;
          while (a--) r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
          return n || (e.selectedIndex = -1), o
        }
      }
    },
    attr: function(e, n, r) {
      var o, a, s = e.nodeType;
      if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
    },
    removeAttr: function(e, t) {
      var n, r, i = 0,
        o = t && t.match(T);
      if (o && 1 === e.nodeType)
        while (n = o[i++]) r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
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
      if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          var t = x.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    }
  }), X = {
    set: function(e, t, n) {
      return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
    }
  }, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
    var r = x.expr.attrHandle[n] || x.find.attr;
    x.expr.attrHandle[n] = K && Q || !G.test(n) ? function(e, n, i) {
      var o = x.expr.attrHandle[n],
        a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
      return x.expr.attrHandle[n] = o, a
    } : function(e, n, r) {
      return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
    }
  }), K && Q || (x.attrHooks.value = {
    set: function(e, n, r) {
      return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
    }
  }), Q || (z = {
    set: function(e, n, r) {
      var i = e.getAttributeNode(r);
      return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
    }
  }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(e, n, r) {
    var i;
    return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
  }, x.valHooks.button = {
    get: function(e, n) {
      var r = e.getAttributeNode(n);
      return r && r.specified ? r.value : t
    },
    set: z.set
  }, x.attrHooks.contenteditable = {
    set: function(e, t, n) {
      z.set(e, "" === t ? !1 : t, n)
    }
  }, x.each(["width", "height"], function(e, n) {
    x.attrHooks[n] = {
      set: function(e, r) {
        return "" === r ? (e.setAttribute(n, "auto"), r) : t
      }
    }
  })), x.support.hrefNormalized || x.each(["href", "src"], function(e, t) {
    x.propHooks[t] = {
      get: function(e) {
        return e.getAttribute(t, 4)
      }
    }
  }), x.support.style || (x.attrHooks.style = {
    get: function(e) {
      return e.style.cssText || t
    },
    set: function(e, t) {
      return e.style.cssText = t + ""
    }
  }), x.support.optSelected || (x.propHooks.selected = {
    get: function(e) {
      var t = e.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
    }
  }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    x.propFix[this.toLowerCase()] = this
  }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function() {
    x.valHooks[this] = {
      set: function(e, n) {
        return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
      }
    }, x.support.checkOn || (x.valHooks[this].get = function(e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  });
  var Z = /^(?:input|select|textarea)$/i,
    et = /^key/,
    tt = /^(?:mouse|contextmenu)|click/,
    nt = /^(?:focusinfocus|focusoutblur)$/,
    rt = /^([^.]*)(?:\.(.+)|)$/;

  function it() {
    return !0
  }

  function ot() {
    return !1
  }

  function at() {
    try {
      return a.activeElement
    } catch (e) {}
  }
  x.event = {
    global: {},
    add: function(e, n, r, o, a) {
      var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
      if (v) {
        r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
          return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
        }, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
        while (u--) s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
          type: g,
          origType: y,
          data: o,
          handler: r,
          guid: r.guid,
          selector: a,
          needsContext: a && x.expr.match.needsContext.test(a),
          namespace: m.join(".")
        }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
        e = null
      }
    },
    remove: function(e, t, n, r, i) {
      var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
      if (m && (c = m.events)) {
        t = (t || "").match(T) || [""], u = t.length;
        while (u--)
          if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
            p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
            while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
            l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
          } else
            for (d in c) x.event.remove(e, d + t[u], n, r, !0);
        x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
      }
    },
    trigger: function(n, r, i, o) {
      var s, l, u, c, p, f, d, h = [i || a],
        g = v.call(n, "type") ? n.type : n,
        m = v.call(n, "namespace") ? n.namespace.split(".") : [];
      if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
        if (!o && !p.noBubble && !x.isWindow(i)) {
          for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) h.push(u), f = u;
          f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
        }
        d = 0;
        while ((u = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
        if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
          f = i[l], f && (i[l] = null), x.event.triggered = g;
          try {
            i[g]()
          } catch (y) {}
          x.event.triggered = t, f && (i[l] = f)
        }
        return n.result
      }
    },
    dispatch: function(e) {
      e = x.event.fix(e);
      var n, r, i, o, a, s = [],
        l = g.call(arguments),
        u = (x._data(this, "events") || {})[e.type] || [],
        c = x.event.special[e.type] || {};
      if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
        s = x.event.handlers.call(this, e, u), n = 0;
        while ((o = s[n++]) && !e.isPropagationStopped()) {
          e.currentTarget = o.elem, a = 0;
          while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
        }
        return c.postDispatch && c.postDispatch.call(this, e), e.result
      }
    },
    handlers: function(e, n) {
      var r, i, o, a, s = [],
        l = n.delegateCount,
        u = e.target;
      if (l && u.nodeType && (!e.button || "click" !== e.type))
        for (; u != this; u = u.parentNode || this)
          if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
            for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
            o.length && s.push({
              elem: u,
              handlers: o
            })
          }
      return n.length > l && s.push({
        elem: this,
        handlers: n.slice(l)
      }), s
    },
    fix: function(e) {
      if (e[x.expando]) return e;
      var t, n, r, i = e.type,
        o = e,
        s = this.fixHooks[i];
      s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
      while (t--) n = r[t], e[n] = o[n];
      return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
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
        var r, i, o, s = n.button,
          l = n.fromElement;
        return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== at() && this.focus) try {
            return this.focus(), !1
          } catch (e) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          return this === at() && this.blur ? (this.blur(), !1) : t
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
        },
        _default: function(e) {
          return x.nodeName(e.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          e.result !== t && (e.originalEvent.returnValue = e.result)
        }
      }
    },
    simulate: function(e, t, n, r) {
      var i = x.extend(new x.Event, n, {
        type: e,
        isSimulated: !0,
        originalEvent: {}
      });
      r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
    }
  }, x.removeEvent = a.removeEventListener ? function(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1)
  } : function(e, t, n) {
    var r = "on" + t;
    e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
  }, x.Event = function(e, n) {
    return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
  }, x.Event.prototype = {
    isDefaultPrevented: ot,
    isPropagationStopped: ot,
    isImmediatePropagationStopped: ot,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
    },
    stopImmediatePropagation: function() {
      this.isImmediatePropagationStopped = it, this.stopPropagation()
    }
  }, x.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, function(e, t) {
    x.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function(e) {
        var n, r = this,
          i = e.relatedTarget,
          o = e.handleObj;
        return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
      }
    }
  }), x.support.submitBubbles || (x.event.special.submit = {
    setup: function() {
      return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function(e) {
        var n = e.target,
          r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
        r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function(e) {
          e._submit_bubble = !0
        }), x._data(r, "submitBubbles", !0))
      }), t)
    },
    postDispatch: function(e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
    },
    teardown: function() {
      return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
    }
  }), x.support.changeBubbles || (x.event.special.change = {
    setup: function() {
      return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function(e) {
        "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
      }), x.event.add(this, "click._change", function(e) {
        this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
      })), !1) : (x.event.add(this, "beforeactivate._change", function(e) {
        var t = e.target;
        Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function(e) {
          !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
        }), x._data(t, "changeBubbles", !0))
      }), t)
    },
    handle: function(e) {
      var n = e.target;
      return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
    },
    teardown: function() {
      return x.event.remove(this, "._change"), !Z.test(this.nodeName)
    }
  }), x.support.focusinBubbles || x.each({
    focus: "focusin",
    blur: "focusout"
  }, function(e, t) {
    var n = 0,
      r = function(e) {
        x.event.simulate(t, e.target, x.event.fix(e), !0)
      };
    x.event.special[t] = {
      setup: function() {
        0 === n++ && a.addEventListener(e, r, !0)
      },
      teardown: function() {
        0 === --n && a.removeEventListener(e, r, !0)
      }
    }
  }), x.fn.extend({
    on: function(e, n, r, i, o) {
      var a, s;
      if ("object" == typeof e) {
        "string" != typeof n && (r = r || n, n = t);
        for (a in e) this.on(a, n, r, e[a], o);
        return this
      }
      if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;
      else if (!i) return this;
      return 1 === o && (s = i, i = function(e) {
        return x().off(e), s.apply(this, arguments)
      }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function() {
        x.event.add(this, e, i, r, n)
      })
    },
    one: function(e, t, n, r) {
      return this.on(e, t, n, r, 1)
    },
    off: function(e, n, r) {
      var i, o;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" == typeof e) {
        for (o in e) this.off(o, n, e[o]);
        return this
      }
      return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() {
        x.event.remove(this, e, r, n)
      })
    },
    trigger: function(e, t) {
      return this.each(function() {
        x.event.trigger(e, t, this)
      })
    },
    triggerHandler: function(e, n) {
      var r = this[0];
      return r ? x.event.trigger(e, n, r, !0) : t
    }
  });
  var st = /^.[^:#\[\.,]*$/,
    lt = /^(?:parents|prev(?:Until|All))/,
    ut = x.expr.match.needsContext,
    ct = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  x.fn.extend({
    find: function(e) {
      var t, n = [],
        r = this,
        i = r.length;
      if ("string" != typeof e) return this.pushStack(x(e).filter(function() {
        for (t = 0; i > t; t++)
          if (x.contains(r[t], this)) return !0
      }));
      for (t = 0; i > t; t++) x.find(e, r[t], n);
      return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
    },
    has: function(e) {
      var t, n = x(e, this),
        r = n.length;
      return this.filter(function() {
        for (t = 0; r > t; t++)
          if (x.contains(this, n[t])) return !0
      })
    },
    not: function(e) {
      return this.pushStack(ft(this, e || [], !0))
    },
    filter: function(e) {
      return this.pushStack(ft(this, e || [], !1))
    },
    is: function(e) {
      return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
    },
    closest: function(e, t) {
      var n, r = 0,
        i = this.length,
        o = [],
        a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
      for (; i > r; r++)
        for (n = this[r]; n && n !== t; n = n.parentNode)
          if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
            n = o.push(n);
            break
          }
      return this.pushStack(o.length > 1 ? x.unique(o) : o)
    },
    index: function(e) {
      return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(e, t) {
      var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
        r = x.merge(this.get(), n);
      return this.pushStack(x.unique(r))
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  });

  function pt(e, t) {
    do e = e[t]; while (e && 1 !== e.nodeType);
    return e
  }
  x.each({
    parent: function(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function(e) {
      return x.dir(e, "parentNode")
    },
    parentsUntil: function(e, t, n) {
      return x.dir(e, "parentNode", n)
    },
    next: function(e) {
      return pt(e, "nextSibling")
    },
    prev: function(e) {
      return pt(e, "previousSibling")
    },
    nextAll: function(e) {
      return x.dir(e, "nextSibling")
    },
    prevAll: function(e) {
      return x.dir(e, "previousSibling")
    },
    nextUntil: function(e, t, n) {
      return x.dir(e, "nextSibling", n)
    },
    prevUntil: function(e, t, n) {
      return x.dir(e, "previousSibling", n)
    },
    siblings: function(e) {
      return x.sibling((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
      return x.sibling(e.firstChild)
    },
    contents: function(e) {
      return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
    }
  }, function(e, t) {
    x.fn[e] = function(n, r) {
      var i = x.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i)
    }
  }), x.extend({
    filter: function(e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
        return 1 === e.nodeType
      }))
    },
    dir: function(e, n, r) {
      var i = [],
        o = e[n];
      while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
      return i
    },
    sibling: function(e, t) {
      var n = [];
      for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    }
  });

  function ft(e, t, n) {
    if (x.isFunction(t)) return x.grep(e, function(e, r) {
      return !!t.call(e, r, e) !== n
    });
    if (t.nodeType) return x.grep(e, function(e) {
      return e === t !== n
    });
    if ("string" == typeof t) {
      if (st.test(t)) return x.filter(t, e, n);
      t = x.filter(t, e)
    }
    return x.grep(e, function(e) {
      return x.inArray(e, t) >= 0 !== n
    })
  }

  function dt(e) {
    var t = ht.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement)
      while (t.length) n.createElement(t.pop());
    return n
  }
  var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    gt = / jQuery\d+="(?:null|\d+)"/g,
    mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
    yt = /^\s+/,
    vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    bt = /<([\w:]+)/,
    xt = /<tbody/i,
    wt = /<|&#?\w+;/,
    Tt = /<(?:script|style|link)/i,
    Ct = /^(?:checkbox|radio)$/i,
    Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    kt = /^$|\/(?:java|ecma)script/i,
    Et = /^true\/(.*)/,
    St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    At = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    jt = dt(a),
    Dt = jt.appendChild(a.createElement("div"));
  At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
    text: function(e) {
      return x.access(this, function(e) {
        return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
      }, null, e, arguments.length)
    },
    append: function() {
      return this.domManip(arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Lt(this, e);
          t.appendChild(e)
        }
      })
    },
    prepend: function() {
      return this.domManip(arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Lt(this, e);
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
      var n, r = e ? x.filter(e, this) : this,
        i = 0;
      for (; null != (n = r[i]); i++) t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
      return this
    },
    empty: function() {
      var e, t = 0;
      for (; null != (e = this[t]); t++) {
        1 === e.nodeType && x.cleanData(Ft(e, !1));
        while (e.firstChild) e.removeChild(e.firstChild);
        e.options && x.nodeName(e, "select") && (e.options.length = 0)
      }
      return this
    },
    clone: function(e, t) {
      return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
        return x.clone(this, e, t)
      })
    },
    html: function(e) {
      return x.access(this, function(e) {
        var n = this[0] || {},
          r = 0,
          i = this.length;
        if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
        if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
          e = e.replace(vt, "<$1></$2>");
          try {
            for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
            n = 0
          } catch (o) {}
        }
        n && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function() {
      var e = x.map(this, function(e) {
          return [e.nextSibling, e.parentNode]
        }),
        t = 0;
      return this.domManip(arguments, function(n) {
        var r = e[t++],
          i = e[t++];
        i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
      }, !0), t ? this : this.remove()
    },
    detach: function(e) {
      return this.remove(e, !0)
    },
    domManip: function(e, t, n) {
      e = d.apply([], e);
      var r, i, o, a, s, l, u = 0,
        c = this.length,
        p = this,
        f = c - 1,
        h = e[0],
        g = x.isFunction(h);
      if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function(r) {
        var i = p.eq(r);
        g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
      });
      if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
        for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
        if (o)
          for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
        l = r = null
      }
      return this
    }
  });

  function Lt(e, t) {
    return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }

  function Ht(e) {
    return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
  }

  function qt(e) {
    var t = Et.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function _t(e, t) {
    var n, r = 0;
    for (; null != (n = e[r]); r++) x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
  }

  function Mt(e, t) {
    if (1 === t.nodeType && x.hasData(e)) {
      var n, r, i, o = x._data(e),
        a = x._data(t, o),
        s = o.events;
      if (s) {
        delete a.handle, a.events = {};
        for (n in s)
          for (r = 0, i = s[n].length; i > r; r++) x.event.add(t, n, s[n][r])
      }
      a.data && (a.data = x.extend({}, a.data))
    }
  }

  function Ot(e, t) {
    var n, r, i;
    if (1 === t.nodeType) {
      if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
        i = x._data(t);
        for (r in i.events) x.removeEvent(t, r, i.handle);
        t.removeAttribute(x.expando)
      }
      "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }
  }
  x.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(e, t) {
    x.fn[e] = function(e) {
      var n, r = 0,
        i = [],
        o = x(e),
        a = o.length - 1;
      for (; a >= r; r++) n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
      return this.pushStack(i)
    }
  });

  function Ft(e, n) {
    var r, o, a = 0,
      s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
    if (!s)
      for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
    return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
  }

  function Bt(e) {
    Ct.test(e.type) && (e.defaultChecked = e.checked)
  }
  x.extend({
    clone: function(e, t, n) {
      var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
      if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
        for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) r[a] && Ot(i, r[a]);
      if (t)
        if (n)
          for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) Mt(i, r[a]);
        else Mt(e, o);
      return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
    },
    buildFragment: function(e, t, n, r) {
      var i, o, a, s, l, u, c, p = e.length,
        f = dt(t),
        d = [],
        h = 0;
      for (; p > h; h++)
        if (o = e[h], o || 0 === o)
          if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);
          else if (wt.test(o)) {
        s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
        while (i--) s = s.lastChild;
        if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
          o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
          while (i--) x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
        }
        x.merge(d, s.childNodes), s.textContent = "";
        while (s.firstChild) s.removeChild(s.firstChild);
        s = f.lastChild
      } else d.push(t.createTextNode(o));
      s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
      while (o = d[h++])
        if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
          i = 0;
          while (o = s[i++]) kt.test(o.type || "") && n.push(o)
        }
      return s = null, f
    },
    cleanData: function(e, t) {
      var n, r, o, a, s = 0,
        l = x.expando,
        u = x.cache,
        c = x.support.deleteExpando,
        f = x.event.special;
      for (; null != (n = e[s]); s++)
        if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
          if (a.events)
            for (r in a.events) f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
          u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
        }
    },
    _evalUrl: function(e) {
      return x.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        "throws": !0
      })
    }
  }), x.fn.extend({
    wrapAll: function(e) {
      if (x.isFunction(e)) return this.each(function(t) {
        x(this).wrapAll(e.call(this, t))
      });
      if (this[0]) {
        var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          var e = this;
          while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
          return e
        }).append(this)
      }
      return this
    },
    wrapInner: function(e) {
      return x.isFunction(e) ? this.each(function(t) {
        x(this).wrapInner(e.call(this, t))
      }) : this.each(function() {
        var t = x(this),
          n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      })
    },
    wrap: function(e) {
      var t = x.isFunction(e);
      return this.each(function(n) {
        x(this).wrapAll(t ? e.call(this, n) : e)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
      }).end()
    }
  });
  var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
    It = /opacity\s*=\s*([^)]*)/,
    zt = /^(top|right|bottom|left)$/,
    Xt = /^(none|table(?!-c[ea]).+)/,
    Ut = /^margin/,
    Vt = RegExp("^(" + w + ")(.*)$", "i"),
    Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
    Jt = RegExp("^([+-])=(" + w + ")", "i"),
    Gt = {
      BODY: "block"
    },
    Qt = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Kt = {
      letterSpacing: 0,
      fontWeight: 400
    },
    Zt = ["Top", "Right", "Bottom", "Left"],
    en = ["Webkit", "O", "Moz", "ms"];

  function tn(e, t) {
    if (t in e) return t;
    var n = t.charAt(0).toUpperCase() + t.slice(1),
      r = t,
      i = en.length;
    while (i--)
      if (t = en[i] + n, t in e) return t;
    return r
  }

  function nn(e, t) {
    return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
  }

  function rn(e, t) {
    var n, r, i, o = [],
      a = 0,
      s = e.length;
    for (; s > a; a++) r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
    for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
    return e
  }
  x.fn.extend({
    css: function(e, n) {
      return x.access(this, function(e, n, r) {
        var i, o, a = {},
          s = 0;
        if (x.isArray(n)) {
          for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = x.css(e, n[s], !1, o);
          return a
        }
        return r !== t ? x.style(e, n, r) : x.css(e, n)
      }, e, n, arguments.length > 1)
    },
    show: function() {
      return rn(this, !0)
    },
    hide: function() {
      return rn(this)
    },
    toggle: function(e) {
      var t = "boolean" == typeof e;
      return this.each(function() {
        (t ? e : nn(this)) ? x(this).show(): x(this).hide()
      })
    }
  }), x.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = Wt(e, "opacity");
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
      "float": x.support.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(e, n, r, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o, a, s, l = x.camelCase(n),
          u = e.style;
        if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
        if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
          u[n] = r
        } catch (c) {}
      }
    },
    css: function(e, n, r, i) {
      var o, a, s, l = x.camelCase(n);
      return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
    }
  }), e.getComputedStyle ? (Rt = function(t) {
    return e.getComputedStyle(t, null)
  }, Wt = function(e, n, r) {
    var i, o, a, s = r || Rt(e),
      l = s ? s.getPropertyValue(n) || s[n] : t,
      u = e.style;
    return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
  }) : a.documentElement.currentStyle && (Rt = function(e) {
    return e.currentStyle
  }, Wt = function(e, n, r) {
    var i, o, a, s = r || Rt(e),
      l = s ? s[n] : t,
      u = e.style;
    return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
  });

  function on(e, t, n) {
    var r = Vt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
  }

  function an(e, t, n, r, i) {
    var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
      a = 0;
    for (; 4 > o; o += 2) "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
    return a
  }

  function sn(e, t, n) {
    var r = !0,
      i = "width" === t ? e.offsetWidth : e.offsetHeight,
      o = Rt(e),
      a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
    if (0 >= i || null == i) {
      if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
      r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
    }
    return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
  }

  function ln(e) {
    var t = a,
      n = Gt[e];
    return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
  }

  function un(e, t) {
    var n = x(t.createElement(e)).appendTo(t.body),
      r = x.css(n[0], "display");
    return n.remove(), r
  }
  x.each(["height", "width"], function(e, n) {
    x.cssHooks[n] = {
      get: function(e, r, i) {
        return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function() {
          return sn(e, n, i)
        }) : sn(e, n, i) : t
      },
      set: function(e, t, r) {
        var i = r && Rt(e);
        return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
      }
    }
  }), x.support.opacity || (x.cssHooks.opacity = {
    get: function(e, t) {
      return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
    },
    set: function(e, t) {
      var n = e.style,
        r = e.currentStyle,
        i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
        o = r && r.filter || n.filter || "";
      n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
    }
  }), x(function() {
    x.support.reliableMarginRight || (x.cssHooks.marginRight = {
      get: function(e, n) {
        return n ? x.swap(e, {
          display: "inline-block"
        }, Wt, [e, "marginRight"]) : t
      }
    }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, n) {
      x.cssHooks[n] = {
        get: function(e, r) {
          return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t
        }
      }
    })
  }), x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
    return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
  }, x.expr.filters.visible = function(e) {
    return !x.expr.filters.hidden(e)
  }), x.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(e, t) {
    x.cssHooks[e + t] = {
      expand: function(n) {
        var r = 0,
          i = {},
          o = "string" == typeof n ? n.split(" ") : [n];
        for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
        return i
      }
    }, Ut.test(e) || (x.cssHooks[e + t].set = on)
  });
  var cn = /%20/g,
    pn = /\[\]$/,
    fn = /\r?\n/g,
    dn = /^(?:submit|button|image|reset|file)$/i,
    hn = /^(?:input|select|textarea|keygen)/i;
  x.fn.extend({
    serialize: function() {
      return x.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var e = x.prop(this, "elements");
        return e ? x.makeArray(e) : this
      }).filter(function() {
        var e = this.type;
        return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
      }).map(function(e, t) {
        var n = x(this).val();
        return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
          return {
            name: t.name,
            value: e.replace(fn, "\r\n")
          }
        }) : {
          name: t.name,
          value: n.replace(fn, "\r\n")
        }
      }).get()
    }
  }), x.param = function(e, n) {
    var r, i = [],
      o = function(e, t) {
        t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
      };
    if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
      o(this.name, this.value)
    });
    else
      for (r in e) gn(r, e[r], n, o);
    return i.join("&").replace(cn, "+")
  };

  function gn(e, t, n, r) {
    var i;
    if (x.isArray(t)) x.each(t, function(t, i) {
      n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
    });
    else if (n || "object" !== x.type(t)) r(e, t);
    else
      for (i in t) gn(e + "[" + i + "]", t[i], n, r)
  }
  x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
    x.fn[t] = function(e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }), x.fn.extend({
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
  var mn, yn, vn = x.now(),
    bn = /\?/,
    xn = /#.*$/,
    wn = /([?&])_=[^&]*/,
    Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Nn = /^(?:GET|HEAD)$/,
    kn = /^\/\//,
    En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    Sn = x.fn.load,
    An = {},
    jn = {},
    Dn = "*/".concat("*");
  try {
    yn = o.href
  } catch (Ln) {
    yn = a.createElement("a"), yn.href = "", yn = yn.href
  }
  mn = En.exec(yn.toLowerCase()) || [];

  function Hn(e) {
    return function(t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r, i = 0,
        o = t.toLowerCase().match(T) || [];
      if (x.isFunction(n))
        while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
    }
  }

  function qn(e, n, r, i) {
    var o = {},
      a = e === jn;

    function s(l) {
      var u;
      return o[l] = !0, x.each(e[l] || [], function(e, l) {
        var c = l(n, r, i);
        return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
      }), u
    }
    return s(n.dataTypes[0]) || !o["*"] && s("*")
  }

  function _n(e, n) {
    var r, i, o = x.ajaxSettings.flatOptions || {};
    for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
    return r && x.extend(!0, e, r), e
  }
  x.fn.load = function(e, n, r) {
    if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
    var i, o, a, s = this,
      l = e.indexOf(" ");
    return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({
      url: e,
      type: a,
      dataType: "html",
      data: n
    }).done(function(e) {
      o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
    }).complete(r && function(e, t) {
      s.each(r, o || [e.responseText, t, e])
    }), this
  }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    x.fn[t] = function(e) {
      return this.on(t, e)
    }
  }), x.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: yn,
      type: "GET",
      isLocal: Cn.test(mn[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Dn,
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
        "text json": x.parseJSON,
        "text xml": x.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(e, t) {
      return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
    },
    ajaxPrefilter: Hn(An),
    ajaxTransport: Hn(jn),
    ajax: function(e, n) {
      "object" == typeof e && (n = e, e = t), n = n || {};
      var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n),
        f = p.context || p,
        d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
        h = x.Deferred(),
        g = x.Callbacks("once memory"),
        m = p.statusCode || {},
        y = {},
        v = {},
        b = 0,
        w = "canceled",
        C = {
          readyState: 0,
          getResponseHeader: function(e) {
            var t;
            if (2 === b) {
              if (!c) {
                c = {};
                while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2]
              }
              t = c[e.toLowerCase()]
            }
            return null == t ? null : t
          },
          getAllResponseHeaders: function() {
            return 2 === b ? a : null
          },
          setRequestHeader: function(e, t) {
            var n = e.toLowerCase();
            return b || (e = v[n] = v[n] || e, y[e] = t), this
          },
          overrideMimeType: function(e) {
            return b || (p.mimeType = e), this
          },
          statusCode: function(e) {
            var t;
            if (e)
              if (2 > b)
                for (t in e) m[t] = [m[t], e[t]];
              else C.always(e[C.status]);
            return this
          },
          abort: function(e) {
            var t = e || w;
            return u && u.abort(t), k(0, t), this
          }
        };
      if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C;
      l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
      for (i in p.headers) C.setRequestHeader(i, p.headers[i]);
      if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort();
      w = "abort";
      for (i in {
          success: 1,
          error: 1,
          complete: 1
        }) C[i](p[i]);
      if (u = qn(jn, p, n, C)) {
        C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
          C.abort("timeout")
        }, p.timeout));
        try {
          b = 1, u.send(y, k)
        } catch (N) {
          if (!(2 > b)) throw N;
          k(-1, N)
        }
      } else k(-1, "No Transport");

      function k(e, n, r, i) {
        var c, y, v, w, T, N = n;
        2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
      }
      return C
    },
    getJSON: function(e, t, n) {
      return x.get(e, t, n, "json")
    },
    getScript: function(e, n) {
      return x.get(e, t, n, "script")
    }
  }), x.each(["get", "post"], function(e, n) {
    x[n] = function(e, r, i, o) {
      return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
        url: e,
        type: n,
        dataType: o,
        data: r,
        success: i
      })
    }
  });

  function Mn(e, n, r) {
    var i, o, a, s, l = e.contents,
      u = e.dataTypes;
    while ("*" === u[0]) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
    if (o)
      for (s in l)
        if (l[s] && l[s].test(o)) {
          u.unshift(s);
          break
        }
    if (u[0] in r) a = u[0];
    else {
      for (s in r) {
        if (!u[0] || e.converters[s + " " + u[0]]) {
          a = s;
          break
        }
        i || (i = s)
      }
      a = a || i
    }
    return a ? (a !== u[0] && u.unshift(a), r[a]) : t
  }

  function On(e, t, n, r) {
    var i, o, a, s, l, u = {},
      c = e.dataTypes.slice();
    if (c[1])
      for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
    o = c.shift();
    while (o)
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
        if ("*" === o) o = l;
        else if ("*" !== l && l !== o) {
      if (a = u[l + " " + o] || u["* " + o], !a)
        for (i in u)
          if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
            a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
            break
          }
      if (a !== !0)
        if (a && e["throws"]) t = a(t);
        else try {
          t = a(t)
        } catch (p) {
          return {
            state: "parsererror",
            error: a ? p : "No conversion from " + l + " to " + o
          }
        }
    }
    return {
      state: "success",
      data: t
    }
  }
  x.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function(e) {
        return x.globalEval(e), e
      }
    }
  }), x.ajaxPrefilter("script", function(e) {
    e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
  }), x.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
      var n, r = a.head || x("head")[0] || a.documentElement;
      return {
        send: function(t, i) {
          n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
          }, r.insertBefore(n, r.firstChild)
        },
        abort: function() {
          n && n.onload(t, !0)
        }
      }
    }
  });
  var Fn = [],
    Bn = /(=)\?(?=&|$)|\?\?/;
  x.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = Fn.pop() || x.expando + "_" + vn++;
      return this[e] = !0, e
    }
  }), x.ajaxPrefilter("json jsonp", function(n, r, i) {
    var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
    return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
      return s || x.error(o + " was not called"), s[0]
    }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
      s = arguments
    }, i.always(function() {
      e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
    }), "script") : t
  });
  var Pn, Rn, Wn = 0,
    $n = e.ActiveXObject && function() {
      var e;
      for (e in Pn) Pn[e](t, !0)
    };

  function In() {
    try {
      return new e.XMLHttpRequest
    } catch (t) {}
  }

  function zn() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP")
    } catch (t) {}
  }
  x.ajaxSettings.xhr = e.ActiveXObject ? function() {
    return !this.isLocal && In() || zn()
  } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function(n) {
    if (!n.crossDomain || x.support.cors) {
      var r;
      return {
        send: function(i, o) {
          var a, s, l = n.xhr();
          if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
            for (s in n.xhrFields) l[s] = n.xhrFields[s];
          n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
          try {
            for (s in i) l.setRequestHeader(s, i[s])
          } catch (u) {}
          l.send(n.hasContent && n.data || null), r = function(e, i) {
            var s, u, c, p;
            try {
              if (r && (i || 4 === l.readyState))
                if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) 4 !== l.readyState && l.abort();
                else {
                  p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                  try {
                    c = l.statusText
                  } catch (f) {
                    c = ""
                  }
                  s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                }
            } catch (d) {
              i || o(-1, d)
            }
            p && o(s, c, p, u)
          }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
        },
        abort: function() {
          r && r(t, !0)
        }
      }
    }
  });
  var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
    Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
    Jn = /queueHooks$/,
    Gn = [nr],
    Qn = {
      "*": [function(e, t) {
        var n = this.createTween(e, t),
          r = n.cur(),
          i = Yn.exec(t),
          o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
          a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)),
          s = 1,
          l = 20;
        if (a && a[3] !== o) {
          o = o || a[3], i = i || [], a = +r || 1;
          do s = s || ".5", a /= s, x.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
        }
        return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
      }]
    };

  function Kn() {
    return setTimeout(function() {
      Xn = t
    }), Xn = x.now()
  }

  function Zn(e, t, n) {
    var r, i = (Qn[t] || []).concat(Qn["*"]),
      o = 0,
      a = i.length;
    for (; a > o; o++)
      if (r = i[o].call(n, t, e)) return r
  }

  function er(e, t, n) {
    var r, i, o = 0,
      a = Gn.length,
      s = x.Deferred().always(function() {
        delete l.elem
      }),
      l = function() {
        if (i) return !1;
        var t = Xn || Kn(),
          n = Math.max(0, u.startTime + u.duration - t),
          r = n / u.duration || 0,
          o = 1 - r,
          a = 0,
          l = u.tweens.length;
        for (; l > a; a++) u.tweens[a].run(o);
        return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
      },
      u = s.promise({
        elem: e,
        props: x.extend({}, t),
        opts: x.extend(!0, {
          specialEasing: {}
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Xn || Kn(),
        duration: n.duration,
        tweens: [],
        createTween: function(t, n) {
          var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
          return u.tweens.push(r), r
        },
        stop: function(t) {
          var n = 0,
            r = t ? u.tweens.length : 0;
          if (i) return this;
          for (i = !0; r > n; n++) u.tweens[n].run(1);
          return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
        }
      }),
      c = u.props;
    for (tr(c, u.opts.specialEasing); a > o; o++)
      if (r = Gn[o].call(u, e, c, u.opts)) return r;
    return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
      elem: e,
      anim: u,
      queue: u.opts.queue
    })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
  }

  function tr(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) {
        o = a.expand(o), delete e[r];
        for (n in o) n in e || (e[n] = o[n], t[n] = i)
      } else t[r] = i
  }
  x.Animation = x.extend(er, {
    tweener: function(e, t) {
      x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
      var n, r = 0,
        i = e.length;
      for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
    },
    prefilter: function(e, t) {
      t ? Gn.unshift(e) : Gn.push(e)
    }
  });

  function nr(e, t, n) {
    var r, i, o, a, s, l, u = this,
      c = {},
      p = e.style,
      f = e.nodeType && nn(e),
      d = x._data(e, "fxshow");
    n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
      s.unqueued || l()
    }), s.unqueued++, u.always(function() {
      u.always(function() {
        s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
      })
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function() {
      p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
    }));
    for (r in t)
      if (i = t[r], Vn.exec(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
        c[r] = d && d[r] || x.style(e, r)
      }
    if (!x.isEmptyObject(c)) {
      d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function() {
        x(e).hide()
      }), u.done(function() {
        var t;
        x._removeData(e, "fxshow");
        for (t in c) x.style(e, t, c[t])
      });
      for (r in c) a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
    }
  }

  function rr(e, t, n, r, i) {
    return new rr.prototype.init(e, t, n, r, i)
  }
  x.Tween = rr, rr.prototype = {
    constructor: rr,
    init: function(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
    },
    cur: function() {
      var e = rr.propHooks[this.prop];
      return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
    },
    run: function(e) {
      var t, n = rr.propHooks[this.prop];
      return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
    }
  }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
    _default: {
      get: function(e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
      },
      set: function(e) {
        x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
      }
    }
  }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
    set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, x.each(["toggle", "show", "hide"], function(e, t) {
    var n = x.fn[t];
    x.fn[t] = function(e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
    }
  }), x.fn.extend({
    fadeTo: function(e, t, n, r) {
      return this.filter(nn).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r)
    },
    animate: function(e, t, n, r) {
      var i = x.isEmptyObject(e),
        o = x.speed(t, n, r),
        a = function() {
          var t = er(this, x.extend({}, e), o);
          (i || x._data(this, "finish")) && t.stop(!0)
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
          o = x.timers,
          a = x._data(this);
        if (n) a[n] && a[n].stop && i(a[n]);
        else
          for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
        for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
        (t || !r) && x.dequeue(this, e)
      })
    },
    finish: function(e) {
      return e !== !1 && (e = e || "fx"), this.each(function() {
        var t, n = x._data(this),
          r = n[e + "queue"],
          i = n[e + "queueHooks"],
          o = x.timers,
          a = r ? r.length : 0;
        for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish
      })
    }
  });

  function ir(e, t) {
    var n, r = {
        height: e
      },
      i = 0;
    for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r
  }
  x.each({
    slideDown: ir("show"),
    slideUp: ir("hide"),
    slideToggle: ir("toggle"),
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
    x.fn[e] = function(e, n, r) {
      return this.animate(t, e, n, r)
    }
  }), x.speed = function(e, t, n) {
    var r = e && "object" == typeof e ? x.extend({}, e) : {
      complete: n || !n && t || x.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !x.isFunction(t) && t
    };
    return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
      x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
    }, r
  }, x.easing = {
    linear: function(e) {
      return e
    },
    swing: function(e) {
      return .5 - Math.cos(e * Math.PI) / 2
    }
  }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function() {
    var e, n = x.timers,
      r = 0;
    for (Xn = x.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
    n.length || x.fx.stop(), Xn = t
  }, x.fx.timer = function(e) {
    e() && x.timers.push(e) && x.fx.start()
  }, x.fx.interval = 13, x.fx.start = function() {
    Un || (Un = setInterval(x.fx.tick, x.fx.interval))
  }, x.fx.stop = function() {
    clearInterval(Un), Un = null
  }, x.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
    return x.grep(x.timers, function(t) {
      return e === t.elem
    }).length
  }), x.fn.offset = function(e) {
    if (arguments.length) return e === t ? this : this.each(function(t) {
      x.offset.setOffset(this, e, t)
    });
    var n, r, o = {
        top: 0,
        left: 0
      },
      a = this[0],
      s = a && a.ownerDocument;
    if (s) return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
      top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
      left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
    }) : o
  }, x.offset = {
    setOffset: function(e, t, n) {
      var r = x.css(e, "position");
      "static" === r && (e.style.position = "relative");
      var i = x(e),
        o = i.offset(),
        a = x.css(e, "top"),
        s = x.css(e, "left"),
        l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1,
        u = {},
        c = {},
        p, f;
      l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u)
    }
  }, x.fn.extend({
    position: function() {
      if (this[0]) {
        var e, t, n = {
            top: 0,
            left: 0
          },
          r = this[0];
        return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - n.top - x.css(r, "marginTop", !0),
          left: t.left - n.left - x.css(r, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        var e = this.offsetParent || s;
        while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = e.offsetParent;
        return e || s
      })
    }
  }), x.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(e, n) {
    var r = /Y/.test(n);
    x.fn[e] = function(i) {
      return x.access(this, function(e, i, o) {
        var a = or(e);
        return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
      }, e, i, arguments.length, null)
    }
  });

  function or(e) {
    return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
  }
  x.each({
    Height: "height",
    Width: "width"
  }, function(e, n) {
    x.each({
      padding: "inner" + e,
      content: n,
      "": "outer" + e
    }, function(r, i) {
      x.fn[i] = function(i, o) {
        var a = arguments.length && (r || "boolean" != typeof i),
          s = r || (i === !0 || o === !0 ? "margin" : "border");
        return x.access(this, function(n, r, i) {
          var o;
          return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
        }, n, a ? i : t, a, null)
      }
    })
  }), x.fn.size = function() {
    return this.length
  }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function() {
    return x
  }))
})(window);
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-csstransitions-touch-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;
window.Modernizr = function(a, b, c) {
    function z(a) {
      j.cssText = a
    }

    function A(a, b) {
      return z(m.join(a + ";") + (b || ""))
    }

    function B(a, b) {
      return typeof a === b
    }

    function C(a, b) {
      return !!~("" + a).indexOf(b)
    }

    function D(a, b) {
      for (var d in a) {
        var e = a[d];
        if (!C(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
      }
      return !1
    }

    function E(a, b, d) {
      for (var e in a) {
        var f = b[a[e]];
        if (f !== c) return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f
      }
      return !1
    }

    function F(a, b, c) {
      var d = a.charAt(0).toUpperCase() + a.slice(1),
        e = (a + " " + o.join(d + " ") + d).split(" ");
      return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c))
    }
    var d = "2.6.2",
      e = {},
      f = !0,
      g = b.documentElement,
      h = "modernizr",
      i = b.createElement(h),
      j = i.style,
      k, l = {}.toString,
      m = " -webkit- -moz- -o- -ms- ".split(" "),
      n = "Webkit Moz O ms",
      o = n.split(" "),
      p = n.toLowerCase().split(" "),
      q = {},
      r = {},
      s = {},
      t = [],
      u = t.slice,
      v, w = function(a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"),
          m = b.body,
          n = m || b.createElement("body");
        if (parseInt(d, 10))
          while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
      },
      x = {}.hasOwnProperty,
      y;
    !B(x, "undefined") && !B(x.call, "undefined") ? y = function(a, b) {
      return x.call(a, b)
    } : y = function(a, b) {
      return b in a && B(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(b) {
      var c = this;
      if (typeof c != "function") throw new TypeError;
      var d = u.call(arguments, 1),
        e = function() {
          if (this instanceof e) {
            var a = function() {};
            a.prototype = c.prototype;
            var f = new a,
              g = c.apply(f, d.concat(u.call(arguments)));
            return Object(g) === g ? g : f
          }
          return c.apply(b, d.concat(u.call(arguments)))
        };
      return e
    }), q.touch = function() {
      var c;
      return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : w(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
        c = a.offsetTop === 9
      }), c
    }, q.cssanimations = function() {
      return F("animationName")
    }, q.csstransitions = function() {
      return F("transition")
    };
    for (var G in q) y(q, G) && (v = G.toLowerCase(), e[v] = q[G](), t.push((e[v] ? "" : "no-") + v));
    return e.addTest = function(a, b) {
        if (typeof a == "object")
          for (var d in a) y(a, d) && e.addTest(d, a[d]);
        else {
          a = a.toLowerCase();
          if (e[a] !== c) return e;
          b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
      }, z(""), i = k = null,
      function(a, b) {
        function k(a, b) {
          var c = a.createElement("p"),
            d = a.getElementsByTagName("head")[0] || a.documentElement;
          return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }

        function l() {
          var a = r.elements;
          return typeof a == "string" ? a.split(" ") : a
        }

        function m(a) {
          var b = i[a[g]];
          return b || (b = {}, h++, a[g] = h, i[h] = b), b
        }

        function n(a, c, f) {
          c || (c = b);
          if (j) return c.createElement(a);
          f || (f = m(c));
          var g;
          return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
        }

        function o(a, c) {
          a || (a = b);
          if (j) return a.createDocumentFragment();
          c = c || m(a);
          var d = c.frag.cloneNode(),
            e = 0,
            f = l(),
            g = f.length;
          for (; e < g; e++) d.createElement(f[e]);
          return d
        }

        function p(a, b) {
          b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
            return r.shivMethods ? n(c, a, b) : b.createElem(c)
          }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
            return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
          }) + ");return n}")(r, b.frag)
        }

        function q(a) {
          a || (a = b);
          var c = m(a);
          return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
        }
        var c = a.html5 || {},
          d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
          e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
          f, g = "_html5shiv",
          h = 0,
          i = {},
          j;
        (function() {
          try {
            var a = b.createElement("a");
            a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() {
              b.createElement("a");
              var a = b.createDocumentFragment();
              return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
            }()
          } catch (c) {
            f = !0, j = !0
          }
        })();
        var r = {
          elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
          shivCSS: c.shivCSS !== !1,
          supportsUnknownElements: j,
          shivMethods: c.shivMethods !== !1,
          type: "default",
          shivDocument: q,
          createElement: n,
          createDocumentFragment: o
        };
        a.html5 = r, q(b)
      }(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function(a) {
        return D([a])
      }, e.testAllProps = F, e.testStyles = w, e.prefixed = function(a, b, c) {
        return b ? F(a, b, c) : F(a, "pfx")
      }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e
  }(this, this.document),
  function(a, b, c) {
    function d(a) {
      return "[object Function]" == o.call(a)
    }

    function e(a) {
      return "string" == typeof a
    }

    function f() {}

    function g(a) {
      return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function h() {
      var a = p.shift();
      q = 1, a ? a.t ? m(function() {
        ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
      }, 0) : (a(), h()) : q = 0
    }

    function i(a, c, d, e, f, i, j) {
      function k(b) {
        if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
          "img" != a && m(function() {
            t.removeChild(l)
          }, 50);
          for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
        }
      }
      var j = j || B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = {
          t: d,
          s: c,
          e: f,
          a: i,
          x: j
        };
      1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
        k.call(this, r)
      }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }

    function j(a, b, c, d, f) {
      return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }

    function k() {
      var a = B;
      return a.loader = {
        load: j,
        i: 0
      }, a
    }
    var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName("script")[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = "MozAppearance" in l.style,
      s = r && !!b.createRange().compareNode,
      t = s ? l : n.parentNode,
      l = a.opera && "[object Opera]" == o.call(a.opera),
      l = !!b.attachEvent && !l,
      u = r ? "object" : l ? "script" : "img",
      v = l ? "script" : u,
      w = Array.isArray || function(a) {
        return "[object Array]" == o.call(a)
      },
      x = [],
      y = {},
      z = {
        timeout: function(a, b) {
          return b.length && (a.timeout = b[0]), a
        }
      },
      A, B;
    B = function(a) {
      function b(a) {
        var a = a.split("!"),
          b = x.length,
          c = a.pop(),
          d = a.length,
          c = {
            url: c,
            origUrl: c,
            prefixes: a
          },
          e, f, g;
        for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
        for (f = 0; f < b; f++) c = x[f](c);
        return c
      }

      function g(a, e, f, g, h) {
        var i = b(a),
          j = i.autoCallback;
        i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
          k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
        })))
      }

      function h(a, b) {
        function c(a, c) {
          if (a) {
            if (e(a)) c || (j = function() {
              var a = [].slice.call(arguments);
              k.apply(this, a), l()
            }), g(a, j, b, 0, h);
            else if (Object(a) === a)
              for (n in m = function() {
                  var b = 0,
                    c;
                  for (c in a) a.hasOwnProperty(c) && b++;
                  return b
                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                var a = [].slice.call(arguments);
                k.apply(this, a), l()
              } : j[n] = function(a) {
                return function() {
                  var b = [].slice.call(arguments);
                  a && a.apply(this, b), l()
                }
              }(k[n])), g(a[n], j, b, n, h))
          } else !c && l()
        }
        var h = !!a.test,
          i = a.load || a.both,
          j = a.callback || f,
          k = j,
          l = a.complete || f,
          m, n;
        c(h ? a.yep : a.nope, !!i), i && c(i)
      }
      var i, j, l = this.yepnope.loader;
      if (e(a)) g(a, 0, l, 0);
      else if (w(a))
        for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
      else Object(a) === a && h(a, l)
    }, B.addPrefix = function(a, b) {
      z[a] = b
    }, B.addFilter = function(a) {
      x.push(a)
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
      b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
      var k = b.createElement("script"),
        l, o, e = e || B.errorTimeout;
      k.src = a;
      for (o in d) k.setAttribute(o, d[o]);
      c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
        !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
      }, m(function() {
        l || (l = 1, c(1))
      }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
      var e = b.createElement("link"),
        j, c = i ? h : c || f;
      e.href = a, e.rel = "stylesheet", e.type = "text/css";
      for (j in d) e.setAttribute(j, d[j]);
      g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
  }(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
  };
/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function() {
  function e() {}

  function t(e, t) {
    for (var n = e.length; n--;)
      if (e[n].listener === t) return n;
    return -1
  }

  function n(e) {
    return function() {
      return this[e].apply(this, arguments)
    }
  }
  var i = e.prototype,
    r = this,
    o = r.EventEmitter;
  i.getListeners = function(e) {
    var t, n, i = this._getEvents();
    if ("object" == typeof e) {
      t = {};
      for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
    } else t = i[e] || (i[e] = []);
    return t
  }, i.flattenListeners = function(e) {
    var t, n = [];
    for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
    return n
  }, i.getListenersAsObject = function(e) {
    var t, n = this.getListeners(e);
    return n instanceof Array && (t = {}, t[e] = n), t || n
  }, i.addListener = function(e, n) {
    var i, r = this.getListenersAsObject(e),
      o = "object" == typeof n;
    for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
      listener: n,
      once: !1
    });
    return this
  }, i.on = n("addListener"), i.addOnceListener = function(e, t) {
    return this.addListener(e, {
      listener: t,
      once: !0
    })
  }, i.once = n("addOnceListener"), i.defineEvent = function(e) {
    return this.getListeners(e), this
  }, i.defineEvents = function(e) {
    for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
    return this
  }, i.removeListener = function(e, n) {
    var i, r, o = this.getListenersAsObject(e);
    for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
    return this
  }, i.off = n("removeListener"), i.addListeners = function(e, t) {
    return this.manipulateListeners(!1, e, t)
  }, i.removeListeners = function(e, t) {
    return this.manipulateListeners(!0, e, t)
  }, i.manipulateListeners = function(e, t, n) {
    var i, r, o = e ? this.removeListener : this.addListener,
      s = e ? this.removeListeners : this.addListeners;
    if ("object" != typeof t || t instanceof RegExp)
      for (i = n.length; i--;) o.call(this, t, n[i]);
    else
      for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
    return this
  }, i.removeEvent = function(e) {
    var t, n = typeof e,
      i = this._getEvents();
    if ("string" === n) delete i[e];
    else if ("object" === n)
      for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
    else delete this._events;
    return this
  }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
    var n, i, r, o, s = this.getListenersAsObject(e);
    for (r in s)
      if (s.hasOwnProperty(r))
        for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
    return this
  }, i.trigger = n("emitEvent"), i.emit = function(e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(e, t)
  }, i.setOnceReturnValue = function(e) {
    return this._onceReturnValue = e, this
  }, i._getOnceReturnValue = function() {
    return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
  }, i._getEvents = function() {
    return this._events || (this._events = {})
  }, e.noConflict = function() {
    return r.EventEmitter = o, e
  }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
    return e
  }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
  function(e) {
    function t(t) {
      var n = e.event;
      return n.target = n.target || n.srcElement || t, n
    }
    var n = document.documentElement,
      i = function() {};
    n.addEventListener ? i = function(e, t, n) {
      e.addEventListener(t, n, !1)
    } : n.attachEvent && (i = function(e, n, i) {
      e[n + i] = i.handleEvent ? function() {
        var n = t(e);
        i.handleEvent.call(i, n)
      } : function() {
        var n = t(e);
        i.call(e, n)
      }, e.attachEvent("on" + n, e[n + i])
    });
    var r = function() {};
    n.removeEventListener ? r = function(e, t, n) {
      e.removeEventListener(t, n, !1)
    } : n.detachEvent && (r = function(e, t, n) {
      e.detachEvent("on" + t, e[t + n]);
      try {
        delete e[t + n]
      } catch (i) {
        e[t + n] = void 0
      }
    });
    var o = {
      bind: i,
      unbind: r
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
  }(this),
  function(e, t) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
      return t(e, n, i)
    }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
  }(window, function(e, t, n) {
    function i(e, t) {
      for (var n in t) e[n] = t[n];
      return e
    }

    function r(e) {
      return "[object Array]" === d.call(e)
    }

    function o(e) {
      var t = [];
      if (r(e)) t = e;
      else if ("number" == typeof e.length)
        for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
      else t.push(e);
      return t
    }

    function s(e, t, n) {
      if (!(this instanceof s)) return new s(e, t);
      "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
      var r = this;
      setTimeout(function() {
        r.check()
      })
    }

    function f(e) {
      this.img = e
    }

    function c(e) {
      this.src = e, v[e] = this
    }
    var a = e.jQuery,
      u = e.console,
      h = u !== void 0,
      d = Object.prototype.toString;
    s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function() {
      this.images = [];
      for (var e = 0, t = this.elements.length; t > e; e++) {
        var n = this.elements[e];
        "IMG" === n.nodeName && this.addImage(n);
        var i = n.nodeType;
        if (i && (1 === i || 9 === i || 11 === i))
          for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
            var f = r[o];
            this.addImage(f)
          }
      }
    }, s.prototype.addImage = function(e) {
      var t = new f(e);
      this.images.push(t)
    }, s.prototype.check = function() {
      function e(e, r) {
        return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
      }
      var t = this,
        n = 0,
        i = this.images.length;
      if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
      for (var r = 0; i > r; r++) {
        var o = this.images[r];
        o.on("confirm", e), o.check()
      }
    }, s.prototype.progress = function(e) {
      this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
      var t = this;
      setTimeout(function() {
        t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
      })
    }, s.prototype.complete = function() {
      var e = this.hasAnyBroken ? "fail" : "done";
      this.isComplete = !0;
      var t = this;
      setTimeout(function() {
        if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
          var n = t.hasAnyBroken ? "reject" : "resolve";
          t.jqDeferred[n](t)
        }
      })
    }, a && (a.fn.imagesLoaded = function(e, t) {
      var n = new s(this, e, t);
      return n.jqDeferred.promise(a(this))
    }), f.prototype = new t, f.prototype.check = function() {
      var e = v[this.img.src] || new c(this.img.src);
      if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
      if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
      var t = this;
      e.on("confirm", function(e, n) {
        return t.confirm(e.isLoaded, n), !0
      }), e.check()
    }, f.prototype.confirm = function(e, t) {
      this.isLoaded = e, this.emit("confirm", this, t)
    };
    var v = {};
    return c.prototype = new t, c.prototype.check = function() {
      if (!this.isChecked) {
        var e = new Image;
        n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
      }
    }, c.prototype.handleEvent = function(e) {
      var t = "on" + e.type;
      this[t] && this[t](e)
    }, c.prototype.onload = function(e) {
      this.confirm(!0, "onload"), this.unbindProxyEvents(e)
    }, c.prototype.onerror = function(e) {
      this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
    }, c.prototype.confirm = function(e, t) {
      this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
    }, c.prototype.unbindProxyEvents = function(e) {
      n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
    }, s
  });
/*!
 * Masonry PACKAGED v4.0.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
! function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
    e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
  "use strict";

  function i(i, r, a) {
    function h(t, e, n) {
      var o, r = "$()." + i + '("' + e + '")';
      return t.each(function(t, h) {
        var u = a.data(h, i);
        if (!u) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
        var d = u[e];
        if (!d || "_" == e.charAt(0)) return void s(r + " is not a valid method");
        var c = d.apply(u, n);
        o = void 0 === o ? c : o
      }), void 0 !== o ? o : t
    }

    function u(t, e) {
      t.each(function(t, n) {
        var o = a.data(n, i);
        o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o))
      })
    }
    a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function(t) {
      a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
    }), a.fn[i] = function(t) {
      if ("string" == typeof t) {
        var e = o.call(arguments, 1);
        return h(this, t, e)
      }
      return u(this, t), this
    }, n(a))
  }

  function n(t) {
    !t || t && t.bridget || (t.bridget = i)
  }
  var o = Array.prototype.slice,
    r = t.console,
    s = "undefined" == typeof r ? function() {} : function(t) {
      r.error(t)
    };
  return n(e || t.jQuery), i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}(this, function() {
  function t() {}
  var e = t.prototype;
  return e.on = function(t, e) {
    if (t && e) {
      var i = this._events = this._events || {},
        n = i[t] = i[t] || [];
      return -1 == n.indexOf(e) && n.push(e), this
    }
  }, e.once = function(t, e) {
    if (t && e) {
      this.on(t, e);
      var i = this._onceEvents = this._onceEvents || {},
        n = i[t] = i[t] || [];
      return n[e] = !0, this
    }
  }, e.off = function(t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      var n = i.indexOf(e);
      return -1 != n && i.splice(n, 1), this
    }
  }, e.emitEvent = function(t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      var n = 0,
        o = i[n];
      e = e || [];
      for (var r = this._onceEvents && this._onceEvents[t]; o;) {
        var s = r && r[o];
        s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n]
      }
      return this
    }
  }, t
}),
function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
    return e()
  }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
  "use strict";

  function t(t) {
    var e = parseFloat(t),
      i = -1 == t.indexOf("%") && !isNaN(e);
    return i && e
  }

  function e() {}

  function i() {
    for (var t = {
        width: 0,
        height: 0,
        innerWidth: 0,
        innerHeight: 0,
        outerWidth: 0,
        outerHeight: 0
      }, e = 0; u > e; e++) {
      var i = h[e];
      t[i] = 0
    }
    return t
  }

  function n(t) {
    var e = getComputedStyle(t);
    return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
  }

  function o() {
    if (!d) {
      d = !0;
      var e = document.createElement("div");
      e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
      var i = document.body || document.documentElement;
      i.appendChild(e);
      var o = n(e);
      r.isBoxSizeOuter = s = 200 == t(o.width), i.removeChild(e)
    }
  }

  function r(e) {
    if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
      var r = n(e);
      if ("none" == r.display) return i();
      var a = {};
      a.width = e.offsetWidth, a.height = e.offsetHeight;
      for (var d = a.isBorderBox = "border-box" == r.boxSizing, c = 0; u > c; c++) {
        var l = h[c],
          f = r[l],
          m = parseFloat(f);
        a[l] = isNaN(m) ? 0 : m
      }
      var p = a.paddingLeft + a.paddingRight,
        g = a.paddingTop + a.paddingBottom,
        y = a.marginLeft + a.marginRight,
        v = a.marginTop + a.marginBottom,
        _ = a.borderLeftWidth + a.borderRightWidth,
        E = a.borderTopWidth + a.borderBottomWidth,
        z = d && s,
        b = t(r.width);
      b !== !1 && (a.width = b + (z ? 0 : p + _));
      var x = t(r.height);
      return x !== !1 && (a.height = x + (z ? 0 : g + E)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (g + E), a.outerWidth = a.width + y, a.outerHeight = a.height + v, a
    }
  }
  var s, a = "undefined" == typeof console ? e : function(t) {
      console.error(t)
    },
    h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
    u = h.length,
    d = !1;
  return r
}),
function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
  "use strict";
  var t = function() {
    var t = Element.prototype;
    if (t.matches) return "matches";
    if (t.matchesSelector) return "matchesSelector";
    for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
      var n = e[i],
        o = n + "MatchesSelector";
      if (t[o]) return o
    }
  }();
  return function(e, i) {
    return e[t](i)
  }
}),
function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["matches-selector/matches-selector"], function(i) {
    return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
  var i = {};
  i.extend = function(t, e) {
    for (var i in e) t[i] = e[i];
    return t
  }, i.modulo = function(t, e) {
    return (t % e + e) % e
  }, i.makeArray = function(t) {
    var e = [];
    if (Array.isArray(t)) e = t;
    else if (t && "number" == typeof t.length)
      for (var i = 0; i < t.length; i++) e.push(t[i]);
    else e.push(t);
    return e
  }, i.removeFrom = function(t, e) {
    var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
  }, i.getParent = function(t, i) {
    for (; t != document.body;)
      if (t = t.parentNode, e(t, i)) return t
  }, i.getQueryElement = function(t) {
    return "string" == typeof t ? document.querySelector(t) : t
  }, i.handleEvent = function(t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, i.filterFindElements = function(t, n) {
    t = i.makeArray(t);
    var o = [];
    return t.forEach(function(t) {
      if (t instanceof HTMLElement) {
        if (!n) return void o.push(t);
        e(t, n) && o.push(t);
        for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
      }
    }), o
  }, i.debounceMethod = function(t, e, i) {
    var n = t.prototype[e],
      o = e + "Timeout";
    t.prototype[e] = function() {
      var t = this[o];
      t && clearTimeout(t);
      var e = arguments,
        r = this;
      this[o] = setTimeout(function() {
        n.apply(r, e), delete r[o]
      }, i || 100)
    }
  }, i.docReady = function(t) {
    "complete" == document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)
  }, i.toDashed = function(t) {
    return t.replace(/(.)([A-Z])/g, function(t, e, i) {
      return e + "-" + i
    }).toLowerCase()
  };
  var n = t.console;
  return i.htmlInit = function(e, o) {
    i.docReady(function() {
      var r = i.toDashed(o),
        s = "data-" + r,
        a = document.querySelectorAll("[" + s + "]"),
        h = document.querySelectorAll(".js-" + r),
        u = i.makeArray(a).concat(i.makeArray(h)),
        d = s + "-options",
        c = t.jQuery;
      u.forEach(function(t) {
        var i, r = t.getAttribute(s) || t.getAttribute(d);
        try {
          i = r && JSON.parse(r)
        } catch (a) {
          return void(n && n.error("Error parsing " + s + " on " + t.className + ": " + a))
        }
        var h = new e(t, i);
        c && c.data(t, o, h)
      })
    })
  }, i
}),
function(t, e) {
  "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], function(i, n) {
    return e(t, i, n)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EvEmitter, t.getSize))
}(window, function(t, e, i) {
  "use strict";

  function n(t) {
    for (var e in t) return !1;
    return e = null, !0
  }

  function o(t, e) {
    t && (this.element = t, this.layout = e, this.position = {
      x: 0,
      y: 0
    }, this._create())
  }

  function r(t) {
    return t.replace(/([A-Z])/g, function(t) {
      return "-" + t.toLowerCase()
    })
  }
  var s = document.documentElement.style,
    a = "string" == typeof s.transition ? "transition" : "WebkitTransition",
    h = "string" == typeof s.transform ? "transform" : "WebkitTransform",
    u = {
      WebkitTransition: "webkitTransitionEnd",
      transition: "transitionend"
    }[a],
    d = [h, a, a + "Duration", a + "Property"],
    c = o.prototype = Object.create(e.prototype);
  c.constructor = o, c._create = function() {
    this._transn = {
      ingProperties: {},
      clean: {},
      onEnd: {}
    }, this.css({
      position: "absolute"
    })
  }, c.handleEvent = function(t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, c.getSize = function() {
    this.size = i(this.element)
  }, c.css = function(t) {
    var e = this.element.style;
    for (var i in t) {
      var n = d[i] || i;
      e[n] = t[i]
    }
  }, c.getPosition = function() {
    var t = getComputedStyle(this.element),
      e = this.layout._getOption("originLeft"),
      i = this.layout._getOption("originTop"),
      n = t[e ? "left" : "right"],
      o = t[i ? "top" : "bottom"],
      r = this.layout.size,
      s = -1 != n.indexOf("%") ? parseFloat(n) / 100 * r.width : parseInt(n, 10),
      a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10);
    s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a, s -= e ? r.paddingLeft : r.paddingRight, a -= i ? r.paddingTop : r.paddingBottom, this.position.x = s, this.position.y = a
  }, c.layoutPosition = function() {
    var t = this.layout.size,
      e = {},
      i = this.layout._getOption("originLeft"),
      n = this.layout._getOption("originTop"),
      o = i ? "paddingLeft" : "paddingRight",
      r = i ? "left" : "right",
      s = i ? "right" : "left",
      a = this.position.x + t[o];
    e[r] = this.getXValue(a), e[s] = "";
    var h = n ? "paddingTop" : "paddingBottom",
      u = n ? "top" : "bottom",
      d = n ? "bottom" : "top",
      c = this.position.y + t[h];
    e[u] = this.getYValue(c), e[d] = "", this.css(e), this.emitEvent("layout", [this])
  }, c.getXValue = function(t) {
    var e = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
  }, c.getYValue = function(t) {
    var e = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
  }, c._transitionTo = function(t, e) {
    this.getPosition();
    var i = this.position.x,
      n = this.position.y,
      o = parseInt(t, 10),
      r = parseInt(e, 10),
      s = o === this.position.x && r === this.position.y;
    if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
    var a = t - i,
      h = e - n,
      u = {};
    u.transform = this.getTranslate(a, h), this.transition({
      to: u,
      onTransitionEnd: {
        transform: this.layoutPosition
      },
      isCleaning: !0
    })
  }, c.getTranslate = function(t, e) {
    var i = this.layout._getOption("originLeft"),
      n = this.layout._getOption("originTop");
    return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
  }, c.goTo = function(t, e) {
    this.setPosition(t, e), this.layoutPosition()
  }, c.moveTo = c._transitionTo, c.setPosition = function(t, e) {
    this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
  }, c._nonTransition = function(t) {
    this.css(t.to), t.isCleaning && this._removeStyles(t.to);
    for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
  }, c._transition = function(t) {
    if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
    var e = this._transn;
    for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
    for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
    if (t.from) {
      this.css(t.from);
      var n = this.element.offsetHeight;
      n = null
    }
    this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
  };
  var l = "opacity," + r(d.transform || "transform");
  c.enableTransition = function() {
    this.isTransitioning || (this.css({
      transitionProperty: l,
      transitionDuration: this.layout.options.transitionDuration
    }), this.element.addEventListener(u, this, !1))
  }, c.transition = o.prototype[a ? "_transition" : "_nonTransition"], c.onwebkitTransitionEnd = function(t) {
    this.ontransitionend(t)
  }, c.onotransitionend = function(t) {
    this.ontransitionend(t)
  };
  var f = {
    "-webkit-transform": "transform"
  };
  c.ontransitionend = function(t) {
    if (t.target === this.element) {
      var e = this._transn,
        i = f[t.propertyName] || t.propertyName;
      if (delete e.ingProperties[i], n(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
        var o = e.onEnd[i];
        o.call(this), delete e.onEnd[i]
      }
      this.emitEvent("transitionEnd", [this])
    }
  }, c.disableTransition = function() {
    this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
  }, c._removeStyles = function(t) {
    var e = {};
    for (var i in t) e[i] = "";
    this.css(e)
  };
  var m = {
    transitionProperty: "",
    transitionDuration: ""
  };
  return c.removeTransitionStyles = function() {
    this.css(m)
  }, c.removeElem = function() {
    this.element.parentNode.removeChild(this.element), this.css({
      display: ""
    }), this.emitEvent("remove", [this])
  }, c.remove = function() {
    return a && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
      this.removeElem()
    }), void this.hide()) : void this.removeElem()
  }, c.reveal = function() {
    delete this.isHidden, this.css({
      display: ""
    });
    var t = this.layout.options,
      e = {},
      i = this.getHideRevealTransitionEndProperty("visibleStyle");
    e[i] = this.onRevealTransitionEnd, this.transition({
      from: t.hiddenStyle,
      to: t.visibleStyle,
      isCleaning: !0,
      onTransitionEnd: e
    })
  }, c.onRevealTransitionEnd = function() {
    this.isHidden || this.emitEvent("reveal")
  }, c.getHideRevealTransitionEndProperty = function(t) {
    var e = this.layout.options[t];
    if (e.opacity) return "opacity";
    for (var i in e) return i
  }, c.hide = function() {
    this.isHidden = !0, this.css({
      display: ""
    });
    var t = this.layout.options,
      e = {},
      i = this.getHideRevealTransitionEndProperty("hiddenStyle");
    e[i] = this.onHideTransitionEnd, this.transition({
      from: t.visibleStyle,
      to: t.hiddenStyle,
      isCleaning: !0,
      onTransitionEnd: e
    })
  }, c.onHideTransitionEnd = function() {
    this.isHidden && (this.css({
      display: "none"
    }), this.emitEvent("hide"))
  }, c.destroy = function() {
    this.css({
      position: "",
      left: "",
      right: "",
      top: "",
      bottom: "",
      transition: "",
      transform: ""
    })
  }, o
}),
function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, r) {
    return e(t, i, n, o, r)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, n, o) {
  "use strict";

  function r(t, e) {
    var i = n.getQueryElement(t);
    if (!i) return void(a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
    this.element = i, h && (this.$element = h(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
    var o = ++d;
    this.element.outlayerGUID = o, c[o] = this, this._create();
    var r = this._getOption("initLayout");
    r && this.layout()
  }

  function s(t) {
    function e() {
      t.apply(this, arguments)
    }
    return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
  }
  var a = t.console,
    h = t.jQuery,
    u = function() {},
    d = 0,
    c = {};
  r.namespace = "outlayer", r.Item = o, r.defaults = {
    containerStyle: {
      position: "relative"
    },
    initLayout: !0,
    originLeft: !0,
    originTop: !0,
    resize: !0,
    resizeContainer: !0,
    transitionDuration: "0.4s",
    hiddenStyle: {
      opacity: 0,
      transform: "scale(0.001)"
    },
    visibleStyle: {
      opacity: 1,
      transform: "scale(1)"
    }
  };
  var l = r.prototype;
  return n.extend(l, e.prototype), l.option = function(t) {
    n.extend(this.options, t)
  }, l._getOption = function(t) {
    var e = this.constructor.compatOptions[t];
    return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
  }, r.compatOptions = {
    initLayout: "isInitLayout",
    horizontal: "isHorizontal",
    layoutInstant: "isLayoutInstant",
    originLeft: "isOriginLeft",
    originTop: "isOriginTop",
    resize: "isResizeBound",
    resizeContainer: "isResizingContainer"
  }, l._create = function() {
    this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
    var t = this._getOption("resize");
    t && this.bindResize()
  }, l.reloadItems = function() {
    this.items = this._itemize(this.element.children)
  }, l._itemize = function(t) {
    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
      var r = e[o],
        s = new i(r, this);
      n.push(s)
    }
    return n
  }, l._filterFindItemElements = function(t) {
    return n.filterFindElements(t, this.options.itemSelector)
  }, l.getItemElements = function() {
    return this.items.map(function(t) {
      return t.element
    })
  }, l.layout = function() {
    this._resetLayout(), this._manageStamps();
    var t = this._getOption("layoutInstant"),
      e = void 0 !== t ? t : !this._isLayoutInited;
    this.layoutItems(this.items, e), this._isLayoutInited = !0
  }, l._init = l.layout, l._resetLayout = function() {
    this.getSize()
  }, l.getSize = function() {
    this.size = i(this.element)
  }, l._getMeasurement = function(t, e) {
    var n, o = this.options[t];
    o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
  }, l.layoutItems = function(t, e) {
    t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
  }, l._getItemsForLayout = function(t) {
    return t.filter(function(t) {
      return !t.isIgnored
    })
  }, l._layoutItems = function(t, e) {
    if (this._emitCompleteOnItems("layout", t), t && t.length) {
      var i = [];
      t.forEach(function(t) {
        var n = this._getItemLayoutPosition(t);
        n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
      }, this), this._processLayoutQueue(i)
    }
  }, l._getItemLayoutPosition = function() {
    return {
      x: 0,
      y: 0
    }
  }, l._processLayoutQueue = function(t) {
    t.forEach(function(t) {
      this._positionItem(t.item, t.x, t.y, t.isInstant)
    }, this)
  }, l._positionItem = function(t, e, i, n) {
    n ? t.goTo(e, i) : t.moveTo(e, i)
  }, l._postLayout = function() {
    this.resizeContainer()
  }, l.resizeContainer = function() {
    var t = this._getOption("resizeContainer");
    if (t) {
      var e = this._getContainerSize();
      e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
    }
  }, l._getContainerSize = u, l._setContainerMeasure = function(t, e) {
    if (void 0 !== t) {
      var i = this.size;
      i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
    }
  }, l._emitCompleteOnItems = function(t, e) {
    function i() {
      o.dispatchEvent(t + "Complete", null, [e])
    }

    function n() {
      s++, s == r && i()
    }
    var o = this,
      r = e.length;
    if (!e || !r) return void i();
    var s = 0;
    e.forEach(function(e) {
      e.once(t, n)
    })
  }, l.dispatchEvent = function(t, e, i) {
    var n = e ? [e].concat(i) : i;
    if (this.emitEvent(t, n), h)
      if (this.$element = this.$element || h(this.element), e) {
        var o = h.Event(e);
        o.type = t, this.$element.trigger(o, i)
      } else this.$element.trigger(t, i)
  }, l.ignore = function(t) {
    var e = this.getItem(t);
    e && (e.isIgnored = !0)
  }, l.unignore = function(t) {
    var e = this.getItem(t);
    e && delete e.isIgnored
  }, l.stamp = function(t) {
    t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
  }, l.unstamp = function(t) {
    t = this._find(t), t && t.forEach(function(t) {
      n.removeFrom(this.stamps, t), this.unignore(t)
    }, this)
  }, l._find = function(t) {
    return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
  }, l._manageStamps = function() {
    this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
  }, l._getBoundingRect = function() {
    var t = this.element.getBoundingClientRect(),
      e = this.size;
    this._boundingRect = {
      left: t.left + e.paddingLeft + e.borderLeftWidth,
      top: t.top + e.paddingTop + e.borderTopWidth,
      right: t.right - (e.paddingRight + e.borderRightWidth),
      bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
    }
  }, l._manageStamp = u, l._getElementOffset = function(t) {
    var e = t.getBoundingClientRect(),
      n = this._boundingRect,
      o = i(t),
      r = {
        left: e.left - n.left - o.marginLeft,
        top: e.top - n.top - o.marginTop,
        right: n.right - e.right - o.marginRight,
        bottom: n.bottom - e.bottom - o.marginBottom
      };
    return r
  }, l.handleEvent = n.handleEvent, l.bindResize = function() {
    t.addEventListener("resize", this), this.isResizeBound = !0
  }, l.unbindResize = function() {
    t.removeEventListener("resize", this), this.isResizeBound = !1
  }, l.onresize = function() {
    this.resize()
  }, n.debounceMethod(r, "onresize", 100), l.resize = function() {
    this.isResizeBound && this.needsResizeLayout() && this.layout()
  }, l.needsResizeLayout = function() {
    var t = i(this.element),
      e = this.size && t;
    return e && t.innerWidth !== this.size.innerWidth
  }, l.addItems = function(t) {
    var e = this._itemize(t);
    return e.length && (this.items = this.items.concat(e)), e
  }, l.appended = function(t) {
    var e = this.addItems(t);
    e.length && (this.layoutItems(e, !0), this.reveal(e))
  }, l.prepended = function(t) {
    var e = this._itemize(t);
    if (e.length) {
      var i = this.items.slice(0);
      this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
    }
  }, l.reveal = function(t) {
    this._emitCompleteOnItems("reveal", t), t && t.length && t.forEach(function(t) {
      t.reveal()
    })
  }, l.hide = function(t) {
    this._emitCompleteOnItems("hide", t), t && t.length && t.forEach(function(t) {
      t.hide()
    })
  }, l.revealItemElements = function(t) {
    var e = this.getItems(t);
    this.reveal(e)
  }, l.hideItemElements = function(t) {
    var e = this.getItems(t);
    this.hide(e)
  }, l.getItem = function(t) {
    for (var e = 0; e < this.items.length; e++) {
      var i = this.items[e];
      if (i.element == t) return i
    }
  }, l.getItems = function(t) {
    t = n.makeArray(t);
    var e = [];
    return t.forEach(function(t) {
      var i = this.getItem(t);
      i && e.push(i)
    }, this), e
  }, l.remove = function(t) {
    var e = this.getItems(t);
    this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
      t.remove(), n.removeFrom(this.items, t)
    }, this)
  }, l.destroy = function() {
    var t = this.element.style;
    t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
      t.destroy()
    }), this.unbindResize();
    var e = this.element.outlayerGUID;
    delete c[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
  }, r.data = function(t) {
    t = n.getQueryElement(t);
    var e = t && t.outlayerGUID;
    return e && c[e]
  }, r.create = function(t, e) {
    var i = s(r);
    return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
  }, r.Item = o, r
}),
function(t, e) {
  "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
  var i = t.create("masonry");
  return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function() {
    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
    for (var t = 0; t < this.cols; t++) this.colYs.push(0);
    this.maxY = 0
  }, i.prototype.measureColumns = function() {
    if (this.getContainerWidth(), !this.columnWidth) {
      var t = this.items[0],
        i = t && t.element;
      this.columnWidth = i && e(i).outerWidth || this.containerWidth
    }
    var n = this.columnWidth += this.gutter,
      o = this.containerWidth + this.gutter,
      r = o / n,
      s = n - o % n,
      a = s && 1 > s ? "round" : "floor";
    r = Math[a](r), this.cols = Math.max(r, 1)
  }, i.prototype.getContainerWidth = function() {
    var t = this._getOption("fitWidth"),
      i = t ? this.element.parentNode : this.element,
      n = e(i);
    this.containerWidth = n && n.innerWidth
  }, i.prototype._getItemLayoutPosition = function(t) {
    t.getSize();
    var e = t.size.outerWidth % this.columnWidth,
      i = e && 1 > e ? "round" : "ceil",
      n = Math[i](t.size.outerWidth / this.columnWidth);
    n = Math.min(n, this.cols);
    for (var o = this._getColGroup(n), r = Math.min.apply(Math, o), s = o.indexOf(r), a = {
        x: this.columnWidth * s,
        y: r
      }, h = r + t.size.outerHeight, u = this.cols + 1 - o.length, d = 0; u > d; d++) this.colYs[s + d] = h;
    return a
  }, i.prototype._getColGroup = function(t) {
    if (2 > t) return this.colYs;
    for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
      var o = this.colYs.slice(n, n + t);
      e[n] = Math.max.apply(Math, o)
    }
    return e
  }, i.prototype._manageStamp = function(t) {
    var i = e(t),
      n = this._getElementOffset(t),
      o = this._getOption("originLeft"),
      r = o ? n.left : n.right,
      s = r + i.outerWidth,
      a = Math.floor(r / this.columnWidth);
    a = Math.max(0, a);
    var h = Math.floor(s / this.columnWidth);
    h -= s % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
    for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i.outerHeight, c = a; h >= c; c++) this.colYs[c] = Math.max(d, this.colYs[c])
  }, i.prototype._getContainerSize = function() {
    this.maxY = Math.max.apply(Math, this.colYs);
    var t = {
      height: this.maxY
    };
    return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
  }, i.prototype._getContainerFitWidth = function() {
    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
    return (this.cols - t) * this.columnWidth - this.gutter
  }, i.prototype.needsResizeLayout = function() {
    var t = this.containerWidth;
    return this.getContainerWidth(), t != this.containerWidth
  }, i
});
/*
Plugin Name: BrowserSelector
Written by: Crivos - (http://www.crivos.com)
Version: 0.1
*/
(function($, navigator) {
  $.extend({
    browserSelector: function() {
      var u = navigator.userAgent,
        ua = u.toLowerCase(),
        is = function(t) {
          return ua.indexOf(t) > -1;
        },
        g = 'gecko',
        w = 'webkit',
        s = 'safari',
        o = 'opera',
        h = document.documentElement,
        b = [(!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)) ? ('ie ie' + parseFloat(navigator.appVersion.split("MSIE")[1])) : is('firefox/2') ? g + ' ff2' : is('firefox/3.5') ? g + ' ff3 ff3_5' : is('firefox/3') ? g + ' ff3' : is('gecko/') ? g : is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery1 : (/opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery2 : '')) : is('konqueror') ? 'konqueror' : is('chrome') ? w + ' chrome' : is('iron') ? w + ' iron' : is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.jQuery1 : '') : is('mozilla/') ? g : '', is('j2me') ? 'mobile' : is('iphone') ? 'iphone' : is('ipod') ? 'ipod' : is('mac') ? 'mac' : is('darwin') ? 'mac' : is('webtv') ? 'webtv' : is('win') ? 'win' : is('freebsd') ? 'freebsd' : (is('x11') || is('linux')) ? 'linux' : '', 'js'];
      c = b.join(' ');
      h.className += ' ' + c;
    }
  });
})(jQuery, navigator);
/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 *
 * Copyright (c) 2012-2014 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function($) {
  $.fn.appear = function(options) {

    var transEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd',
        'transition': 'transitionend'
      },
      transEndEventName = transEndEventNames[Modernizr.prefixed('transition')];
    var settings = $.extend({
      data: undefined,
      speedAddClass: 300,
      speedRemoveClass: 100,
      // X & Y accuracy
      accX: 0,
      accY: 0
    }, options);

    return this.each(function(id) {
      var t = $(this);

      //whether the element is currently visible
      t.appeared = false;

      var w = $(window),
        check = function() {
          //is the element hidden?
          if (!t.is(':visible')) {

            //it became hidden
            t.appeared = false;
            return;
          }
          //is the element inside the visible window?
          var a = w.scrollLeft(),
            b = w.scrollTop(),
            o = t.offset(),
            x = o.left,
            y = o.top,
            ax = settings.accX,
            ay = settings.accY,
            th = t.height(),
            wh = w.height(),
            tw = t.width(),
            ww = w.width();

          if (y + th + ay >= b &&
            y <= b + wh + ay &&
            x + tw + ax >= a &&
            x <= a + ww + ax) {
            //trigger the custom event
            if (!t.appeared) t.trigger('appear', settings.data);
          } else {
            //it scrolled out of view
            t.appeared = false;
          }
        };

      var fn = function(e) {
          if (e.data) {
            setTimeout(function() {
              $(e.currentTarget).addClass(e.data + 'Run').one(transEndEventName, function() {
                $(this).removeClass(e.data);
              });
            }, id * settings.speedAddClass);
          }
        }
        //create a modified fn with some additional logic
      var modifiedFn = function() {

        //mark the element as visible
        t.appeared = true;

        //trigger the original fn
        fn.apply(this, arguments);
      };
      //bind the modified fn to the element
      t.bind('appear', settings.data, modifiedFn);
      //check whenever the window scrolls
      w.scroll(check);
      //check whenever the dom changes
      $.fn.appear.checks.push(check);

      //check now
      (check)();
    });
  };
  //keep a queue of appearance checks
  $.extend($.fn.appear, {
    checks: [],
    timeout: null,
    //process the queue
    checkAll: function() {
      var length = $.fn.appear.checks.length;
      if (length > 0)
        while (length--)($.fn.appear.checks[length])();
    },
    //check the queue asynchronously
    run: function() {
      if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
      $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
    }
  });

  //run checks when these methods are called
  $.each(['append', 'prepend', 'after', 'before', 'attr',
    'removeAttr', 'addClass', 'removeClass', 'toggleClass',
    'remove', 'css', 'show', 'hide'
  ], function(i, n) {
    var old = $.fn[n];

    if (old) {
      $.fn[n] = function() {
        var r = old.apply(this, arguments);
        $.fn.appear.run();
        return r;
      }
    }
  });
})(jQuery);
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function() {
  var t = [].indexOf || function(t) {
      for (var e = 0, n = this.length; e < n; e++) {
        if (e in this && this[e] === t) return e
      }
      return -1
    },
    e = [].slice;
  (function(t, e) {
    if (typeof define === "function" && define.amd) {
      return define("waypoints", ["jquery"], function(n) {
        return e(n, t)
      })
    } else {
      return e(t.jQuery, t)
    }
  })(this, function(n, r) {
    var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
    i = n(r);
    c = t.call(r, "ontouchstart") >= 0;
    s = {
      horizontal: {},
      vertical: {}
    };
    f = 1;
    a = {};
    u = "waypoints-context-id";
    p = "resize.waypoints";
    y = "scroll.waypoints";
    v = 1;
    w = "waypoints-waypoint-ids";
    g = "waypoint";
    m = "waypoints";
    o = function() {
      function t(t) {
        var e = this;
        this.$element = t;
        this.element = t[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = "context" + f++;
        this.oldScroll = {
          x: t.scrollLeft(),
          y: t.scrollTop()
        };

        this.waypoints = {
          horizontal: {},
          vertical: {}
        };

        t.data(u, this.id);
        a[this.id] = this;
        t.bind(y, function() {
          var t;
          if (!(e.didScroll || c)) {
            e.didScroll = true;
            t = function() {
              e.doScroll();
              return e.didScroll = false
            };

            return r.setTimeout(t, n[m].settings.scrollThrottle)
          }
        });
        t.bind(p, function() {
          var t;
          if (!e.didResize) {
            e.didResize = true;
            t = function() {
              n[m]("refresh");
              return e.didResize = false
            };

            return r.setTimeout(t, n[m].settings.resizeThrottle)
          }
        })
      }
      t.prototype.doScroll = function() {
        var t, e = this;
        t = {
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
        };

        if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
          n[m]("refresh")
        }
        n.each(t, function(t, r) {
          var i, o, l;
          l = [];
          o = r.newScroll > r.oldScroll;
          i = o ? r.forward : r.backward;
          n.each(e.waypoints[t], function(t, e) {
            var n, i;
            if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
              return l.push(e)
            } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
              return l.push(e)
            }
          });
          l.sort(function(t, e) {
            return t.offset - e.offset
          });
          if (!o) {
            l.reverse()
          }
          return n.each(l, function(t, e) {
            if (e.options.continuous || t === l.length - 1) {
              return e.trigger([i])
            }
          })
        });
        return this.oldScroll = {
          x: t.horizontal.newScroll,
          y: t.vertical.newScroll
        }
      };
      t.prototype.refresh = function() {
        var t, e, r, i = this;
        r = n.isWindow(this.element);
        e = this.$element.offset();
        this.doScroll();
        t = {
          horizontal: {
            contextOffset: r ? 0 : e.left,
            contextScroll: r ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left"
          },
          vertical: {
            contextOffset: r ? 0 : e.top,
            contextScroll: r ? 0 : this.oldScroll.y,
            contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top"
          }
        };

        return n.each(t, function(t, e) {
          return n.each(i.waypoints[t], function(t, r) {
            var i, o, l, s, f;
            i = r.options.offset;
            l = r.offset;
            o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
            if (n.isFunction(i)) {
              i = i.apply(r.element)
            } else if (typeof i === "string") {
              i = parseFloat(i);
              if (r.options.offset.indexOf("%") > -1) {
                i = Math.ceil(e.contextDimension * i / 100)
              }
            }
            r.offset = o - e.contextOffset + e.contextScroll - i;
            if (r.options.onlyOnScroll && l != null || !r.enabled) {
              return
            }
            if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
              return r.trigger([e.backward])
            } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
              return r.trigger([e.forward])
            } else if (l === null && e.oldScroll >= r.offset) {
              return r.trigger([e.forward])
            }
          })
        })
      };
      t.prototype.checkEmpty = function() {
        if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
          this.$element.unbind([p, y].join(" "));
          return delete a[this.id]
        }
      };
      return t
    }();
    l = function() {
      function t(t, e, r) {
        var i, o;
        r = n.extend({}, n.fn[g].defaults, r);
        if (r.offset === "bottom-in-view") {
          r.offset = function() {
            var t;
            t = n[m]("viewportHeight");
            if (!n.isWindow(e.element)) {
              t = e.$element.height()
            }
            return t - n(this).outerHeight()
          }
        }
        this.$element = t;
        this.element = t[0];
        this.axis = r.horizontal ? "horizontal" : "vertical";
        this.callback = r.handler;
        this.context = e;
        this.enabled = r.enabled;
        this.id = "waypoints" + v++;
        this.offset = null;
        this.options = r;
        e.waypoints[this.axis][this.id] = this;
        s[this.axis][this.id] = this;
        i = (o = t.data(w)) != null ? o : [];
        i.push(this.id);
        t.data(w, i)
      }
      t.prototype.trigger = function(t) {
        if (!this.enabled) {
          return
        }
        if (this.callback != null) {
          this.callback.apply(this.element, t)
        }
        if (this.options.triggerOnce) {
          return this.destroy()
        }
      };
      t.prototype.disable = function() {
        return this.enabled = false
      };

      t.prototype.enable = function() {
        this.context.refresh();
        return this.enabled = true
      };

      t.prototype.destroy = function() {
        delete s[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty()
      };

      t.getWaypointsByElement = function(t) {
        var e, r;
        r = n(t).data(w);
        if (!r) {
          return []
        }
        e = n.extend({}, s.horizontal, s.vertical);
        return n.map(r, function(t) {
          return e[t]
        })
      };

      return t
    }();
    d = {
      init: function(t, e) {
        var r;
        if (e == null) {
          e = {}
        }
        if ((r = e.handler) == null) {
          e.handler = t
        }
        this.each(function() {
          var t, r, i, s;
          t = n(this);
          i = (s = e.context) != null ? s : n.fn[g].defaults.context;
          if (!n.isWindow(i)) {
            i = t.closest(i)
          }
          i = n(i);
          r = a[i.data(u)];
          if (!r) {
            r = new o(i)
          }
          return new l(t, r, e)
        });
        n[m]("refresh");
        return this
      },
      disable: function() {
        return d._invoke(this, "disable")
      },
      enable: function() {
        return d._invoke(this, "enable")
      },
      destroy: function() {
        return d._invoke(this, "destroy")
      },
      prev: function(t, e) {
        return d._traverse.call(this, t, e, function(t, e, n) {
          if (e > 0) {
            return t.push(n[e - 1])
          }
        })
      },
      next: function(t, e) {
        return d._traverse.call(this, t, e, function(t, e, n) {
          if (e < n.length - 1) {
            return t.push(n[e + 1])
          }
        })
      },
      _traverse: function(t, e, i) {
        var o, l;
        if (t == null) {
          t = "vertical"
        }
        if (e == null) {
          e = r
        }
        l = h.aggregate(e);
        o = [];
        this.each(function() {
          var e;
          e = n.inArray(this, l[t]);
          return i(o, e, l[t])
        });
        return this.pushStack(o)
      },
      _invoke: function(t, e) {
        t.each(function() {
          var t;
          t = l.getWaypointsByElement(this);
          return n.each(t, function(t, n) {
            n[e]();
            return true
          })
        });
        return this
      }
    };
    n.fn[g] = function() {
      var t, r;
      r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
      if (d[r]) {
        return d[r].apply(this, t)
      } else if (n.isFunction(r)) {
        return d.init.apply(this, arguments)
      } else if (n.isPlainObject(r)) {
        return d.init.apply(this, [null, r])
      } else if (!r) {
        return n.error("jQuery Waypoints needs a callback function or handler option.")
      } else {
        return n.error("The " + r + " method does not exist in jQuery Waypoints.")
      }
    };
    n.fn[g].defaults = {
      context: r,
      continuous: true,
      enabled: true,
      horizontal: false,
      offset: 0,
      triggerOnce: false
    };
    h = {
      refresh: function() {
        return n.each(a, function(t, e) {
          return e.refresh()
        })
      },
      viewportHeight: function() {
        var t;
        return (t = r.innerHeight) != null ? t : i.height()
      },
      aggregate: function(t) {
        var e, r, i;
        e = s;
        if (t) {
          e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0
        }
        if (!e) {
          return []
        }
        r = {
          horizontal: [],
          vertical: []
        };

        n.each(r, function(t, i) {
          n.each(e[t], function(t, e) {
            return i.push(e)
          });
          i.sort(function(t, e) {
            return t.offset - e.offset
          });
          r[t] = n.map(i, function(t) {
            return t.element
          });
          return r[t] = n.unique(r[t])
        });
        return r
      },
      above: function(t) {
        if (t == null) {
          t = r
        }
        return h._filter(t, "vertical", function(t, e) {
          return e.offset <= t.oldScroll.y
        })
      },
      below: function(t) {
        if (t == null) {
          t = r
        }
        return h._filter(t, "vertical", function(t, e) {
          return e.offset > t.oldScroll.y
        })
      },
      left: function(t) {
        if (t == null) {
          t = r
        }
        return h._filter(t, "horizontal", function(t, e) {
          return e.offset <= t.oldScroll.x
        })
      },
      right: function(t) {
        if (t == null) {
          t = r
        }
        return h._filter(t, "horizontal", function(t, e) {
          return e.offset > t.oldScroll.x
        })
      },
      enable: function() {
        return h._invoke("enable")
      },
      disable: function() {
        return h._invoke("disable")
      },
      destroy: function() {
        return h._invoke("destroy")
      },
      extendFn: function(t, e) {
        return d[t] = e
      },
      _invoke: function(t) {
        var e;
        e = n.extend({}, s.vertical, s.horizontal);
        return n.each(e, function(e, n) {
          n[t]();
          return true
        })
      },
      _filter: function(t, e, r) {
        var i, o;
        i = a[n(t).data(u)];
        if (!i) {
          return []
        }
        o = [];
        n.each(i.waypoints[e], function(t, e) {
          if (r(i, e)) {
            return o.push(e)
          }
        });
        o.sort(function(t, e) {
          return t.offset - e.offset
        });
        return n.map(o, function(t) {
          return t.element
        })
      }
    };
    n[m] = function() {
      var t, n;
      n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
      if (h[n]) {
        return h[n].apply(null, t)
      } else {
        return h.aggregate.call(null, n)
      }
    };
    n[m].settings = {
      resizeThrottle: 100,
      scrollThrottle: 30
    };
    return i.load(function() {
      return n[m]("refresh")
    })
  })
}).call(this);
/*
 jQuery Masked Input Plugin
 Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
 Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
 Version: 1.4.1
*/
! function(a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a) {
  var b, c = navigator.userAgent,
    d = /iphone/i.test(c),
    e = /chrome/i.test(c),
    f = /android/i.test(c);
  a.mask = {
    definitions: {
      9: "[0-9]",
      _: "[0-9]",
      a: "[A-Za-z]",
      "*": "[A-Za-z0-9]"
    },
    autoclear: !0,
    dataName: "rawMaskFn",
    placeholder: "_"
  }, a.fn.extend({
    caret: function(a, b) {
      var c;
      if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function() {
        this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select())
      })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), {
        begin: a,
        end: b
      })
    },
    unmask: function() {
      return this.trigger("unmask")
    },
    mask: function(c, g) {
      var h, i, j, k, l, m, n, o;
      if (!c && this.length > 0) {
        h = a(this[0]);
        var p = h.data(a.mask.dataName);
        return p ? p() : void 0
      }
      return g = a.extend({
        autoclear: a.mask.autoclear,
        placeholder: a.mask.placeholder,
        completed: null
      }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function(a, b) {
        "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null)
      }), this.trigger("unmask").each(function() {
        function h() {
          if (g.completed) {
            for (var a = l; m >= a; a++)
              if (j[a] && C[a] === p(a)) return;
            g.completed.call(B)
          }
        }

        function p(a) {
          return g.placeholder.charAt(a < g.placeholder.length ? a : 0)
        }

        function q(a) {
          for (; ++a < n && !j[a];);
          return a
        }

        function r(a) {
          for (; --a >= 0 && !j[a];);
          return a
        }

        function s(a, b) {
          var c, d;
          if (!(0 > a)) {
            for (c = a, d = q(b); n > c; c++)
              if (j[c]) {
                if (!(n > d && j[c].test(C[d]))) break;
                C[c] = C[d], C[d] = p(d), d = q(d)
              }
            z(), B.caret(Math.max(l, a))
          }
        }

        function t(a) {
          var b, c, d, e;
          for (b = a, c = p(a); n > b; b++)
            if (j[b]) {
              if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e))) break;
              c = e
            }
        }

        function u() {
          var a = B.val(),
            b = B.caret();
          if (o && o.length && o.length > a.length) {
            for (A(!0); b.begin > 0 && !j[b.begin - 1];) b.begin--;
            if (0 === b.begin)
              for (; b.begin < l && !j[b.begin];) b.begin++;
            B.caret(b.begin, b.begin)
          } else {
            for (A(!0); b.begin < n && !j[b.begin];) b.begin++;
            B.caret(b.begin, b.begin)
          }
          h()
        }

        function v() {
          A(), B.val() != E && B.change()
        }

        function w(a) {
          if (!B.prop("readonly")) {
            var b, c, e, f = a.which || a.keyCode;
            o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault())
          }
        }

        function x(b) {
          if (!B.prop("readonly")) {
            var c, d, e, g = b.which || b.keyCode,
              i = B.caret();
            if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
              if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) {
                if (t(c), C[c] = d, z(), e = q(c), f) {
                  var k = function() {
                    a.proxy(a.fn.caret, B, e)()
                  };
                  setTimeout(k, 0)
                } else B.caret(e);
                i.begin <= m && h()
              }
              b.preventDefault()
            }
          }
        }

        function y(a, b) {
          var c;
          for (c = a; b > c && n > c; c++) j[c] && (C[c] = p(c))
        }

        function z() {
          B.val(C.join(""))
        }

        function A(a) {
          var b, c, d, e = B.val(),
            f = -1;
          for (b = 0, d = 0; n > b; b++)
            if (j[b]) {
              for (C[b] = p(b); d++ < e.length;)
                if (c = e.charAt(d - 1), j[b].test(c)) {
                  C[b] = c, f = b;
                  break
                }
              if (d > e.length) {
                y(b + 1, n);
                break
              }
            } else C[b] === e.charAt(d) && d++, k > b && (f = b);
          return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l
        }
        var B = a(this),
          C = a.map(c.split(""), function(a, b) {
            return "?" != a ? i[a] ? p(b) : a : void 0
          }),
          D = C.join(""),
          E = B.val();
        B.data(a.mask.dataName, function() {
          return a.map(C, function(a, b) {
            return j[b] && a != p(b) ? a : null
          }).join("")
        }), B.one("unmask", function() {
          B.off(".mask").removeData(a.mask.dataName)
        }).on("focus.mask", function() {
          if (!B.prop("readonly")) {
            clearTimeout(b);
            var a;
            E = B.val(), a = A(), b = setTimeout(function() {
              B.get(0) === document.activeElement && (z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a))
            }, 10)
          }
        }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function() {
          B.prop("readonly") || setTimeout(function() {
            var a = A(!0);
            B.caret(a), h()
          }, 0)
        }), e && f && B.off("input.mask").on("input.mask", u), A()
      })
    }
  })
});
/*
Plugin Name: BrowserSelector
Written by: Crivos - (http://www.crivos.com)
Version: 0.1
*/
(function($) {
  $.extend({
    browserSelector: function() {
      var u = navigator.userAgent,
        ua = u.toLowerCase(),
        is = function(t) {
          return ua.indexOf(t) > -1;
        },
        g = 'gecko',
        w = 'webkit',
        s = 'safari',
        o = 'opera',
        h = document.documentElement,
        b = [(!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)) ? ('ie ie' + parseFloat(navigator.appVersion.split("MSIE")[1])) : is('firefox/2') ? g + ' ff2' : is('firefox/3.5') ? g + ' ff3 ff3_5' : is('firefox/3') ? g + ' ff3' : is('gecko/') ? g : is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery1 : (/opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery2 : '')) : is('konqueror') ? 'konqueror' : is('chrome') ? w + ' chrome' : is('iron') ? w + ' iron' : is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.jQuery1 : '') : is('mozilla/') ? g : '', is('j2me') ? 'mobile' : is('iphone') ? 'iphone' : is('ipod') ? 'ipod' : is('mac') ? 'mac' : is('darwin') ? 'mac' : is('webtv') ? 'webtv' : is('win') ? 'win' : is('freebsd') ? 'freebsd' : (is('x11') || is('linux')) ? 'linux' : '', 'js'];
      c = b.join(' ');
      h.className += ' ' + c;
    }
  });
})(jQuery);
/*
Plugin Name: smoothScroll for jQuery.
Written by: Crivos - (http://www.crivos.com)
Version: 0.1
Based on:
 SmoothScroll v1.2.1
 Licensed under the terms of the MIT license.
 People involved
 - Balazs Galambosi (maintainer)
 - Patrick Brunner (original idea)
 - Michael Herf (Pulse Algorithm)
*/
(function($) {
  $.extend({
    smoothScroll: function() {
      // Scroll Variables (tweakable)
      var defaultOptions = {
        // Scrolling Core
        frameRate: 150, // [Hz]
        animationTime: 700, // [px]
        stepSize: 40, // [px]
        // Pulse (less tweakable)
        // ratio of "tail" to "acceleration"
        pulseAlgorithm: true,
        pulseScale: 8,
        pulseNormalize: 1,
        // Acceleration
        accelerationDelta: 20, // 20
        accelerationMax: 1, // 1
        // Keyboard Settings
        keyboardSupport: true, // option
        arrowScroll: 50, // [px]
        // Other
        touchpadSupport: true,
        fixedBackground: true,
        excluded: ""
      };
      var options = defaultOptions;
      // Other Variables
      var isExcluded = false;
      var isFrame = false;
      var direction = {
        x: 0,
        y: 0
      };
      var initDone = false;
      var root = document.documentElement;
      var activeElement;
      var observer;
      var deltaBuffer = [120, 120, 120];
      var key = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        spacebar: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36
      };
      /***********************************************
       * INITIALIZE
       ***********************************************/
      /**
       * Tests if smooth scrolling is allowed. Shuts down everything if not.
       */
      function initTest() {
        var disableKeyboard = false;
        // disable keys for google reader (spacebar conflict)
        if (document.URL.indexOf("google.com/reader/view") > -1) {
          disableKeyboard = true;
        }
        // disable everything if the page is blacklisted
        if (options.excluded) {
          var domains = options.excluded.split(/[,\n] ?/);
          domains.push("mail.google.com"); // exclude Gmail for now
          for (var i = domains.length; i--;) {
            if (document.URL.indexOf(domains[i]) > -1) {
              observer && observer.disconnect();
              removeEvent("mousewheel", wheel);
              disableKeyboard = true;
              isExcluded = true;
              break;
            }
          }
        }
        // disable keyboard support if anything above requested it
        if (disableKeyboard) {
          removeEvent("keydown", keydown);
        }
        if (options.keyboardSupport && !disableKeyboard) {
          addEvent("keydown", keydown);
        }
      }
      /**
       * Sets up scrolls array, determines if frames are involved.
       */
      function init() {
        if (!document.body) return;
        var body = document.body;
        var html = document.documentElement;
        var windowHeight = window.innerHeight;
        var scrollHeight = body.scrollHeight;
        // check compat mode for root element
        root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
        activeElement = body;
        initTest();
        initDone = true;
        // Checks if this script is running in a frame
        if (top != self) {
          isFrame = true;
        }
        /**
         * This fixes a bug where the areas left and right to
         * the content does not trigger the onmousewheel event
         * on some pages. e.g.: html, body { height: 100% }
         */
        else if (scrollHeight > windowHeight &&
          (body.offsetHeight <= windowHeight ||
            html.offsetHeight <= windowHeight)) {
          // DOMChange (throttle): fix height
          var pending = false;
          var refresh = function() {
            if (!pending && html.scrollHeight != document.height) {
              pending = true; // add a new pending action
              setTimeout(function() {
                html.style.height = document.height + 'px';
                pending = false;
              }, 500); // act rarely to stay fast
            }
          };
          html.style.height = 'auto';
          setTimeout(refresh, 10);
          var config = {
            attributes: true,
            childList: true,
            characterData: false
          };
          observer = new MutationObserver(refresh);
          observer.observe(body, config);
          // clearfix
          if (root.offsetHeight <= windowHeight) {
            var underlay = document.createElement("div");
            underlay.style.clear = "both";
            body.appendChild(underlay);
          }
        }
        // gmail performance fix
        if (document.URL.indexOf("mail.google.com") > -1) {
          var s = document.createElement("style");
          s.innerHTML = ".iu { visibility: hidden }";
          (document.getElementsByTagName("head")[0] || html).appendChild(s);
        }
        // facebook better home timeline performance
        // all the HTML resized images make rendering CPU intensive
        else if (document.URL.indexOf("www.facebook.com") > -1) {
          var home_stream = document.getElementById("home_stream");
          home_stream && (home_stream.style.webkitTransform = "translateZ(0)");
        }
        // disable fixed background
        if (!options.fixedBackground && !isExcluded) {
          body.style.backgroundAttachment = "scroll";
          html.style.backgroundAttachment = "scroll";
        }
      }
      /************************************************
       * SCROLLING
       ************************************************/
      var que = [];
      var pending = false;
      var lastScroll = +new Date;
      /**
       * Pushes scroll actions to the scrolling queue.
       */
      function scrollArray(elem, left, top, delay) {
        delay || (delay = 1000);
        directionCheck(left, top);
        if (options.accelerationMax != 1) {
          var now = +new Date;
          var elapsed = now - lastScroll;
          if (elapsed < options.accelerationDelta) {
            var factor = (1 + (30 / elapsed)) / 2;
            if (factor > 1) {
              factor = Math.min(factor, options.accelerationMax);
              left *= factor;
              top *= factor;
            }
          }
          lastScroll = +new Date;
        }
        // push a scroll command
        que.push({
          x: left,
          y: top,
          lastX: (left < 0) ? 0.99 : -0.99,
          lastY: (top < 0) ? 0.99 : -0.99,
          start: +new Date
        });
        // don't act if there's a pending queue
        if (pending) {
          return;
        }
        var scrollWindow = (elem === document.body);
        var step = function(time) {
          var now = +new Date;
          var scrollX = 0;
          var scrollY = 0;
          for (var i = 0; i < que.length; i++) {
            var item = que[i];
            var elapsed = now - item.start;
            var finished = (elapsed >= options.animationTime);
            // scroll position: [0, 1]
            var position = (finished) ? 1 : elapsed / options.animationTime;
            // easing [optional]
            if (options.pulseAlgorithm) {
              position = pulse(position);
            }
            // only need the difference
            var x = (item.x * position - item.lastX) >> 0;
            var y = (item.y * position - item.lastY) >> 0;
            // add this to the total scrolling
            scrollX += x;
            scrollY += y;
            // update last values
            item.lastX += x;
            item.lastY += y;
            // delete and step back if it's over
            if (finished) {
              que.splice(i, 1);
              i--;
            }
          }
          // scroll left and top
          if (scrollWindow) {
            window.scrollBy(scrollX, scrollY);
          } else {
            if (scrollX) elem.scrollLeft += scrollX;
            if (scrollY) elem.scrollTop += scrollY;
          }
          // clean up if there's nothing left to do
          if (!left && !top) {
            que = [];
          }
          if (que.length) {
            requestFrame(step, elem, (delay / options.frameRate + 1));
          } else {
            pending = false;
          }
        };
        // start a new queue of actions
        requestFrame(step, elem, 0);
        pending = true;
      }
      /***********************************************
       * EVENTS
       ***********************************************/
      /**
       * Mouse wheel handler.
       * @param {Object} event
       */
      function wheel(event) {
        if (!initDone) {
          init();
        }
        var target = event.target;
        var overflowing = overflowingAncestor(target);
        // use default if there's no overflowing
        // element or default action is prevented
        if (!overflowing || event.defaultPrevented ||
          isNodeName(activeElement, "embed") ||
          (isNodeName(target, "embed") && /\.pdf/i.test(target.src))) {
          return true;
        }
        var deltaX = event.wheelDeltaX || 0;
        var deltaY = event.wheelDeltaY || 0;
        // use wheelDelta if deltaX/Y is not available
        if (!deltaX && !deltaY) {
          deltaY = event.wheelDelta || 0;
        }
        // check if it's a touchpad scroll that should be ignored
        if (!options.touchpadSupport && isTouchpad(deltaY)) {
          return true;
        }
        // scale by step size
        // delta is 120 most of the time
        // synaptics seems to send 1 sometimes
        if (Math.abs(deltaX) > 1.2) {
          deltaX *= options.stepSize / 120;
        }
        if (Math.abs(deltaY) > 1.2) {
          deltaY *= options.stepSize / 120;
        }
        scrollArray(overflowing, -deltaX, -deltaY);
        event.preventDefault();
      }
      /**
       * Keydown event handler.
       * @param {Object} event
       */
      function keydown(event) {
        var target = event.target;
        var modifier = event.ctrlKey || event.altKey || event.metaKey ||
          (event.shiftKey && event.keyCode !== key.spacebar);
        // do nothing if user is editing text
        // or using a modifier key (except shift)
        // or in a dropdown
        if (/input|textarea|select|embed/i.test(target.nodeName) ||
          target.isContentEditable ||
          event.defaultPrevented ||
          modifier) {
          return true;
        }
        // spacebar should trigger button press
        if (isNodeName(target, "button") &&
          event.keyCode === key.spacebar) {
          return true;
        }
        var shift, x = 0,
          y = 0;
        var elem = overflowingAncestor(activeElement);
        var clientHeight = elem.clientHeight;
        if (elem == document.body) {
          clientHeight = window.innerHeight;
        }
        switch (event.keyCode) {
          case key.up:
            y = -options.arrowScroll;
            break;
          case key.down:
            y = options.arrowScroll;
            break;
          case key.spacebar: // (+ shift)
            shift = event.shiftKey ? 1 : -1;
            y = -shift * clientHeight * 0.9;
            break;
          case key.pageup:
            y = -clientHeight * 0.9;
            break;
          case key.pagedown:
            y = clientHeight * 0.9;
            break;
          case key.home:
            y = -elem.scrollTop;
            break;
          case key.end:
            var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
            y = (damt > 0) ? damt + 10 : 0;
            break;
          case key.left:
            x = -options.arrowScroll;
            break;
          case key.right:
            x = options.arrowScroll;
            break;
          default:
            return true; // a key we don't care about
        }
        scrollArray(elem, x, y);
        event.preventDefault();
      }
      /**
       * Mousedown event only for updating activeElement
       */
      function mousedown(event) {
        activeElement = event.target;
      }
      /***********************************************
       * OVERFLOW
       ***********************************************/
      var cache = {}; // cleared out every once in while
      setInterval(function() {
        cache = {};
      }, 10 * 1000);
      var uniqueID = (function() {
        var i = 0;
        return function(el) {
          return el.uniqueID || (el.uniqueID = i++);
        };
      })();

      function setCache(elems, overflowing) {
        for (var i = elems.length; i--;)
          cache[uniqueID(elems[i])] = overflowing;
        return overflowing;
      }

      function overflowingAncestor(el) {
        var elems = [];
        var rootScrollHeight = root.scrollHeight;
        do {
          var cached = cache[uniqueID(el)];
          if (cached) {
            return setCache(elems, cached);
          }
          elems.push(el);
          if (rootScrollHeight === el.scrollHeight) {
            if (!isFrame || root.clientHeight + 10 < rootScrollHeight) {
              return setCache(elems, document.body); // scrolling root in WebKit
            }
          } else if (el.clientHeight + 10 < el.scrollHeight) {
            overflow = getComputedStyle(el, "").getPropertyValue("overflow-y");
            if (overflow === "scroll" || overflow === "auto") {
              return setCache(elems, el);
            }
          }
        } while (el = el.parentNode);
      }
      /***********************************************
       * HELPERS
       ***********************************************/
      function addEvent(type, fn, bubble) {
        window.addEventListener(type, fn, (bubble || false));
      }

      function removeEvent(type, fn, bubble) {
        window.removeEventListener(type, fn, (bubble || false));
      }

      function isNodeName(el, tag) {
        return (el.nodeName || "").toLowerCase() === tag.toLowerCase();
      }

      function directionCheck(x, y) {
        x = (x > 0) ? 1 : -1;
        y = (y > 0) ? 1 : -1;
        if (direction.x !== x || direction.y !== y) {
          direction.x = x;
          direction.y = y;
          que = [];
          lastScroll = 0;
        }
      }
      var deltaBufferTimer;

      function isTouchpad(deltaY) {
        if (!deltaY) return;
        deltaY = Math.abs(deltaY)
        deltaBuffer.push(deltaY);
        deltaBuffer.shift();
        clearTimeout(deltaBufferTimer);
        var allEquals = (deltaBuffer[0] == deltaBuffer[1] &&
          deltaBuffer[1] == deltaBuffer[2]);
        var allDivisable = (isDivisible(deltaBuffer[0], 120) &&
          isDivisible(deltaBuffer[1], 120) &&
          isDivisible(deltaBuffer[2], 120));
        return !(allEquals || allDivisable);
      }

      function isDivisible(n, divisor) {
        return (Math.floor(n / divisor) == n / divisor);
      }
      var requestFrame = (function() {
        return window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          function(callback, element, delay) {
            window.setTimeout(callback, delay || (1000 / 60));
          };
      })();
      var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
      /***********************************************
       * PULSE
       ***********************************************/
      /**
       * Viscous fluid with a pulse for part and decay for the rest.
       * - Applies a fixed force over an interval (a damped acceleration), and
       * - Lets the exponential bleed away the velocity over a longer interval
       * - Michael Herf, http://stereopsis.com/stopping/
       */
      function pulse_(x) {
        var val, start, expx;
        // test
        x = x * options.pulseScale;
        if (x < 1) { // acceleartion
          val = x - (1 - Math.exp(-x));
        } else { // tail
          // the previous animation ended here:
          start = Math.exp(-1);
          // simple viscous drag
          x -= 1;
          expx = 1 - Math.exp(-x);
          val = start + (expx * (1 - start));
        }
        return val * options.pulseNormalize;
      }

      function pulse(x) {
        if (x >= 1) return 1;
        if (x <= 0) return 0;
        if (options.pulseNormalize == 1) {
          options.pulseNormalize /= pulse_(1);
        }
        return pulse_(x);
      }
      addEvent("mousedown", mousedown);
      addEvent("mousewheel", wheel);
      addEvent("load", init);
    }
  });
})(jQuery);
/*
 * MIXITUP - A CSS3 and JQuery Filter & Sort Plugin
 * Version: 1.5.5
 * License: Creative Commons Attribution-NoDerivs 3.0 Unported - CC BY-ND 3.0
 * http://creativecommons.org/licenses/by-nd/3.0/
 * This software may be used freely on commercial and non-commercial projects with attribution to the author/copyright holder.
 * Author: Patrick Kunka
 * Copyright 2012-2013 Patrick Kunka, Barrel LLC, All Rights Reserved
 *
 * http://mixitup.io
 */
(function(d) {
  function r(e, c, l, b, a) {
    function f() {
      n.unbind("webkitTransitionEnd transitionend otransitionend oTransitionEnd");
      c && x(c, l, b, a);
      a.startOrder = [];
      a.newOrder = [];
      a.origSort = [];
      a.checkSort = [];
      v.removeStyle(a.prefix + "filter, filter, " + a.prefix + "transform, transform, opacity, display").css(a.clean).removeAttr("data-checksum");
      window.atob || v.css({
        display: "none",
        opacity: "0"
      });
      n.removeStyle(a.prefix + "transition, transition, " + a.prefix + "perspective, perspective, " + a.prefix + "perspective-origin, perspective-origin, " +
        (a.resizeContainer ? "height" : ""));
      "list" == a.layoutMode ? (p.css({
        display: a.targetDisplayList,
        opacity: "1"
      }), a.origDisplay = a.targetDisplayList) : (p.css({
        display: a.targetDisplayGrid,
        opacity: "1"
      }), a.origDisplay = a.targetDisplayGrid);
      a.origLayout = a.layoutMode;
      setTimeout(function() {
        v.removeStyle(a.prefix + "transition, transition");
        a.mixing = !1;
        if ("function" == typeof a.onMixEnd) {
          var b = a.onMixEnd.call(this, a);
          a = b ? b : a
        }
      })
    }
    clearInterval(a.failsafe);
    a.mixing = !0;
    a.filter = e;
    if ("function" == typeof a.onMixStart) {
      var g = a.onMixStart.call(this,
        a);
      a = g ? g : a
    }
    for (var k = a.transitionSpeed, g = 0; 2 > g; g++) {
      var h = 0 == g ? h = a.prefix : "";
      a.transition[h + "transition"] = "all " + k + "ms linear";
      a.transition[h + "transform"] = h + "translate3d(0,0,0)";
      a.perspective[h + "perspective"] = a.perspectiveDistance + "px";
      a.perspective[h + "perspective-origin"] = a.perspectiveOrigin
    }
    var w = a.targetSelector,
      v = b.find(w);
    v.each(function() {
      this.data = {}
    });
    var n = v.parent();
    n.css(a.perspective);
    a.easingFallback = "ease-in-out";
    "smooth" == a.easing && (a.easing = "cubic-bezier(0.25, 0.46, 0.45, 0.94)");
    "snap" == a.easing && (a.easing = "cubic-bezier(0.77, 0, 0.175, 1)");
    "windback" == a.easing && (a.easing = "cubic-bezier(0.175, 0.885, 0.320, 1.275)", a.easingFallback = "cubic-bezier(0.175, 0.885, 0.320, 1)");
    "windup" == a.easing && (a.easing = "cubic-bezier(0.6, -0.28, 0.735, 0.045)", a.easingFallback = "cubic-bezier(0.6, 0.28, 0.735, 0.045)");
    g = "list" == a.layoutMode && null != a.listEffects ? a.listEffects : a.effects;
    Array.prototype.indexOf && (a.fade = -1 < g.indexOf("fade") ? "0" : "", a.scale = -1 < g.indexOf("scale") ? "scale(.01)" : "", a.rotateZ = -1 < g.indexOf("rotateZ") ? "rotate(180deg)" : "", a.rotateY = -1 < g.indexOf("rotateY") ? "rotateY(90deg)" : "", a.rotateX = -1 < g.indexOf("rotateX") ? "rotateX(90deg)" : "", a.blur = -1 < g.indexOf("blur") ? "blur(8px)" : "", a.grayscale = -1 < g.indexOf("grayscale") ? "grayscale(100%)" : "");
    var p = d(),
      s = d(),
      t = [],
      r = !1;
    "string" === typeof e ? t = z(e) : (r = !0, d.each(e, function(a) {
      t[a] = z(this)
    }));
    "or" == a.filterLogic ? ("" == t[0] && t.shift(), 1 > t.length ? s = s.add(b.find(w + ":visible")) : v.each(function() {
      var a = d(this);
      if (r) {
        var b = 0;
        d.each(t, function(d) {
          this.length ?
            a.is("." + this.join(", .")) && b++ : 0 < b && b++
        });
        b == t.length ? p = p.add(a) : s = s.add(a)
      } else a.is("." + t.join(", .")) ? p = p.add(a) : s = s.add(a)
    })) : (p = p.add(n.find(w + "." + t.join("."))), s = s.add(n.find(w + ":not(." + t.join(".") + "):visible")));
    e = p.length;
    var u = d(),
      q = d(),
      m = d();
    s.each(function() {
      var a = d(this);
      "none" != a.css("display") && (u = u.add(a), m = m.add(a))
    });
    if (p.filter(":visible").length == e && !u.length && !c) {
      if (a.origLayout == a.layoutMode) return f(), !1;
      if (1 == p.length) return "list" == a.layoutMode ? (b.addClass(a.listClass), b.removeClass(a.gridClass),
        m.css("display", a.targetDisplayList)) : (b.addClass(a.gridClass), b.removeClass(a.listClass), m.css("display", a.targetDisplayGrid)), f(), !1
    }
    a.origHeight = n.height();
    if (p.length) {
      b.removeClass(a.failClass);
      p.each(function() {
        var a = d(this);
        "none" == a.css("display") ? q = q.add(a) : m = m.add(a)
      });
      if (a.origLayout != a.layoutMode && !1 == a.animateGridList) return "list" == a.layoutMode ? (b.addClass(a.listClass), b.removeClass(a.gridClass), m.css("display", a.targetDisplayList)) : (b.addClass(a.gridClass), b.removeClass(a.listClass),
        m.css("display", a.targetDisplayGrid)), f(), !1;
      if (!window.atob) return f(), !1;
      v.css(a.clean);
      m.each(function() {
        this.data.origPos = d(this).offset()
      });
      "list" == a.layoutMode ? (b.addClass(a.listClass), b.removeClass(a.gridClass), q.css("display", a.targetDisplayList)) : (b.addClass(a.gridClass), b.removeClass(a.listClass), q.css("display", a.targetDisplayGrid));
      q.each(function() {
        this.data.showInterPos = d(this).offset()
      });
      u.each(function() {
        this.data.hideInterPos = d(this).offset()
      });
      m.each(function() {
        this.data.preInterPos =
          d(this).offset()
      });
      "list" == a.layoutMode ? m.css("display", a.targetDisplayList) : m.css("display", a.targetDisplayGrid);
      c && x(c, l, b, a);
      if (c && A(a.origSort, a.checkSort)) return f(), !1;
      u.hide();
      q.each(function(a) {
        this.data.finalPos = d(this).offset()
      });
      m.each(function() {
        this.data.finalPrePos = d(this).offset()
      });
      a.newHeight = n.height();
      c && x("reset", null, b, a);
      q.hide();
      m.css("display", a.origDisplay);
      "block" == a.origDisplay ? (b.addClass(a.listClass), q.css("display", a.targetDisplayList)) : (b.removeClass(a.listClass), q.css("display",
        a.targetDisplayGrid));
      a.resizeContainer && n.css("height", a.origHeight + "px");
      e = {};
      for (g = 0; 2 > g; g++) h = 0 == g ? h = a.prefix : "", e[h + "transform"] = a.scale + " " + a.rotateX + " " + a.rotateY + " " + a.rotateZ, e[h + "filter"] = a.blur + " " + a.grayscale;
      q.css(e);
      m.each(function() {
        var b = this.data,
          c = d(this);
        c.hasClass("mix_tohide") ? (b.preTX = b.origPos.left - b.hideInterPos.left, b.preTY = b.origPos.top - b.hideInterPos.top) : (b.preTX = b.origPos.left - b.preInterPos.left, b.preTY = b.origPos.top - b.preInterPos.top);
        for (var e = {}, k = 0; 2 > k; k++) {
          var h =
            0 == k ? h = a.prefix : "";
          e[h + "transform"] = "translate(" + b.preTX + "px," + b.preTY + "px)"
        }
        c.css(e)
      });
      "list" == a.layoutMode ? (b.addClass(a.listClass), b.removeClass(a.gridClass)) : (b.addClass(a.gridClass), b.removeClass(a.listClass));
      setTimeout(function() {
        if (a.resizeContainer) {
          for (var b = {}, c = 0; 2 > c; c++) {
            var e = 0 == c ? e = a.prefix : "";
            b[e + "transition"] = "all " + k + "ms ease-in-out";
            b.height = a.newHeight + "px"
          }
          n.css(b)
        }
        u.css("opacity", a.fade);
        q.css("opacity", 1);
        q.each(function() {
          var b = this.data;
          b.tX = b.finalPos.left - b.showInterPos.left;
          b.tY = b.finalPos.top - b.showInterPos.top;
          for (var c = {}, e = 0; 2 > e; e++) {
            var h = 0 == e ? h = a.prefix : "";
            c[h + "transition-property"] = h + "transform, " + h + "filter, opacity";
            c[h + "transition-timing-function"] = a.easing + ", linear, linear";
            c[h + "transition-duration"] = k + "ms";
            c[h + "transition-delay"] = "0";
            c[h + "transform"] = "translate(" + b.tX + "px," + b.tY + "px)";
            c[h + "filter"] = "none"
          }
          d(this).css("-webkit-transition", "all " + k + "ms " + a.easingFallback).css(c)
        });
        m.each(function() {
          var b = this.data;
          b.tX = 0 != b.finalPrePos.left ? b.finalPrePos.left -
            b.preInterPos.left : 0;
          b.tY = 0 != b.finalPrePos.left ? b.finalPrePos.top - b.preInterPos.top : 0;
          for (var c = {}, e = 0; 2 > e; e++) {
            var h = 0 == e ? h = a.prefix : "";
            c[h + "transition"] = "all " + k + "ms " + a.easing;
            c[h + "transform"] = "translate(" + b.tX + "px," + b.tY + "px)"
          }
          d(this).css("-webkit-transition", "all " + k + "ms " + a.easingFallback).css(c)
        });
        b = {};
        for (c = 0; 2 > c; c++) e = 0 == c ? e = a.prefix : "", b[e + "transition"] = "all " + k + "ms " + a.easing + ", " + e + "filter " + k + "ms linear, opacity " + k + "ms linear", b[e + "transform"] = a.scale + " " + a.rotateX + " " + a.rotateY + " " +
          a.rotateZ, b[e + "filter"] = a.blur + " " + a.grayscale, b.opacity = a.fade;
        u.css(b);
        n.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd", function(a) {
          if (-1 < a.originalEvent.propertyName.indexOf("transform") || -1 < a.originalEvent.propertyName.indexOf("opacity")) - 1 < w.indexOf(".") ? d(a.target).hasClass(w.replace(".", "")) && f() : d(a.target).is(w) && f()
        })
      }, 10);
      a.failsafe = setTimeout(function() {
        a.mixing && f()
      }, k + 400)
    } else {
      a.resizeContainer && n.css("height", a.origHeight + "px");
      if (!window.atob) return f(), !1;
      u = s;
      setTimeout(function() {
        n.css(a.perspective);
        if (a.resizeContainer) {
          for (var c = {}, e = 0; 2 > e; e++) {
            var d = 0 == e ? d = a.prefix : "";
            c[d + "transition"] = "height " + k + "ms ease-in-out";
            c.height = a.minHeight + "px"
          }
          n.css(c)
        }
        v.css(a.transition);
        if (s.length) {
          c = {};
          for (e = 0; 2 > e; e++) d = 0 == e ? d = a.prefix : "", c[d + "transform"] = a.scale + " " + a.rotateX + " " + a.rotateY + " " + a.rotateZ, c[d + "filter"] = a.blur + " " + a.grayscale, c.opacity = a.fade;
          u.css(c);
          n.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd", function(c) {
            if (-1 < c.originalEvent.propertyName.indexOf("transform") ||
              -1 < c.originalEvent.propertyName.indexOf("opacity")) b.addClass(a.failClass), f()
          })
        } else a.mixing = !1
      }, 10)
    }
  }

  function x(e, c, l, b) {
    function a(a, b) {
      var c = isNaN(1 * a.attr(e)) ? a.attr(e).toLowerCase() : 1 * a.attr(e),
        d = isNaN(1 * b.attr(e)) ? b.attr(e).toLowerCase() : 1 * b.attr(e);
      return c < d ? -1 : c > d ? 1 : 0
    }

    function f(a) {
      "asc" == c ? k.prepend(a).prepend(" ") : k.append(a).append(" ")
    }

    function g(a) {
      a = a.slice();
      for (var b = a.length, c = b; c--;) {
        var e = parseInt(Math.random() * b),
          d = a[c];
        a[c] = a[e];
        a[e] = d
      }
      return a
    }
    l.find(b.targetSelector).wrapAll('<div class="mix_sorter"/>');
    var k = l.find(".mix_sorter");
    b.origSort.length || k.find(b.targetSelector + ":visible").each(function() {
      d(this).wrap("<s/>");
      b.origSort.push(d(this).parent().html().replace(/\s+/g, ""));
      d(this).unwrap()
    });
    k.empty();
    if ("reset" == e) d.each(b.startOrder, function() {
      k.append(this).append(" ")
    });
    else if ("default" == e) d.each(b.origOrder, function() {
      f(this)
    });
    else if ("random" == e) b.newOrder.length || (b.newOrder = g(b.startOrder)), d.each(b.newOrder, function() {
      k.append(this).append(" ")
    });
    else if ("custom" == e) d.each(c, function() {
      f(this)
    });
    else {
      if ("undefined" === typeof b.origOrder[0].attr(e)) return console.log("No such attribute found. Terminating"), !1;
      b.newOrder.length || (d.each(b.origOrder, function() {
        b.newOrder.push(d(this))
      }), b.newOrder.sort(a));
      d.each(b.newOrder, function() {
        f(this)
      })
    }
    b.checkSort = [];
    k.find(b.targetSelector + ":visible").each(function(a) {
      var c = d(this);
      0 == a && c.attr("data-checksum", "1");
      c.wrap("<s/>");
      b.checkSort.push(c.parent().html().replace(/\s+/g, ""));
      c.unwrap()
    });
    l.find(b.targetSelector).unwrap()
  }

  function B(e) {
    for (var c = ["Webkit", "Moz", "O", "ms"], d = 0; d < c.length; d++)
      if (c[d] + "Transition" in e.style) return c[d];
    return "transition" in e.style ? "" : !1
  }

  function A(e, c) {
    if (e.length != c.length) return !1;
    for (var d = 0; d < c.length; d++)
      if (e[d].compare && !e[d].compare(c[d]) || e[d] !== c[d]) return !1;
    return !0
  }

  function z(e) {
    e = e.replace(/\s{2,}/g, " ");
    var c = e.split(" ");
    d.each(c, function(d) {
      "all" == this && (c[d] = "mix_all")
    });
    "" == c[0] && c.shift();
    return c
  }
  var y = {
    init: function(e) {
      return this.each(function() {
        var c = window.navigator.appVersion.match(/Chrome\/(\d+)\./),
          c = c ? parseInt(c[1], 10) : !1,
          l = function(a) {
            a = document.getElementById(a);
            var b = a.parentElement,
              c = document.createElement("div"),
              d = document.createDocumentFragment();
            b.insertBefore(c, a);
            d.appendChild(a);
            b.replaceChild(a, c)
          };
        (c && 31 == c || 32 == c) && l(this.id);
        var b = {
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
        e && d.extend(b, e);
        this.config = b;
        d.support.touch = "ontouchend" in document;
        d.support.touch && (b.isTouch = !0, b.resetDelay = 350);
        b.container = d(this);
        var a = b.container;
        b.prefix = B(a[0]);
        b.prefix = b.prefix ? "-" + b.prefix.toLowerCase() + "-" : "";
        a.find(b.targetSelector).each(function() {
          b.origOrder.push(d(this))
        });
        if (b.sortOnLoad) {
          var f;
          d.isArray(b.sortOnLoad) ? (c = b.sortOnLoad[0], f = b.sortOnLoad[1], d(b.sortSelector + "[data-sort=" + b.sortOnLoad[0] +
            "][data-order=" + b.sortOnLoad[1] + "]").addClass("active")) : (d(b.sortSelector + "[data-sort=" + b.sortOnLoad + "]").addClass("active"), c = b.sortOnLoad, b.sortOnLoad = "desc");
          x(c, f, a, b)
        }
        for (f = 0; 2 > f; f++) c = 0 == f ? c = b.prefix : "", b.transition[c + "transition"] = "all " + b.transitionSpeed + "ms ease-in-out", b.perspective[c + "perspective"] = b.perspectiveDistance + "px", b.perspective[c + "perspective-origin"] = b.perspectiveOrigin;
        for (f = 0; 2 > f; f++) c = 0 == f ? c = b.prefix : "", b.clean[c + "transition"] = "none";
        "list" == b.layoutMode ? (a.addClass(b.listClass),
          b.origDisplay = b.targetDisplayList) : (a.addClass(b.gridClass), b.origDisplay = b.targetDisplayGrid);
        b.origLayout = b.layoutMode;
        f = b.showOnLoad.split(" ");
        d.each(f, function() {
          d(b.filterSelector + '[data-filter="' + this + '"]').addClass("active")
        });
        a.find(b.targetSelector).addClass("mix_all");
        "all" == f[0] && (f[0] = "mix_all", b.showOnLoad = "mix_all");
        var g = d();
        d.each(f, function() {
          g = g.add(d("." + this))
        });
        g.each(function() {
          var a = d(this);
          "list" == b.layoutMode ? a.css("display", b.targetDisplayList) : a.css("display", b.targetDisplayGrid);
          a.css(b.transition)
        });
        setTimeout(function() {
          b.mixing = !0;
          g.css("opacity", "1");
          setTimeout(function() {
            "list" == b.layoutMode ? g.removeStyle(b.prefix + "transition, transition").css({
              display: b.targetDisplayList,
              opacity: 1
            }) : g.removeStyle(b.prefix + "transition, transition").css({
              display: b.targetDisplayGrid,
              opacity: 1
            });
            b.mixing = !1;
            if ("function" == typeof b.onMixLoad) {
              var a = b.onMixLoad.call(this, b);
              b = a ? a : b
            }
          }, b.transitionSpeed)
        }, 10);
        b.filter = b.showOnLoad;
        d(b.sortSelector).bind(b.buttonEvent, function() {
          if (!b.mixing) {
            var c =
              d(this),
              e = c.attr("data-sort"),
              f = c.attr("data-order");
            if (!c.hasClass("active")) d(b.sortSelector).removeClass("active"), c.addClass("active");
            else if ("random" != e) return !1;
            a.find(b.targetSelector).each(function() {
              b.startOrder.push(d(this))
            });
            r(b.filter, e, f, a, b)
          }
        });
        d(b.filterSelector).bind(b.buttonEvent, function() {
          if (!b.mixing) {
            var c = d(this);
            if (!1 == b.multiFilter) d(b.filterSelector).removeClass("active"), c.addClass("active"), b.filter = c.attr("data-filter"), d(b.filterSelector + '[data-filter="' + b.filter + '"]').addClass("active");
            else {
              var e = c.attr("data-filter");
              c.hasClass("active") ? (c.removeClass("active"), b.filter = b.filter.replace(RegExp("(\\s|^)" + e), "")) : (c.addClass("active"), b.filter = b.filter + " " + e)
            }
            r(b.filter, null, null, a, b)
          }
        })
      })
    },
    toGrid: function() {
      return this.each(function() {
        var e = this.config;
        "grid" != e.layoutMode && (e.layoutMode = "grid", r(e.filter, null, null, d(this), e))
      })
    },
    toList: function() {
      return this.each(function() {
        var e = this.config;
        "list" != e.layoutMode && (e.layoutMode = "list", r(e.filter, null, null, d(this), e))
      })
    },
    filter: function(e) {
      return this.each(function() {
        var c =
          this.config;
        c.mixing || (d(c.filterSelector).removeClass("active"), d(c.filterSelector + '[data-filter="' + e + '"]').addClass("active"), r(e, null, null, d(this), c))
      })
    },
    sort: function(e) {
      return this.each(function() {
        var c = this.config,
          l = d(this);
        if (!c.mixing) {
          d(c.sortSelector).removeClass("active");
          if (d.isArray(e)) {
            var b = e[0],
              a = e[1];
            d(c.sortSelector + '[data-sort="' + e[0] + '"][data-order="' + e[1] + '"]').addClass("active")
          } else d(c.sortSelector + '[data-sort="' + e + '"]').addClass("active"), b = e, a = "desc";
          l.find(c.targetSelector).each(function() {
            c.startOrder.push(d(this))
          });
          r(c.filter, b, a, l, c)
        }
      })
    },
    multimix: function(e) {
      return this.each(function() {
        var c = this.config,
          l = d(this);
        multiOut = {
          filter: c.filter,
          sort: null,
          order: "desc",
          layoutMode: c.layoutMode
        };
        d.extend(multiOut, e);
        c.mixing || (d(c.filterSelector).add(c.sortSelector).removeClass("active"), d(c.filterSelector + '[data-filter="' + multiOut.filter + '"]').addClass("active"), "undefined" !== typeof multiOut.sort && (d(c.sortSelector + '[data-sort="' + multiOut.sort + '"][data-order="' + multiOut.order + '"]').addClass("active"), l.find(c.targetSelector).each(function() {
            c.startOrder.push(d(this))
          })),
          c.layoutMode = multiOut.layoutMode, r(multiOut.filter, multiOut.sort, multiOut.order, l, c))
      })
    },
    remix: function(e) {
      return this.each(function() {
        var c = this.config,
          l = d(this);
        c.origOrder = [];
        l.find(c.targetSelector).each(function() {
          var b = d(this);
          b.addClass("mix_all");
          c.origOrder.push(b)
        });
        c.mixing || "undefined" === typeof e || (d(c.filterSelector).removeClass("active"), d(c.filterSelector + '[data-filter="' + e + '"]').addClass("active"), r(e, null, null, l, c))
      })
    }
  };
  d.fn.mixitup = function(d, c) {
    if (y[d]) return y[d].apply(this, Array.prototype.slice.call(arguments,
      1));
    if ("object" === typeof d || !d) return y.init.apply(this, arguments)
  };
  d.fn.removeStyle = function(e) {
    return this.each(function() {
      var c = d(this);
      e = e.replace(/\s+/g, "");
      var l = e.split(",");
      d.each(l, function() {
        var b = RegExp(this.toString() + "[^;]+;?", "g");
        c.attr("style", function(a, c) {
          if (c) return c.replace(b, "")
        })
      })
    })
  }
})(jQuery);
/**
 * jquery.resizegrid.js v1.0.0
 *
 *
 */
;
(function($, window) {

  'use strict';

  var W = $(window);
  $.Resize = function(options, element) {
    this.el = $(element);
    this.init(options);
  };

  $.Resize.defaults = {
    speed: 300,
    gutter: 2,
    cursorcolor: "#ff8b84"
  };
  $.Resize.prototype = {
    init: function(options) {
      this.o = $.extend({}, $.Resize.defaults, options);

      var self = this;
      this.resize(self);

    },
    resize: function(self) {

      self.refreshElements();
      if (W.width() > 767) {
        self.el.getNiceScroll().show();
        self.niceScroll();
        self.layout();
      } else {
        self.el.getNiceScroll().hide();
        self.el.children('.grid').attr('style', '');
        self.items.each(function() {
          $(this).attr('style', '');
        });
        self.box.each(function() {
          $(this).attr('style', '');
        });
      }

      W.on('resize', function() {
        if (W.width() > 767) {
          self.layout();
        }
      });

    },
    layout: function() {
      var self = this;

      this.el.css({
        height: self._screenAdjust()
      });

      this._elemWH(this.box, this.items, self);

    },
    elements: {
      '.gr-box': 'box',
      '.item': 'items'
    },
    $: function(selector) {
      return $(selector, this.el);
    },
    refreshElements: function() {
      for (var key in this.elements) {
        this[this.elements[key]] = this.$(key);
      }
    },
    _elemWH: function(box, items, self) {
      if (self.o.gutter) {
        $(items).css({
          margin: self.o.gutter
        });
      }

      function adjustItem(item, hasclass) {

        switch (hasclass) {
          case 'half':
            $(item).css({
              width: self._screenAdjust() / 2 - (self.o.gutter * 2),
              height: self._screenAdjust() / 2 - (self.o.gutter * 2)
            });
            break;
          case 'large':
            $(item).css({
              width: self._screenAdjust() - (self.o.gutter * 2),
              height: self._screenAdjust() / 2 - (self.o.gutter * 2)
            })
            break;
          case 'fullheight':
            $(item).css({
              width: self._screenAdjust() / 2 - (self.o.gutter * 2),
              height: self._screenAdjust() - (self.o.gutter * 2)
            })
            break;
          case 'full':
            $(item).css({
              width: self._screenAdjust() - (self.o.gutter * 2),
              height: self._screenAdjust() - (self.o.gutter * 2)
            })
            break;
          default:
            return;
            break;
        }

      }

      $(box).each(function(i, val) {

        var countElements = $(box).length;
        $(val).css({
          width: self._screenAdjust()
        });
        self.el.children().css({
          width: countElements * $(val).outerWidth(true) + (self.o.gutter * 2)
        });

      });
      $(items).each(function(index, value) {
        if ($(value).hasClass('half')) {
          adjustItem(value, 'half');
        }
        if ($(value).hasClass('large')) {
          adjustItem(value, 'large');
        }
        if ($(value).hasClass('full')) {
          adjustItem(value, 'full');
        }
        if ($(value).hasClass('fullheight')) {
          adjustItem(value, 'fullheight');
        }
      });

    },
    niceScroll: function() {

      this.el.niceScroll({
        cursorcolor: this.o.cursorcolor,
        cursorwidth: "12px",
        cursorborder: "none",
        cursorborderradius: "0",
        cursoropacitymin: "1",
        vertrailenabled: false,
        background: "#fff",
        zindex: 6000,
        railpadding: {
          top: "30px"
        }
      }).rail.css({
        'height': ' 12px'
      });
    },
    _screenAdjust: function() {
      return W.outerHeight(true) - this.el.position().top - $('#footer').outerHeight(true) - 51;
    }
  };

  $.fn.resizeGrid = function(options) {
    var instance = $.data(this, 'resize', new $.Resize(options, this));
    return instance;
  };
})(jQuery, window);
/*! Magnific Popup - v0.9.9 - 2013-12-27
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2013 Dmitry Semenov; */
(function(e) {
  var t, n, i, o, r, a, s, l = "Close",
    c = "BeforeClose",
    d = "AfterClose",
    u = "BeforeAppend",
    p = "MarkupParse",
    f = "Open",
    m = "Change",
    g = "mfp",
    h = "." + g,
    v = "mfp-ready",
    C = "mfp-removing",
    y = "mfp-prevent-close",
    w = function() {},
    b = !!window.jQuery,
    I = e(window),
    x = function(e, n) {
      t.ev.on(g + e + h, n)
    },
    k = function(t, n, i, o) {
      var r = document.createElement("div");
      return r.className = "mfp-" + t, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r
    },
    T = function(n, i) {
      t.ev.triggerHandler(g + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
    },
    E = function(n) {
      return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn
    },
    _ = function() {
      e.magnificPopup.instance || (t = new w, t.init(), e.magnificPopup.instance = t)
    },
    S = function() {
      var e = document.createElement("p").style,
        t = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== e.transition) return !0;
      for (; t.length;)
        if (t.pop() + "Transition" in e) return !0;
      return !1
    };
  w.prototype = {
    constructor: w,
    init: function() {
      var n = navigator.appVersion;
      t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = S(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = e(document), t.popupsCache = {}
    },
    open: function(n) {
      i || (i = e(document.body));
      var r;
      if (n.isObj === !1) {
        t.items = n.items.toArray(), t.index = 0;
        var s, l = n.items;
        for (r = 0; l.length > r; r++)
          if (s = l[r], s.parsed && (s = s.el[0]), s === n.el[0]) {
            t.index = r;
            break
          }
      } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
      if (t.isOpen) return t.updateItemHTML(), void 0;
      t.types = [], a = "", t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : o, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = k("bg").on("click" + h, function() {
        t.close()
      }), t.wrap = k("wrap").attr("tabindex", -1).on("click" + h, function(e) {
        t._checkIfClose(e.target) && t.close()
      }), t.container = k("container", t.wrap)), t.contentContainer = k("content"), t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading));
      var c = e.magnificPopup.modules;
      for (r = 0; c.length > r; r++) {
        var d = c[r];
        d = d.charAt(0).toUpperCase() + d.slice(1), t["init" + d].call(t)
      }
      T("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (x(p, function(e, t, n, i) {
        n.close_replaceWith = E(i.type)
      }), a += " mfp-close-btn-in") : t.wrap.append(E())), t.st.alignTop && (a += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
        overflow: t.st.overflowY,
        overflowX: "hidden",
        overflowY: t.st.overflowY
      }) : t.wrap.css({
        top: I.scrollTop(),
        position: "absolute"
      }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
        height: o.height(),
        position: "absolute"
      }), t.st.enableEscapeKey && o.on("keyup" + h, function(e) {
        27 === e.keyCode && t.close()
      }), I.on("resize" + h, function() {
        t.updateSize()
      }), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a);
      var u = t.wH = I.height(),
        m = {};
      if (t.fixedContentPos && t._hasScrollBar(u)) {
        var g = t._getScrollbarSize();
        g && (m.marginRight = g)
      }
      t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : m.overflow = "hidden");
      var C = t.st.mainClass;
      return t.isIE7 && (C += " mfp-ie7"), C && t._addClassToMFP(C), t.updateItemHTML(), T("BuildControls"), e("html").css(m), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || i), t._lastFocusedEl = document.activeElement, setTimeout(function() {
        t.content ? (t._addClassToMFP(v), t._setFocus()) : t.bgOverlay.addClass(v), o.on("focusin" + h, t._onFocusIn)
      }, 16), t.isOpen = !0, t.updateSize(u), T(f), n
    },
    close: function() {
      t.isOpen && (T(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(C), setTimeout(function() {
        t._close()
      }, t.st.removalDelay)) : t._close())
    },
    _close: function() {
      T(l);
      var n = C + " " + v + " ";
      if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
        var i = {
          marginRight: ""
        };
        t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "", e("html").css(i)
      }
      o.off("keyup" + h + " focusin" + h), t.ev.off(h), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, T(d)
    },
    updateSize: function(e) {
      if (t.isIOS) {
        var n = document.documentElement.clientWidth / window.innerWidth,
          i = window.innerHeight * n;
        t.wrap.css("height", i), t.wH = i
      } else t.wH = e || I.height();
      t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize")
    },
    updateItemHTML: function() {
      var n = t.items[t.index];
      t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
      var i = n.type;
      if (T("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
        var o = t.st[i] ? t.st[i].markup : !1;
        T("FirstMarkupParse", o), t.currTemplate[i] = o ? e(o) : !0
      }
      r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
      var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
      t.appendContent(a, i), n.preloaded = !0, T(m, n), r = n.type, t.container.prepend(t.contentContainer), T("AfterChange")
    },
    appendContent: function(e, n) {
      t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(E()) : t.content = e : t.content = "", T(u), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
    },
    parseEl: function(n) {
      var i, o = t.items[n];
      if (o.tagName ? o = {
          el: e(o)
        } : (i = o.type, o = {
          data: o,
          src: o.src
        }), o.el) {
        for (var r = t.types, a = 0; r.length > a; a++)
          if (o.el.hasClass("mfp-" + r[a])) {
            i = r[a];
            break
          }
        o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
      }
      return o.type = i || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o, T("ElementParse", o), t.items[n]
    },
    addGroup: function(e, n) {
      var i = function(i) {
        i.mfpEl = this, t._openClick(i, e, n)
      };
      n || (n = {});
      var o = "click.magnificPopup";
      n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)))
    },
    _openClick: function(n, i, o) {
      var r = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
      if (r || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
        var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
        if (a)
          if (e.isFunction(a)) {
            if (!a.call(t)) return !0
          } else if (a > I.width()) return !0;
        n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o)
      }
    },
    updateStatus: function(e, i) {
      if (t.preloader) {
        n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
        var o = {
          status: e,
          text: i
        };
        T("UpdateStatus", o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find("a").on("click", function(e) {
          e.stopImmediatePropagation()
        }), t.container.addClass("mfp-s-" + e), n = e
      }
    },
    _checkIfClose: function(n) {
      if (!e(n).hasClass(y)) {
        var i = t.st.closeOnContentClick,
          o = t.st.closeOnBgClick;
        if (i && o) return !0;
        if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
        if (n === t.content[0] || e.contains(t.content[0], n)) {
          if (i) return !0
        } else if (o && e.contains(document, n)) return !0;
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
      return (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || I.height())
    },
    _setFocus: function() {
      (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
    },
    _onFocusIn: function(n) {
      return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
    },
    _parseMarkup: function(t, n, i) {
      var o;
      i.data && (n = e.extend(i.data, n)), T(p, [t, n, i]), e.each(n, function(e, n) {
        if (void 0 === n || n === !1) return !0;
        if (o = e.split("_"), o.length > 1) {
          var i = t.find(h + "-" + o[0]);
          if (i.length > 0) {
            var r = o[1];
            "replaceWith" === r ? i[0] !== n[0] && i.replaceWith(n) : "img" === r ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(o[1], n)
          }
        } else t.find(h + "-" + e).html(n)
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
    proto: w.prototype,
    modules: [],
    open: function(t, n) {
      return _(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
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
    _();
    var i = e(this);
    if ("string" == typeof n)
      if ("open" === n) {
        var o, r = b ? i.data("magnificPopup") : i[0].magnificPopup,
          a = parseInt(arguments[1], 10) || 0;
        r.items ? o = r.items[a] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(a)), t._openClick({
          mfpEl: o
        }, i, r)
      } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
    else n = e.extend(!0, {}, n), b ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
    return i
  };
  var P, O, z, M = "inline",
    B = function() {
      z && (O.after(z.addClass(P)).detach(), z = null)
    };
  e.magnificPopup.registerModule(M, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    },
    proto: {
      initInline: function() {
        t.types.push(M), x(l + "." + M, function() {
          B()
        })
      },
      getInline: function(n, i) {
        if (B(), n.src) {
          var o = t.st.inline,
            r = e(n.src);
          if (r.length) {
            var a = r[0].parentNode;
            a && a.tagName && (O || (P = o.hiddenClass, O = k(P), P = "mfp-" + P), z = r.after(O).detach().removeClass(P)), t.updateStatus("ready")
          } else t.updateStatus("error", o.tNotFound), r = e("<div>");
          return n.inlineElement = r, r
        }
        return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i
      }
    }
  });
  var F, H = "ajax",
    L = function() {
      F && i.removeClass(F)
    },
    A = function() {
      L(), t.req && t.req.abort()
    };
  e.magnificPopup.registerModule(H, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function() {
        t.types.push(H), F = t.st.ajax.cursor, x(l + "." + H, A), x("BeforeChange." + H, A)
      },
      getAjax: function(n) {
        F && i.addClass(F), t.updateStatus("loading");
        var o = e.extend({
          url: n.src,
          success: function(i, o, r) {
            var a = {
              data: i,
              xhr: r
            };
            T("ParseAjax", a), t.appendContent(e(a.data), H), n.finished = !0, L(), t._setFocus(), setTimeout(function() {
              t.wrap.addClass(v)
            }, 16), t.updateStatus("ready"), T("AjaxContentAdded")
          },
          error: function() {
            L(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
          }
        }, t.st.ajax.settings);
        return t.req = e.ajax(o), ""
      }
    }
  });
  var j, N = function(n) {
    if (n.data && void 0 !== n.data.title) return n.data.title;
    var i = t.st.image.titleSrc;
    if (i) {
      if (e.isFunction(i)) return i.call(t, n);
      if (n.el) return n.el.attr(i) || ""
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
        t.types.push("image"), x(f + n, function() {
          "image" === t.currItem.type && e.cursor && i.addClass(e.cursor)
        }), x(l + n, function() {
          e.cursor && i.removeClass(e.cursor), I.off("resize" + h)
        }), x("Resize" + n, t.resizeImage), t.isLowIE && x("AfterChange", t.resizeImage)
      },
      resizeImage: function() {
        var e = t.currItem;
        if (e && e.img && t.st.image.verticalFit) {
          var n = 0;
          t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
        }
      },
      _onImageHasSize: function(e) {
        e.img && (e.hasSize = !0, j && clearInterval(j), e.isCheckingImgSize = !1, T("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
      },
      findImageSize: function(e) {
        var n = 0,
          i = e.img[0],
          o = function(r) {
            j && clearInterval(j), j = setInterval(function() {
              return i.naturalWidth > 0 ? (t._onImageHasSize(e), void 0) : (n > 200 && clearInterval(j), n++, 3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500), void 0)
            }, r)
          };
        o(1)
      },
      getImage: function(n, i) {
        var o = 0,
          r = function() {
            n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, T("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(r, 100) : a()))
          },
          a = function() {
            n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
          },
          s = t.st.image,
          l = i.find(".mfp-img");
        if (l.length) {
          var c = document.createElement("img");
          c.className = "mfp-img", n.img = e(c).on("load.mfploader", r).on("error.mfploader", a), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
        }
        return t._parseMarkup(i, {
          title: N(n),
          img_replaceWith: n.img
        }, n), t.resizeImage(), n.hasSize ? (j && clearInterval(j), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i)
      }
    }
  });
  var W, R = function() {
    return void 0 === W && (W = void 0 !== document.createElement("p").style.MozTransform), W
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
          i = ".zoom";
        if (n.enabled && t.supportsTransition) {
          var o, r, a = n.duration,
            s = function(e) {
              var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                i = "all " + n.duration / 1e3 + "s " + n.easing,
                o = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden"
                },
                r = "transition";
              return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, t.css(o), t
            },
            d = function() {
              t.content.css("visibility", "visible")
            };
          x("BuildControls" + i, function() {
            if (t._allowZoom()) {
              if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return d(), void 0;
              r = s(e), r.css(t._getOffset()), t.wrap.append(r), o = setTimeout(function() {
                r.css(t._getOffset(!0)), o = setTimeout(function() {
                  d(), setTimeout(function() {
                    r.remove(), e = r = null, T("ZoomAnimationEnded")
                  }, 16)
                }, a)
              }, 16)
            }
          }), x(c + i, function() {
            if (t._allowZoom()) {
              if (clearTimeout(o), t.st.removalDelay = a, !e) {
                if (e = t._getItemToZoom(), !e) return;
                r = s(e)
              }
              r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function() {
                r.css(t._getOffset())
              }, 16)
            }
          }), x(l + i, function() {
            t._allowZoom() && (d(), r && r.remove(), e = null)
          })
        }
      },
      _allowZoom: function() {
        return "image" === t.currItem.type
      },
      _getItemToZoom: function() {
        return t.currItem.hasSize ? t.currItem.img : !1
      },
      _getOffset: function(n) {
        var i;
        i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
        var o = i.offset(),
          r = parseInt(i.css("padding-top"), 10),
          a = parseInt(i.css("padding-bottom"), 10);
        o.top -= e(window).scrollTop() - r;
        var s = {
          width: i.width(),
          height: (b ? i.innerHeight() : i[0].offsetHeight) - a - r
        };
        return R() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s
      }
    }
  });
  var Z = "iframe",
    q = "//about:blank",
    D = function(e) {
      if (t.currTemplate[Z]) {
        var n = t.currTemplate[Z].find("iframe");
        n.length && (e || (n[0].src = q), t.isIE8 && n.css("display", e ? "block" : "none"))
      }
    };
  e.magnificPopup.registerModule(Z, {
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
        t.types.push(Z), x("BeforeChange", function(e, t, n) {
          t !== n && (t === Z ? D() : n === Z && D(!0))
        }), x(l + "." + Z, function() {
          D()
        })
      },
      getIframe: function(n, i) {
        var o = n.src,
          r = t.st.iframe;
        e.each(r.patterns, function() {
          return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
        });
        var a = {};
        return r.srcAction && (a[r.srcAction] = o), t._parseMarkup(i, a, n), t.updateStatus("ready"), i
      }
    }
  });
  var K = function(e) {
      var n = t.items.length;
      return e > n - 1 ? e - n : 0 > e ? n + e : e
    },
    Y = function(e, t, n) {
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
          i = ".mfp-gallery",
          r = Boolean(e.fn.mfpFastClick);
        return t.direction = !0, n && n.enabled ? (a += " mfp-gallery", x(f + i, function() {
          n.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function() {
            return t.items.length > 1 ? (t.next(), !1) : void 0
          }), o.on("keydown" + i, function(e) {
            37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
          })
        }), x("UpdateStatus" + i, function(e, n) {
          n.text && (n.text = Y(n.text, t.currItem.index, t.items.length))
        }), x(p + i, function(e, i, o, r) {
          var a = t.items.length;
          o.counter = a > 1 ? Y(n.tCounter, r.index, a) : ""
        }), x("BuildControls" + i, function() {
          if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
            var i = n.arrowMarkup,
              o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
              a = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y),
              s = r ? "mfpFastClick" : "click";
            o[s](function() {
              t.prev()
            }), a[s](function() {
              t.next()
            }), t.isIE7 && (k("b", o[0], !1, !0), k("a", o[0], !1, !0), k("b", a[0], !1, !0), k("a", a[0], !1, !0)), t.container.append(o.add(a))
          }
        }), x(m + i, function() {
          t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
            t.preloadNearbyImages(), t._preloadTimeout = null
          }, 16)
        }), x(l + i, function() {
          o.off(i), t.wrap.off("click" + i), t.arrowLeft && r && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
        }), void 0) : !1
      },
      next: function() {
        t.direction = !0, t.index = K(t.index + 1), t.updateItemHTML()
      },
      prev: function() {
        t.direction = !1, t.index = K(t.index - 1), t.updateItemHTML()
      },
      goTo: function(e) {
        t.direction = e >= t.index, t.index = e, t.updateItemHTML()
      },
      preloadNearbyImages: function() {
        var e, n = t.st.gallery.preload,
          i = Math.min(n[0], t.items.length),
          o = Math.min(n[1], t.items.length);
        for (e = 1;
          (t.direction ? o : i) >= e; e++) t._preloadItem(t.index + e);
        for (e = 1;
          (t.direction ? i : o) >= e; e++) t._preloadItem(t.index - e)
      },
      _preloadItem: function(n) {
        if (n = K(n), !t.items[n].preloaded) {
          var i = t.items[n];
          i.parsed || (i = t.parseEl(n)), T("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
            i.hasSize = !0
          }).on("error.mfploader", function() {
            i.hasSize = !0, i.loadError = !0, T("LazyLoadError", i)
          }).attr("src", i.src)), i.preloaded = !0
        }
      }
    }
  });
  var U = "retina";
  e.magnificPopup.registerModule(U, {
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
            n = isNaN(n) ? n() : n, n > 1 && (x("ImageHasSize." + U, function(e, t) {
              t.img.css({
                "max-width": t.img[0].naturalWidth / n,
                width: "100%"
              })
            }), x("ElementParse." + U, function(t, i) {
              i.src = e.replaceSrc(i, n)
            }))
          }
        }
      }
    }),
    function() {
      var t = 1e3,
        n = "ontouchstart" in window,
        i = function() {
          I.off("touchmove" + r + " touchend" + r)
        },
        o = "mfpFastClick",
        r = "." + o;
      e.fn.mfpFastClick = function(o) {
        return e(this).each(function() {
          var a, s = e(this);
          if (n) {
            var l, c, d, u, p, f;
            s.on("touchstart" + r, function(e) {
              u = !1, f = 1, p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = p.clientX, d = p.clientY, I.on("touchmove" + r, function(e) {
                p = e.originalEvent ? e.originalEvent.touches : e.touches, f = p.length, p = p[0], (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - d) > 10) && (u = !0, i())
              }).on("touchend" + r, function(e) {
                i(), u || f > 1 || (a = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function() {
                  a = !1
                }, t), o())
              })
            })
          }
          s.on("click" + r, function() {
            a || o()
          })
        })
      }, e.fn.destroyMfpFastClick = function() {
        e(this).off("touchstart" + r + " click" + r), n && I.off("touchmove" + r + " touchend" + r)
      }
    }(), _()
})(window.jQuery || window.Zepto);
/* ---------------------------------------------------------------------- */
/* Theme Settings */
/* ---------------------------------------------------------------------- */
var CONFIG = (function($, window) {

  return {

    /* ---------------------------------------------------- */
    /* Portfolio Mixitup */
    /* ---------------------------------------------------- */

    objMixitup: {
      targetSelector: '.mix',
      filterSelector: '.filter',
      buttonEvent: 'click',
      effects: 'translateZ(-360px) stagger(34ms) scale(1.11) fade', // The effects for all filter operations as a space-separated string.
      listEffects: null,
      easing: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)', // A valid CSS3 transition-timing function or shorthand
      layoutMode: 'grid',
      targetDisplayGrid: 'inline-block',
      targetDisplayList: 'block',
      transitionSpeed: 680,
      showOnLoad: 'all', // Select filter: all, architecture, buildings, bridges
      sortOnLoad: false, // Boolean: (true/false) - on/off sorting on load
      multiFilter: false, // Boolean: (true/false)
      resizeContainer: true,
      minHeight: 0,
      perspectiveDistance: '2000', // the perspective value in CSS units applied to the container during animations, affecting any 3d transform-based effects, default '3000px'
      perspectiveOrigin: '50% 50%', // the perspective-origin value applied to the container during animations, affecting any 3d transform based effects, default '50% 50%'
      animateGridList: true, // Boolean: (true/false)
      onMixEnd: null
    },

    objNiceScroll: {
      cursorcolor: "#ffd200",
      cursorwidth: "8px", // cursor width in pixel, default is 5 (you can write "5px" too)
      cursorborder: "none", // css definition for cursor border, default is "1px solid #fff"
      cursorborderradius: "0", // border radius in pixel for cursor, default is "4px"
      cursoropacitymin: "1", // change opacity very cursor is inactive (scrollabar "hidden" state), range from 1 to 0, default is 0 (hidden)
      vertrailenabled: false, // Boolean: (true/false)
      background: "#202223", // change css for rail background, default is ""
      zindex: 6000, // change z-index for scrollbar div, default value is 9999
      touchbehavior: true, // Boolean: (true/false). enable cursor-drag scrolling like touch devices in desktop computer, default is false
      cursordragontouch: true, // Boolean: (true/false). drag cursor in touch / touchbehavior mode also (default:false)
      railpadding: { // set padding for rail bar (default:{top:0,right:0,left:0,bottom:0})
        top: "30px"
      },
      rail: {
        'height': ' 8px'
      }
    },
    /* ---------------------------------------------------- */
    /* Sequence Slider */
    /* ---------------------------------------------------- */

    objSequence: {
      nextButton: true, // Boolean: (true/false)
      prevButton: true, // Boolean: (true/false)
      reverseAnimationsWhenNavigatingBackwards: false, // Boolean: (true/false).Whether animations should be reversed when a user
      //navigates backwards by clicking a previous button/swiping/pressing the left key.
      hidePreloaderUsingCSS: true, // Boolean: (true/false) Default: true, Dependencies: preloader: true.
      hidePreloaderDelay: 0, // Type: a number representing time in milliseconds, Default: 0, Dependencies: preloader: true and hidePreloaderUsingCSS: true
      // The number of milliseconds to wait after the preloader has been hidden before initiating the first animation.
      transitionThreshold: 2500, // Boolean: (true/false). Type: true/false or a number representing milliseconds, Default: false
      animateStartingFrameIn: true, // Boolean: (true/false). true - the starting frame will begin in its “start” position and move to its “animate-in” position when Sequence loads,
      // false - the starting frame will begin in its “animate-in” position when Sequence loads.
      autoPlay: true, // Boolean: (true/false). Cause Sequence to automatically change between frames over a period of time, as defined in autoPlayDelay.
      autoPlayDelay: 5000, // Set delay in miliseconds
      preloader: true, // Boolean: (true/false). true: Use the preloader and styles with the CSS selector (.sequence-preloader).
      // false: don’t use a preloader.
      pauseOnHover: false, // Boolean: (true/false). Whether frames should stop auto playing when the user hovers over Sequence. autoPlay will continue again when the
      // user moves their cursor outside of Sequence.
      cycle: true // Boolean: (true/false) - cycle slider
    },


    /* ---------------------------------------------------- */
    /* MouseOver effect */
    /* ---------------------------------------------------- */

    fullWidthImageMove: {
      move: true, // Boolean: (true/false)
      speed: 6.64 // Move speed in ms
    },
    slyGalleryImageMove: {
      move: true, // Boolean: (true/false)
      speed: 6.64 // Move speed in ms
    },
    folioImageMove: {
      move: true, // Boolean: (true/false)
      speed: 6.64 // Move speed in ms
    },
    relWorksMove: {
      move: true, // Boolean: (true/false)
      speed: 6.64 // Move speed in ms
    },

    /* ---------------------------------------------------- */
    /* Preload */
    /* ---------------------------------------------------- */

    preload: {
      time: 300
    }
  }

  function getInfo(i) {
    var owlInfo = i,
      prop, value, name;
    var current = ++i['currentPosition'];
    var all = i['allItems'];
    $('.currentPosition').text(current);
    $('.allItems').text(all);
  }

}(jQuery, window));

/* ---------------------------------------------------------------------- */
/* end Theme Settings */
/* ---------------------------------------------------------------------- */

(function($, window, Modernizr, document, CONFIG) {
  "use strict";
  /* ------------------------------------------------------------------ */
  /* Ready */
  /* ------------------------------------------------------------------ */

  $(function() {
    // localStorage.clear('like');
    /*------------------------------------------------------*/
    /* Appear animations Init */
    /*------------------------------------------------------*/
    $('body').animation();

    /* ---------------------------------------------------- */
    /* Fixed Navigation Init */
    /* ---------------------------------------------------- */
    $('.navigation').navigation();

    /* ---------------------------------------------------- */
    /* Back to top Init */
    /* ---------------------------------------------------- */

    $('body').backToTop();

    /*------------------------------------------------------*/
    /* Nice Scroll Init */
    /*------------------------------------------------------*/

    if ($('scroll-box').length) {
      $("gr-box").niceScroll();
    }
    /* ---------------------------------------------------- */
    /* Team hover animation Init */
    /* ---------------------------------------------------- */

    if ($('.team-contents').length) {
      $('.team-contents').team();
    }

    /* ---------------------------------------------------- */
    /* SmoothScroll Init */
    /* ---------------------------------------------------- */
    (function() {
      try {
        $.browserSelector();
        var $html = $('html');
        if ($html.hasClass('chrome') || $html.hasClass('ie11') || $html.hasClass('ie10')) {
          $.smoothScroll();
        }
      } catch (err) {}
    }());
    /* ---------------------------------------------------- */
    /* Progress Bar Init */
    /* ---------------------------------------------------- */

    if ($('.progress-bar').length) {
      $('.progress-bar').progressBar();
    }
    /* ---------------------------------------------------- */
    /* Parallax Init */
    /* ---------------------------------------------------- */
    if (!Modernizr.touch) {
      if ($('.full-bg-image').length) {
        $('.full-bg-image').parallax('center', 0.4);
      }
    }

    /* ---------------------------------------------------- */
    /* FitVids Init */
    /* ---------------------------------------------------- */
    $('.container').fitVids();

    /* ---------------------------------------------------- */
    /* Owl Slider Init ` */
    /* ---------------------------------------------------- */


    /* ---------------------------------------------------- */
    /* Sequence Slider Init ` */
    /* ---------------------------------------------------- */

    if ($('#sequence').length) {
      $("#sequence").sequence(CONFIG.objSequence);
    }

    /* Resize window */
    $(window).on('resize', function() {
      resizeBG();
    }).resize();

    function resizeBG() {
      $('#sequence').css({
        height: $(window).outerHeight(true)
      });
    }


    /*---------------------------------------------------- */
    /* Alert Boxes Init */
    /*---------------------------------------------------- */
    var $notifications = $('.error, .success, .info, .notice');
    if ($notifications.length) {
      $notifications.notifications({
        speed: 300
      });
    }

    /* ---------------------------------------------------- */
    /* Nice Scroll Bar */
    /* ---------------------------------------------------- */

    if ($('.scroll-box').length) {
      $('.scroll-box').niceScroll(CONFIG.objNiceScroll);
    }

    /* ---------------------------------------------------- */
    /* ImageLoader */
    /* ---------------------------------------------------- */

    var time = CONFIG.preload.time;

    $('.lazy-image').each(function(i) {
      var imageIndex = i + 1;
      var currentLink = $(this);
      setTimeout(function() {
        currentLink.removeClass('img').children('.lazy').empty();
      }, imageIndex * time);
    });

    /* ---------------------------------------------------- */
    /* Navigation */
    /* ---------------------------------------------------- */
    $('#navigation').on('mouseenter', 'li', function() {
      var $this = $(this),
        $subMenu = $this.children('ul');
      if ($subMenu.length) {
        $subMenu.hide().stop(true, true).fadeIn(300);
      }
    }).on('mouseleave', 'li', function() {
      $(this).children('ul').stop(true, true).fadeOut(50);
    });

    /* ---------------------------------------------------- */
    /* CountTo */
    /* ---------------------------------------------------- */
    if ($('.counter').length) {
      var counter = $('.counter');
      if (!Modernizr.touch) {
        counter.waypoint(function(direction) {
          if (direction == 'down') {
            counter.countTo();
          }
        }, {
          offset: '74%'
        });
      } else {
        counter.countTo();
      }
    }
    /* ---------------------------------------------------- */
    /* Magnific Popup */
    /* ---------------------------------------------------- */
    if ($('.popup-gallery').length) {
      $('.popup-gallery').magnificPopup({
        delegate: '.owl-item:not(.cloned) .popup-link',
        type: 'image',
        removalDelay: 500,
        tLoading: 'Loading image #%curr%...',
        callbacks: {
          beforeOpen: function() {
            this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
            this.st.mainClass = 'mfp-move-horizontal';
          }
        },
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1]
        },
        closeOnContentClick: true,
        midClick: true
      });
    }
    if ($('.image-link').length) {
      $('.image-link').magnificPopup({
        type: 'image',
        removalDelay: 500,
        tClose: 'Закрыть (Esc)',
        tLoading: 'Загрузка...',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 2],
          tCounter: '%curr% из %total%',
          tPrev: 'Назад',
          tNext: 'Вперед',
        },
        closeOnContentClick: true,
        midClick: true,
        zoom: {
          enabled: true,

          duration: 300,
          easing: 'ease-in-out', // CSS transition easing function
          opener: function(openerElement) {
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
        },
      });
    }
    if ($('.popup-youtube, .popup-vimeo, .popup-gmaps').length) {
      $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
      });
    }
    if ($('.popup-with-form').length) {
      $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
        callbacks: {
          beforeOpen: function() {
            if ($(window).width() < 700) {
              this.st.focus = false;
            } else {
              this.st.focus = '#name';
            }
          }
        }
      });
    }



    /*------------------------------------------------------*/
    /* Like counter */
    /*------------------------------------------------------*/

    if ($('.side-like, .entry-like').length) {
      $('.side-like, .entry-like').each(function(id, value) {
        var $this = $(value),
          $output = $this.closest('.bottom-meta').find('.output'),
          val = $output.html(),
          idx = ++id,
          ls = localStorage.getItem('like' + idx) || val;
        $this.data('index', idx);
        if (ls === undefined || ls === null || ls === NaN) {
          localStorage.setItem('like' + idx, val);
        } else {
          localStorage.setItem('like' + idx, ls);
        }
        $output.html(ls);
      }).on('click', function(e) {
        e.preventDefault();
        var $this = $(this),
          $output = $this.closest('.bottom-meta').find('.output');
        $.localStorageWork.call($this, $output);
        localStorage.removeItem('like');
      });
      $.localStorageWork = function($output) {
        var index = $(this).data('index'),
          getVal = localStorage.getItem('like' + index);
        localStorage.setItem('like' + index, ++getVal);
        $output.html(getVal++);
      }
    }

    /* ---------------------------------------------------- */
    /* Portfolio */
    /* ---------------------------------------------------- */


    if ($('#portfolio-items').length) {
      var folio = $('#portfolio-items');
      folio.mixitup(CONFIG.objMixitup);
      var $loadMore = $('.load-more');
      if ($loadMore.length) {
        var i = 1,
          self = this,
          $next_href = null;

        $loadMore.on('click', function(e) {
          e.preventDefault();
          var link = $(this).attr('href'),
            $content = '#portfolio-items',
            $anchor = '.load-more';
          $.get(link, function(data) {
            var $new_content = $($content, data).wrapInner('').html();
            $next_href = $($anchor, data).attr('href');
            $('article:last', folio).after($new_content);
            folio.mixitup('remix', 'all');
            initHoverEffectForThumbView(CONFIG.folioImageMove);
            $loadMore.attr('data-rel') > i ? $loadMore.attr('href', $next_href) : $loadMore.remove();
          });
          i++;
        });
      }
    }

    /*----------------------------------------------------- */
    /* Portfolio Mouseover Effect */
    /*----------------------------------------------------- */

    resizeMouseOver();

    $(window).resize(function() {
      resizeMouseOver();
    })

    function resizeMouseOver() {
      if ($('#portfolio-items').length) {
        initHoverEffectForThumbView(CONFIG.folioImageMove);
      }
      if ($('.rel-works').length) {
        initHoverEffectForThumbView(CONFIG.relWorksMove);
      }
      if ($('.gr-box').length) {
        initHoverEffectForThumbView(CONFIG.slyGalleryImageMove);
      }
      if ($('.full-width.work-item-move').length) {
        initHoverEffectForThumbView(CONFIG.fullWidthImageMove);
      }
    }

    function initHoverEffectForThumbView(config) {
      jQuery('.work-item-move').each(function() {
        var thisElem = jQuery(this);
        var k = 1.36;
        k = (thisElem.attr('class').indexOf('full-width') != -1) ? 3 : 1.36;
        var getElemWidth = thisElem.width();
        var getElemHeight = getElemWidth / k;
        var centerX = getElemWidth / 2;
        var centerY = getElemHeight / 2;
        thisElem.css({
          'height': getElemHeight
        });
        if (config.move == true) {
          thisElem.mouseenter(function() {
            thisElem.on('mousemove', function(e) {
              var mouseX = e.pageX - thisElem.offset().left;
              var mouseY = e.pageY - thisElem.offset().top;
              var mouseDistX = (mouseX / centerX) * 100 - 100;
              var mouseDistY = (mouseY / centerY) * 100 - 100;
              thisElem.find('img').css({
                'left': -(mouseDistX / config.speed) - 15 + "%",
                'top': -(mouseDistY / config.speed) - 15 + "%"
              });
            });
            thisElem.find('a').fadeIn('fast');
          }).mouseleave(function() {
            thisElem.find('a').fadeOut('fast');
          });
        }
      });
    }
    /*----------------------------------------------------- */
    /* Accordion and Toggle */
    /*----------------------------------------------------- */
    if ($('.acc-box').length) {
      var $box = $('.acc-box');
      $box.each(function() {
        var $trigger = $('.acc-trigger', $(this));
        $trigger.on('click', function() {
          var $this = $(this);
          if ($this.data('mode') === 'toggle') {
            $this.toggleClass('active').next().stop(true, true).slideToggle(300);
          } else {
            if ($this.next().is(':hidden')) {
              $trigger.removeClass('active').next().slideUp(300);
              $this.toggleClass('active').next().slideDown(300);
            } else if ($this.hasClass('active')) {
              $this.removeClass('active').next().slideUp(300);
            }
          }
          return false;
        });
      });
    }
    /* ---------------------------------------------------- */
    /* Respond menu */
    /* ---------------------------------------------------- */
    if (!$('#mobile-menu').children('ul').length) {
      $('#mobile-menu').append($('#navigation').html());
    }
    $('#responsive-nav-button').on('click', function(e) {
      e.preventDefault();
      var $this = $(this);
      if (!$('#wrapper').is('.active')) {
        $('#wrapper').css({
          height: $('#mobile-menu').children('ul').outerHeight(true)
        }).addClass('active');
      }
    });
    $('#menu-hide').on('click', function(e) {
      e.preventDefault();
      if ($('#wrapper').is('.active')) {
        $('#wrapper').css({
          height: 'auto'
        }).removeClass('active');
      }
    });
  });
  /* ---------------------------------------------------------------------- */
  /* Plugins */
  /* ---------------------------------------------------------------------- */

  $.fn.extend({
    /* Parallax */
    parallax: function(xpos, speed) {
      var firstTop, pos;
      return this.each(function(idx, value) {
        var $this = $(value);
        if (arguments.length < 1 || xpos === null) {
          xpos = "50%";
        }
        if (arguments.length < 2 || speed === null) {
          speed = 0.4;
        }
        return ({
          update: function() {
            firstTop = $this.offset().top;
            pos = $(window).scrollTop();
            $this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speed) + "px");
          },
          init: function() {
            var self = this;
            self.update();
            $(window).on('scroll', self.update);
          }
        }.init());
      });
    },
    /* Notifications */
    notifications: function(options) {
      var defaults = {
          speed: 200
        },
        o = $.extend({}, defaults, options);
      return this.each(function() {
        var closeBtn = $('<a class="alert-close" href="#"></a>'),
          closeButton = $(this).append(closeBtn).find('> .alert-close');

        function fadeItSlideIt(object) {
          object.fadeTo(o.speed, 0, function() {
            object.slideUp(o.speed);
          });
        }
        closeButton.click(function() {
          fadeItSlideIt($(this).parent());
          return false;
        });
      });
    },
    /* Progress Bar */
    progressBar: function(options, callback) {
      var defaults = {
          speed: 600,
          easing: 'swing'
        },
        o = $.extend({}, defaults, options);
      return this.each(function() {
        var elem = $(this),
          methods = {};
        methods = {
          init: function() {
            this.touch = Modernizr.touch ? true : false;
            this.refreshElements();
            this.processing();
          },
          elements: {
            '.bar': 'bar',
            '.percent': 'per'
          },
          $: function(selector) {
            return $(selector, elem);
          },
          refreshElements: function() {
            for (var key in this.elements) {
              this[this.elements[key]] = this.$(key);
            }
          },
          getProgress: function() {
            return this.bar.data('progress');
          },
          setProgress: function(self) {
            self.bar.animate({
              'width': self.getProgress() + '%'
            }, {
              duration: o.speed,
              easing: o.easing,
              step: function(progress) {
                self.per.text(Math.ceil(progress) + '%');
              },
              complete: function(scope, i, elem) {
                if (callback) {
                  callback.call(this, i, elem);
                }
              }
            });
          },
          processing: function() {
            var self = this;
            if (self.touch) {
              self.setProgress(self);
            } else {
              elem.waypoint(function(direction) {
                if (direction == 'down') {
                  self.setProgress(self);
                }
              }, {
                offset: '64%'
              });
            }
          }
        };
        methods.init();
      });
    },
    /* Fit Vids */
    fitVids: function(options) {
      var settings = {
        customSelector: null
      };
      if (!document.getElementById('fit-vids-style')) {
        var div = document.createElement('div'),
          ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0],
          cssStyles = '&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>';
        div.className = 'fit-vids-style';
        div.id = 'fit-vids-style';
        div.style.display = 'none';
        div.innerHTML = cssStyles;
        ref.parentNode.insertBefore(div, ref);
      }
      if (options) {
        $.extend(settings, options);
      }
      return this.each(function() {
        var selectors = [
          "iframe[src*='player.vimeo.com']",
          "iframe[src*='youtube.com']",
          "iframe[src*='youtube-nocookie.com']",
          "iframe[src*='kickstarter.com'][src*='video.html']",
          "object",
          "embed"
        ];
        if (settings.customSelector) {
          selectors.push(settings.customSelector);
        }
        var $allVideos = $(this).find(selectors.join(','));
        $allVideos = $allVideos.not("object object"); // SwfObj conflict patch
        $allVideos.each(function() {
          var $this = $(this);
          if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) {
            return;
          }
          var height = (this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10)))) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
          if (!$this.attr('id')) {
            var videoID = 'fitvid' + Math.floor(Math.random() * 999999);
            $this.attr('id', videoID);
          }
          $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100) + "%");
          $this.removeAttr('height').removeAttr('width');
        });
      });
    },
    /* Back To Top */
    backToTop: function() {
      var self = this;

      return this.each(function() {
        return {
          init: function() {
            var me = this;
            self.append('<a href="#" id="back-top" title="Back To Top"></a>');
            this.backToTop = $('#back-top');

            $(window).on('scroll', function(win) {
              me.backTopScrollHandler(win);
            });
            this.backTopClickHandler();
          },
          backTopScrollHandler: function(win) {
            $(win.currentTarget).scrollTop() > 200 ? this.backToTop.fadeIn(400) : this.backToTop.fadeOut(400);
          },
          backTopClickHandler: function() {
            this.backToTop.on('click', function(e) {
              e.preventDefault();
              $('html, body').animate({
                scrollTop: 0
              }, 1000);
            })
          }
        }.init();
      });
    },
    /* Animation */
    animation: function() {
      return this.each(function() {
        return {
          init: function() {
            var self = this;
            this.support = Modernizr.cssanimations && Modernizr.csstransitions;
            this.touch = Modernizr.touch;
            if (this.support) {
              if (!this.touch) {
                this.animatedElements();
              } else {
                $("body").removeClass('animated');
              }
            }
          },
          animatedElements: function() {
            if ($('.opacity').length) {
              $('.opacity').appear({
                accX: 0,
                accY: 100,
                data: 'opacity',
                speedAddClass: 100
              });
            }

            if ($('.opacity-move').length) {
              $('.opacity-move').appear({
                accX: 0,
                accY: 100,
                data: 'opacity-move',
                speedAddClass: 400
              });
            }
            if ($('.slideUp2x').length) {
              $('.slideUp2x').appear({
                accX: 0,
                accY: 100,
                data: 'slideUp2x',
                speedAddClass: 200
              });
            }

            if ($('.slideUp3x').length) {
              $('.slideUp3x').appear({
                accX: 0,
                accY: 50,
                data: 'slideUp3x',
                speedAddClass: 200
              });
            }
            if ($('.scale').length) {
              $('.scale').appear({
                accX: 0,
                accY: 165,
                data: 'scale',
                speedAddClass: 250
              });
            }
            if ($('.opacity2x').length) {
              $('.opacity2x').appear({
                accX: 0,
                accY: 150,
                data: 'opacity2x'
              });
            }
          }
        }.init();
      });
    },
    /* Fixed Navigation */
    navigation: function() {
      var $this = $(this),
        $window = $(window);
      return this.each(function() {
        return {
          init: function() {
            var self = this;
            this.header = $('#header');
            this.header.prepend('<div class="space"></div>');
            this.space = $('.space', this.header);
            this.topLine = $('.top-header-line');
            this.middleLine = $('.middle-header-line');
            this.bottomLine = $('.bottom-header-line');
            this.checkNav = this.middleLine.find('.navigation').length;
            this.addSubArrowClass();
            this.listener(self);
          },
          addSubArrowClass: function() {
            $this.children('ul').children('li').each(function(idx, val) {
              var $self = $(val);
              $self.find('ul').parent().each(function() {
                var $el = $(this);
                $el.data('is', $el.parents('ul').length === 1 ? true : false)
                  .addClass(!$el.data('is') ? 'rightarrowclass' : '');
              });
            });
          },
          stickyMiddleLine: function(win) {
            if ($(window).width() > 767) {
              if ($(win).scrollTop() > 0) {
                this.space.css({
                  height: this.middleLine.outerHeight(true)
                });
                this.header.addClass('shrink-middle-line');
              } else {
                this.space.css({
                  height: 'auto'
                });
                this.header.removeClass('shrink-middle-line');
              }
            }
          },
          stickyBottomLine: function(win) {
            if ($(window).width() > 767) {
              if ($(win).scrollTop() > 130) {
                this.space.css({
                  height: this.bottomLine.outerHeight(true)
                });
                this.header.addClass('shrink-bottom-line');
              } else {
                this.space.css({
                  height: 'auto'
                });
                this.header.removeClass('shrink-bottom-line');
              }
            }
          },
          listener: function(self) {
            $window.on('scroll', function(e) {
              switch (self.checkNav) {
                case 0:
                  self.stickyBottomLine.call(self, e.currentTarget);
                  break;
                case 1:
                  self.stickyMiddleLine.call(self, e.currentTarget);
                  break;
                default:
                  self.stickyBottomLine.call(self, e.currentTarget);
                  break;
              }
            });
          }
        }.init()
      });
    },
    /* Team */
    team: function() {
      if (!this.length)
        return this;
      return this.each(function() {
        var $item = $('.item-container', $(this));
        $item.on('click mouseleave', function(e) {
          e.preventDefault();
          var $this = $(this),
            $entry = $('.entry-excerpt', $this);
          if (e.type == 'click') {
            if (!$this.hasClass('active')) {
              $this.addClass('active');
              $entry.stop().animate({
                height: 'show',
                opacity: '1'
              }, 400, "swing");
            } else {
              $entry.stop().animate({
                height: 'hide',
                opacity: '0'
              }, 100);
              $this.removeClass('active');
            }
          } else if (e.type == 'mouseleave') {
            $entry.stop().animate({
              height: 'hide',
              opacity: '0'
            });
            $this.removeClass('active');
          }
        });
      });
    }
  });
  /* ---------------------------------------------------- */
  /* CountTo */
  /* ---------------------------------------------------- */
  $.fn.countTo = function(options) {
    options = options || {};
    return $(this).each(function() {
      // set options for current element
      var settings = $.extend({}, $.fn.countTo.defaults, {
        from: $(this).data('from'),
        to: $(this).data('to'),
        speed: $(this).data('speed'),
        refreshInterval: $(this).data('refresh-interval'),
        decimals: $(this).data('decimals')
      }, options);
      // how many times to update the value, and how much to increment the value on each update
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;
      // references & variables that will change with each update
      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data('countTo') || {};
      $self.data('countTo', data);
      // if an existing interval can be found, clear it first
      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);
      // initialize the element with the starting value
      render(value);

      function updateTimer() {
        value += increment;
        loopCount++;
        render(value);
        if (typeof(settings.onUpdate) == 'function') {
          settings.onUpdate.call(self, value);
        }
        if (loopCount >= loops) {
          // remove the interval
          $self.removeData('countTo');
          clearInterval(data.interval);
          value = settings.to;
          if (typeof(settings.onComplete) == 'function') {
            settings.onComplete.call(self, value);
          }
        }
      }

      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.children('.count').html(formattedValue);
      }
    });
  };
  $.fn.countTo.defaults = {
    from: 0,
    to: 0,
    speed: 1000,
    refreshInterval: 10,
    decimals: 0,
    formatter: formatter,
    onUpdate: null,
    onComplete: null
  };

  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }
}(jQuery, window, Modernizr, document, CONFIG));
/* SerpTop */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
  "use strict";
  var e = t.fn.jquery.split(" ")[0].split(".");
  if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var n = t(this),
        r = n.data("bs.tab");
      r || n.data("bs.tab", r = new a(this)), "string" == typeof e && r[e]()
    })
  }
  var a = function(e) {
    this.element = t(e)
  };
  a.VERSION = "3.3.6", a.TRANSITION_DURATION = 150, a.prototype.show = function() {
    var e = this.element,
      a = e.closest("ul:not(.dropdown-menu)"),
      n = e.data("target");
    if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
      var r = a.find(".active:last a"),
        i = t.Event("hide.bs.tab", {
          relatedTarget: e[0]
        }),
        s = t.Event("show.bs.tab", {
          relatedTarget: r[0]
        });
      if (r.trigger(i), e.trigger(s), !s.isDefaultPrevented() && !i.isDefaultPrevented()) {
        var o = t(n);
        this.activate(e.closest("li"), a), this.activate(o, o.parent(), function() {
          r.trigger({
            type: "hidden.bs.tab",
            relatedTarget: e[0]
          }), e.trigger({
            type: "shown.bs.tab",
            relatedTarget: r[0]
          })
        })
      }
    }
  }, a.prototype.activate = function(e, n, r) {
    function i() {
      s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), o ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r()
    }
    var s = n.find("> .active"),
      o = r && t.support.transition && (s.length && s.hasClass("fade") || !!n.find("> .fade").length);
    s.length && o ? s.one("bsTransitionEnd", i).emulateTransitionEnd(a.TRANSITION_DURATION) : i(), s.removeClass("in")
  };
  var n = t.fn.tab;
  t.fn.tab = e, t.fn.tab.Constructor = a, t.fn.tab.noConflict = function() {
    return t.fn.tab = n, this
  };
  var r = function(a) {
    a.preventDefault(), e.call(t(this), "show")
  };
  t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
}(jQuery);
/***
 * @name Fedor Zemskov
 * @email tech@serptop.ru
 * use a bootstrap> 3 recommend
 ***/

function OrderForm(options) {
  this.dom = {};
  this.dom.validation = {};
  this.dom.validation.phone = '';
  this.dom.validation.email = '';
  this.dom.$root = options.$orderForm;
  this.options = jQuery.extend(true, {}, this.optionsDefault, options);
}
OrderForm.prototype = {
  constructor: OrderForm,

  optionsDefault: {
    classNames: {
      form: "order-form",
      sendingResult: "order-form-result",
      sendingResultActive: "order-form-result-active",
      sendingResultError: "order-form-result-error"
    },
    validation: ''
  },
  dom: null,
  validation: {},
  onAjaxResponseCompleteCallback: null,
  run: function() {
    this.doSetDom();
    this.doBindEvents();
  },

  setOnAjaxResponseCompleteCallback: function(f) {
    this.onAjaxResponseCompleteCallback = f;
  },
  doSetDom: function() {

    this.dom.$id = this.dom.$root.attr("id");
    this.dom.$sendingResult = this.dom.$root.find("." + this.options.classNames.sendingResult);
    this.dom.$form = this.dom.$root.find("." + this.options.classNames.form);
    this.dom.$formControl = this.dom.$root.find('.form-control');


    if (this.options.validation != '') {
      $validation = this.options.validation.split('|');
      for (var $i = 0; $i < $validation.length; $i++) {
        if ($validation[$i] == 'phone') {
          this.dom.validation.phone = this.dom.$root.find('.validation-phone');
          this.dom.validation.phone.mask('+7 (___) ___ - __ - __', {
            autoclear: false
          });
        }
        if ($validation[$i] == 'email') {
          this.dom.validation.email = this.dom.$root.find('.validation-email');
        }
      }
    }
  },
  doBindEvents: function() {

    var $that = this;
    var $validate = true;
    this.doChangeFormControl();

    this.dom.$form.submit(function() {
      if ($that.options.validation != '') {
        $validate = $that.doValidateFormSubmit($that.dom.validation);
      } else {
        $validate = true;
      }

      if ($validate == true) {
        $that.sendAjaxRequest();
      } else {
        $error = $(".has-error").first().find('.form-control').focus();
      }
      return false;
    });
  },

  doValidateFormSubmit: function(vField) {

    if (vField.email) {
      $email = this.doValidateField(vField.email, 'email')
    } else {
      $email = true;
    }

    if (vField.phone) {
      $phone = this.doValidateField(vField.phone, 'phone')
    } else {
      $phone = true;
    }

    if ($email == true && $phone == true) {
      return true;
    } else {
      return false;
    }

  },

  doChangeFormControl: function() {
    var $that = this

    this.dom.$formControl.change(function() {
      var $val = $(this).val();
      var $required = $(this).prop('required');

      if ($(this).hasClass('validation-phone')) {
        $that.doValidateField(this, 'phone');
      } else if ($(this).hasClass('validation-email')) {
        $that.doValidateField(this, 'email');
      } else if ($(this).hasClass('validation-captcha')) {
        $that.doValidateField(this, 'captcha');
      } else {
        if ($val != '') {
          $that.doRenderValidate(this, 'has-success');
        } else if ($val == '' && $required == true) {
          $that.doRenderValidate(this, 'has-error');
        } else if ($val == '' && $that.options.hasWarning == 1) {
          $that.doRenderValidate(this, 'has-warning');
        } else {
          $that.doRenderValidate(this, 'has-empty');
        }
      }

    });

  },


  sendAjaxRequest: function() {
    var that = this;

    this.dom.$form.find('.button[type=submit]').addClass('disabled').attr('disabled', true);

    var dataJson = $(that.dom.$form).serialize();
    if (this.options.$get == true) {
      $.ajax({
        url: that.dom.$form.attr("action"),
        type: "POST",
        data: {
          data: dataJson,
          get: window.location.search
        },
        dataType: "json",
        success: function(data) {
          that.dom.$form.find('.button[type=submit]').removeClass('disabled').removeAttr('disabled');
          that.onAjaxResponse(data);
        },
        error: function(data) {
          //console.log( 'error', data );
        }
      });
    } else {

      $.ajax({
        url: that.dom.$form.attr("action"),
        type: "POST",
        data: dataJson,
        dataType: "json",
        success: function(data) {
          that.dom.$form.find('.button[type=submit]').removeClass('disabled').removeAttr('disabled');
          that.onAjaxResponse(data);
        },
        error: function(data) {
          //console.log( 'error', data );
        }
      });

    }
  },
  onAjaxResponse: function(data) {


    if (this.options.$resultTemplate == 'alert') {
      alert(data.result);
    } else {
      this.dom.$sendingResult.html(data.result);
      if (data.isError) {
        if (this.options.$resultTemplate == 'show') {
          this.dom.$sendingResult.addClass(this.options.classNames.sendingResultError);
        }
      } else {
        if (this.options.$resultTemplate == 'slideUp') {
          this.dom.$form.slideUp();
          this.dom.$sendingResult.removeClass(this.options.classNames.sendingResultError);
          this.dom.$sendingResult.slideDown().addClass(this.options.classNames.sendingResultActive);
        }
        if (this.options.$resultTemplate == 'show') {
          this.dom.$sendingResult.removeClass(this.options.classNames.sendingResultError);
          this.dom.$sendingResult.slideDown().addClass(this.options.classNames.sendingResultActive);
        }

      }
    }

    if (!data.isError) {
      this.doFormReset();
    }

  },


  doValidateField: function(self, vField) {

    var $val = $(self).val();

    if (vField == 'phone') {
      var $reg = /^\+7\s\([\d]{2,3}\)\s[\d]{2,3}\s-\s[\d]{2,3}\s-\s[\d]{2,3}$/i;
      var $validation = $reg.test($val);
    }

    if (vField == 'email') {
      var $reg = /^[\w]{1}[\w-\.]*@[\w-]+\.[\w-\.]*$/i;
      var $validation = $reg.test($val);
    }


    if ($validation == true) {
      this.doRenderValidate(self, 'has-success');
      return true;
    } else {
      this.doRenderValidate(self, 'has-error');
      return false;
    }
  },

  doRenderValidate: function(self, status) {

    if ($(self).parent().parent().hasClass(status)) {
      $(self).parent().parent().removeClass(status);
    }

    if (status == 'has-success') {
      $(self).parent().parent().removeClass('has-error has-warning').addClass(status).addClass('has-feedback');
    }
    if (status == 'has-error') {
      $(self).parent().parent().removeClass('has-success has-warning').addClass(status).addClass('has-feedback');
    }
    if (status == 'has-warning') {
      $(self).parent().parent().removeClass('has-success has-error').addClass(status).addClass('has-feedback');
    }
    if (status == 'has-empty') {
      $(self).parent().parent().removeClass('has-success has-error has-warning has-feedback');
    }

    if ($(self).siblings('.fa').length == 0) {
      if (status == 'has-success') {
        $(self).parent().append('<i class="fa fa-check form-control-feedback hasTooltip" aria-hidden="true"></i>');
      }
      if (status == 'has-error') {
        $(self).parent().append('<i class="fa fa-close form-control-feedback" aria-hidden="true"></i>');
      }
      if (status == 'has-warning') {
        $(self).parent().append('<i class="glyphicon glyphicon-warning-sign form-control-feedback" aria-hidden="true"></i>');
      }
    } else {
      $siblings = $(self).siblings('.fa');
      if (status == 'has-success') {
        $siblings.removeClass().addClass('fa fa-check form-control-feedback')
      }
      if (status == 'has-error') {
        $siblings.removeClass().addClass('fa fa-close form-control-feedback')
      }
      if (status == 'has-warning') {
        $siblings.removeClass().addClass('glyphicon glyphicon-warning-sign form-control-feedback')
      }
      if (status == 'has-empty') {
        $siblings.removeClass().remove();
      }
    }
  },

  doFormReset: function() {
    $(this.dom.$form)[0].reset();
    this.dom.$form.find('.form-group').removeClass('has-success has-feedback');
    this.dom.$form.find('.form-control-feedback').remove();
  },


};
$(document).ready(function() {
  $('.magnific-image-link').magnificPopup({
    type: 'image'
  });

  /*
  $('.wrapper-mfp-gallery-thumb').each(function(index, element) {

  $(element).find('.mfp-gallery-thumb').magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Невозможно загрузить изображение #%curr%...',
  mainClass: 'mfp-img-mobile',
  gallery: {
  enabled: true,
  navigateByImgClick: true,
  preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  },
  image: {
  tError: '<a href="%url%">Изображение #%curr%</a> незагрузилось...',
  titleSrc: function(item) {
  //return //item.el.attr('title');
  var $result = '';
  magnificPopup = $.magnificPopup.instance;
  $gallery = magnificPopup.st.mainEl.find('.mfp-gallery-item');
  console.log($gallery);
  if ($gallery.length>0) {
  $result = '<div class="mfp-pager">' +
  '<div class="arrow_prev">' +
  '<button type="button" class="arrow_prev_button" onclick="javascript:$(\'.mfp-gallery-thumb\').magnificPopup(\'prev\');return false;">Назад</button>' +
  '</div>' +
  '<div class="dots">' +
  '<ul class="dots" style="display: inline-block;">';
  for (var i=0; i<$gallery.length; i++) {
  var $cl_active = '';
  if (item.index == i) $cl_active = ' class="active"'; else $cl_active = '';
  var $thumb = $gallery.eq(i).attr('href');
  $result += '<li'+$cl_active+'>' +
  '<div onclick="javascript:$(\'.mfp-gallery-thumb\').magnificPopup(\'goTo\', '+i+');return false;"><img src="' + $thumb + '" class="img-responsive"></div>' +
  '</li>';
  }
  $result += '</ul>' +
  '</div>' +
  '<div class="arrow_next">' +
  '<button type="button" class="arrow_next_button" onclick="javascript:$(\'.mfp-gallery-thumb\').magnificPopup(\'next\');return false;">Вперед</button>' +
  '</div>' +
  '</div>';
  }
  return $result;
  }
  }
  });
  }); */


  $orderDesignInterior = $("#qd_title2");
  $orderCallBack = $("#call-back");
  $orderProject = $("#order-project");
  $orderEngineeringCallBack = $("#call-back-form-engineering");
  $orderEngineeringProject = $("#order-form-engineering");
  $orderContacts = $("#respond-contacts");
  $orderCooperation = $("#cooperation-form");
  $orderDesignPage = $(".form-page-design");
  $orderDesignPageAlert = $(".form-page-design-alert");

  var orderFormDesignInterior = new OrderForm({
    $orderForm: $orderDesignInterior,
    $resultTemplate: 'slideUp',
    $get: false,
    validation: 'email'
  });
  orderFormDesignInterior.run();

  var orderFormCallBack = new OrderForm({
    $orderForm: $orderCallBack,
    $resultTemplate: 'show',
    $get: true,
    validation: 'phone'
  });
  orderFormCallBack.run();

  var orderFormProject = new OrderForm({
    $orderForm: $orderProject,
    $resultTemplate: 'show',
    $get: true,
    validation: 'phone|email'
  });
  orderFormProject.run();

  var orderFormEngineeringCallBack = new OrderForm({
    $orderForm: $orderEngineeringCallBack,
    $resultTemplate: 'show',
    $get: true,
    validation: 'phone'
  });
  orderFormEngineeringCallBack.run();

  var orderFormEngineeringProject = new OrderForm({
    $orderForm: $orderEngineeringProject,
    $resultTemplate: 'show',
    $get: true,
    validation: 'phone|email'
  });
  orderFormEngineeringProject.run();

  var orderFormContacts = new OrderForm({
    $orderForm: $orderContacts,
    $resultTemplate: 'show',
    $get: true,
    validation: 'phone'
  });
  orderFormContacts.run();

  var orderFormCooperation = new OrderForm({
    $orderForm: $orderCooperation,
    $resultTemplate: 'show',
    $get: true,
    validation: 'phone|email'
  });
  orderFormCooperation.run();

  var orderFormDesignPage = new OrderForm({
    $orderForm: $orderDesignPage,
    $resultTemplate: 'show',
    $get: true,
    validation: 'phone'
  });
  orderFormDesignPage.run();

  var orderFormDesignPageAlert = new OrderForm({
    $orderForm: $orderDesignPageAlert,
    $resultTemplate: 'alert',
    $get: true,
    validation: 'phone'
  });
  orderFormDesignPageAlert.run();

});
$(document).ready(function() {

  /* bug */
  $menu = $("#navigation > ul > li").eq(2).hasClass('current-menu-item');
  $subMenu = $("#navigation > ul > li").eq(2).find('ul > li').eq(3).hasClass('current-menu-item');

  if ($menu === true && $subMenu === true) {
    $("#navigation > ul > li").eq(2).addClass('current-menu-item-no');
  }

  $(".powered-by-serptop").html('<a href="http://serptop.ru/" target="_blank">Powered by - <span class="serp">Serp</span><span class="top">Top</span></a>');
});
