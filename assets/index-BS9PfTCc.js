var yc = (e) => {
  throw TypeError(e);
};
var ul = (e, t, n) => t.has(e) || yc("Cannot " + n);
var P = (e, t, n) => (
    ul(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  J = (e, t, n) =>
    t.has(e)
      ? yc("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  B = (e, t, n, r) => (
    ul(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  be = (e, t, n) => (ul(e, t, "access private method"), n);
var pi = (e, t, n, r) => ({
  set _(o) {
    B(e, t, o, n);
  },
  get _() {
    return P(e, t, r);
  },
});
function Mg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Rf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var jf = { exports: {} },
  js = {},
  Of = { exports: {} },
  Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ni = Symbol.for("react.element"),
  Lg = Symbol.for("react.portal"),
  Ig = Symbol.for("react.fragment"),
  Dg = Symbol.for("react.strict_mode"),
  zg = Symbol.for("react.profiler"),
  Fg = Symbol.for("react.provider"),
  $g = Symbol.for("react.context"),
  Ug = Symbol.for("react.forward_ref"),
  Bg = Symbol.for("react.suspense"),
  Wg = Symbol.for("react.memo"),
  Vg = Symbol.for("react.lazy"),
  wc = Symbol.iterator;
function Hg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wc && e[wc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Af = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  _f = Object.assign,
  Mf = {};
function eo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Mf),
    (this.updater = n || Af);
}
eo.prototype.isReactComponent = {};
eo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
eo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Lf() {}
Lf.prototype = eo.prototype;
function eu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Mf),
    (this.updater = n || Af);
}
var tu = (eu.prototype = new Lf());
tu.constructor = eu;
_f(tu, eo.prototype);
tu.isPureReactComponent = !0;
var xc = Array.isArray,
  If = Object.prototype.hasOwnProperty,
  nu = { current: null },
  Df = { key: !0, ref: !0, __self: !0, __source: !0 };
function zf(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      If.call(t, r) && !Df.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: ni,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: nu.current,
  };
}
function Qg(e, t) {
  return {
    $$typeof: ni,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ru(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ni;
}
function Kg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Sc = /\/+/g;
function cl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Kg("" + e.key)
    : t.toString(36);
}
function zi(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ni:
          case Lg:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + cl(s, 0) : r),
      xc(o)
        ? ((n = ""),
          e != null && (n = e.replace(Sc, "$&/") + "/"),
          zi(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (ru(o) &&
            (o = Qg(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Sc, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), xc(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + cl(i, l);
      s += zi(i, t, n, a, o);
    }
  else if (((a = Hg(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + cl(i, l++)), (s += zi(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function hi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    zi(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Yg(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Le = { current: null },
  Fi = { transition: null },
  Gg = {
    ReactCurrentDispatcher: Le,
    ReactCurrentBatchConfig: Fi,
    ReactCurrentOwner: nu,
  };
function Ff() {
  throw Error("act(...) is not supported in production builds of React.");
}
Y.Children = {
  map: hi,
  forEach: function (e, t, n) {
    hi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      hi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      hi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ru(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Y.Component = eo;
Y.Fragment = Ig;
Y.Profiler = zg;
Y.PureComponent = eu;
Y.StrictMode = Dg;
Y.Suspense = Bg;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gg;
Y.act = Ff;
Y.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = _f({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = nu.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      If.call(t, a) &&
        !Df.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: ni, type: e.type, key: o, ref: i, props: r, _owner: s };
};
Y.createContext = function (e) {
  return (
    (e = {
      $$typeof: $g,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Fg, _context: e }),
    (e.Consumer = e)
  );
};
Y.createElement = zf;
Y.createFactory = function (e) {
  var t = zf.bind(null, e);
  return (t.type = e), t;
};
Y.createRef = function () {
  return { current: null };
};
Y.forwardRef = function (e) {
  return { $$typeof: Ug, render: e };
};
Y.isValidElement = ru;
Y.lazy = function (e) {
  return { $$typeof: Vg, _payload: { _status: -1, _result: e }, _init: Yg };
};
Y.memo = function (e, t) {
  return { $$typeof: Wg, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function (e) {
  var t = Fi.transition;
  Fi.transition = {};
  try {
    e();
  } finally {
    Fi.transition = t;
  }
};
Y.unstable_act = Ff;
Y.useCallback = function (e, t) {
  return Le.current.useCallback(e, t);
};
Y.useContext = function (e) {
  return Le.current.useContext(e);
};
Y.useDebugValue = function () {};
Y.useDeferredValue = function (e) {
  return Le.current.useDeferredValue(e);
};
Y.useEffect = function (e, t) {
  return Le.current.useEffect(e, t);
};
Y.useId = function () {
  return Le.current.useId();
};
Y.useImperativeHandle = function (e, t, n) {
  return Le.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function (e, t) {
  return Le.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function (e, t) {
  return Le.current.useLayoutEffect(e, t);
};
Y.useMemo = function (e, t) {
  return Le.current.useMemo(e, t);
};
Y.useReducer = function (e, t, n) {
  return Le.current.useReducer(e, t, n);
};
Y.useRef = function (e) {
  return Le.current.useRef(e);
};
Y.useState = function (e) {
  return Le.current.useState(e);
};
Y.useSyncExternalStore = function (e, t, n) {
  return Le.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function () {
  return Le.current.useTransition();
};
Y.version = "18.3.1";
Of.exports = Y;
var x = Of.exports;
const O = Rf(x),
  $f = Mg({ __proto__: null, default: O }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qg = x,
  Xg = Symbol.for("react.element"),
  Jg = Symbol.for("react.fragment"),
  Zg = Object.prototype.hasOwnProperty,
  e0 = qg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  t0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Uf(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Zg.call(t, r) && !t0.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Xg,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: e0.current,
  };
}
js.Fragment = Jg;
js.jsx = Uf;
js.jsxs = Uf;
jf.exports = js;
var y = jf.exports,
  Bf = { exports: {} },
  Xe = {},
  Wf = { exports: {} },
  Vf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, N) {
    var L = T.length;
    T.push(N);
    e: for (; 0 < L; ) {
      var V = (L - 1) >>> 1,
        z = T[V];
      if (0 < o(z, N)) (T[V] = N), (T[L] = z), (L = V);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var N = T[0],
      L = T.pop();
    if (L !== N) {
      T[0] = L;
      e: for (var V = 0, z = T.length, K = z >>> 1; V < K; ) {
        var q = 2 * (V + 1) - 1,
          he = T[q],
          Ce = q + 1,
          Z = T[Ce];
        if (0 > o(he, L))
          Ce < z && 0 > o(Z, he)
            ? ((T[V] = Z), (T[Ce] = L), (V = Ce))
            : ((T[V] = he), (T[q] = L), (V = q));
        else if (Ce < z && 0 > o(Z, L)) (T[V] = Z), (T[Ce] = L), (V = Ce);
        else break e;
      }
    }
    return N;
  }
  function o(T, N) {
    var L = T.sortIndex - N.sortIndex;
    return L !== 0 ? L : T.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    h = 3,
    d = !1,
    S = !1,
    v = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(T) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= T)
        r(u), (N.sortIndex = N.expirationTime), t(a, N);
      else break;
      N = n(u);
    }
  }
  function E(T) {
    if (((v = !1), g(T), !S))
      if (n(a) !== null) (S = !0), $(k);
      else {
        var N = n(u);
        N !== null && W(E, N.startTime - T);
      }
  }
  function k(T, N) {
    (S = !1), v && ((v = !1), m(R), (R = -1)), (d = !0);
    var L = h;
    try {
      for (
        g(N), f = n(a);
        f !== null && (!(f.expirationTime > N) || (T && !F()));

      ) {
        var V = f.callback;
        if (typeof V == "function") {
          (f.callback = null), (h = f.priorityLevel);
          var z = V(f.expirationTime <= N);
          (N = e.unstable_now()),
            typeof z == "function" ? (f.callback = z) : f === n(a) && r(a),
            g(N);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var K = !0;
      else {
        var q = n(u);
        q !== null && W(E, q.startTime - N), (K = !1);
      }
      return K;
    } finally {
      (f = null), (h = L), (d = !1);
    }
  }
  var C = !1,
    b = null,
    R = -1,
    _ = 5,
    A = -1;
  function F() {
    return !(e.unstable_now() - A < _);
  }
  function D() {
    if (b !== null) {
      var T = e.unstable_now();
      A = T;
      var N = !0;
      try {
        N = b(!0, T);
      } finally {
        N ? Q() : ((C = !1), (b = null));
      }
    } else C = !1;
  }
  var Q;
  if (typeof p == "function")
    Q = function () {
      p(D);
    };
  else if (typeof MessageChannel < "u") {
    var M = new MessageChannel(),
      G = M.port2;
    (M.port1.onmessage = D),
      (Q = function () {
        G.postMessage(null);
      });
  } else
    Q = function () {
      w(D, 0);
    };
  function $(T) {
    (b = T), C || ((C = !0), Q());
  }
  function W(T, N) {
    R = w(function () {
      T(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || d || ((S = !0), $(k));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (_ = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (T) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = h;
      }
      var L = h;
      h = N;
      try {
        return T();
      } finally {
        h = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, N) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var L = h;
      h = T;
      try {
        return N();
      } finally {
        h = L;
      }
    }),
    (e.unstable_scheduleCallback = function (T, N, L) {
      var V = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? V + L : V))
          : (L = V),
        T)
      ) {
        case 1:
          var z = -1;
          break;
        case 2:
          z = 250;
          break;
        case 5:
          z = 1073741823;
          break;
        case 4:
          z = 1e4;
          break;
        default:
          z = 5e3;
      }
      return (
        (z = L + z),
        (T = {
          id: c++,
          callback: N,
          priorityLevel: T,
          startTime: L,
          expirationTime: z,
          sortIndex: -1,
        }),
        L > V
          ? ((T.sortIndex = L),
            t(u, T),
            n(a) === null &&
              T === n(u) &&
              (v ? (m(R), (R = -1)) : (v = !0), W(E, L - V)))
          : ((T.sortIndex = z), t(a, T), S || d || ((S = !0), $(k))),
        T
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (T) {
      var N = h;
      return function () {
        var L = h;
        h = N;
        try {
          return T.apply(this, arguments);
        } finally {
          h = L;
        }
      };
    });
})(Vf);
Wf.exports = Vf;
var n0 = Wf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var r0 = x,
  qe = n0;
function j(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Hf = new Set(),
  _o = {};
function sr(e, t) {
  Hr(e, t), Hr(e + "Capture", t);
}
function Hr(e, t) {
  for (_o[e] = t, e = 0; e < t.length; e++) Hf.add(t[e]);
}
var Ht = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Vl = Object.prototype.hasOwnProperty,
  o0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ec = {},
  kc = {};
function i0(e) {
  return Vl.call(kc, e)
    ? !0
    : Vl.call(Ec, e)
    ? !1
    : o0.test(e)
    ? (kc[e] = !0)
    : ((Ec[e] = !0), !1);
}
function s0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function l0(e, t, n, r) {
  if (t === null || typeof t > "u" || s0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ie(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ke[e] = new Ie(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ke[t] = new Ie(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ke[e] = new Ie(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ke[e] = new Ie(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ke[e] = new Ie(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ke[e] = new Ie(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ke[e] = new Ie(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ke[e] = new Ie(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ke[e] = new Ie(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ou = /[\-:]([a-z])/g;
function iu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ou, iu);
    ke[t] = new Ie(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ou, iu);
    ke[t] = new Ie(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ou, iu);
  ke[t] = new Ie(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ke[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ke.xlinkHref = new Ie(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ke[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function su(e, t, n, r) {
  var o = ke.hasOwnProperty(t) ? ke[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (l0(t, n, o, r) && (n = null),
    r || o === null
      ? i0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Xt = r0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  mi = Symbol.for("react.element"),
  gr = Symbol.for("react.portal"),
  vr = Symbol.for("react.fragment"),
  lu = Symbol.for("react.strict_mode"),
  Hl = Symbol.for("react.profiler"),
  Qf = Symbol.for("react.provider"),
  Kf = Symbol.for("react.context"),
  au = Symbol.for("react.forward_ref"),
  Ql = Symbol.for("react.suspense"),
  Kl = Symbol.for("react.suspense_list"),
  uu = Symbol.for("react.memo"),
  un = Symbol.for("react.lazy"),
  Yf = Symbol.for("react.offscreen"),
  Cc = Symbol.iterator;
function ao(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Cc && e[Cc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ce = Object.assign,
  dl;
function wo(e) {
  if (dl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      dl = (t && t[1]) || "";
    }
  return (
    `
` +
    dl +
    e
  );
}
var fl = !1;
function pl(e, t) {
  if (!e || fl) return "";
  fl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (fl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? wo(e) : "";
}
function a0(e) {
  switch (e.tag) {
    case 5:
      return wo(e.type);
    case 16:
      return wo("Lazy");
    case 13:
      return wo("Suspense");
    case 19:
      return wo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = pl(e.type, !1)), e;
    case 11:
      return (e = pl(e.type.render, !1)), e;
    case 1:
      return (e = pl(e.type, !0)), e;
    default:
      return "";
  }
}
function Yl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case vr:
      return "Fragment";
    case gr:
      return "Portal";
    case Hl:
      return "Profiler";
    case lu:
      return "StrictMode";
    case Ql:
      return "Suspense";
    case Kl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Kf:
        return (e.displayName || "Context") + ".Consumer";
      case Qf:
        return (e._context.displayName || "Context") + ".Provider";
      case au:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case uu:
        return (
          (t = e.displayName || null), t !== null ? t : Yl(e.type) || "Memo"
        );
      case un:
        (t = e._payload), (e = e._init);
        try {
          return Yl(e(t));
        } catch {}
    }
  return null;
}
function u0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Yl(t);
    case 8:
      return t === lu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Rn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Gf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function c0(e) {
  var t = Gf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function gi(e) {
  e._valueTracker || (e._valueTracker = c0(e));
}
function qf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Gf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Zi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Gl(e, t) {
  var n = t.checked;
  return ce({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function bc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Rn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Xf(e, t) {
  (t = t.checked), t != null && su(e, "checked", t, !1);
}
function ql(e, t) {
  Xf(e, t);
  var n = Rn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Xl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Xl(e, t.type, Rn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Pc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Xl(e, t, n) {
  (t !== "number" || Zi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var xo = Array.isArray;
function Nr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Rn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Jl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return ce({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Tc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (xo(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Rn(n) };
}
function Jf(e, t) {
  var n = Rn(t.value),
    r = Rn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Nc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Zf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Zl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Zf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var vi,
  ep = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        vi = vi || document.createElement("div"),
          vi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = vi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Mo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ko = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  d0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ko).forEach(function (e) {
  d0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ko[t] = ko[e]);
  });
});
function tp(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ko.hasOwnProperty(e) && ko[e])
    ? ("" + t).trim()
    : t + "px";
}
function np(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = tp(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var f0 = ce(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ea(e, t) {
  if (t) {
    if (f0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function ta(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var na = null;
function cu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ra = null,
  Rr = null,
  jr = null;
function Rc(e) {
  if ((e = ii(e))) {
    if (typeof ra != "function") throw Error(j(280));
    var t = e.stateNode;
    t && ((t = Ls(t)), ra(e.stateNode, e.type, t));
  }
}
function rp(e) {
  Rr ? (jr ? jr.push(e) : (jr = [e])) : (Rr = e);
}
function op() {
  if (Rr) {
    var e = Rr,
      t = jr;
    if (((jr = Rr = null), Rc(e), t)) for (e = 0; e < t.length; e++) Rc(t[e]);
  }
}
function ip(e, t) {
  return e(t);
}
function sp() {}
var hl = !1;
function lp(e, t, n) {
  if (hl) return e(t, n);
  hl = !0;
  try {
    return ip(e, t, n);
  } finally {
    (hl = !1), (Rr !== null || jr !== null) && (sp(), op());
  }
}
function Lo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ls(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var oa = !1;
if (Ht)
  try {
    var uo = {};
    Object.defineProperty(uo, "passive", {
      get: function () {
        oa = !0;
      },
    }),
      window.addEventListener("test", uo, uo),
      window.removeEventListener("test", uo, uo);
  } catch {
    oa = !1;
  }
function p0(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Co = !1,
  es = null,
  ts = !1,
  ia = null,
  h0 = {
    onError: function (e) {
      (Co = !0), (es = e);
    },
  };
function m0(e, t, n, r, o, i, s, l, a) {
  (Co = !1), (es = null), p0.apply(h0, arguments);
}
function g0(e, t, n, r, o, i, s, l, a) {
  if ((m0.apply(this, arguments), Co)) {
    if (Co) {
      var u = es;
      (Co = !1), (es = null);
    } else throw Error(j(198));
    ts || ((ts = !0), (ia = u));
  }
}
function lr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ap(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function jc(e) {
  if (lr(e) !== e) throw Error(j(188));
}
function v0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = lr(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return jc(o), e;
        if (i === r) return jc(o), t;
        i = i.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function up(e) {
  return (e = v0(e)), e !== null ? cp(e) : null;
}
function cp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = cp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var dp = qe.unstable_scheduleCallback,
  Oc = qe.unstable_cancelCallback,
  y0 = qe.unstable_shouldYield,
  w0 = qe.unstable_requestPaint,
  pe = qe.unstable_now,
  x0 = qe.unstable_getCurrentPriorityLevel,
  du = qe.unstable_ImmediatePriority,
  fp = qe.unstable_UserBlockingPriority,
  ns = qe.unstable_NormalPriority,
  S0 = qe.unstable_LowPriority,
  pp = qe.unstable_IdlePriority,
  Os = null,
  Ot = null;
function E0(e) {
  if (Ot && typeof Ot.onCommitFiberRoot == "function")
    try {
      Ot.onCommitFiberRoot(Os, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var yt = Math.clz32 ? Math.clz32 : b0,
  k0 = Math.log,
  C0 = Math.LN2;
function b0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((k0(e) / C0) | 0)) | 0;
}
var yi = 64,
  wi = 4194304;
function So(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function rs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = So(l)) : ((i &= s), i !== 0 && (r = So(i)));
  } else (s = n & ~o), s !== 0 ? (r = So(s)) : i !== 0 && (r = So(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - yt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function P0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function T0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - yt(i),
      l = 1 << s,
      a = o[s];
    a === -1
      ? (!(l & n) || l & r) && (o[s] = P0(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function sa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function hp() {
  var e = yi;
  return (yi <<= 1), !(yi & 4194240) && (yi = 64), e;
}
function ml(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ri(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - yt(t)),
    (e[t] = n);
}
function N0(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - yt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function fu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - yt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ee = 0;
function mp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var gp,
  pu,
  vp,
  yp,
  wp,
  la = !1,
  xi = [],
  Sn = null,
  En = null,
  kn = null,
  Io = new Map(),
  Do = new Map(),
  dn = [],
  R0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ac(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Sn = null;
      break;
    case "dragenter":
    case "dragleave":
      En = null;
      break;
    case "mouseover":
    case "mouseout":
      kn = null;
      break;
    case "pointerover":
    case "pointerout":
      Io.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Do.delete(t.pointerId);
  }
}
function co(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ii(t)), t !== null && pu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function j0(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Sn = co(Sn, e, t, n, r, o)), !0;
    case "dragenter":
      return (En = co(En, e, t, n, r, o)), !0;
    case "mouseover":
      return (kn = co(kn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Io.set(i, co(Io.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Do.set(i, co(Do.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function xp(e) {
  var t = Wn(e.target);
  if (t !== null) {
    var n = lr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ap(n)), t !== null)) {
          (e.blockedOn = t),
            wp(e.priority, function () {
              vp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function $i(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = aa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (na = r), n.target.dispatchEvent(r), (na = null);
    } else return (t = ii(n)), t !== null && pu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function _c(e, t, n) {
  $i(e) && n.delete(t);
}
function O0() {
  (la = !1),
    Sn !== null && $i(Sn) && (Sn = null),
    En !== null && $i(En) && (En = null),
    kn !== null && $i(kn) && (kn = null),
    Io.forEach(_c),
    Do.forEach(_c);
}
function fo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    la ||
      ((la = !0),
      qe.unstable_scheduleCallback(qe.unstable_NormalPriority, O0)));
}
function zo(e) {
  function t(o) {
    return fo(o, e);
  }
  if (0 < xi.length) {
    fo(xi[0], e);
    for (var n = 1; n < xi.length; n++) {
      var r = xi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Sn !== null && fo(Sn, e),
      En !== null && fo(En, e),
      kn !== null && fo(kn, e),
      Io.forEach(t),
      Do.forEach(t),
      n = 0;
    n < dn.length;
    n++
  )
    (r = dn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < dn.length && ((n = dn[0]), n.blockedOn === null); )
    xp(n), n.blockedOn === null && dn.shift();
}
var Or = Xt.ReactCurrentBatchConfig,
  os = !0;
function A0(e, t, n, r) {
  var o = ee,
    i = Or.transition;
  Or.transition = null;
  try {
    (ee = 1), hu(e, t, n, r);
  } finally {
    (ee = o), (Or.transition = i);
  }
}
function _0(e, t, n, r) {
  var o = ee,
    i = Or.transition;
  Or.transition = null;
  try {
    (ee = 4), hu(e, t, n, r);
  } finally {
    (ee = o), (Or.transition = i);
  }
}
function hu(e, t, n, r) {
  if (os) {
    var o = aa(e, t, n, r);
    if (o === null) bl(e, t, r, is, n), Ac(e, r);
    else if (j0(o, e, t, n, r)) r.stopPropagation();
    else if ((Ac(e, r), t & 4 && -1 < R0.indexOf(e))) {
      for (; o !== null; ) {
        var i = ii(o);
        if (
          (i !== null && gp(i),
          (i = aa(e, t, n, r)),
          i === null && bl(e, t, r, is, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else bl(e, t, r, null, n);
  }
}
var is = null;
function aa(e, t, n, r) {
  if (((is = null), (e = cu(r)), (e = Wn(e)), e !== null))
    if (((t = lr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ap(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (is = e), null;
}
function Sp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (x0()) {
        case du:
          return 1;
        case fp:
          return 4;
        case ns:
        case S0:
          return 16;
        case pp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var yn = null,
  mu = null,
  Ui = null;
function Ep() {
  if (Ui) return Ui;
  var e,
    t = mu,
    n = t.length,
    r,
    o = "value" in yn ? yn.value : yn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Ui = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Bi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Si() {
  return !0;
}
function Mc() {
  return !1;
}
function Je(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Si
        : Mc),
      (this.isPropagationStopped = Mc),
      this
    );
  }
  return (
    ce(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Si));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Si));
      },
      persist: function () {},
      isPersistent: Si,
    }),
    t
  );
}
var to = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  gu = Je(to),
  oi = ce({}, to, { view: 0, detail: 0 }),
  M0 = Je(oi),
  gl,
  vl,
  po,
  As = ce({}, oi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: vu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== po &&
            (po && e.type === "mousemove"
              ? ((gl = e.screenX - po.screenX), (vl = e.screenY - po.screenY))
              : (vl = gl = 0),
            (po = e)),
          gl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : vl;
    },
  }),
  Lc = Je(As),
  L0 = ce({}, As, { dataTransfer: 0 }),
  I0 = Je(L0),
  D0 = ce({}, oi, { relatedTarget: 0 }),
  yl = Je(D0),
  z0 = ce({}, to, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  F0 = Je(z0),
  $0 = ce({}, to, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  U0 = Je($0),
  B0 = ce({}, to, { data: 0 }),
  Ic = Je(B0),
  W0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  V0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  H0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Q0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = H0[e]) ? !!t[e] : !1;
}
function vu() {
  return Q0;
}
var K0 = ce({}, oi, {
    key: function (e) {
      if (e.key) {
        var t = W0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Bi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? V0[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: vu,
    charCode: function (e) {
      return e.type === "keypress" ? Bi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Bi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Y0 = Je(K0),
  G0 = ce({}, As, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Dc = Je(G0),
  q0 = ce({}, oi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: vu,
  }),
  X0 = Je(q0),
  J0 = ce({}, to, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Z0 = Je(J0),
  ev = ce({}, As, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  tv = Je(ev),
  nv = [9, 13, 27, 32],
  yu = Ht && "CompositionEvent" in window,
  bo = null;
Ht && "documentMode" in document && (bo = document.documentMode);
var rv = Ht && "TextEvent" in window && !bo,
  kp = Ht && (!yu || (bo && 8 < bo && 11 >= bo)),
  zc = " ",
  Fc = !1;
function Cp(e, t) {
  switch (e) {
    case "keyup":
      return nv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function bp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var yr = !1;
function ov(e, t) {
  switch (e) {
    case "compositionend":
      return bp(t);
    case "keypress":
      return t.which !== 32 ? null : ((Fc = !0), zc);
    case "textInput":
      return (e = t.data), e === zc && Fc ? null : e;
    default:
      return null;
  }
}
function iv(e, t) {
  if (yr)
    return e === "compositionend" || (!yu && Cp(e, t))
      ? ((e = Ep()), (Ui = mu = yn = null), (yr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return kp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var sv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function $c(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!sv[e.type] : t === "textarea";
}
function Pp(e, t, n, r) {
  rp(r),
    (t = ss(t, "onChange")),
    0 < t.length &&
      ((n = new gu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Po = null,
  Fo = null;
function lv(e) {
  Dp(e, 0);
}
function _s(e) {
  var t = Sr(e);
  if (qf(t)) return e;
}
function av(e, t) {
  if (e === "change") return t;
}
var Tp = !1;
if (Ht) {
  var wl;
  if (Ht) {
    var xl = "oninput" in document;
    if (!xl) {
      var Uc = document.createElement("div");
      Uc.setAttribute("oninput", "return;"),
        (xl = typeof Uc.oninput == "function");
    }
    wl = xl;
  } else wl = !1;
  Tp = wl && (!document.documentMode || 9 < document.documentMode);
}
function Bc() {
  Po && (Po.detachEvent("onpropertychange", Np), (Fo = Po = null));
}
function Np(e) {
  if (e.propertyName === "value" && _s(Fo)) {
    var t = [];
    Pp(t, Fo, e, cu(e)), lp(lv, t);
  }
}
function uv(e, t, n) {
  e === "focusin"
    ? (Bc(), (Po = t), (Fo = n), Po.attachEvent("onpropertychange", Np))
    : e === "focusout" && Bc();
}
function cv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return _s(Fo);
}
function dv(e, t) {
  if (e === "click") return _s(t);
}
function fv(e, t) {
  if (e === "input" || e === "change") return _s(t);
}
function pv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var xt = typeof Object.is == "function" ? Object.is : pv;
function $o(e, t) {
  if (xt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Vl.call(t, o) || !xt(e[o], t[o])) return !1;
  }
  return !0;
}
function Wc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Vc(e, t) {
  var n = Wc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Wc(n);
  }
}
function Rp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Rp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function jp() {
  for (var e = window, t = Zi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Zi(e.document);
  }
  return t;
}
function wu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function hv(e) {
  var t = jp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Rp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && wu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Vc(n, i));
        var s = Vc(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var mv = Ht && "documentMode" in document && 11 >= document.documentMode,
  wr = null,
  ua = null,
  To = null,
  ca = !1;
function Hc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ca ||
    wr == null ||
    wr !== Zi(r) ||
    ((r = wr),
    "selectionStart" in r && wu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (To && $o(To, r)) ||
      ((To = r),
      (r = ss(ua, "onSelect")),
      0 < r.length &&
        ((t = new gu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = wr))));
}
function Ei(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var xr = {
    animationend: Ei("Animation", "AnimationEnd"),
    animationiteration: Ei("Animation", "AnimationIteration"),
    animationstart: Ei("Animation", "AnimationStart"),
    transitionend: Ei("Transition", "TransitionEnd"),
  },
  Sl = {},
  Op = {};
Ht &&
  ((Op = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete xr.animationend.animation,
    delete xr.animationiteration.animation,
    delete xr.animationstart.animation),
  "TransitionEvent" in window || delete xr.transitionend.transition);
function Ms(e) {
  if (Sl[e]) return Sl[e];
  if (!xr[e]) return e;
  var t = xr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Op) return (Sl[e] = t[n]);
  return e;
}
var Ap = Ms("animationend"),
  _p = Ms("animationiteration"),
  Mp = Ms("animationstart"),
  Lp = Ms("transitionend"),
  Ip = new Map(),
  Qc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Ln(e, t) {
  Ip.set(e, t), sr(t, [e]);
}
for (var El = 0; El < Qc.length; El++) {
  var kl = Qc[El],
    gv = kl.toLowerCase(),
    vv = kl[0].toUpperCase() + kl.slice(1);
  Ln(gv, "on" + vv);
}
Ln(Ap, "onAnimationEnd");
Ln(_p, "onAnimationIteration");
Ln(Mp, "onAnimationStart");
Ln("dblclick", "onDoubleClick");
Ln("focusin", "onFocus");
Ln("focusout", "onBlur");
Ln(Lp, "onTransitionEnd");
Hr("onMouseEnter", ["mouseout", "mouseover"]);
Hr("onMouseLeave", ["mouseout", "mouseover"]);
Hr("onPointerEnter", ["pointerout", "pointerover"]);
Hr("onPointerLeave", ["pointerout", "pointerover"]);
sr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
sr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
sr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
sr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
sr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
sr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Eo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  yv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));
function Kc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), g0(r, t, void 0, e), (e.currentTarget = null);
}
function Dp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          Kc(o, l, u), (i = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          Kc(o, l, u), (i = a);
        }
    }
  }
  if (ts) throw ((e = ia), (ts = !1), (ia = null), e);
}
function oe(e, t) {
  var n = t[ma];
  n === void 0 && (n = t[ma] = new Set());
  var r = e + "__bubble";
  n.has(r) || (zp(t, e, 2, !1), n.add(r));
}
function Cl(e, t, n) {
  var r = 0;
  t && (r |= 4), zp(n, e, r, t);
}
var ki = "_reactListening" + Math.random().toString(36).slice(2);
function Uo(e) {
  if (!e[ki]) {
    (e[ki] = !0),
      Hf.forEach(function (n) {
        n !== "selectionchange" && (yv.has(n) || Cl(n, !1, e), Cl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ki] || ((t[ki] = !0), Cl("selectionchange", !1, t));
  }
}
function zp(e, t, n, r) {
  switch (Sp(t)) {
    case 1:
      var o = A0;
      break;
    case 4:
      o = _0;
      break;
    default:
      o = hu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !oa ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function bl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = Wn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  lp(function () {
    var u = i,
      c = cu(n),
      f = [];
    e: {
      var h = Ip.get(e);
      if (h !== void 0) {
        var d = gu,
          S = e;
        switch (e) {
          case "keypress":
            if (Bi(n) === 0) break e;
          case "keydown":
          case "keyup":
            d = Y0;
            break;
          case "focusin":
            (S = "focus"), (d = yl);
            break;
          case "focusout":
            (S = "blur"), (d = yl);
            break;
          case "beforeblur":
          case "afterblur":
            d = yl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            d = Lc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            d = I0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            d = X0;
            break;
          case Ap:
          case _p:
          case Mp:
            d = F0;
            break;
          case Lp:
            d = Z0;
            break;
          case "scroll":
            d = M0;
            break;
          case "wheel":
            d = tv;
            break;
          case "copy":
          case "cut":
          case "paste":
            d = U0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            d = Dc;
        }
        var v = (t & 4) !== 0,
          w = !v && e === "scroll",
          m = v ? (h !== null ? h + "Capture" : null) : h;
        v = [];
        for (var p = u, g; p !== null; ) {
          g = p;
          var E = g.stateNode;
          if (
            (g.tag === 5 &&
              E !== null &&
              ((g = E),
              m !== null && ((E = Lo(p, m)), E != null && v.push(Bo(p, E, g)))),
            w)
          )
            break;
          p = p.return;
        }
        0 < v.length &&
          ((h = new d(h, S, null, n, c)), f.push({ event: h, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (d = e === "mouseout" || e === "pointerout"),
          h &&
            n !== na &&
            (S = n.relatedTarget || n.fromElement) &&
            (Wn(S) || S[Qt]))
        )
          break e;
        if (
          (d || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          d
            ? ((S = n.relatedTarget || n.toElement),
              (d = u),
              (S = S ? Wn(S) : null),
              S !== null &&
                ((w = lr(S)), S !== w || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((d = null), (S = u)),
          d !== S)
        ) {
          if (
            ((v = Lc),
            (E = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Dc),
              (E = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (w = d == null ? h : Sr(d)),
            (g = S == null ? h : Sr(S)),
            (h = new v(E, p + "leave", d, n, c)),
            (h.target = w),
            (h.relatedTarget = g),
            (E = null),
            Wn(c) === u &&
              ((v = new v(m, p + "enter", S, n, c)),
              (v.target = g),
              (v.relatedTarget = w),
              (E = v)),
            (w = E),
            d && S)
          )
            t: {
              for (v = d, m = S, p = 0, g = v; g; g = mr(g)) p++;
              for (g = 0, E = m; E; E = mr(E)) g++;
              for (; 0 < p - g; ) (v = mr(v)), p--;
              for (; 0 < g - p; ) (m = mr(m)), g--;
              for (; p--; ) {
                if (v === m || (m !== null && v === m.alternate)) break t;
                (v = mr(v)), (m = mr(m));
              }
              v = null;
            }
          else v = null;
          d !== null && Yc(f, h, d, v, !1),
            S !== null && w !== null && Yc(f, w, S, v, !0);
        }
      }
      e: {
        if (
          ((h = u ? Sr(u) : window),
          (d = h.nodeName && h.nodeName.toLowerCase()),
          d === "select" || (d === "input" && h.type === "file"))
        )
          var k = av;
        else if ($c(h))
          if (Tp) k = fv;
          else {
            k = cv;
            var C = uv;
          }
        else
          (d = h.nodeName) &&
            d.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (k = dv);
        if (k && (k = k(e, u))) {
          Pp(f, k, n, c);
          break e;
        }
        C && C(e, h, u),
          e === "focusout" &&
            (C = h._wrapperState) &&
            C.controlled &&
            h.type === "number" &&
            Xl(h, "number", h.value);
      }
      switch (((C = u ? Sr(u) : window), e)) {
        case "focusin":
          ($c(C) || C.contentEditable === "true") &&
            ((wr = C), (ua = u), (To = null));
          break;
        case "focusout":
          To = ua = wr = null;
          break;
        case "mousedown":
          ca = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ca = !1), Hc(f, n, c);
          break;
        case "selectionchange":
          if (mv) break;
        case "keydown":
        case "keyup":
          Hc(f, n, c);
      }
      var b;
      if (yu)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        yr
          ? Cp(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (kp &&
          n.locale !== "ko" &&
          (yr || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && yr && (b = Ep())
            : ((yn = c),
              (mu = "value" in yn ? yn.value : yn.textContent),
              (yr = !0))),
        (C = ss(u, R)),
        0 < C.length &&
          ((R = new Ic(R, e, null, n, c)),
          f.push({ event: R, listeners: C }),
          b ? (R.data = b) : ((b = bp(n)), b !== null && (R.data = b)))),
        (b = rv ? ov(e, n) : iv(e, n)) &&
          ((u = ss(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Ic("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = b)));
    }
    Dp(f, t);
  });
}
function Bo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ss(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Lo(e, n)),
      i != null && r.unshift(Bo(e, i, o)),
      (i = Lo(e, t)),
      i != null && r.push(Bo(e, i, o))),
      (e = e.return);
  }
  return r;
}
function mr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Yc(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = Lo(n, i)), a != null && s.unshift(Bo(n, a, l)))
        : o || ((a = Lo(n, i)), a != null && s.push(Bo(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var wv = /\r\n?/g,
  xv = /\u0000|\uFFFD/g;
function Gc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      wv,
      `
`
    )
    .replace(xv, "");
}
function Ci(e, t, n) {
  if (((t = Gc(t)), Gc(e) !== t && n)) throw Error(j(425));
}
function ls() {}
var da = null,
  fa = null;
function pa(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ha = typeof setTimeout == "function" ? setTimeout : void 0,
  Sv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  qc = typeof Promise == "function" ? Promise : void 0,
  Ev =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof qc < "u"
      ? function (e) {
          return qc.resolve(null).then(e).catch(kv);
        }
      : ha;
function kv(e) {
  setTimeout(function () {
    throw e;
  });
}
function Pl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), zo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  zo(t);
}
function Cn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Xc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var no = Math.random().toString(36).slice(2),
  Rt = "__reactFiber$" + no,
  Wo = "__reactProps$" + no,
  Qt = "__reactContainer$" + no,
  ma = "__reactEvents$" + no,
  Cv = "__reactListeners$" + no,
  bv = "__reactHandles$" + no;
function Wn(e) {
  var t = e[Rt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Qt] || n[Rt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Xc(e); e !== null; ) {
          if ((n = e[Rt])) return n;
          e = Xc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ii(e) {
  return (
    (e = e[Rt] || e[Qt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Sr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function Ls(e) {
  return e[Wo] || null;
}
var ga = [],
  Er = -1;
function In(e) {
  return { current: e };
}
function ie(e) {
  0 > Er || ((e.current = ga[Er]), (ga[Er] = null), Er--);
}
function ne(e, t) {
  Er++, (ga[Er] = e.current), (e.current = t);
}
var jn = {},
  je = In(jn),
  $e = In(!1),
  er = jn;
function Qr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return jn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ue(e) {
  return (e = e.childContextTypes), e != null;
}
function as() {
  ie($e), ie(je);
}
function Jc(e, t, n) {
  if (je.current !== jn) throw Error(j(168));
  ne(je, t), ne($e, n);
}
function Fp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(j(108, u0(e) || "Unknown", o));
  return ce({}, n, r);
}
function us(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || jn),
    (er = je.current),
    ne(je, e),
    ne($e, $e.current),
    !0
  );
}
function Zc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = Fp(e, t, er)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ie($e),
      ie(je),
      ne(je, e))
    : ie($e),
    ne($e, n);
}
var $t = null,
  Is = !1,
  Tl = !1;
function $p(e) {
  $t === null ? ($t = [e]) : $t.push(e);
}
function Pv(e) {
  (Is = !0), $p(e);
}
function Dn() {
  if (!Tl && $t !== null) {
    Tl = !0;
    var e = 0,
      t = ee;
    try {
      var n = $t;
      for (ee = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ($t = null), (Is = !1);
    } catch (o) {
      throw ($t !== null && ($t = $t.slice(e + 1)), dp(du, Dn), o);
    } finally {
      (ee = t), (Tl = !1);
    }
  }
  return null;
}
var kr = [],
  Cr = 0,
  cs = null,
  ds = 0,
  tt = [],
  nt = 0,
  tr = null,
  Bt = 1,
  Wt = "";
function Un(e, t) {
  (kr[Cr++] = ds), (kr[Cr++] = cs), (cs = e), (ds = t);
}
function Up(e, t, n) {
  (tt[nt++] = Bt), (tt[nt++] = Wt), (tt[nt++] = tr), (tr = e);
  var r = Bt;
  e = Wt;
  var o = 32 - yt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - yt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Bt = (1 << (32 - yt(t) + o)) | (n << o) | r),
      (Wt = i + e);
  } else (Bt = (1 << i) | (n << o) | r), (Wt = e);
}
function xu(e) {
  e.return !== null && (Un(e, 1), Up(e, 1, 0));
}
function Su(e) {
  for (; e === cs; )
    (cs = kr[--Cr]), (kr[Cr] = null), (ds = kr[--Cr]), (kr[Cr] = null);
  for (; e === tr; )
    (tr = tt[--nt]),
      (tt[nt] = null),
      (Wt = tt[--nt]),
      (tt[nt] = null),
      (Bt = tt[--nt]),
      (tt[nt] = null);
}
var Ye = null,
  Ke = null,
  le = !1,
  vt = null;
function Bp(e, t) {
  var n = rt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ed(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ye = e), (Ke = Cn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ye = e), (Ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = tr !== null ? { id: Bt, overflow: Wt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = rt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ye = e),
            (Ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function va(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ya(e) {
  if (le) {
    var t = Ke;
    if (t) {
      var n = t;
      if (!ed(e, t)) {
        if (va(e)) throw Error(j(418));
        t = Cn(n.nextSibling);
        var r = Ye;
        t && ed(e, t)
          ? Bp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (Ye = e));
      }
    } else {
      if (va(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (le = !1), (Ye = e);
    }
  }
}
function td(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ye = e;
}
function bi(e) {
  if (e !== Ye) return !1;
  if (!le) return td(e), (le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !pa(e.type, e.memoizedProps))),
    t && (t = Ke))
  ) {
    if (va(e)) throw (Wp(), Error(j(418)));
    for (; t; ) Bp(e, t), (t = Cn(t.nextSibling));
  }
  if ((td(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ke = Cn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ke = null;
    }
  } else Ke = Ye ? Cn(e.stateNode.nextSibling) : null;
  return !0;
}
function Wp() {
  for (var e = Ke; e; ) e = Cn(e.nextSibling);
}
function Kr() {
  (Ke = Ye = null), (le = !1);
}
function Eu(e) {
  vt === null ? (vt = [e]) : vt.push(e);
}
var Tv = Xt.ReactCurrentBatchConfig;
function ho(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function Pi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function nd(e) {
  var t = e._init;
  return t(e._payload);
}
function Vp(e) {
  function t(m, p) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [p]), (m.flags |= 16)) : g.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function o(m, p) {
    return (m = Nn(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, p, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((m.flags |= 2), p) : g)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, p, g, E) {
    return p === null || p.tag !== 6
      ? ((p = Ml(g, m.mode, E)), (p.return = m), p)
      : ((p = o(p, g)), (p.return = m), p);
  }
  function a(m, p, g, E) {
    var k = g.type;
    return k === vr
      ? c(m, p, g.props.children, E, g.key)
      : p !== null &&
        (p.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === un &&
            nd(k) === p.type))
      ? ((E = o(p, g.props)), (E.ref = ho(m, p, g)), (E.return = m), E)
      : ((E = Gi(g.type, g.key, g.props, null, m.mode, E)),
        (E.ref = ho(m, p, g)),
        (E.return = m),
        E);
  }
  function u(m, p, g, E) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = Ll(g, m.mode, E)), (p.return = m), p)
      : ((p = o(p, g.children || [])), (p.return = m), p);
  }
  function c(m, p, g, E, k) {
    return p === null || p.tag !== 7
      ? ((p = Zn(g, m.mode, E, k)), (p.return = m), p)
      : ((p = o(p, g)), (p.return = m), p);
  }
  function f(m, p, g) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Ml("" + p, m.mode, g)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case mi:
          return (
            (g = Gi(p.type, p.key, p.props, null, m.mode, g)),
            (g.ref = ho(m, null, p)),
            (g.return = m),
            g
          );
        case gr:
          return (p = Ll(p, m.mode, g)), (p.return = m), p;
        case un:
          var E = p._init;
          return f(m, E(p._payload), g);
      }
      if (xo(p) || ao(p))
        return (p = Zn(p, m.mode, g, null)), (p.return = m), p;
      Pi(m, p);
    }
    return null;
  }
  function h(m, p, g, E) {
    var k = p !== null ? p.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return k !== null ? null : l(m, p, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case mi:
          return g.key === k ? a(m, p, g, E) : null;
        case gr:
          return g.key === k ? u(m, p, g, E) : null;
        case un:
          return (k = g._init), h(m, p, k(g._payload), E);
      }
      if (xo(g) || ao(g)) return k !== null ? null : c(m, p, g, E, null);
      Pi(m, g);
    }
    return null;
  }
  function d(m, p, g, E, k) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (m = m.get(g) || null), l(p, m, "" + E, k);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case mi:
          return (m = m.get(E.key === null ? g : E.key) || null), a(p, m, E, k);
        case gr:
          return (m = m.get(E.key === null ? g : E.key) || null), u(p, m, E, k);
        case un:
          var C = E._init;
          return d(m, p, g, C(E._payload), k);
      }
      if (xo(E) || ao(E)) return (m = m.get(g) || null), c(p, m, E, k, null);
      Pi(p, E);
    }
    return null;
  }
  function S(m, p, g, E) {
    for (
      var k = null, C = null, b = p, R = (p = 0), _ = null;
      b !== null && R < g.length;
      R++
    ) {
      b.index > R ? ((_ = b), (b = null)) : (_ = b.sibling);
      var A = h(m, b, g[R], E);
      if (A === null) {
        b === null && (b = _);
        break;
      }
      e && b && A.alternate === null && t(m, b),
        (p = i(A, p, R)),
        C === null ? (k = A) : (C.sibling = A),
        (C = A),
        (b = _);
    }
    if (R === g.length) return n(m, b), le && Un(m, R), k;
    if (b === null) {
      for (; R < g.length; R++)
        (b = f(m, g[R], E)),
          b !== null &&
            ((p = i(b, p, R)), C === null ? (k = b) : (C.sibling = b), (C = b));
      return le && Un(m, R), k;
    }
    for (b = r(m, b); R < g.length; R++)
      (_ = d(b, m, R, g[R], E)),
        _ !== null &&
          (e && _.alternate !== null && b.delete(_.key === null ? R : _.key),
          (p = i(_, p, R)),
          C === null ? (k = _) : (C.sibling = _),
          (C = _));
    return (
      e &&
        b.forEach(function (F) {
          return t(m, F);
        }),
      le && Un(m, R),
      k
    );
  }
  function v(m, p, g, E) {
    var k = ao(g);
    if (typeof k != "function") throw Error(j(150));
    if (((g = k.call(g)), g == null)) throw Error(j(151));
    for (
      var C = (k = null), b = p, R = (p = 0), _ = null, A = g.next();
      b !== null && !A.done;
      R++, A = g.next()
    ) {
      b.index > R ? ((_ = b), (b = null)) : (_ = b.sibling);
      var F = h(m, b, A.value, E);
      if (F === null) {
        b === null && (b = _);
        break;
      }
      e && b && F.alternate === null && t(m, b),
        (p = i(F, p, R)),
        C === null ? (k = F) : (C.sibling = F),
        (C = F),
        (b = _);
    }
    if (A.done) return n(m, b), le && Un(m, R), k;
    if (b === null) {
      for (; !A.done; R++, A = g.next())
        (A = f(m, A.value, E)),
          A !== null &&
            ((p = i(A, p, R)), C === null ? (k = A) : (C.sibling = A), (C = A));
      return le && Un(m, R), k;
    }
    for (b = r(m, b); !A.done; R++, A = g.next())
      (A = d(b, m, R, A.value, E)),
        A !== null &&
          (e && A.alternate !== null && b.delete(A.key === null ? R : A.key),
          (p = i(A, p, R)),
          C === null ? (k = A) : (C.sibling = A),
          (C = A));
    return (
      e &&
        b.forEach(function (D) {
          return t(m, D);
        }),
      le && Un(m, R),
      k
    );
  }
  function w(m, p, g, E) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === vr &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case mi:
          e: {
            for (var k = g.key, C = p; C !== null; ) {
              if (C.key === k) {
                if (((k = g.type), k === vr)) {
                  if (C.tag === 7) {
                    n(m, C.sibling),
                      (p = o(C, g.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  C.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === un &&
                    nd(k) === C.type)
                ) {
                  n(m, C.sibling),
                    (p = o(C, g.props)),
                    (p.ref = ho(m, C, g)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, C);
                break;
              } else t(m, C);
              C = C.sibling;
            }
            g.type === vr
              ? ((p = Zn(g.props.children, m.mode, E, g.key)),
                (p.return = m),
                (m = p))
              : ((E = Gi(g.type, g.key, g.props, null, m.mode, E)),
                (E.ref = ho(m, p, g)),
                (E.return = m),
                (m = E));
          }
          return s(m);
        case gr:
          e: {
            for (C = g.key; p !== null; ) {
              if (p.key === C)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  n(m, p.sibling),
                    (p = o(p, g.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = Ll(g, m.mode, E)), (p.return = m), (m = p);
          }
          return s(m);
        case un:
          return (C = g._init), w(m, p, C(g._payload), E);
      }
      if (xo(g)) return S(m, p, g, E);
      if (ao(g)) return v(m, p, g, E);
      Pi(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = o(p, g)), (p.return = m), (m = p))
          : (n(m, p), (p = Ml(g, m.mode, E)), (p.return = m), (m = p)),
        s(m))
      : n(m, p);
  }
  return w;
}
var Yr = Vp(!0),
  Hp = Vp(!1),
  fs = In(null),
  ps = null,
  br = null,
  ku = null;
function Cu() {
  ku = br = ps = null;
}
function bu(e) {
  var t = fs.current;
  ie(fs), (e._currentValue = t);
}
function wa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Ar(e, t) {
  (ps = e),
    (ku = br = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Fe = !0), (e.firstContext = null));
}
function it(e) {
  var t = e._currentValue;
  if (ku !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), br === null)) {
      if (ps === null) throw Error(j(308));
      (br = e), (ps.dependencies = { lanes: 0, firstContext: e });
    } else br = br.next = e;
  return t;
}
var Vn = null;
function Pu(e) {
  Vn === null ? (Vn = [e]) : Vn.push(e);
}
function Qp(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Pu(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Kt(e, r)
  );
}
function Kt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var cn = !1;
function Tu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Kp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Vt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function bn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), X & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Kt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Pu(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Kt(e, n)
  );
}
function Wi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), fu(e, n);
  }
}
function rd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function hs(e, t, n, r) {
  var o = e.updateQueue;
  cn = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (i = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var f = o.baseState;
    (s = 0), (c = u = a = null), (l = i);
    do {
      var h = l.lane,
        d = l.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: d,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var S = e,
            v = l;
          switch (((h = t), (d = n), v.tag)) {
            case 1:
              if (((S = v.payload), typeof S == "function")) {
                f = S.call(d, f, h);
                break e;
              }
              f = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = v.payload),
                (h = typeof S == "function" ? S.call(d, f, h) : S),
                h == null)
              )
                break e;
              f = ce({}, f, h);
              break e;
            case 2:
              cn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [l]) : h.push(l));
      } else
        (d = {
          eventTime: d,
          lane: h,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = d), (a = f)) : (c = c.next = d),
          (s |= h);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (h = l),
          (l = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = f),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (rr |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function od(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(j(191, o));
        o.call(r);
      }
    }
}
var si = {},
  At = In(si),
  Vo = In(si),
  Ho = In(si);
function Hn(e) {
  if (e === si) throw Error(j(174));
  return e;
}
function Nu(e, t) {
  switch ((ne(Ho, t), ne(Vo, e), ne(At, si), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Zl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Zl(t, e));
  }
  ie(At), ne(At, t);
}
function Gr() {
  ie(At), ie(Vo), ie(Ho);
}
function Yp(e) {
  Hn(Ho.current);
  var t = Hn(At.current),
    n = Zl(t, e.type);
  t !== n && (ne(Vo, e), ne(At, n));
}
function Ru(e) {
  Vo.current === e && (ie(At), ie(Vo));
}
var ae = In(0);
function ms(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Nl = [];
function ju() {
  for (var e = 0; e < Nl.length; e++)
    Nl[e]._workInProgressVersionPrimary = null;
  Nl.length = 0;
}
var Vi = Xt.ReactCurrentDispatcher,
  Rl = Xt.ReactCurrentBatchConfig,
  nr = 0,
  ue = null,
  ge = null,
  we = null,
  gs = !1,
  No = !1,
  Qo = 0,
  Nv = 0;
function Pe() {
  throw Error(j(321));
}
function Ou(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!xt(e[n], t[n])) return !1;
  return !0;
}
function Au(e, t, n, r, o, i) {
  if (
    ((nr = i),
    (ue = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Vi.current = e === null || e.memoizedState === null ? Av : _v),
    (e = n(r, o)),
    No)
  ) {
    i = 0;
    do {
      if (((No = !1), (Qo = 0), 25 <= i)) throw Error(j(301));
      (i += 1),
        (we = ge = null),
        (t.updateQueue = null),
        (Vi.current = Mv),
        (e = n(r, o));
    } while (No);
  }
  if (
    ((Vi.current = vs),
    (t = ge !== null && ge.next !== null),
    (nr = 0),
    (we = ge = ue = null),
    (gs = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function _u() {
  var e = Qo !== 0;
  return (Qo = 0), e;
}
function bt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return we === null ? (ue.memoizedState = we = e) : (we = we.next = e), we;
}
function st() {
  if (ge === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ge.next;
  var t = we === null ? ue.memoizedState : we.next;
  if (t !== null) (we = t), (ge = e);
  else {
    if (e === null) throw Error(j(310));
    (ge = e),
      (e = {
        memoizedState: ge.memoizedState,
        baseState: ge.baseState,
        baseQueue: ge.baseQueue,
        queue: ge.queue,
        next: null,
      }),
      we === null ? (ue.memoizedState = we = e) : (we = we.next = e);
  }
  return we;
}
function Ko(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function jl(e) {
  var t = st(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = ge,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = i;
    do {
      var c = u.lane;
      if ((nr & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          (ue.lanes |= c),
          (rr |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (s = r) : (a.next = l),
      xt(r, t.memoizedState) || (Fe = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ue.lanes |= i), (rr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ol(e) {
  var t = st(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    xt(i, t.memoizedState) || (Fe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Gp() {}
function qp(e, t) {
  var n = ue,
    r = st(),
    o = t(),
    i = !xt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Fe = !0)),
    (r = r.queue),
    Mu(Zp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (we !== null && we.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Yo(9, Jp.bind(null, n, r, o, t), void 0, null),
      xe === null)
    )
      throw Error(j(349));
    nr & 30 || Xp(n, t, o);
  }
  return o;
}
function Xp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Jp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), eh(t) && th(e);
}
function Zp(e, t, n) {
  return n(function () {
    eh(t) && th(e);
  });
}
function eh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !xt(e, n);
  } catch {
    return !0;
  }
}
function th(e) {
  var t = Kt(e, 1);
  t !== null && wt(t, e, 1, -1);
}
function id(e) {
  var t = bt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ko,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Ov.bind(null, ue, e)),
    [t.memoizedState, e]
  );
}
function Yo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function nh() {
  return st().memoizedState;
}
function Hi(e, t, n, r) {
  var o = bt();
  (ue.flags |= e),
    (o.memoizedState = Yo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ds(e, t, n, r) {
  var o = st();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ge !== null) {
    var s = ge.memoizedState;
    if (((i = s.destroy), r !== null && Ou(r, s.deps))) {
      o.memoizedState = Yo(t, n, i, r);
      return;
    }
  }
  (ue.flags |= e), (o.memoizedState = Yo(1 | t, n, i, r));
}
function sd(e, t) {
  return Hi(8390656, 8, e, t);
}
function Mu(e, t) {
  return Ds(2048, 8, e, t);
}
function rh(e, t) {
  return Ds(4, 2, e, t);
}
function oh(e, t) {
  return Ds(4, 4, e, t);
}
function ih(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function sh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ds(4, 4, ih.bind(null, t, e), n)
  );
}
function Lu() {}
function lh(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ou(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ah(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ou(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function uh(e, t, n) {
  return nr & 21
    ? (xt(n, t) || ((n = hp()), (ue.lanes |= n), (rr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Fe = !0)), (e.memoizedState = n));
}
function Rv(e, t) {
  var n = ee;
  (ee = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Rl.transition;
  Rl.transition = {};
  try {
    e(!1), t();
  } finally {
    (ee = n), (Rl.transition = r);
  }
}
function ch() {
  return st().memoizedState;
}
function jv(e, t, n) {
  var r = Tn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    dh(e))
  )
    fh(t, n);
  else if (((n = Qp(e, t, n, r)), n !== null)) {
    var o = Me();
    wt(n, e, r, o), ph(n, t, r);
  }
}
function Ov(e, t, n) {
  var r = Tn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dh(e)) fh(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), xt(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), Pu(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Qp(e, t, o, r)),
      n !== null && ((o = Me()), wt(n, e, r, o), ph(n, t, r));
  }
}
function dh(e) {
  var t = e.alternate;
  return e === ue || (t !== null && t === ue);
}
function fh(e, t) {
  No = gs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ph(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), fu(e, n);
  }
}
var vs = {
    readContext: it,
    useCallback: Pe,
    useContext: Pe,
    useEffect: Pe,
    useImperativeHandle: Pe,
    useInsertionEffect: Pe,
    useLayoutEffect: Pe,
    useMemo: Pe,
    useReducer: Pe,
    useRef: Pe,
    useState: Pe,
    useDebugValue: Pe,
    useDeferredValue: Pe,
    useTransition: Pe,
    useMutableSource: Pe,
    useSyncExternalStore: Pe,
    useId: Pe,
    unstable_isNewReconciler: !1,
  },
  Av = {
    readContext: it,
    useCallback: function (e, t) {
      return (bt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: it,
    useEffect: sd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Hi(4194308, 4, ih.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Hi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Hi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = bt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = bt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = jv.bind(null, ue, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = bt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: id,
    useDebugValue: Lu,
    useDeferredValue: function (e) {
      return (bt().memoizedState = e);
    },
    useTransition: function () {
      var e = id(!1),
        t = e[0];
      return (e = Rv.bind(null, e[1])), (bt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ue,
        o = bt();
      if (le) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), xe === null)) throw Error(j(349));
        nr & 30 || Xp(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        sd(Zp.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Yo(9, Jp.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = bt(),
        t = xe.identifierPrefix;
      if (le) {
        var n = Wt,
          r = Bt;
        (n = (r & ~(1 << (32 - yt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Qo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Nv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  _v = {
    readContext: it,
    useCallback: lh,
    useContext: it,
    useEffect: Mu,
    useImperativeHandle: sh,
    useInsertionEffect: rh,
    useLayoutEffect: oh,
    useMemo: ah,
    useReducer: jl,
    useRef: nh,
    useState: function () {
      return jl(Ko);
    },
    useDebugValue: Lu,
    useDeferredValue: function (e) {
      var t = st();
      return uh(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = jl(Ko)[0],
        t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: Gp,
    useSyncExternalStore: qp,
    useId: ch,
    unstable_isNewReconciler: !1,
  },
  Mv = {
    readContext: it,
    useCallback: lh,
    useContext: it,
    useEffect: Mu,
    useImperativeHandle: sh,
    useInsertionEffect: rh,
    useLayoutEffect: oh,
    useMemo: ah,
    useReducer: Ol,
    useRef: nh,
    useState: function () {
      return Ol(Ko);
    },
    useDebugValue: Lu,
    useDeferredValue: function (e) {
      var t = st();
      return ge === null ? (t.memoizedState = e) : uh(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = Ol(Ko)[0],
        t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: Gp,
    useSyncExternalStore: qp,
    useId: ch,
    unstable_isNewReconciler: !1,
  };
function ft(e, t) {
  if (e && e.defaultProps) {
    (t = ce({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function xa(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ce({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var zs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? lr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      o = Tn(e),
      i = Vt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = bn(e, i, o)),
      t !== null && (wt(t, e, o, r), Wi(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      o = Tn(e),
      i = Vt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = bn(e, i, o)),
      t !== null && (wt(t, e, o, r), Wi(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Me(),
      r = Tn(e),
      o = Vt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = bn(e, o, r)),
      t !== null && (wt(t, e, r, n), Wi(t, e, r));
  },
};
function ld(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !$o(n, r) || !$o(o, i)
      : !0
  );
}
function hh(e, t, n) {
  var r = !1,
    o = jn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = it(i))
      : ((o = Ue(t) ? er : je.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Qr(e, o) : jn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = zs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ad(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && zs.enqueueReplaceState(t, t.state, null);
}
function Sa(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Tu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = it(i))
    : ((i = Ue(t) ? er : je.current), (o.context = Qr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (xa(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && zs.enqueueReplaceState(o, o.state, null),
      hs(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function qr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += a0(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Al(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ea(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Lv = typeof WeakMap == "function" ? WeakMap : Map;
function mh(e, t, n) {
  (n = Vt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ws || ((ws = !0), (Aa = r)), Ea(e, t);
    }),
    n
  );
}
function gh(e, t, n) {
  (n = Vt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Ea(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ea(e, t),
          typeof r != "function" &&
            (Pn === null ? (Pn = new Set([this])) : Pn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function ud(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Lv();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Gv.bind(null, e, t, n)), t.then(e, e));
}
function cd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function dd(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Vt(-1, 1)), (t.tag = 2), bn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Iv = Xt.ReactCurrentOwner,
  Fe = !1;
function Ae(e, t, n, r) {
  t.child = e === null ? Hp(t, null, n, r) : Yr(t, e.child, n, r);
}
function fd(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Ar(t, o),
    (r = Au(e, t, n, r, i, o)),
    (n = _u()),
    e !== null && !Fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Yt(e, t, o))
      : (le && n && xu(t), (t.flags |= 1), Ae(e, t, r, o), t.child)
  );
}
function pd(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Wu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), vh(e, t, i, r, o))
      : ((e = Gi(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : $o), n(s, r) && e.ref === t.ref)
    )
      return Yt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Nn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function vh(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if ($o(i, r) && e.ref === t.ref)
      if (((Fe = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Fe = !0);
      else return (t.lanes = e.lanes), Yt(e, t, o);
  }
  return ka(e, t, n, r, o);
}
function yh(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ne(Tr, He),
        (He |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ne(Tr, He),
          (He |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ne(Tr, He),
        (He |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ne(Tr, He),
      (He |= r);
  return Ae(e, t, o, n), t.child;
}
function wh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ka(e, t, n, r, o) {
  var i = Ue(n) ? er : je.current;
  return (
    (i = Qr(t, i)),
    Ar(t, o),
    (n = Au(e, t, n, r, i, o)),
    (r = _u()),
    e !== null && !Fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Yt(e, t, o))
      : (le && r && xu(t), (t.flags |= 1), Ae(e, t, n, o), t.child)
  );
}
function hd(e, t, n, r, o) {
  if (Ue(n)) {
    var i = !0;
    us(t);
  } else i = !1;
  if ((Ar(t, o), t.stateNode === null))
    Qi(e, t), hh(t, n, r), Sa(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = it(u))
      : ((u = Ue(n) ? er : je.current), (u = Qr(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && ad(t, s, r, u)),
      (cn = !1);
    var h = t.memoizedState;
    (s.state = h),
      hs(t, r, s, o),
      (a = t.memoizedState),
      l !== r || h !== a || $e.current || cn
        ? (typeof c == "function" && (xa(t, n, c, r), (a = t.memoizedState)),
          (l = cn || ld(t, n, l, r, h, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Kp(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : ft(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (h = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = it(a))
        : ((a = Ue(n) ? er : je.current), (a = Qr(t, a)));
    var d = n.getDerivedStateFromProps;
    (c =
      typeof d == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || h !== a) && ad(t, s, r, a)),
      (cn = !1),
      (h = t.memoizedState),
      (s.state = h),
      hs(t, r, s, o);
    var S = t.memoizedState;
    l !== f || h !== S || $e.current || cn
      ? (typeof d == "function" && (xa(t, n, d, r), (S = t.memoizedState)),
        (u = cn || ld(t, n, u, r, h, S, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, S, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, S, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (s.props = r),
        (s.state = S),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ca(e, t, n, r, i, o);
}
function Ca(e, t, n, r, o, i) {
  wh(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Zc(t, n, !1), Yt(e, t, i);
  (r = t.stateNode), (Iv.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Yr(t, e.child, null, i)), (t.child = Yr(t, null, l, i)))
      : Ae(e, t, l, i),
    (t.memoizedState = r.state),
    o && Zc(t, n, !0),
    t.child
  );
}
function xh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Jc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Jc(e, t.context, !1),
    Nu(e, t.containerInfo);
}
function md(e, t, n, r, o) {
  return Kr(), Eu(o), (t.flags |= 256), Ae(e, t, n, r), t.child;
}
var ba = { dehydrated: null, treeContext: null, retryLane: 0 };
function Pa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Sh(e, t, n) {
  var r = t.pendingProps,
    o = ae.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ne(ae, o & 1),
    e === null)
  )
    return (
      ya(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = Us(s, r, 0, null)),
              (e = Zn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Pa(n)),
              (t.memoizedState = ba),
              e)
            : Iu(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return Dv(e, t, s, r, l, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Nn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = Nn(l, i)) : ((i = Zn(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Pa(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ba),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Nn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Iu(e, t) {
  return (
    (t = Us({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ti(e, t, n, r) {
  return (
    r !== null && Eu(r),
    Yr(t, e.child, null, n),
    (e = Iu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Dv(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Al(Error(j(422)))), Ti(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Us({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Zn(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Yr(t, e.child, null, s),
        (t.child.memoizedState = Pa(s)),
        (t.memoizedState = ba),
        i);
  if (!(t.mode & 1)) return Ti(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(j(419))), (r = Al(i, r, void 0)), Ti(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Fe || l)) {
    if (((r = xe), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Kt(e, o), wt(r, e, o, -1));
    }
    return Bu(), (r = Al(Error(j(421)))), Ti(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = qv.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ke = Cn(o.nextSibling)),
      (Ye = t),
      (le = !0),
      (vt = null),
      e !== null &&
        ((tt[nt++] = Bt),
        (tt[nt++] = Wt),
        (tt[nt++] = tr),
        (Bt = e.id),
        (Wt = e.overflow),
        (tr = t)),
      (t = Iu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function gd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), wa(e.return, t, n);
}
function _l(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Eh(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Ae(e, t, r.children, n), (r = ae.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && gd(e, n, t);
        else if (e.tag === 19) gd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ne(ae, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && ms(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          _l(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ms(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        _l(t, !0, n, null, i);
        break;
      case "together":
        _l(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Qi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Yt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (rr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Nn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Nn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function zv(e, t, n) {
  switch (t.tag) {
    case 3:
      xh(t), Kr();
      break;
    case 5:
      Yp(t);
      break;
    case 1:
      Ue(t.type) && us(t);
      break;
    case 4:
      Nu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ne(fs, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ne(ae, ae.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Sh(e, t, n)
          : (ne(ae, ae.current & 1),
            (e = Yt(e, t, n)),
            e !== null ? e.sibling : null);
      ne(ae, ae.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Eh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ne(ae, ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), yh(e, t, n);
  }
  return Yt(e, t, n);
}
var kh, Ta, Ch, bh;
kh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ta = function () {};
Ch = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Hn(At.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Gl(e, o)), (r = Gl(e, r)), (i = []);
        break;
      case "select":
        (o = ce({}, o, { value: void 0 })),
          (r = ce({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Jl(e, o)), (r = Jl(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ls);
    }
    ea(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (_o.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (_o.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && oe("scroll", e),
                  i || l === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
bh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function mo(e, t) {
  if (!le)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Te(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Fv(e, t, n) {
  var r = t.pendingProps;
  switch ((Su(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Te(t), null;
    case 1:
      return Ue(t.type) && as(), Te(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Gr(),
        ie($e),
        ie(je),
        ju(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (bi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), vt !== null && (La(vt), (vt = null)))),
        Ta(e, t),
        Te(t),
        null
      );
    case 5:
      Ru(t);
      var o = Hn(Ho.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ch(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return Te(t), null;
        }
        if (((e = Hn(At.current)), bi(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Rt] = t), (r[Wo] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              oe("cancel", r), oe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              oe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Eo.length; o++) oe(Eo[o], r);
              break;
            case "source":
              oe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              oe("error", r), oe("load", r);
              break;
            case "details":
              oe("toggle", r);
              break;
            case "input":
              bc(r, i), oe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                oe("invalid", r);
              break;
            case "textarea":
              Tc(r, i), oe("invalid", r);
          }
          ea(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ci(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ci(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : _o.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  oe("scroll", r);
            }
          switch (n) {
            case "input":
              gi(r), Pc(r, i, !0);
              break;
            case "textarea":
              gi(r), Nc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ls);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Zf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Rt] = t),
            (e[Wo] = r),
            kh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = ta(n, r)), n)) {
              case "dialog":
                oe("cancel", e), oe("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                oe("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Eo.length; o++) oe(Eo[o], e);
                o = r;
                break;
              case "source":
                oe("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                oe("error", e), oe("load", e), (o = r);
                break;
              case "details":
                oe("toggle", e), (o = r);
                break;
              case "input":
                bc(e, r), (o = Gl(e, r)), oe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ce({}, r, { value: void 0 })),
                  oe("invalid", e);
                break;
              case "textarea":
                Tc(e, r), (o = Jl(e, r)), oe("invalid", e);
                break;
              default:
                o = r;
            }
            ea(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === "style"
                  ? np(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && ep(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Mo(e, a)
                    : typeof a == "number" && Mo(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (_o.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && oe("scroll", e)
                      : a != null && su(e, i, a, s));
              }
            switch (n) {
              case "input":
                gi(e), Pc(e, r, !1);
                break;
              case "textarea":
                gi(e), Nc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Rn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Nr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Nr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ls);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Te(t), null;
    case 6:
      if (e && t.stateNode != null) bh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (((n = Hn(Ho.current)), Hn(At.current), bi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Rt] = t),
            (i = r.nodeValue !== n) && ((e = Ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ci(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ci(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Rt] = t),
            (t.stateNode = r);
      }
      return Te(t), null;
    case 13:
      if (
        (ie(ae),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && Ke !== null && t.mode & 1 && !(t.flags & 128))
          Wp(), Kr(), (t.flags |= 98560), (i = !1);
        else if (((i = bi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(j(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(j(317));
            i[Rt] = t;
          } else
            Kr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Te(t), (i = !1);
        } else vt !== null && (La(vt), (vt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ae.current & 1 ? ye === 0 && (ye = 3) : Bu())),
          t.updateQueue !== null && (t.flags |= 4),
          Te(t),
          null);
    case 4:
      return (
        Gr(), Ta(e, t), e === null && Uo(t.stateNode.containerInfo), Te(t), null
      );
    case 10:
      return bu(t.type._context), Te(t), null;
    case 17:
      return Ue(t.type) && as(), Te(t), null;
    case 19:
      if ((ie(ae), (i = t.memoizedState), i === null)) return Te(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) mo(i, !1);
        else {
          if (ye !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ms(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    mo(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ne(ae, (ae.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            pe() > Xr &&
            ((t.flags |= 128), (r = !0), mo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ms(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              mo(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !le)
            )
              return Te(t), null;
          } else
            2 * pe() - i.renderingStartTime > Xr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), mo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = pe()),
          (t.sibling = null),
          (n = ae.current),
          ne(ae, r ? (n & 1) | 2 : n & 1),
          t)
        : (Te(t), null);
    case 22:
    case 23:
      return (
        Uu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? He & 1073741824 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Te(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function $v(e, t) {
  switch ((Su(t), t.tag)) {
    case 1:
      return (
        Ue(t.type) && as(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Gr(),
        ie($e),
        ie(je),
        ju(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ru(t), null;
    case 13:
      if (
        (ie(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(j(340));
        Kr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ie(ae), null;
    case 4:
      return Gr(), null;
    case 10:
      return bu(t.type._context), null;
    case 22:
    case 23:
      return Uu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ni = !1,
  Re = !1,
  Uv = typeof WeakSet == "function" ? WeakSet : Set,
  I = null;
function Pr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        fe(e, t, r);
      }
    else n.current = null;
}
function Na(e, t, n) {
  try {
    n();
  } catch (r) {
    fe(e, t, r);
  }
}
var vd = !1;
function Bv(e, t) {
  if (((da = os), (e = jp()), wu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var d;
              f !== n || (o !== 0 && f.nodeType !== 3) || (l = s + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (d = f.firstChild) !== null;

            )
              (h = f), (f = d);
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++u === o && (l = s),
                h === i && ++c === r && (a = s),
                (d = f.nextSibling) !== null)
              )
                break;
              (f = h), (h = f.parentNode);
            }
            f = d;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (fa = { focusedElem: e, selectionRange: n }, os = !1, I = t; I !== null; )
    if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (I = e);
    else
      for (; I !== null; ) {
        t = I;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var v = S.memoizedProps,
                    w = S.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : ft(t.type, v),
                      w
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (E) {
          fe(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (I = e);
          break;
        }
        I = t.return;
      }
  return (S = vd), (vd = !1), S;
}
function Ro(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Na(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Fs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ra(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ph(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ph(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Rt], delete t[Wo], delete t[ma], delete t[Cv], delete t[bv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Th(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function yd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Th(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ja(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ls));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ja(e, t, n), e = e.sibling; e !== null; ) ja(e, t, n), (e = e.sibling);
}
function Oa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Oa(e, t, n), e = e.sibling; e !== null; ) Oa(e, t, n), (e = e.sibling);
}
var Se = null,
  gt = !1;
function on(e, t, n) {
  for (n = n.child; n !== null; ) Nh(e, t, n), (n = n.sibling);
}
function Nh(e, t, n) {
  if (Ot && typeof Ot.onCommitFiberUnmount == "function")
    try {
      Ot.onCommitFiberUnmount(Os, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Re || Pr(n, t);
    case 6:
      var r = Se,
        o = gt;
      (Se = null),
        on(e, t, n),
        (Se = r),
        (gt = o),
        Se !== null &&
          (gt
            ? ((e = Se),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Se.removeChild(n.stateNode));
      break;
    case 18:
      Se !== null &&
        (gt
          ? ((e = Se),
            (n = n.stateNode),
            e.nodeType === 8
              ? Pl(e.parentNode, n)
              : e.nodeType === 1 && Pl(e, n),
            zo(e))
          : Pl(Se, n.stateNode));
      break;
    case 4:
      (r = Se),
        (o = gt),
        (Se = n.stateNode.containerInfo),
        (gt = !0),
        on(e, t, n),
        (Se = r),
        (gt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Na(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      on(e, t, n);
      break;
    case 1:
      if (
        !Re &&
        (Pr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          fe(n, t, l);
        }
      on(e, t, n);
      break;
    case 21:
      on(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Re = (r = Re) || n.memoizedState !== null), on(e, t, n), (Re = r))
        : on(e, t, n);
      break;
    default:
      on(e, t, n);
  }
}
function wd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Uv()),
      t.forEach(function (r) {
        var o = Xv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function ct(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Se = l.stateNode), (gt = !1);
              break e;
            case 3:
              (Se = l.stateNode.containerInfo), (gt = !0);
              break e;
            case 4:
              (Se = l.stateNode.containerInfo), (gt = !0);
              break e;
          }
          l = l.return;
        }
        if (Se === null) throw Error(j(160));
        Nh(i, s, o), (Se = null), (gt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        fe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Rh(t, e), (t = t.sibling);
}
function Rh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ct(t, e), Ct(e), r & 4)) {
        try {
          Ro(3, e, e.return), Fs(3, e);
        } catch (v) {
          fe(e, e.return, v);
        }
        try {
          Ro(5, e, e.return);
        } catch (v) {
          fe(e, e.return, v);
        }
      }
      break;
    case 1:
      ct(t, e), Ct(e), r & 512 && n !== null && Pr(n, n.return);
      break;
    case 5:
      if (
        (ct(t, e),
        Ct(e),
        r & 512 && n !== null && Pr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Mo(o, "");
        } catch (v) {
          fe(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && Xf(o, i),
              ta(l, s);
            var u = ta(l, i);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1];
              c === "style"
                ? np(o, f)
                : c === "dangerouslySetInnerHTML"
                ? ep(o, f)
                : c === "children"
                ? Mo(o, f)
                : su(o, c, f, u);
            }
            switch (l) {
              case "input":
                ql(o, i);
                break;
              case "textarea":
                Jf(o, i);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var d = i.value;
                d != null
                  ? Nr(o, !!i.multiple, d, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Nr(o, !!i.multiple, i.defaultValue, !0)
                      : Nr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Wo] = i;
          } catch (v) {
            fe(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((ct(t, e), Ct(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          fe(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (ct(t, e), Ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          zo(t.containerInfo);
        } catch (v) {
          fe(e, e.return, v);
        }
      break;
    case 4:
      ct(t, e), Ct(e);
      break;
    case 13:
      ct(t, e),
        Ct(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Fu = pe())),
        r & 4 && wd(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Re = (u = Re) || c), ct(t, e), (Re = u)) : ct(t, e),
        Ct(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (I = e, c = e.child; c !== null; ) {
            for (f = I = c; I !== null; ) {
              switch (((h = I), (d = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ro(4, h, h.return);
                  break;
                case 1:
                  Pr(h, h.return);
                  var S = h.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (v) {
                      fe(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Pr(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Sd(f);
                    continue;
                  }
              }
              d !== null ? ((d.return = h), (I = d)) : Sd(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = tp("display", s)));
              } catch (v) {
                fe(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                fe(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      ct(t, e), Ct(e), r & 4 && wd(e);
      break;
    case 21:
      break;
    default:
      ct(t, e), Ct(e);
  }
}
function Ct(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Th(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Mo(o, ""), (r.flags &= -33));
          var i = yd(e);
          Oa(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = yd(e);
          ja(e, l, s);
          break;
        default:
          throw Error(j(161));
      }
    } catch (a) {
      fe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Wv(e, t, n) {
  (I = e), jh(e);
}
function jh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var o = I,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Ni;
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || Re;
        l = Ni;
        var u = Re;
        if (((Ni = s), (Re = a) && !u))
          for (I = o; I !== null; )
            (s = I),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Ed(o)
                : a !== null
                ? ((a.return = s), (I = a))
                : Ed(o);
        for (; i !== null; ) (I = i), jh(i), (i = i.sibling);
        (I = o), (Ni = l), (Re = u);
      }
      xd(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (I = i)) : xd(e);
  }
}
function xd(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Re || Fs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Re)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ft(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && od(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                od(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && zo(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(j(163));
          }
        Re || (t.flags & 512 && Ra(t));
      } catch (h) {
        fe(t, t.return, h);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Sd(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Ed(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Fs(4, t);
          } catch (a) {
            fe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              fe(t, o, a);
            }
          }
          var i = t.return;
          try {
            Ra(t);
          } catch (a) {
            fe(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ra(t);
          } catch (a) {
            fe(t, s, a);
          }
      }
    } catch (a) {
      fe(t, t.return, a);
    }
    if (t === e) {
      I = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (I = l);
      break;
    }
    I = t.return;
  }
}
var Vv = Math.ceil,
  ys = Xt.ReactCurrentDispatcher,
  Du = Xt.ReactCurrentOwner,
  ot = Xt.ReactCurrentBatchConfig,
  X = 0,
  xe = null,
  me = null,
  Ee = 0,
  He = 0,
  Tr = In(0),
  ye = 0,
  Go = null,
  rr = 0,
  $s = 0,
  zu = 0,
  jo = null,
  ze = null,
  Fu = 0,
  Xr = 1 / 0,
  Ft = null,
  ws = !1,
  Aa = null,
  Pn = null,
  Ri = !1,
  wn = null,
  xs = 0,
  Oo = 0,
  _a = null,
  Ki = -1,
  Yi = 0;
function Me() {
  return X & 6 ? pe() : Ki !== -1 ? Ki : (Ki = pe());
}
function Tn(e) {
  return e.mode & 1
    ? X & 2 && Ee !== 0
      ? Ee & -Ee
      : Tv.transition !== null
      ? (Yi === 0 && (Yi = hp()), Yi)
      : ((e = ee),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Sp(e.type))),
        e)
    : 1;
}
function wt(e, t, n, r) {
  if (50 < Oo) throw ((Oo = 0), (_a = null), Error(j(185)));
  ri(e, n, r),
    (!(X & 2) || e !== xe) &&
      (e === xe && (!(X & 2) && ($s |= n), ye === 4 && fn(e, Ee)),
      Be(e, r),
      n === 1 && X === 0 && !(t.mode & 1) && ((Xr = pe() + 500), Is && Dn()));
}
function Be(e, t) {
  var n = e.callbackNode;
  T0(e, t);
  var r = rs(e, e === xe ? Ee : 0);
  if (r === 0)
    n !== null && Oc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Oc(n), t === 1))
      e.tag === 0 ? Pv(kd.bind(null, e)) : $p(kd.bind(null, e)),
        Ev(function () {
          !(X & 6) && Dn();
        }),
        (n = null);
    else {
      switch (mp(r)) {
        case 1:
          n = du;
          break;
        case 4:
          n = fp;
          break;
        case 16:
          n = ns;
          break;
        case 536870912:
          n = pp;
          break;
        default:
          n = ns;
      }
      n = zh(n, Oh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Oh(e, t) {
  if (((Ki = -1), (Yi = 0), X & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (_r() && e.callbackNode !== n) return null;
  var r = rs(e, e === xe ? Ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ss(e, r);
  else {
    t = r;
    var o = X;
    X |= 2;
    var i = _h();
    (xe !== e || Ee !== t) && ((Ft = null), (Xr = pe() + 500), Jn(e, t));
    do
      try {
        Kv();
        break;
      } catch (l) {
        Ah(e, l);
      }
    while (!0);
    Cu(),
      (ys.current = i),
      (X = o),
      me !== null ? (t = 0) : ((xe = null), (Ee = 0), (t = ye));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = sa(e)), o !== 0 && ((r = o), (t = Ma(e, o)))), t === 1)
    )
      throw ((n = Go), Jn(e, 0), fn(e, r), Be(e, pe()), n);
    if (t === 6) fn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Hv(o) &&
          ((t = Ss(e, r)),
          t === 2 && ((i = sa(e)), i !== 0 && ((r = i), (t = Ma(e, i)))),
          t === 1))
      )
        throw ((n = Go), Jn(e, 0), fn(e, r), Be(e, pe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Bn(e, ze, Ft);
          break;
        case 3:
          if (
            (fn(e, r), (r & 130023424) === r && ((t = Fu + 500 - pe()), 10 < t))
          ) {
            if (rs(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Me(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = ha(Bn.bind(null, e, ze, Ft), t);
            break;
          }
          Bn(e, ze, Ft);
          break;
        case 4:
          if ((fn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - yt(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = pe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Vv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ha(Bn.bind(null, e, ze, Ft), r);
            break;
          }
          Bn(e, ze, Ft);
          break;
        case 5:
          Bn(e, ze, Ft);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return Be(e, pe()), e.callbackNode === n ? Oh.bind(null, e) : null;
}
function Ma(e, t) {
  var n = jo;
  return (
    e.current.memoizedState.isDehydrated && (Jn(e, t).flags |= 256),
    (e = Ss(e, t)),
    e !== 2 && ((t = ze), (ze = n), t !== null && La(t)),
    e
  );
}
function La(e) {
  ze === null ? (ze = e) : ze.push.apply(ze, e);
}
function Hv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!xt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function fn(e, t) {
  for (
    t &= ~zu,
      t &= ~$s,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - yt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function kd(e) {
  if (X & 6) throw Error(j(327));
  _r();
  var t = rs(e, 0);
  if (!(t & 1)) return Be(e, pe()), null;
  var n = Ss(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = sa(e);
    r !== 0 && ((t = r), (n = Ma(e, r)));
  }
  if (n === 1) throw ((n = Go), Jn(e, 0), fn(e, t), Be(e, pe()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Bn(e, ze, Ft),
    Be(e, pe()),
    null
  );
}
function $u(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    (X = n), X === 0 && ((Xr = pe() + 500), Is && Dn());
  }
}
function or(e) {
  wn !== null && wn.tag === 0 && !(X & 6) && _r();
  var t = X;
  X |= 1;
  var n = ot.transition,
    r = ee;
  try {
    if (((ot.transition = null), (ee = 1), e)) return e();
  } finally {
    (ee = r), (ot.transition = n), (X = t), !(X & 6) && Dn();
  }
}
function Uu() {
  (He = Tr.current), ie(Tr);
}
function Jn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Sv(n)), me !== null))
    for (n = me.return; n !== null; ) {
      var r = n;
      switch ((Su(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && as();
          break;
        case 3:
          Gr(), ie($e), ie(je), ju();
          break;
        case 5:
          Ru(r);
          break;
        case 4:
          Gr();
          break;
        case 13:
          ie(ae);
          break;
        case 19:
          ie(ae);
          break;
        case 10:
          bu(r.type._context);
          break;
        case 22:
        case 23:
          Uu();
      }
      n = n.return;
    }
  if (
    ((xe = e),
    (me = e = Nn(e.current, null)),
    (Ee = He = t),
    (ye = 0),
    (Go = null),
    (zu = $s = rr = 0),
    (ze = jo = null),
    Vn !== null)
  ) {
    for (t = 0; t < Vn.length; t++)
      if (((n = Vn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Vn = null;
  }
  return e;
}
function Ah(e, t) {
  do {
    var n = me;
    try {
      if ((Cu(), (Vi.current = vs), gs)) {
        for (var r = ue.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        gs = !1;
      }
      if (
        ((nr = 0),
        (we = ge = ue = null),
        (No = !1),
        (Qo = 0),
        (Du.current = null),
        n === null || n.return === null)
      ) {
        (ye = 1), (Go = t), (me = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = Ee),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var d = cd(s);
          if (d !== null) {
            (d.flags &= -257),
              dd(d, s, l, i, t),
              d.mode & 1 && ud(i, u, t),
              (t = d),
              (a = u);
            var S = t.updateQueue;
            if (S === null) {
              var v = new Set();
              v.add(a), (t.updateQueue = v);
            } else S.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ud(i, u, t), Bu();
              break e;
            }
            a = Error(j(426));
          }
        } else if (le && l.mode & 1) {
          var w = cd(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              dd(w, s, l, i, t),
              Eu(qr(a, l));
            break e;
          }
        }
        (i = a = qr(a, l)),
          ye !== 4 && (ye = 2),
          jo === null ? (jo = [i]) : jo.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = mh(i, a, t);
              rd(i, m);
              break e;
            case 1:
              l = a;
              var p = i.type,
                g = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Pn === null || !Pn.has(g))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var E = gh(i, l, t);
                rd(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Lh(n);
    } catch (k) {
      (t = k), me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function _h() {
  var e = ys.current;
  return (ys.current = vs), e === null ? vs : e;
}
function Bu() {
  (ye === 0 || ye === 3 || ye === 2) && (ye = 4),
    xe === null || (!(rr & 268435455) && !($s & 268435455)) || fn(xe, Ee);
}
function Ss(e, t) {
  var n = X;
  X |= 2;
  var r = _h();
  (xe !== e || Ee !== t) && ((Ft = null), Jn(e, t));
  do
    try {
      Qv();
      break;
    } catch (o) {
      Ah(e, o);
    }
  while (!0);
  if ((Cu(), (X = n), (ys.current = r), me !== null)) throw Error(j(261));
  return (xe = null), (Ee = 0), ye;
}
function Qv() {
  for (; me !== null; ) Mh(me);
}
function Kv() {
  for (; me !== null && !y0(); ) Mh(me);
}
function Mh(e) {
  var t = Dh(e.alternate, e, He);
  (e.memoizedProps = e.pendingProps),
    t === null ? Lh(e) : (me = t),
    (Du.current = null);
}
function Lh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = $v(n, t)), n !== null)) {
        (n.flags &= 32767), (me = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ye = 6), (me = null);
        return;
      }
    } else if (((n = Fv(n, t, He)), n !== null)) {
      me = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  ye === 0 && (ye = 5);
}
function Bn(e, t, n) {
  var r = ee,
    o = ot.transition;
  try {
    (ot.transition = null), (ee = 1), Yv(e, t, n, r);
  } finally {
    (ot.transition = o), (ee = r);
  }
  return null;
}
function Yv(e, t, n, r) {
  do _r();
  while (wn !== null);
  if (X & 6) throw Error(j(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (N0(e, i),
    e === xe && ((me = xe = null), (Ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ri ||
      ((Ri = !0),
      zh(ns, function () {
        return _r(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = ot.transition), (ot.transition = null);
    var s = ee;
    ee = 1;
    var l = X;
    (X |= 4),
      (Du.current = null),
      Bv(e, n),
      Rh(n, e),
      hv(fa),
      (os = !!da),
      (fa = da = null),
      (e.current = n),
      Wv(n),
      w0(),
      (X = l),
      (ee = s),
      (ot.transition = i);
  } else e.current = n;
  if (
    (Ri && ((Ri = !1), (wn = e), (xs = o)),
    (i = e.pendingLanes),
    i === 0 && (Pn = null),
    E0(n.stateNode),
    Be(e, pe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ws) throw ((ws = !1), (e = Aa), (Aa = null), e);
  return (
    xs & 1 && e.tag !== 0 && _r(),
    (i = e.pendingLanes),
    i & 1 ? (e === _a ? Oo++ : ((Oo = 0), (_a = e))) : (Oo = 0),
    Dn(),
    null
  );
}
function _r() {
  if (wn !== null) {
    var e = mp(xs),
      t = ot.transition,
      n = ee;
    try {
      if (((ot.transition = null), (ee = 16 > e ? 16 : e), wn === null))
        var r = !1;
      else {
        if (((e = wn), (wn = null), (xs = 0), X & 6)) throw Error(j(331));
        var o = X;
        for (X |= 4, I = e.current; I !== null; ) {
          var i = I,
            s = i.child;
          if (I.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (I = u; I !== null; ) {
                  var c = I;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ro(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (I = f);
                  else
                    for (; I !== null; ) {
                      c = I;
                      var h = c.sibling,
                        d = c.return;
                      if ((Ph(c), c === u)) {
                        I = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = d), (I = h);
                        break;
                      }
                      I = d;
                    }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var v = S.child;
                if (v !== null) {
                  S.child = null;
                  do {
                    var w = v.sibling;
                    (v.sibling = null), (v = w);
                  } while (v !== null);
                }
              }
              I = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (I = s);
          else
            e: for (; I !== null; ) {
              if (((i = I), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ro(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (I = m);
                break e;
              }
              I = i.return;
            }
        }
        var p = e.current;
        for (I = p; I !== null; ) {
          s = I;
          var g = s.child;
          if (s.subtreeFlags & 2064 && g !== null) (g.return = s), (I = g);
          else
            e: for (s = p; I !== null; ) {
              if (((l = I), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fs(9, l);
                  }
                } catch (k) {
                  fe(l, l.return, k);
                }
              if (l === s) {
                I = null;
                break e;
              }
              var E = l.sibling;
              if (E !== null) {
                (E.return = l.return), (I = E);
                break e;
              }
              I = l.return;
            }
        }
        if (
          ((X = o), Dn(), Ot && typeof Ot.onPostCommitFiberRoot == "function")
        )
          try {
            Ot.onPostCommitFiberRoot(Os, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ee = n), (ot.transition = t);
    }
  }
  return !1;
}
function Cd(e, t, n) {
  (t = qr(n, t)),
    (t = mh(e, t, 1)),
    (e = bn(e, t, 1)),
    (t = Me()),
    e !== null && (ri(e, 1, t), Be(e, t));
}
function fe(e, t, n) {
  if (e.tag === 3) Cd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Cd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Pn === null || !Pn.has(r)))
        ) {
          (e = qr(n, e)),
            (e = gh(t, e, 1)),
            (t = bn(t, e, 1)),
            (e = Me()),
            t !== null && (ri(t, 1, e), Be(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Gv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    xe === e &&
      (Ee & n) === n &&
      (ye === 4 || (ye === 3 && (Ee & 130023424) === Ee && 500 > pe() - Fu)
        ? Jn(e, 0)
        : (zu |= n)),
    Be(e, t);
}
function Ih(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = wi), (wi <<= 1), !(wi & 130023424) && (wi = 4194304))
      : (t = 1));
  var n = Me();
  (e = Kt(e, t)), e !== null && (ri(e, t, n), Be(e, n));
}
function qv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ih(e, n);
}
function Xv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  r !== null && r.delete(t), Ih(e, n);
}
var Dh;
Dh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || $e.current) Fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Fe = !1), zv(e, t, n);
      Fe = !!(e.flags & 131072);
    }
  else (Fe = !1), le && t.flags & 1048576 && Up(t, ds, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Qi(e, t), (e = t.pendingProps);
      var o = Qr(t, je.current);
      Ar(t, n), (o = Au(null, t, r, e, o, n));
      var i = _u();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ue(r) ? ((i = !0), us(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Tu(t),
            (o.updater = zs),
            (t.stateNode = o),
            (o._reactInternals = t),
            Sa(t, r, e, n),
            (t = Ca(null, t, r, !0, i, n)))
          : ((t.tag = 0), le && i && xu(t), Ae(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Qi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Zv(r)),
          (e = ft(r, e)),
          o)
        ) {
          case 0:
            t = ka(null, t, r, e, n);
            break e;
          case 1:
            t = hd(null, t, r, e, n);
            break e;
          case 11:
            t = fd(null, t, r, e, n);
            break e;
          case 14:
            t = pd(null, t, r, ft(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ft(r, o)),
        ka(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ft(r, o)),
        hd(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((xh(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Kp(e, t),
          hs(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = qr(Error(j(423)), t)), (t = md(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = qr(Error(j(424)), t)), (t = md(e, t, r, n, o));
            break e;
          } else
            for (
              Ke = Cn(t.stateNode.containerInfo.firstChild),
                Ye = t,
                le = !0,
                vt = null,
                n = Hp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Kr(), r === o)) {
            t = Yt(e, t, n);
            break e;
          }
          Ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Yp(t),
        e === null && ya(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        pa(r, o) ? (s = null) : i !== null && pa(r, i) && (t.flags |= 32),
        wh(e, t),
        Ae(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && ya(t), null;
    case 13:
      return Sh(e, t, n);
    case 4:
      return (
        Nu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Yr(t, null, r, n)) : Ae(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ft(r, o)),
        fd(e, t, r, o, n)
      );
    case 7:
      return Ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          ne(fs, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (xt(i.value, s)) {
            if (i.children === o.children && !$e.current) {
              t = Yt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = Vt(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      wa(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(j(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  wa(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Ae(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Ar(t, n),
        (o = it(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ae(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = ft(r, t.pendingProps)),
        (o = ft(r.type, o)),
        pd(e, t, r, o, n)
      );
    case 15:
      return vh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ft(r, o)),
        Qi(e, t),
        (t.tag = 1),
        Ue(r) ? ((e = !0), us(t)) : (e = !1),
        Ar(t, n),
        hh(t, r, o),
        Sa(t, r, o, n),
        Ca(null, t, r, !0, e, n)
      );
    case 19:
      return Eh(e, t, n);
    case 22:
      return yh(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function zh(e, t) {
  return dp(e, t);
}
function Jv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function rt(e, t, n, r) {
  return new Jv(e, t, n, r);
}
function Wu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Zv(e) {
  if (typeof e == "function") return Wu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === au)) return 11;
    if (e === uu) return 14;
  }
  return 2;
}
function Nn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = rt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Gi(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Wu(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case vr:
        return Zn(n.children, o, i, t);
      case lu:
        (s = 8), (o |= 8);
        break;
      case Hl:
        return (
          (e = rt(12, n, t, o | 2)), (e.elementType = Hl), (e.lanes = i), e
        );
      case Ql:
        return (e = rt(13, n, t, o)), (e.elementType = Ql), (e.lanes = i), e;
      case Kl:
        return (e = rt(19, n, t, o)), (e.elementType = Kl), (e.lanes = i), e;
      case Yf:
        return Us(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Qf:
              s = 10;
              break e;
            case Kf:
              s = 9;
              break e;
            case au:
              s = 11;
              break e;
            case uu:
              s = 14;
              break e;
            case un:
              (s = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = rt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Zn(e, t, n, r) {
  return (e = rt(7, e, r, t)), (e.lanes = n), e;
}
function Us(e, t, n, r) {
  return (
    (e = rt(22, e, r, t)),
    (e.elementType = Yf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ml(e, t, n) {
  return (e = rt(6, e, null, t)), (e.lanes = n), e;
}
function Ll(e, t, n) {
  return (
    (t = rt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ey(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ml(0)),
    (this.expirationTimes = ml(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ml(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Vu(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new ey(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = rt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Tu(i),
    e
  );
}
function ty(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: gr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Fh(e) {
  if (!e) return jn;
  e = e._reactInternals;
  e: {
    if (lr(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ue(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ue(n)) return Fp(e, n, t);
  }
  return t;
}
function $h(e, t, n, r, o, i, s, l, a) {
  return (
    (e = Vu(n, r, !0, e, o, i, s, l, a)),
    (e.context = Fh(null)),
    (n = e.current),
    (r = Me()),
    (o = Tn(n)),
    (i = Vt(r, o)),
    (i.callback = t ?? null),
    bn(n, i, o),
    (e.current.lanes = o),
    ri(e, o, r),
    Be(e, r),
    e
  );
}
function Bs(e, t, n, r) {
  var o = t.current,
    i = Me(),
    s = Tn(o);
  return (
    (n = Fh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Vt(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = bn(o, t, s)),
    e !== null && (wt(e, o, s, i), Wi(e, o, s)),
    s
  );
}
function Es(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function bd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Hu(e, t) {
  bd(e, t), (e = e.alternate) && bd(e, t);
}
function ny() {
  return null;
}
var Uh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Qu(e) {
  this._internalRoot = e;
}
Ws.prototype.render = Qu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  Bs(e, t, null, null);
};
Ws.prototype.unmount = Qu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    or(function () {
      Bs(null, e, null, null);
    }),
      (t[Qt] = null);
  }
};
function Ws(e) {
  this._internalRoot = e;
}
Ws.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = yp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < dn.length && t !== 0 && t < dn[n].priority; n++);
    dn.splice(n, 0, e), n === 0 && xp(e);
  }
};
function Ku(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Vs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Pd() {}
function ry(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Es(s);
        i.call(u);
      };
    }
    var s = $h(t, r, e, 0, null, !1, !1, "", Pd);
    return (
      (e._reactRootContainer = s),
      (e[Qt] = s.current),
      Uo(e.nodeType === 8 ? e.parentNode : e),
      or(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Es(a);
      l.call(u);
    };
  }
  var a = Vu(e, 0, !1, null, null, !1, !1, "", Pd);
  return (
    (e._reactRootContainer = a),
    (e[Qt] = a.current),
    Uo(e.nodeType === 8 ? e.parentNode : e),
    or(function () {
      Bs(t, a, n, r);
    }),
    a
  );
}
function Hs(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = Es(s);
        l.call(a);
      };
    }
    Bs(t, s, e, o);
  } else s = ry(n, t, e, o, r);
  return Es(s);
}
gp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = So(t.pendingLanes);
        n !== 0 &&
          (fu(t, n | 1), Be(t, pe()), !(X & 6) && ((Xr = pe() + 500), Dn()));
      }
      break;
    case 13:
      or(function () {
        var r = Kt(e, 1);
        if (r !== null) {
          var o = Me();
          wt(r, e, 1, o);
        }
      }),
        Hu(e, 1);
  }
};
pu = function (e) {
  if (e.tag === 13) {
    var t = Kt(e, 134217728);
    if (t !== null) {
      var n = Me();
      wt(t, e, 134217728, n);
    }
    Hu(e, 134217728);
  }
};
vp = function (e) {
  if (e.tag === 13) {
    var t = Tn(e),
      n = Kt(e, t);
    if (n !== null) {
      var r = Me();
      wt(n, e, t, r);
    }
    Hu(e, t);
  }
};
yp = function () {
  return ee;
};
wp = function (e, t) {
  var n = ee;
  try {
    return (ee = e), t();
  } finally {
    ee = n;
  }
};
ra = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ql(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ls(r);
            if (!o) throw Error(j(90));
            qf(r), ql(r, o);
          }
        }
      }
      break;
    case "textarea":
      Jf(e, n);
      break;
    case "select":
      (t = n.value), t != null && Nr(e, !!n.multiple, t, !1);
  }
};
ip = $u;
sp = or;
var oy = { usingClientEntryPoint: !1, Events: [ii, Sr, Ls, rp, op, $u] },
  go = {
    findFiberByHostInstance: Wn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  iy = {
    bundleType: go.bundleType,
    version: go.version,
    rendererPackageName: go.rendererPackageName,
    rendererConfig: go.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = up(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: go.findFiberByHostInstance || ny,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ji = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ji.isDisabled && ji.supportsFiber)
    try {
      (Os = ji.inject(iy)), (Ot = ji);
    } catch {}
}
Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oy;
Xe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ku(t)) throw Error(j(200));
  return ty(e, t, null, n);
};
Xe.createRoot = function (e, t) {
  if (!Ku(e)) throw Error(j(299));
  var n = !1,
    r = "",
    o = Uh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Vu(e, 1, !1, null, null, n, !1, r, o)),
    (e[Qt] = t.current),
    Uo(e.nodeType === 8 ? e.parentNode : e),
    new Qu(t)
  );
};
Xe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return (e = up(t)), (e = e === null ? null : e.stateNode), e;
};
Xe.flushSync = function (e) {
  return or(e);
};
Xe.hydrate = function (e, t, n) {
  if (!Vs(t)) throw Error(j(200));
  return Hs(null, e, t, !0, n);
};
Xe.hydrateRoot = function (e, t, n) {
  if (!Ku(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = Uh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = $h(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Qt] = t.current),
    Uo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Ws(t);
};
Xe.render = function (e, t, n) {
  if (!Vs(t)) throw Error(j(200));
  return Hs(null, e, t, !1, n);
};
Xe.unmountComponentAtNode = function (e) {
  if (!Vs(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (or(function () {
        Hs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Qt] = null);
        });
      }),
      !0)
    : !1;
};
Xe.unstable_batchedUpdates = $u;
Xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Vs(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return Hs(e, t, n, !1, r);
};
Xe.version = "18.3.1-next-f1338f8080-20240426";
function Bh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bh);
    } catch (e) {
      console.error(e);
    }
}
Bh(), (Bf.exports = Xe);
var li = Bf.exports;
const Wh = Rf(li);
var Vh,
  Td = li;
(Vh = Td.createRoot), Td.hydrateRoot;
const sy = 1,
  ly = 1e6;
let Il = 0;
function ay() {
  return (Il = (Il + 1) % Number.MAX_SAFE_INTEGER), Il.toString();
}
const Dl = new Map(),
  Nd = (e) => {
    if (Dl.has(e)) return;
    const t = setTimeout(() => {
      Dl.delete(e), Ao({ type: "REMOVE_TOAST", toastId: e });
    }, ly);
    Dl.set(e, t);
  },
  uy = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, sy) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? Nd(n)
            : e.toasts.forEach((r) => {
                Nd(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  qi = [];
let Xi = { toasts: [] };
function Ao(e) {
  (Xi = uy(Xi, e)),
    qi.forEach((t) => {
      t(Xi);
    });
}
function cy({ ...e }) {
  const t = ay(),
    n = (o) => Ao({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => Ao({ type: "DISMISS_TOAST", toastId: t });
  return (
    Ao({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function dy() {
  const [e, t] = x.useState(Xi);
  return (
    x.useEffect(
      () => (
        qi.push(t),
        () => {
          const n = qi.indexOf(t);
          n > -1 && qi.splice(n, 1);
        }
      ),
      [e]
    ),
    {
      ...e,
      toast: cy,
      dismiss: (n) => Ao({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function ve(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function Rd(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Hh(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = Rd(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : Rd(e[o], null);
        }
      };
  };
}
function St(...e) {
  return x.useCallback(Hh(...e), e);
}
function Qs(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = x.createContext(s),
      a = n.length;
    n = [...n, s];
    const u = (f) => {
      var m;
      const { scope: h, children: d, ...S } = f,
        v = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[a]) || l,
        w = x.useMemo(() => S, Object.values(S));
      return y.jsx(v.Provider, { value: w, children: d });
    };
    u.displayName = i + "Provider";
    function c(f, h) {
      var v;
      const d = ((v = h == null ? void 0 : h[e]) == null ? void 0 : v[a]) || l,
        S = x.useContext(d);
      if (S) return S;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const o = () => {
    const i = n.map((s) => x.createContext(s));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || i;
      return x.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
    };
  };
  return (o.scopeName = e), [r, fy(o, ...t)];
}
function fy(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((l, { useScope: a, scopeName: u }) => {
        const f = a(i)[`__scope${u}`];
        return { ...l, ...f };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function Ia(e) {
  const t = py(e),
    n = x.forwardRef((r, o) => {
      const { children: i, ...s } = r,
        l = x.Children.toArray(i),
        a = l.find(my);
      if (a) {
        const u = a.props.children,
          c = l.map((f) =>
            f === a
              ? x.Children.count(u) > 1
                ? x.Children.only(null)
                : x.isValidElement(u)
                ? u.props.children
                : null
              : f
          );
        return y.jsx(t, {
          ...s,
          ref: o,
          children: x.isValidElement(u) ? x.cloneElement(u, void 0, c) : null,
        });
      }
      return y.jsx(t, { ...s, ref: o, children: i });
    });
  return (n.displayName = `${e}.Slot`), n;
}
function py(e) {
  const t = x.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (x.isValidElement(o)) {
      const s = vy(o),
        l = gy(i, o.props);
      return (
        o.type !== x.Fragment && (l.ref = r ? Hh(r, s) : s),
        x.cloneElement(o, l)
      );
    }
    return x.Children.count(o) > 1 ? x.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var Qh = Symbol("radix.slottable");
function hy(e) {
  const t = ({ children: n }) => y.jsx(y.Fragment, { children: n });
  return (t.displayName = `${e}.Slottable`), (t.__radixId = Qh), t;
}
function my(e) {
  return (
    x.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === Qh
  );
}
function gy(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...l) => {
            const a = i(...l);
            return o(...l), a;
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...i })
      : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function vy(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function yy(e) {
  const t = e + "CollectionProvider",
    [n, r] = Qs(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (v) => {
      const { scope: w, children: m } = v,
        p = O.useRef(null),
        g = O.useRef(new Map()).current;
      return y.jsx(o, { scope: w, itemMap: g, collectionRef: p, children: m });
    };
  s.displayName = t;
  const l = e + "CollectionSlot",
    a = Ia(l),
    u = O.forwardRef((v, w) => {
      const { scope: m, children: p } = v,
        g = i(l, m),
        E = St(w, g.collectionRef);
      return y.jsx(a, { ref: E, children: p });
    });
  u.displayName = l;
  const c = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    h = Ia(c),
    d = O.forwardRef((v, w) => {
      const { scope: m, children: p, ...g } = v,
        E = O.useRef(null),
        k = St(w, E),
        C = i(c, m);
      return (
        O.useEffect(
          () => (
            C.itemMap.set(E, { ref: E, ...g }), () => void C.itemMap.delete(E)
          )
        ),
        y.jsx(h, { [f]: "", ref: k, children: p })
      );
    });
  d.displayName = c;
  function S(v) {
    const w = i(e + "CollectionConsumer", v);
    return O.useCallback(() => {
      const p = w.collectionRef.current;
      if (!p) return [];
      const g = Array.from(p.querySelectorAll(`[${f}]`));
      return Array.from(w.itemMap.values()).sort(
        (C, b) => g.indexOf(C.ref.current) - g.indexOf(b.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: s, Slot: u, ItemSlot: d }, S, r];
}
var wy = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Ve = wy.reduce((e, t) => {
    const n = Ia(`Primitive.${t}`),
      r = x.forwardRef((o, i) => {
        const { asChild: s, ...l } = o,
          a = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          y.jsx(a, { ...l, ref: i })
        );
      });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function Kh(e, t) {
  e && li.flushSync(() => e.dispatchEvent(t));
}
function On(e) {
  const t = x.useRef(e);
  return (
    x.useEffect(() => {
      t.current = e;
    }),
    x.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function xy(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = On(e);
  x.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var Sy = "DismissableLayer",
  Da = "dismissableLayer.update",
  Ey = "dismissableLayer.pointerDownOutside",
  ky = "dismissableLayer.focusOutside",
  jd,
  Yh = x.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Yu = x.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: l,
        ...a
      } = e,
      u = x.useContext(Yh),
      [c, f] = x.useState(null),
      h =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, d] = x.useState({}),
      S = St(t, (b) => f(b)),
      v = Array.from(u.layers),
      [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      m = v.indexOf(w),
      p = c ? v.indexOf(c) : -1,
      g = u.layersWithOutsidePointerEventsDisabled.size > 0,
      E = p >= m,
      k = by((b) => {
        const R = b.target,
          _ = [...u.branches].some((A) => A.contains(R));
        !E ||
          _ ||
          (o == null || o(b),
          s == null || s(b),
          b.defaultPrevented || l == null || l());
      }, h),
      C = Py((b) => {
        const R = b.target;
        [...u.branches].some((A) => A.contains(R)) ||
          (i == null || i(b),
          s == null || s(b),
          b.defaultPrevented || l == null || l());
      }, h);
    return (
      xy((b) => {
        p === u.layers.size - 1 &&
          (r == null || r(b),
          !b.defaultPrevented && l && (b.preventDefault(), l()));
      }, h),
      x.useEffect(() => {
        if (c)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((jd = h.body.style.pointerEvents),
                (h.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            Od(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (h.body.style.pointerEvents = jd);
            }
          );
      }, [c, h, n, u]),
      x.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            Od());
        },
        [c, u]
      ),
      x.useEffect(() => {
        const b = () => d({});
        return (
          document.addEventListener(Da, b),
          () => document.removeEventListener(Da, b)
        );
      }, []),
      y.jsx(Ve.div, {
        ...a,
        ref: S,
        style: {
          pointerEvents: g ? (E ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: ve(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: ve(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: ve(
          e.onPointerDownCapture,
          k.onPointerDownCapture
        ),
      })
    );
  });
Yu.displayName = Sy;
var Cy = "DismissableLayerBranch",
  Gh = x.forwardRef((e, t) => {
    const n = x.useContext(Yh),
      r = x.useRef(null),
      o = St(t, r);
    return (
      x.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      y.jsx(Ve.div, { ...e, ref: o })
    );
  });
Gh.displayName = Cy;
function by(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = On(e),
    r = x.useRef(!1),
    o = x.useRef(() => {});
  return (
    x.useEffect(() => {
      const i = (l) => {
          if (l.target && !r.current) {
            let a = function () {
              qh(Ey, n, u, { discrete: !0 });
            };
            const u = { originalEvent: l };
            l.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = a),
                t.addEventListener("click", o.current, { once: !0 }))
              : a();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function Py(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = On(e),
    r = x.useRef(!1);
  return (
    x.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          qh(ky, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Od() {
  const e = new CustomEvent(Da);
  document.dispatchEvent(e);
}
function qh(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Kh(o, i) : o.dispatchEvent(i);
}
var Ty = Yu,
  Ny = Gh,
  An = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {},
  Ry = "Portal",
  Xh = x.forwardRef((e, t) => {
    var l;
    const { container: n, ...r } = e,
      [o, i] = x.useState(!1);
    An(() => i(!0), []);
    const s =
      n ||
      (o &&
        ((l = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : l.body));
    return s ? Wh.createPortal(y.jsx(Ve.div, { ...r, ref: t }), s) : null;
  });
Xh.displayName = Ry;
function jy(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var Gu = (e) => {
  const { present: t, children: n } = e,
    r = Oy(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n),
    i = St(r.ref, Ay(o));
  return typeof n == "function" || r.isPresent
    ? x.cloneElement(o, { ref: i })
    : null;
};
Gu.displayName = "Presence";
function Oy(e) {
  const [t, n] = x.useState(),
    r = x.useRef(null),
    o = x.useRef(e),
    i = x.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [l, a] = jy(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    x.useEffect(() => {
      const u = Oi(r.current);
      i.current = l === "mounted" ? u : "none";
    }, [l]),
    An(() => {
      const u = r.current,
        c = o.current;
      if (c !== e) {
        const h = i.current,
          d = Oi(u);
        e
          ? a("MOUNT")
          : d === "none" || (u == null ? void 0 : u.display) === "none"
          ? a("UNMOUNT")
          : a(c && h !== d ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, a]),
    An(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          f = (d) => {
            const v = Oi(r.current).includes(d.animationName);
            if (d.target === t && v && (a("ANIMATION_END"), !o.current)) {
              const w = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = w);
                }));
            }
          },
          h = (d) => {
            d.target === t && (i.current = Oi(r.current));
          };
        return (
          t.addEventListener("animationstart", h),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            c.clearTimeout(u),
              t.removeEventListener("animationstart", h),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f);
          }
        );
      } else a("ANIMATION_END");
    }, [t, a]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(l),
      ref: x.useCallback((u) => {
        (r.current = u ? getComputedStyle(u) : null), n(u);
      }, []),
    }
  );
}
function Oi(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Ay(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var _y = $f[" useInsertionEffect ".trim().toString()] || An;
function My({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [o, i, s] = Ly({ defaultProp: t, onChange: n }),
    l = e !== void 0,
    a = l ? e : o;
  {
    const c = x.useRef(e !== void 0);
    x.useEffect(() => {
      const f = c.current;
      f !== l &&
        console.warn(
          `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${
            l ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (c.current = l);
    }, [l, r]);
  }
  const u = x.useCallback(
    (c) => {
      var f;
      if (l) {
        const h = Iy(c) ? c(e) : c;
        h !== e && ((f = s.current) == null || f.call(s, h));
      } else i(c);
    },
    [l, e, i, s]
  );
  return [a, u];
}
function Ly({ defaultProp: e, onChange: t }) {
  const [n, r] = x.useState(e),
    o = x.useRef(n),
    i = x.useRef(t);
  return (
    _y(() => {
      i.current = t;
    }, [t]),
    x.useEffect(() => {
      var s;
      o.current !== n &&
        ((s = i.current) == null || s.call(i, n), (o.current = n));
    }, [n, o]),
    [n, r, i]
  );
}
function Iy(e) {
  return typeof e == "function";
}
var Dy = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  zy = "VisuallyHidden",
  Ks = x.forwardRef((e, t) =>
    y.jsx(Ve.span, { ...e, ref: t, style: { ...Dy, ...e.style } })
  );
Ks.displayName = zy;
var Fy = Ks,
  qu = "ToastProvider",
  [Xu, $y, Uy] = yy("Toast"),
  [Jh, cE] = Qs("Toast", [Uy]),
  [By, Ys] = Jh(qu),
  Zh = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: i = 50,
        children: s,
      } = e,
      [l, a] = x.useState(null),
      [u, c] = x.useState(0),
      f = x.useRef(!1),
      h = x.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${qu}\`. Expected non-empty \`string\`.`
        ),
      y.jsx(Xu.Provider, {
        scope: t,
        children: y.jsx(By, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: i,
          toastCount: u,
          viewport: l,
          onViewportChange: a,
          onToastAdd: x.useCallback(() => c((d) => d + 1), []),
          onToastRemove: x.useCallback(() => c((d) => d - 1), []),
          isFocusedToastEscapeKeyDownRef: f,
          isClosePausedRef: h,
          children: s,
        }),
      })
    );
  };
Zh.displayName = qu;
var em = "ToastViewport",
  Wy = ["F8"],
  za = "toast.viewportPause",
  Fa = "toast.viewportResume",
  tm = x.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = Wy,
        label: o = "Notifications ({hotkey})",
        ...i
      } = e,
      s = Ys(em, n),
      l = $y(n),
      a = x.useRef(null),
      u = x.useRef(null),
      c = x.useRef(null),
      f = x.useRef(null),
      h = St(t, f, s.onViewportChange),
      d = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      S = s.toastCount > 0;
    x.useEffect(() => {
      const w = (m) => {
        var g;
        r.length !== 0 &&
          r.every((E) => m[E] || m.code === E) &&
          ((g = f.current) == null || g.focus());
      };
      return (
        document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
      );
    }, [r]),
      x.useEffect(() => {
        const w = a.current,
          m = f.current;
        if (S && w && m) {
          const p = () => {
              if (!s.isClosePausedRef.current) {
                const C = new CustomEvent(za);
                m.dispatchEvent(C), (s.isClosePausedRef.current = !0);
              }
            },
            g = () => {
              if (s.isClosePausedRef.current) {
                const C = new CustomEvent(Fa);
                m.dispatchEvent(C), (s.isClosePausedRef.current = !1);
              }
            },
            E = (C) => {
              !w.contains(C.relatedTarget) && g();
            },
            k = () => {
              w.contains(document.activeElement) || g();
            };
          return (
            w.addEventListener("focusin", p),
            w.addEventListener("focusout", E),
            w.addEventListener("pointermove", p),
            w.addEventListener("pointerleave", k),
            window.addEventListener("blur", p),
            window.addEventListener("focus", g),
            () => {
              w.removeEventListener("focusin", p),
                w.removeEventListener("focusout", E),
                w.removeEventListener("pointermove", p),
                w.removeEventListener("pointerleave", k),
                window.removeEventListener("blur", p),
                window.removeEventListener("focus", g);
            }
          );
        }
      }, [S, s.isClosePausedRef]);
    const v = x.useCallback(
      ({ tabbingDirection: w }) => {
        const p = l().map((g) => {
          const E = g.ref.current,
            k = [E, ...n1(E)];
          return w === "forwards" ? k : k.reverse();
        });
        return (w === "forwards" ? p.reverse() : p).flat();
      },
      [l]
    );
    return (
      x.useEffect(() => {
        const w = f.current;
        if (w) {
          const m = (p) => {
            var k, C, b;
            const g = p.altKey || p.ctrlKey || p.metaKey;
            if (p.key === "Tab" && !g) {
              const R = document.activeElement,
                _ = p.shiftKey;
              if (p.target === w && _) {
                (k = u.current) == null || k.focus();
                return;
              }
              const D = v({ tabbingDirection: _ ? "backwards" : "forwards" }),
                Q = D.findIndex((M) => M === R);
              zl(D.slice(Q + 1))
                ? p.preventDefault()
                : _
                ? (C = u.current) == null || C.focus()
                : (b = c.current) == null || b.focus();
            }
          };
          return (
            w.addEventListener("keydown", m),
            () => w.removeEventListener("keydown", m)
          );
        }
      }, [l, v]),
      y.jsxs(Ny, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", d),
        tabIndex: -1,
        style: { pointerEvents: S ? void 0 : "none" },
        children: [
          S &&
            y.jsx($a, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const w = v({ tabbingDirection: "forwards" });
                zl(w);
              },
            }),
          y.jsx(Xu.Slot, {
            scope: n,
            children: y.jsx(Ve.ol, { tabIndex: -1, ...i, ref: h }),
          }),
          S &&
            y.jsx($a, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const w = v({ tabbingDirection: "backwards" });
                zl(w);
              },
            }),
        ],
      })
    );
  });
tm.displayName = em;
var nm = "ToastFocusProxy",
  $a = x.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      i = Ys(nm, n);
    return y.jsx(Ks, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var u;
        const l = s.relatedTarget;
        !((u = i.viewport) != null && u.contains(l)) && r();
      },
    });
  });
$a.displayName = nm;
var ai = "Toast",
  Vy = "toast.swipeStart",
  Hy = "toast.swipeMove",
  Qy = "toast.swipeCancel",
  Ky = "toast.swipeEnd",
  rm = x.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s } = e,
      [l, a] = My({ prop: r, defaultProp: o ?? !0, onChange: i, caller: ai });
    return y.jsx(Gu, {
      present: n || l,
      children: y.jsx(qy, {
        open: l,
        ...s,
        ref: t,
        onClose: () => a(!1),
        onPause: On(e.onPause),
        onResume: On(e.onResume),
        onSwipeStart: ve(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: ve(e.onSwipeMove, (u) => {
          const { x: c, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${c}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${f}px`
            );
        }),
        onSwipeCancel: ve(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: ve(e.onSwipeEnd, (u) => {
          const { x: c, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${c}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${f}px`
            ),
            a(!1);
        }),
      }),
    });
  });
rm.displayName = ai;
var [Yy, Gy] = Jh(ai, { onClose() {} }),
  qy = x.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: l,
        onPause: a,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: f,
        onSwipeCancel: h,
        onSwipeEnd: d,
        ...S
      } = e,
      v = Ys(ai, n),
      [w, m] = x.useState(null),
      p = St(t, (M) => m(M)),
      g = x.useRef(null),
      E = x.useRef(null),
      k = o || v.duration,
      C = x.useRef(0),
      b = x.useRef(k),
      R = x.useRef(0),
      { onToastAdd: _, onToastRemove: A } = v,
      F = On(() => {
        var G;
        (w == null ? void 0 : w.contains(document.activeElement)) &&
          ((G = v.viewport) == null || G.focus()),
          s();
      }),
      D = x.useCallback(
        (M) => {
          !M ||
            M === 1 / 0 ||
            (window.clearTimeout(R.current),
            (C.current = new Date().getTime()),
            (R.current = window.setTimeout(F, M)));
        },
        [F]
      );
    x.useEffect(() => {
      const M = v.viewport;
      if (M) {
        const G = () => {
            D(b.current), u == null || u();
          },
          $ = () => {
            const W = new Date().getTime() - C.current;
            (b.current = b.current - W),
              window.clearTimeout(R.current),
              a == null || a();
          };
        return (
          M.addEventListener(za, $),
          M.addEventListener(Fa, G),
          () => {
            M.removeEventListener(za, $), M.removeEventListener(Fa, G);
          }
        );
      }
    }, [v.viewport, k, a, u, D]),
      x.useEffect(() => {
        i && !v.isClosePausedRef.current && D(k);
      }, [i, k, v.isClosePausedRef, D]),
      x.useEffect(() => (_(), () => A()), [_, A]);
    const Q = x.useMemo(() => (w ? cm(w) : null), [w]);
    return v.viewport
      ? y.jsxs(y.Fragment, {
          children: [
            Q &&
              y.jsx(Xy, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: Q,
              }),
            y.jsx(Yy, {
              scope: n,
              onClose: F,
              children: li.createPortal(
                y.jsx(Xu.ItemSlot, {
                  scope: n,
                  children: y.jsx(Ty, {
                    asChild: !0,
                    onEscapeKeyDown: ve(l, () => {
                      v.isFocusedToastEscapeKeyDownRef.current || F(),
                        (v.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: y.jsx(Ve.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": i ? "open" : "closed",
                      "data-swipe-direction": v.swipeDirection,
                      ...S,
                      ref: p,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: ve(e.onKeyDown, (M) => {
                        M.key === "Escape" &&
                          (l == null || l(M.nativeEvent),
                          M.nativeEvent.defaultPrevented ||
                            ((v.isFocusedToastEscapeKeyDownRef.current = !0),
                            F()));
                      }),
                      onPointerDown: ve(e.onPointerDown, (M) => {
                        M.button === 0 &&
                          (g.current = { x: M.clientX, y: M.clientY });
                      }),
                      onPointerMove: ve(e.onPointerMove, (M) => {
                        if (!g.current) return;
                        const G = M.clientX - g.current.x,
                          $ = M.clientY - g.current.y,
                          W = !!E.current,
                          T = ["left", "right"].includes(v.swipeDirection),
                          N = ["left", "up"].includes(v.swipeDirection)
                            ? Math.min
                            : Math.max,
                          L = T ? N(0, G) : 0,
                          V = T ? 0 : N(0, $),
                          z = M.pointerType === "touch" ? 10 : 2,
                          K = { x: L, y: V },
                          q = { originalEvent: M, delta: K };
                        W
                          ? ((E.current = K), Ai(Hy, f, q, { discrete: !1 }))
                          : Ad(K, v.swipeDirection, z)
                          ? ((E.current = K),
                            Ai(Vy, c, q, { discrete: !1 }),
                            M.target.setPointerCapture(M.pointerId))
                          : (Math.abs(G) > z || Math.abs($) > z) &&
                            (g.current = null);
                      }),
                      onPointerUp: ve(e.onPointerUp, (M) => {
                        const G = E.current,
                          $ = M.target;
                        if (
                          ($.hasPointerCapture(M.pointerId) &&
                            $.releasePointerCapture(M.pointerId),
                          (E.current = null),
                          (g.current = null),
                          G)
                        ) {
                          const W = M.currentTarget,
                            T = { originalEvent: M, delta: G };
                          Ad(G, v.swipeDirection, v.swipeThreshold)
                            ? Ai(Ky, d, T, { discrete: !0 })
                            : Ai(Qy, h, T, { discrete: !0 }),
                            W.addEventListener(
                              "click",
                              (N) => N.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                v.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  Xy = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = Ys(ai, t),
      [i, s] = x.useState(!1),
      [l, a] = x.useState(!1);
    return (
      e1(() => s(!0)),
      x.useEffect(() => {
        const u = window.setTimeout(() => a(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      l
        ? null
        : y.jsx(Xh, {
            asChild: !0,
            children: y.jsx(Ks, {
              ...r,
              children:
                i && y.jsxs(y.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  Jy = "ToastTitle",
  om = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return y.jsx(Ve.div, { ...r, ref: t });
  });
om.displayName = Jy;
var Zy = "ToastDescription",
  im = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return y.jsx(Ve.div, { ...r, ref: t });
  });
im.displayName = Zy;
var sm = "ToastAction",
  lm = x.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? y.jsx(um, {
          altText: n,
          asChild: !0,
          children: y.jsx(Ju, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${sm}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
lm.displayName = sm;
var am = "ToastClose",
  Ju = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = Gy(am, n);
    return y.jsx(um, {
      asChild: !0,
      children: y.jsx(Ve.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: ve(e.onClick, o.onClose),
      }),
    });
  });
Ju.displayName = am;
var um = x.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return y.jsx(Ve.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function cm(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        t1(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          i = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (i) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...cm(r));
      }
    }),
    t
  );
}
function Ai(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Kh(o, i) : o.dispatchEvent(i);
}
var Ad = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    i = r > o;
  return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function e1(e = () => {}) {
  const t = On(e);
  An(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function t1(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function n1(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function zl(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
var r1 = Zh,
  dm = tm,
  fm = rm,
  pm = om,
  hm = im,
  mm = lm,
  gm = Ju;
function vm(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = vm(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function ym() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = vm(e)) && (r && (r += " "), (r += t));
  return r;
}
const _d = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Md = ym,
  o1 = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Md(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: i } = t,
      s = Object.keys(o).map((u) => {
        const c = n == null ? void 0 : n[u],
          f = i == null ? void 0 : i[u];
        if (c === null) return null;
        const h = _d(c) || _d(f);
        return o[u][h];
      }),
      l =
        n &&
        Object.entries(n).reduce((u, c) => {
          let [f, h] = c;
          return h === void 0 || (u[f] = h), u;
        }, {}),
      a =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, c) => {
              let { class: f, className: h, ...d } = c;
              return Object.entries(d).every((S) => {
                let [v, w] = S;
                return Array.isArray(w)
                  ? w.includes({ ...i, ...l }[v])
                  : { ...i, ...l }[v] === w;
              })
                ? [...u, f, h]
                : u;
            }, []);
    return Md(
      e,
      s,
      a,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const i1 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  wm = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var s1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const l1 = x.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: i,
      iconNode: s,
      ...l
    },
    a
  ) =>
    x.createElement(
      "svg",
      {
        ref: a,
        ...s1,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: wm("lucide", o),
        ...l,
      },
      [
        ...s.map(([u, c]) => x.createElement(u, c)),
        ...(Array.isArray(i) ? i : [i]),
      ]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lt = (e, t) => {
  const n = x.forwardRef(({ className: r, ...o }, i) =>
    x.createElement(l1, {
      ref: i,
      iconNode: t,
      className: wm(`lucide-${i1(e)}`, r),
      ...o,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const a1 = Lt("Camera", [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg",
    },
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const u1 = Lt("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const c1 = Lt("Copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const d1 = Lt("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const f1 = Lt("FolderOpen", [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const p1 = Lt("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
  ],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const h1 = Lt("HardDrive", [
  ["line", { x1: "22", x2: "2", y1: "12", y2: "12", key: "1y58io" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr",
    },
  ],
  ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16", key: "sgf278" }],
  ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16", key: "1l4acy" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const m1 = Lt("Image", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn",
    },
  ],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const g1 = Lt("WandSparkles", [
  [
    "path",
    {
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
      key: "ul74o6",
    },
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const v1 = Lt("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Zu = "-",
  y1 = (e) => {
    const t = x1(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const l = s.split(Zu);
        return l[0] === "" && l.length !== 1 && l.shift(), xm(l, t) || w1(s);
      },
      getConflictingClassGroupIds: (s, l) => {
        const a = n[s] || [];
        return l && r[s] ? [...a, ...r[s]] : a;
      },
    };
  },
  xm = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? xm(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(Zu);
    return (s = t.validators.find(({ validator: l }) => l(i))) == null
      ? void 0
      : s.classGroupId;
  },
  Ld = /^\[(.+)\]$/,
  w1 = (e) => {
    if (Ld.test(e)) {
      const t = Ld.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  x1 = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      E1(Object.entries(e.classGroups), n).forEach(([i, s]) => {
        Ua(s, r, i, t);
      }),
      r
    );
  },
  Ua = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const i = o === "" ? t : Id(t, o);
        i.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (S1(o)) {
          Ua(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([i, s]) => {
        Ua(s, Id(t, i), n, r);
      });
    });
  },
  Id = (e, t) => {
    let n = e;
    return (
      t.split(Zu).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  S1 = (e) => e.isThemeGetter,
  E1 = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
              ? Object.fromEntries(
                  Object.entries(i).map(([s, l]) => [t + s, l])
                )
              : i
          );
          return [n, o];
        })
      : e,
  k1 = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (i, s) => {
      n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(i) {
        let s = n.get(i);
        if (s !== void 0) return s;
        if ((s = r.get(i)) !== void 0) return o(i, s), s;
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : o(i, s);
      },
    };
  },
  Sm = "!",
  C1 = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      i = t.length,
      s = (l) => {
        const a = [];
        let u = 0,
          c = 0,
          f;
        for (let w = 0; w < l.length; w++) {
          let m = l[w];
          if (u === 0) {
            if (m === o && (r || l.slice(w, w + i) === t)) {
              a.push(l.slice(c, w)), (c = w + i);
              continue;
            }
            if (m === "/") {
              f = w;
              continue;
            }
          }
          m === "[" ? u++ : m === "]" && u--;
        }
        const h = a.length === 0 ? l : l.substring(c),
          d = h.startsWith(Sm),
          S = d ? h.substring(1) : h,
          v = f && f > c ? f - c : void 0;
        return {
          modifiers: a,
          hasImportantModifier: d,
          baseClassName: S,
          maybePostfixModifierPosition: v,
        };
      };
    return n ? (l) => n({ className: l, parseClassName: s }) : s;
  },
  b1 = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  P1 = (e) => ({ cache: k1(e.cacheSize), parseClassName: C1(e), ...y1(e) }),
  T1 = /\s+/,
  N1 = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      i = [],
      s = e.trim().split(T1);
    let l = "";
    for (let a = s.length - 1; a >= 0; a -= 1) {
      const u = s[a],
        {
          modifiers: c,
          hasImportantModifier: f,
          baseClassName: h,
          maybePostfixModifierPosition: d,
        } = n(u);
      let S = !!d,
        v = r(S ? h.substring(0, d) : h);
      if (!v) {
        if (!S) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        if (((v = r(h)), !v)) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        S = !1;
      }
      const w = b1(c).join(":"),
        m = f ? w + Sm : w,
        p = m + v;
      if (i.includes(p)) continue;
      i.push(p);
      const g = o(v, S);
      for (let E = 0; E < g.length; ++E) {
        const k = g[E];
        i.push(m + k);
      }
      l = u + (l.length > 0 ? " " + l : l);
    }
    return l;
  };
function R1() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Em(t)) && (r && (r += " "), (r += n));
  return r;
}
const Em = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Em(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function j1(e, ...t) {
  let n,
    r,
    o,
    i = s;
  function s(a) {
    const u = t.reduce((c, f) => f(c), e());
    return (n = P1(u)), (r = n.cache.get), (o = n.cache.set), (i = l), l(a);
  }
  function l(a) {
    const u = r(a);
    if (u) return u;
    const c = N1(a, n);
    return o(a, c), c;
  }
  return function () {
    return i(R1.apply(null, arguments));
  };
}
const re = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  km = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  O1 = /^\d+\/\d+$/,
  A1 = new Set(["px", "full", "screen"]),
  _1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  M1 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  L1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  I1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  D1 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Dt = (e) => Mr(e) || A1.has(e) || O1.test(e),
  sn = (e) => ro(e, "length", H1),
  Mr = (e) => !!e && !Number.isNaN(Number(e)),
  Fl = (e) => ro(e, "number", Mr),
  vo = (e) => !!e && Number.isInteger(Number(e)),
  z1 = (e) => e.endsWith("%") && Mr(e.slice(0, -1)),
  H = (e) => km.test(e),
  ln = (e) => _1.test(e),
  F1 = new Set(["length", "size", "percentage"]),
  $1 = (e) => ro(e, F1, Cm),
  U1 = (e) => ro(e, "position", Cm),
  B1 = new Set(["image", "url"]),
  W1 = (e) => ro(e, B1, K1),
  V1 = (e) => ro(e, "", Q1),
  yo = () => !0,
  ro = (e, t, n) => {
    const r = km.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  H1 = (e) => M1.test(e) && !L1.test(e),
  Cm = () => !1,
  Q1 = (e) => I1.test(e),
  K1 = (e) => D1.test(e),
  Y1 = () => {
    const e = re("colors"),
      t = re("spacing"),
      n = re("blur"),
      r = re("brightness"),
      o = re("borderColor"),
      i = re("borderRadius"),
      s = re("borderSpacing"),
      l = re("borderWidth"),
      a = re("contrast"),
      u = re("grayscale"),
      c = re("hueRotate"),
      f = re("invert"),
      h = re("gap"),
      d = re("gradientColorStops"),
      S = re("gradientColorStopPositions"),
      v = re("inset"),
      w = re("margin"),
      m = re("opacity"),
      p = re("padding"),
      g = re("saturate"),
      E = re("scale"),
      k = re("sepia"),
      C = re("skew"),
      b = re("space"),
      R = re("translate"),
      _ = () => ["auto", "contain", "none"],
      A = () => ["auto", "hidden", "clip", "visible", "scroll"],
      F = () => ["auto", H, t],
      D = () => [H, t],
      Q = () => ["", Dt, sn],
      M = () => ["auto", Mr, H],
      G = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      $ = () => ["solid", "dashed", "dotted", "double", "none"],
      W = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      T = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      N = () => ["", "0", H],
      L = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      V = () => [Mr, H];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [yo],
        spacing: [Dt, sn],
        blur: ["none", "", ln, H],
        brightness: V(),
        borderColor: [e],
        borderRadius: ["none", "", "full", ln, H],
        borderSpacing: D(),
        borderWidth: Q(),
        contrast: V(),
        grayscale: N(),
        hueRotate: V(),
        invert: N(),
        gap: D(),
        gradientColorStops: [e],
        gradientColorStopPositions: [z1, sn],
        inset: F(),
        margin: F(),
        opacity: V(),
        padding: D(),
        saturate: V(),
        scale: V(),
        sepia: N(),
        skew: V(),
        space: D(),
        translate: D(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", H] }],
        container: ["container"],
        columns: [{ columns: [ln] }],
        "break-after": [{ "break-after": L() }],
        "break-before": [{ "break-before": L() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...G(), H] }],
        overflow: [{ overflow: A() }],
        "overflow-x": [{ "overflow-x": A() }],
        "overflow-y": [{ "overflow-y": A() }],
        overscroll: [{ overscroll: _() }],
        "overscroll-x": [{ "overscroll-x": _() }],
        "overscroll-y": [{ "overscroll-y": _() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [v] }],
        "inset-x": [{ "inset-x": [v] }],
        "inset-y": [{ "inset-y": [v] }],
        start: [{ start: [v] }],
        end: [{ end: [v] }],
        top: [{ top: [v] }],
        right: [{ right: [v] }],
        bottom: [{ bottom: [v] }],
        left: [{ left: [v] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", vo, H] }],
        basis: [{ basis: F() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", H] }],
        grow: [{ grow: N() }],
        shrink: [{ shrink: N() }],
        order: [{ order: ["first", "last", "none", vo, H] }],
        "grid-cols": [{ "grid-cols": [yo] }],
        "col-start-end": [{ col: ["auto", { span: ["full", vo, H] }, H] }],
        "col-start": [{ "col-start": M() }],
        "col-end": [{ "col-end": M() }],
        "grid-rows": [{ "grid-rows": [yo] }],
        "row-start-end": [{ row: ["auto", { span: [vo, H] }, H] }],
        "row-start": [{ "row-start": M() }],
        "row-end": [{ "row-end": M() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", H] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", H] }],
        gap: [{ gap: [h] }],
        "gap-x": [{ "gap-x": [h] }],
        "gap-y": [{ "gap-y": [h] }],
        "justify-content": [{ justify: ["normal", ...T()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...T(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...T(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [p] }],
        px: [{ px: [p] }],
        py: [{ py: [p] }],
        ps: [{ ps: [p] }],
        pe: [{ pe: [p] }],
        pt: [{ pt: [p] }],
        pr: [{ pr: [p] }],
        pb: [{ pb: [p] }],
        pl: [{ pl: [p] }],
        m: [{ m: [w] }],
        mx: [{ mx: [w] }],
        my: [{ my: [w] }],
        ms: [{ ms: [w] }],
        me: [{ me: [w] }],
        mt: [{ mt: [w] }],
        mr: [{ mr: [w] }],
        mb: [{ mb: [w] }],
        ml: [{ ml: [w] }],
        "space-x": [{ "space-x": [b] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [b] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", H, t] }],
        "min-w": [{ "min-w": [H, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              H,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [ln] },
              ln,
            ],
          },
        ],
        h: [{ h: [H, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [H, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", ln, sn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Fl,
            ],
          },
        ],
        "font-family": [{ font: [yo] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              H,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Mr, Fl] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Dt,
              H,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", H] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", H] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [m] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [m] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...$(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Dt, sn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Dt, H] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: D() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              H,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", H] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [m] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...G(), U1] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", $1] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              W1,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [S] }],
        "gradient-via-pos": [{ via: [S] }],
        "gradient-to-pos": [{ to: [S] }],
        "gradient-from": [{ from: [d] }],
        "gradient-via": [{ via: [d] }],
        "gradient-to": [{ to: [d] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [l] }],
        "border-w-x": [{ "border-x": [l] }],
        "border-w-y": [{ "border-y": [l] }],
        "border-w-s": [{ "border-s": [l] }],
        "border-w-e": [{ "border-e": [l] }],
        "border-w-t": [{ "border-t": [l] }],
        "border-w-r": [{ "border-r": [l] }],
        "border-w-b": [{ "border-b": [l] }],
        "border-w-l": [{ "border-l": [l] }],
        "border-opacity": [{ "border-opacity": [m] }],
        "border-style": [{ border: [...$(), "hidden"] }],
        "divide-x": [{ "divide-x": [l] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [l] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [m] }],
        "divide-style": [{ divide: $() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...$()] }],
        "outline-offset": [{ "outline-offset": [Dt, H] }],
        "outline-w": [{ outline: [Dt, sn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: Q() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [m] }],
        "ring-offset-w": [{ "ring-offset": [Dt, sn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", ln, V1] }],
        "shadow-color": [{ shadow: [yo] }],
        opacity: [{ opacity: [m] }],
        "mix-blend": [{ "mix-blend": [...W(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": W() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", ln, H] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [g] }],
        sepia: [{ sepia: [k] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [a] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [f] }],
        "backdrop-opacity": [{ "backdrop-opacity": [m] }],
        "backdrop-saturate": [{ "backdrop-saturate": [g] }],
        "backdrop-sepia": [{ "backdrop-sepia": [k] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              H,
            ],
          },
        ],
        duration: [{ duration: V() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", H] }],
        delay: [{ delay: V() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", H] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [E] }],
        "scale-x": [{ "scale-x": [E] }],
        "scale-y": [{ "scale-y": [E] }],
        rotate: [{ rotate: [vo, H] }],
        "translate-x": [{ "translate-x": [R] }],
        "translate-y": [{ "translate-y": [R] }],
        "skew-x": [{ "skew-x": [C] }],
        "skew-y": [{ "skew-y": [C] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              H,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              H,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": D() }],
        "scroll-mx": [{ "scroll-mx": D() }],
        "scroll-my": [{ "scroll-my": D() }],
        "scroll-ms": [{ "scroll-ms": D() }],
        "scroll-me": [{ "scroll-me": D() }],
        "scroll-mt": [{ "scroll-mt": D() }],
        "scroll-mr": [{ "scroll-mr": D() }],
        "scroll-mb": [{ "scroll-mb": D() }],
        "scroll-ml": [{ "scroll-ml": D() }],
        "scroll-p": [{ "scroll-p": D() }],
        "scroll-px": [{ "scroll-px": D() }],
        "scroll-py": [{ "scroll-py": D() }],
        "scroll-ps": [{ "scroll-ps": D() }],
        "scroll-pe": [{ "scroll-pe": D() }],
        "scroll-pt": [{ "scroll-pt": D() }],
        "scroll-pr": [{ "scroll-pr": D() }],
        "scroll-pb": [{ "scroll-pb": D() }],
        "scroll-pl": [{ "scroll-pl": D() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", H] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Dt, sn, Fl] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  G1 = j1(Y1);
function ar(...e) {
  return G1(ym(e));
}
const q1 = r1,
  bm = x.forwardRef(({ className: e, ...t }, n) =>
    y.jsx(dm, {
      ref: n,
      className: ar(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...t,
    })
  );
bm.displayName = dm.displayName;
const X1 = o1(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  Pm = x.forwardRef(({ className: e, variant: t, ...n }, r) =>
    y.jsx(fm, { ref: r, className: ar(X1({ variant: t }), e), ...n })
  );
Pm.displayName = fm.displayName;
const J1 = x.forwardRef(({ className: e, ...t }, n) =>
  y.jsx(mm, {
    ref: n,
    className: ar(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t,
  })
);
J1.displayName = mm.displayName;
const Tm = x.forwardRef(({ className: e, ...t }, n) =>
  y.jsx(gm, {
    ref: n,
    className: ar(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: y.jsx(v1, { className: "h-4 w-4" }),
  })
);
Tm.displayName = gm.displayName;
const Nm = x.forwardRef(({ className: e, ...t }, n) =>
  y.jsx(pm, { ref: n, className: ar("text-sm font-semibold", e), ...t })
);
Nm.displayName = pm.displayName;
const Rm = x.forwardRef(({ className: e, ...t }, n) =>
  y.jsx(hm, { ref: n, className: ar("text-sm opacity-90", e), ...t })
);
Rm.displayName = hm.displayName;
function Z1() {
  const { toasts: e } = dy();
  return y.jsxs(q1, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...i }) {
        return y.jsxs(
          Pm,
          {
            ...i,
            children: [
              y.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && y.jsx(Nm, { children: n }),
                  r && y.jsx(Rm, { children: r }),
                ],
              }),
              o,
              y.jsx(Tm, {}),
            ],
          },
          t
        );
      }),
      y.jsx(bm, {}),
    ],
  });
}
var Dd = ["light", "dark"],
  ew = "(prefers-color-scheme: dark)",
  tw = x.createContext(void 0),
  nw = { setTheme: (e) => {}, themes: [] },
  rw = () => {
    var e;
    return (e = x.useContext(tw)) != null ? e : nw;
  };
x.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: i,
    value: s,
    attrs: l,
    nonce: a,
  }) => {
    let u = i === "system",
      c =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${l
              .map((S) => `'${S}'`)
              .join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      f = o
        ? Dd.includes(i) && i
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      h = (S, v = !1, w = !0) => {
        let m = s ? s[S] : S,
          p = v ? S + "|| ''" : `'${m}'`,
          g = "";
        return (
          o &&
            w &&
            !v &&
            Dd.includes(S) &&
            (g += `d.style.colorScheme = '${S}';`),
          n === "class"
            ? v || m
              ? (g += `c.add(${p})`)
              : (g += "null")
            : m && (g += `d[s](n,${p})`),
          g
        );
      },
      d = e
        ? `!function(){${c}${h(e)}}()`
        : r
        ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${ew}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h(
            "dark"
          )}}else{${h("light")}}}else if(e){${
            s ? `var x=${JSON.stringify(s)};` : ""
          }${h(s ? "x[e]" : "e", !0)}}${
            u ? "" : "else{" + h(i, !1, !1) + "}"
          }${f}}catch(e){}}()`
        : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${
            s ? `var x=${JSON.stringify(s)};` : ""
          }${h(s ? "x[e]" : "e", !0)}}else{${h(
            i,
            !1,
            !1
          )};}${f}}catch(t){}}();`;
    return x.createElement("script", {
      nonce: a,
      dangerouslySetInnerHTML: { __html: d },
    });
  }
);
var ow = (e) => {
    switch (e) {
      case "success":
        return lw;
      case "info":
        return uw;
      case "warning":
        return aw;
      case "error":
        return cw;
      default:
        return null;
    }
  },
  iw = Array(12).fill(0),
  sw = ({ visible: e, className: t }) =>
    O.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      O.createElement(
        "div",
        { className: "sonner-spinner" },
        iw.map((n, r) =>
          O.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          })
        )
      )
    ),
  lw = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  aw = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  uw = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  cw = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  dw = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    O.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    O.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  fw = () => {
    let [e, t] = O.useState(document.hidden);
    return (
      O.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  Ba = 1,
  pw = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            o =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Ba++,
            i = this.toasts.find((l) => l.id === o),
            s = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            i
              ? (this.toasts = this.toasts.map((l) =>
                  l.id === o
                    ? (this.publish({ ...l, ...e, id: o, title: n }),
                      { ...l, ...e, id: o, dismissible: s, title: n })
                    : l
                ))
              : this.addToast({ title: n, ...r, dismissible: s, id: o }),
            o
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0,
            i,
            s = r
              .then(async (a) => {
                if (((i = ["resolve", a]), O.isValidElement(a)))
                  (o = !1), this.create({ id: n, type: "default", message: a });
                else if (mw(a) && !a.ok) {
                  o = !1;
                  let u =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${a.status}`)
                        : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${a.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: c,
                  });
                } else if (t.success !== void 0) {
                  o = !1;
                  let u =
                      typeof t.success == "function"
                        ? await t.success(a)
                        : t.success,
                    c =
                      typeof t.description == "function"
                        ? await t.description(a)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: u,
                    description: c,
                  });
                }
              })
              .catch(async (a) => {
                if (((i = ["reject", a]), t.error !== void 0)) {
                  o = !1;
                  let u =
                      typeof t.error == "function" ? await t.error(a) : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(a)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: c,
                  });
                }
              })
              .finally(() => {
                var a;
                o && (this.dismiss(n), (n = void 0)),
                  (a = t.finally) == null || a.call(t);
              }),
            l = () =>
              new Promise((a, u) =>
                s.then(() => (i[0] === "reject" ? u(i[1]) : a(i[1]))).catch(u)
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: l }
            : Object.assign(n, { unwrap: l });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || Ba++;
          return this.create({ jsx: e(n), id: n, ...t }), n;
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set());
    }
  },
  De = new pw(),
  hw = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Ba++;
    return De.addToast({ title: e, ...t, id: n }), n;
  },
  mw = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  gw = hw,
  vw = () => De.toasts,
  yw = () => De.getActiveToasts();
Object.assign(
  gw,
  {
    success: De.success,
    info: De.info,
    warning: De.warning,
    error: De.error,
    custom: De.custom,
    message: De.message,
    promise: De.promise,
    dismiss: De.dismiss,
    loading: De.loading,
  },
  { getHistory: vw, getToasts: yw }
);
function ww(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e));
}
ww(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function _i(e) {
  return e.label !== void 0;
}
var xw = 3,
  Sw = "32px",
  Ew = "16px",
  zd = 4e3,
  kw = 356,
  Cw = 14,
  bw = 20,
  Pw = 200;
function dt(...e) {
  return e.filter(Boolean).join(" ");
}
function Tw(e) {
  let [t, n] = e.split("-"),
    r = [];
  return t && r.push(t), n && r.push(n), r;
}
var Nw = (e) => {
  var t, n, r, o, i, s, l, a, u, c, f;
  let {
      invert: h,
      toast: d,
      unstyled: S,
      interacting: v,
      setHeights: w,
      visibleToasts: m,
      heights: p,
      index: g,
      toasts: E,
      expanded: k,
      removeToast: C,
      defaultRichColors: b,
      closeButton: R,
      style: _,
      cancelButtonStyle: A,
      actionButtonStyle: F,
      className: D = "",
      descriptionClassName: Q = "",
      duration: M,
      position: G,
      gap: $,
      loadingIcon: W,
      expandByDefault: T,
      classNames: N,
      icons: L,
      closeButtonAriaLabel: V = "Close toast",
      pauseWhenPageIsHidden: z,
    } = e,
    [K, q] = O.useState(null),
    [he, Ce] = O.useState(null),
    [Z, ur] = O.useState(!1),
    [Jt, zn] = O.useState(!1),
    [Zt, cr] = O.useState(!1),
    [en, ci] = O.useState(!1),
    [il, di] = O.useState(!1),
    [sl, so] = O.useState(0),
    [dr, fc] = O.useState(0),
    lo = O.useRef(d.duration || M || zd),
    pc = O.useRef(null),
    Fn = O.useRef(null),
    bg = g === 0,
    Pg = g + 1 <= m,
    Ze = d.type,
    fr = d.dismissible !== !1,
    Tg = d.className || "",
    Ng = d.descriptionClassName || "",
    fi = O.useMemo(
      () => p.findIndex((U) => U.toastId === d.id) || 0,
      [p, d.id]
    ),
    Rg = O.useMemo(() => {
      var U;
      return (U = d.closeButton) != null ? U : R;
    }, [d.closeButton, R]),
    hc = O.useMemo(() => d.duration || M || zd, [d.duration, M]),
    ll = O.useRef(0),
    pr = O.useRef(0),
    mc = O.useRef(0),
    hr = O.useRef(null),
    [jg, Og] = G.split("-"),
    gc = O.useMemo(
      () => p.reduce((U, te, se) => (se >= fi ? U : U + te.height), 0),
      [p, fi]
    ),
    vc = fw(),
    Ag = d.invert || h,
    al = Ze === "loading";
  (pr.current = O.useMemo(() => fi * $ + gc, [fi, gc])),
    O.useEffect(() => {
      lo.current = hc;
    }, [hc]),
    O.useEffect(() => {
      ur(!0);
    }, []),
    O.useEffect(() => {
      let U = Fn.current;
      if (U) {
        let te = U.getBoundingClientRect().height;
        return (
          fc(te),
          w((se) => [
            { toastId: d.id, height: te, position: d.position },
            ...se,
          ]),
          () => w((se) => se.filter((lt) => lt.toastId !== d.id))
        );
      }
    }, [w, d.id]),
    O.useLayoutEffect(() => {
      if (!Z) return;
      let U = Fn.current,
        te = U.style.height;
      U.style.height = "auto";
      let se = U.getBoundingClientRect().height;
      (U.style.height = te),
        fc(se),
        w((lt) =>
          lt.find((at) => at.toastId === d.id)
            ? lt.map((at) => (at.toastId === d.id ? { ...at, height: se } : at))
            : [{ toastId: d.id, height: se, position: d.position }, ...lt]
        );
    }, [Z, d.title, d.description, w, d.id]);
  let tn = O.useCallback(() => {
    zn(!0),
      so(pr.current),
      w((U) => U.filter((te) => te.toastId !== d.id)),
      setTimeout(() => {
        C(d);
      }, Pw);
  }, [d, C, w, pr]);
  O.useEffect(() => {
    if (
      (d.promise && Ze === "loading") ||
      d.duration === 1 / 0 ||
      d.type === "loading"
    )
      return;
    let U;
    return (
      k || v || (z && vc)
        ? (() => {
            if (mc.current < ll.current) {
              let te = new Date().getTime() - ll.current;
              lo.current = lo.current - te;
            }
            mc.current = new Date().getTime();
          })()
        : lo.current !== 1 / 0 &&
          ((ll.current = new Date().getTime()),
          (U = setTimeout(() => {
            var te;
            (te = d.onAutoClose) == null || te.call(d, d), tn();
          }, lo.current))),
      () => clearTimeout(U)
    );
  }, [k, v, d, Ze, z, vc, tn]),
    O.useEffect(() => {
      d.delete && tn();
    }, [tn, d.delete]);
  function _g() {
    var U, te, se;
    return L != null && L.loading
      ? O.createElement(
          "div",
          {
            className: dt(
              N == null ? void 0 : N.loader,
              (U = d == null ? void 0 : d.classNames) == null
                ? void 0
                : U.loader,
              "sonner-loader"
            ),
            "data-visible": Ze === "loading",
          },
          L.loading
        )
      : W
      ? O.createElement(
          "div",
          {
            className: dt(
              N == null ? void 0 : N.loader,
              (te = d == null ? void 0 : d.classNames) == null
                ? void 0
                : te.loader,
              "sonner-loader"
            ),
            "data-visible": Ze === "loading",
          },
          W
        )
      : O.createElement(sw, {
          className: dt(
            N == null ? void 0 : N.loader,
            (se = d == null ? void 0 : d.classNames) == null
              ? void 0
              : se.loader
          ),
          visible: Ze === "loading",
        });
  }
  return O.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Fn,
      className: dt(
        D,
        Tg,
        N == null ? void 0 : N.toast,
        (t = d == null ? void 0 : d.classNames) == null ? void 0 : t.toast,
        N == null ? void 0 : N.default,
        N == null ? void 0 : N[Ze],
        (n = d == null ? void 0 : d.classNames) == null ? void 0 : n[Ze]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = d.richColors) != null ? r : b,
      "data-styled": !(d.jsx || d.unstyled || S),
      "data-mounted": Z,
      "data-promise": !!d.promise,
      "data-swiped": il,
      "data-removed": Jt,
      "data-visible": Pg,
      "data-y-position": jg,
      "data-x-position": Og,
      "data-index": g,
      "data-front": bg,
      "data-swiping": Zt,
      "data-dismissible": fr,
      "data-type": Ze,
      "data-invert": Ag,
      "data-swipe-out": en,
      "data-swipe-direction": he,
      "data-expanded": !!(k || (T && Z)),
      style: {
        "--index": g,
        "--toasts-before": g,
        "--z-index": E.length - g,
        "--offset": `${Jt ? sl : pr.current}px`,
        "--initial-height": T ? "auto" : `${dr}px`,
        ..._,
        ...d.style,
      },
      onDragEnd: () => {
        cr(!1), q(null), (hr.current = null);
      },
      onPointerDown: (U) => {
        al ||
          !fr ||
          ((pc.current = new Date()),
          so(pr.current),
          U.target.setPointerCapture(U.pointerId),
          U.target.tagName !== "BUTTON" &&
            (cr(!0), (hr.current = { x: U.clientX, y: U.clientY })));
      },
      onPointerUp: () => {
        var U, te, se, lt;
        if (en || !fr) return;
        hr.current = null;
        let at = Number(
            ((U = Fn.current) == null
              ? void 0
              : U.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          nn = Number(
            ((te = Fn.current) == null
              ? void 0
              : te.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          $n =
            new Date().getTime() -
            ((se = pc.current) == null ? void 0 : se.getTime()),
          ut = K === "x" ? at : nn,
          rn = Math.abs(ut) / $n;
        if (Math.abs(ut) >= bw || rn > 0.11) {
          so(pr.current),
            (lt = d.onDismiss) == null || lt.call(d, d),
            Ce(
              K === "x" ? (at > 0 ? "right" : "left") : nn > 0 ? "down" : "up"
            ),
            tn(),
            ci(!0),
            di(!1);
          return;
        }
        cr(!1), q(null);
      },
      onPointerMove: (U) => {
        var te, se, lt, at;
        if (
          !hr.current ||
          !fr ||
          ((te = window.getSelection()) == null
            ? void 0
            : te.toString().length) > 0
        )
          return;
        let nn = U.clientY - hr.current.y,
          $n = U.clientX - hr.current.x,
          ut = (se = e.swipeDirections) != null ? se : Tw(G);
        !K &&
          (Math.abs($n) > 1 || Math.abs(nn) > 1) &&
          q(Math.abs($n) > Math.abs(nn) ? "x" : "y");
        let rn = { x: 0, y: 0 };
        K === "y"
          ? (ut.includes("top") || ut.includes("bottom")) &&
            ((ut.includes("top") && nn < 0) ||
              (ut.includes("bottom") && nn > 0)) &&
            (rn.y = nn)
          : K === "x" &&
            (ut.includes("left") || ut.includes("right")) &&
            ((ut.includes("left") && $n < 0) ||
              (ut.includes("right") && $n > 0)) &&
            (rn.x = $n),
          (Math.abs(rn.x) > 0 || Math.abs(rn.y) > 0) && di(!0),
          (lt = Fn.current) == null ||
            lt.style.setProperty("--swipe-amount-x", `${rn.x}px`),
          (at = Fn.current) == null ||
            at.style.setProperty("--swipe-amount-y", `${rn.y}px`);
      },
    },
    Rg && !d.jsx
      ? O.createElement(
          "button",
          {
            "aria-label": V,
            "data-disabled": al,
            "data-close-button": !0,
            onClick:
              al || !fr
                ? () => {}
                : () => {
                    var U;
                    tn(), (U = d.onDismiss) == null || U.call(d, d);
                  },
            className: dt(
              N == null ? void 0 : N.closeButton,
              (o = d == null ? void 0 : d.classNames) == null
                ? void 0
                : o.closeButton
            ),
          },
          (i = L == null ? void 0 : L.close) != null ? i : dw
        )
      : null,
    d.jsx || x.isValidElement(d.title)
      ? d.jsx
        ? d.jsx
        : typeof d.title == "function"
        ? d.title()
        : d.title
      : O.createElement(
          O.Fragment,
          null,
          Ze || d.icon || d.promise
            ? O.createElement(
                "div",
                {
                  "data-icon": "",
                  className: dt(
                    N == null ? void 0 : N.icon,
                    (s = d == null ? void 0 : d.classNames) == null
                      ? void 0
                      : s.icon
                  ),
                },
                d.promise || (d.type === "loading" && !d.icon)
                  ? d.icon || _g()
                  : null,
                d.type !== "loading"
                  ? d.icon || (L == null ? void 0 : L[Ze]) || ow(Ze)
                  : null
              )
            : null,
          O.createElement(
            "div",
            {
              "data-content": "",
              className: dt(
                N == null ? void 0 : N.content,
                (l = d == null ? void 0 : d.classNames) == null
                  ? void 0
                  : l.content
              ),
            },
            O.createElement(
              "div",
              {
                "data-title": "",
                className: dt(
                  N == null ? void 0 : N.title,
                  (a = d == null ? void 0 : d.classNames) == null
                    ? void 0
                    : a.title
                ),
              },
              typeof d.title == "function" ? d.title() : d.title
            ),
            d.description
              ? O.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: dt(
                      Q,
                      Ng,
                      N == null ? void 0 : N.description,
                      (u = d == null ? void 0 : d.classNames) == null
                        ? void 0
                        : u.description
                    ),
                  },
                  typeof d.description == "function"
                    ? d.description()
                    : d.description
                )
              : null
          ),
          x.isValidElement(d.cancel)
            ? d.cancel
            : d.cancel && _i(d.cancel)
            ? O.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: d.cancelButtonStyle || A,
                  onClick: (U) => {
                    var te, se;
                    _i(d.cancel) &&
                      fr &&
                      ((se = (te = d.cancel).onClick) == null || se.call(te, U),
                      tn());
                  },
                  className: dt(
                    N == null ? void 0 : N.cancelButton,
                    (c = d == null ? void 0 : d.classNames) == null
                      ? void 0
                      : c.cancelButton
                  ),
                },
                d.cancel.label
              )
            : null,
          x.isValidElement(d.action)
            ? d.action
            : d.action && _i(d.action)
            ? O.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: d.actionButtonStyle || F,
                  onClick: (U) => {
                    var te, se;
                    _i(d.action) &&
                      ((se = (te = d.action).onClick) == null || se.call(te, U),
                      !U.defaultPrevented && tn());
                  },
                  className: dt(
                    N == null ? void 0 : N.actionButton,
                    (f = d == null ? void 0 : d.classNames) == null
                      ? void 0
                      : f.actionButton
                  ),
                },
                d.action.label
              )
            : null
        )
  );
};
function Fd() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function Rw(e, t) {
  let n = {};
  return (
    [e, t].forEach((r, o) => {
      let i = o === 1,
        s = i ? "--mobile-offset" : "--offset",
        l = i ? Ew : Sw;
      function a(u) {
        ["top", "right", "bottom", "left"].forEach((c) => {
          n[`${s}-${c}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? a(r)
        : typeof r == "object"
        ? ["top", "right", "bottom", "left"].forEach((u) => {
            r[u] === void 0
              ? (n[`${s}-${u}`] = l)
              : (n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]);
          })
        : a(l);
    }),
    n
  );
}
var jw = x.forwardRef(function (e, t) {
  let {
      invert: n,
      position: r = "bottom-right",
      hotkey: o = ["altKey", "KeyT"],
      expand: i,
      closeButton: s,
      className: l,
      offset: a,
      mobileOffset: u,
      theme: c = "light",
      richColors: f,
      duration: h,
      style: d,
      visibleToasts: S = xw,
      toastOptions: v,
      dir: w = Fd(),
      gap: m = Cw,
      loadingIcon: p,
      icons: g,
      containerAriaLabel: E = "Notifications",
      pauseWhenPageIsHidden: k,
    } = e,
    [C, b] = O.useState([]),
    R = O.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(C.filter((z) => z.position).map((z) => z.position))
          )
        ),
      [C, r]
    ),
    [_, A] = O.useState([]),
    [F, D] = O.useState(!1),
    [Q, M] = O.useState(!1),
    [G, $] = O.useState(
      c !== "system"
        ? c
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    W = O.useRef(null),
    T = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    N = O.useRef(null),
    L = O.useRef(!1),
    V = O.useCallback((z) => {
      b((K) => {
        var q;
        return (
          ((q = K.find((he) => he.id === z.id)) != null && q.delete) ||
            De.dismiss(z.id),
          K.filter(({ id: he }) => he !== z.id)
        );
      });
    }, []);
  return (
    O.useEffect(
      () =>
        De.subscribe((z) => {
          if (z.dismiss) {
            b((K) => K.map((q) => (q.id === z.id ? { ...q, delete: !0 } : q)));
            return;
          }
          setTimeout(() => {
            Wh.flushSync(() => {
              b((K) => {
                let q = K.findIndex((he) => he.id === z.id);
                return q !== -1
                  ? [...K.slice(0, q), { ...K[q], ...z }, ...K.slice(q + 1)]
                  : [z, ...K];
              });
            });
          });
        }),
      []
    ),
    O.useEffect(() => {
      if (c !== "system") {
        $(c);
        return;
      }
      if (
        (c === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? $("dark")
            : $("light")),
        typeof window > "u")
      )
        return;
      let z = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        z.addEventListener("change", ({ matches: K }) => {
          $(K ? "dark" : "light");
        });
      } catch {
        z.addListener(({ matches: q }) => {
          try {
            $(q ? "dark" : "light");
          } catch (he) {
            console.error(he);
          }
        });
      }
    }, [c]),
    O.useEffect(() => {
      C.length <= 1 && D(!1);
    }, [C]),
    O.useEffect(() => {
      let z = (K) => {
        var q, he;
        o.every((Ce) => K[Ce] || K.code === Ce) &&
          (D(!0), (q = W.current) == null || q.focus()),
          K.code === "Escape" &&
            (document.activeElement === W.current ||
              ((he = W.current) != null &&
                he.contains(document.activeElement))) &&
            D(!1);
      };
      return (
        document.addEventListener("keydown", z),
        () => document.removeEventListener("keydown", z)
      );
    }, [o]),
    O.useEffect(() => {
      if (W.current)
        return () => {
          N.current &&
            (N.current.focus({ preventScroll: !0 }),
            (N.current = null),
            (L.current = !1));
        };
    }, [W.current]),
    O.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${E} ${T}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      R.map((z, K) => {
        var q;
        let [he, Ce] = z.split("-");
        return C.length
          ? O.createElement(
              "ol",
              {
                key: z,
                dir: w === "auto" ? Fd() : w,
                tabIndex: -1,
                ref: W,
                className: l,
                "data-sonner-toaster": !0,
                "data-theme": G,
                "data-y-position": he,
                "data-lifted": F && C.length > 1 && !i,
                "data-x-position": Ce,
                style: {
                  "--front-toast-height": `${
                    ((q = _[0]) == null ? void 0 : q.height) || 0
                  }px`,
                  "--width": `${kw}px`,
                  "--gap": `${m}px`,
                  ...d,
                  ...Rw(a, u),
                },
                onBlur: (Z) => {
                  L.current &&
                    !Z.currentTarget.contains(Z.relatedTarget) &&
                    ((L.current = !1),
                    N.current &&
                      (N.current.focus({ preventScroll: !0 }),
                      (N.current = null)));
                },
                onFocus: (Z) => {
                  (Z.target instanceof HTMLElement &&
                    Z.target.dataset.dismissible === "false") ||
                    L.current ||
                    ((L.current = !0), (N.current = Z.relatedTarget));
                },
                onMouseEnter: () => D(!0),
                onMouseMove: () => D(!0),
                onMouseLeave: () => {
                  Q || D(!1);
                },
                onDragEnd: () => D(!1),
                onPointerDown: (Z) => {
                  (Z.target instanceof HTMLElement &&
                    Z.target.dataset.dismissible === "false") ||
                    M(!0);
                },
                onPointerUp: () => M(!1),
              },
              C.filter((Z) => (!Z.position && K === 0) || Z.position === z).map(
                (Z, ur) => {
                  var Jt, zn;
                  return O.createElement(Nw, {
                    key: Z.id,
                    icons: g,
                    index: ur,
                    toast: Z,
                    defaultRichColors: f,
                    duration:
                      (Jt = v == null ? void 0 : v.duration) != null ? Jt : h,
                    className: v == null ? void 0 : v.className,
                    descriptionClassName:
                      v == null ? void 0 : v.descriptionClassName,
                    invert: n,
                    visibleToasts: S,
                    closeButton:
                      (zn = v == null ? void 0 : v.closeButton) != null
                        ? zn
                        : s,
                    interacting: Q,
                    position: z,
                    style: v == null ? void 0 : v.style,
                    unstyled: v == null ? void 0 : v.unstyled,
                    classNames: v == null ? void 0 : v.classNames,
                    cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
                    actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
                    removeToast: V,
                    toasts: C.filter((Zt) => Zt.position == Z.position),
                    heights: _.filter((Zt) => Zt.position == Z.position),
                    setHeights: A,
                    expandByDefault: i,
                    gap: m,
                    loadingIcon: p,
                    expanded: F,
                    pauseWhenPageIsHidden: k,
                    swipeDirections: e.swipeDirections,
                  });
                }
              )
            )
          : null;
      })
    )
  );
});
const Ow = ({ ...e }) => {
    const { theme: t = "system" } = rw();
    return y.jsx(jw, {
      theme: t,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...e,
    });
  },
  Aw = ["top", "right", "bottom", "left"],
  _n = Math.min,
  Qe = Math.max,
  ks = Math.round,
  Mi = Math.floor,
  _t = (e) => ({ x: e, y: e }),
  _w = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Mw = { start: "end", end: "start" };
function Wa(e, t, n) {
  return Qe(e, _n(t, n));
}
function Gt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function qt(e) {
  return e.split("-")[0];
}
function oo(e) {
  return e.split("-")[1];
}
function ec(e) {
  return e === "x" ? "y" : "x";
}
function tc(e) {
  return e === "y" ? "height" : "width";
}
const Lw = new Set(["top", "bottom"]);
function jt(e) {
  return Lw.has(qt(e)) ? "y" : "x";
}
function nc(e) {
  return ec(jt(e));
}
function Iw(e, t, n) {
  n === void 0 && (n = !1);
  const r = oo(e),
    o = nc(e),
    i = tc(o);
  let s =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (s = Cs(s)), [s, Cs(s)];
}
function Dw(e) {
  const t = Cs(e);
  return [Va(e), t, Va(t)];
}
function Va(e) {
  return e.replace(/start|end/g, (t) => Mw[t]);
}
const $d = ["left", "right"],
  Ud = ["right", "left"],
  zw = ["top", "bottom"],
  Fw = ["bottom", "top"];
function $w(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? Ud : $d) : t ? $d : Ud;
    case "left":
    case "right":
      return t ? zw : Fw;
    default:
      return [];
  }
}
function Uw(e, t, n, r) {
  const o = oo(e);
  let i = $w(qt(e), n === "start", r);
  return (
    o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(Va)))), i
  );
}
function Cs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => _w[t]);
}
function Bw(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function jm(e) {
  return typeof e != "number"
    ? Bw(e)
    : { top: e, right: e, bottom: e, left: e };
}
function bs(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function Bd(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = jt(t),
    s = nc(t),
    l = tc(s),
    a = qt(t),
    u = i === "y",
    c = r.x + r.width / 2 - o.width / 2,
    f = r.y + r.height / 2 - o.height / 2,
    h = r[l] / 2 - o[l] / 2;
  let d;
  switch (a) {
    case "top":
      d = { x: c, y: r.y - o.height };
      break;
    case "bottom":
      d = { x: c, y: r.y + r.height };
      break;
    case "right":
      d = { x: r.x + r.width, y: f };
      break;
    case "left":
      d = { x: r.x - o.width, y: f };
      break;
    default:
      d = { x: r.x, y: r.y };
  }
  switch (oo(t)) {
    case "start":
      d[s] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      d[s] += h * (n && u ? -1 : 1);
      break;
  }
  return d;
}
const Ww = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: s,
    } = n,
    l = i.filter(Boolean),
    a = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: c, y: f } = Bd(u, r, a),
    h = r,
    d = {},
    S = 0;
  for (let v = 0; v < l.length; v++) {
    const { name: w, fn: m } = l[v],
      {
        x: p,
        y: g,
        data: E,
        reset: k,
      } = await m({
        x: c,
        y: f,
        initialPlacement: r,
        placement: h,
        strategy: o,
        middlewareData: d,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (c = p ?? c),
      (f = g ?? f),
      (d = { ...d, [w]: { ...d[w], ...E } }),
      k &&
        S <= 50 &&
        (S++,
        typeof k == "object" &&
          (k.placement && (h = k.placement),
          k.rects &&
            (u =
              k.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : k.rects),
          ({ x: c, y: f } = Bd(u, h, a))),
        (v = -1));
  }
  return { x: c, y: f, placement: h, strategy: o, middlewareData: d };
};
async function qo(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: l, strategy: a } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: f = "floating",
      altBoundary: h = !1,
      padding: d = 0,
    } = Gt(t, e),
    S = jm(d),
    w = l[h ? (f === "floating" ? "reference" : "floating") : f],
    m = bs(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null ||
          n
            ? w
            : w.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(l.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: a,
      })
    ),
    p =
      f === "floating"
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    g = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(l.floating)),
    E = (await (i.isElement == null ? void 0 : i.isElement(g)))
      ? (await (i.getScale == null ? void 0 : i.getScale(g))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    k = bs(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: p,
            offsetParent: g,
            strategy: a,
          })
        : p
    );
  return {
    top: (m.top - k.top + S.top) / E.y,
    bottom: (k.bottom - m.bottom + S.bottom) / E.y,
    left: (m.left - k.left + S.left) / E.x,
    right: (k.right - m.right + S.right) / E.x,
  };
}
const Vw = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: s,
          elements: l,
          middlewareData: a,
        } = t,
        { element: u, padding: c = 0 } = Gt(e, t) || {};
      if (u == null) return {};
      const f = jm(c),
        h = { x: n, y: r },
        d = nc(o),
        S = tc(d),
        v = await s.getDimensions(u),
        w = d === "y",
        m = w ? "top" : "left",
        p = w ? "bottom" : "right",
        g = w ? "clientHeight" : "clientWidth",
        E = i.reference[S] + i.reference[d] - h[d] - i.floating[S],
        k = h[d] - i.reference[d],
        C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let b = C ? C[g] : 0;
      (!b || !(await (s.isElement == null ? void 0 : s.isElement(C)))) &&
        (b = l.floating[g] || i.floating[S]);
      const R = E / 2 - k / 2,
        _ = b / 2 - v[S] / 2 - 1,
        A = _n(f[m], _),
        F = _n(f[p], _),
        D = A,
        Q = b - v[S] - F,
        M = b / 2 - v[S] / 2 + R,
        G = Wa(D, M, Q),
        $ =
          !a.arrow &&
          oo(o) != null &&
          M !== G &&
          i.reference[S] / 2 - (M < D ? A : F) - v[S] / 2 < 0,
        W = $ ? (M < D ? M - D : M - Q) : 0;
      return {
        [d]: h[d] + W,
        data: {
          [d]: G,
          centerOffset: M - G - W,
          ...($ && { alignmentOffset: W }),
        },
        reset: $,
      };
    },
  }),
  Hw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: s,
              initialPlacement: l,
              platform: a,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: f = !0,
              fallbackPlacements: h,
              fallbackStrategy: d = "bestFit",
              fallbackAxisSideDirection: S = "none",
              flipAlignment: v = !0,
              ...w
            } = Gt(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const m = qt(o),
            p = jt(l),
            g = qt(l) === l,
            E = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
            k = h || (g || !v ? [Cs(l)] : Dw(l)),
            C = S !== "none";
          !h && C && k.push(...Uw(l, v, S, E));
          const b = [l, ...k],
            R = await qo(t, w),
            _ = [];
          let A = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((c && _.push(R[m]), f)) {
            const M = Iw(o, s, E);
            _.push(R[M[0]], R[M[1]]);
          }
          if (
            ((A = [...A, { placement: o, overflows: _ }]),
            !_.every((M) => M <= 0))
          ) {
            var F, D;
            const M = (((F = i.flip) == null ? void 0 : F.index) || 0) + 1,
              G = b[M];
            if (
              G &&
              (!(f === "alignment" ? p !== jt(G) : !1) ||
                A.every((T) => T.overflows[0] > 0 && jt(T.placement) === p))
            )
              return {
                data: { index: M, overflows: A },
                reset: { placement: G },
              };
            let $ =
              (D = A.filter((W) => W.overflows[0] <= 0).sort(
                (W, T) => W.overflows[1] - T.overflows[1]
              )[0]) == null
                ? void 0
                : D.placement;
            if (!$)
              switch (d) {
                case "bestFit": {
                  var Q;
                  const W =
                    (Q = A.filter((T) => {
                      if (C) {
                        const N = jt(T.placement);
                        return N === p || N === "y";
                      }
                      return !0;
                    })
                      .map((T) => [
                        T.placement,
                        T.overflows
                          .filter((N) => N > 0)
                          .reduce((N, L) => N + L, 0),
                      ])
                      .sort((T, N) => T[1] - N[1])[0]) == null
                      ? void 0
                      : Q[0];
                  W && ($ = W);
                  break;
                }
                case "initialPlacement":
                  $ = l;
                  break;
              }
            if (o !== $) return { reset: { placement: $ } };
          }
          return {};
        },
      }
    );
  };
function Wd(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Vd(e) {
  return Aw.some((t) => e[t] >= 0);
}
const Qw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = "referenceHidden", ...o } = Gt(e, t);
          switch (r) {
            case "referenceHidden": {
              const i = await qo(t, { ...o, elementContext: "reference" }),
                s = Wd(i, n.reference);
              return {
                data: { referenceHiddenOffsets: s, referenceHidden: Vd(s) },
              };
            }
            case "escaped": {
              const i = await qo(t, { ...o, altBoundary: !0 }),
                s = Wd(i, n.floating);
              return { data: { escapedOffsets: s, escaped: Vd(s) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Om = new Set(["left", "top"]);
async function Kw(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = qt(n),
    l = oo(n),
    a = jt(n) === "y",
    u = Om.has(s) ? -1 : 1,
    c = i && a ? -1 : 1,
    f = Gt(t, e);
  let {
    mainAxis: h,
    crossAxis: d,
    alignmentAxis: S,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis,
      };
  return (
    l && typeof S == "number" && (d = l === "end" ? S * -1 : S),
    a ? { x: d * c, y: h * u } : { x: h * u, y: d * c }
  );
}
const Yw = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: s, middlewareData: l } = t,
            a = await Kw(t, e);
          return s === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: i + a.y, data: { ...a, placement: s } };
        },
      }
    );
  },
  Gw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: l = {
                fn: (w) => {
                  let { x: m, y: p } = w;
                  return { x: m, y: p };
                },
              },
              ...a
            } = Gt(e, t),
            u = { x: n, y: r },
            c = await qo(t, a),
            f = jt(qt(o)),
            h = ec(f);
          let d = u[h],
            S = u[f];
          if (i) {
            const w = h === "y" ? "top" : "left",
              m = h === "y" ? "bottom" : "right",
              p = d + c[w],
              g = d - c[m];
            d = Wa(p, d, g);
          }
          if (s) {
            const w = f === "y" ? "top" : "left",
              m = f === "y" ? "bottom" : "right",
              p = S + c[w],
              g = S - c[m];
            S = Wa(p, S, g);
          }
          const v = l.fn({ ...t, [h]: d, [f]: S });
          return {
            ...v,
            data: { x: v.x - n, y: v.y - r, enabled: { [h]: i, [f]: s } },
          };
        },
      }
    );
  },
  qw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: l = 0, mainAxis: a = !0, crossAxis: u = !0 } = Gt(e, t),
            c = { x: n, y: r },
            f = jt(o),
            h = ec(f);
          let d = c[h],
            S = c[f];
          const v = Gt(l, t),
            w =
              typeof v == "number"
                ? { mainAxis: v, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...v };
          if (a) {
            const g = h === "y" ? "height" : "width",
              E = i.reference[h] - i.floating[g] + w.mainAxis,
              k = i.reference[h] + i.reference[g] - w.mainAxis;
            d < E ? (d = E) : d > k && (d = k);
          }
          if (u) {
            var m, p;
            const g = h === "y" ? "width" : "height",
              E = Om.has(qt(o)),
              k =
                i.reference[f] -
                i.floating[g] +
                ((E && ((m = s.offset) == null ? void 0 : m[f])) || 0) +
                (E ? 0 : w.crossAxis),
              C =
                i.reference[f] +
                i.reference[g] +
                (E ? 0 : ((p = s.offset) == null ? void 0 : p[f]) || 0) -
                (E ? w.crossAxis : 0);
            S < k ? (S = k) : S > C && (S = C);
          }
          return { [h]: d, [f]: S };
        },
      }
    );
  },
  Xw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: i, platform: s, elements: l } = t,
            { apply: a = () => {}, ...u } = Gt(e, t),
            c = await qo(t, u),
            f = qt(o),
            h = oo(o),
            d = jt(o) === "y",
            { width: S, height: v } = i.floating;
          let w, m;
          f === "top" || f === "bottom"
            ? ((w = f),
              (m =
                h ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(l.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((m = f), (w = h === "end" ? "top" : "bottom"));
          const p = v - c.top - c.bottom,
            g = S - c.left - c.right,
            E = _n(v - c[w], p),
            k = _n(S - c[m], g),
            C = !t.middlewareData.shift;
          let b = E,
            R = k;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (R = g),
            (r = t.middlewareData.shift) != null && r.enabled.y && (b = p),
            C && !h)
          ) {
            const A = Qe(c.left, 0),
              F = Qe(c.right, 0),
              D = Qe(c.top, 0),
              Q = Qe(c.bottom, 0);
            d
              ? (R = S - 2 * (A !== 0 || F !== 0 ? A + F : Qe(c.left, c.right)))
              : (b =
                  v - 2 * (D !== 0 || Q !== 0 ? D + Q : Qe(c.top, c.bottom)));
          }
          await a({ ...t, availableWidth: R, availableHeight: b });
          const _ = await s.getDimensions(l.floating);
          return S !== _.width || v !== _.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Gs() {
  return typeof window < "u";
}
function io(e) {
  return Am(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ge(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function It(e) {
  var t;
  return (t = (Am(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Am(e) {
  return Gs() ? e instanceof Node || e instanceof Ge(e).Node : !1;
}
function Et(e) {
  return Gs() ? e instanceof Element || e instanceof Ge(e).Element : !1;
}
function Mt(e) {
  return Gs() ? e instanceof HTMLElement || e instanceof Ge(e).HTMLElement : !1;
}
function Hd(e) {
  return !Gs() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Ge(e).ShadowRoot;
}
const Jw = new Set(["inline", "contents"]);
function ui(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = kt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Jw.has(o);
}
const Zw = new Set(["table", "td", "th"]);
function ex(e) {
  return Zw.has(io(e));
}
const tx = [":popover-open", ":modal"];
function qs(e) {
  return tx.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const nx = ["transform", "translate", "scale", "rotate", "perspective"],
  rx = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  ox = ["paint", "layout", "strict", "content"];
function rc(e) {
  const t = oc(),
    n = Et(e) ? kt(e) : e;
  return (
    nx.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    rx.some((r) => (n.willChange || "").includes(r)) ||
    ox.some((r) => (n.contain || "").includes(r))
  );
}
function ix(e) {
  let t = Mn(e);
  for (; Mt(t) && !Jr(t); ) {
    if (rc(t)) return t;
    if (qs(t)) return null;
    t = Mn(t);
  }
  return null;
}
function oc() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const sx = new Set(["html", "body", "#document"]);
function Jr(e) {
  return sx.has(io(e));
}
function kt(e) {
  return Ge(e).getComputedStyle(e);
}
function Xs(e) {
  return Et(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Mn(e) {
  if (io(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Hd(e) && e.host) || It(e);
  return Hd(t) ? t.host : t;
}
function _m(e) {
  const t = Mn(e);
  return Jr(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Mt(t) && ui(t)
    ? t
    : _m(t);
}
function Xo(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = _m(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = Ge(o);
  if (i) {
    const l = Ha(s);
    return t.concat(
      s,
      s.visualViewport || [],
      ui(o) ? o : [],
      l && n ? Xo(l) : []
    );
  }
  return t.concat(o, Xo(o, [], n));
}
function Ha(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Mm(e) {
  const t = kt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = Mt(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    l = ks(n) !== i || ks(r) !== s;
  return l && ((n = i), (r = s)), { width: n, height: r, $: l };
}
function ic(e) {
  return Et(e) ? e : e.contextElement;
}
function Lr(e) {
  const t = ic(e);
  if (!Mt(t)) return _t(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = Mm(t);
  let s = (i ? ks(n.width) : n.width) / r,
    l = (i ? ks(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: s, y: l }
  );
}
const lx = _t(0);
function Lm(e) {
  const t = Ge(e);
  return !oc() || !t.visualViewport
    ? lx
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function ax(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== Ge(e)) ? !1 : t;
}
function ir(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = ic(e);
  let s = _t(1);
  t && (r ? Et(r) && (s = Lr(r)) : (s = Lr(e)));
  const l = ax(i, n, r) ? Lm(i) : _t(0);
  let a = (o.left + l.x) / s.x,
    u = (o.top + l.y) / s.y,
    c = o.width / s.x,
    f = o.height / s.y;
  if (i) {
    const h = Ge(i),
      d = r && Et(r) ? Ge(r) : r;
    let S = h,
      v = Ha(S);
    for (; v && r && d !== S; ) {
      const w = Lr(v),
        m = v.getBoundingClientRect(),
        p = kt(v),
        g = m.left + (v.clientLeft + parseFloat(p.paddingLeft)) * w.x,
        E = m.top + (v.clientTop + parseFloat(p.paddingTop)) * w.y;
      (a *= w.x),
        (u *= w.y),
        (c *= w.x),
        (f *= w.y),
        (a += g),
        (u += E),
        (S = Ge(v)),
        (v = Ha(S));
    }
  }
  return bs({ width: c, height: f, x: a, y: u });
}
function sc(e, t) {
  const n = Xs(e).scrollLeft;
  return t ? t.left + n : ir(It(e)).left + n;
}
function Im(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    o = r.left + t.scrollLeft - (n ? 0 : sc(e, r)),
    i = r.top + t.scrollTop;
  return { x: o, y: i };
}
function ux(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    s = It(r),
    l = t ? qs(t.floating) : !1;
  if (r === s || (l && i)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    u = _t(1);
  const c = _t(0),
    f = Mt(r);
  if (
    (f || (!f && !i)) &&
    ((io(r) !== "body" || ui(s)) && (a = Xs(r)), Mt(r))
  ) {
    const d = ir(r);
    (u = Lr(r)), (c.x = d.x + r.clientLeft), (c.y = d.y + r.clientTop);
  }
  const h = s && !f && !i ? Im(s, a, !0) : _t(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + c.x + h.x,
    y: n.y * u.y - a.scrollTop * u.y + c.y + h.y,
  };
}
function cx(e) {
  return Array.from(e.getClientRects());
}
function dx(e) {
  const t = It(e),
    n = Xs(e),
    r = e.ownerDocument.body,
    o = Qe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = Qe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + sc(e);
  const l = -n.scrollTop;
  return (
    kt(r).direction === "rtl" && (s += Qe(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: s, y: l }
  );
}
function fx(e, t) {
  const n = Ge(e),
    r = It(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    l = 0,
    a = 0;
  if (o) {
    (i = o.width), (s = o.height);
    const u = oc();
    (!u || (u && t === "fixed")) && ((l = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: i, height: s, x: l, y: a };
}
const px = new Set(["absolute", "fixed"]);
function hx(e, t) {
  const n = ir(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = Mt(e) ? Lr(e) : _t(1),
    s = e.clientWidth * i.x,
    l = e.clientHeight * i.y,
    a = o * i.x,
    u = r * i.y;
  return { width: s, height: l, x: a, y: u };
}
function Qd(e, t, n) {
  let r;
  if (t === "viewport") r = fx(e, n);
  else if (t === "document") r = dx(It(e));
  else if (Et(t)) r = hx(t, n);
  else {
    const o = Lm(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return bs(r);
}
function Dm(e, t) {
  const n = Mn(e);
  return n === t || !Et(n) || Jr(n)
    ? !1
    : kt(n).position === "fixed" || Dm(n, t);
}
function mx(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Xo(e, [], !1).filter((l) => Et(l) && io(l) !== "body"),
    o = null;
  const i = kt(e).position === "fixed";
  let s = i ? Mn(e) : e;
  for (; Et(s) && !Jr(s); ) {
    const l = kt(s),
      a = rc(s);
    !a && l.position === "fixed" && (o = null),
      (
        i
          ? !a && !o
          : (!a && l.position === "static" && !!o && px.has(o.position)) ||
            (ui(s) && !a && Dm(e, s))
      )
        ? (r = r.filter((c) => c !== s))
        : (o = l),
      (s = Mn(s));
  }
  return t.set(e, r), r;
}
function gx(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? qs(t)
          ? []
          : mx(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = s[0],
    a = s.reduce((u, c) => {
      const f = Qd(t, c, o);
      return (
        (u.top = Qe(f.top, u.top)),
        (u.right = _n(f.right, u.right)),
        (u.bottom = _n(f.bottom, u.bottom)),
        (u.left = Qe(f.left, u.left)),
        u
      );
    }, Qd(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function vx(e) {
  const { width: t, height: n } = Mm(e);
  return { width: t, height: n };
}
function yx(e, t, n) {
  const r = Mt(t),
    o = It(t),
    i = n === "fixed",
    s = ir(e, !0, i, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = _t(0);
  function u() {
    a.x = sc(o);
  }
  if (r || (!r && !i))
    if (((io(t) !== "body" || ui(o)) && (l = Xs(t)), r)) {
      const d = ir(t, !0, i, t);
      (a.x = d.x + t.clientLeft), (a.y = d.y + t.clientTop);
    } else o && u();
  i && !r && o && u();
  const c = o && !r && !i ? Im(o, l) : _t(0),
    f = s.left + l.scrollLeft - a.x - c.x,
    h = s.top + l.scrollTop - a.y - c.y;
  return { x: f, y: h, width: s.width, height: s.height };
}
function $l(e) {
  return kt(e).position === "static";
}
function Kd(e, t) {
  if (!Mt(e) || kt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return It(e) === n && (n = n.ownerDocument.body), n;
}
function zm(e, t) {
  const n = Ge(e);
  if (qs(e)) return n;
  if (!Mt(e)) {
    let o = Mn(e);
    for (; o && !Jr(o); ) {
      if (Et(o) && !$l(o)) return o;
      o = Mn(o);
    }
    return n;
  }
  let r = Kd(e, t);
  for (; r && ex(r) && $l(r); ) r = Kd(r, t);
  return r && Jr(r) && $l(r) && !rc(r) ? n : r || ix(e) || n;
}
const wx = async function (e) {
  const t = this.getOffsetParent || zm,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: yx(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function xx(e) {
  return kt(e).direction === "rtl";
}
const Sx = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ux,
  getDocumentElement: It,
  getClippingRect: gx,
  getOffsetParent: zm,
  getElementRects: wx,
  getClientRects: cx,
  getDimensions: vx,
  getScale: Lr,
  isElement: Et,
  isRTL: xx,
};
function Fm(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function Ex(e, t) {
  let n = null,
    r;
  const o = It(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
  }
  function s(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), i();
    const u = e.getBoundingClientRect(),
      { left: c, top: f, width: h, height: d } = u;
    if ((l || t(), !h || !d)) return;
    const S = Mi(f),
      v = Mi(o.clientWidth - (c + h)),
      w = Mi(o.clientHeight - (f + d)),
      m = Mi(c),
      g = {
        rootMargin: -S + "px " + -v + "px " + -w + "px " + -m + "px",
        threshold: Qe(0, _n(1, a)) || 1,
      };
    let E = !0;
    function k(C) {
      const b = C[0].intersectionRatio;
      if (b !== a) {
        if (!E) return s();
        b
          ? s(!1, b)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      b === 1 && !Fm(u, e.getBoundingClientRect()) && s(), (E = !1);
    }
    try {
      n = new IntersectionObserver(k, { ...g, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(k, g);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function kx(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    u = ic(e),
    c = o || i ? [...(u ? Xo(u) : []), ...Xo(t)] : [];
  c.forEach((m) => {
    o && m.addEventListener("scroll", n, { passive: !0 }),
      i && m.addEventListener("resize", n);
  });
  const f = u && l ? Ex(u, n) : null;
  let h = -1,
    d = null;
  s &&
    ((d = new ResizeObserver((m) => {
      let [p] = m;
      p &&
        p.target === u &&
        d &&
        (d.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var g;
          (g = d) == null || g.observe(t);
        }))),
        n();
    })),
    u && !a && d.observe(u),
    d.observe(t));
  let S,
    v = a ? ir(e) : null;
  a && w();
  function w() {
    const m = ir(e);
    v && !Fm(v, m) && n(), (v = m), (S = requestAnimationFrame(w));
  }
  return (
    n(),
    () => {
      var m;
      c.forEach((p) => {
        o && p.removeEventListener("scroll", n),
          i && p.removeEventListener("resize", n);
      }),
        f == null || f(),
        (m = d) == null || m.disconnect(),
        (d = null),
        a && cancelAnimationFrame(S);
    }
  );
}
const Cx = Yw,
  bx = Gw,
  Px = Hw,
  Tx = Xw,
  Nx = Qw,
  Yd = Vw,
  Rx = qw,
  jx = (e, t, n) => {
    const r = new Map(),
      o = { platform: Sx, ...n },
      i = { ...o.platform, _c: r };
    return Ww(e, t, { ...o, platform: i });
  };
var Ox = typeof document < "u",
  Ax = function () {},
  Ji = Ox ? x.useLayoutEffect : Ax;
function Ps(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Ps(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Ps(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function $m(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Gd(e, t) {
  const n = $m(e);
  return Math.round(t * n) / n;
}
function Ul(e) {
  const t = x.useRef(e);
  return (
    Ji(() => {
      t.current = e;
    }),
    t
  );
}
function _x(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: s } = {},
      transform: l = !0,
      whileElementsMounted: a,
      open: u,
    } = e,
    [c, f] = x.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [h, d] = x.useState(r);
  Ps(h, r) || d(r);
  const [S, v] = x.useState(null),
    [w, m] = x.useState(null),
    p = x.useCallback((T) => {
      T !== C.current && ((C.current = T), v(T));
    }, []),
    g = x.useCallback((T) => {
      T !== b.current && ((b.current = T), m(T));
    }, []),
    E = i || S,
    k = s || w,
    C = x.useRef(null),
    b = x.useRef(null),
    R = x.useRef(c),
    _ = a != null,
    A = Ul(a),
    F = Ul(o),
    D = Ul(u),
    Q = x.useCallback(() => {
      if (!C.current || !b.current) return;
      const T = { placement: t, strategy: n, middleware: h };
      F.current && (T.platform = F.current),
        jx(C.current, b.current, T).then((N) => {
          const L = { ...N, isPositioned: D.current !== !1 };
          M.current &&
            !Ps(R.current, L) &&
            ((R.current = L),
            li.flushSync(() => {
              f(L);
            }));
        });
    }, [h, t, n, F, D]);
  Ji(() => {
    u === !1 &&
      R.current.isPositioned &&
      ((R.current.isPositioned = !1), f((T) => ({ ...T, isPositioned: !1 })));
  }, [u]);
  const M = x.useRef(!1);
  Ji(
    () => (
      (M.current = !0),
      () => {
        M.current = !1;
      }
    ),
    []
  ),
    Ji(() => {
      if ((E && (C.current = E), k && (b.current = k), E && k)) {
        if (A.current) return A.current(E, k, Q);
        Q();
      }
    }, [E, k, Q, A, _]);
  const G = x.useMemo(
      () => ({ reference: C, floating: b, setReference: p, setFloating: g }),
      [p, g]
    ),
    $ = x.useMemo(() => ({ reference: E, floating: k }), [E, k]),
    W = x.useMemo(() => {
      const T = { position: n, left: 0, top: 0 };
      if (!$.floating) return T;
      const N = Gd($.floating, c.x),
        L = Gd($.floating, c.y);
      return l
        ? {
            ...T,
            transform: "translate(" + N + "px, " + L + "px)",
            ...($m($.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: N, top: L };
    }, [n, l, $.floating, c.x, c.y]);
  return x.useMemo(
    () => ({ ...c, update: Q, refs: G, elements: $, floatingStyles: W }),
    [c, Q, G, $, W]
  );
}
const Mx = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Yd({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? Yd({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  Lx = (e, t) => ({ ...Cx(e), options: [e, t] }),
  Ix = (e, t) => ({ ...bx(e), options: [e, t] }),
  Dx = (e, t) => ({ ...Rx(e), options: [e, t] }),
  zx = (e, t) => ({ ...Px(e), options: [e, t] }),
  Fx = (e, t) => ({ ...Tx(e), options: [e, t] }),
  $x = (e, t) => ({ ...Nx(e), options: [e, t] }),
  Ux = (e, t) => ({ ...Mx(e), options: [e, t] });
var Bx = "Arrow",
  Um = x.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return y.jsx(Ve.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : y.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Um.displayName = Bx;
var Wx = Um;
function Vx(e) {
  const [t, n] = x.useState(void 0);
  return (
    An(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, l;
          if ("borderBoxSize" in i) {
            const a = i.borderBoxSize,
              u = Array.isArray(a) ? a[0] : a;
            (s = u.inlineSize), (l = u.blockSize);
          } else (s = e.offsetWidth), (l = e.offsetHeight);
          n({ width: s, height: l });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var Bm = "Popper",
  [Wm, Vm] = Qs(Bm),
  [dE, Hm] = Wm(Bm),
  Qm = "PopperAnchor",
  Km = x.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = Hm(Qm, n),
      s = x.useRef(null),
      l = St(t, s);
    return (
      x.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : y.jsx(Ve.div, { ...o, ref: l })
    );
  });
Km.displayName = Qm;
var lc = "PopperContent",
  [Hx, Qx] = Wm(lc),
  Ym = x.forwardRef((e, t) => {
    var Z, ur, Jt, zn, Zt, cr;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: s = 0,
        arrowPadding: l = 0,
        avoidCollisions: a = !0,
        collisionBoundary: u = [],
        collisionPadding: c = 0,
        sticky: f = "partial",
        hideWhenDetached: h = !1,
        updatePositionStrategy: d = "optimized",
        onPlaced: S,
        ...v
      } = e,
      w = Hm(lc, n),
      [m, p] = x.useState(null),
      g = St(t, (en) => p(en)),
      [E, k] = x.useState(null),
      C = Vx(E),
      b = (C == null ? void 0 : C.width) ?? 0,
      R = (C == null ? void 0 : C.height) ?? 0,
      _ = r + (i !== "center" ? "-" + i : ""),
      A =
        typeof c == "number"
          ? c
          : { top: 0, right: 0, bottom: 0, left: 0, ...c },
      F = Array.isArray(u) ? u : [u],
      D = F.length > 0,
      Q = { padding: A, boundary: F.filter(Yx), altBoundary: D },
      {
        refs: M,
        floatingStyles: G,
        placement: $,
        isPositioned: W,
        middlewareData: T,
      } = _x({
        strategy: "fixed",
        placement: _,
        whileElementsMounted: (...en) =>
          kx(...en, { animationFrame: d === "always" }),
        elements: { reference: w.anchor },
        middleware: [
          Lx({ mainAxis: o + R, alignmentAxis: s }),
          a &&
            Ix({
              mainAxis: !0,
              crossAxis: !1,
              limiter: f === "partial" ? Dx() : void 0,
              ...Q,
            }),
          a && zx({ ...Q }),
          Fx({
            ...Q,
            apply: ({
              elements: en,
              rects: ci,
              availableWidth: il,
              availableHeight: di,
            }) => {
              const { width: sl, height: so } = ci.reference,
                dr = en.floating.style;
              dr.setProperty("--radix-popper-available-width", `${il}px`),
                dr.setProperty("--radix-popper-available-height", `${di}px`),
                dr.setProperty("--radix-popper-anchor-width", `${sl}px`),
                dr.setProperty("--radix-popper-anchor-height", `${so}px`);
            },
          }),
          E && Ux({ element: E, padding: l }),
          Gx({ arrowWidth: b, arrowHeight: R }),
          h && $x({ strategy: "referenceHidden", ...Q }),
        ],
      }),
      [N, L] = Xm($),
      V = On(S);
    An(() => {
      W && (V == null || V());
    }, [W, V]);
    const z = (Z = T.arrow) == null ? void 0 : Z.x,
      K = (ur = T.arrow) == null ? void 0 : ur.y,
      q = ((Jt = T.arrow) == null ? void 0 : Jt.centerOffset) !== 0,
      [he, Ce] = x.useState();
    return (
      An(() => {
        m && Ce(window.getComputedStyle(m).zIndex);
      }, [m]),
      y.jsx("div", {
        ref: M.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...G,
          transform: W ? G.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: he,
          "--radix-popper-transform-origin": [
            (zn = T.transformOrigin) == null ? void 0 : zn.x,
            (Zt = T.transformOrigin) == null ? void 0 : Zt.y,
          ].join(" "),
          ...(((cr = T.hide) == null ? void 0 : cr.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: y.jsx(Hx, {
          scope: n,
          placedSide: N,
          onArrowChange: k,
          arrowX: z,
          arrowY: K,
          shouldHideArrow: q,
          children: y.jsx(Ve.div, {
            "data-side": N,
            "data-align": L,
            ...v,
            ref: g,
            style: { ...v.style, animation: W ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Ym.displayName = lc;
var Gm = "PopperArrow",
  Kx = { top: "bottom", right: "left", bottom: "top", left: "right" },
  qm = x.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = Qx(Gm, r),
      s = Kx[i.placedSide];
    return y.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: y.jsx(Wx, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
qm.displayName = Gm;
function Yx(e) {
  return e !== null;
}
var Gx = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, m, p;
    const { placement: n, rects: r, middlewareData: o } = t,
      s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0,
      l = s ? 0 : e.arrowWidth,
      a = s ? 0 : e.arrowHeight,
      [u, c] = Xm(n),
      f = { start: "0%", center: "50%", end: "100%" }[c],
      h = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + l / 2,
      d = (((p = o.arrow) == null ? void 0 : p.y) ?? 0) + a / 2;
    let S = "",
      v = "";
    return (
      u === "bottom"
        ? ((S = s ? f : `${h}px`), (v = `${-a}px`))
        : u === "top"
        ? ((S = s ? f : `${h}px`), (v = `${r.floating.height + a}px`))
        : u === "right"
        ? ((S = `${-a}px`), (v = s ? f : `${d}px`))
        : u === "left" &&
          ((S = `${r.floating.width + a}px`), (v = s ? f : `${d}px`)),
      { data: { x: S, y: v } }
    );
  },
});
function Xm(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var qx = Km,
  Xx = Ym,
  Jx = qm,
  [Js, fE] = Qs("Tooltip", [Vm]),
  ac = Vm(),
  Jm = "TooltipProvider",
  Zx = 700,
  qd = "tooltip.open",
  [e2, Zm] = Js(Jm),
  eg = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = Zx,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: i,
      } = e,
      s = x.useRef(!0),
      l = x.useRef(!1),
      a = x.useRef(0);
    return (
      x.useEffect(() => {
        const u = a.current;
        return () => window.clearTimeout(u);
      }, []),
      y.jsx(e2, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: x.useCallback(() => {
          window.clearTimeout(a.current), (s.current = !1);
        }, []),
        onClose: x.useCallback(() => {
          window.clearTimeout(a.current),
            (a.current = window.setTimeout(() => (s.current = !0), r));
        }, [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: x.useCallback((u) => {
          l.current = u;
        }, []),
        disableHoverableContent: o,
        children: i,
      })
    );
  };
eg.displayName = Jm;
var tg = "Tooltip",
  [pE, Zs] = Js(tg),
  Qa = "TooltipTrigger",
  t2 = x.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Zs(Qa, n),
      i = Zm(Qa, n),
      s = ac(n),
      l = x.useRef(null),
      a = St(t, l, o.onTriggerChange),
      u = x.useRef(!1),
      c = x.useRef(!1),
      f = x.useCallback(() => (u.current = !1), []);
    return (
      x.useEffect(
        () => () => document.removeEventListener("pointerup", f),
        [f]
      ),
      y.jsx(qx, {
        asChild: !0,
        ...s,
        children: y.jsx(Ve.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: a,
          onPointerMove: ve(e.onPointerMove, (h) => {
            h.pointerType !== "touch" &&
              !c.current &&
              !i.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (c.current = !0));
          }),
          onPointerLeave: ve(e.onPointerLeave, () => {
            o.onTriggerLeave(), (c.current = !1);
          }),
          onPointerDown: ve(e.onPointerDown, () => {
            o.open && o.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", f, { once: !0 });
          }),
          onFocus: ve(e.onFocus, () => {
            u.current || o.onOpen();
          }),
          onBlur: ve(e.onBlur, o.onClose),
          onClick: ve(e.onClick, o.onClose),
        }),
      })
    );
  });
t2.displayName = Qa;
var n2 = "TooltipPortal",
  [hE, r2] = Js(n2, { forceMount: void 0 }),
  Zr = "TooltipContent",
  ng = x.forwardRef((e, t) => {
    const n = r2(Zr, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
      s = Zs(Zr, e.__scopeTooltip);
    return y.jsx(Gu, {
      present: r || s.open,
      children: s.disableHoverableContent
        ? y.jsx(rg, { side: o, ...i, ref: t })
        : y.jsx(o2, { side: o, ...i, ref: t }),
    });
  }),
  o2 = x.forwardRef((e, t) => {
    const n = Zs(Zr, e.__scopeTooltip),
      r = Zm(Zr, e.__scopeTooltip),
      o = x.useRef(null),
      i = St(t, o),
      [s, l] = x.useState(null),
      { trigger: a, onClose: u } = n,
      c = o.current,
      { onPointerInTransitChange: f } = r,
      h = x.useCallback(() => {
        l(null), f(!1);
      }, [f]),
      d = x.useCallback(
        (S, v) => {
          const w = S.currentTarget,
            m = { x: S.clientX, y: S.clientY },
            p = u2(m, w.getBoundingClientRect()),
            g = c2(m, p),
            E = d2(v.getBoundingClientRect()),
            k = p2([...g, ...E]);
          l(k), f(!0);
        },
        [f]
      );
    return (
      x.useEffect(() => () => h(), [h]),
      x.useEffect(() => {
        if (a && c) {
          const S = (w) => d(w, c),
            v = (w) => d(w, a);
          return (
            a.addEventListener("pointerleave", S),
            c.addEventListener("pointerleave", v),
            () => {
              a.removeEventListener("pointerleave", S),
                c.removeEventListener("pointerleave", v);
            }
          );
        }
      }, [a, c, d, h]),
      x.useEffect(() => {
        if (s) {
          const S = (v) => {
            const w = v.target,
              m = { x: v.clientX, y: v.clientY },
              p =
                (a == null ? void 0 : a.contains(w)) ||
                (c == null ? void 0 : c.contains(w)),
              g = !f2(m, s);
            p ? h() : g && (h(), u());
          };
          return (
            document.addEventListener("pointermove", S),
            () => document.removeEventListener("pointermove", S)
          );
        }
      }, [a, c, s, u, h]),
      y.jsx(rg, { ...e, ref: i })
    );
  }),
  [i2, s2] = Js(tg, { isInside: !1 }),
  l2 = hy("TooltipContent"),
  rg = x.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        ...l
      } = e,
      a = Zs(Zr, n),
      u = ac(n),
      { onClose: c } = a;
    return (
      x.useEffect(
        () => (
          document.addEventListener(qd, c),
          () => document.removeEventListener(qd, c)
        ),
        [c]
      ),
      x.useEffect(() => {
        if (a.trigger) {
          const f = (h) => {
            const d = h.target;
            d != null && d.contains(a.trigger) && c();
          };
          return (
            window.addEventListener("scroll", f, { capture: !0 }),
            () => window.removeEventListener("scroll", f, { capture: !0 })
          );
        }
      }, [a.trigger, c]),
      y.jsx(Yu, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: c,
        children: y.jsxs(Xx, {
          "data-state": a.stateAttribute,
          ...u,
          ...l,
          ref: t,
          style: {
            ...l.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            y.jsx(l2, { children: r }),
            y.jsx(i2, {
              scope: n,
              isInside: !0,
              children: y.jsx(Fy, {
                id: a.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
ng.displayName = Zr;
var og = "TooltipArrow",
  a2 = x.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = ac(n);
    return s2(og, n).isInside ? null : y.jsx(Jx, { ...o, ...r, ref: t });
  });
a2.displayName = og;
function u2(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function c2(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function d2(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function f2(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i],
      a = t[s],
      u = l.x,
      c = l.y,
      f = a.x,
      h = a.y;
    c > r != h > r && n < ((f - u) * (r - c)) / (h - c) + u && (o = !o);
  }
  return o;
}
function p2(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0
    ),
    h2(t)
  );
}
function h2(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        s = t[t.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        s = n[n.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var m2 = eg,
  ig = ng;
const g2 = m2,
  v2 = x.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    y.jsx(ig, {
      ref: r,
      sideOffset: t,
      className: ar(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n,
    })
  );
v2.displayName = ig.displayName;
var el = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  tl = typeof window > "u" || "Deno" in globalThis;
function pt() {}
function y2(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function w2(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function x2(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Ka(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function S2(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Xd(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: i,
    queryKey: s,
    stale: l,
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== uc(s, t.options)) return !1;
    } else if (!Zo(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const a = t.isActive();
    if ((n === "active" && !a) || (n === "inactive" && a)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||
    (o && o !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function Jd(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Jo(t.options.mutationKey) !== Jo(i)) return !1;
    } else if (!Zo(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function uc(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Jo)(e);
}
function Jo(e) {
  return JSON.stringify(e, (t, n) =>
    Ya(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n
  );
}
function Zo(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? Object.keys(t).every((n) => Zo(e[n], t[n]))
    : !1;
}
function sg(e, t) {
  if (e === t) return e;
  const n = Zd(e) && Zd(t);
  if (n || (Ya(e) && Ya(t))) {
    const r = n ? e : Object.keys(e),
      o = r.length,
      i = n ? t : Object.keys(t),
      s = i.length,
      l = n ? [] : {},
      a = new Set(r);
    let u = 0;
    for (let c = 0; c < s; c++) {
      const f = n ? c : i[c];
      ((!n && a.has(f)) || n) && e[f] === void 0 && t[f] === void 0
        ? ((l[f] = void 0), u++)
        : ((l[f] = sg(e[f], t[f])), l[f] === e[f] && e[f] !== void 0 && u++);
    }
    return o === s && u === o ? e : l;
  }
  return t;
}
function Zd(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Ya(e) {
  if (!ef(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !ef(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function ef(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function E2(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function k2(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? sg(e, t)
    : t;
}
function C2(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function b2(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var cc = Symbol();
function lg(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === cc
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var Qn,
  pn,
  Dr,
  Sf,
  P2 =
    ((Sf = class extends el {
      constructor() {
        super();
        J(this, Qn);
        J(this, pn);
        J(this, Dr);
        B(this, Dr, (t) => {
          if (!tl && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        P(this, pn) || this.setEventListener(P(this, Dr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = P(this, pn)) == null || t.call(this), B(this, pn, void 0));
      }
      setEventListener(t) {
        var n;
        B(this, Dr, t),
          (n = P(this, pn)) == null || n.call(this),
          B(
            this,
            pn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        P(this, Qn) !== t && (B(this, Qn, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof P(this, Qn) == "boolean"
          ? P(this, Qn)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Qn = new WeakMap()),
    (pn = new WeakMap()),
    (Dr = new WeakMap()),
    Sf),
  ag = new P2(),
  zr,
  hn,
  Fr,
  Ef,
  T2 =
    ((Ef = class extends el {
      constructor() {
        super();
        J(this, zr, !0);
        J(this, hn);
        J(this, Fr);
        B(this, Fr, (t) => {
          if (!tl && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        P(this, hn) || this.setEventListener(P(this, Fr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = P(this, hn)) == null || t.call(this), B(this, hn, void 0));
      }
      setEventListener(t) {
        var n;
        B(this, Fr, t),
          (n = P(this, hn)) == null || n.call(this),
          B(this, hn, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        P(this, zr) !== t &&
          (B(this, zr, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return P(this, zr);
      }
    }),
    (zr = new WeakMap()),
    (hn = new WeakMap()),
    (Fr = new WeakMap()),
    Ef),
  Ts = new T2();
function N2() {
  let e, t;
  const n = new Promise((o, i) => {
    (e = o), (t = i);
  });
  (n.status = "pending"), n.catch(() => {});
  function r(o) {
    Object.assign(n, o), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (o) => {
      r({ status: "fulfilled", value: o }), e(o);
    }),
    (n.reject = (o) => {
      r({ status: "rejected", reason: o }), t(o);
    }),
    n
  );
}
function R2(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function ug(e) {
  return (e ?? "online") === "online" ? Ts.isOnline() : !0;
}
var cg = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Bl(e) {
  return e instanceof cg;
}
function dg(e) {
  let t = !1,
    n = 0,
    r = !1,
    o;
  const i = N2(),
    s = (v) => {
      var w;
      r || (h(new cg(v)), (w = e.abort) == null || w.call(e));
    },
    l = () => {
      t = !0;
    },
    a = () => {
      t = !1;
    },
    u = () =>
      ag.isFocused() &&
      (e.networkMode === "always" || Ts.isOnline()) &&
      e.canRun(),
    c = () => ug(e.networkMode) && e.canRun(),
    f = (v) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onSuccess) == null || w.call(e, v),
        o == null || o(),
        i.resolve(v));
    },
    h = (v) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onError) == null || w.call(e, v),
        o == null || o(),
        i.reject(v));
    },
    d = () =>
      new Promise((v) => {
        var w;
        (o = (m) => {
          (r || u()) && v(m);
        }),
          (w = e.onPause) == null || w.call(e);
      }).then(() => {
        var v;
        (o = void 0), r || (v = e.onContinue) == null || v.call(e);
      }),
    S = () => {
      if (r) return;
      let v;
      const w = n === 0 ? e.initialPromise : void 0;
      try {
        v = w ?? e.fn();
      } catch (m) {
        v = Promise.reject(m);
      }
      Promise.resolve(v)
        .then(f)
        .catch((m) => {
          var C;
          if (r) return;
          const p = e.retry ?? (tl ? 0 : 3),
            g = e.retryDelay ?? R2,
            E = typeof g == "function" ? g(n, m) : g,
            k =
              p === !0 ||
              (typeof p == "number" && n < p) ||
              (typeof p == "function" && p(n, m));
          if (t || !k) {
            h(m);
            return;
          }
          n++,
            (C = e.onFail) == null || C.call(e, n, m),
            E2(E)
              .then(() => (u() ? void 0 : d()))
              .then(() => {
                t ? h(m) : S();
              });
        });
    };
  return {
    promise: i,
    cancel: s,
    continue: () => (o == null || o(), i),
    cancelRetry: l,
    continueRetry: a,
    canStart: c,
    start: () => (c() ? S() : d().then(S), i),
  };
}
var j2 = (e) => setTimeout(e, 0);
function O2() {
  let e = [],
    t = 0,
    n = (l) => {
      l();
    },
    r = (l) => {
      l();
    },
    o = j2;
  const i = (l) => {
      t
        ? e.push(l)
        : o(() => {
            n(l);
          });
    },
    s = () => {
      const l = e;
      (e = []),
        l.length &&
          o(() => {
            r(() => {
              l.forEach((a) => {
                n(a);
              });
            });
          });
    };
  return {
    batch: (l) => {
      let a;
      t++;
      try {
        a = l();
      } finally {
        t--, t || s();
      }
      return a;
    },
    batchCalls:
      (l) =>
      (...a) => {
        i(() => {
          l(...a);
        });
      },
    schedule: i,
    setNotifyFunction: (l) => {
      n = l;
    },
    setBatchNotifyFunction: (l) => {
      r = l;
    },
    setScheduler: (l) => {
      o = l;
    },
  };
}
var _e = O2(),
  Kn,
  kf,
  fg =
    ((kf = class {
      constructor() {
        J(this, Kn);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          w2(this.gcTime) &&
            B(
              this,
              Kn,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (tl ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        P(this, Kn) && (clearTimeout(P(this, Kn)), B(this, Kn, void 0));
      }
    }),
    (Kn = new WeakMap()),
    kf),
  $r,
  Yn,
  et,
  Gn,
  Ne,
  ei,
  qn,
  ht,
  zt,
  Cf,
  A2 =
    ((Cf = class extends fg {
      constructor(t) {
        super();
        J(this, ht);
        J(this, $r);
        J(this, Yn);
        J(this, et);
        J(this, Gn);
        J(this, Ne);
        J(this, ei);
        J(this, qn);
        B(this, qn, !1),
          B(this, ei, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          B(this, Gn, t.client),
          B(this, et, P(this, Gn).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          B(this, $r, M2(this.options)),
          (this.state = t.state ?? P(this, $r)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = P(this, Ne)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...P(this, ei), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          P(this, et).remove(this);
      }
      setData(t, n) {
        const r = k2(this.state.data, t, this.options);
        return (
          be(this, ht, zt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        be(this, ht, zt).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = P(this, Ne)) == null ? void 0 : r.promise;
        return (
          (o = P(this, Ne)) == null || o.cancel(t),
          n ? n.then(pt).catch(pt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(P(this, $r));
      }
      isActive() {
        return this.observers.some((t) => S2(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === cc ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => Ka(t.options.staleTime, this) === "static"
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
          ? !1
          : this.state.isInvalidated
          ? !0
          : !x2(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = P(this, Ne)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = P(this, Ne)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          P(this, et).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (P(this, Ne) &&
              (P(this, qn)
                ? P(this, Ne).cancel({ revert: !0 })
                : P(this, Ne).cancelRetry()),
            this.scheduleGc()),
          P(this, et).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          be(this, ht, zt).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var u, c, f;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (P(this, Ne))
            return P(this, Ne).continueRetry(), P(this, Ne).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const h = this.observers.find((d) => d.options.queryFn);
          h && this.setOptions(h.options);
        }
        const r = new AbortController(),
          o = (h) => {
            Object.defineProperty(h, "signal", {
              enumerable: !0,
              get: () => (B(this, qn, !0), r.signal),
            });
          },
          i = () => {
            const h = lg(this.options, n),
              S = (() => {
                const v = {
                  client: P(this, Gn),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return o(v), v;
              })();
            return (
              B(this, qn, !1),
              this.options.persister ? this.options.persister(h, S, this) : h(S)
            );
          },
          l = (() => {
            const h = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: P(this, Gn),
              state: this.state,
              fetchFn: i,
            };
            return o(h), h;
          })();
        (u = this.options.behavior) == null || u.onFetch(l, this),
          B(this, Yn, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((c = l.fetchOptions) == null ? void 0 : c.meta)) &&
            be(this, ht, zt).call(this, {
              type: "fetch",
              meta: (f = l.fetchOptions) == null ? void 0 : f.meta,
            });
        const a = (h) => {
          var d, S, v, w;
          (Bl(h) && h.silent) ||
            be(this, ht, zt).call(this, { type: "error", error: h }),
            Bl(h) ||
              ((S = (d = P(this, et).config).onError) == null ||
                S.call(d, h, this),
              (w = (v = P(this, et).config).onSettled) == null ||
                w.call(v, this.state.data, h, this)),
            this.scheduleGc();
        };
        return (
          B(
            this,
            Ne,
            dg({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: l.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (h) => {
                var d, S, v, w;
                if (h === void 0) {
                  a(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(h);
                } catch (m) {
                  a(m);
                  return;
                }
                (S = (d = P(this, et).config).onSuccess) == null ||
                  S.call(d, h, this),
                  (w = (v = P(this, et).config).onSettled) == null ||
                    w.call(v, h, this.state.error, this),
                  this.scheduleGc();
              },
              onError: a,
              onFail: (h, d) => {
                be(this, ht, zt).call(this, {
                  type: "failed",
                  failureCount: h,
                  error: d,
                });
              },
              onPause: () => {
                be(this, ht, zt).call(this, { type: "pause" });
              },
              onContinue: () => {
                be(this, ht, zt).call(this, { type: "continue" });
              },
              retry: l.options.retry,
              retryDelay: l.options.retryDelay,
              networkMode: l.options.networkMode,
              canRun: () => !0,
            })
          ),
          P(this, Ne).start()
        );
      }
    }),
    ($r = new WeakMap()),
    (Yn = new WeakMap()),
    (et = new WeakMap()),
    (Gn = new WeakMap()),
    (Ne = new WeakMap()),
    (ei = new WeakMap()),
    (qn = new WeakMap()),
    (ht = new WeakSet()),
    (zt = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ..._2(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return (
              B(this, Yn, void 0),
              {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!t.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const o = t.error;
            return Bl(o) && o.revert && P(this, Yn)
              ? { ...P(this, Yn), fetchStatus: "idle" }
              : {
                  ...r,
                  error: o,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        _e.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            P(this, et).notify({ query: this, type: "updated", action: t });
        });
    }),
    Cf);
function _2(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: ug(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function M2(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Pt,
  bf,
  L2 =
    ((bf = class extends el {
      constructor(t = {}) {
        super();
        J(this, Pt);
        (this.config = t), B(this, Pt, new Map());
      }
      build(t, n, r) {
        const o = n.queryKey,
          i = n.queryHash ?? uc(o, n);
        let s = this.get(i);
        return (
          s ||
            ((s = new A2({
              client: t,
              queryKey: o,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        P(this, Pt).has(t.queryHash) ||
          (P(this, Pt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = P(this, Pt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && P(this, Pt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        _e.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return P(this, Pt).get(t);
      }
      getAll() {
        return [...P(this, Pt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Xd(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => Xd(t, r)) : n;
      }
      notify(t) {
        _e.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        _e.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        _e.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Pt = new WeakMap()),
    bf),
  Tt,
  Oe,
  Xn,
  Nt,
  an,
  Pf,
  I2 =
    ((Pf = class extends fg {
      constructor(t) {
        super();
        J(this, Nt);
        J(this, Tt);
        J(this, Oe);
        J(this, Xn);
        (this.mutationId = t.mutationId),
          B(this, Oe, t.mutationCache),
          B(this, Tt, []),
          (this.state = t.state || D2()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        P(this, Tt).includes(t) ||
          (P(this, Tt).push(t),
          this.clearGcTimeout(),
          P(this, Oe).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        B(
          this,
          Tt,
          P(this, Tt).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          P(this, Oe).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        P(this, Tt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : P(this, Oe).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = P(this, Xn)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var i, s, l, a, u, c, f, h, d, S, v, w, m, p, g, E, k, C, b, R;
        const n = () => {
          be(this, Nt, an).call(this, { type: "continue" });
        };
        B(
          this,
          Xn,
          dg({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (_, A) => {
              be(this, Nt, an).call(this, {
                type: "failed",
                failureCount: _,
                error: A,
              });
            },
            onPause: () => {
              be(this, Nt, an).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => P(this, Oe).canRun(this),
          })
        );
        const r = this.state.status === "pending",
          o = !P(this, Xn).canStart();
        try {
          if (r) n();
          else {
            be(this, Nt, an).call(this, {
              type: "pending",
              variables: t,
              isPaused: o,
            }),
              await ((s = (i = P(this, Oe).config).onMutate) == null
                ? void 0
                : s.call(i, t, this));
            const A = await ((a = (l = this.options).onMutate) == null
              ? void 0
              : a.call(l, t));
            A !== this.state.context &&
              be(this, Nt, an).call(this, {
                type: "pending",
                context: A,
                variables: t,
                isPaused: o,
              });
          }
          const _ = await P(this, Xn).start();
          return (
            await ((c = (u = P(this, Oe).config).onSuccess) == null
              ? void 0
              : c.call(u, _, t, this.state.context, this)),
            await ((h = (f = this.options).onSuccess) == null
              ? void 0
              : h.call(f, _, t, this.state.context)),
            await ((S = (d = P(this, Oe).config).onSettled) == null
              ? void 0
              : S.call(
                  d,
                  _,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((w = (v = this.options).onSettled) == null
              ? void 0
              : w.call(v, _, null, t, this.state.context)),
            be(this, Nt, an).call(this, { type: "success", data: _ }),
            _
          );
        } catch (_) {
          try {
            throw (
              (await ((p = (m = P(this, Oe).config).onError) == null
                ? void 0
                : p.call(m, _, t, this.state.context, this)),
              await ((E = (g = this.options).onError) == null
                ? void 0
                : E.call(g, _, t, this.state.context)),
              await ((C = (k = P(this, Oe).config).onSettled) == null
                ? void 0
                : C.call(
                    k,
                    void 0,
                    _,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((R = (b = this.options).onSettled) == null
                ? void 0
                : R.call(b, void 0, _, t, this.state.context)),
              _)
            );
          } finally {
            be(this, Nt, an).call(this, { type: "error", error: _ });
          }
        } finally {
          P(this, Oe).runNext(this);
        }
      }
    }),
    (Tt = new WeakMap()),
    (Oe = new WeakMap()),
    (Xn = new WeakMap()),
    (Nt = new WeakSet()),
    (an = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        _e.batch(() => {
          P(this, Tt).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            P(this, Oe).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    Pf);
function D2() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Ut,
  mt,
  ti,
  Tf,
  z2 =
    ((Tf = class extends el {
      constructor(t = {}) {
        super();
        J(this, Ut);
        J(this, mt);
        J(this, ti);
        (this.config = t),
          B(this, Ut, new Set()),
          B(this, mt, new Map()),
          B(this, ti, 0);
      }
      build(t, n, r) {
        const o = new I2({
          mutationCache: this,
          mutationId: ++pi(this, ti)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(o), o;
      }
      add(t) {
        P(this, Ut).add(t);
        const n = Li(t);
        if (typeof n == "string") {
          const r = P(this, mt).get(n);
          r ? r.push(t) : P(this, mt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (P(this, Ut).delete(t)) {
          const n = Li(t);
          if (typeof n == "string") {
            const r = P(this, mt).get(n);
            if (r)
              if (r.length > 1) {
                const o = r.indexOf(t);
                o !== -1 && r.splice(o, 1);
              } else r[0] === t && P(this, mt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = Li(t);
        if (typeof n == "string") {
          const r = P(this, mt).get(n),
            o =
              r == null ? void 0 : r.find((i) => i.state.status === "pending");
          return !o || o === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = Li(t);
        if (typeof n == "string") {
          const o =
            (r = P(this, mt).get(n)) == null
              ? void 0
              : r.find((i) => i !== t && i.state.isPaused);
          return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        _e.batch(() => {
          P(this, Ut).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            P(this, Ut).clear(),
            P(this, mt).clear();
        });
      }
      getAll() {
        return Array.from(P(this, Ut));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Jd(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Jd(t, n));
      }
      notify(t) {
        _e.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return _e.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(pt)))
        );
      }
    }),
    (Ut = new WeakMap()),
    (mt = new WeakMap()),
    (ti = new WeakMap()),
    Tf);
function Li(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function tf(e) {
  return {
    onFetch: (t, n) => {
      var c, f, h, d, S;
      const r = t.options,
        o =
          (h =
            (f = (c = t.fetchOptions) == null ? void 0 : c.meta) == null
              ? void 0
              : f.fetchMore) == null
            ? void 0
            : h.direction,
        i = ((d = t.state.data) == null ? void 0 : d.pages) || [],
        s = ((S = t.state.data) == null ? void 0 : S.pageParams) || [];
      let l = { pages: [], pageParams: [] },
        a = 0;
      const u = async () => {
        let v = !1;
        const w = (g) => {
            Object.defineProperty(g, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (v = !0)
                  : t.signal.addEventListener("abort", () => {
                      v = !0;
                    }),
                t.signal
              ),
            });
          },
          m = lg(t.options, t.fetchOptions),
          p = async (g, E, k) => {
            if (v) return Promise.reject();
            if (E == null && g.pages.length) return Promise.resolve(g);
            const b = (() => {
                const F = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: E,
                  direction: k ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return w(F), F;
              })(),
              R = await m(b),
              { maxPages: _ } = t.options,
              A = k ? b2 : C2;
            return {
              pages: A(g.pages, R, _),
              pageParams: A(g.pageParams, E, _),
            };
          };
        if (o && i.length) {
          const g = o === "backward",
            E = g ? F2 : nf,
            k = { pages: i, pageParams: s },
            C = E(r, k);
          l = await p(k, C, g);
        } else {
          const g = e ?? i.length;
          do {
            const E = a === 0 ? s[0] ?? r.initialPageParam : nf(r, l);
            if (a > 0 && E == null) break;
            (l = await p(l, E)), a++;
          } while (a < g);
        }
        return l;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var v, w;
            return (w = (v = t.options).persister) == null
              ? void 0
              : w.call(
                  v,
                  u,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function nf(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function F2(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var de,
  mn,
  gn,
  Ur,
  Br,
  vn,
  Wr,
  Vr,
  Nf,
  $2 =
    ((Nf = class {
      constructor(e = {}) {
        J(this, de);
        J(this, mn);
        J(this, gn);
        J(this, Ur);
        J(this, Br);
        J(this, vn);
        J(this, Wr);
        J(this, Vr);
        B(this, de, e.queryCache || new L2()),
          B(this, mn, e.mutationCache || new z2()),
          B(this, gn, e.defaultOptions || {}),
          B(this, Ur, new Map()),
          B(this, Br, new Map()),
          B(this, vn, 0);
      }
      mount() {
        pi(this, vn)._++,
          P(this, vn) === 1 &&
            (B(
              this,
              Wr,
              ag.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), P(this, de).onFocus());
              })
            ),
            B(
              this,
              Vr,
              Ts.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), P(this, de).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        pi(this, vn)._--,
          P(this, vn) === 0 &&
            ((e = P(this, Wr)) == null || e.call(this),
            B(this, Wr, void 0),
            (t = P(this, Vr)) == null || t.call(this),
            B(this, Vr, void 0));
      }
      isFetching(e) {
        return P(this, de).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return P(this, mn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = P(this, de).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = P(this, de).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(Ka(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return P(this, de)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = P(this, de).get(r.queryHash),
          i = o == null ? void 0 : o.state.data,
          s = y2(t, i);
        if (s !== void 0)
          return P(this, de)
            .build(this, r)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return _e.batch(() =>
          P(this, de)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = P(this, de).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = P(this, de);
        _e.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = P(this, de);
        return _e.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          )
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = _e.batch(() =>
            P(this, de)
              .findAll(e)
              .map((o) => o.cancel(n))
          );
        return Promise.all(r).then(pt).catch(pt);
      }
      invalidateQueries(e, t = {}) {
        return _e.batch(
          () => (
            P(this, de)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t
                )
          )
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = _e.batch(() =>
            P(this, de)
              .findAll(e)
              .filter((o) => !o.isDisabled() && !o.isStatic())
              .map((o) => {
                let i = o.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(pt)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(r).then(pt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = P(this, de).build(this, t);
        return n.isStaleByTime(Ka(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(pt).catch(pt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = tf(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(pt).catch(pt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = tf(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return Ts.isOnline()
          ? P(this, mn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return P(this, de);
      }
      getMutationCache() {
        return P(this, mn);
      }
      getDefaultOptions() {
        return P(this, gn);
      }
      setDefaultOptions(e) {
        B(this, gn, e);
      }
      setQueryDefaults(e, t) {
        P(this, Ur).set(Jo(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...P(this, Ur).values()],
          n = {};
        return (
          t.forEach((r) => {
            Zo(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        P(this, Br).set(Jo(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...P(this, Br).values()],
          n = {};
        return (
          t.forEach((r) => {
            Zo(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...P(this, gn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = uc(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === cc && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...P(this, gn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        P(this, de).clear(), P(this, mn).clear();
      }
    }),
    (de = new WeakMap()),
    (mn = new WeakMap()),
    (gn = new WeakMap()),
    (Ur = new WeakMap()),
    (Br = new WeakMap()),
    (vn = new WeakMap()),
    (Wr = new WeakMap()),
    (Vr = new WeakMap()),
    Nf),
  U2 = x.createContext(void 0),
  B2 = ({ client: e, children: t }) => (
    x.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    y.jsx(U2.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ns() {
  return (
    (Ns = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ns.apply(this, arguments)
  );
}
var xn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(xn || (xn = {}));
const rf = "popstate";
function W2(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: l } = r.location;
    return Ga(
      "",
      { pathname: i, search: s, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : hg(o);
  }
  return H2(t, n, null, e);
}
function We(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function pg(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function V2() {
  return Math.random().toString(36).substr(2, 8);
}
function of(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ga(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ns(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? nl(t) : t,
      { state: n, key: (t && t.key) || r || V2() }
    )
  );
}
function hg(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function nl(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function H2(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    l = xn.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), s.replaceState(Ns({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    l = xn.Pop;
    let w = c(),
      m = w == null ? null : w - u;
    (u = w), a && a({ action: l, location: v.location, delta: m });
  }
  function h(w, m) {
    l = xn.Push;
    let p = Ga(v.location, w, m);
    u = c() + 1;
    let g = of(p, u),
      E = v.createHref(p);
    try {
      s.pushState(g, "", E);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      o.location.assign(E);
    }
    i && a && a({ action: l, location: v.location, delta: 1 });
  }
  function d(w, m) {
    l = xn.Replace;
    let p = Ga(v.location, w, m);
    u = c();
    let g = of(p, u),
      E = v.createHref(p);
    s.replaceState(g, "", E),
      i && a && a({ action: l, location: v.location, delta: 0 });
  }
  function S(w) {
    let m = o.location.origin !== "null" ? o.location.origin : o.location.href,
      p = typeof w == "string" ? w : hg(w);
    return (
      (p = p.replace(/ $/, "%20")),
      We(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, m)
    );
  }
  let v = {
    get action() {
      return l;
    },
    get location() {
      return e(o, s);
    },
    listen(w) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(rf, f),
        (a = w),
        () => {
          o.removeEventListener(rf, f), (a = null);
        }
      );
    },
    createHref(w) {
      return t(o, w);
    },
    createURL: S,
    encodeLocation(w) {
      let m = S(w);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: h,
    replace: d,
    go(w) {
      return s.go(w);
    },
  };
  return v;
}
var sf;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(sf || (sf = {}));
function Q2(e, t, n) {
  return n === void 0 && (n = "/"), K2(e, t, n, !1);
}
function K2(e, t, n, r) {
  let o = typeof t == "string" ? nl(t) : t,
    i = vg(o.pathname || "/", n);
  if (i == null) return null;
  let s = mg(e);
  Y2(s);
  let l = null;
  for (let a = 0; l == null && a < s.length; ++a) {
    let u = iS(i);
    l = rS(s[a], u, r);
  }
  return l;
}
function mg(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, s, l) => {
    let a = {
      relativePath: l === void 0 ? i.path || "" : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    a.relativePath.startsWith("/") &&
      (We(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Ir([r, a.relativePath]),
      c = n.concat(a);
    i.children &&
      i.children.length > 0 &&
      (We(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      mg(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: tS(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, s) => {
      var l;
      if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, s);
      else for (let a of gg(i.path)) o(i, s, a);
    }),
    t
  );
}
function gg(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = gg(r.join("/")),
    l = [];
  return (
    l.push(...s.map((a) => (a === "" ? i : [i, a].join("/")))),
    o && l.push(...s),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Y2(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : nS(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const G2 = /^:[\w-]+$/,
  q2 = 3,
  X2 = 2,
  J2 = 1,
  Z2 = 10,
  eS = -2,
  lf = (e) => e === "*";
function tS(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(lf) && (r += eS),
    t && (r += X2),
    n
      .filter((o) => !lf(o))
      .reduce((o, i) => o + (G2.test(i) ? q2 : i === "" ? J2 : Z2), r)
  );
}
function nS(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function rS(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    i = "/",
    s = [];
  for (let l = 0; l < r.length; ++l) {
    let a = r[l],
      u = l === r.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      f = af(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        c
      ),
      h = a.route;
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = af(
          { path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
          c
        )),
      !f)
    )
      return null;
    Object.assign(o, f.params),
      s.push({
        params: o,
        pathname: Ir([i, f.pathname]),
        pathnameBase: sS(Ir([i, f.pathnameBase])),
        route: h,
      }),
      f.pathnameBase !== "/" && (i = Ir([i, f.pathnameBase]));
  }
  return s;
}
function af(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = oS(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: h, isOptional: d } = c;
      if (h === "*") {
        let v = l[f] || "";
        s = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const S = l[f];
      return (
        d && !S ? (u[h] = void 0) : (u[h] = (S || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function oS(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    pg(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function iS(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      pg(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function vg(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const Ir = (e) => e.join("/").replace(/\/\/+/g, "/"),
  sS = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function lS(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const yg = ["post", "put", "patch", "delete"];
new Set(yg);
const aS = ["get", ...yg];
new Set(aS);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Rs() {
  return (
    (Rs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Rs.apply(this, arguments)
  );
}
const uS = x.createContext(null),
  cS = x.createContext(null),
  wg = x.createContext(null),
  rl = x.createContext(null),
  ol = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  xg = x.createContext(null);
function dc() {
  return x.useContext(rl) != null;
}
function Sg() {
  return dc() || We(!1), x.useContext(rl).location;
}
function dS(e, t) {
  return fS(e, t);
}
function fS(e, t, n, r) {
  dc() || We(!1);
  let { navigator: o } = x.useContext(wg),
    { matches: i } = x.useContext(ol),
    s = i[i.length - 1],
    l = s ? s.params : {};
  s && s.pathname;
  let a = s ? s.pathnameBase : "/";
  s && s.route;
  let u = Sg(),
    c;
  if (t) {
    var f;
    let w = typeof t == "string" ? nl(t) : t;
    a === "/" || ((f = w.pathname) != null && f.startsWith(a)) || We(!1),
      (c = w);
  } else c = u;
  let h = c.pathname || "/",
    d = h;
  if (a !== "/") {
    let w = a.replace(/^\//, "").split("/");
    d = "/" + h.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let S = Q2(e, { pathname: d }),
    v = vS(
      S &&
        S.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, l, w.params),
            pathname: Ir([
              a,
              o.encodeLocation
                ? o.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? a
                : Ir([
                    a,
                    o.encodeLocation
                      ? o.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && v
    ? x.createElement(
        rl.Provider,
        {
          value: {
            location: Rs(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: xn.Pop,
          },
        },
        v
      )
    : v;
}
function pS() {
  let e = SS(),
    t = lS(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: o }, n) : null,
    null
  );
}
const hS = x.createElement(pS, null);
class mS extends x.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          ol.Provider,
          { value: this.props.routeContext },
          x.createElement(xg.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function gS(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = x.useContext(uS);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(ol.Provider, { value: t }, r)
  );
}
function vS(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let c = s.findIndex(
      (f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0
    );
    c >= 0 || We(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let f = s[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
        f.route.id)
      ) {
        let { loaderData: h, errors: d } = n,
          S =
            f.route.loader &&
            h[f.route.id] === void 0 &&
            (!d || d[f.route.id] === void 0);
        if (f.route.lazy || S) {
          (a = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((c, f, h) => {
    let d,
      S = !1,
      v = null,
      w = null;
    n &&
      ((d = l && f.route.id ? l[f.route.id] : void 0),
      (v = f.route.errorElement || hS),
      a &&
        (u < 0 && h === 0
          ? ((S = !0), (w = null))
          : u === h &&
            ((S = !0), (w = f.route.hydrateFallbackElement || null))));
    let m = t.concat(s.slice(0, h + 1)),
      p = () => {
        let g;
        return (
          d
            ? (g = v)
            : S
            ? (g = w)
            : f.route.Component
            ? (g = x.createElement(f.route.Component, null))
            : f.route.element
            ? (g = f.route.element)
            : (g = c),
          x.createElement(gS, {
            match: f,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0)
      ? x.createElement(mS, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: d,
          children: p(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var qa = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(qa || {});
function yS(e) {
  let t = x.useContext(cS);
  return t || We(!1), t;
}
function wS(e) {
  let t = x.useContext(ol);
  return t || We(!1), t;
}
function xS(e) {
  let t = wS(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || We(!1), n.route.id;
}
function SS() {
  var e;
  let t = x.useContext(xg),
    n = yS(qa.UseRouteError),
    r = xS(qa.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function ES(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function Xa(e) {
  We(!1);
}
function kS(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = xn.Pop,
    navigator: i,
    static: s = !1,
    future: l,
  } = e;
  dc() && We(!1);
  let a = t.replace(/^\/*/, "/"),
    u = x.useMemo(
      () => ({
        basename: a,
        navigator: i,
        static: s,
        future: Rs({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, i, s]
    );
  typeof r == "string" && (r = nl(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: h = "",
      state: d = null,
      key: S = "default",
    } = r,
    v = x.useMemo(() => {
      let w = vg(c, a);
      return w == null
        ? null
        : {
            location: { pathname: w, search: f, hash: h, state: d, key: S },
            navigationType: o,
          };
    }, [a, c, f, h, d, S, o]);
  return v == null
    ? null
    : x.createElement(
        wg.Provider,
        { value: u },
        x.createElement(rl.Provider, { children: n, value: v })
      );
}
function CS(e) {
  let { children: t, location: n } = e;
  return dS(Ja(t), n);
}
new Promise(() => {});
function Ja(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, o) => {
      if (!x.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === x.Fragment) {
        n.push.apply(n, Ja(r.props.children, i));
        return;
      }
      r.type !== Xa && We(!1), !r.props.index || !r.props.children || We(!1);
      let s = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = Ja(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const bS = "6";
try {
  window.__reactRouterVersion = bS;
} catch {}
const PS = "startTransition",
  uf = $f[PS];
function TS(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = x.useRef();
  i.current == null && (i.current = W2({ window: o, v5Compat: !0 }));
  let s = i.current,
    [l, a] = x.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = x.useCallback(
      (f) => {
        u && uf ? uf(() => a(f)) : a(f);
      },
      [a, u]
    );
  return (
    x.useLayoutEffect(() => s.listen(c), [s, c]),
    x.useEffect(() => ES(r), [r]),
    x.createElement(kS, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: s,
      future: r,
    })
  );
}
var cf;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(cf || (cf = {}));
var df;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(df || (df = {}));
const NS = "/assets/wojak-face-BrJE1BV3.png",
  RS = () => {
    const [e, t] = x.useState(!1);
    x.useEffect(() => {
      const r = () => {
        t(window.scrollY > 50);
      };
      return (
        window.addEventListener("scroll", r),
        () => window.removeEventListener("scroll", r)
      );
    }, []);
    const n = (r) => {
      const o = document.getElementById(r);
      o && o.scrollIntoView({ behavior: "smooth" });
    };
    return y.jsx("header", {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        e ? "bg-black border-b border-white/10" : "bg-transparent"
      }`,
      children: y.jsx("div", {
        className: "container mx-auto px-4",
        children: y.jsxs("div", {
          className: "flex items-center justify-between h-16",
          children: [
            y.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                y.jsx("img", { src: NS, alt: "Wojak", className: "w-10 h-10" }),
                y.jsx("span", {
                  className: "font-display text-2xl text-yellow text-stroke",
                  children: "BOJAK",
                }),
              ],
            }),
            y.jsxs("nav", {
              className: "hidden md:flex items-center gap-6",
              children: [
                y.jsx("button", {
                  onClick: () => n("about-section"),
                  className:
                    "font-semibold text-yellow hover:text-neutral-400 transition-colors",
                  children: "About",
                }),
                y.jsx("button", {
                  onClick: () => n("tokenomics-section"),
                  className:
                    "font-semibold text-yellow hover:text-neutral-400 transition-colors",
                  children: "Tokenomics",
                }),
                y.jsx("button", {
                  onClick: () => n("how-to-buy-section"),
                  className:
                    "font-semibold text-yellow hover:text-neutral-400 transition-colors",
                  children: "How to Buy",
                }),
              ],
            }),
            y.jsx("a", {
              href: "https://pancakeswap.finance/swap?outputCurrency=0x84d43b549d191783e7135e9d4CcD81d779Ad68E1",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "bg-yellow text-white font-semibold px-5 py-2 rounded-full hover:bg-neutral-200 transition-all",
              children: "Buy $BOJAK",
            }),
          ], 
        }), 
      }),
    });
  }, 
  jS = "/assets/dexscreener-new-Bl248k3J.png",
  OS = "/assets/solana-logo-DYviJvuA.png",
  ff = "0x84d43b549d191783e7135e9d4CcD81d779Ad68E1",
  AS = () => {
    const [e, t] = x.useState(!1),
      [n, r] = x.useState(!1),
      o = () => {
        navigator.clipboard.writeText(ff), r(!0), setTimeout(() => r(!1), 2e3);
      };
    return y.jsxs("section", {
      className: "relative h-screen min-h-[600px] overflow-hidden bg-black",
      children: [
        y.jsx("video", {
          autoPlay: !0,
          loop: !0,
          muted: !0,
          playsInline: !0,
          onLoadedData: () => t(!0),
          className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            e ? "opacity-100" : "opacity-0"
          }`,
          children: y.jsx("source", {
            src: "/videos/WojakPromoVideo.mp4",
            type: "video/mp4",
          }),
        }),
        !e && y.jsx("div", { className: "absolute inset-0 bg-black" }),
        y.jsx("div", { className: "absolute inset-0 bg-black/30" }),
        y.jsxs("div", {
          className:
            "relative z-10 flex flex-col items-center justify-center h-full text-center px-4",
          children: [
            y.jsx("span", {
              className:
                "inline-block mb-2 text-yellow font-display text-2xl md:text-3xl text-stroke",
              children: "FEELS GUY",
            }),
            y.jsx("h1", {
              className:
                "font-display text-8xl md:text-[11rem] lg:text-[14.4rem] text-yellow text-stroke-md mb-4 leading-none",
              children: "BOJAK",
            }),
            y.jsx("span", {
              className:
                "inline-block mb-8 text-yellow font-display text-lg md:text-xl tracking-widest uppercase",
              style: {
                WebkitTextStroke: "1px #000",
                textShadow: "1.5px 1.5px 0 #000",
              },
              children: "BOJAK is a cryptocurrency on the BSC",
            }),
            y.jsxs("div", {
              className: "flex justify-center items-center flex-wrap gap-4",
              children: [
                y.jsxs("a", {
                  href: "https://dexscreener.com/bsc/0x84d43b549d191783e7135e9d4CcD81d779Ad68E1",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "btn-wojak-yellow flex items-center gap-2",
                  children: [
                    y.jsx("img", {
                      src: jS,
                      alt: "DexScreener",
                      className: "w-6 h-6",
                    }),
                    y.jsx("span", {
                      className: "font-display",
                      children: "DexScreener",
                    }),
                  ],
                }),
                y.jsxs("a", {
                  href: "https://pancakeswap.finance/swap?outputCurrency=0x84d43b549d191783e7135e9d4CcD81d779Ad68E1",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "btn-wojak-light flex items-center gap-2",
                  children: [
                    y.jsx("img", {
                      src: OS,
                      alt: "Solana",
                      className: "w-6 h-6",
                    }),
                    y.jsx("span", {
                      className: "font-display",
                      children: "Buy Now",
                    }),
                  ],
                }),
              ],
            }),
            y.jsxs("div", {
              className:
                "mt-6 flex items-center bg-black/60 border-2 border-white/20 rounded-lg overflow-hidden shadow-sharp max-w-full",
              children: [
                y.jsx("span", {
                  className:
                    "px-4 py-2.5 text-yellow/70 font-mono text-xs md:text-sm truncate select-all",
                  children: ff,
                }),
                y.jsx("button", {
                  onClick: o,
                  className:
                    "flex-shrink-0 px-4 py-2.5 bg-white text-black border-l-2 border-white/20 hover:bg-white/80 transition-colors duration-200",
                  "aria-label": "Copy contract address",
                  children: n
                    ? y.jsx(u1, { className: "w-4 h-4" })
                    : y.jsx(c1, { className: "w-4 h-4" }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Eg = "/assets/banner-face-1-PQwRoFwH.png",
  kg = "/assets/banner-face-2-DbeZQ3KI.png",
  Cg = "/assets/banner-face-3-DqhQd1-Y.png",
  _S = [Eg, kg, Cg],
  Wl = ["BORN TO FEEL", "THE INTERNET RUNS ON BOJAK"],
  MS = ({ direction: e = "right" }) => {
    const t = (n) => {
      const r = [];
      let o = n;
      for (let i = 0; i < Wl.length; i++)
        r.push(
          y.jsx(
            "img",
            {
              src: _S[o % 3],
              alt: "",
              className:
                "w-10 h-10 md:w-12 md:h-12 shrink-0 object-contain mx-8",
            },
            `face-${i}`
          )
        ),
          o++,
          r.push(
            y.jsx(
              "span",
              {
                className:
                  "font-display text-2xl md:text-3xl whitespace-nowrap text-yellow shrink-0",
                children: Wl[i],
              },
              `text-${i}`
            )
          );
      return r;
    };
    return y.jsx("div", {
      className: "bg-black py-4 border-y-2 border-white/20 overflow-hidden",
      children: y.jsx("div", {
        className: "flex items-center animate-marquee whitespace-nowrap",
        children: [...Array(4)].map((n, r) =>
          y.jsx(
            "div",
            {
              className: "flex items-center shrink-0",
              children: t(r * Wl.length),
            },
            r
          )
        ),
      }),
    });
  },
  pf = "/assets/buy-button-icon-DBOPcdhT.png",
  hf = "/assets/wojak-fullbody-CH1xYNqR.png",
  mf =
    "data:image/svg+xml,%3csvg%20width='507'%20height='512'%20viewBox='0%200%20507%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_207_2694)'%3e%3cpath%20d='M506.621%20253.985C507.254%20394.894%20394.35%20509.631%20254.463%20510.268C114.557%20510.906%200.635972%20397.194%200.00265142%20256.286C-0.630669%20115.377%20112.273%200.640368%20252.179%200.00251182C392.066%20-0.616016%20505.987%20113.077%20506.621%20253.985Z'%20fill='%23FFE866'/%3e%3cpath%20d='M381.781%20163.839C363.395%20158.485%20344.357%20150.869%20325.05%20143.195C323.937%20138.325%20319.658%20132.255%20310.983%20124.814C298.374%20113.796%20274.692%20114.086%20254.234%20118.957C231.645%20113.603%20209.326%20111.689%20187.908%20116.869C12.7658%20165.482%20112.063%20284.026%2047.752%20403.228C56.9064%20422.77%20157.872%20516.658%20298.24%20506.233C298.24%20506.233%20249.436%20388.113%20359.576%20331.402C448.913%20285.418%20513.454%20200.023%20381.761%20163.819L381.781%20163.839Z'%20fill='%234BCC00'/%3e%3cpath%20d='M266.363%20192.26C266.363%20219.514%20244.427%20241.588%20217.386%20241.588C190.345%20241.588%20168.409%20219.514%20168.409%20192.26C168.409%20165.006%20190.345%20142.952%20217.386%20142.952C244.427%20142.952%20266.363%20165.025%20266.363%20192.26Z'%20fill='white'/%3e%3cpath%20d='M443.077%20263.25C403.408%20291.413%20358.25%20312.771%20294.247%20312.771C264.289%20312.771%20258.205%20280.704%20238.399%20296.419C228.17%20304.537%20192.129%20322.687%20163.514%20321.315C134.65%20319.923%2088.5711%20303.029%2075.6168%20241.544C70.4927%20303.029%2067.8826%20348.337%2044.9488%20400.254C101.246%20482.993%20199.405%20524.157%20298.239%20506.254C287.626%20431.587%20352.416%20358.465%20388.919%20321.044C402.736%20306.876%20429.221%20283.739%20443.077%20263.25Z'%20fill='%234BCC00'/%3e%3cellipse%20cx='238.03'%20cy='191.922'%20rx='28.7401'%20ry='40.2361'%20fill='%230D1217'/%3e%3cpath%20d='M249.526%20118.863C265.206%20125.131%20322.467%20144.203%20347.242%20151.689C321.947%20109.717%20283.613%20112.139%20249.526%20118.863Z'%20fill='%2335AF00'/%3e%3cpath%20d='M238.03%20191.918L203.541%20168.926V214.91L238.03%20191.918Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_207_2694'%3e%3crect%20width='506.623'%20height='512'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  gf = "/assets/cmc-BO1MFg1P.png",
  vf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA81BMVEX///+j4FBFfyxdoEDfyFXV+GsAAABEfipZnT97n24/fCOKqX+g4VCl4lCNy0tYnD88dylVlTmYs4/Pz1Q6ehylvJ2Dwki56lzS+F38//dYikVTkjif30ft8+t6tEDN7qlOmSpqkTS02lya2E7A6Y9jpUHH0lM3XibK18YfOhTCwsJhYWG12VGvuEwvdABLS0tqlVvg6N5zrT2yxazn9td5p0JLgjQ4ZyRhkzd5uEYbLxMpSxp/qUWq0VizuU0ucBUzbyZKXEM9PT1WiUJGcTV+fn7q7+ldWGKQsXtim0ys2Hew5G6SwVVnjTKQxkcPIg5nl1YjF2f9AAAER0lEQVR4nO3df3vTVBiH8bYRknVt00K3IRs415UfimNUh4DiUHSKwuD9vxr+zPONnMezeZJ29L7/bXuSz9LuynNlWTudJB3udUMNF+Ne1fT76DV/cNac2TXz22kQbggRfiqECNOGEOGnQogwbQg/a+FgMTadJhEOZq/sos0IN/rmpzg+uBZuR376d3N7RLdkzQdTe2ROnDWvDcJHNE8mzKsuJDT9S2gfvIjQvi6dcFWPYQ8hQoQIESJEiBBhQPjoVrhLC501bw1t3eaF0wdfBut8tXcpYX+zE170zv7cZtdsSPjEeeblheHu7GemwrwMYXwIqxBWIaxCmCKEVQirEFYhTNGaCfu/Pjb99k2sMH99bLstj/1u13z8x3KFvYfXbdHCXt63yUO9H2XNb6+o0AshQoQIESJEiBDhEoVjJ9nTZoQb4Y7Pkghno3Dbk7KqeNqIsB/uKImwO3QalWa3580Ie+FPSSKh03BU2P1GiBAhQoQIESJEGMo573eFL9IIy/CZ95+y5tm+fWape1ozbUoHTn/JM99MbIu7tr8Pbf8MY4U6d5zLmm9lzUNnQhkpSaeJU++P5Z7JU+0YkJUzmRH2pFigP3fUF3U6lR3tyGdt7ArlqSocxTOaTwbpHkKECJcRQoQIlx/CdRbKCfykMGf3kyUL9bzUFe5IKjx4adO5Y6m+bve55ArldQPviGo7gU230rBbFrY8Wti9OkL7SyFDaEKIsKUQIkSIsPkQrrVwJ7qlDk//Q3hFQohw9UOIcPVDiHD1Q7hmQvcvWuJrQSWbu4Bw2+nr2N6dN0/UXSuihXkRLnt/PbaTpoXDmV6pyOKFWbj5i/+mtSh09hQhQoQIESJEiPAzFE6lVMIGJg1Z0hUqqbMl7Yab3P/Jdt/pZGRP/GdJiDO75Kg2TeieKin+rqBaxTxcZs/7y+0UQneaSHTfUy3vbaKbTyV0NoEQIUKECBEiRLhmwunU+S9Dtmm8cBQ9aXiXQvxpwu7Z1BXeiE7v5dbkvLh4LjdaO5OG/z+k9GRbtreru+YK49P78aV8ogcxdtIYjnR+qF03sZWyvRa+/7CWCpXrCovwC2vLIESIECFChAgRIowTOlOILxyEqp2XukKZc143ItzaDPfBmTTePgr3Um7JXihK1nwj20s1TcR3Q77HcFeE330R7ubAToTyH2l1mugft26qCeUzGi+8J99MiRAhQoQIESJEiLBh4VSFdmK4rHCSL1d49sS2Kcfw2c+mk18c4U2ZNM7nC9NcjuEH3WALwo0jm86HnslLJ42ZDmGyvactCPWoidB9X/pC+57Vq2ttzPgIESJEiBAhQoQIESJEiBAhQoQIESJEiHAVhGW+ZKHc95xImMm91C0cw+PwlQq9S2ZwL4Wwdj+NXsXIZF+OEgk3nPelfCdLIqHkfir9+54QIkSIECFChAgRIkSIECFChAgRIkSIECHCKyv8CAB0owQvR7AZAAAAAElFTkSuQmCC",
  yf = "/assets/pump-BTFMOfS4.jpg",
  wf = "/assets/x-logo-COUwSrqT.png",
  xf = "/assets/telegram-logo-BF3_bUgx.png",
  LS = () =>
    y.jsx("section", {
      id: "about-section",
      className: "py-20 overflow-hidden",
      children: y.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          y.jsxs("div", {
            className: "relative md:hidden",
            children: [
              y.jsx("img", {
                src: hf,
                alt: "Wojak",
                className:
                  "absolute left-1/2 -translate-x-1/2 -top-32 w-64 pointer-events-none z-0",
              }),
              y.jsxs("div", {
                className:
                  "relative card-wojak px-6 py-8 rounded-3xl mt-40 z-10",
                children: [
                  y.jsx("h2", {
                    className: "font-display text-4xl text-yellow mb-6",
                    children: "ABOUT BOJAK",
                  }),
                  y.jsx("p", {
                    className: "text-lg text-neutral-300 mb-4 leading-relaxed",
                    children:
                      "Feels Guy, also known as Wojak, is a cryptocurrency created on the BSC that represents the most recognisable meme on the internet.",
                  }),
                  y.jsx("p", {
                    className: "text-lg text-neutral-300 mb-8 leading-relaxed",
                    children:
                      "Wojak is an MS Paint illustration of a bald man with a melancholy expression on his face. It is often used as a reaction image to represent feelings such as melancholy, regret or loneliness.",
                  }),
                  y.jsxs("div", {
                    className: "flex flex-wrap items-center gap-4",
                    children: [
                      y.jsxs("a", {
                        href: "https://pancakeswap.finance/swap?outputCurrency=0x84d43b549d191783e7135e9d4CcD81d779Ad68E1",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "btn-wojak-light flex items-center gap-2",
                        children: [
                          y.jsx("img", {
                            src: pf,
                            alt: "Solana",
                            className: "w-5 h-5",
                          }),
                          y.jsx("span", {
                            className: "font-display",
                            children: "Buy Token",
                          }),
                        ],
                      }),
                      y.jsxs("div", {
                        className: "flex items-center gap-3 flex-wrap",
                        children: [
                          y.jsx("a", {
                            href: "https://x.com/WojakOnX",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "w-12 h-12 rounded-full bg-white border-2 border-black flex items-center justify-center hover:scale-110 transition-transform",
                            children: y.jsx("img", {
                              src: wf,
                              alt: "X",
                              className: "w-5 h-5",
                            }),
                          }),
                          y.jsx("a", {
                            href: "https://t.me/Wojak8J69",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "w-12 h-12 rounded-full bg-white border-2 border-black flex items-center justify-center hover:scale-110 transition-transform",
                            children: y.jsx("img", {
                              src: xf,
                              alt: "Telegram",
                              className: "w-5 h-5",
                            }),
                          }),
                          y.jsx("a", {
                            href: "https://gmgn.ai/sol/token/elqohsxq_8J69rbLTzWWgUJziFY8jeu5tDwEPBwUz4pKBMr5rpump",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "w-12 h-12 rounded-full bg-white border-2 border-black flex items-center justify-center hover:scale-110 transition-transform overflow-hidden",
                            children: y.jsx("img", {
                              src: vf,
                              alt: "GMGN",
                              className: "w-7 h-7",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          y.jsxs("div", {
            className:
              "hidden md:grid grid-cols-2 gap-8 items-center max-w-6xl mx-auto",
            children: [
              y.jsx("div", {
                className: "flex justify-center bg-blackbg",
                children: [
                  y.jsx("blockquote", {
                    className: "twitter-tweet",
                    children: [
                      y.jsx("p", {
                        lang: "zh",
                        dir: "ltr",
                        children: "BOJAK",
                      }),
                      " — BNBCHAIN ",
                      y.jsx("a", {
                        href: "https://twitter.com/wojakcto/status/2067651365367664981?ref_src=twsrc%5Etfw",
                        children: "Jun 19, 2026",
                      }),
                    ],
                  }),
                ],
              }),
              y.jsxs("div", {
                className:
                  "relative card-wojak px-6 py-8 md:px-10 md:py-12 rounded-3xl",
                children: [
                  y.jsx("h2", {
                    className:
                      "font-display text-4xl md:text-5xl text-yellow mb-6",
                    children: "ABOUT BOJAK",
                  }),
                  y.jsx("p", {
                    className:
                      "text-lg md:text-xl text-neutral-300 mb-4 leading-relaxed",
                    children:
                      "Feels Guy, also known as Wojak, is a cryptocurrency created on the BSC that represents the most recognisable meme on the internet.",
                  }),
                  y.jsx("p", {
                    className:
                      "text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed",
                    children:
                      "Wojak is an MS Paint illustration of a bald man with a melancholy expression on his face. It is often used as a reaction image to represent feelings such as melancholy, regret or loneliness.",
                  }),
                  y.jsxs("div", {
                    className: "flex flex-wrap items-center gap-4",
                    children: [
                      y.jsxs("a", {
                        href: "https://pancakeswap.finance/swap?outputCurrency=0x84d43b549d191783e7135e9d4CcD81d779Ad68E1",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "btn-wojak-light flex items-center gap-2",
                        children: [
                          y.jsx("img", {
                            src: pf,
                            alt: "Solana",
                            className: "w-5 h-5",
                          }),
                          y.jsx("span", {
                            className: "font-display",
                            children: "Buy Token",
                          }),
                        ],
                      }),
                      y.jsxs("div", {
                        className: "flex items-center gap-3 flex-wrap",
                        children: [
                          y.jsx("a", {
                            href: "https://x.com/WojakOnX",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "w-12 h-12 rounded-full bg-white border-2 border-black flex items-center justify-center hover:scale-110 transition-transform",
                            children: y.jsx("img", {
                              src: wf,
                              alt: "X",
                              className: "w-5 h-5",
                            }),
                          }),
                          y.jsx("a", {
                            href: "https://t.me",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "w-12 h-12 rounded-full bg-white border-2 border-black flex items-center justify-center hover:scale-110 transition-transform",
                            children: y.jsx("img", {
                              src: xf,
                              alt: "Telegram",
                              className: "w-5 h-5",
                            }),
                          }),
                          y.jsx("a", {
                            href: "https://gmgn.ai/bsc/token/0x84d43b549d191783e7135e9d4CcD81d779Ad68E1",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "w-12 h-12 rounded-full bg-white border-2 border-black flex items-center justify-center hover:scale-110 transition-transform overflow-hidden",
                            children: y.jsx("img", {
                              src: vf,
                              alt: "GMGN",
                              className: "w-7 h-7",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  IS = ({ images: e }) => {
    const n = e || [
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1524799526615-766a9833dec0?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&auto=format&fit=crop",
      ],
      r = [...n, ...n];
    return y.jsx("div", {
      className: "w-full overflow-hidden py-8",
      children: y.jsx("div", {
        className: "w-full",
        style: {
          mask: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMask:
            "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
        },
        children: y.jsx("div", {
          className:
            "flex gap-4 md:gap-6 w-max animate-[scroll-right_48.75s_linear_infinite]",
          children: r.map((o, i) =>
            y.jsx(
              "div",
              {
                className:
                  "flex-shrink-0 w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105",
                children: y.jsx("img", {
                  src: o,
                  alt: `Gallery image ${(i % n.length) + 1}`,
                  className: "w-full h-full object-cover",
                  loading: "lazy",
                }),
              },
              i
            )
          ),
        }),
      }),
    });
  },
  DS = "/assets/reel-matrix-DTsUebXv.png",
  zS = "/assets/reel-wrestling-CxJUSmWF.png",
  FS = "/assets/reel-ricardo-DXznXkcm.png",
  $S = "/assets/reel-shrek-D6TxGQ4r.png",
  US = "/assets/reel-agreed-CUV8Xois.png",
  BS = "/assets/reel-cook-B-mwCpiz.png",
  WS = "/assets/reel-dbz-BXwJMo6L.png",
  VS = "/assets/reel-watching-5pD68a0y.png",
  HS = [DS, zS, FS, $S, US, BS, WS, VS],
  QS = () =>
    y.jsxs("section", {
      className: "py-12 bg-black overflow-hidden",
      children: [
        y.jsx("div", {
          className: "container mx-auto px-4 mb-4",
          children: y.jsx("h2", {
            className:
              "font-display text-4xl md:text-5xl text-yellow text-center",
            children: "MEDIA REEL",
          }),
        }),
        y.jsx(IS, { images: HS }),
      ],
    }),
  KS = () =>
    y.jsx("section", {
      id: "tokenomics-section",
      className: "py-20",
      children: y.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          y.jsx("h2", {
            className:
              "font-display text-5xl md:text-7xl lg:text-8xl text-center text-foreground mb-12",
            children: "TOKENOMICS",
          }),
          y.jsxs("div", {
            className:
              "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto",
            children: [
              y.jsxs("div", {
                className: "card-wojak p-8 text-center",
                children: [
                  y.jsx("h3", {
                    className:
                      "font-display text-5xl md:text-6xl text-yellow mb-2",
                    children: "1B",
                  }),
                  y.jsx("p", {
                    className: "text-lg font-semibold text-neutral-300",
                    children: "TOKEN SUPPLY",
                  }),
                ],
              }),
              y.jsxs("div", {
                className: "card-wojak p-8 text-center",
                children: [
                  y.jsx("h3", {
                    className:
                      "font-display text-5xl md:text-6xl text-yellow mb-2",
                    children: "101%",
                  }),
                  y.jsx("p", {
                    className: "text-lg font-semibold text-neutral-300",
                    children: "FEELS",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  YS = "/assets/wojak-moon-rx_WN6PF.png",
  GS = "/assets/wojak-mage-LK-2aPNQ.png",
  Ii = [
    {
      number: 1,
      title: "Set Up Your Wallet",
      description:
        "Create or open a BSC-compatible wallet, securely save your recovery phrase, and ensure BNB Smart Chain is enabled.",
    },
    {
      number: 2,
      title: "Fund with BNB",
      description:
        "Buy or transfer BNB to your wallet, keeping a small balance reserved to cover future transaction fees.",
    },
    {
      number: 3,
      title: "Connect to a DEX",
      description:
        "Connect your wallet to a trusted BSC decentralized exchange and verify the official $BOJAK token contract.",
    },
    { 
      number: 4, title: "Swap BNB for $BOJAK", 
      description: "Enter the BNB amount, review all transaction details carefully, then confirm the swap and receive $BOJAK." 
    },
  ],
  Di = ({ step: e }) =>
    y.jsxs("div", {
      className: "bg-white border-2 border-black rounded-2xl overflow-hidden",
      children: [
        y.jsx("div", {
          className: "border-b-2 border-black px-6 pt-6 pb-3",
          children: y.jsxs("div", {
            className: "flex gap-2",
            children: [
              y.jsx("span", {
                className: "w-3 h-3 rounded-full border border-black",
                style: { backgroundColor: "#a8d5a2" },
              }),
              y.jsx("span", {
                className: "w-3 h-3 rounded-full bg-white border border-black",
              }),
              y.jsx("span", {
                className: "w-3 h-3 rounded-full border border-black",
                style: { backgroundColor: "#f2c4c4" },
              }),
            ],
          }),
        }),
        y.jsxs("div", {
          className: "p-6",
          children: [
            y.jsxs("h4", {
              className: "font-display text-xl md:text-2xl text-black mb-2",
              children: [e.number, "- ", e.title],
            }),
            e.description === "swap"
              ? y.jsxs("p", {
                  className: "text-black leading-relaxed",
                  children: [
                    "Visit",
                    " ",
                    y.jsx("a", {
                      href: "https://pancakeswap.finance/swap?outputCurrency=0x84d43b549d191783e7135e9d4CcD81d779Ad68E1",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "text-neutral-500 font-semibold hover:underline",
                      children: "Jupiter",
                    }),
                    " ",
                    "or",
                    " ",
                    y.jsx("a", {
                      href: "https://gmgn.ai/sol/token/elqohsxq_8J69rbLTzWWgUJziFY8jeu5tDwEPBwUz4pKBMr5rpump",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "text-neutral-500 font-semibold hover:underline",
                      children: "GMGN",
                    }),
                    " ",
                    "to swap your SOL for BOJAK tokens",
                  ],
                })
              : y.jsx("p", {
                  className: "text-black leading-relaxed",
                  children: e.description,
                }),
          ],
        }),
      ],
    }),
  qS = () =>
    y.jsx("section", {
      id: "how-to-buy-section",
      className: "py-20",
      children: y.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          y.jsx("h2", {
            className:
              "font-display text-5xl md:text-7xl lg:text-8xl text-center text-foreground mb-12",
            children: "HOW TO BUY",
          }),
          y.jsxs("div", {
            className:
              "relative card-wojak px-6 py-10 md:px-12 md:py-16 rounded-3xl max-w-6xl mx-auto",
            children: [
              y.jsx("img", {
                src: GS,
                alt: "",
                className:
                  "absolute left-1/2 -top-20 -translate-x-1/2 w-48 pointer-events-none hidden xl:block",
              }),
              y.jsxs("div", {
                className: "grid grid-cols-1 xl:grid-cols-3 gap-8 items-start",
                children: [
                  y.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      y.jsx(Di, { step: Ii[0] }),
                      y.jsx(Di, { step: Ii[1] }),
                    ],
                  }),
                  y.jsx("div", {
                    className: "hidden xl:flex justify-center items-center",
                    children: y.jsx("img", {
                      src: YS,
                      alt: "Wojak Moon",
                      className: "max-w-xs animate-float-slow",
                    }),
                  }),
                  y.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      y.jsx(Di, { step: Ii[2] }),
                      y.jsx(Di, { step: Ii[3] }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  XS = "/assets/group-Ch3KBTps.png",
  JS = [
    { name: "Wojakify any photo", url: "https://wojakify.co/", icon: a1 },
    { name: "Wojak Generator", url: "https://wojakstudiopro.com/", icon: g1 },
    { name: "Wojak Database", url: "https://wojakdb.com/", icon: d1 },
    { name: "Wojak Land", url: "https://wojakland.com/", icon: p1 },
    {
      name: "Google Drive (Main)",
      url: "https://drive.google.com/drive/folders/1fjYfXHC50jUlS5n1u6Rr45Tgpp4rfYq_",
      icon: h1,
    },
    {
      name: "Wojak Photo Album",
      url: "https://photos.app.goo.gl/KaF4M1iNHRG9UVU37",
      icon: m1,
    },
    {
      name: "Wojak Google Drive (Alternate)",
      url: "https://drive.google.com/drive/folders/1Qsh2W8d5fquTEAiKKV21IRvyst4dW_YY",
      icon: f1,
    },
  ],
  ZS = () =>
    y.jsx("section", {
      id: "tools-section",
      className: "py-20 overflow-hidden",
      children: y.jsx("div", {
        className: "container mx-auto px-4",
        children: y.jsxs("div", {
          className:
            "grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto",
          children: [
          ],
        }),
      }),
    }),
  eE = [Eg, kg, Cg],
  Za = ["BORN TO FEEL", "THE INTERNET RUNS ON BOJAK"],
  tE = (e) => {
    const t = [];
    let n = e;
    for (let r = 0; r < Za.length; r++)
      t.push(
        y.jsx(
          "img",
          {
            src: eE[n % 3],
            alt: "",
            className: "w-10 h-10 md:w-12 md:h-12 shrink-0 object-contain mx-8",
          },
          `face-${r}`
        )
      ),
        n++,
        t.push(
          y.jsx(
            "span",
            {
              className:
                "font-display text-2xl md:text-3xl whitespace-nowrap shrink-0",
              children: Za[r],
            },
            `text-${r}`
          )
        );
    return t;
  },
  nE = () =>
    y.jsxs("div", {
      className: "overflow-hidden",
      children: [
        y.jsx("div", {
          className: "bg-black py-4 border-y-2 border-white/20 overflow-hidden",
          children: y.jsx("div", {
            className: "flex items-center animate-marquee whitespace-nowrap",
            children: [...Array(4)].map((e, t) =>
              y.jsx(
                "div",
                {
                  className: "flex items-center shrink-0 text-yellow",
                  children: tE(t * Za.length),
                },
                t
              )
            ),
          }),
        }),
        y.jsx("div", {
          className: "bg-neutral-900 py-4 border-y-2 border-white/10",
          children: y.jsxs("p", {
            className: "text-center text-neutral-400 text-xs md:text-sm px-4",
            children: [
              "Disclaimer: This token is a meme coin with no intrinsic value or expectation of financial return. It is not an investment vehicle or security. Trading cryptocurrencies involves significant risk and may result in the loss of your capital. Always do your own research.",
            ],
          }),
        }),
      ],
    }),
  rE = "/assets/scroll-reveal-B3SxbttS.gif",
  oE = () => {
    const [e, t] = x.useState(0),
      n = x.useRef(null);
    return (
      x.useRef(0),
      x.useEffect(() => {
        const r = () => {
            const i = document.getElementById("tools-section");
            if (!i) return;
            const s = i.offsetTop,
              l = window.innerHeight,
              a = window.scrollY,
              u = 300,
              c = s - l + 200;
            let f = 0;
            a >= u && a < c ? (f = (a - u) / (c - u)) : a >= c && (f = 1),
              t(Math.min(1, Math.max(0, f)));
          },
          o = () => {
            n.current && cancelAnimationFrame(n.current),
              (n.current = requestAnimationFrame(r));
          };
        return (
          window.addEventListener("scroll", o, { passive: !0 }),
          r(),
          () => {
            window.removeEventListener("scroll", o),
              n.current && cancelAnimationFrame(n.current);
          }
        );
      }, []),
      e === 0
        ? null
        : y.jsx("div", {
            className: "fixed bottom-4 right-4 z-40 pointer-events-none",
            style: {
              transform: `translateY(${(1 - e) * 100}%)`,
              transition: "transform 0.15s ease-out",
              willChange: "transform",
            },
            children: y.jsx("img", {
              src: rE,
              alt: "Wojak animation",
              className: "w-28 md:w-40 lg:w-48",
            }),
          })
    );
  },
  iE = () =>
    y.jsxs("div", {
      className: "min-h-screen bg-background overflow-x-hidden",
      children: [
        y.jsx(RS, {}),
        y.jsx(AS, {}),
        y.jsx(MS, {}),
        y.jsx(LS, {}),
        y.jsx(QS, {}),
        y.jsxs("div", {
          id: "sections-bg-1",
          children: [y.jsx(KS, {}), y.jsx(qS, {}), y.jsx(ZS, {})],
        }),
        y.jsx(nE, {}),
        y.jsx(oE, {}),
      ],
    }),
  sE = () => {
    const e = Sg();
    return (
      x.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname
        );
      }, [e.pathname]),
      y.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: y.jsxs("div", {
          className: "text-center",
          children: [
            y.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            y.jsx("p", {
              className: "mb-4 text-xl text-muted-foreground",
              children: "Oops! Page not found",
            }),
            y.jsx("a", {
              href: "/",
              className: "text-primary underline hover:text-primary/90",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  lE = new $2(),
  aE = () =>
    y.jsx(B2, {
      client: lE,
      children: y.jsxs(g2, {
        children: [
          y.jsx(Z1, {}),
          y.jsx(Ow, {}),
          y.jsx(TS, {
            children: y.jsxs(CS, {
              children: [
                y.jsx(Xa, { path: "/", element: y.jsx(iE, {}) }),
                y.jsx(Xa, { path: "*", element: y.jsx(sE, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
Vh(document.getElementById("root")).render(y.jsx(aE, {}));
