function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
function setLoader() {
    setTimeout(function() {
        document.querySelector(".start-loader").style.display = "none"
    }, 500)
}
!function(e, t) {
    "use strict";
    "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function(e) {
        if (e.document)
            return t(e);
        throw new Error("jQuery requires a window with a document")
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(T, q) {
    "use strict";
    function m(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
    function M(e) {
        return null != e && e === e.window
    }
    var t = []
      , I = Object.getPrototypeOf
      , a = t.slice
      , z = t.flat ? function(e) {
        return t.flat.call(e)
    }
    : function(e) {
        return t.concat.apply([], e)
    }
      , W = t.push
      , w = t.indexOf
      , R = {}
      , F = R.toString
      , _ = R.hasOwnProperty
      , B = _.toString
      , U = B.call(Object)
      , g = {}
      , k = T.document
      , X = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function Y(e, t, n) {
        var i, o, r = (n = n || k).createElement("script");
        if (r.text = e,
        t)
            for (i in X)
                (o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
        n.head.appendChild(r).parentNode.removeChild(r)
    }
    function V(e) {
        return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? R[F.call(e)] || "object" : _typeof(e)
    }
    var e = "3.7.0"
      , G = /HTML$/i
      , S = function e(t, n) {
        return new e.fn.init(t,n)
    };
    function Q(e) {
        var t = !!e && "length"in e && e.length
          , n = V(e);
        return !m(e) && !M(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    function b(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    S.fn = S.prototype = {
        jquery: e,
        constructor: S,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            e = S.merge(this.constructor(), e);
            return e.prevObject = this,
            e
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: W,
        sort: t.sort,
        splice: t.splice
    },
    S.extend = S.fn.extend = function() {
        var e, t, n, i, o, r = arguments[0] || {}, s = 1, a = arguments.length, l = !1;
        for ("boolean" == typeof r && (l = r,
        r = arguments[s] || {},
        s++),
        "object" == _typeof(r) || m(r) || (r = {}),
        s === a && (r = this,
        s--); s < a; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = e[t],
                    "__proto__" !== t && r !== n && (l && n && (S.isPlainObject(n) || (i = Array.isArray(n))) ? (o = r[t],
                    o = i && !Array.isArray(o) ? [] : i || S.isPlainObject(o) ? o : {},
                    i = !1,
                    r[t] = S.extend(l, o, n)) : void 0 !== n && (r[t] = n));
        return r
    }
    ,
    S.extend({
        expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            return !(!e || "[object Object]" !== F.call(e) || (e = I(e)) && ("function" != typeof (e = _.call(e, "constructor") && e.constructor) || B.call(e) !== U))
        },
        isEmptyObject: function(e) {
            for (var t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            Y(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, i = 0;
            if (Q(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        text: function(e) {
            var t, n = "", i = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o)
                    return e.textContent;
                if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += S.text(t);
            return n
        },
        makeArray: function(e, t) {
            t = t || [];
            return null != e && (Q(Object(e)) ? S.merge(t, "string" == typeof e ? [e] : e) : W.call(t, e)),
            t
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : w.call(t, e, n)
        },
        isXMLDoc: function(e) {
            var t = e && e.namespaceURI
              , e = e && (e.ownerDocument || e).documentElement;
            return !G.test(t || e && e.nodeName || "HTML")
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++)
                e[o++] = t[i];
            return e.length = o,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++)
                !t(e[o], o) != s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o, r = 0, s = [];
            if (Q(e))
                for (i = e.length; r < i; r++)
                    null != (o = t(e[r], r, n)) && s.push(o);
            else
                for (r in e)
                    null != (o = t(e[r], r, n)) && s.push(o);
            return z(s)
        },
        guid: 1,
        support: g
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        R["[object " + t + "]"] = t.toLowerCase()
    });
    var J = t.pop
      , K = t.sort
      , Z = t.splice
      , n = "[\\x20\\t\\r\\n\\f]"
      , ee = new RegExp("^" + n + "+|((?:^|[^\\\\])(?:\\\\.)*)" + n + "+$","g")
      , te = (S.contains = function(e, t) {
        t = t && t.parentNode;
        return e === t || !(!t || 1 !== t.nodeType || !(e.contains ? e.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
    }
    ,
    /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g);
    function ne(e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
    }
    S.escapeSelector = function(e) {
        return (e + "").replace(te, ne)
    }
    ;
    var ie, x, oe, re, se, C, ae, $, p, le, i = k, ce = W, A = ce, E = S.expando, j = 0, de = 0, ue = De(), pe = De(), fe = De(), he = De(), ge = function(e, t) {
        return e === t && (se = !0),
        0
    }, ve = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", e = "(?:\\\\[\\da-fA-F]{1,6}" + n + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", o = "\\[" + n + "*(" + e + ")(?:" + n + "*([*^$|!~]?=)" + n + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + e + "))|)" + n + "*\\]", r = ":(" + e + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + o + ")*)|.*)\\)|)", ye = new RegExp(n + "+","g"), me = new RegExp("^" + n + "*," + n + "*"), we = new RegExp("^" + n + "*([>+~]|" + n + ")" + n + "*"), be = new RegExp(n + "|>"), xe = new RegExp(r), Te = new RegExp("^" + e + "$"), ke = {
        ID: new RegExp("^#(" + e + ")"),
        CLASS: new RegExp("^\\.(" + e + ")"),
        TAG: new RegExp("^(" + e + "|[*])"),
        ATTR: new RegExp("^" + o),
        PSEUDO: new RegExp("^" + r),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + n + "*(even|odd|(([+-]|)(\\d*)n|)" + n + "*(?:([+-]|)" + n + "*(\\d+)|))" + n + "*\\)|)","i"),
        bool: new RegExp("^(?:" + ve + ")$","i"),
        needsContext: new RegExp("^" + n + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + n + "*((?:-\\d)?\\d*)" + n + "*\\)|)(?=[^-]|$)","i")
    }, Se = /^(?:input|select|textarea|button)$/i, Ce = /^h\d$/i, $e = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Ae = /[+~]/, u = new RegExp("\\\\[\\da-fA-F]{1,6}" + n + "?|\\\\([^\\r\\n\\f])","g"), f = function(e, t) {
        e = "0x" + e.slice(1) - 65536;
        return t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
    }, Ee = function() {
        Ne()
    }, je = ze(function(e) {
        return !0 === e.disabled && b(e, "fieldset")
    }, {
        dir: "parentNode",
        next: "legend"
    });
    try {
        A.apply(t = a.call(i.childNodes), i.childNodes),
        t[i.childNodes.length].nodeType
    } catch (ie) {
        A = {
            apply: function(e, t) {
                ce.apply(e, a.call(t))
            },
            call: function(e) {
                ce.apply(e, a.call(arguments, 1))
            }
        }
    }
    function D(e, t, n, i) {
        var o, r, s, a, l, c, d = t && t.ownerDocument, u = t ? t.nodeType : 9;
        if (n = n || [],
        "string" != typeof e || !e || 1 !== u && 9 !== u && 11 !== u)
            return n;
        if (!i && (Ne(t),
        t = t || C,
        $)) {
            if (11 !== u && (a = $e.exec(e)))
                if (o = a[1]) {
                    if (9 === u) {
                        if (!(c = t.getElementById(o)))
                            return n;
                        if (c.id === o)
                            return A.call(n, c),
                            n
                    } else if (d && (c = d.getElementById(o)) && D.contains(t, c) && c.id === o)
                        return A.call(n, c),
                        n
                } else {
                    if (a[2])
                        return A.apply(n, t.getElementsByTagName(e)),
                        n;
                    if ((o = a[3]) && t.getElementsByClassName)
                        return A.apply(n, t.getElementsByClassName(o)),
                        n
                }
            if (!(he[e + " "] || p && p.test(e))) {
                if (c = e,
                d = t,
                1 === u && (be.test(e) || we.test(e))) {
                    for ((d = Ae.test(e) && Pe(t.parentNode) || t) == t && g.scope || ((s = t.getAttribute("id")) ? s = S.escapeSelector(s) : t.setAttribute("id", s = E)),
                    r = (l = Me(e)).length; r--; )
                        l[r] = (s ? "#" + s : ":scope") + " " + Ie(l[r]);
                    c = l.join(",")
                }
                try {
                    return A.apply(n, d.querySelectorAll(c)),
                    n
                } catch (t) {
                    he(e, !0)
                } finally {
                    s === E && t.removeAttribute("id")
                }
            }
        }
        return Be(e.replace(ee, "$1"), t, n, i)
    }
    function De() {
        var i = [];
        return function e(t, n) {
            return i.push(t + " ") > x.cacheLength && delete e[i.shift()],
            e[t + " "] = n
        }
    }
    function H(e) {
        return e[E] = !0,
        e
    }
    function He(e) {
        var t = C.createElement("fieldset");
        try {
            return !!e(t)
        } catch (e) {
            return !1
        } finally {
            t.parentNode && t.parentNode.removeChild(t)
        }
    }
    function Le(t) {
        return function(e) {
            return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && je(e) === t : e.disabled === t : "label"in e && e.disabled === t
        }
    }
    function Oe(s) {
        return H(function(r) {
            return r = +r,
            H(function(e, t) {
                for (var n, i = s([], e.length, r), o = i.length; o--; )
                    e[n = i[o]] && (e[n] = !(t[n] = e[n]))
            })
        })
    }
    function Pe(e) {
        return e && void 0 !== e.getElementsByTagName && e
    }
    function Ne(e) {
        var e = e ? e.ownerDocument || e : i;
        return e != C && 9 === e.nodeType && e.documentElement && (ae = (C = e).documentElement,
        $ = !S.isXMLDoc(C),
        le = ae.matches || ae.webkitMatchesSelector || ae.msMatchesSelector,
        i != C && (e = C.defaultView) && e.top !== e && e.addEventListener("unload", Ee),
        g.getById = He(function(e) {
            return ae.appendChild(e).id = S.expando,
            !C.getElementsByName || !C.getElementsByName(S.expando).length
        }),
        g.disconnectedMatch = He(function(e) {
            return le.call(e, "*")
        }),
        g.scope = He(function() {
            return C.querySelectorAll(":scope")
        }),
        g.cssHas = He(function() {
            try {
                return C.querySelector(":has(*,:jqfake)"),
                0
            } catch (e) {
                return 1
            }
        }),
        g.getById ? (x.filter.ID = function(e) {
            var t = e.replace(u, f);
            return function(e) {
                return e.getAttribute("id") === t
            }
        }
        ,
        x.find.ID = function(e, t) {
            if (void 0 !== t.getElementById && $)
                return (t = t.getElementById(e)) ? [t] : []
        }
        ) : (x.filter.ID = function(e) {
            var t = e.replace(u, f);
            return function(e) {
                e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                return e && e.value === t
            }
        }
        ,
        x.find.ID = function(e, t) {
            if (void 0 !== t.getElementById && $) {
                var n, i, o, r = t.getElementById(e);
                if (r) {
                    if ((n = r.getAttributeNode("id")) && n.value === e)
                        return [r];
                    for (o = t.getElementsByName(e),
                    i = 0; r = o[i++]; )
                        if ((n = r.getAttributeNode("id")) && n.value === e)
                            return [r]
                }
                return []
            }
        }
        ),
        x.find.TAG = function(e, t) {
            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
        }
        ,
        x.find.CLASS = function(e, t) {
            if (void 0 !== t.getElementsByClassName && $)
                return t.getElementsByClassName(e)
        }
        ,
        p = [],
        He(function(e) {
            var t;
            ae.appendChild(e).innerHTML = "<a id='" + E + "' href='' disabled='disabled'></a><select id='" + E + "-\r\\' disabled='disabled'><option selected=''></option></select>",
            e.querySelectorAll("[selected]").length || p.push("\\[" + n + "*(?:value|" + ve + ")"),
            e.querySelectorAll("[id~=" + E + "-]").length || p.push("~="),
            e.querySelectorAll("a#" + E + "+*").length || p.push(".#.+[+~]"),
            e.querySelectorAll(":checked").length || p.push(":checked"),
            (t = C.createElement("input")).setAttribute("type", "hidden"),
            e.appendChild(t).setAttribute("name", "D"),
            ae.appendChild(e).disabled = !0,
            2 !== e.querySelectorAll(":disabled").length && p.push(":enabled", ":disabled"),
            (t = C.createElement("input")).setAttribute("name", ""),
            e.appendChild(t),
            e.querySelectorAll("[name='']").length || p.push("\\[" + n + "*name" + n + "*=" + n + "*(?:''|\"\")")
        }),
        g.cssHas || p.push(":has"),
        p = p.length && new RegExp(p.join("|")),
        ge = function(e, t) {
            var n;
            return e === t ? (se = !0,
            0) : !e.compareDocumentPosition - !t.compareDocumentPosition || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !g.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument == i && D.contains(i, e) ? -1 : t === C || t.ownerDocument == i && D.contains(i, t) ? 1 : re ? w.call(re, e) - w.call(re, t) : 0 : 4 & n ? -1 : 1)
        }
        ),
        C
    }
    for (ie in D.matches = function(e, t) {
        return D(e, null, null, t)
    }
    ,
    D.matchesSelector = function(e, t) {
        if (Ne(e),
        $ && !he[t + " "] && (!p || !p.test(t)))
            try {
                var n = le.call(e, t);
                if (n || g.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                    return n
            } catch (e) {
                he(t, !0)
            }
        return 0 < D(t, C, null, [e]).length
    }
    ,
    D.contains = function(e, t) {
        return (e.ownerDocument || e) != C && Ne(e),
        S.contains(e, t)
    }
    ,
    D.attr = function(e, t) {
        (e.ownerDocument || e) != C && Ne(e);
        var n = x.attrHandle[t.toLowerCase()]
          , n = n && _.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !$) : void 0;
        return void 0 !== n ? n : e.getAttribute(t)
    }
    ,
    D.error = function(e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
    }
    ,
    S.uniqueSort = function(e) {
        var t, n = [], i = 0, o = 0;
        if (se = !g.sortStable,
        re = !g.sortStable && a.call(e, 0),
        K.call(e, ge),
        se) {
            for (; t = e[o++]; )
                t === e[o] && (i = n.push(o));
            for (; i--; )
                Z.call(e, n[i], 1)
        }
        return re = null,
        e
    }
    ,
    S.fn.uniqueSort = function() {
        return this.pushStack(S.uniqueSort(a.apply(this)))
    }
    ,
    (x = S.expr = {
        cacheLength: 50,
        createPseudo: H,
        match: ke,
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
                return e[1] = e[1].replace(u, f),
                e[3] = (e[3] || e[4] || e[5] || "").replace(u, f),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
            },
            CHILD: function(e) {
                return e[1] = e[1].toLowerCase(),
                "nth" === e[1].slice(0, 3) ? (e[3] || D.error(e[0]),
                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && D.error(e[0]),
                e
            },
            PSEUDO: function(e) {
                var t, n = !e[6] && e[2];
                return ke.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && xe.test(n) && (t = (t = Me(n, !0)) && n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                e[2] = n.slice(0, t)),
                e.slice(0, 3))
            }
        },
        filter: {
            TAG: function(e) {
                var t = e.replace(u, f).toLowerCase();
                return "*" === e ? function() {
                    return !0
                }
                : function(e) {
                    return b(e, t)
                }
            },
            CLASS: function(e) {
                var t = ue[e + " "];
                return t || (t = new RegExp("(^|" + n + ")" + e + "(" + n + "|$)")) && ue(e, function(e) {
                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                })
            },
            ATTR: function(t, n, i) {
                return function(e) {
                    e = D.attr(e, t);
                    return null == e ? "!=" === n : !n || (e += "",
                    "=" === n ? e === i : "!=" === n ? e !== i : "^=" === n ? i && 0 === e.indexOf(i) : "*=" === n ? i && -1 < e.indexOf(i) : "$=" === n ? i && e.slice(-i.length) === i : "~=" === n ? -1 < (" " + e.replace(ye, " ") + " ").indexOf(i) : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-"))
                }
            },
            CHILD: function(f, e, t, h, g) {
                var v = "nth" !== f.slice(0, 3)
                  , y = "last" !== f.slice(-4)
                  , m = "of-type" === e;
                return 1 === h && 0 === g ? function(e) {
                    return !!e.parentNode
                }
                : function(e, t, n) {
                    var i, o, r, s, a, l = v != y ? "nextSibling" : "previousSibling", c = e.parentNode, d = m && e.nodeName.toLowerCase(), u = !n && !m, p = !1;
                    if (c) {
                        if (v) {
                            for (; l; ) {
                                for (r = e; r = r[l]; )
                                    if (m ? b(r, d) : 1 === r.nodeType)
                                        return !1;
                                a = l = "only" === f && !a && "nextSibling"
                            }
                            return !0
                        }
                        if (a = [y ? c.firstChild : c.lastChild],
                        y && u) {
                            for (p = (s = (i = (o = c[E] || (c[E] = {}))[f] || [])[0] === j && i[1]) && i[2],
                            r = s && c.childNodes[s]; r = ++s && r && r[l] || (p = s = 0,
                            a.pop()); )
                                if (1 === r.nodeType && ++p && r === e) {
                                    o[f] = [j, s, p];
                                    break
                                }
                        } else if (!1 === (p = u ? s = (i = (o = e[E] || (e[E] = {}))[f] || [])[0] === j && i[1] : p))
                            for (; (r = ++s && r && r[l] || (p = s = 0,
                            a.pop())) && ((m ? !b(r, d) : 1 !== r.nodeType) || !++p || (u && ((o = r[E] || (r[E] = {}))[f] = [j, p]),
                            r !== e)); )
                                ;
                        return (p -= g) === h || p % h == 0 && 0 <= p / h
                    }
                }
            },
            PSEUDO: function(e, r) {
                var t, s = x.pseudos[e] || x.setFilters[e.toLowerCase()] || D.error("unsupported pseudo: " + e);
                return s[E] ? s(r) : 1 < s.length ? (t = [e, e, "", r],
                x.setFilters.hasOwnProperty(e.toLowerCase()) ? H(function(e, t) {
                    for (var n, i = s(e, r), o = i.length; o--; )
                        e[n = w.call(e, i[o])] = !(t[n] = i[o])
                }) : function(e) {
                    return s(e, 0, t)
                }
                ) : s
            }
        },
        pseudos: {
            not: H(function(e) {
                var i = []
                  , o = []
                  , a = _e(e.replace(ee, "$1"));
                return a[E] ? H(function(e, t, n, i) {
                    for (var o, r = a(e, null, i, []), s = e.length; s--; )
                        (o = r[s]) && (e[s] = !(t[s] = o))
                }) : function(e, t, n) {
                    return i[0] = e,
                    a(i, null, n, o),
                    i[0] = null,
                    !o.pop()
                }
            }),
            has: H(function(t) {
                return function(e) {
                    return 0 < D(t, e).length
                }
            }),
            contains: H(function(t) {
                return t = t.replace(u, f),
                function(e) {
                    return -1 < (e.textContent || S.text(e)).indexOf(t)
                }
            }),
            lang: H(function(n) {
                return Te.test(n || "") || D.error("unsupported lang: " + n),
                n = n.replace(u, f).toLowerCase(),
                function(e) {
                    var t;
                    do {
                        if (t = $ ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                            return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    } while ((e = e.parentNode) && 1 === e.nodeType);
                    return !1
                }
            }),
            target: function(e) {
                var t = T.location && T.location.hash;
                return t && t.slice(1) === e.id
            },
            root: function(e) {
                return e === ae
            },
            focus: function(e) {
                return e === function() {
                    try {
                        return C.activeElement
                    } catch (e) {}
                }() && C.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
            },
            enabled: Le(!1),
            disabled: Le(!0),
            checked: function(e) {
                return b(e, "input") && !!e.checked || b(e, "option") && !!e.selected
            },
            selected: function(e) {
                return e.parentNode && e.parentNode.selectedIndex,
                !0 === e.selected
            },
            empty: function(e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6)
                        return !1;
                return !0
            },
            parent: function(e) {
                return !x.pseudos.empty(e)
            },
            header: function(e) {
                return Ce.test(e.nodeName)
            },
            input: function(e) {
                return Se.test(e.nodeName)
            },
            button: function(e) {
                return b(e, "input") && "button" === e.type || b(e, "button")
            },
            text: function(e) {
                return b(e, "input") && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
            },
            first: Oe(function() {
                return [0]
            }),
            last: Oe(function(e, t) {
                return [t - 1]
            }),
            eq: Oe(function(e, t, n) {
                return [n < 0 ? n + t : n]
            }),
            even: Oe(function(e, t) {
                for (var n = 0; n < t; n += 2)
                    e.push(n);
                return e
            }),
            odd: Oe(function(e, t) {
                for (var n = 1; n < t; n += 2)
                    e.push(n);
                return e
            }),
            lt: Oe(function(e, t, n) {
                for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; )
                    e.push(i);
                return e
            }),
            gt: Oe(function(e, t, n) {
                for (var i = n < 0 ? n + t : n; ++i < t; )
                    e.push(i);
                return e
            })
        }
    }).pseudos.nth = x.pseudos.eq,
    {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
    })
        x.pseudos[ie] = function(t) {
            return function(e) {
                return b(e, "input") && e.type === t
            }
        }(ie);
    for (ie in {
        submit: !0,
        reset: !0
    })
        x.pseudos[ie] = function(t) {
            return function(e) {
                return (b(e, "input") || b(e, "button")) && e.type === t
            }
        }(ie);
    function qe() {}
    function Me(e, t) {
        var n, i, o, r, s, a, l, c = pe[e + " "];
        if (c)
            return t ? 0 : c.slice(0);
        for (s = e,
        a = [],
        l = x.preFilter; s; ) {
            for (r in n && !(i = me.exec(s)) || (i && (s = s.slice(i[0].length) || s),
            a.push(o = [])),
            n = !1,
            (i = we.exec(s)) && (n = i.shift(),
            o.push({
                value: n,
                type: i[0].replace(ee, " ")
            }),
            s = s.slice(n.length)),
            x.filter)
                !(i = ke[r].exec(s)) || l[r] && !(i = l[r](i)) || (n = i.shift(),
                o.push({
                    value: n,
                    type: r,
                    matches: i
                }),
                s = s.slice(n.length));
            if (!n)
                break
        }
        return t ? s.length : s ? D.error(e) : pe(e, a).slice(0)
    }
    function Ie(e) {
        for (var t = 0, n = e.length, i = ""; t < n; t++)
            i += e[t].value;
        return i
    }
    function ze(s, e, t) {
        var a = e.dir
          , l = e.next
          , c = l || a
          , d = t && "parentNode" === c
          , u = de++;
        return e.first ? function(e, t, n) {
            for (; e = e[a]; )
                if (1 === e.nodeType || d)
                    return s(e, t, n);
            return !1
        }
        : function(e, t, n) {
            var i, o, r = [j, u];
            if (n) {
                for (; e = e[a]; )
                    if ((1 === e.nodeType || d) && s(e, t, n))
                        return !0
            } else
                for (; e = e[a]; )
                    if (1 === e.nodeType || d)
                        if (o = e[E] || (e[E] = {}),
                        l && b(e, l))
                            e = e[a] || e;
                        else {
                            if ((i = o[c]) && i[0] === j && i[1] === u)
                                return r[2] = i[2];
                            if ((o[c] = r)[2] = s(e, t, n))
                                return !0
                        }
            return !1
        }
    }
    function We(o) {
        return 1 < o.length ? function(e, t, n) {
            for (var i = o.length; i--; )
                if (!o[i](e, t, n))
                    return !1;
            return !0
        }
        : o[0]
    }
    function Re(e, t, n, i, o) {
        for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
            !(r = e[a]) || n && !n(r, i, o) || (s.push(r),
            c && t.push(a));
        return s
    }
    function Fe(e) {
        for (var i, t, n, o = e.length, r = x.relative[e[0].type], s = r || x.relative[" "], a = r ? 1 : 0, l = ze(function(e) {
            return e === i
        }, s, !0), c = ze(function(e) {
            return -1 < w.call(i, e)
        }, s, !0), d = [function(e, t, n) {
            e = !r && (n || t != oe) || ((i = t).nodeType ? l : c)(e, t, n);
            return i = null,
            e
        }
        ]; a < o; a++)
            if (t = x.relative[e[a].type])
                d = [ze(We(d), t)];
            else {
                if ((t = x.filter[e[a].type].apply(null, e[a].matches))[E]) {
                    for (n = ++a; n < o && !x.relative[e[n].type]; n++)
                        ;
                    return function e(f, h, g, v, y, t) {
                        return v && !v[E] && (v = e(v)),
                        y && !y[E] && (y = e(y, t)),
                        H(function(e, t, n, i) {
                            var o, r, s, a, l = [], c = [], d = t.length, u = e || function(e, t, n) {
                                for (var i = 0, o = t.length; i < o; i++)
                                    D(e, t[i], n);
                                return n
                            }(h || "*", n.nodeType ? [n] : n, []), p = !f || !e && h ? u : Re(u, l, f, n, i);
                            if (g ? g(p, a = y || (e ? f : d || v) ? [] : t, n, i) : a = p,
                            v)
                                for (o = Re(a, c),
                                v(o, [], n, i),
                                r = o.length; r--; )
                                    (s = o[r]) && (a[c[r]] = !(p[c[r]] = s));
                            if (e) {
                                if (y || f) {
                                    if (y) {
                                        for (o = [],
                                        r = a.length; r--; )
                                            (s = a[r]) && o.push(p[r] = s);
                                        y(null, a = [], o, i)
                                    }
                                    for (r = a.length; r--; )
                                        (s = a[r]) && -1 < (o = y ? w.call(e, s) : l[r]) && (e[o] = !(t[o] = s))
                                }
                            } else
                                a = Re(a === t ? a.splice(d, a.length) : a),
                                y ? y(null, t, a, i) : A.apply(t, a)
                        })
                    }(1 < a && We(d), 1 < a && Ie(e.slice(0, a - 1).concat({
                        value: " " === e[a - 2].type ? "*" : ""
                    })).replace(ee, "$1"), t, a < n && Fe(e.slice(a, n)), n < o && Fe(e = e.slice(n)), n < o && Ie(e))
                }
                d.push(t)
            }
        return We(d)
    }
    function _e(e, t) {
        var n, v, y, m, w, i, o = [], r = [], s = fe[e + " "];
        if (!s) {
            for (n = (t = t || Me(e)).length; n--; )
                ((s = Fe(t[n]))[E] ? o : r).push(s);
            (s = fe(e, (m = 0 < (y = o).length,
            w = 0 < (v = r).length,
            i = function(e, t, n, i, o) {
                var r, s, a, l = 0, c = "0", d = e && [], u = [], p = oe, f = e || w && x.find.TAG("*", o), h = j += null == p ? 1 : Math.random() || .1, g = f.length;
                for (o && (oe = t == C || t || o); c !== g && null != (r = f[c]); c++) {
                    if (w && r) {
                        for (s = 0,
                        t || r.ownerDocument == C || (Ne(r),
                        n = !$); a = v[s++]; )
                            if (a(r, t || C, n)) {
                                A.call(i, r);
                                break
                            }
                        o && (j = h)
                    }
                    m && ((r = !a && r) && l--,
                    e) && d.push(r)
                }
                if (l += c,
                m && c !== l) {
                    for (s = 0; a = y[s++]; )
                        a(d, u, t, n);
                    if (e) {
                        if (0 < l)
                            for (; c--; )
                                d[c] || u[c] || (u[c] = J.call(i));
                        u = Re(u)
                    }
                    A.apply(i, u),
                    o && !e && 0 < u.length && 1 < l + y.length && S.uniqueSort(i)
                }
                return o && (j = h,
                oe = p),
                d
            }
            ,
            m ? H(i) : i))).selector = e
        }
        return s
    }
    function Be(e, t, n, i) {
        var o, r, s, a, l, c = "function" == typeof e && e, d = !i && Me(e = c.selector || e);
        if (n = n || [],
        1 === d.length) {
            if (2 < (r = d[0] = d[0].slice(0)).length && "ID" === (s = r[0]).type && 9 === t.nodeType && $ && x.relative[r[1].type]) {
                if (!(t = (x.find.ID(s.matches[0].replace(u, f), t) || [])[0]))
                    return n;
                c && (t = t.parentNode),
                e = e.slice(r.shift().value.length)
            }
            for (o = ke.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o],
            !x.relative[a = s.type]); )
                if ((l = x.find[a]) && (i = l(s.matches[0].replace(u, f), Ae.test(r[0].type) && Pe(t.parentNode) || t))) {
                    if (r.splice(o, 1),
                    e = i.length && Ie(r))
                        break;
                    return A.apply(n, i),
                    n
                }
        }
        return (c || _e(e, d))(i, t, !$, n, !t || Ae.test(e) && Pe(t.parentNode) || t),
        n
    }
    qe.prototype = x.filters = x.pseudos,
    x.setFilters = new qe,
    g.sortStable = E.split("").sort(ge).join("") === E,
    Ne(),
    g.sortDetached = He(function(e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
    }),
    S.find = D,
    S.expr[":"] = S.expr.pseudos,
    S.unique = S.uniqueSort,
    D.compile = _e,
    D.select = Be,
    D.setDocument = Ne,
    D.escape = S.escapeSelector,
    D.getText = S.text,
    D.isXML = S.isXMLDoc,
    D.selectors = S.expr,
    D.support = S.support,
    D.uniqueSort = S.uniqueSort;
    function Ue(e, t, n) {
        for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (o && S(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
    function Xe(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var Ye = S.expr.match.needsContext
      , Ve = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function Ge(e, n, i) {
        return m(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== i
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < w.call(n, e) !== i
        }) : S.filter(n, e, i)
    }
    S.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? S.find.matchesSelector(i, e) ? [i] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    S.fn.extend({
        find: function(e) {
            var t, n, i = this.length, o = this;
            if ("string" != typeof e)
                return this.pushStack(S(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (S.contains(o[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < i; t++)
                S.find(e, o[t], n);
            return 1 < i ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(Ge(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(Ge(this, e || [], !0))
        },
        is: function(e) {
            return !!Ge(this, "string" == typeof e && Ye.test(e) ? S(e) : e || [], !1).length
        }
    });
    var Qe, Je = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Ke = ((S.fn.init = function(e, t, n) {
        if (e) {
            if (n = n || Qe,
            "string" != typeof e)
                return e.nodeType ? (this[0] = e,
                this.length = 1,
                this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : Je.exec(e)) || !i[1] && t)
                return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
            if (i[1]) {
                if (t = t instanceof S ? t[0] : t,
                S.merge(this, S.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : k, !0)),
                Ve.test(i[1]) && S.isPlainObject(t))
                    for (var i in t)
                        m(this[i]) ? this[i](t[i]) : this.attr(i, t[i])
            } else
                (n = k.getElementById(i[2])) && (this[0] = n,
                this.length = 1)
        }
        return this
    }
    ).prototype = S.fn,
    Qe = S(k),
    /^(?:parents|prev(?:Until|All))/), Ze = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function et(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0, o = this.length, r = [], s = "string" != typeof e && S(e);
            if (!Ye.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
            return this.pushStack(1 < r.length ? S.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? w.call(S(e), this[0]) : w.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    S.each({
        parent: function(e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return Ue(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Ue(e, "parentNode", n)
        },
        next: function(e) {
            return et(e, "nextSibling")
        },
        prev: function(e) {
            return et(e, "previousSibling")
        },
        nextAll: function(e) {
            return Ue(e, "nextSibling")
        },
        prevAll: function(e) {
            return Ue(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Ue(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Ue(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Xe((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Xe(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && I(e.contentDocument) ? e.contentDocument : (b(e, "template") && (e = e.content || e),
            S.merge([], e.childNodes))
        }
    }, function(i, o) {
        S.fn[i] = function(e, t) {
            var n = S.map(this, o, e);
            return (t = "Until" !== i.slice(-5) ? e : t) && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length && (Ze[i] || S.uniqueSort(n),
            Ke.test(i)) && n.reverse(),
            this.pushStack(n)
        }
    });
    var L = /[^\x20\t\r\n\f]+/g;
    function tt(e) {
        return e
    }
    function nt(e) {
        throw e
    }
    function it(e, t, n, i) {
        var o;
        try {
            e && m(o = e.promise) ? o.call(e).done(t).fail(n) : e && m(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(i) {
        var e, n;
        i = "string" == typeof i ? (e = i,
        n = {},
        S.each(e.match(L) || [], function(e, t) {
            n[t] = !0
        }),
        n) : S.extend({}, i);
        function o() {
            for (a = a || i.once,
            s = r = !0; c.length; d = -1)
                for (t = c.shift(); ++d < l.length; )
                    !1 === l[d].apply(t[0], t[1]) && i.stopOnFalse && (d = l.length,
                    t = !1);
            i.memory || (t = !1),
            r = !1,
            a && (l = t ? [] : "")
        }
        var r, t, s, a, l = [], c = [], d = -1, u = {
            add: function() {
                return l && (t && !r && (d = l.length - 1,
                c.push(t)),
                function n(e) {
                    S.each(e, function(e, t) {
                        m(t) ? i.unique && u.has(t) || l.push(t) : t && t.length && "string" !== V(t) && n(t)
                    })
                }(arguments),
                t) && !r && o(),
                this
            },
            remove: function() {
                return S.each(arguments, function(e, t) {
                    for (var n; -1 < (n = S.inArray(t, l, n)); )
                        l.splice(n, 1),
                        n <= d && d--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < S.inArray(e, l) : 0 < l.length
            },
            empty: function() {
                return l = l && [],
                this
            },
            disable: function() {
                return a = c = [],
                l = t = "",
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return a = c = [],
                t || r || (l = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                c.push(t),
                r) || o(),
                this
            },
            fire: function() {
                return u.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!s
            }
        };
        return u
    }
    ,
    S.extend({
        Deferred: function(e) {
            var r = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]]
              , o = "pending"
              , s = {
                state: function() {
                    return o
                },
                always: function() {
                    return a.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return s.then(null, e)
                },
                pipe: function() {
                    var o = arguments;
                    return S.Deferred(function(i) {
                        S.each(r, function(e, t) {
                            var n = m(o[t[4]]) && o[t[4]];
                            a[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && m(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        o = null
                    }).promise()
                },
                then: function(t, n, i) {
                    var l = 0;
                    function c(o, r, s, a) {
                        return function() {
                            function e() {
                                var e, t;
                                if (!(o < l)) {
                                    if ((e = s.apply(n, i)) === r.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then,
                                    m(t) ? a ? t.call(e, c(l, r, tt, a), c(l, r, nt, a)) : (l++,
                                    t.call(e, c(l, r, tt, a), c(l, r, nt, a), c(l, r, tt, r.notifyWith))) : (s !== tt && (n = void 0,
                                    i = [e]),
                                    (a || r.resolveWith)(n, i))
                                }
                            }
                            var n = this
                              , i = arguments
                              , t = a ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.error),
                                    l <= o + 1 && (s !== nt && (n = void 0,
                                    i = [e]),
                                    r.rejectWith(n, i))
                                }
                            }
                            ;
                            o ? t() : (S.Deferred.getErrorHook ? t.error = S.Deferred.getErrorHook() : S.Deferred.getStackHook && (t.error = S.Deferred.getStackHook()),
                            T.setTimeout(t))
                        }
                    }
                    return S.Deferred(function(e) {
                        r[0][3].add(c(0, e, m(i) ? i : tt, e.notifyWith)),
                        r[1][3].add(c(0, e, m(t) ? t : tt)),
                        r[2][3].add(c(0, e, m(n) ? n : nt))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? S.extend(e, s) : s
                }
            }
              , a = {};
            return S.each(r, function(e, t) {
                var n = t[2]
                  , i = t[5];
                s[t[1]] = n.add,
                i && n.add(function() {
                    o = i
                }, r[3 - e][2].disable, r[3 - e][3].disable, r[0][2].lock, r[0][3].lock),
                n.add(t[3].fire),
                a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments),
                    this
                }
                ,
                a[t[0] + "With"] = n.fireWith
            }),
            s.promise(a),
            e && e.call(a, a),
            a
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    o[t] = this,
                    r[t] = 1 < arguments.length ? a.call(arguments) : e,
                    --n || s.resolveWith(o, r)
                }
            }
            var n = arguments.length
              , i = n
              , o = Array(i)
              , r = a.call(arguments)
              , s = S.Deferred();
            if (n <= 1 && (it(e, s.done(t(i)).resolve, s.reject, !n),
            "pending" === s.state() || m(r[i] && r[i].then)))
                return s.then();
            for (; i--; )
                it(r[i], t(i), s.reject);
            return s.promise()
        }
    });
    var ot = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
      , rt = (S.Deferred.exceptionHook = function(e, t) {
        T.console && T.console.warn && e && ot.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    S.readyException = function(e) {
        T.setTimeout(function() {
            throw e
        })
    }
    ,
    S.Deferred());
    function st() {
        k.removeEventListener("DOMContentLoaded", st),
        T.removeEventListener("load", st),
        S.ready()
    }
    S.fn.ready = function(e) {
        return rt.then(e).catch(function(e) {
            S.readyException(e)
        }),
        this
    }
    ,
    S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || rt.resolveWith(k, [S])
        }
    }),
    S.ready.then = rt.then,
    "complete" === k.readyState || "loading" !== k.readyState && !k.documentElement.doScroll ? T.setTimeout(S.ready) : (k.addEventListener("DOMContentLoaded", st),
    T.addEventListener("load", st));
    function d(e, t, n, i, o, r, s) {
        var a = 0
          , l = e.length
          , c = null == n;
        if ("object" === V(n))
            for (a in o = !0,
            n)
                d(e, t, a, n[a], !0, r, s);
        else if (void 0 !== i && (o = !0,
        m(i) || (s = !0),
        t = c ? s ? (t.call(e, i),
        null) : (c = t,
        function(e, t, n) {
            return c.call(S(e), n)
        }
        ) : t))
            for (; a < l; a++)
                t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
    }
    var at = /^-ms-/
      , lt = /-([a-z])/g;
    function ct(e, t) {
        return t.toUpperCase()
    }
    function O(e) {
        return e.replace(at, "ms-").replace(lt, ct)
    }
    function dt(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    function ut() {
        this.expando = S.expando + ut.uid++
    }
    ut.uid = 1,
    ut.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            dt(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t)
                o[O(t)] = n;
            else
                for (i in t)
                    o[O(i)] = t[i];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][O(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(O) : (t = O(t))in i ? [t] : t.match(L) || []).length;
                    for (; n--; )
                        delete i[t[n]]
                }
                void 0 !== t && !S.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            e = e[this.expando];
            return void 0 !== e && !S.isEmptyObject(e)
        }
    };
    var y = new ut
      , l = new ut
      , pt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , ft = /[A-Z]/g;
    function ht(e, t, n) {
        var i, o;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(ft, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : pt.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                l.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return l.hasData(e) || y.hasData(e)
        },
        data: function(e, t, n) {
            return l.access(e, t, n)
        },
        removeData: function(e, t) {
            l.remove(e, t)
        },
        _data: function(e, t, n) {
            return y.access(e, t, n)
        },
        _removeData: function(e, t) {
            y.remove(e, t)
        }
    }),
    S.fn.extend({
        data: function(n, e) {
            var t, i, o, r = this[0], s = r && r.attributes;
            if (void 0 !== n)
                return "object" == _typeof(n) ? this.each(function() {
                    l.set(this, n)
                }) : d(this, function(e) {
                    var t;
                    if (r && void 0 === e)
                        return void 0 !== (t = l.get(r, n)) || void 0 !== (t = ht(r, n)) ? t : void 0;
                    this.each(function() {
                        l.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (o = l.get(r),
            1 === r.nodeType) && !y.get(r, "hasDataAttrs")) {
                for (t = s.length; t--; )
                    s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = O(i.slice(5)),
                    ht(r, i, o[i]));
                y.set(r, "hasDataAttrs", !0)
            }
            return o
        },
        removeData: function(e) {
            return this.each(function() {
                l.remove(this, e)
            })
        }
    }),
    S.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return i = y.get(e, t = (t || "fx") + "queue"),
                n && (!i || Array.isArray(n) ? i = y.access(e, t, S.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t)
              , i = n.length
              , o = n.shift()
              , r = S._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(),
            i--),
            o && ("fx" === t && n.unshift("inprogress"),
            delete r.stop,
            o.call(e, function() {
                S.dequeue(e, t)
            }, r)),
            !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return y.get(e, n) || y.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    y.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --o || r.resolveWith(s, [s])
            }
            var i, o = 1, r = S.Deferred(), s = this, a = this.length;
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (i = y.get(s[a], e + "queueHooks")) && i.empty && (o++,
                i.empty.add(n));
            return n(),
            r.promise(t)
        }
    });
    function gt(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && mt(e) && "none" === S.css(e, "display")
    }
    var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , vt = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$","i")
      , h = ["Top", "Right", "Bottom", "Left"]
      , yt = k.documentElement
      , mt = function(e) {
        return S.contains(e.ownerDocument, e)
    }
      , wt = {
        composed: !0
    };
    yt.getRootNode && (mt = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(wt) === e.ownerDocument
    }
    );
    function bt(e, t, n, i) {
        var o, r, s = 20, a = i ? function() {
            return i.cur()
        }
        : function() {
            return S.css(e, t, "")
        }
        , l = a(), c = n && n[3] || (S.cssNumber[t] ? "" : "px"), d = e.nodeType && (S.cssNumber[t] || "px" !== c && +l) && vt.exec(S.css(e, t));
        if (d && d[3] !== c) {
            for (c = c || d[3],
            d = +(l /= 2) || 1; s--; )
                S.style(e, t, d + c),
                (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0),
                d /= r;
            S.style(e, t, (d *= 2) + c),
            n = n || []
        }
        return n && (d = +d || +l || 0,
        o = n[1] ? d + (n[1] + 1) * n[2] : +n[2],
        i) && (i.unit = c,
        i.start = d,
        i.end = o),
        o
    }
    var xt = {};
    function Tt(e, t) {
        for (var n, i, o, r, s, a, l = [], c = 0, d = e.length; c < d; c++)
            (i = e[c]).style && (n = i.style.display,
            t ? ("none" === n && (l[c] = y.get(i, "display") || null,
            l[c] || (i.style.display = "")),
            "" === i.style.display && gt(i) && (l[c] = (a = r = o = void 0,
            r = i.ownerDocument,
            s = i.nodeName,
            (a = xt[s]) || (o = r.body.appendChild(r.createElement(s)),
            a = S.css(o, "display"),
            o.parentNode.removeChild(o),
            xt[s] = a = "none" === a ? "block" : a)))) : "none" !== n && (l[c] = "none",
            y.set(i, "display", n)));
        for (c = 0; c < d; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return Tt(this, !0)
        },
        hide: function() {
            return Tt(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                gt(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var kt = /^(?:checkbox|radio)$/i
      , St = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , Ct = /^$|^module$|\/(?:java|ecma)script/i
      , o = k.createDocumentFragment().appendChild(k.createElement("div"))
      , v = ((r = k.createElement("input")).setAttribute("type", "radio"),
    r.setAttribute("checked", "checked"),
    r.setAttribute("name", "t"),
    o.appendChild(r),
    g.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked,
    o.innerHTML = "<textarea>x</textarea>",
    g.noCloneChecked = !!o.cloneNode(!0).lastChild.defaultValue,
    o.innerHTML = "<option></option>",
    g.option = !!o.lastChild,
    {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    });
    function P(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && b(e, t) ? S.merge([e], n) : n
    }
    function $t(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            y.set(e[n], "globalEval", !t || y.get(t[n], "globalEval"))
    }
    v.tbody = v.tfoot = v.colgroup = v.caption = v.thead,
    v.th = v.td,
    g.option || (v.optgroup = v.option = [1, "<select multiple='multiple'>", "</select>"]);
    var At = /<|&#?\w+;/;
    function Et(e, t, n, i, o) {
        for (var r, s, a, l, c, d = t.createDocumentFragment(), u = [], p = 0, f = e.length; p < f; p++)
            if ((r = e[p]) || 0 === r)
                if ("object" === V(r))
                    S.merge(u, r.nodeType ? [r] : r);
                else if (At.test(r)) {
                    for (s = s || d.appendChild(t.createElement("div")),
                    a = (St.exec(r) || ["", ""])[1].toLowerCase(),
                    a = v[a] || v._default,
                    s.innerHTML = a[1] + S.htmlPrefilter(r) + a[2],
                    c = a[0]; c--; )
                        s = s.lastChild;
                    S.merge(u, s.childNodes),
                    (s = d.firstChild).textContent = ""
                } else
                    u.push(t.createTextNode(r));
        for (d.textContent = "",
        p = 0; r = u[p++]; )
            if (i && -1 < S.inArray(r, i))
                o && o.push(r);
            else if (l = mt(r),
            s = P(d.appendChild(r), "script"),
            l && $t(s),
            n)
                for (c = 0; r = s[c++]; )
                    Ct.test(r.type || "") && n.push(r);
        return d
    }
    var jt = /^([^.]*)(?:\.(.+)|)/;
    function Dt() {
        return !0
    }
    function Ht() {
        return !1
    }
    function Lt(e, t, n, i, o, r) {
        var s, a;
        if ("object" == _typeof(t)) {
            for (a in "string" != typeof n && (i = i || n,
            n = void 0),
            t)
                Lt(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n,
        i = n = void 0) : null == o && ("string" == typeof n ? (o = i,
        i = void 0) : (o = i,
        i = n,
        n = void 0)),
        !1 === o)
            o = Ht;
        else if (!o)
            return e;
        return 1 === r && (s = o,
        (o = function(e) {
            return S().off(e),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = S.guid++)),
        e.each(function() {
            S.event.add(this, t, o, i, n)
        })
    }
    function Ot(e, i, t) {
        t ? (y.set(e, i, !1),
        S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n = y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (n)
                        (S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (n = a.call(arguments),
                    y.set(this, i, n),
                    this[i](),
                    t = y.get(this, i),
                    y.set(this, i, !1),
                    n !== t)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        t
                } else
                    n && (y.set(this, i, S.event.trigger(n[0], n.slice(1), this)),
                    e.stopPropagation(),
                    e.isImmediatePropagationStopped = Dt)
            }
        })) : void 0 === y.get(e, i) && S.event.add(e, i, Dt)
    }
    S.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r, s, a, l, c, d, u, p, f, h = y.get(t);
            if (dt(t))
                for (n.handler && (n = (r = n).handler,
                o = r.selector),
                o && S.find.matchesSelector(yt, o),
                n.guid || (n.guid = S.guid++),
                a = (a = h.events) || (h.events = Object.create(null)),
                s = (s = h.handle) || (h.handle = function(e) {
                    return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(L) || [""]).length; l--; )
                    u = f = (p = jt.exec(e[l]) || [])[1],
                    p = (p[2] || "").split(".").sort(),
                    u && (c = S.event.special[u] || {},
                    u = (o ? c.delegateType : c.bindType) || u,
                    c = S.event.special[u] || {},
                    f = S.extend({
                        type: u,
                        origType: f,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && S.expr.match.needsContext.test(o),
                        namespace: p.join(".")
                    }, r),
                    (d = a[u]) || ((d = a[u] = []).delegateCount = 0,
                    c.setup && !1 !== c.setup.call(t, i, p, s)) || t.addEventListener && t.addEventListener(u, s),
                    c.add && (c.add.call(t, f),
                    f.handler.guid || (f.handler.guid = n.guid)),
                    o ? d.splice(d.delegateCount++, 0, f) : d.push(f),
                    S.event.global[u] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, l, c, d, u, p, f, h, g, v = y.hasData(e) && y.get(e);
            if (v && (l = v.events)) {
                for (c = (t = (t || "").match(L) || [""]).length; c--; )
                    if (f = g = (a = jt.exec(t[c]) || [])[1],
                    h = (a[2] || "").split(".").sort(),
                    f) {
                        for (u = S.event.special[f] || {},
                        p = l[f = (i ? u.delegateType : u.bindType) || f] || [],
                        a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = r = p.length; r--; )
                            d = p[r],
                            !o && g !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (p.splice(r, 1),
                            d.selector && p.delegateCount--,
                            u.remove && u.remove.call(e, d));
                        s && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, v.handle) || S.removeEvent(e, f, v.handle),
                        delete l[f])
                    } else
                        for (f in l)
                            S.event.remove(e, f + t[c], n, i, !0);
                S.isEmptyObject(l) && y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, o, r, s = new Array(arguments.length), a = S.event.fix(e), e = (y.get(this, "events") || Object.create(null))[a.type] || [], l = S.event.special[a.type] || {};
            for (s[0] = a,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (a.delegateTarget = this,
            !l.preDispatch || !1 !== l.preDispatch.call(this, a)) {
                for (r = S.event.handlers.call(this, a, e),
                t = 0; (i = r[t++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                        a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o,
                        a.data = o.data,
                        void 0 !== (o = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (a.result = o) && (a.preventDefault(),
                        a.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s, a = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [],
                        s = {},
                        n = 0; n < l; n++)
                            void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? -1 < S(o, this).index(c) : S.find(o, this, null, [c]).length),
                            s[o] && r.push(i);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    }
            return c = this,
            l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }),
            a
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    e = this || e;
                    return kt.test(e.type) && e.click && b(e, "input") && Ot(e, "click", !0),
                    !1
                },
                trigger: function(e) {
                    e = this || e;
                    return kt.test(e.type) && e.click && b(e, "input") && Ot(e, "click"),
                    !0
                },
                _default: function(e) {
                    e = e.target;
                    return kt.test(e.type) && e.click && b(e, "input") && y.get(e, "click") || b(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    S.Event = function(e, t) {
        if (!(this instanceof S.Event))
            return new S.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Dt : Ht,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && S.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[S.expando] = !0
    }
    ,
    S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Ht,
        isPropagationStopped: Ht,
        isImmediatePropagationStopped: Ht,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Dt,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Dt,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Dt,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, S.event.addProp),
    S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(i, o) {
        function r(e) {
            var t, n;
            k.documentMode ? (t = y.get(this, "handle"),
            (n = S.event.fix(e)).type = "focusin" === e.type ? "focus" : "blur",
            n.isSimulated = !0,
            t(e),
            n.target === n.currentTarget && t(n)) : S.event.simulate(o, e.target, S.event.fix(e))
        }
        S.event.special[i] = {
            setup: function() {
                var e;
                if (Ot(this, i, !0),
                !k.documentMode)
                    return !1;
                (e = y.get(this, o)) || this.addEventListener(o, r),
                y.set(this, o, (e || 0) + 1)
            },
            trigger: function() {
                return Ot(this, i),
                !0
            },
            teardown: function() {
                var e;
                if (!k.documentMode)
                    return !1;
                (e = y.get(this, o) - 1) ? y.set(this, o, e) : (this.removeEventListener(o, r),
                y.remove(this, o))
            },
            _default: function(e) {
                return y.get(e.target, i)
            },
            delegateType: o
        },
        S.event.special[o] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = k.documentMode ? this : e
                  , n = y.get(t, o);
                n || (k.documentMode ? this.addEventListener(o, r) : e.addEventListener(i, r, !0)),
                y.set(t, o, (n || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = k.documentMode ? this : e
                  , n = y.get(t, o) - 1;
                n ? y.set(t, o, n) : (k.documentMode ? this.removeEventListener(o, r) : e.removeEventListener(i, r, !0),
                y.remove(t, o))
            }
        }
    }),
    S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        S.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = e.relatedTarget, i = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = i.origType,
                t = i.handler.apply(this, arguments),
                e.type = o),
                t
            }
        }
    }),
    S.fn.extend({
        on: function(e, t, n, i) {
            return Lt(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Lt(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)
                i = e.handleObj,
                S(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler);
            else {
                if ("object" != _typeof(e))
                    return !1 !== t && "function" != typeof t || (n = t,
                    t = void 0),
                    !1 === n && (n = Ht),
                    this.each(function() {
                        S.event.remove(this, e, n, t)
                    });
                for (o in e)
                    this.off(o, t, e[o])
            }
            return this
        }
    });
    var Pt = /<script|<style|<link/i
      , Nt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , qt = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function Mt(e, t) {
        return b(e, "table") && b(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }
    function It(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function zt(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Wt(e, t) {
        var n, i, o, r;
        if (1 === t.nodeType) {
            if (y.hasData(e) && (r = y.get(e).events))
                for (o in y.remove(t, "handle events"),
                r)
                    for (n = 0,
                    i = r[o].length; n < i; n++)
                        S.event.add(t, o, r[o][n]);
            l.hasData(e) && (e = l.access(e),
            e = S.extend({}, e),
            l.set(t, e))
        }
    }
    function Rt(n, i, o, r) {
        i = z(i);
        var e, t, s, a, l, c, d = 0, u = n.length, p = u - 1, f = i[0], h = m(f);
        if (h || 1 < u && "string" == typeof f && !g.checkClone && Nt.test(f))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (i[0] = f.call(this, e, t.html())),
                Rt(t, i, o, r)
            });
        if (u && (t = (e = Et(i, n[0].ownerDocument, !1, n, r)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || r)) {
            for (a = (s = S.map(P(e, "script"), It)).length; d < u; d++)
                l = e,
                d !== p && (l = S.clone(l, !0, !0),
                a) && S.merge(s, P(l, "script")),
                o.call(n[d], l, d);
            if (a)
                for (c = s[s.length - 1].ownerDocument,
                S.map(s, zt),
                d = 0; d < a; d++)
                    l = s[d],
                    Ct.test(l.type || "") && !y.access(l, "globalEval") && S.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? S._evalUrl && !l.noModule && S._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }, c) : Y(l.textContent.replace(qt, ""), l, c))
        }
        return n
    }
    function Ft(e, t, n) {
        for (var i, o = t ? S.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
            n || 1 !== i.nodeType || S.cleanData(P(i)),
            i.parentNode && (n && mt(i) && $t(P(i, "script")),
            i.parentNode.removeChild(i));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var i, o, r, s, a, l, c, d = e.cloneNode(!0), u = mt(e);
            if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (s = P(d),
                i = 0,
                o = (r = P(e)).length; i < o; i++)
                    a = r[i],
                    "input" === (c = (l = s[i]).nodeName.toLowerCase()) && kt.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (r = r || P(e),
                    s = s || P(d),
                    i = 0,
                    o = r.length; i < o; i++)
                        Wt(r[i], s[i]);
                else
                    Wt(e, d);
            return 0 < (s = P(d, "script")).length && $t(s, !u && P(e, "script")),
            d
        },
        cleanData: function(e) {
            for (var t, n, i, o = S.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (dt(n)) {
                    if (t = n[y.expando]) {
                        if (t.events)
                            for (i in t.events)
                                o[i] ? S.event.remove(n, i) : S.removeEvent(n, i, t.handle);
                        n[y.expando] = void 0
                    }
                    n[l.expando] && (n[l.expando] = void 0)
                }
        }
    }),
    S.fn.extend({
        detach: function(e) {
            return Ft(this, e, !0)
        },
        remove: function(e) {
            return Ft(this, e)
        },
        text: function(e) {
            return d(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Rt(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Mt(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Rt(this, arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Mt(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return Rt(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Rt(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (S.cleanData(P(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return d(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Pt.test(e) && !v[(St.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < i; n++)
                            1 === (t = this[n] || {}).nodeType && (S.cleanData(P(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Rt(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(P(this)),
                t) && t.replaceChild(e, this)
            }, n)
        }
    }),
    S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        S.fn[e] = function(e) {
            for (var t, n = [], i = S(e), o = i.length - 1, r = 0; r <= o; r++)
                t = r === o ? this : this.clone(!0),
                S(i[r])[s](t),
                W.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    function _t(e) {
        var t = e.ownerDocument.defaultView;
        return (t = t && t.opener ? t : T).getComputedStyle(e)
    }
    function Bt(e, t, n) {
        var i, o = {};
        for (i in t)
            o[i] = e.style[i],
            e.style[i] = t[i];
        for (i in n = n.call(e),
        t)
            e.style[i] = o[i];
        return n
    }
    var Ut, Xt, Yt, Vt, Gt, Qt, Jt, s, Kt = new RegExp("^(" + e + ")(?!px)[a-z%]+$","i"), Zt = /^--/, en = new RegExp(h.join("|"),"i");
    function tn(e, t, n) {
        var i, o = Zt.test(t), r = e.style;
        return (n = n || _t(e)) && (i = n.getPropertyValue(t) || n[t],
        "" !== (i = o ? i && (i.replace(ee, "$1") || void 0) : i) || mt(e) || (i = S.style(e, t)),
        !g.pixelBoxStyles()) && Kt.test(i) && en.test(t) && (o = r.width,
        e = r.minWidth,
        t = r.maxWidth,
        r.minWidth = r.maxWidth = r.width = i,
        i = n.width,
        r.width = o,
        r.minWidth = e,
        r.maxWidth = t),
        void 0 !== i ? i + "" : i
    }
    function nn(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    function on() {
        var e;
        s && (Jt.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
        s.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
        yt.appendChild(Jt).appendChild(s),
        e = T.getComputedStyle(s),
        Ut = "1%" !== e.top,
        Qt = 12 === rn(e.marginLeft),
        s.style.right = "60%",
        Vt = 36 === rn(e.right),
        Xt = 36 === rn(e.width),
        s.style.position = "absolute",
        Yt = 12 === rn(s.offsetWidth / 3),
        yt.removeChild(Jt),
        s = null)
    }
    function rn(e) {
        return Math.round(parseFloat(e))
    }
    Jt = k.createElement("div"),
    (s = k.createElement("div")).style && (s.style.backgroundClip = "content-box",
    s.cloneNode(!0).style.backgroundClip = "",
    g.clearCloneStyle = "content-box" === s.style.backgroundClip,
    S.extend(g, {
        boxSizingReliable: function() {
            return on(),
            Xt
        },
        pixelBoxStyles: function() {
            return on(),
            Vt
        },
        pixelPosition: function() {
            return on(),
            Ut
        },
        reliableMarginLeft: function() {
            return on(),
            Qt
        },
        scrollboxSize: function() {
            return on(),
            Yt
        },
        reliableTrDimensions: function() {
            var e, t, n;
            return null == Gt && (e = k.createElement("table"),
            t = k.createElement("tr"),
            n = k.createElement("div"),
            e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
            t.style.cssText = "border:1px solid",
            t.style.height = "1px",
            n.style.height = "9px",
            n.style.display = "block",
            yt.appendChild(e).appendChild(t).appendChild(n),
            n = T.getComputedStyle(t),
            Gt = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight,
            yt.removeChild(e)),
            Gt
        }
    }));
    var sn = ["Webkit", "Moz", "ms"]
      , an = k.createElement("div").style
      , ln = {};
    function cn(e) {
        return S.cssProps[e] || ln[e] || (e in an ? e : ln[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = sn.length; n--; )
                if ((e = sn[n] + t)in an)
                    return e
        }(e) || e)
    }
    var dn = /^(none|table(?!-c[ea]).+)/
      , un = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , pn = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function fn(e, t, n) {
        var i = vt.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }
    function hn(e, t, n, i, o, r) {
        var s = "width" === t ? 1 : 0
          , a = 0
          , l = 0
          , c = 0;
        if (n === (i ? "border" : "content"))
            return 0;
        for (; s < 4; s += 2)
            "margin" === n && (c += S.css(e, n + h[s], !0, o)),
            i ? ("content" === n && (l -= S.css(e, "padding" + h[s], !0, o)),
            "margin" !== n && (l -= S.css(e, "border" + h[s] + "Width", !0, o))) : (l += S.css(e, "padding" + h[s], !0, o),
            "padding" !== n ? l += S.css(e, "border" + h[s] + "Width", !0, o) : a += S.css(e, "border" + h[s] + "Width", !0, o));
        return !i && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0),
        l + c
    }
    function gn(e, t, n) {
        var i = _t(e)
          , o = (!g.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, i)
          , r = o
          , s = tn(e, t, i)
          , a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Kt.test(s)) {
            if (!n)
                return s;
            s = "auto"
        }
        return (!g.boxSizingReliable() && o || !g.reliableTrDimensions() && b(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === S.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === S.css(e, "boxSizing", !1, i),
        r = a in e) && (s = e[a]),
        (s = parseFloat(s) || 0) + hn(e, t, n || (o ? "border" : "content"), r, i, s) + "px"
    }
    function c(e, t, n, i, o) {
        return new c.prototype.init(e,t,n,i,o)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t)
                        return "" === (t = tn(e, "opacity")) ? "1" : t
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = O(t), l = Zt.test(t), c = e.style;
                if (l || (t = cn(a)),
                s = S.cssHooks[t] || S.cssHooks[a],
                void 0 === n)
                    return s && "get"in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                "string" === (r = _typeof(n)) && (o = vt.exec(n)) && o[1] && (n = bt(e, t, o),
                r = "number"),
                null != n && n == n && ("number" !== r || l || (n += o && o[3] || (S.cssNumber[a] ? "" : "px")),
                g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var o, r = O(t);
            return Zt.test(t) || (t = cn(r)),
            "normal" === (o = void 0 === (o = (r = S.cssHooks[t] || S.cssHooks[r]) && "get"in r ? r.get(e, !0, n) : o) ? tn(e, t, i) : o) && t in pn && (o = pn[t]),
            ("" === n || n) && (r = parseFloat(o),
            !0 === n || isFinite(r)) ? r || 0 : o
        }
    }),
    S.each(["height", "width"], function(e, s) {
        S.cssHooks[s] = {
            get: function(e, t, n) {
                if (t)
                    return !dn.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? gn(e, s, n) : Bt(e, un, function() {
                        return gn(e, s, n)
                    })
            },
            set: function(e, t, n) {
                var i = _t(e)
                  , o = !g.scrollboxSize() && "absolute" === i.position
                  , r = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i)
                  , n = n ? hn(e, s, n, r, i) : 0;
                return r && o && (n -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(i[s]) - hn(e, s, "border", !1, i) - .5)),
                n && (r = vt.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t,
                t = S.css(e, s)),
                fn(0, t, n)
            }
        }
    }),
    S.cssHooks.marginLeft = nn(g.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(tn(e, "marginLeft")) || e.getBoundingClientRect().left - Bt(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(o, r) {
        S.cssHooks[o + r] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[o + h[t] + r] = i[t] || i[t - 2] || i[0];
                return n
            }
        },
        "margin" !== o && (S.cssHooks[o + r].set = fn)
    }),
    S.fn.extend({
        css: function(e, t) {
            return d(this, function(e, t, n) {
                var i, o, r = {}, s = 0;
                if (Array.isArray(t)) {
                    for (i = _t(e),
                    o = t.length; s < o; s++)
                        r[t[s]] = S.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((S.Tween = c).prototype = {
        constructor: c,
        init: function(e, t, n, i, o, r) {
            this.elem = e,
            this.prop = n,
            this.easing = o || S.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = r || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = c.propHooks[this.prop];
            return (e && e.get ? e : c.propHooks._default).get(this)
        },
        run: function(e) {
            var t, n = c.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (n && n.set ? n : c.propHooks._default).set(this),
            this
        }
    }).init.prototype = c.prototype,
    (c.propHooks = {
        _default: {
            get: function(e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = S.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[cn(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = c.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    S.fx = c.prototype.init,
    S.fx.step = {};
    var vn, yn, mn = /^(?:toggle|show|hide)$/, wn = /queueHooks$/;
    function bn() {
        yn && (!1 === k.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(bn) : T.setTimeout(bn, S.fx.interval),
        S.fx.tick())
    }
    function xn() {
        return T.setTimeout(function() {
            vn = void 0
        }),
        vn = Date.now()
    }
    function Tn(e, t) {
        var n, i = 0, o = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            o["margin" + (n = h[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e),
        o
    }
    function kn(e, t, n) {
        for (var i, o = (N.tweeners[t] || []).concat(N.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e))
                return i
    }
    function N(o, e, t) {
        var n, r, i, s, a, l, c, d = 0, u = N.prefilters.length, p = S.Deferred().always(function() {
            delete f.elem
        }), f = function() {
            if (r)
                return !1;
            for (var e = vn || xn(), e = Math.max(0, h.startTime + h.duration - e), t = 1 - (e / h.duration || 0), n = 0, i = h.tweens.length; n < i; n++)
                h.tweens[n].run(t);
            return p.notifyWith(o, [h, t, e]),
            t < 1 && i ? e : (i || p.notifyWith(o, [h, 1, 0]),
            p.resolveWith(o, [h]),
            !1)
        }, h = p.promise({
            elem: o,
            props: S.extend({}, e),
            opts: S.extend(!0, {
                specialEasing: {},
                easing: S.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: vn || xn(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                t = S.Tween(o, h.opts, e, t, h.opts.specialEasing[e] || h.opts.easing);
                return h.tweens.push(t),
                t
            },
            stop: function(e) {
                var t = 0
                  , n = e ? h.tweens.length : 0;
                if (!r) {
                    for (r = !0; t < n; t++)
                        h.tweens[t].run(1);
                    e ? (p.notifyWith(o, [h, 1, 0]),
                    p.resolveWith(o, [h, e])) : p.rejectWith(o, [h, e])
                }
                return this
            }
        }), g = h.props, v = g, y = h.opts.specialEasing;
        for (i in v)
            if (a = y[s = O(i)],
            l = v[i],
            Array.isArray(l) && (a = l[1],
            l = v[i] = l[0]),
            i !== s && (v[s] = l,
            delete v[i]),
            (c = S.cssHooks[s]) && "expand"in c)
                for (i in l = c.expand(l),
                delete v[s],
                l)
                    i in v || (v[i] = l[i],
                    y[i] = a);
            else
                y[s] = a;
        for (; d < u; d++)
            if (n = N.prefilters[d].call(h, o, g, h.opts))
                return m(n.stop) && (S._queueHooks(h.elem, h.opts.queue).stop = n.stop.bind(n)),
                n;
        return S.map(g, kn, h),
        m(h.opts.start) && h.opts.start.call(o, h),
        h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always),
        S.fx.timer(S.extend(f, {
            elem: o,
            anim: h,
            queue: h.opts.queue
        })),
        h
    }
    S.Animation = S.extend(N, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return bt(n.elem, e, vt.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            for (var n, i = 0, o = (e = m(e) ? (t = e,
            ["*"]) : e.match(L)).length; i < o; i++)
                n = e[i],
                N.tweeners[n] = N.tweeners[n] || [],
                N.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, o, r, s, a, l, c, d = "width"in t || "height"in t, u = this, p = {}, f = e.style, h = e.nodeType && gt(e), g = y.get(e, "fxshow");
            for (i in n.queue || (null == (s = S._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
            a = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || a()
            }
            ),
            s.unqueued++,
            u.always(function() {
                u.always(function() {
                    s.unqueued--,
                    S.queue(e, "fx").length || s.empty.fire()
                })
            })),
            t)
                if (o = t[i],
                mn.test(o)) {
                    if (delete t[i],
                    r = r || "toggle" === o,
                    o === (h ? "hide" : "show")) {
                        if ("show" !== o || !g || void 0 === g[i])
                            continue;
                        h = !0
                    }
                    p[i] = g && g[i] || S.style(e, i)
                }
            if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(p))
                for (i in d && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY],
                null == (c = g && g.display) && (c = y.get(e, "display")),
                "none" === (d = S.css(e, "display")) && (c ? d = c : (Tt([e], !0),
                c = e.style.display || c,
                d = S.css(e, "display"),
                Tt([e]))),
                "inline" === d || "inline-block" === d && null != c) && "none" === S.css(e, "float") && (l || (u.done(function() {
                    f.display = c
                }),
                null == c && (d = f.display,
                c = "none" === d ? "" : d)),
                f.display = "inline-block"),
                n.overflow && (f.overflow = "hidden",
                u.always(function() {
                    f.overflow = n.overflow[0],
                    f.overflowX = n.overflow[1],
                    f.overflowY = n.overflow[2]
                })),
                l = !1,
                p)
                    l || (g ? "hidden"in g && (h = g.hidden) : g = y.access(e, "fxshow", {
                        display: c
                    }),
                    r && (g.hidden = !h),
                    h && Tt([e], !0),
                    u.done(function() {
                        for (i in h || Tt([e]),
                        y.remove(e, "fxshow"),
                        p)
                            S.style(e, i, p[i])
                    })),
                    l = kn(h ? g[i] : 0, i, u),
                    i in g || (g[i] = l.start,
                    h && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? N.prefilters.unshift(e) : N.prefilters.push(e)
        }
    }),
    S.speed = function(e, t, n) {
        var i = e && "object" == _typeof(e) ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in S.fx.speeds ? i.duration = S.fx.speeds[i.duration] : i.duration = S.fx.speeds._default),
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            m(i.old) && i.old.call(this),
            i.queue && S.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    S.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(gt).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            function o() {
                var e = N(this, S.extend({}, t), s);
                (r || y.get(this, "finish")) && e.stop(!0)
            }
            var r = S.isEmptyObject(t)
              , s = S.speed(e, n, i);
            return o.finish = o,
            r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(o, e, r) {
            function s(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            }
            return "string" != typeof o && (r = e,
            e = o,
            o = void 0),
            e && this.queue(o || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != o && o + "queueHooks"
                  , n = S.timers
                  , i = y.get(this);
                if (t)
                    i[t] && i[t].stop && s(i[t]);
                else
                    for (t in i)
                        i[t] && i[t].stop && wn.test(t) && s(i[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r),
                    e = !1,
                    n.splice(t, 1));
                !e && r || S.dequeue(this, o)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"),
            this.each(function() {
                var e, t = y.get(this), n = t[s + "queue"], i = t[s + "queueHooks"], o = S.timers, r = n ? n.length : 0;
                for (t.finish = !0,
                S.queue(this, s, []),
                i && i.stop && i.stop.call(this, !0),
                e = o.length; e--; )
                    o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0),
                    o.splice(e, 1));
                for (e = 0; e < r; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    S.each(["toggle", "show", "hide"], function(e, i) {
        var o = S.fn[i];
        S.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(Tn(i, !0), e, t, n)
        }
    }),
    S.each({
        slideDown: Tn("show"),
        slideUp: Tn("hide"),
        slideToggle: Tn("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        S.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }),
    S.timers = [],
    S.fx.tick = function() {
        var e, t = 0, n = S.timers;
        for (vn = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(),
        vn = void 0
    }
    ,
    S.fx.timer = function(e) {
        S.timers.push(e),
        S.fx.start()
    }
    ,
    S.fx.interval = 13,
    S.fx.start = function() {
        yn || (yn = !0,
        bn())
    }
    ,
    S.fx.stop = function() {
        yn = null
    }
    ,
    S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    S.fn.delay = function(i, e) {
        return i = S.fx && S.fx.speeds[i] || i,
        this.queue(e = e || "fx", function(e, t) {
            var n = T.setTimeout(e, i);
            t.stop = function() {
                T.clearTimeout(n)
            }
        })
    }
    ,
    r = k.createElement("input"),
    o = k.createElement("select").appendChild(k.createElement("option")),
    r.type = "checkbox",
    g.checkOn = "" !== r.value,
    g.optSelected = o.selected,
    (r = k.createElement("input")).value = "t",
    r.type = "radio",
    g.radioValue = "t" === r.value;
    var Sn, Cn = S.expr.attrHandle, $n = (S.fn.extend({
        attr: function(e, t) {
            return d(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }),
    S.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return void 0 === e.getAttribute ? S.prop(e, t, n) : (1 === r && S.isXMLDoc(e) || (o = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? Sn : void 0)),
                void 0 !== n ? null === n ? void S.removeAttr(e, t) : o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : !(o && "get"in o && null !== (i = o.get(e, t))) && null == (i = S.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    var n;
                    if (!g.radioValue && "radio" === t && b(e, "input"))
                        return n = e.value,
                        e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, o = t && t.match(L);
            if (o && 1 === e.nodeType)
                for (; n = o[i++]; )
                    e.removeAttribute(n)
        }
    }),
    Sn = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = Cn[t] || S.find.attr;
        Cn[t] = function(e, t, n) {
            var i, o, r = t.toLowerCase();
            return n || (o = Cn[r],
            Cn[r] = i,
            i = null != s(e, t, n) ? r : null,
            Cn[r] = o),
            i
        }
    }),
    /^(?:input|select|textarea|button)$/i), An = /^(?:a|area)$/i;
    function En(e) {
        return (e.match(L) || []).join(" ")
    }
    function jn(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function Dn(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(L) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return d(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }),
    S.extend({
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return 1 === r && S.isXMLDoc(e) || (t = S.propFix[t] || t,
                o = S.propHooks[t]),
                void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get"in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : $n.test(e.nodeName) || An.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    g.optSelected || (S.propHooks.selected = {
        get: function(e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            e = e.parentNode;
            e && (e.selectedIndex,
            e.parentNode) && e.parentNode.selectedIndex
        }
    }),
    S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }),
    S.fn.extend({
        addClass: function(t) {
            var e, n, i, o, r, s;
            return m(t) ? this.each(function(e) {
                S(this).addClass(t.call(this, e, jn(this)))
            }) : (e = Dn(t)).length ? this.each(function() {
                if (i = jn(this),
                n = 1 === this.nodeType && " " + En(i) + " ") {
                    for (r = 0; r < e.length; r++)
                        o = e[r],
                        n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                    s = En(n),
                    i !== s && this.setAttribute("class", s)
                }
            }) : this
        },
        removeClass: function(t) {
            var e, n, i, o, r, s;
            return m(t) ? this.each(function(e) {
                S(this).removeClass(t.call(this, e, jn(this)))
            }) : arguments.length ? (e = Dn(t)).length ? this.each(function() {
                if (i = jn(this),
                n = 1 === this.nodeType && " " + En(i) + " ") {
                    for (r = 0; r < e.length; r++)
                        for (o = e[r]; -1 < n.indexOf(" " + o + " "); )
                            n = n.replace(" " + o + " ", " ");
                    s = En(n),
                    i !== s && this.setAttribute("class", s)
                }
            }) : this : this.attr("class", "")
        },
        toggleClass: function(t, n) {
            var e, i, o, r, s = _typeof(t), a = "string" === s || Array.isArray(t);
            return m(t) ? this.each(function(e) {
                S(this).toggleClass(t.call(this, e, jn(this), n), n)
            }) : "boolean" == typeof n && a ? n ? this.addClass(t) : this.removeClass(t) : (e = Dn(t),
            this.each(function() {
                if (a)
                    for (r = S(this),
                    o = 0; o < e.length; o++)
                        i = e[o],
                        r.hasClass(i) ? r.removeClass(i) : r.addClass(i);
                else
                    void 0 !== t && "boolean" !== s || ((i = jn(this)) && y.set(this, "__className__", i),
                    this.setAttribute && this.setAttribute("class", !i && !1 !== t && y.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            for (var t, n = 0, i = " " + e + " "; t = this[n++]; )
                if (1 === t.nodeType && -1 < (" " + En(jn(t)) + " ").indexOf(i))
                    return !0;
            return !1
        }
    });
    function Hn(e) {
        e.stopPropagation()
    }
    var Ln = /\r/g
      , On = (S.fn.extend({
        val: function(t) {
            var n, e, i, o = this[0];
            return arguments.length ? (i = m(t),
            this.each(function(e) {
                1 === this.nodeType && (null == (e = i ? t.call(this, e, S(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = S.map(e, function(e) {
                    return null == e ? "" : e + ""
                })),
                (n = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set"in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : o ? (n = S.valHooks[o.type] || S.valHooks[o.nodeName.toLowerCase()]) && "get"in n && void 0 !== (e = n.get(o, "value")) ? e : "string" == typeof (e = o.value) ? e.replace(Ln, "") : null == e ? "" : e : void 0
        }
    }),
    S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : En(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n = e.options, i = e.selectedIndex, o = "select-one" === e.type, r = o ? null : [], s = o ? i + 1 : n.length, a = i < 0 ? s : o ? i : 0; a < s; a++)
                        if (((t = n[a]).selected || a === i) && !t.disabled && (!t.parentNode.disabled || !b(t.parentNode, "optgroup"))) {
                            if (t = S(t).val(),
                            o)
                                return t;
                            r.push(t)
                        }
                    return r
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = S.makeArray(t), s = o.length; s--; )
                        ((i = o[s]).selected = -1 < S.inArray(S.valHooks.option.get(i), r)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        },
        g.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    T.location)
      , Pn = {
        guid: Date.now()
    }
      , Nn = /\?/
      , qn = (S.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new T.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0],
        t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)),
        t
    }
    ,
    /^(?:focusinfocus|focusoutblur)$/)
      , Mn = (S.extend(S.event, {
        trigger: function(e, t, n, i) {
            var o, r, s, a, l, c, d, u = [n || k], p = _.call(e, "type") ? e.type : e, f = _.call(e, "namespace") ? e.namespace.split(".") : [], h = d = r = n = n || k;
            if (3 !== n.nodeType && 8 !== n.nodeType && !qn.test(p + S.event.triggered) && (-1 < p.indexOf(".") && (p = (f = p.split(".")).shift(),
            f.sort()),
            a = p.indexOf(":") < 0 && "on" + p,
            (e = e[S.expando] ? e : new S.Event(p,"object" == _typeof(e) && e)).isTrigger = i ? 2 : 3,
            e.namespace = f.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : S.makeArray(t, [e]),
            c = S.event.special[p] || {},
            i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!i && !c.noBubble && !M(n)) {
                    for (s = c.delegateType || p,
                    qn.test(s + p) || (h = h.parentNode); h; h = h.parentNode)
                        u.push(h),
                        r = h;
                    r === (n.ownerDocument || k) && u.push(r.defaultView || r.parentWindow || T)
                }
                for (o = 0; (h = u[o++]) && !e.isPropagationStopped(); )
                    d = h,
                    e.type = 1 < o ? s : c.bindType || p,
                    (l = (y.get(h, "events") || Object.create(null))[e.type] && y.get(h, "handle")) && l.apply(h, t),
                    (l = a && h[a]) && l.apply && dt(h) && (e.result = l.apply(h, t),
                    !1 === e.result) && e.preventDefault();
                return e.type = p,
                i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(u.pop(), t) || !dt(n) || a && m(n[p]) && !M(n) && ((r = n[a]) && (n[a] = null),
                S.event.triggered = p,
                e.isPropagationStopped() && d.addEventListener(p, Hn),
                n[p](),
                e.isPropagationStopped() && d.removeEventListener(p, Hn),
                S.event.triggered = void 0,
                r) && (n[a] = r),
                e.result
            }
        },
        simulate: function(e, t, n) {
            n = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(n, null, t)
        }
    }),
    S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return S.event.trigger(e, t, n, !0)
        }
    }),
    /\[\]$/)
      , In = /\r?\n/g
      , zn = /^(?:submit|button|image|reset|file)$/i
      , Wn = /^(?:input|select|textarea|keygen)/i;
    S.param = function(e, t) {
        function n(e, t) {
            t = m(t) ? t() : t,
            o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
        }
        var i, o = [];
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e))
            S.each(e, function() {
                n(this.name, this.value)
            });
        else
            for (i in e)
                !function n(i, e, o, r) {
                    if (Array.isArray(e))
                        S.each(e, function(e, t) {
                            o || Mn.test(i) ? r(i, t) : n(i + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, o, r)
                        });
                    else if (o || "object" !== V(e))
                        r(i, e);
                    else
                        for (var t in e)
                            n(i + "[" + t + "]", e[t], o, r)
                }(i, e[i], t, n);
        return o.join("&")
    }
    ,
    S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Wn.test(this.nodeName) && !zn.test(e) && (this.checked || !kt.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(In, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(In, "\r\n")
                }
            }).get()
        }
    });
    var Rn = /%20/g
      , Fn = /#.*$/
      , _n = /([?&])_=[^&]*/
      , Bn = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Un = /^(?:GET|HEAD)$/
      , Xn = /^\/\//
      , Yn = {}
      , Vn = {}
      , Gn = "*/".concat("*")
      , Qn = k.createElement("a");
    function Jn(r) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, i = 0, o = e.toLowerCase().match(L) || [];
            if (m(t))
                for (; n = o[i++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
        }
    }
    function Kn(t, i, o, r) {
        var s = {}
          , a = t === Vn;
        function l(e) {
            var n;
            return s[e] = !0,
            S.each(t[e] || [], function(e, t) {
                t = t(i, o, r);
                return "string" != typeof t || a || s[t] ? a ? !(n = t) : void 0 : (i.dataTypes.unshift(t),
                l(t),
                !1)
            }),
            n
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function Zn(e, t) {
        var n, i, o = S.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((o[n] ? e : i = i || {})[n] = t[n]);
        return i && S.extend(!0, e, i),
        e
    }
    Qn.href = On.href,
    S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: On.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(On.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Gn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Zn(Zn(e, S.ajaxSettings), t) : Zn(S.ajaxSettings, e)
        },
        ajaxPrefilter: Jn(Yn),
        ajaxTransport: Jn(Vn),
        ajax: function(e, t) {
            "object" == _typeof(e) && (t = e,
            e = void 0);
            var l, c, d, n, u, p, f, i, o, h = S.ajaxSetup({}, t = t || {}), g = h.context || h, v = h.context && (g.nodeType || g.jquery) ? S(g) : S.event, y = S.Deferred(), m = S.Callbacks("once memory"), w = h.statusCode || {}, r = {}, s = {}, a = "canceled", b = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (p) {
                        if (!n)
                            for (n = {}; t = Bn.exec(d); )
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return p ? d : null
                },
                setRequestHeader: function(e, t) {
                    return null == p && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                    r[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == p && (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    if (e)
                        if (p)
                            b.always(e[b.status]);
                        else
                            for (var t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    e = e || a;
                    return l && l.abort(e),
                    x(0, e),
                    this
                }
            };
            if (y.promise(b),
            h.url = ((e || h.url || On.href) + "").replace(Xn, On.protocol + "//"),
            h.type = t.method || t.type || h.method || h.type,
            h.dataTypes = (h.dataType || "*").toLowerCase().match(L) || [""],
            null == h.crossDomain) {
                o = k.createElement("a");
                try {
                    o.href = h.url,
                    o.href = o.href,
                    h.crossDomain = Qn.protocol + "//" + Qn.host != o.protocol + "//" + o.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = S.param(h.data, h.traditional)),
            Kn(Yn, h, t, b),
            !p) {
                for (i in (f = S.event && h.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
                h.type = h.type.toUpperCase(),
                h.hasContent = !Un.test(h.type),
                c = h.url.replace(Fn, ""),
                h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Rn, "+")) : (o = h.url.slice(c.length),
                h.data && (h.processData || "string" == typeof h.data) && (c += (Nn.test(c) ? "&" : "?") + h.data,
                delete h.data),
                !1 === h.cache && (c = c.replace(_n, "$1"),
                o = (Nn.test(c) ? "&" : "?") + "_=" + Pn.guid++ + o),
                h.url = c + o),
                h.ifModified && (S.lastModified[c] && b.setRequestHeader("If-Modified-Since", S.lastModified[c]),
                S.etag[c]) && b.setRequestHeader("If-None-Match", S.etag[c]),
                (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && b.setRequestHeader("Content-Type", h.contentType),
                b.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Gn + "; q=0.01" : "") : h.accepts["*"]),
                h.headers)
                    b.setRequestHeader(i, h.headers[i]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, b, h) || p))
                    return b.abort();
                if (a = "abort",
                m.add(h.complete),
                b.done(h.success),
                b.fail(h.error),
                l = Kn(Vn, h, t, b)) {
                    if (b.readyState = 1,
                    f && v.trigger("ajaxSend", [b, h]),
                    p)
                        return b;
                    h.async && 0 < h.timeout && (u = T.setTimeout(function() {
                        b.abort("timeout")
                    }, h.timeout));
                    try {
                        p = !1,
                        l.send(r, x)
                    } catch (e) {
                        if (p)
                            throw e;
                        x(-1, e)
                    }
                } else
                    x(-1, "No Transport")
            }
            return b;
            function x(e, t, n, i) {
                var o, r, s, a = t;
                p || (p = !0,
                u && T.clearTimeout(u),
                l = void 0,
                d = i || "",
                b.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in a)
                            if (a[o] && a[o].test(i)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0]in n)
                        r = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            s = s || o
                        }
                        r = r || s
                    }
                    if (r)
                        return r !== l[0] && l.unshift(r),
                        n[r]
                }(h, b, n)),
                !i && -1 < S.inArray("script", h.dataTypes) && S.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}
                ),
                s = function(e, t, n, i) {
                    var o, r, s, a, l, c = {}, d = e.dataTypes.slice();
                    if (d[1])
                        for (s in e.converters)
                            c[s.toLowerCase()] = e.converters[s];
                    for (r = d.shift(); r; )
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t),
                        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = r,
                        r = d.shift())
                            if ("*" === r)
                                r = l;
                            else if ("*" !== l && l !== r) {
                                if (!(s = c[l + " " + r] || c["* " + r]))
                                    for (o in c)
                                        if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0],
                                            d.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && e.throws)
                                        t = s(t);
                                    else
                                        try {
                                            t = s(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: s ? e : "No conversion from " + l + " to " + r
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, s, b, i),
                i ? (h.ifModified && ((n = b.getResponseHeader("Last-Modified")) && (S.lastModified[c] = n),
                n = b.getResponseHeader("etag")) && (S.etag[c] = n),
                204 === e || "HEAD" === h.type ? a = "nocontent" : 304 === e ? a = "notmodified" : (a = s.state,
                o = s.data,
                i = !(r = s.error))) : (r = a,
                !e && a || (a = "error",
                e < 0 && (e = 0))),
                b.status = e,
                b.statusText = (t || a) + "",
                i ? y.resolveWith(g, [o, a, b]) : y.rejectWith(g, [b, a, r]),
                b.statusCode(w),
                w = void 0,
                f && v.trigger(i ? "ajaxSuccess" : "ajaxError", [b, h, i ? o : r]),
                m.fireWith(g, [b, a]),
                f && (v.trigger("ajaxComplete", [b, h]),
                --S.active || S.event.trigger("ajaxStop")))
            }
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }),
    S.each(["get", "post"], function(e, o) {
        S[o] = function(e, t, n, i) {
            return m(t) && (i = i || n,
            n = t,
            t = void 0),
            S.ajax(S.extend({
                url: e,
                type: o,
                dataType: i,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }),
    S.ajaxPrefilter(function(e) {
        for (var t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n)
            }
        })
    }
    ,
    S.fn.extend({
        wrapAll: function(e) {
            return this[0] && (m(e) && (e = e.call(this[0])),
            e = S(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && e.insertBefore(this[0]),
            e.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }
    ,
    S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    S.ajaxSettings.xhr = function() {
        try {
            return new T.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var ei = {
        0: 200,
        1223: 204
    }
      , ti = S.ajaxSettings.xhr();
    g.cors = !!ti && "withCredentials"in ti,
    g.ajax = ti = !!ti,
    S.ajaxTransport(function(o) {
        var r, s;
        if (g.cors || ti && !o.crossDomain)
            return {
                send: function(e, t) {
                    var n, i = o.xhr();
                    if (i.open(o.type, o.url, o.async, o.username, o.password),
                    o.xhrFields)
                        for (n in o.xhrFields)
                            i[n] = o.xhrFields[n];
                    for (n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType),
                    o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        i.setRequestHeader(n, e[n]);
                    r = function(e) {
                        return function() {
                            r && (r = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null,
                            "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(ei[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                                binary: i.response
                            } : {
                                text: i.responseText
                            }, i.getAllResponseHeaders()))
                        }
                    }
                    ,
                    i.onload = r(),
                    s = i.onerror = i.ontimeout = r("error"),
                    void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() {
                        4 === i.readyState && T.setTimeout(function() {
                            r && s()
                        })
                    }
                    ,
                    r = r("abort");
                    try {
                        i.send(o.hasContent && o.data || null)
                    } catch (e) {
                        if (r)
                            throw e
                    }
                },
                abort: function() {
                    r && r()
                }
            }
    }),
    S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e),
                e
            }
        }
    }),
    S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    S.ajaxTransport("script", function(n) {
        var i, o;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    i = S("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", o = function(e) {
                        i.remove(),
                        o = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    k.head.appendChild(i[0])
                },
                abort: function() {
                    o && o()
                }
            }
    });
    var ni = []
      , ii = /(=)\?(?=&|$)|\?\?/
      , oi = (S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = ni.pop() || S.expando + "_" + Pn.guid++;
            return this[e] = !0,
            e
        }
    }),
    S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, o, r, s = !1 !== e.jsonp && (ii.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && ii.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0])
            return i = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            s ? e[s] = e[s].replace(ii, "$1" + i) : !1 !== e.jsonp && (e.url += (Nn.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
            e.converters["script json"] = function() {
                return r || S.error(i + " was not called"),
                r[0]
            }
            ,
            e.dataTypes[0] = "json",
            o = T[i],
            T[i] = function() {
                r = arguments
            }
            ,
            n.always(function() {
                void 0 === o ? S(T).removeProp(i) : T[i] = o,
                e[i] && (e.jsonpCallback = t.jsonpCallback,
                ni.push(i)),
                r && m(o) && o(r[0]),
                r = o = void 0
            }),
            "script"
    }),
    g.createHTMLDocument = ((e = k.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === e.childNodes.length),
    S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (g.createHTMLDocument ? ((i = (t = k.implementation.createHTMLDocument("")).createElement("base")).href = k.location.href,
        t.head.appendChild(i)) : t = k),
        i = !n && [],
        (n = Ve.exec(e)) ? [t.createElement(n[1])] : (n = Et([e], t, i),
        i && i.length && S(i).remove(),
        S.merge([], n.childNodes)));
        var i
    }
    ,
    S.fn.load = function(e, t, n) {
        var i, o, r, s = this, a = e.indexOf(" ");
        return -1 < a && (i = En(e.slice(a)),
        e = e.slice(0, a)),
        m(t) ? (n = t,
        t = void 0) : t && "object" == _typeof(t) && (o = "POST"),
        0 < s.length && S.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments,
            s.html(i ? S("<div>").append(S.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, r || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    S.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a = S.css(e, "position"), l = S(e), c = {};
            "static" === a && (e.style.position = "relative"),
            r = l.offset(),
            i = S.css(e, "top"),
            s = S.css(e, "left"),
            a = ("absolute" === a || "fixed" === a) && -1 < (i + s).indexOf("auto") ? (o = (a = l.position()).top,
            a.left) : (o = parseFloat(i) || 0,
            parseFloat(s) || 0),
            null != (t = m(t) ? t.call(e, n, S.extend({}, r)) : t).top && (c.top = t.top - r.top + o),
            null != t.left && (c.left = t.left - r.left + a),
            "using"in t ? t.using.call(e, c) : l.css(c)
        }
    },
    S.fn.extend({
        offset: function(t) {
            var e, n;
            return arguments.length ? void 0 === t ? this : this.each(function(e) {
                S.offset.setOffset(this, t, e)
            }) : (n = this[0]) ? n.getClientRects().length ? (e = n.getBoundingClientRect(),
            n = n.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0], o = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === S.css(i, "position"))
                    t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((o = S(e).offset()).top += S.css(e, "borderTopWidth", !0),
                    o.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - S.css(i, "marginTop", !0),
                    left: t.left - o.left - S.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === S.css(e, "position"); )
                    e = e.offsetParent;
                return e || yt
            })
        }
    }),
    S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, o) {
        var r = "pageYOffset" === o;
        S.fn[t] = function(e) {
            return d(this, function(e, t, n) {
                var i;
                if (M(e) ? i = e : 9 === e.nodeType && (i = e.defaultView),
                void 0 === n)
                    return i ? i[o] : e[t];
                i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = nn(g.pixelPosition, function(e, t) {
            if (t)
                return t = tn(e, n),
                Kt.test(t) ? S(e).position()[n] + "px" : t
        })
    }),
    S.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        S.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(i, r) {
            S.fn[r] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e)
                  , o = i || (!0 === e || !0 === t ? "margin" : "border");
                return d(this, function(e, t, n) {
                    var i;
                    return M(e) ? 0 === r.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement,
                    Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? S.css(e, t, o) : S.style(e, t, n, o)
                }, a, n ? e : void 0, n)
            }
        })
    }),
    S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }),
    /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g)
      , ri = (S.proxy = function(e, t) {
        var n, i;
        if ("string" == typeof t && (i = e[t],
        t = e,
        e = i),
        m(e))
            return n = a.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, n.concat(a.call(arguments)))
            }
            ).guid = e.guid = e.guid || S.guid++,
            i
    }
    ,
    S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }
    ,
    S.isArray = Array.isArray,
    S.parseJSON = JSON.parse,
    S.nodeName = b,
    S.isFunction = m,
    S.isWindow = M,
    S.camelCase = O,
    S.type = V,
    S.now = Date.now,
    S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    S.trim = function(e) {
        return null == e ? "" : (e + "").replace(oi, "$1")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    }),
    T.jQuery)
      , si = T.$;
    return S.noConflict = function(e) {
        return T.$ === S && (T.$ = si),
        e && T.jQuery === S && (T.jQuery = ri),
        S
    }
    ,
    void 0 === q && (T.jQuery = T.$ = S),
    S
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(c) {
    "use strict";
    var i, s = window.Slick || {};
    i = 0,
    (s = function(e, t) {
        var n = this;
        n.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: c(e),
            appendDots: c(e),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function(e, t) {
                return c('<button type="button" />').text(t + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        },
        n.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        },
        c.extend(n, n.initials),
        n.activeBreakpoint = null,
        n.animType = null,
        n.animProp = null,
        n.breakpoints = [],
        n.breakpointSettings = [],
        n.cssTransitions = !1,
        n.focussed = !1,
        n.interrupted = !1,
        n.hidden = "hidden",
        n.paused = !0,
        n.positionProp = null,
        n.respondTo = null,
        n.rowCount = 1,
        n.shouldClick = !0,
        n.$slider = c(e),
        n.$slidesCache = null,
        n.transformType = null,
        n.transitionType = null,
        n.visibilityChange = "visibilitychange",
        n.windowWidth = 0,
        n.windowTimer = null,
        e = c(e).data("slick") || {},
        n.options = c.extend({}, n.defaults, t, e),
        n.currentSlide = n.options.initialSlide,
        n.originalSettings = n.options,
        void 0 !== document.mozHidden ? (n.hidden = "mozHidden",
        n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden",
        n.visibilityChange = "webkitvisibilitychange"),
        n.autoPlay = c.proxy(n.autoPlay, n),
        n.autoPlayClear = c.proxy(n.autoPlayClear, n),
        n.autoPlayIterator = c.proxy(n.autoPlayIterator, n),
        n.changeSlide = c.proxy(n.changeSlide, n),
        n.clickHandler = c.proxy(n.clickHandler, n),
        n.selectHandler = c.proxy(n.selectHandler, n),
        n.setPosition = c.proxy(n.setPosition, n),
        n.swipeHandler = c.proxy(n.swipeHandler, n),
        n.dragHandler = c.proxy(n.dragHandler, n),
        n.keyHandler = c.proxy(n.keyHandler, n),
        n.instanceUid = i++,
        n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
        n.registerBreakpoints(),
        n.init(!0)
    }
    ).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    s.prototype.addSlide = s.prototype.slickAdd = function(e, t, n) {
        var i = this;
        if ("boolean" == typeof t)
            n = t,
            t = null;
        else if (t < 0 || t >= i.slideCount)
            return !1;
        i.unload(),
        "number" == typeof t ? 0 === t && 0 === i.$slides.length ? c(e).appendTo(i.$slideTrack) : n ? c(e).insertBefore(i.$slides.eq(t)) : c(e).insertAfter(i.$slides.eq(t)) : !0 === n ? c(e).prependTo(i.$slideTrack) : c(e).appendTo(i.$slideTrack),
        i.$slides = i.$slideTrack.children(this.options.slide),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slideTrack.append(i.$slides),
        i.$slides.each(function(e, t) {
            c(t).attr("data-slick-index", e)
        }),
        i.$slidesCache = i.$slides,
        i.reinit()
    }
    ,
    s.prototype.animateHeight = function() {
        var e, t = this;
        1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical && (e = t.$slides.eq(t.currentSlide).outerHeight(!0),
        t.$list.animate({
            height: e
        }, t.options.speed))
    }
    ,
    s.prototype.animateSlide = function(e, t) {
        var n = {}
          , i = this;
        i.animateHeight(),
        !0 === i.options.rtl && !1 === i.options.vertical && (e = -e),
        !1 === i.transformsEnabled ? !1 === i.options.vertical ? i.$slideTrack.animate({
            left: e
        }, i.options.speed, i.options.easing, t) : i.$slideTrack.animate({
            top: e
        }, i.options.speed, i.options.easing, t) : !1 === i.cssTransitions ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft),
        c({
            animStart: i.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: i.options.speed,
            easing: i.options.easing,
            step: function(e) {
                e = Math.ceil(e),
                !1 === i.options.vertical ? n[i.animType] = "translate(" + e + "px, 0px)" : n[i.animType] = "translate(0px," + e + "px)",
                i.$slideTrack.css(n)
            },
            complete: function() {
                t && t.call()
            }
        })) : (i.applyTransition(),
        e = Math.ceil(e),
        !1 === i.options.vertical ? n[i.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[i.animType] = "translate3d(0px," + e + "px, 0px)",
        i.$slideTrack.css(n),
        t && setTimeout(function() {
            i.disableTransition(),
            t.call()
        }, i.options.speed))
    }
    ,
    s.prototype.getNavTarget = function() {
        var e = this.options.asNavFor;
        return e = e && null !== e ? c(e).not(this.$slider) : e
    }
    ,
    s.prototype.asNavFor = function(t) {
        var e = this.getNavTarget();
        null !== e && "object" == _typeof(e) && e.each(function() {
            var e = c(this).slick("getSlick");
            e.unslicked || e.slideHandler(t, !0)
        })
    }
    ,
    s.prototype.applyTransition = function(e) {
        var t = this
          , n = {};
        !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase,
        (!1 === t.options.fade ? t.$slideTrack : t.$slides.eq(e)).css(n)
    }
    ,
    s.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(),
        e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }
    ,
    s.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }
    ,
    s.prototype.autoPlayIterator = function() {
        var e = this
          , t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll,
        e.currentSlide - 1 == 0) && (e.direction = 1)),
        e.slideHandler(t))
    }
    ,
    s.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow"),
        e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow"),
        e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
        !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    s.prototype.buildDots = function() {
        var e, t, n = this;
        if (!0 === n.options.dots) {
            for (n.$slider.addClass("slick-dotted"),
            t = c("<ul />").addClass(n.options.dotsClass),
            e = 0; e <= n.getDotCount(); e += 1)
                t.append(c("<li />").append(n.options.customPaging.call(this, n, e)));
            n.$dots = t.appendTo(n.options.appendDots),
            n.$dots.find("li").first().addClass("slick-active")
        }
    }
    ,
    s.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.$slides.each(function(e, t) {
            c(t).attr("data-slick-index", e).data("originalStyling", c(t).attr("style") || "")
        }),
        e.$slider.addClass("slick-slider"),
        e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
        e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(),
        e.$slideTrack.css("opacity", 0),
        !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1),
        c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        !0 === e.options.draggable && e.$list.addClass("draggable")
    }
    ,
    s.prototype.buildRows = function() {
        var e, t, n, i = this, o = document.createDocumentFragment(), r = i.$slider.children();
        if (1 < i.options.rows) {
            for (n = i.options.slidesPerRow * i.options.rows,
            t = Math.ceil(r.length / n),
            e = 0; e < t; e++) {
                for (var s = document.createElement("div"), a = 0; a < i.options.rows; a++) {
                    for (var l = document.createElement("div"), c = 0; c < i.options.slidesPerRow; c++) {
                        var d = e * n + (a * i.options.slidesPerRow + c);
                        r.get(d) && l.appendChild(r.get(d))
                    }
                    s.appendChild(l)
                }
                o.appendChild(s)
            }
            i.$slider.empty().append(o),
            i.$slider.children().children().children().css({
                width: 100 / i.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    s.prototype.checkResponsive = function(e, t) {
        var n, i, o, r = this, s = !1, a = r.$slider.width(), l = window.innerWidth || c(window).width();
        if ("window" === r.respondTo ? o = l : "slider" === r.respondTo ? o = a : "min" === r.respondTo && (o = Math.min(l, a)),
        r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            for (n in i = null,
            r.breakpoints)
                r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[n] && (i = r.breakpoints[n]) : o > r.breakpoints[n] && (i = r.breakpoints[n]));
            null !== i ? null !== r.activeBreakpoint && i === r.activeBreakpoint && !t || (r.activeBreakpoint = i,
            "unslick" === r.breakpointSettings[i] ? r.unslick(i) : (r.options = c.extend({}, r.originalSettings, r.breakpointSettings[i]),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e)),
            s = i) : null !== r.activeBreakpoint && (r.activeBreakpoint = null,
            r.options = r.originalSettings,
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            s = i),
            e || !1 === s || r.$slider.trigger("breakpoint", [r, s])
        }
    }
    ,
    s.prototype.changeSlide = function(e, t) {
        var n, i = this, o = c(e.currentTarget);
        switch (o.is("a") && e.preventDefault(),
        o.is("li") || (o = o.closest("li")),
        n = i.slideCount % i.options.slidesToScroll != 0 ? 0 : (i.slideCount - i.currentSlide) % i.options.slidesToScroll,
        e.data.message) {
        case "previous":
            r = 0 == n ? i.options.slidesToScroll : i.options.slidesToShow - n,
            i.slideCount > i.options.slidesToShow && i.slideHandler(i.currentSlide - r, !1, t);
            break;
        case "next":
            r = 0 == n ? i.options.slidesToScroll : n,
            i.slideCount > i.options.slidesToShow && i.slideHandler(i.currentSlide + r, !1, t);
            break;
        case "index":
            var r = 0 === e.data.index ? 0 : e.data.index || o.index() * i.options.slidesToScroll;
            i.slideHandler(i.checkNavigable(r), !1, t),
            o.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    s.prototype.checkNavigable = function(e) {
        var t = this.getNavigableIndexes()
          , n = 0;
        if (e > t[t.length - 1])
            e = t[t.length - 1];
        else
            for (var i in t) {
                if (e < t[i]) {
                    e = n;
                    break
                }
                n = t[i]
            }
        return e
    }
    ,
    s.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility) && e.$dots.off("keydown.slick", e.keyHandler),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
        !0 === e.options.accessibility) && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
        e.$nextArrow) && e.$nextArrow.off("keydown.slick", e.keyHandler),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        c(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler),
        c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
        c(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
        c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    s.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", c.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", c.proxy(e.interrupt, e, !1))
    }
    ,
    s.prototype.cleanUpRows = function() {
        var e;
        1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"),
        this.$slider.empty().append(e))
    }
    ,
    s.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(),
        e.stopPropagation(),
        e.preventDefault())
    }
    ,
    s.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(),
        t.touchObject = {},
        t.cleanUpEvents(),
        c(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.prevArrow)) && t.$prevArrow.remove(),
        t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.nextArrow)) && t.$nextArrow.remove(),
        t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            c(this).attr("style", c(this).data("originalStyling"))
        }),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slideTrack.detach(),
        t.$list.detach(),
        t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        t.unslicked = !0,
        e || t.$slider.trigger("destroy", [t])
    }
    ,
    s.prototype.disableTransition = function(e) {
        var t = {};
        t[this.transitionType] = "",
        (!1 === this.options.fade ? this.$slideTrack : this.$slides.eq(e)).css(t)
    }
    ,
    s.prototype.fadeSlide = function(e, t) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(e).css({
            zIndex: n.options.zIndex
        }),
        n.$slides.eq(e).animate({
            opacity: 1
        }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e),
        n.$slides.eq(e).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }),
        t && setTimeout(function() {
            n.disableTransition(e),
            t.call()
        }, n.options.speed))
    }
    ,
    s.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e),
        t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }
    ,
    s.prototype.filterSlides = s.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides,
        t.unload(),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slidesCache.filter(e).appendTo(t.$slideTrack),
        t.reinit())
    }
    ,
    s.prototype.focusHandler = function() {
        var n = this;
        n.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(e) {
            e.stopImmediatePropagation();
            var t = c(this);
            setTimeout(function() {
                n.options.pauseOnFocus && (n.focussed = t.is(":focus"),
                n.autoPlay())
            }, 0)
        })
    }
    ,
    s.prototype.getCurrent = s.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    s.prototype.getDotCount = function() {
        var e = this
          , t = 0
          , n = 0
          , i = 0;
        if (!0 === e.options.infinite)
            if (e.slideCount <= e.options.slidesToShow)
                ++i;
            else
                for (; t < e.slideCount; )
                    ++i,
                    t = n + e.options.slidesToScroll,
                    n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode)
            i = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount; )
                ++i,
                t = n + e.options.slidesToScroll,
                n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else
            i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return i - 1
    }
    ,
    s.prototype.getLeft = function(e) {
        var t, n, i = this, o = 0;
        return i.slideOffset = 0,
        t = i.$slides.first().outerHeight(!0),
        !0 === i.options.infinite ? (i.slideCount > i.options.slidesToShow && (i.slideOffset = i.slideWidth * i.options.slidesToShow * -1,
        n = -1,
        !0 === i.options.vertical && !0 === i.options.centerMode && (2 === i.options.slidesToShow ? n = -1.5 : 1 === i.options.slidesToShow && (n = -2)),
        o = t * i.options.slidesToShow * n),
        i.slideCount % i.options.slidesToScroll != 0 && e + i.options.slidesToScroll > i.slideCount && i.slideCount > i.options.slidesToShow && (o = e > i.slideCount ? (i.slideOffset = (i.options.slidesToShow - (e - i.slideCount)) * i.slideWidth * -1,
        (i.options.slidesToShow - (e - i.slideCount)) * t * -1) : (i.slideOffset = i.slideCount % i.options.slidesToScroll * i.slideWidth * -1,
        i.slideCount % i.options.slidesToScroll * t * -1))) : e + i.options.slidesToShow > i.slideCount && (i.slideOffset = (e + i.options.slidesToShow - i.slideCount) * i.slideWidth,
        o = (e + i.options.slidesToShow - i.slideCount) * t),
        i.slideCount <= i.options.slidesToShow && (o = i.slideOffset = 0),
        !0 === i.options.centerMode && i.slideCount <= i.options.slidesToShow ? i.slideOffset = i.slideWidth * Math.floor(i.options.slidesToShow) / 2 - i.slideWidth * i.slideCount / 2 : !0 === i.options.centerMode && !0 === i.options.infinite ? i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2) - i.slideWidth : !0 === i.options.centerMode && (i.slideOffset = 0,
        i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2)),
        n = !1 === i.options.vertical ? e * i.slideWidth * -1 + i.slideOffset : e * t * -1 + o,
        !0 === i.options.variableWidth && (t = i.slideCount <= i.options.slidesToShow || !1 === i.options.infinite ? i.$slideTrack.children(".slick-slide").eq(e) : i.$slideTrack.children(".slick-slide").eq(e + i.options.slidesToShow),
        n = !0 === i.options.rtl ? t[0] ? -1 * (i.$slideTrack.width() - t[0].offsetLeft - t.width()) : 0 : t[0] ? -1 * t[0].offsetLeft : 0,
        !0 === i.options.centerMode) && (t = i.slideCount <= i.options.slidesToShow || !1 === i.options.infinite ? i.$slideTrack.children(".slick-slide").eq(e) : i.$slideTrack.children(".slick-slide").eq(e + i.options.slidesToShow + 1),
        n = !0 === i.options.rtl ? t[0] ? -1 * (i.$slideTrack.width() - t[0].offsetLeft - t.width()) : 0 : t[0] ? -1 * t[0].offsetLeft : 0,
        n += (i.$list.width() - t.outerWidth()) / 2),
        n
    }
    ,
    s.prototype.getOption = s.prototype.slickGetOption = function(e) {
        return this.options[e]
    }
    ,
    s.prototype.getNavigableIndexes = function() {
        for (var e = this, t = 0, n = 0, i = [], o = !1 === e.options.infinite ? e.slideCount : (t = -1 * e.options.slidesToScroll,
        n = -1 * e.options.slidesToScroll,
        2 * e.slideCount); t < o; )
            i.push(t),
            t = n + e.options.slidesToScroll,
            n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return i
    }
    ,
    s.prototype.getSlick = function() {
        return this
    }
    ,
    s.prototype.getSlideCount = function() {
        var n, i = this, o = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0;
        return !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function(e, t) {
            if (t.offsetLeft - o + c(t).outerWidth() / 2 > -1 * i.swipeLeft)
                return n = t,
                !1
        }),
        Math.abs(c(n).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
    }
    ,
    s.prototype.goTo = s.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }
    ,
    s.prototype.init = function(e) {
        var t = this;
        c(t.$slider).hasClass("slick-initialized") || (c(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && (t.paused = !1,
        t.autoPlay())
    }
    ,
    s.prototype.initADA = function() {
        var n = this
          , i = Math.ceil(n.slideCount / n.options.slidesToShow)
          , o = n.getNavigableIndexes().filter(function(e) {
            return 0 <= e && e < n.slideCount
        });
        n.$slides.add(n.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        null !== n.$dots && (n.$slides.not(n.$slideTrack.find(".slick-cloned")).each(function(e) {
            var t = o.indexOf(e);
            c(this).attr({
                role: "tabpanel",
                id: "slick-slide" + n.instanceUid + e,
                tabindex: -1
            }),
            -1 !== t && c(this).attr({
                "aria-describedby": "slick-slide-control" + n.instanceUid + t
            })
        }),
        n.$dots.attr("role", "tablist").find("li").each(function(e) {
            var t = o[e];
            c(this).attr({
                role: "presentation"
            }),
            c(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + n.instanceUid + e,
                "aria-controls": "slick-slide" + n.instanceUid + t,
                "aria-label": e + 1 + " of " + i,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(n.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var e = n.currentSlide, t = e + n.options.slidesToShow; e < t; e++)
            n.$slides.eq(e).attr("tabindex", 0);
        n.activateADA()
    }
    ,
    s.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide),
        e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide),
        !0 === e.options.accessibility) && (e.$prevArrow.on("keydown.slick", e.keyHandler),
        e.$nextArrow.on("keydown.slick", e.keyHandler))
    }
    ,
    s.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (c("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide),
        !0 === e.options.accessibility) && e.$dots.on("keydown.slick", e.keyHandler),
        !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1))
    }
    ,
    s.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", c.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", c.proxy(e.interrupt, e, !1)))
    }
    ,
    s.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler),
        e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler),
        e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("click.slick", e.clickHandler),
        c(document).on(e.visibilityChange, c.proxy(e.visibility, e)),
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler),
        c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)),
        c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)),
        c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        c(e.setPosition)
    }
    ,
    s.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(),
        e.$nextArrow.show()),
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }
    ,
    s.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    s.prototype.lazyLoad = function() {
        function e(e) {
            c("img[data-lazy]", e).each(function() {
                var e = c(this)
                  , t = c(this).attr("data-lazy")
                  , n = c(this).attr("data-srcset")
                  , i = c(this).attr("data-sizes") || r.$slider.attr("data-sizes")
                  , o = document.createElement("img");
                o.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        n && (e.attr("srcset", n),
                        i) && e.attr("sizes", i),
                        e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }),
                        r.$slider.trigger("lazyLoaded", [r, e, t])
                    })
                }
                ,
                o.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    r.$slider.trigger("lazyLoadError", [r, e, t])
                }
                ,
                o.src = t
            })
        }
        var t, n, i, r = this;
        if (!0 === r.options.centerMode ? i = !0 === r.options.infinite ? (n = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (n = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)),
        r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (n = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide,
        i = Math.ceil(n + r.options.slidesToShow),
        !0 === r.options.fade && (0 < n && n--,
        i <= r.slideCount) && i++),
        t = r.$slider.find(".slick-slide").slice(n, i),
        "anticipated" === r.options.lazyLoad)
            for (var o = n - 1, s = i, a = r.$slider.find(".slick-slide"), l = 0; l < r.options.slidesToScroll; l++)
                o < 0 && (o = r.slideCount - 1),
                t = (t = t.add(a.eq(o))).add(a.eq(s)),
                o--,
                s++;
        e(t),
        r.slideCount <= r.options.slidesToShow ? e(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? e(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && e(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
    }
    ,
    s.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(),
        e.$slideTrack.css({
            opacity: 1
        }),
        e.$slider.removeClass("slick-loading"),
        e.initUI(),
        "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }
    ,
    s.prototype.next = s.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    s.prototype.orientationChange = function() {
        this.checkResponsive(),
        this.setPosition()
    }
    ,
    s.prototype.pause = s.prototype.slickPause = function() {
        this.autoPlayClear(),
        this.paused = !0
    }
    ,
    s.prototype.play = s.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(),
        e.options.autoplay = !0,
        e.paused = !1,
        e.focussed = !1,
        e.interrupted = !1
    }
    ,
    s.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]),
        t.animating = !1,
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        t.swipeLeft = null,
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility && (t.initADA(),
        t.options.focusOnChange) && c(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus())
    }
    ,
    s.prototype.prev = s.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    s.prototype.preventDefault = function(e) {
        e.preventDefault()
    }
    ,
    s.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, n, i, o, r = this, s = c("img[data-lazy]", r.$slider);
        s.length ? (t = s.first(),
        n = t.attr("data-lazy"),
        i = t.attr("data-srcset"),
        o = t.attr("data-sizes") || r.$slider.attr("data-sizes"),
        (s = document.createElement("img")).onload = function() {
            i && (t.attr("srcset", i),
            o) && t.attr("sizes", o),
            t.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
            !0 === r.options.adaptiveHeight && r.setPosition(),
            r.$slider.trigger("lazyLoaded", [r, t, n]),
            r.progressiveLazyLoad()
        }
        ,
        s.onerror = function() {
            e < 3 ? setTimeout(function() {
                r.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            r.$slider.trigger("lazyLoadError", [r, t, n]),
            r.progressiveLazyLoad())
        }
        ,
        s.src = n) : r.$slider.trigger("allImagesLoaded", [r])
    }
    ,
    s.prototype.refresh = function(e) {
        var t = this
          , n = t.slideCount - t.options.slidesToShow;
        !t.options.infinite && t.currentSlide > n && (t.currentSlide = n),
        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
        n = t.currentSlide,
        t.destroy(!0),
        c.extend(t, t.initials, {
            currentSlide: n
        }),
        t.init(),
        e || t.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1)
    }
    ,
    s.prototype.registerBreakpoints = function() {
        var e, t, n, i = this, o = i.options.responsive || null;
        if ("array" === c.type(o) && o.length) {
            for (e in i.respondTo = i.options.respondTo || "window",
            o)
                if (n = i.breakpoints.length - 1,
                o.hasOwnProperty(e)) {
                    for (t = o[e].breakpoint; 0 <= n; )
                        i.breakpoints[n] && i.breakpoints[n] === t && i.breakpoints.splice(n, 1),
                        n--;
                    i.breakpoints.push(t),
                    i.breakpointSettings[t] = o[e].settings
                }
            i.breakpoints.sort(function(e, t) {
                return i.options.mobileFirst ? e - t : t - e
            })
        }
    }
    ,
    s.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        e.paused = !e.options.autoplay,
        e.autoPlay(),
        e.$slider.trigger("reInit", [e])
    }
    ,
    s.prototype.resize = function() {
        var e = this;
        c(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
        e.windowDelay = window.setTimeout(function() {
            e.windowWidth = c(window).width(),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }, 50))
    }
    ,
    s.prototype.removeSlide = s.prototype.slickRemove = function(e, t, n) {
        var i = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e,
        i.slideCount < 1 || e < 0 || e > i.slideCount - 1)
            return !1;
        i.unload(),
        (!0 === n ? i.$slideTrack.children() : i.$slideTrack.children(this.options.slide).eq(e)).remove(),
        i.$slides = i.$slideTrack.children(this.options.slide),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slideTrack.append(i.$slides),
        i.$slidesCache = i.$slides,
        i.reinit()
    }
    ,
    s.prototype.setCSS = function(e) {
        var t, n, i = this, o = {};
        !0 === i.options.rtl && (e = -e),
        t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px",
        n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px",
        o[i.positionProp] = e,
        !1 !== i.transformsEnabled && (!(o = {}) === i.cssTransitions ? o[i.animType] = "translate(" + t + ", " + n + ")" : o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"),
        i.$slideTrack.css(o)
    }
    ,
    s.prototype.setDimensions = function() {
        var e = this
          , t = (!1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow),
        !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })),
        e.listWidth = e.$list.width(),
        e.listHeight = e.$list.height(),
        !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow),
        e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth),
        e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length))),
        e.$slides.first().outerWidth(!0) - e.$slides.first().width());
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }
    ,
    s.prototype.setFade = function() {
        var n, i = this;
        i.$slides.each(function(e, t) {
            n = i.slideWidth * e * -1,
            !0 === i.options.rtl ? c(t).css({
                position: "relative",
                right: n,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : c(t).css({
                position: "relative",
                left: n,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }),
        i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    s.prototype.setHeight = function() {
        var e, t = this;
        1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical && (e = t.$slides.eq(t.currentSlide).outerHeight(!0),
        t.$list.css("height", e))
    }
    ,
    s.prototype.setOption = s.prototype.slickSetOption = function() {
        var e, t, n, i, o, r = this, s = !1;
        if ("object" === c.type(arguments[0]) ? (n = arguments[0],
        s = arguments[1],
        o = "multiple") : "string" === c.type(arguments[0]) && (n = arguments[0],
        i = arguments[1],
        s = arguments[2],
        "responsive" === arguments[0] && "array" === c.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")),
        "single" === o)
            r.options[n] = i;
        else if ("multiple" === o)
            c.each(n, function(e, t) {
                r.options[e] = t
            });
        else if ("responsive" === o)
            for (t in i)
                if ("array" !== c.type(r.options.responsive))
                    r.options.responsive = [i[t]];
                else {
                    for (e = r.options.responsive.length - 1; 0 <= e; )
                        r.options.responsive[e].breakpoint === i[t].breakpoint && r.options.responsive.splice(e, 1),
                        e--;
                    r.options.responsive.push(i[t])
                }
        s && (r.unload(),
        r.reinit())
    }
    ,
    s.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(),
        e.setHeight(),
        !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(),
        e.$slider.trigger("setPosition", [e])
    }
    ,
    s.prototype.setProps = function() {
        var e = this
          , t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left",
        "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
        void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0),
        e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex),
        void 0 !== t.OTransform && (e.animType = "OTransform",
        e.transformType = "-o-transform",
        e.transitionType = "OTransition",
        void 0 === t.perspectiveProperty) && void 0 === t.webkitPerspective && (e.animType = !1),
        void 0 !== t.MozTransform && (e.animType = "MozTransform",
        e.transformType = "-moz-transform",
        e.transitionType = "MozTransition",
        void 0 === t.perspectiveProperty) && void 0 === t.MozPerspective && (e.animType = !1),
        void 0 !== t.webkitTransform && (e.animType = "webkitTransform",
        e.transformType = "-webkit-transform",
        e.transitionType = "webkitTransition",
        void 0 === t.perspectiveProperty) && void 0 === t.webkitPerspective && (e.animType = !1),
        void 0 !== t.msTransform && (e.animType = "msTransform",
        e.transformType = "-ms-transform",
        e.transitionType = "msTransition",
        void 0 === t.msTransform) && (e.animType = !1),
        void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform",
        e.transformType = "transform",
        e.transitionType = "transition"),
        e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }
    ,
    s.prototype.setSlideClasses = function(e) {
        var t, n, i, o = this, r = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
        o.$slides.eq(e).addClass("slick-current"),
        !0 === o.options.centerMode ? (n = o.options.slidesToShow % 2 == 0 ? 1 : 0,
        i = Math.floor(o.options.slidesToShow / 2),
        !0 === o.options.infinite && ((i <= e && e <= o.slideCount - 1 - i ? o.$slides.slice(e - i + n, e + i + 1) : (t = o.options.slidesToShow + e,
        r.slice(t - i + 1 + n, t + i + 2))).addClass("slick-active").attr("aria-hidden", "false"),
        0 === e ? r.eq(r.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && r.eq(o.options.slidesToShow).addClass("slick-center")),
        o.$slides.eq(e).addClass("slick-center")) : (0 <= e && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow) : r.length <= o.options.slidesToShow ? r : (n = o.slideCount % o.options.slidesToShow,
        t = !0 === o.options.infinite ? o.options.slidesToShow + e : e,
        o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? r.slice(t - (o.options.slidesToShow - n), t + n) : r.slice(t, t + o.options.slidesToShow))).addClass("slick-active").attr("aria-hidden", "false"),
        "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
    }
    ,
    s.prototype.setupInfinite = function() {
        var e, t, n, i = this;
        if (!0 === i.options.fade && (i.options.centerMode = !1),
        !0 === i.options.infinite && !1 === i.options.fade && (t = null,
        i.slideCount > i.options.slidesToShow)) {
            for (n = !0 === i.options.centerMode ? i.options.slidesToShow + 1 : i.options.slidesToShow,
            e = i.slideCount; e > i.slideCount - n; --e)
                c(i.$slides[t = e - 1]).clone(!0).attr("id", "").attr("data-slick-index", t - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < n + i.slideCount; e += 1)
                t = e,
                c(i.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
            i.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                c(this).attr("id", "")
            })
        }
    }
    ,
    s.prototype.interrupt = function(e) {
        e || this.autoPlay(),
        this.interrupted = e
    }
    ,
    s.prototype.selectHandler = function(e) {
        e = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide"),
        e = (e = parseInt(e.attr("data-slick-index"))) || 0;
        this.slideCount <= this.options.slidesToShow ? this.slideHandler(e, !1, !0) : this.slideHandler(e)
    }
    ,
    s.prototype.slideHandler = function(e, t, n) {
        var i, o, r, s = this;
        t = t || !1,
        !0 === s.animating && !0 === s.options.waitForAnimate || !0 === s.options.fade && s.currentSlide === e || (!1 === t && s.asNavFor(e),
        i = e,
        t = s.getLeft(i),
        r = s.getLeft(s.currentSlide),
        s.currentLeft = null === s.swipeLeft ? r : s.swipeLeft,
        !1 === s.options.infinite && !1 === s.options.centerMode && (e < 0 || e > s.getDotCount() * s.options.slidesToScroll) || !1 === s.options.infinite && !0 === s.options.centerMode && (e < 0 || e > s.slideCount - s.options.slidesToScroll) ? !1 === s.options.fade && (i = s.currentSlide,
        !0 !== n ? s.animateSlide(r, function() {
            s.postSlide(i)
        }) : s.postSlide(i)) : (s.options.autoplay && clearInterval(s.autoPlayTimer),
        o = i < 0 ? s.slideCount % s.options.slidesToScroll != 0 ? s.slideCount - s.slideCount % s.options.slidesToScroll : s.slideCount + i : i >= s.slideCount ? s.slideCount % s.options.slidesToScroll != 0 ? 0 : i - s.slideCount : i,
        s.animating = !0,
        s.$slider.trigger("beforeChange", [s, s.currentSlide, o]),
        e = s.currentSlide,
        s.currentSlide = o,
        s.setSlideClasses(s.currentSlide),
        s.options.asNavFor && (r = (r = s.getNavTarget()).slick("getSlick")).slideCount <= r.options.slidesToShow && r.setSlideClasses(s.currentSlide),
        s.updateDots(),
        s.updateArrows(),
        !0 === s.options.fade ? (!0 !== n ? (s.fadeSlideOut(e),
        s.fadeSlide(o, function() {
            s.postSlide(o)
        })) : s.postSlide(o),
        s.animateHeight()) : !0 !== n ? s.animateSlide(t, function() {
            s.postSlide(o)
        }) : s.postSlide(o)))
    }
    ,
    s.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(),
        e.$nextArrow.hide()),
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
        e.$slider.addClass("slick-loading")
    }
    ,
    s.prototype.swipeDirection = function() {
        var e = this
          , t = e.touchObject.startX - e.touchObject.curX
          , n = e.touchObject.startY - e.touchObject.curY
          , n = Math.atan2(n, t);
        return (t = (t = Math.round(180 * n / Math.PI)) < 0 ? 360 - Math.abs(t) : t) <= 45 && 0 <= t || t <= 360 && 315 <= t ? !1 === e.options.rtl ? "left" : "right" : 135 <= t && t <= 225 ? !1 === e.options.rtl ? "right" : "left" : !0 === e.options.verticalSwiping ? 35 <= t && t <= 135 ? "down" : "up" : "vertical"
    }
    ,
    s.prototype.swipeEnd = function(e) {
        var t, n, i = this;
        if (i.dragging = !1,
        i.swiping = !1,
        i.scrolling)
            return i.scrolling = !1;
        if (i.interrupted = !1,
        i.shouldClick = !(10 < i.touchObject.swipeLength),
        void 0 === i.touchObject.curX)
            return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]),
        i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (n = i.swipeDirection()) {
            case "left":
            case "down":
                t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(),
                i.currentDirection = 0;
                break;
            case "right":
            case "up":
                t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(),
                i.currentDirection = 1
            }
            "vertical" != n && (i.slideHandler(t),
            i.touchObject = {},
            i.$slider.trigger("swipe", [i, n]))
        } else
            i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide),
            i.touchObject = {})
    }
    ,
    s.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend"in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse")))
            switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1,
            t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold,
            !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
            e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
            }
    }
    ,
    s.prototype.swipeMove = function(e) {
        var t, n, i = this, o = void 0 !== e.originalEvent ? e.originalEvent.touches : null;
        return !(!i.dragging || i.scrolling || o && 1 !== o.length) && (t = i.getLeft(i.currentSlide),
        i.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX,
        i.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY,
        i.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(i.touchObject.curX - i.touchObject.startX, 2))),
        o = Math.round(Math.sqrt(Math.pow(i.touchObject.curY - i.touchObject.startY, 2))),
        !i.options.verticalSwiping && !i.swiping && 4 < o ? !(i.scrolling = !0) : (!0 === i.options.verticalSwiping && (i.touchObject.swipeLength = o),
        o = i.swipeDirection(),
        void 0 !== e.originalEvent && 4 < i.touchObject.swipeLength && (i.swiping = !0,
        e.preventDefault()),
        e = (!1 === i.options.rtl ? 1 : -1) * (i.touchObject.curX > i.touchObject.startX ? 1 : -1),
        !0 === i.options.verticalSwiping && (e = i.touchObject.curY > i.touchObject.startY ? 1 : -1),
        n = i.touchObject.swipeLength,
        (i.touchObject.edgeHit = !1) === i.options.infinite && (0 === i.currentSlide && "right" === o || i.currentSlide >= i.getDotCount() && "left" === o) && (n = i.touchObject.swipeLength * i.options.edgeFriction,
        i.touchObject.edgeHit = !0),
        !1 === i.options.vertical ? i.swipeLeft = t + n * e : i.swipeLeft = t + n * (i.$list.height() / i.listWidth) * e,
        !0 === i.options.verticalSwiping && (i.swipeLeft = t + n * e),
        !0 !== i.options.fade && !1 !== i.options.touchMove && (!0 === i.animating ? (i.swipeLeft = null,
        !1) : void i.setCSS(i.swipeLeft))))
    }
    ,
    s.prototype.swipeStart = function(e) {
        var t, n = this;
        if (n.interrupted = !0,
        1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow)
            return !(n.touchObject = {});
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
        n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX,
        n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY,
        n.dragging = !0
    }
    ,
    s.prototype.unfilterSlides = s.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    s.prototype.unload = function() {
        var e = this;
        c(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
        e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    s.prototype.unslick = function(e) {
        this.$slider.trigger("unslick", [this, e]),
        this.destroy()
    }
    ,
    s.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    s.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(),
        e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    }
    ,
    s.prototype.visibility = function() {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }
    ,
    c.fn.slick = function() {
        for (var e, t = this, n = arguments[0], i = Array.prototype.slice.call(arguments, 1), o = t.length, r = 0; r < o; r++)
            if ("object" == _typeof(n) || void 0 === n ? t[r].slick = new s(t[r],n) : e = t[r].slick[n].apply(t[r].slick, i),
            void 0 !== e)
                return e;
        return t
    }
}),
"loading" === document.readyState && document.addEventListener("DOMContentLoaded", setLoader),
document.addEventListener("DOMContentLoaded", function() {
    var e, i = 900, o = document.querySelectorAll(".minutes"), r = document.querySelectorAll(".seconds");
    function t() {
        i -= 1;
        var t = Math.floor(i / 60)
          , n = i - 60 * t;
        0 === t && 0 == n && clearInterval(e),
        o.forEach(function(e) {
            e.innerHTML = 10 <= t ? t : "0" + t
        }),
        n = 10 <= n ? n : "0" + n,
        r.forEach(function(e) {
            e.innerHTML = n
        })
    }
    e = setInterval(t, 1e3)
}),
document.addEventListener("DOMContentLoaded", function() {
    var e = document.querySelector(".faq__list");
    e && e.addEventListener("click", function(e) {
        e.target.closest(".faq__item") && e.target.closest(".faq__item").classList.toggle("active")
    })
});
