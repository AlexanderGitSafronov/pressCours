var _excluded = ["startTimestamp"];
function _objectWithoutProperties(t, e) {
    if (null == t)
        return {};
    var n, r = _objectWithoutPropertiesLoose(t, e);
    if (Object.getOwnPropertySymbols)
        for (var o = Object.getOwnPropertySymbols(t), a = 0; a < o.length; a++)
            n = o[a],
            0 <= e.indexOf(n) || Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
    return r
}
function _objectWithoutPropertiesLoose(t, e) {
    if (null == t)
        return {};
    var n, r = {};
    for (n in t)
        !Object.prototype.hasOwnProperty.call(t, n) || 0 <= e.indexOf(n) || (r[n] = t[n]);
    return r
}
function _get() {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
        var r = _superPropBase(t, e);
        if (r)
            return (r = Object.getOwnPropertyDescriptor(r, e)).get ? r.get.call(arguments.length < 3 ? t : n) : r.value
    }
    ).apply(this, arguments)
}
function _superPropBase(t, e) {
    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = _getPrototypeOf(t)); )
        ;
    return t
}
function _toConsumableArray(t) {
    return _arrayWithoutHoles(t) || _iterableToArray(t) || _unsupportedIterableToArray(t) || _nonIterableSpread()
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}
function _iterableToArray(t) {
    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
        return Array.from(t)
}
function _arrayWithoutHoles(t) {
    if (Array.isArray(t))
        return _arrayLikeToArray(t)
}
function _createForOfIteratorHelper(t, e) {
    var n, r, o, a, i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (i)
        return r = !(n = !0),
        {
            s: function() {
                i = i.call(t)
            },
            n: function() {
                var t = i.next();
                return n = t.done,
                t
            },
            e: function(t) {
                r = !0,
                o = t
            },
            f: function() {
                try {
                    n || null == i.return || i.return()
                } finally {
                    if (r)
                        throw o
                }
            }
        };
    if (Array.isArray(t) || (i = _unsupportedIterableToArray(t)) || e && t && "number" == typeof t.length)
        return i && (t = i),
        a = 0,
        {
            s: e = function() {}
            ,
            n: function() {
                return a >= t.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: t[a++]
                }
            },
            e: function(t) {
                throw t
            },
            f: e
        };
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}
function ownKeys(e, t) {
    var n, r = Object.keys(e);
    return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e),
    t && (n = n.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
    })),
    r.push.apply(r, n)),
    r
}
function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ownKeys(Object(n), !0).forEach(function(t) {
            _defineProperty(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}
function _defineProperty(t, e, n) {
    return (e = _toPropertyKey(e))in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n,
    t
}
function _slicedToArray(t, e) {
    return _arrayWithHoles(t) || _iterableToArrayLimit(t, e) || _unsupportedIterableToArray(t, e) || _nonIterableRest()
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}
function _unsupportedIterableToArray(t, e) {
    var n;
    if (t)
        return "string" == typeof t ? _arrayLikeToArray(t, e) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(t).slice(8, -1)) && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(t, e) : void 0
}
function _arrayLikeToArray(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++)
        r[n] = t[n];
    return r
}
function _iterableToArrayLimit(t, e) {
    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (null != n) {
        var r, o, a, i, s = [], l = !0, c = !1;
        try {
            if (a = (n = n.call(t)).next,
            0 === e) {
                if (Object(n) !== n)
                    return;
                l = !1
            } else
                for (; !(l = (r = a.call(n)).done) && (s.push(r.value),
                s.length !== e); l = !0)
                    ;
        } catch (t) {
            c = !0,
            o = t
        } finally {
            try {
                if (!l && null != n.return && (i = n.return(),
                Object(i) !== i))
                    return
            } finally {
                if (c)
                    throw o
            }
        }
        return s
    }
}
function _arrayWithHoles(t) {
    if (Array.isArray(t))
        return t
}
function _defineProperties(t, e) {
    for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(t, _toPropertyKey(r.key), r)
    }
}
function _createClass(t, e, n) {
    return e && _defineProperties(t.prototype, e),
    n && _defineProperties(t, n),
    Object.defineProperty(t, "prototype", {
        writable: !1
    }),
    t
}
function _toPropertyKey(t) {
    t = _toPrimitive(t, "string");
    return "symbol" == _typeof(t) ? t : t + ""
}
function _toPrimitive(t, e) {
    if ("object" != _typeof(t) || !t)
        return t;
    var n = t[Symbol.toPrimitive];
    if (void 0 === n)
        return ("string" === e ? String : Number)(t);
    n = n.call(t, e || "default");
    if ("object" != _typeof(n))
        return n;
    throw new TypeError("@@toPrimitive must return a primitive value.")
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function _callSuper(t, e, n) {
    return e = _getPrototypeOf(e),
    _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(e, n || [], _getPrototypeOf(t).constructor) : e.apply(t, n))
}
function _possibleConstructorReturn(t, e) {
    if (e && ("object" === _typeof(e) || "function" == typeof e))
        return e;
    if (void 0 !== e)
        throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t)
}
function _assertThisInitialized(t) {
    if (void 0 === t)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e)
        throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(t, "prototype", {
        writable: !1
    }),
    e && _setPrototypeOf(t, e)
}
function _wrapNativeSuper(t) {
    var n = "function" == typeof Map ? new Map : void 0;
    return (_wrapNativeSuper = function(t) {
        if (null === t || !_isNativeFunction(t))
            return t;
        if ("function" != typeof t)
            throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== n) {
            if (n.has(t))
                return n.get(t);
            n.set(t, e)
        }
        function e() {
            return _construct(t, arguments, _getPrototypeOf(this).constructor)
        }
        return e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        _setPrototypeOf(e, t)
    }
    )(t)
}
function _construct(t, e, n) {
    var r;
    return _isNativeReflectConstruct() ? Reflect.construct.apply(null, arguments) : ((r = [null]).push.apply(r, e),
    r = new (t.bind.apply(t, r)),
    n && _setPrototypeOf(r, n.prototype),
    r)
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch (t) {}
    return (_isNativeReflectConstruct = function() {
        return !!t
    }
    )()
}
function _isNativeFunction(e) {
    try {
        return -1 !== Function.toString.call(e).indexOf("[native code]")
    } catch (t) {
        return "function" == typeof e
    }
}
function _setPrototypeOf(t, e) {
    return (_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e,
        t
    }
    )(t, e)
}
function _getPrototypeOf(t) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    }
    )(t)
}
function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    )(t)
}
!function(t, e) {
    "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Vue = e()
}(this, function() {
    "use strict";
    var N = Object.freeze({});
    function H(t) {
        return null == t
    }
    function z(t) {
        return null != t
    }
    function B(t) {
        return !0 === t
    }
    function y(t) {
        return "string" == typeof t || "number" == typeof t || "symbol" == _typeof(t) || "boolean" == typeof t
    }
    function V(t) {
        return null !== t && "object" == _typeof(t)
    }
    var m = Object.prototype.toString;
    function I(t) {
        return "[object Object]" === m.call(t)
    }
    function h(t) {
        var e = parseFloat(String(t));
        return 0 <= e && Math.floor(e) === e && isFinite(t)
    }
    function K(t) {
        return z(t) && "function" == typeof t.then && "function" == typeof t.catch
    }
    function v(t) {
        return null == t ? "" : Array.isArray(t) || I(t) && t.toString === m ? JSON.stringify(t, null, 2) : String(t)
    }
    function J(t) {
        var e = parseFloat(t);
        return isNaN(e) ? t : e
    }
    function o(t, e) {
        for (var n = Object.create(null), r = t.split(","), o = 0; o < r.length; o++)
            n[r[o]] = !0;
        return e ? function(t) {
            return n[t.toLowerCase()]
        }
        : function(t) {
            return n[t]
        }
    }
    var _ = o("slot,component", !0)
      , b = o("key,ref,slot,slot-scope,is");
    function F(t, e) {
        if (t.length) {
            e = t.indexOf(e);
            if (-1 < e)
                return t.splice(e, 1)
        }
    }
    var x = Object.prototype.hasOwnProperty;
    function L(t, e) {
        return x.call(t, e)
    }
    function t(e) {
        var n = Object.create(null);
        return function(t) {
            return n[t] || (n[t] = e(t))
        }
    }
    var S = /-(\w)/g
      , j = t(function(t) {
        return t.replace(S, function(t, e) {
            return e ? e.toUpperCase() : ""
        })
    })
      , C = t(function(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    })
      , T = /\B([A-Z])/g
      , X = t(function(t) {
        return t.replace(T, "-$1").toLowerCase()
    })
      , G = Function.prototype.bind ? function(t, e) {
        return t.bind(e)
    }
    : function(n, r) {
        function t(t) {
            var e = arguments.length;
            return e ? 1 < e ? n.apply(r, arguments) : n.call(r, t) : n.call(r)
        }
        return t._length = n.length,
        t
    }
    ;
    function A(t, e) {
        for (var n = t.length - (e = e || 0), r = new Array(n); n--; )
            r[n] = t[n + e];
        return r
    }
    function k(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }
    function P(t) {
        for (var e = {}, n = 0; n < t.length; n++)
            t[n] && k(e, t[n]);
        return e
    }
    function D(t, e, n) {}
    var q = function(t, e, n) {
        return !1
    }
      , Y = function(t) {
        return t
    };
    function Q(e, n) {
        if (e === n)
            return !0;
        var t = V(e)
          , r = V(n);
        if (!t || !r)
            return !t && !r && String(e) === String(n);
        try {
            var o, a, i = Array.isArray(e), s = Array.isArray(n);
            return i && s ? e.length === n.length && e.every(function(t, e) {
                return Q(t, n[e])
            }) : e instanceof Date && n instanceof Date ? e.getTime() === n.getTime() : !i && !s && (o = Object.keys(e),
            a = Object.keys(n),
            o.length === a.length) && o.every(function(t) {
                return Q(e[t], n[t])
            })
        } catch (e) {
            return !1
        }
    }
    function tt(t, e) {
        for (var n = 0; n < t.length; n++)
            if (Q(t[n], e))
                return n;
        return -1
    }
    function et(t) {
        var e = !1;
        return function() {
            e || (e = !0,
            t.apply(this, arguments))
        }
    }
    var nt = "data-server-rendered"
      , rt = ["component", "directive", "filter"]
      , e = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"]
      , g = {
        optionMergeStrategies: Object.create(null),
        silent: !1,
        productionTip: !1,
        devtools: !1,
        performance: !1,
        errorHandler: null,
        warnHandler: null,
        ignoredElements: [],
        keyCodes: Object.create(null),
        isReservedTag: q,
        isReservedAttr: q,
        isUnknownElement: q,
        getTagNamespace: D,
        parsePlatformTagName: Y,
        mustUseProp: q,
        async: !0,
        _lifecycleHooks: e
    }
      , ot = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
    function at(t, e, n, r) {
        Object.defineProperty(t, e, {
            value: n,
            enumerable: !!r,
            writable: !0,
            configurable: !0
        })
    }
    var it, st = new RegExp("[^" + ot.source + ".$_\\d]"), lt = "__proto__"in {}, a = "undefined" != typeof window, ct = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform, n = ct && WXEnvironment.platform.toLowerCase(), r = a && window.navigator.userAgent.toLowerCase(), U = r && /msie|trident/.test(r), dt = r && 0 < r.indexOf("msie 9.0"), ut = r && 0 < r.indexOf("edge/"), pt = (r && r.indexOf("android"),
    r && /iphone|ipad|ipod|ios/.test(r) || "ios" === n), n = (r && /chrome\/\d+/.test(r),
    r && /phantomjs/.test(r),
    r && r.match(/firefox\/(\d+)/)), ft = {}.watch, mt = !1;
    if (a)
        try {
            var i = {};
            Object.defineProperty(i, "passive", {
                get: function() {
                    mt = !0
                }
            }),
            window.addEventListener("test-passive", null, i)
        } catch (N) {}
    var ht = function() {
        return it = void 0 === it ? !a && !ct && "undefined" != typeof global && global.process && "server" === global.process.env.VUE_ENV : it
    }
      , gt = a && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
    function vt(t) {
        return "function" == typeof t && /native code/.test(t.toString())
    }
    var _t = "undefined" != typeof Symbol && vt(Symbol) && "undefined" != typeof Reflect && vt(Reflect.ownKeys);
    function yt() {
        this.set = Object.create(null)
    }
    var bt = "undefined" != typeof Set && vt(Set) ? Set : (yt.prototype.has = function(t) {
        return !0 === this.set[t]
    }
    ,
    yt.prototype.add = function(t) {
        this.set[t] = !0
    }
    ,
    yt.prototype.clear = function() {
        this.set = Object.create(null)
    }
    ,
    yt)
      , r = D
      , xt = 0
      , d = function() {
        this.id = xt++,
        this.subs = []
    }
      , kt = (d.prototype.addSub = function(t) {
        this.subs.push(t)
    }
    ,
    d.prototype.removeSub = function(t) {
        F(this.subs, t)
    }
    ,
    d.prototype.depend = function() {
        d.target && d.target.addDep(this)
    }
    ,
    d.prototype.notify = function() {
        for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++)
            t[e].update()
    }
    ,
    d.target = null,
    []);
    function wt(t) {
        kt.push(t),
        d.target = t
    }
    function St() {
        kt.pop(),
        d.target = kt[kt.length - 1]
    }
    var Z = function(t, e, n, r, o, a, i, s) {
        this.tag = t,
        this.data = e,
        this.children = n,
        this.text = r,
        this.elm = o,
        this.ns = void 0,
        this.context = a,
        this.fnContext = void 0,
        this.fnOptions = void 0,
        this.fnScopeId = void 0,
        this.key = e && e.key,
        this.componentOptions = i,
        this.componentInstance = void 0,
        this.parent = void 0,
        this.raw = !1,
        this.isStatic = !1,
        this.isRootInsert = !0,
        this.isComment = !1,
        this.isCloned = !1,
        this.isOnce = !1,
        this.asyncFactory = s,
        this.asyncMeta = void 0,
        this.isAsyncPlaceholder = !1
    }
      , i = {
        child: {
            configurable: !0
        }
    }
      , Ct = (i.child.get = function() {
        return this.componentInstance
    }
    ,
    Object.defineProperties(Z.prototype, i),
    function(t) {
        void 0 === t && (t = "");
        var e = new Z;
        return e.text = t,
        e.isComment = !0,
        e
    }
    );
    function Tt(t) {
        return new Z(void 0,void 0,void 0,String(t))
    }
    function jt(t) {
        var e = new Z(t.tag,t.data,t.children && t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);
        return e.ns = t.ns,
        e.isStatic = t.isStatic,
        e.key = t.key,
        e.isComment = t.isComment,
        e.fnContext = t.fnContext,
        e.fnOptions = t.fnOptions,
        e.fnScopeId = t.fnScopeId,
        e.asyncMeta = t.asyncMeta,
        e.isCloned = !0,
        e
    }
    var Ot = Array.prototype
      , Et = Object.create(Ot)
      , At = (["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(a) {
        var i = Ot[a];
        at(Et, a, function() {
            for (var t = [], e = arguments.length; e--; )
                t[e] = arguments[e];
            var n, r = i.apply(this, t), o = this.__ob__;
            switch (a) {
            case "push":
            case "unshift":
                n = t;
                break;
            case "splice":
                n = t.slice(2)
            }
            return n && o.observeArray(n),
            o.dep.notify(),
            r
        })
    }),
    Object.getOwnPropertyNames(Et))
      , Pt = !0;
    function $(t) {
        Pt = t
    }
    var It = function(t) {
        if (this.value = t,
        this.dep = new d,
        this.vmCount = 0,
        at(t, "__ob__", this),
        Array.isArray(t)) {
            if (lt)
                t.__proto__ = Et;
            else
                for (var e = t, n = Et, r = At, o = 0, a = r.length; o < a; o++) {
                    var i = r[o];
                    at(e, i, n[i])
                }
            this.observeArray(t)
        } else
            this.walk(t)
    };
    function Lt(t, e) {
        var n;
        if (V(t) && !(t instanceof Z))
            return L(t, "__ob__") && t.__ob__ instanceof It ? n = t.__ob__ : Pt && !ht() && (Array.isArray(t) || I(t)) && Object.isExtensible(t) && !t._isVue && (n = new It(t)),
            e && n && n.vmCount++,
            n
    }
    function Dt(n, t, r, e, o) {
        var a, i, s, l = new d, c = Object.getOwnPropertyDescriptor(n, t);
        c && !1 === c.configurable || (a = c && c.get,
        i = c && c.set,
        a && !i || 2 !== arguments.length || (r = n[t]),
        s = !o && Lt(r),
        Object.defineProperty(n, t, {
            enumerable: !0,
            configurable: !0,
            get: function() {
                var t = a ? a.call(n) : r;
                return d.target && (l.depend(),
                s) && (s.dep.depend(),
                Array.isArray(t)) && function t(e) {
                    for (var n = void 0, r = 0, o = e.length; r < o; r++)
                        (n = e[r]) && n.__ob__ && n.__ob__.dep.depend(),
                        Array.isArray(n) && t(n)
                }(t),
                t
            },
            set: function(t) {
                var e = a ? a.call(n) : r;
                t === e || t != t && e != e || a && !i || (i ? i.call(n, t) : r = t,
                s = !o && Lt(t),
                l.notify())
            }
        }))
    }
    function $t(t, e, n) {
        var r;
        return Array.isArray(t) && h(e) ? (t.length = Math.max(t.length, e),
        t.splice(e, 1, n)) : e in t && !(e in Object.prototype) ? t[e] = n : (r = t.__ob__,
        t._isVue || r && r.vmCount || (r ? (Dt(r.value, e, n),
        r.dep.notify()) : t[e] = n)),
        n
    }
    function Mt(t, e) {
        var n;
        Array.isArray(t) && h(e) ? t.splice(e, 1) : (n = t.__ob__,
        t._isVue || n && n.vmCount || L(t, e) && (delete t[e],
        n) && n.dep.notify())
    }
    It.prototype.walk = function(t) {
        for (var e = Object.keys(t), n = 0; n < e.length; n++)
            Dt(t, e[n])
    }
    ,
    It.prototype.observeArray = function(t) {
        for (var e = 0, n = t.length; e < n; e++)
            Lt(t[e])
    }
    ;
    var w = g.optionMergeStrategies;
    function Rt(t, e) {
        if (e)
            for (var n, r, o, a = _t ? Reflect.ownKeys(e) : Object.keys(e), i = 0; i < a.length; i++)
                "__ob__" !== (n = a[i]) && (r = t[n],
                o = e[n],
                L(t, n) ? r !== o && I(r) && I(o) && Rt(r, o) : $t(t, n, o));
        return t
    }
    function Nt(n, r, o) {
        return o ? function() {
            var t = "function" == typeof r ? r.call(o, o) : r
              , e = "function" == typeof n ? n.call(o, o) : n;
            return t ? Rt(t, e) : e
        }
        : r ? n ? function() {
            return Rt("function" == typeof r ? r.call(this, this) : r, "function" == typeof n ? n.call(this, this) : n)
        }
        : r : n
    }
    function Ht(t, e) {
        e = e ? t ? t.concat(e) : Array.isArray(e) ? e : [e] : t;
        return e && function(t) {
            for (var e = [], n = 0; n < t.length; n++)
                -1 === e.indexOf(t[n]) && e.push(t[n]);
            return e
        }(e)
    }
    function zt(t, e, n, r) {
        t = Object.create(t || null);
        return e ? k(t, e) : t
    }
    w.data = function(t, e, n) {
        return n ? Nt(t, e, n) : e && "function" != typeof e ? t : Nt(t, e)
    }
    ,
    e.forEach(function(t) {
        w[t] = Ht
    }),
    rt.forEach(function(t) {
        w[t + "s"] = zt
    }),
    w.watch = function(t, e, n, r) {
        if (t === ft && (t = void 0),
        !(e = e === ft ? void 0 : e))
            return Object.create(t || null);
        if (!t)
            return e;
        var o, a = {};
        for (o in k(a, t),
        e) {
            var i = a[o]
              , s = e[o];
            i && !Array.isArray(i) && (i = [i]),
            a[o] = i ? i.concat(s) : Array.isArray(s) ? s : [s]
        }
        return a
    }
    ,
    w.props = w.methods = w.inject = w.computed = function(t, e, n, r) {
        var o;
        return t ? (k(o = Object.create(null), t),
        e && k(o, e),
        o) : e
    }
    ,
    w.provide = Nt;
    var Bt = function(t, e) {
        return void 0 === e ? t : e
    };
    function Vt(n, r, o) {
        var t = r = "function" == typeof r ? r.options : r
          , e = t.props;
        if (e) {
            var a, i, s = {};
            if (Array.isArray(e))
                for (a = e.length; a--; )
                    "string" == typeof (i = e[a]) && (s[j(i)] = {
                        type: null
                    });
            else if (I(e))
                for (var l in e)
                    i = e[l],
                    s[j(l)] = I(i) ? i : {
                        type: i
                    };
            t.props = s
        }
        var t = r
          , c = t.inject;
        if (c) {
            var d = t.inject = {};
            if (Array.isArray(c))
                for (var u = 0; u < c.length; u++)
                    d[c[u]] = {
                        from: c[u]
                    };
            else if (I(c))
                for (var p in c) {
                    var f = c[p];
                    d[p] = I(f) ? k({
                        from: p
                    }, f) : {
                        from: f
                    }
                }
        }
        var m = r.directives;
        if (m)
            for (var h in m) {
                var g = m[h];
                "function" == typeof g && (m[h] = {
                    bind: g,
                    update: g
                })
            }
        if (!r._base && (r.extends && (n = Vt(n, r.extends, o)),
        r.mixins))
            for (var v = 0, _ = r.mixins.length; v < _; v++)
                n = Vt(n, r.mixins[v], o);
        var y, b = {};
        for (y in n)
            x(y);
        for (y in r)
            L(n, y) || x(y);
        function x(t) {
            var e = w[t] || Bt;
            b[t] = e(n[t], r[t], o, t)
        }
        return b
    }
    function Ft(t, e, n) {
        var r;
        if ("string" == typeof n)
            return L(t = t[e], n) ? t[n] : L(t, e = j(n)) ? t[e] : !L(t, r = C(e)) && (t[n] || t[e]) || t[r]
    }
    function qt(t, e, n, r) {
        var e = e[t]
          , o = !L(n, t)
          , n = n[t]
          , a = Kt(Boolean, e.type);
        return -1 < a && (o && !L(e, "default") ? n = !1 : "" !== n && n !== X(t) || !((o = Kt(String, e.type)) < 0 || a < o) || (n = !0)),
        void 0 === n && (n = function(t, e, n) {
            var r;
            if (L(e, "default"))
                return r = e.default,
                t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n] ? t._props[n] : "function" == typeof r && "Function" !== Zt(e.type) ? r.call(t) : r
        }(r, e, t),
        a = Pt,
        $(!0),
        Lt(n),
        $(a)),
        n
    }
    var Ut = /^\s*function (\w+)/;
    function Zt(t) {
        t = t && t.toString().match(Ut);
        return t ? t[1] : ""
    }
    function Wt(t, e) {
        return Zt(t) === Zt(e)
    }
    function Kt(t, e) {
        if (!Array.isArray(e))
            return Wt(e, t) ? 0 : -1;
        for (var n = 0, r = e.length; n < r; n++)
            if (Wt(e[n], t))
                return n;
        return -1
    }
    function Jt(t, e, n) {
        wt();
        try {
            if (e)
                for (var r = e; r = r.$parent; ) {
                    var o = r.$options.errorCaptured;
                    if (o)
                        for (var a = 0; a < o.length; a++)
                            try {
                                if (!1 === o[a].call(r, t, e, n))
                                    return
                            } catch (t) {
                                Gt(t, r, "errorCaptured hook")
                            }
                }
            Gt(t, e, n)
        } finally {
            St()
        }
    }
    function Xt(t, e, n, r, o) {
        var a;
        try {
            (a = n ? t.apply(e, n) : t.call(e)) && !a._isVue && K(a) && !a._handled && (a.catch(function(t) {
                return Jt(t, r, o + " (Promise/async)")
            }),
            a._handled = !0)
        } catch (t) {
            Jt(t, r, o)
        }
        return a
    }
    function Gt(t, e, n) {
        if (g.errorHandler)
            try {
                return g.errorHandler.call(null, t, e, n)
            } catch (e) {
                e !== t && Yt(e)
            }
        Yt(t)
    }
    function Yt(t) {
        if (!a && !ct || "undefined" == typeof console)
            throw t;
        console.error(t)
    }
    var Qt, te, ee, ne, i = !1, re = [], oe = !1;
    function ae() {
        oe = !1;
        for (var t = re.slice(0), e = re.length = 0; e < t.length; e++)
            t[e]()
    }
    function ie(t, e) {
        var n;
        if (re.push(function() {
            if (t)
                try {
                    t.call(e)
                } catch (t) {
                    Jt(t, e, "nextTick")
                }
            else
                n && n(e)
        }),
        oe || (oe = !0,
        te()),
        !t && "undefined" != typeof Promise)
            return new Promise(function(t) {
                n = t
            }
            )
    }
    "undefined" != typeof Promise && vt(Promise) ? (Qt = Promise.resolve(),
    te = function() {
        Qt.then(ae),
        pt && setTimeout(D)
    }
    ,
    i = !0) : U || "undefined" == typeof MutationObserver || !vt(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString() ? te = "undefined" != typeof setImmediate && vt(setImmediate) ? function() {
        setImmediate(ae)
    }
    : function() {
        setTimeout(ae, 0)
    }
    : (ee = 1,
    e = new MutationObserver(ae),
    ne = document.createTextNode(String(ee)),
    e.observe(ne, {
        characterData: !0
    }),
    te = function() {
        ee = (ee + 1) % 2,
        ne.data = String(ee)
    }
    ,
    i = !0);
    var se = new bt;
    function le(t) {
        !function t(e, n) {
            var r, o, a = Array.isArray(e);
            if (!(!a && !V(e) || Object.isFrozen(e) || e instanceof Z)) {
                if (e.__ob__) {
                    var i = e.__ob__.dep.id;
                    if (n.has(i))
                        return;
                    n.add(i)
                }
                if (a)
                    for (r = e.length; r--; )
                        t(e[r], n);
                else
                    for (r = (o = Object.keys(e)).length; r--; )
                        t(e[o[r]], n)
            }
        }(t, se),
        se.clear()
    }
    var ce = t(function(t) {
        var e = "&" === t.charAt(0)
          , n = "~" === (t = e ? t.slice(1) : t).charAt(0)
          , r = "!" === (t = n ? t.slice(1) : t).charAt(0);
        return {
            name: t = r ? t.slice(1) : t,
            once: n,
            capture: r,
            passive: e
        }
    });
    function de(t, o) {
        function a() {
            var t = arguments
              , e = a.fns;
            if (!Array.isArray(e))
                return Xt(e, null, arguments, o, "v-on handler");
            for (var n = e.slice(), r = 0; r < n.length; r++)
                Xt(n[r], null, t, o, "v-on handler")
        }
        return a.fns = t,
        a
    }
    function ue(t, e, n, r, o, a) {
        var i, s, l, c;
        for (i in t)
            s = t[i],
            l = e[i],
            c = ce(i),
            H(s) || (H(l) ? (H(s.fns) && (s = t[i] = de(s, a)),
            B(c.once) && (s = t[i] = o(c.name, s, c.capture)),
            n(c.name, s, c.capture, c.passive, c.params)) : s !== l && (l.fns = s,
            t[i] = l));
        for (i in e)
            H(t[i]) && r((c = ce(i)).name, e[i], c.capture)
    }
    function pe(t, e, n) {
        var r, o = (t = t instanceof Z ? t.data.hook || (t.data.hook = {}) : t)[e];
        function a() {
            n.apply(this, arguments),
            F(r.fns, a)
        }
        H(o) ? r = de([a]) : z(o.fns) && B(o.merged) ? (r = o).fns.push(a) : r = de([o, a]),
        r.merged = !0,
        t[e] = r
    }
    function fe(t, e, n, r, o) {
        if (z(e)) {
            if (L(e, n))
                return t[n] = e[n],
                o || delete e[n],
                1;
            if (L(e, r))
                return t[n] = e[r],
                o || delete e[r],
                1
        }
    }
    function me(t) {
        return y(t) ? [Tt(t)] : Array.isArray(t) ? function t(e, n) {
            for (var r, o, a, i = [], s = 0; s < e.length; s++)
                H(r = e[s]) || "boolean" == typeof r || (a = i[o = i.length - 1],
                Array.isArray(r) ? 0 < r.length && (he((r = t(r, (n || "") + "_" + s))[0]) && he(a) && (i[o] = Tt(a.text + r[0].text),
                r.shift()),
                i.push.apply(i, r)) : y(r) ? he(a) ? i[o] = Tt(a.text + r) : "" !== r && i.push(Tt(r)) : he(r) && he(a) ? i[o] = Tt(a.text + r.text) : (B(e._isVList) && z(r.tag) && H(r.key) && z(n) && (r.key = "__vlist" + n + "_" + s + "__"),
                i.push(r)));
            return i
        }(t) : void 0
    }
    function he(t) {
        return z(t) && z(t.text) && !1 === t.isComment
    }
    function ge(t, e) {
        if (t) {
            for (var n = Object.create(null), r = _t ? Reflect.ownKeys(t) : Object.keys(t), o = 0; o < r.length; o++) {
                var a = r[o];
                if ("__ob__" !== a) {
                    for (var i, s = t[a].from, l = e; l; ) {
                        if (l._provided && L(l._provided, s)) {
                            n[a] = l._provided[s];
                            break
                        }
                        l = l.$parent
                    }
                    !l && "default"in t[a] && (i = t[a].default,
                    n[a] = "function" == typeof i ? i.call(e) : i)
                }
            }
            return n
        }
    }
    function ve(t, e) {
        if (!t || !t.length)
            return {};
        for (var n, r = {}, o = 0, a = t.length; o < a; o++) {
            var i = t[o]
              , s = i.data;
            s && s.attrs && s.attrs.slot && delete s.attrs.slot,
            i.context !== e && i.fnContext !== e || !s || null == s.slot ? (r.default || (r.default = [])).push(i) : (s = r[s = s.slot] || (r[s] = []),
            "template" === i.tag ? s.push.apply(s, i.children || []) : s.push(i))
        }
        for (n in r)
            r[n].every(_e) && delete r[n];
        return r
    }
    function _e(t) {
        return t.isComment && !t.asyncFactory || " " === t.text
    }
    function ye(t) {
        return t.isComment && t.asyncFactory
    }
    function be(t, e, n) {
        var r, o, a = 0 < Object.keys(e).length, i = t ? !!t.$stable : !a, s = t && t.$key;
        if (t) {
            if (t._normalized)
                return t._normalized;
            if (i && n && n !== N && s === n.$key && !a && !n.$hasNormal)
                return n;
            for (var l in r = {},
            t)
                t[l] && "$" !== l[0] && (r[l] = function(t, e, n) {
                    function r() {
                        var t = arguments.length ? n.apply(null, arguments) : n({})
                          , e = (t = t && "object" == _typeof(t) && !Array.isArray(t) ? [t] : me(t)) && t[0];
                        return t && (!e || 1 === t.length && e.isComment && !ye(e)) ? void 0 : t
                    }
                    return n.proxy && Object.defineProperty(t, e, {
                        get: r,
                        enumerable: !0,
                        configurable: !0
                    }),
                    r
                }(e, l, t[l]))
        } else
            r = {};
        for (o in e)
            o in r || (r[o] = function(t, e) {
                return function() {
                    return t[e]
                }
            }(e, o));
        return t && Object.isExtensible(t) && (t._normalized = r),
        at(r, "$stable", i),
        at(r, "$key", s),
        at(r, "$hasNormal", a),
        r
    }
    function xe(t, e) {
        var n, r, o, a;
        if (Array.isArray(t) || "string" == typeof t)
            for (i = new Array(t.length),
            n = 0,
            r = t.length; n < r; n++)
                i[n] = e(t[n], n);
        else if ("number" == typeof t)
            for (i = new Array(t),
            n = 0; n < t; n++)
                i[n] = e(n + 1, n);
        else if (V(t))
            if (_t && t[Symbol.iterator])
                for (var i = [], s = t[Symbol.iterator](), l = s.next(); !l.done; )
                    i.push(e(l.value, i.length)),
                    l = s.next();
            else
                for (o = Object.keys(t),
                i = new Array(o.length),
                n = 0,
                r = o.length; n < r; n++)
                    a = o[n],
                    i[n] = e(t[a], a, n);
        return (i = z(i) ? i : [])._isVList = !0,
        i
    }
    function ke(t, e, n, r) {
        var o = this.$scopedSlots[t]
          , o = o ? (n = n || {},
        o(n = r ? k(k({}, r), n) : n) || ("function" == typeof e ? e() : e)) : this.$slots[t] || ("function" == typeof e ? e() : e)
          , r = n && n.slot;
        return r ? this.$createElement("template", {
            slot: r
        }, o) : o
    }
    function we(t) {
        return Ft(this.$options, "filters", t) || Y
    }
    function Se(t, e) {
        return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e
    }
    function Ce(t, e, n, r, o) {
        n = g.keyCodes[e] || n;
        return o && r && !g.keyCodes[e] ? Se(o, r) : n ? Se(n, t) : r ? X(r) !== e : void 0 === t
    }
    function Te(r, o, a, i, s) {
        if (a && V(a)) {
            var l, t;
            for (t in a = Array.isArray(a) ? P(a) : a)
                !function(e) {
                    l = "class" === e || "style" === e || b(e) ? r : (t = r.attrs && r.attrs.type,
                    i || g.mustUseProp(o, t, e) ? r.domProps || (r.domProps = {}) : r.attrs || (r.attrs = {}));
                    var t = j(e)
                      , n = X(e);
                    t in l || n in l || (l[e] = a[e],
                    s && ((r.on || (r.on = {}))["update:" + e] = function(t) {
                        a[e] = t
                    }
                    ))
                }(t)
        }
        return r
    }
    function je(t, e) {
        var n = this._staticTrees || (this._staticTrees = [])
          , r = n[t];
        return r && !e || Ee(r = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this), "__static__" + t, !1),
        r
    }
    function Oe(t, e, n) {
        return Ee(t, "__once__" + e + (n ? "_" + n : ""), !0),
        t
    }
    function Ee(t, e, n) {
        if (Array.isArray(t))
            for (var r = 0; r < t.length; r++)
                t[r] && "string" != typeof t[r] && Ae(t[r], e + "_" + r, n);
        else
            Ae(t, e, n)
    }
    function Ae(t, e, n) {
        t.isStatic = !0,
        t.key = e,
        t.isOnce = n
    }
    function Pe(t, e) {
        if (e && I(e)) {
            var n, r = t.on = t.on ? k({}, t.on) : {};
            for (n in e) {
                var o = r[n]
                  , a = e[n];
                r[n] = o ? [].concat(o, a) : a
            }
        }
        return t
    }
    function Ie(t, e, n, r) {
        e = e || {
            $stable: !n
        };
        for (var o = 0; o < t.length; o++) {
            var a = t[o];
            Array.isArray(a) ? Ie(a, e, n) : a && (a.proxy && (a.fn.proxy = !0),
            e[a.key] = a.fn)
        }
        return r && (e.$key = r),
        e
    }
    function Le(t, e) {
        for (var n = 0; n < e.length; n += 2) {
            var r = e[n];
            "string" == typeof r && r && (t[e[n]] = e[n + 1])
        }
        return t
    }
    function De(t, e) {
        return "string" == typeof t ? e + t : t
    }
    function $e(t) {
        t._o = Oe,
        t._n = J,
        t._s = v,
        t._l = xe,
        t._t = ke,
        t._q = Q,
        t._i = tt,
        t._m = je,
        t._f = we,
        t._k = Ce,
        t._b = Te,
        t._v = Tt,
        t._e = Ct,
        t._u = Ie,
        t._g = Pe,
        t._d = Le,
        t._p = De
    }
    function Me(t, e, n, o, r) {
        var a, i = this, s = r.options, r = (L(o, "_uid") ? (a = Object.create(o))._original = o : o = (a = o)._original,
        B(s._compiled)), l = !r;
        this.data = t,
        this.props = e,
        this.children = n,
        this.parent = o,
        this.listeners = t.on || N,
        this.injections = ge(s.inject, o),
        this.slots = function() {
            return i.$slots || be(t.scopedSlots, i.$slots = ve(n, o)),
            i.$slots
        }
        ,
        Object.defineProperty(this, "scopedSlots", {
            enumerable: !0,
            get: function() {
                return be(t.scopedSlots, this.slots())
            }
        }),
        r && (this.$options = s,
        this.$slots = this.slots(),
        this.$scopedSlots = be(t.scopedSlots, this.$slots)),
        s._scopeId ? this._c = function(t, e, n, r) {
            t = qe(a, t, e, n, r, l);
            return t && !Array.isArray(t) && (t.fnScopeId = s._scopeId,
            t.fnContext = o),
            t
        }
        : this._c = function(t, e, n, r) {
            return qe(a, t, e, n, r, l)
        }
    }
    function Re(t, e, n, r) {
        t = jt(t);
        return t.fnContext = n,
        t.fnOptions = r,
        e.slot && ((t.data || (t.data = {})).slot = e.slot),
        t
    }
    function Ne(t, e) {
        for (var n in e)
            t[j(n)] = e[n]
    }
    $e(Me.prototype);
    var He = {
        init: function(t, e) {
            var n, r, o;
            t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive ? He.prepatch(t, t) : (t.componentInstance = (r = {
                _isComponent: !0,
                _parentVnode: n = t,
                parent: Qe
            },
            z(o = n.data.inlineTemplate) && (r.render = o.render,
            r.staticRenderFns = o.staticRenderFns),
            new n.componentOptions.Ctor(r))).$mount(e ? t.elm : void 0, e)
        },
        prepatch: function(t, e) {
            var n = e.componentOptions
              , r = e.componentInstance = t.componentInstance
              , o = n.propsData
              , t = n.listeners
              , n = n.children
              , a = e.data.scopedSlots
              , i = r.$scopedSlots
              , i = !!(a && !a.$stable || i !== N && !i.$stable || a && r.$scopedSlots.$key !== a.$key || !a && r.$scopedSlots.$key)
              , a = !!(n || r.$options._renderChildren || i);
            if (r.$options._parentVnode = e,
            r.$vnode = e,
            r._vnode && (r._vnode.parent = e),
            r.$options._renderChildren = n,
            r.$attrs = e.data.attrs || N,
            r.$listeners = t || N,
            o && r.$options.props) {
                $(!1);
                for (var s = r._props, l = r.$options._propKeys || [], c = 0; c < l.length; c++) {
                    var d = l[c]
                      , u = r.$options.props;
                    s[d] = qt(d, u, o, r)
                }
                $(!0),
                r.$options.propsData = o
            }
            t = t || N,
            i = r.$options._parentListeners,
            r.$options._parentListeners = t,
            Ye(r, t, i),
            a && (r.$slots = ve(n, e.context),
            r.$forceUpdate())
        },
        insert: function(t) {
            var e = t.context
              , n = t.componentInstance;
            n._isMounted || (n._isMounted = !0,
            u(n, "mounted")),
            t.data.keepAlive && (e._isMounted ? (n._inactive = !1,
            on.push(n)) : nn(n, !0))
        },
        destroy: function(t) {
            var e = t.componentInstance;
            e._isDestroyed || (t.data.keepAlive ? function t(e, n) {
                if (!(n && (e._directInactive = !0,
                en(e)) || e._inactive)) {
                    e._inactive = !0;
                    for (var r = 0; r < e.$children.length; r++)
                        t(e.$children[r]);
                    u(e, "deactivated")
                }
            }(e, !0) : e.$destroy())
        }
    }
      , ze = Object.keys(He);
    function Be(s, t, e, n, r) {
        if (!H(s)) {
            var o, a = e.$options._base;
            if ("function" == typeof (s = V(s) ? a.extend(s) : s)) {
                if (H(s.cid) && void 0 === (T = o = s,
                j = a,
                s = B(T.error) && z(T.errorComp) ? T.errorComp : z(T.resolved) ? T.resolved : ((O = Ze) && z(T.owners) && -1 === T.owners.indexOf(O) && T.owners.push(O),
                B(T.loading) && z(T.loadingComp) ? T.loadingComp : O && !z(T.owners) ? (E = T.owners = [O],
                A = !0,
                I = P = null,
                O.$on("hook:destroyed", function() {
                    return F(E, O)
                }),
                L = function(t) {
                    for (var e = 0, n = E.length; e < n; e++)
                        E[e].$forceUpdate();
                    t && (E.length = 0,
                    null !== P && (clearTimeout(P),
                    P = null),
                    null !== I) && (clearTimeout(I),
                    I = null)
                }
                ,
                a = et(function(t) {
                    T.resolved = We(t, j),
                    A ? E.length = 0 : L(!0)
                }),
                D = et(function(t) {
                    z(T.errorComp) && (T.error = !0,
                    L(!0))
                }),
                V($ = T(a, D)) && (K($) ? H(T.resolved) && $.then(a, D) : K($.component) && ($.component.then(a, D),
                z($.error) && (T.errorComp = We($.error, j)),
                z($.loading) && (T.loadingComp = We($.loading, j),
                0 === $.delay ? T.loading = !0 : P = setTimeout(function() {
                    P = null,
                    H(T.resolved) && H(T.error) && (T.loading = !0,
                    L(!1))
                }, $.delay || 200)),
                z($.timeout)) && (I = setTimeout(function() {
                    I = null,
                    H(T.resolved) && D(null)
                }, $.timeout))),
                A = !1,
                T.loading ? T.loadingComp : T.resolved) : void 0)))
                    return a = o,
                    $ = t,
                    k = e,
                    w = n,
                    S = r,
                    (C = Ct()).asyncFactory = a,
                    C.asyncMeta = {
                        data: $,
                        context: k,
                        children: w,
                        tag: S
                    },
                    C;
                t = t || {},
                Sn(s),
                z(t.model) && (a = s.options,
                k = t,
                w = a.model && a.model.prop || "value",
                a = a.model && a.model.event || "input",
                (k.attrs || (k.attrs = {}))[w] = k.model.value,
                w = k.on || (k.on = {}),
                S = w[a],
                k = k.model.callback,
                z(S) ? (Array.isArray(S) ? -1 === S.indexOf(k) : S !== k) && (w[a] = [k].concat(S)) : w[a] = k);
                C = function(t) {
                    var e = s.options.props;
                    if (!H(e)) {
                        var n = {}
                          , r = t.attrs
                          , o = t.props;
                        if (z(r) || z(o))
                            for (var a in e) {
                                var i = X(a);
                                fe(n, o, a, i, !0) || fe(n, r, a, i, !1)
                            }
                        return n
                    }
                }(t);
                if (!B(s.options.functional)) {
                    for (var a = t.on, i = (t.on = t.nativeOn,
                    B(s.options.abstract) && (i = t.slot,
                    t = {},
                    i) && (t.slot = i),
                    t), l = i.hook || (i.hook = {}), c = 0; c < ze.length; c++) {
                        var d = ze[c]
                          , u = l[d]
                          , p = He[d];
                        u === p || u && u._merged || (l[d] = u ? function(n, r) {
                            function t(t, e) {
                                n(t, e),
                                r(t, e)
                            }
                            return t._merged = !0,
                            t
                        }(p, u) : p)
                    }
                    var f = s.options.name || r;
                    return new Z("vue-component-" + s.cid + (f ? "-" + f : ""),t,void 0,void 0,void 0,e,{
                        Ctor: s,
                        propsData: C,
                        listeners: a,
                        tag: r,
                        children: n
                    },o)
                }
                var f = s
                  , M = C
                  , m = t
                  , a = e
                  , r = n
                  , h = f.options
                  , g = {}
                  , v = h.props;
                if (z(v))
                    for (var _ in v)
                        g[_] = qt(_, v, M || N);
                else
                    z(m.attrs) && Ne(g, m.attrs),
                    z(m.props) && Ne(g, m.props);
                var y = new Me(m,g,r,a,f);
                if ((r = h.render.call(null, y._c, y))instanceof Z)
                    return Re(r, m, y.parent, h);
                if (Array.isArray(r)) {
                    for (var b = me(r) || [], R = new Array(b.length), x = 0; x < b.length; x++)
                        R[x] = Re(b[x], m, y.parent, h);
                    return R
                }
            }
        }
        var k, w, S, C, T, j, O, E, A, P, I, L, D, $
    }
    var Ve = 1
      , Fe = 2;
    function qe(t, e, n, r, o, a) {
        return (Array.isArray(n) || y(n)) && (o = r,
        r = n,
        n = void 0),
        B(a) && (o = Fe),
        a = t,
        t = e,
        e = r,
        r = o,
        (!z(o = n) || !z(o.__ob__)) && (t = z(o) && z(o.is) ? o.is : t) ? (Array.isArray(e) && "function" == typeof e[0] && ((o = o || {}).scopedSlots = {
            default: e[0]
        },
        e.length = 0),
        r === Fe ? e = me(e) : r === Ve && (e = function(t) {
            for (var e = 0; e < t.length; e++)
                if (Array.isArray(t[e]))
                    return Array.prototype.concat.apply([], t);
            return t
        }(e)),
        r = "string" == typeof t ? (i = a.$vnode && a.$vnode.ns || g.getTagNamespace(t),
        g.isReservedTag(t) ? new Z(g.parsePlatformTagName(t),o,e,void 0,void 0,a) : o && o.pre || !z(r = Ft(a.$options, "components", t)) ? new Z(t,o,e,void 0,void 0,a) : Be(r, o, a, e, t)) : Be(t, o, a, e),
        Array.isArray(r) ? r : z(r) ? (z(i) && function t(e, n, r) {
            if (e.ns = n,
            "foreignObject" === e.tag && (r = !(n = void 0)),
            z(e.children))
                for (var o = 0, a = e.children.length; o < a; o++) {
                    var i = e.children[o];
                    z(i.tag) && (H(i.ns) || B(r) && "svg" !== i.tag) && t(i, n, r)
                }
        }(r, i),
        z(o) && (V((t = o).style) && le(t.style),
        V(t.class) && le(t.class)),
        r) : Ct()) : Ct();
        var i
    }
    var Ue, Ze = null;
    function We(t, e) {
        return V(t = t.__esModule || _t && "Module" === t[Symbol.toStringTag] ? t.default : t) ? e.extend(t) : t
    }
    function Ke(t) {
        if (Array.isArray(t))
            for (var e = 0; e < t.length; e++) {
                var n = t[e];
                if (z(n) && (z(n.componentOptions) || ye(n)))
                    return n
            }
    }
    function Je(t, e) {
        Ue.$on(t, e)
    }
    function Xe(t, e) {
        Ue.$off(t, e)
    }
    function Ge(e, n) {
        var r = Ue;
        return function t() {
            null !== n.apply(null, arguments) && r.$off(e, t)
        }
    }
    function Ye(t, e, n) {
        ue(e, n || {}, Je, Xe, Ge, Ue = t),
        Ue = void 0
    }
    var Qe = null;
    function tn(t) {
        var e = Qe;
        return Qe = t,
        function() {
            Qe = e
        }
    }
    function en(t) {
        for (; t = t && t.$parent; )
            if (t._inactive)
                return 1
    }
    function nn(t, e) {
        if (e) {
            if (t._directInactive = !1,
            en(t))
                return
        } else if (t._directInactive)
            return;
        if (t._inactive || null === t._inactive) {
            t._inactive = !1;
            for (var n = 0; n < t.$children.length; n++)
                nn(t.$children[n]);
            u(t, "activated")
        }
    }
    function u(t, e) {
        wt();
        var n = t.$options[e]
          , r = e + " hook";
        if (n)
            for (var o = 0, a = n.length; o < a; o++)
                Xt(n[o], t, null, t, r);
        t._hasHookEvent && t.$emit("hook:" + e),
        St()
    }
    var rn, p = [], on = [], an = {}, sn = !1, ln = !1, cn = 0, dn = 0, un = Date.now;
    function pn() {
        var t, e;
        for (dn = un(),
        ln = !0,
        p.sort(function(t, e) {
            return t.id - e.id
        }),
        cn = 0; cn < p.length; cn++)
            (t = p[cn]).before && t.before(),
            e = t.id,
            an[e] = null,
            t.run();
        for (var n = on.slice(), r = p.slice(), o = (cn = p.length = on.length = 0,
        sn = ln = !(an = {}),
        n), a = 0; a < o.length; a++)
            o[a]._inactive = !0,
            nn(o[a], !0);
        for (var i = r, s = i.length; s--; ) {
            var l = i[s]
              , c = l.vm;
            c._watcher === l && c._isMounted && !c._isDestroyed && u(c, "updated")
        }
        gt && g.devtools && gt.emit("flush")
    }
    a && !U && (rn = window.performance) && "function" == typeof rn.now && un() > document.createEvent("Event").timeStamp && (un = function() {
        return rn.now()
    }
    );
    function M(t, e, n, r, o) {
        this.vm = t,
        o && (t._watcher = this),
        t._watchers.push(this),
        r ? (this.deep = !!r.deep,
        this.user = !!r.user,
        this.lazy = !!r.lazy,
        this.sync = !!r.sync,
        this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1,
        this.cb = n,
        this.id = ++fn,
        this.active = !0,
        this.dirty = this.lazy,
        this.deps = [],
        this.newDeps = [],
        this.depIds = new bt,
        this.newDepIds = new bt,
        this.expression = "",
        "function" == typeof e ? this.getter = e : (this.getter = function(t) {
            var n;
            if (!st.test(t))
                return n = t.split("."),
                function(t) {
                    for (var e = 0; e < n.length; e++) {
                        if (!t)
                            return;
                        t = t[n[e]]
                    }
                    return t
                }
        }(e),
        this.getter || (this.getter = D)),
        this.value = this.lazy ? void 0 : this.get()
    }
    var fn = 0
      , mn = (M.prototype.get = function() {
        wt(this);
        var t, e = this.vm;
        try {
            t = this.getter.call(e, e)
        } catch (t) {
            if (!this.user)
                throw t;
            Jt(t, e, 'getter for watcher "' + this.expression + '"')
        } finally {
            this.deep && le(t),
            St(),
            this.cleanupDeps()
        }
        return t
    }
    ,
    M.prototype.addDep = function(t) {
        var e = t.id;
        this.newDepIds.has(e) || (this.newDepIds.add(e),
        this.newDeps.push(t),
        this.depIds.has(e)) || t.addSub(this)
    }
    ,
    M.prototype.cleanupDeps = function() {
        for (var t = this.deps.length; t--; ) {
            var e = this.deps[t];
            this.newDepIds.has(e.id) || e.removeSub(this)
        }
        var n = this.depIds;
        this.depIds = this.newDepIds,
        this.newDepIds = n,
        this.newDepIds.clear(),
        n = this.deps,
        this.deps = this.newDeps,
        this.newDeps = n,
        this.newDeps.length = 0
    }
    ,
    M.prototype.update = function() {
        if (this.lazy)
            this.dirty = !0;
        else if (this.sync)
            this.run();
        else {
            var t = this
              , e = t.id;
            if (null == an[e]) {
                if (an[e] = !0,
                ln) {
                    for (var n = p.length - 1; cn < n && p[n].id > t.id; )
                        n--;
                    p.splice(n + 1, 0, t)
                } else
                    p.push(t);
                sn || (sn = !0,
                ie(pn))
            }
        }
    }
    ,
    M.prototype.run = function() {
        var t, e, n;
        this.active && ((t = this.get()) !== this.value || V(t) || this.deep) && (e = this.value,
        this.value = t,
        this.user ? (n = 'callback for watcher "' + this.expression + '"',
        Xt(this.cb, this.vm, [t, e], this.vm, n)) : this.cb.call(this.vm, t, e))
    }
    ,
    M.prototype.evaluate = function() {
        this.value = this.get(),
        this.dirty = !1
    }
    ,
    M.prototype.depend = function() {
        for (var t = this.deps.length; t--; )
            this.deps[t].depend()
    }
    ,
    M.prototype.teardown = function() {
        if (this.active) {
            this.vm._isBeingDestroyed || F(this.vm._watchers, this);
            for (var t = this.deps.length; t--; )
                this.deps[t].removeSub(this);
            this.active = !1
        }
    }
    ,
    {
        enumerable: !0,
        configurable: !0,
        get: D,
        set: D
    });
    function hn(t, e, n) {
        mn.get = function() {
            return this[e][n]
        }
        ,
        mn.set = function(t) {
            this[e][n] = t
        }
        ,
        Object.defineProperty(t, n, mn)
    }
    function gn(t) {
        t._watchers = [];
        var e = t.$options;
        if (e.props) {
            var n = t, r = e.props, o, a, i, s = n.$options.propsData || {}, l = n._props = {}, c = n.$options._propKeys = [];
            for (o in n.$parent && $(!1),
            r)
                a = o,
                i = void 0,
                c.push(a),
                i = qt(a, r, s, n),
                Dt(l, a, i),
                a in n || hn(n, "_props", a);
            $(!0)
        }
        if (e.methods) {
            var d = t, u = e.methods, p;
            for (p in d.$options.props,
            u)
                d[p] = "function" != typeof u[p] ? D : G(u[p], d)
        }
        if (e.data) {
            for (var f = t, m, h = f.$options.data, g = (I(h = f._data = "function" == typeof h ? function(t, e) {
                wt();
                try {
                    return t.call(e, e)
                } catch (t) {
                    return Jt(t, e, "data()"),
                    {}
                } finally {
                    St()
                }
            }(h, f) : h || {}) || (h = {}),
            Object.keys(h)), v = f.$options.props, _ = (f.$options.methods,
            g.length); _--; ) {
                var y = g[_];
                v && L(v, y) || 36 !== (m = (y + "").charCodeAt(0)) && 95 !== m && hn(f, "_data", y)
            }
            Lt(h, !0)
        } else
            Lt(t._data = {}, !0);
        if (e.computed) {
            var b = t, x = e.computed, k, w = b._computedWatchers = Object.create(null), S = ht();
            for (k in x) {
                var C = x[k]
                  , T = "function" == typeof C ? C : C.get;
                S || (w[k] = new M(b,T || D,D,vn)),
                k in b || _n(b, k, C)
            }
        }
        if (e.watch && e.watch !== ft) {
            var j, O = t, E = e.watch;
            for (j in E) {
                var A = E[j];
                if (Array.isArray(A))
                    for (var P = 0; P < A.length; P++)
                        xn(O, j, A[P]);
                else
                    xn(O, j, A)
            }
        }
    }
    var vn = {
        lazy: !0
    };
    function _n(t, e, n) {
        var r = !ht();
        "function" == typeof n ? (mn.get = r ? yn(e) : bn(n),
        mn.set = D) : (mn.get = n.get ? r && !1 !== n.cache ? yn(e) : bn(n.get) : D,
        mn.set = n.set || D),
        Object.defineProperty(t, e, mn)
    }
    function yn(e) {
        return function() {
            var t = this._computedWatchers && this._computedWatchers[e];
            if (t)
                return t.dirty && t.evaluate(),
                d.target && t.depend(),
                t.value
        }
    }
    function bn(t) {
        return function() {
            return t.call(this, this)
        }
    }
    function xn(t, e, n, r) {
        return "string" == typeof (n = I(n) ? (r = n).handler : n) && (n = t[n]),
        t.$watch(e, n, r)
    }
    var kn, wn = 0;
    function Sn(o) {
        var t, e, n = o.options;
        return o.super && (t = Sn(o.super)) !== o.superOptions && (o.superOptions = t,
        (e = function() {
            var t, e, n = o.options, r = o.sealedOptions;
            for (e in n)
                n[e] !== r[e] && (t = t || {},
                t[e] = n[e]);
            return t
        }()) && k(o.extendOptions, e),
        (n = o.options = Vt(t, o.extendOptions)).name) && (n.components[n.name] = o),
        n
    }
    function s(t) {
        this._init(t)
    }
    function Cn(t) {
        t.cid = 0;
        var u = 1;
        t.extend = function(t) {
            var e = this
              , n = e.cid
              , r = (t = t || {})._Ctor || (t._Ctor = {});
            if (r[n])
                return r[n];
            function o(t) {
                this._init(t)
            }
            var a = t.name || e.options.name;
            if (((o.prototype = Object.create(e.prototype)).constructor = o).cid = u++,
            o.options = Vt(e.options, t),
            o.super = e,
            o.options.props) {
                var i = o, s;
                for (s in i.options.props)
                    hn(i.prototype, "_props", s)
            }
            if (o.options.computed) {
                var l = o, c, d = l.options.computed;
                for (c in d)
                    _n(l.prototype, c, d[c])
            }
            return o.extend = e.extend,
            o.mixin = e.mixin,
            o.use = e.use,
            rt.forEach(function(t) {
                o[t] = e[t]
            }),
            a && (o.options.components[a] = o),
            o.superOptions = e.options,
            o.extendOptions = t,
            o.sealedOptions = k({}, o.options),
            r[n] = o
        }
    }
    function Tn(t) {
        return t && (t.Ctor.options.name || t.tag)
    }
    function jn(t, e) {
        return Array.isArray(t) ? -1 < t.indexOf(e) : "string" == typeof t ? -1 < t.split(",").indexOf(e) : "[object RegExp]" === m.call(t) && t.test(e)
    }
    function On(t, e) {
        var n, r = t.cache, o = t.keys, a = t._vnode;
        for (n in r) {
            var i = r[n];
            i && (i = i.name) && !e(i) && En(r, n, o, a)
        }
    }
    function En(t, e, n, r) {
        var o = t[e];
        !o || r && o.tag === r.tag || o.componentInstance.$destroy(),
        t[e] = null,
        F(n, e)
    }
    s.prototype._init = function(t) {
        var e, n, o, r, a, i, s = this, l = (s._uid = wn++,
        s._isVue = !0,
        t && t._isComponent ? (i = t,
        c = (c = s).$options = Object.create(c.constructor.options),
        l = i._parentVnode,
        c.parent = i.parent,
        l = (c._parentVnode = l).componentOptions,
        c.propsData = l.propsData,
        c._parentListeners = l.listeners,
        c._renderChildren = l.children,
        c._componentTag = l.tag,
        i.render && (c.render = i.render,
        c.staticRenderFns = i.staticRenderFns)) : s.$options = Vt(Sn(s.constructor), t || {}, s),
        (s._renderProxy = s)._self = s), c = l.$options, d = c.parent;
        if (d && !c.abstract) {
            for (; d.$options.abstract && d.$parent; )
                d = d.$parent;
            d.$children.push(l)
        }
        l.$parent = d,
        l.$root = d ? d.$root : l,
        l.$children = [],
        l.$refs = {},
        l._watcher = null,
        l._inactive = null,
        l._directInactive = !1,
        l._isMounted = !1,
        l._isDestroyed = !1,
        l._isBeingDestroyed = !1,
        (i = s)._events = Object.create(null),
        i._hasHookEvent = !1,
        (t = i.$options._parentListeners) && Ye(i, t),
        (o = s)._vnode = null,
        o._staticTrees = null,
        t = o.$options,
        r = o.$vnode = t._parentVnode,
        a = r && r.context,
        o.$slots = ve(t._renderChildren, a),
        o.$scopedSlots = N,
        o._c = function(t, e, n, r) {
            return qe(o, t, e, n, r, !1)
        }
        ,
        o.$createElement = function(t, e, n, r) {
            return qe(o, t, e, n, r, !0)
        }
        ,
        a = r && r.data,
        Dt(o, "$attrs", a && a.attrs || N, null, !0),
        Dt(o, "$listeners", t._parentListeners || N, null, !0),
        u(s, "beforeCreate"),
        (n = ge((e = s).$options.inject, e)) && ($(!1),
        Object.keys(n).forEach(function(t) {
            Dt(e, t, n[t])
        }),
        $(!0)),
        gn(s),
        (a = (r = s).$options.provide) && (r._provided = "function" == typeof a ? a.call(r) : a),
        u(s, "created"),
        s.$options.el && s.$mount(s.$options.el)
    }
    ,
    e = s,
    Object.defineProperty(e.prototype, "$data", {
        get: function() {
            return this._data
        }
    }),
    Object.defineProperty(e.prototype, "$props", {
        get: function() {
            return this._props
        }
    }),
    e.prototype.$set = $t,
    e.prototype.$delete = Mt,
    e.prototype.$watch = function(t, e, n) {
        if (I(e))
            return xn(this, t, e, n);
        (n = n || {}).user = !0;
        var r = new M(this,t,e,n);
        return n.immediate && (t = 'callback for immediate watcher "' + r.expression + '"',
        wt(),
        Xt(e, this, [r.value], this, t),
        St()),
        function() {
            r.teardown()
        }
    }
    ,
    kn = /^hook:/,
    (e = s).prototype.$on = function(t, e) {
        var n = this;
        if (Array.isArray(t))
            for (var r = 0, o = t.length; r < o; r++)
                n.$on(t[r], e);
        else
            (n._events[t] || (n._events[t] = [])).push(e),
            kn.test(t) && (n._hasHookEvent = !0);
        return n
    }
    ,
    e.prototype.$once = function(t, e) {
        var n = this;
        function r() {
            n.$off(t, r),
            e.apply(n, arguments)
        }
        return r.fn = e,
        n.$on(t, r),
        n
    }
    ,
    e.prototype.$off = function(t, e) {
        var n = this;
        if (arguments.length)
            if (Array.isArray(t))
                for (var r = 0, o = t.length; r < o; r++)
                    n.$off(t[r], e);
            else {
                var a, i = n._events[t];
                if (i)
                    if (e) {
                        for (var s = i.length; s--; )
                            if ((a = i[s]) === e || a.fn === e) {
                                i.splice(s, 1);
                                break
                            }
                    } else
                        n._events[t] = null
            }
        else
            n._events = Object.create(null);
        return n
    }
    ,
    e.prototype.$emit = function(t) {
        if (e = this._events[t])
            for (var e = 1 < e.length ? A(e) : e, n = A(arguments, 1), r = 'event handler for "' + t + '"', o = 0, a = e.length; o < a; o++)
                Xt(e[o], this, n, this, r);
        return this
    }
    ,
    (e = s).prototype._update = function(t, e) {
        var n = this
          , r = n.$el
          , o = n._vnode
          , a = tn(n);
        n._vnode = t,
        n.$el = o ? n.__patch__(o, t) : n.__patch__(n.$el, t, e, !1),
        a(),
        r && (r.__vue__ = null),
        n.$el && (n.$el.__vue__ = n),
        n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
    }
    ,
    e.prototype.$forceUpdate = function() {
        this._watcher && this._watcher.update()
    }
    ,
    e.prototype.$destroy = function() {
        var t = this;
        if (!t._isBeingDestroyed) {
            u(t, "beforeDestroy"),
            t._isBeingDestroyed = !0;
            var e = t.$parent;
            !e || e._isBeingDestroyed || t.$options.abstract || F(e.$children, t),
            t._watcher && t._watcher.teardown();
            for (var n = t._watchers.length; n--; )
                t._watchers[n].teardown();
            t._data.__ob__ && t._data.__ob__.vmCount--,
            t._isDestroyed = !0,
            t.__patch__(t._vnode, null),
            u(t, "destroyed"),
            t.$off(),
            t.$el && (t.$el.__vue__ = null),
            t.$vnode && (t.$vnode.parent = null)
        }
    }
    ,
    $e((e = s).prototype),
    e.prototype.$nextTick = function(t) {
        return ie(t, this)
    }
    ,
    e.prototype._render = function() {
        var t, e = this, n = e.$options, r = n.render, o = n._parentVnode;
        o && (e.$scopedSlots = be(o.data.scopedSlots, e.$slots, e.$scopedSlots)),
        e.$vnode = o;
        try {
            Ze = e,
            t = r.call(e._renderProxy, e.$createElement)
        } catch (n) {
            Jt(n, e, "render"),
            t = e._vnode
        } finally {
            Ze = null
        }
        return (t = (t = Array.isArray(t) && 1 === t.length ? t[0] : t)instanceof Z ? t : Ct()).parent = o,
        t
    }
    ;
    function An(t, e, n) {
        return "value" === n && In(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t
    }
    var l, Pn, e = [String, RegExp, Array], e = {
        KeepAlive: {
            name: "keep-alive",
            abstract: !0,
            props: {
                include: e,
                exclude: e,
                max: [String, Number]
            },
            methods: {
                cacheVNode: function() {
                    var t, e, n = this.cache, r = this.keys, o = this.vnodeToCache, a = this.keyToCache;
                    o && (t = o.tag,
                    e = o.componentInstance,
                    o = o.componentOptions,
                    n[a] = {
                        name: Tn(o),
                        tag: t,
                        componentInstance: e
                    },
                    r.push(a),
                    this.max && r.length > parseInt(this.max) && En(n, r[0], r, this._vnode),
                    this.vnodeToCache = null)
                }
            },
            created: function() {
                this.cache = Object.create(null),
                this.keys = []
            },
            destroyed: function() {
                for (var t in this.cache)
                    En(this.cache, t, this.keys)
            },
            mounted: function() {
                var t = this;
                this.cacheVNode(),
                this.$watch("include", function(e) {
                    On(t, function(t) {
                        return jn(e, t)
                    })
                }),
                this.$watch("exclude", function(e) {
                    On(t, function(t) {
                        return !jn(e, t)
                    })
                })
            },
            updated: function() {
                this.cacheVNode()
            },
            render: function() {
                var t = this.$slots.default
                  , e = Ke(t)
                  , n = e && e.componentOptions;
                if (n) {
                    var r = Tn(n)
                      , o = this.include
                      , a = this.exclude;
                    if (o && (!r || !jn(o, r)) || a && r && jn(a, r))
                        return e;
                    o = this.cache,
                    a = this.keys,
                    r = null == e.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : e.key;
                    o[r] ? (e.componentInstance = o[r].componentInstance,
                    F(a, r),
                    a.push(r)) : (this.vnodeToCache = e,
                    this.keyToCache = r),
                    e.data.keepAlive = !0
                }
                return e || t && t[0]
            }
        }
    }, r = (l = s,
    Object.defineProperty(l, "config", {
        get: function() {
            return g
        }
    }),
    l.util = {
        warn: r,
        extend: k,
        mergeOptions: Vt,
        defineReactive: Dt
    },
    l.set = $t,
    l.delete = Mt,
    l.nextTick = ie,
    l.observable = function(t) {
        return Lt(t),
        t
    }
    ,
    l.options = Object.create(null),
    rt.forEach(function(t) {
        l.options[t + "s"] = Object.create(null)
    }),
    k((l.options._base = l).options.components, e),
    l.use = function(t) {
        var e, n = this._installedPlugins || (this._installedPlugins = []);
        return -1 < n.indexOf(t) || ((e = A(arguments, 1)).unshift(this),
        "function" == typeof t.install ? t.install.apply(t, e) : "function" == typeof t && t.apply(null, e),
        n.push(t)),
        this
    }
    ,
    l.mixin = function(t) {
        return this.options = Vt(this.options, t),
        this
    }
    ,
    Cn(l),
    Pn = l,
    rt.forEach(function(n) {
        Pn[n] = function(t, e) {
            return e ? ("component" === n && I(e) && (e.name = e.name || t,
            e = this.options._base.extend(e)),
            this.options[n + "s"][t] = e = "directive" === n && "function" == typeof e ? {
                bind: e,
                update: e
            } : e) : this.options[n + "s"][t]
        }
    }),
    Object.defineProperty(s.prototype, "$isServer", {
        get: ht
    }),
    Object.defineProperty(s.prototype, "$ssrContext", {
        get: function() {
            return this.$vnode && this.$vnode.ssrContext
        }
    }),
    Object.defineProperty(s, "FunctionalRenderContext", {
        value: Me
    }),
    s.version = "2.6.14",
    o("style,class")), In = o("input,textarea,option,select,progress"), Ln = o("contenteditable,draggable,spellcheck"), Dn = o("events,caret,typing,plaintext-only"), $n = function(t, e) {
        return zn(e) || "false" === e ? "false" : "contenteditable" === t && Dn(e) ? e : "true"
    }, Mn = o("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"), Rn = "http://www.w3.org/1999/xlink", Nn = function(t) {
        return ":" === t.charAt(5) && "xlink" === t.slice(0, 5)
    }, Hn = function(t) {
        return Nn(t) ? t.slice(6, t.length) : ""
    }, zn = function(t) {
        return null == t || !1 === t
    };
    function Bn(t, e) {
        return {
            staticClass: Vn(t.staticClass, e.staticClass),
            class: z(t.class) ? [t.class, e.class] : e.class
        }
    }
    function Vn(t, e) {
        return t ? e ? t + " " + e : t : e || ""
    }
    function Fn(t) {
        if (Array.isArray(t)) {
            for (var e, n = t, r = "", o = 0, a = n.length; o < a; o++)
                z(e = Fn(n[o])) && "" !== e && (r && (r += " "),
                r += e);
            return r
        }
        if (V(t)) {
            var i, s = t, l = "";
            for (i in s)
                s[i] && (l && (l += " "),
                l += i);
            return l
        }
        return "string" == typeof t ? t : ""
    }
    function qn(t) {
        return Zn(t) || Wn(t)
    }
    var Un = {
        svg: "http://www.w3.org/2000/svg",
        math: "http://www.w3.org/1998/Math/MathML"
    }
      , Zn = o("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot")
      , Wn = o("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0);
    function Kn(t) {
        return Wn(t) ? "svg" : "math" === t ? "math" : void 0
    }
    var Jn = Object.create(null)
      , Xn = o("text,number,password,search,email,tel,url");
    function Gn(t) {
        return "string" == typeof t ? document.querySelector(t) || document.createElement("div") : t
    }
    var e = Object.freeze({
        createElement: function(t, e) {
            var n = document.createElement(t);
            return "select" !== t || e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute("multiple", "multiple"),
            n
        },
        createElementNS: function(t, e) {
            return document.createElementNS(Un[t], e)
        },
        createTextNode: function(t) {
            return document.createTextNode(t)
        },
        createComment: function(t) {
            return document.createComment(t)
        },
        insertBefore: function(t, e, n) {
            t.insertBefore(e, n)
        },
        removeChild: function(t, e) {
            t.removeChild(e)
        },
        appendChild: function(t, e) {
            t.appendChild(e)
        },
        parentNode: function(t) {
            return t.parentNode
        },
        nextSibling: function(t) {
            return t.nextSibling
        },
        tagName: function(t) {
            return t.tagName
        },
        setTextContent: function(t, e) {
            t.textContent = e
        },
        setStyleScope: function(t, e) {
            t.setAttribute(e, "")
        }
    })
      , Yn = {
        create: function(t, e) {
            Qn(e)
        },
        update: function(t, e) {
            t.data.ref !== e.data.ref && (Qn(t, !0),
            Qn(e))
        },
        destroy: function(t) {
            Qn(t, !0)
        }
    };
    function Qn(t, e) {
        var n, r, o = t.data.ref;
        z(o) && (r = t.context,
        n = t.componentInstance || t.elm,
        r = r.$refs,
        e ? Array.isArray(r[o]) ? F(r[o], n) : r[o] === n && (r[o] = void 0) : t.data.refInFor ? Array.isArray(r[o]) ? r[o].indexOf(n) < 0 && r[o].push(n) : r[o] = [n] : r[o] = n)
    }
    var tr = new Z("",{},[])
      , er = ["create", "activate", "update", "remove", "destroy"];
    function nr(t, e) {
        return t.key === e.key && t.asyncFactory === e.asyncFactory && (t.tag === e.tag && t.isComment === e.isComment && z(t.data) === z(e.data) && ("input" !== t.tag || (n = z(r = t.data) && z(r = r.attrs) && r.type) === (r = z(r = e.data) && z(r = r.attrs) && r.type) || Xn(n) && Xn(r)) || B(t.isAsyncPlaceholder) && H(e.asyncFactory.error));
        var n, r
    }
    var rr = {
        create: or,
        update: or,
        destroy: function(t) {
            or(t, tr)
        }
    };
    function or(t, e) {
        if (t.data.directives || e.data.directives) {
            var n, r, o, a = t, i = e, t = a === tr, s = i === tr, l = ir(a.data.directives, a.context), c = ir(i.data.directives, i.context), d = [], u = [];
            for (n in c)
                r = l[n],
                o = c[n],
                r ? (o.oldValue = r.value,
                o.oldArg = r.arg,
                sr(o, "update", i, a),
                o.def && o.def.componentUpdated && u.push(o)) : (sr(o, "bind", i, a),
                o.def && o.def.inserted && d.push(o));
            if (d.length && (e = function() {
                for (var t = 0; t < d.length; t++)
                    sr(d[t], "inserted", i, a)
            }
            ,
            t ? pe(i, "insert", e) : e()),
            u.length && pe(i, "postpatch", function() {
                for (var t = 0; t < u.length; t++)
                    sr(u[t], "componentUpdated", i, a)
            }),
            !t)
                for (n in l)
                    c[n] || sr(l[n], "unbind", a, a, s)
        }
    }
    var ar = Object.create(null);
    function ir(t, e) {
        var n, r, o, a = Object.create(null);
        if (t)
            for (n = 0; n < t.length; n++)
                (r = t[n]).modifiers || (r.modifiers = ar),
                (a[(o = r).rawName || o.name + "." + Object.keys(o.modifiers || {}).join(".")] = r).def = Ft(e.$options, "directives", r.name);
        return a
    }
    function sr(t, e, n, r, o) {
        var a = t.def && t.def[e];
        if (a)
            try {
                a(n.elm, t, n, r, o)
            } catch (r) {
                Jt(r, n.context, "directive " + t.name + " " + e + " hook")
            }
    }
    Yn = [Yn, rr];
    function lr(t, e) {
        var n = e.componentOptions;
        if (!(z(n) && !1 === n.Ctor.options.inheritAttrs || H(t.data.attrs) && H(e.data.attrs))) {
            var r, o, a = e.elm, i = t.data.attrs || {}, s = e.data.attrs || {};
            for (r in s = z(s.__ob__) ? e.data.attrs = k({}, s) : s)
                o = s[r],
                i[r] !== o && cr(a, r, o, e.data.pre);
            for (r in (U || ut) && s.value !== i.value && cr(a, "value", s.value),
            i)
                H(s[r]) && (Nn(r) ? a.removeAttributeNS(Rn, Hn(r)) : Ln(r) || a.removeAttribute(r))
        }
    }
    function cr(t, e, n, r) {
        r || -1 < t.tagName.indexOf("-") ? dr(t, e, n) : Mn(e) ? zn(n) ? t.removeAttribute(e) : (n = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e,
        t.setAttribute(e, n)) : Ln(e) ? t.setAttribute(e, $n(e, n)) : Nn(e) ? zn(n) ? t.removeAttributeNS(Rn, Hn(e)) : t.setAttributeNS(Rn, e, n) : dr(t, e, n)
    }
    function dr(n, t, e) {
        zn(e) ? n.removeAttribute(t) : (!U || dt || "TEXTAREA" !== n.tagName || "placeholder" !== t || "" === e || n.__ieph || (n.addEventListener("input", function t(e) {
            e.stopImmediatePropagation(),
            n.removeEventListener("input", t)
        }),
        n.__ieph = !0),
        n.setAttribute(t, e))
    }
    rr = {
        create: lr,
        update: lr
    };
    function ur(t, e) {
        var n = e.elm
          , r = e.data
          , t = t.data;
        H(r.staticClass) && H(r.class) && (H(t) || H(t.staticClass) && H(t.class)) || (r = function(t) {
            for (var e, n = t.data, r = t, o = t; z(o.componentInstance); )
                (o = o.componentInstance._vnode) && o.data && (n = Bn(o.data, n));
            for (; z(r = r.parent); )
                r && r.data && (n = Bn(n, r.data));
            return t = n.staticClass,
            e = n.class,
            z(t) || z(e) ? Vn(t, Fn(e)) : ""
        }(e),
        (r = z(t = n._transitionClasses) ? Vn(r, Fn(t)) : r) !== n._prevClass && (n.setAttribute("class", r),
        n._prevClass = r))
    }
    var pr, fr, mr, hr, gr, vr, _r = {
        create: ur,
        update: ur
    }, yr = /[\w).+\-_$\]]/;
    function br(t) {
        for (var e, n, r, o, a, i, s, l, c = !1, d = !1, u = !1, p = !1, f = 0, m = 0, h = 0, g = 0, v = 0; v < t.length; v++)
            if (n = e,
            e = t.charCodeAt(v),
            c)
                39 === e && 92 !== n && (c = !1);
            else if (d)
                34 === e && 92 !== n && (d = !1);
            else if (u)
                96 === e && 92 !== n && (u = !1);
            else if (p)
                47 === e && 92 !== n && (p = !1);
            else if (124 !== e || 124 === t.charCodeAt(v + 1) || 124 === t.charCodeAt(v - 1) || f || m || h) {
                switch (e) {
                case 34:
                    d = !0;
                    break;
                case 39:
                    c = !0;
                    break;
                case 96:
                    u = !0;
                    break;
                case 40:
                    h++;
                    break;
                case 41:
                    h--;
                    break;
                case 91:
                    m++;
                    break;
                case 93:
                    m--;
                    break;
                case 123:
                    f++;
                    break;
                case 125:
                    f--
                }
                if (47 === e) {
                    for (var _ = v - 1, y = void 0; 0 <= _ && " " === (y = t.charAt(_)); _--)
                        ;
                    y && yr.test(y) || (p = !0)
                }
            } else
                void 0 === r ? (g = v + 1,
                r = t.slice(0, v).trim()) : b();
        function b() {
            (o = o || []).push(t.slice(g, v).trim()),
            g = v + 1
        }
        if (void 0 === r ? r = t.slice(0, v).trim() : 0 !== g && b(),
        o)
            for (v = 0; v < o.length; v++)
                a = r,
                i = o[v],
                l = s = void 0,
                r = (l = i.indexOf("(")) < 0 ? '_f("' + i + '")(' + a + ")" : (s = i.slice(0, l),
                i = i.slice(l + 1),
                '_f("' + s + '")(' + a + (")" !== i ? "," + i : i));
        return r
    }
    function xr(t, e) {
        console.error("[Vue compiler]: " + t)
    }
    function kr(t, e) {
        return t ? t.map(function(t) {
            return t[e]
        }).filter(function(t) {
            return t
        }) : []
    }
    function wr(t, e, n, r, o) {
        (t.props || (t.props = [])).push(Or({
            name: e,
            value: n,
            dynamic: o
        }, r)),
        t.plain = !1
    }
    function Sr(t, e, n, r, o) {
        (o ? t.dynamicAttrs || (t.dynamicAttrs = []) : t.attrs || (t.attrs = [])).push(Or({
            name: e,
            value: n,
            dynamic: o
        }, r)),
        t.plain = !1
    }
    function Cr(t, e, n, r) {
        t.attrsMap[e] = n,
        t.attrsList.push(Or({
            name: e,
            value: n
        }, r))
    }
    function Tr(t, e, n) {
        return n ? "_p(" + e + ',"' + t + '")' : t + e
    }
    function O(t, e, n, r, o, a, i, s) {
        (r = r || N).right ? s ? e = "(" + e + ")==='click'?'contextmenu':(" + e + ")" : "click" === e && (e = "contextmenu",
        delete r.right) : r.middle && (s ? e = "(" + e + ")==='click'?'mouseup':(" + e + ")" : "click" === e && (e = "mouseup")),
        r.capture && (delete r.capture,
        e = Tr("!", e, s)),
        r.once && (delete r.once,
        e = Tr("~", e, s)),
        r.passive && (delete r.passive,
        e = Tr("&", e, s)),
        l = r.native ? (delete r.native,
        t.nativeEvents || (t.nativeEvents = {})) : t.events || (t.events = {});
        var l, n = Or({
            value: n.trim(),
            dynamic: s
        }, i), s = (r !== N && (n.modifiers = r),
        l[e]);
        Array.isArray(s) ? o ? s.unshift(n) : s.push(n) : l[e] = s ? o ? [n, s] : [s, n] : n,
        t.plain = !1
    }
    function E(t, e, n) {
        var r = W(t, ":" + e) || W(t, "v-bind:" + e);
        if (null != r)
            return br(r);
        if (!1 !== n) {
            r = W(t, e);
            if (null != r)
                return JSON.stringify(r)
        }
    }
    function W(t, e, n) {
        var r;
        if (null != (r = t.attrsMap[e]))
            for (var o = t.attrsList, a = 0, i = o.length; a < i; a++)
                if (o[a].name === e) {
                    o.splice(a, 1);
                    break
                }
        return n && delete t.attrsMap[e],
        r
    }
    function jr(t, e) {
        for (var n = t.attrsList, r = 0, o = n.length; r < o; r++) {
            var a = n[r];
            if (e.test(a.name))
                return n.splice(r, 1),
                a
        }
    }
    function Or(t, e) {
        return e && (null != e.start && (t.start = e.start),
        null != e.end) && (t.end = e.end),
        t
    }
    function Er(t, e, n) {
        var n = n || {}
          , r = n.number
          , o = "$$v"
          , n = (n.trim && (o = "(typeof $$v === 'string'? $$v.trim(): $$v)"),
        Ar(e, o = r ? "_n(" + o + ")" : o));
        t.model = {
            value: "(" + e + ")",
            expression: JSON.stringify(e),
            callback: "function ($$v) {" + n + "}"
        }
    }
    function Ar(t, e) {
        var n = function(t) {
            if (t = t.trim(),
            pr = t.length,
            t.indexOf("[") < 0 || t.lastIndexOf("]") < pr - 1)
                return -1 < (hr = t.lastIndexOf(".")) ? {
                    exp: t.slice(0, hr),
                    key: '"' + t.slice(hr + 1) + '"'
                } : {
                    exp: t,
                    key: null
                };
            for (fr = t,
            hr = gr = vr = 0; !Ir(); )
                if (Lr(mr = Pr()))
                    Dr(mr);
                else if (91 === mr) {
                    e = void 0;
                    n = void 0;
                    var e = mr;
                    var n = 1;
                    for (gr = hr; !Ir(); )
                        if (Lr(e = Pr()))
                            Dr(e);
                        else if (91 === e && n++,
                        93 === e && n--,
                        0 === n) {
                            vr = hr;
                            break
                        }
                }
            return {
                exp: t.slice(0, gr),
                key: t.slice(gr + 1, vr)
            }
        }(t);
        return null === n.key ? t + "=" + e : "$set(" + n.exp + ", " + n.key + ", " + e + ")"
    }
    function Pr() {
        return fr.charCodeAt(++hr)
    }
    function Ir() {
        return pr <= hr
    }
    function Lr(t) {
        return 34 === t || 39 === t
    }
    function Dr(t) {
        for (var e = t; !Ir() && (t = Pr()) !== e; )
            ;
    }
    var $r, Mr = "__r";
    function Rr(e, n, r) {
        var o = $r;
        return function t() {
            null !== n.apply(null, arguments) && zr(e, t, r, o)
        }
    }
    var Nr = i && !(n && Number(n[1]) <= 53);
    function Hr(t, e, n, r) {
        var o, a;
        Nr && (o = dn,
        e = (a = e)._wrapper = function(t) {
            if (t.target === t.currentTarget || t.timeStamp >= o || t.timeStamp <= 0 || t.target.ownerDocument !== document)
                return a.apply(this, arguments)
        }
        ),
        $r.addEventListener(t, e, mt ? {
            capture: n,
            passive: r
        } : n)
    }
    function zr(t, e, n, r) {
        (r || $r).removeEventListener(t, e._wrapper || e, n)
    }
    function Br(t, e) {
        var n, r, o;
        H(t.data.on) && H(e.data.on) || (n = e.data.on || {},
        t = t.data.on || {},
        $r = e.elm,
        z((r = n).__r) && (r[o = U ? "change" : "input"] = [].concat(r.__r, r[o] || []),
        delete r.__r),
        z(r.__c) && (r.change = [].concat(r.__c, r.change || []),
        delete r.__c),
        ue(n, t, Hr, zr, Rr, e.context),
        $r = void 0)
    }
    var Vr, i = {
        create: Br,
        update: Br
    };
    function Fr(t, e) {
        if (!H(t.data.domProps) || !H(e.data.domProps)) {
            var n, r, o = e.elm, a = t.data.domProps || {}, i = e.data.domProps || {};
            for (n in z(i.__ob__) && (i = e.data.domProps = k({}, i)),
            a)
                n in i || (o[n] = "");
            for (n in i) {
                if (r = i[n],
                "textContent" === n || "innerHTML" === n) {
                    if (e.children && (e.children.length = 0),
                    r === a[n])
                        continue;
                    1 === o.childNodes.length && o.removeChild(o.childNodes[0])
                }
                if ("value" === n && "PROGRESS" !== o.tagName) {
                    var s = H(o._value = r) ? "" : String(r);
                    d = s,
                    (c = o).composing || "OPTION" !== c.tagName && !function(t, e) {
                        var n = !0;
                        try {
                            n = document.activeElement !== t
                        } catch (t) {}
                        return n && t.value !== e
                    }(c, d) && !function(t) {
                        var e = c.value
                          , n = c._vModifiers;
                        if (z(n)) {
                            if (n.number)
                                return J(e) !== J(t);
                            if (n.trim)
                                return e.trim() !== t.trim()
                        }
                        return e !== t
                    }(d) || (o.value = s)
                } else if ("innerHTML" === n && Wn(o.tagName) && H(o.innerHTML)) {
                    (Vr = Vr || document.createElement("div")).innerHTML = "<svg>" + r + "</svg>";
                    for (var l = Vr.firstChild; o.firstChild; )
                        o.removeChild(o.firstChild);
                    for (; l.firstChild; )
                        o.appendChild(l.firstChild)
                } else if (r !== a[n])
                    try {
                        o[n] = r
                    } catch (t) {}
            }
        }
        var c, d
    }
    var n = {
        create: Fr,
        update: Fr
    }
      , qr = t(function(t) {
        var e = {}
          , n = /:(.+)/;
        return t.split(/;(?![^(]*\))/g).forEach(function(t) {
            t && 1 < (t = t.split(n)).length && (e[t[0].trim()] = t[1].trim())
        }),
        e
    });
    function Ur(t) {
        var e = Zr(t.style);
        return t.staticStyle ? k(t.staticStyle, e) : e
    }
    function Zr(t) {
        return Array.isArray(t) ? P(t) : "string" == typeof t ? qr(t) : t
    }
    function Wr(t, e, n) {
        if (Jr.test(e))
            t.style.setProperty(e, n);
        else if (Xr.test(n))
            t.style.setProperty(X(e), n.replace(Xr, ""), "important");
        else {
            var r = Yr(e);
            if (Array.isArray(n))
                for (var o = 0, a = n.length; o < a; o++)
                    t.style[r] = n[o];
            else
                t.style[r] = n
        }
    }
    var Kr, Jr = /^--/, Xr = /\s*!important$/, Gr = ["Webkit", "Moz", "ms"], Yr = t(function(t) {
        if (Kr = Kr || document.createElement("div").style,
        "filter" !== (t = j(t)) && t in Kr)
            return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < Gr.length; n++) {
            var r = Gr[n] + e;
            if (r in Kr)
                return r
        }
    });
    function Qr(t, e) {
        var n = e.data
          , t = t.data;
        if (!(H(n.staticStyle) && H(n.style) && H(t.staticStyle) && H(t.style))) {
            var r, o, a = e.elm, n = t.staticStyle, t = t.normalizedStyle || t.style || {}, i = n || t, n = Zr(e.data.style) || {}, s = (e.data.normalizedStyle = z(n.__ob__) ? k({}, n) : n,
            function(t) {
                for (var e, n = {}, r = t; r.componentInstance; )
                    (r = r.componentInstance._vnode) && r.data && (e = Ur(r.data)) && k(n, e);
                (e = Ur(t.data)) && k(n, e);
                for (var o = t; o = o.parent; )
                    o.data && (e = Ur(o.data)) && k(n, e);
                return n
            }(e));
            for (o in i)
                H(s[o]) && Wr(a, o, "");
            for (o in s)
                (r = s[o]) !== i[o] && Wr(a, o, null == r ? "" : r)
        }
    }
    var to = {
        create: Qr,
        update: Qr
    }
      , eo = /\s+/;
    function no(e, t) {
        var n;
        (t = t && t.trim()) && (e.classList ? -1 < t.indexOf(" ") ? t.split(eo).forEach(function(t) {
            return e.classList.add(t)
        }) : e.classList.add(t) : (n = " " + (e.getAttribute("class") || "") + " ").indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim()))
    }
    function ro(e, t) {
        if (t = t && t.trim())
            if (e.classList)
                -1 < t.indexOf(" ") ? t.split(eo).forEach(function(t) {
                    return e.classList.remove(t)
                }) : e.classList.remove(t),
                e.classList.length || e.removeAttribute("class");
            else {
                for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; 0 <= n.indexOf(r); )
                    n = n.replace(r, " ");
                (n = n.trim()) ? e.setAttribute("class", n) : e.removeAttribute("class")
            }
    }
    function oo(t) {
        var e;
        if (t)
            return "object" == _typeof(t) ? (!(e = {}) !== t.css && k(e, ao(t.name || "v")),
            k(e, t),
            e) : "string" == typeof t ? ao(t) : void 0
    }
    var ao = t(function(t) {
        return {
            enterClass: t + "-enter",
            enterToClass: t + "-enter-to",
            enterActiveClass: t + "-enter-active",
            leaveClass: t + "-leave",
            leaveToClass: t + "-leave-to",
            leaveActiveClass: t + "-leave-active"
        }
    })
      , io = a && !dt
      , so = "transition"
      , lo = "animation"
      , co = "transition"
      , uo = "transitionend"
      , po = "animation"
      , fo = "animationend"
      , mo = (io && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (co = "WebkitTransition",
    uo = "webkitTransitionEnd"),
    void 0 === window.onanimationend) && void 0 !== window.onwebkitanimationend && (po = "WebkitAnimation",
    fo = "webkitAnimationEnd"),
    a ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(t) {
        return t()
    }
    );
    function ho(t) {
        mo(function() {
            mo(t)
        })
    }
    function go(t, e) {
        var n = t._transitionClasses || (t._transitionClasses = []);
        n.indexOf(e) < 0 && (n.push(e),
        no(t, e))
    }
    function R(t, e) {
        t._transitionClasses && F(t._transitionClasses, e),
        ro(t, e)
    }
    function vo(e, t, n) {
        var t = yo(e, t)
          , r = t.type
          , o = t.timeout
          , a = t.propCount;
        if (!r)
            return n();
        function i(t) {
            t.target === e && ++l >= a && c()
        }
        var s = r === so ? uo : fo
          , l = 0
          , c = function() {
            e.removeEventListener(s, i),
            n()
        };
        setTimeout(function() {
            l < a && c()
        }, o + 1),
        e.addEventListener(s, i)
    }
    var _o = /\b(transform|all)(,|$)/;
    function yo(t, e) {
        var n, t = window.getComputedStyle(t), r = (t[co + "Delay"] || "").split(", "), o = (t[co + "Duration"] || "").split(", "), r = bo(r, o), a = (t[po + "Delay"] || "").split(", "), i = (t[po + "Duration"] || "").split(", "), a = bo(a, i), s = 0, l = 0;
        return e === so ? 0 < r && (n = so,
        s = r,
        l = o.length) : e === lo ? 0 < a && (n = lo,
        s = a,
        l = i.length) : l = (n = 0 < (s = Math.max(r, a)) ? a < r ? so : lo : null) ? (n === so ? o : i).length : 0,
        {
            type: n,
            timeout: s,
            propCount: l,
            hasTransform: n === so && _o.test(t[co + "Property"])
        }
    }
    function bo(n, t) {
        for (; n.length < t.length; )
            n = n.concat(n);
        return Math.max.apply(null, t.map(function(t, e) {
            return xo(t) + xo(n[e])
        }))
    }
    function xo(t) {
        return 1e3 * Number(t.slice(0, -1).replace(",", "."))
    }
    function ko(e, t) {
        var n = e.elm
          , r = (z(n._leaveCb) && (n._leaveCb.cancelled = !0,
        n._leaveCb()),
        oo(e.data.transition));
        if (!H(r) && !z(n._enterCb) && 1 === n.nodeType) {
            for (var o = r.css, a = r.type, i = r.enterClass, s = r.enterToClass, l = r.enterActiveClass, c = r.appearClass, d = r.appearToClass, u = r.appearActiveClass, p = r.beforeEnter, f = r.enter, m = r.afterEnter, h = r.enterCancelled, g = r.beforeAppear, v = r.appear, _ = r.afterAppear, y = r.appearCancelled, r = r.duration, b = Qe, x = Qe.$vnode; x && x.parent; )
                b = x.context,
                x = x.parent;
            var k, w, S, C, T, j, O, E, A, P, I = !b._isMounted || !e.isRootInsert;
            I && !v && "" !== v || (k = I && c ? c : i,
            w = I && u ? u : l,
            S = I && d ? d : s,
            c = I && g || p,
            C = I && "function" == typeof v ? v : f,
            T = I && _ || m,
            j = I && y || h,
            O = J(V(r) ? r.enter : r),
            E = !1 !== o && !dt,
            A = Co(C),
            P = n._enterCb = et(function() {
                E && (R(n, S),
                R(n, w)),
                P.cancelled ? (E && R(n, k),
                j && j(n)) : T && T(n),
                n._enterCb = null
            }),
            e.data.show || pe(e, "insert", function() {
                var t = n.parentNode
                  , t = t && t._pending && t._pending[e.key];
                t && t.tag === e.tag && t.elm._leaveCb && t.elm._leaveCb(),
                C && C(n, P)
            }),
            c && c(n),
            E && (go(n, k),
            go(n, w),
            ho(function() {
                R(n, k),
                P.cancelled || (go(n, S),
                A) || (So(O) ? setTimeout(P, O) : vo(n, a, P))
            })),
            e.data.show && (t && t(),
            C) && C(n, P),
            E) || A || P()
        }
    }
    function wo(t, e) {
        var n, r, o, a, i, s, l, c, d, u, p, f, m, h, g = t.elm, v = (z(g._enterCb) && (g._enterCb.cancelled = !0,
        g._enterCb()),
        oo(t.data.transition));
        if (H(v) || 1 !== g.nodeType)
            return e();
        function _() {
            h.cancelled || (!t.data.show && g.parentNode && ((g.parentNode._pending || (g.parentNode._pending = {}))[t.key] = t),
            s && s(g),
            p && (go(g, o),
            go(g, i),
            ho(function() {
                R(g, o),
                h.cancelled || (go(g, a),
                f) || (So(m) ? setTimeout(h, m) : vo(g, r, h))
            })),
            l && l(g, h),
            p) || f || h()
        }
        z(g._leaveCb) || (n = v.css,
        r = v.type,
        o = v.leaveClass,
        a = v.leaveToClass,
        i = v.leaveActiveClass,
        s = v.beforeLeave,
        l = v.leave,
        c = v.afterLeave,
        d = v.leaveCancelled,
        u = v.delayLeave,
        v = v.duration,
        p = !1 !== n && !dt,
        f = Co(l),
        m = J(V(v) ? v.leave : v),
        h = g._leaveCb = et(function() {
            g.parentNode && g.parentNode._pending && (g.parentNode._pending[t.key] = null),
            p && (R(g, a),
            R(g, i)),
            h.cancelled ? (p && R(g, o),
            d && d(g)) : (e(),
            c && c(g)),
            g._leaveCb = null
        }),
        u ? u(_) : _())
    }
    function So(t) {
        return "number" == typeof t && !isNaN(t)
    }
    function Co(t) {
        var e;
        return !H(t) && (z(e = t.fns) ? Co(Array.isArray(e) ? e[0] : e) : 1 < (t._length || t.length))
    }
    function To(t, e) {
        !0 !== e.data.show && ko(e)
    }
    var e = function(t) {
        for (var e, C = {}, n = t.modules, T = t.nodeOps, r = 0; r < er.length; ++r)
            for (C[er[r]] = [],
            e = 0; e < n.length; ++e)
                z(n[e][er[r]]) && C[er[r]].push(n[e][er[r]]);
        function a(t) {
            var e = T.parentNode(t);
            z(e) && T.removeChild(e, t)
        }
        function j(t, e, n, r, o, a, i) {
            (t = z(t.elm) && z(a) ? a[i] = jt(t) : t).isRootInsert = !o,
            function(t, e, n, r) {
                var o = t.data;
                if (z(o)) {
                    var a = z(t.componentInstance) && o.keepAlive;
                    if (z(o = o.hook) && z(o = o.init) && o(t, !1),
                    z(t.componentInstance)) {
                        if (f(t, e),
                        c(n, t.elm, r),
                        B(a)) {
                            for (var i, o = t, s = e, a = n, t = r, l = o; l.componentInstance; )
                                if (z(i = (l = l.componentInstance._vnode).data) && z(i = i.transition)) {
                                    for (i = 0; i < C.activate.length; ++i)
                                        C.activate[i](tr, l);
                                    s.push(l);
                                    break
                                }
                            c(a, o.elm, t)
                        }
                        return 1
                    }
                }
            }(t, e, n, r) || (a = t.data,
            i = t.children,
            z(o = t.tag) ? (t.elm = t.ns ? T.createElementNS(t.ns, o) : T.createElement(o, t),
            s(t),
            m(t, i, e),
            z(a) && h(t, e)) : B(t.isComment) ? t.elm = T.createComment(t.text) : t.elm = T.createTextNode(t.text),
            c(n, t.elm, r))
        }
        function f(t, e) {
            z(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert),
            t.data.pendingInsert = null),
            t.elm = t.componentInstance.$el,
            O(t) ? (h(t, e),
            s(t)) : (Qn(t),
            e.push(t))
        }
        function c(t, e, n) {
            z(t) && (z(n) ? T.parentNode(n) === t && T.insertBefore(t, e, n) : T.appendChild(t, e))
        }
        function m(t, e, n) {
            if (Array.isArray(e))
                for (var r = 0; r < e.length; ++r)
                    j(e[r], n, t.elm, null, !0, e, r);
            else
                y(t.text) && T.appendChild(t.elm, T.createTextNode(String(t.text)))
        }
        function O(t) {
            for (; t.componentInstance; )
                t = t.componentInstance._vnode;
            return z(t.tag)
        }
        function h(t, e) {
            for (var n = 0; n < C.create.length; ++n)
                C.create[n](tr, t);
            z(r = t.data.hook) && (z(r.create) && r.create(tr, t),
            z(r.insert)) && e.push(t)
        }
        function s(t) {
            var e;
            if (z(e = t.fnScopeId))
                T.setStyleScope(t.elm, e);
            else
                for (var n = t; n; )
                    z(e = n.context) && z(e = e.$options._scopeId) && T.setStyleScope(t.elm, e),
                    n = n.parent;
            z(e = Qe) && e !== t.context && e !== t.fnContext && z(e = e.$options._scopeId) && T.setStyleScope(t.elm, e)
        }
        function E(t, e, n, r, o, a) {
            for (; r <= o; ++r)
                j(n[r], a, t, e, !1, n, r)
        }
        function g(t) {
            var e, n, r = t.data;
            if (z(r))
                for (z(e = r.hook) && z(e = e.destroy) && e(t),
                e = 0; e < C.destroy.length; ++e)
                    C.destroy[e](t);
            if (z(e = t.children))
                for (n = 0; n < t.children.length; ++n)
                    g(t.children[n])
        }
        function A(t, e, n) {
            for (; e <= n; ++e) {
                var r = t[e];
                z(r) && (z(r.tag) ? (function t(e, n) {
                    if (z(n) || z(e.data)) {
                        var r, o = C.remove.length + 1;
                        for (z(n) ? n.listeners += o : n = function(t, e) {
                            function n() {
                                0 == --n.listeners && a(t)
                            }
                            return n.listeners = e,
                            n
                        }(e.elm, o),
                        z(r = e.componentInstance) && z(r = r._vnode) && z(r.data) && t(r, n),
                        r = 0; r < C.remove.length; ++r)
                            C.remove[r](e, n);
                        z(r = e.data.hook) && z(r = r.remove) ? r(e, n) : n()
                    } else
                        a(e.elm)
                }(r),
                g(r)) : a(r.elm))
            }
        }
        function P(t, e, n, r, o, a) {
            if (t !== e) {
                r = (e = z(e.elm) && z(r) ? r[o] = jt(e) : e).elm = t.elm;
                if (B(t.isAsyncPlaceholder))
                    z(e.asyncFactory.resolved) ? I(t.elm, e, n) : e.isAsyncPlaceholder = !0;
                else if (B(e.isStatic) && B(t.isStatic) && e.key === t.key && (B(e.isCloned) || B(e.isOnce)))
                    e.componentInstance = t.componentInstance;
                else {
                    var i, o = e.data, s = (z(o) && z(i = o.hook) && z(i = i.prepatch) && i(t, e),
                    t.children), l = e.children;
                    if (z(o) && O(e)) {
                        for (i = 0; i < C.update.length; ++i)
                            C.update[i](t, e);
                        z(i = o.hook) && z(i = i.update) && i(t, e)
                    }
                    if (H(e.text))
                        if (z(s) && z(l)) {
                            if (s !== l) {
                                var c = r;
                                var d = s;
                                var u = l;
                                var p = n;
                                for (var f, m, h, g = 0, v = 0, _ = d.length - 1, y = d[0], b = d[_], x = u.length - 1, k = u[0], w = u[x], S = !a; g <= _ && v <= x; )
                                    H(y) ? y = d[++g] : H(b) ? b = d[--_] : nr(y, k) ? (P(y, k, p, u, v),
                                    y = d[++g],
                                    k = u[++v]) : nr(b, w) ? (P(b, w, p, u, x),
                                    b = d[--_],
                                    w = u[--x]) : nr(y, w) ? (P(y, w, p, u, x),
                                    S && T.insertBefore(c, y.elm, T.nextSibling(b.elm)),
                                    y = d[++g],
                                    w = u[--x]) : k = (nr(b, k) ? (P(b, k, p, u, v),
                                    S && T.insertBefore(c, b.elm, y.elm),
                                    b = d[--_]) : (H(f) && (f = function(t, e, n) {
                                        for (var r, o = {}, a = e; a <= n; ++a)
                                            z(r = t[a].key) && (o[r] = a);
                                        return o
                                    }(d, g, _)),
                                    !H(m = z(k.key) ? f[k.key] : function(t, e, n, r) {
                                        for (var o = n; o < r; o++) {
                                            var a = e[o];
                                            if (z(a) && nr(t, a))
                                                return o
                                        }
                                    }(k, d, g, _)) && nr(h = d[m], k) ? (P(h, k, p, u, v),
                                    d[m] = void 0,
                                    S && T.insertBefore(c, h.elm, y.elm)) : j(k, p, c, y.elm, !1, u, v)),
                                    u[++v]);
                                _ < g ? E(c, H(u[x + 1]) ? null : u[x + 1].elm, u, v, x, p) : x < v && A(d, g, _)
                            }
                        } else
                            z(l) ? (z(t.text) && T.setTextContent(r, ""),
                            E(r, null, l, 0, l.length - 1, n)) : z(s) ? A(s, 0, s.length - 1) : z(t.text) && T.setTextContent(r, "");
                    else
                        t.text !== e.text && T.setTextContent(r, e.text);
                    z(o) && z(i = o.hook) && z(i = i.postpatch) && i(t, e)
                }
            }
        }
        function v(t, e, n) {
            if (B(n) && z(t.parent))
                t.parent.data.pendingInsert = e;
            else
                for (var r = 0; r < e.length; ++r)
                    e[r].data.hook.insert(e[r])
        }
        var _ = o("attrs,class,staticClass,staticStyle,key");
        function I(t, e, n, r) {
            var o, a = e.tag, i = e.data, s = e.children;
            if (r = r || i && i.pre,
            e.elm = t,
            B(e.isComment) && z(e.asyncFactory))
                e.isAsyncPlaceholder = !0;
            else if (z(i) && (z(o = i.hook) && z(o = o.init) && o(e, !0),
            z(o = e.componentInstance)))
                f(e, n);
            else if (z(a)) {
                if (z(s))
                    if (t.hasChildNodes())
                        if (z(o = i) && z(o = o.domProps) && z(o = o.innerHTML)) {
                            if (o !== t.innerHTML)
                                return
                        } else {
                            for (var l = !0, c = t.firstChild, d = 0; d < s.length; d++) {
                                if (!c || !I(c, s[d], n, r)) {
                                    l = !1;
                                    break
                                }
                                c = c.nextSibling
                            }
                            if (!l || c)
                                return
                        }
                    else
                        m(e, s, n);
                if (z(i)) {
                    var u, p = !1;
                    for (u in i)
                        if (!_(u)) {
                            p = !0,
                            h(e, n);
                            break
                        }
                    !p && i.class && le(i.class)
                }
            } else
                t.data !== e.text && (t.data = e.text);
            return 1
        }
        return function(t, e, n, r) {
            if (!H(e)) {
                var o = !1
                  , a = [];
                if (H(t))
                    o = !0,
                    j(e, a);
                else {
                    var i = z(t.nodeType);
                    if (!i && nr(t, e))
                        P(t, e, a, null, null, r);
                    else {
                        if (i) {
                            if (1 === t.nodeType && t.hasAttribute(nt) && (t.removeAttribute(nt),
                            n = !0),
                            B(n) && I(t, e, a))
                                return v(e, a, !0),
                                t;
                            r = t,
                            t = new Z(T.tagName(r).toLowerCase(),{},[],void 0,r)
                        }
                        i = t.elm,
                        n = T.parentNode(i);
                        if (j(e, a, i._leaveCb ? null : n, T.nextSibling(i)),
                        z(e.parent))
                            for (var s = e.parent, l = O(e); s; ) {
                                for (var c = 0; c < C.destroy.length; ++c)
                                    C.destroy[c](s);
                                if (s.elm = e.elm,
                                l) {
                                    for (var d = 0; d < C.create.length; ++d)
                                        C.create[d](tr, s);
                                    var u = s.data.hook.insert;
                                    if (u.merged)
                                        for (var p = 1; p < u.fns.length; p++)
                                            u.fns[p]()
                                } else
                                    Qn(s);
                                s = s.parent
                            }
                        z(n) ? A([t], 0, 0) : z(t.tag) && g(t)
                    }
                }
                return v(e, a, o),
                e.elm
            }
            z(t) && g(t)
        }
    }({
        nodeOps: e,
        modules: [rr, _r, i, n, to, a ? {
            create: To,
            activate: To,
            remove: function(t, e) {
                !0 !== t.data.show ? wo(t, e) : e()
            }
        } : {}].concat(Yn)
    })
      , jo = (dt && document.addEventListener("selectionchange", function() {
        var t = document.activeElement;
        t && t.vmodel && Do(t, "input")
    }),
    {
        inserted: function(t, e, n, r) {
            "select" === n.tag ? (r.elm && !r.elm._vOptions ? pe(n, "postpatch", function() {
                jo.componentUpdated(t, e, n)
            }) : Oo(t, e, n.context),
            t._vOptions = [].map.call(t.options, Po)) : "textarea" !== n.tag && !Xn(t.type) || (t._vModifiers = e.modifiers,
            e.modifiers.lazy) || (t.addEventListener("compositionstart", Io),
            t.addEventListener("compositionend", Lo),
            t.addEventListener("change", Lo),
            dt && (t.vmodel = !0))
        },
        componentUpdated: function(t, e, n) {
            var r, o;
            "select" === n.tag && (Oo(t, e, n.context),
            r = t._vOptions,
            (o = t._vOptions = [].map.call(t.options, Po)).some(function(t, e) {
                return !Q(t, r[e])
            })) && (t.multiple ? e.value.some(function(t) {
                return Ao(t, o)
            }) : e.value !== e.oldValue && Ao(e.value, o)) && Do(t, "change")
        }
    });
    function Oo(t, e) {
        Eo(t, e),
        (U || ut) && setTimeout(function() {
            Eo(t, e)
        }, 0)
    }
    function Eo(t, e) {
        var n = e.value
          , r = t.multiple;
        if (!r || Array.isArray(n)) {
            for (var o, a, i = 0, s = t.options.length; i < s; i++)
                if (a = t.options[i],
                r)
                    o = -1 < tt(n, Po(a)),
                    a.selected !== o && (a.selected = o);
                else if (Q(Po(a), n))
                    return t.selectedIndex !== i && (t.selectedIndex = i);
            r || (t.selectedIndex = -1)
        }
    }
    function Ao(e, t) {
        return t.every(function(t) {
            return !Q(t, e)
        })
    }
    function Po(t) {
        return "_value"in t ? t._value : t.value
    }
    function Io(t) {
        t.target.composing = !0
    }
    function Lo(t) {
        t.target.composing && (t.target.composing = !1,
        Do(t.target, "input"))
    }
    function Do(t, e) {
        var n = document.createEvent("HTMLEvents");
        n.initEvent(e, !0, !0),
        t.dispatchEvent(n)
    }
    function $o(t) {
        return !t.componentInstance || t.data && t.data.transition ? t : $o(t.componentInstance._vnode)
    }
    rr = {
        model: jo,
        show: {
            bind: function(t, e, n) {
                var e = e.value
                  , r = (n = $o(n)).data && n.data.transition
                  , o = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
                e && r ? (n.data.show = !0,
                ko(n, function() {
                    t.style.display = o
                })) : t.style.display = e ? o : "none"
            },
            update: function(t, e, n) {
                var r = e.value;
                !r != !e.oldValue && ((n = $o(n)).data && n.data.transition ? (n.data.show = !0,
                r ? ko(n, function() {
                    t.style.display = t.__vOriginalDisplay
                }) : wo(n, function() {
                    t.style.display = "none"
                })) : t.style.display = r ? t.__vOriginalDisplay : "none")
            },
            unbind: function(t, e, n, r, o) {
                o || (t.style.display = t.__vOriginalDisplay)
            }
        }
    },
    _r = {
        name: String,
        appear: Boolean,
        css: Boolean,
        mode: String,
        type: String,
        enterClass: String,
        leaveClass: String,
        enterToClass: String,
        leaveToClass: String,
        enterActiveClass: String,
        leaveActiveClass: String,
        appearClass: String,
        appearActiveClass: String,
        appearToClass: String,
        duration: [Number, String, Object]
    };
    function Mo(t) {
        var e = t && t.componentOptions;
        return e && e.Ctor.options.abstract ? Mo(Ke(e.children)) : t
    }
    function Ro(t) {
        var e, n = {}, r = t.$options;
        for (e in r.propsData)
            n[e] = t[e];
        var o, a = r._parentListeners;
        for (o in a)
            n[j(o)] = a[o];
        return n
    }
    function No(t, e) {
        if (/\d-keep-alive$/.test(e.tag))
            return t("keep-alive", {
                props: e.componentOptions.propsData
            })
    }
    function Ho(t) {
        return t.tag || ye(t)
    }
    function zo(t) {
        return "show" === t.name
    }
    i = {
        name: "transition",
        props: _r,
        abstract: !0,
        render: function(t) {
            var e = this
              , n = this.$slots.default;
            if (n && (n = n.filter(Ho)).length) {
                var r = this.mode
                  , n = n[0];
                if (!function(t) {
                    for (; t = t.parent; )
                        if (t.data.transition)
                            return 1
                }(this.$vnode)) {
                    var o = Mo(n);
                    if (o) {
                        if (this._leaving)
                            return No(t, n);
                        var a = "__transition-" + this._uid + "-"
                          , a = (o.key = null == o.key ? o.isComment ? a + "comment" : a + o.tag : !y(o.key) || 0 === String(o.key).indexOf(a) ? o.key : a + o.key,
                        (o.data || (o.data = {})).transition = Ro(this))
                          , i = this._vnode
                          , s = Mo(i);
                        if (o.data.directives && o.data.directives.some(zo) && (o.data.show = !0),
                        s && s.data && (s.key !== o.key || s.tag !== o.tag) && !ye(s) && (!s.componentInstance || !s.componentInstance._vnode.isComment)) {
                            s = s.data.transition = k({}, a);
                            if ("out-in" === r)
                                return this._leaving = !0,
                                pe(s, "afterLeave", function() {
                                    e._leaving = !1,
                                    e.$forceUpdate()
                                }),
                                No(t, n);
                            if ("in-out" === r) {
                                if (ye(o))
                                    return i;
                                var l, t = function() {
                                    l()
                                };
                                pe(a, "afterEnter", t),
                                pe(a, "enterCancelled", t),
                                pe(s, "delayLeave", function(t) {
                                    l = t
                                })
                            }
                        }
                    }
                }
                return n
            }
        }
    },
    n = k({
        tag: String,
        moveClass: String
    }, _r);
    function Bo(t) {
        t.elm._moveCb && t.elm._moveCb(),
        t.elm._enterCb && t.elm._enterCb()
    }
    function Vo(t) {
        t.data.newPos = t.elm.getBoundingClientRect()
    }
    function Fo(t) {
        var e = t.data.pos
          , n = t.data.newPos
          , r = e.left - n.left
          , e = e.top - n.top;
        (r || e) && (t.data.moved = !0,
        (n = t.elm.style).transform = n.WebkitTransform = "translate(" + r + "px," + e + "px)",
        n.transitionDuration = "0s")
    }
    delete n.mode;
    var qo, to = {
        Transition: i,
        TransitionGroup: {
            props: n,
            beforeMount: function() {
                var r = this
                  , o = this._update;
                this._update = function(t, e) {
                    var n = tn(r);
                    r.__patch__(r._vnode, r.kept, !1, !0),
                    r._vnode = r.kept,
                    n(),
                    o.call(r, t, e)
                }
            },
            render: function(t) {
                for (var e = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, o = this.$slots.default || [], a = this.children = [], i = Ro(this), s = 0; s < o.length; s++) {
                    var l = o[s];
                    l.tag && null != l.key && 0 !== String(l.key).indexOf("__vlist") && (a.push(l),
                    ((n[l.key] = l).data || (l.data = {})).transition = i)
                }
                if (r) {
                    for (var c = [], d = [], u = 0; u < r.length; u++) {
                        var p = r[u];
                        p.data.transition = i,
                        p.data.pos = p.elm.getBoundingClientRect(),
                        (n[p.key] ? c : d).push(p)
                    }
                    this.kept = t(e, null, c),
                    this.removed = d
                }
                return t(e, null, a)
            },
            updated: function() {
                var t = this.prevChildren
                  , r = this.moveClass || (this.name || "v") + "-move";
                t.length && this.hasMove(t[0].elm, r) && (t.forEach(Bo),
                t.forEach(Vo),
                t.forEach(Fo),
                this._reflow = document.body.offsetHeight,
                t.forEach(function(t) {
                    var n;
                    t.data.moved && (t = (n = t.elm).style,
                    go(n, r),
                    t.transform = t.WebkitTransform = t.transitionDuration = "",
                    n.addEventListener(uo, n._moveCb = function t(e) {
                        e && e.target !== n || e && !/transform$/.test(e.propertyName) || (n.removeEventListener(uo, t),
                        n._moveCb = null,
                        R(n, r))
                    }
                    ))
                }))
            },
            methods: {
                hasMove: function(t, e) {
                    var n;
                    return !!io && (this._hasMove || (n = t.cloneNode(),
                    t._transitionClasses && t._transitionClasses.forEach(function(t) {
                        ro(n, t)
                    }),
                    no(n, e),
                    n.style.display = "none",
                    this.$el.appendChild(n),
                    t = yo(n),
                    this.$el.removeChild(n),
                    this._hasMove = t.hasTransform))
                }
            }
        }
    }, Uo = (s.config.mustUseProp = An,
    s.config.isReservedTag = qn,
    s.config.isReservedAttr = r,
    s.config.getTagNamespace = Kn,
    s.config.isUnknownElement = function(t) {
        var e;
        return !a || !qn(t) && (t = t.toLowerCase(),
        null != Jn[t] ? Jn[t] : (e = document.createElement(t),
        -1 < t.indexOf("-") ? Jn[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : Jn[t] = /HTMLUnknownElement/.test(e.toString())))
    }
    ,
    k(s.options.directives, rr),
    k(s.options.components, to),
    s.prototype.__patch__ = a ? e : D,
    s.prototype.$mount = function(t, e) {
        return n = this,
        t = t = t && a ? Gn(t) : void 0,
        r = e,
        n.$el = t,
        n.$options.render || (n.$options.render = Ct),
        u(n, "beforeMount"),
        new M(n,function() {
            n._update(n._render(), r)
        }
        ,D,{
            before: function() {
                n._isMounted && !n._isDestroyed && u(n, "beforeUpdate")
            }
        },!0),
        r = !1,
        null == n.$vnode && (n._isMounted = !0,
        u(n, "mounted")),
        n;
        var n, r
    }
    ,
    a && setTimeout(function() {
        g.devtools && gt && gt.emit("init", s)
    }, 0),
    /\{\{((?:.|\r?\n)+?)\}\}/g), Zo = /[-.*+?^${}()|[\]\/\\]/g, Wo = t(function(t) {
        var e = t[0].replace(Zo, "\\$&")
          , t = t[1].replace(Zo, "\\$&");
        return new RegExp(e + "((?:.|\\n)+?)" + t,"g")
    }), Yn = {
        staticKeys: ["staticClass"],
        transformNode: function(t, e) {
            e.warn;
            e = W(t, "class"),
            e && (t.staticClass = JSON.stringify(e)),
            e = E(t, "class", !1);
            e && (t.classBinding = e)
        },
        genData: function(t) {
            var e = "";
            return t.staticClass && (e += "staticClass:" + t.staticClass + ","),
            t.classBinding && (e += "class:" + t.classBinding + ","),
            e
        }
    }, _r = {
        staticKeys: ["staticStyle"],
        transformNode: function(t, e) {
            e.warn;
            e = W(t, "style"),
            e && (t.staticStyle = JSON.stringify(qr(e))),
            e = E(t, "style", !1);
            e && (t.styleBinding = e)
        },
        genData: function(t) {
            var e = "";
            return t.staticStyle && (e += "staticStyle:" + t.staticStyle + ","),
            t.styleBinding && (e += "style:(" + t.styleBinding + "),"),
            e
        }
    }, i = o("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"), n = o("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"), Ko = o("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"), Jo = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/, Xo = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/, r = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + ot.source + "]*", rr = "((?:" + r + "\\:)?" + r + ")", Go = new RegExp("^<" + rr), Yo = /^\s*(\/?)>/, Qo = new RegExp("^<\\/" + rr + "[^>]*>"), ta = /^<!DOCTYPE [^>]+>/i, ea = /^<!\--/, na = /^<!\[/, ra = o("script,style,textarea", !0), oa = {}, aa = {
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&amp;": "&",
        "&#10;": "\n",
        "&#9;": "\t",
        "&#39;": "'"
    }, ia = /&(?:lt|gt|quot|amp|#39);/g, sa = /&(?:lt|gt|quot|amp|#39|#10|#9);/g, la = o("pre,textarea", !0), ca = function(t, e) {
        return t && la(t) && "\n" === e[0]
    };
    var da, ua, pa, fa, ma, ha, ga, va, _a = /^@|^v-on:/, ya = /^v-|^@|^:|^#/, ba = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, xa = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, ka = /^\(|\)$/g, wa = /^\[.*\]$/, Sa = /:(.*)$/, Ca = /^:|^\.|^v-bind:/, Ta = /\.[^.\]]+(?=[^\]]*$)/g, ja = /^v-slot(:|$)|^#/, Oa = /[\r\n]/, Ea = /[ \f\t\r\n]+/g, Aa = t(function(t) {
        return (qo = qo || document.createElement("div")).innerHTML = t,
        qo.textContent
    }), Pa = "_empty_";
    function Ia(t, e, n) {
        return {
            type: 1,
            tag: t,
            attrsList: e,
            attrsMap: function(t) {
                for (var e = {}, n = 0, r = t.length; n < r; n++)
                    e[t[n].name] = t[n].value;
                return e
            }(e),
            rawAttrsMap: {},
            parent: n,
            children: []
        }
    }
    function La(t, p) {
        da = p.warn || xr,
        ha = p.isPreTag || q,
        ga = p.mustUseProp || q,
        va = p.getTagNamespace || q,
        p.isReservedTag,
        pa = kr(p.modules, "transformNode"),
        fa = kr(p.modules, "preTransformNode"),
        ma = kr(p.modules, "postTransformNode"),
        ua = p.delimiters;
        var f, m, h = [], i = !1 !== p.preserveWhitespace, s = p.whitespace, g = !1, v = !1;
        function _(t) {
            var e, n;
            o(t),
            g || t.processed || (t = Da(t, p)),
            h.length || t === f || f.if && (t.elseif || t.else) && Ma(f, {
                exp: t.elseif,
                block: t
            }),
            m && !t.forbidden && (t.elseif || t.else ? (e = t,
            (n = function(t) {
                for (var e = t.length; e--; ) {
                    if (1 === t[e].type)
                        return t[e];
                    t.pop()
                }
            }(m.children)) && n.if && Ma(n, {
                exp: e.elseif,
                block: e
            })) : (t.slotScope && (n = t.slotTarget || '"default"',
            (m.scopedSlots || (m.scopedSlots = {}))[n] = t),
            m.children.push(t),
            t.parent = m)),
            t.children = t.children.filter(function(t) {
                return !t.slotScope
            }),
            o(t),
            t.pre && (g = !1),
            ha(t.tag) && (v = !1);
            for (var r = 0; r < ma.length; r++)
                ma[r](t, p)
        }
        function o(t) {
            if (!v)
                for (var e; (e = t.children[t.children.length - 1]) && 3 === e.type && " " === e.text; )
                    t.children.pop()
        }
        for (var e, l, a = t, c = {
            warn: da,
            expectHTML: p.expectHTML,
            isUnaryTag: p.isUnaryTag,
            canBeLeftOpenTag: p.canBeLeftOpenTag,
            shouldDecodeNewlines: p.shouldDecodeNewlines,
            shouldDecodeNewlinesForHref: p.shouldDecodeNewlinesForHref,
            shouldKeepComment: p.comments,
            outputSourceRange: p.outputSourceRange,
            start: function(t, e, n, r, o) {
                var a = m && m.ns || va(t)
                  , i = Ia(t, e = U && "svg" === a ? function(t) {
                    for (var e = [], n = 0; n < t.length; n++) {
                        var r = t[n];
                        Na.test(r.name) || (r.name = r.name.replace(Ha, ""),
                        e.push(r))
                    }
                    return e
                }(e) : e, m);
                a && (i.ns = a),
                "style" !== (t = i).tag && ("script" !== t.tag || t.attrsMap.type && "text/javascript" !== t.attrsMap.type) || ht() || (i.forbidden = !0);
                for (var s = 0; s < fa.length; s++)
                    i = fa[s](i, p) || i;
                if (g || (null != W(e = i, "v-pre") && (e.pre = !0),
                i.pre && (g = !0)),
                ha(i.tag) && (v = !0),
                g) {
                    var a, l = (a = i).attrsList, c = l.length;
                    if (c)
                        for (var d = a.attrs = new Array(c), u = 0; u < c; u++)
                            d[u] = {
                                name: l[u].name,
                                value: JSON.stringify(l[u].value)
                            },
                            null != l[u].start && (d[u].start = l[u].start,
                            d[u].end = l[u].end);
                    else
                        a.pre || (a.plain = !0)
                } else
                    i.processed || ($a(i),
                    (e = W(t = i, "v-if")) ? (t.if = e,
                    Ma(t, {
                        exp: e,
                        block: t
                    })) : (null != W(t, "v-else") && (t.else = !0),
                    (e = W(t, "v-else-if")) && (t.elseif = e)),
                    null != W(a = i, "v-once") && (a.once = !0));
                f = f || i,
                n ? _(i) : (m = i,
                h.push(i))
            },
            end: function(t, e, n) {
                var r = h[h.length - 1];
                --h.length,
                m = h[h.length - 1],
                _(r)
            },
            chars: function(t, e, n) {
                var r, o, a;
                !m || U && "textarea" === m.tag && m.attrsMap.placeholder === t || (a = m.children,
                (t = v || t.trim() ? "script" === m.tag || "style" === m.tag ? t : Aa(t) : a.length ? s ? "condense" === s && Oa.test(t) ? "" : " " : i ? " " : "" : "") && (v || "condense" !== s || (t = t.replace(Ea, " ")),
                !g && " " !== t && (r = function(t) {
                    var e = ua ? Wo(ua) : Uo;
                    if (e.test(t)) {
                        for (var n, r, o, a = [], i = [], s = e.lastIndex = 0; n = e.exec(t); ) {
                            (r = n.index) > s && (i.push(o = t.slice(s, r)),
                            a.push(JSON.stringify(o)));
                            var l = br(n[1].trim());
                            a.push("_s(" + l + ")"),
                            i.push({
                                "@binding": l
                            }),
                            s = r + n[0].length
                        }
                        return s < t.length && (i.push(o = t.slice(s)),
                        a.push(JSON.stringify(o))),
                        {
                            expression: a.join("+"),
                            tokens: i
                        }
                    }
                }(t)) ? o = {
                    type: 2,
                    expression: r.expression,
                    tokens: r.tokens,
                    text: t
                } : " " === t && a.length && " " === a[a.length - 1].text || (o = {
                    type: 3,
                    text: t
                }),
                o) && a.push(o))
            },
            comment: function(t, e, n) {
                m && m.children.push({
                    type: 3,
                    text: t,
                    isComment: !0
                })
            }
        }, d = [], M = c.expectHTML, R = c.isUnaryTag || q, N = c.canBeLeftOpenTag || q, u = 0; a; ) {
            if (e = a,
            l && ra(l)) {
                var r = 0
                  , y = l.toLowerCase()
                  , n = oa[y] || (oa[y] = new RegExp("([\\s\\S]*?)(</" + y + "[^>]*>)","i"))
                  , n = a.replace(n, function(t, e, n) {
                    return r = n.length,
                    ra(y) || "noscript" === y || (e = e.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")),
                    ca(y, e) && (e = e.slice(1)),
                    c.chars && c.chars(e),
                    ""
                });
                u += a.length - n.length,
                a = n,
                $(y, u - r, u)
            } else {
                var b = a.indexOf("<");
                if (0 === b) {
                    if (ea.test(a)) {
                        n = a.indexOf("--\x3e");
                        if (0 <= n) {
                            c.shouldKeepComment && c.comment(a.substring(4, n), u, u + n + 3),
                            D(n + 3);
                            continue
                        }
                    }
                    if (na.test(a)) {
                        var x = a.indexOf("]>");
                        if (0 <= x) {
                            D(x + 2);
                            continue
                        }
                    }
                    x = a.match(ta);
                    if (x) {
                        D(x[0].length);
                        continue
                    }
                    var k = a.match(Qo);
                    if (k) {
                        var w = u;
                        D(k[0].length),
                        $(k[1], w, u);
                        continue
                    }
                    k = function() {
                        var t = a.match(Go);
                        if (t) {
                            var e, n, r = {
                                tagName: t[1],
                                attrs: [],
                                start: u
                            };
                            for (D(t[0].length); !(e = a.match(Yo)) && (n = a.match(Xo) || a.match(Jo)); )
                                n.start = u,
                                D(n[0].length),
                                n.end = u,
                                r.attrs.push(n);
                            if (e)
                                return r.unarySlash = e[1],
                                D(e[0].length),
                                r.end = u,
                                r
                        }
                    }();
                    if (k) {
                        P = A = E = O = j = T = w = C = S = void 0;
                        var S = k
                          , C = S.tagName
                          , w = S.unarySlash;
                        M && ("p" === l && Ko(C) && $(l),
                        N(C)) && l === C && $(C);
                        for (var w = R(C) || !!w, T = S.attrs.length, j = new Array(T), O = 0; O < T; O++) {
                            var E = S.attrs[O]
                              , A = E[3] || E[4] || E[5] || ""
                              , P = "a" === C && "href" === E[1] ? c.shouldDecodeNewlinesForHref : c.shouldDecodeNewlines;
                            j[O] = {
                                name: E[1],
                                value: function(t, e) {
                                    return e = e ? sa : ia,
                                    t.replace(e, function(t) {
                                        return aa[t]
                                    })
                                }(A, P)
                            }
                        }
                        w || (d.push({
                            tag: C,
                            lowerCasedTag: C.toLowerCase(),
                            attrs: j,
                            start: S.start,
                            end: S.end
                        }),
                        l = C),
                        c.start && c.start(C, j, w, S.start, S.end),
                        ca(k.tagName, a) && D(1);
                        continue
                    }
                }
                var k = void 0
                  , I = void 0
                  , L = void 0;
                if (0 <= b) {
                    for (I = a.slice(b); !(Qo.test(I) || Go.test(I) || ea.test(I) || na.test(I) || (L = I.indexOf("<", 1)) < 0); )
                        b += L,
                        I = a.slice(b);
                    k = a.substring(0, b)
                }
                (k = b < 0 ? a : k) && D(k.length),
                c.chars && k && c.chars(k, u - k.length, u)
            }
            if (a === e) {
                c.chars && c.chars(a);
                break
            }
        }
        function D(t) {
            u += t,
            a = a.substring(t)
        }
        function $(t, e, n) {
            var r, o;
            if (null == e && (e = u),
            null == n && (n = u),
            t)
                for (o = t.toLowerCase(),
                r = d.length - 1; 0 <= r && d[r].lowerCasedTag !== o; r--)
                    ;
            else
                r = 0;
            if (0 <= r) {
                for (var a = d.length - 1; r <= a; a--)
                    c.end && c.end(d[a].tag, e, n);
                d.length = r,
                l = r && d[r - 1].tag
            } else
                "br" === o ? c.start && c.start(t, [], !0, e, n) : "p" === o && (c.start && c.start(t, [], !1, e, n),
                c.end) && c.end(t, e, n)
        }
        return $(),
        f
    }
    function Da(t, e) {
        var n, r, o, a, i, s, l, c;
        (n = E(c = t, "key")) && (c.key = n),
        t.plain = !t.key && !t.scopedSlots && !t.attrsList.length,
        (c = E(l = t, "ref")) && (l.ref = c,
        l.refInFor = function() {
            for (var t = l; t; ) {
                if (void 0 !== t.for)
                    return !0;
                t = t.parent
            }
            return !1
        }()),
        "template" === (n = t).tag ? (s = W(n, "scope"),
        n.slotScope = s || W(n, "slot-scope")) : (s = W(n, "slot-scope")) && (n.slotScope = s),
        (s = E(n, "slot")) && (n.slotTarget = '""' === s ? '"default"' : s,
        n.slotTargetDynamic = !(!n.attrsMap[":slot"] && !n.attrsMap["v-bind:slot"]),
        "template" === n.tag || n.slotScope || Sr(n, "slot", s, (s = "slot",
        n.rawAttrsMap[":" + s] || n.rawAttrsMap["v-bind:" + s] || n.rawAttrsMap[s]))),
        "template" === n.tag ? (a = jr(n, ja)) && (r = (o = Ra(a)).name,
        o = o.dynamic,
        n.slotTarget = r,
        n.slotTargetDynamic = o,
        n.slotScope = a.value || Pa) : (r = jr(n, ja)) && (o = n.scopedSlots || (n.scopedSlots = {}),
        c = (a = Ra(r)).name,
        a = a.dynamic,
        (i = o[c] = Ia("template", [], n)).slotTarget = c,
        i.slotTargetDynamic = a,
        i.children = n.children.filter(function(t) {
            if (!t.slotScope)
                return t.parent = i,
                !0
        }),
        i.slotScope = r.value || Pa,
        n.children = [],
        n.plain = !1),
        "slot" === (o = t).tag && (o.slotName = E(o, "name")),
        (a = E(c = t, "is")) && (c.component = a),
        null != W(c, "inline-template") && (c.inlineTemplate = !0);
        for (var d = 0; d < pa.length; d++)
            t = pa[d](t, e) || t;
        for (var u, p, f, m, h, g, v, _, y, b, x, k, w = t, S = w.attrsList, C = 0, T = S.length; C < T; C++)
            u = v = S[C].name,
            p = S[C].value,
            ya.test(u) ? (w.hasBindings = !0,
            (x = function(t) {
                t = t.match(Ta);
                {
                    var e;
                    if (t)
                        return e = {},
                        t.forEach(function(t) {
                            e[t.slice(1)] = !0
                        }),
                        e
                }
            }(u.replace(ya, ""))) && (u = u.replace(Ta, "")),
            Ca.test(u) ? (u = u.replace(Ca, ""),
            p = br(p),
            (m = wa.test(u)) && (u = u.slice(1, -1)),
            x && (x.prop && !m && "innerHtml" === (u = j(u)) && (u = "innerHTML"),
            x.camel && !m && (u = j(u)),
            x.sync) && (f = Ar(p, "$event"),
            m ? O(w, '"update:"+(' + u + ")", f, null, !1, 0, S[C], !0) : (O(w, "update:" + j(u), f, null, !1, 0, S[C]),
            X(u) !== j(u) && O(w, "update:" + X(u), f, null, !1, 0, S[C]))),
            (x && x.prop || !w.component && ga(w.tag, w.attrsMap.type, u) ? wr : Sr)(w, u, p, S[C], m)) : _a.test(u) ? (u = u.replace(_a, ""),
            O(w, u = (m = wa.test(u)) ? u.slice(1, -1) : u, p, x, !1, 0, S[C], m)) : (m = !1,
            (y = (f = (u = u.replace(ya, "")).match(Sa)) && f[1]) && (u = u.slice(0, -(y.length + 1)),
            wa.test(y)) && (y = y.slice(1, -1),
            m = !0),
            h = w,
            g = u,
            v = v,
            _ = p,
            y = y,
            b = m,
            x = x,
            k = S[C],
            (h.directives || (h.directives = [])).push(Or({
                name: g,
                rawName: v,
                value: _,
                arg: y,
                isDynamicArg: b,
                modifiers: x
            }, k)),
            h.plain = !1)) : (Sr(w, u, JSON.stringify(p), S[C]),
            !w.component && "muted" === u && ga(w.tag, w.attrsMap.type, u) && wr(w, u, "true", S[C]));
        return t
    }
    function $a(t) {
        var r, e;
        (r = W(t, "v-for")) && (e = function() {
            var t, e, n = r.match(ba);
            if (n)
                return (t = {}).for = n[2].trim(),
                (e = (n = n[1].trim().replace(ka, "")).match(xa)) ? (t.alias = n.replace(xa, "").trim(),
                t.iterator1 = e[1].trim(),
                e[2] && (t.iterator2 = e[2].trim())) : t.alias = n,
                t
        }()) && k(t, e)
    }
    function Ma(t, e) {
        t.ifConditions || (t.ifConditions = []),
        t.ifConditions.push(e)
    }
    function Ra(t) {
        var e = t.name.replace(ja, "");
        return e || "#" !== t.name[0] && (e = "default"),
        wa.test(e) ? {
            name: e.slice(1, -1),
            dynamic: !0
        } : {
            name: '"' + e + '"',
            dynamic: !1
        }
    }
    var Na = /^xmlns:NS\d+/
      , Ha = /^NS\d+:/;
    function za(t) {
        return Ia(t.tag, t.attrsList.slice(), t.parent)
    }
    var Ba, Va, to = [Yn, _r, {
        preTransformNode: function(t, e) {
            if ("input" === t.tag) {
                var n, r, o, a, i, s, l = t.attrsMap;
                if (l["v-model"])
                    return (l[":type"] || l["v-bind:type"]) && (n = E(t, "type")),
                    (n = l.type || n || !l["v-bind"] ? n : "(" + l["v-bind"] + ").type") ? (s = (l = W(t, "v-if", !0)) ? "&&(" + l + ")" : "",
                    r = null != W(t, "v-else", !0),
                    o = W(t, "v-else-if", !0),
                    $a(a = za(t)),
                    Cr(a, "type", "checkbox"),
                    Da(a, e),
                    a.processed = !0,
                    a.if = "(" + n + ")==='checkbox'" + s,
                    Ma(a, {
                        exp: a.if,
                        block: a
                    }),
                    W(i = za(t), "v-for", !0),
                    Cr(i, "type", "radio"),
                    Da(i, e),
                    Ma(a, {
                        exp: "(" + n + ")==='radio'" + s,
                        block: i
                    }),
                    W(s = za(t), "v-for", !0),
                    Cr(s, ":type", n),
                    Da(s, e),
                    Ma(a, {
                        exp: l,
                        block: s
                    }),
                    r ? a.else = !0 : o && (a.elseif = o),
                    a) : void 0
            }
        }
    }], e = {
        expectHTML: !0,
        modules: to,
        directives: {
            model: function(t, e, n) {
                var r, o, a, i, s, l, c, d, u, p, f = e.value, e = e.modifiers, m = t.tag, h = t.attrsMap.type;
                if (t.component)
                    return Er(t, f, e),
                    !1;
                if ("select" === m)
                    O(t, "change", 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (e && e.number ? "_n(val)" : "val") + "});" + " " + Ar(f, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), null, !0);
                else if ("input" === m && "checkbox" === h)
                    s = t,
                    l = f,
                    c = e && e.number,
                    d = E(s, "value") || "null",
                    u = E(s, "true-value") || "true",
                    p = E(s, "false-value") || "false",
                    wr(s, "checked", "Array.isArray(" + l + ")?_i(" + l + "," + d + ")>-1" + ("true" === u ? ":(" + l + ")" : ":_q(" + l + "," + u + ")")),
                    O(s, "change", "var $$a=" + l + ",$$el=$event.target,$$c=$$el.checked?(" + u + "):(" + p + ");if(Array.isArray($$a)){var $$v=" + (c ? "_n(" + d + ")" : d) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + Ar(l, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + Ar(l, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + Ar(l, "$$c") + "}", null, !0);
                else if ("input" === m && "radio" === h)
                    s = t,
                    u = f,
                    p = e && e.number,
                    c = E(s, "value") || "null",
                    wr(s, "checked", "_q(" + u + "," + (c = p ? "_n(" + c + ")" : c) + ")"),
                    O(s, "change", Ar(u, c), null, !0);
                else if ("input" === m || "textarea" === m)
                    d = f,
                    h = (l = t).attrsMap.type,
                    o = (r = e || {}).lazy,
                    a = r.number,
                    r = r.trim,
                    i = !o && "range" !== h,
                    o = o ? "change" : "range" === h ? Mr : "input",
                    h = r ? "$event.target.value.trim()" : "$event.target.value",
                    h = Ar(d, h = a ? "_n(" + h + ")" : h),
                    i && (h = "if($event.target.composing)return;" + h),
                    wr(l, "value", "(" + d + ")"),
                    O(l, o, h, null, !0),
                    (r || a) && O(l, "blur", "$forceUpdate()");
                else if (!g.isReservedTag(m))
                    return Er(t, f, e),
                    !1;
                return !0
            },
            text: function(t, e) {
                e.value && wr(t, "textContent", "_s(" + e.value + ")", e)
            },
            html: function(t, e) {
                e.value && wr(t, "innerHTML", "_s(" + e.value + ")", e)
            }
        },
        isPreTag: function(t) {
            return "pre" === t
        },
        isUnaryTag: i,
        mustUseProp: An,
        canBeLeftOpenTag: n,
        isReservedTag: qn,
        getTagNamespace: Kn,
        staticKeys: to.reduce(function(t, e) {
            return t.concat(e.staticKeys || [])
        }, []).join(",")
    }, Fa = t(function(t) {
        return o("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (t ? "," + t : ""))
    });
    function qa(t, e) {
        t && (Ba = Fa(e.staticKeys || ""),
        Va = e.isReservedTag || q,
        function t(e) {
            var n;
            if (e.static = 2 !== (n = e).type && (3 === n.type || !(!n.pre && (n.hasBindings || n.if || n.for || _(n.tag) || !Va(n.tag) || function(t) {
                for (; t.parent; ) {
                    if ("template" !== (t = t.parent).tag)
                        return;
                    if (t.for)
                        return 1
                }
            }(n) || !Object.keys(n).every(Ba)))),
            1 === e.type && (Va(e.tag) || "slot" === e.tag || null != e.attrsMap["inline-template"])) {
                for (var r = 0, o = e.children.length; r < o; r++) {
                    var a = e.children[r];
                    t(a),
                    a.static || (e.static = !1)
                }
                if (e.ifConditions)
                    for (var i = 1, s = e.ifConditions.length; i < s; i++) {
                        var l = e.ifConditions[i].block;
                        t(l),
                        l.static || (e.static = !1)
                    }
            }
        }(t),
        function t(e, n) {
            if (1 === e.type) {
                if ((e.static || e.once) && (e.staticInFor = n),
                e.static && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type))
                    return e.staticRoot = !0;
                if (e.staticRoot = !1,
                e.children)
                    for (var r = 0, o = e.children.length; r < o; r++)
                        t(e.children[r], n || !!e.for);
                if (e.ifConditions)
                    for (var a = 1, i = e.ifConditions.length; a < i; a++)
                        t(e.ifConditions[a].block, n)
            }
        }(t, !1))
    }
    var Ua = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/
      , Za = /\([^)]*?\);*$/
      , Wa = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/
      , Ka = {
        esc: 27,
        tab: 9,
        enter: 13,
        space: 32,
        up: 38,
        left: 37,
        right: 39,
        down: 40,
        delete: [8, 46]
    }
      , Ja = {
        esc: ["Esc", "Escape"],
        tab: "Tab",
        enter: "Enter",
        space: [" ", "Spacebar"],
        up: ["Up", "ArrowUp"],
        left: ["Left", "ArrowLeft"],
        right: ["Right", "ArrowRight"],
        down: ["Down", "ArrowDown"],
        delete: ["Backspace", "Delete", "Del"]
    }
      , f = function(t) {
        return "if(" + t + ")return null;"
    }
      , Xa = {
        stop: "$event.stopPropagation();",
        prevent: "$event.preventDefault();",
        self: f("$event.target !== $event.currentTarget"),
        ctrl: f("!$event.ctrlKey"),
        shift: f("!$event.shiftKey"),
        alt: f("!$event.altKey"),
        meta: f("!$event.metaKey"),
        left: f("'button' in $event && $event.button !== 0"),
        middle: f("'button' in $event && $event.button !== 1"),
        right: f("'button' in $event && $event.button !== 2")
    };
    function Ga(t, e) {
        var n, e = e ? "nativeOn:" : "on:", r = "", o = "";
        for (n in t) {
            var a = function e(t) {
                if (!t)
                    return "function(){}";
                if (Array.isArray(t))
                    return "[" + t.map(function(t) {
                        return e(t)
                    }).join(",") + "]";
                var n = Wa.test(t.value)
                  , r = Ua.test(t.value)
                  , o = Wa.test(t.value.replace(Za, ""));
                if (t.modifiers) {
                    var a, i, s = "", l = "", c = [];
                    for (a in t.modifiers)
                        Xa[a] ? (l += Xa[a],
                        Ka[a] && c.push(a)) : "exact" === a ? (i = t.modifiers,
                        l += f(["ctrl", "shift", "alt", "meta"].filter(function(t) {
                            return !i[t]
                        }).map(function(t) {
                            return "$event." + t + "Key"
                        }).join("||"))) : c.push(a);
                    return c.length && (s += function(t) {
                        return "if(!$event.type.indexOf('key')&&" + t.map(Ya).join("&&") + ")return null;"
                    }(c)),
                    l && (s += l),
                    "function($event){" + s + (n ? "return " + t.value + ".apply(null, arguments)" : r ? "return (" + t.value + ").apply(null, arguments)" : o ? "return " + t.value : t.value) + "}"
                }
                return n || r ? t.value : "function($event){" + (o ? "return " + t.value : t.value) + "}"
            }(t[n]);
            t[n] && t[n].dynamic ? o += n + "," + a + "," : r += '"' + n + '":' + a + ","
        }
        return r = "{" + r.slice(0, -1) + "}",
        o ? e + "_d(" + r + ",[" + o.slice(0, -1) + "])" : e + r
    }
    function Ya(t) {
        var e, n = parseInt(t, 10);
        return n ? "$event.keyCode!==" + n : (n = Ka[t],
        e = Ja[t],
        "_k($event.keyCode," + JSON.stringify(t) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(e) + ")")
    }
    var Qa = {
        on: function(t, e) {
            t.wrapListeners = function(t) {
                return "_g(" + t + "," + e.value + ")"
            }
        },
        bind: function(e, n) {
            e.wrapData = function(t) {
                return "_b(" + t + ",'" + e.tag + "'," + n.value + "," + (n.modifiers && n.modifiers.prop ? "true" : "false") + (n.modifiers && n.modifiers.sync ? ",true" : "") + ")"
            }
        },
        cloak: D
    }
      , ti = function(t) {
        this.options = t,
        this.warn = t.warn || xr,
        this.transforms = kr(t.modules, "transformCode"),
        this.dataGenFns = kr(t.modules, "genData"),
        this.directives = k(k({}, Qa), t.directives);
        var e = t.isReservedTag || q;
        this.maybeComponent = function(t) {
            return !!t.component || !e(t.tag)
        }
        ,
        this.onceId = 0,
        this.staticRenderFns = [],
        this.pre = !1
    };
    function ei(t, e) {
        e = new ti(e);
        return {
            render: "with(this){return " + (t ? "script" === t.tag ? "null" : c(t, e) : '_c("div")') + "}",
            staticRenderFns: e.staticRenderFns
        }
    }
    function c(t, e) {
        if (t.parent && (t.pre = t.pre || t.parent.pre),
        t.staticRoot && !t.staticProcessed)
            return ni(t, e);
        if (t.once && !t.onceProcessed)
            return ri(t, e);
        if (t.for && !t.forProcessed)
            return ai(t, e);
        if (t.if && !t.ifProcessed)
            return oi(t, e);
        if ("template" !== t.tag || t.slotTarget || e.pre) {
            if ("slot" === t.tag)
                return s = (i = t).slotName || '"default"',
                l = ci(i, e),
                s = "_t(" + s + (l ? ",function(){return " + l + "}" : ""),
                c = i.attrs || i.dynamicAttrs ? pi((i.attrs || []).concat(i.dynamicAttrs || []).map(function(t) {
                    return {
                        name: j(t.name),
                        value: t.value,
                        dynamic: t.dynamic
                    }
                })) : null,
                i = i.attrsMap["v-bind"],
                !c && !i || l || (s += ",null"),
                c && (s += "," + c),
                i && (s += (c ? "" : ",null") + "," + i),
                s + ")";
            var n, r, o;
            o = t.component ? (l = t.component,
            c = e,
            s = (i = t).inlineTemplate ? null : ci(i, c, !0),
            "_c(" + l + "," + ii(i, c) + (s ? "," + s : "") + ")") : ((!t.plain || t.pre && e.maybeComponent(t)) && (n = ii(t, e)),
            r = t.inlineTemplate ? null : ci(t, e, !0),
            "_c('" + t.tag + "'" + (n ? "," + n : "") + (r ? "," + r : "") + ")");
            for (var a = 0; a < e.transforms.length; a++)
                o = e.transforms[a](t, o);
            return o
        }
        var i, s, l, c;
        return ci(t, e) || "void 0"
    }
    function ni(t, e) {
        t.staticProcessed = !0;
        var n = e.pre;
        return t.pre && (e.pre = t.pre),
        e.staticRenderFns.push("with(this){return " + c(t, e) + "}"),
        e.pre = n,
        "_m(" + (e.staticRenderFns.length - 1) + (t.staticInFor ? ",true" : "") + ")"
    }
    function ri(t, e) {
        if (t.onceProcessed = !0,
        t.if && !t.ifProcessed)
            return oi(t, e);
        if (t.staticInFor) {
            for (var n = "", r = t.parent; r; ) {
                if (r.for) {
                    n = r.key;
                    break
                }
                r = r.parent
            }
            return n ? "_o(" + c(t, e) + "," + e.onceId++ + "," + n + ")" : c(t, e)
        }
        return ni(t, e)
    }
    function oi(t, e, n, r) {
        return t.ifProcessed = !0,
        function t(e, n, r, o) {
            var a;
            return e.length ? (a = e.shift()).exp ? "(" + a.exp + ")?" + i(a.block) + ":" + t(e, n, r, o) : "" + i(a.block) : o || "_e()";
            function i(t) {
                return (r || (t.once ? ri : c))(t, n)
            }
        }(t.ifConditions.slice(), e, n, r)
    }
    function ai(t, e, n, r) {
        var o = t.for
          , a = t.alias
          , i = t.iterator1 ? "," + t.iterator1 : ""
          , s = t.iterator2 ? "," + t.iterator2 : "";
        return t.forProcessed = !0,
        (r || "_l") + "((" + o + "),function(" + a + i + s + "){return " + (n || c)(t, e) + "})"
    }
    function ii(e, n) {
        var t = "{"
          , r = function(t, e) {
            var n = t.directives;
            if (n) {
                for (var r = "directives:[", o = !1, a = 0, i = n.length; a < i; a++) {
                    var s = n[a]
                      , l = !0
                      , c = e.directives[s.name];
                    (l = c ? !!c(t, s, e.warn) : l) && (o = !0,
                    r += '{name:"' + s.name + '",rawName:"' + s.rawName + '"' + (s.value ? ",value:(" + s.value + "),expression:" + JSON.stringify(s.value) : "") + (s.arg ? ",arg:" + (s.isDynamicArg ? s.arg : '"' + s.arg + '"') : "") + (s.modifiers ? ",modifiers:" + JSON.stringify(s.modifiers) : "") + "},")
                }
                return o ? r.slice(0, -1) + "]" : void 0
            }
        }(e, n);
        r && (t += r + ","),
        e.key && (t += "key:" + e.key + ","),
        e.ref && (t += "ref:" + e.ref + ","),
        e.refInFor && (t += "refInFor:true,"),
        e.pre && (t += "pre:true,"),
        e.component && (t += 'tag:"' + e.tag + '",');
        for (var o = 0; o < n.dataGenFns.length; o++)
            t += n.dataGenFns[o](e);
        return e.attrs && (t += "attrs:" + pi(e.attrs) + ","),
        e.props && (t += "domProps:" + pi(e.props) + ","),
        e.events && (t += Ga(e.events, !1) + ","),
        e.nativeEvents && (t += Ga(e.nativeEvents, !0) + ","),
        e.slotTarget && !e.slotScope && (t += "slot:" + e.slotTarget + ","),
        e.scopedSlots && (t += function(t, e, n) {
            var r = t.for || Object.keys(e).some(function(t) {
                t = e[t];
                return t.slotTargetDynamic || t.if || t.for || si(t)
            })
              , o = !!t.if;
            if (!r)
                for (var a = t.parent; a; ) {
                    if (a.slotScope && a.slotScope !== Pa || a.for) {
                        r = !0;
                        break
                    }
                    a.if && (o = !0),
                    a = a.parent
                }
            t = Object.keys(e).map(function(t) {
                return li(e[t], n)
            }).join(",");
            return "scopedSlots:_u([" + t + "]" + (r ? ",null,true" : "") + (!r && o ? ",null,false," + function(t) {
                for (var e = 5381, n = t.length; n; )
                    e = 33 * e ^ t.charCodeAt(--n);
                return e >>> 0
            }(t) : "") + ")"
        }(e, e.scopedSlots, n) + ","),
        e.model && (t += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"),
        e.inlineTemplate && (r = function() {
            var t = e.children[0];
            if (t && 1 === t.type)
                return "inlineTemplate:{render:function(){" + (t = ei(t, n.options)).render + "},staticRenderFns:[" + t.staticRenderFns.map(function(t) {
                    return "function(){" + t + "}"
                }).join(",") + "]}"
        }()) && (t += r + ","),
        t = t.replace(/,$/, "") + "}",
        e.dynamicAttrs && (t = "_b(" + t + ',"' + e.tag + '",' + pi(e.dynamicAttrs) + ")"),
        e.wrapData && (t = e.wrapData(t)),
        t = e.wrapListeners ? e.wrapListeners(t) : t
    }
    function si(t) {
        return 1 === t.type && ("slot" === t.tag || t.children.some(si))
    }
    function li(t, e) {
        var n, r = t.attrsMap["slot-scope"];
        return !t.if || t.ifProcessed || r ? t.for && !t.forProcessed ? ai(t, e, li) : (r = "function(" + (n = t.slotScope === Pa ? "" : String(t.slotScope)) + "){return " + ("template" === t.tag ? t.if && r ? "(" + t.if + ")?" + (ci(t, e) || "undefined") + ":undefined" : ci(t, e) || "undefined" : c(t, e)) + "}",
        "{key:" + (t.slotTarget || '"default"') + ",fn:" + r + (n ? "" : ",proxy:true") + "}") : oi(t, e, li, "null")
    }
    function ci(t, e, n, r, o) {
        var a, i, s, t = t.children;
        if (t.length)
            return a = t[0],
            1 === t.length && a.for && "template" !== a.tag && "slot" !== a.tag ? (i = n ? e.maybeComponent(a) ? ",1" : ",0" : "",
            (r || c)(a, e) + i) : (r = n ? function(t, e) {
                for (var n = 0, r = 0; r < t.length; r++) {
                    var o = t[r];
                    if (1 === o.type) {
                        if (di(o) || o.ifConditions && o.ifConditions.some(function(t) {
                            return di(t.block)
                        })) {
                            n = 2;
                            break
                        }
                        (e(o) || o.ifConditions && o.ifConditions.some(function(t) {
                            return e(t.block)
                        })) && (n = 1)
                    }
                }
                return n
            }(t, e.maybeComponent) : 0,
            s = o || ui,
            "[" + t.map(function(t) {
                return s(t, e)
            }).join(",") + "]" + (r ? "," + r : ""))
    }
    function di(t) {
        return void 0 !== t.for || "template" === t.tag || "slot" === t.tag
    }
    function ui(t, e) {
        return 1 === t.type ? c(t, e) : 3 === t.type && t.isComment ? "_e(" + JSON.stringify(t.text) + ")" : "_v(" + (2 === t.type ? t.expression : fi(JSON.stringify(t.text))) + ")"
    }
    function pi(t) {
        for (var e = "", n = "", r = 0; r < t.length; r++) {
            var o = t[r]
              , a = fi(o.value);
            o.dynamic ? n += o.name + "," + a + "," : e += '"' + o.name + '":' + a + ","
        }
        return e = "{" + e.slice(0, -1) + "}",
        n ? "_d(" + e + ",[" + n.slice(0, -1) + "])" : e
    }
    function fi(t) {
        return t.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
    }
    function mi(e, n) {
        try {
            return new Function(e)
        } catch (t) {
            return n.push({
                err: t,
                code: e
            }),
            D
        }
    }
    new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b");
    hi = function(t, e) {
        t = La(t.trim(), e),
        !1 !== e.optimize && qa(t, e),
        e = ei(t, e);
        return {
            ast: t,
            render: e.render,
            staticRenderFns: e.staticRenderFns
        }
    }
    ;
    vi = e;
    var hi, gi, vi, _i, yi, ot = {
        compile: xi,
        compileToFunctions: (_i = xi,
        yi = Object.create(null),
        function(t, e, n) {
            (e = k({}, e)).warn,
            delete e.warn;
            var r, o = e.delimiters ? String(e.delimiters) + t : t;
            return yi[o] || (t = _i(t, e),
            (e = {}).render = mi(t.render, r = []),
            e.staticRenderFns = t.staticRenderFns.map(function(t) {
                return mi(t, r)
            }),
            yi[o] = e)
        }
        )
    }, bi = ot.compileToFunctions;
    function xi(t, e) {
        var n = Object.create(vi)
          , r = []
          , o = [];
        if (e)
            for (var a in e.modules && (n.modules = (vi.modules || []).concat(e.modules)),
            e.directives && (n.directives = k(Object.create(vi.directives || null), e.directives)),
            e)
                "modules" !== a && "directives" !== a && (n[a] = e[a]);
        n.warn = function(t, e, n) {
            (n ? o : r).push(t)
        }
        ;
        t = hi(t.trim(), n);
        return t.errors = r,
        t.tips = o,
        t
    }
    function ki(t) {
        return (gi = gi || document.createElement("div")).innerHTML = t ? '<a href="\n"/>' : '<div a="\n"/>',
        0 < gi.innerHTML.indexOf("&#10;")
    }
    var wi = !!a && ki(!1)
      , Si = !!a && ki(!0)
      , Ci = t(function(t) {
        t = Gn(t);
        return t && t.innerHTML
    })
      , Ti = s.prototype.$mount;
    return s.prototype.$mount = function(t, e) {
        if ((t = t && Gn(t)) === document.body || t === document.documentElement)
            return this;
        var n = this.$options;
        if (!n.render) {
            var r, o, a = n.template;
            if (a)
                if ("string" == typeof a)
                    "#" === a.charAt(0) && (a = Ci(a));
                else {
                    if (!a.nodeType)
                        return this;
                    a = a.innerHTML
                }
            else
                t && (a = (r = t).outerHTML || ((o = document.createElement("div")).appendChild(r.cloneNode(!0)),
                o.innerHTML));
            a && (o = (r = bi(a, {
                outputSourceRange: !1,
                shouldDecodeNewlines: wi,
                shouldDecodeNewlinesForHref: Si,
                delimiters: n.delimiters,
                comments: n.comments
            }, this)).render,
            a = r.staticRenderFns,
            n.render = o,
            n.staticRenderFns = a)
        }
        return Ti.call(this, t, e)
    }
    ,
    s.compile = bi,
    s
});
var debounce = function(n, r) {
    var o = null;
    return function() {
        clearTimeout(o);
        var t = arguments
          , e = this;
        o = setTimeout(function() {
            n.apply(e, t)
        }, r)
    }
};
function iOS() {
    return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend"in document
}
function splitString(t, e) {
    return t.split(e)[1]
}
document.addEventListener("DOMContentLoaded", function() {
    var n, t, e = window.location.hostname, r = (console.log(e),
    document.querySelector(".forma-ux")), o = document.querySelector(".top-block"), a = document.getElementById("mainFormaSubmitBtn"), i = window.visualViewport.height;
    !function t() {
        var e;
        e = window.visualViewport.height,
        n = i - e,
        window.setTimeout(t, 50)
    }(),
    window.innerWidth < 768 && (document.querySelector(".forma-ux") ? (t = window.getComputedStyle(o).height,
    setInterval(function() {
        80 < n ? (document.querySelector(".form__text2").style = "opacity: 0;",
        document.querySelector(".form__text--terms").style = "opacity: 0;",
        r.style = "position: relative;",
        o.style = "height: auto;",
        setTimeout(function() {
            a.scrollIntoView(!1)
        }, 100)) : (document.querySelector(".form__text2").style = "opacity: 1;",
        document.querySelector(".form__text--terms").style = "opacity: 1;",
        r.style = "position: relative;",
        o.style.height = t)
    }, 50)) : setInterval(function() {
        var t = n;
        80 < t ? (console.log("resultDifferenceOfVv " + t),
        document.querySelector(".form__text").style = "display: none",
        document.querySelector(".form__text2").style = "display: none",
        setTimeout(function() {
            document.getElementById("mainFormaSubmitBtn").scrollIntoView(!1)
        }, 100)) : (document.querySelector(".form__text").style = "display: block",
        document.querySelector(".form__text2").style = "display: block")
    }, 50))
});
var SentryDomain, translations = {
    ru: {
        information: "Информация",
        privacyPolicy: "Политика конфиденциальности",
        userAgreement: "Пользовательское соглашение",
        oferta: "Публичная оферта",
        personalData: "Cогласие на обработку персональных данных",
        aboutUs: "О нас",
        contacts: "Контакты",
        aboutCompany: "О компании",
        socials: "Мы в соц.сетях",
        additionalInfo: "Дополнительно",
        partnership: "Стать партнером",
        anyQuestions: "Остались вопросы?",
        cookiesText: "Мы используем файлы cookie для персонализации сервисов и улучшения пользовательского опыта при использовании сайта. Если вы не согласны на их использование, поменяйте настройки браузера. Отключение cookie следует выполнить для каждого браузера и устройства, с помощью которого осуществляется вход на сайт.",
        catalogCourse: "Каталог курсов",
        catalogProfessionSkill: "Профессии и навыки",
        catalogSport: "Спорт",
        catalogSelfDev: "Саморазвитие",
        catalogNutrition: "Питание",
        catalogBeauty: "Красота и уход",
        login: "Войти",
        registration: "Регистрация",
        popupTitle: "Войдите в свой профиль",
        loginMail: "Ваша эл.почта",
        enterPass: "Введите пароль",
        toEnterPush: "Нажимая кнопку ",
        formBtnText: "Получить доступ",
        formErrorText: "Укажите корректный email",
        formCheckBox: "Нажимая кнопку ",
        modalTitle: "Что-то пошло не так.....",
        modalText: "Наша платформа поддерживает оплату только с банковских карт Visa и Mastercard.",
        modalText2: "Чтобы завершить оплату просим вас повторить попытку по кнопке ниже.",
        modalTitle2: "Пожалуйста!",
        modalText3: "Убедитесь, что вы используете банковскую карту Visa или Mastercard для оплаты.",
        modalBtn: "Открыть доступ",
        modalText4: "Cумма оплаты не изменится и составит "
    },
    en: {
        information: "Information",
        privacyPolicy: "Privacy Policy",
        userAgreement: "User Agreement",
        oferta: "Public offer",
        personalData: "Consent to the processing of personal data",
        aboutUs: "About Us",
        contacts: "Contacts",
        aboutCompany: "About the Company",
        socials: "Social media",
        additionalInfo: "Additional info",
        partnership: "Become a partner",
        anyQuestions: "Do you have any other questions?",
        cookiesText: "We use cookies to personalize our services and improve user experience. If you don’t agree with the use of cookies, please change your browser settings. If so, you need to disable cookies for each browser and device, with the help of which you enter the website.",
        catalogCourse: "Course catalog",
        catalogProfessionSkill: "Professions & Skills",
        catalogSport: "Sports",
        catalogSelfDev: "Self-development",
        catalogNutrition: "Food & Nutrition",
        catalogBeauty: "Beauty & Care",
        login: "Sign in",
        registration: "Registration",
        popupTitle: "Enter Profile",
        loginMail: "Your email",
        enterPass: "Enter Password",
        toEnterPush: "By clicking on the ",
        formBtnText: "Get access",
        formErrorText: "Enter the correct email",
        formCheckBox: "Pressing the button ",
        modalTitle: "Something went wrong.....",
        modalText: "Our platform only supports payment with Visa and Mastercard bank cards.",
        modalText2: "To complete the payment please try again using the button below.",
        modalTitle2: "Please!",
        modalText3: "Make sure you are using a Visa or Mastercard bank card for payment.",
        modalBtn: "Open access",
        modalText4: "The payment amount will not change and will be "
    },
    am: {
        information: "տեղեկատվություն",
        privacyPolicy: "Privacy Policy",
        userAgreement: "Օգտվելու կանոններ",
        oferta: "Հանրային առաջարկ",
        personalData: "Համաձայնություն անձնական տվյալների մշակմանը",
        aboutUs: "Մեր մասին",
        contacts: "Կոնտակտներ",
        aboutCompany: "Ընկերության մասին",
        socials: "Մենք սոցիալական ցանցերում ենք",
        additionalInfo: "Դարձեք գործընկեր",
        partnership: "Դարձեք գործընկեր",
        anyQuestions: "Հարցեր ունե՞ք։",
        cookiesText: "Մենք օգտագործում ենք թխուկներ՝ ծառայությունն անհատականացնելու և բարելավելու համար օգտագործողի փորձը կայքը օգտագործելիս: Եթե համաձայն չեք դրանք օգտագործելու համար փոխեք ձեր դիտարկիչի կարգավորումները: Թխուկների անջատում պետք է կատարվի յուրաքանչյուր բրաուզերի և սարքի համար՝ օգտագործելով որը մտնում եք կայք:",
        catalogCourse: "Տեղեկություն",
        catalogProfessionSkill: "Մասնագիտություններ և հմտություններ",
        catalogSport: "Սպորտ",
        catalogSelfDev: "Ինքնազարգացում",
        catalogNutrition: "Սնունդ և սնուցում",
        catalogBeauty: "Գեղեցկություն և խնամք",
        login: "Մուտք",
        registration: "Գրանցում",
        popupTitle: "Մուտք գործեք պրոֆիլ",
        loginMail: "Ձեր էլեկտրոնային հասցեն",
        enterPass: "մուտքագրեք գաղտնաբառը",
        toEnterPush: "By clicking on the ",
        formBtnText: "մուտք գործել",
        formErrorText: "Խնդրում ենք մուտքագրել գործող էլեկտրոնային հասցե",
        formCheckBox: "Կոճակի սեղմում ",
        modalTitle: "Something went wrong.....",
        modalText: "Our platform only supports payment with Visa and Mastercard bank cards.",
        modalText2: "To complete the payment please try again using the button below.",
        modalTitle2: "Please!",
        modalText3: "Make sure you are using a Visa or Mastercard bank card for payment.",
        modalBtn: "Open access",
        modalText4: "The payment amount will not change and will be "
    },
    ua: {
        information: "Інформація",
        privacyPolicy: "Політика конфіденційності",
        userAgreement: "Угода користувача",
        oferta: "Публічна оферта",
        personalData: "Згода на обробку персональних даних",
        aboutUs: "Про нас",
        contacts: "Контакти",
        aboutCompany: "Про компанію",
        socials: "Соціальні мережі",
        additionalInfo: "Додаткова інформація",
        partnership: "Стати партнером",
        anyQuestions: "Залишилися питання?",
        cookiesText: "Ми використовуємо файли cookie для персоналізації сервісів і поліпшення досвіду користувача при використанні сайту. Якщо ви не погоджуєтесь на їх використання, змініть налаштування браузера. Вимкнення cookie слід виконати для кожного браузера та пристрою, за допомогою якого здійснюється вхід на сайт.",
        catalogCourse: "Каталог курсів",
        catalogProfessionSkill: "Професії та навички",
        catalogSport: "Спорт",
        catalogSelfDev: "Саморозвиток",
        catalogNutrition: "Їжа та харчування",
        catalogBeauty: "Краса та догляд ",
        login: "Увійти",
        registration: "Реєстрація",
        popupTitle: "Увійти до профілю",
        loginMail: "Ваша електронна адреса",
        enterPass: "Введіть пароль",
        toEnterPush: "By clicking on the ",
        formBtnText: "Отримати доступ",
        formErrorText: "Введіть правильну адресу електронної пошти",
        formCheckBox: "Натискаючи кнопку ",
        modalTitle: "Something went wrong.....",
        modalText: "Our platform only supports payment with Visa and Mastercard bank cards.",
        modalText2: "To complete the payment please try again using the button below.",
        modalTitle2: "Please!",
        modalText3: "Make sure you are using a Visa or Mastercard bank card for payment.",
        modalBtn: "Open access",
        modalText4: "The payment amount will not change and will be "
    },
    es: {
        information: "Información",
        privacyPolicy: "Política de privacidad",
        userAgreement: "Acuerdo de usuario",
        oferta: "Oferta pública",
        personalData: "Consentimiento para el tratamiento de datos personales",
        aboutUs: "Quiénes somos",
        contacts: "Contactos",
        aboutCompany: "Sobre nosotros",
        socials: "Nosotros en las redes sociales",
        additionalInfo: "Más",
        partnership: "Hágase socio",
        anyQuestions: "¿Tiene alguna pregunta?",
        cookiesText: "Utilizamos cookies para personalizar los servicios y mejorar su experiencia al utilizar el sitio. Si no está de acuerdo con su uso, cambie la configuración de su navegador. Deberá desactivar las cookies en cada navegador y dispositivo que utilice para acceder al sitio.",
        catalogCourse: "Catálogo de cursos",
        catalogProfessionSkill: "Profesiones y Autodesarrollo",
        catalogSport: "Deporte",
        catalogSelfDev: "Profesiones y Autodesarrollo",
        catalogNutrition: "Nutrición",
        catalogBeauty: "Belleza y cuidados",
        login: "Entrada",
        registration: "Registro",
        popupTitle: "Acceda a su perfil",
        loginMail: "Tu correo electrónico",
        enterPass: "introducir la contraseña",
        toEnterPush: "Presionando un botón",
        formBtnText: "Tener acceso",
        formErrorText: "Por favor introduzca un correo electrónico valido",
        formCheckBox: "Presionando un botón",
        modalTitle: "Algo ha ido mal.....",
        modalText: "Nuestra plataforma sólo admite el pago con tarjetas bancarias Visa y Mastercard. ",
        modalText2: "Para completar el pago por favor inténtelo de nuevo usando el botón de abajo.",
        modalTitle2: "Por favor.",
        modalText3: "Asegúrese de que está utilizando una tarjeta bancaria Visa o Mastercard para el pago.",
        modalBtn: "Acceso abierto",
        modalText4: "El importe del pago no cambiará y será de "
    },
    fr: {
        information: "Informations",
        privacyPolicy: "Politique de confidentialité",
        userAgreement: "Accord d'utilisation",
        oferta: "Offre publique",
        personalData: "Consentement au traitement des données personnelles",
        aboutUs: "A propos de nous",
        contacts: "Contacts",
        aboutCompany: "A propos de l'entreprise",
        socials: "Nous dans les réseaux sociaux",
        additionalInfo: "En outre",
        partnership: "Devenir partenaire",
        anyQuestions: "Des questions subsistent?",
        cookiesText: "Nous utilisons des cookies pour personnaliser les services et améliorer votre expérience lors de l'utilisation du site. Si vous n'acceptez pas leur utilisation, veuillez modifier les paramètres de votre navigateur. Vous devez désactiver les cookies pour chaque navigateur et appareil que vous utilisez pour accéder au site.",
        catalogCourse: "Catalogue des cours",
        catalogProfessionSkill: "Professions et compétences",
        catalogSport: "Le sport",
        catalogSelfDev: "Développement personnel",
        catalogNutrition: "La nutrition",
        catalogBeauty: "Beauté et toilettage",
        login: "Se connecter",
        registration: "Inscription",
        popupTitle: "Connectez-vous à votre profil",
        loginMail: "Votre email",
        enterPass: "Entrez votre mot de passe",
        toEnterPush: "En appuyant sur le bouton ",
        formBtnText: "Obtenir l'accès",
        formErrorText: "Veuillez fournir une adresse électronique valide",
        formCheckBox: "En appuyant sur le bouton ",
        modalTitle: "Something went wrong.....",
        modalText: "Our platform only supports payment with Visa and Mastercard bank cards.",
        modalText2: "To complete the payment please try again using the button below.",
        modalTitle2: "Please!",
        modalText3: "Make sure you are using a Visa or Mastercard bank card for payment.",
        modalBtn: "Open access",
        modalText4: "The payment amount will not change and will be "
    },
    de: {
        information: "Information",
        privacyPolicy: "Datenschutzrichtlinie",
        userAgreement: "User Agreement",
        oferta: "Public offer",
        personalData: "Consent to the processing of personal data",
        aboutUs: "About Us",
        contacts: "Contacts",
        aboutCompany: "About the Company",
        socials: "Social media",
        additionalInfo: "Additional info",
        partnership: "Become a partner",
        anyQuestions: "Do you have any other questions?",
        cookiesText: "We use cookies to personalize our services and improve user experience. If you don’t agree with the use of cookies, please change your browser settings. If so, you need to disable cookies for each browser and device, with the help of which you enter the website.",
        catalogCourse: "Course catalog",
        catalogProfessionSkill: "Professions & Skills",
        catalogSport: "Sports",
        catalogSelfDev: "Self-development",
        catalogNutrition: "Food & Nutrition",
        catalogBeauty: "Beauty & Care",
        login: "Sign in",
        registration: "Registration",
        popupTitle: "Enter Profile",
        loginMail: "Your email",
        enterPass: "Enter Password",
        toEnterPush: "By clicking on the ",
        formBtnText: "Get access",
        formErrorText: "Enter the correct email",
        formCheckBox: "Pressing the button ",
        modalTitle: "Etwas ist schief gelaufen.....",
        modalText: "Unsere Plattform unterstützt nur Zahlungen mit den Bankkarten Visa und Mastercard.",
        modalText2: "Um die Zahlung abzuschließen, versuchen Sie es bitte erneut über die Schaltfläche unten.",
        modalTitle2: "Bitte!",
        modalText3: "Vergewissern Sie sich, dass Sie eine Visa- oder Mastercard-Bankkarte für die Zahlung verwenden.",
        modalBtn: "Offener Zugang",
        modalText4: "Der Zahlungsbetrag ändert sich nicht und beträgt "
    },
    pl: {
        information: "Informacje",
        privacyPolicy: "Polityka prywatności",
        userAgreement: "Umowa użytkownika",
        oferta: "Oferta publiczna",
        personalData: "Zgoda na przetwarzanie danych osobowych",
        aboutUs: "O nas",
        contacts: "Kontakty",
        aboutCompany: "O firmie",
        socials: "Jesteśmy w sieciach społecznościowych",
        additionalInfo: "Dodatkowo",
        partnership: "Zostań partnerem",
        anyQuestions: "Jakieś pytania?",
        cookiesText: "Używamy plików cookie w celu personalizacji usług i poprawy komfortu korzystania z witryny. Jeśli nie zgadzasz się na ich użycie, zmień ustawienia przeglądarki. Należy wyłączyć pliki cookie dla każdej przeglądarki i urządzenia używanego do uzyskiwania dostępu do witryny.",
        catalogCourse: "Katalog kursów",
        catalogProfessionSkill: "Zawody i umiejętności",
        catalogSport: "Sport",
        catalogSelfDev: "Samorozwój",
        catalogNutrition: "Odżywianie",
        catalogBeauty: "Uroda i pielęgnacja",
        login: "Zaloguj się",
        registration: "Rejestracja",
        popupTitle: "Zaloguj się do swojego profilu",
        loginMail: "Twój adres e-mail",
        enterPass: "Wprowadź hasło",
        toEnterPush: "Naciskając przycisk ",
        formBtnText: "Uzyskanie dostępu",
        formErrorText: "Podaj prawidłowy adres e-mail",
        formCheckBox: "Naciskając przycisk ",
        modalTitle: "Something went wrong.....",
        modalText: "Our platform only supports payment with Visa and Mastercard bank cards.",
        modalText2: "To complete the payment please try again using the button below.",
        modalTitle2: "Please!",
        modalText3: "Make sure you are using a Visa or Mastercard bank card for payment.",
        modalBtn: "Open access",
        modalText4: "The payment amount will not change and will be "
    },
    kz: {
        information: "Ақпарат",
        privacyPolicy: "Құпиялылық саясаты",
        userAgreement: "Қолдану ережелері",
        oferta: "Қоғамдық ұсыныс",
        personalData: "Жеке деректерді өңдеуге келісім беру",
        aboutUs: "Біз туралы",
        contacts: "Контактілер",
        aboutCompany: "Компания жайлы",
        socials: "Біз әлеуметтік желілердеміз",
        additionalInfo: "Қосымша",
        partnership: "Серіктес бол",
        anyQuestions: "Сұрақтарыңыз қалды ма?",
        cookiesText: "Біз cookie файлдарын қызметтерді жекелендіру және сайтты пайдалану кезінде пайдаланушы тәжірибесін жақсарту үшін пайдаланамыз. Оларды пайдалануға келіспесеңіз, шолғыш параметрлерін өзгертіңіз. Сайтқа кіру үшін пайдаланылатын әрбір браузер мен құрылғы үшін cookie файлдары өшірілуі керек.",
        catalogCourse: "Курс каталогы",
        catalogProfessionSkill: "Мамандықтар мен дағдылар",
        catalogSport: "Спорт",
        catalogSelfDev: "Өзін-өзі дамыту",
        catalogNutrition: "Тамақтану",
        catalogBeauty: "Сұлулық және қамқорлық",
        login: "Кіру үшін",
        registration: "Тіркеу",
        popupTitle: "Профильге кіру",
        loginMail: "Сіздің электрондық поштаңыз",
        enterPass: "Құпия сөзді еңгізіңіз",
        toEnterPush: "Түймені басу",
        formBtnText: "Кіру алу",
        formErrorText: "Дұрыс электрондық поштаны енгізіңіз",
        formCheckBox: "Түймені басу",
        modalTitle: "Бірдеңе дұрыс болмады...",
        modalText: "Біздің платформа тек Visa және Mastercard банк карталарынан төлемдерді қолдайды.",
        modalText2: "Төлемді аяқтау үшін төмендегі түймені пайдаланып әрекетті қайталаңыз.",
        modalTitle2: "Өтінемін!",
        modalText3: "Төлем үшін Visa немесе Mastercard пайдаланғаныңызға көз жеткізіңіз.",
        modalBtn: "Қолжетімділікті ашу үшін",
        modalText4: "Төлем сомасы өзгермейді және болады"
    }
}, app = (Vue.component("forma-tp", {
    data: function() {
        return {
            checkbox: !1,
            email: null,
            error: !1,
            isBtnLoader: !1,
            componentUpdated: !1,
            isHeadScript: !1,
            modalLink: "",
            isSD: !1
        }
    },
    props: ["formId", "btnText", "inputText", "btnContent", "customBtn", "html", "emailId", "product"],
    template: '\n     <form :class="\'form form--\' + formId" :id="formId" action="/order" method="POST" @submit.prevent="emailRequestProcessing(email)">\n            <p class="form__text form__text--top" v-html="product.secondCheckbox"></p>\n            <div class="input-wrap" v-if="!isSD">\n                <input\n                class="form__email"\n                placeholder="Введите ваш e-mail"\n                name="order[email]"\n                :id=" emailId ? emailId : \'email\'"\n                type="email"\n                v-model="email">\n            </div>\n            <div class="input-wrap" v-else>\n                <input\n                class="form__email"\n                placeholder="E-mail"\n                name="order[email]"\n                :id=" emailId ? emailId : \'email\'"\n                type="email"\n                v-model="email">\n            </div>\n            <input type="hidden" id="js-product-id" name="order[products][]" :value="product.id">\n            <p class="form__error" v-show="error">{{ translations[product.options.availableLanguages].formErrorText }}</p>\n            <div class="form__content">\n                <button v-if="customBtn" id="mainFormaSubmitBtn" class="form__button button button--form" :class="{\'form__button-loader\': isBtnLoader}" :content="btnContent" type="submit" :disabled="isBtnLoader" v-html="html"></button>\n                <button v-else id="mainFormaSubmitBtn" class="form__button button button--form" :class="{\'form__button-loader\': isBtnLoader}" :content="btnContent" type="submit" :disabled="isBtnLoader" v-html="">{{ btnText? btnText : translations[product.options.availableLanguages].formBtnText }}</button>\n                <p class="form__text form__text--bottom" v-html="product.secondCheckbox"></p>\n                <p class="form__text2">{{ translations[product.options.availableLanguages].toEnterPush }} "{{ btnText? btnText : translations[product.options.availableLanguages].formBtnText }}" <span v-html="product.firstCheckbox"></span></p>\n            </div>\n     </form>',
    mounted: function() {
        var t = this
          , e = this.getUtmValue("email");
        e && (this.email = e),
        window.location.hostname.includes("skilldeposit") && (this.isSD = !0),
        localStorage.paymentData && (this.isHeadScript = !0,
        (e = document.createElement("script")).src = "https://widget.cloudpayments.ru/bundles/cloudpayments",
        document.head.append(e),
        e.onload = function() {
            t.openCloudPayment(JSON.parse(localStorage.paymentData)),
            localStorage.removeItem("paymentData")
        }
        )
    },
    computed: {
        isEmailValid: function() {
            var t;
            this.email && (t = this.email.toLowerCase().replace(/^(0|\+44) */, ""));
            return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,20}$/.test(t)
        },
        isEmailError: function() {
            return !this.isEmailValid
        }
    },
    methods: {
        getUtmValue: function(t) {
            var e = window.location.search;
            return new URLSearchParams(e).get(t)
        },
        sendForm: function(t, e) {
            var n, i = this, r = {
                "order[email]": t,
                "order[products][]": this.product.id,
                "order[lang]": this.product.options.availableLanguages
            }, o = ("sberbank" === e && (r.paymentSystem = "sberbank"),
            "CloudPayments" === e && (r.paymentSystem = "CloudPayments"),
            t.toLowerCase().replace(/^(0|\+44) */, ""),
            []);
            for (n in r) {
                var a = encodeURIComponent(n)
                  , s = encodeURIComponent(r[n]);
                o.push(a + "=" + s)
            }
            o = o.join("&"),
            fetch("order", {
                method: "POST",
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: o
            }).then(function(t) {
                return t.json()
            }).then(function(t) {
                switch ("ERR_PRICE_CHANGED" === (null == t ? void 0 : t.error) && i.showModalAgain(),
                t.paymentSystem) {
                case "CloudPayments":
                    var e;
                    i.isHeadScript ? i.openCloudPayment(t) : (i.isHeadScript = !0,
                    (e = document.createElement("script")).src = "https://widget.cloudpayments.ru/bundles/cloudpayments",
                    document.head.append(e),
                    e.onload = function() {
                        i.openCloudPayment(t)
                    }
                    );
                    break;
                case "redirect":
                    window.location.href = t.data.url;
                    break;
                case "form":
                    var n, r = t.data.params, o = document.createElement("form");
                    for (n in o.action = t.data.url,
                    o.method = t.data.method,
                    r) {
                        var a = document.createElement("input");
                        a.setAttribute("type", "hidden"),
                        a.setAttribute("name", n),
                        a.setAttribute("value", r[n]),
                        o.appendChild(a)
                    }
                    document.body.append(o),
                    o.submit()
                }
                "user_with_active_subscription_exists" === (null == t ? void 0 : t.data.status) && i.showModalAgain()
            }).catch(function(t) {
                console.log(t)
            }),
            setTimeout(function() {
                document.querySelector(".modal-again--options").classList.remove("modal-again--active")
            }, 1e3),
            setTimeout(function() {
                i.isBtnLoader = !1
            }, 7e3)
        },
        openCloudPayment: function(n) {
            new cp.CloudPayments({
                language: null == (t = n.params) ? void 0 : t.language,
                googlePaySupport: !1
            }).pay(n.params.paymentType, n.data, {
                onSuccess: n.url.success,
                onFail: function() {
                    clearInterval(o)
                }
            });
            var t, r = 0, o = setInterval(function() {
                fetch("/order/status/".concat(n.data.invoiceId)).then(function(t) {
                    return t.json()
                }).then(function(t) {
                    var e;
                    window.location.hostname.includes("skilldeposit") ? (999 < ++r && clearInterval(o),
                    "error" === t.status && ("STYLE" === (e = (t = document.querySelector("body")).lastElementChild).tagName && t.removeChild(e),
                    clearInterval(o),
                    localStorage.setItem("paymentData", JSON.stringify(n)))) : clearInterval(o)
                }).catch(function(t) {
                    return console.log(t)
                })
            }, 2e3)
        },
        showModalAgain: function() {
            var t = document.createElement("div");
            t.innerHTML = '\n            <div class="modal-again">\n                <div class="modal-again__overlay"></div>\n                <div class="modal-again__block">\n                    <div class="modal-again-body">\n                        <div class="modal-again-body__img-wrap">\n                            <picture>\n                                <source srcset="sys/js/img/modal-again.webp"/>\n                                <img class="modal-again-body__img" src="sys/js/img/modal-again.png" alt="perplexed-baba" width="500" height="278"/>\n                            </picture>\n                            <button class="modal-again-body__cross" type="button"/>\n                        </div>\n                        <p class="modal-again-body__title">Рады видеть вас снова!</p>\n                        <p class="modal-again-body__text-again">\n                            Ранее вы проходили регистрацию на платформе TutorPlace.\n                            Мы направили письмо для доступа к платформе без ввода пароля на вашу почту.\n                        </p>\n                        <div class="modal-again-body__btn-wrap">\n                            <p class="modal-again-body__btn-wrap-text">Восстановить пароль или авторизоваться, вы сможете&nbsp;по&nbsp;ссылке</p>\n                            <a class="modal-again-body__button" href=\'https://client.tutorplace.ru/login\'>\n                                <span>Авторизация</span>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>',
            document.querySelector("body").append(t),
            document.body.classList.add("modal-again-active"),
            document.querySelector(".modal-again").classList.add("modal-again--active"),
            document.querySelector(".modal-again-body__cross").addEventListener("click", function() {
                document.body.classList.remove("modal-again-active"),
                document.querySelector(".modal-again").classList.remove("modal-again--active")
            })
        },
        emailRequestProcessing: function(t) {
            var i = this;
            if (this.isEmailValid)
                if (this.error = !1,
                console.log("isShowModal - " + this.$parent.isShowModalMultiPayment),
                this.$parent.isShowModalMultiPayment)
                    this.showModalOptionPay(t),
                    console.log(" Show modal! ");
                else {
                    console.log(" Hide modal! "),
                    this.isBtnLoader = !0,
                    t.toLowerCase().replace(/^(0|\+44) */, "");
                    var e, n = {
                        "order[email]": t,
                        "order[products][]": this.product.id,
                        "order[lang]": this.product.options.availableLanguages
                    }, r = [];
                    for (e in n) {
                        var o = encodeURIComponent(e)
                          , a = encodeURIComponent(n[e]);
                        r.push(o + "=" + a)
                    }
                    r = r.join("&"),
                    fetch("order", {
                        method: "POST",
                        headers: {
                            "X-Requested-With": "XMLHttpRequest",
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: r
                    }).then(function(t) {
                        return t.json()
                    }).then(function(t) {
                        switch ("ERR_PRICE_CHANGED" === (null == t ? void 0 : t.error) && i.showModalAgain(),
                        t.paymentSystem) {
                        case "CloudPayments":
                            var e;
                            i.isHeadScript ? i.openCloudPayment(t) : (i.isHeadScript = !0,
                            (e = document.createElement("script")).src = "https://widget.cloudpayments.ru/bundles/cloudpayments",
                            document.head.append(e),
                            e.onload = function() {
                                i.openCloudPayment(t)
                            }
                            );
                            break;
                        case "redirect":
                            window.location.href = t.data.url;
                            break;
                        case "form":
                            var n, r = t.data.params, o = document.createElement("form");
                            for (n in o.action = t.data.url,
                            o.method = t.data.method,
                            r) {
                                var a = document.createElement("input");
                                a.setAttribute("type", "hidden"),
                                a.setAttribute("name", n),
                                a.setAttribute("value", r[n]),
                                o.appendChild(a)
                            }
                            document.body.append(o),
                            o.submit()
                        }
                        "user_with_active_subscription_exists" === (null == t ? void 0 : t.data.status) && i.showModalAgain()
                    }).catch(function(t) {
                        console.log(t)
                    }),
                    setTimeout(function() {
                        i.isBtnLoader = !1
                    }, 7e3)
                }
            else
                this.error = !0
        },
        showModalOptionPay: function(t) {
            var e = this
              , n = document.createElement("div");
            n.innerHTML = '\n                <div class="modal-again modal-again--options">\n                    <div class="modal-again__overlay"></div>\n                    <div class="modal-again__block">\n                        <div class="modal-again-body">\n                            <div class="modal-again__top">\n                                <p class="modal-again__text">Выберите способ оплаты</p>\n                            </div>\n                            <div class="modal-again-body__img-wrap">\n                                <button class="button button__option button__tinkoff" type="button">\n                                    <svg width="102" height="23" viewBox="0 0 102 23" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                    <path d="M8.85765 7.98796V6.53196H0.639648V7.98796H3.91565V16.5H5.58165V7.98796H8.85765ZM11.6215 8.05796V6.53196H10.0256V8.05796H11.6215ZM11.6215 16.5V9.38796H10.0256V16.5H11.6215ZM17.3302 9.21996C16.3923 9.21996 15.6502 9.66796 15.2022 10.312H15.1742V9.38796H13.6622V16.5H15.2582V12.552C15.2582 11.194 15.9722 10.508 16.8822 10.508C17.7782 10.508 18.3242 11.012 18.3242 12.286V16.5H19.9202V12.146C19.9202 10.2 18.9403 9.21996 17.3302 9.21996ZM28.3047 16.5L25.0287 12.636L27.9688 9.38796H26.1067L23.5167 12.3H23.4887V6.53196H21.8927V16.5H23.4887V13.056H23.5167L26.2887 16.5H28.3047ZM31.8757 9.17796C29.7197 9.17796 28.3617 10.634 28.3617 12.944C28.3617 15.254 29.7197 16.71 31.8757 16.71C34.0317 16.71 35.3757 15.254 35.3757 12.944C35.3757 10.634 34.0317 9.17796 31.8757 9.17796ZM31.8757 10.438C33.0098 10.438 33.7097 11.404 33.7097 12.944C33.7097 14.484 33.0098 15.45 31.8757 15.45C30.7417 15.45 30.0417 14.484 30.0417 12.944C30.0417 11.404 30.7417 10.438 31.8757 10.438ZM43.9739 7.65196C44.1138 7.65196 44.2678 7.67996 44.3518 7.70796V6.53196C44.1558 6.48996 43.8058 6.43396 43.5258 6.43396C42.1258 6.43396 41.3699 7.16196 41.3699 8.63196V9.38796H38.8638V8.81396C38.8638 7.97396 39.1998 7.65196 39.8858 7.65196C40.0258 7.65196 40.1798 7.67996 40.2778 7.70796V6.53196C40.0678 6.48996 39.7318 6.43396 39.4379 6.43396C38.0378 6.43396 37.2818 7.16196 37.2818 8.63196V9.38796H36.0779V10.606H37.2818V16.5H38.8638V10.606H41.3699V16.5H42.9519V10.606H44.3238V9.38796H42.9519V8.81396C42.9519 7.97396 43.2878 7.65196 43.9739 7.65196Z" fill="black" fill-opacity="0.8"/>\n                                    <mask id="mask0_26785_60792" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="51" y="1" width="51" height="21">\n                                    <path d="M101.5 1H51.5V22H101.5V1Z" fill="white"/>\n                                    </mask>\n                                    <g mask="url(#mask0_26785_60792)">\n                                    <path d="M91.1117 1H61.8883C56.151 1 51.5 5.70101 51.5 11.5C51.5 17.299 56.151 22 61.8883 22H91.1117C96.849 22 101.5 17.299 101.5 11.5C101.5 5.70101 96.849 1 91.1117 1Z" fill="#303030"/>\n                                    <path d="M77.1918 8.38977H73.0459V15.0825H75.0625V13.2821H77.1901C77.6902 13.2821 78.1772 13.2673 78.6511 13.1137C79.5695 12.818 80.2509 11.9888 80.2509 10.864C80.2509 9.73923 79.5825 8.92328 78.6788 8.60119C78.1788 8.41785 77.7049 8.38977 77.1901 8.38977H77.1918ZM75.0641 11.708V10.0068H76.9009C77.2898 10.0068 77.5137 10.0498 77.6935 10.1191C78.0137 10.2463 78.1657 10.5403 78.1657 10.8508C78.1657 11.1877 77.9843 11.5115 77.6379 11.6238C77.4712 11.68 77.2767 11.708 76.9009 11.708H75.0641Z" fill="white"/>\n                                    <path d="M83.1442 12.6363L84.1034 9.93744H84.257L85.2163 12.6363H83.1442ZM82.6441 14.113H85.7049L86.0938 15.0825H88.3604L85.6477 8.38977H82.698L79.9854 15.0825H82.2666L82.6425 14.113H82.6441Z" fill="white"/>\n                                    <path d="M93.269 8.38977L91.6283 11.4405H91.558L89.9026 8.38977H87.5527L90.5432 13.3102V15.0825H92.63V13.1417L95.4685 8.38977H93.269Z" fill="white"/>\n                                    <path d="M57.5332 6.40442H68.7369V12.0996C68.7369 13.5597 67.9656 14.9091 66.7155 15.6392L63.1351 17.7286L59.5546 15.6392C58.3029 14.9091 57.5332 13.5597 57.5332 12.0996V6.40442Z" fill="#FFDD2D"/>\n                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M60.6071 9.40234V11.173C60.8473 10.8988 61.282 10.7138 61.7804 10.7138H62.3213V12.7735C62.3213 13.3219 62.1743 13.8009 61.9553 14.0652H64.3101C64.0927 13.8009 63.9457 13.3219 63.9457 12.7752V10.7155H64.4866C64.985 10.7155 65.4213 10.9005 65.6599 11.1746V9.404H60.6055L60.6071 9.40234Z" fill="#333333"/>\n                                    </g>\n                                    </svg>\n                                </button>\n                                <button class="button button__option button__sber" type="button">\n                                    <picture>\n                                        <source srcSet="sys/js/img/sber-logo-card.svg"/>\n                                        <img class="modal-fail__img" src="sys/js/img/sber-logo-card.svg" alt="MasterCard" width="114" height="25"/>\n                                    </picture>\n                                </button>\n                                <button class="button button__option button__card" type="button">\n                                    <span class="button__option--card">\n                                        <picture>\n                                            <source srcSet="sys/js/img/master-card.svg"/>\n                                            <img class="modal-fail__img" src="sys/js/img/master-card.svg" alt="MasterCard" width="33" height="20"/>\n                                        </picture>\n                                        <picture>\n                                            <source srcSet="sys/js/img/visa-card.svg"/>\n                                            <img class="modal-fail__img" src="sys/js/img/visa-card.svg" alt="Visa" width="50" height="15"/>\n                                        </picture>\n                                        <picture>\n                                            <source srcSet="sys/js/img/mir-card.svg"/>\n                                            <img class="modal-fail__img" src="sys/js/img/mir-card.svg" alt="Mir" width="52" height="15"/>\n                                        </picture>\n                                    </span>\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>',
            document.querySelector("body").append(n),
            document.body.classList.add("modal-again-active"),
            document.querySelector(".modal-again").classList.add("modal-again--active"),
            this.$parent.availablePaymentSystems.sberbank && document.querySelector(".button__sber").classList.add("show"),
            this.$parent.availablePaymentSystems.CloudPayments && document.querySelector(".button__tinkoff").classList.add("show"),
            document.querySelector(".button__card").addEventListener("click", function() {
                return e.sendForm(t)
            }),
            document.querySelector(".button__sber").addEventListener("click", function() {
                return e.sendForm(t, "sberbank")
            }),
            document.querySelector(".button__tinkoff").addEventListener("click", function() {
                return e.sendForm(t, "CloudPayments")
            })
        }
    },
    watch: {
        email: debounce(function() {
            var t = this.email
              , e = (t.replace(/^(0|\+44) */, ""),
            t.toLowerCase(),
            window.location.hostname)
              , e = window.location.protocol + "//".concat(e) + ("localhost" === e ? ":" + window.location.port : "");
            /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(t) && fetch(e + "/email?email=".concat(t), {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            }).catch(function(t) {
                console.log(t)
            })
        }, 500)
    }
}),
Vue.component("forma-terms", {
    data: function() {
        return {
            componentUpdated: !1,
            isHeadScript: !1,
            modalLink: ""
        }
    },
    props: ["btnText", "inputText", "btnContent", "customBtn", "html", "emailId", "product"],
    template: '\n     <div class="forma-terms">\n        <p class="form__text form__text--terms" v-html="product.secondCheckbox"></p>\n        <div class="form__content">\n            <p class="form__text2">{{ translations[product.options.availableLanguages].toEnterPush }} "{{ btnText? btnText : translations[product.options.availableLanguages].formBtnText }}" <span v-html="product.firstCheckbox"></span></p>\n        </div>\n     </div>'
}),
Vue.component("forma-ux", {
    data: function() {
        return {
            checkbox: !1,
            email: null,
            error: !1,
            isBtnLoader: !1,
            componentUpdated: !1,
            isHeadScript: !1,
            modalLink: "",
            isSD: !1
        }
    },
    props: ["formId", "btnText", "inputText", "btnContent", "customBtn", "html", "emailId", "product"],
    template: '\n     <form :class="\'form forma-ux form--\' + formId" :id="formId" action="/order" method="POST" @submit.prevent="emailRequestProcessing(email)">\n            <p class="form__text form__text--ux" v-html="product.secondCheckbox"></p>\n            <div class="input-wrap" v-if="!isSD">\n                <input\n                class="form__email"\n                placeholder="Введите ваш e-mail"\n                name="order[email]"\n                :id=" emailId ? emailId : \'email\'"\n                type="email"\n                v-model="email">\n            </div>\n            <div class="input-wrap" v-else>\n                <input\n                class="form__email"\n                placeholder="E-mail"\n                name="order[email]"\n                :id=" emailId ? emailId : \'email\'"\n                type="email"\n                v-model="email">\n            </div>\n            <input type="hidden" id="js-product-id" name="order[products][]" :value="product.id">\n            <p class="form__error" v-show="error">{{ translations[product.options.availableLanguages].formErrorText }}</p>\n            <div class="form__content">\n                <button v-if="customBtn" id="mainFormaSubmitBtn" class="form__button button button--form" :class="{\'form__button-loader\': isBtnLoader}" :content="btnContent" type="submit" :disabled="isBtnLoader" v-html="html"></button>\n                <button v-else id="mainFormaSubmitBtn" class="form__button button button--form" :class="{\'form__button-loader\': isBtnLoader}" :content="btnContent" type="submit" :disabled="isBtnLoader" v-html="">{{ btnText? btnText : translations[product.options.availableLanguages].formBtnText }}</button>\n            </div>\n     </form>',
    mounted: function() {
        var t, e = this;
        localStorage.paymentData && (this.isHeadScript = !0,
        (t = document.createElement("script")).src = "https://widget.cloudpayments.ru/bundles/cloudpayments",
        document.head.append(t),
        t.onload = function() {
            e.openCloudPayment(JSON.parse(localStorage.paymentData)),
            localStorage.removeItem("paymentData")
        }
        ),
        window.location.hostname.includes("skilldeposit") && (this.isSD = !0)
    },
    computed: {
        isEmailValid: function() {
            var t;
            this.email && (t = this.email.toLowerCase().replace(/^(0|\+44) */, ""));
            return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,20}$/.test(t)
        },
        isEmailError: function() {
            return !this.isEmailValid
        }
    },
    methods: {
        sendForm: function(t, e) {
            var n, i = this, r = {
                "order[email]": t,
                "order[products][]": this.product.id,
                "order[lang]": this.product.options.availableLanguages
            }, o = ("sberbank" === e && (r.paymentSystem = "sberbank"),
            "CloudPayments" === e && (r.paymentSystem = "CloudPayments"),
            t.toLowerCase().replace(/^(0|\+44) */, ""),
            []);
            for (n in r) {
                var a = encodeURIComponent(n)
                  , s = encodeURIComponent(r[n]);
                o.push(a + "=" + s)
            }
            o = o.join("&"),
            fetch("order", {
                method: "POST",
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: o
            }).then(function(t) {
                return t.json()
            }).then(function(t) {
                switch ("ERR_PRICE_CHANGED" === (null == t ? void 0 : t.error) && i.showModalAgain(),
                t.paymentSystem) {
                case "CloudPayments":
                    var e;
                    i.isHeadScript ? i.openCloudPayment(t) : (i.isHeadScript = !0,
                    (e = document.createElement("script")).src = "https://widget.cloudpayments.ru/bundles/cloudpayments",
                    document.head.append(e),
                    e.onload = function() {
                        i.openCloudPayment(t)
                    }
                    );
                    break;
                case "redirect":
                    window.location.href = t.data.url;
                    break;
                case "form":
                    var n, r = t.data.params, o = document.createElement("form");
                    for (n in o.action = t.data.url,
                    o.method = t.data.method,
                    r) {
                        var a = document.createElement("input");
                        a.setAttribute("type", "hidden"),
                        a.setAttribute("name", n),
                        a.setAttribute("value", r[n]),
                        o.appendChild(a)
                    }
                    document.body.append(o),
                    o.submit()
                }
                "user_with_active_subscription_exists" === (null == t ? void 0 : t.data.status) && i.showModalAgain()
            }).catch(function(t) {
                console.log(t)
            }),
            setTimeout(function() {
                document.querySelector(".modal-again--options").classList.remove("modal-again--active")
            }, 1e3),
            setTimeout(function() {
                i.isBtnLoader = !1
            }, 7e3)
        },
        openCloudPayment: function(n) {
            new cp.CloudPayments({
                language: null == (t = n.params) ? void 0 : t.language,
                googlePaySupport: !1
            }).pay(n.params.paymentType, n.data, {
                onSuccess: n.url.success,
                onFail: function() {
                    clearInterval(o)
                }
            });
            var t, r = 0, o = setInterval(function() {
                fetch("/order/status/".concat(n.data.invoiceId)).then(function(t) {
                    return t.json()
                }).then(function(t) {
                    var e;
                    window.location.hostname.includes("skilldeposit") ? (999 < ++r && clearInterval(o),
                    "error" === t.status && ("STYLE" === (e = (t = document.querySelector("body")).lastElementChild).tagName && t.removeChild(e),
                    clearInterval(o),
                    localStorage.setItem("paymentData", JSON.stringify(n)))) : clearInterval(o)
                }).catch(function(t) {
                    return console.log(t)
                })
            }, 2e3)
        },
        showModalAgain: function() {
            var t = document.createElement("div");
            t.innerHTML = '\n            <div class="modal-again">\n                <div class="modal-again__overlay"></div>\n                <div class="modal-again__block">\n                    <div class="modal-again-body">\n                        <div class="modal-again-body__img-wrap">\n                            <picture>\n                                <source srcset="sys/js/img/modal-again.webp"/>\n                                <img class="modal-again-body__img" src="sys/js/img/modal-again.png" alt="perplexed-baba" width="500" height="278"/>\n                            </picture>\n                            <button class="modal-again-body__cross" type="button"/>\n                        </div>\n                        <p class="modal-again-body__title">Рады видеть вас снова!</p>\n                        <p class="modal-again-body__text-again">\n                            Ранее вы проходили регистрацию на платформе TutorPlace.\n                            Мы направили письмо для доступа к платформе без ввода пароля на вашу почту.\n                        </p>\n                        <div class="modal-again-body__btn-wrap">\n                            <p class="modal-again-body__btn-wrap-text">Восстановить пароль или авторизоваться, вы сможете&nbsp;по&nbsp;ссылке</p>\n                            <a class="modal-again-body__button" href=\'https://client.tutorplace.ru/login\'>\n                                <span>Авторизация</span>\n                            </a>\n                        </div>\n                    </div>        \n                </div>\n            </div>',
            document.querySelector("body").append(t),
            document.body.classList.add("modal-again-active"),
            document.querySelector(".modal-again").classList.add("modal-again--active"),
            document.querySelector(".modal-again-body__cross").addEventListener("click", function() {
                document.body.classList.remove("modal-again-active"),
                document.querySelector(".modal-again").classList.remove("modal-again--active")
            })
        },
        closeModal: function() {
            document.body.classList.remove("modal-wrong-active"),
            document.querySelector(".modal-wrong").classList.remove("modal-wrong--active")
        },
        emailRequestProcessing: function(t) {
            var i = this;
            if (this.isEmailValid)
                if (this.error = !1,
                console.log("isShowModal - " + this.$parent.isShowModalMultiPayment),
                this.$parent.isShowModalMultiPayment)
                    this.showModalOptionPay(t),
                    console.log(" Show modal! ");
                else {
                    console.log(" Hide modal! "),
                    this.isBtnLoader = !0,
                    t.toLowerCase().replace(/^(0|\+44) */, "");
                    var e, n = {
                        "order[email]": t,
                        "order[products][]": this.product.id,
                        "order[lang]": this.product.options.availableLanguages
                    }, r = [];
                    for (e in n) {
                        var o = encodeURIComponent(e)
                          , a = encodeURIComponent(n[e]);
                        r.push(o + "=" + a)
                    }
                    r = r.join("&"),
                    fetch("order", {
                        method: "POST",
                        headers: {
                            "X-Requested-With": "XMLHttpRequest",
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: r
                    }).then(function(t) {
                        return t.json()
                    }).then(function(t) {
                        switch ("ERR_PRICE_CHANGED" === (null == t ? void 0 : t.error) && i.showModalAgain(),
                        t.paymentSystem) {
                        case "CloudPayments":
                            var e;
                            i.isHeadScript ? i.openCloudPayment(t) : (i.isHeadScript = !0,
                            (e = document.createElement("script")).src = "https://widget.cloudpayments.ru/bundles/cloudpayments",
                            document.head.append(e),
                            e.onload = function() {
                                i.openCloudPayment(t)
                            }
                            );
                            break;
                        case "redirect":
                            window.location.href = t.data.url;
                            break;
                        case "form":
                            var n, r = t.data.params, o = document.createElement("form");
                            for (n in o.action = t.data.url,
                            o.method = t.data.method,
                            r) {
                                var a = document.createElement("input");
                                a.setAttribute("type", "hidden"),
                                a.setAttribute("name", n),
                                a.setAttribute("value", r[n]),
                                o.appendChild(a)
                            }
                            document.body.append(o),
                            o.submit()
                        }
                        "user_with_active_subscription_exists" === (null == t ? void 0 : t.data.status) && i.showModalAgain()
                    }).catch(function(t) {
                        console.log(t)
                    }),
                    setTimeout(function() {
                        i.isBtnLoader = !1
                    }, 7e3)
                }
            else
                this.error = !0
        },
        showModalOptionPay: function(t) {
            var e = this
              , n = document.createElement("div");
            n.innerHTML = '\n            <div class="modal-again modal-again--options">\n            <div class="modal-again__overlay"></div>\n            <div class="modal-again__block">\n                <div class="modal-again-body">\n                    <div class="modal-again__top">\n                        <p class="modal-again__text">Выберите способ оплаты</p>\n                    </div>\n                    <div class="modal-again-body__img-wrap">\n                        <button class="button button__option button__tinkoff" type="button">\n                            <svg width="102" height="23" viewBox="0 0 102 23" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <path d="M8.85765 7.98796V6.53196H0.639648V7.98796H3.91565V16.5H5.58165V7.98796H8.85765ZM11.6215 8.05796V6.53196H10.0256V8.05796H11.6215ZM11.6215 16.5V9.38796H10.0256V16.5H11.6215ZM17.3302 9.21996C16.3923 9.21996 15.6502 9.66796 15.2022 10.312H15.1742V9.38796H13.6622V16.5H15.2582V12.552C15.2582 11.194 15.9722 10.508 16.8822 10.508C17.7782 10.508 18.3242 11.012 18.3242 12.286V16.5H19.9202V12.146C19.9202 10.2 18.9403 9.21996 17.3302 9.21996ZM28.3047 16.5L25.0287 12.636L27.9688 9.38796H26.1067L23.5167 12.3H23.4887V6.53196H21.8927V16.5H23.4887V13.056H23.5167L26.2887 16.5H28.3047ZM31.8757 9.17796C29.7197 9.17796 28.3617 10.634 28.3617 12.944C28.3617 15.254 29.7197 16.71 31.8757 16.71C34.0317 16.71 35.3757 15.254 35.3757 12.944C35.3757 10.634 34.0317 9.17796 31.8757 9.17796ZM31.8757 10.438C33.0098 10.438 33.7097 11.404 33.7097 12.944C33.7097 14.484 33.0098 15.45 31.8757 15.45C30.7417 15.45 30.0417 14.484 30.0417 12.944C30.0417 11.404 30.7417 10.438 31.8757 10.438ZM43.9739 7.65196C44.1138 7.65196 44.2678 7.67996 44.3518 7.70796V6.53196C44.1558 6.48996 43.8058 6.43396 43.5258 6.43396C42.1258 6.43396 41.3699 7.16196 41.3699 8.63196V9.38796H38.8638V8.81396C38.8638 7.97396 39.1998 7.65196 39.8858 7.65196C40.0258 7.65196 40.1798 7.67996 40.2778 7.70796V6.53196C40.0678 6.48996 39.7318 6.43396 39.4379 6.43396C38.0378 6.43396 37.2818 7.16196 37.2818 8.63196V9.38796H36.0779V10.606H37.2818V16.5H38.8638V10.606H41.3699V16.5H42.9519V10.606H44.3238V9.38796H42.9519V8.81396C42.9519 7.97396 43.2878 7.65196 43.9739 7.65196Z" fill="black" fill-opacity="0.8"/>\n                            <mask id="mask0_26785_60792" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="51" y="1" width="51" height="21">\n                            <path d="M101.5 1H51.5V22H101.5V1Z" fill="white"/>\n                            </mask>\n                            <g mask="url(#mask0_26785_60792)">\n                            <path d="M91.1117 1H61.8883C56.151 1 51.5 5.70101 51.5 11.5C51.5 17.299 56.151 22 61.8883 22H91.1117C96.849 22 101.5 17.299 101.5 11.5C101.5 5.70101 96.849 1 91.1117 1Z" fill="#303030"/>\n                            <path d="M77.1918 8.38977H73.0459V15.0825H75.0625V13.2821H77.1901C77.6902 13.2821 78.1772 13.2673 78.6511 13.1137C79.5695 12.818 80.2509 11.9888 80.2509 10.864C80.2509 9.73923 79.5825 8.92328 78.6788 8.60119C78.1788 8.41785 77.7049 8.38977 77.1901 8.38977H77.1918ZM75.0641 11.708V10.0068H76.9009C77.2898 10.0068 77.5137 10.0498 77.6935 10.1191C78.0137 10.2463 78.1657 10.5403 78.1657 10.8508C78.1657 11.1877 77.9843 11.5115 77.6379 11.6238C77.4712 11.68 77.2767 11.708 76.9009 11.708H75.0641Z" fill="white"/>\n                            <path d="M83.1442 12.6363L84.1034 9.93744H84.257L85.2163 12.6363H83.1442ZM82.6441 14.113H85.7049L86.0938 15.0825H88.3604L85.6477 8.38977H82.698L79.9854 15.0825H82.2666L82.6425 14.113H82.6441Z" fill="white"/>\n                            <path d="M93.269 8.38977L91.6283 11.4405H91.558L89.9026 8.38977H87.5527L90.5432 13.3102V15.0825H92.63V13.1417L95.4685 8.38977H93.269Z" fill="white"/>\n                            <path d="M57.5332 6.40442H68.7369V12.0996C68.7369 13.5597 67.9656 14.9091 66.7155 15.6392L63.1351 17.7286L59.5546 15.6392C58.3029 14.9091 57.5332 13.5597 57.5332 12.0996V6.40442Z" fill="#FFDD2D"/>\n                            <path fill-rule="evenodd" clip-rule="evenodd" d="M60.6071 9.40234V11.173C60.8473 10.8988 61.282 10.7138 61.7804 10.7138H62.3213V12.7735C62.3213 13.3219 62.1743 13.8009 61.9553 14.0652H64.3101C64.0927 13.8009 63.9457 13.3219 63.9457 12.7752V10.7155H64.4866C64.985 10.7155 65.4213 10.9005 65.6599 11.1746V9.404H60.6055L60.6071 9.40234Z" fill="#333333"/>\n                            </g>\n                            </svg>\n                        </button>\n                        <button class="button button__option button__sber" type="button">\n                            <picture>\n                                <source srcSet="sys/js/img/sber-logo-card.svg"/>\n                                <img class="modal-fail__img" src="sys/js/img/sber-logo-card.svg" alt="MasterCard" width="114" height="25"/>\n                            </picture>\n                        </button>\n                        <button class="button button__option button__card" type="button">\n                            <span class="button__option--card">\n                                <picture>\n                                    <source srcSet="sys/js/img/master-card.svg"/>\n                                    <img class="modal-fail__img" src="sys/js/img/master-card.svg" alt="MasterCard" width="33" height="20"/>\n                                </picture>\n                                <picture>\n                                    <source srcSet="sys/js/img/visa-card.svg"/>\n                                    <img class="modal-fail__img" src="sys/js/img/visa-card.svg" alt="Visa" width="50" height="15"/>\n                                </picture>\n                                <picture>\n                                    <source srcSet="sys/js/img/mir-card.svg"/>\n                                    <img class="modal-fail__img" src="sys/js/img/mir-card.svg" alt="Mir" width="52" height="15"/>\n                                </picture>\n                            </span>\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>',
            document.querySelector("body").append(n),
            document.body.classList.add("modal-again-active"),
            document.querySelector(".modal-again").classList.add("modal-again--active"),
            this.$parent.availablePaymentSystems.sberbank && document.querySelector(".button__sber").classList.add("show"),
            this.$parent.availablePaymentSystems.CloudPayments && document.querySelector(".button__tinkoff").classList.add("show"),
            document.querySelector(".button__card").addEventListener("click", function() {
                return e.sendForm(t)
            }),
            document.querySelector(".button__sber").addEventListener("click", function() {
                return e.sendForm(t, "sberbank")
            }),
            document.querySelector(".button__tinkoff").addEventListener("click", function() {
                return e.sendForm(t, "CloudPayments")
            })
        }
    },
    watch: {
        email: debounce(function() {
            var t = this.email
              , e = (t.replace(/^(0|\+44) */, ""),
            t.toLowerCase(),
            window.location.hostname)
              , e = window.location.protocol + "//".concat(e) + ("localhost" === e ? ":" + window.location.port : "");
            /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(t) && fetch(e + "/email?email=".concat(t), {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            }).catch(function(t) {
                console.log(t)
            })
        }, 500)
    }
}),
Vue.component("header-tp", {
    data: function() {
        return {
            isActive: !1,
            isOpen: !1,
            isAuth: !1,
            isSD: !1
        }
    },
    props: ["product", "headerId"],
    mounted: function() {
        window.location.hostname.includes("skilldeposit") && (this.isSD = !0)
    },
    template: '\n        <header :class="\'header header--\' + headerId" :id="headerId">\n            <div class="header__container container">\n                <img\n                :class="{\'header__logo\': isSD, \'hide\': !isSD}"\n                src="sys/js/img/logo-sd-bl.svg"\n                alt="logo"\n                width="143"\n                height="32"\n                />\n                <img\n                :class="{\'header__logo header__logo--black\': isSD, \'hide\': !isSD}"\n                src="sys/js/img/logo-sd.svg"\n                alt="logo"\n                width="191" \n                height="58"\n                />\n                <img\n                :class="{\'hide\': isSD, \'header__logo\': !isSD}"\n                src="sys/js/img/logo-lght.png"\n                alt="logo"\n                width="150" \n                height="33"\n                />\n                <img\n                :class="{\'hide\': isSD, \'header__logo header__logo--black\': !isSD}"\n                src="sys/js/img/logo.png"\n                alt="logo"\n                width="150" \n                height="33"\n                />\n                    <div class="hamburglar" :class="{\'is-open\': isActive, \'is-closed\': !isActive}"  @click="burgerToggle" id="hamburger">\n                        <div class="burger-icon">\n                            <div class="burger-container">\n                                <span class="burger-bun-top"></span\n                                ><span class="burger-filling"></span\n                                ><span class="burger-bun-bot"></span>\n                            </div>\n                        </div>\n                        <div class="burger-ring">\n                            <svg class="svg-ring">\n                                <path\n                                    class="path"\n                                    fill="none"\n                                    stroke="#fff"\n                                    stroke-miterlimit="10"\n                                    stroke-width="4"\n                                    d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2"\n                                ></path>\n                            </svg>\n                        </div>\n                        <svg width="0" height="0">\n                            <mask id="mask">\n                                <path\n                                    xmlns="http://www.w3.org/2000/svg"\n                                    fill="none"\n                                    stroke="#ff0000"\n                                    stroke-miterlimit="10"\n                                    stroke-width="4"\n                                    d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4"\n                                ></path>\n                            </mask>\n                        </svg>\n                        <div class="path-burger">\n                            <div class="animate-path">\n                                <div class="path-rotation"></div>\n                            </div>\n                        </div>\n                    </div>\n                <div class="header__menu" :class="{\'active\': isActive}">\n                        <a :href="\'https://client.\' + product.dynamicPath + \'/login\'" class="header__lk Button Button--violet" >\n                            <span>\n                                {{ translations[product.options.availableLanguages].login }}\n                                <img class="header__lk-arrow" src="sys/js/img/tutor-lk.svg" alt="user" width="18" height="9" />\n                            </span>\n                        </a>\n                        <a class="header__lk Button Button--violet" :href="\'https://client.\' + product.dynamicPath + \'/register\'">\n                            <span>{{ translations[product.options.availableLanguages].registration }}</span>\n                        </a>\n                </div>\n            <div class="header-popup" :class="{\'show\': isOpen}">\n                <div class=\'header-popup__overlay\' @click="showPopup"></div>\n                <div class=\'header-popup__body\'>\n                    <h2 class=\'header-popup__title\'>{{ translations[product.options.availableLanguages].popupTitle }}</h2>\n                    <button class=\'header-popup__close\' @click="showPopup"></button>\n                    <form @submit.prevent="sendForm(login, password)">\n                    <label for=\'login\'>{{ translations[product.options.availableLanguages].loginMail }}</label>\n                    <input placeholder=\'evgre@gmai.com\' id="login">\n                    <label for=\'password\'>{{ translations[product.options.availableLanguages].enterPass }}</label>\n                    <input required type=\'password\' id=\'password\'>\n                    <button class=\'header-popup__send Button Button--violet\' type=\'submit\'><span>{{ translations[product.options.availableLanguages].login }}</span></button>\n                    </form>\n                </div>\n            </div>\n        </header>\n  ',
    methods: {
        burgerToggle: function() {
            this.isActive = !this.isActive
        },
        showPopup: function() {
            this.isOpen = !this.isOpen
        },
        sendForm: function(t, e) {
            var n, r = {
                login: t.value,
                password: e.value
            }, o = {};
            for (n in r)
                o[n] = r[n];
            fetch("https://api.tutorplace.ru/user/login", {
                method: "POST",
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                },
                body: JSON.stringify(o)
            }).then(function(t) {
                return console.log(t)
            })
        }
    }
}),
Vue.component("product-cover", {
    data: function() {
        return {
            isSD: !1
        }
    },
    props: ["id", "product"],
    template: '\n        <img\n            class="product-image"\n            :src=" \'https://static.\' + product.dynamicPath + \'/cover/products/\' + splitString(product.cover, \'products/\') "\n            alt="product cover"\n            width="960"\n            height="404"\n        />\n    ',
    mounted: function() {
        var t, e = window.location.hostname.split(".");
        3 === e.length ? (t = e[1],
        e[2]) : (t = e[0],
        e[1]);
        "skilldeposit" === t && (this.isSD = !0)
    }
}),
Vue.component("accordion", {
    el: "#accordion",
    data: function() {
        return {
            rows: [{
                term: "Информация",
                details: '\n                    <ul>\n                        <li><a class="footer__link" href="https://static.tutorplace.ru/docs/anticorruptionpolicy.pdf" target="_blank" rel="noreferrer">Антикоррупционная политика</a></li>\n                        <li><a class="footer__link" href="https://static.tutorplace.ru/docs/license.pdf" target="_blank" rel="noreferrer">Образовательная лицензия</a></li>\n                        <li><a class="footer__link" href="https://tutorplace.ru/payment">Оплата</a></li>\n                        <li><a class="footer__link" href="https://static.tutorplace.ru/docs/privacy_policy.pdf" target="_blank" rel="noreferrer">Политика конфиденциальности</a></li>\n                        <li><a class="footer__link" href="https://static.tutorplace.ru/docs/user_agreement.pdf" target="_blank" rel="noreferrer">Пользовательское соглашение</a></li>\n                        <li><a class="footer__link" href="https://static.tutorplace.ru/docs/oferta.pdf" target="_blank" rel="noreferrer">Публичная оферта</a></li>\n                        <li><a class="footer__link" href="https://static.tutorplace.ru/docs/rykovodstvo.pdf" target="_blank" rel="noreferrer">Руководство пользователя</a></li>\n                        <li><a class="footer__link" href="https://static.tutorplace.ru/docs/personal_data.pdf" target="_blank" rel="noreferrer">Cогласие на обработку персональных данных</a></li>\n                    </ul>\n                    ',
                open: !1
            }, {
                term: "О нас",
                details: '\n                        <ul>\n                            <li><a class="footer__link" href="https://tutorplace.ru/contact">Контакты</a></li>\n                            <li><a class="footer__link footer__link-end" href="https://tutorplace.ru/about">О компании</a></li>\n                            <li><a class="footer__link footer__link-end" href="https://tutorplace.ru/subscribe">О подписке</a></li>\n                        </ul>\n                    ',
                open: !1
            }, {
                term: "Дополнительно",
                details: '\n                        <ul>\n                            <li><a class="footer__link" rel="noreferrer" href="https://tutorplace.ru/ndfl" target="_blank">Возврат НДФЛ</a></li>\n                            <li><a class="footer__link footer__link-end" href="https://tutorplace.ru/author">Для авторов</a></li>\n                            <li><a class="footer__link" href="mailto:partners@tutorplace.ru"><span>Стать партнером</span></a></li>\n                        </ul>\n                    ',
                open: !1
            }, {
                term: "Остались вопросы?",
                open: !1,
                details: '\n\t\t\t\t\t<ul>\n\t\t\t\t\t  <li><a class="footer__link footer__link--email" href="mailto:info@tuturplace.ru"><span>info@tutorplace.ru</span></a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t  '
            }]
        }
    },
    template: '\n\t\t<div id="accordion">\n\t\t\t<div class="footer__accordion-body">\n\t\t\t\t<dl v-for="(row, index) in rows" :key="row.id">\n\t\t\t\t\t<dt v-on:click="row.open = !row.open">\n\t\t\t\t\t\t<h4>{{ row.term }}</h4>\n\t\t\t\t\t\t<span class="footer__accordion-icon" :class="{\'open\': row.open, \'\': !row.open}"></span>\n\t\t\t\t\t</dt>\n\t\t\t\t\t<dd v-if="row.open">\n\t\t\t\t\t\t<div v-html="row.details"></div>\n\t\t\t\t\t</dd>\n\t\t\t\t</dl>\n\t\t\t</div>\n\t\t</div>\n\t'
}),
Vue.component("footer-tp", {
    data: function() {
        return {
            year: (new Date).getFullYear(),
            isSD: !1,
            isCookie: !0,
            isOpen1: !1,
            isOpen2: !1,
            isOpen3: !1,
            isOpen4: !1,
            isOpen5: !1
        }
    },
    props: ["product"],
    mounted: function() {
        window.location.hostname.includes("skilldeposit") && (this.isSD = !0)
    },
    methods: {
        getDocLink: function(t, e) {
            return "en" === t ? "https://static.skilldeposit.com/docs/" + e + ".pdf" : "https://static.skilldeposit.com/docs/" + e + "_" + t + ".pdf"
        },
        isMobile: function() {
            return !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        },
        hideCookie: function() {
            this.isCookie = !this.isCookie
        }
    },
    template: '\n        <footer class="footer">\n            <div v-if="!isSD">\n                <div class="footer__wrapper footer__wrapper--tp">\n                    <div class="footer__container container" >\n                        <div class="footer__top-block">\n                            <img\n                                class="footer__logo"\n                                src="sys/js/img/logo-tp.svg"\n                                alt="logo"\n                                width="125"\n                                height="34"\n                            />\n                            <div class="footer__support-bar">\n                                <p class="footer__support-bar-title">\n                                    Материалы размещены на платформе для авторов контента&nbsp;<span>TutorPlace</span>\n                                </p>\n                                <div class="footer__support-bar-links">\n                                    <a class="footer__support-bar-link" href="mailto:info@tutorplace.ru">Поддержка по материалам курсов</a>\n                                    <a class="footer__support-bar-link" href="mailto:support@tutorplace.ru">Поддержка по работе платформы</a>\n                                </div>\n                            </div>\n                        </div>\n                        <div v-if="!isMobile()">\n                                <div class="footer__content footer__content--desc">\n                                <ul class="footer__col">\n                                    <li>\n                                        <p class="footer__col-title">Информация</p>\n                                    </li>\n                                    <li><a class="footer__link" href="https://static.tutorplace.ru/docs/anticorruptionpolicy.pdf" target="_blank" rel="noreferrer">Антикоррупционная политика</a></li>\n                                    <li>\n                                        <a class="footer__link" href="https://static.tutorplace.ru/docs/license.pdf" target="_blank" rel="noreferrer">Образовательная лицензия</a>\n                                    </li>\n                                    <li><a class="footer__link" href="https://tutorplace.ru/payment">Оплата</a></li>\n                                    <li>\n                                        <a class="footer__link" href="https://static.tutorplace.ru/docs/privacy_policy.pdf" target="_blank" rel="noreferrer">Политика конфиденциальности</a>\n                                    </li>\n                                    <li>\n                                        <a class="footer__link" href="https://static.tutorplace.ru/docs/user_agreement.pdf" target="_blank" rel="noreferrer">Пользовательское соглашение</a>\n                                    </li>\n                                    <li>\n                                        <a class="footer__link" href="https://static.tutorplace.ru/docs/oferta.pdf" target="_blank" rel="noreferrer">Публичная оферта</a>\n                                    </li>\n                                    <li><a class="footer__link" href="https://static.tutorplace.ru/docs/rykovodstvo.pdf" target="_blank" rel="noreferrer">Руководство пользователя</a></li>\n                                    <li><a class="footer__link" href="https://static.tutorplace.ru/docs/personal_data.pdf" target="_blank" rel="noreferrer">Cогласие на обработку персональных данных</a></li>\n                                </ul>\n                                <ul class="footer__col">\n                                    <li>\n                                        <p class="footer__col-title">О нас</p>\n                                    </li>\n                                    <li>\n                                        <a class="footer__link" href="https://tutorplace.ru/contact">Контакты</a>\n                                    </li>\n                                    <li>\n                                        <a class="footer__link " href="https://tutorplace.ru/about">О компании</a>\n                                    </li>\n                                    <li>\n                                        <a class="footer__link footer__link-end" href="https://tutorplace.ru/subscribe">О подписке</a>\n                                    </li>\n                                </ul>\n                                <ul class="footer__col">\n                                    <li>\n                                        <p class="footer__col-title">Дополнительно</p>\n                                    </li>\n                                    <li>\n                                        <a class="footer__link" rel="noreferrer" href="https://tutorplace.ru/ndfl" target="_blank">Возврат НДФЛ</a>\n                                    </li>\n                                    <li><a class="footer__link" href="https://tutorplace.ru/author">Для авторов</a></li>\n                                    <li>\n                                        <a class="footer__link footer__link-end" href="mailto:partners@tutorplace.ru"><span>Стать партнером</span></a>\n                                    </li>\n                                    <li>\n                                        <p class="footer__col-title">Остались вопросы?</p>\n                                    </li>\n                                    <li>\n                                        <a class="footer__link footer__link--email" href="mailto:info@tuturplace.ru"><span>info@tutorplace.ru</span></a>\n                                    </li>\n                                </ul>\n                                <div class="footer__lecense">\n                                <div class="footer__lecense-row">\n                                    <div class="footer__lecense-img">\n                                        <img src="sys/js/img/eagle.svg" alt="Изображение лицензии" width="107" height="118"/>\n                                    </div>\n                                    <div class="footer__lecense-title">\n                                        Tutorplace.ru - отечественная IT компания, включенная в Единый реестр разработчиков Российского программного обеспечения.\n                                    </div>\n                                </div>\n                                <div class="footer__lecense-title">\n                                    <p> Согласно записи\n                                        <a class="footer__link" href="https://reestr.digital.gov.ru/reestr/1791096/" target="_blank" rel="noopener noreferrer">№19061</a> \n                                        от 18.09.2023 в реестре аккредитованных ИТ-компаний, созданной по поручению Министерства цифрового развития на основании заседания экспертного совета \n                                        <a c lass= "footer__link"href="https://reestr.digital.gov.ru/upload/iblock/6cf/bl4zypsihhsrfmsd4ap2gpk7oe742ltz/%D0%9F%D1%80%D0%BE%D1%82%D0%BE%D0%BA%D0%BE%D0%BB%20%E2%84%96%20582%D0%BF%D1%80.pdf"target="_blank"rel="noopener noreferrer">\n                                        №582пр\n                                        </a> от 05.09.2023.\n                                    </p>\n                                </div>\n                                <div class="footer__lecense-title">\n                                    Лицензия на образовательную деятельность <br />\n                                    <a class="footer__lec ense-link"href="https://static.tutorplace.ru/docs/license.pdf" target="_blank" rel="noopener noreferrer"> No Л035-01271-78/00643335 </a> с&nbsp;13 марта 2023 года\n                                </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div v-else>\n                            <mobile class="footer__accordion">\n                                <accordion></accordion>\n                                <div class="footer__lecense">\n                                    <div class="footer__lecense-row">\n                                        <div class="footer__lecense-img">\n                                            <img src="sys/js/img/eagle.svg" alt="Изображение лицензии" width="107" height="118"/>\n                                        </div>\n                                        <div class="footer__lecense-title">\n                                            Tutorplace.ru - отечественная IT компания, включенная в Единый реестр разработчиков Российского программного обеспечения.\n                                        </div>\n                                    </div>\n                                    <div class="footer__lecense-title">\n                                        <p> Согласно записи\n                                            <a class="footer__link" href="https://reestr.digital.gov.ru/reestr/1791096/" target="_blank" rel="noopener noreferrer">№19061</a> \n                                            от 18.09.2023 в реестре аккредитованных ИТ-компаний, созданной по поручению Министерства цифрового развития на основании заседания экспертного совета \n                                            <a c lass= "footer__link"href="https://reestr.digital.gov.ru/upload/iblock/6cf/bl4zypsihhsrfmsd4ap2gpk7oe742ltz/%D0%9F%D1%80%D0%BE%D1%82%D0%BE%D0%BA%D0%BE%D0%BB%20%E2%84%96%20582%D0%BF%D1%80.pdf"target="_blank"rel="noopener noreferrer">\n                                            №582пр\n                                            </a> от 05.09.2023.\n                                        </p>\n                                    </div>\n                                    <div class="footer__lecense-title">\n                                        Лицензия на образовательную деятельность <br />\n                                        <a class="footer__lec ense-link"href="https://static.tutorplace.ru/docs/license.pdf" target="_blank" rel="noopener noreferrer"> No Л035-01271-78/00643335 </a> с&nbsp;13 марта 2023 года\n                                    </div>\n                                </div>\n                            </mobile>\n                        </div>\n\n                        <div class="footer__bottom footer__bottom--new">\n                            <div class="footer__copyright">\n                                <span>© OOO “ДИДЖИТАЛ КОНТЕНТ” 2022-{{ year }}</span>\n                                <span>ОГРН: 1227800165460 ИНН: 7806606223</span>\n                                <span>190020, город&nbsp;Санкт-Петербург, наб&nbsp;Обводного&nbsp;Канала, д.&nbsp;199-201&nbsp;литера&nbsp;И, помещ.&nbsp;6-н</span>\n                            </div>\n                            <div class="footer__payment">\n                                <img src="sys/js/img/visa.svg" alt="Visa" width="47" height="31">\n                                <img src="sys/js/img/mastercard.svg" alt="Mastercard" width="47" height="31">\n                                <img src="sys/js/img/mir.svg" alt="Mir" width="47" height="31">\n                            </div>\n                            <div class="footer__media">\n                                <a\n                                    href="https://vk.com/tutorplace"\n                                    target="_blank"\n                                    class="footer__media-block"\n                                    >\n                                    <img class="footer__media-svg" src="sys/js/img/vk40.svg" alt="vk" width="40" height="40"/>\n                                    <div class="footer__media-text">\n                                        <img src="sys/js/img/vk-word.svg" alt="vk" width="145" height="17"/>\n                                    </div>\n                                </a>\n                                <a\n                                    href="https://t.me/tutorplace_official"\n                                    target="_blank"\n                                    class="footer__media-block"\n                                    >\n                                    <img class="footer__media-svg" src="sys/js/img/tg40.svg" width="40" height="40" alt="tg"/>\n                                    <div class="footer__media-text">\n                                        <img src="sys/js/img/tg-word.svg" alt="tg word" width="110" height="21" />\n                                    </div>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div v-else >\n                <div class="footer__wrapper footer__wrapper--sd">\n                    <div class="footer__container container" :class="{\'footer__container container\': isSD, \'hide\': !isSD}" >\n                        <div class="footer__top-block">\n                            <img\n                                class="footer__logo"\n                                src="sys/js/img/logo-sd.svg"\n                                alt="logo"\n                                width="191"\n                                height="58"\n                            />\n                        </div>\n                        <div v-if="!isMobile()">\n                                <div class="footer__content footer__content--desc">\n                                <ul class="footer__col">\n                                    <li>\n                                        <p class="footer__col-title">{{ translations[product.options.availableLanguages].catalogCourse }}</p>\n                                    </li>\n                                    <li>\n                                        <a class="footer__link" href="https://skilldeposit.com/?tag=professions-and-skills#catalog" target="_blank" rel="noreferrer">{{ translations[product.options.availableLanguages].catalogProfessionSkill }}</a>\n                                    </li>\n                                    <li>\n                                        <a class="footer__link" href="https://skilldeposit.com/?tag=sport#catalog" target="_blank" rel="noreferrer">{{ translations[product.options.availableLanguages].catalogSport }}</a>\n                                    </li>\n                                    <li>\n                                        <a class="footer__link" href="https://skilldeposit.com/?tag=self-development#catalog" target="_blank" rel="noreferrer">{{ translations[product.options.availableLanguages].catalogSelfDev }}</a>\n                                    </li>\n                                    <li>\n                                        <a class="footer__link" href="https://skilldeposit.com/?tag=nutrition#catalog" target="_blank" rel="noreferrer">{{ translations[product.options.availableLanguages].catalogNutrition }}</a>\n                                    </li>\n                                    <li>\n                                        <a class="footer__link" href="https://skilldeposit.com/?tag=beauty-and-care#catalog" target="_blank" rel="noreferrer">{{ translations[product.options.availableLanguages].catalogBeauty }}</a>\n                                    </li>\n                                </ul>\n\n                                <ul class="footer__col">\n                                    <li>\n                                        <p class="footer__col-title">{{ translations[product.options.availableLanguages].information }}</p>\n                                    </li>\n                                    <li>\n                                        <a class="footer__link" href="https://static.skilldeposit.com/docs/privacy_policy_ru.pdf" target="_blank" rel="noreferrer">{{ translations[product.options.availableLanguages].privacyPolicy }}</a>\n                                    </li>\n                                    <li>\n                                        <a class="footer__link" href="https://static.skilldeposit.com/docs/user_agreement_ru.pdf" target="_blank" rel="noreferrer">{{ translations[product.options.availableLanguages].userAgreement }}</a>\n                                    </li>\n                                    <li>\n                                        <a class="footer__link" href="https://static.skilldeposit.com/docs/offer_ru.pdf" target="_blank" rel="noreferrer">{{ translations[product.options.availableLanguages].oferta }}</a>\n                                    </li>\n                                    <li>\n                                        <a class="footer__link" href="https://static.skilldeposit.com/docs/personal_data_ru.pdf" target="_blank" rel="noreferrer">{{ translations[product.options.availableLanguages].personalData }}</a>\n                                    </li>\n                                </ul>\n\n                                <ul class="footer__col">\n                                    <li>\n                                        <p class="footer__col-title">{{ translations[product.options.availableLanguages].aboutUs }}</p>\n                                    </li>\n                                    <li>\n                                        <a class="footer__link" href="https://skilldeposit.com/contact">{{ translations[product.options.availableLanguages].contacts }}</a>\n                                    </li>\n                                    <li>\n                                        <a class="footer__link" href="https://skilldeposit.com/about">{{ translations[product.options.availableLanguages].aboutCompany }}</a>\n                                    </li>\n                                </ul>\n\n                                <ul class="footer__col">\n                                    <li>\n                                        <p class="footer__col-title">{{ translations[product.options.availableLanguages].additionalInfo }}</p>\n                                    </li>\n                                    <li>\n                                        <a class="footer__link" href="mailto:partners@skilldeposit.com"><span>{{ translations[product.options.availableLanguages].partnership }}</span></a>\n                                    </li>\n                                    <li>\n                                        <p class="footer__col-title footer__col-title--top">{{ translations[product.options.availableLanguages].anyQuestions }}</p>\n                                    </li>\n                                    <li>\n                                        <a class="footer__link footer__link--email" href="mailto:info@skilldeposit.com"><span>info@skilldeposit.com</span></a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div v-else>\n                            <mobile class="footer__accordion">\n                                <div id="accordion">\n                                    <div class="footer__accordion-body">\n                                        <dl>\n                                            <dt v-on:click="isOpen1 = !isOpen1">\n                                                <h4>{{ translations[product.options.availableLanguages].catalogCourse }}</h4>\n                                                <span class="footer__accordion-icon" :class="{\'open\': isOpen1, \'\': !isOpen1}"></span>\n                                            </dt>\n                                            <dd v-if="isOpen1">\n                                                <div>\n                                                    <ul>\n                                                        <li>\n                                                            <a class="footer__link" href="https://skilldeposit.com/?tag=professions-and-skills#catalog" target="_blank" rel="noreferrer">{{ translations[product.options.availableLanguages].catalogProfessionSkill }}</a>\n                                                        </li>\n                                                        <li>\n                                                            <a class="footer__link" href="https://skilldeposit.com/?tag=sport#catalog" target="_blank" rel="noreferrer">{{ translations[product.options.availableLanguages].catalogSport }}</a>\n                                                        </li>\n                                                        <li>\n                                                            <a class="footer__link" href="https://skilldeposit.com/?tag=self-development#catalog" target="_blank" rel="noreferrer">{{ translations[product.options.availableLanguages].catalogSelfDev }}</a>\n                                                        </li>\n                                                        <li>\n                                                            <a class="footer__link" href="https://skilldeposit.com/?tag=nutrition#catalog" target="_blank" rel="noreferrer">{{ translations[product.options.availableLanguages].catalogNutrition }}</a>\n                                                        </li>\n                                                        <li>\n                                                            <a class="footer__link" href="https://skilldeposit.com/?tag=beauty-and-care#catalog" target="_blank" rel="noreferrer">{{ translations[product.options.availableLanguages].catalogBeauty }}</a>\n                                                        </li>\n                                                    </ul>\n                                                </div>\n                                            </dd>\n                                        </dl>\n                                        <dl>\n                                            <dt v-on:click="isOpen2 = !isOpen2">\n                                                <h4>{{ translations[product.options.availableLanguages].information }}</h4>\n                                                <span class="footer__accordion-icon" :class="{\'open\': isOpen2, \'\': !isOpen2}"></span>\n                                            </dt>\n                                            <dd v-if="isOpen2">\n                                                <div>\n                                                    <ul>\n                                                        <li>\n                                                            <a class="footer__link" href="https://static.skilldeposit.com/docs/privacy_policy_ru.pdf" target="_blank" rel="noreferrer">{{ translations[product.options.availableLanguages].privacyPolicy }}</a>\n                                                        </li>\n                                                        <li>\n                                                            <a class="footer__link" href="https://static.skilldeposit.com/docs/user_agreement_ru.pdf" target="_blank" rel="noreferrer">{{ translations[product.options.availableLanguages].userAgreement }}</a>\n                                                        </li>\n                                                        <li>\n                                                            <a class="footer__link" href="https://static.skilldeposit.com/docs/offer_ru.pdf" target="_blank" rel="noreferrer">{{ translations[product.options.availableLanguages].oferta }}</a>\n                                                        </li>\n                                                        <li>\n                                                            <a class="footer__link" href="https://static.skilldeposit.com/docs/personal_data_ru.pdf" target="_blank" rel="noreferrer">{{ translations[product.options.availableLanguages].personalData }}</a>\n                                                        </li>\n                                                    </ul>\n                                                </div>\n                                            </dd>\n                                        </dl>\n                                        <dl>\n                                            <dt v-on:click="isOpen3 = !isOpen3">\n                                                <h4>{{ translations[product.options.availableLanguages].aboutUs }}</h4>\n                                                <span class="footer__accordion-icon" :class="{\'open\': isOpen3, \'\': !isOpen3}"></span>\n                                            </dt>\n                                            <dd v-if="isOpen3">\n                                                <div>\n                                                    <ul>\n                                                        <li>\n                                                            <a class="footer__link" href="https://skilldeposit.com/contact">{{ translations[product.options.availableLanguages].contacts }}</a>\n                                                        </li>\n                                                        <li>\n                                                            <a class="footer__link" href="https://skilldeposit.com/about">{{ translations[product.options.availableLanguages].aboutCompany }}</a>\n                                                        </li>\n                                                    </ul>\n                                                </div>\n                                            </dd>\n                                        </dl>\n                                        <dl>\n                                            <dt v-on:click="isOpen4 = !isOpen4">\n                                                <h4>{{ translations[product.options.availableLanguages].additionalInfo }}</h4>\n                                                <span class="footer__accordion-icon" :class="{\'open\': isOpen4, \'\': !isOpen4}"></span>\n                                            </dt>\n                                            <dd v-if="isOpen4">\n                                                <div>\n                                                    <ul>\n                                                        <li>\n                                                            <a class="footer__link" href="mailto:partners@skilldeposit.com"><span>{{ translations[product.options.availableLanguages].partnership }}</span></a>\n                                                        </li>\n                                                    </ul>\n                                                </div>\n                                            </dd>\n                                        </dl>\n                                        <dl>\n                                            <dt v-on:click="isOpen5 = !isOpen5">\n                                                <h4>{{ translations[product.options.availableLanguages].anyQuestions }}</h4>\n                                                <span class="footer__accordion-icon" :class="{\'open\': isOpen4, \'\': !isOpen5}"></span>\n                                            </dt>\n                                            <dd v-if="isOpen5">\n                                                <div>\n                                                    <ul>\n                                                        <li>\n                                                            <a class="footer__link footer__link--email" href="mailto:info@skilldeposit.com"><span>info@skilldeposit.com</span></a>\n                                                        </li>\n                                                    </ul>\n                                                </div>\n                                            </dd>\n                                        </dl>\n\n                                    </div>\n                                </div>\n                            </mobile>\n                        </div>\n                        <div class="footer__bottom footer__bottom--new">\n                            <div class="footer__copyright">\n                                <span>ТОО "СКИЛЛДЕПОЗИТ КЗ" {{ year }}</span>\n                                <span>БИН: 240240011107</span>\n                                <span>050063, Республика Казахстан, г.Алматы,<br/> Ауэзовский район, ул. Жубанова, д.7 кв.10</span>\n                            </div>\n                            <div class="footer__payment">\n                                <img src="sys/js/img/visa.svg" alt="Visa" width="47" height="31">\n                                <img src="sys/js/img/mastercard.svg" alt="Master Card" width="47" height="31">\n                                <img src="sys/js/img/arca.svg" alt="Armenian Card" width="47" height="31">\n                            </div>\n                            <div class="footer__media">\n                                <a\n                                    href="https://twitter.com/SkillDeposit"\n                                    target="_blank"\n                                    class="footer__media-block"\n                                    >\n                                    <img class="footer__media-svg" src="sys/js/img/twitter40.svg" alt="twitter" width="40" height="40"/>\n                                    <div class="footer__media-text">\n                                        <img src="sys/js/img/twitter-word.svg" alt="vk" width="80" height="17"/>\n                                    </div>\n                                </a>\n                                <a\n                                    href="https://t.me/skilldeposit"\n                                    target="_blank"\n                                    class="footer__media-block"\n                                    >\n                                    <img class="footer__media-svg" src="sys/js/img/tg40.svg" width="40" height="40" alt="tg"/>\n                                    <div class="footer__media-text">\n                                        <img src="sys/js/img/tg-word.svg" alt="tg word" width="110" height="21" />\n                                    </div>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </footer>\n    '
}),
new Vue({
    el: "#app",
    data: function() {
        return {
            id: 6,
            link: "test.com",
            clientDomain: "https://client.tutorplace.ru",
            email: "info@tutorplace.ru",
            trackers: "tack",
            product: {
                id: 42,
                name: "Product name",
                description: "Product description",
                shortDescription: "This is short description",
                tariffDescription: "11",
                displayPrice: 1,
                displayOldPrice: 666,
                displayCurrency: "RUB",
                displayCurrencySymbol: "₽",
                dynamicPath: "tutorplace.ru",
                firstCheckbox: "Вы подтверждаете ознакомление с офертой и тарифами, а также даете согласие на обработку персональных данных.",
                secondCheckbox: "*Оформляя доступ, вы соглашаетесь с тем, что если вы сохраните доступ до окончания 7-дневного ознакомительного периода, то с вас будет автоматически списываться 2.99 USD каждую неделю. Подробнее о политике отмены и возврата средств читайте в оферте",
                options: {
                    availableLanguages: "ru"
                },
                cover: "products/268.jpg"
            },
            isShowModalMultiPayment: !1,
            availablePaymentSystems: "",
            isTariffFreeRegistration: !1
        }
    },
    mounted: function() {
        var a = this
          , t = ("localhost" !== window.location.hostname && (t = "/domain" + document.location.search,
        fetch(t).then(function(t) {
            return t.json()
        }).then(function(t) {
            a.id = t.id,
            a.link = t.link,
            a.trackers = t.trackers,
            a.clientDomain = t.clientDomain,
            a.email = t.email,
            a.product = t.products[0],
            a.product.options = t.options,
            a.availablePaymentSystems = t.availablePaymentSystems,
            a.isShowModalMultiPayment = t.isShowModalMultiPayment,
            a.isTariffFreeRegistration = t.isTariffFreeRegistration,
            t.options.availableLanguages ? a.product.options.availableLanguages = t.options.availableLanguages : a.product.options.availableLanguages = "ru",
            window.location.hostname.includes("skilldeposit") ? a.product.dynamicPath = "skilldeposit.com" : a.product.dynamicPath = "tutorplace.ru"
        }).then(function() {
            if (window.location.hostname.includes("skilldeposit")) {
                for (var t = a.product.name, e = (document.title = t + " - Skilldeposit",
                a.product.displayPrice = a.product.displayPrice,
                a.product.displayOldPrice = a.product.displayOldPrice,
                document.getElementsByTagName("head")[0]), n = e.getElementsByTagName("link"), r = 0; r < n.length; r++) {
                    var o = n[r];
                    "shortcut icon" == o.rel && e.removeChild(o)
                }
                t = document.createElement("link"),
                t = (t.setAttribute("href", "sys/js/img/favicon.ico"),
                t.setAttribute("type", "image/x-icon"),
                t.setAttribute("rel", "shortcut icon"),
                e.appendChild(t),
                document.createElement("link")),
                t = (t.setAttribute("href", "sys/js/img/favicon.svg"),
                t.setAttribute("type", "image/x-icon"),
                t.setAttribute("rel", "shortcut icon"),
                e.appendChild(t),
                document.createElement("script")),
                t = (t.setAttribute("async", "true"),
                t.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-Q824TCFNT6"),
                document.querySelector("head").append(t),
                document.createElement("script"));
                t.setAttribute("async", "true"),
                t.innerHTML = "  window.dataLayer = window.dataLayer || [];\n                        function gtag(){dataLayer.push(arguments);}\n                        gtag('js', new Date());\n                        gtag('config', 'G-Q824TCFNT6');",
                document.querySelector("head").append(t)
            }
        }).then(function() {
            var t, e, n;
            t = window,
            e = document,
            t.ym = t.ym || function() {
                (t.ym.a = t.ym.a || []).push(arguments)
            }
            ,
            t.ym.l = +new Date,
            n = e.createElement("script"),
            e = e.getElementsByTagName("script")[0],
            n.async = 1,
            n.src = "https://mc.yandex.ru/metrika/tag.js",
            e.parentNode.insertBefore(n, e),
            ym(94127763, "init", {
                clickmap: !0,
                trackLinks: !0,
                accurateTrackBounce: !0,
                webvisor: !0
            }),
            a.trackers && ((n = document.createElement("script")).innerHTML = a.trackers,
            document.querySelector("body").append(n))
        }).catch(function(t) {
            console.log("%c ⬇ error 💩 - your code", "background: #964b00; color: white"),
            console.log(t)
        })),
        document.createElement("script"));
        t.setAttribute("async", "true"),
        t.innerHTML = "function canUseWebP() {\n            const elem = document.createElement('canvas')\n            if (!!(elem.getContext && elem.getContext('2d'))) {\n                return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0\n            } else {\n                return false\n            }\n        }\n        document.body.classList.add(canUseWebP() ? 'webp' : 'no-webp')",
        document.querySelector("head").append(t)
    },
    methods: {
        getText: function(t) {
            return lang[this.product.options.availableLanguages][t]
        }
    }
})), Sentry = (!function() {
    var t = '.form,.form__content{-webkit-box-orient:vertical;-webkit-box-direction:normal;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.form__content .form__check a,.form__content .form__check2 a{text-decoration:underline}.form__content .form__check b,.form__content .form__check2 b{font-weight:700}.form__content .form__button:disabled{cursor:not-allowed}.form__content .form__check-box{cursor:pointer}.form__text{font-size:14px!important;margin-bottom:15px}.form__text a{color:inherit;text-decoration:underline}.form .form__text.form__text--bottom,.form__text--terms{display:none}.form__text2{font-size:14px!important;padding-top:10px}.form__text2 a{color:inherit;text-decoration:underline}.form__error{color:red;display:block;font-size:14px;margin-bottom:12px;text-align:center}@media (max-width:998px){.form__button{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.form__text{-webkit-box-ordinal-group:2;-ms-flex-order:1;font-size:12px!important;margin-bottom:0;margin-top:10px;order:1}.form__text--ux{display:none}.form__text--terms{display:inline}.form .form__text.form__text--top{height:0;opacity:0;pointer-events:none}.form .form__text.form__text--bottom{display:inline}.form__text2{-webkit-box-ordinal-group:4;-ms-flex-order:3;font-size:12px!important;order:3}.form__text a,.form__text2 a{font-size:12px!important;text-decoration:underline!important}}.modal-again,.modal-wrong{display:none}.modal-again--active,.modal-wrong--active{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;z-index:1000000!important}.modal-again__overlay,.modal-wrong__overlay{background-color:#060606;height:100%;left:0;opacity:.8;position:fixed;top:0;width:100%;z-index:30}.modal-again__block,.modal-wrong__block{background:#fff;border-radius:30px;-webkit-box-shadow:0 0 15px rgba(104,128,155,.2);box-shadow:0 0 15px rgba(104,128,155,.2);left:50%;max-width:540px;position:fixed;top:5%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);width:100%;z-index:40}@media (width <= 768px){.modal-again__block,.modal-wrong__block{max-width:420px;top:0}}.modal-again-body,.modal-fail{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#2f2f2f;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;max-width:570px;padding:20px;text-align:center}@media (max-width:998px){.modal-again-body,.modal-fail{padding:15px}}.modal-again-body__title,.modal-fail__title{font-size:30px;line-height:130%;margin:12px 0}@media (max-width:998px){.modal-again-body__title,.modal-fail__title{font-size:24px;margin:12px 0}}@media (max-width:768px){.modal-again-body__title,.modal-fail__title{font-size:20px;margin:10px 0}}.modal-again-body__text-again,.modal-fail__text-again{font-size:16px;line-height:130%;margin-bottom:24px;max-width:408px}@media (max-width:768px){.modal-again-body__text-again,.modal-fail__text-again{font-size:14px;margin-bottom:16px}}.modal-again-body__btn-wrap,.modal-fail__btn-wrap{background-color:#f3f4f7;border-radius:20px;max-width:440px;padding:16px;width:100%}.modal-again-body__btn-wrap-text,.modal-fail__btn-wrap-text{margin-bottom:15px}@media (max-width:768px){.modal-again-body__btn-wrap-text,.modal-fail__btn-wrap-text{font-size:13px}}.modal-again-body picture,.modal-again-body__img,.modal-fail picture,.modal-fail__img{width:100%}.modal-again-body img,.modal-fail img{display:block;height:auto;max-width:100%}.modal-again-body__text,.modal-fail__text{font-size:20px;line-height:130%;margin-bottom:16px}@media (max-width:998px){.modal-again-body__text,.modal-fail__text{font-size:16px;margin-bottom:15px}}@media (max-width:768px){.modal-again-body__text,.modal-fail__text{font-size:14px;margin-bottom:10px}}.modal-again-body__text-small,.modal-fail__text-small{font-size:16px;line-height:130%;margin-bottom:16px;max-width:368px}@media (max-width:998px){.modal-again-body__text-small,.modal-fail__text-small{font-size:14px;margin-bottom:15px}}@media (max-width:768px){.modal-again-body__text-small,.modal-fail__text-small{margin-bottom:10px}}.modal-again-body__button,.modal-fail__button{background-color:#7200cc;border-radius:10px;color:#fff;cursor:pointer;display:block;font-size:20px;font-weight:600;height:auto;margin:0 auto;max-width:380px;padding:13px 30px;text-align:center;text-decoration:none}@media (max-width:998px){.modal-again-body__button,.modal-fail__button{font-size:16px;padding:10px 20px}}@media (max-width:768px){.modal-again-body__button,.modal-fail__button{font-size:14px;padding:5px 20px}}.modal-again-body__img-wrap,.modal-fail__img-wrap{position:relative}.modal-again-body__cross,.modal-fail__cross{background-color:#f3f4f7;border:none;border-radius:8px;cursor:pointer;height:25px;padding:0;position:absolute;right:16px;top:16px;width:25px}.modal-again-body__cross:after,.modal-again-body__cross:before,.modal-fail__cross:after,.modal-fail__cross:before{background-color:#000;content:"";height:1px;left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:8px}.modal-again-body__cross:before,.modal-fail__cross:before{-webkit-transform:translate(-50%,-50%) rotate(45deg);-ms-transform:translate(-50%,-50%) rotate(45deg);transform:translate(-50%,-50%) rotate(45deg)}.modal-again-body__cross:after,.modal-fail__cross:after{-webkit-transform:translate(-50%,-50%) rotate(-45deg);-ms-transform:translate(-50%,-50%) rotate(-45deg);transform:translate(-50%,-50%) rotate(-45deg)}.modal-again-body__cards,.modal-fail__cards{-ms-flex-pack:distribute;display:-webkit-box;display:-ms-flexbox;display:flex;gap:30px;justify-content:space-around;margin-bottom:16px}@media (max-width:998px){.modal-again-body__cards,.modal-fail__cards{margin-bottom:15px}.modal-again-body__cards img,.modal-fail__cards img{max-width:60px}}@media (max-width:768px){.modal-again-body__cards,.modal-fail__cards{margin-bottom:10px}.modal-again-body__cards img,.modal-fail__cards img{max-width:50px}}.modal-again-body__warn,.modal-fail__warn{background-color:#f3f4f7;border-radius:10px;gap:10px;margin-bottom:16px;max-width:440px;padding:25px 30px}@media (max-width:998px){.modal-again-body__warn,.modal-fail__warn{margin-bottom:15px;padding:15px 20px}}@media (max-width:768px){.modal-again-body__warn,.modal-fail__warn{margin-bottom:10px;padding:10px 15px}}.modal-again-body__warn-title,.modal-fail__warn-title{font-size:26px;font-weight:500;line-height:130%;margin-bottom:15px}@media (max-width:998px){.modal-again-body__warn-title,.modal-fail__warn-title{font-size:20px;margin-bottom:10px}}@media (max-width:768px){.modal-again-body__warn-title,.modal-fail__warn-title{font-size:16px;margin-bottom:8px}}.modal-again-body__warn-text,.modal-fail__warn-text{font-size:16px;line-height:130%;margin-bottom:15px}@media (max-width:998px){.modal-again-body__warn-text,.modal-fail__warn-text{font-size:14px;margin-bottom:10px}.modal-again-body__price-text,.modal-fail__price-text{font-size:14px}}.modal-again-body__price,.modal-fail__price{color:#7200cc}@media (max-width:998px){.modal-again-body__price,.modal-fail__price{font-size:14px}}.modal-again--options .modal-again__text{-ms-flex-item-align:start;align-self:flex-start;font-family:Roboto,sans-serif;font-size:24px;font-weight:500;line-height:120%;margin-bottom:24px}@media (max-width:350px){.modal-again--options .modal-again__text{font-size:20px}}.modal-again--options .modal-again__block{border-radius:32px;margin-top:60px;max-width:480px}@media (max-width:520px){.modal-again--options .modal-again__block{border-radius:20px;max-width:calc(100% - 32px)}}.modal-again--options .modal-again-body{margin:0 auto;padding:28px 32px}@media (max-width:450px){.modal-again--options .modal-again-body{padding:16px}}.modal-again--options .modal-again-body__img-wrap{-webkit-box-orient:vertical;-webkit-box-direction:normal;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:16px;width:100%}.modal-again--options .modal-again__top{-ms-flex-item-align:start;-webkit-box-pack:justify;-ms-flex-pack:justify;align-self:flex-start;justify-content:space-between}.modal-again--options .button__option,.modal-again--options .modal-again__top{-webkit-box-orient:horizontal;-webkit-box-direction:normal;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.modal-again--options .button__option{-webkit-box-pack:center;-ms-flex-pack:center;border-radius:12px;justify-content:center;max-width:416px;min-height:55px;padding:15px 28px;-webkit-transition:all .3s ease;transition:all .3s ease;width:100%}.modal-again--options .button__option:hover{-webkit-box-shadow:0 4px 16px 0 rgba(0,0,0,.25);box-shadow:0 4px 16px 0 rgba(0,0,0,.25)}.modal-again--options .button__tinkoff{background:#fff;border:1px solid #dce5e5}.modal-again--options .button__sber{background-color:#419f80;background-image:url(sys/js/img/sber-background.jpg);background-position:100% 0;background-repeat:no-repeat;background-size:cover}.modal-again--options .button__sber,.modal-again--options .button__tinkoff{display:none}.modal-again--options .button__sber.show,.modal-again--options .button__tinkoff.show{display:-webkit-box;display:-ms-flexbox;display:flex}.modal-again--options .button__card{background:#fff;border:1px solid #dce5e5;max-height:53px}.modal-again--options .button__option--card{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-box-pack:justify;-ms-flex-pack:justify;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;gap:8px;justify-content:space-between;max-width:160px}.modal-again--options .modal-again-body picture{max-height:20px;width:auto}.modal-again--options .modal-again-body img{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}.modal-again--options .modal-again-body__cross{position:absolute;right:10px;top:10px}'
      , e = document.createElement("style");
    e.type = "text/css",
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t)),
    (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
}(),
!function() {
    var t = '@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");.header{background-color:#fff;font-family:Roboto,sans-serif;left:0;padding-bottom:20px;padding-top:20px;position:absolute;top:0;width:100%;z-index:5}@media (max-width:768px){.header{padding-bottom:15px;padding-top:15px}}.header .header__container{-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:space-between;margin:0 auto;max-width:1472px;padding:0 50px;position:relative;width:100%}@media (max-width:998px){.header .header__container{padding-left:30px;padding-right:30px}}@media (max-width:768px){.header .header__container{padding-left:16px;padding-right:16px}.header .header__container--sub{padding-bottom:15px;padding-top:15px}}.header .header__logo{min-height:33px;width:150px}.header .header__logo--black{display:none}.header .header__menu{-webkit-box-orient:vertical;-webkit-box-direction:normal;background-color:#fff;border-radius:15px;-webkit-box-shadow:0 0 15px 0 rgba(0,0,0,.15);box-shadow:0 0 15px 0 rgba(0,0,0,.15);-webkit-box-sizing:border-box;box-sizing:border-box;display:none;-ms-flex-direction:column;flex-direction:column;margin-left:-16px;padding:25px 15px 15px;position:absolute;right:70px;top:15px;z-index:1}@media (max-width:998px){.header .header__menu{right:35px}}.header .hide{display:none}.header .Button,.header .header__menu.active{display:-webkit-box;display:-ms-flexbox;display:flex}.header .Button{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:none;-webkit-box-shadow:none;box-shadow:none;cursor:pointer;justify-content:center;position:relative;text-align:center;text-decoration:none;-webkit-transition:.3s;transition:.3s}.header .Button:active,.header .Button:focus,.header .Button:hover{-webkit-filter:brightness(1.2);filter:brightness(1.2)}.header .Button:disabled{cursor:not-allowed;-webkit-filter:brightness(1) grayscale(1);filter:brightness(1) grayscale(1)}.header .Button--red{background-color:#c00;border-radius:20px;color:#fff;font-size:24px;font-weight:600;line-height:120%}@media (max-width:998px){.header .Button--red{font-size:22px}}.header .Button--violet{background:#7200cc radial-gradient(120.48% 1305.81% at 91.5% 88.41%,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,.15) 43.23%,hsla(0,0%,100%,0) 100%);border-radius:10px;color:#fff;font-size:20px;font-weight:600}.header .Button--violet span{position:relative;z-index:2}.header .Button--violet:before{background-color:#7200cc;border-radius:inherit;content:"";inset:0;opacity:0;position:absolute;-webkit-transition:inherit;transition:inherit}.header .Button--violet:active,.header .Button--violet:hover{background:radial-gradient(120.48% 1305.81% at 91.5% 88.41%,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,.15) 43.23%,hsla(0,0%,100%,0) 100%) #7200cc}.header .Button--violet:active:before,.header .Button--violet:hover:before{opacity:1}.header .Button--violet:disabled{cursor:not-allowed;-webkit-filter:grayscale(1);filter:grayscale(1)}.header .Button--violet:disabled:before{opacity:0}@media (max-width:998px){.header .Button--violet{font-size:14px}}.header .Button--light{background:#eaf0f5;border-radius:10px;color:#2f2f2f}.header .header__lk{width:100%}.header .header__lk span{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:14px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:13px;font-weight:500;line-height:140%;padding:13px 25px}.header .header__lk+.header__lk{margin-top:20px}.header .header__lk-arrow{margin-left:8px}.header .hamburglar{background:transparent;cursor:pointer;height:68px;max-height:35px;position:relative;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);width:45px;z-index:5}.header .path-burger{-webkit-mask-box-image:url(sys/js/img/mask.svg);height:68px;left:40%;-webkit-mask:url(#mask);mask:url(#mask);position:absolute;top:45%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:68px}.header .path-burger path{fill:red;stroke:red}.header .animate-path{height:68px;left:0;position:absolute;top:0;width:68px}.header .path-rotation{height:34px;margin:34px 34px 0 0;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0;width:34px}.header .path-rotation:before{background:#7200cc;content:"";display:block;height:34px;margin:0 4px 0 0;width:30px}.header .hamburglar.is-open .path{-webkit-animation:dash-in .6s linear normal;animation:dash-in .6s linear normal;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.header .hamburglar.is-open .animate-path{-webkit-animation:rotate-in .6s linear normal;animation:rotate-in .6s linear normal;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.header .hamburglar.is-open .burger-bun-top{-webkit-animation:bun-top-out .6s linear normal;animation:bun-top-out .6s linear normal;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.header .hamburglar.is-open .burger-bun-bot{-webkit-animation:bun-bot-out .6s linear normal;animation:bun-bot-out .6s linear normal;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.header .hamburglar.is-open .burger-filling{-webkit-animation:burger-fill-out .6s linear normal;animation:burger-fill-out .6s linear normal;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.header .hamburglar.is-closed .path{-webkit-animation:dash-out .6s linear normal;animation:dash-out .6s linear normal;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.header .hamburglar.is-closed .animate-path{-webkit-animation:rotate-out .6s linear normal;animation:rotate-out .6s linear normal;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.header .hamburglar.is-closed .burger-bun-top{-webkit-animation:bun-top-in .6s linear normal;animation:bun-top-in .6s linear normal;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.header .hamburglar.is-closed .burger-bun-bot{-webkit-animation:bun-bot-in .6s linear normal;animation:bun-bot-in .6s linear normal;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.header .hamburglar.is-closed .burger-filling{-webkit-animation:burger-fill-in .6s linear normal;animation:burger-fill-in .6s linear normal;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.header .path{stroke-dasharray:240;stroke-dashoffset:240;stroke-linejoin:round}.header .burger-icon{height:35px;position:absolute;width:35px}.header .burger-container{height:28px;position:relative;width:36px}.header .burger-bun-bot,.header .burger-bun-top,.header .burger-filling{background:#7200cc;border-radius:2px;display:block;height:4px;position:absolute;width:36px}.header .burger-bun-top{top:0}.header .burger-bun-bot,.header .burger-bun-top{-webkit-transform-origin:34px 2px;-ms-transform-origin:34px 2px;transform-origin:34px 2px}.header .burger-bun-bot{bottom:0}.header .burger-filling{top:12px}.header .burger-ring{left:40%;position:absolute;top:45%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.header .burger-ring,.header .svg-ring{height:68px;width:68px}.header .svg-ring path{stroke:#7200cc}@-webkit-keyframes rotate-out{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}40%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-out{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}40%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes rotate-in{0%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}40%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes rotate-in{0%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}40%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@-webkit-keyframes bun-top-out{0%{left:0;top:0;-webkit-transform:rotate(0deg);transform:rotate(0deg)}20%{left:0;top:0;-webkit-transform:rotate(15deg);transform:rotate(15deg)}80%{left:-5px;top:0;-webkit-transform:rotate(-60deg);transform:rotate(-60deg)}to{left:-5px;top:1px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}}@keyframes bun-top-out{0%{left:0;top:0;-webkit-transform:rotate(0deg);transform:rotate(0deg)}20%{left:0;top:0;-webkit-transform:rotate(15deg);transform:rotate(15deg)}80%{left:-5px;top:0;-webkit-transform:rotate(-60deg);transform:rotate(-60deg)}to{left:-5px;top:1px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}}@-webkit-keyframes bun-bot-out{0%{left:0;-webkit-transform:rotate(0deg);transform:rotate(0deg)}20%{left:0;-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}80%{left:-5px;-webkit-transform:rotate(60deg);transform:rotate(60deg)}to{left:-5px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}}@keyframes bun-bot-out{0%{left:0;-webkit-transform:rotate(0deg);transform:rotate(0deg)}20%{left:0;-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}80%{left:-5px;-webkit-transform:rotate(60deg);transform:rotate(60deg)}to{left:-5px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}}@-webkit-keyframes bun-top-in{0%{left:-5px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}20%{left:-5px;-webkit-transform:rotate(-60deg);transform:rotate(-60deg)}80%{left:0;-webkit-transform:rotate(15deg);transform:rotate(15deg)}to{left:0;-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes bun-top-in{0%{left:-5px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}20%{left:-5px;-webkit-transform:rotate(-60deg);transform:rotate(-60deg)}80%{left:0;-webkit-transform:rotate(15deg);transform:rotate(15deg)}to{left:0;-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@-webkit-keyframes bun-bot-in{0%{left:-5px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}20%{left:-5px;-webkit-transform:rotate(60deg);transform:rotate(60deg)}80%{left:0;-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}to{left:0;-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes bun-bot-in{0%{left:-5px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}20%{left:-5px;-webkit-transform:rotate(60deg);transform:rotate(60deg)}80%{left:0;-webkit-transform:rotate(-15deg);transform:rotate(-15deg)}to{left:0;-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@-webkit-keyframes burger-fill-in{0%{left:36px;width:0}40%{left:40px;width:0}80%{left:-6px;width:36px}to{left:0;width:36px}}@keyframes burger-fill-in{0%{left:36px;width:0}40%{left:40px;width:0}80%{left:-6px;width:36px}to{left:0;width:36px}}@-webkit-keyframes burger-fill-out{0%{left:0;width:36px}20%{left:-6px;width:42px}40%{left:40px;width:0}to{left:36px;width:0}}@keyframes burger-fill-out{0%{left:0;width:36px}20%{left:-6px;width:42px}40%{left:40px;width:0}to{left:36px;width:0}}@-webkit-keyframes dash-in{0%{stroke-dashoffset:240}40%{stroke-dashoffset:240}to{stroke-dashoffset:0}}@keyframes dash-in{0%{stroke-dashoffset:240}40%{stroke-dashoffset:240}to{stroke-dashoffset:0}}@-webkit-keyframes dash-out{0%{stroke-dashoffset:0}40%{stroke-dashoffset:240}to{stroke-dashoffset:240}}@keyframes dash-out{0%{stroke-dashoffset:0}40%{stroke-dashoffset:240}to{stroke-dashoffset:240}}.header-popup{color:#222;display:none;font-family:Roboto;position:fixed;z-index:10}.header-popup.show{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:center;min-height:100vh}.header-popup__overlay{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:rgba(0,0,0,.2);bottom:0;left:0;position:fixed;right:0;top:0}.header-popup__body{background:#f3f4f7;border-radius:40px;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:555px;padding:35px 67px;position:relative;width:calc(100% - 20px)}.header-popup__close{border:1px solid #7200cc;border-radius:50%;display:-webkit-box;display:-ms-flexbox;display:flex;height:30px;position:absolute;right:17.5px;top:16.5px;width:30px}.header-popup__close:after,.header-popup__close:before{background-color:#7200cc;content:"";height:1px;left:50%;position:absolute;top:50%;width:15px}.header-popup__close:before{-webkit-transform:translate(-50%,-50%) rotate(45deg);-ms-transform:translate(-50%,-50%) rotate(45deg);transform:translate(-50%,-50%) rotate(45deg)}.header-popup__close:after{-webkit-transform:translate(-50%,-50%) rotate(-45deg);-ms-transform:translate(-50%,-50%) rotate(-45deg);transform:translate(-50%,-50%) rotate(-45deg)}.header-popup__title{font-size:36px;font-weight:600;line-height:140%;margin-bottom:35px}.header-popup form{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:0 auto;max-width:330px}.header-popup form,.header-popup label{display:-webkit-box;display:-ms-flexbox;display:flex}.header-popup label{font-size:14px;font-weight:400;line-height:140%;margin-bottom:7px}.header-popup input{background:#fff;border:0;border-radius:10px;-webkit-box-shadow:0 1px 4px 0 hsla(0,0%,65%,.1);box-shadow:0 1px 4px 0 hsla(0,0%,65%,.1);-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px;height:40px;margin-bottom:20px;padding:0 15px;width:100%}.header-popup__send{height:46px;width:100%}@media (max-width:998px){.header-popup__body{padding:35px 15px}.header-popup__title{font-size:24px;margin-bottom:25px}}.header.header--black{background-color:#222}.header.header--black .header__logo{display:none}.header.header--black .header__logo--black{display:block;width:150px}.header.header--black .burger-bun-bot,.header.header--black .burger-bun-top,.header.header--black .burger-filling{background:#fff;height:3px}'
      , e = document.createElement("style");
    e.type = "text/css",
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t)),
    (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
}(),
!function() {
    var t = ".product-image{opacity:1}"
      , e = document.createElement("style");
    e.type = "text/css",
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t)),
    (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
}(),
!function() {
    var t = "@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap\");.footer{position:relative;z-index:50}.footer,.footer__wrapper{background:-webkit-gradient(linear,left top,left bottom,from(#161616),to(#333));background:linear-gradient(180deg,#161616,#333);color:#fff;font-family:Roboto,sans-serif;font-size:14px;line-height:18px}.footer__wrapper{padding:50px 0 64px}@media (max-width:1040px){.footer__wrapper{padding:50px 0 28px}}.footer__container{margin:0 auto;max-width:1490px;padding:0;width:100%}@media (max-width:1500px){.footer__container{padding:0 35px}}@media (max-width:680px){.footer__container{padding:0 16px}}.footer__top-block{-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;gap:20px;justify-content:space-between;margin-bottom:25px}@media (max-width:680px){.footer__top-block{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-direction:column-reverse;flex-direction:column-reverse;gap:20px}}.footer__support-bar{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;background-color:rgba(99,99,99,.25);border-radius:9px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;font-size:13px;gap:20px;padding:12px 20px 12px 40px;position:relative}.footer__support-bar:before{background-image:url(sys/js/img/warn.svg);content:\"\";height:20px;left:20px;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:20px}@media (max-width:1140px){.footer__support-bar{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:5px}}@media (max-width:690px){.footer__support-bar{gap:10px;padding:12px 24px}.footer__support-bar:before{display:none}}.footer__support-bar-title{font-size:14px;font-weight:600;line-height:18.2px}.footer__support-bar-title img{margin-right:10px}.footer__support-bar-title span{font-weight:700}@media (max-width:1220px){.footer__support-bar-title{font-size:16px}}@media (max-width:690px){.footer__support-bar-title{display:inline}}@media (max-width:380px){.footer__support-bar-title{font-size:4.08vw}}.footer__support-bar-links{display:-webkit-box;display:-ms-flexbox;display:flex;gap:20px}@media (max-width:1140px){.footer__support-bar-links{width:100%}}@media (max-width:680px){.footer__support-bar-links{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:5px}}.footer__support-bar-link{color:#fff;font-size:14px;text-decoration:underline}@media (max-width:1220px){.footer__support-bar-link{font-size:13px}}.footer__row{-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-box-align:center;-ms-flex-align:center;align-items:center;justify-content:space-between;margin-bottom:25px}.footer__media,.footer__row{display:-webkit-box;display:-ms-flexbox;display:flex}.footer__media{gap:8px}@media (max-width:1040px){.footer__logo{max-width:180px}}.footer__content{-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;border-top:1px solid hsla(0,0%,100%,.2);display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:space-between;padding:30px 0 48px}@media (max-width:1040px){.footer__content{grid-row-gap:25px;display:grid;grid-template-columns:200px 200px 150px;padding:25px 0}}@media (max-width:480px){.footer__content{-webkit-box-orient:vertical;-webkit-box-direction:normal;border-top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:0 0 25px}}.footer__col{grid-row-gap:15px;display:grid;list-style:none;margin:0;max-width:185px;padding:0}@media (max-width:1040px){.footer__col{grid-row-gap:12px;max-width:none}}.footer__col-title{color:#fff;font-size:14px;font-weight:600;letter-spacing:-.03em;line-height:140%}.footer__col-title--top{margin-top:17px}.footer__link{color:#fff;display:inline-block;font-size:14px;letter-spacing:-.03em;line-height:140%;text-decoration:none}.footer__link:focus,.footer__link:hover{color:#c597ea}.footer__link--email{color:#c597ea;font-size:14px;letter-spacing:-.015em;line-height:140%}.footer__link-end{margin-bottom:30px}@media (max-width:1040px){.footer__link-end{margin-bottom:10px}}.footer__show-more{background-color:transparent;border:none;color:#c597ea;cursor:pointer;font-size:12px;line-height:140%;padding:0}.footer__lecense{grid-row-gap:13px;background-color:rgba(99,99,99,.25);border-radius:20px;display:grid;max-width:460px;padding:16px 20px;position:relative}@media (max-width:1040px){.footer__lecense{grid-row-gap:15px;border-radius:10px;grid-column-end:4;grid-column-start:1;max-width:100%;padding:25px}}@media (max-width:690px){.footer__lecense{padding:15px}}.footer__lecense-row{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;gap:20px}@media (max-width:690px){.footer__lecense-row{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-direction:column;flex-direction:column;gap:10px}}.footer__lecense-img{width:51px}@media (max-width:1040px){.footer__lecense-img{width:68px}}@media (max-width:520px){.footer__lecense-img{width:45px}}.footer__lecense-img img{height:100%;-o-object-fit:contain;object-fit:contain;width:100%}.footer__lecense-title{font-size:13px;font-weight:400;line-height:140%}.footer__lecense-title a{color:#c597ea;text-decoration:none}@media (max-width:1040px){.footer__lecense-title{width:100%}}@media (max-width:690px){.footer__lecense-title{font-size:14px;line-height:120%}}.footer__lecense-row .footer__lecense-title{font-weight:600;width:calc(100% - 88px)}@media (max-width:1040px){.footer__lecense-row .footer__lecense-title{width:100%}}@media (max-width:690px){.footer__lecense-row .footer__lecense-title{font-size:16px;line-height:120%}}.footer__lecense-links{grid-row-gap:12px;display:grid;justify-items:flex-start}@media (max-width:1040px){.footer__lecense-links{grid-row-gap:4px}}.footer__lecense-links a{color:#c597ea;font-size:14px;line-height:18px;text-decoration:none}.footer__lecense-links a:focus,.footer__lecense-links a:hover{color:#fff}@media (max-width:1040px){.footer__lecense-links a{font-size:12px;line-height:16px;margin-bottom:10px;text-decoration-line:none}}@media (max-width:690px){.footer__lecense-links a{font-size:9px;line-height:140%}}.footer__lecense-link{color:#c597ea}.footer__lecense-link:focus,.footer__lecense-link:hover{text-decoration-line:none}.footer__license-img{bottom:30px;position:absolute;right:40px}@media (max-width:1040px){.footer__license-img{bottom:30px;right:99px}.footer__license-img img{height:158px;width:144px}}@media (max-width:690px){.footer__license-img{bottom:20px;right:18px}.footer__license-img img{height:auto;width:65px}}.footer__bottom{-webkit-box-pack:justify;-ms-flex-pack:justify;grid-column-gap:24px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:grid;grid-auto-flow:column;justify-content:space-between}@media (max-width:1040px){.footer__bottom{grid-row-gap:25px;grid-column-gap:0;grid-auto-flow:row;grid-template-columns:1fr 1fr}}@media (max-width:690px){.footer__bottom{grid-row-gap:16px;grid-auto-flow:row;grid-template-columns:none;justify-items:flex-start;margin-top:25px}}.footer__copyright{color:#acacac;display:grid;font-family:Roboto,sans-serif;font-size:13px;justify-items:flex-start;letter-spacing:-.015em;line-height:140%}.footer__copyright span{color:#acacac}.footer__payment{grid-column-gap:40px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:inline-grid;grid-auto-flow:column}@media (max-width:1040px){.footer__payment{grid-column-gap:40px;margin-left:auto}}@media (max-width:690px){.footer__payment{grid-column-gap:16px;margin-left:0}}.footer__cookie{color:hsla(0,0%,100%,.7);font-size:15px;letter-spacing:-.015em;line-height:140%;max-width:810px}@media screen and (max-width:1040px){.footer__cookie{display:-webkit-box;display:-ms-flexbox;display:flex;grid-column-end:4;grid-column-start:1;max-width:100%}}@media (max-width:690px){.footer__cookie{grid-column-end:auto;grid-column-start:auto}}.footer__wrapper--sd{margin:0 auto;max-width:1420px}.footer__wrapper--sd .footer__top-block{margin-bottom:6px}.hide{display:none}.footer__accordion dl{margin:0 0 12px}.footer__accordion dl dt{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;font-weight:700;justify-content:space-between;padding:8px 0;position:relative}.footer__accordion dl h4{font-family:Roboto,sans-serif;font-size:16px;font-weight:500;line-height:120%}.footer__accordion dl dd{border-top:0;margin:0;padding:0}.footer__accordion dl dd ul{-webkit-box-orient:vertical;-webkit-box-direction:normal;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:12px}.footer__accordion dl dd ul li{list-style-type:none}.footer__accordion-body{max-width:500px;width:100%}.footer__accordion .footer__social{margin-bottom:33px}.footer__accordion .footer__social p{font-size:16px;line-height:120%;padding-bottom:12px}.footer__accordion .footer__social .footer__media{-webkit-box-orient:horizontal;-webkit-box-direction:normal;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;gap:8px}.footer__accordion-icon{background-color:transparent;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='25' fill='none'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.3' d='m15 11.658-3 3-3-3'/%3E%3C/svg%3E\");background-position:50%;background-repeat:no-repeat;background-size:24px 24px;border:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;display:inline-block;font:inherit;font-size:100%;height:24px;margin:0;outline:none;padding:0;vertical-align:initial;width:24px}.footer__accordion-icon.open{-webkit-transform:rotate(-180deg);-ms-transform:rotate(-180deg);transform:rotate(-180deg)}.footer__bottom--new{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.footer__bottom--new .footer__payment{grid-column-gap:25px;max-width:191px}.footer__bottom--new .footer__media{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-column-gap:16px;-moz-column-gap:16px;column-gap:16px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;min-width:500px}.footer__bottom--new .footer__media-svg{max-width:40px}.footer__bottom--new .footer__media-block{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:rgba(99,99,99,.25);border-radius:8px;-webkit-column-gap:10px;-moz-column-gap:10px;column-gap:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;padding:8px 12px;text-decoration:none;width:50%}.footer__bottom--new .footer__media-text{-webkit-box-orient:vertical;-webkit-box-direction:normal;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.footer__bottom--new .footer__media-text p{color:#eaeaea;font-family:Roboto,sans-serif;font-size:12px;font-style:normal;font-weight:400;line-height:140%;margin-bottom:4px;text-decoration:none}@media screen and (max-width:1200px){.footer__bottom--new .footer__payment{grid-column-gap:10px}}@media screen and (max-width:1040px){.footer__bottom--new{grid-auto-flow:unset;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.footer__bottom--new .footer__payment{grid-column-gap:25px;align-self:center;grid-column:2/3;grid-row:2/3}.footer__bottom--new .footer__copyright{grid-column:1/2;grid-row:2/3}.footer__bottom--new .footer__media{grid-column:1/3;grid-row:1/2}}@media screen and (max-width:680px){.footer__bottom--new{grid-template-columns:1fr;grid-template-rows:auto auto auto;margin-top:25px;row-gap:25px}.footer__bottom--new .footer__payment{align-self:flex-end;grid-column:1/2;grid-row:3/4;margin-left:0}.footer__bottom--new .footer__media{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:280px;row-gap:16px;width:100%}.footer__bottom--new .footer__media-block{width:auto}.footer__bottom--new .footer__copyright{font-size:14px}}"
      , e = document.createElement("style");
    e.type = "text/css",
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t)),
    (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
}(),
function(t) {
    var M = {};
    function l() {
        return "undefined" != typeof window ? window : "undefined" != typeof self ? self : M
    }
    function R(t, e, n) {
        n = n || l(),
        n = n.__SENTRY__ = n.__SENTRY__ || {};
        return n[t] || (n[t] = e())
    }
    var N = Object.prototype.toString;
    function H(t) {
        switch (N.call(t)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
            return 1;
        default:
            return d(t, Error)
        }
    }
    function c(t, e) {
        return N.call(t) === "[object ".concat(e, "]")
    }
    function z(t) {
        return c(t, "ErrorEvent")
    }
    function B(t) {
        return c(t, "DOMError")
    }
    function m(t) {
        return c(t, "String")
    }
    function V(t) {
        return null === t || "object" != _typeof(t) && "function" != typeof t
    }
    function h(t) {
        return c(t, "Object")
    }
    function F(t) {
        return "undefined" != typeof Event && d(t, Event)
    }
    function q(t) {
        return Boolean(t && t.then && "function" == typeof t.then)
    }
    function U(t) {
        return "number" == typeof t && t != t
    }
    function d(t, e) {
        try {
            return t instanceof e
        } catch (t) {
            return !1
        }
    }
    function o(t, e) {
        try {
            for (var n, r = t, o = [], a = 0, i = 0, s = " > ".length; r && a++ < 5 && !("html" === (n = function(t, e) {
                var n, r, o, a, i = t, s = [];
                if (!i || !i.tagName)
                    return "";
                s.push(i.tagName.toLowerCase());
                t = e && e.length ? e.filter(function(t) {
                    return i.getAttribute(t)
                }).map(function(t) {
                    return [t, i.getAttribute(t)]
                }) : null;
                if (t && t.length)
                    t.forEach(function(t) {
                        s.push("[".concat(t[0], '="').concat(t[1], '"]'))
                    });
                else if (i.id && s.push("#".concat(i.id)),
                (e = i.className) && m(e))
                    for (n = e.split(/\s+/),
                    a = 0; a < n.length; a++)
                        s.push(".".concat(n[a]));
                var l = ["type", "name", "title", "alt"];
                for (a = 0; a < l.length; a++)
                    r = l[a],
                    (o = i.getAttribute(r)) && s.push("[".concat(r, '="').concat(o, '"]'));
                return s.join("")
            }(r, e)) || 1 < a && 80 <= i + o.length * s + n.length); )
                o.push(n),
                i += n.length,
                r = r.parentNode;
            return o.reverse().join(" > ")
        } catch (t) {
            return "<unknown>"
        }
    }
    var u = function() {
        function n(t) {
            var e;
            return _classCallCheck(this, n),
            (e = _callSuper(this, n, [t])).message = t,
            e.name = (this instanceof n ? this.constructor : void 0).prototype.constructor.name,
            Object.setPrototypeOf(_assertThisInitialized(e), (this instanceof n ? this.constructor : void 0).prototype),
            e
        }
        return _inherits(n, _wrapNativeSuper(Error)),
        _createClass(n)
    }()
      , Z = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;
    function W(t, e) {
        var n = 1 < arguments.length && void 0 !== e && e
          , r = t.host
          , o = t.path
          , a = t.pass
          , i = t.port
          , s = t.projectId
          , l = t.protocol
          , c = t.publicKey;
        return "".concat(l, "://").concat(c).concat(n && a ? ":".concat(a) : "", "@").concat(r).concat(i ? ":".concat(i) : "", "/").concat(o && "".concat(o, "/")).concat(s)
    }
    function K(t) {
        return {
            protocol: t.protocol,
            publicKey: t.publicKey || "",
            pass: t.pass || "",
            host: t.host,
            port: t.port || "",
            path: t.path || "",
            projectId: t.projectId
        }
    }
    function J(t) {
        return ("string" == typeof t ? function(t) {
            var e, n, r, o, a, i, s, l = Z.exec(t);
            if (l)
                return e = (l = _slicedToArray(l.slice(1), 6))[0],
                n = l[1],
                r = void 0 === (r = l[2]) ? "" : r,
                o = l[3],
                a = void 0 === (a = l[4]) ? "" : a,
                i = "",
                1 < (s = (l = l[5]).split("/")).length && (i = s.slice(0, -1).join("/"),
                l = s.pop()),
                K({
                    host: o,
                    pass: r,
                    path: i,
                    projectId: l = l && (s = l.match(/^\d+/)) ? s[0] : l,
                    port: a,
                    protocol: e,
                    publicKey: n
                });
            throw new u("Invalid Sentry Dsn: ".concat(t))
        }
        : K)(t)
    }
    var X = ["debug", "info", "warn", "error", "log", "assert"];
    function p(t, e) {
        var n = 1 < arguments.length && void 0 !== e ? e : 0;
        return "string" != typeof t || 0 === n || t.length <= n ? t : "".concat(t.substr(0, n), "...")
    }
    function G(t, e) {
        if (!Array.isArray(t))
            return "";
        for (var n = [], r = 0; r < t.length; r++) {
            var o = t[r];
            try {
                n.push(String(o))
            } catch (t) {
                n.push("[value cannot be serialized]")
            }
        }
        return n.join(e)
    }
    function f(t, e) {
        return !!m(t) && (c(e, "RegExp") ? e.test(t) : "string" == typeof e && -1 !== t.indexOf(e))
    }
    function g(t, e, n) {
        if (e in t) {
            var r = t[e]
              , n = n(r);
            if ("function" == typeof n)
                try {
                    Q(n, r)
                } catch (t) {}
            t[e] = n
        }
    }
    function Y(t, e, n) {
        Object.defineProperty(t, e, {
            value: n,
            writable: !0,
            configurable: !0
        })
    }
    function Q(t, e) {
        var n = e.prototype || {};
        t.prototype = e.prototype = n,
        Y(t, "__sentry_original__", e)
    }
    function tt(t) {
        return t.__sentry_original__
    }
    function et(t) {
        var e;
        return H(t) ? _objectSpread({
            message: t.message,
            name: t.name,
            stack: t.stack
        }, rt(t)) : F(t) ? (e = _objectSpread({
            type: t.type,
            target: nt(t.target),
            currentTarget: nt(t.currentTarget)
        }, rt(t)),
        "undefined" != typeof CustomEvent && d(t, CustomEvent) && (e.detail = t.detail),
        e) : t
    }
    function nt(t) {
        try {
            return "undefined" != typeof Element && d(t, Element) ? o(t) : Object.prototype.toString.call(t)
        } catch (t) {
            return "<unknown>"
        }
    }
    function rt(t) {
        if ("object" != _typeof(t) || null === t)
            return {};
        var e, n = {};
        for (e in t)
            Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
        return n
    }
    function b(t) {
        return function e(t, n) {
            if (h(t)) {
                if (void 0 !== (s = n.get(t)))
                    return s;
                for (var r = {}, o = 0, a = (n.set(t, r),
                Object.keys(t)); o < a.length; o++) {
                    var i = a[o];
                    void 0 !== t[i] && (r[i] = e(t[i], n))
                }
                return r
            }
            {
                var s;
                if (Array.isArray(t))
                    return void 0 !== (s = n.get(t)) ? s : (r = [],
                    n.set(t, r),
                    t.forEach(function(t) {
                        r.push(e(t, n))
                    }),
                    r)
            }
            return t
        }(t, new Map)
    }
    function ot() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
        var u = e.sort(function(t, e) {
            return t[0] - e[0]
        }).map(function(t) {
            return t[1]
        });
        return function(t) {
            var e, n, r, o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, a = [], i = _createForOfIteratorHelper(t.split("\n").slice(o));
            try {
                for (i.s(); !(e = i.n()).done; ) {
                    var s, l = e.value, c = _createForOfIteratorHelper(u);
                    try {
                        for (c.s(); !(s = c.n()).done; ) {
                            var d = (0,
                            s.value)(l);
                            if (d) {
                                a.push(d);
                                break
                            }
                        }
                    } catch (t) {
                        c.e(t)
                    } finally {
                        c.f()
                    }
                }
            } catch (t) {
                i.e(t)
            } finally {
                i.f()
            }
            return a.length ? (o = (n = a)[0].function || "",
            r = n[n.length - 1].function || "",
            -1 === o.indexOf("captureMessage") && -1 === o.indexOf("captureException") || (n = n.slice(1)),
            (n = -1 !== r.indexOf("sentryWrapped") ? n.slice(0, -1) : n).slice(0, 50).map(function(t) {
                return _objectSpread(_objectSpread({}, t), {}, {
                    filename: t.filename || n[0].filename,
                    function: t.function || "?"
                })
            }).reverse()) : []
        }
    }
    X.forEach(function(t) {
        t,
        0
    });
    var at = "<anonymous>";
    function v(t) {
        try {
            return t && "function" == typeof t && t.name || at
        } catch (t) {
            return at
        }
    }
    function it() {
        if ("fetch"in l())
            try {
                return new Headers,
                new Request(""),
                new Response,
                1
            } catch (t) {}
    }
    function st(t) {
        return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
    }
    var lt, ct, dt, i = l(), a = {}, ut = {};
    function pt(t) {
        if (!ut[t])
            switch (ut[t] = !0,
            t) {
            case "console":
                "console"in i && X.forEach(function(o) {
                    o in i.console && g(i.console, o, function(r) {
                        return function() {
                            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                                e[n] = arguments[n];
                            y("console", {
                                args: e,
                                level: o
                            }),
                            r && r.apply(i.console, e)
                        }
                    })
                });
                break;
            case "dom":
                "document"in i && (a = ft(s = y.bind(null, "dom"), !0),
                i.document.addEventListener("click", a, !1),
                i.document.addEventListener("keypress", a, !1),
                ["EventTarget", "Node"].forEach(function(t) {
                    t = i[t] && i[t].prototype;
                    t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (g(t, "addEventListener", function(i) {
                        return function(t, e, n) {
                            if ("click" === t || "keypress" == t)
                                try {
                                    var r, o = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}, a = o[t] = o[t] || {
                                        refCount: 0
                                    };
                                    a.handler || (r = ft(s),
                                    a.handler = r,
                                    i.call(this, t, r, n)),
                                    a.refCount += 1
                                } catch (t) {}
                            return i.call(this, t, e, n)
                        }
                    }),
                    g(t, "removeEventListener", function(a) {
                        return function(t, e, n) {
                            if ("click" === t || "keypress" == t)
                                try {
                                    var r = this.__sentry_instrumentation_handlers__ || {}
                                      , o = r[t];
                                    o && (--o.refCount,
                                    o.refCount <= 0 && (a.call(this, t, o.handler, n),
                                    o.handler = void 0,
                                    delete r[t]),
                                    0 === Object.keys(r).length) && delete this.__sentry_instrumentation_handlers__
                                } catch (t) {}
                            return a.call(this, t, e, n)
                        }
                    }))
                }));
                break;
            case "xhr":
                "XMLHttpRequest"in i && (g(a = XMLHttpRequest.prototype, "open", function(s) {
                    return function() {
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                            e[n] = arguments[n];
                        function o() {
                            if (4 === a.readyState) {
                                try {
                                    i.status_code = a.status
                                } catch (t) {}
                                y("xhr", {
                                    args: e,
                                    endTimestamp: Date.now(),
                                    startTimestamp: Date.now(),
                                    xhr: a
                                })
                            }
                        }
                        var a = this
                          , r = e[1]
                          , i = a.__sentry_xhr__ = {
                            method: m(e[0]) ? e[0].toUpperCase() : e[0],
                            url: e[1]
                        };
                        m(r) && "POST" === i.method && r.match(/sentry_key/) && (a.__sentry_own_request__ = !0);
                        return "onreadystatechange"in a && "function" == typeof a.onreadystatechange ? g(a, "onreadystatechange", function(r) {
                            return function() {
                                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                                    e[n] = arguments[n];
                                return o(),
                                r.apply(a, e)
                            }
                        }) : a.addEventListener("readystatechange", o),
                        s.apply(a, e)
                    }
                }),
                g(a, "send", function(r) {
                    return function() {
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                            e[n] = arguments[n];
                        return this.__sentry_xhr__ && void 0 !== e[0] && (this.__sentry_xhr__.body = e[0]),
                        y("xhr", {
                            args: e,
                            startTimestamp: Date.now(),
                            xhr: this
                        }),
                        r.apply(this, e)
                    }
                }));
                break;
            case "fetch":
                !function() {
                    if (it()) {
                        var t = l();
                        if (st(t.fetch))
                            return 1;
                        var e = !1
                          , n = t.document;
                        if (n && "function" == typeof n.createElement)
                            try {
                                var r = n.createElement("iframe");
                                r.hidden = !0,
                                n.head.appendChild(r),
                                r.contentWindow && r.contentWindow.fetch && (e = st(r.contentWindow.fetch)),
                                n.head.removeChild(r)
                            } catch (t) {}
                        return e
                    }
                }() || g(i, "fetch", function(o) {
                    return function() {
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                            e[n] = arguments[n];
                        var r = {
                            args: e,
                            fetchData: {
                                method: function() {
                                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
                                    return "Request"in i && d(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : "GET"
                                }(e),
                                url: function() {
                                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
                                    return "string" == typeof t[0] ? t[0] : "Request"in i && d(t[0], Request) ? t[0].url : String(t[0])
                                }(e)
                            },
                            startTimestamp: Date.now()
                        };
                        return y("fetch", _objectSpread({}, r)),
                        o.apply(i, e).then(function(t) {
                            return y("fetch", _objectSpread(_objectSpread({}, r), {}, {
                                endTimestamp: Date.now(),
                                response: t
                            })),
                            t
                        }, function(t) {
                            throw y("fetch", _objectSpread(_objectSpread({}, r), {}, {
                                endTimestamp: Date.now(),
                                error: t
                            })),
                            t
                        })
                    }
                });
                break;
            case "history":
                n = l(),
                r = (r = n.chrome) && r.app && r.app.runtime,
                n = "history"in n && !!n.history.pushState && !!n.history.replaceState,
                !r && n && (o = i.onpopstate,
                i.onpopstate = function() {
                    var t = i.location.href;
                    if (y("history", {
                        from: lt,
                        to: lt = t
                    }),
                    o)
                        try {
                            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                                n[r] = arguments[r];
                            return o.apply(this, n)
                        } catch (t) {}
                }
                ,
                g(i.history, "pushState", e),
                g(i.history, "replaceState", e));
                break;
            case "error":
                mt = i.onerror,
                i.onerror = function(t, e, n, r, o) {
                    return y("error", {
                        column: r,
                        error: o,
                        line: n,
                        msg: t,
                        url: e
                    }),
                    !!mt && mt.apply(this, arguments)
                }
                ;
                break;
            case "unhandledrejection":
                ht = i.onunhandledrejection,
                i.onunhandledrejection = function(t) {
                    return y("unhandledrejection", t),
                    !ht || ht.apply(this, arguments)
                }
            }
        function e(a) {
            return function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                var r, o = 2 < e.length ? e[2] : void 0;
                return o && (r = lt,
                o = String(o),
                y("history", {
                    from: r,
                    to: lt = o
                })),
                a.apply(this, e)
            }
        }
        var n, r, o, s, a
    }
    function _(t, e) {
        a[t] = a[t] || [],
        a[t].push(e),
        pt(t)
    }
    function y(t, e) {
        if (t && a[t]) {
            var n, r = _createForOfIteratorHelper(a[t] || []);
            try {
                for (r.s(); !(n = r.n()).done; ) {
                    var o = n.value;
                    try {
                        o(e)
                    } catch (t) {}
                }
            } catch (t) {
                r.e(t)
            } finally {
                r.f()
            }
        }
    }
    function ft(n, t) {
        var r = 1 < arguments.length && void 0 !== t && t;
        return function(t) {
            var e;
            t && dt !== t && !function(t) {
                if ("keypress" === t.type) {
                    try {
                        var e = t.target;
                        if (!e || !e.tagName)
                            return 1;
                        if ("INPUT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable)
                            return
                    } catch (t) {}
                    return 1
                }
            }(t) && (e = "keypress" === t.type ? "input" : t.type,
            void 0 !== ct && !function(t, e) {
                if (!t)
                    return 1;
                if (t.type !== e.type)
                    return 1;
                try {
                    if (t.target !== e.target)
                        return 1
                } catch (t) {}
            }(dt, t) || (n({
                event: t,
                name: e,
                global: r
            }),
            dt = t),
            clearTimeout(ct),
            ct = i.setTimeout(function() {
                ct = void 0
            }, 1e3))
        }
    }
    var r, mt = null, ht = null;
    function x() {
        var t, e = l(), e = e.crypto || e.msCrypto;
        return void 0 !== e && e.getRandomValues ? (t = new Uint16Array(8),
        e.getRandomValues(t),
        t[3] = 4095 & t[3] | 16384,
        t[4] = 16383 & t[4] | 32768,
        (e = function(t) {
            for (var e = t.toString(16); e.length < 4; )
                e = "0".concat(e);
            return e
        }
        )(t[0]) + e(t[1]) + e(t[2]) + e(t[3]) + e(t[4]) + e(t[5]) + e(t[6]) + e(t[7])) : "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(t) {
            var e = 16 * Math.random() | 0;
            return ("x" === t ? e : 3 & e | 8).toString(16)
        })
    }
    function gt(t) {
        var e, n;
        return (t = t && t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/)) ? (e = t[6] || "",
        n = t[8] || "",
        {
            host: t[4],
            path: t[5],
            protocol: t[2],
            relative: t[5] + e + n
        }) : {}
    }
    function vt(t) {
        return t.exception && t.exception.values ? t.exception.values[0] : void 0
    }
    function _t(t, e, n) {
        t = t.exception = t.exception || {},
        t = t.values = t.values || [],
        t = t[0] = t[0] || {};
        t.value || (t.value = e || ""),
        t.type || (t.type = n || "Error")
    }
    function yt(t, e) {
        var n, t = vt(t);
        t && (n = t.mechanism,
        t.mechanism = _objectSpread(_objectSpread({
            type: "generic",
            handled: !0
        }, n), e),
        e) && "data"in e && (n = _objectSpread(_objectSpread({}, n && n.data), e.data),
        t.mechanism.data = n)
    }
    function bt(t) {
        if (t && t.__sentry_captured__)
            return 1;
        try {
            Y(t, "__sentry_captured__", !0)
        } catch (t) {}
    }
    function k(t, e, n) {
        var r = 1 < arguments.length && void 0 !== e ? e : 1 / 0
          , o = 2 < arguments.length && void 0 !== n ? n : 1 / 0;
        try {
            return function t(e, n) {
                var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1 / 0;
                var o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 1 / 0;
                var a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : function() {
                    var n = "function" == typeof WeakSet
                      , r = n ? new WeakSet : [];
                    return [function(t) {
                        if (n)
                            return !!r.has(t) || (r.add(t),
                            !1);
                        for (var e = 0; e < r.length; e++)
                            if (r[e] === t)
                                return !0;
                        return r.push(t),
                        !1
                    }
                    , function(t) {
                        if (n)
                            r.delete(t);
                        else
                            for (var e = 0; e < r.length; e++)
                                if (r[e] === t) {
                                    r.splice(e, 1);
                                    break
                                }
                    }
                    ]
                }();
                var i = _slicedToArray(a, 2)
                  , s = i[0]
                  , i = i[1];
                var l = n;
                if (l && "function" == typeof l.toJSON)
                    try {
                        return l.toJSON()
                    } catch (e) {}
                if (null === n || ["number", "boolean", "string"].includes(_typeof(n)) && !U(n))
                    return n;
                l = function(t, e) {
                    try {
                        return "domain" === t && e && "object" == _typeof(e) && e.t ? "[Domain]" : "domainEmitter" === t ? "[DomainEmitter]" : "undefined" != typeof global && e === global ? "[Global]" : "undefined" != typeof window && e === window ? "[Window]" : "undefined" != typeof document && e === document ? "[Document]" : h(n = e) && "nativeEvent"in n && "preventDefault"in n && "stopPropagation"in n ? "[SyntheticEvent]" : "number" == typeof e && e != e ? "[NaN]" : void 0 === e ? "[undefined]" : "function" == typeof e ? "[Function: ".concat(v(e), "]") : "symbol" == _typeof(e) ? "[".concat(String(e), "]") : "bigint" == typeof e ? "[BigInt: ".concat(String(e), "]") : "[object ".concat(Object.getPrototypeOf(e).constructor.name, "]")
                    } catch (t) {
                        return "**non-serializable** (".concat(t, ")")
                    }
                    var n
                }(e, n);
                if (!l.startsWith("[object "))
                    return l;
                if (n.__sentry_skip_normalization__)
                    return n;
                if (0 === r)
                    return l.replace("object ", "");
                if (s(n))
                    return "[Circular ~]";
                var c = Array.isArray(n) ? [] : {};
                var d = 0;
                var u = et(n);
                for (var p in u)
                    if (Object.prototype.hasOwnProperty.call(u, p)) {
                        if (o <= d) {
                            c[p] = "[MaxProperties ~]";
                            break
                        }
                        var f = u[p];
                        c[p] = t(p, f, r - 1, o, a),
                        d += 1
                    }
                return i(n),
                c
            }("", t, r, o)
        } catch (t) {
            return {
                ERROR: "**non-serializable** (".concat(t, ")")
            }
        }
    }
    function w(e) {
        return new S(function(t) {
            t(e)
        }
        )
    }
    function xt(n) {
        return new S(function(t, e) {
            e(n)
        }
        )
    }
    (e = r = r || {})[e.PENDING = 0] = "PENDING",
    e[e.RESOLVED = 1] = "RESOLVED",
    e[e.REJECTED = 2] = "REJECTED";
    var S = function() {
        function e(t) {
            _classCallCheck(this, e),
            e.prototype.__init.call(this),
            e.prototype.__init2.call(this),
            e.prototype.__init3.call(this),
            e.prototype.__init4.call(this),
            e.prototype.__init5.call(this),
            e.prototype.__init6.call(this);
            try {
                t(this.u, this.h)
            } catch (t) {
                this.h(t)
            }
        }
        return _createClass(e, [{
            key: "__init",
            value: function() {
                this.i = r.PENDING
            }
        }, {
            key: "__init2",
            value: function() {
                this.o = []
            }
        }, {
            key: "then",
            value: function(r, o) {
                var t = this;
                return new e(function(e, n) {
                    t.o.push([!1, function(t) {
                        if (r)
                            try {
                                e(r(t))
                            } catch (t) {
                                n(t)
                            }
                        else
                            e(t)
                    }
                    , function(t) {
                        if (o)
                            try {
                                e(o(t))
                            } catch (t) {
                                n(t)
                            }
                        else
                            n(t)
                    }
                    ]),
                    t.l()
                }
                )
            }
        }, {
            key: "catch",
            value: function(t) {
                return this.then(function(t) {
                    return t
                }, t)
            }
        }, {
            key: "finally",
            value: function(o) {
                var a = this;
                return new e(function(t, e) {
                    var n, r;
                    return a.then(function(t) {
                        r = !1,
                        n = t,
                        o && o()
                    }, function(t) {
                        r = !0,
                        n = t,
                        o && o()
                    }).then(function() {
                        (r ? e : t)(n)
                    })
                }
                )
            }
        }, {
            key: "__init3",
            value: function() {
                var e = this;
                this.u = function(t) {
                    e.v(r.RESOLVED, t)
                }
            }
        }, {
            key: "__init4",
            value: function() {
                var e = this;
                this.h = function(t) {
                    e.v(r.REJECTED, t)
                }
            }
        }, {
            key: "__init5",
            value: function() {
                var n = this;
                this.v = function(t, e) {
                    n.i === r.PENDING && (q(e) ? e.then(n.u, n.h) : (n.i = t,
                    n.p = e,
                    n.l()))
                }
            }
        }, {
            key: "__init6",
            value: function() {
                var e = this;
                this.l = function() {
                    var t;
                    e.i !== r.PENDING && (t = e.o.slice(),
                    e.o = [],
                    t.forEach(function(t) {
                        t[0] || (e.i === r.RESOLVED && t[1](e.p),
                        e.i === r.REJECTED && t[2](e.p),
                        t[0] = !0)
                    }))
                }
            }
        }])
    }();
    var kt = ["fatal", "error", "warning", "log", "info", "debug"]
      , e = {
        nowSeconds: function() {
            return Date.now() / 1e3
        }
    }
      , wt = function() {
        var t = l().performance;
        if (t && t.now)
            return {
                now: function() {
                    return t.now()
                },
                timeOrigin: Date.now() - t.now()
            }
    }()
      , n = void 0 === wt ? e : {
        nowSeconds: function() {
            return (wt.timeOrigin + wt.now()) / 1e3
        }
    }
      , St = e.nowSeconds.bind(e)
      , Ct = n.nowSeconds.bind(n)
      , Tt = Ct
      , jt = function() {
        var t, e, n, r, o, a = l().performance;
        if (a && a.now)
            return o = a.now(),
            t = Date.now(),
            n = (e = a.timeOrigin ? Math.abs(a.timeOrigin + o - t) : 36e5) < 36e5,
            o = "number" == typeof (r = a.timing && a.timing.navigationStart) ? Math.abs(r + o - t) : 36e5,
            n || o < 36e5 ? e <= o ? a.timeOrigin : r : t
    }()
      , Ot = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
    function Et(t, e) {
        return [t, 1 < arguments.length && void 0 !== e ? e : []]
    }
    function At(t, n) {
        t[1].forEach(function(t) {
            var e = t[0].type;
            n(t, e)
        })
    }
    function Pt(t, e) {
        return (e || new TextEncoder).encode(t)
    }
    function It(t, e) {
        var t = _slicedToArray(t, 2)
          , n = t[0]
          , t = t[1]
          , r = JSON.stringify(n);
        function o(t) {
            "string" == typeof r ? r = "string" == typeof t ? r + t : [Pt(r, e), t] : r.push("string" == typeof t ? Pt(t, e) : t)
        }
        var a, i = _createForOfIteratorHelper(t);
        try {
            for (i.s(); !(a = i.n()).done; ) {
                var s = _slicedToArray(a.value, 2)
                  , l = s[0]
                  , c = s[1];
                o("\n".concat(JSON.stringify(l), "\n")),
                o("string" == typeof c || c instanceof Uint8Array ? c : JSON.stringify(c))
            }
        } catch (t) {
            i.e(t)
        } finally {
            i.f()
        }
        if ("string" == typeof r)
            return r;
        var d, n = r, t = n.reduce(function(t, e) {
            return t + e.length
        }, 0), u = new Uint8Array(t), p = 0, f = _createForOfIteratorHelper(n);
        try {
            for (f.s(); !(d = f.n()).done; ) {
                var m = d.value;
                u.set(m, p),
                p += m.length
            }
        } catch (t) {
            f.e(t)
        } finally {
            f.f()
        }
        return u
    }
    var Lt = {
        session: "session",
        sessions: "session",
        attachment: "attachment",
        transaction: "transaction",
        event: "error",
        client_report: "internal",
        user_report: "default"
    };
    function Dt(t) {
        return Lt[t]
    }
    var C = "baggage"
      , $t = /^sentry-/;
    function Mt(t, e) {
        var n = 1 < arguments.length && void 0 !== e ? e : "";
        return [_objectSpread({}, t), n]
    }
    function Rt(t, e, n) {
        t[0][e] = n
    }
    function Nt(t) {
        return 0 === Object.keys(t[0]).length
    }
    function Ht(t) {
        return t[1]
    }
    function zt(t) {
        return t.split(",").reduce(function(t, e) {
            var t = _slicedToArray(t, 2)
              , n = t[0]
              , t = t[1]
              , r = _slicedToArray(e.split("="), 2)
              , o = r[0]
              , r = r[1];
            return $t.test(o) ? (o = decodeURIComponent(o.split("-")[1]),
            [_objectSpread(_objectSpread({}, n), {}, _defineProperty({}, o, decodeURIComponent(r))), t]) : [n, "" === t ? e : "".concat(t, ",").concat(e)]
        }, [{}, ""])
    }
    function Bt(t, e) {
        var r;
        return t || e ? (e = (e = e && zt(e) || void 0) && e[1],
        r = Mt(t && t[0] || {}, e || t && t[1] || ""),
        Object.keys(r[0]).reduce(function(t, e) {
            var n = r[0][e]
              , e = "sentry-".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(n))
              , n = "" === t ? e : "".concat(t, ",").concat(e);
            return 8192 < n.length ? t : n
        }, r[1])) : ""
    }
    function Vt(t) {
        var e = Ct()
          , n = {
            sid: x(),
            init: !0,
            timestamp: e,
            started: e,
            duration: 0,
            status: "ok",
            errors: 0,
            ignoreDuration: !1,
            toJSON: function() {
                return b({
                    sid: "".concat((t = n).sid),
                    init: t.init,
                    started: new Date(1e3 * t.started).toISOString(),
                    timestamp: new Date(1e3 * t.timestamp).toISOString(),
                    status: t.status,
                    errors: t.errors,
                    did: "number" == typeof t.did || "string" == typeof t.did ? "".concat(t.did) : void 0,
                    duration: t.duration,
                    attrs: {
                        release: t.release,
                        environment: t.environment,
                        ip_address: t.ipAddress,
                        user_agent: t.userAgent
                    }
                });
                var t
            }
        };
        return t && s(n, t),
        n
    }
    function s(t, e) {
        var n, r = 1 < arguments.length && void 0 !== e ? e : {};
        r.user && (!t.ipAddress && r.user.ip_address && (t.ipAddress = r.user.ip_address),
        t.did || r.did || (t.did = r.user.id || r.user.email || r.user.username)),
        t.timestamp = r.timestamp || Ct(),
        r.ignoreDuration && (t.ignoreDuration = r.ignoreDuration),
        r.sid && (t.sid = 32 === r.sid.length ? r.sid : x()),
        void 0 !== r.init && (t.init = r.init),
        !t.did && r.did && (t.did = "".concat(r.did)),
        "number" == typeof r.started && (t.started = r.started),
        t.ignoreDuration ? t.duration = void 0 : "number" == typeof r.duration ? t.duration = r.duration : (n = t.timestamp - t.started,
        t.duration = 0 <= n ? n : 0),
        r.release && (t.release = r.release),
        r.environment && (t.environment = r.environment),
        !t.ipAddress && r.ipAddress && (t.ipAddress = r.ipAddress),
        !t.userAgent && r.userAgent && (t.userAgent = r.userAgent),
        "number" == typeof r.errors && (t.errors = r.errors),
        r.status && (t.status = r.status)
    }
    var Ft = function() {
        function n() {
            _classCallCheck(this, n),
            n.prototype.__init.call(this),
            n.prototype.__init2.call(this),
            n.prototype.__init3.call(this),
            n.prototype.__init4.call(this),
            n.prototype.__init5.call(this),
            n.prototype.__init6.call(this),
            n.prototype.__init7.call(this),
            n.prototype.__init8.call(this),
            n.prototype.__init9.call(this),
            n.prototype.__init10.call(this)
        }
        return _createClass(n, [{
            key: "__init",
            value: function() {
                this.m = !1
            }
        }, {
            key: "__init2",
            value: function() {
                this.g = []
            }
        }, {
            key: "__init3",
            value: function() {
                this._ = []
            }
        }, {
            key: "__init4",
            value: function() {
                this.S = []
            }
        }, {
            key: "__init5",
            value: function() {
                this.T = {}
            }
        }, {
            key: "__init6",
            value: function() {
                this.O = {}
            }
        }, {
            key: "__init7",
            value: function() {
                this.k = {}
            }
        }, {
            key: "__init8",
            value: function() {
                this.j = {}
            }
        }, {
            key: "__init9",
            value: function() {
                this.R = []
            }
        }, {
            key: "__init10",
            value: function() {
                this.C = {}
            }
        }, {
            key: "addScopeListener",
            value: function(t) {
                this.g.push(t)
            }
        }, {
            key: "addEventProcessor",
            value: function(t) {
                return this._.push(t),
                this
            }
        }, {
            key: "setUser",
            value: function(t) {
                return this.T = t || {},
                this.M && s(this.M, {
                    user: t
                }),
                this.q(),
                this
            }
        }, {
            key: "getUser",
            value: function() {
                return this.T
            }
        }, {
            key: "getRequestSession",
            value: function() {
                return this.N
            }
        }, {
            key: "setRequestSession",
            value: function(t) {
                return this.N = t,
                this
            }
        }, {
            key: "setTags",
            value: function(t) {
                return this.O = _objectSpread(_objectSpread({}, this.O), t),
                this.q(),
                this
            }
        }, {
            key: "setTag",
            value: function(t, e) {
                return this.O = _objectSpread(_objectSpread({}, this.O), {}, _defineProperty({}, t, e)),
                this.q(),
                this
            }
        }, {
            key: "setExtras",
            value: function(t) {
                return this.k = _objectSpread(_objectSpread({}, this.k), t),
                this.q(),
                this
            }
        }, {
            key: "setExtra",
            value: function(t, e) {
                return this.k = _objectSpread(_objectSpread({}, this.k), {}, _defineProperty({}, t, e)),
                this.q(),
                this
            }
        }, {
            key: "setFingerprint",
            value: function(t) {
                return this.A = t,
                this.q(),
                this
            }
        }, {
            key: "setLevel",
            value: function(t) {
                return this.D = t,
                this.q(),
                this
            }
        }, {
            key: "setTransactionName",
            value: function(t) {
                return this.L = t,
                this.q(),
                this
            }
        }, {
            key: "setContext",
            value: function(t, e) {
                return null === e ? delete this.j[t] : this.j = _objectSpread(_objectSpread({}, this.j), {}, _defineProperty({}, t, e)),
                this.q(),
                this
            }
        }, {
            key: "setSpan",
            value: function(t) {
                return this.I = t,
                this.q(),
                this
            }
        }, {
            key: "getSpan",
            value: function() {
                return this.I
            }
        }, {
            key: "getTransaction",
            value: function() {
                var t = this.getSpan();
                return t && t.transaction
            }
        }, {
            key: "setSession",
            value: function(t) {
                return t ? this.M = t : delete this.M,
                this.q(),
                this
            }
        }, {
            key: "getSession",
            value: function() {
                return this.M
            }
        }, {
            key: "update",
            value: function(t) {
                var e;
                return t ? "function" == typeof t ? (e = t(this))instanceof n ? e : this : (t instanceof n ? (this.O = _objectSpread(_objectSpread({}, this.O), t.O),
                this.k = _objectSpread(_objectSpread({}, this.k), t.k),
                this.j = _objectSpread(_objectSpread({}, this.j), t.j),
                t.T && Object.keys(t.T).length && (this.T = t.T),
                t.D && (this.D = t.D),
                t.A && (this.A = t.A),
                t.N && (this.N = t.N)) : h(t) && (this.O = _objectSpread(_objectSpread({}, this.O), t.tags),
                this.k = _objectSpread(_objectSpread({}, this.k), t.extra),
                this.j = _objectSpread(_objectSpread({}, this.j), t.contexts),
                t.user && (this.T = t.user),
                t.level && (this.D = t.level),
                t.fingerprint && (this.A = t.fingerprint),
                t.requestSession) && (this.N = t.requestSession),
                this) : this
            }
        }, {
            key: "clear",
            value: function() {
                return this.S = [],
                this.O = {},
                this.k = {},
                this.T = {},
                this.j = {},
                this.D = void 0,
                this.L = void 0,
                this.A = void 0,
                this.N = void 0,
                this.I = void 0,
                this.M = void 0,
                this.q(),
                this.R = [],
                this
            }
        }, {
            key: "addBreadcrumb",
            value: function(t, e) {
                e = "number" == typeof e ? Math.min(e, 100) : 100;
                return e <= 0 || (t = _objectSpread({
                    timestamp: St()
                }, t),
                this.S = [].concat(_toConsumableArray(this.S), [t]).slice(-e),
                this.q()),
                this
            }
        }, {
            key: "clearBreadcrumbs",
            value: function() {
                return this.S = [],
                this.q(),
                this
            }
        }, {
            key: "addAttachment",
            value: function(t) {
                return this.R.push(t),
                this
            }
        }, {
            key: "getAttachments",
            value: function() {
                return this.R
            }
        }, {
            key: "clearAttachments",
            value: function() {
                return this.R = [],
                this
            }
        }, {
            key: "applyToEvent",
            value: function(t) {
                var e, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                return this.k && Object.keys(this.k).length && (t.extra = _objectSpread(_objectSpread({}, this.k), t.extra)),
                this.O && Object.keys(this.O).length && (t.tags = _objectSpread(_objectSpread({}, this.O), t.tags)),
                this.T && Object.keys(this.T).length && (t.user = _objectSpread(_objectSpread({}, this.T), t.user)),
                this.j && Object.keys(this.j).length && (t.contexts = _objectSpread(_objectSpread({}, this.j), t.contexts)),
                this.D && (t.level = this.D),
                this.L && (t.transaction = this.L),
                this.I && (t.contexts = _objectSpread({
                    trace: this.I.getTraceContext()
                }, t.contexts),
                e = this.I.transaction && this.I.transaction.name) && (t.tags = _objectSpread({
                    transaction: e
                }, t.tags)),
                this.U(t),
                t.breadcrumbs = [].concat(_toConsumableArray(t.breadcrumbs || []), _toConsumableArray(this.S)),
                t.breadcrumbs = 0 < t.breadcrumbs.length ? t.breadcrumbs : void 0,
                t.sdkProcessingMetadata = this.C,
                this.F([].concat(_toConsumableArray(qt()), _toConsumableArray(this._)), t, n)
            }
        }, {
            key: "setSDKProcessingMetadata",
            value: function(t) {
                return this.C = _objectSpread(_objectSpread({}, this.C), t),
                this
            }
        }, {
            key: "F",
            value: function(r, o, a) {
                var i = this
                  , s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
                return new S(function(e, t) {
                    var n = r[s];
                    null === o || "function" != typeof n ? e(o) : (q(n = n(_objectSpread({}, o), a)) ? n.then(function(t) {
                        return i.F(r, t, a, s + 1).then(e)
                    }) : i.F(r, n, a, s + 1).then(e)).then(null, t)
                }
                )
            }
        }, {
            key: "q",
            value: function() {
                var e = this;
                this.m || (this.m = !0,
                this.g.forEach(function(t) {
                    t(e)
                }),
                this.m = !1)
            }
        }, {
            key: "U",
            value: function(t) {
                t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [],
                this.A && (t.fingerprint = t.fingerprint.concat(this.A)),
                t.fingerprint && !t.fingerprint.length && delete t.fingerprint
            }
        }], [{
            key: "clone",
            value: function(t) {
                var e = new n;
                return t && (e.S = _toConsumableArray(t.S),
                e.O = _objectSpread({}, t.O),
                e.k = _objectSpread({}, t.k),
                e.j = _objectSpread({}, t.j),
                e.T = t.T,
                e.D = t.D,
                e.I = t.I,
                e.M = t.M,
                e.L = t.L,
                e.A = t.A,
                e._ = _toConsumableArray(t._),
                e.N = t.N,
                e.R = _toConsumableArray(t.R)),
                e
            }
        }])
    }();
    function qt() {
        return R("globalEventProcessors", function() {
            return []
        })
    }
    function Ut(t) {
        qt().push(t)
    }
    var Zt = function() {
        function r(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : new Ft
              , n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 4;
            _classCallCheck(this, r),
            this.B = n,
            r.prototype.__init.call(this),
            this.getStackTop().scope = e,
            t && this.bindClient(t)
        }
        return _createClass(r, [{
            key: "__init",
            value: function() {
                this.P = [{}]
            }
        }, {
            key: "isOlderThan",
            value: function(t) {
                return this.B < t
            }
        }, {
            key: "bindClient",
            value: function(t) {
                (this.getStackTop().client = t) && t.setupIntegrations && t.setupIntegrations()
            }
        }, {
            key: "pushScope",
            value: function() {
                var t = Ft.clone(this.getScope());
                return this.getStack().push({
                    client: this.getClient(),
                    scope: t
                }),
                t
            }
        }, {
            key: "popScope",
            value: function() {
                return !(this.getStack().length <= 1 || !this.getStack().pop())
            }
        }, {
            key: "withScope",
            value: function(t) {
                var e = this.pushScope();
                try {
                    t(e)
                } finally {
                    this.popScope()
                }
            }
        }, {
            key: "getClient",
            value: function() {
                return this.getStackTop().client
            }
        }, {
            key: "getScope",
            value: function() {
                return this.getStackTop().scope
            }
        }, {
            key: "getStack",
            value: function() {
                return this.P
            }
        }, {
            key: "getStackTop",
            value: function() {
                return this.P[this.P.length - 1]
            }
        }, {
            key: "captureException",
            value: function(n, r) {
                var o = this.H = r && r.event_id ? r.event_id : x()
                  , a = new Error("Sentry syntheticException");
                return this.X(function(t, e) {
                    t.captureException(n, _objectSpread(_objectSpread({
                        originalException: n,
                        syntheticException: a
                    }, r), {}, {
                        event_id: o
                    }), e)
                }),
                o
            }
        }, {
            key: "captureMessage",
            value: function(n, r, o) {
                var a = this.H = o && o.event_id ? o.event_id : x()
                  , i = new Error(n);
                return this.X(function(t, e) {
                    t.captureMessage(n, r, _objectSpread(_objectSpread({
                        originalException: n,
                        syntheticException: i
                    }, o), {}, {
                        event_id: a
                    }), e)
                }),
                a
            }
        }, {
            key: "captureEvent",
            value: function(n, r) {
                var o = r && r.event_id ? r.event_id : x();
                return "transaction" !== n.type && (this.H = o),
                this.X(function(t, e) {
                    t.captureEvent(n, _objectSpread(_objectSpread({}, r), {}, {
                        event_id: o
                    }), e)
                }),
                o
            }
        }, {
            key: "lastEventId",
            value: function() {
                return this.H
            }
        }, {
            key: "addBreadcrumb",
            value: function(t, e) {
                var n, r, o, a = this.getStackTop(), i = a.scope, a = a.client;
                i && a && (o = (a = a.getOptions && a.getOptions() || {}).beforeBreadcrumb,
                n = void 0 === o ? null : o,
                (a = void 0 === (o = a.maxBreadcrumbs) ? 100 : o) <= 0 || (r = _objectSpread({
                    timestamp: St()
                }, t),
                null !== (o = n ? function(t) {
                    var n = l();
                    if (!("console"in n))
                        return t();
                    var r = n.console
                      , o = {};
                    X.forEach(function(t) {
                        var e = r[t] && r[t].__sentry_original__;
                        t in n.console && e && (o[t] = r[t],
                        r[t] = e)
                    });
                    try {
                        return t()
                    } finally {
                        Object.keys(o).forEach(function(t) {
                            r[t] = o[t]
                        })
                    }
                }(function() {
                    return n(r, e)
                }) : r) && i.addBreadcrumb(o, a)))
            }
        }, {
            key: "setUser",
            value: function(t) {
                var e = this.getScope();
                e && e.setUser(t)
            }
        }, {
            key: "setTags",
            value: function(t) {
                var e = this.getScope();
                e && e.setTags(t)
            }
        }, {
            key: "setExtras",
            value: function(t) {
                var e = this.getScope();
                e && e.setExtras(t)
            }
        }, {
            key: "setTag",
            value: function(t, e) {
                var n = this.getScope();
                n && n.setTag(t, e)
            }
        }, {
            key: "setExtra",
            value: function(t, e) {
                var n = this.getScope();
                n && n.setExtra(t, e)
            }
        }, {
            key: "setContext",
            value: function(t, e) {
                var n = this.getScope();
                n && n.setContext(t, e)
            }
        }, {
            key: "configureScope",
            value: function(t) {
                var e = this.getStackTop()
                  , n = e.scope
                  , e = e.client;
                n && e && t(n)
            }
        }, {
            key: "run",
            value: function(t) {
                var e = Kt(this);
                try {
                    t(this)
                } finally {
                    Kt(e)
                }
            }
        }, {
            key: "getIntegration",
            value: function(t) {
                var e = this.getClient();
                if (!e)
                    return null;
                try {
                    return e.getIntegration(t)
                } catch (t) {
                    return null
                }
            }
        }, {
            key: "startTransaction",
            value: function(t, e) {
                return this.W("startTransaction", t, e)
            }
        }, {
            key: "traceHeaders",
            value: function() {
                return this.W("traceHeaders")
            }
        }, {
            key: "captureSession",
            value: function() {
                if (0 < arguments.length && void 0 !== arguments[0] && arguments[0])
                    return this.endSession();
                this.J()
            }
        }, {
            key: "endSession",
            value: function() {
                var t, e = this.getStackTop(), e = e && e.scope, n = e && e.getSession();
                n && (t = {},
                s(n, t = "ok" === n.status ? {
                    status: "exited"
                } : t)),
                this.J(),
                e && e.setSession()
            }
        }, {
            key: "startSession",
            value: function(t) {
                var e = this.getStackTop()
                  , n = e.scope
                  , e = e.client
                  , e = e && e.getOptions() || {}
                  , r = e.release
                  , e = e.environment
                  , o = (l().navigator || {}).userAgent
                  , r = Vt(_objectSpread(_objectSpread(_objectSpread({
                    release: r,
                    environment: e
                }, n && {
                    user: n.getUser()
                }), o && {
                    userAgent: o
                }), t));
                return n && ((e = n.getSession && n.getSession()) && "ok" === e.status && s(e, {
                    status: "exited"
                }),
                this.endSession(),
                n.setSession(r)),
                r
            }
        }, {
            key: "J",
            value: function() {
                var t = this.getStackTop()
                  , e = t.scope
                  , t = t.client;
                e && (e = e.getSession()) && t && t.captureSession && t.captureSession(e)
            }
        }, {
            key: "X",
            value: function(t) {
                var e = this.getStackTop()
                  , n = e.scope
                  , e = e.client;
                e && t(e, n)
            }
        }, {
            key: "W",
            value: function(t) {
                for (var e = Wt().__SENTRY__, n = arguments.length, r = new Array(1 < n ? n - 1 : 0), o = 1; o < n; o++)
                    r[o - 1] = arguments[o];
                if (e && e.extensions && "function" == typeof e.extensions[t])
                    return e.extensions[t].apply(this, r)
            }
        }])
    }();
    function Wt() {
        var t = l();
        return t.__SENTRY__ = t.__SENTRY__ || {
            extensions: {},
            hub: void 0
        },
        t
    }
    function Kt(t) {
        var e = Wt()
          , n = Jt(e);
        return Xt(e, t),
        n
    }
    function T() {
        var t = Wt();
        return t && t.__SENTRY__ && t.__SENTRY__.hub && !Jt(t).isOlderThan(4) || Xt(t, new Zt),
        Jt(t)
    }
    function Jt(t) {
        return R("hub", function() {
            return new Zt
        }, t)
    }
    function Xt(t, e) {
        t && ((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e)
    }
    function Gt(t, e) {
        return T().captureException(t, {
            captureContext: e
        })
    }
    function Yt(t) {
        T().withScope(t)
    }
    function Qt(t) {
        var e = t.protocol ? "".concat(t.protocol, ":") : ""
          , n = t.port ? ":".concat(t.port) : "";
        return "".concat(e, "//").concat(t.host).concat(n).concat(t.path ? "/".concat(t.path) : "", "/api/")
    }
    function te(t, e) {
        return e || "".concat("".concat(Qt(e = t)).concat(e.projectId, "/envelope/"), "?").concat((n = {
            sentry_key: t.publicKey,
            sentry_version: "7"
        },
        Object.keys(n).map(function(t) {
            return "".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(n[t]))
        }).join("&")));
        var n
    }
    function ee(t) {
        if (t && t.sdk)
            return {
                name: (t = t.sdk).name,
                version: t.version
            }
    }
    var ne = [];
    function re(t) {
        return t.reduce(function(t, e) {
            return t.every(function(t) {
                return e.name !== t.name
            }) && t.push(e),
            t
        }, [])
    }
    var oe = function() {
        function n(t) {
            var e;
            _classCallCheck(this, n),
            n.prototype.__init.call(this),
            n.prototype.__init2.call(this),
            n.prototype.__init3.call(this),
            n.prototype.__init4.call(this),
            (this.Z = t).dsn && (this.tt = J(t.dsn),
            e = te(this.tt, t.tunnel),
            this.et = t.transport(_objectSpread(_objectSpread({
                recordDroppedEvent: this.recordDroppedEvent.bind(this)
            }, t.transportOptions), {}, {
                url: e
            })))
        }
        return _createClass(n, [{
            key: "__init",
            value: function() {
                this.G = {}
            }
        }, {
            key: "__init2",
            value: function() {
                this.K = !1
            }
        }, {
            key: "__init3",
            value: function() {
                this.V = 0
            }
        }, {
            key: "__init4",
            value: function() {
                this.Y = {}
            }
        }, {
            key: "captureException",
            value: function(t, e, n) {
                var r, o = this;
                if (!bt(t))
                    return r = e && e.event_id,
                    this.nt(this.eventFromException(t, e).then(function(t) {
                        return o.rt(t, e, n)
                    }).then(function(t) {
                        r = t
                    })),
                    r
            }
        }, {
            key: "captureMessage",
            value: function(t, e, n, r) {
                var o = this
                  , a = n && n.event_id
                  , e = V(t) ? this.eventFromMessage(String(t), e, n) : this.eventFromException(t, n);
                return this.nt(e.then(function(t) {
                    return o.rt(t, n, r)
                }).then(function(t) {
                    a = t
                })),
                a
            }
        }, {
            key: "captureEvent",
            value: function(t, e, n) {
                var r;
                if (!(e && e.originalException && bt(e.originalException)))
                    return r = e && e.event_id,
                    this.nt(this.rt(t, e, n).then(function(t) {
                        r = t
                    })),
                    r
            }
        }, {
            key: "captureSession",
            value: function(t) {
                !this.it() || "string" == typeof t.release && (this.sendSession(t),
                s(t, {
                    init: !1
                }))
            }
        }, {
            key: "getDsn",
            value: function() {
                return this.tt
            }
        }, {
            key: "getOptions",
            value: function() {
                return this.Z
            }
        }, {
            key: "getTransport",
            value: function() {
                return this.et
            }
        }, {
            key: "flush",
            value: function(t) {
                var n = this.et;
                return n ? this.st(t).then(function(e) {
                    return n.flush(t).then(function(t) {
                        return e && t
                    })
                }) : w(!0)
            }
        }, {
            key: "close",
            value: function(t) {
                var e = this;
                return this.flush(t).then(function(t) {
                    return e.getOptions().enabled = !1,
                    t
                })
            }
        }, {
            key: "setupIntegrations",
            value: function() {
                var t, e;
                this.it() && !this.K && (this.G = (t = this.Z.integrations,
                e = {},
                t.forEach(function(t) {
                    e[t.name] = t,
                    -1 === ne.indexOf(t.name) && (t.setupOnce(Ut, T),
                    ne.push(t.name))
                }),
                e),
                this.K = !0)
            }
        }, {
            key: "getIntegrationById",
            value: function(t) {
                return this.G[t]
            }
        }, {
            key: "getIntegration",
            value: function(t) {
                try {
                    return this.G[t.id] || null
                } catch (t) {
                    return null
                }
            }
        }, {
            key: "sendEvent",
            value: function(t) {
                var e, n, r, o, a, i, s, l, c, d, u, p, f, m, h = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                if (this.tt) {
                    i = t,
                    s = this.tt,
                    l = this.Z.ot,
                    c = this.Z.tunnel,
                    u = ee(l),
                    p = i.type || "event",
                    f = (m = (i.sdkProcessingMetadata || {}).transactionSampling || {}).method,
                    m = m.rate,
                    d = i,
                    (l = l && l.sdk) && (d.sdk = d.sdk || {},
                    d.sdk.name = d.sdk.name || l.name,
                    d.sdk.version = d.sdk.version || l.version,
                    d.sdk.integrations = [].concat(_toConsumableArray(d.sdk.integrations || []), _toConsumableArray(l.integrations || [])),
                    d.sdk.packages = [].concat(_toConsumableArray(d.sdk.packages || []), _toConsumableArray(l.packages || []))),
                    i.tags = i.tags || {},
                    i.extra = i.extra || {},
                    i.sdkProcessingMetadata && i.sdkProcessingMetadata.baseClientNormalized || (i.tags.skippedNormalization = !0,
                    i.extra.normalizeDepth = i.sdkProcessingMetadata ? i.sdkProcessingMetadata.normalizeDepth : "unset"),
                    delete i.sdkProcessingMetadata,
                    d = u,
                    l = c,
                    u = s;
                    var g, v = Et(_objectSpread(_objectSpread(_objectSpread({
                        event_id: (c = i).event_id,
                        sent_at: (new Date).toISOString()
                    }, d && {
                        sdk: d
                    }), !!l && {
                        dsn: W(u)
                    }), "transaction" === c.type && c.contexts && c.contexts.trace && {
                        trace: b({
                            trace_id: c.contexts.trace.trace_id,
                            environment: c.environment,
                            release: c.release,
                            transaction: c.transaction,
                            user: c.user && {
                                id: c.user.id,
                                segment: c.user.segment
                            },
                            public_key: u.publicKey
                        })
                    }), [[{
                        type: p,
                        sample_rates: [{
                            id: f,
                            rate: m
                        }]
                    }, i]]), _ = _createForOfIteratorHelper(h.attachments || []);
                    try {
                        for (_.s(); !(g = _.n()).done; ) {
                            var y = g.value;
                            e = v,
                            o = y,
                            a = function(t) {
                                for (var r, o = t[0], e = 1; e < t.length; ) {
                                    var n = t[e]
                                      , a = t[e + 1];
                                    if (e += 2,
                                    ("optionalAccess" === n || "optionalCall" === n) && null == o)
                                        return;
                                    "access" === n || "optionalAccess" === n ? o = a(r = o) : "call" !== n && "optionalCall" !== n || (o = a(function() {
                                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                                            e[n] = arguments[n];
                                        return o.call.apply(o, [r].concat(e))
                                    }),
                                    r = void 0)
                                }
                                return o
                            }([this, "access", function(t) {
                                return t.Z
                            }
                            , "access", function(t) {
                                return t.transportOptions
                            }
                            , "optionalAccess", function(t) {
                                return t.textEncoder
                            }
                            ]),
                            n = [b({
                                type: "attachment",
                                length: (a = "string" == typeof o.data ? Pt(o.data, a) : o.data).length,
                                filename: o.filename,
                                content_type: o.contentType,
                                attachment_type: o.attachmentType
                            }), a],
                            r = void 0,
                            r = (e = _slicedToArray(e, 2))[0],
                            e = e[1],
                            v = [r, [].concat(_toConsumableArray(e), [n])]
                        }
                    } catch (t) {
                        _.e(t)
                    } finally {
                        _.f()
                    }
                    this.at(v)
                }
            }
        }, {
            key: "sendSession",
            value: function(t) {
                this.tt && (t = function(t, e, n, r) {
                    n = ee(n);
                    return Et(_objectSpread(_objectSpread({
                        sent_at: (new Date).toISOString()
                    }, n && {
                        sdk: n
                    }), !!r && {
                        dsn: W(e)
                    }), ["aggregates"in t ? [{
                        type: "sessions"
                    }, t] : [{
                        type: "session"
                    }, t]])
                }(t, this.tt, this.Z.ot, this.Z.tunnel),
                this.at(t))
            }
        }, {
            key: "recordDroppedEvent",
            value: function(t, e) {
                this.Z.sendClientReports && (t = "".concat(t, ":").concat(e),
                this.Y[t] = this.Y[t] + 1 || 1)
            }
        }, {
            key: "ut",
            value: function(t, e) {
                var n = !1
                  , r = !1
                  , e = e.exception && e.exception.values;
                if (e) {
                    var o, a = _createForOfIteratorHelper((r = !0,
                    e));
                    try {
                        for (a.s(); !(o = a.n()).done; ) {
                            var i = o.value.mechanism;
                            if (i && !1 === i.handled) {
                                n = !0;
                                break
                            }
                        }
                    } catch (t) {
                        a.e(t)
                    } finally {
                        a.f()
                    }
                }
                e = "ok" === t.status;
                (e && 0 === t.errors || e && n) && (s(t, _objectSpread(_objectSpread({}, n && {
                    status: "crashed"
                }), {}, {
                    errors: t.errors || Number(r || n)
                })),
                this.captureSession(t))
            }
        }, {
            key: "st",
            value: function(r) {
                var o = this;
                return new S(function(t) {
                    var e = 0
                      , n = setInterval(function() {
                        0 == o.V ? (clearInterval(n),
                        t(!0)) : (e += 1,
                        r && r <= e && (clearInterval(n),
                        t(!1)))
                    }, 1)
                }
                )
            }
        }, {
            key: "it",
            value: function() {
                return !1 !== this.getOptions().enabled && void 0 !== this.tt
            }
        }, {
            key: "ct",
            value: function(t, e, n) {
                var r = this
                  , o = this.getOptions()
                  , a = o.normalizeDepth
                  , i = void 0 === a ? 3 : a
                  , a = o.normalizeMaxBreadth
                  , s = void 0 === a ? 1e3 : a
                  , o = _objectSpread(_objectSpread({}, t), {}, {
                    event_id: t.event_id || e.event_id || x(),
                    timestamp: t.timestamp || St()
                })
                  , a = (this.ht(o),
                this.ft(o),
                n)
                  , t = (e.captureContext && (a = Ft.clone(a).update(e.captureContext)),
                w(o));
                return a && ((n = [].concat(_toConsumableArray(e.attachments || []), _toConsumableArray(a.getAttachments()))).length && (e.attachments = n),
                t = a.applyToEvent(o, e)),
                t.then(function(t) {
                    return t && (t.sdkProcessingMetadata = _objectSpread(_objectSpread({}, t.sdkProcessingMetadata), {}, {
                        normalizeDepth: "".concat(k(i), " (").concat(_typeof(i), ")")
                    })),
                    "number" == typeof i && 0 < i ? r.lt(t, i, s) : t
                })
            }
        }, {
            key: "lt",
            value: function(t, e, n) {
                var r;
                return t ? (r = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, t), t.breadcrumbs && {
                    breadcrumbs: t.breadcrumbs.map(function(t) {
                        return _objectSpread(_objectSpread({}, t), t.data && {
                            data: k(t.data, e, n)
                        })
                    })
                }), t.user && {
                    user: k(t.user, e, n)
                }), t.contexts && {
                    contexts: k(t.contexts, e, n)
                }), t.extra && {
                    extra: k(t.extra, e, n)
                }),
                t.contexts && t.contexts.trace && (r.contexts = {},
                r.contexts.trace = t.contexts.trace,
                t.contexts.trace.data) && (r.contexts.trace.data = k(t.contexts.trace.data, e, n)),
                t.spans && (r.spans = t.spans.map(function(t) {
                    return t.data && (t.data = k(t.data, e, n)),
                    t
                })),
                r.sdkProcessingMetadata = _objectSpread(_objectSpread({}, r.sdkProcessingMetadata), {}, {
                    baseClientNormalized: !0
                }),
                r) : null
            }
        }, {
            key: "ht",
            value: function(t) {
                var e = this.getOptions()
                  , n = e.environment
                  , r = e.release
                  , o = e.dist
                  , a = e.maxValueLength
                  , a = void 0 === a ? 250 : a
                  , e = ("environment"in t || (t.environment = "environment"in e ? n : "production"),
                void 0 === t.release && void 0 !== r && (t.release = r),
                void 0 === t.dist && void 0 !== o && (t.dist = o),
                t.message && (t.message = p(t.message, a)),
                t.exception && t.exception.values && t.exception.values[0])
                  , n = (e && e.value && (e.value = p(e.value, a)),
                t.request);
                n && n.url && (n.url = p(n.url, a))
            }
        }, {
            key: "ft",
            value: function(t) {
                var e = Object.keys(this.G);
                0 < e.length && (t.sdk = t.sdk || {},
                t.sdk.integrations = [].concat(_toConsumableArray(t.sdk.integrations || []), e))
            }
        }, {
            key: "rt",
            value: function(t) {
                return this.dt(t, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, 2 < arguments.length ? arguments[2] : void 0).then(function(t) {
                    return t.event_id
                }, function(t) {})
            }
        }, {
            key: "dt",
            value: function(n, r, o) {
                var a, i = this, t = this.getOptions(), s = t.beforeSend, t = t.sampleRate;
                return this.it() ? !(a = "transaction" === n.type) && "number" == typeof t && Math.random() > t ? (this.recordDroppedEvent("sample_rate", "error"),
                xt(new u("Discarding event because it's not included in the random sample (sampling rate = ".concat(t, ")")))) : this.ct(n, r, o).then(function(t) {
                    if (null === t)
                        throw i.recordDroppedEvent("event_processor", n.type || "error"),
                        new u("An event processor returned null, will not send event.");
                    if (r.data && !0 === r.data.__sentry__ || a || !s)
                        return t;
                    var t = s(t, r)
                      , e = "`beforeSend` method has to return `null` or a valid event.";
                    if (q(t))
                        return t.then(function(t) {
                            if (h(t) || null === t)
                                return t;
                            throw new u(e)
                        }, function(t) {
                            throw new u("beforeSend rejected with ".concat(t))
                        });
                    if (h(t) || null === t)
                        return t;
                    throw new u(e)
                }).then(function(t) {
                    if (null === t)
                        throw i.recordDroppedEvent("before_send", n.type || "error"),
                        new u("`beforeSend` returned `null`, will not send event.");
                    var e = o && o.getSession();
                    return !a && e && i.ut(e, t),
                    i.sendEvent(t, r),
                    t
                }).then(null, function(t) {
                    if (t instanceof u)
                        throw t;
                    throw i.captureException(t, {
                        data: {
                            __sentry__: !0
                        },
                        originalException: t
                    }),
                    new u("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ".concat(t))
                }) : xt(new u("SDK not enabled, will not capture event."))
            }
        }, {
            key: "nt",
            value: function(t) {
                var e = this;
                this.V += 1,
                t.then(function(t) {
                    return --e.V,
                    t
                }, function(t) {
                    return --e.V,
                    t
                })
            }
        }, {
            key: "at",
            value: function(t) {
                this.et && this.tt && this.et.send(t).then(null, function(t) {})
            }
        }, {
            key: "vt",
            value: function() {
                var n = this.Y;
                return this.Y = {},
                Object.keys(n).map(function(t) {
                    var e = _slicedToArray(t.split(":"), 2);
                    return {
                        reason: e[0],
                        category: e[1],
                        quantity: n[t]
                    }
                })
            }
        }])
    }();
    function ae(o, a, t) {
        var n, i, s = 2 < arguments.length && void 0 !== t ? t : (n = o.bufferSize || 30,
        {
            $: i = [],
            add: function(t) {
                var e;
                return void 0 === n || i.length < n ? (e = t(),
                -1 === i.indexOf(e) && i.push(e),
                e.then(function() {
                    return r(e)
                }).then(null, function() {
                    return r(e).then(null, function() {})
                }),
                e) : xt(new u("Not adding Promise due to buffer limit reached."))
            },
            drain: function(t) {
                return new S(function(e, n) {
                    var r = i.length;
                    if (!r)
                        return e(!0);
                    var o = setTimeout(function() {
                        t && 0 < t && e(!1)
                    }, t);
                    i.forEach(function(t) {
                        w(t).then(function() {
                            --r || (clearTimeout(o),
                            e(!0))
                        }, n)
                    })
                }
                )
            }
        });
        function r(t) {
            return i.splice(i.indexOf(t), 1)[0]
        }
        var l = {};
        return {
            send: function(t) {
                var e, n, r = [];
                return At(t, function(t, e) {
                    e = Dt(e);
                    !function(t, e, n) {
                        var r = 2 < arguments.length && void 0 !== n ? n : Date.now();
                        return (t[e] || t.all || 0) > r
                    }(l, e) ? r.push(t) : o.recordDroppedEvent("ratelimit_backoff", e)
                }),
                0 === r.length ? w() : (e = Et(t[0], r),
                n = function(n) {
                    At(e, function(t, e) {
                        o.recordDroppedEvent(n, Dt(e))
                    })
                }
                ,
                s.add(function() {
                    return a({
                        body: It(e, o.textEncoder)
                    }).then(function(t) {
                        l = function(t, e, n) {
                            var r = e.statusCode
                              , o = e.headers
                              , a = 2 < arguments.length && void 0 !== n ? n : Date.now()
                              , i = _objectSpread({}, t)
                              , s = o && o["x-sentry-rate-limits"]
                              , o = o && o["retry-after"];
                            if (s) {
                                var l, c = _createForOfIteratorHelper(s.trim().split(","));
                                try {
                                    for (c.s(); !(l = c.n()).done; ) {
                                        var d = _slicedToArray(l.value.split(":", 2), 2)
                                          , u = d[0]
                                          , p = d[1]
                                          , f = parseInt(u, 10)
                                          , m = 1e3 * (isNaN(f) ? 60 : f);
                                        if (p) {
                                            var h, g = _createForOfIteratorHelper(p.split(";"));
                                            try {
                                                for (g.s(); !(h = g.n()).done; )
                                                    i[h.value] = a + m
                                            } catch (t) {
                                                g.e(t)
                                            } finally {
                                                g.f()
                                            }
                                        } else
                                            i.all = a + m
                                    }
                                } catch (t) {
                                    c.e(t)
                                } finally {
                                    c.f()
                                }
                            } else
                                o ? i.all = a + function(t, e) {
                                    var n, r = 1 < arguments.length && void 0 !== e ? e : Date.now(), o = parseInt("".concat(t), 10);
                                    return isNaN(o) ? (n = Date.parse("".concat(t)),
                                    isNaN(n) ? 6e4 : n - r) : 1e3 * o
                                }(o, a) : 429 === r && (i.all = a + 6e4);
                            return i
                        }(l, t)
                    }, function(t) {
                        n("network_error")
                    })
                }).then(function(t) {
                    return t
                }, function(t) {
                    if (t instanceof u)
                        return n("queue_overflow"),
                        w();
                    throw t
                }))
            },
            flush: function(t) {
                return s.drain(t)
            }
        }
    }
    var ie, se = "7.1.1", e = function() {
        function t() {
            _classCallCheck(this, t),
            t.prototype.__init.call(this)
        }
        return _createClass(t, [{
            key: "__init",
            value: function() {
                this.name = t.id
            }
        }, {
            key: "setupOnce",
            value: function() {
                ie = Function.prototype.toString,
                Function.prototype.toString = function() {
                    for (var t = tt(this) || this, e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                        n[r] = arguments[r];
                    return ie.apply(t, n)
                }
            }
        }], [{
            key: "__initStatic",
            value: function() {
                this.id = "FunctionToString"
            }
        }])
    }(), le = (e.__initStatic(),
    [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/]), n = function() {
        function s() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            _classCallCheck(this, s),
            this.Z = t,
            s.prototype.__init.call(this)
        }
        return _createClass(s, [{
            key: "__init",
            value: function() {
                this.name = s.id
            }
        }, {
            key: "setupOnce",
            value: function(t, i) {
                function e(t) {
                    var n, r, e;
                    if (o = i()) {
                        var o, a = o.getIntegration(s);
                        if (a)
                            return o = (o = o.getClient()) ? o.getOptions() : {},
                            a = function(t, e) {
                                var n = 0 < arguments.length && void 0 !== t ? t : {}
                                  , r = 1 < arguments.length && void 0 !== e ? e : {};
                                return {
                                    allowUrls: [].concat(_toConsumableArray(n.allowUrls || []), _toConsumableArray(r.allowUrls || [])),
                                    denyUrls: [].concat(_toConsumableArray(n.denyUrls || []), _toConsumableArray(r.denyUrls || [])),
                                    ignoreErrors: [].concat(_toConsumableArray(n.ignoreErrors || []), _toConsumableArray(r.ignoreErrors || []), le),
                                    ignoreInternal: void 0 === n.ignoreInternal || n.ignoreInternal
                                }
                            }(a.Z, o),
                            n = t,
                            (o = a).ignoreInternal && function(t) {
                                try {
                                    return "SentryError" === t.exception.values[0].type
                                } catch (t) {}
                            }(n) || (r = o.ignoreErrors) && r.length && function(t) {
                                if (t.message)
                                    return [t.message];
                                if (t.exception)
                                    try {
                                        var e = t.exception.values && t.exception.values[0] || {}
                                          , n = e.type
                                          , r = void 0 === n ? "" : n
                                          , o = e.value
                                          , a = void 0 === o ? "" : o;
                                        return ["".concat(a), "".concat(r, ": ").concat(a)]
                                    } catch (t) {}
                                return []
                            }(n).some(function(e) {
                                return r.some(function(t) {
                                    return f(e, t)
                                })
                            }) || function(t) {
                                var e;
                                if (t && t.length)
                                    return (e = ce(n)) && t.some(function(t) {
                                        return f(e, t)
                                    })
                            }(o.denyUrls) || !(!((o = o.allowUrls) && o.length && (e = ce(n))) || o.some(function(t) {
                                return f(e, t)
                            })) ? null : t
                    }
                    return t
                }
                e.id = this.name,
                t(e)
            }
        }], [{
            key: "__initStatic",
            value: function() {
                this.id = "InboundFilters"
            }
        }])
    }();
    function ce(t) {
        try {
            var e;
            try {
                e = t.exception.values[0].stacktrace.frames
            } catch (t) {}
            return e ? function(t) {
                for (var e = 0 < arguments.length && void 0 !== t ? t : [], n = e.length - 1; 0 <= n; n--) {
                    var r = e[n];
                    if (r && "<anonymous>" !== r.filename && "[native code]" !== r.filename)
                        return r.filename || null
                }
                return null
            }(e) : null
        } catch (t) {
            return null
        }
    }
    n.__initStatic();
    var de = Object.freeze({
        __proto__: null,
        FunctionToString: e,
        InboundFilters: n
    });
    function ue(t, e) {
        t = fe(t, e),
        e = {
            type: e && e.name,
            value: function(t) {
                t = t && t.message;
                return t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message"
            }(e)
        };
        return t.length && (e.stacktrace = {
            frames: t
        }),
        void 0 === e.type && "" === e.value && (e.value = "Unrecoverable error caught"),
        e
    }
    function pe(t, e) {
        return {
            exception: {
                values: [ue(t, e)]
            }
        }
    }
    function fe(t, e) {
        var n = e.stacktrace || e.stack || ""
          , r = function() {
            if (e) {
                if ("number" == typeof e.framesToPop)
                    return e.framesToPop;
                if (me.test(e.message))
                    return 1
            }
            return 0
        }();
        try {
            return t(n, r)
        } catch (t) {}
        return []
    }
    var me = /Minified React error #\d+;/i;
    function he(t, e, n, r, o) {
        var a, i, s;
        return z(e) && e.error ? pe(t, e.error) : B(e) || c(e, "DOMException") ? ("stack"in (a = e) ? s = pe(t, e) : (i = a.name || (B(a) ? "DOMError" : "DOMException"),
        _t(s = ge(t, i = a.message ? "".concat(i, ": ").concat(a.message) : i, n, r), i)),
        "code"in a && (s.tags = _objectSpread(_objectSpread({}, s.tags), {}, {
            "DOMException.code": "".concat(a.code)
        })),
        s) : H(e) ? pe(t, e) : (h(e) || F(e) ? s = function(t, e, n, r) {
            r = {
                exception: {
                    values: [{
                        type: F(e) ? e.constructor.name : r ? "UnhandledRejection" : "Error",
                        value: "Non-Error ".concat(r ? "promise rejection" : "exception", " captured with keys: ").concat(function(t, e) {
                            var n = 1 < arguments.length && void 0 !== e ? e : 40
                              , r = Object.keys(et(t));
                            if (r.sort(),
                            !r.length)
                                return "[object has no keys]";
                            if (r[0].length >= n)
                                return p(r[0], n);
                            for (var o = r.length; 0 < o; o--) {
                                var a = r.slice(0, o).join(", ");
                                if (!(a.length > n))
                                    return o === r.length ? a : p(a, n)
                            }
                            return ""
                        }(e))
                    }]
                },
                extra: {
                    __serialized__: function t(e, n, r) {
                        var o, a = 1 < arguments.length && void 0 !== n ? n : 3, i = 2 < arguments.length && void 0 !== r ? r : 102400, s = k(e, a);
                        return o = JSON.stringify(s),
                        ~-encodeURI(o).split(/%..|./).length > i ? t(e, a - 1, i) : s
                    }(e)
                }
            };
            return n && (e = fe(t, n)).length && (r.exception.values[0].stacktrace = {
                frames: e
            }),
            r
        }(t, e, n, o) : _t(s = ge(t, e, n, r), "".concat(e), void 0),
        yt(s, {
            synthetic: !0
        }),
        s)
    }
    function ge(t, e, n, r) {
        var o = {
            message: e
        };
        return r && n && (r = fe(t, n)).length && (o.exception = {
            values: [{
                value: e,
                stacktrace: {
                    frames: r
                }
            }]
        }),
        o
    }
    var ve = "Breadcrumbs"
      , _e = function() {
        function e(t) {
            _classCallCheck(this, e),
            e.prototype.__init.call(this),
            this.options = _objectSpread({
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0
            }, t)
        }
        return _createClass(e, [{
            key: "__init",
            value: function() {
                this.name = e.id
            }
        }, {
            key: "setupOnce",
            value: function() {
                var r;
                this.options.console && _("console", ye),
                this.options.dom && _("dom", (r = this.options.dom,
                function(t) {
                    var e, n = "object" == _typeof(r) ? r.serializeAttribute : void 0;
                    "string" == typeof n && (n = [n]);
                    try {
                        e = t.event.target ? o(t.event.target, n) : o(t.event, n)
                    } catch (t) {
                        e = "<unknown>"
                    }
                    0 !== e.length && T().addBreadcrumb({
                        category: "ui.".concat(t.name),
                        message: e
                    }, {
                        event: t.event,
                        name: t.name,
                        global: t.global
                    })
                }
                )),
                this.options.xhr && _("xhr", be),
                this.options.fetch && _("fetch", xe),
                this.options.history && _("history", ke)
            }
        }], [{
            key: "__initStatic",
            value: function() {
                this.id = ve
            }
        }])
    }();
    function ye(t) {
        var e = {
            category: "console",
            data: {
                arguments: t.args,
                logger: "console"
            },
            level: "warn" === (e = t.level) ? "warning" : kt.includes(e) ? e : "log",
            message: G(t.args, " ")
        };
        if ("assert" === t.level) {
            if (!1 !== t.args[0])
                return;
            e.message = "Assertion failed: ".concat(G(t.args.slice(1), " ") || "console.assert"),
            e.data.arguments = t.args.slice(1)
        }
        T().addBreadcrumb(e, {
            input: t.args,
            level: t.level
        })
    }
    function be(t) {
        var e, n, r, o;
        t.endTimestamp && !t.xhr.__sentry_own_request__ && (e = (o = t.xhr.__sentry_xhr__ || {}).method,
        n = o.url,
        r = o.status_code,
        o = o.body,
        T().addBreadcrumb({
            category: "xhr",
            data: {
                method: e,
                url: n,
                status_code: r
            },
            type: "http"
        }, {
            xhr: t.xhr,
            input: o
        }))
    }
    function xe(t) {
        !t.endTimestamp || t.fetchData.url.match(/sentry_key/) && "POST" === t.fetchData.method || (t.error ? T().addBreadcrumb({
            category: "fetch",
            data: t.fetchData,
            level: "error",
            type: "http"
        }, {
            data: t.error,
            input: t.args
        }) : T().addBreadcrumb({
            category: "fetch",
            data: _objectSpread(_objectSpread({}, t.fetchData), {}, {
                status_code: t.response.status
            }),
            type: "http"
        }, {
            input: t.args,
            response: t.response
        }))
    }
    function ke(t) {
        var e = l()
          , n = t.from
          , t = t.to
          , e = gt(e.location.href)
          , r = gt(n)
          , o = gt(t);
        r.path || (r = e),
        e.protocol === o.protocol && e.host === o.host && (t = o.relative),
        e.protocol === r.protocol && e.host === r.host && (n = r.relative),
        T().addBreadcrumb({
            category: "navigation",
            data: {
                from: n,
                to: t
            }
        })
    }
    _e.__initStatic();
    var we, j = l();
    function Se() {
        if (we)
            return we;
        if (st(j.fetch))
            return we = j.fetch.bind(j);
        var t = j.document
          , e = j.fetch;
        if (t && "function" == typeof t.createElement)
            try {
                var n = t.createElement("iframe")
                  , r = (n.hidden = !0,
                t.head.appendChild(n),
                n.contentWindow);
                r && r.fetch && (e = r.fetch),
                t.head.removeChild(n)
            } catch (t) {}
        return we = e.bind(j)
    }
    var Ce = l()
      , Te = function() {
        function a(t) {
            var e;
            return _classCallCheck(this, a),
            t.ot = t.ot || {},
            t.ot.sdk = t.ot.sdk || {
                name: "sentry.javascript.browser",
                packages: [{
                    name: "npm:@sentry/browser",
                    version: se
                }],
                version: se
            },
            e = _callSuper(this, a, [t]),
            t.sendClientReports && Ce.document && Ce.document.addEventListener("visibilitychange", function() {
                "hidden" === Ce.document.visibilityState && e.yt()
            }),
            e
        }
        return _inherits(a, oe),
        _createClass(a, [{
            key: "eventFromException",
            value: function(t, e) {
                var n = this.Z.stackParser
                  , r = this.Z.attachStacktrace;
                return yt(n = he(n, t, e && e.syntheticException || void 0, r)),
                n.level = "error",
                e && e.event_id && (n.event_id = e.event_id),
                w(n)
            }
        }, {
            key: "eventFromMessage",
            value: function(t) {
                return function(t, e, n, r, o) {
                    var a = 2 < arguments.length && void 0 !== n ? n : "info"
                      , i = 3 < arguments.length ? r : void 0
                      , s = ge(t, e, i && i.syntheticException || void 0, 4 < arguments.length ? o : void 0);
                    return s.level = a,
                    i && i.event_id && (s.event_id = i.event_id),
                    w(s)
                }(this.Z.stackParser, t, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "info", 2 < arguments.length ? arguments[2] : void 0, this.Z.attachStacktrace)
            }
        }, {
            key: "sendEvent",
            value: function(t, e) {
                var n, r, o = this.getIntegrationById(ve);
                o && o.options && o.options.sentry && T().addBreadcrumb({
                    category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                    event_id: t.event_id,
                    level: t.level,
                    message: (n = (o = t).message,
                    r = o.event_id,
                    n || ((n = vt(o)) ? n.type && n.value ? "".concat(n.type, ": ").concat(n.value) : n.type || n.value || r || "<unknown>" : r || "<unknown>"))
                }, {
                    event: t
                }),
                _get(_getPrototypeOf(a.prototype), "sendEvent", this).call(this, t, e)
            }
        }, {
            key: "ct",
            value: function(t, e, n) {
                return t.platform = t.platform || "javascript",
                _get(_getPrototypeOf(a.prototype), "ct", this).call(this, t, e, n)
            }
        }, {
            key: "yt",
            value: function() {
                var t, e, n = this.vt();
                if (0 !== n.length && this.tt) {
                    var r, o = te(this.tt, this.Z.tunnel), a = (r = n,
                    Et((a = this.Z.tunnel && W(this.tt)) ? {
                        dsn: a
                    } : {}, [[{
                        type: "client_report"
                    }, {
                        timestamp: St(),
                        discarded_events: r
                    }]]));
                    try {
                        t = o,
                        e = It(a),
                        "[object Navigator]" === Object.prototype.toString.call(j && j.navigator) && "function" == typeof j.navigator.sendBeacon ? j.navigator.sendBeacon.bind(j.navigator)(t, e) : it() && Se()(t, {
                            body: e,
                            method: "POST",
                            credentials: "omit",
                            keepalive: !0
                        }).then(null, function(t) {})
                    } catch (n) {}
                }
            }
        }])
    }();
    function je(e) {
        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Se();
        return ae(e, function(t) {
            t = _objectSpread({
                body: t.body,
                method: "POST",
                referrerPolicy: "origin",
                headers: e.headers
            }, e.fetchOptions);
            return n(e.url, t).then(function(t) {
                return {
                    statusCode: t.status,
                    headers: {
                        "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
                        "retry-after": t.headers.get("Retry-After")
                    }
                }
            })
        })
    }
    function Oe(a) {
        return ae(a, function(o) {
            return new S(function(t, e) {
                var n, r = new XMLHttpRequest;
                for (n in r.onerror = e,
                r.onreadystatechange = function() {
                    4 === r.readyState && t({
                        statusCode: r.status,
                        headers: {
                            "x-sentry-rate-limits": r.getResponseHeader("X-Sentry-Rate-Limits"),
                            "retry-after": r.getResponseHeader("Retry-After")
                        }
                    })
                }
                ,
                r.open("POST", a.url),
                a.headers)
                    Object.prototype.hasOwnProperty.call(a.headers, n) && r.setRequestHeader(n, a.headers[n]);
                r.send(o.body)
            }
            )
        })
    }
    function Ee(t, e, n, r) {
        t = {
            filename: t,
            function: e,
            in_app: !0
        };
        return void 0 !== n && (t.lineno = n),
        void 0 !== r && (t.colno = r),
        t
    }
    var Ae = /^\s*at (?:(.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
      , Pe = /\((\S*)(?::(\d+))(?::(\d+))\)/
      , Ie = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
      , Le = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
      , De = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
      , $e = ot.apply(void 0, [[30, function(t) {
        var e, n, t = Ae.exec(t);
        if (t)
            return t[2] && 0 === t[2].indexOf("eval") && (e = Pe.exec(t[2])) && (t[2] = e[1],
            t[3] = e[2],
            t[4] = e[3]),
            n = (e = _slicedToArray(Me(t[1] || "?", t[2]), 2))[0],
            Ee(e[1], n, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0)
    }
    ], [50, function(t) {
        var e, n, r, t = Ie.exec(t);
        if (t)
            return t[3] && -1 < t[3].indexOf(" > eval") && (r = Le.exec(t[3])) && (t[1] = t[1] || "eval",
            t[3] = r[1],
            t[4] = r[2],
            t[5] = ""),
            r = t[3],
            n = t[1] || "?",
            n = (e = _slicedToArray(Me(n, r), 2))[0],
            Ee(r = e[1], n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
    }
    ], [40, function(t) {
        t = De.exec(t);
        return t ? Ee(t[2], t[1] || "?", +t[3], t[4] ? +t[4] : void 0) : void 0
    }
    ]])
      , Me = function(t, e) {
        var n = -1 !== t.indexOf("safari-extension")
          , r = -1 !== t.indexOf("safari-web-extension");
        return n || r ? [-1 !== t.indexOf("@") ? t.split("@")[0] : "?", (n ? "safari-extension:" : "safari-web-extension:").concat(e)] : [t, e]
    }
      , Re = 0;
    function O(e, t, n) {
        var r = 1 < arguments.length && void 0 !== t ? t : {}
          , o = 2 < arguments.length ? n : void 0;
        if ("function" != typeof e)
            return e;
        try {
            var a = e.__sentry_wrapped__;
            if (a)
                return a;
            if (tt(e))
                return e
        } catch (r) {
            return e
        }
        function i() {
            var n = Array.prototype.slice.call(arguments);
            try {
                o && "function" == typeof o && o.apply(this, arguments);
                var t = n.map(function(t) {
                    return O(t, r)
                });
                return e.apply(this, t)
            } catch (e) {
                throw Re += 1,
                setTimeout(function() {
                    --Re
                }),
                Yt(function(t) {
                    t.addEventProcessor(function(t) {
                        return r.mechanism && (_t(t, void 0, void 0),
                        yt(t, r.mechanism)),
                        t.extra = _objectSpread(_objectSpread({}, t.extra), {}, {
                            arguments: n
                        }),
                        t
                    }),
                    Gt(e)
                }),
                e
            }
        }
        try {
            for (var s in e)
                Object.prototype.hasOwnProperty.call(e, s) && (i[s] = e[s])
        } catch (e) {}
        Q(i, e),
        Y(e, "__sentry_wrapped__", i);
        try {
            Object.getOwnPropertyDescriptor(i, "name").configurable && Object.defineProperty(i, "name", {
                get: function() {
                    return e.name
                }
            })
        } catch (e) {}
        return i
    }
    var Ne = function() {
        function e(t) {
            _classCallCheck(this, e),
            e.prototype.__init.call(this),
            e.prototype.__init2.call(this),
            this.Z = _objectSpread({
                onerror: !0,
                onunhandledrejection: !0
            }, t)
        }
        return _createClass(e, [{
            key: "__init",
            value: function() {
                this.name = e.id
            }
        }, {
            key: "__init2",
            value: function() {
                this.gt = {
                    onerror: He,
                    onunhandledrejection: ze
                }
            }
        }, {
            key: "setupOnce",
            value: function() {
                Error.stackTraceLimit = 50;
                var t, e = this.Z;
                for (t in e) {
                    var n = this.gt[t];
                    n && e[t] && (n(),
                    this.gt[t] = void 0)
                }
            }
        }], [{
            key: "__initStatic",
            value: function() {
                this.id = "GlobalHandlers"
            }
        }])
    }();
    function He() {
        _("error", function(t) {
            var e, n, r, o, a, i, s, l, c, d, u = _slicedToArray(Fe(), 3), p = u[0], f = u[1], u = u[2];
            p.getIntegration(Ne) && (e = t.msg,
            n = t.url,
            r = t.line,
            o = t.column,
            t = t.error,
            0 < Re || t && t.__sentry_own_request__ || ((d = void 0 === t && m(e) ? (i = n,
            s = r,
            l = o,
            a = z(a = e) ? a.message : a,
            c = "Error",
            (d = a.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i)) && (c = d[1],
            a = d[2]),
            Be({
                exception: {
                    values: [{
                        type: c,
                        value: a
                    }]
                }
            }, i, s, l)) : Be(he(f, t || e, void 0, u, !1), n, r, o)).level = "error",
            Ve(p, t, d, "onerror")))
        })
    }
    function ze() {
        _("unhandledrejection", function(t) {
            var e = _slicedToArray(Fe(), 3)
              , n = e[0]
              , r = e[1]
              , e = e[2];
            if (n.getIntegration(Ne)) {
                var o = t;
                try {
                    "reason"in t ? o = t.reason : "detail"in t && "reason"in t.detail && (o = t.detail.reason)
                } catch (t) {}
                if (0 < Re || o && o.__sentry_own_request__)
                    return !0;
                r = V(o) ? {
                    exception: {
                        values: [{
                            type: "UnhandledRejection",
                            value: "Non-Error promise rejection captured with value: ".concat(String(o))
                        }]
                    }
                } : he(r, o, void 0, e, !0);
                r.level = "error",
                Ve(n, o, r, "onunhandledrejection")
            }
        })
    }
    function Be(t, e, n, r) {
        var o = t.exception = t.exception || {}
          , o = o.values = o.values || []
          , o = o[0] = o[0] || {}
          , o = o.stacktrace = o.stacktrace || {}
          , o = o.frames = o.frames || []
          , r = isNaN(parseInt(r, 10)) ? void 0 : r
          , n = isNaN(parseInt(n, 10)) ? void 0 : n
          , e = m(e) && 0 < e.length ? e : function() {
            var t = l();
            try {
                return t.document.location.href
            } catch (t) {
                return ""
            }
        }();
        return 0 === o.length && o.push({
            colno: r,
            filename: e,
            function: "?",
            in_app: !0,
            lineno: n
        }),
        t
    }
    function Ve(t, e, n, r) {
        yt(n, {
            handled: !1,
            type: r
        }),
        t.captureEvent(n, {
            originalException: e
        })
    }
    function Fe() {
        var t = T()
          , e = t.getClient()
          , e = e && e.getOptions() || {
            stackParser: function() {
                return []
            },
            attachStacktrace: !1
        };
        return [t, e.stackParser, e.attachStacktrace]
    }
    Ne.__initStatic();
    var qe = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
      , Ue = function() {
        function e(t) {
            _classCallCheck(this, e),
            e.prototype.__init.call(this),
            this.Z = _objectSpread({
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0
            }, t)
        }
        return _createClass(e, [{
            key: "__init",
            value: function() {
                this.name = e.id
            }
        }, {
            key: "setupOnce",
            value: function() {
                var t = l()
                  , t = (this.Z.setTimeout && g(t, "setTimeout", Ze),
                this.Z.setInterval && g(t, "setInterval", Ze),
                this.Z.requestAnimationFrame && g(t, "requestAnimationFrame", We),
                this.Z.XMLHttpRequest && "XMLHttpRequest"in t && g(XMLHttpRequest.prototype, "send", Ke),
                this.Z.eventTarget);
                t && (Array.isArray(t) ? t : qe).forEach(Je)
            }
        }], [{
            key: "__initStatic",
            value: function() {
                this.id = "TryCatch"
            }
        }])
    }();
    function Ze(o) {
        return function() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            var r = e[0];
            return e[0] = O(r, {
                mechanism: {
                    data: {
                        function: v(o)
                    },
                    handled: !0,
                    type: "instrument"
                }
            }),
            o.apply(this, e)
        }
    }
    function We(e) {
        return function(t) {
            return e.apply(this, [O(t, {
                mechanism: {
                    data: {
                        function: "requestAnimationFrame",
                        handler: v(e)
                    },
                    handled: !0,
                    type: "instrument"
                }
            })])
        }
    }
    function Ke(o) {
        return function() {
            for (var t = this, e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                n[r] = arguments[r];
            return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(function(r) {
                r in t && "function" == typeof t[r] && g(t, r, function(t) {
                    var e = {
                        mechanism: {
                            data: {
                                function: r,
                                handler: v(t)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }
                      , n = tt(t);
                    return n && (e.mechanism.data.handler = v(n)),
                    O(t, e)
                })
            }),
            o.apply(this, n)
        }
    }
    function Je(o) {
        var t = l()
          , t = t[o] && t[o].prototype;
        t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (g(t, "addEventListener", function(r) {
            return function(t, e, n) {
                try {
                    "function" == typeof e.handleEvent && (e.handleEvent = O(e.handleEvent, {
                        mechanism: {
                            data: {
                                function: "handleEvent",
                                handler: v(e),
                                target: o
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                } catch (t) {}
                return r.apply(this, [t, O(e, {
                    mechanism: {
                        data: {
                            function: "addEventListener",
                            handler: v(e),
                            target: o
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }), n])
            }
        }),
        g(t, "removeEventListener", function(o) {
            return function(t, e, n) {
                try {
                    var r = e && e.__sentry_wrapped__;
                    r && o.call(this, t, r, n)
                } catch (t) {}
                return o.call(this, t, e, n)
            }
        }))
    }
    Ue.__initStatic();
    var E = function() {
        function s() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            _classCallCheck(this, s),
            s.prototype.__init.call(this),
            this._t = t.key || "cause",
            this.bt = t.limit || 5
        }
        return _createClass(s, [{
            key: "__init",
            value: function() {
                this.name = s.id
            }
        }, {
            key: "setupOnce",
            value: function() {
                var i = T().getClient();
                i && Ut(function(t, e) {
                    var n, r, o, a = T().getIntegration(s);
                    return a ? (n = i.getOptions().stackParser,
                    r = a._t,
                    a = a.bt,
                    e = e,
                    (o = t).exception && o.exception.values && e && d(e.originalException, Error) && (n = function t(e, n, r, o) {
                        var a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : [];
                        if (!d(r[o], Error) || a.length + 1 >= n)
                            return a;
                        var i = ue(e, r[o]);
                        return t(e, n, r[o], o, [i].concat(_toConsumableArray(a)))
                    }(n, a, e.originalException, r),
                    o.exception.values = [].concat(_toConsumableArray(n), _toConsumableArray(o.exception.values))),
                    o) : t
                })
            }
        }], [{
            key: "__initStatic",
            value: function() {
                this.id = "LinkedErrors"
            }
        }])
    }();
    E.__initStatic();
    var A = l()
      , Xe = function() {
        function o() {
            _classCallCheck(this, o),
            o.prototype.__init.call(this)
        }
        return _createClass(o, [{
            key: "__init",
            value: function() {
                this.name = o.id
            }
        }, {
            key: "setupOnce",
            value: function() {
                Ut(function(t) {
                    var e, n, r;
                    return T().getIntegration(o) && (A.navigator || A.location || A.document) ? (r = t.request && t.request.url || A.location && A.location.href,
                    e = (A.document || {}).referrer,
                    n = (A.navigator || {}).userAgent,
                    r = _objectSpread(_objectSpread({}, r && {
                        url: r
                    }), {}, {
                        headers: _objectSpread(_objectSpread(_objectSpread({}, t.request && t.request.headers), e && {
                            Referer: e
                        }), n && {
                            "User-Agent": n
                        })
                    }),
                    _objectSpread(_objectSpread({}, t), {}, {
                        request: r
                    })) : t
                })
            }
        }], [{
            key: "__initStatic",
            value: function() {
                this.id = "HttpContext"
            }
        }])
    }()
      , P = (Xe.__initStatic(),
    function() {
        function c() {
            _classCallCheck(this, c),
            c.prototype.__init.call(this)
        }
        return _createClass(c, [{
            key: "__init",
            value: function() {
                this.name = c.id
            }
        }, {
            key: "setupOnce",
            value: function(t, l) {
                function e(t) {
                    var e, n, r, o, a, i, s;
                    if (e = l().getIntegration(c)) {
                        try {
                            if (n = t,
                            (r = e.wt) && (s = r,
                            o = (i = n).message,
                            a = s.message,
                            !(!o && !a || o && !a || !o && a || o !== a) && Ye(i, s) && Ge(i, s) || (o = n,
                            i = Qe(a = r),
                            s = Qe(o),
                            !!(i && s && i.type === s.type && i.value === s.value && Ye(o, a) && Ge(o, a)))))
                                return null
                        } catch (t) {}
                        return e.wt = t
                    }
                    return t
                }
                e.id = this.name,
                t(e)
            }
        }], [{
            key: "__initStatic",
            value: function() {
                this.id = "Dedupe"
            }
        }])
    }());
    function Ge(t, e) {
        var n = tn(t)
          , r = tn(e);
        if (!n && !r)
            return 1;
        if (!(n && !r || !n && r) && r.length === n.length) {
            for (var o = 0; o < r.length; o++) {
                var a = r[o]
                  , i = n[o];
                if (a.filename !== i.filename || a.lineno !== i.lineno || a.colno !== i.colno || a.function !== i.function)
                    return
            }
            return 1
        }
    }
    function Ye(t, e) {
        var n = t.fingerprint
          , e = e.fingerprint;
        if (!n && !e)
            return 1;
        if (!(n && !e || !n && e))
            try {
                return n.join("") === e.join("")
            } catch (t) {}
    }
    function Qe(t) {
        return t.exception && t.exception.values && t.exception.values[0]
    }
    function tn(t) {
        var e = t.exception;
        if (e)
            try {
                return e.values[0].stacktrace.frames
            } catch (t) {}
    }
    P.__initStatic();
    var en = Object.freeze({
        __proto__: null,
        GlobalHandlers: Ne,
        TryCatch: Ue,
        Breadcrumbs: _e,
        LinkedErrors: E,
        HttpContext: Xe,
        Dedupe: P
    })
      , nn = [new n, new e, new Ue, new _e, new Ne, new E, new P, new Xe];
    function rn(t) {
        t.startSession({
            ignoreDuration: !0
        }),
        t.captureSession()
    }
    n = {},
    e = l(),
    Ue = _objectSpread(_objectSpread(_objectSpread({}, n = e.Sentry && e.Sentry.Integrations ? e.Sentry.Integrations : n), de), en);
    function on(t) {
        var e = T().getClient()
          , t = t || e && e.getOptions();
        return t && ("tracesSampleRate"in t || "tracesSampler"in t)
    }
    function an(t) {
        t = (t || T()).getScope();
        return t && t.getTransaction()
    }
    function sn() {
        var t = an();
        t && t.setStatus("internal_error")
    }
    function ln(t, e) {
        return null != t ? t : e()
    }
    var cn = function() {
        function e() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1e3;
            _classCallCheck(this, e),
            e.prototype.__init.call(this),
            this.xt = t
        }
        return _createClass(e, [{
            key: "__init",
            value: function() {
                this.spans = []
            }
        }, {
            key: "add",
            value: function(t) {
                this.spans.length > this.xt ? t.spanRecorder = void 0 : this.spans.push(t)
            }
        }])
    }()
      , dn = function() {
        function e(t) {
            if (_classCallCheck(this, e),
            e.prototype.__init2.call(this),
            e.prototype.__init3.call(this),
            e.prototype.__init4.call(this),
            e.prototype.__init5.call(this),
            e.prototype.__init6.call(this),
            !t)
                return this;
            t.traceId && (this.traceId = t.traceId),
            t.spanId && (this.spanId = t.spanId),
            t.parentSpanId && (this.parentSpanId = t.parentSpanId),
            "sampled"in t && (this.sampled = t.sampled),
            t.op && (this.op = t.op),
            t.description && (this.description = t.description),
            t.data && (this.data = t.data),
            t.tags && (this.tags = t.tags),
            t.status && (this.status = t.status),
            t.startTimestamp && (this.startTimestamp = t.startTimestamp),
            t.endTimestamp && (this.endTimestamp = t.endTimestamp)
        }
        return _createClass(e, [{
            key: "__init2",
            value: function() {
                this.traceId = x()
            }
        }, {
            key: "__init3",
            value: function() {
                this.spanId = x().substring(16)
            }
        }, {
            key: "__init4",
            value: function() {
                this.startTimestamp = Tt()
            }
        }, {
            key: "__init5",
            value: function() {
                this.tags = {}
            }
        }, {
            key: "__init6",
            value: function() {
                this.data = {}
            }
        }, {
            key: "startChild",
            value: function(t) {
                t = new e(_objectSpread(_objectSpread({}, t), {}, {
                    parentSpanId: this.spanId,
                    sampled: this.sampled,
                    traceId: this.traceId
                }));
                return t.spanRecorder = this.spanRecorder,
                t.spanRecorder && t.spanRecorder.add(t),
                t.transaction = this.transaction,
                t
            }
        }, {
            key: "setTag",
            value: function(t, e) {
                return this.tags = _objectSpread(_objectSpread({}, this.tags), {}, _defineProperty({}, t, e)),
                this
            }
        }, {
            key: "setData",
            value: function(t, e) {
                return this.data = _objectSpread(_objectSpread({}, this.data), {}, _defineProperty({}, t, e)),
                this
            }
        }, {
            key: "setStatus",
            value: function(t) {
                return this.status = t,
                this
            }
        }, {
            key: "setHttpStatus",
            value: function(t) {
                this.setTag("http.status_code", String(t));
                t = function(t) {
                    if (t < 400 && 100 <= t)
                        return "ok";
                    if (400 <= t && t < 500)
                        switch (t) {
                        case 401:
                            return "unauthenticated";
                        case 403:
                            return "permission_denied";
                        case 404:
                            return "not_found";
                        case 409:
                            return "already_exists";
                        case 413:
                            return "failed_precondition";
                        case 429:
                            return "resource_exhausted";
                        default:
                            return "invalid_argument"
                        }
                    if (500 <= t && t < 600)
                        switch (t) {
                        case 501:
                            return "unimplemented";
                        case 503:
                            return "unavailable";
                        case 504:
                            return "deadline_exceeded";
                        default:
                            return "internal_error"
                        }
                    return "unknown_error"
                }(t);
                return "unknown_error" !== t && this.setStatus(t),
                this
            }
        }, {
            key: "isSuccess",
            value: function() {
                return "ok" === this.status
            }
        }, {
            key: "finish",
            value: function(t) {
                this.endTimestamp = "number" == typeof t ? t : Tt()
            }
        }, {
            key: "toTraceparent",
            value: function() {
                var t = "";
                return void 0 !== this.sampled && (t = this.sampled ? "-1" : "-0"),
                "".concat(this.traceId, "-").concat(this.spanId).concat(t)
            }
        }, {
            key: "toContext",
            value: function() {
                return b({
                    data: this.data,
                    description: this.description,
                    endTimestamp: this.endTimestamp,
                    op: this.op,
                    parentSpanId: this.parentSpanId,
                    sampled: this.sampled,
                    spanId: this.spanId,
                    startTimestamp: this.startTimestamp,
                    status: this.status,
                    tags: this.tags,
                    traceId: this.traceId
                })
            }
        }, {
            key: "updateWithContext",
            value: function(t) {
                var e = this;
                return this.data = ln(t.data, function() {
                    return {}
                }),
                this.description = t.description,
                this.endTimestamp = t.endTimestamp,
                this.op = t.op,
                this.parentSpanId = t.parentSpanId,
                this.sampled = t.sampled,
                this.spanId = ln(t.spanId, function() {
                    return e.spanId
                }),
                this.startTimestamp = ln(t.startTimestamp, function() {
                    return e.startTimestamp
                }),
                this.status = t.status,
                this.tags = ln(t.tags, function() {
                    return {}
                }),
                this.traceId = ln(t.traceId, function() {
                    return e.traceId
                }),
                this
            }
        }, {
            key: "getTraceContext",
            value: function() {
                return b({
                    data: 0 < Object.keys(this.data).length ? this.data : void 0,
                    description: this.description,
                    op: this.op,
                    parent_span_id: this.parentSpanId,
                    span_id: this.spanId,
                    status: this.status,
                    tags: 0 < Object.keys(this.tags).length ? this.tags : void 0,
                    trace_id: this.traceId
                })
            }
        }, {
            key: "getBaggage",
            value: function() {
                var t, e = this.transaction && this.transaction.metadata.baggage, e = !e || Nt(e) ? this.St(e) : e, n = Ht(t = e);
                return !Nt(t) || null != n && 0 !== n.length ? e : void 0
            }
        }, {
            key: "toJSON",
            value: function() {
                return b({
                    data: 0 < Object.keys(this.data).length ? this.data : void 0,
                    description: this.description,
                    op: this.op,
                    parent_span_id: this.parentSpanId,
                    span_id: this.spanId,
                    start_timestamp: this.startTimestamp,
                    status: this.status,
                    tags: 0 < Object.keys(this.tags).length ? this.tags : void 0,
                    timestamp: this.endTimestamp,
                    trace_id: this.traceId
                })
            }
        }, {
            key: "St",
            value: function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Mt({})
                  , e = (this.transaction && this.transaction.Et || T()).getClient()
                  , e = e && e.getOptions() || {}
                  , n = e.environment
                  , e = e.release;
                return n && Rt(t, "environment", n),
                e && Rt(t, "release", e),
                t
            }
        }])
    }()
      , un = function() {
        function r(t, e) {
            var n;
            return _classCallCheck(this, r),
            n = _callSuper(this, r, [t]),
            r.prototype.__init.call(_assertThisInitialized(n)),
            n.Et = e || T(),
            n.name = t.name || "",
            n.metadata = t.metadata || {},
            n.Tt = t.trimEnd,
            n.transaction = _assertThisInitialized(n),
            n
        }
        return _inherits(r, dn),
        _createClass(r, [{
            key: "__init",
            value: function() {
                this.$t = {}
            }
        }, {
            key: "setName",
            value: function(t) {
                this.name = t
            }
        }, {
            key: "initSpanRecorder",
            value: function() {
                this.spanRecorder || (this.spanRecorder = new cn(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1e3)),
                this.spanRecorder.add(this)
            }
        }, {
            key: "setMeasurement",
            value: function(t, e) {
                this.$t[t] = {
                    value: e,
                    unit: 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : ""
                }
            }
        }, {
            key: "setMetadata",
            value: function(t) {
                this.metadata = _objectSpread(_objectSpread({}, this.metadata), t)
            }
        }, {
            key: "finish",
            value: function(t) {
                var e = this;
                if (void 0 === this.endTimestamp) {
                    if (this.name || (this.name = "<unlabeled transaction>"),
                    _get(_getPrototypeOf(r.prototype), "finish", this).call(this, t),
                    !0 === this.sampled)
                        return t = this.spanRecorder ? this.spanRecorder.spans.filter(function(t) {
                            return t !== e && t.endTimestamp
                        }) : [],
                        this.Tt && 0 < t.length && (this.endTimestamp = t.reduce(function(t, e) {
                            return !t.endTimestamp || !e.endTimestamp || t.endTimestamp > e.endTimestamp ? t : e
                        }).endTimestamp),
                        t = {
                            contexts: {
                                trace: this.getTraceContext()
                            },
                            spans: t,
                            start_timestamp: this.startTimestamp,
                            tags: this.tags,
                            timestamp: this.endTimestamp,
                            transaction: this.name,
                            type: "transaction",
                            sdkProcessingMetadata: this.metadata
                        },
                        0 < Object.keys(this.$t).length && (t.measurements = this.$t),
                        this.Et.captureEvent(t);
                    (t = this.Et.getClient()) && t.recordDroppedEvent("sample_rate", "transaction")
                }
            }
        }, {
            key: "toContext",
            value: function() {
                return b(_objectSpread(_objectSpread({}, _get(_getPrototypeOf(r.prototype), "toContext", this).call(this)), {}, {
                    name: this.name,
                    trimEnd: this.Tt
                }))
            }
        }, {
            key: "updateWithContext",
            value: function(t) {
                var e;
                return _get(_getPrototypeOf(r.prototype), "updateWithContext", this).call(this, t),
                this.name = null != (e = t.name) ? e : "",
                this.Tt = t.trimEnd,
                this
            }
        }])
    }()
      , pn = function() {
        function o(t, e, n, r) {
            return _classCallCheck(this, o),
            (r = _callSuper(this, o, [r])).Ot = t,
            r.kt = e,
            r.transactionSpanId = n,
            r
        }
        return _inherits(o, cn),
        _createClass(o, [{
            key: "add",
            value: function(e) {
                var n = this;
                e.spanId !== this.transactionSpanId && (e.finish = function(t) {
                    e.endTimestamp = "number" == typeof t ? t : Tt(),
                    n.kt(e.spanId)
                }
                ,
                void 0 === e.endTimestamp) && this.Ot(e.spanId),
                _get(_getPrototypeOf(o.prototype), "add", this).call(this, e)
            }
        }])
    }()
      , fn = function() {
        function i(t, e) {
            var n, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1e3, o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 3e4, a = 4 < arguments.length && void 0 !== arguments[4] && arguments[4];
            return _classCallCheck(this, i),
            (n = _callSuper(this, i, [t, e])).Dt = e,
            n.It = r,
            n.Mt = o,
            n.Lt = a,
            i.prototype.__init.call(_assertThisInitialized(n)),
            i.prototype.__init2.call(_assertThisInitialized(n)),
            i.prototype.__init3.call(_assertThisInitialized(n)),
            i.prototype.__init4.call(_assertThisInitialized(n)),
            a && (mn(e),
            e.configureScope(function(t) {
                return t.setSpan(_assertThisInitialized(n))
            })),
            n.At(),
            setTimeout(function() {
                n.Rt || (n.setStatus("deadline_exceeded"),
                n.finish())
            }, n.Mt),
            n
        }
        return _inherits(i, un),
        _createClass(i, [{
            key: "__init",
            value: function() {
                this.activities = {}
            }
        }, {
            key: "__init2",
            value: function() {
                this.jt = 0
            }
        }, {
            key: "__init3",
            value: function() {
                this.Rt = !1
            }
        }, {
            key: "__init4",
            value: function() {
                this.Ct = []
            }
        }, {
            key: "finish",
            value: function() {
                var e = this
                  , n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Tt();
                if (this.Rt = !0,
                this.activities = {},
                this.spanRecorder) {
                    var t, r = _createForOfIteratorHelper(this.Ct);
                    try {
                        for (r.s(); !(t = r.n()).done; )
                            (0,
                            t.value)(this, n)
                    } catch (t) {
                        r.e(t)
                    } finally {
                        r.f()
                    }
                    this.spanRecorder.spans = this.spanRecorder.spans.filter(function(t) {
                        return t.spanId === e.spanId || (t.endTimestamp || (t.endTimestamp = n,
                        t.setStatus("cancelled")),
                        t.startTimestamp < n)
                    })
                }
                return this.Lt && mn(this.Dt),
                _get(_getPrototypeOf(i.prototype), "finish", this).call(this, n)
            }
        }, {
            key: "registerBeforeFinishCallback",
            value: function(t) {
                this.Ct.push(t)
            }
        }, {
            key: "initSpanRecorder",
            value: function(t) {
                var e = this;
                this.spanRecorder || (this.spanRecorder = new pn(function(t) {
                    e.Rt || e.Ot(t)
                }
                ,function(t) {
                    e.Rt || e.kt(t)
                }
                ,this.spanId,t),
                this.Nt()),
                this.spanRecorder.add(this)
            }
        }, {
            key: "qt",
            value: function() {
                this.Ut && (clearTimeout(this.Ut),
                this.Ut = void 0)
            }
        }, {
            key: "At",
            value: function(t) {
                var e = this;
                this.qt(),
                this.Ut = setTimeout(function() {
                    e.Rt || 0 !== Object.keys(e.activities).length || e.finish(t)
                }, this.It)
            }
        }, {
            key: "Ot",
            value: function(t) {
                this.qt(),
                this.activities[t] = !0
            }
        }, {
            key: "kt",
            value: function(t) {
                this.activities[t] && delete this.activities[t],
                0 === Object.keys(this.activities).length && (t = Tt() + this.It / 1e3,
                this.At(t))
            }
        }, {
            key: "Ft",
            value: function() {
                var t;
                this.Rt || ((t = Object.keys(this.activities).join("")) === this.Pt ? this.jt += 1 : this.jt = 1,
                this.Pt = t,
                3 <= this.jt ? (this.setStatus("deadline_exceeded"),
                this.finish()) : this.Nt())
            }
        }, {
            key: "Nt",
            value: function() {
                var t = this;
                setTimeout(function() {
                    t.Ft()
                }, 5e3)
            }
        }])
    }();
    function mn(t) {
        t = t.getScope();
        t && t.getTransaction() && t.setSpan(void 0)
    }
    function hn() {
        var t = this.getScope();
        if (t) {
            t = t.getSpan();
            if (t)
                return {
                    "sentry-trace": t.toTraceparent()
                }
        }
        return {}
    }
    function gn(t, e, n) {
        var r;
        return on(e) ? void 0 !== t.sampled ? t.setMetadata({
            transactionSampling: {
                method: "explicitly_set"
            }
        }) : ("function" == typeof e.tracesSampler ? (r = e.tracesSampler(n),
        t.setMetadata({
            transactionSampling: {
                method: "client_sampler",
                rate: Number(r)
            }
        })) : void 0 !== n.parentSampled ? (r = n.parentSampled,
        t.setMetadata({
            transactionSampling: {
                method: "inheritance"
            }
        })) : (r = e.tracesSampleRate,
        t.setMetadata({
            transactionSampling: {
                method: "client_rate",
                rate: Number(r)
            }
        })),
        U(r) || "number" != typeof r && "boolean" != typeof r || r < 0 || 1 < r || !r ? t.sampled = !1 : (t.sampled = Math.random() < r,
        t.sampled)) : t.sampled = !1,
        t
    }
    function vn(t, e) {
        var n = this.getClient()
          , n = n && n.getOptions() || {}
          , r = new un(t,this);
        return (r = gn(r, n, _objectSpread({
            parentSampled: t.parentSampled,
            transactionContext: t
        }, e))).sampled && r.initSpanRecorder(n._experiments && n._experiments.maxSpans),
        r
    }
    function _n() {
        var t;
        (t = Wt()).__SENTRY__ && (t.__SENTRY__.extensions = t.__SENTRY__.extensions || {},
        t.__SENTRY__.extensions.startTransaction || (t.__SENTRY__.extensions.startTransaction = vn),
        t.__SENTRY__.extensions.traceHeaders || (t.__SENTRY__.extensions.traceHeaders = hn)),
        _("error", sn),
        _("unhandledrejection", sn)
    }
    var yn = l()
      , bn = function(e, n, r) {
        var o;
        return function(t) {
            0 <= n.value && (t || r) && (n.delta = n.value - (o || 0),
            n.delta || void 0 === o) && (o = n.value,
            e(n))
        }
    }
      , xn = function(t, e) {
        return {
            name: t,
            value: null != e ? e : -1,
            delta: 0,
            entries: [],
            id: "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
        }
    }
      , kn = function(t, e) {
        try {
            var n;
            if (PerformanceObserver.supportedEntryTypes.includes(t))
                if ("first-input" !== t || "PerformanceEventTiming"in self)
                    return (n = new PerformanceObserver(function(t) {
                        return t.getEntries().map(e)
                    }
                    )).observe({
                        type: t,
                        buffered: !0
                    }),
                    n
        } catch (t) {}
    }
      , wn = function(e, n) {
        function r(t) {
            "pagehide" !== t.type && "hidden" !== l().document.visibilityState || (e(t),
            n && (removeEventListener("visibilitychange", r, !0),
            removeEventListener("pagehide", r, !0)))
        }
        addEventListener("visibilitychange", r, !0),
        addEventListener("pagehide", r, !0)
    }
      , Sn = -1
      , Cn = function() {
        return Sn < 0 && (Sn = "hidden" === l().document.visibilityState ? 0 : 1 / 0,
        wn(function(t) {
            t = t.timeStamp;
            Sn = t
        }, !0)),
        {
            get firstHiddenTime() {
                return Sn
            }
        }
    }
      , Tn = {};
    function jn(t) {
        return "number" == typeof t && isFinite(t)
    }
    function I(t, e) {
        var n = e.startTimestamp
          , e = _objectWithoutProperties(e, _excluded);
        n && t.startTimestamp > n && (t.startTimestamp = n),
        t.startChild(_objectSpread({
            startTimestamp: n
        }, e))
    }
    var L = l();
    function On() {
        return L && L.addEventListener && L.performance
    }
    var D, En, An = 0, $ = {};
    function Pn(t) {
        var e, n, r, o, a, i, s, l, c, d, u, p, f, m, h, g = 0 < arguments.length && void 0 !== t && t, v = On();
        function _(t) {
            e && t.startTime < n.firstHiddenTime && (r.value = t.processingStart - t.startTime,
            r.entries.push(t),
            e(!0))
        }
        function y(t) {
            var e, n;
            t && !t.hadRecentInput && (e = m[0],
            n = m[m.length - 1],
            f && 0 !== m.length && t.startTime - n.startTime < 1e3 && t.startTime - e.startTime < 5e3 ? (f += t.value,
            m.push(t)) : (f = t.value,
            m = [t]),
            f > p.value) && (p.value = f,
            p.entries = m,
            u) && u()
        }
        v && jt && (v.mark && L.performance.mark("sentry-tracing-init"),
        p = xn("CLS", 0),
        f = 0,
        m = [],
        (h = kn("layout-shift", y)) && (u = bn(function(t) {
            var e = t.entries.pop();
            e && ($.cls = {
                value: t.value,
                unit: "millisecond"
            },
            En = e)
        }, p, void 0),
        wn(function() {
            h.takeRecords().map(y),
            u(!0)
        })),
        v = g,
        s = Cn(),
        l = xn("LCP"),
        (d = kn("largest-contentful-paint", c = function(t) {
            var e = t.startTime;
            e < s.firstHiddenTime && (l.value = e,
            l.entries.push(t)),
            a && a()
        }
        )) && (a = bn(function(t) {
            var e = t.entries.pop(), n, r;
            e && (n = jt / 1e3,
            r = e.startTime / 1e3,
            $.lcp = {
                value: t.value,
                unit: "millisecond"
            },
            $["mark.lcp"] = {
                value: n + r,
                unit: "second"
            },
            D = e)
        }, l, v),
        i = function() {
            Tn[l.id] || (d.takeRecords().map(c),
            d.disconnect(),
            Tn[l.id] = !0,
            a(!0))
        }
        ,
        ["keydown", "click"].forEach(function(t) {
            addEventListener(t, i, {
                once: !0,
                capture: !0
            })
        }),
        wn(i, !0)),
        n = Cn(),
        r = xn("FID"),
        o = kn("first-input", _)) && (e = bn(function(t) {
            var e = t.entries.pop(), n, r;
            e && (n = jt / 1e3,
            r = e.startTime / 1e3,
            $.fid = {
                value: t.value,
                unit: "millisecond"
            },
            $["mark.fid"] = {
                value: n + r,
                unit: "second"
            })
        }, r, void 0),
        wn(function() {
            o.takeRecords().map(_),
            o.disconnect()
        }, !0))
    }
    function In(g) {
        var v, _, y, n, t, e, r = On();
        r && L.performance.getEntries && jt && (v = jt / 1e3,
        (r = r.getEntries()).slice(An).forEach(function(t) {
            var e, n, r, o, a, i, s, l, c, d, u = t.startTime / 1e3, p = t.duration / 1e3;
            if (!("navigation" === g.op && v + u < g.startTimestamp))
                switch (t.entryType) {
                case "navigation":
                    s = g,
                    l = t,
                    c = v,
                    ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(function(t) {
                        Ln(s, l, t, c)
                    }),
                    Ln(s, l, "secureConnection", c, "TLS/SSL", "connectEnd"),
                    Ln(s, l, "fetch", c, "cache", "domainLookupStart"),
                    Ln(s, l, "domainLookup", c, "DNS"),
                    I(d = s, {
                        op: "browser",
                        description: "request",
                        startTimestamp: (f = c) + (m = l).requestStart / 1e3,
                        endTimestamp: f + m.responseEnd / 1e3
                    }),
                    I(d, {
                        op: "browser",
                        description: "response",
                        startTimestamp: f + m.responseStart / 1e3,
                        endTimestamp: f + m.responseEnd / 1e3
                    }),
                    _ = v + t.responseStart / 1e3,
                    y = v + t.requestStart / 1e3;
                    break;
                case "mark":
                case "paint":
                case "measure":
                    d = v + u,
                    I(g, {
                        description: t.name,
                        endTimestamp: d + p,
                        op: t.entryType,
                        startTimestamp: d
                    });
                    var f = d
                      , m = Cn()
                      , h = t.startTime < m.firstHiddenTime;
                    "first-paint" === t.name && h && ($.fp = {
                        value: t.startTime,
                        unit: "millisecond"
                    },
                    $["mark.fp"] = {
                        value: f,
                        unit: "second"
                    }),
                    "first-contentful-paint" === t.name && h && ($.fcp = {
                        value: t.startTime,
                        unit: "millisecond"
                    },
                    $["mark.fcp"] = {
                        value: f,
                        unit: "second"
                    });
                    break;
                case "resource":
                    var h = t.name.replace(L.location.origin, "");
                    e = g,
                    h = h,
                    r = u,
                    o = p,
                    a = v,
                    "xmlhttprequest" !== (n = t).initiatorType && "fetch" !== n.initiatorType && (i = {},
                    "transferSize"in n && (i["Transfer Size"] = n.transferSize),
                    "encodedBodySize"in n && (i["Encoded Body Size"] = n.encodedBodySize),
                    "decodedBodySize"in n && (i["Decoded Body Size"] = n.decodedBodySize),
                    I(e, {
                        description: h,
                        endTimestamp: (e = a + r) + o,
                        op: n.initiatorType ? "resource.".concat(n.initiatorType) : "resource",
                        startTimestamp: e,
                        data: i
                    }))
                }
        }),
        An = Math.max(r.length - 1, 0),
        r = g,
        (e = L.navigator) && ((t = e.connection) && (t.effectiveType && r.setTag("effectiveConnectionType", t.effectiveType),
        t.type && r.setTag("connectionType", t.type),
        jn(t.rtt) && ($["connection.rtt"] = {
            value: t.rtt,
            unit: "millisecond"
        }),
        jn(t.downlink)) && ($["connection.downlink"] = {
            value: t.downlink,
            unit: ""
        }),
        jn(e.deviceMemory) && r.setTag("deviceMemory", "".concat(e.deviceMemory, " GB")),
        jn(e.hardwareConcurrency)) && r.setTag("hardwareConcurrency", String(e.hardwareConcurrency)),
        "pageload" === g.op && ("number" == typeof _ && ($.ttfb = {
            value: 1e3 * (_ - g.startTimestamp),
            unit: "millisecond"
        },
        "number" == typeof y) && y <= _ && ($["ttfb.requestTime"] = {
            value: 1e3 * (_ - y),
            unit: "second"
        }),
        ["fcp", "fp", "lcp"].forEach(function(t) {
            var e;
            !$[t] || v >= g.startTimestamp || (e = $[t].value,
            e = Math.abs(1e3 * (v + e / 1e3 - g.startTimestamp)),
            $[t].value = e)
        }),
        $["mark.fid"] && $.fid && I(g, {
            description: "first input delay",
            endTimestamp: $["mark.fid"].value + $.fid.value / 1e3,
            op: "web.vitals",
            startTimestamp: $["mark.fid"].value
        }),
        "fcp"in $ || delete $.cls,
        Object.keys($).forEach(function(t) {
            g.setMeasurement(t, $[t].value, $[t].unit)
        }),
        n = g,
        D && (D.element && n.setTag("lcp.element", o(D.element)),
        D.id && n.setTag("lcp.id", D.id),
        D.url && n.setTag("lcp.url", D.url.trim().slice(0, 200)),
        n.setTag("lcp.size", D.size)),
        En) && En.sources && En.sources.forEach(function(t, e) {
            return n.setTag("cls.source.".concat(e + 1), o(t.node))
        }),
        En = D = void 0,
        $ = {})
    }
    function Ln(t, e, n, r, o, a) {
        a = a ? e[a] : e["".concat(n, "End")],
        e = e["".concat(n, "Start")];
        e && a && I(t, {
            op: "browser",
            description: null != o ? o : function() {
                return n
            }(),
            startTimestamp: r + e / 1e3,
            endTimestamp: r + a / 1e3
        })
    }
    var Dn = {
        traceFetch: !0,
        traceXHR: !0,
        tracingOrigins: ["localhost", /^\//]
    };
    function $n(t) {
        function e(e) {
            return i[e] || (i[e] = o.some(function(t) {
                return f(e, t)
            }) && !f(e, "sentry_key")),
            i[e]
        }
        var t = _objectSpread(_objectSpread({}, Dn), t)
          , n = t.traceFetch
          , r = t.traceXHR
          , o = t.tracingOrigins
          , a = t.shouldCreateSpanForRequest
          , i = {}
          , s = e
          , l = ("function" == typeof a && (s = function(t) {
            return e(t) && a(t)
        }
        ),
        {});
        n && _("fetch", function(t) {
            var e, n = s, r = l;
            if (on() && t.fetchData && n(t.fetchData.url))
                t.endTimestamp ? (n = t.fetchData.__span) && ((e = r[n]) && (t.response ? e.setHttpStatus(t.response.status) : t.error && e.setStatus("internal_error"),
                e.finish(),
                delete r[n])) : (e = an()) && (n = e.startChild({
                    data: _objectSpread(_objectSpread({}, t.fetchData), {}, {
                        type: "fetch"
                    }),
                    description: "".concat(t.fetchData.method, " ").concat(t.fetchData.url),
                    op: "http.client"
                }),
                t.fetchData.__span = n.spanId,
                r[n.spanId] = n,
                e = t.args[0] = t.args[0],
                (r = t.args[1] = t.args[1] || {}).headers = (t = e,
                e = n,
                n = r.headers,
                d(t, Request) && (n = t.headers),
                t = e.getBaggage(),
                n ? "function" == typeof n.append ? (n.append("sentry-trace", e.toTraceparent()),
                n.append(C, Bt(t, n.get(C)))) : n = Array.isArray(n) ? (r = n.find(function(t) {
                    var t = _slicedToArray(t, 2)
                      , e = t[0];
                    t[1];
                    return e === C
                }),
                r = _slicedToArray(r, 2)[1],
                [].concat(_toConsumableArray(n), [["sentry-trace", e.toTraceparent()], [C, Bt(t, r)]])) : _objectSpread(_objectSpread({}, n), {}, {
                    "sentry-trace": e.toTraceparent(),
                    baggage: Bt(t, n.baggage)
                }) : n = {
                    "sentry-trace": e.toTraceparent(),
                    baggage: Bt(t)
                },
                n))
        }),
        r && _("xhr", function(t) {
            var e = t
              , t = s
              , n = l;
            if (!(!on() || e.xhr && e.xhr.__sentry_own_request__) && e.xhr && e.xhr.__sentry_xhr__ && t(e.xhr.__sentry_xhr__.url)) {
                t = e.xhr.__sentry_xhr__;
                if (e.endTimestamp)
                    return void ((o = e.xhr.__sentry_xhr_span_id__) && ((r = n[o]) && (r.setHttpStatus(t.status_code),
                    r.finish(),
                    delete n[o])));
                var r = an();
                if (r) {
                    var o = r.startChild({
                        data: _objectSpread(_objectSpread({}, t.data), {}, {
                            type: "xhr",
                            method: t.method,
                            url: t.url
                        }),
                        description: "".concat(t.method, " ").concat(t.url),
                        op: "http.client"
                    });
                    if (e.xhr.__sentry_xhr_span_id__ = o.spanId,
                    n[e.xhr.__sentry_xhr_span_id__] = o,
                    e.xhr.setRequestHeader)
                        try {
                            e.xhr.setRequestHeader("sentry-trace", o.toTraceparent());
                            var a = e.xhr.getRequestHeader && e.xhr.getRequestHeader(C);
                            e.xhr.setRequestHeader(C, Bt(o.getBaggage(), a))
                        } catch (e) {}
                }
            }
        })
    }
    var Mn = l()
      , Rn = _objectSpread({
        idleTimeout: 1e3,
        finalTimeout: 3e4,
        markBackgroundTransactions: !0,
        routingInstrumentation: function(n) {
            var r, o, t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1], e = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
            Mn && Mn.location && (o = Mn.location.href,
            t && (r = n({
                name: Mn.location.pathname,
                op: "pageload"
            })),
            e) && _("history", function(t) {
                var e = t.to
                  , t = t.from;
                void 0 === t && o && -1 !== o.indexOf(e) ? o = void 0 : t !== e && (o = void 0,
                r && r.finish(),
                r = n({
                    name: Mn.location.pathname,
                    op: "navigation"
                }))
            })
        },
        startTransactionOnLocationChange: !0,
        startTransactionOnPageLoad: !0
    }, Dn)
      , _e = function() {
        function n(t) {
            _classCallCheck(this, n),
            n.prototype.__init.call(this);
            var e = Dn.tracingOrigins
              , t = (t && t.tracingOrigins && Array.isArray(t.tracingOrigins) && 0 !== t.tracingOrigins.length && (e = t.tracingOrigins),
            this.options = _objectSpread(_objectSpread(_objectSpread({}, Rn), t), {}, {
                tracingOrigins: e
            }),
            this.options.Bt);
            Pn(t && t.Ht)
        }
        return _createClass(n, [{
            key: "__init",
            value: function() {
                this.name = "BrowserTracing"
            }
        }, {
            key: "setupOnce",
            value: function(t, e) {
                var n = this
                  , e = (this.zt = e,
                this.options)
                  , r = e.routingInstrumentation
                  , o = e.startTransactionOnLocationChange
                  , a = e.startTransactionOnPageLoad
                  , i = e.markBackgroundTransactions
                  , s = e.traceFetch
                  , l = e.traceXHR
                  , c = e.tracingOrigins
                  , e = e.shouldCreateSpanForRequest;
                r(function(t) {
                    return n.Xt(t)
                }, a, o),
                i && yn && yn.document && yn.document.addEventListener("visibilitychange", function() {
                    var t = an();
                    yn.document.hidden && t && (t.status || t.setStatus("cancelled"),
                    t.setTag("visibilitychange", "document.hidden"),
                    t.finish())
                }),
                $n({
                    traceFetch: s,
                    traceXHR: l,
                    tracingOrigins: c,
                    shouldCreateSpanForRequest: e
                })
            }
        }, {
            key: "Xt",
            value: function(t) {
                var e, n, r, o, a, i = this;
                if (this.zt)
                    return e = (r = this.options).beforeNavigate,
                    n = r.idleTimeout,
                    r = r.finalTimeout,
                    o = "pageload" === t.op ? function() {
                        var n = Nn("sentry-trace")
                          , t = Nn("baggage")
                          , e = n ? function() {
                            var t, e = n.match(Ot);
                            if (e)
                                return "1" === e[3] ? t = !0 : "0" === e[3] && (t = !1),
                                {
                                    traceId: e[1],
                                    parentSampled: t,
                                    parentSpanId: e[2]
                                }
                        }() : void 0
                          , t = t ? zt(t) : void 0;
                        if (e || t)
                            return _objectSpread(_objectSpread({}, e), t && {
                                metadata: {
                                    baggage: t
                                }
                            })
                    }() : void 0,
                    t = _objectSpread(_objectSpread(_objectSpread({}, t), o), {}, {
                        trimEnd: !0
                    }),
                    e = void 0 === (o = "function" == typeof e ? e(t) : t) ? _objectSpread(_objectSpread({}, t), {}, {
                        sampled: !1
                    }) : o,
                    t = this.zt(),
                    o = l().location,
                    e = e,
                    n = n,
                    r = r,
                    o = {
                        location: o
                    },
                    a = (a = (t = t).getClient()) && a.getOptions() || {},
                    (t = gn(t = new fn(e,t,n,r,!0), a, _objectSpread({
                        parentSampled: e.parentSampled,
                        transactionContext: e
                    }, o))).sampled && t.initSpanRecorder(a._experiments && a._experiments.maxSpans),
                    (n = t).registerBeforeFinishCallback(function(t) {
                        In(t),
                        t.setTag("sentry_reportAllChanges", Boolean(i.options.Bt && i.options.Bt.Ht))
                    }),
                    n
            }
        }])
    }();
    function Nn(t) {
        var e = l();
        return e.document && e.document.querySelector && (e = e.document.querySelector("meta[name=".concat(t, "]"))) ? e.getAttribute("content") : null
    }
    E = {},
    P = l(),
    Xe = _objectSpread(_objectSpread(_objectSpread({}, E = P.Sentry && P.Sentry.Integrations ? P.Sentry.Integrations : E), Ue), {}, {
        BrowserTracing: _e
    });
    return _n(),
    t.BrowserClient = Te,
    t.BrowserTracing = _e,
    t.Hub = Zt,
    t.Integrations = Xe,
    t.SDK_VERSION = se,
    t.Scope = Ft,
    t.Span = dn,
    t.addBreadcrumb = function(t) {
        T().addBreadcrumb(t)
    }
    ,
    t.addExtensionMethods = _n,
    t.addGlobalEventProcessor = Ut,
    t.captureEvent = function(t, e) {
        return T().captureEvent(t, e)
    }
    ,
    t.captureException = Gt,
    t.captureMessage = function(t, e) {
        var n = "string" == typeof e ? e : void 0
          , e = "string" != typeof e ? {
            captureContext: e
        } : void 0;
        return T().captureMessage(t, n, e)
    }
    ,
    t.close = function(t) {
        var e = T().getClient();
        return e ? e.close(t) : w(!1)
    }
    ,
    t.configureScope = function(t) {
        T().configureScope(t)
    }
    ,
    t.defaultIntegrations = nn,
    t.flush = function(t) {
        var e = T().getClient();
        return e ? e.flush(t) : w(!1)
    }
    ,
    t.forceLoad = function() {}
    ,
    t.getCurrentHub = T,
    t.getHubFromCarrier = Jt,
    t.init = function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        void 0 === t.defaultIntegrations && (t.defaultIntegrations = nn),
        void 0 === t.release && (e = l()).SENTRY_RELEASE && e.SENTRY_RELEASE.id && (t.release = e.SENTRY_RELEASE.id),
        void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0),
        void 0 === t.sendClientReports && (t.sendClientReports = !0);
        var e, n, r, o, a, i = _objectSpread(_objectSpread({}, t), {}, {
            stackParser: (e = t.stackParser || $e,
            Array.isArray(e) ? ot.apply(void 0, _toConsumableArray(e)) : e),
            integrations: (i = (e = t).defaultIntegrations && _toConsumableArray(e.defaultIntegrations) || [],
            n = e.integrations,
            e = _toConsumableArray(re(i)),
            Array.isArray(n) ? e = [].concat(_toConsumableArray(e.filter(function(e) {
                return n.every(function(t) {
                    return t.name !== e.name
                })
            })), _toConsumableArray(re(n))) : "function" == typeof n && (e = n(e),
            e = Array.isArray(e) ? e : [e]),
            -1 !== (i = e.map(function(t) {
                return t.name
            })).indexOf("Debug") && e.push.apply(e, _toConsumableArray(e.splice(i.indexOf("Debug"), 1))),
            e),
            transport: t.transport || (it() ? je : Oe)
        });
        r = Te,
        !0 === (i = i).debug && console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."),
        o = T(),
        (a = o.getScope()) && a.update(i.initialScope),
        a = new r(i),
        o.bindClient(a),
        t.autoSessionTracking && void 0 !== l().document && (r = T()).captureSession && (rn(r),
        _("history", function(t) {
            var e = t.from
              , t = t.to;
            void 0 !== e && e !== t && rn(T())
        }))
    }
    ,
    t.lastEventId = function() {
        return T().lastEventId()
    }
    ,
    t.makeFetchTransport = je,
    t.makeXHRTransport = Oe,
    t.onLoad = function(t) {
        t()
    }
    ,
    t.setContext = function(t, e) {
        T().setContext(t, e)
    }
    ,
    t.setExtra = function(t, e) {
        T().setExtra(t, e)
    }
    ,
    t.setExtras = function(t) {
        T().setExtras(t)
    }
    ,
    t.setTag = function(t, e) {
        T().setTag(t, e)
    }
    ,
    t.setTags = function(t) {
        T().setTags(t)
    }
    ,
    t.setUser = function(t) {
        T().setUser(t)
    }
    ,
    t.showReportDialog = function() {
        var i, t, e, n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : T(), o = l();
        o.document && (t = (e = r.getStackTop()).client,
        e = e.scope,
        i = n.dsn || t && t.getDsn()) && (e && (n.user = _objectSpread(_objectSpread({}, e.getUser()), n.user)),
        n.eventId || (n.eventId = r.lastEventId()),
        (t = o.document.createElement("script")).async = !0,
        t.src = function(t) {
            var e, n = J(i), r = "".concat(Qt(n), "embed/error-page/"), o = "dsn=".concat(W(n));
            for (e in t)
                if ("dsn" !== e)
                    if ("user" === e) {
                        var a = t.user;
                        if (!a)
                            continue;
                        a.name && (o += "&name=".concat(encodeURIComponent(a.name))),
                        a.email && (o += "&email=".concat(encodeURIComponent(a.email)))
                    } else
                        o += "&".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(t[e]));
            return "".concat(r, "?").concat(o)
        }(n),
        n.onLoad && (t.onload = n.onLoad),
        e = o.document.head || o.document.body) && e.appendChild(t)
    }
    ,
    t.startTransaction = function(t, e) {
        return T().startTransaction(_objectSpread({}, t), e)
    }
    ,
    t.withScope = Yt,
    t.wrap = function(t) {
        return O(t)()
    }
    ,
    t
}({}));
"localhost" !== window.location.hostname && Sentry.init({
    dsn: "https://128516fea75d4561afae838d8440581f@sentry.".concat((SentryDomain = function() {
        var t = window.location.hostname
          , e = t.split(".");
        return 2 < e.length ? "".concat(e[e.length - 2], ".").concat(e[e.length - 1]) : 2 === e.length ? t : ""
    }
    )(), "/24"),
    integrations: [new Sentry.BrowserTracing],
    tracesSampleRate: .05
});
