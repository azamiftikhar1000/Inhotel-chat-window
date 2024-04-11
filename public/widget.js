var inbox_id = ASSISTANT_INTERACTION_PROFILE_ID;

var ACCOUNT_ID;

var url =
  'https://inhotel-bda7de42c465.herokuapp.com/api/v1/core/get_account_id_by_inbox_id?inbox_id=' +
  encodeURIComponent(inbox_id);
(xD = 'https://inhotel-chat-window-639f6321c606.herokuapp.com'),
  (ND = 'https://inhotel-chat.eastus.cloudapp.azure.com');
OD = 'https://inhotel-chat-window-639f6321c606.herokuapp.com';
var Mq = 'https://inhotel-bda7de42c465.herokuapp.com';

// // LOCAL
// var Mq = 'http://127.0.0.1:8000';
// ND = 'https://inhotel-chat.eastus.cloudapp.azure.com';
// OD = 'http://127.0.0.1:3000';
// xD = 'http://127.0.0.1:3000',
// var url ='http://127.0.0.1:8000/api/v1/core/get_account_id_by_inbox_id?inbox_id=' +encodeURIComponent(inbox_id);
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => {
    if (data.status === 0) {
      ACCOUNT_ID = data.account_id;
    } else {
      console.error('Failed to retrieve account ID:', data.message);
    }
  })
  .catch((error) => {
    console.error('Error fetching account ID:', error);
  })
  .finally(() => {
    if (!ACCOUNT_ID) {
      throw new Error(
        'An account token is required to render the InhotelChatWindow chat widget!'
      );
    }

    (function () {
      function za(a) {
        return a && a.__esModule ? {d: a.default} : {d: a};
      }
      var Pb,
        Sj,
        tr,
        ur,
        vr = false;
      function wr(r) {
        if (null == r)
          throw new TypeError(
            'Object.assign cannot be called with null or undefined'
          );
        return Object(r);
      }
      function xr() {
        try {
          if (!Object.assign) return !1;
          var r = new String('abc');
          if (((r[5] = 'de'), '5' === Object.getOwnPropertyNames(r)[0]))
            return !1;
          for (var e = {}, t = 0; t < 10; t++)
            e['_' + String.fromCharCode(t)] = t;
          if (
            '0123456789' !==
            Object.getOwnPropertyNames(e)
              .map(function (r) {
                return e[r];
              })
              .join('')
          )
            return !1;
          var n = {};
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function (r) {
              n[r] = r;
            }),
            'abcdefghijklmnopqrst' ===
              Object.keys(Object.assign({}, n)).join('')
          );
        } catch (o) {
          return !1;
        }
      }
      function gg() {
        if (vr) return;
        vr = true;
        Pb = {};
        Sj = Object.getOwnPropertySymbols;
        tr = Object.prototype.hasOwnProperty;
        ur = Object.prototype.propertyIsEnumerable;
        Pb = xr()
          ? Object.assign
          : function (r, e) {
              for (var t, n, o = wr(r), a = 1; a < arguments.length; a++) {
                for (var $ in (t = Object(arguments[a])))
                  tr.call(t, $) && (o[$] = t[$]);
                if (Sj) {
                  n = Sj(t);
                  for (var s = 0; s < n.length; s++)
                    ur.call(t, n[s]) && (o[n[s]] = t[n[s]]);
                }
              }
              return o;
            };
      }
      var ka,
        hg,
        fb,
        hd,
        yr,
        zr,
        Ar,
        Br,
        Cr,
        Dr,
        Er,
        Fr,
        Gr,
        Hr,
        Tj,
        Uj,
        Vj,
        ig,
        jg,
        Wj,
        Xj,
        Yj,
        ze,
        Zj,
        Ir,
        Jr,
        Kr,
        Lr,
        Mr,
        Nr,
        Or,
        Pr,
        Qr,
        Rr,
        Sr,
        Tr,
        Ur,
        Vr,
        Wr,
        Xr,
        Yr,
        Zr,
        $r,
        _r,
        as,
        bs,
        cs,
        ds,
        es,
        fs,
        gs,
        hs,
        is,
        js = false;
      function id($) {
        for (
          var r = 'https://reactjs.org/docs/error-decoder.html?invariant=' + $,
            e = 1;
          e < arguments.length;
          e++
        )
          r += '&args[]=' + encodeURIComponent(arguments[e]);
        return (
          'Minified React error #' +
          $ +
          '; visit ' +
          r +
          ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
      }
      function Ac($, r, e) {
        (this.props = $),
          (this.context = r),
          (this.refs = Vj),
          (this.updater = e || Uj);
      }
      function $j() {}
      function kg($, r, e) {
        (this.props = $),
          (this.context = r),
          (this.refs = Vj),
          (this.updater = e || Uj);
      }
      function _j($, r, e) {
        var a,
          t = {},
          i = null,
          o = null;
        if (null != r)
          for (a in (void 0 !== r.ref && (o = r.ref),
          void 0 !== r.key && (i = '' + r.key),
          r))
            Wj.call(r, a) && !Xj.hasOwnProperty(a) && (t[a] = r[a]);
        var n = arguments.length - 2;
        if (1 === n) t.children = e;
        else if (1 < n) {
          for (var u = Array(n), w = 0; w < n; w++) u[w] = arguments[w + 2];
          t.children = u;
        }
        if ($ && $.defaultProps)
          for (a in (n = $.defaultProps)) void 0 === t[a] && (t[a] = n[a]);
        return {
          $$typeof: hd,
          type: $,
          key: i,
          ref: o,
          props: t,
          _owner: jg.current,
        };
      }
      function ks($, r) {
        return {
          $$typeof: hd,
          type: $.type,
          key: r,
          ref: $.ref,
          props: $.props,
          _owner: $._owner,
        };
      }
      function lg($) {
        return 'object' == typeof $ && null !== $ && $.$$typeof === hd;
      }
      function ls($) {
        var r = {'=': '=0', ':': '=2'};
        return (
          '$' +
          ('' + $).replace(/[=:]/g, function ($) {
            return r[$];
          })
        );
      }
      function ak($, r, e, a) {
        if (ze.length) {
          var t = ze.pop();
          return (
            (t.result = $),
            (t.keyPrefix = r),
            (t.func = e),
            (t.context = a),
            (t.count = 0),
            t
          );
        }
        return {result: $, keyPrefix: r, func: e, context: a, count: 0};
      }
      function bk($) {
        ($.result = null),
          ($.keyPrefix = null),
          ($.func = null),
          ($.context = null),
          ($.count = 0),
          10 > ze.length && ze.push($);
      }
      function mg($, r, e, a) {
        var t = typeof $;
        ('undefined' !== t && 'boolean' !== t) || ($ = null);
        var i = !1;
        if (null === $) i = !0;
        else
          switch (t) {
            case 'string':
            case 'number':
              i = !0;
              break;
            case 'object':
              switch ($.$$typeof) {
                case hd:
                case yr:
                  i = !0;
              }
          }
        if (i) return e(a, $, '' === r ? '.' + og($, 0) : r), 1;
        if (((i = 0), (r = '' === r ? '.' : r + ':'), Array.isArray($)))
          for (var o = 0; o < $.length; o++) {
            var n = r + og((t = $[o]), o);
            i += mg(t, n, e, a);
          }
        else if (
          (null === $ || 'object' != typeof $
            ? (n = null)
            : (n =
                'function' == typeof (n = (Tj && $[Tj]) || $['@@iterator'])
                  ? n
                  : null),
          'function' == typeof n)
        )
          for ($ = n.call($), o = 0; !(t = $.next()).done; )
            i += mg((t = t.value), (n = r + og(t, o++)), e, a);
        else if ('object' === t)
          throw (
            ((e = '' + $),
            Error(
              id(
                31,
                '[object Object]' === e
                  ? 'object with keys {' + Object.keys($).join(', ') + '}'
                  : e,
                ''
              )
            ))
          );
        return i;
      }
      function ng($, r, e) {
        return null == $ ? 0 : mg($, '', r, e);
      }
      function og($, r) {
        return 'object' == typeof $ && null !== $ && null != $.key
          ? ls($.key)
          : r.toString(36);
      }
      function ms($, r) {
        $.func.call($.context, r, $.count++);
      }
      function ns($, r, e) {
        var a = $.result,
          t = $.keyPrefix;
        ($ = $.func.call($.context, r, $.count++)),
          Array.isArray($)
            ? pg($, a, e, function ($) {
                return $;
              })
            : null != $ &&
              (lg($) &&
                ($ = ks(
                  $,
                  t +
                    (!$.key || (r && r.key === $.key)
                      ? ''
                      : ('' + $.key).replace(Yj, '$&/') + '/') +
                    e
                )),
              a.push($));
      }
      function pg($, r, e, a, t) {
        var i = '';
        null != e && (i = ('' + e).replace(Yj, '$&/') + '/'),
          ng($, ns, (r = ak(r, i, a, t))),
          bk(r);
      }
      function Cb() {
        var $ = Zj.current;
        if (null === $) throw Error(id(321));
        return $;
      }
      function os() {
        if (js) return;
        js = true;
        ka = {};
        hg = (gg(), Pb);
        fb = 'function' == typeof Symbol && Symbol.for;
        hd = fb ? Symbol.for('react.element') : 60103;
        yr = fb ? Symbol.for('react.portal') : 60106;
        zr = fb ? Symbol.for('react.fragment') : 60107;
        Ar = fb ? Symbol.for('react.strict_mode') : 60108;
        Br = fb ? Symbol.for('react.profiler') : 60114;
        Cr = fb ? Symbol.for('react.provider') : 60109;
        Dr = fb ? Symbol.for('react.context') : 60110;
        Er = fb ? Symbol.for('react.forward_ref') : 60112;
        Fr = fb ? Symbol.for('react.suspense') : 60113;
        Gr = fb ? Symbol.for('react.memo') : 60115;
        Hr = fb ? Symbol.for('react.lazy') : 60116;
        Tj = 'function' == typeof Symbol && Symbol.iterator;
        Uj = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        };
        Vj = {};
        (Ac.prototype.isReactComponent = {}),
          (Ac.prototype.setState = function ($, r) {
            if ('object' != typeof $ && 'function' != typeof $ && null != $)
              throw Error(id(85));
            this.updater.enqueueSetState(this, $, r, 'setState');
          }),
          (Ac.prototype.forceUpdate = function ($) {
            this.updater.enqueueForceUpdate(this, $, 'forceUpdate');
          }),
          ($j.prototype = Ac.prototype);
        ig = kg.prototype = new $j();
        (ig.constructor = kg),
          hg(ig, Ac.prototype),
          (ig.isPureReactComponent = !0);
        jg = {current: null};
        Wj = Object.prototype.hasOwnProperty;
        Xj = {key: !0, ref: !0, __self: !0, __source: !0};
        Yj = /\/+/g;
        ze = [];
        Zj = {current: null};
        Ir = {
          ReactCurrentDispatcher: Zj,
          ReactCurrentBatchConfig: {suspense: null},
          ReactCurrentOwner: jg,
          IsSomeRendererActing: {current: !1},
          assign: hg,
        };
        Jr = {
          map: function ($, r, e) {
            if (null == $) return $;
            var a = [];
            return pg($, a, null, r, e), a;
          },
          forEach: function ($, r, e) {
            if (null == $) return $;
            ng($, ms, (r = ak(null, null, r, e))), bk(r);
          },
          count: function ($) {
            return ng(
              $,
              function () {
                return null;
              },
              null
            );
          },
          toArray: function ($) {
            var r = [];
            return (
              pg($, r, null, function ($) {
                return $;
              }),
              r
            );
          },
          only: function ($) {
            if (!lg($)) throw Error(id(143));
            return $;
          },
        };
        ka.Children = Jr;
        Kr = Ac;
        ka.Component = Kr;
        Lr = zr;
        ka.Fragment = Lr;
        Mr = Br;
        ka.Profiler = Mr;
        Nr = kg;
        ka.PureComponent = Nr;
        Or = Ar;
        ka.StrictMode = Or;
        Pr = Fr;
        ka.Suspense = Pr;
        Qr = Ir;
        ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qr;
        Rr = function ($, r, e) {
          if (null == $) throw Error(id(267, $));
          var a = hg({}, $.props),
            t = $.key,
            i = $.ref,
            o = $._owner;
          if (null != r) {
            if (
              (void 0 !== r.ref && ((i = r.ref), (o = jg.current)),
              void 0 !== r.key && (t = '' + r.key),
              $.type && $.type.defaultProps)
            )
              var n = $.type.defaultProps;
            for (u in r)
              Wj.call(r, u) &&
                !Xj.hasOwnProperty(u) &&
                (a[u] = void 0 === r[u] && void 0 !== n ? n[u] : r[u]);
          }
          var u = arguments.length - 2;
          if (1 === u) a.children = e;
          else if (1 < u) {
            n = Array(u);
            for (var w = 0; w < u; w++) n[w] = arguments[w + 2];
            a.children = n;
          }
          return {
            $$typeof: hd,
            type: $.type,
            key: t,
            ref: i,
            props: a,
            _owner: o,
          };
        };
        ka.cloneElement = Rr;
        Sr = function ($, r) {
          return (
            void 0 === r && (r = null),
            (($ = {
              $$typeof: Dr,
              _calculateChangedBits: r,
              _currentValue: $,
              _currentValue2: $,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = {$$typeof: Cr, _context: $}),
            ($.Consumer = $)
          );
        };
        ka.createContext = Sr;
        Tr = _j;
        ka.createElement = Tr;
        Ur = function ($) {
          var r = _j.bind(null, $);
          return (r.type = $), r;
        };
        ka.createFactory = Ur;
        Vr = function () {
          return {current: null};
        };
        ka.createRef = Vr;
        Wr = function ($) {
          return {$$typeof: Er, render: $};
        };
        ka.forwardRef = Wr;
        Xr = lg;
        ka.isValidElement = Xr;
        Yr = function ($) {
          return {$$typeof: Hr, _ctor: $, _status: -1, _result: null};
        };
        ka.lazy = Yr;
        Zr = function ($, r) {
          return {$$typeof: Gr, type: $, compare: void 0 === r ? null : r};
        };
        ka.memo = Zr;
        $r = function ($, r) {
          return Cb().useCallback($, r);
        };
        ka.useCallback = $r;
        _r = function ($, r) {
          return Cb().useContext($, r);
        };
        ka.useContext = _r;
        as = function () {};
        ka.useDebugValue = as;
        bs = function ($, r) {
          return Cb().useEffect($, r);
        };
        ka.useEffect = bs;
        cs = function ($, r, e) {
          return Cb().useImperativeHandle($, r, e);
        };
        ka.useImperativeHandle = cs;
        ds = function ($, r) {
          return Cb().useLayoutEffect($, r);
        };
        ka.useLayoutEffect = ds;
        es = function ($, r) {
          return Cb().useMemo($, r);
        };
        ka.useMemo = es;
        fs = function ($, r, e) {
          return Cb().useReducer($, r, e);
        };
        ka.useReducer = fs;
        gs = function ($) {
          return Cb().useRef($);
        };
        ka.useRef = gs;
        hs = function ($) {
          return Cb().useState($);
        };
        ka.useState = hs;
        is = '16.13.1';
        ka.version = is;
      }
      var aa,
        ps = false;
      function Ka() {
        if (ps) return;
        ps = true;
        aa = {};
        aa = (os(), ka);
      }
      var qs = {};
      function ck() {
        if (
          'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        ) {
          0;
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ck);
          } catch (c) {
            console.error(c);
          }
        }
      }
      var pb,
        dk,
        Ae,
        qg,
        ek,
        fk,
        rs,
        na,
        gb,
        Qb,
        ss,
        Xa,
        Rb,
        gk,
        rg,
        hk,
        ts,
        us,
        vs,
        ws,
        xs,
        ys,
        zs,
        As,
        Bs,
        Cs,
        Ds,
        Es,
        Fs,
        Gs,
        Hs,
        Is,
        Js,
        Ks,
        Ls = false;
      function sg($, v) {
        var r = $.length;
        $.push(v);
        $: for (;;) {
          var a = (r - 1) >>> 1,
            e = $[a];
          if (!(void 0 !== e && 0 < Ce(e, v))) break $;
          ($[a] = v), ($[r] = e), (r = a);
        }
      }
      function Ya($) {
        return void 0 === ($ = $[0]) ? null : $;
      }
      function Be($) {
        var v = $[0];
        if (void 0 !== v) {
          var r = $.pop();
          if (r !== v) {
            $[0] = r;
            $: for (var a = 0, e = $.length; a < e; ) {
              var t = 2 * (a + 1) - 1,
                b = $[t],
                n = t + 1,
                P = $[n];
              if (void 0 !== b && 0 > Ce(b, r))
                void 0 !== P && 0 > Ce(P, b)
                  ? (($[a] = P), ($[n] = r), (a = n))
                  : (($[a] = b), ($[t] = r), (a = t));
              else {
                if (!(void 0 !== P && 0 > Ce(P, r))) break $;
                ($[a] = P), ($[n] = r), (a = n);
              }
            }
          }
          return v;
        }
        return null;
      }
      function Ce($, v) {
        var r = $.sortIndex - v.sortIndex;
        return 0 !== r ? r : $.id - v.id;
      }
      function De($) {
        for (var v = Ya(Qb); null !== v; ) {
          if (null === v.callback) Be(Qb);
          else {
            if (!(v.startTime <= $)) break;
            Be(Qb), (v.sortIndex = v.expirationTime), sg(gb, v);
          }
          v = Ya(Qb);
        }
      }
      function tg($) {
        if (((hk = !1), De($), !rg))
          if (null !== Ya(gb)) (rg = !0), Ae(ug);
          else {
            var v = Ya(Qb);
            null !== v && qg(tg, v.startTime - $);
          }
      }
      function ug($, v) {
        (rg = !1), hk && ((hk = !1), ek()), (gk = !0);
        var r = Rb;
        try {
          for (
            De(v), Xa = Ya(gb);
            null !== Xa && (!(Xa.expirationTime > v) || ($ && !fk()));

          ) {
            var a = Xa.callback;
            if (null !== a) {
              (Xa.callback = null), (Rb = Xa.priorityLevel);
              var e = a(Xa.expirationTime <= v);
              (v = pb()),
                'function' == typeof e
                  ? (Xa.callback = e)
                  : Xa === Ya(gb) && Be(gb),
                De(v);
            } else Be(gb);
            Xa = Ya(gb);
          }
          if (null !== Xa) var t = !0;
          else {
            var b = Ya(Qb);
            null !== b && qg(tg, b.startTime - v), (t = !1);
          }
          return t;
        } finally {
          (Xa = null), (Rb = r), (gk = !1);
        }
      }
      function ik($) {
        switch ($) {
          case 1:
            return -1;
          case 2:
            return 250;
          case 5:
            return 1073741823;
          case 4:
            return 1e4;
          default:
            return 5e3;
        }
      }
      function Ms() {
        if (Ls) return;
        Ls = true;
        na = {};
        if (
          'undefined' == typeof window ||
          'function' != typeof MessageChannel
        ) {
          var $IvPb$var$p = null,
            $IvPb$var$q = null,
            $IvPb$var$t = function () {
              if (null !== $IvPb$var$p)
                try {
                  var $ = pb();
                  $IvPb$var$p(!0, $), ($IvPb$var$p = null);
                } catch (v) {
                  throw (setTimeout($IvPb$var$t, 0), v);
                }
            },
            $IvPb$var$u = Date.now();
          (pb = function () {
            return Date.now() - $IvPb$var$u;
          }),
            (na.unstable_now = pb),
            (Ae = function ($) {
              null !== $IvPb$var$p
                ? setTimeout(Ae, 0, $)
                : (($IvPb$var$p = $), setTimeout($IvPb$var$t, 0));
            }),
            (qg = function ($, v) {
              $IvPb$var$q = setTimeout($, v);
            }),
            (ek = function () {
              clearTimeout($IvPb$var$q);
            }),
            (fk = function () {
              return !1;
            }),
            (dk = function () {}),
            (rs = na.unstable_forceFrameRate = dk);
        } else {
          var $IvPb$var$w = window.performance,
            $IvPb$var$x = window.Date,
            $IvPb$var$y = window.setTimeout,
            $IvPb$var$z = window.clearTimeout;
          if ('undefined' != typeof console) {
            var $IvPb$var$A = window.cancelAnimationFrame;
            'function' != typeof window.requestAnimationFrame &&
              console.error(
                "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
              ),
              'function' != typeof $IvPb$var$A &&
                console.error(
                  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
                );
          }
          if (
            'object' == typeof $IvPb$var$w &&
            'function' == typeof $IvPb$var$w.now
          )
            (pb = function () {
              return $IvPb$var$w.now();
            }),
              (na.unstable_now = pb);
          else {
            var $IvPb$var$B = $IvPb$var$x.now();
            (pb = function () {
              return $IvPb$var$x.now() - $IvPb$var$B;
            }),
              (na.unstable_now = pb);
          }
          var $IvPb$var$C = !1,
            $IvPb$var$D = null,
            $IvPb$var$E = -1,
            $IvPb$var$F = 5,
            $IvPb$var$G = 0;
          (fk = function () {
            return pb() >= $IvPb$var$G;
          }),
            (rs = function () {}),
            (dk = function ($) {
              0 > $ || 125 < $
                ? console.error(
                    'forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported'
                  )
                : ($IvPb$var$F = 0 < $ ? Math.floor(1e3 / $) : 5);
            }),
            (na.unstable_forceFrameRate = dk);
          var $IvPb$var$H = new MessageChannel(),
            $IvPb$var$I = $IvPb$var$H.port2;
          ($IvPb$var$H.port1.onmessage = function () {
            if (null !== $IvPb$var$D) {
              var $ = pb();
              $IvPb$var$G = $ + $IvPb$var$F;
              try {
                $IvPb$var$D(!0, $)
                  ? $IvPb$var$I.postMessage(null)
                  : (($IvPb$var$C = !1), ($IvPb$var$D = null));
              } catch (v) {
                throw ($IvPb$var$I.postMessage(null), v);
              }
            } else $IvPb$var$C = !1;
          }),
            (Ae = function ($) {
              ($IvPb$var$D = $),
                $IvPb$var$C ||
                  (($IvPb$var$C = !0), $IvPb$var$I.postMessage(null));
            }),
            (qg = function ($, v) {
              $IvPb$var$E = $IvPb$var$y(function () {
                $(pb());
              }, v);
            }),
            (ek = function () {
              $IvPb$var$z($IvPb$var$E), ($IvPb$var$E = -1);
            });
        }
        gb = [];
        Qb = [];
        ss = 1;
        Xa = null;
        Rb = 3;
        gk = !1;
        rg = !1;
        hk = !1;
        ts = rs;
        us = 5;
        na.unstable_IdlePriority = us;
        vs = 1;
        na.unstable_ImmediatePriority = vs;
        ws = 4;
        na.unstable_LowPriority = ws;
        xs = 3;
        na.unstable_NormalPriority = xs;
        ys = null;
        na.unstable_Profiling = ys;
        zs = 2;
        na.unstable_UserBlockingPriority = zs;
        As = function ($) {
          $.callback = null;
        };
        na.unstable_cancelCallback = As;
        Bs = function () {
          rg || gk || ((rg = !0), Ae(ug));
        };
        na.unstable_continueExecution = Bs;
        Cs = function () {
          return Rb;
        };
        na.unstable_getCurrentPriorityLevel = Cs;
        Ds = function () {
          return Ya(gb);
        };
        na.unstable_getFirstCallbackNode = Ds;
        Es = function ($) {
          switch (Rb) {
            case 1:
            case 2:
            case 3:
              var v = 3;
              break;
            default:
              v = Rb;
          }
          var r = Rb;
          Rb = v;
          try {
            return $();
          } finally {
            Rb = r;
          }
        };
        na.unstable_next = Es;
        Fs = function () {};
        na.unstable_pauseExecution = Fs;
        Gs = ts;
        na.unstable_requestPaint = Gs;
        Hs = function ($, v) {
          switch ($) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              $ = 3;
          }
          var r = Rb;
          Rb = $;
          try {
            return v();
          } finally {
            Rb = r;
          }
        };
        na.unstable_runWithPriority = Hs;
        Is = function ($, v, r) {
          var a = pb();
          if ('object' == typeof r && null !== r) {
            var e = r.delay;
            (e = 'number' == typeof e && 0 < e ? a + e : a),
              (r = 'number' == typeof r.timeout ? r.timeout : ik($));
          } else (r = ik($)), (e = a);
          return (
            ($ = {
              id: ss++,
              callback: v,
              priorityLevel: $,
              startTime: e,
              expirationTime: (r = e + r),
              sortIndex: -1,
            }),
            e > a
              ? (($.sortIndex = e),
                sg(Qb, $),
                null === Ya(gb) &&
                  $ === Ya(Qb) &&
                  (hk ? ek() : (hk = !0), qg(tg, e - a)))
              : (($.sortIndex = r), sg(gb, $), rg || gk || ((rg = !0), Ae(ug))),
            $
          );
        };
        na.unstable_scheduleCallback = Is;
        Js = function () {
          var $ = pb();
          De($);
          var v = Ya(gb);
          return (
            (v !== Xa &&
              null !== Xa &&
              null !== v &&
              null !== v.callback &&
              v.startTime <= $ &&
              v.expirationTime < Xa.expirationTime) ||
            fk()
          );
        };
        na.unstable_shouldYield = Js;
        Ks = function ($) {
          var v = Rb;
          return function () {
            var r = Rb;
            Rb = v;
            try {
              return $.apply(this, arguments);
            } finally {
              Rb = r;
            }
          };
        };
        na.unstable_wrapCallback = Ks;
      }
      var Ns,
        Os = false;
      function Ps() {
        if (Os) return;
        Os = true;
        Ns = {};
        Ns = (Ms(), na);
      }
      var Za,
        Ee,
        Fa,
        Aa,
        jk,
        Qs,
        kk,
        Rs,
        Ss,
        lk,
        Ts,
        Us,
        vg,
        Bc,
        Fe,
        wg,
        Cc,
        xg,
        Sb,
        mk,
        Ge,
        He,
        Vs,
        yg,
        Ws,
        Xs,
        nk,
        ok,
        pk,
        Ba,
        zg,
        hb,
        Ys,
        La,
        Ie,
        Dc,
        ec,
        qk,
        Je,
        rk,
        sk,
        Zs,
        Ag,
        Ke,
        Bg,
        Cg,
        tk,
        uk,
        vk,
        wk,
        xk,
        yk,
        Ec,
        Dg,
        $s,
        zk,
        Ak,
        Bk,
        Ck,
        jd,
        Dk,
        Eg,
        Le,
        _s,
        Ek,
        at,
        bt,
        qb,
        kd,
        ld,
        md,
        nd,
        od,
        pd,
        Fg,
        ct,
        Fk,
        Gk,
        Gg,
        dt,
        et,
        ft,
        Hk,
        qd,
        gt,
        ht,
        Ik,
        Jk,
        Kk,
        Hg,
        Ig,
        it,
        jt,
        Jg,
        kt,
        Kg,
        Tb,
        Me,
        rd,
        sd,
        lt,
        Lk,
        mt,
        nt,
        ot,
        Lg,
        Ne,
        pt,
        Mk,
        Nk,
        Db,
        qt,
        Oe,
        rt,
        st,
        Ok,
        Pk,
        Mg,
        Qk,
        tt,
        td,
        ut,
        vt,
        wt,
        xt,
        yt,
        ud,
        Rk,
        vd,
        zt,
        fc,
        At,
        Bt,
        Sk,
        Pe,
        Ct,
        Tk,
        Dt,
        Et,
        Ft,
        Gt,
        Ht,
        It,
        Jt,
        Kt,
        Lt,
        Mt,
        Nt,
        Ot,
        Pt,
        Qt,
        Ng,
        wd,
        Ub,
        Da,
        Ma,
        Fc,
        Rt,
        Og,
        Uk,
        Vk,
        Pg,
        St,
        Qe,
        Wk,
        Xk,
        Yk,
        Zk,
        $k,
        Tt,
        Ut,
        Gc,
        _k,
        Vt,
        al,
        $a,
        Re,
        bl,
        cl,
        Wt,
        Se,
        xd,
        dl,
        Te,
        Ue,
        Hc,
        Qg,
        yd,
        rb,
        zd,
        Ad,
        ua,
        Ve,
        ab,
        Bd,
        Ea,
        sb,
        Vb,
        Xt,
        We,
        Yt,
        Zt,
        $t,
        Rg,
        el,
        fl,
        _t,
        gl,
        au,
        hl,
        bu,
        cu,
        Sg,
        du,
        eu,
        fu,
        gu,
        Xe,
        il,
        wa,
        Tg,
        ib,
        tb,
        gc,
        Ye,
        jl,
        Ze,
        $e,
        Ug,
        sa,
        Eb,
        ha,
        bb,
        cb,
        kl,
        hc,
        Vg,
        ll,
        Wg,
        ml,
        nl,
        ol,
        ca,
        pl,
        hu,
        Ic,
        ql,
        Xg,
        Yg,
        Cd,
        rl,
        iu,
        sl,
        tl,
        ul,
        ju,
        ku,
        lu,
        mu,
        nu,
        ou,
        pu,
        qu,
        ru,
        su,
        tu,
        uu,
        vu = false;
      function Y(t) {
        for (
          var $ = 'https://reactjs.org/docs/error-decoder.html?invariant=' + t,
            e = 1;
          e < arguments.length;
          e++
        )
          $ += '&args[]=' + encodeURIComponent(arguments[e]);
        return (
          'Minified React error #' +
          t +
          '; visit ' +
          $ +
          ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
      }
      function wu(t, $, e, r, i, a, n, l, v) {
        var o = Array.prototype.slice.call(arguments, 3);
        try {
          $.apply(e, o);
        } catch (u) {
          this.onError(u);
        }
      }
      function xu(t, $, e, r, i, a, n, l, v) {
        (jk = !1), (Qs = null), wu.apply(Ss, arguments);
      }
      function yu(t, $, e, r, i, a, n, l, v) {
        if ((xu.apply(this, arguments), jk)) {
          if (!jk) throw Error(Y(198));
          var o = Qs;
          (jk = !1), (Qs = null), kk || ((kk = !0), (Rs = o));
        }
      }
      function vl(t, $, e) {
        var r = t.type || 'unknown-event';
        (t.currentTarget = Us(e)),
          yu(r, $, void 0, t),
          (t.currentTarget = null);
      }
      function wl() {
        if (vg)
          for (var t in Bc) {
            var $ = Bc[t],
              e = vg.indexOf(t);
            if (!(-1 < e)) throw Error(Y(96, t));
            if (!Fe[e]) {
              if (!$.extractEvents) throw Error(Y(97, t));
              for (var r in ((Fe[e] = $), (e = $.eventTypes))) {
                var i = void 0,
                  a = e[r],
                  n = $,
                  l = r;
                if (wg.hasOwnProperty(l)) throw Error(Y(99, l));
                wg[l] = a;
                var v = a.phasedRegistrationNames;
                if (v) {
                  for (i in v) v.hasOwnProperty(i) && xl(v[i], n, l);
                  i = !0;
                } else
                  a.registrationName
                    ? (xl(a.registrationName, n, l), (i = !0))
                    : (i = !1);
                if (!i) throw Error(Y(98, r, t));
              }
            }
          }
      }
      function xl(t, $, e) {
        if (Cc[t]) throw Error(Y(100, t));
        (Cc[t] = $), (xg[t] = $.eventTypes[e].dependencies);
      }
      function yl(t) {
        var $,
          e = !1;
        for ($ in t)
          if (t.hasOwnProperty($)) {
            var r = t[$];
            if (!Bc.hasOwnProperty($) || Bc[$] !== r) {
              if (Bc[$]) throw Error(Y(102, $));
              (Bc[$] = r), (e = !0);
            }
          }
        e && wl();
      }
      function zl(t) {
        if ((t = Ts(t))) {
          if ('function' != typeof mk) throw Error(Y(280));
          var $ = t.stateNode;
          $ && (($ = lk($)), mk(t.stateNode, t.type, $));
        }
      }
      function Al(t) {
        Ge ? (He ? He.push(t) : (He = [t])) : (Ge = t);
      }
      function Bl() {
        if (Ge) {
          var t = Ge,
            $ = He;
          if (((He = Ge = null), zl(t), $))
            for (t = 0; t < $.length; t++) zl($[t]);
        }
      }
      function Cl(t, $) {
        return t($);
      }
      function zu(t, $, e, r, i) {
        return t($, e, r, i);
      }
      function Dl() {}
      function Zg() {
        (null === Ge && null === He) || (Dl(), Bl());
      }
      function El(t, $, e) {
        if (Ws) return t($, e);
        Ws = !0;
        try {
          return Vs(t, $, e);
        } finally {
          (Ws = !1), Zg();
        }
      }
      function Au(t) {
        return (
          !!nk.call(pk, t) ||
          (!nk.call(ok, t) && (Xs.test(t) ? (pk[t] = !0) : ((ok[t] = !0), !1)))
        );
      }
      function Bu(t, $, e, r) {
        if (null !== e && 0 === e.type) return !1;
        switch (typeof $) {
          case 'function':
          case 'symbol':
            return !0;
          case 'boolean':
            return (
              !r &&
              (null !== e
                ? !e.acceptsBooleans
                : 'data-' !== (t = t.toLowerCase().slice(0, 5)) &&
                  'aria-' !== t)
            );
          default:
            return !1;
        }
      }
      function Cu(t, $, e, r) {
        if (null == $ || Bu(t, $, e, r)) return !0;
        if (r) return !1;
        if (null !== e)
          switch (e.type) {
            case 3:
              return !$;
            case 4:
              return !1 === $;
            case 5:
              return isNaN($);
            case 6:
              return isNaN($) || 1 > $;
          }
        return !1;
      }
      function Ga(t, $, e, r, i, a) {
        (this.acceptsBooleans = 2 === $ || 3 === $ || 4 === $),
          (this.attributeName = r),
          (this.attributeNamespace = i),
          (this.mustUseProperty = e),
          (this.propertyName = t),
          (this.type = $),
          (this.sanitizeURL = a);
      }
      function $g(t) {
        return t[1].toUpperCase();
      }
      function _g(t, $, e, r) {
        var i = Ba.hasOwnProperty($) ? Ba[$] : null;
        (null !== i
          ? 0 === i.type
          : !r &&
            2 < $.length &&
            ('o' === $[0] || 'O' === $[0]) &&
            ('n' === $[1] || 'N' === $[1])) ||
          (Cu($, e, i, r) && (e = null),
          r || null === i
            ? Au($) &&
              (null === e ? t.removeAttribute($) : t.setAttribute($, '' + e))
            : i.mustUseProperty
            ? (t[i.propertyName] = null === e ? 3 !== i.type && '' : e)
            : (($ = i.attributeName),
              (r = i.attributeNamespace),
              null === e
                ? t.removeAttribute($)
                : ((e =
                    3 === (i = i.type) || (4 === i && !0 === e) ? '' : '' + e),
                  r ? t.setAttributeNS(r, $, e) : t.setAttribute($, e))));
      }
      function Dd(t) {
        return null === t || 'object' != typeof t
          ? null
          : 'function' == typeof (t = (vk && t[vk]) || t['@@iterator'])
          ? t
          : null;
      }
      function Du(t) {
        if (-1 === t._status) {
          t._status = 0;
          var $ = t._ctor;
          ($ = $()),
            (t._result = $),
            $.then(
              function ($) {
                0 === t._status &&
                  (($ = $.default), (t._status = 1), (t._result = $));
              },
              function ($) {
                0 === t._status && ((t._status = 2), (t._result = $));
              }
            );
        }
      }
      function Fb(t) {
        if (null == t) return null;
        if ('function' == typeof t) return t.displayName || t.name || null;
        if ('string' == typeof t) return t;
        switch (t) {
          case ec:
            return 'Fragment';
          case Dc:
            return 'Portal';
          case Je:
            return 'Profiler';
          case qk:
            return 'StrictMode';
          case Ke:
            return 'Suspense';
          case Bg:
            return 'SuspenseList';
        }
        if ('object' == typeof t)
          switch (t.$$typeof) {
            case sk:
              return 'Context.Consumer';
            case rk:
              return 'Context.Provider';
            case Ag:
              var $ = t.render;
              return (
                ($ = $.displayName || $.name || ''),
                t.displayName ||
                  ('' !== $ ? 'ForwardRef(' + $ + ')' : 'ForwardRef')
              );
            case Cg:
              return Fb(t.type);
            case uk:
              return Fb(t.render);
            case tk:
              if ((t = 1 === t._status ? t._result : null)) return Fb(t);
          }
        return null;
      }
      function ah(t) {
        var $ = '';
        do {
          t: switch (t.tag) {
            case 3:
            case 4:
            case 6:
            case 7:
            case 10:
            case 9:
              var e = '';
              break t;
            default:
              var r = t._debugOwner,
                i = t._debugSource,
                a = Fb(t.type);
              (e = null),
                r && (e = Fb(r.type)),
                (r = a),
                (a = ''),
                i
                  ? (a =
                      ' (at ' +
                      i.fileName.replace(Ys, '') +
                      ':' +
                      i.lineNumber +
                      ')')
                  : e && (a = ' (created by ' + e + ')'),
                (e = '\n    in ' + (r || 'Unknown') + a);
          }
          ($ += e), (t = t.return);
        } while (t);
        return $;
      }
      function Wb(t) {
        switch (typeof t) {
          case 'boolean':
          case 'number':
          case 'object':
          case 'string':
          case 'undefined':
            return t;
          default:
            return '';
        }
      }
      function Fl(t) {
        var $ = t.type;
        return (
          (t = t.nodeName) &&
          'input' === t.toLowerCase() &&
          ('checkbox' === $ || 'radio' === $)
        );
      }
      function Eu(t) {
        var $ = Fl(t) ? 'checked' : 'value',
          e = Object.getOwnPropertyDescriptor(t.constructor.prototype, $),
          r = '' + t[$];
        if (
          !t.hasOwnProperty($) &&
          void 0 !== e &&
          'function' == typeof e.get &&
          'function' == typeof e.set
        ) {
          var i = e.get,
            a = e.set;
          return (
            Object.defineProperty(t, $, {
              configurable: !0,
              get: function () {
                return i.call(this);
              },
              set: function (t) {
                (r = '' + t), a.call(this, t);
              },
            }),
            Object.defineProperty(t, $, {enumerable: e.enumerable}),
            {
              getValue: function () {
                return r;
              },
              setValue: function (t) {
                r = '' + t;
              },
              stopTracking: function () {
                (t._valueTracker = null), delete t[$];
              },
            }
          );
        }
      }
      function _e(t) {
        t._valueTracker || (t._valueTracker = Eu(t));
      }
      function Gl(t) {
        if (!t) return !1;
        var $ = t._valueTracker;
        if (!$) return !0;
        var e = $.getValue(),
          r = '';
        return (
          t && (r = Fl(t) ? (t.checked ? 'true' : 'false') : t.value),
          (t = r) !== e && ($.setValue(t), !0)
        );
      }
      function bh(t, $) {
        var e = $.checked;
        return Fa({}, $, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != e ? e : t._wrapperState.initialChecked,
        });
      }
      function Hl(t, $) {
        var e = null == $.defaultValue ? '' : $.defaultValue,
          r = null != $.checked ? $.checked : $.defaultChecked;
        (e = Wb(null != $.value ? $.value : e)),
          (t._wrapperState = {
            initialChecked: r,
            initialValue: e,
            controlled:
              'checkbox' === $.type || 'radio' === $.type
                ? null != $.checked
                : null != $.value,
          });
      }
      function Il(t, $) {
        null != ($ = $.checked) && _g(t, 'checked', $, !1);
      }
      function ch(t, $) {
        Il(t, $);
        var e = Wb($.value),
          r = $.type;
        if (null != e)
          'number' === r
            ? ((0 === e && '' === t.value) || t.value != e) &&
              (t.value = '' + e)
            : t.value !== '' + e && (t.value = '' + e);
        else if ('submit' === r || 'reset' === r)
          return void t.removeAttribute('value');
        $.hasOwnProperty('value')
          ? dh(t, $.type, e)
          : $.hasOwnProperty('defaultValue') &&
            dh(t, $.type, Wb($.defaultValue)),
          null == $.checked &&
            null != $.defaultChecked &&
            (t.defaultChecked = !!$.defaultChecked);
      }
      function Jl(t, $, e) {
        if ($.hasOwnProperty('value') || $.hasOwnProperty('defaultValue')) {
          var r = $.type;
          if (
            !(
              ('submit' !== r && 'reset' !== r) ||
              (void 0 !== $.value && null !== $.value)
            )
          )
            return;
          ($ = '' + t._wrapperState.initialValue),
            e || $ === t.value || (t.value = $),
            (t.defaultValue = $);
        }
        '' !== (e = t.name) && (t.name = ''),
          (t.defaultChecked = !!t._wrapperState.initialChecked),
          '' !== e && (t.name = e);
      }
      function dh(t, $, e) {
        ('number' === $ && t.ownerDocument.activeElement === t) ||
          (null == e
            ? (t.defaultValue = '' + t._wrapperState.initialValue)
            : t.defaultValue !== '' + e && (t.defaultValue = '' + e));
      }
      function Fu(t) {
        var $ = '';
        return (
          Ee.Children.forEach(t, function (t) {
            null != t && ($ += t);
          }),
          $
        );
      }
      function eh(t, $) {
        return (
          (t = Fa({children: void 0}, $)),
          ($ = Fu($.children)) && (t.children = $),
          t
        );
      }
      function Jc(t, $, e, r) {
        if (((t = t.options), $)) {
          $ = {};
          for (var i = 0; i < e.length; i++) $['$' + e[i]] = !0;
          for (e = 0; e < t.length; e++)
            (i = $.hasOwnProperty('$' + t[e].value)),
              t[e].selected !== i && (t[e].selected = i),
              i && r && (t[e].defaultSelected = !0);
        } else {
          for (e = '' + Wb(e), $ = null, i = 0; i < t.length; i++) {
            if (t[i].value === e)
              return (
                (t[i].selected = !0), void (r && (t[i].defaultSelected = !0))
              );
            null !== $ || t[i].disabled || ($ = t[i]);
          }
          null !== $ && ($.selected = !0);
        }
      }
      function fh(t, $) {
        if (null != $.dangerouslySetInnerHTML) throw Error(Y(91));
        return Fa({}, $, {
          value: void 0,
          defaultValue: void 0,
          children: '' + t._wrapperState.initialValue,
        });
      }
      function Kl(t, $) {
        var e = $.value;
        if (null == e) {
          if (((e = $.children), ($ = $.defaultValue), null != e)) {
            if (null != $) throw Error(Y(92));
            if (Array.isArray(e)) {
              if (!(1 >= e.length)) throw Error(Y(93));
              e = e[0];
            }
            $ = e;
          }
          null == $ && ($ = ''), (e = $);
        }
        t._wrapperState = {initialValue: Wb(e)};
      }
      function Ll(t, $) {
        var e = Wb($.value),
          r = Wb($.defaultValue);
        null != e &&
          ((e = '' + e) !== t.value && (t.value = e),
          null == $.defaultValue &&
            t.defaultValue !== e &&
            (t.defaultValue = e)),
          null != r && (t.defaultValue = '' + r);
      }
      function Ml(t) {
        var $ = t.textContent;
        $ === t._wrapperState.initialValue &&
          '' !== $ &&
          null !== $ &&
          (t.value = $);
      }
      function Nl(t) {
        switch (t) {
          case 'svg':
            return 'http://www.w3.org/2000/svg';
          case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
          default:
            return 'http://www.w3.org/1999/xhtml';
        }
      }
      function gh(t, $) {
        return null == t || 'http://www.w3.org/1999/xhtml' === t
          ? Nl($)
          : 'http://www.w3.org/2000/svg' === t && 'foreignObject' === $
          ? 'http://www.w3.org/1999/xhtml'
          : t;
      }
      function Ed(t, $) {
        if ($) {
          var e = t.firstChild;
          if (e && e === t.lastChild && 3 === e.nodeType)
            return void (e.nodeValue = $);
        }
        t.textContent = $;
      }
      function af(t, $) {
        var e = {};
        return (
          (e[t.toLowerCase()] = $.toLowerCase()),
          (e['Webkit' + t] = 'webkit' + $),
          (e['Moz' + t] = 'moz' + $),
          e
        );
      }
      function bf(t) {
        if (Dg[t]) return Dg[t];
        if (!Ec[t]) return t;
        var $,
          e = Ec[t];
        for ($ in e) if (e.hasOwnProperty($) && $ in $s) return (Dg[t] = e[$]);
        return t;
      }
      function hh(t) {
        var $ = Dk.get(t);
        return void 0 === $ && (($ = new Map()), Dk.set(t, $)), $;
      }
      function ic(t) {
        var $ = t,
          e = t;
        if (t.alternate) for (; $.return; ) $ = $.return;
        else {
          t = $;
          do {
            0 != (1026 & ($ = t).effectTag) && (e = $.return), (t = $.return);
          } while (t);
        }
        return 3 === $.tag ? e : null;
      }
      function Ol(t) {
        if (13 === t.tag) {
          var $ = t.memoizedState;
          if (
            (null === $ && null !== (t = t.alternate) && ($ = t.memoizedState),
            null !== $)
          )
            return $.dehydrated;
        }
        return null;
      }
      function Pl(t) {
        if (ic(t) !== t) throw Error(Y(188));
      }
      function Gu(t) {
        var $ = t.alternate;
        if (!$) {
          if (null === ($ = ic(t))) throw Error(Y(188));
          return $ !== t ? null : t;
        }
        for (var e = t, r = $; ; ) {
          var i = e.return;
          if (null === i) break;
          var a = i.alternate;
          if (null === a) {
            if (null !== (r = i.return)) {
              e = r;
              continue;
            }
            break;
          }
          if (i.child === a.child) {
            for (a = i.child; a; ) {
              if (a === e) return Pl(i), t;
              if (a === r) return Pl(i), $;
              a = a.sibling;
            }
            throw Error(Y(188));
          }
          if (e.return !== r.return) (e = i), (r = a);
          else {
            for (var n = !1, l = i.child; l; ) {
              if (l === e) {
                (n = !0), (e = i), (r = a);
                break;
              }
              if (l === r) {
                (n = !0), (r = i), (e = a);
                break;
              }
              l = l.sibling;
            }
            if (!n) {
              for (l = a.child; l; ) {
                if (l === e) {
                  (n = !0), (e = a), (r = i);
                  break;
                }
                if (l === r) {
                  (n = !0), (r = a), (e = i);
                  break;
                }
                l = l.sibling;
              }
              if (!n) throw Error(Y(189));
            }
          }
          if (e.alternate !== r) throw Error(Y(190));
        }
        if (3 !== e.tag) throw Error(Y(188));
        return e.stateNode.current === e ? t : $;
      }
      function Ql(t) {
        if (!(t = Gu(t))) return null;
        for (var $ = t; ; ) {
          if (5 === $.tag || 6 === $.tag) return $;
          if ($.child) ($.child.return = $), ($ = $.child);
          else {
            if ($ === t) break;
            for (; !$.sibling; ) {
              if (!$.return || $.return === t) return null;
              $ = $.return;
            }
            ($.sibling.return = $.return), ($ = $.sibling);
          }
        }
        return null;
      }
      function Kc(t, $) {
        if (null == $) throw Error(Y(30));
        return null == t
          ? $
          : Array.isArray(t)
          ? Array.isArray($)
            ? (t.push.apply(t, $), t)
            : (t.push($), t)
          : Array.isArray($)
          ? [t].concat($)
          : [t, $];
      }
      function ih(t, $, e) {
        Array.isArray(t) ? t.forEach($, e) : t && $.call(e, t);
      }
      function Hu(t) {
        if (t) {
          var $ = t._dispatchListeners,
            e = t._dispatchInstances;
          if (Array.isArray($))
            for (var r = 0; r < $.length && !t.isPropagationStopped(); r++)
              vl(t, $[r], e[r]);
          else $ && vl(t, $, e);
          (t._dispatchListeners = null),
            (t._dispatchInstances = null),
            t.isPersistent() || t.constructor.release(t);
        }
      }
      function cf(t) {
        if ((null !== t && (Eg = Kc(Eg, t)), (t = Eg), (Eg = null), t)) {
          if ((ih(t, Hu), Eg)) throw Error(Y(95));
          if (kk) throw ((t = Rs), (kk = !1), (Rs = null), t);
        }
      }
      function jh(t) {
        return (
          (t = t.target || t.srcElement || window).correspondingUseElement &&
            (t = t.correspondingUseElement),
          3 === t.nodeType ? t.parentNode : t
        );
      }
      function Rl(t) {
        if (!Sb) return !1;
        var $ = (t = 'on' + t) in document;
        return (
          $ ||
            (($ = document.createElement('div')).setAttribute(t, 'return;'),
            ($ = 'function' == typeof $[t])),
          $
        );
      }
      function Sl(t) {
        (t.topLevelType = null),
          (t.nativeEvent = null),
          (t.targetInst = null),
          (t.ancestors.length = 0),
          10 > Le.length && Le.push(t);
      }
      function Tl(t, $, e, r) {
        if (Le.length) {
          var i = Le.pop();
          return (
            (i.topLevelType = t),
            (i.eventSystemFlags = r),
            (i.nativeEvent = $),
            (i.targetInst = e),
            i
          );
        }
        return {
          topLevelType: t,
          eventSystemFlags: r,
          nativeEvent: $,
          targetInst: e,
          ancestors: [],
        };
      }
      function Ul(t) {
        var $ = t.targetInst,
          e = $;
        do {
          if (!e) {
            t.ancestors.push(e);
            break;
          }
          var r = e;
          if (3 === r.tag) r = r.stateNode.containerInfo;
          else {
            for (; r.return; ) r = r.return;
            r = 3 !== r.tag ? null : r.stateNode.containerInfo;
          }
          if (!r) break;
          (5 !== ($ = e.tag) && 6 !== $) || t.ancestors.push(e), (e = Id(r));
        } while (e);
        for (e = 0; e < t.ancestors.length; e++) {
          $ = t.ancestors[e];
          var i = jh(t.nativeEvent);
          r = t.topLevelType;
          var a = t.nativeEvent,
            n = t.eventSystemFlags;
          0 === e && (n |= 64);
          for (var l = null, v = 0; v < Fe.length; v++) {
            var o = Fe[v];
            o && (o = o.extractEvents(r, $, a, i, n)) && (l = Kc(l, o));
          }
          cf(l);
        }
      }
      function kh(t, $, e) {
        if (!e.has(t)) {
          switch (t) {
            case 'scroll':
              Hd($, 'scroll', !0);
              break;
            case 'focus':
            case 'blur':
              Hd($, 'focus', !0),
                Hd($, 'blur', !0),
                e.set('blur', null),
                e.set('focus', null);
              break;
            case 'cancel':
            case 'close':
              Rl(t) && Hd($, t, !0);
              break;
            case 'invalid':
            case 'submit':
            case 'reset':
              break;
            default:
              -1 === jd.indexOf(t) && oa(t, $);
          }
          e.set(t, null);
        }
      }
      function Iu(t, $) {
        var e = hh($);
        Fg.forEach(function (t) {
          kh(t, $, e);
        }),
          ct.forEach(function (t) {
            kh(t, $, e);
          });
      }
      function lh(t, $, e, r, i) {
        return {
          blockedOn: t,
          topLevelType: $,
          eventSystemFlags: 32 | e,
          nativeEvent: i,
          container: r,
        };
      }
      function Vl(t, $) {
        switch (t) {
          case 'focus':
          case 'blur':
            kd = null;
            break;
          case 'dragenter':
          case 'dragleave':
            ld = null;
            break;
          case 'mouseover':
          case 'mouseout':
            md = null;
            break;
          case 'pointerover':
          case 'pointerout':
            nd.delete($.pointerId);
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
            od.delete($.pointerId);
        }
      }
      function Fd(t, $, e, r, i, a) {
        return null === t || t.nativeEvent !== a
          ? ((t = lh($, e, r, i, a)),
            null !== $ && null !== ($ = Jd($)) && Ek($),
            t)
          : ((t.eventSystemFlags |= r), t);
      }
      function Ju(t, $, e, r, i) {
        switch ($) {
          case 'focus':
            return (kd = Fd(kd, t, $, e, r, i)), !0;
          case 'dragenter':
            return (ld = Fd(ld, t, $, e, r, i)), !0;
          case 'mouseover':
            return (md = Fd(md, t, $, e, r, i)), !0;
          case 'pointerover':
            var a = i.pointerId;
            return nd.set(a, Fd(nd.get(a) || null, t, $, e, r, i)), !0;
          case 'gotpointercapture':
            return (
              (a = i.pointerId),
              od.set(a, Fd(od.get(a) || null, t, $, e, r, i)),
              !0
            );
        }
        return !1;
      }
      function Ku(t) {
        var $ = Id(t.target);
        if (null !== $) {
          var e = ic($);
          if (null !== e)
            if (13 === ($ = e.tag)) {
              if (null !== ($ = Ol(e)))
                return (
                  (t.blockedOn = $),
                  void Aa.unstable_runWithPriority(t.priority, function () {
                    at(e);
                  })
                );
            } else if (3 === $ && e.stateNode.hydrate)
              return void (t.blockedOn =
                3 === e.tag ? e.stateNode.containerInfo : null);
        }
        t.blockedOn = null;
      }
      function df(t) {
        if (null !== t.blockedOn) return !1;
        var $ = nh(
          t.topLevelType,
          t.eventSystemFlags,
          t.container,
          t.nativeEvent
        );
        if (null !== $) {
          var e = Jd($);
          return null !== e && Ek(e), (t.blockedOn = $), !1;
        }
        return !0;
      }
      function Wl(t, $, e) {
        df(t) && e.delete($);
      }
      function Lu() {
        for (bt = !1; 0 < qb.length; ) {
          var t = qb[0];
          if (null !== t.blockedOn) {
            null !== (t = Jd(t.blockedOn)) && _s(t);
            break;
          }
          var $ = nh(
            t.topLevelType,
            t.eventSystemFlags,
            t.container,
            t.nativeEvent
          );
          null !== $ ? (t.blockedOn = $) : qb.shift();
        }
        null !== kd && df(kd) && (kd = null),
          null !== ld && df(ld) && (ld = null),
          null !== md && df(md) && (md = null),
          nd.forEach(Wl),
          od.forEach(Wl);
      }
      function Gd(t, $) {
        t.blockedOn === $ &&
          ((t.blockedOn = null),
          bt ||
            ((bt = !0),
            Aa.unstable_scheduleCallback(Aa.unstable_NormalPriority, Lu)));
      }
      function Xl(t) {
        function $($) {
          return Gd($, t);
        }
        if (0 < qb.length) {
          Gd(qb[0], t);
          for (var e = 1; e < qb.length; e++) {
            var r = qb[e];
            r.blockedOn === t && (r.blockedOn = null);
          }
        }
        for (
          null !== kd && Gd(kd, t),
            null !== ld && Gd(ld, t),
            null !== md && Gd(md, t),
            nd.forEach($),
            od.forEach($),
            e = 0;
          e < pd.length;
          e++
        )
          (r = pd[e]).blockedOn === t && (r.blockedOn = null);
        for (; 0 < pd.length && null === (e = pd[0]).blockedOn; )
          Ku(e), null === e.blockedOn && pd.shift();
      }
      function mh(t, $) {
        for (var e = 0; e < t.length; e += 2) {
          var r = t[e],
            i = t[e + 1],
            a = 'on' + (i[0].toUpperCase() + i.slice(1));
          (a = {
            phasedRegistrationNames: {bubbled: a, captured: a + 'Capture'},
            dependencies: [r],
            eventPriority: $,
          }),
            Gg.set(r, $),
            Gk.set(r, a),
            (Fk[i] = a);
        }
      }
      function oa(t, $) {
        Hd($, t, !1);
      }
      function Hd(t, $, e) {
        var r = Gg.get($);
        switch (void 0 === r ? 2 : r) {
          case 0:
            r = Mu.bind(null, $, 1, t);
            break;
          case 1:
            r = Nu.bind(null, $, 1, t);
            break;
          default:
            r = ef.bind(null, $, 1, t);
        }
        e ? t.addEventListener($, r, !0) : t.addEventListener($, r, !1);
      }
      function Mu(t, $, e, r) {
        yg || Dl();
        var i = ef,
          a = yg;
        yg = !0;
        try {
          zu(i, t, $, e, r);
        } finally {
          (yg = a) || Zg();
        }
      }
      function Nu(t, $, e, r) {
        ft(et, ef.bind(null, t, $, e, r));
      }
      function ef(t, $, e, r) {
        if (Hk)
          if (0 < qb.length && -1 < Fg.indexOf(t))
            (t = lh(null, t, $, e, r)), qb.push(t);
          else {
            var i = nh(t, $, e, r);
            if (null === i) Vl(t, r);
            else if (-1 < Fg.indexOf(t)) (t = lh(i, t, $, e, r)), qb.push(t);
            else if (!Ju(i, t, $, e, r)) {
              Vl(t, r), (t = Tl(t, r, null, $));
              try {
                El(Ul, t);
              } finally {
                Sl(t);
              }
            }
          }
      }
      function nh(t, $, e, r) {
        if (null !== (e = Id((e = jh(r))))) {
          var i = ic(e);
          if (null === i) e = null;
          else {
            var a = i.tag;
            if (13 === a) {
              if (null !== (e = Ol(i))) return e;
              e = null;
            } else if (3 === a) {
              if (i.stateNode.hydrate)
                return 3 === i.tag ? i.stateNode.containerInfo : null;
              e = null;
            } else i !== e && (e = null);
          }
        }
        t = Tl(t, r, e, $);
        try {
          El(Ul, t);
        } finally {
          Sl(t);
        }
        return null;
      }
      function Yl(t, $, e) {
        return null == $ || 'boolean' == typeof $ || '' === $
          ? ''
          : e ||
            'number' != typeof $ ||
            0 === $ ||
            (qd.hasOwnProperty(t) && qd[t])
          ? ('' + $).trim()
          : $ + 'px';
      }
      function Zl(t, $) {
        for (var e in ((t = t.style), $))
          if ($.hasOwnProperty(e)) {
            var r = 0 === e.indexOf('--'),
              i = Yl(e, $[e], r);
            'float' === e && (e = 'cssFloat'),
              r ? t.setProperty(e, i) : (t[e] = i);
          }
      }
      function oh(t, $) {
        if ($) {
          if (
            ht[t] &&
            (null != $.children || null != $.dangerouslySetInnerHTML)
          )
            throw Error(Y(137, t, ''));
          if (null != $.dangerouslySetInnerHTML) {
            if (null != $.children) throw Error(Y(60));
            if (
              !(
                'object' == typeof $.dangerouslySetInnerHTML &&
                '__html' in $.dangerouslySetInnerHTML
              )
            )
              throw Error(Y(61));
          }
          if (null != $.style && 'object' != typeof $.style)
            throw Error(Y(62, ''));
        }
      }
      function ph(t, $) {
        if (-1 === t.indexOf('-')) return 'string' == typeof $.is;
        switch (t) {
          case 'annotation-xml':
          case 'color-profile':
          case 'font-face':
          case 'font-face-src':
          case 'font-face-uri':
          case 'font-face-format':
          case 'font-face-name':
          case 'missing-glyph':
            return !1;
          default:
            return !0;
        }
      }
      function Gb(t, $) {
        var e = hh(
          (t = 9 === t.nodeType || 11 === t.nodeType ? t : t.ownerDocument)
        );
        $ = xg[$];
        for (var r = 0; r < $.length; r++) kh($[r], t, e);
      }
      function ff() {}
      function qh(t) {
        if (
          void 0 ===
          (t = t || ('undefined' != typeof document ? document : void 0))
        )
          return null;
        try {
          return t.activeElement || t.body;
        } catch ($) {
          return t.body;
        }
      }
      function $l(t) {
        for (; t && t.firstChild; ) t = t.firstChild;
        return t;
      }
      function _l(t, $) {
        var e,
          r = $l(t);
        for (t = 0; r; ) {
          if (3 === r.nodeType) {
            if (((e = t + r.textContent.length), t <= $ && e >= $))
              return {node: r, offset: $ - t};
            t = e;
          }
          t: {
            for (; r; ) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break t;
              }
              r = r.parentNode;
            }
            r = void 0;
          }
          r = $l(r);
        }
      }
      function am(t, $) {
        return (
          !(!t || !$) &&
          (t === $ ||
            ((!t || 3 !== t.nodeType) &&
              ($ && 3 === $.nodeType
                ? am(t, $.parentNode)
                : 'contains' in t
                ? t.contains($)
                : !!t.compareDocumentPosition &&
                  !!(16 & t.compareDocumentPosition($)))))
        );
      }
      function bm() {
        for (var t = window, $ = qh(); $ instanceof t.HTMLIFrameElement; ) {
          try {
            var e = 'string' == typeof $.contentWindow.location.href;
          } catch (r) {
            e = !1;
          }
          if (!e) break;
          $ = qh((t = $.contentWindow).document);
        }
        return $;
      }
      function rh(t) {
        var $ = t && t.nodeName && t.nodeName.toLowerCase();
        return (
          $ &&
          (('input' === $ &&
            ('text' === t.type ||
              'search' === t.type ||
              'tel' === t.type ||
              'url' === t.type ||
              'password' === t.type)) ||
            'textarea' === $ ||
            'true' === t.contentEditable)
        );
      }
      function cm(t, $) {
        switch (t) {
          case 'button':
          case 'input':
          case 'select':
          case 'textarea':
            return !!$.autoFocus;
        }
        return !1;
      }
      function sh(t, $) {
        return (
          'textarea' === t ||
          'option' === t ||
          'noscript' === t ||
          'string' == typeof $.children ||
          'number' == typeof $.children ||
          ('object' == typeof $.dangerouslySetInnerHTML &&
            null !== $.dangerouslySetInnerHTML &&
            null != $.dangerouslySetInnerHTML.__html)
        );
      }
      function Lc(t) {
        for (; null != t; t = t.nextSibling) {
          var $ = t.nodeType;
          if (1 === $ || 3 === $) break;
        }
        return t;
      }
      function dm(t) {
        t = t.previousSibling;
        for (var $ = 0; t; ) {
          if (8 === t.nodeType) {
            var e = t.data;
            if (e === Jk || e === Ig || e === Hg) {
              if (0 === $) return t;
              $--;
            } else e === Kk && $++;
          }
          t = t.previousSibling;
        }
        return null;
      }
      function Id(t) {
        var $ = t[Tb];
        if ($) return $;
        for (var e = t.parentNode; e; ) {
          if (($ = e[rd] || e[Tb])) {
            if (
              ((e = $.alternate),
              null !== $.child || (null !== e && null !== e.child))
            )
              for (t = dm(t); null !== t; ) {
                if ((e = t[Tb])) return e;
                t = dm(t);
              }
            return $;
          }
          e = (t = e).parentNode;
        }
        return null;
      }
      function Jd(t) {
        return !(t = t[Tb] || t[rd]) ||
          (5 !== t.tag && 6 !== t.tag && 13 !== t.tag && 3 !== t.tag)
          ? null
          : t;
      }
      function jc(t) {
        if (5 === t.tag || 6 === t.tag) return t.stateNode;
        throw Error(Y(33));
      }
      function th(t) {
        return t[Me] || null;
      }
      function Hb(t) {
        do {
          t = t.return;
        } while (t && 5 !== t.tag);
        return t || null;
      }
      function em(t, $) {
        var e = t.stateNode;
        if (!e) return null;
        var r = lk(e);
        if (!r) return null;
        e = r[$];
        t: switch ($) {
          case 'onClick':
          case 'onClickCapture':
          case 'onDoubleClick':
          case 'onDoubleClickCapture':
          case 'onMouseDown':
          case 'onMouseDownCapture':
          case 'onMouseMove':
          case 'onMouseMoveCapture':
          case 'onMouseUp':
          case 'onMouseUpCapture':
          case 'onMouseEnter':
            (r = !r.disabled) ||
              (r = !(
                'button' === (t = t.type) ||
                'input' === t ||
                'select' === t ||
                'textarea' === t
              )),
              (t = !r);
            break t;
          default:
            t = !1;
        }
        if (t) return null;
        if (e && 'function' != typeof e) throw Error(Y(231, $, typeof e));
        return e;
      }
      function fm(t, $, e) {
        ($ = em(t, e.dispatchConfig.phasedRegistrationNames[$])) &&
          ((e._dispatchListeners = Kc(e._dispatchListeners, $)),
          (e._dispatchInstances = Kc(e._dispatchInstances, t)));
      }
      function Ou(t) {
        if (t && t.dispatchConfig.phasedRegistrationNames) {
          for (var $ = t._targetInst, e = []; $; ) e.push($), ($ = Hb($));
          for ($ = e.length; 0 < $--; ) fm(e[$], 'captured', t);
          for ($ = 0; $ < e.length; $++) fm(e[$], 'bubbled', t);
        }
      }
      function uh(t, $, e) {
        t &&
          e &&
          e.dispatchConfig.registrationName &&
          ($ = em(t, e.dispatchConfig.registrationName)) &&
          ((e._dispatchListeners = Kc(e._dispatchListeners, $)),
          (e._dispatchInstances = Kc(e._dispatchInstances, t)));
      }
      function Pu(t) {
        t && t.dispatchConfig.registrationName && uh(t._targetInst, null, t);
      }
      function Mc(t) {
        ih(t, Ou);
      }
      function gm() {
        if (Lk) return Lk;
        var t,
          $,
          e = lt,
          r = e.length,
          i = 'value' in sd ? sd.value : sd.textContent,
          a = i.length;
        for (t = 0; t < r && e[t] === i[t]; t++);
        var n = r - t;
        for ($ = 1; $ <= n && e[r - $] === i[a - $]; $++);
        return (Lk = i.slice(t, 1 < $ ? 1 - $ : void 0));
      }
      function gf() {
        return !0;
      }
      function hf() {
        return !1;
      }
      function Ra(t, $, e, r) {
        for (var i in ((this.dispatchConfig = t),
        (this._targetInst = $),
        (this.nativeEvent = e),
        (t = this.constructor.Interface)))
          t.hasOwnProperty(i) &&
            (($ = t[i])
              ? (this[i] = $(e))
              : 'target' === i
              ? (this.target = r)
              : (this[i] = e[i]));
        return (
          (this.isDefaultPrevented = (
            null != e.defaultPrevented
              ? e.defaultPrevented
              : !1 === e.returnValue
          )
            ? gf
            : hf),
          (this.isPropagationStopped = hf),
          this
        );
      }
      function Qu(t, $, e, r) {
        if (this.eventPool.length) {
          var i = this.eventPool.pop();
          return this.call(i, t, $, e, r), i;
        }
        return new this(t, $, e, r);
      }
      function Ru(t) {
        if (!(t instanceof this)) throw Error(Y(279));
        t.destructor(), 10 > this.eventPool.length && this.eventPool.push(t);
      }
      function hm(t) {
        (t.eventPool = []), (t.getPooled = Qu), (t.release = Ru);
      }
      function im(t, $) {
        switch (t) {
          case 'keyup':
            return -1 !== ot.indexOf($.keyCode);
          case 'keydown':
            return 229 !== $.keyCode;
          case 'keypress':
          case 'mousedown':
          case 'blur':
            return !0;
          default:
            return !1;
        }
      }
      function jm(t) {
        return 'object' == typeof (t = t.detail) && 'data' in t ? t.data : null;
      }
      function Su(t, $) {
        switch (t) {
          case 'compositionend':
            return jm($);
          case 'keypress':
            return 32 !== $.which ? null : ((qt = !0), Nk);
          case 'textInput':
            return (t = $.data) === Nk && qt ? null : t;
          default:
            return null;
        }
      }
      function Tu(t, $) {
        if (Oe)
          return 'compositionend' === t || (!Lg && im(t, $))
            ? ((t = gm()), (Lk = lt = sd = null), (Oe = !1), t)
            : null;
        switch (t) {
          case 'paste':
            return null;
          case 'keypress':
            if (
              !($.ctrlKey || $.altKey || $.metaKey) ||
              ($.ctrlKey && $.altKey)
            ) {
              if ($.char && 1 < $.char.length) return $.char;
              if ($.which) return String.fromCharCode($.which);
            }
            return null;
          case 'compositionend':
            return Mk && 'ko' !== $.locale ? null : $.data;
          default:
            return null;
        }
      }
      function km(t) {
        var $ = t && t.nodeName && t.nodeName.toLowerCase();
        return 'input' === $ ? !!st[t.type] : 'textarea' === $;
      }
      function lm(t, $, e) {
        return (
          ((t = Ra.getPooled(Ok.change, t, $, e)).type = 'change'),
          Al(e),
          Mc(t),
          t
        );
      }
      function Uu(t) {
        cf(t);
      }
      function jf(t) {
        if (Gl(jc(t))) return t;
      }
      function Vu(t, $) {
        if ('change' === t) return $;
      }
      function mm() {
        Pk && (Pk.detachEvent('onpropertychange', nm), (Mg = Pk = null));
      }
      function nm(t) {
        if ('value' === t.propertyName && jf(Mg))
          if (((t = lm(Mg, t, jh(t))), yg)) cf(t);
          else {
            yg = !0;
            try {
              Cl(Uu, t);
            } finally {
              (yg = !1), Zg();
            }
          }
      }
      function Wu(t, $, e) {
        'focus' === t
          ? (mm(), (Mg = e), (Pk = $).attachEvent('onpropertychange', nm))
          : 'blur' === t && mm();
      }
      function Xu(t) {
        if ('selectionchange' === t || 'keyup' === t || 'keydown' === t)
          return jf(Mg);
      }
      function Yu(t, $) {
        if ('click' === t) return jf($);
      }
      function Zu(t, $) {
        if ('input' === t || 'change' === t) return jf($);
      }
      function $u(t) {
        var $ = this.nativeEvent;
        return $.getModifierState
          ? $.getModifierState(t)
          : !!(t = ut[t]) && !!$[t];
      }
      function vh() {
        return $u;
      }
      function _u(t, $) {
        return (t === $ && (0 !== t || 1 / t == 1 / $)) || (t != t && $ != $);
      }
      function Kd(t, $) {
        if (fc(t, $)) return !0;
        if (
          'object' != typeof t ||
          null === t ||
          'object' != typeof $ ||
          null === $
        )
          return !1;
        var e = Object.keys(t),
          r = Object.keys($);
        if (e.length !== r.length) return !1;
        for (r = 0; r < e.length; r++)
          if (!At.call($, e[r]) || !fc(t[e[r]], $[e[r]])) return !1;
        return !0;
      }
      function om(t, $) {
        var e =
          $.window === $ ? $.document : 9 === $.nodeType ? $ : $.ownerDocument;
        return Dt || null == Pe || Pe !== qh(e)
          ? null
          : ('selectionStart' in (e = Pe) && rh(e)
              ? (e = {start: e.selectionStart, end: e.selectionEnd})
              : (e = {
                  anchorNode: (e = (
                    (e.ownerDocument && e.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: e.anchorOffset,
                  focusNode: e.focusNode,
                  focusOffset: e.focusOffset,
                }),
            Tk && Kd(Tk, e)
              ? null
              : ((Tk = e),
                ((t = Ra.getPooled(Sk.select, Ct, t, $)).type = 'select'),
                (t.target = Pe),
                Mc(t),
                t));
      }
      function kf(t) {
        var $ = t.keyCode;
        return (
          'charCode' in t
            ? 0 === (t = t.charCode) && 13 === $ && (t = 13)
            : (t = $),
          10 === t && (t = 13),
          32 <= t || 13 === t ? t : 0
        );
      }
      function pa(t) {
        0 > wd || ((t.current = Ng[wd]), (Ng[wd] = null), wd--);
      }
      function va(t, $) {
        (Ng[++wd] = t.current), (t.current = $);
      }
      function Nc(t, $) {
        var e = t.type.contextTypes;
        if (!e) return Ub;
        var r = t.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === $)
          return r.__reactInternalMemoizedMaskedChildContext;
        var i,
          a = {};
        for (i in e) a[i] = $[i];
        return (
          r &&
            (((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              $),
            (t.__reactInternalMemoizedMaskedChildContext = a)),
          a
        );
      }
      function Na(t) {
        return null != (t = t.childContextTypes);
      }
      function lf() {
        pa(Ma), pa(Da);
      }
      function pm(t, $, e) {
        if (Da.current !== Ub) throw Error(Y(168));
        va(Da, $), va(Ma, e);
      }
      function qm(t, $, e) {
        var r = t.stateNode;
        if (((t = $.childContextTypes), 'function' != typeof r.getChildContext))
          return e;
        for (var i in (r = r.getChildContext()))
          if (!(i in t)) throw Error(Y(108, Fb($) || 'Unknown', i));
        return Fa({}, e, {}, r);
      }
      function mf(t) {
        return (
          (t =
            ((t = t.stateNode) &&
              t.__reactInternalMemoizedMergedChildContext) ||
            Ub),
          (Fc = Da.current),
          va(Da, t),
          va(Ma, Ma.current),
          !0
        );
      }
      function rm(t, $, e) {
        var r = t.stateNode;
        if (!r) throw Error(Y(169));
        e
          ? ((t = qm(t, $, Fc)),
            (r.__reactInternalMemoizedMergedChildContext = t),
            pa(Ma),
            pa(Da),
            va(Da, t))
          : pa(Ma),
          va(Ma, e);
      }
      function nf() {
        switch (St()) {
          case Qe:
            return 99;
          case Wk:
            return 98;
          case Xk:
            return 97;
          case Yk:
            return 96;
          case Zk:
            return 95;
          default:
            throw Error(Y(332));
        }
      }
      function sm(t) {
        switch (t) {
          case 99:
            return Qe;
          case 98:
            return Wk;
          case 97:
            return Xk;
          case 96:
            return Yk;
          case 95:
            return Zk;
          default:
            throw Error(Y(332));
        }
      }
      function Xb(t, $) {
        return (t = sm(t)), Rt(t, $);
      }
      function tm(t, $, e) {
        return (t = sm(t)), Og(t, $, e);
      }
      function um(t) {
        return null === Gc ? ((Gc = [t]), (_k = Og(Qe, vm))) : Gc.push(t), $k;
      }
      function ub() {
        if (null !== _k) {
          var t = _k;
          (_k = null), Uk(t);
        }
        vm();
      }
      function vm() {
        if (!Vt && null !== Gc) {
          Vt = !0;
          var t = 0;
          try {
            var $ = Gc;
            Xb(99, function () {
              for (; t < $.length; t++) {
                var e = $[t];
                do {
                  e = e(!0);
                } while (null !== e);
              }
            }),
              (Gc = null);
          } catch (e) {
            throw (null !== Gc && (Gc = Gc.slice(t + 1)), Og(Qe, ub), e);
          } finally {
            Vt = !1;
          }
        }
      }
      function of(t, $, e) {
        return (
          1073741821 - (1 + (((1073741821 - t + $ / 10) / (e /= 10)) | 0)) * e
        );
      }
      function jb(t, $) {
        if (t && t.defaultProps)
          for (var e in (($ = Fa({}, $)), (t = t.defaultProps)))
            void 0 === $[e] && ($[e] = t[e]);
        return $;
      }
      function wh() {
        Wt = cl = bl = null;
      }
      function xh(t) {
        var $ = Re.current;
        pa(Re), (t.type._context._currentValue = $);
      }
      function wm(t, $) {
        for (; null !== t; ) {
          var e = t.alternate;
          if (t.childExpirationTime < $)
            (t.childExpirationTime = $),
              null !== e &&
                e.childExpirationTime < $ &&
                (e.childExpirationTime = $);
          else {
            if (!(null !== e && e.childExpirationTime < $)) break;
            e.childExpirationTime = $;
          }
          t = t.return;
        }
      }
      function Oc(t, $) {
        (bl = t),
          (Wt = cl = null),
          null !== (t = t.dependencies) &&
            null !== t.firstContext &&
            (t.expirationTime >= $ && (gl = !0), (t.firstContext = null));
      }
      function db(t, $) {
        if (Wt !== t && !1 !== $ && 0 !== $)
          if (
            (('number' == typeof $ && 1073741823 !== $) ||
              ((Wt = t), ($ = 1073741823)),
            ($ = {context: t, observedBits: $, next: null}),
            null === cl)
          ) {
            if (null === bl) throw Error(Y(308));
            (cl = $),
              (bl.dependencies = {
                expirationTime: 0,
                firstContext: $,
                responders: null,
              });
          } else cl = cl.next = $;
        return t._currentValue;
      }
      function yh(t) {
        t.updateQueue = {
          baseState: t.memoizedState,
          baseQueue: null,
          shared: {pending: null},
          effects: null,
        };
      }
      function zh(t, $) {
        (t = t.updateQueue),
          $.updateQueue === t &&
            ($.updateQueue = {
              baseState: t.baseState,
              baseQueue: t.baseQueue,
              shared: t.shared,
              effects: t.effects,
            });
      }
      function Yb(t, $) {
        return ((t = {
          expirationTime: t,
          suspenseConfig: $,
          tag: 0,
          payload: null,
          callback: null,
          next: null,
        }).next = t);
      }
      function Zb(t, $) {
        if (null !== (t = t.updateQueue)) {
          var e = (t = t.shared).pending;
          null === e ? ($.next = $) : (($.next = e.next), (e.next = $)),
            (t.pending = $);
        }
      }
      function xm(t, $) {
        var e = t.alternate;
        null !== e && zh(e, t),
          null === (e = (t = t.updateQueue).baseQueue)
            ? ((t.baseQueue = $.next = $), ($.next = $))
            : (($.next = e.next), (e.next = $));
      }
      function Ld(t, $, e, r) {
        var i = t.updateQueue;
        Se = !1;
        var a = i.baseQueue,
          n = i.shared.pending;
        if (null !== n) {
          if (null !== a) {
            var l = a.next;
            (a.next = n.next), (n.next = l);
          }
          (a = n),
            (i.shared.pending = null),
            null !== (l = t.alternate) &&
              null !== (l = l.updateQueue) &&
              (l.baseQueue = n);
        }
        if (null !== a) {
          l = a.next;
          var v = i.baseState,
            o = 0,
            u = null,
            c = null,
            f = null;
          if (null !== l)
            for (var s = l; ; ) {
              if ((n = s.expirationTime) < r) {
                var d = {
                  expirationTime: s.expirationTime,
                  suspenseConfig: s.suspenseConfig,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                };
                null === f ? ((c = f = d), (u = v)) : (f = f.next = d),
                  n > o && (o = n);
              } else {
                null !== f &&
                  (f = f.next =
                    {
                      expirationTime: 1073741823,
                      suspenseConfig: s.suspenseConfig,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null,
                    }),
                  nn(n, s.suspenseConfig);
                t: {
                  var p = t,
                    h = s;
                  switch (((n = $), (d = e), h.tag)) {
                    case 1:
                      if ('function' == typeof (p = h.payload)) {
                        v = p.call(d, v, n);
                        break t;
                      }
                      v = p;
                      break t;
                    case 3:
                      p.effectTag = (-4097 & p.effectTag) | 64;
                    case 0:
                      if (
                        null ==
                        (n =
                          'function' == typeof (p = h.payload)
                            ? p.call(d, v, n)
                            : p)
                      )
                        break t;
                      v = Fa({}, v, n);
                      break t;
                    case 2:
                      Se = !0;
                  }
                }
                null !== s.callback &&
                  ((t.effectTag |= 32),
                  null === (n = i.effects) ? (i.effects = [s]) : n.push(s));
              }
              if (null === (s = s.next) || s === l) {
                if (null === (n = i.shared.pending)) break;
                (s = a.next = n.next),
                  (n.next = l),
                  (i.baseQueue = a = n),
                  (i.shared.pending = null);
              }
            }
          null === f ? (u = v) : (f.next = c),
            (i.baseState = u),
            (i.baseQueue = f),
            Af(o),
            (t.expirationTime = o),
            (t.memoizedState = v);
        }
      }
      function ym(t, $, e) {
        if (((t = $.effects), ($.effects = null), null !== t))
          for ($ = 0; $ < t.length; $++) {
            var r = t[$],
              i = r.callback;
            if (null !== i) {
              if (
                ((r.callback = null), (r = i), (i = e), 'function' != typeof r)
              )
                throw Error(Y(191, r));
              r.call(i);
            }
          }
      }
      function pf(t, $, e, r) {
        (e = null == (e = e(r, ($ = t.memoizedState))) ? $ : Fa({}, $, e)),
          (t.memoizedState = e),
          0 === t.expirationTime && (t.updateQueue.baseState = e);
      }
      function zm(t, $, e, r, i, a, n) {
        return 'function' == typeof (t = t.stateNode).shouldComponentUpdate
          ? t.shouldComponentUpdate(r, a, n)
          : !$.prototype ||
              !$.prototype.isPureReactComponent ||
              !Kd(e, r) ||
              !Kd(i, a);
      }
      function Am(t, $, e) {
        var r = !1,
          i = Ub,
          a = $.contextType;
        return (
          'object' == typeof a && null !== a
            ? (a = db(a))
            : ((i = Na($) ? Fc : Da.current),
              (a = (r = null != (r = $.contextTypes)) ? Nc(t, i) : Ub)),
          ($ = new $(e, a)),
          (t.memoizedState =
            null !== $.state && void 0 !== $.state ? $.state : null),
          ($.updater = Te),
          (t.stateNode = $),
          ($._reactInternalFiber = t),
          r &&
            (((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              i),
            (t.__reactInternalMemoizedMaskedChildContext = a)),
          $
        );
      }
      function Bm(t, $, e, r) {
        (t = $.state),
          'function' == typeof $.componentWillReceiveProps &&
            $.componentWillReceiveProps(e, r),
          'function' == typeof $.UNSAFE_componentWillReceiveProps &&
            $.UNSAFE_componentWillReceiveProps(e, r),
          $.state !== t && Te.enqueueReplaceState($, $.state, null);
      }
      function Ah(t, $, e, r) {
        var i = t.stateNode;
        (i.props = e), (i.state = t.memoizedState), (i.refs = dl), yh(t);
        var a = $.contextType;
        'object' == typeof a && null !== a
          ? (i.context = db(a))
          : ((a = Na($) ? Fc : Da.current), (i.context = Nc(t, a))),
          Ld(t, e, i, r),
          (i.state = t.memoizedState),
          'function' == typeof (a = $.getDerivedStateFromProps) &&
            (pf(t, $, a, e), (i.state = t.memoizedState)),
          'function' == typeof $.getDerivedStateFromProps ||
            'function' == typeof i.getSnapshotBeforeUpdate ||
            ('function' != typeof i.UNSAFE_componentWillMount &&
              'function' != typeof i.componentWillMount) ||
            (($ = i.state),
            'function' == typeof i.componentWillMount && i.componentWillMount(),
            'function' == typeof i.UNSAFE_componentWillMount &&
              i.UNSAFE_componentWillMount(),
            $ !== i.state && Te.enqueueReplaceState(i, i.state, null),
            Ld(t, e, i, r),
            (i.state = t.memoizedState)),
          'function' == typeof i.componentDidMount && (t.effectTag |= 4);
      }
      function Md(t, $, e) {
        if (
          null !== (t = e.ref) &&
          'function' != typeof t &&
          'object' != typeof t
        ) {
          if (e._owner) {
            if ((e = e._owner)) {
              if (1 !== e.tag) throw Error(Y(309));
              var r = e.stateNode;
            }
            if (!r) throw Error(Y(147, t));
            var i = '' + t;
            return null !== $ &&
              null !== $.ref &&
              'function' == typeof $.ref &&
              $.ref._stringRef === i
              ? $.ref
              : ((($ = function (t) {
                  var $ = r.refs;
                  $ === dl && ($ = r.refs = {}),
                    null === t ? delete $[i] : ($[i] = t);
                })._stringRef = i),
                $);
          }
          if ('string' != typeof t) throw Error(Y(284));
          if (!e._owner) throw Error(Y(290, t));
        }
        return t;
      }
      function qf(t, $) {
        if ('textarea' !== t.type)
          throw Error(
            Y(
              31,
              '[object Object]' === Object.prototype.toString.call($)
                ? 'object with keys {' + Object.keys($).join(', ') + '}'
                : $,
              ''
            )
          );
      }
      function Cm(t) {
        function $($, e) {
          if (t) {
            var r = $.lastEffect;
            null !== r
              ? ((r.nextEffect = e), ($.lastEffect = e))
              : ($.firstEffect = $.lastEffect = e),
              (e.nextEffect = null),
              (e.effectTag = 8);
          }
        }
        function e(e, r) {
          if (!t) return null;
          for (; null !== r; ) $(e, r), (r = r.sibling);
          return null;
        }
        function r(t, $) {
          for (t = new Map(); null !== $; )
            null !== $.key ? t.set($.key, $) : t.set($.index, $),
              ($ = $.sibling);
          return t;
        }
        function i(t, $) {
          return ((t = qc(t, $)).index = 0), (t.sibling = null), t;
        }
        function a($, e, r) {
          return (
            ($.index = r),
            t
              ? null !== (r = $.alternate)
                ? (r = r.index) < e
                  ? (($.effectTag = 2), e)
                  : r
                : (($.effectTag = 2), e)
              : e
          );
        }
        function n($) {
          return t && null === $.alternate && ($.effectTag = 2), $;
        }
        function l(t, $, e, r) {
          return null === $ || 6 !== $.tag
            ? ((($ = Zh(e, t.mode, r)).return = t), $)
            : ((($ = i($, e)).return = t), $);
        }
        function v(t, $, e, r) {
          return null !== $ && $.elementType === e.type
            ? (((r = i($, e.props)).ref = Md(t, $, e)), (r.return = t), r)
            : (((r = Bf(e.type, e.key, e.props, null, t.mode, r)).ref = Md(
                t,
                $,
                e
              )),
              (r.return = t),
              r);
        }
        function o(t, $, e, r) {
          return null === $ ||
            4 !== $.tag ||
            $.stateNode.containerInfo !== e.containerInfo ||
            $.stateNode.implementation !== e.implementation
            ? ((($ = $h(e, t.mode, r)).return = t), $)
            : ((($ = i($, e.children || [])).return = t), $);
        }
        function u(t, $, e, r, a) {
          return null === $ || 7 !== $.tag
            ? ((($ = _b(e, t.mode, r, a)).return = t), $)
            : ((($ = i($, e)).return = t), $);
        }
        function c(t, $, e) {
          if ('string' == typeof $ || 'number' == typeof $)
            return (($ = Zh('' + $, t.mode, e)).return = t), $;
          if ('object' == typeof $ && null !== $) {
            switch ($.$$typeof) {
              case Ie:
                return (
                  ((e = Bf($.type, $.key, $.props, null, t.mode, e)).ref = Md(
                    t,
                    null,
                    $
                  )),
                  (e.return = t),
                  e
                );
              case Dc:
                return (($ = $h($, t.mode, e)).return = t), $;
            }
            if (Ue($) || Dd($))
              return (($ = _b($, t.mode, e, null)).return = t), $;
            qf(t, $);
          }
          return null;
        }
        function f(t, $, e, r) {
          var i = null !== $ ? $.key : null;
          if ('string' == typeof e || 'number' == typeof e)
            return null !== i ? null : l(t, $, '' + e, r);
          if ('object' == typeof e && null !== e) {
            switch (e.$$typeof) {
              case Ie:
                return e.key === i
                  ? e.type === ec
                    ? u(t, $, e.props.children, r, i)
                    : v(t, $, e, r)
                  : null;
              case Dc:
                return e.key === i ? o(t, $, e, r) : null;
            }
            if (Ue(e) || Dd(e)) return null !== i ? null : u(t, $, e, r, null);
            qf(t, e);
          }
          return null;
        }
        function s(t, $, e, r, i) {
          if ('string' == typeof r || 'number' == typeof r)
            return l($, (t = t.get(e) || null), '' + r, i);
          if ('object' == typeof r && null !== r) {
            switch (r.$$typeof) {
              case Ie:
                return (
                  (t = t.get(null === r.key ? e : r.key) || null),
                  r.type === ec
                    ? u($, t, r.props.children, i, r.key)
                    : v($, t, r, i)
                );
              case Dc:
                return o(
                  $,
                  (t = t.get(null === r.key ? e : r.key) || null),
                  r,
                  i
                );
            }
            if (Ue(r) || Dd(r)) return u($, (t = t.get(e) || null), r, i, null);
            qf($, r);
          }
          return null;
        }
        function d(i, n, l, v) {
          for (
            var o = null, u = null, d = n, p = (n = 0), h = null;
            null !== d && p < l.length;
            p++
          ) {
            d.index > p ? ((h = d), (d = null)) : (h = d.sibling);
            var g = f(i, d, l[p], v);
            if (null === g) {
              null === d && (d = h);
              break;
            }
            t && d && null === g.alternate && $(i, d),
              (n = a(g, n, p)),
              null === u ? (o = g) : (u.sibling = g),
              (u = g),
              (d = h);
          }
          if (p === l.length) return e(i, d), o;
          if (null === d) {
            for (; p < l.length; p++)
              null !== (d = c(i, l[p], v)) &&
                ((n = a(d, n, p)),
                null === u ? (o = d) : (u.sibling = d),
                (u = d));
            return o;
          }
          for (d = r(i, d); p < l.length; p++)
            null !== (h = s(d, i, p, l[p], v)) &&
              (t &&
                null !== h.alternate &&
                d.delete(null === h.key ? p : h.key),
              (n = a(h, n, p)),
              null === u ? (o = h) : (u.sibling = h),
              (u = h));
          return (
            t &&
              d.forEach(function (t) {
                return $(i, t);
              }),
            o
          );
        }
        function p(i, n, l, v) {
          var o = Dd(l);
          if ('function' != typeof o) throw Error(Y(150));
          if (null == (l = o.call(l))) throw Error(Y(151));
          for (
            var u = (o = null), d = n, p = (n = 0), h = null, g = l.next();
            null !== d && !g.done;
            p++, g = l.next()
          ) {
            d.index > p ? ((h = d), (d = null)) : (h = d.sibling);
            var m = f(i, d, g.value, v);
            if (null === m) {
              null === d && (d = h);
              break;
            }
            t && d && null === m.alternate && $(i, d),
              (n = a(m, n, p)),
              null === u ? (o = m) : (u.sibling = m),
              (u = m),
              (d = h);
          }
          if (g.done) return e(i, d), o;
          if (null === d) {
            for (; !g.done; p++, g = l.next())
              null !== (g = c(i, g.value, v)) &&
                ((n = a(g, n, p)),
                null === u ? (o = g) : (u.sibling = g),
                (u = g));
            return o;
          }
          for (d = r(i, d); !g.done; p++, g = l.next())
            null !== (g = s(d, i, p, g.value, v)) &&
              (t &&
                null !== g.alternate &&
                d.delete(null === g.key ? p : g.key),
              (n = a(g, n, p)),
              null === u ? (o = g) : (u.sibling = g),
              (u = g));
          return (
            t &&
              d.forEach(function (t) {
                return $(i, t);
              }),
            o
          );
        }
        return function (t, r, a, l) {
          var v =
            'object' == typeof a &&
            null !== a &&
            a.type === ec &&
            null === a.key;
          v && (a = a.props.children);
          var o = 'object' == typeof a && null !== a;
          if (o)
            switch (a.$$typeof) {
              case Ie:
                t: {
                  for (o = a.key, v = r; null !== v; ) {
                    if (v.key === o) {
                      switch (v.tag) {
                        case 7:
                          if (a.type === ec) {
                            e(t, v.sibling),
                              ((r = i(v, a.props.children)).return = t),
                              (t = r);
                            break t;
                          }
                          break;
                        default:
                          if (v.elementType === a.type) {
                            e(t, v.sibling),
                              ((r = i(v, a.props)).ref = Md(t, v, a)),
                              (r.return = t),
                              (t = r);
                            break t;
                          }
                      }
                      e(t, v);
                      break;
                    }
                    $(t, v), (v = v.sibling);
                  }
                  a.type === ec
                    ? (((r = _b(a.props.children, t.mode, l, a.key)).return =
                        t),
                      (t = r))
                    : (((l = Bf(a.type, a.key, a.props, null, t.mode, l)).ref =
                        Md(t, r, a)),
                      (l.return = t),
                      (t = l));
                }
                return n(t);
              case Dc:
                t: {
                  for (v = a.key; null !== r; ) {
                    if (r.key === v) {
                      if (
                        4 === r.tag &&
                        r.stateNode.containerInfo === a.containerInfo &&
                        r.stateNode.implementation === a.implementation
                      ) {
                        e(t, r.sibling),
                          ((r = i(r, a.children || [])).return = t),
                          (t = r);
                        break t;
                      }
                      e(t, r);
                      break;
                    }
                    $(t, r), (r = r.sibling);
                  }
                  ((r = $h(a, t.mode, l)).return = t), (t = r);
                }
                return n(t);
            }
          if ('string' == typeof a || 'number' == typeof a)
            return (
              (a = '' + a),
              null !== r && 6 === r.tag
                ? (e(t, r.sibling), ((r = i(r, a)).return = t), (t = r))
                : (e(t, r), ((r = Zh(a, t.mode, l)).return = t), (t = r)),
              n(t)
            );
          if (Ue(a)) return d(t, r, a, l);
          if (Dd(a)) return p(t, r, a, l);
          if ((o && qf(t, a), void 0 === a && !v))
            switch (t.tag) {
              case 1:
              case 0:
                throw (
                  ((t = t.type),
                  Error(Y(152, t.displayName || t.name || 'Component')))
                );
            }
          return e(t, r);
        };
      }
      function kc(t) {
        if (t === yd) throw Error(Y(174));
        return t;
      }
      function Bh(t, $) {
        switch ((va(Ad, $), va(zd, t), va(rb, yd), (t = $.nodeType))) {
          case 9:
          case 11:
            $ = ($ = $.documentElement) ? $.namespaceURI : gh(null, '');
            break;
          default:
            $ = gh(
              ($ = (t = 8 === t ? $.parentNode : $).namespaceURI || null),
              (t = t.tagName)
            );
        }
        pa(rb), va(rb, $);
      }
      function Pc() {
        pa(rb), pa(zd), pa(Ad);
      }
      function Dm(t) {
        kc(Ad.current);
        var $ = kc(rb.current),
          e = gh($, t.type);
        $ !== e && (va(zd, t), va(rb, e));
      }
      function Ch(t) {
        zd.current === t && (pa(rb), pa(zd));
      }
      function rf(t) {
        for (var $ = t; null !== $; ) {
          if (13 === $.tag) {
            var e = $.memoizedState;
            if (
              null !== e &&
              (null === (e = e.dehydrated) || e.data === Hg || e.data === Ig)
            )
              return $;
          } else if (19 === $.tag && void 0 !== $.memoizedProps.revealOrder) {
            if (0 != (64 & $.effectTag)) return $;
          } else if (null !== $.child) {
            ($.child.return = $), ($ = $.child);
            continue;
          }
          if ($ === t) break;
          for (; null === $.sibling; ) {
            if (null === $.return || $.return === t) return null;
            $ = $.return;
          }
          ($.sibling.return = $.return), ($ = $.sibling);
        }
        return null;
      }
      function Dh(t, $) {
        return {responder: t, props: $};
      }
      function Sa() {
        throw Error(Y(321));
      }
      function Eh(t, $) {
        if (null === $) return !1;
        for (var e = 0; e < $.length && e < t.length; e++)
          if (!fc(t[e], $[e])) return !1;
        return !0;
      }
      function Fh(t, $, e, r, i, a) {
        if (
          ((Bd = a),
          (Ea = $),
          ($.memoizedState = null),
          ($.updateQueue = null),
          ($.expirationTime = 0),
          (Ve.current = null === t || null === t.memoizedState ? Yt : Zt),
          (t = e(r, i)),
          $.expirationTime === Bd)
        ) {
          a = 0;
          do {
            if ((($.expirationTime = 0), !(25 > a))) throw Error(Y(301));
            (a += 1),
              (Vb = sb = null),
              ($.updateQueue = null),
              (Ve.current = $t),
              (t = e(r, i));
          } while ($.expirationTime === Bd);
        }
        if (
          ((Ve.current = We),
          ($ = null !== sb && null !== sb.next),
          (Bd = 0),
          (Vb = sb = Ea = null),
          (Xt = !1),
          $)
        )
          throw Error(Y(300));
        return t;
      }
      function Qc() {
        var t = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null,
        };
        return (
          null === Vb ? (Ea.memoizedState = Vb = t) : (Vb = Vb.next = t), Vb
        );
      }
      function Rc() {
        if (null === sb) {
          var t = Ea.alternate;
          t = null !== t ? t.memoizedState : null;
        } else t = sb.next;
        var $ = null === Vb ? Ea.memoizedState : Vb.next;
        if (null !== $) (Vb = $), (sb = t);
        else {
          if (null === t) throw Error(Y(310));
          (t = {
            memoizedState: (sb = t).memoizedState,
            baseState: sb.baseState,
            baseQueue: sb.baseQueue,
            queue: sb.queue,
            next: null,
          }),
            null === Vb ? (Ea.memoizedState = Vb = t) : (Vb = Vb.next = t);
        }
        return Vb;
      }
      function lc(t, $) {
        return 'function' == typeof $ ? $(t) : $;
      }
      function sf(t) {
        var $ = Rc(),
          e = $.queue;
        if (null === e) throw Error(Y(311));
        e.lastRenderedReducer = t;
        var r = sb,
          i = r.baseQueue,
          a = e.pending;
        if (null !== a) {
          if (null !== i) {
            var n = i.next;
            (i.next = a.next), (a.next = n);
          }
          (r.baseQueue = i = a), (e.pending = null);
        }
        if (null !== i) {
          (i = i.next), (r = r.baseState);
          var l = (n = a = null),
            v = i;
          do {
            var o = v.expirationTime;
            if (o < Bd) {
              var u = {
                expirationTime: v.expirationTime,
                suspenseConfig: v.suspenseConfig,
                action: v.action,
                eagerReducer: v.eagerReducer,
                eagerState: v.eagerState,
                next: null,
              };
              null === l ? ((n = l = u), (a = r)) : (l = l.next = u),
                o > Ea.expirationTime && ((Ea.expirationTime = o), Af(o));
            } else
              null !== l &&
                (l = l.next =
                  {
                    expirationTime: 1073741823,
                    suspenseConfig: v.suspenseConfig,
                    action: v.action,
                    eagerReducer: v.eagerReducer,
                    eagerState: v.eagerState,
                    next: null,
                  }),
                nn(o, v.suspenseConfig),
                (r = v.eagerReducer === t ? v.eagerState : t(r, v.action));
            v = v.next;
          } while (null !== v && v !== i);
          null === l ? (a = r) : (l.next = n),
            fc(r, $.memoizedState) || (gl = !0),
            ($.memoizedState = r),
            ($.baseState = a),
            ($.baseQueue = l),
            (e.lastRenderedState = r);
        }
        return [$.memoizedState, e.dispatch];
      }
      function tf(t) {
        var $ = Rc(),
          e = $.queue;
        if (null === e) throw Error(Y(311));
        e.lastRenderedReducer = t;
        var r = e.dispatch,
          i = e.pending,
          a = $.memoizedState;
        if (null !== i) {
          e.pending = null;
          var n = (i = i.next);
          do {
            (a = t(a, n.action)), (n = n.next);
          } while (n !== i);
          fc(a, $.memoizedState) || (gl = !0),
            ($.memoizedState = a),
            null === $.baseQueue && ($.baseState = a),
            (e.lastRenderedState = a);
        }
        return [a, r];
      }
      function Gh(t) {
        var $ = Qc();
        return (
          'function' == typeof t && (t = t()),
          ($.memoizedState = $.baseState = t),
          (t = (t = $.queue =
            {
              pending: null,
              dispatch: null,
              lastRenderedReducer: lc,
              lastRenderedState: t,
            }).dispatch =
            Lm.bind(null, Ea, t)),
          [$.memoizedState, t]
        );
      }
      function Hh(t, $, e, r) {
        return (
          (t = {tag: t, create: $, destroy: e, deps: r, next: null}),
          null === ($ = Ea.updateQueue)
            ? (($ = {lastEffect: null}),
              (Ea.updateQueue = $),
              ($.lastEffect = t.next = t))
            : null === (e = $.lastEffect)
            ? ($.lastEffect = t.next = t)
            : ((r = e.next), (e.next = t), (t.next = r), ($.lastEffect = t)),
          t
        );
      }
      function Em() {
        return Rc().memoizedState;
      }
      function Ih(t, $, e, r) {
        var i = Qc();
        (Ea.effectTag |= t),
          (i.memoizedState = Hh(1 | $, e, void 0, void 0 === r ? null : r));
      }
      function Jh(t, $, e, r) {
        var i = Rc();
        r = void 0 === r ? null : r;
        var a = void 0;
        if (null !== sb) {
          var n = sb.memoizedState;
          if (((a = n.destroy), null !== r && Eh(r, n.deps)))
            return void Hh($, e, a, r);
        }
        (Ea.effectTag |= t), (i.memoizedState = Hh(1 | $, e, a, r));
      }
      function Fm(t, $) {
        return Ih(516, 4, t, $);
      }
      function uf(t, $) {
        return Jh(516, 4, t, $);
      }
      function Gm(t, $) {
        return Jh(4, 2, t, $);
      }
      function Hm(t, $) {
        return 'function' == typeof $
          ? ((t = t()),
            $(t),
            function () {
              $(null);
            })
          : null != $
          ? ((t = t()),
            ($.current = t),
            function () {
              $.current = null;
            })
          : void 0;
      }
      function Im(t, $, e) {
        return (
          (e = null != e ? e.concat([t]) : null),
          Jh(4, 2, Hm.bind(null, $, t), e)
        );
      }
      function Kh() {}
      function Jm(t, $) {
        return (Qc().memoizedState = [t, void 0 === $ ? null : $]), t;
      }
      function vf(t, $) {
        var e = Rc();
        $ = void 0 === $ ? null : $;
        var r = e.memoizedState;
        return null !== r && null !== $ && Eh($, r[1])
          ? r[0]
          : ((e.memoizedState = [t, $]), t);
      }
      function Km(t, $) {
        var e = Rc();
        $ = void 0 === $ ? null : $;
        var r = e.memoizedState;
        return null !== r && null !== $ && Eh($, r[1])
          ? r[0]
          : ((t = t()), (e.memoizedState = [t, $]), t);
      }
      function Lh(t, $, e) {
        var r = nf();
        Xb(98 > r ? 98 : r, function () {
          t(!0);
        }),
          Xb(97 < r ? 97 : r, function () {
            var r = ab.suspense;
            ab.suspense = void 0 === $ ? null : $;
            try {
              t(!1), e();
            } finally {
              ab.suspense = r;
            }
          });
      }
      function Lm(t, $, e) {
        var r = vb(),
          i = xd.suspense;
        i = {
          expirationTime: (r = mc(r, t, i)),
          suspenseConfig: i,
          action: e,
          eagerReducer: null,
          eagerState: null,
          next: null,
        };
        var a = $.pending;
        if (
          (null === a ? (i.next = i) : ((i.next = a.next), (a.next = i)),
          ($.pending = i),
          (a = t.alternate),
          t === Ea || (null !== a && a === Ea))
        )
          (Xt = !0), (i.expirationTime = Bd), (Ea.expirationTime = Bd);
        else {
          if (
            0 === t.expirationTime &&
            (null === a || 0 === a.expirationTime) &&
            null !== (a = $.lastRenderedReducer)
          )
            try {
              var n = $.lastRenderedState,
                l = a(n, e);
              if (((i.eagerReducer = a), (i.eagerState = l), fc(l, n))) return;
            } catch (v) {}
          $b(t, r);
        }
      }
      function Mm(t, $) {
        var e = wb(5, null, null, 0);
        (e.elementType = 'DELETED'),
          (e.type = 'DELETED'),
          (e.stateNode = $),
          (e.return = t),
          (e.effectTag = 8),
          null !== t.lastEffect
            ? ((t.lastEffect.nextEffect = e), (t.lastEffect = e))
            : (t.firstEffect = t.lastEffect = e);
      }
      function Nm(t, $) {
        switch (t.tag) {
          case 5:
            var e = t.type;
            return (
              null !==
                ($ =
                  1 !== $.nodeType ||
                  e.toLowerCase() !== $.nodeName.toLowerCase()
                    ? null
                    : $) && ((t.stateNode = $), !0)
            );
          case 6:
            return (
              null !==
                ($ = '' === t.pendingProps || 3 !== $.nodeType ? null : $) &&
              ((t.stateNode = $), !0)
            );
          case 13:
          default:
            return !1;
        }
      }
      function Mh(t) {
        if (fl) {
          var $ = el;
          if ($) {
            var e = $;
            if (!Nm(t, $)) {
              if (!($ = Lc(e.nextSibling)) || !Nm(t, $))
                return (
                  (t.effectTag = (-1025 & t.effectTag) | 2),
                  (fl = !1),
                  void (Rg = t)
                );
              Mm(Rg, e);
            }
            (Rg = t), (el = Lc($.firstChild));
          } else (t.effectTag = (-1025 & t.effectTag) | 2), (fl = !1), (Rg = t);
        }
      }
      function Om(t) {
        for (
          t = t.return;
          null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag;

        )
          t = t.return;
        Rg = t;
      }
      function wf(t) {
        if (t !== Rg) return !1;
        if (!fl) return Om(t), (fl = !0), !1;
        var $ = t.type;
        if (
          5 !== t.tag ||
          ('head' !== $ && 'body' !== $ && !sh($, t.memoizedProps))
        )
          for ($ = el; $; ) Mm(t, $), ($ = Lc($.nextSibling));
        if ((Om(t), 13 === t.tag)) {
          if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null))
            throw Error(Y(317));
          t: {
            for (t = t.nextSibling, $ = 0; t; ) {
              if (8 === t.nodeType) {
                var e = t.data;
                if (e === Kk) {
                  if (0 === $) {
                    el = Lc(t.nextSibling);
                    break t;
                  }
                  $--;
                } else (e !== Jk && e !== Ig && e !== Hg) || $++;
              }
              t = t.nextSibling;
            }
            el = null;
          }
        } else el = Rg ? Lc(t.stateNode.nextSibling) : null;
        return !0;
      }
      function Nh() {
        (el = Rg = null), (fl = !1);
      }
      function eb(t, $, e, r) {
        $.child = null === t ? Qg($, null, e, r) : Hc($, t.child, e, r);
      }
      function Pm(t, $, e, r, i) {
        e = e.render;
        var a = $.ref;
        return (
          Oc($, i),
          (r = Fh(t, $, e, r, a, i)),
          null === t || gl
            ? (($.effectTag |= 1), eb(t, $, r, i), $.child)
            : (($.updateQueue = t.updateQueue),
              ($.effectTag &= -517),
              t.expirationTime <= i && (t.expirationTime = 0),
              Ib(t, $, i))
        );
      }
      function Qm(t, $, e, r, i, a) {
        if (null === t) {
          var n = e.type;
          return 'function' != typeof n ||
            Yh(n) ||
            void 0 !== n.defaultProps ||
            null !== e.compare ||
            void 0 !== e.defaultProps
            ? (((t = Bf(e.type, null, r, null, $.mode, a)).ref = $.ref),
              (t.return = $),
              ($.child = t))
            : (($.tag = 15), ($.type = n), Rm(t, $, n, r, i, a));
        }
        return (
          (n = t.child),
          i < a &&
          ((i = n.memoizedProps),
          (e = null !== (e = e.compare) ? e : Kd)(i, r) && t.ref === $.ref)
            ? Ib(t, $, a)
            : (($.effectTag |= 1),
              ((t = qc(n, r)).ref = $.ref),
              (t.return = $),
              ($.child = t))
        );
      }
      function Rm(t, $, e, r, i, a) {
        return null !== t &&
          Kd(t.memoizedProps, r) &&
          t.ref === $.ref &&
          ((gl = !1), i < a)
          ? (($.expirationTime = t.expirationTime), Ib(t, $, a))
          : Oh(t, $, e, r, a);
      }
      function Sm(t, $) {
        var e = $.ref;
        ((null === t && null !== e) || (null !== t && t.ref !== e)) &&
          ($.effectTag |= 128);
      }
      function Oh(t, $, e, r, i) {
        var a = Na(e) ? Fc : Da.current;
        return (
          (a = Nc($, a)),
          Oc($, i),
          (e = Fh(t, $, e, r, a, i)),
          null === t || gl
            ? (($.effectTag |= 1), eb(t, $, e, i), $.child)
            : (($.updateQueue = t.updateQueue),
              ($.effectTag &= -517),
              t.expirationTime <= i && (t.expirationTime = 0),
              Ib(t, $, i))
        );
      }
      function Tm(t, $, e, r, i) {
        if (Na(e)) {
          var a = !0;
          mf($);
        } else a = !1;
        if ((Oc($, i), null === $.stateNode))
          null !== t &&
            ((t.alternate = null), ($.alternate = null), ($.effectTag |= 2)),
            Am($, e, r),
            Ah($, e, r, i),
            (r = !0);
        else if (null === t) {
          var n = $.stateNode,
            l = $.memoizedProps;
          n.props = l;
          var v = n.context,
            o = e.contextType;
          'object' == typeof o && null !== o
            ? (o = db(o))
            : (o = Nc($, (o = Na(e) ? Fc : Da.current)));
          var u = e.getDerivedStateFromProps,
            c =
              'function' == typeof u ||
              'function' == typeof n.getSnapshotBeforeUpdate;
          c ||
            ('function' != typeof n.UNSAFE_componentWillReceiveProps &&
              'function' != typeof n.componentWillReceiveProps) ||
            ((l !== r || v !== o) && Bm($, n, r, o)),
            (Se = !1);
          var f = $.memoizedState;
          (n.state = f),
            Ld($, r, n, i),
            (v = $.memoizedState),
            l !== r || f !== v || Ma.current || Se
              ? ('function' == typeof u &&
                  (pf($, e, u, r), (v = $.memoizedState)),
                (l = Se || zm($, e, l, r, f, v, o))
                  ? (c ||
                      ('function' != typeof n.UNSAFE_componentWillMount &&
                        'function' != typeof n.componentWillMount) ||
                      ('function' == typeof n.componentWillMount &&
                        n.componentWillMount(),
                      'function' == typeof n.UNSAFE_componentWillMount &&
                        n.UNSAFE_componentWillMount()),
                    'function' == typeof n.componentDidMount &&
                      ($.effectTag |= 4))
                  : ('function' == typeof n.componentDidMount &&
                      ($.effectTag |= 4),
                    ($.memoizedProps = r),
                    ($.memoizedState = v)),
                (n.props = r),
                (n.state = v),
                (n.context = o),
                (r = l))
              : ('function' == typeof n.componentDidMount && ($.effectTag |= 4),
                (r = !1));
        } else
          (n = $.stateNode),
            zh(t, $),
            (l = $.memoizedProps),
            (n.props = $.type === $.elementType ? l : jb($.type, l)),
            (v = n.context),
            'object' == typeof (o = e.contextType) && null !== o
              ? (o = db(o))
              : (o = Nc($, (o = Na(e) ? Fc : Da.current))),
            (c =
              'function' == typeof (u = e.getDerivedStateFromProps) ||
              'function' == typeof n.getSnapshotBeforeUpdate) ||
              ('function' != typeof n.UNSAFE_componentWillReceiveProps &&
                'function' != typeof n.componentWillReceiveProps) ||
              ((l !== r || v !== o) && Bm($, n, r, o)),
            (Se = !1),
            (v = $.memoizedState),
            (n.state = v),
            Ld($, r, n, i),
            (f = $.memoizedState),
            l !== r || v !== f || Ma.current || Se
              ? ('function' == typeof u &&
                  (pf($, e, u, r), (f = $.memoizedState)),
                (u = Se || zm($, e, l, r, v, f, o))
                  ? (c ||
                      ('function' != typeof n.UNSAFE_componentWillUpdate &&
                        'function' != typeof n.componentWillUpdate) ||
                      ('function' == typeof n.componentWillUpdate &&
                        n.componentWillUpdate(r, f, o),
                      'function' == typeof n.UNSAFE_componentWillUpdate &&
                        n.UNSAFE_componentWillUpdate(r, f, o)),
                    'function' == typeof n.componentDidUpdate &&
                      ($.effectTag |= 4),
                    'function' == typeof n.getSnapshotBeforeUpdate &&
                      ($.effectTag |= 256))
                  : ('function' != typeof n.componentDidUpdate ||
                      (l === t.memoizedProps && v === t.memoizedState) ||
                      ($.effectTag |= 4),
                    'function' != typeof n.getSnapshotBeforeUpdate ||
                      (l === t.memoizedProps && v === t.memoizedState) ||
                      ($.effectTag |= 256),
                    ($.memoizedProps = r),
                    ($.memoizedState = f)),
                (n.props = r),
                (n.state = f),
                (n.context = o),
                (r = u))
              : ('function' != typeof n.componentDidUpdate ||
                  (l === t.memoizedProps && v === t.memoizedState) ||
                  ($.effectTag |= 4),
                'function' != typeof n.getSnapshotBeforeUpdate ||
                  (l === t.memoizedProps && v === t.memoizedState) ||
                  ($.effectTag |= 256),
                (r = !1));
        return Ph(t, $, e, r, a, i);
      }
      function Ph(t, $, e, r, i, a) {
        Sm(t, $);
        var n = 0 != (64 & $.effectTag);
        if (!r && !n) return i && rm($, e, !1), Ib(t, $, a);
        (r = $.stateNode), (_t.current = $);
        var l =
          n && 'function' != typeof e.getDerivedStateFromError
            ? null
            : r.render();
        return (
          ($.effectTag |= 1),
          null !== t && n
            ? (($.child = Hc($, t.child, null, a)),
              ($.child = Hc($, null, l, a)))
            : eb(t, $, l, a),
          ($.memoizedState = r.state),
          i && rm($, e, !0),
          $.child
        );
      }
      function Um(t) {
        var $ = t.stateNode;
        $.pendingContext
          ? pm(t, $.pendingContext, $.pendingContext !== $.context)
          : $.context && pm(t, $.context, !1),
          Bh(t, $.containerInfo);
      }
      function Vm(t, $, e) {
        var r,
          i = $.mode,
          a = $.pendingProps,
          n = ua.current,
          l = !1;
        if (
          ((r = 0 != (64 & $.effectTag)) ||
            (r = 0 != (2 & n) && (null === t || null !== t.memoizedState)),
          r
            ? ((l = !0), ($.effectTag &= -65))
            : (null !== t && null === t.memoizedState) ||
              void 0 === a.fallback ||
              !0 === a.unstable_avoidThisFallback ||
              (n |= 1),
          va(ua, 1 & n),
          null === t)
        ) {
          if ((void 0 !== a.fallback && Mh($), l)) {
            if (
              ((l = a.fallback),
              ((a = _b(null, i, 0, null)).return = $),
              0 == (2 & $.mode))
            )
              for (
                t = null !== $.memoizedState ? $.child.child : $.child,
                  a.child = t;
                null !== t;

              )
                (t.return = a), (t = t.sibling);
            return (
              ((e = _b(l, i, e, null)).return = $),
              (a.sibling = e),
              ($.memoizedState = Sg),
              ($.child = a),
              e
            );
          }
          return (
            (i = a.children),
            ($.memoizedState = null),
            ($.child = Qg($, null, i, e))
          );
        }
        if (null !== t.memoizedState) {
          if (((i = (t = t.child).sibling), l)) {
            if (
              ((a = a.fallback),
              ((e = qc(t, t.pendingProps)).return = $),
              0 == (2 & $.mode) &&
                (l = null !== $.memoizedState ? $.child.child : $.child) !==
                  t.child)
            )
              for (e.child = l; null !== l; ) (l.return = e), (l = l.sibling);
            return (
              ((i = qc(i, a)).return = $),
              (e.sibling = i),
              (e.childExpirationTime = 0),
              ($.memoizedState = Sg),
              ($.child = e),
              i
            );
          }
          return (
            (e = Hc($, t.child, a.children, e)),
            ($.memoizedState = null),
            ($.child = e)
          );
        }
        if (((t = t.child), l)) {
          if (
            ((l = a.fallback),
            ((a = _b(null, i, 0, null)).return = $),
            (a.child = t),
            null !== t && (t.return = a),
            0 == (2 & $.mode))
          )
            for (
              t = null !== $.memoizedState ? $.child.child : $.child,
                a.child = t;
              null !== t;

            )
              (t.return = a), (t = t.sibling);
          return (
            ((e = _b(l, i, e, null)).return = $),
            (a.sibling = e),
            (e.effectTag |= 2),
            (a.childExpirationTime = 0),
            ($.memoizedState = Sg),
            ($.child = a),
            e
          );
        }
        return ($.memoizedState = null), ($.child = Hc($, t, a.children, e));
      }
      function Wm(t, $) {
        t.expirationTime < $ && (t.expirationTime = $);
        var e = t.alternate;
        null !== e && e.expirationTime < $ && (e.expirationTime = $),
          wm(t.return, $);
      }
      function Qh(t, $, e, r, i, a) {
        var n = t.memoizedState;
        null === n
          ? (t.memoizedState = {
              isBackwards: $,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: e,
              tailExpiration: 0,
              tailMode: i,
              lastEffect: a,
            })
          : ((n.isBackwards = $),
            (n.rendering = null),
            (n.renderingStartTime = 0),
            (n.last = r),
            (n.tail = e),
            (n.tailExpiration = 0),
            (n.tailMode = i),
            (n.lastEffect = a));
      }
      function Xm(t, $, e) {
        var r = $.pendingProps,
          i = r.revealOrder,
          a = r.tail;
        if ((eb(t, $, r.children, e), 0 != (2 & (r = ua.current))))
          (r = (1 & r) | 2), ($.effectTag |= 64);
        else {
          if (null !== t && 0 != (64 & t.effectTag))
            t: for (t = $.child; null !== t; ) {
              if (13 === t.tag) null !== t.memoizedState && Wm(t, e);
              else if (19 === t.tag) Wm(t, e);
              else if (null !== t.child) {
                (t.child.return = t), (t = t.child);
                continue;
              }
              if (t === $) break t;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === $) break t;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          r &= 1;
        }
        if ((va(ua, r), 0 == (2 & $.mode))) $.memoizedState = null;
        else
          switch (i) {
            case 'forwards':
              for (e = $.child, i = null; null !== e; )
                null !== (t = e.alternate) && null === rf(t) && (i = e),
                  (e = e.sibling);
              null === (e = i)
                ? ((i = $.child), ($.child = null))
                : ((i = e.sibling), (e.sibling = null)),
                Qh($, !1, i, e, a, $.lastEffect);
              break;
            case 'backwards':
              for (e = null, i = $.child, $.child = null; null !== i; ) {
                if (null !== (t = i.alternate) && null === rf(t)) {
                  $.child = i;
                  break;
                }
                (t = i.sibling), (i.sibling = e), (e = i), (i = t);
              }
              Qh($, !0, e, null, a, $.lastEffect);
              break;
            case 'together':
              Qh($, !1, null, null, void 0, $.lastEffect);
              break;
            default:
              $.memoizedState = null;
          }
        return $.child;
      }
      function Ib(t, $, e) {
        null !== t && ($.dependencies = t.dependencies);
        var r = $.expirationTime;
        if ((0 !== r && Af(r), $.childExpirationTime < e)) return null;
        if (null !== t && $.child !== t.child) throw Error(Y(153));
        if (null !== $.child) {
          for (
            e = qc((t = $.child), t.pendingProps), $.child = e, e.return = $;
            null !== t.sibling;

          )
            (t = t.sibling),
              ((e = e.sibling = qc(t, t.pendingProps)).return = $);
          e.sibling = null;
        }
        return $.child;
      }
      function xf(t, $) {
        switch (t.tailMode) {
          case 'hidden':
            $ = t.tail;
            for (var e = null; null !== $; )
              null !== $.alternate && (e = $), ($ = $.sibling);
            null === e ? (t.tail = null) : (e.sibling = null);
            break;
          case 'collapsed':
            e = t.tail;
            for (var r = null; null !== e; )
              null !== e.alternate && (r = e), (e = e.sibling);
            null === r
              ? $ || null === t.tail
                ? (t.tail = null)
                : (t.tail.sibling = null)
              : (r.sibling = null);
        }
      }
      function av(t, $, e) {
        var r = $.pendingProps;
        switch ($.tag) {
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
            return null;
          case 1:
            return Na($.type) && lf(), null;
          case 3:
            return (
              Pc(),
              pa(Ma),
              pa(Da),
              (e = $.stateNode).pendingContext &&
                ((e.context = e.pendingContext), (e.pendingContext = null)),
              (null !== t && null !== t.child) || !wf($) || ($.effectTag |= 4),
              hl($),
              null
            );
          case 5:
            Ch($), (e = kc(Ad.current));
            var i = $.type;
            if (null !== t && null != $.stateNode)
              bu(t, $, i, r, e), t.ref !== $.ref && ($.effectTag |= 128);
            else {
              if (!r) {
                if (null === $.stateNode) throw Error(Y(166));
                return null;
              }
              if (((t = kc(rb.current)), wf($))) {
                (r = $.stateNode), (i = $.type);
                var a = $.memoizedProps;
                switch (((r[Tb] = $), (r[Me] = a), i)) {
                  case 'iframe':
                  case 'object':
                  case 'embed':
                    oa('load', r);
                    break;
                  case 'video':
                  case 'audio':
                    for (t = 0; t < jd.length; t++) oa(jd[t], r);
                    break;
                  case 'source':
                    oa('error', r);
                    break;
                  case 'img':
                  case 'image':
                  case 'link':
                    oa('error', r), oa('load', r);
                    break;
                  case 'form':
                    oa('reset', r), oa('submit', r);
                    break;
                  case 'details':
                    oa('toggle', r);
                    break;
                  case 'input':
                    Hl(r, a), oa('invalid', r), Gb(e, 'onChange');
                    break;
                  case 'select':
                    (r._wrapperState = {wasMultiple: !!a.multiple}),
                      oa('invalid', r),
                      Gb(e, 'onChange');
                    break;
                  case 'textarea':
                    Kl(r, a), oa('invalid', r), Gb(e, 'onChange');
                }
                for (var n in (oh(i, a), (t = null), a))
                  if (a.hasOwnProperty(n)) {
                    var l = a[n];
                    'children' === n
                      ? 'string' == typeof l
                        ? r.textContent !== l && (t = ['children', l])
                        : 'number' == typeof l &&
                          r.textContent !== '' + l &&
                          (t = ['children', '' + l])
                      : Cc.hasOwnProperty(n) && null != l && Gb(e, n);
                  }
                switch (i) {
                  case 'input':
                    _e(r), Jl(r, a, !0);
                    break;
                  case 'textarea':
                    _e(r), Ml(r);
                    break;
                  case 'select':
                  case 'option':
                    break;
                  default:
                    'function' == typeof a.onClick && (r.onclick = ff);
                }
                (e = t), ($.updateQueue = e), null !== e && ($.effectTag |= 4);
              } else {
                switch (
                  ((n = 9 === e.nodeType ? e : e.ownerDocument),
                  t === Ik && (t = Nl(i)),
                  t === Ik
                    ? 'script' === i
                      ? (((t = n.createElement('div')).innerHTML =
                          '<script></script>'),
                        (t = t.removeChild(t.firstChild)))
                      : 'string' == typeof r.is
                      ? (t = n.createElement(i, {is: r.is}))
                      : ((t = n.createElement(i)),
                        'select' === i &&
                          ((n = t),
                          r.multiple
                            ? (n.multiple = !0)
                            : r.size && (n.size = r.size)))
                    : (t = n.createElementNS(t, i)),
                  (t[Tb] = $),
                  (t[Me] = r),
                  au(t, $, !1, !1),
                  ($.stateNode = t),
                  (n = ph(i, r)),
                  i)
                ) {
                  case 'iframe':
                  case 'object':
                  case 'embed':
                    oa('load', t), (l = r);
                    break;
                  case 'video':
                  case 'audio':
                    for (l = 0; l < jd.length; l++) oa(jd[l], t);
                    l = r;
                    break;
                  case 'source':
                    oa('error', t), (l = r);
                    break;
                  case 'img':
                  case 'image':
                  case 'link':
                    oa('error', t), oa('load', t), (l = r);
                    break;
                  case 'form':
                    oa('reset', t), oa('submit', t), (l = r);
                    break;
                  case 'details':
                    oa('toggle', t), (l = r);
                    break;
                  case 'input':
                    Hl(t, r),
                      (l = bh(t, r)),
                      oa('invalid', t),
                      Gb(e, 'onChange');
                    break;
                  case 'option':
                    l = eh(t, r);
                    break;
                  case 'select':
                    (t._wrapperState = {wasMultiple: !!r.multiple}),
                      (l = Fa({}, r, {value: void 0})),
                      oa('invalid', t),
                      Gb(e, 'onChange');
                    break;
                  case 'textarea':
                    Kl(t, r),
                      (l = fh(t, r)),
                      oa('invalid', t),
                      Gb(e, 'onChange');
                    break;
                  default:
                    l = r;
                }
                oh(i, l);
                var v = l;
                for (a in v)
                  if (v.hasOwnProperty(a)) {
                    var o = v[a];
                    'style' === a
                      ? Zl(t, o)
                      : 'dangerouslySetInnerHTML' === a
                      ? null != (o = o ? o.__html : void 0) && yk(t, o)
                      : 'children' === a
                      ? 'string' == typeof o
                        ? ('textarea' !== i || '' !== o) && Ed(t, o)
                        : 'number' == typeof o && Ed(t, '' + o)
                      : 'suppressContentEditableWarning' !== a &&
                        'suppressHydrationWarning' !== a &&
                        'autoFocus' !== a &&
                        (Cc.hasOwnProperty(a)
                          ? null != o && Gb(e, a)
                          : null != o && _g(t, a, o, n));
                  }
                switch (i) {
                  case 'input':
                    _e(t), Jl(t, r, !1);
                    break;
                  case 'textarea':
                    _e(t), Ml(t);
                    break;
                  case 'option':
                    null != r.value &&
                      t.setAttribute('value', '' + Wb(r.value));
                    break;
                  case 'select':
                    (t.multiple = !!r.multiple),
                      null != (e = r.value)
                        ? Jc(t, !!r.multiple, e, !1)
                        : null != r.defaultValue &&
                          Jc(t, !!r.multiple, r.defaultValue, !0);
                    break;
                  default:
                    'function' == typeof l.onClick && (t.onclick = ff);
                }
                cm(i, r) && ($.effectTag |= 4);
              }
              null !== $.ref && ($.effectTag |= 128);
            }
            return null;
          case 6:
            if (t && null != $.stateNode) cu(t, $, t.memoizedProps, r);
            else {
              if ('string' != typeof r && null === $.stateNode)
                throw Error(Y(166));
              (e = kc(Ad.current)),
                kc(rb.current),
                wf($)
                  ? ((e = $.stateNode),
                    (r = $.memoizedProps),
                    (e[Tb] = $),
                    e.nodeValue !== r && ($.effectTag |= 4))
                  : (((e = (
                      9 === e.nodeType ? e : e.ownerDocument
                    ).createTextNode(r))[Tb] = $),
                    ($.stateNode = e));
            }
            return null;
          case 13:
            return (
              pa(ua),
              (r = $.memoizedState),
              0 != (64 & $.effectTag)
                ? (($.expirationTime = e), $)
                : ((e = null !== r),
                  (r = !1),
                  null === t
                    ? void 0 !== $.memoizedProps.fallback && wf($)
                    : ((r = null !== (i = t.memoizedState)),
                      e ||
                        null === i ||
                        (null !== (i = t.child.sibling) &&
                          (null !== (a = $.firstEffect)
                            ? (($.firstEffect = i), (i.nextEffect = a))
                            : (($.firstEffect = $.lastEffect = i),
                              (i.nextEffect = null)),
                          (i.effectTag = 8)))),
                  e &&
                    !r &&
                    0 != (2 & $.mode) &&
                    ((null === t &&
                      !0 !== $.memoizedProps.unstable_avoidThisFallback) ||
                    0 != (1 & ua.current)
                      ? cb === gc && (cb = Ze)
                      : ((cb !== gc && cb !== Ze) || (cb = $e),
                        0 !== Wg && null !== Eb && (rc(Eb, bb), sn(Eb, Wg)))),
                  (e || r) && ($.effectTag |= 4),
                  null)
            );
          case 4:
            return Pc(), hl($), null;
          case 10:
            return xh($), null;
          case 17:
            return Na($.type) && lf(), null;
          case 19:
            if ((pa(ua), null === (r = $.memoizedState))) return null;
            if (((i = 0 != (64 & $.effectTag)), null === (a = r.rendering))) {
              if (i) xf(r, !1);
              else if (cb !== gc || (null !== t && 0 != (64 & t.effectTag)))
                for (a = $.child; null !== a; ) {
                  if (null !== (t = rf(a))) {
                    for (
                      $.effectTag |= 64,
                        xf(r, !1),
                        null !== (i = t.updateQueue) &&
                          (($.updateQueue = i), ($.effectTag |= 4)),
                        null === r.lastEffect && ($.firstEffect = null),
                        $.lastEffect = r.lastEffect,
                        r = $.child;
                      null !== r;

                    )
                      (a = e),
                        ((i = r).effectTag &= 2),
                        (i.nextEffect = null),
                        (i.firstEffect = null),
                        (i.lastEffect = null),
                        null === (t = i.alternate)
                          ? ((i.childExpirationTime = 0),
                            (i.expirationTime = a),
                            (i.child = null),
                            (i.memoizedProps = null),
                            (i.memoizedState = null),
                            (i.updateQueue = null),
                            (i.dependencies = null))
                          : ((i.childExpirationTime = t.childExpirationTime),
                            (i.expirationTime = t.expirationTime),
                            (i.child = t.child),
                            (i.memoizedProps = t.memoizedProps),
                            (i.memoizedState = t.memoizedState),
                            (i.updateQueue = t.updateQueue),
                            (a = t.dependencies),
                            (i.dependencies =
                              null === a
                                ? null
                                : {
                                    expirationTime: a.expirationTime,
                                    firstContext: a.firstContext,
                                    responders: a.responders,
                                  })),
                        (r = r.sibling);
                    return va(ua, (1 & ua.current) | 2), $.child;
                  }
                  a = a.sibling;
                }
            } else {
              if (!i)
                if (null !== (t = rf(a))) {
                  if (
                    (($.effectTag |= 64),
                    (i = !0),
                    null !== (e = t.updateQueue) &&
                      (($.updateQueue = e), ($.effectTag |= 4)),
                    xf(r, !0),
                    null === r.tail && 'hidden' === r.tailMode && !a.alternate)
                  )
                    return (
                      null !== ($ = $.lastEffect = r.lastEffect) &&
                        ($.nextEffect = null),
                      null
                    );
                } else
                  2 * $a() - r.renderingStartTime > r.tailExpiration &&
                    1 < e &&
                    (($.effectTag |= 64),
                    (i = !0),
                    xf(r, !1),
                    ($.expirationTime = $.childExpirationTime = e - 1));
              r.isBackwards
                ? ((a.sibling = $.child), ($.child = a))
                : (null !== (e = r.last) ? (e.sibling = a) : ($.child = a),
                  (r.last = a));
            }
            return null !== r.tail
              ? (0 === r.tailExpiration && (r.tailExpiration = $a() + 500),
                (e = r.tail),
                (r.rendering = e),
                (r.tail = e.sibling),
                (r.lastEffect = $.lastEffect),
                (r.renderingStartTime = $a()),
                (e.sibling = null),
                ($ = ua.current),
                va(ua, i ? (1 & $) | 2 : 1 & $),
                e)
              : null;
        }
        throw Error(Y(156, $.tag));
      }
      function bv(t) {
        switch (t.tag) {
          case 1:
            Na(t.type) && lf();
            var $ = t.effectTag;
            return 4096 & $ ? ((t.effectTag = (-4097 & $) | 64), t) : null;
          case 3:
            if ((Pc(), pa(Ma), pa(Da), 0 != (64 & ($ = t.effectTag))))
              throw Error(Y(285));
            return (t.effectTag = (-4097 & $) | 64), t;
          case 5:
            return Ch(t), null;
          case 13:
            return (
              pa(ua),
              4096 & ($ = t.effectTag)
                ? ((t.effectTag = (-4097 & $) | 64), t)
                : null
            );
          case 19:
            return pa(ua), null;
          case 4:
            return Pc(), null;
          case 10:
            return xh(t), null;
          default:
            return null;
        }
      }
      function Rh(t, $) {
        return {value: t, source: $, stack: ah($)};
      }
      function Sh(t, $) {
        var e = $.source,
          r = $.stack;
        null === r && null !== e && (r = ah(e)),
          null !== e && Fb(e.type),
          ($ = $.value),
          null !== t && 1 === t.tag && Fb(t.type);
        try {
          console.error($);
        } catch (i) {
          setTimeout(function () {
            throw i;
          });
        }
      }
      function cv(t, $) {
        try {
          ($.props = t.memoizedProps),
            ($.state = t.memoizedState),
            $.componentWillUnmount();
        } catch (e) {
          pc(t, e);
        }
      }
      function Ym(t) {
        var $ = t.ref;
        if (null !== $)
          if ('function' == typeof $)
            try {
              $(null);
            } catch (e) {
              pc(t, e);
            }
          else $.current = null;
      }
      function dv(t, $) {
        switch ($.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            return;
          case 1:
            if (256 & $.effectTag && null !== t) {
              var e = t.memoizedProps,
                r = t.memoizedState;
              ($ = (t = $.stateNode).getSnapshotBeforeUpdate(
                $.elementType === $.type ? e : jb($.type, e),
                r
              )),
                (t.__reactInternalSnapshotBeforeUpdate = $);
            }
            return;
          case 3:
          case 5:
          case 6:
          case 4:
          case 17:
            return;
        }
        throw Error(Y(163));
      }
      function Zm(t, $) {
        if (null !== ($ = null !== ($ = $.updateQueue) ? $.lastEffect : null)) {
          var e = ($ = $.next);
          do {
            if ((e.tag & t) === t) {
              var r = e.destroy;
              (e.destroy = void 0), void 0 !== r && r();
            }
            e = e.next;
          } while (e !== $);
        }
      }
      function $m(t, $) {
        if (null !== ($ = null !== ($ = $.updateQueue) ? $.lastEffect : null)) {
          var e = ($ = $.next);
          do {
            if ((e.tag & t) === t) {
              var r = e.create;
              e.destroy = r();
            }
            e = e.next;
          } while (e !== $);
        }
      }
      function ev(t, $, e) {
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            return void $m(3, e);
          case 1:
            if (((t = e.stateNode), 4 & e.effectTag))
              if (null === $) t.componentDidMount();
              else {
                var r =
                  e.elementType === e.type
                    ? $.memoizedProps
                    : jb(e.type, $.memoizedProps);
                t.componentDidUpdate(
                  r,
                  $.memoizedState,
                  t.__reactInternalSnapshotBeforeUpdate
                );
              }
            return void (null !== ($ = e.updateQueue) && ym(e, $, t));
          case 3:
            if (null !== ($ = e.updateQueue)) {
              if (((t = null), null !== e.child))
                switch (e.child.tag) {
                  case 5:
                    t = e.child.stateNode;
                    break;
                  case 1:
                    t = e.child.stateNode;
                }
              ym(e, $, t);
            }
            return;
          case 5:
            return (
              (t = e.stateNode),
              void (
                null === $ &&
                4 & e.effectTag &&
                cm(e.type, e.memoizedProps) &&
                t.focus()
              )
            );
          case 6:
          case 4:
          case 12:
            return;
          case 13:
            return void (
              null === e.memoizedState &&
              ((e = e.alternate),
              null !== e &&
                ((e = e.memoizedState),
                null !== e && ((e = e.dehydrated), null !== e && Xl(e))))
            );
          case 19:
          case 17:
          case 20:
          case 21:
            return;
        }
        throw Error(Y(163));
      }
      function _m(t, $, e) {
        switch (('function' == typeof ul && ul($), $.tag)) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            if (null !== (t = $.updateQueue) && null !== (t = t.lastEffect)) {
              var r = t.next;
              Xb(97 < e ? 97 : e, function () {
                var t = r;
                do {
                  var e = t.destroy;
                  if (void 0 !== e) {
                    var i = $;
                    try {
                      e();
                    } catch (a) {
                      pc(i, a);
                    }
                  }
                  t = t.next;
                } while (t !== r);
              });
            }
            break;
          case 1:
            Ym($),
              'function' == typeof (e = $.stateNode).componentWillUnmount &&
                cv($, e);
            break;
          case 5:
            Ym($);
            break;
          case 4:
            dn(t, $, e);
        }
      }
      function an(t) {
        var $ = t.alternate;
        (t.return = null),
          (t.child = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.alternate = null),
          (t.firstEffect = null),
          (t.lastEffect = null),
          (t.pendingProps = null),
          (t.memoizedProps = null),
          (t.stateNode = null),
          null !== $ && an($);
      }
      function bn(t) {
        return 5 === t.tag || 3 === t.tag || 4 === t.tag;
      }
      function cn(t) {
        t: {
          for (var $ = t.return; null !== $; ) {
            if (bn($)) {
              var e = $;
              break t;
            }
            $ = $.return;
          }
          throw Error(Y(160));
        }
        switch ((($ = e.stateNode), e.tag)) {
          case 5:
            var r = !1;
            break;
          case 3:
          case 4:
            ($ = $.containerInfo), (r = !0);
            break;
          default:
            throw Error(Y(161));
        }
        16 & e.effectTag && (Ed($, ''), (e.effectTag &= -17));
        t: $: for (e = t; ; ) {
          for (; null === e.sibling; ) {
            if (null === e.return || bn(e.return)) {
              e = null;
              break t;
            }
            e = e.return;
          }
          for (
            e.sibling.return = e.return, e = e.sibling;
            5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

          ) {
            if (2 & e.effectTag) continue $;
            if (null === e.child || 4 === e.tag) continue $;
            (e.child.return = e), (e = e.child);
          }
          if (!(2 & e.effectTag)) {
            e = e.stateNode;
            break t;
          }
        }
        r ? Th(t, e, $) : Uh(t, e, $);
      }
      function Th(t, $, e) {
        // console.trace();
        var r = t.tag,
          i = 5 === r || 6 === r;
        if (i)
          (t = i ? t.stateNode : t.stateNode.instance),
            $
              ? 8 === e.nodeType
                ? e.parentNode.insertBefore(t, $)
                : e.insertBefore(t, $)
              : (8 === e.nodeType
                  ? ($ = e.parentNode).insertBefore(t, e)
                  : ($ = e).appendChild(t),
                null != (e = e._reactRootContainer) ||
                  null !== $.onclick ||
                  ($.onclick = ff));
        else if (4 !== r && null !== (t = t.child))
          for (Th(t, $, e), t = t.sibling; null !== t; )
            Th(t, $, e), (t = t.sibling);
      }
      function Uh(t, $, e) {
        var r = t.tag,
          i = 5 === r || 6 === r;
        if (i)
          (t = i ? t.stateNode : t.stateNode.instance),
            $ ? e.insertBefore(t, $) : e.appendChild(t);
        else if (4 !== r && null !== (t = t.child))
          for (Uh(t, $, e), t = t.sibling; null !== t; )
            Uh(t, $, e), (t = t.sibling);
      }
      function dn(t, $, e) {
        for (var r, i, a = $, n = !1; ; ) {
          if (!n) {
            n = a.return;
            t: for (;;) {
              if (null === n) throw Error(Y(160));
              switch (((r = n.stateNode), n.tag)) {
                case 5:
                  i = !1;
                  break t;
                case 3:
                case 4:
                  (r = r.containerInfo), (i = !0);
                  break t;
              }
              n = n.return;
            }
            n = !0;
          }
          if (5 === a.tag || 6 === a.tag) {
            t: for (var l = t, v = a, o = e, u = v; ; )
              if ((_m(l, u, o), null !== u.child && 4 !== u.tag))
                (u.child.return = u), (u = u.child);
              else {
                if (u === v) break t;
                for (; null === u.sibling; ) {
                  if (null === u.return || u.return === v) break t;
                  u = u.return;
                }
                (u.sibling.return = u.return), (u = u.sibling);
              }
            i
              ? ((l = r),
                (v = a.stateNode),
                8 === l.nodeType
                  ? l.parentNode.removeChild(v)
                  : l.removeChild(v))
              : r.removeChild(a.stateNode);
          } else if (4 === a.tag) {
            if (null !== a.child) {
              (r = a.stateNode.containerInfo),
                (i = !0),
                (a.child.return = a),
                (a = a.child);
              continue;
            }
          } else if ((_m(t, a, e), null !== a.child)) {
            (a.child.return = a), (a = a.child);
            continue;
          }
          if (a === $) break;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === $) return;
            4 === (a = a.return).tag && (n = !1);
          }
          (a.sibling.return = a.return), (a = a.sibling);
        }
      }
      function Vh(t, $) {
        switch ($.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            return void Zm(3, $);
          case 1:
            return;
          case 5:
            var e = $.stateNode;
            if (null != e) {
              var r = $.memoizedProps,
                i = null !== t ? t.memoizedProps : r;
              t = $.type;
              var a = $.updateQueue;
              if ((($.updateQueue = null), null !== a)) {
                for (
                  e[Me] = r,
                    'input' === t &&
                      'radio' === r.type &&
                      null != r.name &&
                      Il(e, r),
                    ph(t, i),
                    $ = ph(t, r),
                    i = 0;
                  i < a.length;
                  i += 2
                ) {
                  var n = a[i],
                    l = a[i + 1];
                  'style' === n
                    ? Zl(e, l)
                    : 'dangerouslySetInnerHTML' === n
                    ? yk(e, l)
                    : 'children' === n
                    ? Ed(e, l)
                    : _g(e, n, l, $);
                }
                switch (t) {
                  case 'input':
                    ch(e, r);
                    break;
                  case 'textarea':
                    Ll(e, r);
                    break;
                  case 'select':
                    ($ = e._wrapperState.wasMultiple),
                      (e._wrapperState.wasMultiple = !!r.multiple),
                      null != (t = r.value)
                        ? Jc(e, !!r.multiple, t, !1)
                        : $ !== !!r.multiple &&
                          (null != r.defaultValue
                            ? Jc(e, !!r.multiple, r.defaultValue, !0)
                            : Jc(e, !!r.multiple, r.multiple ? [] : '', !1));
                }
              }
            }
            return;
          case 6:
            if (null === $.stateNode) throw Error(Y(162));
            return void ($.stateNode.nodeValue = $.memoizedProps);
          case 3:
            return void (
              ($ = $.stateNode).hydrate &&
              (($.hydrate = !1), Xl($.containerInfo))
            );
          case 12:
            return;
          case 13:
            if (
              ((e = $),
              null === $.memoizedState
                ? (r = !1)
                : ((r = !0), (e = $.child), (nl = $a())),
              null !== e)
            )
              t: for (t = e; ; ) {
                if (5 === t.tag)
                  (a = t.stateNode),
                    r
                      ? 'function' == typeof (a = a.style).setProperty
                        ? a.setProperty('display', 'none', 'important')
                        : (a.display = 'none')
                      : ((a = t.stateNode),
                        (i =
                          null != (i = t.memoizedProps.style) &&
                          i.hasOwnProperty('display')
                            ? i.display
                            : null),
                        (a.style.display = Yl('display', i)));
                else if (6 === t.tag)
                  t.stateNode.nodeValue = r ? '' : t.memoizedProps;
                else {
                  if (
                    13 === t.tag &&
                    null !== t.memoizedState &&
                    null === t.memoizedState.dehydrated
                  ) {
                    ((a = t.child.sibling).return = t), (t = a);
                    continue;
                  }
                  if (null !== t.child) {
                    (t.child.return = t), (t = t.child);
                    continue;
                  }
                }
                if (t === e) break;
                for (; null === t.sibling; ) {
                  if (null === t.return || t.return === e) break t;
                  t = t.return;
                }
                (t.sibling.return = t.return), (t = t.sibling);
              }
            return void en($);
          case 19:
            return void en($);
          case 17:
            return;
        }
        throw Error(Y(163));
      }
      function en(t) {
        var $ = t.updateQueue;
        if (null !== $) {
          t.updateQueue = null;
          var e = t.stateNode;
          null === e && (e = t.stateNode = new du()),
            $.forEach(function ($) {
              var r = mv.bind(null, t, $);
              e.has($) || (e.add($), $.then(r, r));
            });
        }
      }
      function fn(t, $, e) {
        ((e = Yb(e, null)).tag = 3), (e.payload = {element: null});
        var r = $.value;
        return (
          (e.callback = function () {
            pl || ((pl = !0), (hu = r)), Sh(t, $);
          }),
          e
        );
      }
      function gn(t, $, e) {
        (e = Yb(e, null)).tag = 3;
        var r = t.type.getDerivedStateFromError;
        if ('function' == typeof r) {
          var i = $.value;
          e.payload = function () {
            return Sh(t, $), r(i);
          };
        }
        var a = t.stateNode;
        return (
          null !== a &&
            'function' == typeof a.componentDidCatch &&
            (e.callback = function () {
              'function' != typeof r &&
                (null === Ic ? (Ic = new Set([this])) : Ic.add(this), Sh(t, $));
              var e = $.stack;
              this.componentDidCatch($.value, {
                componentStack: null !== e ? e : '',
              });
            }),
          e
        );
      }
      function vb() {
        return (sa & (ib | tb)) !== wa
          ? 1073741821 - (($a() / 10) | 0)
          : 0 !== sl
          ? sl
          : (sl = 1073741821 - (($a() / 10) | 0));
      }
      function mc(t, $, e) {
        if (0 == (2 & ($ = $.mode))) return 1073741823;
        var r = nf();
        if (0 == (4 & $)) return 99 === r ? 1073741823 : 1073741822;
        if ((sa & ib) !== wa) return bb;
        if (null !== e) t = of(t, 0 | e.timeoutMs || 5e3, 250);
        else
          switch (r) {
            case 99:
              t = 1073741823;
              break;
            case 98:
              t = of(t, 150, 100);
              break;
            case 97:
            case 96:
              t = of(t, 5e3, 250);
              break;
            case 95:
              t = 2;
              break;
            default:
              throw Error(Y(326));
          }
        return null !== Eb && t === bb && --t, t;
      }
      function $b(t, $) {
        if (50 < rl) throw ((rl = 0), (iu = null), Error(Y(185)));
        if (null !== (t = yf(t, $))) {
          var e = nf();
          1073741823 === $
            ? (sa & Tg) !== wa && (sa & (ib | tb)) === wa
              ? Wh(t)
              : (Ta(t), sa === wa && ub())
            : Ta(t),
            (4 & sa) === wa ||
              (98 !== e && 99 !== e) ||
              (null === Cd
                ? (Cd = new Map([[t, $]]))
                : (void 0 === (e = Cd.get(t)) || e > $) && Cd.set(t, $));
        }
      }
      function yf(t, $) {
        t.expirationTime < $ && (t.expirationTime = $);
        var e = t.alternate;
        null !== e && e.expirationTime < $ && (e.expirationTime = $);
        var r = t.return,
          i = null;
        if (null === r && 3 === t.tag) i = t.stateNode;
        else
          for (; null !== r; ) {
            if (
              ((e = r.alternate),
              r.childExpirationTime < $ && (r.childExpirationTime = $),
              null !== e &&
                e.childExpirationTime < $ &&
                (e.childExpirationTime = $),
              null === r.return && 3 === r.tag)
            ) {
              i = r.stateNode;
              break;
            }
            r = r.return;
          }
        return (
          null !== i && (Eb === i && (Af($), cb === $e && rc(i, bb)), sn(i, $)),
          i
        );
      }
      function zf(t) {
        var $ = t.lastExpiredTime;
        if (0 !== $) return $;
        if (!rn(t, ($ = t.firstPendingTime))) return $;
        var e = t.lastPingedTime;
        return 2 >= (t = e > (t = t.nextKnownPendingLevel) ? e : t) && $ !== t
          ? 0
          : t;
      }
      function Ta(t) {
        if (0 !== t.lastExpiredTime)
          (t.callbackExpirationTime = 1073741823),
            (t.callbackPriority = 99),
            (t.callbackNode = um(Wh.bind(null, t)));
        else {
          var $ = zf(t),
            e = t.callbackNode;
          if (0 === $)
            null !== e &&
              ((t.callbackNode = null),
              (t.callbackExpirationTime = 0),
              (t.callbackPriority = 90));
          else {
            var r = vb();
            if (
              (1073741823 === $
                ? (r = 99)
                : 1 === $ || 2 === $
                ? (r = 95)
                : (r =
                    0 >= (r = 10 * (1073741821 - $) - 10 * (1073741821 - r))
                      ? 99
                      : 250 >= r
                      ? 98
                      : 5250 >= r
                      ? 97
                      : 95),
              null !== e)
            ) {
              var i = t.callbackPriority;
              if (t.callbackExpirationTime === $ && i >= r) return;
              e !== $k && Uk(e);
            }
            (t.callbackExpirationTime = $),
              (t.callbackPriority = r),
              ($ =
                1073741823 === $
                  ? um(Wh.bind(null, t))
                  : tm(r, hn.bind(null, t), {
                      timeout: 10 * (1073741821 - $) - $a(),
                    })),
              (t.callbackNode = $);
          }
        }
      }
      function hn(t, $) {
        if (((sl = 0), $)) return _h(t, ($ = vb())), Ta(t), null;
        var e = zf(t);
        if (0 !== e) {
          if ((($ = t.callbackNode), (sa & (ib | tb)) !== wa))
            throw Error(Y(327));
          if ((Sc(), (t === Eb && e === bb) || nc(t, e), null !== ha)) {
            var r = sa;
            sa |= ib;
            for (var i = mn(); ; )
              try {
                hv();
                break;
              } catch (l) {
                ln(t, l);
              }
            if ((wh(), (sa = r), (Xe.current = i), cb === Ye))
              throw (($ = kl), nc(t, e), rc(t, e), Ta(t), $);
            if (null === ha)
              switch (
                ((i = t.finishedWork = t.current.alternate),
                (t.finishedExpirationTime = e),
                (r = cb),
                (Eb = null),
                r)
              ) {
                case gc:
                case Ye:
                  throw Error(Y(345));
                case jl:
                  _h(t, 2 < e ? 2 : e);
                  break;
                case Ze:
                  if (
                    (rc(t, e),
                    e === (r = t.lastSuspendedTime) &&
                      (t.nextKnownPendingLevel = Xh(i)),
                    1073741823 === hc && 10 < (i = nl + ol - $a()))
                  ) {
                    if (ml) {
                      var a = t.lastPingedTime;
                      if (0 === a || a >= e) {
                        (t.lastPingedTime = e), nc(t, e);
                        break;
                      }
                    }
                    if (0 !== (a = zf(t)) && a !== e) break;
                    if (0 !== r && r !== e) {
                      t.lastPingedTime = r;
                      break;
                    }
                    t.timeoutHandle = Jg(oc.bind(null, t), i);
                    break;
                  }
                  oc(t);
                  break;
                case $e:
                  if (
                    (rc(t, e),
                    e === (r = t.lastSuspendedTime) &&
                      (t.nextKnownPendingLevel = Xh(i)),
                    ml && (0 === (i = t.lastPingedTime) || i >= e))
                  ) {
                    (t.lastPingedTime = e), nc(t, e);
                    break;
                  }
                  if (0 !== (i = zf(t)) && i !== e) break;
                  if (0 !== r && r !== e) {
                    t.lastPingedTime = r;
                    break;
                  }
                  if (
                    (1073741823 !== Vg
                      ? (r = 10 * (1073741821 - Vg) - $a())
                      : 1073741823 === hc
                      ? (r = 0)
                      : ((r = 10 * (1073741821 - hc) - 5e3),
                        0 > (r = (i = $a()) - r) && (r = 0),
                        (e = 10 * (1073741821 - e) - i) <
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
                              : 1960 * gu(r / 1960)) - r) && (r = e)),
                    10 < r)
                  ) {
                    t.timeoutHandle = Jg(oc.bind(null, t), r);
                    break;
                  }
                  oc(t);
                  break;
                case Ug:
                  if (1073741823 !== hc && null !== ll) {
                    a = hc;
                    var n = ll;
                    if (
                      (0 >= (r = 0 | n.busyMinDurationMs)
                        ? (r = 0)
                        : ((i = 0 | n.busyDelayMs),
                          (r =
                            (a =
                              $a() -
                              (10 * (1073741821 - a) -
                                (0 | n.timeoutMs || 5e3))) <= i
                              ? 0
                              : i + r - a)),
                      10 < r)
                    ) {
                      rc(t, e), (t.timeoutHandle = Jg(oc.bind(null, t), r));
                      break;
                    }
                  }
                  oc(t);
                  break;
                default:
                  throw Error(Y(329));
              }
            if ((Ta(t), t.callbackNode === $)) return hn.bind(null, t);
          }
        }
        return null;
      }
      function Wh(t) {
        var $ = t.lastExpiredTime;
        if ((($ = 0 !== $ ? $ : 1073741823), (sa & (ib | tb)) !== wa))
          throw Error(Y(327));
        if ((Sc(), (t === Eb && $ === bb) || nc(t, $), null !== ha)) {
          var e = sa;
          sa |= ib;
          for (var r = mn(); ; )
            try {
              gv();
              break;
            } catch (i) {
              ln(t, i);
            }
          if ((wh(), (sa = e), (Xe.current = r), cb === Ye))
            throw ((e = kl), nc(t, $), rc(t, $), Ta(t), e);
          if (null !== ha) throw Error(Y(261));
          (t.finishedWork = t.current.alternate),
            (t.finishedExpirationTime = $),
            (Eb = null),
            oc(t),
            Ta(t);
        }
        return null;
      }
      function fv() {
        if (null !== Cd) {
          var t = Cd;
          (Cd = null),
            t.forEach(function (t, $) {
              _h($, t), Ta($);
            }),
            ub();
        }
      }
      function jn(t, $) {
        var e = sa;
        sa |= 1;
        try {
          return t($);
        } finally {
          (sa = e) === wa && ub();
        }
      }
      function kn(t, $) {
        var e = sa;
        (sa &= -2), (sa |= Tg);
        try {
          return t($);
        } finally {
          (sa = e) === wa && ub();
        }
      }
      function nc(t, $) {
        (t.finishedWork = null), (t.finishedExpirationTime = 0);
        var e = t.timeoutHandle;
        if ((-1 !== e && ((t.timeoutHandle = -1), kt(e)), null !== ha))
          for (e = ha.return; null !== e; ) {
            var r = e;
            switch (r.tag) {
              case 1:
                null != (r = r.type.childContextTypes) && lf();
                break;
              case 3:
                Pc(), pa(Ma), pa(Da);
                break;
              case 5:
                Ch(r);
                break;
              case 4:
                Pc();
                break;
              case 13:
              case 19:
                pa(ua);
                break;
              case 10:
                xh(r);
            }
            e = e.return;
          }
        (Eb = t),
          (ha = qc(t.current, null)),
          (bb = $),
          (cb = gc),
          (kl = null),
          (Vg = hc = 1073741823),
          (ll = null),
          (Wg = 0),
          (ml = !1);
      }
      function ln(t, $) {
        for (;;) {
          try {
            if ((wh(), (Ve.current = We), Xt))
              for (var e = Ea.memoizedState; null !== e; ) {
                var r = e.queue;
                null !== r && (r.pending = null), (e = e.next);
              }
            if (
              ((Bd = 0),
              (Vb = sb = Ea = null),
              (Xt = !1),
              null === ha || null === ha.return)
            )
              return (cb = Ye), (kl = $), (ha = null);
            t: {
              var i = t,
                a = ha.return,
                n = ha,
                l = $;
              if (
                (($ = bb),
                (n.effectTag |= 2048),
                (n.firstEffect = n.lastEffect = null),
                null !== l &&
                  'object' == typeof l &&
                  'function' == typeof l.then)
              ) {
                var v = l;
                if (0 == (2 & n.mode)) {
                  var o = n.alternate;
                  o
                    ? ((n.updateQueue = o.updateQueue),
                      (n.memoizedState = o.memoizedState),
                      (n.expirationTime = o.expirationTime))
                    : ((n.updateQueue = null), (n.memoizedState = null));
                }
                var u = 0 != (1 & ua.current),
                  c = a;
                do {
                  var f;
                  if ((f = 13 === c.tag)) {
                    var s = c.memoizedState;
                    if (null !== s) f = null !== s.dehydrated;
                    else {
                      var d = c.memoizedProps;
                      f =
                        void 0 !== d.fallback &&
                        (!0 !== d.unstable_avoidThisFallback || !u);
                    }
                  }
                  if (f) {
                    var p = c.updateQueue;
                    if (null === p) {
                      var h = new Set();
                      h.add(v), (c.updateQueue = h);
                    } else p.add(v);
                    if (0 == (2 & c.mode)) {
                      if (
                        ((c.effectTag |= 64),
                        (n.effectTag &= -2981),
                        1 === n.tag)
                      )
                        if (null === n.alternate) n.tag = 17;
                        else {
                          var g = Yb(1073741823, null);
                          (g.tag = 2), Zb(n, g);
                        }
                      n.expirationTime = 1073741823;
                      break t;
                    }
                    (l = void 0), (n = $);
                    var m = i.pingCache;
                    if (
                      (null === m
                        ? ((m = i.pingCache = new eu()),
                          (l = new Set()),
                          m.set(v, l))
                        : void 0 === (l = m.get(v)) &&
                          ((l = new Set()), m.set(v, l)),
                      !l.has(n))
                    ) {
                      l.add(n);
                      var b = lv.bind(null, i, v, n);
                      v.then(b, b);
                    }
                    (c.effectTag |= 4096), (c.expirationTime = $);
                    break t;
                  }
                  c = c.return;
                } while (null !== c);
                l = Error(
                  (Fb(n.type) || 'A React component') +
                    ' suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.' +
                    ah(n)
                );
              }
              cb !== Ug && (cb = jl), (l = Rh(l, n)), (c = a);
              do {
                switch (c.tag) {
                  case 3:
                    (v = l),
                      (c.effectTag |= 4096),
                      (c.expirationTime = $),
                      xm(c, fn(c, v, $));
                    break t;
                  case 1:
                    v = l;
                    var y = c.type,
                      k = c.stateNode;
                    if (
                      0 == (64 & c.effectTag) &&
                      ('function' == typeof y.getDerivedStateFromError ||
                        (null !== k &&
                          'function' == typeof k.componentDidCatch &&
                          (null === Ic || !Ic.has(k))))
                    ) {
                      (c.effectTag |= 4096),
                        (c.expirationTime = $),
                        xm(c, gn(c, v, $));
                      break t;
                    }
                }
                c = c.return;
              } while (null !== c);
            }
            ha = pn(ha);
          } catch (w) {
            $ = w;
            continue;
          }
          break;
        }
      }
      function mn() {
        var t = Xe.current;
        return (Xe.current = We), null === t ? We : t;
      }
      function nn(t, $) {
        t < hc && 2 < t && (hc = t),
          null !== $ && t < Vg && 2 < t && ((Vg = t), (ll = $));
      }
      function Af(t) {
        t > Wg && (Wg = t);
      }
      function gv() {
        for (; null !== ha; ) ha = on(ha);
      }
      function hv() {
        for (; null !== ha && !Tt(); ) ha = on(ha);
      }
      function on(t) {
        var $ = fu(t.alternate, t, bb);
        return (
          (t.memoizedProps = t.pendingProps),
          null === $ && ($ = pn(t)),
          (il.current = null),
          $
        );
      }
      function pn(t) {
        ha = t;
        do {
          var $ = ha.alternate;
          if (((t = ha.return), 0 == (2048 & ha.effectTag))) {
            if (
              (($ = av($, ha, bb)), 1 === bb || 1 !== ha.childExpirationTime)
            ) {
              for (var e = 0, r = ha.child; null !== r; ) {
                var i = r.expirationTime,
                  a = r.childExpirationTime;
                i > e && (e = i), a > e && (e = a), (r = r.sibling);
              }
              ha.childExpirationTime = e;
            }
            if (null !== $) return $;
            null !== t &&
              0 == (2048 & t.effectTag) &&
              (null === t.firstEffect && (t.firstEffect = ha.firstEffect),
              null !== ha.lastEffect &&
                (null !== t.lastEffect &&
                  (t.lastEffect.nextEffect = ha.firstEffect),
                (t.lastEffect = ha.lastEffect)),
              1 < ha.effectTag &&
                (null !== t.lastEffect
                  ? (t.lastEffect.nextEffect = ha)
                  : (t.firstEffect = ha),
                (t.lastEffect = ha)));
          } else {
            if (null !== ($ = bv(ha))) return ($.effectTag &= 2047), $;
            null !== t &&
              ((t.firstEffect = t.lastEffect = null), (t.effectTag |= 2048));
          }
          if (null !== ($ = ha.sibling)) return $;
          ha = t;
        } while (null !== ha);
        return cb === gc && (cb = Ug), null;
      }
      function Xh(t) {
        var $ = t.expirationTime;
        return $ > (t = t.childExpirationTime) ? $ : t;
      }
      function oc(t) {
        var $ = nf();
        return Xb(99, iv.bind(null, t, $)), null;
      }
      function iv(t, $) {
        do {
          Sc();
        } while (null !== Xg);
        if ((sa & (ib | tb)) !== wa) throw Error(Y(327));
        var e = t.finishedWork,
          r = t.finishedExpirationTime;
        if (null === e) return null;
        if (
          ((t.finishedWork = null),
          (t.finishedExpirationTime = 0),
          e === t.current)
        )
          throw Error(Y(177));
        (t.callbackNode = null),
          (t.callbackExpirationTime = 0),
          (t.callbackPriority = 90),
          (t.nextKnownPendingLevel = 0);
        var i = Xh(e);
        if (
          ((t.firstPendingTime = i),
          r <= t.lastSuspendedTime
            ? (t.firstSuspendedTime =
                t.lastSuspendedTime =
                t.nextKnownPendingLevel =
                  0)
            : r <= t.firstSuspendedTime && (t.firstSuspendedTime = r - 1),
          r <= t.lastPingedTime && (t.lastPingedTime = 0),
          r <= t.lastExpiredTime && (t.lastExpiredTime = 0),
          t === Eb && ((ha = Eb = null), (bb = 0)),
          1 < e.effectTag
            ? null !== e.lastEffect
              ? ((e.lastEffect.nextEffect = e), (i = e.firstEffect))
              : (i = e)
            : (i = e.firstEffect),
          null !== i)
        ) {
          var a = sa;
          (sa |= tb), (il.current = null), (it = Hk);
          var n = bm();
          if (rh(n)) {
            if ('selectionStart' in n)
              var l = {start: n.selectionStart, end: n.selectionEnd};
            else
              t: {
                var v =
                  (l = ((l = n.ownerDocument) && l.defaultView) || window)
                    .getSelection && l.getSelection();
                if (v && 0 !== v.rangeCount) {
                  l = v.anchorNode;
                  var o = v.anchorOffset,
                    u = v.focusNode;
                  v = v.focusOffset;
                  try {
                    l.nodeType, u.nodeType;
                  } catch (T) {
                    l = null;
                    break t;
                  }
                  var c = 0,
                    f = -1,
                    s = -1,
                    d = 0,
                    p = 0,
                    h = n,
                    g = null;
                  $: for (;;) {
                    for (
                      var m;
                      h !== l || (0 !== o && 3 !== h.nodeType) || (f = c + o),
                        h !== u || (0 !== v && 3 !== h.nodeType) || (s = c + v),
                        3 === h.nodeType && (c += h.nodeValue.length),
                        null !== (m = h.firstChild);

                    )
                      (g = h), (h = m);
                    for (;;) {
                      if (h === n) break $;
                      if (
                        (g === l && ++d === o && (f = c),
                        g === u && ++p === v && (s = c),
                        null !== (m = h.nextSibling))
                      )
                        break;
                      g = (h = g).parentNode;
                    }
                    h = m;
                  }
                  l = -1 === f || -1 === s ? null : {start: f, end: s};
                } else l = null;
              }
            l = l || {start: 0, end: 0};
          } else l = null;
          (jt = {
            activeElementDetached: null,
            focusedElem: n,
            selectionRange: l,
          }),
            (Hk = !1),
            (ca = i);
          do {
            try {
              jv();
            } catch (T) {
              if (null === ca) throw Error(Y(330));
              pc(ca, T), (ca = ca.nextEffect);
            }
          } while (null !== ca);
          ca = i;
          do {
            try {
              for (n = t, l = $; null !== ca; ) {
                var b = ca.effectTag;
                if ((16 & b && Ed(ca.stateNode, ''), 128 & b)) {
                  var y = ca.alternate;
                  if (null !== y) {
                    var k = y.ref;
                    null !== k &&
                      ('function' == typeof k ? k(null) : (k.current = null));
                  }
                }
                switch (1038 & b) {
                  case 2:
                    cn(ca), (ca.effectTag &= -3);
                    break;
                  case 6:
                    cn(ca), (ca.effectTag &= -3), Vh(ca.alternate, ca);
                    break;
                  case 1024:
                    ca.effectTag &= -1025;
                    break;
                  case 1028:
                    (ca.effectTag &= -1025), Vh(ca.alternate, ca);
                    break;
                  case 4:
                    Vh(ca.alternate, ca);
                    break;
                  case 8:
                    dn(n, (o = ca), l), an(o);
                }
                ca = ca.nextEffect;
              }
            } catch (T) {
              if (null === ca) throw Error(Y(330));
              pc(ca, T), (ca = ca.nextEffect);
            }
          } while (null !== ca);
          if (
            ((k = jt),
            (y = bm()),
            (b = k.focusedElem),
            (l = k.selectionRange),
            y !== b &&
              b &&
              b.ownerDocument &&
              am(b.ownerDocument.documentElement, b))
          ) {
            null !== l &&
              rh(b) &&
              ((y = l.start),
              void 0 === (k = l.end) && (k = y),
              'selectionStart' in b
                ? ((b.selectionStart = y),
                  (b.selectionEnd = Math.min(k, b.value.length)))
                : (k =
                    ((y = b.ownerDocument || document) && y.defaultView) ||
                    window).getSelection &&
                  ((k = k.getSelection()),
                  (o = b.textContent.length),
                  (n = Math.min(l.start, o)),
                  (l = void 0 === l.end ? n : Math.min(l.end, o)),
                  !k.extend && n > l && ((o = l), (l = n), (n = o)),
                  (o = _l(b, n)),
                  (u = _l(b, l)),
                  o &&
                    u &&
                    (1 !== k.rangeCount ||
                      k.anchorNode !== o.node ||
                      k.anchorOffset !== o.offset ||
                      k.focusNode !== u.node ||
                      k.focusOffset !== u.offset) &&
                    ((y = y.createRange()).setStart(o.node, o.offset),
                    k.removeAllRanges(),
                    n > l
                      ? (k.addRange(y), k.extend(u.node, u.offset))
                      : (y.setEnd(u.node, u.offset), k.addRange(y))))),
              (y = []);
            for (k = b; (k = k.parentNode); )
              1 === k.nodeType &&
                y.push({element: k, left: k.scrollLeft, top: k.scrollTop});
            for (
              'function' == typeof b.focus && b.focus(), b = 0;
              b < y.length;
              b++
            )
              ((k = y[b]).element.scrollLeft = k.left),
                (k.element.scrollTop = k.top);
          }
          (Hk = !!it), (jt = it = null), (t.current = e), (ca = i);
          do {
            try {
              for (b = t; null !== ca; ) {
                var w = ca.effectTag;
                if ((36 & w && ev(b, ca.alternate, ca), 128 & w)) {
                  y = void 0;
                  var x = ca.ref;
                  if (null !== x) {
                    var E = ca.stateNode;
                    switch (ca.tag) {
                      case 5:
                        y = E;
                        break;
                      default:
                        y = E;
                    }
                    'function' == typeof x ? x(y) : (x.current = y);
                  }
                }
                ca = ca.nextEffect;
              }
            } catch (T) {
              if (null === ca) throw Error(Y(330));
              pc(ca, T), (ca = ca.nextEffect);
            }
          } while (null !== ca);
          (ca = null), Ut(), (sa = a);
        } else t.current = e;
        if (ql) (ql = !1), (Xg = t), (Yg = $);
        else
          for (ca = i; null !== ca; )
            ($ = ca.nextEffect), (ca.nextEffect = null), (ca = $);
        if (
          (0 === ($ = t.firstPendingTime) && (Ic = null),
          1073741823 === $
            ? t === iu
              ? rl++
              : ((rl = 0), (iu = t))
            : (rl = 0),
          'function' == typeof tl && tl(e.stateNode, r),
          Ta(t),
          pl)
        )
          throw ((pl = !1), (t = hu), (hu = null), t);
        return (sa & Tg) !== wa ? null : (ub(), null);
      }
      function jv() {
        for (; null !== ca; ) {
          var t = ca.effectTag;
          0 != (256 & t) && dv(ca.alternate, ca),
            0 == (512 & t) ||
              ql ||
              ((ql = !0),
              tm(97, function () {
                return Sc(), null;
              })),
            (ca = ca.nextEffect);
        }
      }
      function Sc() {
        if (90 !== Yg) {
          var t = 97 < Yg ? 97 : Yg;
          return (Yg = 90), Xb(t, kv);
        }
      }
      function kv() {
        if (null === Xg) return !1;
        var t = Xg;
        if (((Xg = null), (sa & (ib | tb)) !== wa)) throw Error(Y(331));
        var $ = sa;
        for (sa |= tb, t = t.current.firstEffect; null !== t; ) {
          try {
            var e = t;
            if (0 != (512 & e.effectTag))
              switch (e.tag) {
                case 0:
                case 11:
                case 15:
                case 22:
                  Zm(5, e), $m(5, e);
              }
          } catch (r) {
            if (null === t) throw Error(Y(330));
            pc(t, r);
          }
          (e = t.nextEffect), (t.nextEffect = null), (t = e);
        }
        return (sa = $), ub(), !0;
      }
      function qn(t, $, e) {
        Zb(t, ($ = fn(t, ($ = Rh(e, $)), 1073741823))),
          null !== (t = yf(t, 1073741823)) && Ta(t);
      }
      function pc(t, $) {
        if (3 === t.tag) qn(t, t, $);
        else
          for (var e = t.return; null !== e; ) {
            if (3 === e.tag) {
              qn(e, t, $);
              break;
            }
            if (1 === e.tag) {
              var r = e.stateNode;
              if (
                'function' == typeof e.type.getDerivedStateFromError ||
                ('function' == typeof r.componentDidCatch &&
                  (null === Ic || !Ic.has(r)))
              ) {
                Zb(e, (t = gn(e, (t = Rh($, t)), 1073741823))),
                  null !== (e = yf(e, 1073741823)) && Ta(e);
                break;
              }
            }
            e = e.return;
          }
      }
      function lv(t, $, e) {
        var r = t.pingCache;
        null !== r && r.delete($),
          Eb === t && bb === e
            ? cb === $e || (cb === Ze && 1073741823 === hc && $a() - nl < ol)
              ? nc(t, bb)
              : (ml = !0)
            : rn(t, e) &&
              ((0 !== ($ = t.lastPingedTime) && $ < e) ||
                ((t.lastPingedTime = e), Ta(t)));
      }
      function mv(t, $) {
        var e = t.stateNode;
        null !== e && e.delete($),
          0 === ($ = 0) && ($ = mc(($ = vb()), t, null)),
          null !== (t = yf(t, $)) && Ta(t);
      }
      function nv(t) {
        if ('undefined' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
        var $ = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if ($.isDisabled || !$.supportsFiber) return !0;
        try {
          var e = $.inject(t);
          (tl = function (t) {
            try {
              $.onCommitFiberRoot(
                e,
                t,
                void 0,
                64 == (64 & t.current.effectTag)
              );
            } catch (r) {}
          }),
            (ul = function (t) {
              try {
                $.onCommitFiberUnmount(e, t);
              } catch (r) {}
            });
        } catch (r) {}
        return !0;
      }
      function ov(t, $, e, r) {
        (this.tag = t),
          (this.key = e),
          (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
              null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = $),
          (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
              null),
          (this.mode = r),
          (this.effectTag = 0),
          (this.lastEffect = this.firstEffect = this.nextEffect = null),
          (this.childExpirationTime = this.expirationTime = 0),
          (this.alternate = null);
      }
      function wb(t, $, e, r) {
        return new ov(t, $, e, r);
      }
      function Yh(t) {
        return !(!(t = t.prototype) || !t.isReactComponent);
      }
      function pv(t) {
        if ('function' == typeof t) return Yh(t) ? 1 : 0;
        if (null != t) {
          if ((t = t.$$typeof) === Ag) return 11;
          if (t === Cg) return 14;
        }
        return 2;
      }
      function qc(t, $) {
        var e = t.alternate;
        return (
          null === e
            ? (((e = wb(t.tag, $, t.key, t.mode)).elementType = t.elementType),
              (e.type = t.type),
              (e.stateNode = t.stateNode),
              (e.alternate = t),
              (t.alternate = e))
            : ((e.pendingProps = $),
              (e.effectTag = 0),
              (e.nextEffect = null),
              (e.firstEffect = null),
              (e.lastEffect = null)),
          (e.childExpirationTime = t.childExpirationTime),
          (e.expirationTime = t.expirationTime),
          (e.child = t.child),
          (e.memoizedProps = t.memoizedProps),
          (e.memoizedState = t.memoizedState),
          (e.updateQueue = t.updateQueue),
          ($ = t.dependencies),
          (e.dependencies =
            null === $
              ? null
              : {
                  expirationTime: $.expirationTime,
                  firstContext: $.firstContext,
                  responders: $.responders,
                }),
          (e.sibling = t.sibling),
          (e.index = t.index),
          (e.ref = t.ref),
          e
        );
      }
      function Bf(t, $, e, r, i, a) {
        var n = 2;
        if (((r = t), 'function' == typeof t)) Yh(t) && (n = 1);
        else if ('string' == typeof t) n = 5;
        else
          t: switch (t) {
            case ec:
              return _b(e.children, i, a, $);
            case Zs:
              (n = 8), (i |= 7);
              break;
            case qk:
              (n = 8), (i |= 1);
              break;
            case Je:
              return (
                ((t = wb(12, e, $, 8 | i)).elementType = Je),
                (t.type = Je),
                (t.expirationTime = a),
                t
              );
            case Ke:
              return (
                ((t = wb(13, e, $, i)).type = Ke),
                (t.elementType = Ke),
                (t.expirationTime = a),
                t
              );
            case Bg:
              return (
                ((t = wb(19, e, $, i)).elementType = Bg),
                (t.expirationTime = a),
                t
              );
            default:
              if ('object' == typeof t && null !== t)
                switch (t.$$typeof) {
                  case rk:
                    n = 10;
                    break t;
                  case sk:
                    n = 9;
                    break t;
                  case Ag:
                    n = 11;
                    break t;
                  case Cg:
                    n = 14;
                    break t;
                  case tk:
                    (n = 16), (r = null);
                    break t;
                  case uk:
                    n = 22;
                    break t;
                }
              throw Error(Y(130, null == t ? t : typeof t, ''));
          }
        return (
          (($ = wb(n, e, $, i)).elementType = t),
          ($.type = r),
          ($.expirationTime = a),
          $
        );
      }
      function _b(t, $, e, r) {
        return ((t = wb(7, t, r, $)).expirationTime = e), t;
      }
      function Zh(t, $, e) {
        return ((t = wb(6, t, null, $)).expirationTime = e), t;
      }
      function $h(t, $, e) {
        return (
          (($ = wb(
            4,
            null !== t.children ? t.children : [],
            t.key,
            $
          )).expirationTime = e),
          ($.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation,
          }),
          $
        );
      }
      function qv(t, $, e) {
        (this.tag = $),
          (this.current = null),
          (this.containerInfo = t),
          (this.pingCache = this.pendingChildren = null),
          (this.finishedExpirationTime = 0),
          (this.finishedWork = null),
          (this.timeoutHandle = -1),
          (this.pendingContext = this.context = null),
          (this.hydrate = e),
          (this.callbackNode = null),
          (this.callbackPriority = 90),
          (this.lastExpiredTime =
            this.lastPingedTime =
            this.nextKnownPendingLevel =
            this.lastSuspendedTime =
            this.firstSuspendedTime =
            this.firstPendingTime =
              0);
      }
      function rn(t, $) {
        var e = t.firstSuspendedTime;
        return (t = t.lastSuspendedTime), 0 !== e && e >= $ && t <= $;
      }
      function rc(t, $) {
        var e = t.firstSuspendedTime,
          r = t.lastSuspendedTime;
        e < $ && (t.firstSuspendedTime = $),
          (r > $ || 0 === e) && (t.lastSuspendedTime = $),
          $ <= t.lastPingedTime && (t.lastPingedTime = 0),
          $ <= t.lastExpiredTime && (t.lastExpiredTime = 0);
      }
      function sn(t, $) {
        $ > t.firstPendingTime && (t.firstPendingTime = $);
        var e = t.firstSuspendedTime;
        0 !== e &&
          ($ >= e
            ? (t.firstSuspendedTime =
                t.lastSuspendedTime =
                t.nextKnownPendingLevel =
                  0)
            : $ >= t.lastSuspendedTime && (t.lastSuspendedTime = $ + 1),
          $ > t.nextKnownPendingLevel && (t.nextKnownPendingLevel = $));
      }
      function _h(t, $) {
        var e = t.lastExpiredTime;
        (0 === e || e > $) && (t.lastExpiredTime = $);
      }
      function Cf(t, $, e, r) {
        var i = $.current,
          a = vb(),
          n = xd.suspense;
        a = mc(a, i, n);
        t: if (e) {
          $: {
            if (ic((e = e._reactInternalFiber)) !== e || 1 !== e.tag)
              throw Error(Y(170));
            var l = e;
            do {
              switch (l.tag) {
                case 3:
                  l = l.stateNode.context;
                  break $;
                case 1:
                  if (Na(l.type)) {
                    l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                    break $;
                  }
              }
              l = l.return;
            } while (null !== l);
            throw Error(Y(171));
          }
          if (1 === e.tag) {
            var v = e.type;
            if (Na(v)) {
              e = qm(e, v, l);
              break t;
            }
          }
          e = l;
        } else e = Ub;
        return (
          null === $.context ? ($.context = e) : ($.pendingContext = e),
          (($ = Yb(a, n)).payload = {element: t}),
          null !== (r = void 0 === r ? null : r) && ($.callback = r),
          Zb(i, $),
          $b(i, a),
          a
        );
      }
      function ai(t) {
        if (!(t = t.current).child) return null;
        switch (t.child.tag) {
          case 5:
          default:
            return t.child.stateNode;
        }
      }
      function tn(t, $) {
        null !== (t = t.memoizedState) &&
          null !== t.dehydrated &&
          t.retryTime < $ &&
          (t.retryTime = $);
      }
      function bi(t, $) {
        tn(t, $), (t = t.alternate) && tn(t, $);
      }
      function ci(t, $, e) {
        var r = new qv(t, $, (e = null != e && !0 === e.hydrate)),
          i = wb(3, null, null, 2 === $ ? 7 : 1 === $ ? 3 : 0);
        (r.current = i),
          (i.stateNode = r),
          yh(i),
          (t[rd] = r.current),
          e && 0 !== $ && Iu(t, 9 === t.nodeType ? t : t.ownerDocument),
          (this._internalRoot = r);
      }
      function Nd(t) {
        return !(
          !t ||
          (1 !== t.nodeType &&
            9 !== t.nodeType &&
            11 !== t.nodeType &&
            (8 !== t.nodeType ||
              ' react-mount-point-unstable ' !== t.nodeValue))
        );
      }
      function rv(t, $) {
        if (
          ($ ||
            ($ = !(
              !($ = t
                ? 9 === t.nodeType
                  ? t.documentElement
                  : t.firstChild
                : null) ||
              1 !== $.nodeType ||
              !$.hasAttribute('data-reactroot')
            )),
          !$)
        )
          for (var e; (e = t.lastChild); ) t.removeChild(e);
        return new ci(t, 0, $ ? {hydrate: !0} : void 0);
      }
      function Df(t, $, e, r, i) {
        var a = e._reactRootContainer;
        if (a) {
          var n = a._internalRoot;
          if ('function' == typeof i) {
            var l = i;
            i = function () {
              var t = ai(n);
              l.call(t);
            };
          }
          Cf($, n, t, i);
        } else {
          if (
            ((a = e._reactRootContainer = rv(e, r)),
            (n = a._internalRoot),
            'function' == typeof i)
          ) {
            var v = i;
            i = function () {
              var t = ai(n);
              v.call(t);
            };
          }
          kn(function () {
            Cf($, n, t, i);
          });
        }
        return ai(n);
      }
      function sv(t, $, e) {
        var r =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
          $$typeof: Dc,
          key: null == r ? null : '' + r,
          children: t,
          containerInfo: $,
          implementation: e,
        };
      }
      function un(t, $) {
        var e =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Nd($)) throw Error(Y(200));
        return sv(t, $, null, e);
      }
      function tv() {
        if (vu) return;
        vu = true;
        Za = {};
        Ee = (Ka(), aa);
        Fa = (gg(), Pb);
        Aa = (Ps(), Ns);
        if (!Ee) throw Error(Y(227));
        jk = !1;
        Qs = null;
        kk = !1;
        Rs = null;
        Ss = {
          onError: function (t) {
            (jk = !0), (Qs = t);
          },
        };
        lk = null;
        Ts = null;
        Us = null;
        vg = null;
        Bc = {};
        Fe = [];
        wg = {};
        Cc = {};
        xg = {};
        Sb = !(
          'undefined' == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
        );
        mk = null;
        Ge = null;
        He = null;
        Vs = Cl;
        yg = !1;
        Ws = !1;
        Xs =
          /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
        nk = Object.prototype.hasOwnProperty;
        ok = {};
        pk = {};
        Ba = {};
        'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (t) {
            Ba[t] = new Ga(t, 0, !1, t, null, !1);
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
          ].forEach(function (t) {
            var $ = t[0];
            Ba[$] = new Ga($, 1, !1, t[1], null, !1);
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
            function (t) {
              Ba[t] = new Ga(t, 2, !1, t.toLowerCase(), null, !1);
            }
          ),
          [
            'autoReverse',
            'externalResourcesRequired',
            'focusable',
            'preserveAlpha',
          ].forEach(function (t) {
            Ba[t] = new Ga(t, 2, !1, t, null, !1);
          }),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (t) {
              Ba[t] = new Ga(t, 3, !1, t.toLowerCase(), null, !1);
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
            Ba[t] = new Ga(t, 3, !0, t, null, !1);
          }),
          ['capture', 'download'].forEach(function (t) {
            Ba[t] = new Ga(t, 4, !1, t, null, !1);
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (t) {
            Ba[t] = new Ga(t, 6, !1, t, null, !1);
          }),
          ['rowSpan', 'start'].forEach(function (t) {
            Ba[t] = new Ga(t, 5, !1, t.toLowerCase(), null, !1);
          });
        zg = /[\-:]([a-z])/g;
        'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (t) {
            var $ = t.replace(zg, $g);
            Ba[$] = new Ga($, 1, !1, t, null, !1);
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (t) {
              var $ = t.replace(zg, $g);
              Ba[$] = new Ga($, 1, !1, t, 'http://www.w3.org/1999/xlink', !1);
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
            var $ = t.replace(zg, $g);
            Ba[$] = new Ga(
              $,
              1,
              !1,
              t,
              'http://www.w3.org/XML/1998/namespace',
              !1
            );
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (t) {
            Ba[t] = new Ga(t, 1, !1, t.toLowerCase(), null, !1);
          }),
          (Ba.xlinkHref = new Ga(
            'xlinkHref',
            1,
            !1,
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0
          )),
          ['src', 'href', 'action', 'formAction'].forEach(function (t) {
            Ba[t] = new Ga(t, 1, !1, t.toLowerCase(), null, !0);
          });
        hb = Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        hb.hasOwnProperty('ReactCurrentDispatcher') ||
          (hb.ReactCurrentDispatcher = {current: null}),
          hb.hasOwnProperty('ReactCurrentBatchConfig') ||
            (hb.ReactCurrentBatchConfig = {suspense: null});
        Ys = /^(.*)[\\\/]/;
        La = 'function' == typeof Symbol && Symbol.for;
        Ie = La ? Symbol.for('react.element') : 60103;
        Dc = La ? Symbol.for('react.portal') : 60106;
        ec = La ? Symbol.for('react.fragment') : 60107;
        qk = La ? Symbol.for('react.strict_mode') : 60108;
        Je = La ? Symbol.for('react.profiler') : 60114;
        rk = La ? Symbol.for('react.provider') : 60109;
        sk = La ? Symbol.for('react.context') : 60110;
        Zs = La ? Symbol.for('react.concurrent_mode') : 60111;
        Ag = La ? Symbol.for('react.forward_ref') : 60112;
        Ke = La ? Symbol.for('react.suspense') : 60113;
        Bg = La ? Symbol.for('react.suspense_list') : 60120;
        Cg = La ? Symbol.for('react.memo') : 60115;
        tk = La ? Symbol.for('react.lazy') : 60116;
        uk = La ? Symbol.for('react.block') : 60121;
        vk = 'function' == typeof Symbol && Symbol.iterator;
        wk = {
          html: 'http://www.w3.org/1999/xhtml',
          mathml: 'http://www.w3.org/1998/Math/MathML',
          svg: 'http://www.w3.org/2000/svg',
        };
        yk = (function (t) {
          return 'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function ($, e, r, i) {
                MSApp.execUnsafeLocalFunction(function () {
                  return t($, e);
                });
              }
            : t;
        })(function (t, $) {
          if (t.namespaceURI !== wk.svg || 'innerHTML' in t) t.innerHTML = $;
          else {
            for (
              (xk = xk || document.createElement('div')).innerHTML =
                '<svg>' + $.valueOf().toString() + '</svg>',
                $ = xk.firstChild;
              t.firstChild;

            )
              t.removeChild(t.firstChild);
            for (; $.firstChild; ) t.appendChild($.firstChild);
          }
        });
        Ec = {
          animationend: af('Animation', 'AnimationEnd'),
          animationiteration: af('Animation', 'AnimationIteration'),
          animationstart: af('Animation', 'AnimationStart'),
          transitionend: af('Transition', 'TransitionEnd'),
        };
        Dg = {};
        $s = {};
        Sb &&
          (($s = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete Ec.animationend.animation,
            delete Ec.animationiteration.animation,
            delete Ec.animationstart.animation),
          'TransitionEvent' in window || delete Ec.transitionend.transition);
        zk = bf('animationend');
        Ak = bf('animationiteration');
        Bk = bf('animationstart');
        Ck = bf('transitionend');
        jd =
          'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' '
          );
        Dk = new ('function' == typeof WeakMap ? WeakMap : Map)();
        Eg = null;
        Le = [];
        bt = !1;
        qb = [];
        kd = null;
        ld = null;
        md = null;
        nd = new Map();
        od = new Map();
        pd = [];
        Fg =
          'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit'.split(
            ' '
          );
        ct =
          'focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture'.split(
            ' '
          );
        Fk = {};
        Gk = new Map();
        Gg = new Map();
        dt = [
          'abort',
          'abort',
          zk,
          'animationEnd',
          Ak,
          'animationIteration',
          Bk,
          'animationStart',
          'canplay',
          'canPlay',
          'canplaythrough',
          'canPlayThrough',
          'durationchange',
          'durationChange',
          'emptied',
          'emptied',
          'encrypted',
          'encrypted',
          'ended',
          'ended',
          'error',
          'error',
          'gotpointercapture',
          'gotPointerCapture',
          'load',
          'load',
          'loadeddata',
          'loadedData',
          'loadedmetadata',
          'loadedMetadata',
          'loadstart',
          'loadStart',
          'lostpointercapture',
          'lostPointerCapture',
          'playing',
          'playing',
          'progress',
          'progress',
          'seeking',
          'seeking',
          'stalled',
          'stalled',
          'suspend',
          'suspend',
          'timeupdate',
          'timeUpdate',
          Ck,
          'transitionEnd',
          'waiting',
          'waiting',
        ];
        mh(
          'blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
            ' '
          ),
          0
        ),
          mh(
            'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
              ' '
            ),
            1
          ),
          mh(dt, 2);
        for (
          var $i17t$var$bd =
              'change selectionchange textInput compositionstart compositionend compositionupdate'.split(
                ' '
              ),
            $i17t$var$cd = 0;
          $i17t$var$cd < $i17t$var$bd.length;
          $i17t$var$cd++
        )
          Gg.set($i17t$var$bd[$i17t$var$cd], 0);
        et = Aa.unstable_UserBlockingPriority;
        ft = Aa.unstable_runWithPriority;
        Hk = !0;
        qd = {
          animationIterationCount: !0,
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
        };
        gt = ['Webkit', 'ms', 'Moz', 'O'];
        Object.keys(qd).forEach(function (t) {
          gt.forEach(function ($) {
            ($ = $ + t.charAt(0).toUpperCase() + t.substring(1)),
              (qd[$] = qd[t]);
          });
        });
        ht = Fa(
          {menuitem: !0},
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
        Ik = wk.html;
        Jk = '$';
        Kk = '/$';
        Hg = '$?';
        Ig = '$!';
        it = null;
        jt = null;
        Jg = 'function' == typeof setTimeout ? setTimeout : void 0;
        kt = 'function' == typeof clearTimeout ? clearTimeout : void 0;
        Kg = Math.random().toString(36).slice(2);
        Tb = '__reactInternalInstance$' + Kg;
        Me = '__reactEventHandlers$' + Kg;
        rd = '__reactContainere$' + Kg;
        sd = null;
        lt = null;
        Lk = null;
        Fa(Ra.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var t = this.nativeEvent;
            t &&
              (t.preventDefault
                ? t.preventDefault()
                : 'unknown' != typeof t.returnValue && (t.returnValue = !1),
              (this.isDefaultPrevented = gf));
          },
          stopPropagation: function () {
            var t = this.nativeEvent;
            t &&
              (t.stopPropagation
                ? t.stopPropagation()
                : 'unknown' != typeof t.cancelBubble && (t.cancelBubble = !0),
              (this.isPropagationStopped = gf));
          },
          persist: function () {
            this.isPersistent = gf;
          },
          isPersistent: hf,
          destructor: function () {
            var t,
              $ = this.constructor.Interface;
            for (t in $) this[t] = null;
            (this.nativeEvent = this._targetInst = this.dispatchConfig = null),
              (this.isPropagationStopped = this.isDefaultPrevented = hf),
              (this._dispatchInstances = this._dispatchListeners = null);
          },
        }),
          (Ra.Interface = {
            type: null,
            target: null,
            currentTarget: function () {
              return null;
            },
            eventPhase: null,
            bubbles: null,
            cancelable: null,
            timeStamp: function (t) {
              return t.timeStamp || Date.now();
            },
            defaultPrevented: null,
            isTrusted: null,
          }),
          (Ra.extend = function (t) {
            function $() {}
            function e() {
              return r.apply(this, arguments);
            }
            var r = this;
            $.prototype = r.prototype;
            var i = new $();
            return (
              Fa(i, e.prototype),
              (e.prototype = i),
              (e.prototype.constructor = e),
              (e.Interface = Fa({}, r.Interface, t)),
              (e.extend = r.extend),
              hm(e),
              e
            );
          }),
          hm(Ra);
        mt = Ra.extend({data: null});
        nt = Ra.extend({data: null});
        ot = [9, 13, 27, 32];
        Lg = Sb && 'CompositionEvent' in window;
        Ne = null;
        Sb && 'documentMode' in document && (Ne = document.documentMode);
        pt = Sb && 'TextEvent' in window && !Ne;
        Mk = Sb && (!Lg || (Ne && 8 < Ne && 11 >= Ne));
        Nk = String.fromCharCode(32);
        Db = {
          beforeInput: {
            phasedRegistrationNames: {
              bubbled: 'onBeforeInput',
              captured: 'onBeforeInputCapture',
            },
            dependencies: ['compositionend', 'keypress', 'textInput', 'paste'],
          },
          compositionEnd: {
            phasedRegistrationNames: {
              bubbled: 'onCompositionEnd',
              captured: 'onCompositionEndCapture',
            },
            dependencies:
              'blur compositionend keydown keypress keyup mousedown'.split(' '),
          },
          compositionStart: {
            phasedRegistrationNames: {
              bubbled: 'onCompositionStart',
              captured: 'onCompositionStartCapture',
            },
            dependencies:
              'blur compositionstart keydown keypress keyup mousedown'.split(
                ' '
              ),
          },
          compositionUpdate: {
            phasedRegistrationNames: {
              bubbled: 'onCompositionUpdate',
              captured: 'onCompositionUpdateCapture',
            },
            dependencies:
              'blur compositionupdate keydown keypress keyup mousedown'.split(
                ' '
              ),
          },
        };
        qt = !1;
        Oe = !1;
        rt = {
          eventTypes: Db,
          extractEvents: function (t, $, e, r) {
            var i;
            if (Lg)
              t: {
                switch (t) {
                  case 'compositionstart':
                    var a = Db.compositionStart;
                    break t;
                  case 'compositionend':
                    a = Db.compositionEnd;
                    break t;
                  case 'compositionupdate':
                    a = Db.compositionUpdate;
                    break t;
                }
                a = void 0;
              }
            else
              Oe
                ? im(t, e) && (a = Db.compositionEnd)
                : 'keydown' === t &&
                  229 === e.keyCode &&
                  (a = Db.compositionStart);
            return (
              a
                ? (Mk &&
                    'ko' !== e.locale &&
                    (Oe || a !== Db.compositionStart
                      ? a === Db.compositionEnd && Oe && (i = gm())
                      : ((lt = 'value' in (sd = r) ? sd.value : sd.textContent),
                        (Oe = !0))),
                  (a = mt.getPooled(a, $, e, r)),
                  i ? (a.data = i) : null !== (i = jm(e)) && (a.data = i),
                  Mc(a),
                  (i = a))
                : (i = null),
              (t = pt ? Su(t, e) : Tu(t, e))
                ? ((($ = nt.getPooled(Db.beforeInput, $, e, r)).data = t),
                  Mc($))
                : ($ = null),
              null === i ? $ : null === $ ? i : [i, $]
            );
          },
        };
        st = {
          color: !0,
          date: !0,
          datetime: !0,
          'datetime-local': !0,
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
        Ok = {
          change: {
            phasedRegistrationNames: {
              bubbled: 'onChange',
              captured: 'onChangeCapture',
            },
            dependencies:
              'blur change click focus input keydown keyup selectionchange'.split(
                ' '
              ),
          },
        };
        Pk = null;
        Mg = null;
        Qk = !1;
        Sb &&
          (Qk =
            Rl('input') &&
            (!document.documentMode || 9 < document.documentMode));
        tt = {
          eventTypes: Ok,
          _isInputEventSupported: Qk,
          extractEvents: function (t, $, e, r) {
            var i = $ ? jc($) : window,
              a = i.nodeName && i.nodeName.toLowerCase();
            if ('select' === a || ('input' === a && 'file' === i.type))
              var n = Vu;
            else if (km(i)) {
              if (Qk) n = Zu;
              else {
                n = Xu;
                var l = Wu;
              }
            } else
              (a = i.nodeName) &&
                'input' === a.toLowerCase() &&
                ('checkbox' === i.type || 'radio' === i.type) &&
                (n = Yu);
            if (n && (n = n(t, $))) return lm(n, e, r);
            l && l(t, i, $),
              'blur' === t &&
                (t = i._wrapperState) &&
                t.controlled &&
                'number' === i.type &&
                dh(i, 'number', i.value);
          },
        };
        td = Ra.extend({view: null, detail: null});
        ut = {
          Alt: 'altKey',
          Control: 'ctrlKey',
          Meta: 'metaKey',
          Shift: 'shiftKey',
        };
        vt = 0;
        wt = 0;
        xt = !1;
        yt = !1;
        ud = td.extend({
          screenX: null,
          screenY: null,
          clientX: null,
          clientY: null,
          pageX: null,
          pageY: null,
          ctrlKey: null,
          shiftKey: null,
          altKey: null,
          metaKey: null,
          getModifierState: vh,
          button: null,
          buttons: null,
          relatedTarget: function (t) {
            return (
              t.relatedTarget ||
              (t.fromElement === t.srcElement ? t.toElement : t.fromElement)
            );
          },
          movementX: function (t) {
            if ('movementX' in t) return t.movementX;
            var $ = vt;
            return (
              (vt = t.screenX),
              xt ? ('mousemove' === t.type ? t.screenX - $ : 0) : ((xt = !0), 0)
            );
          },
          movementY: function (t) {
            if ('movementY' in t) return t.movementY;
            var $ = wt;
            return (
              (wt = t.screenY),
              yt ? ('mousemove' === t.type ? t.screenY - $ : 0) : ((yt = !0), 0)
            );
          },
        });
        Rk = ud.extend({
          pointerId: null,
          width: null,
          height: null,
          pressure: null,
          tangentialPressure: null,
          tiltX: null,
          tiltY: null,
          twist: null,
          pointerType: null,
          isPrimary: null,
        });
        vd = {
          mouseEnter: {
            registrationName: 'onMouseEnter',
            dependencies: ['mouseout', 'mouseover'],
          },
          mouseLeave: {
            registrationName: 'onMouseLeave',
            dependencies: ['mouseout', 'mouseover'],
          },
          pointerEnter: {
            registrationName: 'onPointerEnter',
            dependencies: ['pointerout', 'pointerover'],
          },
          pointerLeave: {
            registrationName: 'onPointerLeave',
            dependencies: ['pointerout', 'pointerover'],
          },
        };
        zt = {
          eventTypes: vd,
          extractEvents: function (t, $, e, r, i) {
            var a = 'mouseover' === t || 'pointerover' === t,
              n = 'mouseout' === t || 'pointerout' === t;
            if (
              (a && 0 == (32 & i) && (e.relatedTarget || e.fromElement)) ||
              (!n && !a)
            )
              return null;
            ((a =
              r.window === r
                ? r
                : (a = r.ownerDocument)
                ? a.defaultView || a.parentWindow
                : window),
            n)
              ? ((n = $),
                null !==
                  ($ = ($ = e.relatedTarget || e.toElement) ? Id($) : null) &&
                  ($ !== ic($) || (5 !== $.tag && 6 !== $.tag)) &&
                  ($ = null))
              : (n = null);
            if (n === $) return null;
            if ('mouseout' === t || 'mouseover' === t)
              var l = ud,
                v = vd.mouseLeave,
                o = vd.mouseEnter,
                u = 'mouse';
            else
              ('pointerout' !== t && 'pointerover' !== t) ||
                ((l = Rk),
                (v = vd.pointerLeave),
                (o = vd.pointerEnter),
                (u = 'pointer'));
            if (
              ((t = null == n ? a : jc(n)),
              (a = null == $ ? a : jc($)),
              ((v = l.getPooled(v, n, e, r)).type = u + 'leave'),
              (v.target = t),
              (v.relatedTarget = a),
              ((e = l.getPooled(o, $, e, r)).type = u + 'enter'),
              (e.target = a),
              (e.relatedTarget = t),
              (u = $),
              (r = n) && u)
            )
              t: {
                for (o = u, n = 0, t = l = r; t; t = Hb(t)) n++;
                for (t = 0, $ = o; $; $ = Hb($)) t++;
                for (; 0 < n - t; ) (l = Hb(l)), n--;
                for (; 0 < t - n; ) (o = Hb(o)), t--;
                for (; n--; ) {
                  if (l === o || l === o.alternate) break t;
                  (l = Hb(l)), (o = Hb(o));
                }
                l = null;
              }
            else l = null;
            for (
              o = l, l = [];
              r && r !== o && (null === (n = r.alternate) || n !== o);

            )
              l.push(r), (r = Hb(r));
            for (
              r = [];
              u && u !== o && (null === (n = u.alternate) || n !== o);

            )
              r.push(u), (u = Hb(u));
            for (u = 0; u < l.length; u++) uh(l[u], 'bubbled', v);
            for (u = r.length; 0 < u--; ) uh(r[u], 'captured', e);
            return 0 == (64 & i) ? [v] : [v, e];
          },
        };
        fc = 'function' == typeof Object.is ? Object.is : _u;
        At = Object.prototype.hasOwnProperty;
        Bt = Sb && 'documentMode' in document && 11 >= document.documentMode;
        Sk = {
          select: {
            phasedRegistrationNames: {
              bubbled: 'onSelect',
              captured: 'onSelectCapture',
            },
            dependencies:
              'blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange'.split(
                ' '
              ),
          },
        };
        Pe = null;
        Ct = null;
        Tk = null;
        Dt = !1;
        Et = {
          eventTypes: Sk,
          extractEvents: function (t, $, e, r, i, a) {
            if (
              !(a = !(i =
                a ||
                (r.window === r
                  ? r.document
                  : 9 === r.nodeType
                  ? r
                  : r.ownerDocument)))
            ) {
              t: {
                (i = hh(i)), (a = xg.onSelect);
                for (var n = 0; n < a.length; n++)
                  if (!i.has(a[n])) {
                    i = !1;
                    break t;
                  }
                i = !0;
              }
              a = !i;
            }
            if (a) return null;
            switch (((i = $ ? jc($) : window), t)) {
              case 'focus':
                (km(i) || 'true' === i.contentEditable) &&
                  ((Pe = i), (Ct = $), (Tk = null));
                break;
              case 'blur':
                Tk = Ct = Pe = null;
                break;
              case 'mousedown':
                Dt = !0;
                break;
              case 'contextmenu':
              case 'mouseup':
              case 'dragend':
                return (Dt = !1), om(e, r);
              case 'selectionchange':
                if (Bt) break;
              case 'keydown':
              case 'keyup':
                return om(e, r);
            }
            return null;
          },
        };
        Ft = Ra.extend({
          animationName: null,
          elapsedTime: null,
          pseudoElement: null,
        });
        Gt = Ra.extend({
          clipboardData: function (t) {
            return 'clipboardData' in t
              ? t.clipboardData
              : window.clipboardData;
          },
        });
        Ht = td.extend({relatedTarget: null});
        It = {
          Esc: 'Escape',
          Spacebar: ' ',
          Left: 'ArrowLeft',
          Up: 'ArrowUp',
          Right: 'ArrowRight',
          Down: 'ArrowDown',
          Del: 'Delete',
          Win: 'OS',
          Menu: 'ContextMenu',
          Apps: 'ContextMenu',
          Scroll: 'ScrollLock',
          MozPrintableKey: 'Unidentified',
        };
        Jt = {
          8: 'Backspace',
          9: 'Tab',
          12: 'Clear',
          13: 'Enter',
          16: 'Shift',
          17: 'Control',
          18: 'Alt',
          19: 'Pause',
          20: 'CapsLock',
          27: 'Escape',
          32: ' ',
          33: 'PageUp',
          34: 'PageDown',
          35: 'End',
          36: 'Home',
          37: 'ArrowLeft',
          38: 'ArrowUp',
          39: 'ArrowRight',
          40: 'ArrowDown',
          45: 'Insert',
          46: 'Delete',
          112: 'F1',
          113: 'F2',
          114: 'F3',
          115: 'F4',
          116: 'F5',
          117: 'F6',
          118: 'F7',
          119: 'F8',
          120: 'F9',
          121: 'F10',
          122: 'F11',
          123: 'F12',
          144: 'NumLock',
          145: 'ScrollLock',
          224: 'Meta',
        };
        Kt = td.extend({
          key: function (t) {
            if (t.key) {
              var $ = It[t.key] || t.key;
              if ('Unidentified' !== $) return $;
            }
            return 'keypress' === t.type
              ? 13 === (t = kf(t))
                ? 'Enter'
                : String.fromCharCode(t)
              : 'keydown' === t.type || 'keyup' === t.type
              ? Jt[t.keyCode] || 'Unidentified'
              : '';
          },
          location: null,
          ctrlKey: null,
          shiftKey: null,
          altKey: null,
          metaKey: null,
          repeat: null,
          locale: null,
          getModifierState: vh,
          charCode: function (t) {
            return 'keypress' === t.type ? kf(t) : 0;
          },
          keyCode: function (t) {
            return 'keydown' === t.type || 'keyup' === t.type ? t.keyCode : 0;
          },
          which: function (t) {
            return 'keypress' === t.type
              ? kf(t)
              : 'keydown' === t.type || 'keyup' === t.type
              ? t.keyCode
              : 0;
          },
        });
        Lt = ud.extend({dataTransfer: null});
        Mt = td.extend({
          touches: null,
          targetTouches: null,
          changedTouches: null,
          altKey: null,
          metaKey: null,
          ctrlKey: null,
          shiftKey: null,
          getModifierState: vh,
        });
        Nt = Ra.extend({
          propertyName: null,
          elapsedTime: null,
          pseudoElement: null,
        });
        Ot = ud.extend({
          deltaX: function (t) {
            return 'deltaX' in t
              ? t.deltaX
              : 'wheelDeltaX' in t
              ? -t.wheelDeltaX
              : 0;
          },
          deltaY: function (t) {
            return 'deltaY' in t
              ? t.deltaY
              : 'wheelDeltaY' in t
              ? -t.wheelDeltaY
              : 'wheelDelta' in t
              ? -t.wheelDelta
              : 0;
          },
          deltaZ: null,
          deltaMode: null,
        });
        Pt = {
          eventTypes: Fk,
          extractEvents: function (t, $, e, r) {
            var i = Gk.get(t);
            if (!i) return null;
            switch (t) {
              case 'keypress':
                if (0 === kf(e)) return null;
              case 'keydown':
              case 'keyup':
                t = Kt;
                break;
              case 'blur':
              case 'focus':
                t = Ht;
                break;
              case 'click':
                if (2 === e.button) return null;
              case 'auxclick':
              case 'dblclick':
              case 'mousedown':
              case 'mousemove':
              case 'mouseup':
              case 'mouseout':
              case 'mouseover':
              case 'contextmenu':
                t = ud;
                break;
              case 'drag':
              case 'dragend':
              case 'dragenter':
              case 'dragexit':
              case 'dragleave':
              case 'dragover':
              case 'dragstart':
              case 'drop':
                t = Lt;
                break;
              case 'touchcancel':
              case 'touchend':
              case 'touchmove':
              case 'touchstart':
                t = Mt;
                break;
              case zk:
              case Ak:
              case Bk:
                t = Ft;
                break;
              case Ck:
                t = Nt;
                break;
              case 'scroll':
                t = td;
                break;
              case 'wheel':
                t = Ot;
                break;
              case 'copy':
              case 'cut':
              case 'paste':
                t = Gt;
                break;
              case 'gotpointercapture':
              case 'lostpointercapture':
              case 'pointercancel':
              case 'pointerdown':
              case 'pointermove':
              case 'pointerout':
              case 'pointerover':
              case 'pointerup':
                t = Rk;
                break;
              default:
                t = Ra;
            }
            return Mc(($ = t.getPooled(i, $, e, r))), $;
          },
        };
        if (vg) throw Error(Y(101));
        (vg = Array.prototype.slice.call(
          'ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin'.split(
            ' '
          )
        )),
          wl();
        Qt = Jd;
        (lk = th),
          (Ts = Qt),
          (Us = jc),
          yl({
            SimpleEventPlugin: Pt,
            EnterLeaveEventPlugin: zt,
            ChangeEventPlugin: tt,
            SelectEventPlugin: Et,
            BeforeInputEventPlugin: rt,
          });
        Ng = [];
        wd = -1;
        Ub = {};
        Da = {current: Ub};
        Ma = {current: !1};
        Fc = Ub;
        Rt = Aa.unstable_runWithPriority;
        Og = Aa.unstable_scheduleCallback;
        Uk = Aa.unstable_cancelCallback;
        Vk = Aa.unstable_requestPaint;
        Pg = Aa.unstable_now;
        St = Aa.unstable_getCurrentPriorityLevel;
        Qe = Aa.unstable_ImmediatePriority;
        Wk = Aa.unstable_UserBlockingPriority;
        Xk = Aa.unstable_NormalPriority;
        Yk = Aa.unstable_LowPriority;
        Zk = Aa.unstable_IdlePriority;
        $k = {};
        Tt = Aa.unstable_shouldYield;
        Ut = void 0 !== Vk ? Vk : function () {};
        Gc = null;
        _k = null;
        Vt = !1;
        al = Pg();
        $a =
          1e4 > al
            ? Pg
            : function () {
                return Pg() - al;
              };
        Re = {current: null};
        bl = null;
        cl = null;
        Wt = null;
        Se = !1;
        xd = hb.ReactCurrentBatchConfig;
        dl = new Ee.Component().refs;
        Te = {
          isMounted: function (t) {
            return !!(t = t._reactInternalFiber) && ic(t) === t;
          },
          enqueueSetState: function (t, $, e) {
            t = t._reactInternalFiber;
            var r = vb(),
              i = xd.suspense;
            ((i = Yb((r = mc(r, t, i)), i)).payload = $),
              null != e && (i.callback = e),
              Zb(t, i),
              $b(t, r);
          },
          enqueueReplaceState: function (t, $, e) {
            t = t._reactInternalFiber;
            var r = vb(),
              i = xd.suspense;
            ((i = Yb((r = mc(r, t, i)), i)).tag = 1),
              (i.payload = $),
              null != e && (i.callback = e),
              Zb(t, i),
              $b(t, r);
          },
          enqueueForceUpdate: function (t, $) {
            t = t._reactInternalFiber;
            var e = vb(),
              r = xd.suspense;
            ((r = Yb((e = mc(e, t, r)), r)).tag = 2),
              null != $ && (r.callback = $),
              Zb(t, r),
              $b(t, e);
          },
        };
        Ue = Array.isArray;
        Hc = Cm(!0);
        Qg = Cm(!1);
        yd = {};
        rb = {current: yd};
        zd = {current: yd};
        Ad = {current: yd};
        ua = {current: 0};
        Ve = hb.ReactCurrentDispatcher;
        ab = hb.ReactCurrentBatchConfig;
        Bd = 0;
        Ea = null;
        sb = null;
        Vb = null;
        Xt = !1;
        We = {
          readContext: db,
          useCallback: Sa,
          useContext: Sa,
          useEffect: Sa,
          useImperativeHandle: Sa,
          useLayoutEffect: Sa,
          useMemo: Sa,
          useReducer: Sa,
          useRef: Sa,
          useState: Sa,
          useDebugValue: Sa,
          useResponder: Sa,
          useDeferredValue: Sa,
          useTransition: Sa,
        };
        Yt = {
          readContext: db,
          useCallback: Jm,
          useContext: db,
          useEffect: Fm,
          useImperativeHandle: function (t, $, e) {
            return (
              (e = null != e ? e.concat([t]) : null),
              Ih(4, 2, Hm.bind(null, $, t), e)
            );
          },
          useLayoutEffect: function (t, $) {
            return Ih(4, 2, t, $);
          },
          useMemo: function (t, $) {
            var e = Qc();
            return (
              ($ = void 0 === $ ? null : $),
              (t = t()),
              (e.memoizedState = [t, $]),
              t
            );
          },
          useReducer: function (t, $, e) {
            var r = Qc();
            return (
              ($ = void 0 !== e ? e($) : $),
              (r.memoizedState = r.baseState = $),
              (t = (t = r.queue =
                {
                  pending: null,
                  dispatch: null,
                  lastRenderedReducer: t,
                  lastRenderedState: $,
                }).dispatch =
                Lm.bind(null, Ea, t)),
              [r.memoizedState, t]
            );
          },
          useRef: function (t) {
            return (t = {current: t}), (Qc().memoizedState = t);
          },
          useState: Gh,
          useDebugValue: Kh,
          useResponder: Dh,
          useDeferredValue: function (t, $) {
            var e = Gh(t),
              r = e[0],
              i = e[1];
            return (
              Fm(
                function () {
                  var e = ab.suspense;
                  ab.suspense = void 0 === $ ? null : $;
                  try {
                    i(t);
                  } finally {
                    ab.suspense = e;
                  }
                },
                [t, $]
              ),
              r
            );
          },
          useTransition: function (t) {
            var $ = Gh(!1),
              e = $[0];
            return ($ = $[1]), [Jm(Lh.bind(null, $, t), [$, t]), e];
          },
        };
        Zt = {
          readContext: db,
          useCallback: vf,
          useContext: db,
          useEffect: uf,
          useImperativeHandle: Im,
          useLayoutEffect: Gm,
          useMemo: Km,
          useReducer: sf,
          useRef: Em,
          useState: function () {
            return sf(lc);
          },
          useDebugValue: Kh,
          useResponder: Dh,
          useDeferredValue: function (t, $) {
            var e = sf(lc),
              r = e[0],
              i = e[1];
            return (
              uf(
                function () {
                  var e = ab.suspense;
                  ab.suspense = void 0 === $ ? null : $;
                  try {
                    i(t);
                  } finally {
                    ab.suspense = e;
                  }
                },
                [t, $]
              ),
              r
            );
          },
          useTransition: function (t) {
            var $ = sf(lc),
              e = $[0];
            return ($ = $[1]), [vf(Lh.bind(null, $, t), [$, t]), e];
          },
        };
        $t = {
          readContext: db,
          useCallback: vf,
          useContext: db,
          useEffect: uf,
          useImperativeHandle: Im,
          useLayoutEffect: Gm,
          useMemo: Km,
          useReducer: tf,
          useRef: Em,
          useState: function () {
            return tf(lc);
          },
          useDebugValue: Kh,
          useResponder: Dh,
          useDeferredValue: function (t, $) {
            var e = tf(lc),
              r = e[0],
              i = e[1];
            return (
              uf(
                function () {
                  var e = ab.suspense;
                  ab.suspense = void 0 === $ ? null : $;
                  try {
                    i(t);
                  } finally {
                    ab.suspense = e;
                  }
                },
                [t, $]
              ),
              r
            );
          },
          useTransition: function (t) {
            var $ = tf(lc),
              e = $[0];
            return ($ = $[1]), [vf(Lh.bind(null, $, t), [$, t]), e];
          },
        };
        Rg = null;
        el = null;
        fl = !1;
        _t = hb.ReactCurrentOwner;
        gl = !1;
        Sg = {dehydrated: null, retryTime: 0};
        (au = function (t, $) {
          for (var e = $.child; null !== e; ) {
            if (5 === e.tag || 6 === e.tag) t.appendChild(e.stateNode);
            else if (4 !== e.tag && null !== e.child) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === $) break;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === $) return;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        }),
          (hl = function () {}),
          (bu = function (t, $, e, r, i) {
            var a = t.memoizedProps;
            if (a !== r) {
              var n,
                l,
                v = $.stateNode;
              switch ((kc(rb.current), (t = null), e)) {
                case 'input':
                  (a = bh(v, a)), (r = bh(v, r)), (t = []);
                  break;
                case 'option':
                  (a = eh(v, a)), (r = eh(v, r)), (t = []);
                  break;
                case 'select':
                  (a = Fa({}, a, {value: void 0})),
                    (r = Fa({}, r, {value: void 0})),
                    (t = []);
                  break;
                case 'textarea':
                  (a = fh(v, a)), (r = fh(v, r)), (t = []);
                  break;
                default:
                  'function' != typeof a.onClick &&
                    'function' == typeof r.onClick &&
                    (v.onclick = ff);
              }
              for (n in (oh(e, r), (e = null), a))
                if (!r.hasOwnProperty(n) && a.hasOwnProperty(n) && null != a[n])
                  if ('style' === n)
                    for (l in (v = a[n]))
                      v.hasOwnProperty(l) && (e || (e = {}), (e[l] = ''));
                  else
                    'dangerouslySetInnerHTML' !== n &&
                      'children' !== n &&
                      'suppressContentEditableWarning' !== n &&
                      'suppressHydrationWarning' !== n &&
                      'autoFocus' !== n &&
                      (Cc.hasOwnProperty(n)
                        ? t || (t = [])
                        : (t = t || []).push(n, null));
              for (n in r) {
                var o = r[n];
                if (
                  ((v = null != a ? a[n] : void 0),
                  r.hasOwnProperty(n) && o !== v && (null != o || null != v))
                )
                  if ('style' === n) {
                    if (v) {
                      for (l in v)
                        !v.hasOwnProperty(l) ||
                          (o && o.hasOwnProperty(l)) ||
                          (e || (e = {}), (e[l] = ''));
                      for (l in o)
                        o.hasOwnProperty(l) &&
                          v[l] !== o[l] &&
                          (e || (e = {}), (e[l] = o[l]));
                    } else e || (t || (t = []), t.push(n, e)), (e = o);
                  } else
                    'dangerouslySetInnerHTML' === n
                      ? ((o = o ? o.__html : void 0),
                        (v = v ? v.__html : void 0),
                        null != o && v !== o && (t = t || []).push(n, o))
                      : 'children' === n
                      ? v === o ||
                        ('string' != typeof o && 'number' != typeof o) ||
                        (t = t || []).push(n, '' + o)
                      : 'suppressContentEditableWarning' !== n &&
                        'suppressHydrationWarning' !== n &&
                        (Cc.hasOwnProperty(n)
                          ? (null != o && Gb(i, n), t || v === o || (t = []))
                          : (t = t || []).push(n, o));
              }
              e && (t = t || []).push('style', e),
                (i = t),
                ($.updateQueue = i) && ($.effectTag |= 4);
            }
          }),
          (cu = function (t, $, e, r) {
            e !== r && ($.effectTag |= 4);
          });
        du = 'function' == typeof WeakSet ? WeakSet : Set;
        eu = 'function' == typeof WeakMap ? WeakMap : Map;
        gu = Math.ceil;
        Xe = hb.ReactCurrentDispatcher;
        il = hb.ReactCurrentOwner;
        wa = 0;
        Tg = 8;
        ib = 16;
        tb = 32;
        gc = 0;
        Ye = 1;
        jl = 2;
        Ze = 3;
        $e = 4;
        Ug = 5;
        sa = wa;
        Eb = null;
        ha = null;
        bb = 0;
        cb = gc;
        kl = null;
        hc = 1073741823;
        Vg = 1073741823;
        ll = null;
        Wg = 0;
        ml = !1;
        nl = 0;
        ol = 500;
        ca = null;
        pl = !1;
        hu = null;
        Ic = null;
        ql = !1;
        Xg = null;
        Yg = 90;
        Cd = null;
        rl = 0;
        iu = null;
        sl = 0;
        fu = function (t, $, e) {
          var r = $.expirationTime;
          if (null !== t) {
            var i = $.pendingProps;
            if (t.memoizedProps !== i || Ma.current) gl = !0;
            else {
              if (r < e) {
                switch (((gl = !1), $.tag)) {
                  case 3:
                    Um($), Nh();
                    break;
                  case 5:
                    if ((Dm($), 4 & $.mode && 1 !== e && i.hidden))
                      return (
                        ($.expirationTime = $.childExpirationTime = 1), null
                      );
                    break;
                  case 1:
                    Na($.type) && mf($);
                    break;
                  case 4:
                    Bh($, $.stateNode.containerInfo);
                    break;
                  case 10:
                    (r = $.memoizedProps.value),
                      (i = $.type._context),
                      va(Re, i._currentValue),
                      (i._currentValue = r);
                    break;
                  case 13:
                    if (null !== $.memoizedState)
                      return 0 !== (r = $.child.childExpirationTime) && r >= e
                        ? Vm(t, $, e)
                        : (va(ua, 1 & ua.current),
                          null !== ($ = Ib(t, $, e)) ? $.sibling : null);
                    va(ua, 1 & ua.current);
                    break;
                  case 19:
                    if (
                      ((r = $.childExpirationTime >= e),
                      0 != (64 & t.effectTag))
                    ) {
                      if (r) return Xm(t, $, e);
                      $.effectTag |= 64;
                    }
                    if (
                      (null !== (i = $.memoizedState) &&
                        ((i.rendering = null), (i.tail = null)),
                      va(ua, ua.current),
                      !r)
                    )
                      return null;
                }
                return Ib(t, $, e);
              }
              gl = !1;
            }
          } else gl = !1;
          switch ((($.expirationTime = 0), $.tag)) {
            case 2:
              if (
                ((r = $.type),
                null !== t &&
                  ((t.alternate = null),
                  ($.alternate = null),
                  ($.effectTag |= 2)),
                (t = $.pendingProps),
                (i = Nc($, Da.current)),
                Oc($, e),
                (i = Fh(null, $, r, t, i, e)),
                ($.effectTag |= 1),
                'object' == typeof i &&
                  null !== i &&
                  'function' == typeof i.render &&
                  void 0 === i.$$typeof)
              ) {
                if (
                  (($.tag = 1),
                  ($.memoizedState = null),
                  ($.updateQueue = null),
                  Na(r))
                ) {
                  var a = !0;
                  mf($);
                } else a = !1;
                ($.memoizedState =
                  null !== i.state && void 0 !== i.state ? i.state : null),
                  yh($);
                var n = r.getDerivedStateFromProps;
                'function' == typeof n && pf($, r, n, t),
                  (i.updater = Te),
                  ($.stateNode = i),
                  (i._reactInternalFiber = $),
                  Ah($, r, t, e),
                  ($ = Ph(null, $, r, !0, a, e));
              } else ($.tag = 0), eb(null, $, i, e), ($ = $.child);
              return $;
            case 16:
              t: {
                if (
                  ((i = $.elementType),
                  null !== t &&
                    ((t.alternate = null),
                    ($.alternate = null),
                    ($.effectTag |= 2)),
                  (t = $.pendingProps),
                  Du(i),
                  1 !== i._status)
                )
                  throw i._result;
                switch (
                  ((i = i._result),
                  ($.type = i),
                  (a = $.tag = pv(i)),
                  (t = jb(i, t)),
                  a)
                ) {
                  case 0:
                    $ = Oh(null, $, i, t, e);
                    break t;
                  case 1:
                    $ = Tm(null, $, i, t, e);
                    break t;
                  case 11:
                    $ = Pm(null, $, i, t, e);
                    break t;
                  case 14:
                    $ = Qm(null, $, i, jb(i.type, t), r, e);
                    break t;
                }
                throw Error(Y(306, i, ''));
              }
              return $;
            case 0:
              return (
                (r = $.type),
                (i = $.pendingProps),
                Oh(t, $, r, (i = $.elementType === r ? i : jb(r, i)), e)
              );
            case 1:
              return (
                (r = $.type),
                (i = $.pendingProps),
                Tm(t, $, r, (i = $.elementType === r ? i : jb(r, i)), e)
              );
            case 3:
              if ((Um($), (r = $.updateQueue), null === t || null === r))
                throw Error(Y(282));
              if (
                ((r = $.pendingProps),
                (i = null !== (i = $.memoizedState) ? i.element : null),
                zh(t, $),
                Ld($, r, null, e),
                (r = $.memoizedState.element) === i)
              )
                Nh(), ($ = Ib(t, $, e));
              else {
                if (
                  ((i = $.stateNode.hydrate) &&
                    ((el = Lc($.stateNode.containerInfo.firstChild)),
                    (Rg = $),
                    (i = fl = !0)),
                  i)
                )
                  for (e = Qg($, null, r, e), $.child = e; e; )
                    (e.effectTag = (-3 & e.effectTag) | 1024), (e = e.sibling);
                else eb(t, $, r, e), Nh();
                $ = $.child;
              }
              return $;
            case 5:
              return (
                Dm($),
                null === t && Mh($),
                (r = $.type),
                (i = $.pendingProps),
                (a = null !== t ? t.memoizedProps : null),
                (n = i.children),
                sh(r, i)
                  ? (n = null)
                  : null !== a && sh(r, a) && ($.effectTag |= 16),
                Sm(t, $),
                4 & $.mode && 1 !== e && i.hidden
                  ? (($.expirationTime = $.childExpirationTime = 1), ($ = null))
                  : (eb(t, $, n, e), ($ = $.child)),
                $
              );
            case 6:
              return null === t && Mh($), null;
            case 13:
              return Vm(t, $, e);
            case 4:
              return (
                Bh($, $.stateNode.containerInfo),
                (r = $.pendingProps),
                null === t ? ($.child = Hc($, null, r, e)) : eb(t, $, r, e),
                $.child
              );
            case 11:
              return (
                (r = $.type),
                (i = $.pendingProps),
                Pm(t, $, r, (i = $.elementType === r ? i : jb(r, i)), e)
              );
            case 7:
              return eb(t, $, $.pendingProps, e), $.child;
            case 8:
            case 12:
              return eb(t, $, $.pendingProps.children, e), $.child;
            case 10:
              t: {
                (r = $.type._context),
                  (i = $.pendingProps),
                  (n = $.memoizedProps),
                  (a = i.value);
                var l = $.type._context;
                if (
                  (va(Re, l._currentValue), (l._currentValue = a), null !== n)
                )
                  if (
                    ((l = n.value),
                    0 ===
                      (a = fc(l, a)
                        ? 0
                        : 0 |
                          ('function' == typeof r._calculateChangedBits
                            ? r._calculateChangedBits(l, a)
                            : 1073741823)))
                  ) {
                    if (n.children === i.children && !Ma.current) {
                      $ = Ib(t, $, e);
                      break t;
                    }
                  } else
                    for (
                      null !== (l = $.child) && (l.return = $);
                      null !== l;

                    ) {
                      var v = l.dependencies;
                      if (null !== v) {
                        n = l.child;
                        for (var o = v.firstContext; null !== o; ) {
                          if (o.context === r && 0 != (o.observedBits & a)) {
                            1 === l.tag &&
                              (((o = Yb(e, null)).tag = 2), Zb(l, o)),
                              l.expirationTime < e && (l.expirationTime = e),
                              null !== (o = l.alternate) &&
                                o.expirationTime < e &&
                                (o.expirationTime = e),
                              wm(l.return, e),
                              v.expirationTime < e && (v.expirationTime = e);
                            break;
                          }
                          o = o.next;
                        }
                      } else
                        n = 10 === l.tag && l.type === $.type ? null : l.child;
                      if (null !== n) n.return = l;
                      else
                        for (n = l; null !== n; ) {
                          if (n === $) {
                            n = null;
                            break;
                          }
                          if (null !== (l = n.sibling)) {
                            (l.return = n.return), (n = l);
                            break;
                          }
                          n = n.return;
                        }
                      l = n;
                    }
                eb(t, $, i.children, e), ($ = $.child);
              }
              return $;
            case 9:
              return (
                (i = $.type),
                (r = (a = $.pendingProps).children),
                Oc($, e),
                (r = r((i = db(i, a.unstable_observedBits)))),
                ($.effectTag |= 1),
                eb(t, $, r, e),
                $.child
              );
            case 14:
              return (
                (a = jb((i = $.type), $.pendingProps)),
                Qm(t, $, i, (a = jb(i.type, a)), r, e)
              );
            case 15:
              return Rm(t, $, $.type, $.pendingProps, r, e);
            case 17:
              return (
                (r = $.type),
                (i = $.pendingProps),
                (i = $.elementType === r ? i : jb(r, i)),
                null !== t &&
                  ((t.alternate = null),
                  ($.alternate = null),
                  ($.effectTag |= 2)),
                ($.tag = 1),
                Na(r) ? ((t = !0), mf($)) : (t = !1),
                Oc($, e),
                Am($, r, i),
                Ah($, r, i, e),
                Ph(null, $, r, !0, t, e)
              );
            case 19:
              return Xm(t, $, e);
          }
          throw Error(Y(156, $.tag));
        };
        tl = null;
        ul = null;
        (ci.prototype.render = function (t) {
          Cf(t, this._internalRoot, null, null);
        }),
          (ci.prototype.unmount = function () {
            var t = this._internalRoot,
              $ = t.containerInfo;
            Cf(null, t, null, function () {
              $[rd] = null;
            });
          }),
          (_s = function (t) {
            if (13 === t.tag) {
              var $ = of(vb(), 150, 100);
              $b(t, $), bi(t, $);
            }
          }),
          (Ek = function (t) {
            13 === t.tag && ($b(t, 3), bi(t, 3));
          }),
          (at = function (t) {
            if (13 === t.tag) {
              var $ = vb();
              $b(t, ($ = mc($, t, null))), bi(t, $);
            }
          }),
          (mk = function (t, $, e) {
            switch ($) {
              case 'input':
                if ((ch(t, e), ($ = e.name), 'radio' === e.type && null != $)) {
                  for (e = t; e.parentNode; ) e = e.parentNode;
                  for (
                    e = e.querySelectorAll(
                      'input[name=' + JSON.stringify('' + $) + '][type="radio"]'
                    ),
                      $ = 0;
                    $ < e.length;
                    $++
                  ) {
                    var r = e[$];
                    if (r !== t && r.form === t.form) {
                      var i = th(r);
                      if (!i) throw Error(Y(90));
                      Gl(r), ch(r, i);
                    }
                  }
                }
                break;
              case 'textarea':
                Ll(t, e);
                break;
              case 'select':
                null != ($ = e.value) && Jc(t, !!e.multiple, $, !1);
            }
          }),
          (Cl = jn),
          (zu = function (t, $, e, r, i) {
            var a = sa;
            sa |= 4;
            try {
              return Xb(98, t.bind(null, $, e, r, i));
            } finally {
              (sa = a) === wa && ub();
            }
          }),
          (Dl = function () {
            (sa & (1 | ib | tb)) === wa && (fv(), Sc());
          }),
          (Vs = function (t, $) {
            var e = sa;
            sa |= 2;
            try {
              return t($);
            } finally {
              (sa = e) === wa && ub();
            }
          });
        ju = {
          Events: [
            Jd,
            jc,
            th,
            yl,
            wg,
            Mc,
            function (t) {
              ih(t, Pu);
            },
            Al,
            Bl,
            ef,
            cf,
            Sc,
            {current: !1},
          ],
        };
        !(function (t) {
          var $ = t.findFiberByHostInstance;
          nv(
            Fa({}, t, {
              overrideHookState: null,
              overrideProps: null,
              setSuspenseHandler: null,
              scheduleUpdate: null,
              currentDispatcherRef: hb.ReactCurrentDispatcher,
              findHostInstanceByFiber: function (t) {
                return null === (t = Ql(t)) ? null : t.stateNode;
              },
              findFiberByHostInstance: function (t) {
                return $ ? $(t) : null;
              },
              findHostInstancesForRefresh: null,
              scheduleRefresh: null,
              scheduleRoot: null,
              setRefreshHandler: null,
              getCurrentFiber: null,
            })
          );
        })({
          findFiberByHostInstance: Id,
          bundleType: 0,
          version: '16.13.1',
          rendererPackageName: 'react-dom',
        });
        ku = ju;
        Za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ku;
        lu = un;
        Za.createPortal = lu;
        mu = function (t) {
          if (null == t) return null;
          if (1 === t.nodeType) return t;
          var $ = t._reactInternalFiber;
          if (void 0 === $) {
            if ('function' == typeof t.render) throw Error(Y(188));
            throw Error(Y(268, Object.keys(t)));
          }
          return (t = null === (t = Ql($)) ? null : t.stateNode);
        };
        Za.findDOMNode = mu;
        nu = function (t, $) {
          if ((sa & (ib | tb)) !== wa) throw Error(Y(187));
          var e = sa;
          sa |= 1;
          try {
            return Xb(99, t.bind(null, $));
          } finally {
            (sa = e), ub();
          }
        };
        Za.flushSync = nu;
        ou = function (t, $, e) {
          if (!Nd($)) throw Error(Y(200));
          return Df(null, t, $, !0, e);
        };
        Za.hydrate = ou;
        pu = function (t, $, e) {
          if (!Nd($)) throw Error(Y(200));
          return Df(null, t, $, !1, e);
        };
        Za.render = pu;
        qu = function (t) {
          if (!Nd(t)) throw Error(Y(40));
          return (
            !!t._reactRootContainer &&
            (kn(function () {
              Df(null, null, t, !1, function () {
                (t._reactRootContainer = null), (t[rd] = null);
              });
            }),
            !0)
          );
        };
        Za.unmountComponentAtNode = qu;
        ru = jn;
        Za.unstable_batchedUpdates = ru;
        su = function (t, $) {
          return un(
            t,
            $,
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null
          );
        };
        Za.unstable_createPortal = su;
        tu = function (t, $, e, r) {
          if (!Nd(e)) throw Error(Y(200));
          if (null == t || void 0 === t._reactInternalFiber) throw Error(Y(38));
          return Df(t, $, e, !1, r);
        };
        Za.unstable_renderSubtreeIntoContainer = tu;
        uu = '16.13.1';
        Za.version = uu;
      }
      ck(), (qs = (tv(), Za));
      var di = {};
      var uv,
        vv = false;
      var wv = function (t, e) {
        return (wv =
          Object.setPrototypeOf ||
          ({__proto__: []} instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          })(t, e);
      };
      function Jb(t, e) {
        function r() {
          this.constructor = t;
        }
        wv(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((r.prototype = e.prototype), new r()));
      }
      var ba = function () {
        return (
          (ba =
            Object.assign ||
            function (t) {
              for (var e, r = 1, o = arguments.length; r < o; r++)
                for (var n in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              return t;
            }),
          ba.apply(this, arguments)
        );
      };
      function xa(t, e) {
        var r = {};
        for (var o in t)
          Object.prototype.hasOwnProperty.call(t, o) &&
            e.indexOf(o) < 0 &&
            (r[o] = t[o]);
        if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (o = Object.getOwnPropertySymbols(t); n < o.length; n++)
            e.indexOf(o[n]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, o[n]) &&
              (r[o[n]] = t[o[n]]);
        }
        return r;
      }
      function Tc() {
        for (var t = 0, e = 0, r = arguments.length; e < r; e++)
          t += arguments[e].length;
        var o = Array(t),
          n = 0;
        for (e = 0; e < r; e++)
          for (var a = arguments[e], $ = 0, i = a.length; $ < i; $++, n++)
            o[n] = a[$];
        return o;
      }
      function vn(t) {
        return this instanceof vn ? ((this.v = t), this) : new vn(t);
      }
      var Uc, Vc;
      var xv = function () {},
        Oa = function () {};
      function ei() {
        throw new Error('setTimeout has not been defined');
      }
      function fi() {
        throw new Error('clearTimeout has not been defined');
      }
      function yv($) {
        if (Uc === setTimeout) return setTimeout($, 0);
        if ((Uc === ei || !Uc) && setTimeout)
          return (Uc = setTimeout), setTimeout($, 0);
        try {
          return Uc($, 0);
        } catch (e) {
          try {
            return Uc.call(null, $, 0);
          } catch (e) {
            return Uc.call(this, $, 0);
          }
        }
      }
      function zv($) {
        if (Vc === clearTimeout) return clearTimeout($);
        if ((Vc === fi || !Vc) && clearTimeout)
          return (Vc = clearTimeout), clearTimeout($);
        try {
          return Vc($);
        } catch (e) {
          try {
            return Vc.call(null, $);
          } catch (e) {
            return Vc.call(this, $);
          }
        }
      }
      !(function () {
        try {
          Uc = 'function' == typeof setTimeout ? setTimeout : ei;
        } catch ($) {
          Uc = ei;
        }
        try {
          Vc = 'function' == typeof clearTimeout ? clearTimeout : fi;
        } catch ($) {
          Vc = fi;
        }
      })();
      var Od,
        Pd = [],
        wn = !1,
        xn = -1;
      function Av() {
        wn &&
          Od &&
          ((wn = !1),
          Od.length ? (Pd = Od.concat(Pd)) : (xn = -1),
          Pd.length && Bv());
      }
      function Bv() {
        if (!wn) {
          var $ = yv(Av);
          wn = !0;
          for (var e = Pd.length; e; ) {
            for (Od = Pd, Pd = []; ++xn < e; ) Od && Od[xn].run();
            (xn = -1), (e = Pd.length);
          }
          (Od = null), (wn = !1), zv($);
        }
      }
      function Cv($, e) {
        (this.fun = $), (this.array = e);
      }
      Cv.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      var Qd,
        yn = 0,
        zn =
          'undefined' != typeof window &&
          void 0 !== window.requestAnimationFrame
            ? function ($) {
                return window.requestAnimationFrame($);
              }
            : function ($) {
                var e = Date.now(),
                  a = Math.max(0, 16.7 - (e - yn));
                (yn = e + a),
                  setTimeout(function () {
                    return $(yn);
                  }, a);
              },
        Dv = function ($) {
          var e = [],
            a = [],
            r = 0,
            t = !1,
            n = 0,
            S = new WeakSet(),
            s = new WeakSet(),
            I = {
              cancel: function ($) {
                var e = a.indexOf($);
                S.add($), -1 !== e && a.splice(e, 1);
              },
              process: function (v) {
                var b, Z;
                if (
                  ((t = !0),
                  (e = (b = [a, e])[0]),
                  ((a = b[1]).length = 0),
                  (r = e.length))
                )
                  for (n = 0; n < r; n++)
                    (Z = e[n])(v),
                      !0 !== s.has(Z) || S.has(Z) || (I.schedule(Z), $(!0));
                t = !1;
              },
              schedule: function ($, n, I) {
                void 0 === n && (n = !1),
                  void 0 === I && (I = !1),
                  Oa('function' == typeof $, 'Argument must be a function');
                var v = I && t,
                  b = v ? e : a;
                S.delete($),
                  n && s.add($),
                  -1 === b.indexOf($) && (b.push($), v && (r = e.length));
              },
            };
          return I;
        };
      !(function ($) {
        ($.Read = 'read'),
          ($.Update = 'update'),
          ($.Render = 'render'),
          ($.PostRender = 'postRender'),
          ($.FixedUpdate = 'fixedUpdate');
      })(Qd || (Qd = {}));
      var Ev = 40,
        Fv = (1 / 60) * 1e3,
        An = !0,
        Bn = !1,
        Gv = !1,
        Wc = {delta: 0, timestamp: 0},
        Cn = [Qd.Read, Qd.Update, Qd.Render, Qd.PostRender],
        Hv = function ($) {
          return (Bn = $);
        },
        gi = Cn.reduce(
          function ($, e) {
            var a = Dv(Hv);
            return (
              ($.sync[e] = function ($, e, r) {
                return (
                  void 0 === e && (e = !1),
                  void 0 === r && (r = !1),
                  Bn || Kv(),
                  a.schedule($, e, r),
                  $
                );
              }),
              ($.cancelSync[e] = function ($) {
                return a.cancel($);
              }),
              ($.steps[e] = a),
              $
            );
          },
          {steps: {}, sync: {}, cancelSync: {}}
        ),
        Iv = gi.steps,
        Ha = gi.sync,
        kb = gi.cancelSync,
        Jv = function ($) {
          return Iv[$].process(Wc);
        },
        Dn = function ($) {
          (Bn = !1),
            (Wc.delta = An ? Fv : Math.max(Math.min($ - Wc.timestamp, Ev), 1)),
            An || (Fv = Wc.delta),
            (Wc.timestamp = $),
            (Gv = !0),
            Cn.forEach(Jv),
            (Gv = !1),
            Bn && ((An = !1), zn(Dn));
        },
        Kv = function () {
          (Bn = !0), (An = !0), Gv || zn(Dn);
        },
        Rd = function () {
          return Wc;
        };
      var xb = function () {
          return (xb =
            Object.assign ||
            function (r) {
              for (var $, o = 1, e = arguments.length; o < e; o++)
                for (var t in ($ = arguments[o]))
                  Object.prototype.hasOwnProperty.call($, t) && (r[t] = $[t]);
              return r;
            }).apply(this, arguments);
        },
        En = function (r, $) {
          return function (o) {
            return Math.max(Math.min(o, $), r);
          };
        },
        Sd = function (r) {
          return r % 1 ? Number(r.toFixed(5)) : r;
        },
        hi = /(-)?(\d[\d\.]*)/g,
        Ef =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Fn =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))$/i,
        la = {
          test: function (r) {
            return 'number' == typeof r;
          },
          parse: parseFloat,
          transform: function (r) {
            return r;
          },
        },
        Td = xb(xb({}, la), {transform: En(0, 1)}),
        Ff = xb(xb({}, la), {default: 1}),
        Ud = function (r) {
          return {
            test: function ($) {
              return (
                'string' == typeof $ &&
                $.endsWith(r) &&
                1 === $.split(' ').length
              );
            },
            parse: parseFloat,
            transform: function ($) {
              return '' + $ + r;
            },
          };
        },
        Kb = Ud('deg'),
        sc = Ud('%'),
        da = Ud('px'),
        Gn = Ud('vh'),
        Hn = Ud('vw'),
        In = xb(xb({}, sc), {
          parse: function (r) {
            return sc.parse(r) / 100;
          },
          transform: function (r) {
            return sc.transform(100 * r);
          },
        }),
        Lv = function (r) {
          return r.substring(r.indexOf('(') + 1, r.lastIndexOf(')'));
        },
        Mv = En(0, 255),
        ii = function (r) {
          return void 0 !== r.red;
        },
        ji = function (r) {
          return void 0 !== r.hue;
        },
        Jn = function (r) {
          return function ($) {
            if ('string' != typeof $) return $;
            for (var o = {}, e = Lv($).split(/,\s*/), t = 0; t < 4; t++)
              o[r[t]] = void 0 !== e[t] ? parseFloat(e[t]) : 1;
            return o;
          };
        },
        Nv = function (r) {
          var $ = r.red,
            o = r.green,
            e = r.blue,
            t = r.alpha;
          return (
            'rgba(' +
            $ +
            ', ' +
            o +
            ', ' +
            e +
            ', ' +
            (void 0 === t ? 1 : t) +
            ')'
          );
        },
        Ov = function (r) {
          var $ = r.hue,
            o = r.saturation,
            e = r.lightness,
            t = r.alpha;
          return (
            'hsla(' +
            $ +
            ', ' +
            o +
            ', ' +
            e +
            ', ' +
            (void 0 === t ? 1 : t) +
            ')'
          );
        },
        ki = xb(xb({}, la), {
          transform: function (r) {
            return Math.round(Mv(r));
          },
        });
      function li(r, $) {
        return r.startsWith($) && Fn.test(r);
      }
      var Vd = {
          test: function (r) {
            return 'string' == typeof r ? li(r, 'rgb') : ii(r);
          },
          parse: Jn(['red', 'green', 'blue', 'alpha']),
          transform: function (r) {
            var $ = r.red,
              o = r.green,
              e = r.blue,
              t = r.alpha,
              a = void 0 === t ? 1 : t;
            return Nv({
              red: ki.transform($),
              green: ki.transform(o),
              blue: ki.transform(e),
              alpha: Sd(Td.transform(a)),
            });
          },
        },
        Wd = {
          test: function (r) {
            return 'string' == typeof r ? li(r, 'hsl') : ji(r);
          },
          parse: Jn(['hue', 'saturation', 'lightness', 'alpha']),
          transform: function (r) {
            var $ = r.hue,
              o = r.saturation,
              e = r.lightness,
              t = r.alpha,
              a = void 0 === t ? 1 : t;
            return Ov({
              hue: Math.round($),
              saturation: sc.transform(Sd(o)),
              lightness: sc.transform(Sd(e)),
              alpha: Sd(Td.transform(a)),
            });
          },
        },
        mi = xb(xb({}, Vd), {
          test: function (r) {
            return 'string' == typeof r && li(r, '#');
          },
          parse: function (r) {
            var $ = '',
              o = '',
              e = '';
            return (
              r.length > 4
                ? (($ = r.substr(1, 2)),
                  (o = r.substr(3, 2)),
                  (e = r.substr(5, 2)))
                : (($ = r.substr(1, 1)),
                  (o = r.substr(2, 1)),
                  (e = r.substr(3, 1)),
                  ($ += $),
                  (o += o),
                  (e += e)),
              {
                red: parseInt($, 16),
                green: parseInt(o, 16),
                blue: parseInt(e, 16),
                alpha: 1,
              }
            );
          },
        }),
        Ia = {
          test: function (r) {
            return ('string' == typeof r && Fn.test(r)) || ii(r) || ji(r);
          },
          parse: function (r) {
            return Vd.test(r)
              ? Vd.parse(r)
              : Wd.test(r)
              ? Wd.parse(r)
              : mi.test(r)
              ? mi.parse(r)
              : r;
          },
          transform: function (r) {
            return ii(r) ? Vd.transform(r) : ji(r) ? Wd.transform(r) : r;
          },
        },
        ni = '${c}',
        Kn = '${n}',
        Pv = function (r) {
          return 'number' == typeof r ? 0 : r;
        },
        lb = {
          test: function (r) {
            if ('string' != typeof r || !isNaN(r)) return !1;
            var $ = 0,
              o = r.match(hi),
              e = r.match(Ef);
            return o && ($ += o.length), e && ($ += e.length), $ > 0;
          },
          parse: function (r) {
            var $ = r,
              o = [],
              e = $.match(Ef);
            e && (($ = $.replace(Ef, ni)), o.push.apply(o, e.map(Ia.parse)));
            var t = $.match(hi);
            return t && o.push.apply(o, t.map(la.parse)), o;
          },
          createTransformer: function (r) {
            var $ = r,
              o = 0,
              e = r.match(Ef),
              t = e ? e.length : 0;
            if (e) for (var a = 0; a < t; a++) ($ = $.replace(e[a], ni)), o++;
            var g = $.match(hi),
              n = g ? g.length : 0;
            if (g) for (a = 0; a < n; a++) ($ = $.replace(g[a], Kn)), o++;
            return function (r) {
              for (var e = $, a = 0; a < o; a++)
                e = e.replace(
                  a < t ? ni : Kn,
                  a < t ? Ia.transform(r[a]) : Sd(r[a])
                );
              return e;
            };
          },
          getAnimatableNone: function (r) {
            var $ = lb.parse(r);
            return lb.createTransformer(r)($.map(Pv));
          },
        };
      var ma = {},
        Ln = 1.525,
        Xd = function ($) {
          return function (r) {
            return 1 - $(1 - r);
          };
        },
        Yd = function ($) {
          return function (r) {
            return r <= 0.5 ? $(2 * r) / 2 : (2 - $(2 * (1 - r))) / 2;
          };
        },
        Mn = Xd,
        Qv = Yd,
        Nn = function ($) {
          return function (r) {
            return Math.pow(r, $);
          };
        },
        oi = function ($) {
          return function (r) {
            return r * r * (($ + 1) * r - $);
          };
        },
        On = function ($) {
          var r = oi($);
          return function ($) {
            return ($ *= 2) < 1
              ? 0.5 * r($)
              : 0.5 * (2 - Math.pow(2, -10 * ($ - 1)));
          };
        },
        Zd = function ($) {
          return $;
        },
        pi = Nn(2),
        qi = Xd(pi),
        Rv = Yd(pi),
        Pn = function ($) {
          return 1 - Math.sin(Math.acos($));
        },
        ri = Xd(Pn),
        Sv = Yd(ri),
        si = oi(Ln),
        Tv = Xd(si),
        Uv = Yd(si),
        Vv = On(Ln),
        Wv = 4 / 11,
        Xv = 8 / 11,
        Yv = 0.9,
        Zv = 4356 / 361,
        $v = 35442 / 1805,
        _v = 16061 / 1805,
        Gf = function ($) {
          var r = $ * $;
          return $ < Wv
            ? 7.5625 * r
            : $ < Xv
            ? 9.075 * r - 9.9 * $ + 3.4
            : $ < Yv
            ? Zv * r - $v * $ + _v
            : 10.8 * $ * $ - 20.52 * $ + 10.72;
        },
        aw = function ($) {
          return 1 - Gf(1 - $);
        },
        bw = function ($) {
          return $ < 0.5
            ? 0.5 * (1 - Gf(1 - 2 * $))
            : 0.5 * Gf(2 * $ - 1) + 0.5;
        },
        cw = 8,
        dw = 0.001,
        ew = 1e-7,
        fw = 10,
        $d = 11,
        Hf = 1 / ($d - 1),
        gw = 'undefined' != typeof Float32Array,
        Qn = function ($, r) {
          return 1 - 3 * r + 3 * $;
        },
        Rn = function ($, r) {
          return 3 * r - 6 * $;
        },
        Sn = function ($) {
          return 3 * $;
        },
        Tn = function ($, r, e) {
          return 3 * Qn(r, e) * $ * $ + 2 * Rn(r, e) * $ + Sn(r);
        },
        If = function ($, r, e) {
          return ((Qn(r, e) * $ + Rn(r, e)) * $ + Sn(r)) * $;
        };
      function Un($, r, e, x) {
        var t = gw ? new Float32Array($d) : new Array($d),
          T = function (r) {
            for (
              var x, T, n, o = 0, a = 1, j = $d - 1;
              a !== j && t[a] <= r;
              ++a
            )
              o += Hf;
            return (
              (x = (r - t[--a]) / (t[a + 1] - t[a])),
              (n = Tn((T = o + x * Hf), $, e)) >= dw
                ? (function (r, x) {
                    for (var t = 0, T = 0; t < cw; ++t) {
                      if (0 === (T = Tn(x, $, e))) return x;
                      x -= (If(x, $, e) - r) / T;
                    }
                    return x;
                  })(r, T)
                : 0 === n
                ? T
                : (function (r, x, t) {
                    var T,
                      n,
                      o = 0;
                    do {
                      (T = If((n = x + (t - x) / 2), $, e) - r) > 0
                        ? (t = n)
                        : (x = n);
                    } while (Math.abs(T) > ew && ++o < fw);
                    return n;
                  })(r, o, o + Hf)
            );
          };
        !(function () {
          for (var r = 0; r < $d; ++r) t[r] = If(r * Hf, $, e);
        })();
        return function (t) {
          return $ === r && e === x
            ? t
            : 0 === t
            ? 0
            : 1 === t
            ? 1
            : If(T(t), r, x);
        };
      }
      (ma.cubicBezier = Un),
        (ma.bounceInOut = bw),
        (ma.bounceIn = aw),
        (ma.bounceOut = Gf),
        (ma.anticipate = Vv),
        (ma.backInOut = Uv),
        (ma.backOut = Tv),
        (ma.backIn = si),
        (ma.circInOut = Sv),
        (ma.circOut = ri),
        (ma.circIn = Pn),
        (ma.easeInOut = Rv),
        (ma.easeOut = qi),
        (ma.easeIn = pi),
        (ma.linear = Zd),
        (ma.createAnticipateEasing = On),
        (ma.createBackIn = oi),
        (ma.createExpoIn = Nn),
        (ma.createMirroredEasing = Qv),
        (ma.createReversedEasing = Mn),
        (ma.mirrored = Yd),
        (ma.reversed = Xd);
      var hw = {x: 0, y: 0, z: 0},
        Jf = function (e) {
          return 'number' == typeof e;
        },
        ti = function (e) {
          return function (r, $, t) {
            return void 0 !== t
              ? e(r, $, t)
              : function (t) {
                  return e(r, $, t);
                };
          };
        },
        iw = function (e, r, $) {
          return Math.min(Math.max($, e), r);
        },
        _d = ti(iw),
        ui = function (e) {
          return e.hasOwnProperty('x') && e.hasOwnProperty('y');
        },
        Vn = function (e) {
          return ui(e) && e.hasOwnProperty('z');
        },
        Kf = function (e, r) {
          return Math.abs(e - r);
        },
        Wn = function (e, r) {
          if ((void 0 === r && (r = hw), Jf(e) && Jf(r))) return Kf(e, r);
          if (ui(e) && ui(r)) {
            var $ = Kf(e.x, r.x),
              t = Kf(e.y, r.y),
              o = Vn(e) && Vn(r) ? Kf(e.z, r.z) : 0;
            return Math.sqrt(Math.pow($, 2) + Math.pow(t, 2) + Math.pow(o, 2));
          }
          return 0;
        },
        Xc = function (e, r, $) {
          var t = r - e;
          return 0 === t ? 1 : ($ - e) / t;
        },
        ya = function (e, r, $) {
          return -$ * e + $ * r + e;
        },
        jw = function () {
          return (jw =
            Object.assign ||
            function (e) {
              for (var r, $ = 1, t = arguments.length; $ < t; $++)
                for (var o in (r = arguments[$]))
                  Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
              return e;
            }).apply(this, arguments);
        },
        kw = function (e, r, $) {
          var t = e * e,
            o = r * r;
          return Math.sqrt(Math.max(0, $ * (o - t) + t));
        },
        lw = [mi, Vd, Wd],
        Xn = function (e) {
          return lw.find(function (r) {
            return r.test(e);
          });
        },
        Yn = function (e) {
          return (
            "'" +
            e +
            "' is not an animatable color. Use the equivalent color code instead."
          );
        },
        Zn = function (e, r) {
          var $ = Xn(e),
            t = Xn(r);
          Oa(!!$, Yn(e)),
            Oa(!!t, Yn(r)),
            Oa(
              $.transform === t.transform,
              'Both colors must be hex/RGBA, OR both must be HSLA.'
            );
          var o = $.parse(e),
            u = t.parse(r),
            c = jw({}, o),
            n = $ === Wd ? ya : kw;
          return function (e) {
            for (var r in c) 'alpha' !== r && (c[r] = n(o[r], u[r], e));
            return (c.alpha = ya(o.alpha, u.alpha, e)), $.transform(c);
          };
        },
        mw = function (e, r) {
          return function ($) {
            return r(e($));
          };
        },
        vi = function () {
          for (var e = [], r = 0; r < arguments.length; r++)
            e[r] = arguments[r];
          return e.reduce(mw);
        };
      function nw(e, r) {
        return Jf(e)
          ? function ($) {
              return ya(e, r, $);
            }
          : Ia.test(e)
          ? Zn(e, r)
          : _n(e, r);
      }
      var ow = function (e, r) {
        var $ = e.slice(),
          t = $.length,
          o = e.map(function (e, $) {
            return nw(e, r[$]);
          });
        return function (e) {
          for (var r = 0; r < t; r++) $[r] = o[r](e);
          return $;
        };
      };
      function $n(e) {
        for (
          var r = lb.parse(e), $ = r.length, t = 0, o = 0, u = 0, c = 0;
          c < $;
          c++
        )
          t || 'number' == typeof r[c] ? t++ : void 0 !== r[c].hue ? u++ : o++;
        return {parsed: r, numNumbers: t, numRGB: o, numHSL: u};
      }
      var _n = function (e, r) {
        var $ = lb.createTransformer(r),
          t = $n(e),
          o = $n(r);
        return (
          Oa(
            t.numHSL === o.numHSL &&
              t.numRGB === o.numRGB &&
              t.numNumbers >= o.numNumbers,
            "Complex values '" +
              e +
              "' and '" +
              r +
              "' too different to mix. Ensure all colors are of the same type."
          ),
          vi(ow(t.parsed, o.parsed), $)
        );
      };
      var pw = function (e) {
          return e;
        },
        ao = function (e) {
          return (
            void 0 === e && (e = pw),
            ti(function (r, $, t) {
              var o = $ - t,
                u = -(0 - r + 1) * (0 - e(Math.abs(o)));
              return o <= 0 ? $ + u : $ - u;
            })
          );
        },
        a = ao(),
        b = ao(Math.sqrt),
        wi = function (e, r) {
          return Jf(e) ? e / (1e3 / r) : 0;
        },
        ae = function (e, r) {
          return r ? e * (1e3 / r) : 0;
        },
        qw = function (e, r, $) {
          var t = r - e;
          return (((($ - e) % t) + t) % t) + e;
        },
        c = ti(qw),
        d = _d(0, 1);
      var rw = (function () {
          return function (t, r) {
            var e = this,
              o = t.middleware,
              n = t.onComplete;
            (this.isActive = !0),
              (this.update = function (t) {
                e.observer.update && e.updateObserver(t);
              }),
              (this.complete = function () {
                e.observer.complete && e.isActive && e.observer.complete(),
                  e.onComplete && e.onComplete(),
                  (e.isActive = !1);
              }),
              (this.error = function (t) {
                e.observer.error && e.isActive && e.observer.error(t),
                  (e.isActive = !1);
              }),
              (this.observer = r),
              (this.updateObserver = function (t) {
                return r.update(t);
              }),
              (this.onComplete = n),
              r.update &&
                o &&
                o.length &&
                o.forEach(function (t) {
                  return (e.updateObserver = t(e.updateObserver, e.complete));
                });
          };
        })(),
        bo = function (t, r, e) {
          var o = r.middleware;
          return new rw(
            {middleware: o, onComplete: e},
            'function' == typeof t ? {update: t} : t
          );
        },
        sw = (function () {
          function t(t) {
            void 0 === t && (t = {}), (this.props = t);
          }
          return (
            (t.prototype.create = function (r) {
              return new t(r);
            }),
            (t.prototype.start = function (t) {
              void 0 === t && (t = {});
              var r = !1,
                e = {stop: function () {}},
                o = this.props,
                n = o.init,
                $ = xa(o, ['init']),
                i = n(
                  bo(t, $, function () {
                    (r = !0), e.stop();
                  })
                );
              return (e = i ? ba({}, e, i) : e), r && e.stop(), e;
            }),
            (t.prototype.applyMiddleware = function (t) {
              return this.create(
                ba({}, this.props, {
                  middleware: this.props.middleware
                    ? [t].concat(this.props.middleware)
                    : [t],
                })
              );
            }),
            (t.prototype.pipe = function () {
              for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              var e = 1 === t.length ? t[0] : vi.apply(void 0, t);
              return this.applyMiddleware(function (t) {
                return function (r) {
                  return t(e(r));
                };
              });
            }),
            t
          );
        })(),
        yb = function (t) {
          return new sw({init: t});
        },
        tw = (function () {
          function t(t) {
            void 0 === t && (t = {}), (this.props = t);
          }
          return (
            (t.prototype.applyMiddleware = function (t) {
              return this.create(
                ba({}, this.props, {
                  middleware: this.props.middleware
                    ? [t].concat(this.props.middleware)
                    : [t],
                })
              );
            }),
            (t.prototype.pipe = function () {
              for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              var e = 1 === t.length ? t[0] : vi.apply(void 0, t);
              return this.applyMiddleware(function (t) {
                return function (r) {
                  return t(e(r));
                };
              });
            }),
            (t.prototype.while = function (t) {
              return this.applyMiddleware(function (r, e) {
                return function (o) {
                  return t(o) ? r(o) : e();
                };
              });
            }),
            (t.prototype.filter = function (t) {
              return this.applyMiddleware(function (r) {
                return function (e) {
                  return t(e) && r(e);
                };
              });
            }),
            t
          );
        })(),
        co = (function (t) {
          function r() {
            var r = (null !== t && t.apply(this, arguments)) || this;
            return (r.subscribers = []), r;
          }
          return (
            Jb(r, t),
            (r.prototype.complete = function () {
              this.subscribers.forEach(function (t) {
                return t.complete();
              });
            }),
            (r.prototype.error = function (t) {
              this.subscribers.forEach(function (r) {
                return r.error(t);
              });
            }),
            (r.prototype.update = function (t) {
              for (var r = 0; r < this.subscribers.length; r++)
                this.subscribers[r].update(t);
            }),
            (r.prototype.subscribe = function (t) {
              var r = this,
                e = bo(t, this.props);
              return (
                this.subscribers.push(e),
                {
                  unsubscribe: function () {
                    var t = r.subscribers.indexOf(e);
                    -1 !== t && r.subscribers.splice(t, 1);
                  },
                }
              );
            }),
            (r.prototype.stop = function () {
              this.parent && this.parent.stop();
            }),
            r
          );
        })(tw),
        e = (function (t) {
          function r() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Jb(r, t),
            (r.prototype.create = function (t) {
              return new r(t);
            }),
            r
          );
        })(co),
        f = (function (t) {
          function r(r) {
            var e = t.call(this, r) || this;
            return (
              (e.scheduleVelocityCheck = function () {
                return Ha.postRender(e.velocityCheck);
              }),
              (e.velocityCheck = function (t) {
                t.timestamp !== e.lastUpdated && (e.prev = e.current);
              }),
              (e.prev = e.current = r.value || 0),
              (e.updateCurrent = function (t) {
                return (e.current = t);
              }),
              (e.getVelocityOfCurrent = function () {
                return e.getSingleVelocity(e.current, e.prev);
              }),
              r.initialSubscription && e.subscribe(r.initialSubscription),
              e
            );
          }
          return (
            Jb(r, t),
            (r.prototype.create = function (t) {
              return new r(t);
            }),
            (r.prototype.get = function () {
              return this.current;
            }),
            (r.prototype.getVelocity = function () {
              return this.getVelocityOfCurrent();
            }),
            (r.prototype.update = function (r) {
              t.prototype.update.call(this, r),
                (this.prev = this.current),
                this.updateCurrent(r);
              var e = Rd(),
                o = e.delta,
                n = e.timestamp;
              (this.timeDelta = o),
                (this.lastUpdated = n),
                Ha.postRender(this.scheduleVelocityCheck);
            }),
            (r.prototype.subscribe = function (r) {
              var e = t.prototype.subscribe.call(this, r);
              return (
                this.subscribers[this.subscribers.length - 1].update(
                  this.current
                ),
                e
              );
            }),
            (r.prototype.getSingleVelocity = function (t, r) {
              return 'number' == typeof t && 'number' == typeof r
                ? ae(t - r, this.timeDelta)
                : ae(parseFloat(t) - parseFloat(r), this.timeDelta) || 0;
            }),
            r
          );
        })(co),
        uw = function (t) {
          var r = Object.keys(t),
            e = function (r, e) {
              return void 0 !== r && !t[e](r);
            };
          return {
            getVectorKeys: function (t) {
              return r.reduce(function (r, o) {
                return e(t[o], o) && r.push(o), r;
              }, []);
            },
            testVectorProps: function (t) {
              return (
                t &&
                r.some(function (r) {
                  return e(t[r], r);
                })
              );
            },
          };
        },
        vw = [da, sc, Kb, Gn, Hn],
        xi = function (t) {
          return vw.find(function (r) {
            return r.test(t);
          });
        },
        ww = function (t) {
          return Boolean(xi(t));
        },
        eo = function (t, r) {
          return t(r);
        },
        xw = function (t, r) {
          var e = r.from,
            o = r.to,
            n = xa(r, ['from', 'to']),
            $ = xi(e) || xi(o),
            i = $.transform,
            a = $.parse;
          return t(
            ba({}, n, {
              from: 'string' == typeof e ? a(e) : e,
              to: 'string' == typeof o ? a(o) : o,
            })
          ).pipe(i);
        },
        fo = function (t) {
          return function (r, e) {
            var o = e.from,
              n = e.to,
              $ = xa(e, ['from', 'to']);
            return r(ba({}, $, {from: 0, to: 1})).pipe(t(o, n));
          };
        },
        yw = fo(Zn),
        zw = fo(_n),
        be = function (t, r) {
          var e = uw(r),
            o = e.testVectorProps,
            n = e.getVectorKeys;
          return function (r) {
            if (!o(r)) return t(r);
            var e = n(r),
              $ = r[e[0]];
            return Aw($)(t, r, e);
          };
        },
        Aw = function (t) {
          return 'number' == typeof t
            ? eo
            : ww(t)
            ? xw
            : Ia.test(t)
            ? yw
            : lb.test(t)
            ? zw
            : eo;
        },
        Bw = function (t) {
          return (
            void 0 === t && (t = {}),
            yb(function (r) {
              var e = r.complete,
                o = r.update,
                n = t.velocity,
                $ = void 0 === n ? 0 : n,
                i = t.from,
                a = void 0 === i ? 0 : i,
                u = t.power,
                l = void 0 === u ? 0.8 : u,
                p = t.timeConstant,
                c = void 0 === p ? 350 : p,
                s = t.restDelta,
                v = void 0 === s ? 0.5 : s,
                f = t.modifyTarget,
                I = 0,
                z = l * $,
                m = Math.round(a + z),
                d = void 0 === f ? m : f(m),
                y = Ha.update(function (t) {
                  var r = t.delta;
                  I += r;
                  var n = -z * Math.exp(-I / c),
                    $ = n > v || n < -v;
                  o($ ? d + n : d), $ || (kb.update(y), e());
                }, !0);
              return {
                stop: function () {
                  return kb.update(y);
                },
              };
            })
          );
        },
        Cw = be(Bw, {
          from: la.test,
          modifyTarget: function (t) {
            return 'function' == typeof t;
          },
          velocity: la.test,
        }),
        Dw = function (t) {
          return (
            void 0 === t && (t = {}),
            yb(function (r) {
              var e = r.update,
                o = r.complete,
                n = t.velocity,
                $ = void 0 === n ? 0 : n,
                i = t.from,
                a = void 0 === i ? 0 : i,
                u = t.to,
                l = void 0 === u ? 0 : u,
                p = t.stiffness,
                c = void 0 === p ? 100 : p,
                s = t.damping,
                v = void 0 === s ? 10 : s,
                f = t.mass,
                I = void 0 === f ? 1 : f,
                z = t.restSpeed,
                m = void 0 === z ? 0.01 : z,
                d = t.restDelta,
                y = void 0 === d ? 0.01 : d,
                h = $ ? -$ / 1e3 : 0,
                x = 0,
                g = l - a,
                b = a,
                A = b,
                w = Ha.update(function (t) {
                  var r = t.delta;
                  x += r;
                  var n = v / (2 * Math.sqrt(c * I)),
                    i = Math.sqrt(c / I) / 1e3;
                  if (((A = b), n < 1)) {
                    var a = Math.exp(-n * i * x),
                      u = i * Math.sqrt(1 - n * n);
                    b =
                      l -
                      a *
                        (((h + n * i * g) / u) * Math.sin(u * x) +
                          g * Math.cos(u * x));
                  } else {
                    a = Math.exp(-i * x);
                    b = l - a * (g + (h + i * g) * x);
                  }
                  $ = ae(b - A, r);
                  var p = Math.abs($) <= m,
                    s = Math.abs(l - b) <= y;
                  p && s ? (e((b = l)), kb.update(w), o()) : e(b);
                }, !0);
              return {
                stop: function () {
                  return kb.update(w);
                },
              };
            })
          );
        },
        go = be(Dw, {
          from: la.test,
          to: la.test,
          stiffness: la.test,
          damping: la.test,
          mass: la.test,
          velocity: la.test,
        }),
        Ew = function (t) {
          var r = t.from,
            e = void 0 === r ? 0 : r,
            o = t.velocity,
            n = void 0 === o ? 0 : o,
            $ = t.min,
            i = t.max,
            a = t.power,
            u = void 0 === a ? 0.8 : a,
            l = t.timeConstant,
            p = void 0 === l ? 700 : l,
            c = t.bounceStiffness,
            s = void 0 === c ? 500 : c,
            v = t.bounceDamping,
            f = void 0 === v ? 10 : v,
            I = t.restDelta,
            z = void 0 === I ? 1 : I,
            m = t.modifyTarget;
          return yb(function (t) {
            var r,
              o = t.update,
              a = t.complete,
              l = e,
              c = e,
              v = !1,
              I = function (t) {
                return void 0 !== $ && t <= $;
              },
              d = function (t) {
                return void 0 !== i && t >= i;
              },
              y = function (t) {
                return I(t) || d(t);
              },
              h = function (t) {
                o(t),
                  (l = c),
                  (c = t),
                  (n = ae(c - l, Rd().delta)),
                  r &&
                    !v &&
                    (function (t, r) {
                      return (I(t) && r < 0) || (d(t) && r > 0);
                    })(t, n) &&
                    g({from: t, velocity: n});
              },
              x = function (t, e) {
                r && r.stop(),
                  (r = t.start({
                    update: h,
                    complete: function () {
                      e ? e() : a();
                    },
                  }));
              },
              g = function (t) {
                (v = !0),
                  x(
                    go(
                      ba({}, t, {
                        to: I(t.from) ? $ : i,
                        stiffness: s,
                        damping: f,
                        restDelta: z,
                      })
                    )
                  );
              };
            if (y(e)) g({from: e, velocity: n});
            else if (0 !== n) {
              var b = Cw({
                from: e,
                velocity: n,
                timeConstant: p,
                power: u,
                restDelta: y(e) ? 20 : z,
                modifyTarget: m,
              });
              x(b, function () {
                y(c) ? g({from: c, velocity: n}) : a();
              });
            } else a();
            return {
              stop: function () {
                return r && r.stop();
              },
            };
          });
        },
        Fw = be(Ew, {
          from: la.test,
          velocity: la.test,
          min: la.test,
          max: la.test,
          damping: la.test,
          stiffness: la.test,
          modifyTarget: function (t) {
            return 'function' == typeof t;
          },
        }),
        Gw = function (t) {
          var r = t.from,
            e = void 0 === r ? 0 : r,
            o = t.to,
            n = void 0 === o ? 1 : o,
            $ = t.ease,
            i = void 0 === $ ? Zd : $,
            a = t.reverseEase;
          return (
            void 0 !== a && a && (i = Mn(i)),
            yb(function (t) {
              var r = t.update;
              return {
                seek: function (t) {
                  return r(t);
                },
              };
            }).pipe(i, function (t) {
              return ya(e, n, t);
            })
          );
        },
        yi = be(Gw, {
          ease: function (t) {
            return 'function' == typeof t;
          },
          from: la.test,
          to: la.test,
        }),
        Hw = _d(0, 1),
        ho = function (t) {
          return (
            void 0 === t && (t = {}),
            yb(function (r) {
              var e,
                o = r.update,
                n = r.complete,
                $ = t.duration,
                i = void 0 === $ ? 300 : $,
                a = t.ease,
                u = void 0 === a ? qi : a,
                l = t.flip,
                p = void 0 === l ? 0 : l,
                c = t.loop,
                s = void 0 === c ? 0 : c,
                v = t.yoyo,
                f = void 0 === v ? 0 : v,
                I = t.repeatDelay,
                z = void 0 === I ? 0 : I,
                m = t.from,
                d = void 0 === m ? 0 : m,
                y = t.to,
                h = void 0 === y ? 1 : y,
                x = t.elapsed,
                g = void 0 === x ? 0 : x,
                b = t.flipCount,
                A = void 0 === b ? 0 : b,
                w = t.yoyoCount,
                P = void 0 === w ? 0 : w,
                T = t.loopCount,
                _ = void 0 === T ? 0 : T,
                D = yi({from: d, to: h, ease: u}).start(o),
                S = 0,
                M = !1,
                C = function (t) {
                  var r;
                  void 0 === t && (t = !1),
                    (D = yi({
                      from: (d = (r = [h, d])[0]),
                      to: (h = r[1]),
                      ease: u,
                      reverseEase: t,
                    }).start(o));
                },
                O = function () {
                  (S = Hw(Xc(0, i, g))), D.seek(S);
                },
                V = function () {
                  (M = !0),
                    (e = Ha.update(function (t) {
                      var r,
                        o = t.delta;
                      (g += o),
                        O(),
                        !(r = M && g > i + z) ||
                          ((!r || s || p || f) &&
                            ((g = g - i - z),
                            s && _ < s
                              ? (_++, 1)
                              : p && A < p
                              ? (A++, C(), 1)
                              : f && P < f && (C(++P % 2 != 0), 1))) ||
                          (kb.update(e), n && Ha.update(n, !1, !0));
                    }, !0));
                },
                k = function () {
                  (M = !1), e && kb.update(e);
                };
              return (
                V(),
                {
                  isActive: function () {
                    return M;
                  },
                  getElapsed: function () {
                    return _d(0, i, g);
                  },
                  getProgress: function () {
                    return S;
                  },
                  stop: function () {
                    k();
                  },
                  pause: function () {
                    return k(), this;
                  },
                  resume: function () {
                    return M || V(), this;
                  },
                  seek: function (t) {
                    return (g = ya(0, i, t)), Ha.update(O, !1, !0), this;
                  },
                  reverse: function () {
                    return C(), this;
                  },
                }
              );
            })
          );
        },
        Iw = _d(0, 1),
        Jw = function (t, r) {
          return t
            .map(function () {
              return r || qi;
            })
            .splice(0, t.length - 1);
        },
        Kw = function (t) {
          var r = t.length;
          return t.map(function (t, e) {
            return 0 !== e ? e / (r - 1) : 0;
          });
        },
        Lw = function (t, r, e) {
          var o = t.length,
            n = o - 1,
            $ = n - 1,
            i = r.map(function (t) {
              return t.start(e);
            });
          return function (r) {
            r <= t[0] && i[0].seek(0), r >= t[n] && i[$].seek(1);
            for (var e = 1; e < o && !(t[e] > r || e === n); e++);
            var a = Xc(t[e - 1], t[e], r);
            i[e - 1].seek(Iw(a));
          };
        },
        Mw = function (t) {
          var r = t.easings,
            e = t.ease,
            o = void 0 === e ? Zd : e,
            n = t.times,
            $ = t.values,
            i = xa(t, ['easings', 'ease', 'times', 'values']);
          (r = Array.isArray(r) ? r : Jw($, r)), (n = n || Kw($));
          var a = r.map(function (t, r) {
            return yi({from: $[r], to: $[r + 1], ease: t});
          });
          return ho(ba({}, i, {ease: o})).applyMiddleware(function (t) {
            return Lw(n, a, t);
          });
        },
        Nw = function (t) {
          return (
            void 0 === t && (t = {}),
            yb(function (r) {
              var e = r.complete,
                o = r.update,
                n = t.acceleration,
                $ = void 0 === n ? 0 : n,
                i = t.friction,
                a = void 0 === i ? 0 : i,
                u = t.velocity,
                l = void 0 === u ? 0 : u,
                p = t.springStrength,
                c = t.to,
                s = t.restSpeed,
                v = void 0 === s ? 0.001 : s,
                f = t.from,
                I = void 0 === f ? 0 : f,
                z = Ha.update(function (t) {
                  var r = t.delta,
                    n = Math.max(r, 16);
                  ($ && (l += wi($, n)),
                  a && (l *= Math.pow(1 - a, n / 100)),
                  void 0 !== p && void 0 !== c) && (l += (c - I) * wi(p, n));
                  (I += wi(l, n)),
                    o(I),
                    !1 !== v && (!l || Math.abs(l) <= v) && (kb.update(z), e());
                }, !0);
              return {
                set: function (t) {
                  return (I = t), this;
                },
                setAcceleration: function (t) {
                  return ($ = t), this;
                },
                setFriction: function (t) {
                  return (a = t), this;
                },
                setSpringStrength: function (t) {
                  return (p = t), this;
                },
                setSpringTarget: function (t) {
                  return (c = t), this;
                },
                setVelocity: function (t) {
                  return (l = t), this;
                },
                stop: function () {
                  return kb.update(z);
                },
              };
            })
          );
        },
        g = be(Nw, {
          acceleration: la.test,
          friction: la.test,
          velocity: la.test,
          from: la.test,
          to: la.test,
          springStrength: la.test,
        }),
        io = function (t) {
          var r = t.getCount,
            e = t.getFirst,
            o = t.getOutput,
            n = t.mapApi,
            $ = t.setProp,
            i = t.startActions;
          return function (t) {
            return yb(function (a) {
              var u = a.update,
                l = a.complete,
                p = a.error,
                c = r(t),
                s = o(),
                v = function () {
                  return u(s);
                },
                f = 0,
                I = i(t, function (t, r) {
                  var e = !1;
                  return t.start({
                    complete: function () {
                      e || ((e = !0), ++f === c && Ha.update(l));
                    },
                    error: p,
                    update: function (t) {
                      $(s, r, t), Ha.update(v, !1, !0);
                    },
                  });
                });
              return Object.keys(e(I)).reduce(function (t, r) {
                return (t[r] = n(I, r)), t;
              }, {});
            });
          };
        },
        h = io({
          getOutput: function () {
            return {};
          },
          getCount: function (t) {
            return Object.keys(t).length;
          },
          getFirst: function (t) {
            return t[Object.keys(t)[0]];
          },
          mapApi: function (t, r) {
            return function () {
              for (var e = [], o = 0; o < arguments.length; o++)
                e[o] = arguments[o];
              return Object.keys(t).reduce(function (o, n) {
                var $;
                return (
                  t[n][r] &&
                    (e[0] && void 0 !== e[0][n]
                      ? (o[n] = t[n][r](e[0][n]))
                      : (o[n] = ($ = t[n])[r].apply($, e))),
                  o
                );
              }, {});
            };
          },
          setProp: function (t, r, e) {
            return (t[r] = e);
          },
          startActions: function (t, r) {
            return Object.keys(t).reduce(function (e, o) {
              return (e[o] = r(t[o], o)), e;
            }, {});
          },
        }),
        jo = function (t, r, e) {
          return yb(function (o) {
            var n = o.update,
              $ = r.split(' ').map(function (r) {
                return t.addEventListener(r, n, e), r;
              });
            return {
              stop: function () {
                return $.forEach(function (r) {
                  return t.removeEventListener(r, n, e);
                });
              },
            };
          });
        },
        zi = function () {
          return {clientX: 0, clientY: 0, pageX: 0, pageY: 0, x: 0, y: 0};
        },
        ko = function (t, r) {
          return (
            void 0 === r && (r = zi()),
            (r.clientX = r.x = t.clientX),
            (r.clientY = r.y = t.clientY),
            (r.pageX = t.pageX),
            (r.pageY = t.pageY),
            r
          );
        },
        lo = [zi()];
      if ('undefined' != typeof document) {
        var Ow = function (t) {
          var r = t.touches;
          var e = r.length;
          lo.length = 0;
          for (var o = 0; o < e; o++) {
            var n = r[o];
            lo.push(ko(n));
          }
        };
        jo(document, 'touchstart touchmove', {
          passive: !0,
          capture: !0,
        }).start(Ow);
      }
      var Pw = zi();
      if ('undefined' != typeof document) {
        var Qw = function (t) {
          ko(t, Pw);
        };
        jo(document, 'mousedown mousemove', !0).start(Qw);
      }
      var i = io({
          getOutput: function () {
            return [];
          },
          getCount: function (t) {
            return t.length;
          },
          getFirst: function (t) {
            return t[0];
          },
          mapApi: function (t, r) {
            return function () {
              for (var e = [], o = 0; o < arguments.length; o++)
                e[o] = arguments[o];
              return t.map(function (t, o) {
                if (t[r])
                  return Array.isArray(e[0]) ? t[r](e[0][o]) : t[r].apply(t, e);
              });
            };
          },
          setProp: function (t, r, e) {
            return (t[r] = e);
          },
          startActions: function (t, r) {
            return t.map(function (t, e) {
              return r(t, e);
            });
          },
        }),
        mo = function (t) {
          return yb(function (r) {
            var e = r.complete,
              o = setTimeout(e, t);
            return {
              stop: function () {
                return clearTimeout(o);
              },
            };
          });
        };
      function Lf(t) {
        var u = {};
        return function (r) {
          return void 0 === u[r] && (u[r] = t(r)), u[r];
        };
      }
      function Ai() {
        if (vv) return;
        vv = true;
        uv = {};
        uv.default = Lf;
      }
      var no,
        Rw,
        Bi,
        Sw = false;
      function Ci() {
        if (Sw) return;
        Sw = true;
        no = {};
        Ai();
        Rw =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
        Bi = Lf(function (e) {
          return (
            Rw.test(e) ||
            (111 === e.charCodeAt(0) &&
              110 === e.charCodeAt(1) &&
              e.charCodeAt(2) < 91)
          );
        });
        no.default = Bi;
      }
      Ka();
      var Di = function (t) {
          return 'object' == typeof t && t.hasOwnProperty('current');
        },
        Tw = function (t) {
          return !isNaN(parseFloat(t));
        },
        Mf = (function () {
          function t(t) {
            var r = this;
            (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (t, e) {
                void 0 === e && (e = !0),
                  (r.prev = r.current),
                  (r.current = t),
                  r.updateSubscribers &&
                    r.prev !== r.current &&
                    r.updateSubscribers.forEach(r.notifySubscriber),
                  e &&
                    r.renderSubscribers &&
                    r.renderSubscribers.forEach(r.notifySubscriber);
                var n = Rd(),
                  o = n.delta,
                  i = n.timestamp;
                r.lastUpdated !== i &&
                  ((r.timeDelta = o),
                  (r.lastUpdated = i),
                  Ha.postRender(r.scheduleVelocityCheck));
              }),
              (this.notifySubscriber = function (t) {
                t(r.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return Ha.postRender(r.velocityCheck);
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== r.lastUpdated && (r.prev = r.current);
              }),
              this.set(t, !1),
              (this.canTrackVelocity = Tw(this.current));
          }
          return (
            (t.prototype.subscribeTo = function (t, r) {
              var e = this,
                n = function () {
                  return r(e.current);
                };
              return (
                t.add(n),
                function () {
                  return t.delete(n);
                }
              );
            }),
            (t.prototype.onChange = function (t) {
              return (
                this.updateSubscribers || (this.updateSubscribers = new Set()),
                this.subscribeTo(this.updateSubscribers, t)
              );
            }),
            (t.prototype.clearListeners = function () {
              var t;
              null === (t = this.updateSubscribers) ||
                void 0 === t ||
                t.clear();
            }),
            (t.prototype.onRenderRequest = function (t) {
              return (
                this.renderSubscribers || (this.renderSubscribers = new Set()),
                this.notifySubscriber(t),
                this.subscribeTo(this.renderSubscribers, t)
              );
            }),
            (t.prototype.attach = function (t) {
              this.passiveEffect = t;
            }),
            (t.prototype.set = function (t, r) {
              void 0 === r && (r = !0),
                r && this.passiveEffect
                  ? this.passiveEffect(t, this.updateAndNotify)
                  : this.updateAndNotify(t, r);
            }),
            (t.prototype.get = function () {
              return this.current;
            }),
            (t.prototype.getPrevious = function () {
              return this.prev;
            }),
            (t.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? ae(
                    parseFloat(this.current) - parseFloat(this.prev),
                    this.timeDelta
                  )
                : 0;
            }),
            (t.prototype.start = function (t) {
              var r = this;
              return (
                this.stop(),
                new Promise(function (e) {
                  r.stopAnimation = t(e);
                }).then(function () {
                  return r.clearAnimation();
                })
              );
            }),
            (t.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (t.prototype.isAnimating = function () {
              return !!this.stopAnimation;
            }),
            (t.prototype.clearAnimation = function () {
              this.stopAnimation = null;
            }),
            (t.prototype.destroy = function () {
              this.updateSubscribers && this.updateSubscribers.clear(),
                this.renderSubscribers && this.renderSubscribers.clear(),
                this.stop();
            }),
            t
          );
        })();
      function mb(t) {
        return new Mf(t);
      }
      var oo = (function () {
        function t(t, r) {
          var e = this;
          (this.children = new Set()),
            (this.latest = {}),
            (this.values = new Map()),
            (this.valueSubscriptions = new Map()),
            (this.config = {}),
            (this.update = function () {
              return e.config.onUpdate(e.latest);
            }),
            (this.triggerRender = function () {
              return e.render();
            }),
            (this.scheduleRender = function () {
              return Ha.render(e.triggerRender, !1, !0);
            }),
            (this.ref = function (t) {
              t ? e.mount(t) : e.unmount(),
                e.externalRef &&
                  ('function' == typeof e.externalRef
                    ? e.externalRef(t)
                    : Di(e.externalRef) && (e.externalRef.current = t));
            }),
            (this.parent = t),
            (this.treePath = t ? Tc(t.treePath, [t]) : []),
            (this.depth = t ? t.depth + 1 : 0),
            (this.externalRef = r);
        }
        return (
          (t.prototype.subscribe = function (t) {
            var r = this;
            return (
              this.children.add(t),
              function () {
                return r.children.delete(t);
              }
            );
          }),
          (t.prototype.hasValue = function (t) {
            return this.values.has(t);
          }),
          (t.prototype.addValue = function (t, r) {
            this.hasValue(t) && this.removeValue(t),
              this.values.set(t, r),
              (this.latest[t] = r.get()),
              this.element && this.subscribeToValue(t, r);
          }),
          (t.prototype.removeValue = function (t) {
            var r = this.valueSubscriptions.get(t);
            r && r(),
              this.values.delete(t),
              delete this.latest[t],
              this.valueSubscriptions.delete(t);
          }),
          (t.prototype.getValue = function (t, r) {
            var e = this.values.get(t);
            return (
              void 0 === e &&
                void 0 !== r &&
                ((e = new Mf(r)), this.addValue(t, e)),
              e
            );
          }),
          (t.prototype.forEachValue = function (t) {
            this.values.forEach(t);
          }),
          (t.prototype.getInstance = function () {
            return this.element;
          }),
          (t.prototype.updateConfig = function (t) {
            void 0 === t && (t = {}), (this.config = ba({}, t));
          }),
          (t.prototype.setSingleStaticValue = function (t, r) {
            this.latest[t] = r;
          }),
          (t.prototype.setStaticValues = function (t, r) {
            if ('string' == typeof t) this.setSingleStaticValue(t, r);
            else for (var e in t) this.setSingleStaticValue(e, t[e]);
          }),
          (t.prototype.subscribeToValue = function (t, r) {
            var e = this,
              n = r.onChange(function (r) {
                e.setSingleStaticValue(t, r),
                  (e.latest[t] = r),
                  e.config.onUpdate && Ha.update(e.update, !1, !0);
              }),
              o = r.onRenderRequest(this.scheduleRender);
            this.valueSubscriptions.set(t, function () {
              n(), o();
            });
          }),
          (t.prototype.mount = function (t) {
            var r = this;
            Oa(
              !!t,
              'No ref found. Ensure components created with motion.custom forward refs using React.forwardRef'
            ),
              this.parent &&
                (this.removeFromParent = this.parent.subscribe(this)),
              (this.element = this.current = t),
              this.forEachValue(function (t, e) {
                return r.subscribeToValue(e, t);
              });
          }),
          (t.prototype.unmount = function () {
            var t = this;
            this.forEachValue(function (r, e) {
              return t.removeValue(e);
            }),
              kb.update(this.update),
              kb.render(this.render),
              this.removeFromParent && this.removeFromParent();
          }),
          t
        );
      })();
      function Uw(t) {
        return t;
      }
      function po(t) {
        var r = t.top;
        return {x: {min: t.left, max: t.right}, y: {min: r, max: t.bottom}};
      }
      function Vw(t) {
        var r = t.x,
          e = t.y;
        return {top: e.min, bottom: e.max, left: r.min, right: r.max};
      }
      function Ww(t, r) {
        var e = t.top,
          n = t.left,
          o = t.bottom,
          i = t.right;
        void 0 === r && (r = Uw);
        var a = r({x: n, y: e}),
          $ = r({x: i, y: o});
        return {top: a.y, left: a.x, bottom: $.y, right: $.x};
      }
      function Xw() {
        return {x: {min: 0, max: 1}, y: {min: 0, max: 1}};
      }
      function Ei(t) {
        return {x: ba({}, t.x), y: ba({}, t.y)};
      }
      var qo = {translate: 0, scale: 1, origin: 0, originPoint: 0};
      function ro() {
        return {x: ba({}, qo), y: ba({}, qo)};
      }
      var Yw = {
          test: function (t) {
            return 'auto' === t;
          },
          parse: function (t) {
            return t;
          },
        },
        so = ba(ba({}, la), {transform: Math.round}),
        Zw = {
          color: Ia,
          backgroundColor: Ia,
          outlineColor: Ia,
          fill: Ia,
          stroke: Ia,
          borderColor: Ia,
          borderTopColor: Ia,
          borderRightColor: Ia,
          borderBottomColor: Ia,
          borderLeftColor: Ia,
          borderWidth: da,
          borderTopWidth: da,
          borderRightWidth: da,
          borderBottomWidth: da,
          borderLeftWidth: da,
          borderRadius: da,
          radius: da,
          borderTopLeftRadius: da,
          borderTopRightRadius: da,
          borderBottomRightRadius: da,
          borderBottomLeftRadius: da,
          width: da,
          maxWidth: da,
          height: da,
          maxHeight: da,
          size: da,
          top: da,
          right: da,
          bottom: da,
          left: da,
          padding: da,
          paddingTop: da,
          paddingRight: da,
          paddingBottom: da,
          paddingLeft: da,
          margin: da,
          marginTop: da,
          marginRight: da,
          marginBottom: da,
          marginLeft: da,
          rotate: Kb,
          rotateX: Kb,
          rotateY: Kb,
          rotateZ: Kb,
          scale: Ff,
          scaleX: Ff,
          scaleY: Ff,
          scaleZ: Ff,
          skew: Kb,
          skewX: Kb,
          skewY: Kb,
          distance: da,
          translateX: da,
          translateY: da,
          translateZ: da,
          x: da,
          y: da,
          z: da,
          perspective: da,
          opacity: Td,
          originX: In,
          originY: In,
          originZ: da,
          zIndex: so,
          fillOpacity: Td,
          strokeOpacity: Td,
          numOctaves: so,
        },
        to = [la, da, sc, Kb, Hn, Gn, Yw],
        uo = function (t) {
          return function (r) {
            return r.test(t);
          };
        },
        Nf = function (t) {
          return to.find(uo(t));
        },
        $w = Tc(to, [Ia, lb]),
        _w = function (t) {
          return $w.find(uo(t));
        },
        vo = function (t) {
          return Zw[t];
        },
        ax = function (t, r) {
          return r && 'number' == typeof t ? r.transform(t) : t;
        },
        bx = ['', 'X', 'Y', 'Z'],
        cx = ['translate', 'scale', 'rotate', 'skew', 'transformPerspective'],
        ce = ['x', 'y', 'z'];
      function dx(t, r) {
        return ce.indexOf(t) - ce.indexOf(r);
      }
      cx.forEach(function (t) {
        bx.forEach(function (r) {
          return ce.push(t + r);
        });
      });
      var ex = new Set(ce);
      function de(t) {
        return ex.has(t);
      }
      var fx = new Set(['originX', 'originY', 'originZ']);
      function Fi(t) {
        return fx.has(t);
      }
      var gx = {x: 'translateX', y: 'translateY', z: 'translateZ'};
      function hx(t, r, e, n, o, i) {
        void 0 === o && (o = !0), void 0 === i && (i = !0);
        var a = '',
          $ = !1;
        r.sort(dx);
        for (var s = r.length, f = 0; f < s; f++) {
          var u = r[f];
          (a += (gx[u] || u) + '(' + t[u] + ') '), 'z' === u && ($ = !0);
        }
        return (
          !$ && o ? (a += 'translateZ(0)') : (a = a.trim()),
          e ? (a = e(t, n ? '' : a)) : i && n && (a = 'none'),
          a
        );
      }
      function ix(t) {
        return t.startsWith('--');
      }
      function wo(t, r) {
        return (t / (r.max - r.min)) * 100;
      }
      function jx(t, r) {
        return 'number' != typeof t ? t : wo(t, r.x) + '% ' + wo(t, r.y) + '%';
      }
      function kx(t, r, e, n) {
        var o = lb.parse(t),
          i = lb.createTransformer(t),
          a = e.x.scale * n.x,
          $ = e.y.scale * n.y;
        (o[1] /= a), (o[2] /= $);
        var s = ya(a, $, 0.5);
        return (
          'number' == typeof o[3] && (o[3] /= s),
          'number' == typeof o[4] && (o[4] /= s),
          i(o)
        );
      }
      var ee = {process: jx},
        Gi = {
          borderRadius: ba(ba({}, ee), {
            applyTo: [
              'borderTopLeftRadius',
              'borderTopRightRadius',
              'borderBottomLeftRadius',
              'borderBottomRightRadius',
            ],
          }),
          borderTopLeftRadius: ee,
          borderTopRightRadius: ee,
          borderBottomLeftRadius: ee,
          borderBottomRightRadius: ee,
          boxShadow: {process: kx},
        };
      function xo(t, r, e, n, o, i, a, $, s, f, u, l) {
        var p = a.enableHardwareAcceleration,
          c = a.transformTemplate,
          v = a.allowTransformNone;
        i.length = 0;
        var S = !!$,
          m = !!$,
          d = !0;
        for (var U in t) {
          var J = t[U],
            h = vo(U),
            g = ax(J, h);
          if (de(U)) {
            if (((S = !0), (n[U] = g), i.push(U), !d)) continue;
            J !== (void 0 !== h.default ? h.default : 0) && (d = !1);
          } else if (Fi(U)) (o[U] = g), (m = !0);
          else if ('transform' !== U || 'function' != typeof J) {
            var y = ix(U) ? e : r;
            if ($ && Gi[U]) {
              var x = Gi[U].process(J, l, s, u),
                P = Gi[U].applyTo;
              if (P) for (var C = P.length, E = 0; E < C; E++) y[P[E]] = x;
              else y[U] = x;
            } else y[U] = g;
          }
        }
        if (
          ((S || c) && (r.transform = $ ? lx(f, u) : hx(n, i, c, d, p, v)), m)
        ) {
          var b = $ ? 100 * f.x.origin + '%' : o.originX || '50%',
            V = $ ? 100 * f.y.origin + '%' : o.originY || '50%',
            T = o.originZ || '0';
          r.transformOrigin = b + ' ' + V + ' ' + T;
        }
      }
      function lx(t, r) {
        return (
          'translate3d(' +
          t.x.translate / r.x +
          'px, ' +
          t.y.translate / r.y +
          'px, 0) scale(' +
          t.x.scale +
          ', ' +
          t.y.scale +
          ')'
        );
      }
      function yo(t, r) {
        (t.min = r.min), (t.max = r.max);
      }
      function mx(t, r) {
        yo(t.x, r.x), yo(t.y, r.y);
      }
      function Of(t, r, e) {
        return e + r * (t - e);
      }
      function zo(t, r, e, n, o) {
        return void 0 !== o && (t = Of(t, o, n)), Of(t, e, n) + r;
      }
      function Hi(t, r, e, n, o) {
        void 0 === r && (r = 0),
          void 0 === e && (e = 1),
          (t.min = zo(t.min, r, e, n, o)),
          (t.max = zo(t.max, r, e, n, o));
      }
      function nx(t, r) {
        var e = r.x,
          n = r.y;
        Hi(t.x, e.translate, e.scale, e.originPoint),
          Hi(t.y, n.translate, n.scale, n.originPoint);
      }
      function Ao(t, r, e, n) {
        var o = n[0],
          i = n[1],
          a = n[2];
        (t.min = r.min), (t.max = r.max);
        var $ = ya(r.min, r.max, e[a] || 0.5);
        Hi(t, e[o], e[i], $, e.scale);
      }
      var Bo = ['x', 'scaleX', 'originX'],
        Co = ['y', 'scaleY', 'originY'];
      function ox(t, r, e) {
        Ao(t.x, r.x, e, Bo), Ao(t.y, r.y, e, Co);
      }
      function Do(t, r, e, n, o) {
        return (
          (t = Of((t -= r), 1 / e, n)), void 0 !== o && (t = Of(t, 1 / o, n)), t
        );
      }
      function px(t, r, e, n, o) {
        void 0 === r && (r = 0),
          void 0 === e && (e = 1),
          void 0 === n && (n = 0.5);
        var i = ya(t.min, t.max, n) - r;
        (t.min = Do(t.min, r, e, i, o)), (t.max = Do(t.max, r, e, i, o));
      }
      function Eo(t, r, e) {
        var n = e[0],
          o = e[1],
          i = e[2];
        px(t, r[n], r[o], r[i], r.scale);
      }
      function qx(t, r) {
        Eo(t.x, r, Bo), Eo(t.y, r, Co);
      }
      function rx(t, r, e) {
        r.x = r.y = 1;
        for (var n = e.length, o = 0; o < n; o++) {
          var i = e[o].delta;
          nx(t, i), (r.x *= i.x.scale), (r.y *= i.y.scale);
        }
      }
      var sx = _d(0, 1);
      function Fo(t, r, e) {
        return (
          void 0 === r && (r = 0), void 0 === e && (e = 0.01), Wn(t, r) < e
        );
      }
      function tx(t, r, e) {
        var n = ya(t.min, t.max, e);
        return ya(r.min, r.max, e) - n;
      }
      function Go(t, r) {
        var e = 0.5,
          n = t.max - t.min,
          o = r.max - r.min;
        return (
          o > n
            ? (e = Xc(r.min, r.max - n, t.min))
            : n > o && (e = Xc(t.min, t.max - o, r.min)),
          sx(e)
        );
      }
      function Ho(t, r, e, n) {
        var o = r.max - r.min,
          i = e.max - e.min;
        (t.origin = void 0 === n ? Go(r, e) : n),
          (t.originPoint = ya(r.min, r.max, t.origin)),
          (t.scale = i / o),
          Fo(t.scale, 1, 1e-4) && (t.scale = 1),
          (t.translate = tx(r, e, t.origin)),
          Fo(t.translate) && (t.translate = 0);
      }
      function Io(t, r, e, n) {
        Ho(t.x, r.x, e.x, n), Ho(t.y, r.y, e.y, n);
      }
      function tc(t) {
        return [t('x'), t('y')];
      }
      var fe = function (t) {
          return Array.isArray(t);
        },
        uc = function () {
          return {
            type: 'spring',
            stiffness: 500,
            damping: 25,
            restDelta: 0.5,
            restSpeed: 10,
          };
        },
        Pf = function (t) {
          return {
            type: 'spring',
            stiffness: 700,
            damping: 0 === t ? 100 : 35,
          };
        },
        Ii = function () {
          return {ease: 'linear', duration: 0.3};
        },
        ux = function (t) {
          return {type: 'keyframes', duration: 0.8, values: t};
        },
        Jo = {
          x: uc,
          y: uc,
          z: uc,
          rotate: uc,
          rotateX: uc,
          rotateY: uc,
          rotateZ: uc,
          scaleX: Pf,
          scaleY: Pf,
          scale: Pf,
          opacity: Ii,
          backgroundColor: Ii,
          color: Ii,
          default: Pf,
        },
        vx = function (t, r) {
          var e;
          return (e = fe(r) ? ux : Jo[t] || Jo.default), ba({to: r}, e(r));
        },
        Ko = function (t) {
          var r = t.to,
            e = t.duration;
          return yb(function (t) {
            var n = t.update,
              o = t.complete;
            n(r), e ? mo(e).start({complete: o}) : o();
          });
        },
        Ji = function (t) {
          if (Array.isArray(t)) {
            Oa(
              4 === t.length,
              'Cubic bezier arrays must contain four numerical values.'
            );
            var r = t[0],
              e = t[1],
              n = t[2],
              o = t[3];
            return Un(r, e, n, o);
          }
          return 'string' == typeof t
            ? (Oa(void 0 !== ma[t], "Invalid easing type '" + t + "'"), ma[t])
            : t;
        },
        Lo = function (t) {
          return Array.isArray(t) && 'number' != typeof t[0];
        },
        wx = function (t) {
          return (
            t.hasOwnProperty('duration') || t.hasOwnProperty('repeatDelay')
          );
        },
        Mo = function (t, r) {
          return (
            'zIndex' !== t &&
            (!('number' != typeof r && !Array.isArray(r)) ||
              !('string' != typeof r || !lb.test(r) || r.startsWith('url(')))
          );
        },
        Qf = function (t) {
          return 1e3 * t;
        },
        xx = {tween: ho, spring: go, keyframes: Mw, inertia: Fw, just: Ko},
        No = {
          tween: function (t) {
            if (t.ease) {
              var r = Lo(t.ease) ? t.ease[0] : t.ease;
              t.ease = Ji(r);
            }
            return t;
          },
          keyframes: function (t) {
            var r = t.from,
              e = (t.to, t.velocity, xa(t, ['from', 'to', 'velocity']));
            if (e.values && null === e.values[0]) {
              var n = Tc(e.values);
              (n[0] = r), (e.values = n);
            }
            return (
              e.ease && (e.easings = Lo(e.ease) ? e.ease.map(Ji) : Ji(e.ease)),
              (e.ease = Zd),
              e
            );
          },
        },
        yx = function (t) {
          t.when,
            t.delay,
            t.delayChildren,
            t.staggerChildren,
            t.staggerDirection;
          var r = xa(t, [
            'when',
            'delay',
            'delayChildren',
            'staggerChildren',
            'staggerDirection',
          ]);
          return Object.keys(r).length;
        },
        zx = function (t, r, e) {
          var n = e ? e.delay : 0;
          if (void 0 === e || !yx(e)) return ba({delay: n}, vx(t, r));
          var o = e[t] || e.default || e;
          return !1 === o.type
            ? {
                delay: o.hasOwnProperty('delay') ? o.delay : n,
                to: fe(r) ? r[r.length - 1] : r,
                type: 'just',
              }
            : fe(r)
            ? ba(ba({values: r, duration: 0.8, delay: n, ease: 'linear'}, o), {
                type: 'keyframes',
              })
            : ba({type: 'tween', to: r, delay: n}, o);
        },
        Ax = function (t, r) {
          return No[t] ? No[t](r) : r;
        },
        Bx = function (t, r, e, n) {
          var o = r.get(),
            i = Mo(t, o),
            a = Mo(t, e);
          xv(
            i === a,
            'You are trying to animate ' +
              t +
              ' from "' +
              o +
              '" to "' +
              e +
              '". ' +
              o +
              ' is not an animatable value - to enable this animation set ' +
              o +
              ' to a value animatable to ' +
              e +
              ' via the `style` property.'
          );
          var $ = zx(t, e, n),
            s = $.type,
            f = void 0 === s ? 'tween' : s,
            u = xa($, ['type']),
            l = i && a ? xx[f] : Ko,
            p = Ax(f, ba({from: o, velocity: r.getVelocity()}, u));
          return (
            wx(p) &&
              (p.duration && (p.duration = Qf(p.duration)),
              p.repeatDelay && (p.repeatDelay = Qf(p.repeatDelay))),
            [l, p]
          );
        };
      function Ki(t, r, e, n) {
        void 0 === n && (n = {});
        var o = n.delay,
          i = void 0 === o ? 0 : o,
          a = xa(n, ['delay']);
        return r.start(function (n) {
          var o,
            $ = Bx(t, r, e, a),
            s = $[0],
            f = $[1],
            u = f.delay,
            l = xa(f, ['delay']);
          void 0 !== u && (i = u);
          var p = function () {
            var t = s(l);
            o = t.start({
              update: function (t) {
                return r.set(t);
              },
              complete: n,
            });
          };
          return (
            i ? (o = mo(Qf(i)).start({complete: p})) : p(),
            function () {
              o && o.stop();
            }
          );
        });
      }
      function Oo(t, r) {
        return po(Ww(t.getBoundingClientRect(), r));
      }
      var Po = (function (t) {
        function r() {
          var r = (null !== t && t.apply(this, arguments)) || this;
          return (
            (r.defaultConfig = {
              enableHardwareAcceleration: !0,
              allowTransformNone: !0,
            }),
            (r.style = {}),
            (r.reactStyle = {}),
            (r.vars = {}),
            (r.transform = {}),
            (r.transformOrigin = {}),
            (r.transformKeys = []),
            (r.config = r.defaultConfig),
            (r.isLayoutProjectionEnabled = !1),
            (r.hasLayoutChildren = !1),
            (r.layoutUpdateListeners = new Set()),
            (r.hasViewportBoxUpdated = !1),
            (r.targetBoxFinal = Xw()),
            (r.treeScale = {x: 1, y: 1}),
            (r.delta = ro()),
            (r.deltaFinal = ro()),
            (r.stopLayoutAxisAnimation = {
              x: function () {},
              y: function () {},
            }),
            (r.isTargetBoxLocked = !1),
            (r.axisProgress = {x: mb(0), y: mb(0)}),
            r
          );
        }
        return (
          Jb(r, t),
          (r.prototype.removeValue = function (r) {
            t.prototype.removeValue.call(this, r),
              delete this.vars[r],
              delete this.style[r];
          }),
          (r.prototype.clean = function () {
            (this.style = {}), (this.vars = {}), (this.transform = {});
          }),
          (r.prototype.updateConfig = function (t) {
            void 0 === t && (t = {}),
              (this.config = ba(ba({}, this.defaultConfig), t));
          }),
          (r.prototype.read = function (t) {
            return this.getComputedStyle()[t] || 0;
          }),
          (r.prototype.readNativeValue = function (t) {
            if (de(t)) {
              var r = vo(t);
              return (r && r.default) || 0;
            }
            return this.read(t);
          }),
          (r.prototype.enableLayoutProjection = function () {
            (this.isLayoutProjectionEnabled = !0),
              Cx(this, function (t) {
                return (t.hasLayoutChildren = !0);
              });
          }),
          (r.prototype.hide = function () {
            !1 !== this.isVisible &&
              ((this.isVisible = !1), this.scheduleRender());
          }),
          (r.prototype.show = function () {
            !0 !== this.isVisible &&
              ((this.isVisible = !0), this.scheduleRender());
          }),
          (r.prototype.onLayoutUpdate = function (t) {
            var r = this;
            return (
              this.layoutUpdateListeners.add(t),
              function () {
                return r.layoutUpdateListeners.delete(t);
              }
            );
          }),
          (r.prototype.layoutReady = function (t) {
            var r = this;
            this.layoutUpdateListeners.forEach(function (e) {
              e(r.box, r.prevViewportBox || r.box, t);
            });
          }),
          (r.prototype.getBoundingBox = function () {
            var t = this.config.transformPagePoint;
            return Oo(this.element, t);
          }),
          (r.prototype.getBoundingBoxWithoutTransforms = function () {
            var t = this.getBoundingBox();
            return qx(t, this.latest), t;
          }),
          (r.prototype.getComputedStyle = function () {
            return window.getComputedStyle(this.element);
          }),
          (r.prototype.snapshotBoundingBox = function () {
            this.prevViewportBox = this.getBoundingBoxWithoutTransforms();
            var t = this.axisProgress,
              r = t.x,
              e = t.y;
            this.isTargetBoxLocked ||
              r.isAnimating() ||
              e.isAnimating() ||
              (this.targetBox = Ei(this.prevViewportBox));
          }),
          (r.prototype.measureLayout = function () {
            (this.box = this.getBoundingBox()),
              (this.boxCorrected = Ei(this.box)),
              this.targetBox || (this.targetBox = Ei(this.box));
          }),
          (r.prototype.refreshTargetBox = function () {
            this.targetBox = this.getBoundingBoxWithoutTransforms();
          }),
          (r.prototype.lockTargetBox = function () {
            this.isTargetBoxLocked = !0;
          }),
          (r.prototype.unlockTargetBox = function () {
            this.stopLayoutAnimation(), (this.isTargetBoxLocked = !1);
          }),
          (r.prototype.resetTransform = function () {
            (this.element.style.transform = 'none'), this.scheduleRender();
          }),
          (r.prototype.setAxisTarget = function (t, r, e) {
            var n = this.targetBox[t];
            (n.min = r),
              (n.max = e),
              (this.hasViewportBoxUpdated = !0),
              Qo(this);
          }),
          (r.prototype.startLayoutAxisAnimation = function (t, r) {
            var e = this,
              n = this.axisProgress[t],
              o = this.targetBox[t],
              i = o.min,
              a = o.max - i;
            return (
              n.clearListeners(),
              n.set(i),
              n.set(i),
              n.onChange(function (r) {
                return e.setAxisTarget(t, r, r + a);
              }),
              Ki(t, n, 0, r)
            );
          }),
          (r.prototype.stopLayoutAnimation = function () {
            var t = this;
            tc(function (r) {
              return t.axisProgress[r].stop();
            });
          }),
          (r.prototype.updateLayoutDeltas = function (t) {
            var r, e;
            this.treePath.forEach(function (r) {
              return r.updateLayoutDeltas(t);
            }),
              this.isLayoutProjectionEnabled &&
                this.box &&
                (mx(this.boxCorrected, this.box),
                rx(this.boxCorrected, this.treeScale, this.treePath),
                ox(this.targetBoxFinal, this.targetBox, this.latest),
                Io(this.delta, this.boxCorrected, this.targetBox),
                Io(this.deltaFinal, this.boxCorrected, this.targetBoxFinal),
                t ||
                  (this.hasViewportBoxUpdated &&
                    (null === (e = (r = this.config).onViewportBoxUpdate) ||
                      void 0 === e ||
                      e.call(r, this.targetBox, this.delta)),
                  (this.hasViewportBoxUpdated = !1)));
          }),
          (r.prototype.build = function (t) {
            void 0 !== this.isVisible &&
              (this.style.visibility = this.isVisible ? 'visible' : 'hidden'),
              this.isLayoutProjectionEnabled &&
                this.box &&
                this.updateLayoutDeltas(t),
              xo(
                this.latest,
                this.style,
                this.vars,
                this.transform,
                this.transformOrigin,
                this.transformKeys,
                this.config,
                this.isLayoutProjectionEnabled && !!this.box,
                this.delta,
                this.deltaFinal,
                this.treeScale,
                this.targetBoxFinal
              );
          }),
          (r.prototype.render = function () {
            for (var t in (this.build(!1),
            Object.assign(this.element.style, this.style),
            this.vars))
              this.element.style.setProperty(t, this.vars[t]);
          }),
          r
        );
      })(oo);
      function Qo(t) {
        t.isLayoutProjectionEnabled && t.scheduleRender(),
          t.hasLayoutChildren && t.children.forEach(Qo);
      }
      function Cx(t, r) {
        for (var e = t.parent; e; ) r(e), (e = e.parent);
      }
      function ge(t) {
        var r = aa.useRef(null);
        return null === r.current && (r.current = t()), r.current;
      }
      function Ro(t, r, e) {
        return 'string' == typeof t ? t : da.transform(r + e * t);
      }
      function Dx(t, r, e) {
        return Ro(r, t.x, t.width) + ' ' + Ro(e, t.y, t.height);
      }
      var Li = function (t, r) {
          return da.transform(t * r);
        },
        Ex = {offset: 'stroke-dashoffset', array: 'stroke-dasharray'},
        Fx = {offset: 'strokeDashoffset', array: 'strokeDasharray'};
      function Gx(t, r, e, n, o, i) {
        void 0 === n && (n = 1),
          void 0 === o && (o = 0),
          void 0 === i && (i = !0);
        var a = i ? Ex : Fx;
        t[a.offset] = Li(-o, r);
        var $ = Li(e, r),
          s = Li(n, r);
        t[a.array] = $ + ' ' + s;
      }
      var Hx = {x: 0, y: 0, width: 0, height: 0};
      function Ix(t, r, e, n, o, i, a, $, s, f) {
        var u = t.attrX,
          l = t.attrY,
          p = t.originX,
          c = t.originY,
          v = t.pathLength,
          S = t.pathSpacing,
          m = void 0 === S ? 1 : S,
          d = t.pathOffset,
          U = void 0 === d ? 0 : d;
        return (
          xo(
            xa(t, [
              'attrX',
              'attrY',
              'originX',
              'originY',
              'pathLength',
              'pathSpacing',
              'pathOffset',
            ]),
            n,
            e,
            o,
            i,
            a,
            $
          ),
          n.transform && ((r.transform = n.transform), delete n.transform),
          (void 0 !== p || void 0 !== c || r.transform) &&
            (r.transformOrigin = Dx(
              s || Hx,
              void 0 !== p ? p : 0.5,
              void 0 !== c ? c : 0.5
            )),
          void 0 !== u && (n.x = u),
          void 0 !== l && (n.y = l),
          void 0 !== f && void 0 !== v && Gx(n, f, v, m, U, !1),
          n
        );
      }
      var Jx = new Set([
          'baseFrequency',
          'diffuseConstant',
          'kernelMatrix',
          'kernelUnitLength',
          'keySplines',
          'keyTimes',
          'limitingConeAngle',
          'markerHeight',
          'markerWidth',
          'numOctaves',
          'targetX',
          'targetY',
          'surfaceScale',
          'specularConstant',
          'specularExponent',
          'stdDeviation',
          'tableValues',
        ]),
        Kx = /([a-z])([A-Z])/g,
        Lx = '$1-$2',
        So = function (t) {
          return t.replace(Kx, Lx).toLowerCase();
        },
        Mx = (function (t) {
          function r() {
            var r = (null !== t && t.apply(this, arguments)) || this;
            return (
              (r.attrs = {}),
              (r.defaultConfig = {enableHardwareAcceleration: !1}),
              (r.config = r.defaultConfig),
              r
            );
          }
          return (
            Jb(r, t),
            (r.prototype.mount = function (r) {
              t.prototype.mount.call(this, r), this.measure();
            }),
            (r.prototype.measure = function () {
              try {
                this.dimensions =
                  'function' == typeof this.element.getBBox
                    ? this.element.getBBox()
                    : this.element.getBoundingClientRect();
              } catch (t) {
                this.dimensions = {x: 0, y: 0, width: 0, height: 0};
              }
              Nx(this.element) &&
                (this.totalPathLength = this.element.getTotalLength());
            }),
            (r.prototype.clean = function () {
              t.prototype.clean.call(this), (this.attrs = {});
            }),
            (r.prototype.read = function (t) {
              return (t = Jx.has(t) ? t : So(t)), this.element.getAttribute(t);
            }),
            (r.prototype.build = function () {
              Ix(
                this.latest,
                this.style,
                this.vars,
                this.attrs,
                this.transform,
                this.transformOrigin,
                this.transformKeys,
                this.config,
                this.dimensions,
                this.totalPathLength
              );
            }),
            (r.prototype.render = function () {
              for (var r in (t.prototype.render.call(this), this.attrs))
                this.element.setAttribute(So(r), this.attrs[r]);
            }),
            r
          );
        })(Po);
      function Nx(t) {
        return 'path' === t.tagName;
      }
      var Ox = [
          'animate',
          'circle',
          'clipPath',
          'defs',
          'desc',
          'ellipse',
          'feBlend',
          'feColorMatrix',
          'feComponentTransfer',
          'feComposite',
          'feConvolveMatrix',
          'feDiffuseLighting',
          'feDisplacementMap',
          'feDistantLight',
          'feDropShadow',
          'feFlood',
          'feFuncA',
          'feFuncB',
          'feFuncG',
          'feFuncR',
          'feGaussianBlur',
          'feImage',
          'feMerge',
          'feMergeNode',
          'feMorphology',
          'feOffset',
          'fePointLight',
          'feSpecularLighting',
          'feSpotLight',
          'feTile',
          'feTurbulence',
          'filter',
          'foreignObject',
          'g',
          'image',
          'line',
          'linearGradient',
          'marker',
          'mask',
          'metadata',
          'path',
          'pattern',
          'polygon',
          'polyline',
          'radialGradient',
          'rect',
          'stop',
          'svg',
          'switch',
          'symbol',
          'text',
          'textPath',
          'tspan',
          'use',
          'view',
        ],
        Px = new Set(Ox);
      function To(t) {
        return 'string' == typeof t && Px.has(t);
      }
      var he = aa.createContext(null);
      function Uo() {
        var t = aa.useContext(he);
        if (null === t) return [!0, null];
        var r = t.isPresent,
          e = t.onExitComplete,
          n = t.register,
          o = Tx();
        aa.useEffect(function () {
          return n(o);
        }, []);
        return !r && e
          ? [
              !1,
              function () {
                return null == e ? void 0 : e(o);
              },
            ]
          : [!0];
      }
      function Qx() {
        var t = aa.useContext(he);
        return null === t || t.isPresent;
      }
      var Rx = 0,
        Sx = function () {
          return Rx++;
        },
        Tx = function () {
          return ge(Sx);
        },
        Ux = function (t, r, e, n, o) {
          var i = ge(function () {
            return new (To(t) ? Mx : Po)(e, o);
          });
          i.updateConfig(ba({enableHardwareAcceleration: !n}, r)),
            (i.layoutId = r.layoutId);
          var a = Qx();
          return (i.isPresent = void 0 !== r.isPresent ? r.isPresent : a), i;
        },
        Vx = new Set([
          'initial',
          'animate',
          'exit',
          'style',
          'variants',
          'transition',
          'transformTemplate',
          'transformValues',
          'custom',
          'inherit',
          'static',
          'layout',
          'layoutId',
          'onLayoutAnimationComplete',
          'onViewportBoxUpdate',
          'onAnimationStart',
          'onAnimationComplete',
          'onUpdate',
          'onDragStart',
          'onDrag',
          'onDragEnd',
          'onMeasureDragConstraints',
          'onDirectionLock',
          'onDragTransitionEnd',
          'drag',
          'dragControls',
          'dragListener',
          'dragConstraints',
          'dragDirectionLock',
          'dragElastic',
          'dragMomentum',
          'dragPropagation',
          'dragTransition',
          'onPan',
          'onPanStart',
          'onPanEnd',
          'onPanSessionStart',
          'onTap',
          'onTapStart',
          'onTapCancel',
          'whileHover',
          'whileTap',
          'onHoverEnd',
          'onHoverStart',
        ]);
      function Vo(t) {
        return Vx.has(t);
      }
      var Wx = function (t) {
        return !Vo(t);
      };
      try {
        var Xx = (Ci(), no).default;
        Wx = function (t) {
          return t.startsWith('on') ? !Vo(t) : Xx(t);
        };
      } catch (_a) {}
      function Yx(t) {
        var r = {};
        for (var e in t) Wx(e) && (r[e] = t[e]);
        return r;
      }
      function Zx(t, r) {
        var e = r.drag,
          n = {style: ba(ba(ba({}, t.reactStyle), t.style), t.vars)};
        return e && ((n.style.userSelect = 'none'), (n.draggable = !1)), n;
      }
      function $x(t) {
        return ba(ba({}, t.attrs), {style: ba({}, t.reactStyle)});
      }
      function _x(t, r, e) {
        var n = 'string' == typeof t ? Yx(r) : r;
        e.clean(), e.build(!0);
        var o = To(t) ? $x(e) : Zx(e, r);
        return aa.createElement(t, ba(ba(ba({}, n), {ref: e.ref}), o));
      }
      function Mi(t) {
        return 'string' == typeof t && t.startsWith('var(--');
      }
      var ay = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function by(t) {
        var r = ay.exec(t);
        return r ? [r[1], r[2]] : [,];
      }
      var cy = 4;
      function Ni(t, r, e) {
        void 0 === e && (e = 1),
          Oa(
            e <= cy,
            'Max CSS variable fallback depth detected in property "' +
              t +
              '". This may indicate a circular fallback dependency.'
          );
        var n = by(t),
          o = n[0],
          i = n[1];
        if (o) {
          var a = window.getComputedStyle(r).getPropertyValue(o);
          return a || (Mi(i) ? Ni(i, r, e + 1) : i);
        }
      }
      function dy(t, r, e) {
        var n = xa(r, []),
          o = t.getInstance();
        if (!(o instanceof HTMLElement)) return {target: n, transitionEnd: e};
        for (var i in (e && (e = ba({}, e)),
        t.forEachValue(function (t) {
          var r = t.get();
          if (Mi(r)) {
            var e = Ni(r, o);
            e && t.set(e);
          }
        }),
        n)) {
          var a = n[i];
          if (Mi(a)) {
            var $ = Ni(a, o);
            $ && ((n[i] = $), e && void 0 === e[i] && (e[i] = a));
          }
        }
        return {target: n, transitionEnd: e};
      }
      var ey,
        fy = new Set([
          'width',
          'height',
          'top',
          'left',
          'right',
          'bottom',
          'x',
          'y',
        ]),
        Wo = function (t) {
          return fy.has(t);
        },
        gy = function (t) {
          return Object.keys(t).some(Wo);
        },
        Xo = function (t, r) {
          t.set(r, !1), t.set(r);
        },
        Rf = function (t) {
          return t === la || t === da;
        };
      !(function (t) {
        (t.width = 'width'),
          (t.height = 'height'),
          (t.left = 'left'),
          (t.right = 'right'),
          (t.top = 'top'),
          (t.bottom = 'bottom');
      })(ey || (ey = {}));
      var Yo = function (t, r) {
          return parseFloat(t.split(', ')[r]);
        },
        Zo = function (t, r) {
          return function (e, n) {
            var o = n.transform;
            if ('none' === o || !o) return 0;
            var i = o.match(/^matrix3d\((.+)\)$/);
            if (i) return Yo(i[1], r);
            var a = o.match(/^matrix\((.+)\)$/);
            return a ? Yo(a[1], t) : 0;
          };
        },
        hy = new Set(['x', 'y', 'z']),
        iy = ce.filter(function (t) {
          return !hy.has(t);
        });
      function jy(t) {
        var r = [];
        return (
          iy.forEach(function (e) {
            var n = t.getValue(e);
            void 0 !== n &&
              (r.push([e, n.get()]), n.set(e.startsWith('scale') ? 1 : 0));
          }),
          r.length && t.render(),
          r
        );
      }
      var $o = {
          width: function (t) {
            var r = t.x;
            return r.max - r.min;
          },
          height: function (t) {
            var r = t.y;
            return r.max - r.min;
          },
          top: function (t, r) {
            var e = r.top;
            return parseFloat(e);
          },
          left: function (t, r) {
            var e = r.left;
            return parseFloat(e);
          },
          bottom: function (t, r) {
            var e = t.y,
              n = r.top;
            return parseFloat(n) + (e.max - e.min);
          },
          right: function (t, r) {
            var e = t.x,
              n = r.left;
            return parseFloat(n) + (e.max - e.min);
          },
          x: Zo(4, 13),
          y: Zo(5, 14),
        },
        ky = function (t, r, e) {
          var n = r.getBoundingBox(),
            o = r.getComputedStyle(),
            i = o.display,
            a = {
              top: o.top,
              left: o.left,
              bottom: o.bottom,
              right: o.right,
              transform: o.transform,
            };
          'none' === i && r.setStaticValues('display', t.display || 'block'),
            r.render();
          var $ = r.getBoundingBox();
          return (
            e.forEach(function (e) {
              var i = r.getValue(e);
              Xo(i, $o[e](n, a)), (t[e] = $o[e]($, o));
            }),
            t
          );
        },
        ly = function (t, r, e, n) {
          void 0 === e && (e = {}),
            void 0 === n && (n = {}),
            (r = ba({}, r)),
            (n = ba({}, n));
          var o = Object.keys(r).filter(Wo),
            i = [],
            a = !1,
            $ = [];
          if (
            (o.forEach(function (o) {
              var s = t.getValue(o);
              if (t.hasValue(o)) {
                var f,
                  u = e[o],
                  l = r[o],
                  p = Nf(u);
                if (fe(l))
                  for (var c = l.length, v = null === l[0] ? 1 : 0; v < c; v++)
                    f
                      ? Oa(
                          Nf(l[v]) === f,
                          'All keyframes must be of the same type'
                        )
                      : ((f = Nf(l[v])),
                        Oa(
                          f === p || (Rf(p) && Rf(f)),
                          'Keyframes must be of the same dimension as the current value'
                        ));
                else f = Nf(l);
                if (p !== f)
                  if (Rf(p) && Rf(f)) {
                    var S = s.get();
                    'string' == typeof S && s.set(parseFloat(S)),
                      'string' == typeof l
                        ? (r[o] = parseFloat(l))
                        : Array.isArray(l) &&
                          f === da &&
                          (r[o] = l.map(parseFloat));
                  } else
                    a || ((i = jy(t)), (a = !0)),
                      $.push(o),
                      (n[o] = void 0 !== n[o] ? n[o] : r[o]),
                      Xo(s, l);
              }
            }),
            $.length)
          ) {
            var s = ky(r, t, $);
            return (
              i.length &&
                i.forEach(function (r) {
                  var e = r[0],
                    n = r[1];
                  t.getValue(e).set(n);
                }),
              t.render(),
              {target: s, transitionEnd: n}
            );
          }
          return {target: r, transitionEnd: n};
        };
      function my(t, r, e, n) {
        return gy(r) ? ly(t, r, e, n) : {target: r, transitionEnd: n};
      }
      var ny = function (t, r, e, n) {
        var o = dy(t, r, n);
        return my(t, (r = o.target), e, (n = o.transitionEnd));
      };
      function oy(t, r) {
        void 0 === r && (r = !1);
        var e = aa.useRef(!0);
        (!r || (r && e.current)) && t(), (e.current = !1);
      }
      var Sf = (function () {
          function t() {
            (this.hasMounted = !1),
              (this.pendingAnimations = []),
              (this.componentControls = new Set());
          }
          return (
            (t.prototype.setVariants = function (t) {
              (this.variants = t),
                this.componentControls.forEach(function (r) {
                  return r.setVariants(t);
                });
            }),
            (t.prototype.setDefaultTransition = function (t) {
              (this.defaultTransition = t),
                this.componentControls.forEach(function (r) {
                  return r.setDefaultTransition(t);
                });
            }),
            (t.prototype.subscribe = function (t) {
              var r = this;
              return (
                this.componentControls.add(t),
                this.variants && t.setVariants(this.variants),
                this.defaultTransition &&
                  t.setDefaultTransition(this.defaultTransition),
                function () {
                  return r.componentControls.delete(t);
                }
              );
            }),
            (t.prototype.start = function (t, r) {
              var e = this;
              if (this.hasMounted) {
                var n = [];
                return (
                  this.componentControls.forEach(function (e) {
                    var o = e.start(t, {transitionOverride: r});
                    n.push(o);
                  }),
                  Promise.all(n)
                );
              }
              return new Promise(function (n) {
                e.pendingAnimations.push({animation: [t, r], resolve: n});
              });
            }),
            (t.prototype.set = function (t) {
              return (
                Oa(
                  this.hasMounted,
                  'controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.'
                ),
                this.componentControls.forEach(function (r) {
                  return r.apply(t);
                })
              );
            }),
            (t.prototype.stop = function () {
              this.componentControls.forEach(function (t) {
                return t.stop();
              });
            }),
            (t.prototype.mount = function () {
              var t = this;
              (this.hasMounted = !0),
                this.pendingAnimations.forEach(function (r) {
                  var e = r.animation,
                    n = r.resolve;
                  return t.start.apply(t, e).then(n);
                });
            }),
            (t.prototype.unmount = function () {
              (this.hasMounted = !1), this.stop();
            }),
            t
          );
        })(),
        Tf = aa.createContext({static: !1}),
        Yc = function (t) {
          return 'string' == typeof t || Array.isArray(t);
        },
        _o = function (t) {
          return t instanceof Sf;
        },
        py = function (t, r, e, n, o) {
          void 0 === n && (n = !1);
          var i,
            a = o.initial,
            $ = o.animate,
            s = o.variants,
            f = o.whileTap,
            u = o.whileHover,
            l = o.layoutId,
            p = aa.useContext(he),
            c = null == p ? void 0 : p.id;
          (e.isPresenceRoot = t.presenceId !== c),
            void 0 !== (null == p ? void 0 : p.initial) && (a = p.initial),
            !1 !== a || _o($) ? 'boolean' != typeof a && (i = a) : (i = $);
          var v = aa.useRef(!1),
            S = s || Yc($) || Yc(f) || Yc(u) || _o($),
            m = Yc(i) ? i : t.initial,
            d = Yc($) ? $ : t.animate,
            U = n ? m : null,
            J = S && Yc(d) ? d : null,
            h = aa.useMemo(
              function () {
                return {
                  controls: S ? r : t.controls,
                  initial: m,
                  animate: d,
                  visualElement: e,
                  hasMounted: v,
                  isReducedMotion: t.isReducedMotion,
                  presenceId: c,
                };
              },
              [U, J, t.isReducedMotion, $, l, c]
            );
          return (
            (h.static = n),
            oy(function () {
              var e = i || t.initial;
              e && r.apply(e);
            }, !n),
            aa.useEffect(function () {
              v.current = !0;
            }, []),
            h
          );
        },
        Oi = function (t) {
          var r = t.animate,
            e = t.variants,
            n = t.inherit;
          return (void 0 === n || n) && !!e && (!r || r instanceof Sf);
        },
        Pi = function (t) {
          return t instanceof Mf;
        };
      function qy(t, r) {
        var e = ge(sy);
        for (var n in e) {
          var o = de(n) || Fi(n),
            i = r[n],
            a = r.style && r.style[n],
            $ = i && Pi(r[n]),
            s = a && Pi(r.style[n]);
          ((o && !i && !a) || (!o && !$ && !s)) &&
            (t.removeValue(n), delete e[n]);
        }
        ap(t, e, r),
          r.style && ap(t, e, r.style, !0),
          r.transformValues && (t.reactStyle = r.transformValues(t.reactStyle));
      }
      function ap(t, r, e, n) {
        for (var o in (void 0 === n && (n = !1), n && (t.reactStyle = {}), e)) {
          var i = e[o],
            a = !1;
          if (Pi(i)) ry.has(o) || (t.addValue(o, i), (a = !0));
          else if (de(o) || Fi(o)) {
            if (t.hasValue(o)) {
              if (i !== r[o]) {
                t.getValue(o).set(i);
              }
            } else t.addValue(o, mb(i));
            a = !0;
          } else n && (t.reactStyle[o] = i);
          a && (r[o] = i);
        }
      }
      var ry = new Set([]),
        sy = function () {
          return {};
        },
        bp = function (t) {
          return fe(t) ? t[t.length - 1] || 0 : t;
        },
        ty = function (t) {
          return /^\-?\d*\.?\d+$/.test(t);
        },
        uy = function (t) {
          var r = {};
          return (
            t.forEachValue(function (t, e) {
              return (r[e] = t.get());
            }),
            r
          );
        },
        vy = function (t) {
          var r = {};
          return (
            t.forEachValue(function (t, e) {
              return (r[e] = t.getVelocity());
            }),
            r
          );
        },
        wy = function (t) {
          return 'function' == typeof t;
        },
        xy = function (t) {
          return Array.isArray(t);
        },
        yy = (function () {
          function t(t, r) {
            var e = this,
              n = r.makeTargetAnimatable;
            (this.props = {}),
              (this.variants = {}),
              (this.baseTarget = {}),
              (this.overrides = []),
              (this.resolvedOverrides = []),
              (this.activeOverrides = new Set()),
              (this.isAnimating = new Set()),
              (this.hasValue = function (t) {
                return !e.visualElement.hasValue(t);
              }),
              (this.visualElement = t),
              (this.makeTargetAnimatable = n),
              this.visualElement.forEachValue(function (t, r) {
                return (e.baseTarget[r] = t.get());
              });
          }
          return (
            (t.prototype.setProps = function (t) {
              this.props = t;
            }),
            (t.prototype.setVariants = function (t) {
              t && (this.variants = t);
            }),
            (t.prototype.setDefaultTransition = function (t) {
              t && (this.defaultTransition = t);
            }),
            (t.prototype.setValues = function (t, r) {
              var e = void 0 === r ? {} : r,
                n = e.isActive,
                o = void 0 === n ? new Set() : n,
                i = e.priority,
                a = this.resolveVariant(t),
                $ = a.target,
                s = a.transitionEnd;
              for (var f in ($ = this.transformValues(ba(ba({}, $), s)))) {
                if (o.has(f)) return;
                if ((o.add(f), $)) {
                  var u = bp($[f]);
                  if (this.visualElement.hasValue(f)) {
                    var l = this.visualElement.getValue(f);
                    l && l.set(u);
                  } else this.visualElement.addValue(f, mb(u));
                  i || (this.baseTarget[f] = u);
                }
              }
            }),
            (t.prototype.transformValues = function (t) {
              var r = this.props.transformValues;
              return r ? r(t) : t;
            }),
            (t.prototype.checkForNewValues = function (t) {
              var r = Object.keys(t).filter(this.hasValue),
                e = r.length;
              if (e)
                for (var n = 0; n < e; n++) {
                  var o = r[n],
                    i = t[o],
                    a = null;
                  if ((Array.isArray(i) && (a = i[0]), null === a)) {
                    var $ = this.visualElement.readNativeValue(o);
                    (a = void 0 !== $ ? $ : t[o]),
                      Oa(
                        null !== a,
                        'No initial value for "' +
                          o +
                          '" can be inferred. Ensure an initial value for "' +
                          o +
                          '" is defined on the component.'
                      );
                  }
                  'string' == typeof a && ty(a)
                    ? (a = parseFloat(a))
                    : !_w(a) && lb.test(i) && (a = lb.getAnimatableNone(i)),
                    this.visualElement.addValue(o, mb(a)),
                    (this.baseTarget[o] = a);
                }
            }),
            (t.prototype.resolveVariant = function (t) {
              if (!t)
                return {
                  target: void 0,
                  transition: void 0,
                  transitionEnd: void 0,
                };
              wy(t) &&
                (t = t(
                  this.props.custom,
                  uy(this.visualElement),
                  vy(this.visualElement)
                ));
              var r = t.transition;
              return {
                transition: void 0 === r ? this.defaultTransition : r,
                transitionEnd: t.transitionEnd,
                target: xa(t, ['transition', 'transitionEnd']),
              };
            }),
            (t.prototype.getHighestPriority = function () {
              return this.activeOverrides.size
                ? Math.max.apply(Math, Array.from(this.activeOverrides))
                : 0;
            }),
            (t.prototype.setOverride = function (t, r) {
              (this.overrides[r] = t),
                this.children &&
                  this.children.forEach(function (e) {
                    return e.setOverride(t, r);
                  });
            }),
            (t.prototype.startOverride = function (t) {
              var r = this.overrides[t];
              if (r) return this.start(r, {priority: t});
            }),
            (t.prototype.clearOverride = function (t) {
              var r = this;
              if (
                (this.children &&
                  this.children.forEach(function (r) {
                    return r.clearOverride(t);
                  }),
                this.overrides[t])
              ) {
                this.activeOverrides.delete(t);
                var e = this.getHighestPriority();
                if ((this.resetIsAnimating(), e))
                  this.overrides[e] && this.startOverride(e);
                var n = this.resolvedOverrides[t];
                if (n) {
                  var o = {};
                  for (var i in this.baseTarget)
                    void 0 !== n[i] && (o[i] = this.baseTarget[i]);
                  this.onStart(),
                    this.animate(o).then(function () {
                      return r.onComplete();
                    });
                }
              }
            }),
            (t.prototype.apply = function (t) {
              return Array.isArray(t)
                ? this.applyVariantLabels(t)
                : 'string' == typeof t
                ? this.applyVariantLabels([t])
                : void this.setValues(t);
            }),
            (t.prototype.applyVariantLabels = function (t) {
              var r = this,
                e = new Set();
              Tc(t)
                .reverse()
                .forEach(function (n) {
                  var o = r.resolveVariant(r.variants[n]),
                    i = o.target,
                    a = o.transitionEnd;
                  a && r.setValues(a, {isActive: e}),
                    i && r.setValues(i, {isActive: e}),
                    r.children &&
                      r.children.size &&
                      r.children.forEach(function (r) {
                        return r.applyVariantLabels(t);
                      });
                });
            }),
            (t.prototype.start = function (t, r) {
              var e,
                n = this;
              return (
                void 0 === r && (r = {}),
                r.priority && this.activeOverrides.add(r.priority),
                this.resetIsAnimating(r.priority),
                (e = xy(t)
                  ? this.animateVariantLabels(t, r)
                  : 'string' == typeof t
                  ? this.animateVariant(t, r)
                  : this.animate(t, r)),
                this.onStart(),
                e.then(function () {
                  return n.onComplete();
                })
              );
            }),
            (t.prototype.animate = function (t, r) {
              var e = this,
                n = void 0 === r ? {} : r,
                o = n.delay,
                i = void 0 === o ? 0 : o,
                a = n.priority,
                $ = void 0 === a ? 0 : a,
                s = n.transitionOverride,
                f = this.resolveVariant(t),
                u = f.target,
                l = f.transition,
                p = f.transitionEnd;
              if ((s && (l = s), !u)) return Promise.resolve();
              (u = this.transformValues(u)),
                p && (p = this.transformValues(p)),
                this.checkForNewValues(u);
              var c = this.transformValues(Ay(u, l, this.visualElement));
              if (this.makeTargetAnimatable) {
                var v = this.makeTargetAnimatable(this.visualElement, u, c, p);
                (u = v.target), (p = v.transitionEnd);
              }
              $ && (this.resolvedOverrides[$] = u), this.checkForNewValues(u);
              var S = [];
              for (var m in u) {
                var d = this.visualElement.getValue(m);
                if (d && u && void 0 !== u[m]) {
                  var U = u[m];
                  $ || (this.baseTarget[m] = bp(U)),
                    this.isAnimating.has(m) ||
                      (this.isAnimating.add(m),
                      S.push(Ki(m, d, U, ba({delay: i}, l))));
                }
              }
              var J = Promise.all(S);
              return p
                ? J.then(function () {
                    e.setValues(p, {priority: $});
                  })
                : J;
            }),
            (t.prototype.animateVariantLabels = function (t, r) {
              var e = this,
                n = Tc(t)
                  .reverse()
                  .map(function (t) {
                    return e.animateVariant(t, r);
                  });
              return Promise.all(n);
            }),
            (t.prototype.animateVariant = function (t, r) {
              var e = this,
                n = !1,
                o = 0,
                i = 0,
                a = 1,
                $ = (r && r.priority) || 0,
                s = this.variants[t],
                f = s
                  ? function () {
                      return e.animate(s, r);
                    }
                  : function () {
                      return Promise.resolve();
                    },
                u = this.children
                  ? function () {
                      return e.animateChildren(t, o, i, a, $);
                    }
                  : function () {
                      return Promise.resolve();
                    };
              if (s && this.children) {
                var l = this.resolveVariant(s).transition;
                l &&
                  ((n = l.when || n),
                  (o = l.delayChildren || o),
                  (i = l.staggerChildren || i),
                  (a = l.staggerDirection || a));
              }
              if (n) {
                var p = 'beforeChildren' === n ? [f, u] : [u, f],
                  c = p[1];
                return (0, p[0])().then(c);
              }
              return Promise.all([f(), u()]);
            }),
            (t.prototype.animateChildren = function (t, r, e, n, o) {
              if (
                (void 0 === r && (r = 0),
                void 0 === e && (e = 0),
                void 0 === n && (n = 1),
                void 0 === o && (o = 0),
                !this.children)
              )
                return Promise.resolve();
              var i = [],
                a = (this.children.size - 1) * e,
                $ =
                  1 === n
                    ? function (t) {
                        return t * e;
                      }
                    : function (t) {
                        return a - t * e;
                      };
              return (
                Array.from(this.children).forEach(function (e, n) {
                  var a = e.animateVariant(t, {priority: o, delay: r + $(n)});
                  i.push(a);
                }),
                Promise.all(i)
              );
            }),
            (t.prototype.onStart = function () {
              var t = this.props.onAnimationStart;
              t && t();
            }),
            (t.prototype.onComplete = function () {
              var t = this.props.onAnimationComplete;
              t && t();
            }),
            (t.prototype.checkOverrideIsAnimating = function (t) {
              for (var r = this.overrides.length, e = t + 1; e < r; e++) {
                var n = this.resolvedOverrides[e];
                if (n) for (var o in n) this.isAnimating.add(o);
              }
            }),
            (t.prototype.resetIsAnimating = function (t) {
              void 0 === t && (t = 0),
                this.isAnimating.clear(),
                t < this.getHighestPriority() &&
                  this.checkOverrideIsAnimating(t),
                this.children &&
                  this.children.forEach(function (r) {
                    return r.resetIsAnimating(t);
                  });
            }),
            (t.prototype.stop = function () {
              this.visualElement.forEachValue(function (t) {
                return t.stop();
              });
            }),
            (t.prototype.addChild = function (t) {
              this.children || (this.children = new Set()),
                this.children.add(t),
                this.overrides.forEach(function (r, e) {
                  r && t.setOverride(r, e);
                });
            }),
            (t.prototype.removeChild = function (t) {
              this.children && this.children.delete(t);
            }),
            (t.prototype.resetChildren = function () {
              this.children && this.children.clear();
            }),
            t
          );
        })();
      function zy(t, r) {
        if (r) return (r[t] || r.default || r).from;
      }
      function Ay(t, r, e) {
        var n,
          o,
          i = {};
        for (var a in t)
          i[a] =
            null !== (n = zy(a, r)) && void 0 !== n
              ? n
              : null === (o = e.getValue(a)) || void 0 === o
              ? void 0
              : o.get();
        return i;
      }
      function By(t, r, e) {
        var n = Oi(r),
          o = r.variants,
          i = r.transition,
          a = aa.useContext(Tf).controls,
          $ = aa.useContext(he),
          s = ge(function () {
            return new yy(t, e);
          });
        return (
          ($ && !$.isPresent) ||
            (s.resetChildren(),
            s.setProps(r),
            s.setVariants(o),
            s.setDefaultTransition(i)),
          aa.useEffect(function () {
            n && a && a.addChild(s);
          }),
          aa.useEffect(function () {
            return function () {
              r.onAnimationComplete;
              var t = xa(r, ['onAnimationComplete']);
              s.setProps(t), a && a.removeChild(s);
            };
          }, []),
          s
        );
      }
      var Qi = aa.createContext({
        transformPagePoint: function (t) {
          return t;
        },
        features: [],
      });
      function cp(t) {
        var r = null;
        return function () {
          return (
            null === r &&
            ((r = t),
            function () {
              r = null;
            })
          );
        };
      }
      var dp = cp('dragHorizontal'),
        ep = cp('dragVertical');
      function fp(t) {
        var r = !1;
        if ('y' === t) r = ep();
        else if ('x' === t) r = dp();
        else {
          var e = dp(),
            n = ep();
          e && n
            ? (r = function () {
                e(), n();
              })
            : (e && e(), n && n());
        }
        return r;
      }
      var Cy = !1,
        Dy = 'undefined' != typeof window;
      Dy &&
        document.addEventListener(
          'touchmove',
          function (t) {
            Cy && t.preventDefault();
          },
          {passive: !1}
        );
      var Ey = function () {
          return (Cy = !0);
        },
        gp = function () {
          return (Cy = !1);
        };
      function Ri(t, r, e, n) {
        if (e)
          return (
            t.addEventListener(r, e, n),
            function () {
              return t.removeEventListener(r, e, n);
            }
          );
      }
      function Fy(t, r, e, n) {
        aa.useEffect(
          function () {
            var o = t.current;
            if (e && o) return Ri(o, r, e, n);
          },
          [t, r, e, n]
        );
      }
      function hp(t) {
        return 'undefined' != typeof PointerEvent && t instanceof PointerEvent
          ? !('mouse' !== t.pointerType)
          : t instanceof MouseEvent;
      }
      function ip(t) {
        return !!t.touches;
      }
      function Gy(t) {
        if (t)
          return function (r) {
            var e = r instanceof MouseEvent;
            (!e || (e && 0 === r.button)) && t(r);
          };
      }
      var Hy = {pageX: 0, pageY: 0};
      function Iy(t, r) {
        void 0 === r && (r = 'page');
        var e = t.touches[0] || t.changedTouches[0] || Hy;
        return {x: e[r + 'X'], y: e[r + 'Y']};
      }
      function Jy(t, r) {
        return void 0 === r && (r = 'page'), {x: t[r + 'X'], y: t[r + 'Y']};
      }
      function Si(t, r) {
        return (
          void 0 === r && (r = 'page'), {point: ip(t) ? Iy(t, r) : Jy(t, r)}
        );
      }
      function jp(t) {
        return Si(t, 'client');
      }
      var Ti,
        kp = function (t, r) {
          if ((void 0 === r && (r = !1), t)) {
            var e = function (r) {
              return t(r, Si(r));
            };
            return r ? Gy(e) : e;
          }
        },
        Ui = 'undefined' != typeof window,
        Ky = function () {
          return Ui && null === window.onpointerdown;
        },
        Ly = function () {
          return Ui && null === window.ontouchstart;
        },
        My = function () {
          return Ui && null === window.onmousedown;
        },
        Ny = {
          pointerdown: 'mousedown',
          pointermove: 'mousemove',
          pointerup: 'mouseup',
          pointercancel: 'mousecancel',
          pointerover: 'mouseover',
          pointerout: 'mouseout',
          pointerenter: 'mouseenter',
          pointerleave: 'mouseleave',
        },
        Oy = {
          pointerdown: 'touchstart',
          pointermove: 'touchmove',
          pointerup: 'touchend',
          pointercancel: 'touchcancel',
        };
      function lp(t) {
        return Ky() ? t : Ly() ? Oy[t] : My() ? Ny[t] : t;
      }
      function Uf(t, r, e, n) {
        return Ri(t, lp(r), kp(e, 'pointerdown' === r), n);
      }
      function Vf(t, r, e, n) {
        return Fy(t, lp(r), kp(e, 'pointerdown' === r), n);
      }
      !(function (t) {
        (t.subtract = function (t, r) {
          return {x: t.x - r.x, y: t.y - r.y};
        }),
          (t.relativeTo = function (t) {
            var r;
            return function (e) {
              var n = e.x,
                o = e.y,
                i =
                  void 0 !== r
                    ? r
                    : (r =
                        'string' == typeof t ? document.getElementById(t) : t);
              if (i) {
                var a = i.getBoundingClientRect();
                return {
                  x: n - a.left - window.scrollX,
                  y: o - a.top - window.scrollY,
                };
              }
            };
          });
      })(Ti || (Ti = {}));
      var mp = (function () {
        function t(t, r, e) {
          var n = this,
            o = (void 0 === e ? {} : e).transformPagePoint;
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = function () {
              if (n.lastMoveEvent && n.lastMoveEventInfo) {
                var t = Wi(n.lastMoveEventInfo, n.history),
                  r = null !== n.startEvent,
                  e = Wn(t.offset, {x: 0, y: 0}) >= 3;
                if (r || e) {
                  var o = t.point,
                    i = Rd().timestamp;
                  n.history.push(ba(ba({}, o), {timestamp: i}));
                  var a = n.handlers,
                    $ = a.onStart,
                    s = a.onMove;
                  r ||
                    ($ && $(n.lastMoveEvent, t),
                    (n.startEvent = n.lastMoveEvent)),
                    s && s(n.lastMoveEvent, t);
                }
              }
            }),
            !(ip(t) && t.touches.length > 1))
          ) {
            (this.handlers = r), (this.transformPagePoint = o);
            var i = Vi(Si(t), this.transformPagePoint),
              a = i.point,
              $ = Rd().timestamp;
            this.history = [ba(ba({}, a), {timestamp: $})];
            var s = r.onSessionStart;
            s && s(t, Wi(i, this.history));
            var f = Uf(window, 'pointermove', function (t, r) {
                return n.handlePointerMove(t, r);
              }),
              u = Uf(window, 'pointerup', function (t, r) {
                return n.handlePointerUp(t, r);
              });
            this.removeListeners = function () {
              f && f(), u && u();
            };
          }
        }
        return (
          (t.prototype.handlePointerMove = function (t, r) {
            (this.lastMoveEvent = t),
              (this.lastMoveEventInfo = Vi(r, this.transformPagePoint)),
              hp(t) && 0 === t.buttons
                ? this.handlePointerUp(t, r)
                : Ha.update(this.updatePoint, !0);
          }),
          (t.prototype.handlePointerUp = function (t, r) {
            this.end();
            var e = this.handlers.onEnd;
            if (e) {
              var n = Wi(Vi(r, this.transformPagePoint), this.history);
              e && e(t, n);
            }
          }),
          (t.prototype.updateHandlers = function (t) {
            this.handlers = t;
          }),
          (t.prototype.end = function () {
            this.removeListeners && this.removeListeners(),
              kb.update(this.updatePoint),
              gp();
          }),
          t
        );
      })();
      function Vi(t, r) {
        return r ? {point: r(t.point)} : t;
      }
      function Wi(t, r) {
        var e = t.point;
        return {
          point: e,
          delta: Ti.subtract(e, np(r)),
          offset: Ti.subtract(e, Py(r)),
          velocity: Qy(r, 0.1),
        };
      }
      function Py(t) {
        return t[0];
      }
      function np(t) {
        return t[t.length - 1];
      }
      function Qy(t, r) {
        if (t.length < 2) return {x: 0, y: 0};
        for (
          var e = t.length - 1, n = null, o = np(t);
          e >= 0 && ((n = t[e]), !(o.timestamp - n.timestamp > Qf(r)));

        )
          e--;
        if (!n) return {x: 0, y: 0};
        var i = (o.timestamp - n.timestamp) / 1e3;
        if (0 === i) return {x: 0, y: 0};
        var a = {x: (o.x - n.x) / i, y: (o.y - n.y) / i};
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
      }
      function Ry(t, r, e) {
        var n = r.min,
          o = r.max;
        return (
          void 0 !== n && t < n
            ? (t = e ? ya(n, t, e) : Math.max(t, n))
            : void 0 !== o && t > o && (t = e ? ya(o, t, e) : Math.min(t, o)),
          t
        );
      }
      function Sy(t, r, e, n, o) {
        var i = t - r * e;
        return n ? Ry(i, n, o) : i;
      }
      function op(t, r, e) {
        var n = {},
          o = t.max - t.min;
        return (
          void 0 !== r && (n.min = t.min + r),
          void 0 !== e && (n.max = Math.max(t.min + e - o, t.min + e)),
          n
        );
      }
      function Ty(t, r) {
        var e = r.top,
          n = r.left,
          o = r.bottom,
          i = r.right;
        return {x: op(t.x, n, i), y: op(t.y, e, o)};
      }
      function pp(t, r) {
        var e,
          n = r.min - t.min,
          o = r.max - t.max;
        return (
          r.max - r.min < t.max - t.min && ((n = (e = [o, n])[0]), (o = e[1])),
          {min: t.min + n, max: t.min + o}
        );
      }
      function Uy(t, r) {
        return {x: pp(t.x, r.x), y: pp(t.y, r.y)};
      }
      function Vy(t, r, e) {
        var n = t.max - t.min,
          o = ya(r.min, r.max - n, e);
        return {min: o, max: o + n};
      }
      var Wy,
        qp = new WeakMap(),
        Xy = (function () {
          function t(t) {
            var r = t.visualElement;
            (this.isDragging = !1),
              (this.currentDirection = null),
              (this.constraints = !1),
              (this.props = {}),
              (this.cursorProgress = {x: 0.5, y: 0.5}),
              (this.openGlobalLock = null),
              (this.panSession = null),
              (this.visualElement = r),
              this.visualElement.enableLayoutProjection(),
              qp.set(r, this);
          }
          return (
            (t.prototype.start = function (t, r) {
              var e = this,
                n = void 0 === r ? {} : r,
                o = n.snapToCursor,
                i = void 0 !== o && o,
                a = n.cursorProgress;
              i && this.snapToCursor(t);
              var $ = this.props.transformPagePoint;
              this.panSession = new mp(
                t,
                {
                  onSessionStart: function () {
                    Ey(), e.stopMotion();
                  },
                  onStart: function (t, r) {
                    var n,
                      o,
                      i = e.props,
                      $ = i.drag,
                      s = i.dragPropagation;
                    if (
                      !$ ||
                      s ||
                      (e.openGlobalLock && e.openGlobalLock(),
                      (e.openGlobalLock = fp($)),
                      e.openGlobalLock)
                    ) {
                      e.prepareBoundingBox(),
                        e.visualElement.lockTargetBox(),
                        e.resolveDragConstraints();
                      var f = jp(t).point;
                      tc(function (t) {
                        var r = e.visualElement.targetBox[t],
                          n = r.min,
                          o = r.max;
                        e.cursorProgress[t] = a ? a[t] : Xc(n, o, f[t]);
                      }),
                        (e.isDragging = !0),
                        (e.currentDirection = null),
                        null === (o = (n = e.props).onDragStart) ||
                          void 0 === o ||
                          o.call(n, t, r);
                    }
                  },
                  onMove: function (t, r) {
                    var n,
                      o,
                      i,
                      a,
                      $ = e.props,
                      s = $.dragPropagation,
                      f = $.dragDirectionLock;
                    if (s || e.openGlobalLock) {
                      var u = r.offset;
                      if (f && null === e.currentDirection)
                        return (
                          (e.currentDirection = Yy(u)),
                          void (
                            null !== e.currentDirection &&
                            (null === (o = (n = e.props).onDirectionLock) ||
                              void 0 === o ||
                              o.call(n, e.currentDirection))
                          )
                        );
                      e.updateAxis('x', t),
                        e.updateAxis('y', t),
                        null === (a = (i = e.props).onDrag) ||
                          void 0 === a ||
                          a.call(i, t, r),
                        (Wy = t);
                    }
                  },
                  onEnd: function (t, r) {
                    return e.stop(t, r);
                  },
                },
                {transformPagePoint: $}
              );
            }),
            (t.prototype.prepareBoundingBox = function () {
              var t = this.visualElement.getInstance(),
                r = t.style.transform;
              this.visualElement.resetTransform(),
                this.visualElement.measureLayout(),
                (t.style.transform = r),
                this.visualElement.refreshTargetBox();
            }),
            (t.prototype.resolveDragConstraints = function () {
              var t = this.props.dragConstraints;
              this.constraints =
                !!t &&
                (Di(t)
                  ? this.resolveRefConstraints(this.visualElement.box, t)
                  : Ty(this.visualElement.box, t));
            }),
            (t.prototype.resolveRefConstraints = function (t, r) {
              var e = this.props,
                n = e.onMeasureDragConstraints,
                o = e.transformPagePoint,
                i = r.current;
              Oa(
                null !== i,
                "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
              ),
                (this.constraintsBox = Oo(i, o));
              var a = Uy(t, this.constraintsBox);
              if (n) {
                var $ = n(Vw(a));
                $ && (a = po($));
              }
              return a;
            }),
            (t.prototype.cancelDrag = function () {
              gp(),
                (this.isDragging = !1),
                this.panSession && this.panSession.end(),
                (this.panSession = null),
                !this.props.dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null));
            }),
            (t.prototype.stop = function (t, r) {
              var e;
              this.visualElement.unlockTargetBox(),
                null === (e = this.panSession) || void 0 === e || e.end(),
                (this.panSession = null);
              var n = this.isDragging;
              if ((this.cancelDrag(), n)) {
                var o = this.props,
                  i = o.dragMomentum,
                  a = o.dragElastic,
                  $ = o.onDragEnd;
                if (i || a) {
                  var s = r.velocity;
                  this.animateDragEnd(s);
                }
                null == $ || $(t, r);
              }
            }),
            (t.prototype.snapToCursor = function (t) {
              this.prepareBoundingBox(),
                (this.cursorProgress.x = 0.5),
                (this.cursorProgress.y = 0.5),
                this.updateAxis('x', t),
                this.updateAxis('y', t);
            }),
            (t.prototype.updateAxis = function (t, r) {
              var e,
                n = this.props,
                o = n.drag,
                i = n.dragElastic;
              if (Xi(t, o, this.currentDirection)) {
                var a = this.visualElement.box[t],
                  $ = a.max - a.min,
                  s = this.cursorProgress[t],
                  f = Sy(
                    jp(r).point[t],
                    $,
                    s,
                    null === (e = this.constraints) || void 0 === e
                      ? void 0
                      : e[t],
                    i
                  );
                this.visualElement.setAxisTarget(t, f, f + $);
              }
            }),
            (t.prototype.updateProps = function (t) {
              var r = t.drag,
                e = void 0 !== r && r,
                n = t.dragDirectionLock,
                o = void 0 !== n && n,
                i = t.dragPropagation,
                a = void 0 !== i && i,
                $ = t.dragConstraints,
                s = void 0 !== $ && $,
                f = t.dragElastic,
                u = void 0 === f ? 0.35 : f,
                l = t.dragMomentum,
                p = void 0 === l || l,
                c = xa(t, [
                  'drag',
                  'dragDirectionLock',
                  'dragPropagation',
                  'dragConstraints',
                  'dragElastic',
                  'dragMomentum',
                ]);
              this.props = ba(
                {
                  drag: e,
                  dragDirectionLock: o,
                  dragPropagation: a,
                  dragConstraints: s,
                  dragElastic: u,
                  dragMomentum: p,
                },
                c
              );
            }),
            (t.prototype.animateDragEnd = function (t) {
              var r = this,
                e = this.props,
                n = e.drag,
                o = e.dragMomentum,
                i = e.dragElastic,
                a = e.dragTransition,
                $ = tc(function (e) {
                  if (Xi(e, n, r.currentDirection)) {
                    var $ = r.constraints ? r.constraints[e] : {},
                      s = i ? 200 : 1e6,
                      f = i ? 40 : 1e7,
                      u = ba(
                        ba(
                          {
                            type: 'inertia',
                            velocity: o ? t[e] : 0,
                            bounceStiffness: s,
                            bounceDamping: f,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                          },
                          a
                        ),
                        $
                      );
                    return r.visualElement.startLayoutAxisAnimation(e, u);
                  }
                });
              return Promise.all($).then(function () {
                var t, e;
                null === (e = (t = r.props).onDragTransitionEnd) ||
                  void 0 === e ||
                  e.call(t);
              });
            }),
            (t.prototype.stopMotion = function () {
              this.visualElement.stopLayoutAnimation();
            }),
            (t.prototype.scalePoint = function () {
              var t = this,
                r = this.props,
                e = r.drag,
                n = r.dragConstraints;
              if (Di(n) && this.constraintsBox) {
                this.stopMotion();
                var o = {x: 0, y: 0};
                tc(function (r) {
                  o[r] = Go(t.visualElement.targetBox[r], t.constraintsBox[r]);
                }),
                  this.prepareBoundingBox(),
                  this.resolveDragConstraints(),
                  tc(function (r) {
                    if (Xi(r, e, null)) {
                      var n = Vy(
                          t.visualElement.targetBox[r],
                          t.constraintsBox[r],
                          o[r]
                        ),
                        i = n.min,
                        a = n.max;
                      t.visualElement.setAxisTarget(r, i, a);
                    }
                  });
              }
            }),
            (t.prototype.mount = function (t) {
              var r = this,
                e = Uf(t.getInstance(), 'pointerdown', function (t) {
                  var e = r.props,
                    n = e.drag,
                    o = e.dragListener;
                  n && (void 0 === o || o) && r.start(t);
                }),
                n = Ri(window, 'resize', function () {
                  r.scalePoint();
                }),
                o = t.onLayoutUpdate(function () {
                  r.isDragging && r.resolveDragConstraints();
                }),
                i = t.prevSnapshot;
              return (
                (null == i ? void 0 : i.isDragging) &&
                  this.start(Wy, {cursorProgress: i.cursorProgress}),
                function () {
                  null == e || e(),
                    null == n || n(),
                    null == o || o(),
                    r.cancelDrag();
                }
              );
            }),
            t
          );
        })();
      function Xi(t, r, e) {
        return !((!0 !== r && r !== t) || (null !== e && e !== t));
      }
      function Yy(t, r) {
        void 0 === r && (r = 10);
        var e = null;
        return (
          Math.abs(t.y) > r ? (e = 'y') : Math.abs(t.x) > r && (e = 'x'), e
        );
      }
      function Zy(t, r) {
        var e = t.dragControls,
          n = aa.useContext(Qi).transformPagePoint,
          o = ge(function () {
            return new Xy({visualElement: r});
          });
        o.updateProps(ba(ba({}, t), {transformPagePoint: n})),
          aa.useEffect(
            function () {
              return e && e.subscribe(o);
            },
            [o]
          ),
          aa.useEffect(function () {
            return o.mount(r);
          }, []);
      }
      var Zc = function (t) {
          return function (r) {
            return t(r), null;
          };
        },
        $y = {
          key: 'drag',
          shouldRender: function (t) {
            return !!t.drag;
          },
          Component: Zc(function (t) {
            var r = t.visualElement;
            return Zy(xa(t, ['visualElement']), r);
          }),
        };
      function Yi(t) {
        return aa.useEffect(function () {
          return function () {
            return t();
          };
        }, []);
      }
      function _y(t, r) {
        var e = t.onPan,
          n = t.onPanStart,
          o = t.onPanEnd,
          i = t.onPanSessionStart,
          a = e || n || o || i,
          $ = aa.useRef(null),
          s = aa.useContext(Qi).transformPagePoint,
          f = {
            onSessionStart: i,
            onStart: n,
            onMove: e,
            onEnd: function (t, r) {
              ($.current = null), o && o(t, r);
            },
          };
        aa.useEffect(function () {
          null !== $.current && $.current.updateHandlers(f);
        }),
          Vf(
            r,
            'pointerdown',
            a &&
              function (t) {
                $.current = new mp(t, f, {transformPagePoint: s});
              }
          ),
          Yi(function () {
            return $.current && $.current.end();
          });
      }
      var rp = function (t, r) {
          return !!r && (t === r || rp(t, r.parentElement));
        },
        az = ['whileHover', 'whileTap', 'whileDrag'],
        sp = function (t) {
          return az.indexOf(t) + 1;
        },
        Zi = sp('whileTap');
      function bz(t, r) {
        var e = t.onTap,
          n = t.onTapStart,
          o = t.onTapCancel,
          i = t.whileTap,
          a = t.controls,
          $ = e || n || o || i,
          s = aa.useRef(!1),
          f = aa.useRef(null);
        function u() {
          f.current && f.current(), (f.current = null);
        }
        i && a && a.setOverride(i, Zi);
        var l = aa.useRef(null);
        (l.current = function (t, n) {
          var $ = r.current;
          if ((u(), s.current && $)) {
            (s.current = !1), a && i && a.clearOverride(Zi);
            var f = fp(!0);
            f && (f(), rp($, t.target) ? e && e(t, n) : o && o(t, n));
          }
        }),
          Vf(
            r,
            'pointerdown',
            $
              ? function (t, e) {
                  u(),
                    (f.current = Uf(window, 'pointerup', function (t, r) {
                      return l.current(t, r);
                    })),
                    r.current &&
                      !s.current &&
                      ((s.current = !0),
                      n && n(t, e),
                      a && i && a.startOverride(Zi));
                }
              : void 0
          ),
          Yi(u);
      }
      var $i = sp('whileHover'),
        tp = function (t) {
          return function (r, e) {
            hp(r) && t(r, e);
          };
        };
      function cz(t, r) {
        var e = t.whileHover,
          n = t.onHoverStart,
          o = t.onHoverEnd,
          i = t.controls;
        e && i && i.setOverride(e, $i),
          Vf(
            r,
            'pointerenter',
            tp(function (t, r) {
              n && n(t, r), e && i && i.startOverride($i);
            })
          ),
          Vf(
            r,
            'pointerleave',
            tp(function (t, r) {
              o && o(t, r), e && i && i.clearOverride($i);
            })
          );
      }
      function dz(t, r) {
        _y(t, r), bz(t, r), cz(t, r);
      }
      var ac,
        ez = [
          'onPan',
          'onPanStart',
          'onPanEnd',
          'onPanSessionStart',
          'onTap',
          'onTapStart',
          'onTapCancel',
          'whileTap',
          'whileHover',
          'onHoverStart',
          'onHoverEnd',
        ],
        fz = {
          key: 'gestures',
          shouldRender: function (t) {
            return ez.some(function (r) {
              return t.hasOwnProperty(r);
            });
          },
          Component: Zc(function (t) {
            var r = t.visualElement;
            dz(xa(t, ['visualElement']), r);
          }),
        },
        gz = {
          key: 'exit',
          shouldRender: function (t) {
            return !!t.exit && !Oi(t);
          },
          Component: Zc(function (t) {
            var r = t.animate,
              e = t.controls,
              n = t.exit,
              o = Uo(),
              i = o[0],
              a = o[1],
              $ = aa.useContext(he),
              s = aa.useRef(!1),
              f =
                void 0 !== (null == $ ? void 0 : $.custom)
                  ? $.custom
                  : t.custom;
            aa.useEffect(
              function () {
                i
                  ? !s.current ||
                    !r ||
                    'boolean' == typeof r ||
                    r instanceof Sf ||
                    e.start(r)
                  : (!s.current &&
                      n &&
                      (e.setProps(ba(ba({}, t), {custom: f})),
                      e.start(n).then(a)),
                    (s.current = !0)),
                  i && (s.current = !1);
              },
              [r, e, f, n, i, a, t]
            );
          }),
        };
      function hz(t, r) {
        if (null === r) return !1;
        var e = r.length;
        if (e !== t.length) return !1;
        for (var n = 0; n < e; n++) if (r[n] !== t[n]) return !1;
        return !0;
      }
      !(function (t) {
        (t.Target = 'Target'),
          (t.VariantLabel = 'VariantLabel'),
          (t.AnimationSubscription = 'AnimationSubscription');
      })(ac || (ac = {}));
      var iz = function (t, r) {
        return (
          void 0 !== r &&
          (Array.isArray(t) && Array.isArray(r) ? !hz(r, t) : t !== r)
        );
      };
      function _i(t, r) {
        void 0 === r && (r = !1);
        t.transition;
        var e = t.transitionEnd,
          n = xa(t, ['transition', 'transitionEnd']);
        return r ? ba(ba({}, n), e) : n;
      }
      function jz(t, r, e, n) {
        var o = aa.useRef(!0),
          i = aa.useRef(null);
        i.current || (i.current = _i(t, !0)),
          aa.useEffect(
            function () {
              var a = {},
                $ = _i(t),
                s = _i(t, !0);
              for (var f in $) {
                var u =
                    o.current &&
                    (!e.hasValue(f) || e.getValue(f).get() !== s[f]),
                  l = null !== s[f],
                  p = iz(i.current[f], s[f]);
                l && (p || u) && (a[f] = $[f]);
              }
              (o.current = !1),
                (i.current = ba(ba({}, i.current), s)),
                Object.keys(a).length &&
                  r.start(
                    ba(ba({}, a), {
                      transition: t.transition || n,
                      transitionEnd: t.transitionEnd,
                    })
                  );
            },
            [t]
          );
      }
      var aj,
        bj,
        kz = function (t) {
          return t ? (Array.isArray(t) ? t : [t]) : [];
        },
        cj = function (t) {
          var r = t instanceof Mf ? t.get() : t;
          return Array.from(new Set(kz(r)));
        },
        lz = function (t) {
          return [t.join(',')];
        },
        mz = function (t, r) {
          return t.join(',') !== r.join(',');
        };
      function nz(t, r, e, n) {
        var o = cj(r),
          i = aa.useContext(Tf),
          a = i.hasMounted && i.hasMounted.current,
          $ = aa.useRef(!1);
        aa.useEffect(function () {
          var r = !1;
          e
            ? ((r = !!a), (o = cj(i.animate)))
            : (r = $.current || mz(cj(t), o)),
            r && n.start(o),
            ($.current = !0);
        }, lz(o));
      }
      function oz(t, r) {
        var e = aa.useMemo(
          function () {
            return t.subscribe(r);
          },
          [t]
        );
        aa.useEffect(
          function () {
            return function () {
              e && e();
            };
          },
          [e]
        );
      }
      var qa,
        ie,
        pz =
          (((aj = {})[ac.Target] = Zc(function (t) {
            return jz(t.animate, t.controls, t.visualElement, t.transition);
          })),
          (aj[ac.VariantLabel] = Zc(function (t) {
            var r = t.animate,
              e = t.inherit,
              n = void 0 === e || e,
              o = t.controls;
            return nz(t.initial, r, n, o);
          })),
          (aj[ac.AnimationSubscription] = Zc(function (t) {
            return oz(t.animate, t.controls);
          })),
          aj),
        qz = function (t) {
          return Array.isArray(t) || 'string' == typeof t;
        },
        up = function (t) {
          return t.animate instanceof Sf;
        },
        rz = ['initial', 'animate', 'whileTap', 'whileHover'],
        sz =
          (((bj = {})[ac.Target] = function (t) {
            return void 0 !== t.animate && !qz(t.animate) && !up(t);
          }),
          (bj[ac.VariantLabel] = function (t) {
            return (
              void 0 !== t.variants ||
              rz.some(function (r) {
                return 'string' == typeof t[r];
              })
            );
          }),
          (bj[ac.AnimationSubscription] = up),
          bj),
        tz = function (t) {
          var r = void 0;
          for (var e in ac) sz[e](t) && (r = e);
          return r ? pz[r] : void 0;
        };
      function uz(t, r, e, n) {
        (t.min = ya(r.min, e.min, n)), (t.max = ya(r.max, e.max, n));
      }
      !(function (t) {
        (t[(t.Entering = 0)] = 'Entering'),
          (t[(t.Present = 1)] = 'Present'),
          (t[(t.Exiting = 2)] = 'Exiting');
      })(qa || (qa = {})),
        (function (t) {
          (t[(t.Hide = 0)] = 'Hide'), (t[(t.Show = 1)] = 'Show');
        })(ie || (ie = {}));
      var vp = 1e3,
        vz = (function (t) {
          function r() {
            var r = (null !== t && t.apply(this, arguments)) || this;
            return (
              (r.frameTarget = {x: {min: 0, max: 0}, y: {min: 0, max: 0}}),
              (r.stopAxisAnimation = {x: void 0, y: void 0}),
              (r.animate = function (t, e, n) {
                void 0 === n && (n = {});
                var o = n.originBox,
                  i = n.targetBox,
                  a = n.visibilityAction,
                  $ = xa(n, ['originBox', 'targetBox', 'visibilityAction']),
                  s = r.props,
                  f = s.visualElement,
                  u = s.layout,
                  l = xz((e = o || e), (t = i || t)),
                  p = tc(function (n) {
                    if ('position' === u) {
                      var o = t[n].max - t[n].min;
                      e[n].max = e[n].min + o;
                    }
                    if (!f.isTargetBoxLocked)
                      return void 0 === a
                        ? l
                          ? r.animateAxis(n, t[n], e[n], $)
                          : f.setAxisTarget(n, t[n].min, t[n].max)
                        : void (a === ie.Hide ? f.hide() : f.show());
                  });
                return (
                  f.render(),
                  Promise.all(p).then(function () {
                    var t, e;
                    null === (t = $.onLayoutAnimationComplete) ||
                      void 0 === t ||
                      t.call($),
                      f.isPresent
                        ? (f.presence = qa.Present)
                        : (null === (e = $.onLayoutAnimationComplete) ||
                            void 0 === e ||
                            e.call($),
                          r.safeToRemove());
                  })
                );
              }),
              r
            );
          }
          return (
            Jb(r, t),
            (r.prototype.componentDidMount = function () {
              var t = this.props.visualElement;
              t.enableLayoutProjection(),
                (this.unsubLayoutReady = t.onLayoutUpdate(this.animate));
            }),
            (r.prototype.componentWillUnmount = function () {
              var t = this;
              this.unsubLayoutReady(),
                tc(function (r) {
                  var e, n;
                  return null === (n = (e = t.stopAxisAnimation)[r]) ||
                    void 0 === n
                    ? void 0
                    : n.call(e);
                });
            }),
            (r.prototype.animateAxis = function (t, r, e, n) {
              var o,
                i,
                a = void 0 === n ? {} : n,
                $ = a.transition,
                s = a.crossfadeOpacity;
              null === (i = (o = this.stopAxisAnimation)[t]) ||
                void 0 === i ||
                i.call(o);
              var f = this.props.visualElement,
                u = this.frameTarget[t],
                l = f.axisProgress[t];
              l.clearListeners(), l.set(0), l.set(0);
              var p = s && this.createCrossfadeAnimation(s),
                c = function () {
                  var n = l.get() / vp;
                  uz(u, e, r, n),
                    f.setAxisTarget(t, u.min, u.max),
                    null == p || p(n);
                };
              c();
              var v = Ki(
                  'x' === t ? 'layoutX' : 'layoutY',
                  l,
                  vp,
                  $ || this.props.transition || yz
                ),
                S = l.onChange(c);
              return (
                (this.stopAxisAnimation[t] = function () {
                  l.stop(), S();
                }),
                v
              );
            }),
            (r.prototype.createCrossfadeAnimation = function (t) {
              var r = this.props.visualElement.getValue('opacity', 0);
              return function (e) {
                r.set(zz(ya(0, 1, e))), t.set(Az(ya(1, 0, e)));
              };
            }),
            (r.prototype.safeToRemove = function () {
              var t, r;
              null === (r = (t = this.props).safeToRemove) ||
                void 0 === r ||
                r.call(t);
            }),
            (r.prototype.render = function () {
              return null;
            }),
            r
          );
        })(aa.Component),
        wz = {
          key: 'animate-layout',
          shouldRender: function (t) {
            return !!t.layout || !!t.layoutId;
          },
          Component: function (t) {
            var r = Uo()[1];
            return aa.createElement(vz, ba({}, t, {safeToRemove: r}));
          },
        };
      function xz(t, r) {
        return wp(t.x, r.x) || wp(t.y, r.y);
      }
      function wp(t, r) {
        return t.min !== r.min || t.max !== r.max;
      }
      var yz = {duration: 0.45, ease: [0.4, 0, 0.1, 1]};
      function xp(t, r, e) {
        return function (n) {
          return n < t ? 0 : n > r ? 1 : e(Xc(t, r, n));
        };
      }
      var zz = xp(0, 0.5, ri),
        Az = xp(0.5, 0.95, Zd),
        Bz = {
          measureLayout: function (t) {
            return t.measureLayout();
          },
          layoutReady: function (t) {
            return t.layoutReady();
          },
        },
        Cz = function (t, r) {
          return t.depth - r.depth;
        };
      function yp() {
        var t = new Set();
        return {
          add: function (r) {
            return t.add(r);
          },
          flush: function (r) {
            var e = void 0 === r ? Bz : r,
              n = e.measureLayout,
              o = e.layoutReady,
              i = Array.from(t).sort(Cz);
            i.forEach(function (t) {
              return t.resetTransform();
            }),
              i.forEach(n),
              i.forEach(o),
              i.forEach(function (t) {
                t.isPresent && (t.presence = qa.Present);
              }),
              t.clear();
          },
        };
      }
      function Wf(t) {
        return !!t.forceUpdate;
      }
      var Q = za(aa);
      var dj = aa.createContext(yp()),
        Dz = (function (t) {
          function r(r) {
            var e = t.call(this, r) || this,
              n = r.syncLayout;
            return (
              Wf(n) ||
                (e.componentDidUpdate = function () {
                  return n.flush();
                }),
              e
            );
          }
          return (
            Jb(r, t),
            (r.prototype.componentDidMount = function () {
              var t = this.props,
                r = t.syncLayout,
                e = t.visualElement;
              Wf(r) && r.register(e);
            }),
            (r.prototype.getSnapshotBeforeUpdate = function () {
              var t = this.props,
                r = t.syncLayout,
                e = t.visualElement;
              return (
                Wf(r) ? r.syncUpdate() : (e.snapshotBoundingBox(), r.add(e)),
                null
              );
            }),
            (r.prototype.componentDidUpdate = function () {}),
            (r.prototype.render = function () {
              return null;
            }),
            r
          );
        })(Q.d.Component),
        Ez = {
          key: 'measure-layout',
          shouldRender: function (t) {
            return !!t.drag || !!t.layout || !!t.layoutId;
          },
          Component: function (t) {
            var r = aa.useContext(dj);
            return Q.d.createElement(Dz, ba({}, t, {syncLayout: r}));
          },
        },
        Fz = [Ez, $y, fz, gz, wz];
      function Gz(t, r, e, n, o, i, a) {
        var $ = aa.useContext(Qi);
        if (t || 'undefined' == typeof window) return null;
        var s = Tc(Fz, $.features),
          f = s.length,
          u = [],
          l = tz(n);
        l &&
          u.push(
            aa.createElement(l, {
              key: 'animation',
              initial: n.initial,
              animate: n.animate,
              variants: n.variants,
              transition: n.transition,
              controls: e,
              inherit: a,
              visualElement: r,
            })
          );
        for (var p = 0; p < f; p++) {
          var c = s[p],
            v = c.shouldRender,
            S = c.key,
            m = c.Component;
          v(n, i) &&
            u.push(
              aa.createElement(
                m,
                ba({key: S}, n, {
                  localContext: o,
                  parentContext: i,
                  visualElement: r,
                  controls: e,
                })
              )
            );
        }
        return u;
      }
      function Hz(t) {
        var r = aa.useContext(dj);
        Yi(function () {
          Wf(r) && r.remove(t);
        });
      }
      function zp(t, r) {
        var e = r.useVisualElement,
          n = r.render,
          o = r.animationControlsConfig;
        return aa.forwardRef(function (r, i) {
          var a = aa.useContext(Tf),
            $ = Oi(r),
            s = a.static || r.static || !1,
            f = e(t, r, a.visualElement, s, i);
          qy(f, r);
          var u = By(f, r, o),
            l = py(a, u, f, s, r),
            p = Gz(s, f, u, r, l, a, $),
            c = n(t, r, f);
          return (
            Hz(f),
            aa.createElement(
              aa.Fragment,
              null,
              aa.createElement(Tf.Provider, {value: l}, c),
              p
            )
          );
        });
      }
      var Ap = {
        useVisualElement: Ux,
        render: _x,
        animationControlsConfig: {makeTargetAnimatable: ny},
      };
      function Iz(t) {
        return zp(t, Ap);
      }
      var ej = new Map();
      function Jz(t, r) {
        return 'custom' === r
          ? t.custom
          : (ej.has(r) || ej.set(r, zp(r, Ap)), ej.get(r));
      }
      var je = new Proxy({custom: Iz}, {get: Jz});
      function Kz(t, r) {
        return r && t !== r.lead
          ? {visibilityAction: ie.Hide}
          : r &&
            t.presence !== qa.Entering &&
            t === r.lead &&
            r.lead !== r.prevLead
          ? {visibilityAction: ie.Show}
          : (t.presence === qa.Entering
              ? (e = null == r ? void 0 : r.getFollowOrigin())
              : t.presence === qa.Exiting &&
                (n = null == r ? void 0 : r.getFollowTarget()),
            {originBox: e, targetBox: n});
        var e, n;
      }
      function Lz(t, r) {
        var e,
          n,
          o,
          i = {},
          a = r && r.lead,
          $ = null == a ? void 0 : a.presence;
        return (
          r && t === a
            ? t.presence === qa.Entering
              ? (i.originBox = r.getFollowOrigin())
              : t.presence === qa.Exiting && (i.targetBox = r.getFollowTarget())
            : r &&
              t === r.follow &&
              ((i.transition = r.getLeadTransition()),
              $ === qa.Entering
                ? (i.targetBox = r.getLeadTarget())
                : $ === qa.Exiting && (i.originBox = r.getLeadOrigin())),
          (null === (e = null == r ? void 0 : r.follow) || void 0 === e
            ? void 0
            : e.isPresenceRoot) || (null == a ? void 0 : a.isPresenceRoot)
            ? (r && t !== a
                ? r && t === r.follow
                  ? a &&
                    $ !== qa.Entering &&
                    $ === qa.Exiting &&
                    (i.crossfadeOpacity =
                      null === (o = null == r ? void 0 : r.lead) || void 0 === o
                        ? void 0
                        : o.getValue('opacity', 1))
                  : (i.visibilityAction = ie.Hide)
                : t.presence === qa.Entering &&
                  (i.crossfadeOpacity =
                    null === (n = null == r ? void 0 : r.follow) || void 0 === n
                      ? void 0
                      : n.getValue('opacity', 0)),
              i)
            : i
        );
      }
      function Mz(t, r) {
        for (
          var e = r[0],
            n = r[1],
            o = void 0,
            i = 0,
            a = void 0,
            $ = t.length,
            s = !1,
            f = $ - 1;
          f >= 0;
          f--
        ) {
          var u = t[f];
          if ((f === $ - 1 && (s = u.isPresent), s)) o = u;
          else {
            var l = t[f - 1];
            l && l.isPresent && (o = u);
          }
          if (o) {
            i = f;
            break;
          }
        }
        if ((o || (o = t[0]), (a = t[i - 1]), o))
          for (f = i - 1; f >= 0; f--) {
            if ((u = t[f]).isPresent) {
              a = u;
              break;
            }
          }
        return (
          o !== e &&
            !s &&
            a === n &&
            t.find(function (t) {
              return t === e;
            }) &&
            (o = e),
          [o, a]
        );
      }
      var Nz = (function () {
          function t() {
            (this.order = []), (this.hasChildren = !1);
          }
          return (
            (t.prototype.add = function (t) {
              var r,
                e = t.config.layoutOrder;
              if (void 0 === e) this.order.push(t);
              else {
                var n = this.order.findIndex(function (t) {
                  return e <= (t.config.layoutOrder || 0);
                });
                -1 === n &&
                  ((t.presence = this.hasChildren ? qa.Entering : qa.Present),
                  (n = this.order.length)),
                  this.order.splice(n, 0, t);
              }
              if (this.snapshot) {
                (t.prevSnapshot = this.snapshot),
                  (t.prevViewportBox = this.snapshot.boundingBox);
                var o = this.snapshot.latestMotionValues;
                for (var i in o)
                  t.hasValue(i)
                    ? null === (r = t.getValue(i)) ||
                      void 0 === r ||
                      r.set(o[i])
                    : t.addValue(i, mb(o[i]));
              }
              this.hasChildren = !0;
            }),
            (t.prototype.remove = function (t) {
              var r = this.order.findIndex(function (r) {
                return t === r;
              });
              -1 !== r && this.order.splice(r, 1);
            }),
            (t.prototype.updateLeadAndFollow = function () {
              (this.prevLead = this.lead), (this.prevFollow = this.follow);
              var t = Mz(this.order, [this.lead, this.follow]),
                r = t[0],
                e = t[1];
              (this.lead = r), (this.follow = e);
            }),
            (t.prototype.updateSnapshot = function () {
              if (this.lead) {
                var t = {
                  boundingBox: this.lead.prevViewportBox,
                  latestMotionValues: {},
                };
                this.lead.forEachValue(function (r, e) {
                  var n = r.get();
                  de(n) || (t.latestMotionValues[e] = n);
                });
                var r = qp.get(this.lead);
                r &&
                  r.isDragging &&
                  ((t.isDragging = !0), (t.cursorProgress = r.cursorProgress)),
                  (this.snapshot = t);
              }
            }),
            (t.prototype.isLeadPresent = function () {
              var t;
              return (
                this.lead &&
                (null === (t = this.lead) || void 0 === t
                  ? void 0
                  : t.presence) !== qa.Exiting
              );
            }),
            (t.prototype.shouldStackAnimate = function () {
              return !0;
            }),
            (t.prototype.getFollowOrigin = function () {
              var t;
              return this.follow
                ? this.follow.prevViewportBox
                : null === (t = this.snapshot) || void 0 === t
                ? void 0
                : t.boundingBox;
            }),
            (t.prototype.getFollowTarget = function () {
              var t;
              return null === (t = this.follow) || void 0 === t
                ? void 0
                : t.box;
            }),
            (t.prototype.getLeadOrigin = function () {
              var t;
              return null === (t = this.lead) || void 0 === t
                ? void 0
                : t.prevViewportBox;
            }),
            (t.prototype.getLeadTarget = function () {
              var t;
              return null === (t = this.lead) || void 0 === t ? void 0 : t.box;
            }),
            (t.prototype.getLeadTransition = function () {
              var t;
              return null === (t = this.lead) || void 0 === t
                ? void 0
                : t.config.transition;
            }),
            t
          );
        })(),
        j = (function (t) {
          function r() {
            var r = (null !== t && t.apply(this, arguments)) || this;
            return (
              (r.children = new Set()),
              (r.stacks = new Map()),
              (r.hasMounted = !1),
              (r.updateScheduled = !1),
              (r.renderScheduled = !1),
              (r.syncContext = ba(ba({}, yp()), {
                syncUpdate: function (t) {
                  return r.scheduleUpdate(t);
                },
                forceUpdate: function () {
                  (r.syncContext = ba({}, r.syncContext)), r.scheduleUpdate(!0);
                },
                register: function (t) {
                  return r.addChild(t);
                },
                remove: function (t) {
                  return r.removeChild(t);
                },
              })),
              r
            );
          }
          return (
            Jb(r, t),
            (r.prototype.componentDidMount = function () {
              (this.hasMounted = !0), this.updateStacks();
            }),
            (r.prototype.componentDidUpdate = function () {
              this.startLayoutAnimation();
            }),
            (r.prototype.shouldComponentUpdate = function () {
              return (this.renderScheduled = !0), !0;
            }),
            (r.prototype.startLayoutAnimation = function () {
              var t = this;
              this.renderScheduled = this.updateScheduled = !1;
              var r = this.props.type;
              this.children.forEach(function (t) {
                t.isPresent
                  ? t.presence !== qa.Entering &&
                    (t.presence =
                      t.presence === qa.Exiting ? qa.Entering : qa.Present)
                  : (t.presence = qa.Exiting);
              }),
                this.updateStacks();
              var e = 'crossfade' === r ? Lz : Kz,
                n = {
                  measureLayout: function (t) {
                    return t.measureLayout();
                  },
                  layoutReady: function (r) {
                    var n = r.layoutId;
                    r.layoutReady(e(r, t.getStack(n)));
                  },
                };
              this.children.forEach(function (r) {
                return t.syncContext.add(r);
              }),
                this.syncContext.flush(n),
                this.stacks.forEach(function (t) {
                  return (t.snapshot = void 0);
                });
            }),
            (r.prototype.updateStacks = function () {
              this.stacks.forEach(function (t) {
                return t.updateLeadAndFollow();
              });
            }),
            (r.prototype.scheduleUpdate = function (t) {
              void 0 === t && (t = !1),
                (!t && this.updateScheduled) ||
                  ((this.updateScheduled = !0),
                  this.children.forEach(function (t) {
                    return t.snapshotBoundingBox();
                  }),
                  this.stacks.forEach(function (t) {
                    return t.updateSnapshot();
                  }),
                  (!t && this.renderScheduled) ||
                    ((this.renderScheduled = !0), this.forceUpdate()));
            }),
            (r.prototype.addChild = function (t) {
              this.children.add(t),
                this.addToStack(t),
                (t.presence = this.hasMounted ? qa.Entering : qa.Present);
            }),
            (r.prototype.removeChild = function (t) {
              this.scheduleUpdate(),
                this.children.delete(t),
                this.removeFromStack(t);
            }),
            (r.prototype.addToStack = function (t) {
              var r = this.getStack(t.layoutId);
              null == r || r.add(t);
            }),
            (r.prototype.removeFromStack = function (t) {
              var r = this.getStack(t.layoutId);
              null == r || r.remove(t);
            }),
            (r.prototype.getStack = function (t) {
              if (void 0 !== t)
                return (
                  !this.stacks.has(t) && this.stacks.set(t, new Nz()),
                  this.stacks.get(t)
                );
            }),
            (r.prototype.render = function () {
              return aa.createElement(
                dj.Provider,
                {value: this.syncContext},
                this.props.children
              );
            }),
            r
          );
        })(aa.Component);
      function Oz() {
        return {
          scrollX: mb(0),
          scrollY: mb(0),
          scrollXProgress: mb(0),
          scrollYProgress: mb(0),
        };
      }
      var Pz = 'undefined' != typeof window,
        k = Pz ? aa.useLayoutEffect : aa.useEffect;
      var l = Oz();
      var Bp = mb(null);
      if ('undefined' != typeof window)
        if (window.matchMedia) {
          var Cp = window.matchMedia('(prefers-reduced-motion)'),
            Dp = function () {
              return Bp.set(Cp.matches);
            };
          Cp.addListener(Dp), Dp();
        } else Bp.set(!1);
      var m = (function () {
        function t() {
          this.componentControls = new Set();
        }
        return (
          (t.prototype.subscribe = function (t) {
            var r = this;
            return (
              this.componentControls.add(t),
              function () {
                return r.componentControls.delete(t);
              }
            );
          }),
          (t.prototype.start = function (t, r) {
            this.componentControls.forEach(function (e) {
              e.start(t.nativeEvent || t, r);
            });
          }),
          t
        );
      })();
      var n = (function (t) {
        function r() {
          var r = (null !== t && t.apply(this, arguments)) || this;
          return (r.initialState = {}), r;
        }
        return (
          Jb(r, t),
          (r.prototype.build = function () {}),
          (r.prototype.clean = function () {}),
          (r.prototype.getBoundingBox = function () {
            return {x: {min: 0, max: 0}, y: {min: 0, max: 0}};
          }),
          (r.prototype.readNativeValue = function (t) {
            return this.initialState[t] || 0;
          }),
          (r.prototype.render = function () {
            this.build();
          }),
          r
        );
      })(oo);
      var Qz = {};
      function Rz(o, t) {
        (o.prototype = Object.create(t.prototype)),
          (o.prototype.constructor = o),
          (o.__proto__ = t);
      }
      Qz = Rz;
      function Sz(e) {
        if (e.sheet) return e.sheet;
        for (var t = 0; t < document.styleSheets.length; t++)
          if (document.styleSheets[t].ownerNode === e)
            return document.styleSheets[t];
      }
      function Tz(e) {
        var t = document.createElement('style');
        return (
          t.setAttribute('data-emotion', e.key),
          void 0 !== e.nonce && t.setAttribute('nonce', e.nonce),
          t.appendChild(document.createTextNode('')),
          t
        );
      }
      var Ep = (function () {
        function e(e) {
          (this.isSpeedy = void 0 === e.speedy || e.speedy),
            (this.tags = []),
            (this.ctr = 0),
            (this.nonce = e.nonce),
            (this.key = e.key),
            (this.container = e.container),
            (this.before = null);
        }
        var t = e.prototype;
        return (
          (t.insert = function (e) {
            if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
              var t,
                s = Tz(this);
              (t =
                0 === this.tags.length
                  ? this.before
                  : this.tags[this.tags.length - 1].nextSibling),
                this.container.insertBefore(s, t),
                this.tags.push(s);
            }
            var n = this.tags[this.tags.length - 1];
            if (this.isSpeedy) {
              var r = Sz(n);
              try {
                var i = 105 === e.charCodeAt(1) && 64 === e.charCodeAt(0);
                r.insertRule(e, i ? 0 : r.cssRules.length);
              } catch (h) {
                0;
              }
            } else n.appendChild(document.createTextNode(e));
            this.ctr++;
          }),
          (t.flush = function () {
            this.tags.forEach(function (e) {
              return e.parentNode.removeChild(e);
            }),
              (this.tags = []),
              (this.ctr = 0);
          }),
          e
        );
      })();
      function Uz(e) {
        function a(e, a, t) {
          var c = a.trim().split(k);
          a = c;
          var s = c.length,
            i = e.length;
          switch (i) {
            case 0:
            case 1:
              var n = 0;
              for (e = 0 === i ? '' : e[0] + ' '; n < s; ++n)
                a[n] = r(e, a[n], t).trim();
              break;
            default:
              var l = (n = 0);
              for (a = []; n < s; ++n)
                for (var o = 0; o < i; ++o)
                  a[l++] = r(e[o] + ' ', c[n], t).trim();
          }
          return a;
        }
        function r(e, a, r) {
          var t = a.charCodeAt(0);
          switch ((33 > t && (t = (a = a.trim()).charCodeAt(0)), t)) {
            case 38:
              return a.replace(d, '$1' + e.trim());
            case 58:
              return e.trim() + a.replace(d, '$1' + e.trim());
            default:
              if (0 < 1 * r && 0 < a.indexOf('\f'))
                return a.replace(
                  d,
                  (58 === e.charCodeAt(0) ? '' : '$1') + e.trim()
                );
          }
          return e + a;
        }
        function t(e, a, r, s) {
          var i = e + ';',
            n = 2 * a + 3 * r + 4 * s;
          if (944 === n) {
            e = i.indexOf(':', 9) + 1;
            var l = i.substring(e, i.length - 1).trim();
            return (
              (l = i.substring(0, e).trim() + l + ';'),
              1 === T || (2 === T && c(l, 1)) ? '-webkit-' + l + l : l
            );
          }
          if (0 === T || (2 === T && !c(i, 1))) return i;
          switch (n) {
            case 1015:
              return 97 === i.charCodeAt(10) ? '-webkit-' + i + i : i;
            case 951:
              return 116 === i.charCodeAt(3) ? '-webkit-' + i + i : i;
            case 963:
              return 110 === i.charCodeAt(5) ? '-webkit-' + i + i : i;
            case 1009:
              if (100 !== i.charCodeAt(4)) break;
            case 969:
            case 942:
              return '-webkit-' + i + i;
            case 978:
              return '-webkit-' + i + '-moz-' + i + i;
            case 1019:
            case 983:
              return '-webkit-' + i + '-moz-' + i + '-ms-' + i + i;
            case 883:
              if (45 === i.charCodeAt(8)) return '-webkit-' + i + i;
              if (0 < i.indexOf('image-set(', 11))
                return i.replace(O, '$1-webkit-$2') + i;
              break;
            case 932:
              if (45 === i.charCodeAt(4))
                switch (i.charCodeAt(5)) {
                  case 103:
                    return (
                      '-webkit-box-' +
                      i.replace('-grow', '') +
                      '-webkit-' +
                      i +
                      '-ms-' +
                      i.replace('grow', 'positive') +
                      i
                    );
                  case 115:
                    return (
                      '-webkit-' +
                      i +
                      '-ms-' +
                      i.replace('shrink', 'negative') +
                      i
                    );
                  case 98:
                    return (
                      '-webkit-' +
                      i +
                      '-ms-' +
                      i.replace('basis', 'preferred-size') +
                      i
                    );
                }
              return '-webkit-' + i + '-ms-' + i + i;
            case 964:
              return '-webkit-' + i + '-ms-flex-' + i + i;
            case 1023:
              if (99 !== i.charCodeAt(8)) break;
              return (
                '-webkit-box-pack' +
                (l = i
                  .substring(i.indexOf(':', 15))
                  .replace('flex-', '')
                  .replace('space-between', 'justify')) +
                '-webkit-' +
                i +
                '-ms-flex-pack' +
                l +
                i
              );
            case 1005:
              return h.test(i)
                ? i.replace(b, ':-webkit-') + i.replace(b, ':-moz-') + i
                : i;
            case 1e3:
              switch (
                ((a = (l = i.substring(13).trim()).indexOf('-') + 1),
                l.charCodeAt(0) + l.charCodeAt(a))
              ) {
                case 226:
                  l = i.replace(A, 'tb');
                  break;
                case 232:
                  l = i.replace(A, 'tb-rl');
                  break;
                case 220:
                  l = i.replace(A, 'lr');
                  break;
                default:
                  return i;
              }
              return '-webkit-' + i + '-ms-' + l + i;
            case 1017:
              if (-1 === i.indexOf('sticky', 9)) break;
            case 975:
              switch (
                ((a = (i = e).length - 10),
                (n =
                  (l = (33 === i.charCodeAt(a) ? i.substring(0, a) : i)
                    .substring(e.indexOf(':', 7) + 1)
                    .trim()).charCodeAt(0) +
                  (0 | l.charCodeAt(7))))
              ) {
                case 203:
                  if (111 > l.charCodeAt(8)) break;
                case 115:
                  i = i.replace(l, '-webkit-' + l) + ';' + i;
                  break;
                case 207:
                case 102:
                  i =
                    i.replace(
                      l,
                      '-webkit-' + (102 < n ? 'inline-' : '') + 'box'
                    ) +
                    ';' +
                    i.replace(l, '-webkit-' + l) +
                    ';' +
                    i.replace(l, '-ms-' + l + 'box') +
                    ';' +
                    i;
              }
              return i + ';';
            case 938:
              if (45 === i.charCodeAt(5))
                switch (i.charCodeAt(6)) {
                  case 105:
                    return (
                      (l = i.replace('-items', '')),
                      '-webkit-' + i + '-webkit-box-' + l + '-ms-flex-' + l + i
                    );
                  case 115:
                    return (
                      '-webkit-' + i + '-ms-flex-item-' + i.replace(v, '') + i
                    );
                  default:
                    return (
                      '-webkit-' +
                      i +
                      '-ms-flex-line-pack' +
                      i.replace('align-content', '').replace(v, '') +
                      i
                    );
                }
              break;
            case 973:
            case 989:
              if (45 !== i.charCodeAt(3) || 122 === i.charCodeAt(4)) break;
            case 931:
            case 953:
              if (!0 === $.test(e))
                return 115 ===
                  (l = e.substring(e.indexOf(':') + 1)).charCodeAt(0)
                  ? t(e.replace('stretch', 'fill-available'), a, r, s).replace(
                      ':fill-available',
                      ':stretch'
                    )
                  : i.replace(l, '-webkit-' + l) +
                      i.replace(l, '-moz-' + l.replace('fill-', '')) +
                      i;
              break;
            case 962:
              if (
                ((i =
                  '-webkit-' +
                  i +
                  (102 === i.charCodeAt(5) ? '-ms-' + i : '') +
                  i),
                211 === r + s &&
                  105 === i.charCodeAt(13) &&
                  0 < i.indexOf('transform', 10))
              )
                return (
                  i
                    .substring(0, i.indexOf(';', 27) + 1)
                    .replace(u, '$1-webkit-$2') + i
                );
          }
          return i;
        }
        function c(e, a) {
          var r = e.indexOf(1 === a ? ':' : '{'),
            t = e.substring(0, 3 !== a ? r : 10);
          return (
            (r = e.substring(r + 1, e.length - 1)),
            B(2 !== a ? t : t.replace(x, '$1'), r, a)
          );
        }
        function s(e, a) {
          var r = t(a, a.charCodeAt(0), a.charCodeAt(1), a.charCodeAt(2));
          return r !== a + ';'
            ? r.replace(m, ' or ($1)').substring(4)
            : '(' + a + ')';
        }
        function i(e, a, r, t, c, s, i, n, o, f) {
          for (var b, h = 0, u = a; h < q; ++h)
            switch ((b = S[h].call(l, e, u, r, t, c, s, i, n, o, f))) {
              case void 0:
              case !1:
              case !0:
              case null:
                break;
              default:
                u = b;
            }
          if (u !== a) return u;
        }
        function n(e) {
          return (
            void 0 !== (e = e.prefix) &&
              ((B = null),
              e
                ? 'function' != typeof e
                  ? (T = 1)
                  : ((T = 2), (B = e))
                : (T = 0)),
            n
          );
        }
        function l(e, r) {
          var n = e;
          if ((33 > n.charCodeAt(0) && (n = n.trim()), (n = [n]), 0 < q)) {
            var l = i(-1, r, n, n, y, z, 0, 0, 0, 0);
            void 0 !== l && 'string' == typeof l && (r = l);
          }
          var b = (function e(r, n, l, b, h) {
            for (
              var u,
                k,
                d,
                A,
                m,
                v = 0,
                x = 0,
                $ = 0,
                O = 0,
                S = 0,
                B = 0,
                E = (d = u = 0),
                F = 0,
                G = 0,
                H = 0,
                I = 0,
                J = l.length,
                K = J - 1,
                L = '',
                M = '',
                N = '',
                P = '';
              F < J;

            ) {
              if (
                ((k = l.charCodeAt(F)),
                F === K &&
                  0 !== x + O + $ + v &&
                  (0 !== x && (k = 47 === x ? 10 : 47),
                  (O = $ = v = 0),
                  J++,
                  K++),
                0 === x + O + $ + v)
              ) {
                if (
                  F === K &&
                  (0 < G && (L = L.replace(f, '')), 0 < L.trim().length)
                ) {
                  switch (k) {
                    case 32:
                    case 9:
                    case 59:
                    case 13:
                    case 10:
                      break;
                    default:
                      L += l.charAt(F);
                  }
                  k = 59;
                }
                switch (k) {
                  case 123:
                    for (
                      u = (L = L.trim()).charCodeAt(0), d = 1, I = ++F;
                      F < J;

                    ) {
                      switch ((k = l.charCodeAt(F))) {
                        case 123:
                          d++;
                          break;
                        case 125:
                          d--;
                          break;
                        case 47:
                          switch ((k = l.charCodeAt(F + 1))) {
                            case 42:
                            case 47:
                              e: {
                                for (E = F + 1; E < K; ++E)
                                  switch (l.charCodeAt(E)) {
                                    case 47:
                                      if (
                                        42 === k &&
                                        42 === l.charCodeAt(E - 1) &&
                                        F + 2 !== E
                                      ) {
                                        F = E + 1;
                                        break e;
                                      }
                                      break;
                                    case 10:
                                      if (47 === k) {
                                        F = E + 1;
                                        break e;
                                      }
                                  }
                                F = E;
                              }
                          }
                          break;
                        case 91:
                          k++;
                        case 40:
                          k++;
                        case 34:
                        case 39:
                          for (; F++ < K && l.charCodeAt(F) !== k; );
                      }
                      if (0 === d) break;
                      F++;
                    }
                    switch (
                      ((d = l.substring(I, F)),
                      0 === u &&
                        (u = (L = L.replace(o, '').trim()).charCodeAt(0)),
                      u)
                    ) {
                      case 64:
                        switch (
                          (0 < G && (L = L.replace(f, '')),
                          (k = L.charCodeAt(1)))
                        ) {
                          case 100:
                          case 109:
                          case 115:
                          case 45:
                            G = n;
                            break;
                          default:
                            G = W;
                        }
                        if (
                          ((I = (d = e(n, G, d, k, h + 1)).length),
                          0 < q &&
                            ((m = i(
                              3,
                              d,
                              (G = a(W, L, H)),
                              n,
                              y,
                              z,
                              I,
                              k,
                              h,
                              b
                            )),
                            (L = G.join('')),
                            void 0 !== m &&
                              0 === (I = (d = m.trim()).length) &&
                              ((k = 0), (d = ''))),
                          0 < I)
                        )
                          switch (k) {
                            case 115:
                              L = L.replace(C, s);
                            case 100:
                            case 109:
                            case 45:
                              d = L + '{' + d + '}';
                              break;
                            case 107:
                              (d = (L = L.replace(w, '$1 $2')) + '{' + d + '}'),
                                (d =
                                  1 === T || (2 === T && c('@' + d, 3))
                                    ? '@-webkit-' + d + '@' + d
                                    : '@' + d);
                              break;
                            default:
                              (d = L + d), 112 === b && ((M += d), (d = ''));
                          }
                        else d = '';
                        break;
                      default:
                        d = e(n, a(n, L, H), d, b, h + 1);
                    }
                    (N += d),
                      (d = H = G = E = u = 0),
                      (L = ''),
                      (k = l.charCodeAt(++F));
                    break;
                  case 125:
                  case 59:
                    if (
                      1 <
                      (I = (L = (0 < G ? L.replace(f, '') : L).trim()).length)
                    )
                      switch (
                        (0 === E &&
                          ((u = L.charCodeAt(0)),
                          45 === u || (96 < u && 123 > u)) &&
                          (I = (L = L.replace(' ', ':')).length),
                        0 < q &&
                          void 0 !==
                            (m = i(1, L, n, r, y, z, M.length, b, h, b)) &&
                          0 === (I = (L = m.trim()).length) &&
                          (L = '\0\0'),
                        (u = L.charCodeAt(0)),
                        (k = L.charCodeAt(1)),
                        u)
                      ) {
                        case 0:
                          break;
                        case 64:
                          if (105 === k || 99 === k) {
                            P += L + l.charAt(F);
                            break;
                          }
                        default:
                          58 !== L.charCodeAt(I - 1) &&
                            (M += t(L, u, k, L.charCodeAt(2)));
                      }
                    (H = G = E = u = 0), (L = ''), (k = l.charCodeAt(++F));
                }
              }
              switch (k) {
                case 13:
                case 10:
                  47 === x
                    ? (x = 0)
                    : 0 === 1 + u &&
                      107 !== b &&
                      0 < L.length &&
                      ((G = 1), (L += '\0')),
                    0 < q * D && i(0, L, n, r, y, z, M.length, b, h, b),
                    (z = 1),
                    y++;
                  break;
                case 59:
                case 125:
                  if (0 === x + O + $ + v) {
                    z++;
                    break;
                  }
                default:
                  switch ((z++, (A = l.charAt(F)), k)) {
                    case 9:
                    case 32:
                      if (0 === O + v + x)
                        switch (S) {
                          case 44:
                          case 58:
                          case 9:
                          case 32:
                            A = '';
                            break;
                          default:
                            32 !== k && (A = ' ');
                        }
                      break;
                    case 0:
                      A = '\\0';
                      break;
                    case 12:
                      A = '\\f';
                      break;
                    case 11:
                      A = '\\v';
                      break;
                    case 38:
                      0 === O + x + v && ((G = H = 1), (A = '\f' + A));
                      break;
                    case 108:
                      if (0 === O + x + v + j && 0 < E)
                        switch (F - E) {
                          case 2:
                            112 === S && 58 === l.charCodeAt(F - 3) && (j = S);
                          case 8:
                            111 === B && (j = B);
                        }
                      break;
                    case 58:
                      0 === O + x + v && (E = F);
                      break;
                    case 44:
                      0 === x + $ + O + v && ((G = 1), (A += '\r'));
                      break;
                    case 34:
                    case 39:
                      0 === x && (O = O === k ? 0 : 0 === O ? k : O);
                      break;
                    case 91:
                      0 === O + x + $ && v++;
                      break;
                    case 93:
                      0 === O + x + $ && v--;
                      break;
                    case 41:
                      0 === O + x + v && $--;
                      break;
                    case 40:
                      if (0 === O + x + v) {
                        if (0 === u)
                          switch (2 * S + 3 * B) {
                            case 533:
                              break;
                            default:
                              u = 1;
                          }
                        $++;
                      }
                      break;
                    case 64:
                      0 === x + $ + O + v + E + d && (d = 1);
                      break;
                    case 42:
                    case 47:
                      if (!(0 < O + v + $))
                        switch (x) {
                          case 0:
                            switch (2 * k + 3 * l.charCodeAt(F + 1)) {
                              case 235:
                                x = 47;
                                break;
                              case 220:
                                (I = F), (x = 42);
                            }
                            break;
                          case 42:
                            47 === k &&
                              42 === S &&
                              I + 2 !== F &&
                              (33 === l.charCodeAt(I + 2) &&
                                (M += l.substring(I, F + 1)),
                              (A = ''),
                              (x = 0));
                        }
                  }
                  0 === x && (L += A);
              }
              (B = S), (S = k), F++;
            }
            if (0 < (I = M.length)) {
              if (
                ((G = n),
                0 < q &&
                  void 0 !== (m = i(2, M, G, r, y, z, I, b, h, b)) &&
                  0 === (M = m).length)
              )
                return P + M + N;
              if (((M = G.join(',') + '{' + M + '}'), 0 != T * j)) {
                switch ((2 !== T || c(M, 2) || (j = 0), j)) {
                  case 111:
                    M = M.replace(g, ':-moz-$1') + M;
                    break;
                  case 112:
                    M =
                      M.replace(p, '::-webkit-input-$1') +
                      M.replace(p, '::-moz-$1') +
                      M.replace(p, ':-ms-input-$1') +
                      M;
                }
                j = 0;
              }
            }
            return P + M + N;
          })(W, n, r, 0, 0);
          return (
            0 < q &&
              void 0 !== (l = i(-2, b, n, n, y, z, b.length, 0, 0, 0)) &&
              (b = l),
            '',
            (j = 0),
            (z = y = 1),
            b
          );
        }
        var o = /^\0+/g,
          f = /[\0\r\f]/g,
          b = /: */g,
          h = /zoo|gra/,
          u = /([,: ])(transform)/g,
          k = /,\r+?/g,
          d = /([\t\r\n ])*\f?&/g,
          w = /@(k\w+)\s*(\S*)\s*/,
          p = /::(place)/g,
          g = /:(read-only)/g,
          A = /[svh]\w+-[tblr]{2}/,
          C = /\(\s*(.*)\s*\)/g,
          m = /([\s\S]*?);/g,
          v = /-self|flex-/g,
          x = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
          $ = /stretch|:\s*\w+\-(?:conte|avail)/,
          O = /([^-])(image-set\()/,
          z = 1,
          y = 1,
          j = 0,
          T = 1,
          W = [],
          S = [],
          q = 0,
          B = null,
          D = 0;
        return (
          (l.use = function e(a) {
            switch (a) {
              case void 0:
              case null:
                q = S.length = 0;
                break;
              default:
                if ('function' == typeof a) S[q++] = a;
                else if ('object' == typeof a)
                  for (var r = 0, t = a.length; r < t; ++r) e(a[r]);
                else D = 0 | !!a;
            }
            return e;
          }),
          (l.set = n),
          void 0 !== e && n(e),
          l
        );
      }
      var fj = '/*|*/',
        Vz = fj + '}';
      function Wz(e) {
        e && Xf.current.insert(e + '}');
      }
      var Xf = {current: null},
        Xz = function (e, r, t, $, a, n, i, d, o, c) {
          switch (e) {
            case 1:
              switch (r.charCodeAt(0)) {
                case 64:
                  return Xf.current.insert(r + ';'), '';
                case 108:
                  if (98 === r.charCodeAt(2)) return '';
              }
              break;
            case 2:
              if (0 === d) return r + fj;
              break;
            case 3:
              switch (d) {
                case 102:
                case 112:
                  return Xf.current.insert(t[0] + r), '';
                default:
                  return r + (0 === c ? fj : '');
              }
            case -2:
              r.split(Vz).forEach(Wz);
          }
        },
        Yz = function (e) {
          void 0 === e && (e = {});
          var r,
            t = e.key || 'css';
          void 0 !== e.prefix && (r = {prefix: e.prefix});
          var $ = new Uz(r);
          var a,
            n = {};
          a = e.container || document.head;
          var i,
            d = document.querySelectorAll('style[data-emotion-' + t + ']');
          Array.prototype.forEach.call(d, function (e) {
            e
              .getAttribute('data-emotion-' + t)
              .split(' ')
              .forEach(function (e) {
                n[e] = !0;
              }),
              e.parentNode !== a && a.appendChild(e);
          }),
            $.use(e.stylisPlugins)(Xz),
            (i = function (e, r, t, a) {
              var n = r.name;
              (Xf.current = t), $(e, r.styles), a && (o.inserted[n] = !0);
            });
          var o = {
            key: t,
            sheet: new Ep({
              key: t,
              container: a,
              nonce: e.nonce,
              speedy: e.speedy,
            }),
            nonce: e.nonce,
            inserted: n,
            registered: {},
            insert: i,
          };
          return o;
        };
      var Zz = !0;
      function gj(e, t, r) {
        var s = '';
        return (
          r.split(' ').forEach(function (r) {
            void 0 !== e[r] ? t.push(e[r]) : (s += r + ' ');
          }),
          s
        );
      }
      var Yf = function (e, t, r) {
        var s = e.key + '-' + t.name;
        if (
          ((!1 === r || (!1 === Zz && void 0 !== e.compat)) &&
            void 0 === e.registered[s] &&
            (e.registered[s] = t.styles),
          void 0 === e.inserted[t.name])
        ) {
          var $ = t;
          do {
            e.insert('.' + s, $, e.sheet, !0);
            $ = $.next;
          } while (void 0 !== $);
        }
      };
      function $z(t) {
        for (var e, r = 0, a = 0, o = t.length; o >= 4; ++a, o -= 4)
          (e =
            1540483477 *
              (65535 &
                (e =
                  (255 & t.charCodeAt(a)) |
                  ((255 & t.charCodeAt(++a)) << 8) |
                  ((255 & t.charCodeAt(++a)) << 16) |
                  ((255 & t.charCodeAt(++a)) << 24))) +
            ((59797 * (e >>> 16)) << 16)),
            (r =
              (1540483477 * (65535 & (e ^= e >>> 24)) +
                ((59797 * (e >>> 16)) << 16)) ^
              (1540483477 * (65535 & r) + ((59797 * (r >>> 16)) << 16)));
        switch (o) {
          case 3:
            r ^= (255 & t.charCodeAt(a + 2)) << 16;
          case 2:
            r ^= (255 & t.charCodeAt(a + 1)) << 8;
          case 1:
            r =
              1540483477 * (65535 & (r ^= 255 & t.charCodeAt(a))) +
              ((59797 * (r >>> 16)) << 16);
        }
        return (
          ((r =
            1540483477 * (65535 & (r ^= r >>> 13)) +
            ((59797 * (r >>> 16)) << 16)) ^
            (r >>> 15)) >>>
          0
        ).toString(36);
      }
      var _z = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
      };
      Ai();
      var o,
        p,
        q,
        r,
        s,
        t,
        aA = /[A-Z]|^ms/g,
        bA = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        Fp = function (e) {
          return 45 === e.charCodeAt(1);
        },
        Gp = function (e) {
          return null != e && 'boolean' != typeof e;
        },
        hj = Lf(function (e) {
          return Fp(e) ? e : e.replace(aA, '-$&').toLowerCase();
        }),
        Hp = function (e, r) {
          switch (e) {
            case 'animation':
            case 'animationName':
              if ('string' == typeof r)
                return r.replace(bA, function (e, r, a) {
                  return (le = {name: r, styles: a, next: le}), r;
                });
          }
          return 1 === _z[e] || Fp(e) || 'number' != typeof r || 0 === r
            ? r
            : r + 'px';
        };
      function ke(e, r, a, t) {
        if (null == a) return '';
        if (void 0 !== a.__emotion_styles) return a;
        switch (typeof a) {
          case 'boolean':
            return '';
          case 'object':
            if (1 === a.anim)
              return (le = {name: a.name, styles: a.styles, next: le}), a.name;
            if (void 0 !== a.styles) {
              var $ = a.next;
              if (void 0 !== $)
                for (; void 0 !== $; )
                  (le = {name: $.name, styles: $.styles, next: le}),
                    ($ = $.next);
              var n = a.styles + ';';
              return n;
            }
            return cA(e, r, a);
          case 'function':
            if (void 0 !== e) {
              var o = le,
                s = a(e);
              return (le = o), ke(e, r, s, t);
            }
            break;
          case 'string':
        }
        if (null == r) return a;
        var l = r[a];
        return void 0 === l || t ? a : l;
      }
      function cA(e, r, a) {
        var t = '';
        if (Array.isArray(a))
          for (var $ = 0; $ < a.length; $++) t += ke(e, r, a[$], !1);
        else
          for (var n in a) {
            var o = a[n];
            if ('object' != typeof o)
              null != r && void 0 !== r[o]
                ? (t += n + '{' + r[o] + '}')
                : Gp(o) && (t += hj(n) + ':' + Hp(n, o) + ';');
            else if (
              !Array.isArray(o) ||
              'string' != typeof o[0] ||
              (null != r && void 0 !== r[o[0]])
            ) {
              var s = ke(e, r, o, !1);
              switch (n) {
                case 'animation':
                case 'animationName':
                  t += hj(n) + ':' + s + ';';
                  break;
                default:
                  t += n + '{' + s + '}';
              }
            } else
              for (var l = 0; l < o.length; l++)
                Gp(o[l]) && (t += hj(n) + ':' + Hp(n, o[l]) + ';');
          }
        return t;
      }
      var u,
        le,
        Ip = /label:\s*([^\s;\n{]+)\s*;/g;
      var $c = function (e, r, a) {
        if (
          1 === e.length &&
          'object' == typeof e[0] &&
          null !== e[0] &&
          void 0 !== e[0].styles
        )
          return e[0];
        var t = !0,
          $ = '';
        le = void 0;
        var n = e[0];
        null == n || void 0 === n.raw
          ? ((t = !1), ($ += ke(a, r, n, !1)))
          : ($ += n[0]);
        for (var o = 1; o < e.length; o++)
          ($ += ke(a, r, e[o], 46 === $.charCodeAt($.length - 1))),
            t && ($ += n[o]);
        Ip.lastIndex = 0;
        for (var s, l = ''; null !== (s = Ip.exec($)); ) l += '-' + s[1];
        var i = $z($) + l;
        return {name: i, styles: $, next: le};
      };
      function dA() {
        for (var e = arguments.length, r = new Array(e), $ = 0; $ < e; $++)
          r[$] = arguments[$];
        return $c(r);
      }
      Ka();
      var Jp = aa.createContext(
          'undefined' != typeof HTMLElement ? Yz() : null
        ),
        _c = aa.createContext({}),
        v = Jp.Provider,
        Zf = function (e) {
          return aa.forwardRef(function (r, t) {
            return aa.createElement(Jp.Consumer, null, function (a) {
              return e(r, a, t);
            });
          });
        },
        ij = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
        jj = Object.prototype.hasOwnProperty,
        Kp = function (e, r, t, a) {
          var h = null === t ? r.css : r.css(t);
          'string' == typeof h &&
            void 0 !== e.registered[h] &&
            (h = e.registered[h]);
          var $ = r[ij],
            o = [h],
            n = '';
          'string' == typeof r.className
            ? (n = gj(e.registered, o, r.className))
            : null != r.className && (n = r.className + ' ');
          var s = $c(o);
          Yf(e, s, 'string' == typeof $);
          n += e.key + '-' + s.name;
          var i = {};
          for (var l in r)
            jj.call(r, l) && 'css' !== l && l !== ij && (i[l] = r[l]);
          return (i.ref = a), (i.className = n), aa.createElement($, i);
        },
        eA = Zf(function (e, r, t) {
          return 'function' == typeof e.css
            ? aa.createElement(_c.Consumer, null, function (a) {
                return Kp(r, e, a, t);
              })
            : Kp(r, e, null, t);
        });
      var fA = function (e, r) {
          var t = arguments;
          if (null == r || !jj.call(r, 'css'))
            return aa.createElement.apply(void 0, t);
          var a = t.length,
            h = new Array(a);
          h[0] = eA;
          var $ = {};
          for (var o in r) jj.call(r, o) && ($[o] = r[o]);
          ($[ij] = e), (h[1] = $);
          for (var n = 2; n < a; n++) h[n] = t[n];
          return aa.createElement.apply(null, h);
        },
        Lp = Zf(function (e, r) {
          var t = e.styles;
          if ('function' == typeof t)
            return aa.createElement(_c.Consumer, null, function (e) {
              var a = $c([t(e)]);
              return aa.createElement(Mp, {serialized: a, cache: r});
            });
          var a = $c([t]);
          return aa.createElement(Mp, {serialized: a, cache: r});
        }),
        Mp = (function (e) {
          function r(r, t, a) {
            return e.call(this, r, t, a) || this;
          }
          var $HOM9$$interop$default = za(Qz);
          $HOM9$$interop$default.d(r, e);
          var t = r.prototype;
          return (
            (t.componentDidMount = function () {
              this.sheet = new Ep({
                key: this.props.cache.key + '-global',
                nonce: this.props.cache.sheet.nonce,
                container: this.props.cache.sheet.container,
              });
              var e = document.querySelector(
                'style[data-emotion-' +
                  this.props.cache.key +
                  '="' +
                  this.props.serialized.name +
                  '"]'
              );
              null !== e && this.sheet.tags.push(e),
                this.props.cache.sheet.tags.length &&
                  (this.sheet.before = this.props.cache.sheet.tags[0]),
                this.insertStyles();
            }),
            (t.componentDidUpdate = function (e) {
              e.serialized.name !== this.props.serialized.name &&
                this.insertStyles();
            }),
            (t.insertStyles = function () {
              if (
                (void 0 !== this.props.serialized.next &&
                  Yf(this.props.cache, this.props.serialized.next, !0),
                this.sheet.tags.length)
              ) {
                var e =
                  this.sheet.tags[this.sheet.tags.length - 1]
                    .nextElementSibling;
                (this.sheet.before = e), this.sheet.flush();
              }
              this.props.cache.insert(
                '',
                this.props.serialized,
                this.sheet,
                !1
              );
            }),
            (t.componentWillUnmount = function () {
              this.sheet.flush();
            }),
            (t.render = function () {
              return null;
            }),
            r
          );
        })(aa.Component),
        gA = function () {
          var e = dA.apply(void 0, arguments),
            r = 'animation-' + e.name;
          return {
            name: r,
            styles: '@keyframes ' + r + '{' + e.styles + '}',
            anim: 1,
            toString: function () {
              return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
            },
          };
        },
        hA = function e(r) {
          for (var t = r.length, a = 0, h = ''; a < t; a++) {
            var $ = r[a];
            if (null != $) {
              var o = void 0;
              switch (typeof $) {
                case 'boolean':
                  break;
                case 'object':
                  if (Array.isArray($)) o = e($);
                  else
                    for (var n in ((o = ''), $))
                      $[n] && n && (o && (o += ' '), (o += n));
                  break;
                default:
                  o = $;
              }
              o && (h && (h += ' '), (h += o));
            }
          }
          return h;
        };
      function iA(e, r, t) {
        var a = [],
          h = gj(e, a, t);
        return a.length < 2 ? t : h + r(a);
      }
      var w = Zf(function (e, r) {
        return aa.createElement(_c.Consumer, null, function (t) {
          var a = function () {
              for (
                var e = arguments.length, t = new Array(e), a = 0;
                a < e;
                a++
              )
                t[a] = arguments[a];
              var h = $c(t, r.registered);
              return Yf(r, h, !1), r.key + '-' + h.name;
            },
            h = {
              css: a,
              cx: function () {
                for (
                  var e = arguments.length, t = new Array(e), h = 0;
                  h < e;
                  h++
                )
                  t[h] = arguments[h];
                return iA(r.registered, a, hA(t));
              },
              theme: t,
            },
            $ = e.children(h);
          return !0, $;
        });
      });
      var Ja = function (r, e, t, o, i) {
          for (e = e && e.split ? e.split('.') : [e], o = 0; o < e.length; o++)
            r = r ? r[e[o]] : i;
          return r === i ? t : r;
        },
        jA = [40, 52, 64].map(function (r) {
          return r + 'em';
        }),
        kA = {
          space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
          fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
        },
        lA = {
          bg: 'backgroundColor',
          m: 'margin',
          mt: 'marginTop',
          mr: 'marginRight',
          mb: 'marginBottom',
          ml: 'marginLeft',
          mx: 'marginX',
          my: 'marginY',
          p: 'padding',
          pt: 'paddingTop',
          pr: 'paddingRight',
          pb: 'paddingBottom',
          pl: 'paddingLeft',
          px: 'paddingX',
          py: 'paddingY',
        },
        Np = {
          marginX: ['marginLeft', 'marginRight'],
          marginY: ['marginTop', 'marginBottom'],
          paddingX: ['paddingLeft', 'paddingRight'],
          paddingY: ['paddingTop', 'paddingBottom'],
          size: ['width', 'height'],
        },
        mA = {
          color: 'colors',
          backgroundColor: 'colors',
          borderColor: 'colors',
          margin: 'space',
          marginTop: 'space',
          marginRight: 'space',
          marginBottom: 'space',
          marginLeft: 'space',
          marginX: 'space',
          marginY: 'space',
          padding: 'space',
          paddingTop: 'space',
          paddingRight: 'space',
          paddingBottom: 'space',
          paddingLeft: 'space',
          paddingX: 'space',
          paddingY: 'space',
          top: 'space',
          right: 'space',
          bottom: 'space',
          left: 'space',
          gridGap: 'space',
          gridColumnGap: 'space',
          gridRowGap: 'space',
          gap: 'space',
          columnGap: 'space',
          rowGap: 'space',
          fontFamily: 'fonts',
          fontSize: 'fontSizes',
          fontWeight: 'fontWeights',
          lineHeight: 'lineHeights',
          letterSpacing: 'letterSpacings',
          border: 'borders',
          borderTop: 'borders',
          borderRight: 'borders',
          borderBottom: 'borders',
          borderLeft: 'borders',
          borderWidth: 'borderWidths',
          borderStyle: 'borderStyles',
          borderRadius: 'radii',
          borderTopRightRadius: 'radii',
          borderTopLeftRadius: 'radii',
          borderBottomRightRadius: 'radii',
          borderBottomLeftRadius: 'radii',
          borderTopWidth: 'borderWidths',
          borderTopColor: 'colors',
          borderTopStyle: 'borderStyles',
          borderBottomWidth: 'borderWidths',
          borderBottomColor: 'colors',
          borderBottomStyle: 'borderStyles',
          borderLeftWidth: 'borderWidths',
          borderLeftColor: 'colors',
          borderLeftStyle: 'borderStyles',
          borderRightWidth: 'borderWidths',
          borderRightColor: 'colors',
          borderRightStyle: 'borderStyles',
          outlineColor: 'colors',
          boxShadow: 'shadows',
          textShadow: 'shadows',
          zIndex: 'zIndices',
          width: 'sizes',
          minWidth: 'sizes',
          maxWidth: 'sizes',
          height: 'sizes',
          minHeight: 'sizes',
          maxHeight: 'sizes',
          flexBasis: 'sizes',
          size: 'sizes',
          fill: 'colors',
          stroke: 'colors',
        },
        nA = function (r, e) {
          if ('number' != typeof e || e >= 0) return Ja(r, e, e);
          var t = Math.abs(e),
            o = Ja(r, t, t);
          return 'string' == typeof o ? '-' + o : -1 * o;
        },
        oA = [
          'margin',
          'marginTop',
          'marginRight',
          'marginBottom',
          'marginLeft',
          'marginX',
          'marginY',
          'top',
          'bottom',
          'left',
          'right',
        ].reduce(function (r, e) {
          var t;
          return Object.assign({}, r, (((t = {})[e] = nA), t));
        }, {}),
        pA = function (r) {
          return function (e) {
            var t = {},
              o = Ja(e, 'breakpoints', jA),
              i = [null].concat(
                o.map(function (r) {
                  return '@media screen and (min-width: ' + r + ')';
                })
              );
            for (var a in r) {
              var s = 'function' == typeof r[a] ? r[a](e) : r[a];
              if (null != s)
                if (Array.isArray(s))
                  for (var n = 0; n < s.slice(0, i.length).length; n++) {
                    var d = i[n];
                    d
                      ? ((t[d] = t[d] || {}), null != s[n] && (t[d][a] = s[n]))
                      : (t[a] = s[n]);
                  }
                else t[a] = s;
            }
            return t;
          };
        },
        Lb = function (r) {
          return function (e) {
            void 0 === e && (e = {});
            var t = Object.assign({}, kA, e.theme || e),
              o = {},
              i = 'function' == typeof r ? r(t) : r,
              a = pA(i)(t);
            for (var s in a) {
              var n = a[s],
                d = 'function' == typeof n ? n(t) : n;
              if ('variant' !== s) {
                if (d && 'object' == typeof d) o[s] = Lb(d)(t);
                else {
                  var p = Ja(lA, s, s),
                    $ = Ja(mA, p),
                    g = Ja(t, $, Ja(t, p, {})),
                    b = Ja(oA, p, Ja)(g, d, d);
                  if (Np[p])
                    for (var l = Np[p], c = 0; c < l.length; c++) o[l[c]] = b;
                  else o[p] = b;
                }
              } else {
                var m = Lb(Ja(t, d))(t);
                o = Object.assign({}, o, m);
              }
            }
            return o;
          };
        };
      var Op = {},
        qA = function (e) {
          return rA(e) && !sA(e);
        };
      function rA(e) {
        return !!e && 'object' == typeof e;
      }
      function sA(e) {
        var r = Object.prototype.toString.call(e);
        return '[object RegExp]' === r || '[object Date]' === r || vA(e);
      }
      var tA = 'function' == typeof Symbol && Symbol.for,
        uA = tA ? Symbol.for('react.element') : 60103;
      function vA(e) {
        return e.$$typeof === uA;
      }
      function wA(e) {
        return Array.isArray(e) ? [] : {};
      }
      function me(e, r) {
        return !1 !== r.clone && r.isMergeableObject(e) ? ad(wA(e), e, r) : e;
      }
      function xA(e, r, $) {
        return e.concat(r).map(function (e) {
          return me(e, $);
        });
      }
      function yA(e, r) {
        if (!r.customMerge) return ad;
        var $ = r.customMerge(e);
        return 'function' == typeof $ ? $ : ad;
      }
      function zA(e) {
        return Object.getOwnPropertySymbols
          ? Object.getOwnPropertySymbols(e).filter(function (r) {
              return e.propertyIsEnumerable(r);
            })
          : [];
      }
      function Pp(e) {
        return Object.keys(e).concat(zA(e));
      }
      function Qp(e, r) {
        try {
          return r in e;
        } catch ($) {
          return !1;
        }
      }
      function AA(e, r) {
        return (
          Qp(e, r) &&
          !(
            Object.hasOwnProperty.call(e, r) &&
            Object.propertyIsEnumerable.call(e, r)
          )
        );
      }
      function BA(e, r, $) {
        var t = {};
        return (
          $.isMergeableObject(e) &&
            Pp(e).forEach(function (r) {
              t[r] = me(e[r], $);
            }),
          Pp(r).forEach(function (o) {
            AA(e, o) ||
              (Qp(e, o) && $.isMergeableObject(r[o])
                ? (t[o] = yA(o, $)(e[o], r[o], $))
                : (t[o] = me(r[o], $)));
          }),
          t
        );
      }
      function ad(e, r, $) {
        (($ = $ || {}).arrayMerge = $.arrayMerge || xA),
          ($.isMergeableObject = $.isMergeableObject || qA),
          ($.cloneUnlessOtherwiseSpecified = me);
        var t = Array.isArray(r);
        return t === Array.isArray(e)
          ? t
            ? $.arrayMerge(e, r, $)
            : BA(e, r, $)
          : me(r, $);
      }
      ad.all = function (e, r) {
        if (!Array.isArray(e))
          throw new Error('first argument should be an array');
        return e.reduce(function (e, $) {
          return ad(e, $, r);
        }, {});
      };
      var CA = ad;
      Op = CA;
      var DA = {};
      DA = {
        _args: [
          ['@emotion/core@10.0.28', '/Users/alexreichert/projects/snippet'],
        ],
        _from: '@emotion/core@10.0.28',
        _id: '@emotion/core@10.0.28',
        _inBundle: !1,
        _integrity:
          'sha512-pH8UueKYO5jgg0Iq+AmCLxBsvuGtvlmiDCOuv8fGNYn3cowFpLN98L8zO56U0H1PjDIyAlXymgL3Wu7u7v6hbA==',
        _location: '/@emotion/core',
        _phantomChildren: {},
        _requested: {
          type: 'version',
          registry: !0,
          raw: '@emotion/core@10.0.28',
          name: '@emotion/core',
          escapedName: '@emotion%2fcore',
          scope: '@emotion',
          rawSpec: '10.0.28',
          saveSpec: null,
          fetchSpec: '10.0.28',
        },
        _requiredBy: [
          '/@theme-ui/color-modes',
          '/@theme-ui/components',
          '/@theme-ui/core',
          '/@theme-ui/mdx',
          '/@theme-ui/theme-provider',
          '/@types/theme-ui__components',
        ],
        _resolved:
          'https://registry.npmjs.org/@emotion/core/-/core-10.0.28.tgz',
        _spec: '10.0.28',
        _where: '/Users/alexreichert/projects/snippet',
        author: {
          name: 'mitchellhamilton',
          email: 'mitchell@mitchellhamilton.me',
        },
        browser: {
          './dist/core.cjs.js': './dist/core.browser.cjs.js',
          './dist/core.esm.js': './dist/core.browser.esm.js',
        },
        dependencies: {
          '@babel/runtime': '^7.5.5',
          '@emotion/cache': '^10.0.27',
          '@emotion/css': '^10.0.27',
          '@emotion/serialize': '^0.11.15',
          '@emotion/sheet': '0.9.4',
          '@emotion/utils': '0.11.3',
        },
        description: '> Simple styling in React.',
        devDependencies: {
          '@emotion/styled': '^10.0.27',
          '@types/react': '^16.8.20',
          dtslint: '^0.3.0',
          emotion: '^10.0.27',
          'emotion-server': '^10.0.27',
          'emotion-theming': '^10.0.27',
          'html-tag-names': '^1.1.2',
          react: '^16.5.2',
          'svg-tag-names': '^1.1.1',
        },
        files: ['src', 'dist', 'types'],
        license: 'MIT',
        main: 'dist/core.cjs.js',
        module: 'dist/core.esm.js',
        name: '@emotion/core',
        peerDependencies: {react: '>=16.3.0'},
        preconstruct: {umdName: 'emotionCore'},
        publishConfig: {access: 'public'},
        repository: {
          type: 'git',
          url: 'https://github.com/emotion-js/emotion/tree/master/packages/core',
        },
        scripts: {'test:typescript': 'dtslint types'},
        types: 'types/index.d.ts',
        'umd:main': 'dist/core.umd.min.js',
        version: '10.0.28',
      };
      Ka();
      var EA = function (e) {
          if (e.sx || e.css)
            return function (r) {
              return [
                Lb(e.sx)(r),
                'function' == typeof e.css ? e.css(r) : e.css,
              ];
            };
        },
        FA = function (e) {
          if (!e) return null;
          var r = {};
          for (var $ in e) 'sx' !== $ && (r[$] = e[$]);
          var t = EA(e);
          return t && (r.css = t), r;
        },
        ta = function (e, r) {
          for (var $ = [], t = arguments.length - 2; t-- > 0; )
            $[t] = arguments[t + 2];
          return fA.apply(void 0, [e, FA(r)].concat($));
        },
        kj = Q.d.createContext({
          __EMOTION_VERSION__: DA.version,
          theme: null,
        }),
        lj = function () {
          return Q.d.useContext(kj);
        },
        Rp = 'function' == typeof Symbol && Symbol.for,
        GA = Rp ? Symbol.for('react.element') : 60103,
        HA = Rp ? Symbol.for('react.forward_ref') : 60103,
        Sp = function (e) {
          return (
            !!e &&
            'object' == typeof e &&
            e.$$typeof !== GA &&
            e.$$typeof !== HA
          );
        },
        Tp = function (e, r, $) {
          return r;
        },
        mj = function (e, r) {
          var $oANd$$interop$default = za(Op);
          return $oANd$$interop$default.d(e, r, {
            isMergeableObject: Sp,
            arrayMerge: Tp,
          });
        };
      mj.all = function () {
        for (var e = [], r = arguments.length; r--; ) e[r] = arguments[r];
        var $oANd$$interop$default = za(Op);
        return $oANd$$interop$default.d.all(e, {
          isMergeableObject: Sp,
          arrayMerge: Tp,
        });
      };
      var IA = function (e) {
          var r = e.context,
            $ = e.children;
          return ta(
            _c.Provider,
            {value: r.theme},
            ta(kj.Provider, {value: r, children: $})
          );
        },
        Up = function (e) {
          var r = e.theme,
            $ = e.children,
            t = lj();
          var o =
            'function' == typeof r
              ? Object.assign({}, t, {theme: r(t.theme)})
              : mj.all({}, t, {theme: r});
          return ta(IA, {context: o, children: $});
        };
      Ka();
      var Vp = function (e) {
          return '--theme-ui-' + e;
        },
        JA = function (e, o) {
          return 'var(' + Vp(e) + ', ' + o + ')';
        },
        Wp = function () {
          for (var e = [], o = arguments.length; o--; ) e[o] = arguments[o];
          return e.filter(Boolean).join('-');
        },
        KA = {fontWeights: !0, lineHeights: !0},
        LA = {
          useCustomProperties: !0,
          initialColorModeName: !0,
          initialColorMode: !0,
        },
        MA = function (e, o) {
          return 'number' != typeof o ? o : KA[e] ? o : o + 'px';
        },
        Xp = function (e, o, r) {
          var t = Array.isArray(e) ? [] : {};
          for (var $ in e) {
            var a = e[$],
              i = Wp(o, $);
            if (a && 'object' == typeof a) t[$] = Xp(a, i, $);
            else if (LA[$]) t[$] = a;
            else {
              var s = MA(r || $, a);
              t[$] = JA(i, s);
            }
          }
          return t;
        },
        nj = function (e, o) {
          var r = {};
          for (var t in o)
            if ('modes' !== t) {
              var $ = Wp(e, t),
                a = o[t];
              a && 'object' == typeof a
                ? (r = Object.assign({}, r, nj($, a)))
                : (r[Vp($)] = a);
            }
          return r;
        },
        NA = function (e) {
          if ((void 0 === e && (e = {}), !e.colors || !1 === e.useBodyStyles))
            return {};
          if (!1 === e.useCustomProperties || !e.colors.modes)
            return Lb({body: {color: 'text', bg: 'background'}})(e);
          var o = e.rawColors || e.colors,
            r = o.modes,
            t = nj('colors', o);
          return (
            Object.keys(r).forEach(function (e) {
              t['&.theme-ui-' + e] = nj('colors', r[e]);
            }),
            Lb({
              body: Object.assign({}, t, {color: 'text', bg: 'background'}),
            })(e)
          );
        },
        Yp = 'theme-ui-color-mode',
        Zp = {
          get: function (e) {
            try {
              return window.localStorage.getItem(Yp) || e;
            } catch (o) {
              console.warn(
                'localStorage is disabled and color mode might not work as expected.',
                'Please check your Site Settings.',
                o
              );
            }
          },
          set: function (e) {
            try {
              window.localStorage.setItem(Yp, e);
            } catch (o) {
              console.warn(
                'localStorage is disabled and color mode might not work as expected.',
                'Please check your Site Settings.',
                o
              );
            }
          },
        },
        OA = function () {
          var e = '(prefers-color-scheme: dark)',
            o = window.matchMedia ? window.matchMedia(e) : {},
            r = window.matchMedia
              ? window.matchMedia('(prefers-color-scheme: light)')
              : {};
          return o.media === e && o.matches
            ? 'dark'
            : '(prefers-color-scheme: light)' === r.media && r.matches
            ? 'light'
            : 'default';
        },
        PA = function (e) {
          void 0 === e && (e = {});
          var o = Q.d.useState(e.initialColorModeName || 'default'),
            r = o[0],
            t = o[1];
          return (
            Q.d.useEffect(function () {
              var o = Zp.get();
              if (
                (document.body.classList.remove('theme-ui-' + o),
                o || !e.useColorSchemeMediaQuery)
              )
                o && o !== r && t(o);
              else {
                var $ = OA();
                t($);
              }
            }, []),
            Q.d.useEffect(
              function () {
                r && Zp.set(r);
              },
              [r]
            ),
            [r, t]
          );
        },
        QA = function (e, o) {
          if (!o) return e;
          var r = Ja(e, 'colors.modes', {});
          return mj.all({}, e, {colors: Ja(r, o, {})});
        },
        RA = function () {
          return ta(Lp, {
            styles: function (e) {
              return NA(e);
            },
          });
        },
        SA = function (e) {
          var o = e.children,
            r = lj(),
            t = PA(r.theme),
            $ = t[0],
            a = t[1],
            i = QA(r.theme || {}, $),
            s = Object.assign({}, i);
          !1 !== i.useCustomProperties && (s.colors = Xp(s.colors, 'colors'));
          var n = Object.assign({}, r, {
            theme: i,
            colorMode: $,
            setColorMode: a,
          });
          return ta(
            _c.Provider,
            {value: s},
            ta(kj.Provider, {value: n}, ta(RA, {key: 'color-mode'}), o)
          );
        };
      var TA = {};
      function UA(e, r, $) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: $,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = $),
          e
        );
      }
      TA = UA;
      Ka(), Ci();
      var VA = Bi,
        WA = function (e) {
          return 'theme' !== e && 'innerRef' !== e;
        },
        $p = function (e) {
          return 'string' == typeof e && e.charCodeAt(0) > 96 ? VA : WA;
        };
      function _p(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r &&
            (o = o.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function XA(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? _p(t, !0).forEach(function (r) {
                var $IxO8$$interop$default = za(TA);
                $IxO8$$interop$default.d(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _p(t).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var YA = function e(r, t) {
        var o, n, a;
        void 0 !== t &&
          ((o = t.label),
          (a = t.target),
          (n =
            r.__emotion_forwardProp && t.shouldForwardProp
              ? function (e) {
                  return r.__emotion_forwardProp(e) && t.shouldForwardProp(e);
                }
              : t.shouldForwardProp));
        var i = r.__emotion_real === r,
          s = (i && r.__emotion_base) || r;
        'function' != typeof n && i && (n = r.__emotion_forwardProp);
        var l = n || $p(s),
          p = !l('as');
        return function () {
          var $ = arguments,
            v =
              i && void 0 !== r.__emotion_styles
                ? r.__emotion_styles.slice(0)
                : [];
          if (
            (void 0 !== o && v.push('label:' + o + ';'),
            null == $[0] || void 0 === $[0].raw)
          )
            v.push.apply(v, $);
          else {
            0, v.push($[0][0]);
            for (var u = $.length, c = 1; c < u; c++) v.push($[c], $[0][c]);
          }
          var m = Zf(function (e, r, t) {
            return aa.createElement(_c.Consumer, null, function (o) {
              var i = (p && e.as) || s,
                $ = '',
                u = [],
                c = e;
              if (null == e.theme) {
                for (var m in ((c = {}), e)) c[m] = e[m];
                c.theme = o;
              }
              'string' == typeof e.className
                ? ($ = gj(r.registered, u, e.className))
                : null != e.className && ($ = e.className + ' ');
              var d = $c(v.concat(u), r.registered, c);
              Yf(r, d, 'string' == typeof i);
              ($ += r.key + '-' + d.name), void 0 !== a && ($ += ' ' + a);
              var f = p && void 0 === n ? $p(i) : l,
                _ = {};
              for (var y in e) (p && 'as' === y) || (f(y) && (_[y] = e[y]));
              return (
                (_.className = $),
                (_.ref = t || e.innerRef),
                aa.createElement(i, _)
              );
            });
          });
          return (
            (m.displayName =
              void 0 !== o
                ? o
                : 'Styled(' +
                  ('string' == typeof s
                    ? s
                    : s.displayName || s.name || 'Component') +
                  ')'),
            (m.defaultProps = r.defaultProps),
            (m.__emotion_real = m),
            (m.__emotion_base = s),
            (m.__emotion_styles = v),
            (m.__emotion_forwardProp = n),
            Object.defineProperty(m, 'toString', {
              value: function () {
                return '.' + a;
              },
            }),
            (m.withComponent = function (r, o) {
              return e(r, void 0 !== o ? XA({}, t || {}, {}, o) : t).apply(
                void 0,
                v
              );
            }),
            m
          );
        };
      };
      var ZA = [
          'a',
          'abbr',
          'address',
          'area',
          'article',
          'aside',
          'audio',
          'b',
          'base',
          'bdi',
          'bdo',
          'big',
          'blockquote',
          'body',
          'br',
          'button',
          'canvas',
          'caption',
          'cite',
          'code',
          'col',
          'colgroup',
          'data',
          'datalist',
          'dd',
          'del',
          'details',
          'dfn',
          'dialog',
          'div',
          'dl',
          'dt',
          'em',
          'embed',
          'fieldset',
          'figcaption',
          'figure',
          'footer',
          'form',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'head',
          'header',
          'hgroup',
          'hr',
          'html',
          'i',
          'iframe',
          'img',
          'input',
          'ins',
          'kbd',
          'keygen',
          'label',
          'legend',
          'li',
          'link',
          'main',
          'map',
          'mark',
          'marquee',
          'menu',
          'menuitem',
          'meta',
          'meter',
          'nav',
          'noscript',
          'object',
          'ol',
          'optgroup',
          'option',
          'output',
          'p',
          'param',
          'picture',
          'pre',
          'progress',
          'q',
          'rp',
          'rt',
          'ruby',
          's',
          'samp',
          'script',
          'section',
          'select',
          'small',
          'source',
          'span',
          'strong',
          'style',
          'sub',
          'summary',
          'sup',
          'table',
          'tbody',
          'td',
          'textarea',
          'tfoot',
          'th',
          'thead',
          'time',
          'title',
          'tr',
          'track',
          'u',
          'ul',
          'var',
          'video',
          'wbr',
          'circle',
          'clipPath',
          'defs',
          'ellipse',
          'foreignObject',
          'g',
          'image',
          'line',
          'linearGradient',
          'mask',
          'path',
          'pattern',
          'polygon',
          'polyline',
          'radialGradient',
          'rect',
          'stop',
          'svg',
          'text',
          'tspan',
        ],
        vc = YA.bind();
      ZA.forEach(function (e) {
        vc[e] = vc(e);
      });
      function $A(r, e, t) {
        return (
          e in r
            ? Object.defineProperty(r, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[e] = t),
          r
        );
      }
      function aq(r, e) {
        var t = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var $ = Object.getOwnPropertySymbols(r);
          e &&
            ($ = $.filter(function (e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable;
            })),
            t.push.apply(t, $);
        }
        return t;
      }
      function ne(r) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? aq(Object(t), !0).forEach(function (e) {
                $A(r, e, t[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
            : aq(Object(t)).forEach(function (e) {
                Object.defineProperty(
                  r,
                  e,
                  Object.getOwnPropertyDescriptor(t, e)
                );
              });
        }
        return r;
      }
      function _A(r, e) {
        if (null == r) return {};
        var t,
          $,
          o = {},
          n = Object.keys(r);
        for ($ = 0; $ < n.length; $++)
          (t = n[$]), e.indexOf(t) >= 0 || (o[t] = r[t]);
        return o;
      }
      function aB(r, e) {
        if (null == r) return {};
        var t,
          $,
          o = _A(r, e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(r);
          for ($ = 0; $ < n.length; $++)
            (t = n[$]),
              e.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(r, t) &&
                  (o[t] = r[t]));
        }
        return o;
      }
      Ka();
      var bB = function (r) {
          return 'function' == typeof r;
        },
        bq = Q.d.createContext({}),
        oj = function (r) {
          var e = Q.d.useContext(bq),
            t = e;
          return r && (t = bB(r) ? r(e) : ne(ne({}, e), r)), t;
        },
        cB = function (r) {
          var e = oj(r.components);
          return Q.d.createElement(bq.Provider, {value: e}, r.children);
        },
        dB = {
          inlineCode: 'code',
          wrapper: function (r) {
            var e = r.children;
            return Q.d.createElement(Q.d.Fragment, {}, e);
          },
        },
        eB = Q.d.forwardRef(function (r, e) {
          var t = r.components,
            $ = r.mdxType,
            o = r.originalType,
            n = r.parentName,
            m = aB(r, ['components', 'mdxType', 'originalType', 'parentName']),
            a = oj(t),
            p = $,
            c = a[''.concat(n, '.').concat(p)] || a[p] || dB[p] || o;
          return t
            ? Q.d.createElement(c, ne(ne({ref: e}, m), {}, {components: t}))
            : Q.d.createElement(c, ne({ref: e}, m));
        });
      eB.displayName = 'MDXCreateElement';
      Ka();
      var fB = [
          'p',
          'b',
          'i',
          'a',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'img',
          'pre',
          'code',
          'ol',
          'ul',
          'li',
          'blockquote',
          'hr',
          'em',
          'table',
          'tr',
          'th',
          'td',
          'em',
          'strong',
          'del',
          'inlineCode',
          'thematicBreak',
          'div',
          'root',
        ],
        gB = {inlineCode: 'code', thematicBreak: 'hr', root: 'div'},
        hB = function (e) {
          return gB[e] || e;
        },
        pj = function (e) {
          return function ($) {
            return Lb(Ja($.theme, 'styles.' + e))($.theme);
          };
        },
        iB = vc('div')(pj('div')),
        qj = {};
      fB.forEach(function (e) {
        (qj[e] = vc(hB(e))(pj(e))), (iB[e] = qj[e]);
      });
      var jB = function (e) {
          var $ = Object.assign({}, qj);
          return (
            Object.keys(e).forEach(function (r) {
              $[r] = vc(e[r])(pj(r));
            }),
            $
          );
        },
        cq = function (e) {
          var $ = e.components,
            r = e.children,
            n = oj();
          return ta(cB, {
            components: jB(Object.assign({}, n, $)),
            children: r,
          });
        };
      var zb = function (r, e, o, t, s) {
          for (e = e && e.split ? e.split('.') : [e], t = 0; t < e.length; t++)
            r = r ? r[e[t]] : s;
          return r === s ? o : r;
        },
        kB = [40, 52, 64].map(function (r) {
          return r + 'em';
        }),
        lB = {
          space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
          fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
        },
        mB = {
          bg: 'backgroundColor',
          m: 'margin',
          mt: 'marginTop',
          mr: 'marginRight',
          mb: 'marginBottom',
          ml: 'marginLeft',
          mx: 'marginX',
          my: 'marginY',
          p: 'padding',
          pt: 'paddingTop',
          pr: 'paddingRight',
          pb: 'paddingBottom',
          pl: 'paddingLeft',
          px: 'paddingX',
          py: 'paddingY',
        },
        dq = {
          marginX: ['marginLeft', 'marginRight'],
          marginY: ['marginTop', 'marginBottom'],
          paddingX: ['paddingLeft', 'paddingRight'],
          paddingY: ['paddingTop', 'paddingBottom'],
          size: ['width', 'height'],
        },
        nB = {
          color: 'colors',
          backgroundColor: 'colors',
          borderColor: 'colors',
          margin: 'space',
          marginTop: 'space',
          marginRight: 'space',
          marginBottom: 'space',
          marginLeft: 'space',
          marginX: 'space',
          marginY: 'space',
          padding: 'space',
          paddingTop: 'space',
          paddingRight: 'space',
          paddingBottom: 'space',
          paddingLeft: 'space',
          paddingX: 'space',
          paddingY: 'space',
          top: 'space',
          right: 'space',
          bottom: 'space',
          left: 'space',
          gridGap: 'space',
          gridColumnGap: 'space',
          gridRowGap: 'space',
          gap: 'space',
          columnGap: 'space',
          rowGap: 'space',
          fontFamily: 'fonts',
          fontSize: 'fontSizes',
          fontWeight: 'fontWeights',
          lineHeight: 'lineHeights',
          letterSpacing: 'letterSpacings',
          border: 'borders',
          borderTop: 'borders',
          borderRight: 'borders',
          borderBottom: 'borders',
          borderLeft: 'borders',
          borderWidth: 'borderWidths',
          borderStyle: 'borderStyles',
          borderRadius: 'radii',
          borderTopRightRadius: 'radii',
          borderTopLeftRadius: 'radii',
          borderBottomRightRadius: 'radii',
          borderBottomLeftRadius: 'radii',
          borderTopWidth: 'borderWidths',
          borderTopColor: 'colors',
          borderTopStyle: 'borderStyles',
          borderBottomWidth: 'borderWidths',
          borderBottomColor: 'colors',
          borderBottomStyle: 'borderStyles',
          borderLeftWidth: 'borderWidths',
          borderLeftColor: 'colors',
          borderLeftStyle: 'borderStyles',
          borderRightWidth: 'borderWidths',
          borderRightColor: 'colors',
          borderRightStyle: 'borderStyles',
          outlineColor: 'colors',
          boxShadow: 'shadows',
          textShadow: 'shadows',
          zIndex: 'zIndices',
          width: 'sizes',
          minWidth: 'sizes',
          maxWidth: 'sizes',
          height: 'sizes',
          minHeight: 'sizes',
          maxHeight: 'sizes',
          flexBasis: 'sizes',
          size: 'sizes',
          fill: 'colors',
          stroke: 'colors',
        },
        oB = function (r, e) {
          if ('number' != typeof e || e >= 0) return zb(r, e, e);
          var o = Math.abs(e),
            t = zb(r, o, o);
          return 'string' == typeof t ? '-' + t : -1 * t;
        },
        pB = [
          'margin',
          'marginTop',
          'marginRight',
          'marginBottom',
          'marginLeft',
          'marginX',
          'marginY',
          'top',
          'bottom',
          'left',
          'right',
        ].reduce(function (r, e) {
          var o;
          return Object.assign({}, r, (((o = {})[e] = oB), o));
        }, {}),
        qB = function (r) {
          return function (e) {
            var o = {},
              t = zb(e, 'breakpoints', kB),
              s = [null].concat(
                t.map(function (r) {
                  return '@media screen and (min-width: ' + r + ')';
                })
              );
            for (var i in r) {
              var a = 'function' == typeof r[i] ? r[i](e) : r[i];
              if (null != a)
                if (Array.isArray(a))
                  for (var $ = 0; $ < a.slice(0, s.length).length; $++) {
                    var n = s[$];
                    n
                      ? ((o[n] = o[n] || {}), null != a[$] && (o[n][i] = a[$]))
                      : (o[i] = a[$]);
                  }
                else o[i] = a;
            }
            return o;
          };
        },
        rj = function (r) {
          return function (e) {
            void 0 === e && (e = {});
            var o = Object.assign({}, lB, e.theme || e),
              t = {},
              s = 'function' == typeof r ? r(o) : r,
              i = qB(s)(o);
            for (var a in i) {
              var $ = i[a],
                n = 'function' == typeof $ ? $(o) : $;
              if ('variant' !== a) {
                if (n && 'object' == typeof n) t[a] = rj(n)(o);
                else {
                  var d = zb(mB, a, a),
                    p = zb(nB, d),
                    m = zb(o, p, zb(o, d, {})),
                    g = zb(pB, d, zb)(m, n, n);
                  if (dq[d])
                    for (var l = dq[d], c = 0; c < l.length; c++) t[l[c]] = g;
                  else t[d] = g;
                }
              } else {
                var z = rj(zb(o, n))(o);
                t = Object.assign({}, t, z);
              }
            }
            return t;
          };
        },
        rB = function () {
          return ta(Lp, {
            styles: function (r) {
              if (!1 === r.useBodyStyles || (r.styles && !r.styles.root))
                return !1;
              var e = !1 === r.useBorderBox ? null : 'border-box';
              return rj({
                '*': {boxSizing: e},
                body: {margin: 0, variant: 'styles.root'},
              })(r);
            },
          });
        },
        sB = function (r) {
          var e = r.theme,
            o = r.components,
            t = r.children;
          return 'function' == typeof lj().setColorMode
            ? ta(Up, {theme: e}, ta(cq, {components: o, children: t}))
            : ta(
                Up,
                {theme: e},
                ta(SA, null, ta(rB), ta(cq, {components: o, children: t}))
              );
        };
      gg();
      var eq = function (e, r) {
        var $J4Nk$$interop$default = za(Pb);
        var t = $J4Nk$$interop$default.d({}, e, r);
        for (var $ in e) {
          var a;
          e[$] &&
            'object' == typeof r[$] &&
            $J4Nk$$interop$default.d(
              t,
              (((a = {})[$] = $J4Nk$$interop$default.d(e[$], r[$])), a)
            );
        }
        return t;
      };
      var tB = function (e) {
          var r = {};
          return (
            Object.keys(e)
              .sort(function (e, r) {
                return e.localeCompare(r, void 0, {
                  numeric: !0,
                  sensitivity: 'base',
                });
              })
              .forEach(function (t) {
                r[t] = e[t];
              }),
            r
          );
        },
        uB = {
          breakpoints: [40, 52, 64].map(function (e) {
            return e + 'em';
          }),
        },
        fq = function (e) {
          return '@media screen and (min-width: ' + e + ')';
        },
        vB = function (e, r) {
          return bc(r, e, e);
        },
        bc = function (e, r, t, $, a) {
          for (r = r && r.split ? r.split('.') : [r], $ = 0; $ < r.length; $++)
            e = e ? e[r[$]] : a;
          return e === a ? t : e;
        };
      var sj = function e(r) {
        var t = {},
          $ = function (e) {
            var $ = {},
              a = !1,
              o = e.theme && e.theme.disableStyledSystemCache;
            for (var n in e)
              if (r[n]) {
                var i = r[n],
                  s = e[n],
                  l = bc(e.theme, i.scale, i.defaults);
                var $J4Nk$$interop$default = za(Pb);
                if ('object' != typeof s)
                  $J4Nk$$interop$default.d($, i(s, l, e));
                else {
                  if (
                    ((t.breakpoints =
                      (!o && t.breakpoints) ||
                      bc(e.theme, 'breakpoints', uB.breakpoints)),
                    Array.isArray(s))
                  ) {
                    (t.media =
                      (!o && t.media) || [null].concat(t.breakpoints.map(fq))),
                      ($ = eq($, wB(t.media, i, l, s, e)));
                    continue;
                  }
                  null !== s &&
                    (($ = eq($, xB(t.breakpoints, i, l, s, e))), (a = !0));
                }
              }
            return a && ($ = tB($)), $;
          };
        ($.config = r), ($.propNames = Object.keys(r)), ($.cache = t);
        var a = Object.keys(r).filter(function (e) {
          return 'config' !== e;
        });
        return (
          a.length > 1 &&
            a.forEach(function (t) {
              var a;
              $[t] = e((((a = {})[t] = r[t]), a));
            }),
          $
        );
      };
      var wB = function (e, r, t, $, a) {
          var o = {};
          return (
            $.slice(0, e.length).forEach(function ($, n) {
              var i,
                s = e[n],
                l = r($, t, a);
              var $J4Nk$$interop$default = za(Pb);
              s
                ? $J4Nk$$interop$default.d(
                    o,
                    (((i = {})[s] = $J4Nk$$interop$default.d({}, o[s], l)), i)
                  )
                : $J4Nk$$interop$default.d(o, l);
            }),
            o
          );
        },
        xB = function (e, r, t, $, a) {
          var o = {};
          for (var n in $) {
            var i = e[n],
              s = r($[n], t, a);
            var $J4Nk$$interop$default = za(Pb);
            if (i) {
              var l,
                c = fq(i);
              var $J4Nk$$interop$default = za(Pb);
              $J4Nk$$interop$default.d(
                o,
                (((l = {})[c] = $J4Nk$$interop$default.d({}, o[c], s)), l)
              );
            } else $J4Nk$$interop$default.d(o, s);
          }
          return o;
        },
        gq = function (e) {
          var r = e.properties,
            t = e.property,
            $ = e.scale,
            a = e.transform,
            o = void 0 === a ? vB : a,
            n = e.defaultScale;
          r = r || [t];
          var i = function (e, t, $) {
            var a = {},
              n = o(e, t, $);
            if (null !== n)
              return (
                r.forEach(function (e) {
                  a[e] = n;
                }),
                a
              );
          };
          return (i.scale = $), (i.defaults = n), i;
        };
      var nb = function (e) {
        void 0 === e && (e = {});
        var r = {};
        return (
          Object.keys(e).forEach(function (t) {
            var $ = e[t];
            r[t] =
              !0 !== $
                ? 'function' != typeof $
                  ? gq($)
                  : $
                : gq({property: t, scale: t});
          }),
          sj(r)
        );
      };
      var hq = function () {
        for (
          var e = {}, r = arguments.length, t = new Array(r), $ = 0;
          $ < r;
          $++
        )
          t[$] = arguments[$];
        return (
          t.forEach(function (r) {
            var $J4Nk$$interop$default = za(Pb);
            r && r.config && $J4Nk$$interop$default.d(e, r.config);
          }),
          sj(e)
        );
      };
      var yB = function (e) {
          return 'number' == typeof e && !isNaN(e);
        },
        zB = function (e, t) {
          return bc(t, e, !yB(e) || e > 1 ? e : 100 * e + '%');
        },
        AB = {
          width: {property: 'width', scale: 'sizes', transform: zB},
          height: {property: 'height', scale: 'sizes'},
          minWidth: {property: 'minWidth', scale: 'sizes'},
          minHeight: {property: 'minHeight', scale: 'sizes'},
          maxWidth: {property: 'maxWidth', scale: 'sizes'},
          maxHeight: {property: 'maxHeight', scale: 'sizes'},
          size: {properties: ['width', 'height'], scale: 'sizes'},
          overflow: !0,
          overflowX: !0,
          overflowY: !0,
          display: !0,
          verticalAlign: !0,
        },
        Ua = nb(AB);
      var tj = {
        color: {property: 'color', scale: 'colors'},
        backgroundColor: {property: 'backgroundColor', scale: 'colors'},
        opacity: !0,
      };
      tj.bg = tj.backgroundColor;
      var $f = nb(tj);
      var BB = {fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]},
        CB = {
          fontFamily: {property: 'fontFamily', scale: 'fonts'},
          fontSize: {
            property: 'fontSize',
            scale: 'fontSizes',
            defaultScale: BB.fontSizes,
          },
          fontWeight: {property: 'fontWeight', scale: 'fontWeights'},
          lineHeight: {property: 'lineHeight', scale: 'lineHeights'},
          letterSpacing: {property: 'letterSpacing', scale: 'letterSpacings'},
          textAlign: !0,
          fontStyle: !0,
        },
        cc = nb(CB);
      var DB = {
          alignItems: !0,
          alignContent: !0,
          justifyItems: !0,
          justifyContent: !0,
          flexWrap: !0,
          flexDirection: !0,
          flex: !0,
          flexGrow: !0,
          flexShrink: !0,
          flexBasis: !0,
          justifySelf: !0,
          alignSelf: !0,
          order: !0,
        },
        Pa = nb(DB);
      var uj = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
        EB = {
          gridGap: {
            property: 'gridGap',
            scale: 'space',
            defaultScale: uj.space,
          },
          gridColumnGap: {
            property: 'gridColumnGap',
            scale: 'space',
            defaultScale: uj.space,
          },
          gridRowGap: {
            property: 'gridRowGap',
            scale: 'space',
            defaultScale: uj.space,
          },
          gridColumn: !0,
          gridRow: !0,
          gridAutoFlow: !0,
          gridAutoColumns: !0,
          gridAutoRows: !0,
          gridTemplateColumns: !0,
          gridTemplateRows: !0,
          gridTemplateAreas: !0,
          gridArea: !0,
        },
        Va = nb(EB);
      var FB = {
          border: {property: 'border', scale: 'borders'},
          borderWidth: {property: 'borderWidth', scale: 'borderWidths'},
          borderStyle: {property: 'borderStyle', scale: 'borderStyles'},
          borderColor: {property: 'borderColor', scale: 'colors'},
          borderRadius: {property: 'borderRadius', scale: 'radii'},
          borderTop: {property: 'borderTop', scale: 'borders'},
          borderTopLeftRadius:
            ({property: 'borderTopLeftRadius', scale: 'radii'},
            {property: 'borderTopLeftRadius', scale: 'radii'}),
          borderTopRightRadius:
            ({property: 'borderTopRightRadius', scale: 'radii'},
            {property: 'borderTopRightRadius', scale: 'radii'}),
          borderRight: {property: 'borderRight', scale: 'borders'},
          borderBottom: {property: 'borderBottom', scale: 'borders'},
          borderBottomLeftRadius:
            ({property: 'borderBottomLeftRadius', scale: 'radii'},
            {property: 'borderBottomLeftRadius', scale: 'radii'}),
          borderBottomRightRadius:
            ({property: 'borderBottomRightRadius', scale: 'radii'},
            {property: 'borderBottomRightRadius', scale: 'radii'}),
          borderLeft: {property: 'borderLeft', scale: 'borders'},
          borderX: {
            properties: ['borderLeft', 'borderRight'],
            scale: 'borders',
          },
          borderY: {
            properties: ['borderTop', 'borderBottom'],
            scale: 'borders',
          },
          borderTopWidth: {property: 'borderTopWidth', scale: 'borderWidths'},
          borderTopColor: {property: 'borderTopColor', scale: 'colors'},
          borderTopStyle: {property: 'borderTopStyle', scale: 'borderStyles'},
          borderBottomWidth: {
            property: 'borderBottomWidth',
            scale: 'borderWidths',
          },
          borderBottomColor: {property: 'borderBottomColor', scale: 'colors'},
          borderBottomStyle: {
            property: 'borderBottomStyle',
            scale: 'borderStyles',
          },
          borderLeftWidth: {
            property: 'borderLeftWidth',
            scale: 'borderWidths',
          },
          borderLeftColor: {property: 'borderLeftColor', scale: 'colors'},
          borderLeftStyle: {
            property: 'borderLeftStyle',
            scale: 'borderStyles',
          },
          borderRightWidth: {
            property: 'borderRightWidth',
            scale: 'borderWidths',
          },
          borderRightColor: {property: 'borderRightColor', scale: 'colors'},
          borderRightStyle: {
            property: 'borderRightStyle',
            scale: 'borderStyles',
          },
        },
        Mb = nb(FB);
      var Nb = {
        background: !0,
        backgroundImage: !0,
        backgroundSize: !0,
        backgroundPosition: !0,
        backgroundRepeat: !0,
      };
      (Nb.bgImage = Nb.backgroundImage),
        (Nb.bgSize = Nb.backgroundSize),
        (Nb.bgPosition = Nb.backgroundPosition),
        (Nb.bgRepeat = Nb.backgroundRepeat);
      var oe = nb(Nb);
      var _f = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
        GB = {
          position: !0,
          zIndex: {property: 'zIndex', scale: 'zIndices'},
          top: {property: 'top', scale: 'space', defaultScale: _f.space},
          right: {property: 'right', scale: 'space', defaultScale: _f.space},
          bottom: {
            property: 'bottom',
            scale: 'space',
            defaultScale: _f.space,
          },
          left: {property: 'left', scale: 'space', defaultScale: _f.space},
        },
        bd = nb(GB);
      var Qa = {space: [0, 4, 8, 16, 32, 64, 128, 256, 512]},
        iq = function (a) {
          return 'number' == typeof a && !isNaN(a);
        },
        wc = function (a, $) {
          if (!iq(a)) return bc($, a, a);
          var n = a < 0,
            t = Math.abs(a),
            r = bc($, t, t);
          return iq(r) ? r * (n ? -1 : 1) : n ? '-' + r : r;
        },
        ia = {};
      (ia.margin = {
        margin: {
          property: 'margin',
          scale: 'space',
          transform: wc,
          defaultScale: Qa.space,
        },
        marginTop: {
          property: 'marginTop',
          scale: 'space',
          transform: wc,
          defaultScale: Qa.space,
        },
        marginRight: {
          property: 'marginRight',
          scale: 'space',
          transform: wc,
          defaultScale: Qa.space,
        },
        marginBottom: {
          property: 'marginBottom',
          scale: 'space',
          transform: wc,
          defaultScale: Qa.space,
        },
        marginLeft: {
          property: 'marginLeft',
          scale: 'space',
          transform: wc,
          defaultScale: Qa.space,
        },
        marginX: {
          properties: ['marginLeft', 'marginRight'],
          scale: 'space',
          transform: wc,
          defaultScale: Qa.space,
        },
        marginY: {
          properties: ['marginTop', 'marginBottom'],
          scale: 'space',
          transform: wc,
          defaultScale: Qa.space,
        },
      }),
        (ia.margin.m = ia.margin.margin),
        (ia.margin.mt = ia.margin.marginTop),
        (ia.margin.mr = ia.margin.marginRight),
        (ia.margin.mb = ia.margin.marginBottom),
        (ia.margin.ml = ia.margin.marginLeft),
        (ia.margin.mx = ia.margin.marginX),
        (ia.margin.my = ia.margin.marginY),
        (ia.padding = {
          padding: {
            property: 'padding',
            scale: 'space',
            defaultScale: Qa.space,
          },
          paddingTop: {
            property: 'paddingTop',
            scale: 'space',
            defaultScale: Qa.space,
          },
          paddingRight: {
            property: 'paddingRight',
            scale: 'space',
            defaultScale: Qa.space,
          },
          paddingBottom: {
            property: 'paddingBottom',
            scale: 'space',
            defaultScale: Qa.space,
          },
          paddingLeft: {
            property: 'paddingLeft',
            scale: 'space',
            defaultScale: Qa.space,
          },
          paddingX: {
            properties: ['paddingLeft', 'paddingRight'],
            scale: 'space',
            defaultScale: Qa.space,
          },
          paddingY: {
            properties: ['paddingTop', 'paddingBottom'],
            scale: 'space',
            defaultScale: Qa.space,
          },
        }),
        (ia.padding.p = ia.padding.padding),
        (ia.padding.pt = ia.padding.paddingTop),
        (ia.padding.pr = ia.padding.paddingRight),
        (ia.padding.pb = ia.padding.paddingBottom),
        (ia.padding.pl = ia.padding.paddingLeft),
        (ia.padding.px = ia.padding.paddingX),
        (ia.padding.py = ia.padding.paddingY);
      var HB = nb(ia.margin);
      var IB = nb(ia.padding);
      var vj = hq(HB, IB);
      var JB = nb({
        boxShadow: {property: 'boxShadow', scale: 'shadows'},
        textShadow: {property: 'textShadow', scale: 'shadows'},
      });
      function wj() {
        return (wj =
          Object.assign ||
          function (r) {
            for (var e = 1; e < arguments.length; e++) {
              var t = arguments[e];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
            }
            return r;
          }).apply(this, arguments);
      }
      var Ab = function (r, e, t, o, i) {
        for (e = e && e.split ? e.split('.') : [e], o = 0; o < e.length; o++)
          r = r ? r[e[o]] : i;
        return r === i ? t : r;
      };
      var KB = [40, 52, 64].map(function (r) {
          return r + 'em';
        }),
        LB = {
          space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
          fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
        },
        MB = {
          bg: 'backgroundColor',
          m: 'margin',
          mt: 'marginTop',
          mr: 'marginRight',
          mb: 'marginBottom',
          ml: 'marginLeft',
          mx: 'marginX',
          my: 'marginY',
          p: 'padding',
          pt: 'paddingTop',
          pr: 'paddingRight',
          pb: 'paddingBottom',
          pl: 'paddingLeft',
          px: 'paddingX',
          py: 'paddingY',
        },
        jq = {
          marginX: ['marginLeft', 'marginRight'],
          marginY: ['marginTop', 'marginBottom'],
          paddingX: ['paddingLeft', 'paddingRight'],
          paddingY: ['paddingTop', 'paddingBottom'],
          size: ['width', 'height'],
        },
        NB = {
          color: 'colors',
          backgroundColor: 'colors',
          borderColor: 'colors',
          margin: 'space',
          marginTop: 'space',
          marginRight: 'space',
          marginBottom: 'space',
          marginLeft: 'space',
          marginX: 'space',
          marginY: 'space',
          padding: 'space',
          paddingTop: 'space',
          paddingRight: 'space',
          paddingBottom: 'space',
          paddingLeft: 'space',
          paddingX: 'space',
          paddingY: 'space',
          top: 'space',
          right: 'space',
          bottom: 'space',
          left: 'space',
          gridGap: 'space',
          gridColumnGap: 'space',
          gridRowGap: 'space',
          gap: 'space',
          columnGap: 'space',
          rowGap: 'space',
          fontFamily: 'fonts',
          fontSize: 'fontSizes',
          fontWeight: 'fontWeights',
          lineHeight: 'lineHeights',
          letterSpacing: 'letterSpacings',
          border: 'borders',
          borderTop: 'borders',
          borderRight: 'borders',
          borderBottom: 'borders',
          borderLeft: 'borders',
          borderWidth: 'borderWidths',
          borderStyle: 'borderStyles',
          borderRadius: 'radii',
          borderTopRightRadius: 'radii',
          borderTopLeftRadius: 'radii',
          borderBottomRightRadius: 'radii',
          borderBottomLeftRadius: 'radii',
          borderTopWidth: 'borderWidths',
          borderTopColor: 'colors',
          borderTopStyle: 'borderStyles',
          borderBottomWidth: 'borderWidths',
          borderBottomColor: 'colors',
          borderBottomStyle: 'borderStyles',
          borderLeftWidth: 'borderWidths',
          borderLeftColor: 'colors',
          borderLeftStyle: 'borderStyles',
          borderRightWidth: 'borderWidths',
          borderRightColor: 'colors',
          borderRightStyle: 'borderStyles',
          outlineColor: 'colors',
          boxShadow: 'shadows',
          textShadow: 'shadows',
          zIndex: 'zIndices',
          width: 'sizes',
          minWidth: 'sizes',
          maxWidth: 'sizes',
          height: 'sizes',
          minHeight: 'sizes',
          maxHeight: 'sizes',
          flexBasis: 'sizes',
          size: 'sizes',
          fill: 'colors',
          stroke: 'colors',
        },
        OB = function (r, e) {
          if ('number' != typeof e || e >= 0) return Ab(r, e, e);
          var t = Math.abs(e),
            o = Ab(r, t, t);
          return 'string' == typeof o ? '-' + o : -1 * o;
        },
        PB = [
          'margin',
          'marginTop',
          'marginRight',
          'marginBottom',
          'marginLeft',
          'marginX',
          'marginY',
          'top',
          'bottom',
          'left',
          'right',
        ].reduce(function (r, e) {
          var t;
          return wj({}, r, (((t = {})[e] = OB), t));
        }, {}),
        QB = function (r) {
          return function (e) {
            var t = {},
              o = Ab(e, 'breakpoints', KB),
              i = [null].concat(
                o.map(function (r) {
                  return '@media screen and (min-width: ' + r + ')';
                })
              );
            for (var a in r) {
              var s = 'function' == typeof r[a] ? r[a](e) : r[a];
              if (null != s)
                if (Array.isArray(s))
                  for (var n = 0; n < s.slice(0, i.length).length; n++) {
                    var d = i[n];
                    d
                      ? ((t[d] = t[d] || {}), null != s[n] && (t[d][a] = s[n]))
                      : (t[a] = s[n]);
                  }
                else t[a] = s;
            }
            return t;
          };
        };
      var RB = function r(e) {
        return function (t) {
          void 0 === t && (t = {});
          var o = wj({}, LB, {}, t.theme || t),
            i = {},
            a = 'function' == typeof e ? e(o) : e,
            s = QB(a)(o);
          for (var n in s) {
            var d = s[n],
              p = 'function' == typeof d ? d(o) : d;
            if ('variant' !== n) {
              if (p && 'object' == typeof p) i[n] = r(p)(o);
              else {
                var $ = Ab(MB, n, n),
                  l = Ab(NB, $),
                  g = Ab(o, l, Ab(o, $, {})),
                  c = Ab(PB, $, Ab)(g, p, p);
                if (jq[$])
                  for (var m = jq[$], f = 0; f < m.length; f++) i[m[f]] = c;
                else i[$] = c;
              }
            } else i = wj({}, i, {}, r(Ab(o, p))(o));
          }
          return i;
        };
      };
      var xj = function (t) {
        var e,
          $,
          r = t.scale,
          o = t.prop,
          v = void 0 === o ? 'variant' : o,
          a = t.variants,
          l = void 0 === a ? {} : a,
          p = t.key;
        (($ = Object.keys(l).length
          ? function (t, e, $) {
              return RB(bc(e, t, null))($.theme);
            }
          : function (t, e) {
              return bc(e, t, null);
            }).scale = r || p),
          ($.defaults = l);
        var b = (((e = {})[v] = $), e);
        return sj(b);
      };
      var SB = xj({key: 'buttons'});
      var TB = xj({key: 'textStyles', prop: 'textStyle'});
      var UB = xj({key: 'colorStyles', prop: 'colors'});
      var x = Ua.width,
        y = Ua.height,
        z = Ua.minWidth,
        A = Ua.minHeight,
        B = Ua.maxWidth,
        C = Ua.maxHeight,
        D = Ua.size,
        E = Ua.verticalAlign,
        F = Ua.display,
        G = Ua.overflow,
        H = Ua.overflowX,
        I = Ua.overflowY,
        J = $f.opacity,
        K = cc.fontSize,
        L = cc.fontFamily,
        M = cc.fontWeight,
        N = cc.lineHeight,
        O = cc.textAlign,
        P = cc.fontStyle,
        R = cc.letterSpacing,
        S = Pa.alignItems,
        T = Pa.alignContent,
        U = Pa.justifyItems,
        V = Pa.justifyContent,
        W = Pa.flexWrap,
        X = Pa.flexDirection,
        Z = Pa.flex,
        $ = Pa.flexGrow,
        _ = Pa.flexShrink,
        _a = Pa.flexBasis,
        kE = Pa.justifySelf,
        lE = Pa.alignSelf,
        mE = Pa.order,
        nE = Va.gridGap,
        oE = Va.gridColumnGap,
        pE = Va.gridRowGap,
        qE = Va.gridColumn,
        rE = Va.gridRow,
        sE = Va.gridAutoFlow,
        tE = Va.gridAutoColumns,
        uE = Va.gridAutoRows,
        vE = Va.gridTemplateColumns,
        wE = Va.gridTemplateRows,
        xE = Va.gridTemplateAreas,
        yE = Va.gridArea,
        zE = Mb.borderWidth,
        AE = Mb.borderStyle,
        BE = Mb.borderColor,
        CE = Mb.borderTop,
        DE = Mb.borderRight,
        EE = Mb.borderBottom,
        FE = Mb.borderLeft,
        GE = Mb.borderRadius,
        HE = oe.backgroundImage,
        IE = oe.backgroundSize,
        JE = oe.backgroundPosition,
        KE = oe.backgroundRepeat,
        LE = bd.zIndex,
        ME = bd.top,
        NE = bd.right,
        OE = bd.bottom,
        PE = bd.left;
      Ai(), Ci();
      var VB = hq(vj, cc, $f, Ua, Pa, Mb, oe, bd, Va, JB, SB, TB, UB),
        WB = VB.propNames;
      var kq = function ($) {
        var r = new RegExp('^(' + $.join('|') + ')$');
        return Lf(function ($) {
          return Bi($) && !r.test($);
        });
      };
      var QE = kq(WB);
      Ka();
      var XB = kq(vj.propNames.concat($f.propNames)),
        YB = function (e) {
          return Lb(e.sx)(e.theme);
        },
        ZB = function (e) {
          return Lb(e.__css)(e.theme);
        },
        $B = function (e) {
          var t = e.theme,
            r = e.variant,
            $ = e.__themeKey;
          return (
            void 0 === $ && ($ = 'variants'), Lb(Ja(t, $ + '.' + r, Ja(t, r)))
          );
        },
        ea = vc('div', {shouldForwardProp: XB})(
          {boxSizing: 'border-box', margin: 0, minWidth: 0},
          ZB,
          $B,
          vj,
          $f,
          YB,
          function (e) {
            return e.css;
          }
        ),
        RE = vc(ea)({display: 'flex'});
      function _B(e, t) {
        var r = {};
        for (var $ in e)
          Object.prototype.hasOwnProperty.call(e, $) &&
            -1 === t.indexOf($) &&
            (r[$] = e[$]);
        return r;
      }
      var aC = function (e) {
          return 'number' == typeof e ? e + 'px' : e;
        },
        lq = function (e) {
          return Array.isArray(e)
            ? e.map(lq)
            : !!e && 'repeat(auto-fit, minmax(' + aC(e) + ', 1fr))';
        },
        mq = function (e) {
          return Array.isArray(e)
            ? e.map(mq)
            : !!e && ('number' == typeof e ? 'repeat(' + e + ', 1fr)' : e);
        },
        SE = Q.d.forwardRef(function (e, t) {
          var r = e.width,
            $ = e.columns,
            o = e.gap;
          void 0 === o && (o = 3);
          var a = _B(e, ['width', 'columns', 'gap']),
            i = r ? lq(r) : mq($);
          return Q.d.createElement(
            ea,
            Object.assign({}, {ref: t}, a, {
              __themeKey: 'grids',
              __css: {display: 'grid', gridGap: o, gridTemplateColumns: i},
            })
          );
        }),
        bC = Q.d.forwardRef(function (e, t) {
          return Q.d.createElement(
            ea,
            Object.assign({}, {ref: t, as: 'button', variant: 'primary'}, e, {
              __themeKey: 'buttons',
              __css: {
                appearance: 'none',
                display: 'inline-block',
                textAlign: 'center',
                lineHeight: 'inherit',
                textDecoration: 'none',
                fontSize: 'inherit',
                px: 3,
                py: 2,
                color: 'white',
                bg: 'primary',
                border: 0,
                borderRadius: 4,
              },
            })
          );
        }),
        cC = Q.d.forwardRef(function (e, t) {
          return Q.d.createElement(
            ea,
            Object.assign({}, {ref: t, as: 'a', variant: 'styles.a'}, e, {
              __themeKey: 'links',
            })
          );
        }),
        TE = Q.d.forwardRef(function (e, t) {
          return Q.d.createElement(
            ea,
            Object.assign({}, {ref: t}, e, {__themeKey: 'text'})
          );
        }),
        UE = Q.d.forwardRef(function (e, t) {
          return Q.d.createElement(
            ea,
            Object.assign({}, {ref: t, as: 'h2', variant: 'heading'}, e, {
              __themeKey: 'text',
              __css: {
                fontFamily: 'heading',
                fontWeight: 'heading',
                lineHeight: 'heading',
              },
            })
          );
        }),
        yj = Q.d.forwardRef(function (e, t) {
          return Q.d.createElement(
            ea,
            Object.assign({}, {ref: t, as: 'img'}, e, {
              __themeKey: 'images',
              __css: Object.assign(
                {},
                {maxWidth: '100%', height: 'auto'},
                e.__css
              ),
            })
          );
        }),
        VE = Q.d.forwardRef(function (e, t) {
          return Q.d.createElement(
            ea,
            Object.assign({}, {ref: t, variant: 'primary'}, e, {
              __themeKey: 'cards',
            })
          );
        }),
        dC = Q.d.forwardRef(function (e, t) {
          return Q.d.createElement(
            ea,
            Object.assign({}, {ref: t, as: 'label', variant: 'label'}, e, {
              __themeKey: 'forms',
              __css: {width: '100%', display: 'flex'},
            })
          );
        }),
        eC = Q.d.forwardRef(function (e, t) {
          return Q.d.createElement(
            ea,
            Object.assign({}, {ref: t, as: 'input', variant: 'input'}, e, {
              __themeKey: 'forms',
              __css: {
                display: 'block',
                width: '100%',
                p: 2,
                appearance: 'none',
                fontSize: 'inherit',
                lineHeight: 'inherit',
                border: '1px solid',
                borderRadius: 4,
                color: 'inherit',
                bg: 'transparent',
              },
            })
          );
        });
      function fC(e, t) {
        var r = {};
        for (var $ in e)
          Object.prototype.hasOwnProperty.call(e, $) &&
            -1 === t.indexOf($) &&
            (r[$] = e[$]);
        return r;
      }
      var pe = function (e) {
          var t = e.size;
          void 0 === t && (t = 24);
          var r = fC(e, ['size']);
          return Q.d.createElement(
            ea,
            Object.assign(
              {},
              {
                as: 'svg',
                xmlns: 'http://www.w3.org/2000/svg',
                width: t + '',
                height: t + '',
                viewBox: '0 0 24 24',
                fill: 'currentcolor',
              },
              r
            )
          );
        },
        nq = function (e) {
          return function (t) {
            var r = {};
            for (var $ in t) e($ || '') && (r[$] = t[$]);
            return r;
          };
        },
        oq = /^m[trblxy]?$/,
        pq = nq(function (e) {
          return oq.test(e);
        }),
        qq = nq(function (e) {
          return !oq.test(e);
        }),
        gC = function (e) {
          return Q.d.createElement(
            pe,
            e,
            Q.d.createElement('path', {d: 'M7 10l5 5 5-5z'})
          );
        },
        WE = Q.d.forwardRef(function (e, t) {
          return Q.d.createElement(
            ea,
            Object.assign({}, pq(e), {sx: {display: 'flex'}}),
            Q.d.createElement(
              ea,
              Object.assign(
                {},
                {ref: t, as: 'select', variant: 'select'},
                qq(e),
                {
                  __themeKey: 'forms',
                  __css: {
                    display: 'block',
                    width: '100%',
                    p: 2,
                    appearance: 'none',
                    fontSize: 'inherit',
                    lineHeight: 'inherit',
                    border: '1px solid',
                    borderRadius: 4,
                    color: 'inherit',
                    bg: 'transparent',
                  },
                }
              )
            ),
            Q.d.createElement(gC, {
              sx: {ml: -28, alignSelf: 'center', pointerEvents: 'none'},
            })
          );
        }),
        XE = Q.d.forwardRef(function (e, t) {
          return Q.d.createElement(
            ea,
            Object.assign(
              {},
              {ref: t, as: 'textarea', variant: 'textarea'},
              e,
              {
                __themeKey: 'forms',
                __css: {
                  display: 'block',
                  width: '100%',
                  p: 2,
                  appearance: 'none',
                  fontSize: 'inherit',
                  lineHeight: 'inherit',
                  border: '1px solid',
                  borderRadius: 4,
                  color: 'inherit',
                  bg: 'transparent',
                },
              }
            )
          );
        });
      function hC(e, t) {
        var r = {};
        for (var $ in e)
          Object.prototype.hasOwnProperty.call(e, $) &&
            -1 === t.indexOf($) &&
            (r[$] = e[$]);
        return r;
      }
      var iC = function (e) {
          return Q.d.createElement(
            pe,
            e,
            Q.d.createElement('path', {
              d: 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
            })
          );
        },
        jC = function (e) {
          return Q.d.createElement(
            pe,
            e,
            Q.d.createElement('path', {
              d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
            })
          );
        },
        kC = function (e) {
          return Q.d.createElement(
            Q.d.Fragment,
            null,
            Q.d.createElement(
              iC,
              Object.assign({}, e, {
                __css: {
                  display: 'none',
                  'input:checked ~ &': {display: 'block'},
                },
              })
            ),
            Q.d.createElement(
              jC,
              Object.assign({}, e, {
                __css: {
                  display: 'block',
                  'input:checked ~ &': {display: 'none'},
                },
              })
            )
          );
        },
        YE = Q.d.forwardRef(function (e, t) {
          var r = e.className,
            $ = e.sx,
            o = e.variant;
          void 0 === o && (o = 'radio');
          var a = hC(e, ['className', 'sx', 'variant']);
          return Q.d.createElement(
            ea,
            null,
            Q.d.createElement(
              ea,
              Object.assign({}, {ref: t, as: 'input', type: 'radio'}, a, {
                sx: {
                  position: 'absolute',
                  opacity: 0,
                  zIndex: -1,
                  width: 1,
                  height: 1,
                  overflow: 'hidden',
                },
              })
            ),
            Q.d.createElement(ea, {
              as: kC,
              'aria-hidden': 'true',
              __themeKey: 'forms',
              variant: o,
              className: r,
              sx: $,
              __css: {
                mr: 2,
                borderRadius: 9999,
                color: 'gray',
                'input:checked ~ &': {color: 'primary'},
                'input:focus ~ &': {bg: 'highlight'},
              },
            })
          );
        });
      function lC(e, t) {
        var r = {};
        for (var $ in e)
          Object.prototype.hasOwnProperty.call(e, $) &&
            -1 === t.indexOf($) &&
            (r[$] = e[$]);
        return r;
      }
      var mC = function (e) {
          return Q.d.createElement(
            pe,
            e,
            Q.d.createElement('path', {
              d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
            })
          );
        },
        nC = function (e) {
          return Q.d.createElement(
            pe,
            e,
            Q.d.createElement('path', {
              d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
            })
          );
        },
        oC = function (e) {
          return Q.d.createElement(
            Q.d.Fragment,
            null,
            Q.d.createElement(
              mC,
              Object.assign({}, e, {
                __css: {
                  display: 'none',
                  'input:checked ~ &': {display: 'block'},
                },
              })
            ),
            Q.d.createElement(
              nC,
              Object.assign({}, e, {
                __css: {
                  display: 'block',
                  'input:checked ~ &': {display: 'none'},
                },
              })
            )
          );
        },
        ZE = Q.d.forwardRef(function (e, t) {
          var r = e.className,
            $ = e.sx,
            o = e.variant;
          void 0 === o && (o = 'checkbox');
          var a = lC(e, ['className', 'sx', 'variant']);
          return Q.d.createElement(
            ea,
            null,
            Q.d.createElement(
              ea,
              Object.assign({}, {ref: t, as: 'input', type: 'checkbox'}, a, {
                sx: {
                  position: 'absolute',
                  opacity: 0,
                  zIndex: -1,
                  width: 1,
                  height: 1,
                  overflow: 'hidden',
                },
              })
            ),
            Q.d.createElement(ea, {
              as: oC,
              'aria-hidden': 'true',
              __themeKey: 'forms',
              variant: o,
              className: r,
              sx: $,
              __css: {
                mr: 2,
                borderRadius: 4,
                color: 'gray',
                'input:checked ~ &': {color: 'primary'},
                'input:focus ~ &': {color: 'primary', bg: 'highlight'},
              },
            })
          );
        }),
        zj = {
          appearance: 'none',
          width: 16,
          height: 16,
          bg: 'currentcolor',
          border: 0,
          borderRadius: 9999,
          variant: 'forms.slider.thumb',
        },
        $E = Q.d.forwardRef(function (e, t) {
          return Q.d.createElement(
            ea,
            Object.assign(
              {},
              {ref: t, as: 'input', type: 'range', variant: 'slider'},
              e,
              {
                __themeKey: 'forms',
                __css: {
                  display: 'block',
                  width: '100%',
                  height: 4,
                  my: 2,
                  cursor: 'pointer',
                  appearance: 'none',
                  borderRadius: 9999,
                  color: 'inherit',
                  bg: 'gray',
                  ':focus': {outline: 'none', color: 'primary'},
                  '&::-webkit-slider-thumb': zj,
                  '&::-moz-range-thumb': zj,
                  '&::-ms-thumb': zj,
                },
              }
            )
          );
        });
      function pC(e, t) {
        var r = {};
        for (var $ in e)
          Object.prototype.hasOwnProperty.call(e, $) &&
            -1 === t.indexOf($) &&
            (r[$] = e[$]);
        return r;
      }
      var _E = Q.d.forwardRef(function (e, t) {
          var r = e.as;
          void 0 === r && (r = eC);
          var $ = e.label,
            o = e.name,
            a = pC(e, ['as', 'label', 'name']);
          return Q.d.createElement(
            ea,
            pq(a),
            Q.d.createElement(dC, {htmlFor: o}, $),
            Q.d.createElement(
              r,
              Object.assign({}, {ref: t, id: o, name: o}, qq(a))
            )
          );
        }),
        aF = Q.d.forwardRef(function (e, t) {
          return Q.d.createElement(
            ea,
            Object.assign(
              {},
              {ref: t, as: 'progress', variant: 'styles.progress'},
              e,
              {
                __css: {
                  display: 'block',
                  width: '100%',
                  height: '4px',
                  margin: 0,
                  padding: 0,
                  overflow: 'hidden',
                  appearance: 'none',
                  color: 'primary',
                  bg: 'gray',
                  borderRadius: 9999,
                  border: 'none',
                  '&::-webkit-progress-bar': {bg: 'transparent'},
                  '&::-webkit-progress-value': {bg: 'currentcolor'},
                  '&::-moz-progress-bar': {bg: 'currentcolor'},
                },
              }
            )
          );
        });
      function qC(e, t) {
        var r = {};
        for (var $ in e)
          Object.prototype.hasOwnProperty.call(e, $) &&
            -1 === t.indexOf($) &&
            (r[$] = e[$]);
        return r;
      }
      var bF = Q.d.forwardRef(function (e, t) {
        var r = e.size;
        void 0 === r && (r = 128);
        var $ = e.strokeWidth;
        void 0 === $ && ($ = 2);
        var o = e.value;
        void 0 === o && (o = 0);
        var a = e.min;
        void 0 === a && (a = 0);
        var i = e.max;
        void 0 === i && (i = 1);
        var n = e.title,
          c = qC(e, ['size', 'strokeWidth', 'value', 'min', 'max', 'title']),
          s = 16 - $,
          p = 2 * s * Math.PI,
          k = p - ((o - a) / (i - a)) * p;
        return Q.d.createElement(
          ea,
          Object.assign(
            {},
            {
              ref: t,
              as: 'svg',
              viewBox: '0 0 32 32',
              width: r,
              height: r,
              strokeWidth: $,
              fill: 'none',
              stroke: 'currentcolor',
              role: 'img',
              'aria-valuenow': o,
              'aria-valuemin': a,
              'aria-valuemax': i,
            },
            c,
            {__css: {color: 'primary'}}
          ),
          n && Q.d.createElement('title', null, n),
          Q.d.createElement('circle', {cx: 16, cy: 16, r: s, opacity: 1 / 8}),
          Q.d.createElement('circle', {
            cx: 16,
            cy: 16,
            r: s,
            strokeDasharray: p,
            strokeDashoffset: k,
            transform: 'rotate(-90 16 16)',
          })
        );
      });
      function rC(e, t) {
        var r = {};
        for (var $ in e)
          Object.prototype.hasOwnProperty.call(e, $) &&
            -1 === t.indexOf($) &&
            (r[$] = e[$]);
        return r;
      }
      var sC = gA({
          from: {transform: 'rotate(0deg)'},
          to: {transform: 'rotate(360deg)'},
        }),
        cF = Q.d.forwardRef(function (e, t) {
          var r = e.size;
          void 0 === r && (r = 48);
          var $ = e.strokeWidth;
          void 0 === $ && ($ = 4);
          var o = e.title;
          void 0 === o && (o = 'Loading...');
          var a = e.duration;
          void 0 === a && (a = 500);
          var i = rC(e, ['size', 'strokeWidth', 'max', 'title', 'duration']),
            n = 16 - $,
            c = 2 * n * Math.PI,
            s = c - 0.25 * c;
          return Q.d.createElement(
            ea,
            Object.assign(
              {},
              {
                ref: t,
                as: 'svg',
                viewBox: '0 0 32 32',
                width: r,
                height: r,
                strokeWidth: $,
                fill: 'none',
                stroke: 'currentcolor',
                role: 'img',
              },
              i,
              {__css: {color: 'primary', overflow: 'visible'}}
            ),
            Q.d.createElement('title', null, o),
            Q.d.createElement('circle', {
              cx: 16,
              cy: 16,
              r: n,
              opacity: 1 / 8,
            }),
            Q.d.createElement(ea, {
              as: 'circle',
              cx: 16,
              cy: 16,
              r: n,
              strokeDasharray: c,
              strokeDashoffset: s,
              __css: {
                transformOrigin: '50% 50%',
                animationName: sC.toString(),
                animationTimingFunction: 'linear',
                animationDuration: a + 'ms',
                animationIterationCount: 'infinite',
              },
            })
          );
        });
      function tC(e, t) {
        var r = {};
        for (var $ in e)
          Object.prototype.hasOwnProperty.call(e, $) &&
            -1 === t.indexOf($) &&
            (r[$] = e[$]);
        return r;
      }
      var dF = Q.d.forwardRef(function (e, t) {
          var r = e.size;
          void 0 === r && (r = 48);
          var $ = tC(e, ['size']);
          return Q.d.createElement(
            yj,
            Object.assign(
              {},
              {ref: t, width: r, height: r, variant: 'avatar'},
              $,
              {
                __css: {borderRadius: 9999},
              }
            )
          );
        }),
        eF = Q.d.forwardRef(function (e, t) {
          return Q.d.createElement(
            ea,
            Object.assign({}, {ref: t}, e, {
              __themeKey: 'badges',
              __css: {
                display: 'inline-block',
                verticalAlign: 'baseline',
                fontSize: 0,
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                px: 1,
                borderRadius: 2,
                color: 'white',
                bg: 'primary',
              },
            })
          );
        });
      function uC(e, t) {
        var r = {};
        for (var $ in e)
          Object.prototype.hasOwnProperty.call(e, $) &&
            -1 === t.indexOf($) &&
            (r[$] = e[$]);
        return r;
      }
      var rq = Q.d.forwardRef(function (e, t) {
        var r = e.size;
        void 0 === r && (r = 32);
        var $ = uC(e, ['size']);
        return Q.d.createElement(
          ea,
          Object.assign({}, {ref: t, as: 'button', variant: 'icon'}, $, {
            __themeKey: 'buttons',
            __css: {
              appearance: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 1,
              width: r,
              height: r,
              color: 'inherit',
              bg: 'transparent',
              border: 'none',
              borderRadius: 4,
            },
          })
        );
      });
      function vC(e, t) {
        var r = {};
        for (var $ in e)
          Object.prototype.hasOwnProperty.call(e, $) &&
            -1 === t.indexOf($) &&
            (r[$] = e[$]);
        return r;
      }
      var wC = Q.d.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '24',
            height: '24',
            fill: 'currentcolor',
            viewBox: '0 0 24 24',
          },
          Q.d.createElement('path', {
            d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
          })
        ),
        fF = Q.d.forwardRef(function (e, t) {
          var r = vC(e, ['size']);
          return Q.d.createElement(
            rq,
            Object.assign(
              {},
              {
                ref: t,
                title: 'Close',
                'aria-label': 'Close',
                variant: 'close',
              },
              r,
              {children: wC}
            )
          );
        }),
        gF = Q.d.forwardRef(function (e, t) {
          return Q.d.createElement(
            ea,
            Object.assign({}, {ref: t}, e, {
              __themeKey: 'alerts',
              __css: {
                display: 'flex',
                alignItems: 'center',
                px: 3,
                py: 2,
                fontWeight: 'bold',
                color: 'white',
                bg: 'primary',
                borderRadius: 4,
              },
            })
          );
        }),
        hF = Q.d.forwardRef(function (e, t) {
          return Q.d.createElement(
            ea,
            Object.assign({}, {ref: t, as: 'hr', variant: 'styles.hr'}, e, {
              __css: {
                color: 'gray',
                m: 0,
                my: 2,
                border: 0,
                borderBottom: '1px solid',
              },
            })
          );
        });
      function xC(e, t) {
        var r = {};
        for (var $ in e)
          Object.prototype.hasOwnProperty.call(e, $) &&
            -1 === t.indexOf($) &&
            (r[$] = e[$]);
        return r;
      }
      var iF = Q.d.forwardRef(function (e, t) {
        var r = e.ratio;
        void 0 === r && (r = 16 / 9);
        var $ = e.src,
          o = e.frameBorder;
        void 0 === o && (o = 0);
        var a = e.allowFullScreen;
        void 0 === a && (a = !0);
        var i = e.width;
        void 0 === i && (i = 560);
        var n = e.height;
        void 0 === n && (n = 315);
        var c = e.allow,
          s = xC(e, [
            'ratio',
            'src',
            'frameBorder',
            'allowFullScreen',
            'width',
            'height',
            'allow',
          ]);
        return Q.d.createElement(
          ea,
          Object.assign({}, s, {
            __css: {
              width: '100%',
              height: 0,
              paddingBottom: 100 / r + '%',
              position: 'relative',
              overflow: 'hidden',
            },
          }),
          Q.d.createElement(ea, {
            ref: t,
            as: 'iframe',
            src: $,
            width: i,
            height: n,
            frameBorder: o,
            allowFullScreen: a,
            allow: c,
            __css: {
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              bottom: 0,
              left: 0,
              border: 0,
            },
          })
        );
      });
      function yC(e, t) {
        var r = {};
        for (var $ in e)
          Object.prototype.hasOwnProperty.call(e, $) &&
            -1 === t.indexOf($) &&
            (r[$] = e[$]);
        return r;
      }
      var zC = Q.d.forwardRef(function (e, t) {
        var r = e.ratio;
        void 0 === r && (r = 4 / 3);
        var $ = e.children,
          o = yC(e, ['ratio', 'children']);
        return Q.d.createElement(
          ea,
          {ref: t, sx: {position: 'relative', overflow: 'hidden'}},
          Q.d.createElement(ea, {
            sx: {width: '100%', height: 0, paddingBottom: 100 / r + '%'},
          }),
          Q.d.createElement(
            ea,
            Object.assign({}, o, {
              __css: {
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              },
            }),
            $
          )
        );
      });
      function AC(e, t) {
        var r = {};
        for (var $ in e)
          Object.prototype.hasOwnProperty.call(e, $) &&
            -1 === t.indexOf($) &&
            (r[$] = e[$]);
        return r;
      }
      var jF = Q.d.forwardRef(function (e, t) {
          var r = e.ratio,
            $ = AC(e, ['ratio']);
          return Q.d.createElement(
            zC,
            {ratio: r},
            Q.d.createElement(
              yj,
              Object.assign({}, {ref: t}, $, {__css: {objectFit: 'cover'}})
            )
          );
        }),
        kF = Q.d.forwardRef(function (e, t) {
          return Q.d.createElement(
            ea,
            Object.assign({}, {ref: t, variant: 'container'}, e, {
              __themeKey: 'layout',
              __css: {width: '100%', maxWidth: 'container', mx: 'auto'},
            })
          );
        }),
        lF = Q.d.forwardRef(function (e, t) {
          return Q.d.createElement(
            cC,
            Object.assign({}, {ref: t, variant: 'nav'}, e, {
              __css: {
                color: 'inherit',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block',
                '&:hover, &:focus, &.active': {color: 'primary'},
              },
            })
          );
        }),
        mF = Q.d.forwardRef(function (e, t) {
          return Q.d.createElement(
            ea,
            Object.assign({}, {ref: t}, e, {
              __themeKey: 'messages',
              __css: {
                padding: 3,
                paddingLeft: function (e) {
                  return e.space[3] - e.space[1];
                },
                borderLeftWidth: function (e) {
                  return e.space[1];
                },
                borderLeftStyle: 'solid',
                borderLeftColor: 'primary',
                borderRadius: 4,
                bg: 'highlight',
              },
            })
          );
        }),
        BC = function (e) {
          var t = e.size;
          return (
            void 0 === t && (t = 24),
            Q.d.createElement(
              ea,
              {
                as: 'svg',
                xmlns: 'http://www.w3.org/2000/svg',
                width: t,
                height: t,
                fill: 'currentcolor',
                viewBox: '0 0 24 24',
                sx: {display: 'block', margin: 0},
              },
              Q.d.createElement('path', {
                d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z',
              })
            )
          );
        },
        nF = Q.d.forwardRef(function (e, t) {
          return Q.d.createElement(
            rq,
            Object.assign(
              {},
              {
                ref: t,
                title: 'Menu',
                'aria-label': 'Toggle Menu',
                variant: 'menu',
              },
              e
            ),
            Q.d.createElement(BC, null)
          );
        });
      var qe = {};
      Ka();
      var CC =
          (qe && qe.__assign) ||
          function () {
            return (CC =
              Object.assign ||
              function (t) {
                for (var e, a = 1, o = arguments.length; a < o; a++)
                  for (var $ in (e = arguments[a]))
                    Object.prototype.hasOwnProperty.call(e, $) && (t[$] = e[$]);
                return t;
              }).apply(this, arguments);
          },
        xc = function (t) {
          return Q.d.createElement(
            je.path,
            CC(
              {
                fill: 'transparent',
                strokeWidth: '3',
                stroke: 'hsl(0, 0%, 99%)',
                strokeLinecap: 'round',
              },
              t
            )
          );
        },
        DC = function () {
          return Q.d.createElement(
            'svg',
            {width: '27', height: '27', viewBox: '0 0 27 27'},
            Q.d.createElement(xc, {
              variants: {
                closed: {opacity: 0, d: 'M 7.5 14.5 L 19 14.5'},
                open: {opacity: 1, d: 'M 7 7 L 20 20'},
              },
              transition: {duration: 0.2},
            }),
            Q.d.createElement(xc, {
              variants: {
                closed: {opacity: 0, d: 'M 7.5 8.5 L 19 8.5'},
                open: {opacity: 1, d: 'M 7 20 L 20 7'},
              },
              transition: {duration: 0.2},
            }),
            Q.d.createElement(xc, {
              d: 'M22 21.6453C22 20 23 19.5 23 19.5C23 19.5 25.5 18 25.5 14V9C25.5 4 23 1.5 18 1.5H9C4 1.5 1.5 4 1.5 9V14C1.5 19 4 21 9 21H13.5C14 21 14 21 15 21.5L20.25 24.8572L20.8517 25.2118C21.5184 25.6046 22 25.631 22 24.8572V24.0287V22.7858V21.6453Z',
              variants: {closed: {opacity: 1}, open: {opacity: 0}},
              transition: {duration: 0.2},
            })
          );
        },
        sq = function () {
          return Q.d.createElement(
            'svg',
            {width: '24', height: '25', viewBox: '0 0 24 25', fill: 'none'},
            Q.d.createElement(xc, {
              variants: {
                closed: {opacity: 0, d: 'M 7.5 14.5 L 19 14.5'},
                open: {opacity: 1, d: 'M 5 5 L 20 20'},
              },
              transition: {duration: 0.2},
            }),
            Q.d.createElement(xc, {
              variants: {
                closed: {opacity: 0, d: 'M 7.5 8.5 L 19 8.5'},
                open: {opacity: 1, d: 'M 5 20 L 20 5'},
              },
              transition: {duration: 0.2},
            }),
            Q.d.createElement(je.path, {
              d: 'M20.5 21.1453C20.5 19.5 21.5 19 21.5 19C21.5 19 24 18.5 24 13.5V8.5C24 3.5 21.5 1 16.5 1H7.5C2.5 1 0 3.5 0 8.5V13.5C0 18.5 2.5 20.5 7.5 20.5H12C12.5 20.5 12.5 20.5 13.5 21L18.75 24.3572L19.3517 24.7118C20.0184 25.1046 20.5 25.131 20.5 24.3572V23.5287V22.2858V21.1453Z',
              fill: 'white',
              fillOpacity: '0.7',
              variants: {closed: {opacity: 1}, open: {opacity: 0}},
              transition: {duration: 0.2},
            }),
            Q.d.createElement(je.path, {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M21.5 18C21.5 18 20.5 18.5 20.5 20.1453V21.2858V22.5287V23.3572C20.5 24.131 20.0184 24.1046 19.3517 23.7118L18.75 23.3572L13.5 20C12.8174 19.6587 12.6007 19.5504 12.3729 19.516C12.267 19.5 12.1587 19.5 12 19.5H7.5C2.5 19.5 0 17.5 0 12.5V7.5C0 2.5 2.5 0 7.5 0H16.5C21.5 0 24 2.5 24 7.5V12.5C24 17.5 21.5 18 21.5 18ZM21 17.557C21.8581 17.557 24 13.557 23 13.057C22.3869 12.7505 21.8801 13.7414 21.4646 14.554C21.2023 15.0668 20.9764 15.5086 20.783 15.5086C20.283 15.5086 20 16.0554 20 16.7568C20 17.4582 20.1419 17.557 21 17.557Z',
              fill: 'white',
              variants: {closed: {opacity: 1}, open: {opacity: 0}},
              transition: {duration: 0.2},
            })
          );
        };
      qe.ToggleIconFilled = sq;
      var EC = function () {
          return Q.d.createElement(
            'svg',
            {width: '27', height: '27', viewBox: '0 0 27 27'},
            Q.d.createElement(xc, {
              variants: {
                closed: {opacity: 0, d: 'M 7.5 14.5 L 19 14.5'},
                open: {opacity: 1, d: 'M 7 7 L 20 20'},
              },
              transition: {duration: 0.2},
            }),
            Q.d.createElement(xc, {
              variants: {
                closed: {opacity: 0, d: 'M 7.5 8.5 L 19 8.5'},
                open: {opacity: 1, d: 'M 7 20 L 20 7'},
              },
              transition: {duration: 0.2},
            })
          );
        },
        FC = function (t) {
          var e = t.isOpen,
            a = t.customIconUrl,
            o = t.iconVariant;
          return a
            ? e
              ? Q.d.createElement(EC, null)
              : Q.d.createElement(yj, {
                  src: a,
                  style: {maxHeight: 40, maxWidth: 40},
                })
            : 'filled' === o
            ? Q.d.createElement(sq, null)
            : Q.d.createElement(DC, null);
        },
        Aj = function (t) {
          var e = t.isOpen,
            a = t.isDisabled,
            o = t.customIconUrl,
            $ = t.iconVariant,
            r = t.style,
            i = t.toggle;
          return Q.d.createElement(
            bC,
            {
              className: 'Papercups-toggleButton',
              variant: 'primary',
              p: 0,
              style: r,
              sx: {variant: 'styles.WidgetToggle'},
              disabled: a,
              onClick: i,
              'aria-label': (e ? 'Close' : 'Open') + ' chat widget',
            },
            Q.d.createElement(FC, {
              customIconUrl: o,
              iconVariant: $,
              isOpen: e,
            })
          );
        };
      (qe.WidgetToggle = Aj), (qe.default = Aj);
      var ob = {};
      var GC = {};
      GC = (e) =>
        encodeURIComponent(e).replace(/[!'()*]/g, (e) =>
          '%'.concat(e.charCodeAt(0).toString(16).toUpperCase())
        );
      var HC = {},
        tq = '%[a-f0-9]{2}',
        uq = new RegExp(tq, 'gi'),
        vq = new RegExp('(' + tq + ')+', 'gi');
      function Bj(e, r) {
        try {
          return decodeURIComponent(e.join(''));
        } catch (n) {}
        if (1 === e.length) return e;
        r = r || 1;
        var t = e.slice(0, r),
          o = e.slice(r);
        return Array.prototype.concat.call([], Bj(t), Bj(o));
      }
      function IC(e) {
        try {
          return decodeURIComponent(e);
        } catch (o) {
          for (var r = e.match(uq), t = 1; t < r.length; t++)
            r = (e = Bj(r, t).join('')).match(uq);
          return e;
        }
      }
      function JC(e) {
        for (
          var r = {'%FE%FF': '\uFFFD\uFFFD', '%FF%FE': '\uFFFD\uFFFD'},
            t = vq.exec(e);
          t;

        ) {
          try {
            r[t[0]] = decodeURIComponent(t[0]);
          } catch (p) {
            var o = IC(t[0]);
            o !== t[0] && (r[t[0]] = o);
          }
          t = vq.exec(e);
        }
        r['%C2'] = '\uFFFD';
        for (var n = Object.keys(r), $ = 0; $ < n.length; $++) {
          var c = n[$];
          e = e.replace(new RegExp(c, 'g'), r[c]);
        }
        return e;
      }
      HC = function (e) {
        if ('string' != typeof e)
          throw new TypeError(
            'Expected `encodedURI` to be of type `string`, got `' +
              typeof e +
              '`'
          );
        try {
          return (e = e.replace(/\+/g, ' ')), decodeURIComponent(e);
        } catch (r) {
          return JC(e);
        }
      };
      var wq = {};
      wq = function (t, e) {
        if ('string' != typeof t || 'string' != typeof e)
          throw new TypeError('Expected the arguments to be of type `string`');
        if ('' === e) return [t];
        var r = t.indexOf(e);
        return -1 === r ? [t] : [t.slice(0, r), t.slice(r + e.length)];
      };
      var yc = {};
      function Cj(r) {
        return (Cj =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (r) {
                return typeof r;
              }
            : function (r) {
                return r &&
                  'function' == typeof Symbol &&
                  r.constructor === Symbol &&
                  r !== Symbol.prototype
                  ? 'symbol'
                  : typeof r;
              })(r);
      }
      function Dj(r) {
        return NC(r) || MC(r) || LC(r) || KC();
      }
      function KC() {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function LC(r, e) {
        if (r) {
          if ('string' == typeof r) return Ej(r, e);
          var t = Object.prototype.toString.call(r).slice(8, -1);
          return (
            'Object' === t && r.constructor && (t = r.constructor.name),
            'Map' === t || 'Set' === t
              ? Array.from(r)
              : 'Arguments' === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? Ej(r, e)
              : void 0
          );
        }
      }
      function MC(r) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(r))
          return Array.from(r);
      }
      function NC(r) {
        if (Array.isArray(r)) return Ej(r);
      }
      function Ej(r, e) {
        (null == e || e > r.length) && (e = r.length);
        for (var t = 0, a = new Array(e); t < e; t++) a[t] = r[t];
        return a;
      }
      var OC = function (r) {
        return null == r;
      };
      function PC(r) {
        switch (r.arrayFormat) {
          case 'index':
            return function (e) {
              return function (t, a) {
                var o = t.length;
                return void 0 === a ||
                  (r.skipNull && null === a) ||
                  (r.skipEmptyString && '' === a)
                  ? t
                  : [].concat(
                      Dj(t),
                      null === a
                        ? [[Ca(e, r), '[', o, ']'].join('')]
                        : [[Ca(e, r), '[', Ca(o, r), ']=', Ca(a, r)].join('')]
                    );
              };
            };
          case 'bracket':
            return function (e) {
              return function (t, a) {
                return void 0 === a ||
                  (r.skipNull && null === a) ||
                  (r.skipEmptyString && '' === a)
                  ? t
                  : [].concat(
                      Dj(t),
                      null === a
                        ? [[Ca(e, r), '[]'].join('')]
                        : [[Ca(e, r), '[]=', Ca(a, r)].join('')]
                    );
              };
            };
          case 'comma':
          case 'separator':
            return function (e) {
              return function (t, a) {
                return null == a || 0 === a.length
                  ? t
                  : 0 === t.length
                  ? [[Ca(e, r), '=', Ca(a, r)].join('')]
                  : [[t, Ca(a, r)].join(r.arrayFormatSeparator)];
              };
            };
          default:
            return function (e) {
              return function (t, a) {
                return void 0 === a ||
                  (r.skipNull && null === a) ||
                  (r.skipEmptyString && '' === a)
                  ? t
                  : [].concat(
                      Dj(t),
                      null === a
                        ? [Ca(e, r)]
                        : [[Ca(e, r), '=', Ca(a, r)].join('')]
                    );
              };
            };
        }
      }
      function QC(r) {
        var e;
        switch (r.arrayFormat) {
          case 'index':
            return function (r, t, a) {
              (e = /\[(\d*)\]$/.exec(r)),
                (r = r.replace(/\[\d*\]$/, '')),
                e
                  ? (void 0 === a[r] && (a[r] = {}), (a[r][e[1]] = t))
                  : (a[r] = t);
            };
          case 'bracket':
            return function (r, t, a) {
              (e = /(\[\])$/.exec(r)),
                (r = r.replace(/\[\]$/, '')),
                e
                  ? void 0 !== a[r]
                    ? (a[r] = [].concat(a[r], t))
                    : (a[r] = [t])
                  : (a[r] = t);
            };
          case 'comma':
          case 'separator':
            return function (e, t, a) {
              var o =
                'string' == typeof t &&
                t.split('').indexOf(r.arrayFormatSeparator) > -1
                  ? t.split(r.arrayFormatSeparator).map(function (e) {
                      return re(e, r);
                    })
                  : null === t
                  ? t
                  : re(t, r);
              a[e] = o;
            };
          default:
            return function (r, e, t) {
              void 0 !== t[r] ? (t[r] = [].concat(t[r], e)) : (t[r] = e);
            };
        }
      }
      function xq(r) {
        if ('string' != typeof r || 1 !== r.length)
          throw new TypeError(
            'arrayFormatSeparator must be single character string'
          );
      }
      function Ca(r, e) {
        return e.encode ? (e.strict ? GC(r) : encodeURIComponent(r)) : r;
      }
      function re(r, e) {
        return e.decode ? HC(r) : r;
      }
      function yq(r) {
        return Array.isArray(r)
          ? r.sort()
          : 'object' === Cj(r)
          ? yq(Object.keys(r))
              .sort(function (r, e) {
                return Number(r) - Number(e);
              })
              .map(function (e) {
                return r[e];
              })
          : r;
      }
      function zq(r) {
        var e = r.indexOf('#');
        return -1 !== e && (r = r.slice(0, e)), r;
      }
      function RC(r) {
        var e = '',
          t = r.indexOf('#');
        return -1 !== t && (e = r.slice(t)), e;
      }
      function Aq(r) {
        var e = (r = zq(r)).indexOf('?');
        return -1 === e ? '' : r.slice(e + 1);
      }
      function Bq(r, e) {
        return (
          e.parseNumbers &&
          !Number.isNaN(Number(r)) &&
          'string' == typeof r &&
          '' !== r.trim()
            ? (r = Number(r))
            : !e.parseBooleans ||
              null === r ||
              ('true' !== r.toLowerCase() && 'false' !== r.toLowerCase()) ||
              (r = 'true' === r.toLowerCase()),
          r
        );
      }
      function Cq(r, e) {
        xq(
          (e = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: 'none',
              arrayFormatSeparator: ',',
              parseNumbers: !1,
              parseBooleans: !1,
            },
            e
          )).arrayFormatSeparator
        );
        var t = QC(e),
          a = Object.create(null);
        if ('string' != typeof r) return a;
        if (!(r = r.trim().replace(/^[?#&]/, ''))) return a;
        for (var o of r.split('&')) {
          var [n, $] = wq(e.decode ? o.replace(/\+/g, ' ') : o, '=');
          ($ =
            void 0 === $
              ? null
              : ['comma', 'separator'].includes(e.arrayFormat)
              ? $
              : re($, e)),
            t(re(n, e), $, a);
        }
        for (var v of Object.keys(a)) {
          var p = a[v];
          if ('object' === Cj(p) && null !== p)
            for (var i of Object.keys(p)) p[i] = Bq(p[i], e);
          else a[v] = Bq(p, e);
        }
        return !1 === e.sort
          ? a
          : (!0 === e.sort
              ? Object.keys(a).sort()
              : Object.keys(a).sort(e.sort)
            ).reduce(function (r, e) {
              var t = a[e];
              return (
                Boolean(t) && 'object' === Cj(t) && !Array.isArray(t)
                  ? (r[e] = yq(t))
                  : (r[e] = t),
                r
              );
            }, Object.create(null));
      }
      var Dq = Aq;
      yc.extract = Dq;
      var Eq = Cq;
      yc.parse = Eq;
      var Fq = function (r, e) {
        if (!r) return '';
        xq(
          (e = Object.assign(
            {
              encode: !0,
              strict: !0,
              arrayFormat: 'none',
              arrayFormatSeparator: ',',
            },
            e
          )).arrayFormatSeparator
        );
        var t = function (t) {
            return (
              (e.skipNull && OC(r[t])) || (e.skipEmptyString && '' === r[t])
            );
          },
          a = PC(e),
          o = {};
        for (var n of Object.keys(r)) t(n) || (o[n] = r[n]);
        var $ = Object.keys(o);
        return (
          !1 !== e.sort && $.sort(e.sort),
          $.map(function (t) {
            var o = r[t];
            return void 0 === o
              ? ''
              : null === o
              ? Ca(t, e)
              : Array.isArray(o)
              ? o.reduce(a(t), []).join('&')
              : Ca(t, e) + '=' + Ca(o, e);
          })
            .filter(function (r) {
              return r.length > 0;
            })
            .join('&')
        );
      };
      yc.stringify = Fq;
      var SC = function (r, e) {
        e = Object.assign({decode: !0}, e);
        var [t, a] = wq(r, '#');
        return Object.assign(
          {url: t.split('?')[0] || '', query: Cq(Aq(r), e)},
          e && e.parseFragmentIdentifier && a
            ? {fragmentIdentifier: re(a, e)}
            : {}
        );
      };
      yc.parseUrl = SC;
      var TC = function (r, e) {
        e = Object.assign({encode: !0, strict: !0}, e);
        var t = zq(r.url).split('?')[0] || '',
          a = Dq(r.url),
          o = Eq(a, {sort: !1}),
          n = Object.assign(o, r.query),
          $ = Fq(n, e);
        $ && ($ = '?'.concat($));
        var v = RC(r.url);
        // console.log("Here Here!: "+ v)
        return (
          r.fragmentIdentifier && (v = '#'.concat(Ca(r.fragmentIdentifier, e))),
          ''.concat(t).concat($).concat(v)
        );
      };
      yc.stringifyUrl = TC;
      var cd = {};
      var UC = {};
      function Wa(t) {
        if (t) return VC(t);
      }
      function VC(t) {
        for (var r in Wa.prototype) t[r] = Wa.prototype[r];
        return t;
      }
      (UC = Wa),
        (Wa.prototype.on = Wa.prototype.addEventListener =
          function (t, r) {
            return (
              (this._callbacks = this._callbacks || {}),
              (this._callbacks['$' + t] = this._callbacks['$' + t] || []).push(
                r
              ),
              this
            );
          }),
        (Wa.prototype.once = function (t, r) {
          function e() {
            this.off(t, e), r.apply(this, arguments);
          }
          return (e.fn = r), this.on(t, e), this;
        }),
        (Wa.prototype.off =
          Wa.prototype.removeListener =
          Wa.prototype.removeAllListeners =
          Wa.prototype.removeEventListener =
            function (t, r) {
              if (
                ((this._callbacks = this._callbacks || {}),
                0 == arguments.length)
              )
                return (this._callbacks = {}), this;
              var e,
                i = this._callbacks['$' + t];
              if (!i) return this;
              if (1 == arguments.length)
                return delete this._callbacks['$' + t], this;
              for (var s = 0; s < i.length; s++)
                if ((e = i[s]) === r || e.fn === r) {
                  i.splice(s, 1);
                  break;
                }
              return 0 === i.length && delete this._callbacks['$' + t], this;
            }),
        (Wa.prototype.emit = function (t) {
          this._callbacks = this._callbacks || {};
          for (
            var r = new Array(arguments.length - 1),
              e = this._callbacks['$' + t],
              i = 1;
            i < arguments.length;
            i++
          )
            r[i - 1] = arguments[i];
          if (e) {
            i = 0;
            for (var s = (e = e.slice(0)).length; i < s; ++i)
              e[i].apply(this, r);
          }
          return this;
        }),
        (Wa.prototype.listeners = function (t) {
          return (
            (this._callbacks = this._callbacks || {}),
            this._callbacks['$' + t] || []
          );
        }),
        (Wa.prototype.hasListeners = function (t) {
          return !!this.listeners(t).length;
        });
      var WC = {};
      (WC = se), (se.default = se), (se.stable = Gq), (se.stableStringify = Gq);
      var Ob = [],
        dc = [];
      function se(r, e, $) {
        var a;
        for (
          Fj(r, '', [], void 0),
            a =
              0 === dc.length
                ? JSON.stringify(r, e, $)
                : JSON.stringify(r, Hq(e), $);
          0 !== Ob.length;

        ) {
          var t = Ob.pop();
          4 === t.length
            ? Object.defineProperty(t[0], t[1], t[3])
            : (t[0][t[1]] = t[2]);
        }
        return a;
      }
      function Fj(r, e, $, a) {
        var t;
        if ('object' == typeof r && null !== r) {
          for (t = 0; t < $.length; t++)
            if ($[t] === r) {
              var i = Object.getOwnPropertyDescriptor(a, e);
              return void (void 0 !== i.get
                ? i.configurable
                  ? (Object.defineProperty(a, e, {value: '[Circular]'}),
                    Ob.push([a, e, r, i]))
                  : dc.push([r, e])
                : ((a[e] = '[Circular]'), Ob.push([a, e, r])));
            }
          if (($.push(r), Array.isArray(r)))
            for (t = 0; t < r.length; t++) Fj(r[t], t, $, r);
          else {
            var c = Object.keys(r);
            for (t = 0; t < c.length; t++) {
              var n = c[t];
              Fj(r[n], n, $, r);
            }
          }
          $.pop();
        }
      }
      function XC(r, e) {
        return r < e ? -1 : r > e ? 1 : 0;
      }
      function Gq(r, e, $) {
        var a,
          t = Gj(r, '', [], void 0) || r;
        for (
          a =
            0 === dc.length
              ? JSON.stringify(t, e, $)
              : JSON.stringify(t, Hq(e), $);
          0 !== Ob.length;

        ) {
          var i = Ob.pop();
          4 === i.length
            ? Object.defineProperty(i[0], i[1], i[3])
            : (i[0][i[1]] = i[2]);
        }
        return a;
      }
      function Gj(r, e, $, a) {
        var t;
        if ('object' == typeof r && null !== r) {
          for (t = 0; t < $.length; t++)
            if ($[t] === r) {
              var i = Object.getOwnPropertyDescriptor(a, e);
              return void (void 0 !== i.get
                ? i.configurable
                  ? (Object.defineProperty(a, e, {value: '[Circular]'}),
                    Ob.push([a, e, r, i]))
                  : dc.push([r, e])
                : ((a[e] = '[Circular]'), Ob.push([a, e, r])));
            }
          if ('function' == typeof r.toJSON) return;
          if (($.push(r), Array.isArray(r)))
            for (t = 0; t < r.length; t++) Gj(r[t], t, $, r);
          else {
            var c = {},
              n = Object.keys(r).sort(XC);
            for (t = 0; t < n.length; t++) {
              var v = n[t];
              Gj(r[v], v, $, r), (c[v] = r[v]);
            }
            if (void 0 === a) return c;
            Ob.push([a, e, r]), (a[e] = c);
          }
          $.pop();
        }
      }
      function Hq(r) {
        return (
          (r =
            void 0 !== r
              ? r
              : function (r, e) {
                  return e;
                }),
          function (e, $) {
            if (dc.length > 0)
              for (var a = 0; a < dc.length; a++) {
                var t = dc[a];
                if (t[1] === e && t[0] === $) {
                  ($ = '[Circular]'), dc.splice(a, 1);
                  break;
                }
              }
            return r.call(this, e, $);
          }
        );
      }
      var dd = {};
      function YC(o) {
        return (YC =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (o) {
                return typeof o;
              }
            : function (o) {
                return o &&
                  'function' == typeof Symbol &&
                  o.constructor === Symbol &&
                  o !== Symbol.prototype
                  ? 'symbol'
                  : typeof o;
              })(o);
      }
      function ZC(o) {
        return null !== o && 'object' === YC(o);
      }
      dd = ZC;
      var $C = {};
      function _C(t) {
        return (_C =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function fa(t) {
        if (t) return aD(t);
      }
      function aD(t) {
        for (var e in fa.prototype)
          Object.prototype.hasOwnProperty.call(fa.prototype, e) &&
            (t[e] = fa.prototype[e]);
        return t;
      }
      ($C = fa),
        (fa.prototype.clearTimeout = function () {
          return (
            clearTimeout(this._timer),
            clearTimeout(this._responseTimeoutTimer),
            clearTimeout(this._uploadTimeoutTimer),
            delete this._timer,
            delete this._responseTimeoutTimer,
            delete this._uploadTimeoutTimer,
            this
          );
        }),
        (fa.prototype.parse = function (t) {
          return (this._parser = t), this;
        }),
        (fa.prototype.responseType = function (t) {
          return (this._responseType = t), this;
        }),
        (fa.prototype.serialize = function (t) {
          return (this._serializer = t), this;
        }),
        (fa.prototype.timeout = function (t) {
          if (!t || 'object' !== _C(t))
            return (
              (this._timeout = t),
              (this._responseTimeout = 0),
              (this._uploadTimeout = 0),
              this
            );
          for (var e in t)
            if (Object.prototype.hasOwnProperty.call(t, e))
              switch (e) {
                case 'deadline':
                  this._timeout = t.deadline;
                  break;
                case 'response':
                  this._responseTimeout = t.response;
                  break;
                case 'upload':
                  this._uploadTimeout = t.upload;
                  break;
                default:
                  console.warn('Unknown timeout option', e);
              }
          return this;
        }),
        (fa.prototype.retry = function (t, e) {
          return (
            (0 !== arguments.length && !0 !== t) || (t = 1),
            t <= 0 && (t = 0),
            (this._maxRetries = t),
            (this._retries = 0),
            (this._retryCallback = e),
            this
          );
        });
      var bD = ['ECONNRESET', 'ETIMEDOUT', 'EADDRINFO', 'ESOCKETTIMEDOUT'];
      (fa.prototype._shouldRetry = function (t, e) {
        if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
        if (this._retryCallback)
          try {
            var r = this._retryCallback(t, e);
            if (!0 === r) return !0;
            if (!1 === r) return !1;
          } catch (s) {
            console.error(s);
          }
        if (e && e.status && e.status >= 500 && 501 !== e.status) return !0;
        if (t) {
          if (t.code && bD.includes(t.code)) return !0;
          if (t.timeout && 'ECONNABORTED' === t.code) return !0;
          if (t.crossDomain) return !0;
        }
        return !1;
      }),
        (fa.prototype._retry = function () {
          return (
            this.clearTimeout(),
            this.req && ((this.req = null), (this.req = this.request())),
            (this._aborted = !1),
            (this.timedout = !1),
            (this.timedoutError = null),
            this._end()
          );
        }),
        (fa.prototype.then = function (t, e) {
          var r = this;
          if (!this._fullfilledPromise) {
            var s = this;
            this._endCalled &&
              console.warn(
                'Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises'
              ),
              (this._fullfilledPromise = new Promise(function (t, e) {
                s.on('abort', function () {
                  if (!(r._maxRetries && r._maxRetries > r._retries))
                    if (r.timedout && r.timedoutError) e(r.timedoutError);
                    else {
                      var t = new Error('Aborted');
                      (t.code = 'ABORTED'),
                        (t.status = r.status),
                        (t.method = r.method),
                        (t.url = r.url),
                        e(t);
                    }
                }),
                  s.end(function (r, s) {
                    r ? e(r) : t(s);
                  });
              }));
          }
          return this._fullfilledPromise.then(t, e);
        }),
        (fa.prototype.catch = function (t) {
          return this.then(void 0, t);
        }),
        (fa.prototype.use = function (t) {
          return t(this), this;
        }),
        (fa.prototype.ok = function (t) {
          if ('function' != typeof t) throw new Error('Callback required');
          return (this._okCallback = t), this;
        }),
        (fa.prototype._isResponseOK = function (t) {
          return (
            !!t &&
            (this._okCallback
              ? this._okCallback(t)
              : t.status >= 200 && t.status < 300)
          );
        }),
        (fa.prototype.get = function (t) {
          return this._header[t.toLowerCase()];
        }),
        (fa.prototype.getHeader = fa.prototype.get),
        (fa.prototype.set = function (t, e) {
          if (dd(t)) {
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && this.set(r, t[r]);
            return this;
          }
          return (
            (this._header[t.toLowerCase()] = e), (this.header[t] = e), this
          );
        }),
        (fa.prototype.unset = function (t) {
          return (
            delete this._header[t.toLowerCase()], delete this.header[t], this
          );
        }),
        (fa.prototype.field = function (t, e) {
          if (null == t)
            throw new Error('.field(name, val) name can not be empty');
          if (this._data)
            throw new Error(
              ".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"
            );
          if (dd(t)) {
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && this.field(r, t[r]);
            return this;
          }
          if (Array.isArray(e)) {
            for (var s in e)
              Object.prototype.hasOwnProperty.call(e, s) && this.field(t, e[s]);
            return this;
          }
          if (null == e)
            throw new Error('.field(name, val) val can not be empty');
          return (
            'boolean' == typeof e && (e = String(e)),
            this._getFormData().append(t, e),
            this
          );
        }),
        (fa.prototype.abort = function () {
          return this._aborted
            ? this
            : ((this._aborted = !0),
              this.xhr && this.xhr.abort(),
              this.req && this.req.abort(),
              this.clearTimeout(),
              this.emit('abort'),
              this);
        }),
        (fa.prototype._auth = function (t, e, r, s) {
          switch (r.type) {
            case 'basic':
              this.set(
                'Authorization',
                'Basic '.concat(s(''.concat(t, ':').concat(e)))
              );
              break;
            case 'auto':
              (this.username = t), (this.password = e);
              break;
            case 'bearer':
              this.set('Authorization', 'Bearer '.concat(t));
          }
          return this;
        }),
        (fa.prototype.withCredentials = function (t) {
          return void 0 === t && (t = !0), (this._withCredentials = t), this;
        }),
        (fa.prototype.redirects = function (t) {
          return (this._maxRedirects = t), this;
        }),
        (fa.prototype.maxResponseSize = function (t) {
          if ('number' != typeof t) throw new TypeError('Invalid argument');
          return (this._maxResponseSize = t), this;
        }),
        (fa.prototype.toJSON = function () {
          return {
            method: this.method,
            url: this.url,
            data: this._data,
            headers: this._header,
          };
        }),
        (fa.prototype.send = function (t) {
          var e = dd(t),
            r = this._header['content-type'];
          if (this._formData)
            throw new Error(
              ".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"
            );
          if (e && !this._data)
            Array.isArray(t)
              ? (this._data = [])
              : this._isHost(t) || (this._data = {});
          else if (t && this._data && this._isHost(this._data))
            throw new Error("Can't merge these send calls");
          if (e && dd(this._data))
            for (var s in t)
              Object.prototype.hasOwnProperty.call(t, s) &&
                (this._data[s] = t[s]);
          else
            'string' == typeof t
              ? (r || this.type('form'),
                (r = this._header['content-type']),
                (this._data =
                  'application/x-www-form-urlencoded' === r
                    ? this._data
                      ? ''.concat(this._data, '&').concat(t)
                      : t
                    : (this._data || '') + t))
              : (this._data = t);
          return !e || this._isHost(t) ? this : (r || this.type('json'), this);
        }),
        (fa.prototype.sortQuery = function (t) {
          return (this._sort = void 0 === t || t), this;
        }),
        (fa.prototype._finalizeQueryString = function () {
          var t = this._query.join('&');
          if (
            (t && (this.url += (this.url.includes('?') ? '&' : '?') + t),
            (this._query.length = 0),
            this._sort)
          ) {
            var e = this.url.indexOf('?');
            if (e >= 0) {
              var r = this.url.slice(e + 1).split('&');
              'function' == typeof this._sort ? r.sort(this._sort) : r.sort(),
                (this.url = this.url.slice(0, e) + '?' + r.join('&'));
            }
          }
        }),
        (fa.prototype._appendQueryString = function () {
          console.warn('Unsupported');
        }),
        (fa.prototype._timeoutError = function (t, e, r) {
          if (!this._aborted) {
            var s = new Error(''.concat(t + e, 'ms exceeded'));
            (s.timeout = e),
              (s.code = 'ECONNABORTED'),
              (s.errno = r),
              (this.timedout = !0),
              (this.timedoutError = s),
              this.abort(),
              this.callback(s);
          }
        }),
        (fa.prototype._setTimeouts = function () {
          var t = this;
          this._timeout &&
            !this._timer &&
            (this._timer = setTimeout(function () {
              t._timeoutError('Timeout of ', t._timeout, 'ETIME');
            }, this._timeout)),
            this._responseTimeout &&
              !this._responseTimeoutTimer &&
              (this._responseTimeoutTimer = setTimeout(function () {
                t._timeoutError(
                  'Response timeout of ',
                  t._responseTimeout,
                  'ETIMEDOUT'
                );
              }, this._responseTimeout));
        });
      var cD = function (e) {
        return e.split(/ *; */).shift();
      };
      var dD = function (e) {
        return e.split(/ *; */).reduce(function (e, t) {
          var r = t.split(/ *= */),
            $ = r.shift(),
            n = r.shift();
          return $ && n && (e[$] = n), e;
        }, {});
      };
      var eD = function (e) {
        return e.split(/ *, */).reduce(function (e, t) {
          var r = t.split(/ *; */),
            $ = r[0].slice(1, -1);
          return (e[r[1].split(/ *= */)[1].slice(1, -1)] = $), e;
        }, {});
      };
      var fD = {};
      function zc(t) {
        if (t) return gD(t);
      }
      function gD(t) {
        for (var e in zc.prototype)
          Object.prototype.hasOwnProperty.call(zc.prototype, e) &&
            (t[e] = zc.prototype[e]);
        return t;
      }
      (fD = zc),
        (zc.prototype.get = function (t) {
          return this.header[t.toLowerCase()];
        }),
        (zc.prototype._setHeaderProperties = function (t) {
          var e = t['content-type'] || '';
          this.type = cD(e);
          var s = dD(e);
          for (var r in s)
            Object.prototype.hasOwnProperty.call(s, r) && (this[r] = s[r]);
          this.links = {};
          try {
            t.link && (this.links = eD(t.link));
          } catch (o) {}
        }),
        (zc.prototype._setStatusProperties = function (t) {
          var e = (t / 100) | 0;
          (this.statusCode = t),
            (this.status = this.statusCode),
            (this.statusType = e),
            (this.info = 1 === e),
            (this.ok = 2 === e),
            (this.redirect = 3 === e),
            (this.clientError = 4 === e),
            (this.serverError = 5 === e),
            (this.error = (4 === e || 5 === e) && this.toError()),
            (this.created = 201 === t),
            (this.accepted = 202 === t),
            (this.noContent = 204 === t),
            (this.badRequest = 400 === t),
            (this.unauthorized = 401 === t),
            (this.notAcceptable = 406 === t),
            (this.forbidden = 403 === t),
            (this.notFound = 404 === t),
            (this.unprocessableEntity = 422 === t);
        });
      var ag = {};
      function hD(r) {
        return lD(r) || kD(r) || jD(r) || iD();
      }
      function iD() {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function jD(r, t) {
        if (r) {
          if ('string' == typeof r) return Hj(r, t);
          var e = Object.prototype.toString.call(r).slice(8, -1);
          return (
            'Object' === e && r.constructor && (e = r.constructor.name),
            'Map' === e || 'Set' === e
              ? Array.from(r)
              : 'Arguments' === e ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
              ? Hj(r, t)
              : void 0
          );
        }
      }
      function kD(r) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(r))
          return Array.from(r);
      }
      function lD(r) {
        if (Array.isArray(r)) return Hj(r);
      }
      function Hj(r, t) {
        (null == t || t > r.length) && (t = r.length);
        for (var e = 0, a = new Array(t); e < t; e++) a[e] = r[e];
        return a;
      }
      function Ij() {
        this._defaults = [];
      }
      [
        'use',
        'on',
        'once',
        'set',
        'query',
        'type',
        'accept',
        'auth',
        'withCredentials',
        'sortQuery',
        'retry',
        'ok',
        'redirects',
        'timeout',
        'buffer',
        'serialize',
        'parse',
        'ca',
        'key',
        'pfx',
        'cert',
        'disableTLSCerts',
      ].forEach(function (r) {
        Ij.prototype[r] = function () {
          for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++)
            e[a] = arguments[a];
          return this._defaults.push({fn: r, args: e}), this;
        };
      }),
        (Ij.prototype._setDefaults = function (r) {
          this._defaults.forEach(function (t) {
            r[t.fn].apply(r, hD(t.args));
          });
        }),
        (ag = Ij);
      var te,
        Jj = {};
      function Iq(e) {
        return (Iq =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      'undefined' != typeof window
        ? (te = window)
        : 'undefined' == typeof self
        ? (console.warn(
            'Using browser-only version of superagent in non-browser environment'
          ),
          (te = void 0))
        : (te = self);
      function mD() {}
      var ja =
          (Jj =
          Jj =
            function (e, t) {
              return 'function' == typeof t
                ? new bg('GET', e).end(t)
                : 1 === arguments.length
                ? new bg('GET', e)
                : new bg(e, t);
            }),
        bg = ra;
      (Jj.Request = bg),
        (ja.getXHR = function () {
          if (
            te.XMLHttpRequest &&
            (!te.location ||
              'file:' !== te.location.protocol ||
              !te.ActiveXObject)
          )
            return new XMLHttpRequest();
          try {
            return new ActiveXObject('Microsoft.XMLHTTP');
          } catch (e) {}
          try {
            return new ActiveXObject('Msxml2.XMLHTTP.6.0');
          } catch (t) {}
          try {
            return new ActiveXObject('Msxml2.XMLHTTP.3.0');
          } catch (r) {}
          try {
            return new ActiveXObject('Msxml2.XMLHTTP');
          } catch (n) {}
          throw new Error(
            'Browser-only version of superagent could not find XHR'
          );
        });
      var nD = ''.trim
        ? function (e) {
            return e.trim();
          }
        : function (e) {
            return e.replace(/(^\s*|\s*$)/g, '');
          };
      function Kj(e) {
        if (!dd(e)) return e;
        var t = [];
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) && Lj(t, r, e[r]);
        return t.join('&');
      }
      function Lj(e, t, r) {
        if (void 0 !== r)
          if (null !== r) {
            if (Array.isArray(r))
              r.forEach(function (r) {
                Lj(e, t, r);
              });
            else if (dd(r))
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) &&
                  Lj(e, ''.concat(t, '[').concat(n, ']'), r[n]);
            else e.push(encodeURI(t) + '=' + encodeURIComponent(r));
          } else e.push(encodeURI(t));
      }
      function Jq(e) {
        for (
          var t, r, n = {}, s = e.split('&'), o = 0, a = s.length;
          o < a;
          ++o
        )
          -1 === (r = (t = s[o]).indexOf('='))
            ? (n[decodeURIComponent(t)] = '')
            : (n[decodeURIComponent(t.slice(0, r))] = decodeURIComponent(
                t.slice(r + 1)
              ));
        return n;
      }
      function oD(e) {
        for (
          var t, r, n, s, o = e.split(/\r?\n/), a = {}, i = 0, $ = o.length;
          i < $;
          ++i
        )
          -1 !== (t = (r = o[i]).indexOf(':')) &&
            ((n = r.slice(0, t).toLowerCase()),
            (s = nD(r.slice(t + 1))),
            (a[n] = s));
        return a;
      }
      function Kq(e) {
        return /[/+]json($|[^-\w])/.test(e);
      }
      function ue(e) {
        (this.req = e),
          (this.xhr = this.req.xhr),
          (this.text =
            ('HEAD' !== this.req.method &&
              ('' === this.xhr.responseType ||
                'text' === this.xhr.responseType)) ||
            void 0 === this.xhr.responseType
              ? this.xhr.responseText
              : null),
          (this.statusText = this.req.xhr.statusText);
        var t = this.xhr.status;
        1223 === t && (t = 204),
          this._setStatusProperties(t),
          (this.headers = oD(this.xhr.getAllResponseHeaders())),
          (this.header = this.headers),
          (this.header['content-type'] =
            this.xhr.getResponseHeader('content-type')),
          this._setHeaderProperties(this.header),
          null === this.text && e._responseType
            ? (this.body = this.xhr.response)
            : (this.body =
                'HEAD' === this.req.method
                  ? null
                  : this._parseBody(this.text ? this.text : this.xhr.response));
      }
      function ra(e, t) {
        var r = this;
        (this._query = this._query || []),
          (this.method = e),
          (this.url = t),
          (this.header = {}),
          (this._header = {}),
          this.on('end', function () {
            var e,
              t = null,
              n = null;
            try {
              n = new ue(r);
            } catch (s) {
              return (
                ((t = new Error(
                  'Parser is unable to parse the response'
                )).parse = !0),
                (t.original = s),
                r.xhr
                  ? ((t.rawResponse =
                      void 0 === r.xhr.responseType
                        ? r.xhr.responseText
                        : r.xhr.response),
                    (t.status = r.xhr.status ? r.xhr.status : null),
                    (t.statusCode = t.status))
                  : ((t.rawResponse = null), (t.status = null)),
                r.callback(t)
              );
            }
            r.emit('response', n);
            try {
              r._isResponseOK(n) ||
                (e = new Error(
                  n.statusText || n.text || 'Unsuccessful HTTP response'
                ));
            } catch (s) {
              e = s;
            }
            e
              ? ((e.original = t),
                (e.response = n),
                (e.status = n.status),
                r.callback(e, n))
              : r.callback(null, n);
          });
      }
      function Lq(e, t, r) {
        var n = ja('DELETE', e);
        return (
          'function' == typeof t && ((r = t), (t = null)),
          t && n.send(t),
          r && n.end(r),
          n
        );
      }
      (ja.serializeObject = Kj),
        (ja.parseString = Jq),
        (ja.types = {
          html: 'text/html',
          json: 'application/json',
          xml: 'text/xml',
          urlencoded: 'application/x-www-form-urlencoded',
          form: 'application/x-www-form-urlencoded',
          'form-data': 'application/x-www-form-urlencoded',
        }),
        (ja.serialize = {
          'application/x-www-form-urlencoded': Kj,
          'application/json': WC,
        }),
        (ja.parse = {
          'application/x-www-form-urlencoded': Jq,
          'application/json': JSON.parse,
        }),
        fD(ue.prototype),
        (ue.prototype._parseBody = function (e) {
          var t = ja.parse[this.type];
          return this.req._parser
            ? this.req._parser(this, e)
            : (!t && Kq(this.type) && (t = ja.parse['application/json']),
              t && e && (e.length > 0 || e instanceof Object) ? t(e) : null);
        }),
        (ue.prototype.toError = function () {
          var e = this.req,
            t = e.method,
            r = e.url,
            n = 'cannot '
              .concat(t, ' ')
              .concat(r, ' (')
              .concat(this.status, ')'),
            s = new Error(n);
          return (s.status = this.status), (s.method = t), (s.url = r), s;
        }),
        (ja.Response = ue),
        UC(ra.prototype),
        $C(ra.prototype),
        (ra.prototype.type = function (e) {
          return this.set('Content-Type', ja.types[e] || e), this;
        }),
        (ra.prototype.accept = function (e) {
          return this.set('Accept', ja.types[e] || e), this;
        }),
        (ra.prototype.auth = function (e, t, r) {
          1 === arguments.length && (t = ''),
            'object' === Iq(t) && null !== t && ((r = t), (t = '')),
            r || (r = {type: 'function' == typeof btoa ? 'basic' : 'auto'});
          return this._auth(e, t, r, function (e) {
            if ('function' == typeof btoa) return btoa(e);
            throw new Error('Cannot use basic auth, btoa is not a function');
          });
        }),
        (ra.prototype.query = function (e) {
          return (
            'string' != typeof e && (e = Kj(e)), e && this._query.push(e), this
          );
        }),
        (ra.prototype.attach = function (e, t, r) {
          if (t) {
            if (this._data)
              throw new Error("superagent can't mix .send() and .attach()");
            this._getFormData().append(e, t, r || t.name);
          }
          return this;
        }),
        (ra.prototype._getFormData = function () {
          return (
            this._formData || (this._formData = new te.FormData()),
            this._formData
          );
        }),
        (ra.prototype.callback = function (e, t) {
          if (this._shouldRetry(e, t)) return this._retry();
          var r = this._callback;
          this.clearTimeout(),
            e &&
              (this._maxRetries && (e.retries = this._retries - 1),
              this.emit('error', e)),
            r(e, t);
        }),
        (ra.prototype.crossDomainError = function () {
          var e = new Error(
            'Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.'
          );
          (e.crossDomain = !0),
            (e.status = this.status),
            (e.method = this.method),
            (e.url = this.url),
            this.callback(e);
        }),
        (ra.prototype.agent = function () {
          return (
            console.warn(
              'This is not supported in browser version of superagent'
            ),
            this
          );
        }),
        (ra.prototype.ca = ra.prototype.agent),
        (ra.prototype.buffer = ra.prototype.ca),
        (ra.prototype.write = function () {
          throw new Error(
            'Streaming is not supported in browser version of superagent'
          );
        }),
        (ra.prototype.pipe = ra.prototype.write),
        (ra.prototype._isHost = function (e) {
          return (
            e &&
            'object' === Iq(e) &&
            !Array.isArray(e) &&
            '[object Object]' !== Object.prototype.toString.call(e)
          );
        }),
        (ra.prototype.end = function (e) {
          this._endCalled &&
            console.warn(
              'Warning: .end() was called twice. This is not supported in superagent'
            ),
            (this._endCalled = !0),
            (this._callback = e || mD),
            this._finalizeQueryString(),
            this._end();
        }),
        (ra.prototype._setUploadTimeout = function () {
          var e = this;
          this._uploadTimeout &&
            !this._uploadTimeoutTimer &&
            (this._uploadTimeoutTimer = setTimeout(function () {
              e._timeoutError(
                'Upload timeout of ',
                e._uploadTimeout,
                'ETIMEDOUT'
              );
            }, this._uploadTimeout));
        }),
        (ra.prototype._end = function () {
          if (this._aborted)
            return this.callback(
              new Error(
                'The request has been aborted even before .end() was called'
              )
            );
          var e = this;
          this.xhr = ja.getXHR();
          var t = this.xhr,
            r = this._formData || this._data;
          this._setTimeouts(),
            (t.onreadystatechange = function () {
              var r = t.readyState;
              if (
                (r >= 2 &&
                  e._responseTimeoutTimer &&
                  clearTimeout(e._responseTimeoutTimer),
                4 === r)
              ) {
                var n;
                try {
                  n = t.status;
                } catch (s) {
                  n = 0;
                }
                if (!n) {
                  if (e.timedout || e._aborted) return;
                  return e.crossDomainError();
                }
                e.emit('end');
              }
            });
          var n = function (t, r) {
            r.total > 0 &&
              ((r.percent = (r.loaded / r.total) * 100),
              100 === r.percent && clearTimeout(e._uploadTimeoutTimer)),
              (r.direction = t),
              e.emit('progress', r);
          };
          if (this.hasListeners('progress'))
            try {
              t.addEventListener('progress', n.bind(null, 'download')),
                t.upload &&
                  t.upload.addEventListener('progress', n.bind(null, 'upload'));
            } catch (i) {}
          t.upload && this._setUploadTimeout();
          try {
            this.username && this.password
              ? t.open(this.method, this.url, !0, this.username, this.password)
              : t.open(this.method, this.url, !0);
          } catch ($) {
            return this.callback($);
          }
          if (
            (this._withCredentials && (t.withCredentials = !0),
            !this._formData &&
              'GET' !== this.method &&
              'HEAD' !== this.method &&
              'string' != typeof r &&
              !this._isHost(r))
          ) {
            var s = this._header['content-type'],
              o = this._serializer || ja.serialize[s ? s.split(';')[0] : ''];
            !o && Kq(s) && (o = ja.serialize['application/json']),
              o && (r = o(r));
          }
          for (var a in this.header)
            null !== this.header[a] &&
              Object.prototype.hasOwnProperty.call(this.header, a) &&
              t.setRequestHeader(a, this.header[a]);
          this._responseType && (t.responseType = this._responseType),
            this.emit('request', this),
            t.send(void 0 === r ? null : r);
        }),
        (ja.agent = function () {
          return new ag();
        }),
        ['GET', 'POST', 'OPTIONS', 'PATCH', 'PUT', 'DELETE'].forEach(function (
          e
        ) {
          ag.prototype[e.toLowerCase()] = function (t, r) {
            var n = new ja.Request(e, t);
            return this._setDefaults(n), r && n.end(r), n;
          };
        }),
        (ag.prototype.del = ag.prototype.delete),
        (ja.get = function (e, t, r) {
          var n = ja('GET', e);
          return (
            'function' == typeof t && ((r = t), (t = null)),
            t && n.query(t),
            r && n.end(r),
            n
          );
        }),
        (ja.head = function (e, t, r) {
          var n = ja('HEAD', e);
          return (
            'function' == typeof t && ((r = t), (t = null)),
            t && n.query(t),
            r && n.end(r),
            n
          );
        }),
        (ja.options = function (e, t, r) {
          var n = ja('OPTIONS', e);
          return (
            'function' == typeof t && ((r = t), (t = null)),
            t && n.send(t),
            r && n.end(r),
            n
          );
        }),
        (ja.del = Lq),
        (ja.delete = Lq),
        (ja.patch = function (e, t, r) {
          var n = ja('PATCH', e);
          return (
            'function' == typeof t && ((r = t), (t = null)),
            t && n.send(t),
            r && n.end(r),
            n
          );
        }),
        (ja.post = function (e, t, r) {
          var n = ja('POST', e);
          return (
            'function' == typeof t && ((r = t), (t = null)),
            t && n.send(t),
            r && n.end(r),
            n
          );
        }),
        (ja.put = function (e, t, r) {
          var n = ja('PUT', e);
          return (
            'function' == typeof t && ((r = t), (t = null)),
            t && n.send(t),
            r && n.end(r),
            n
          );
        });
      //   var Mq = 'https://inhotel-chat.eastus.cloudapp.azure.com';

      var Nq =
          (cd && cd.__awaiter) ||
          function (t, e, n, r) {
            return new (n || (n = Promise))(function (i, a) {
              function o(t) {
                try {
                  $(r.next(t));
                } catch (e) {
                  a(e);
                }
              }
              function u(t) {
                try {
                  $(r.throw(t));
                } catch (e) {
                  a(e);
                }
              }
              function $(t) {
                var e;
                t.done
                  ? i(t.value)
                  : ((e = t.value),
                    e instanceof n
                      ? e
                      : new n(function (t) {
                          t(e);
                        })).then(o, u);
              }
              $((r = r.apply(t, e || [])).next());
            });
          },
        Oq =
          (cd && cd.__generator) ||
          function (t, e) {
            var n,
              r,
              i,
              a,
              o = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (a = {next: u(0), throw: u(1), return: u(2)}),
              'function' == typeof Symbol &&
                (a[Symbol.iterator] = function () {
                  return this;
                }),
              a
            );
            function u(a) {
              return function (u) {
                return (function (a) {
                  if (n) throw new TypeError('Generator is already executing.');
                  for (; o; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (i =
                            2 & a[0]
                              ? r.return
                              : a[0]
                              ? r.throw || ((i = r.return) && i.call(r), 0)
                              : r.next) &&
                          !(i = i.call(r, a[1])).done)
                      )
                        return i;
                      switch (((r = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                        case 0:
                        case 1:
                          i = a;
                          break;
                        case 4:
                          return o.label++, {value: a[1], done: !1};
                        case 5:
                          o.label++, (r = a[1]), (a = [0]);
                          continue;
                        case 7:
                          (a = o.ops.pop()), o.trys.pop();
                          continue;
                        default:
                          if (
                            !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                            (6 === a[0] || 2 === a[0])
                          ) {
                            o = 0;
                            continue;
                          }
                          if (
                            3 === a[0] &&
                            (!i || (a[1] > i[0] && a[1] < i[3]))
                          ) {
                            o.label = a[1];
                            break;
                          }
                          if (6 === a[0] && o.label < i[1]) {
                            (o.label = i[1]), (i = a);
                            break;
                          }
                          if (i && o.label < i[2]) {
                            (o.label = i[2]), o.ops.push(a);
                            break;
                          }
                          i[2] && o.ops.pop(), o.trys.pop();
                          continue;
                      }
                      a = e.call(t, o);
                    } catch (u) {
                      (a = [6, u]), (r = 0);
                    } finally {
                      n = i = 0;
                    }
                  if (5 & a[0]) throw a[1];
                  return {value: a[0] ? a[1] : void 0, done: !0};
                })([a, u]);
              };
            }
          },
        Pq = function (t, e) {
          return (
            void 0 === e && (e = Mq),
            Nq(void 0, void 0, Promise, function () {
              return Oq(this, function (n) {
                var $jn4M$$interop$default = za(Jj);
                return [
                  2,
                  $jn4M$$interop$default.d
                    .get(Mq + '/api/v1/core/get_widget_settings')
                    .query(t)
                    .then(function (t) {
                      return t.body.data;
                    }),
                ];
              });
            })
          );
        };
      cd.fetchWidgetSettings = Pq;
      var Qq = function (t, e) {
        return (
          void 0 === e && (e = Mq),
          Nq(void 0, void 0, Promise, function () {
            return Oq(this, function (n) {
              var $jn4M$$interop$default = za(Jj);
              return [
                2,
                $jn4M$$interop$default.d
                  .put(e + '/api/widget_settings/metadata')
                  .send(t)
                  .then(function (t) {
                    return t.body.data;
                  }),
              ];
            });
          })
        );
      };
      cd.updateWidgetSettingsMetadata = Qq;
      function ed() {}
      function pD(n) {
        if (!n || 'string' != typeof n || !n.length) return !1;
        return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
          n
        );
      }
      var cg = {};
      var Mj,
        Rq = {};
      !(function (t) {
        var r = /^\s+/,
          e = /\s+$/,
          n = 0,
          a = t.round,
          i = t.min,
          s = t.max,
          o = t.random;
        function f(o, h) {
          if (((h = h || {}), (o = o || '') instanceof f)) return o;
          if (!(this instanceof f)) return new f(o, h);
          var l = (function (n) {
            var a = {r: 0, g: 0, b: 0},
              o = 1,
              f = null,
              h = null,
              l = null,
              u = !1,
              c = !1;
            'string' == typeof n &&
              (n = (function (t) {
                t = t.replace(r, '').replace(e, '').toLowerCase();
                var n,
                  a = !1;
                if (H[t]) (t = H[t]), (a = !0);
                else if ('transparent' == t)
                  return {r: 0, g: 0, b: 0, a: 0, format: 'name'};
                if ((n = T.rgb.exec(t))) return {r: n[1], g: n[2], b: n[3]};
                if ((n = T.rgba.exec(t)))
                  return {r: n[1], g: n[2], b: n[3], a: n[4]};
                if ((n = T.hsl.exec(t))) return {h: n[1], s: n[2], l: n[3]};
                if ((n = T.hsla.exec(t)))
                  return {h: n[1], s: n[2], l: n[3], a: n[4]};
                if ((n = T.hsv.exec(t))) return {h: n[1], s: n[2], v: n[3]};
                if ((n = T.hsva.exec(t)))
                  return {h: n[1], s: n[2], v: n[3], a: n[4]};
                if ((n = T.hex8.exec(t)))
                  return {
                    r: q(n[1]),
                    g: q(n[2]),
                    b: q(n[3]),
                    a: N(n[4]),
                    format: a ? 'name' : 'hex8',
                  };
                if ((n = T.hex6.exec(t)))
                  return {
                    r: q(n[1]),
                    g: q(n[2]),
                    b: q(n[3]),
                    format: a ? 'name' : 'hex',
                  };
                if ((n = T.hex4.exec(t)))
                  return {
                    r: q(n[1] + '' + n[1]),
                    g: q(n[2] + '' + n[2]),
                    b: q(n[3] + '' + n[3]),
                    a: N(n[4] + '' + n[4]),
                    format: a ? 'name' : 'hex8',
                  };
                if ((n = T.hex3.exec(t)))
                  return {
                    r: q(n[1] + '' + n[1]),
                    g: q(n[2] + '' + n[2]),
                    b: q(n[3] + '' + n[3]),
                    format: a ? 'name' : 'hex',
                  };
                return !1;
              })(n));
            'object' == typeof n &&
              (j(n.r) && j(n.g) && j(n.b)
                ? ((g = n.r),
                  (b = n.g),
                  (d = n.b),
                  (a = {
                    r: 255 * $(g, 255),
                    g: 255 * $(b, 255),
                    b: 255 * $(d, 255),
                  }),
                  (u = !0),
                  (c = '%' === String(n.r).substr(-1) ? 'prgb' : 'rgb'))
                : j(n.h) && j(n.s) && j(n.v)
                ? ((f = I(n.s)),
                  (h = I(n.v)),
                  (a = (function (r, e, n) {
                    (r = 6 * $(r, 360)), (e = $(e, 100)), (n = $(n, 100));
                    var a = t.floor(r),
                      i = r - a,
                      s = n * (1 - e),
                      o = n * (1 - i * e),
                      f = n * (1 - (1 - i) * e),
                      h = a % 6;
                    return {
                      r: 255 * [n, o, s, s, f, n][h],
                      g: 255 * [f, n, n, o, s, s][h],
                      b: 255 * [s, s, f, n, n, o][h],
                    };
                  })(n.h, f, h)),
                  (u = !0),
                  (c = 'hsv'))
                : j(n.h) &&
                  j(n.s) &&
                  j(n.l) &&
                  ((f = I(n.s)),
                  (l = I(n.l)),
                  (a = (function (t, r, e) {
                    var n, a, i;
                    function s(t, r, e) {
                      return (
                        e < 0 && (e += 1),
                        e > 1 && (e -= 1),
                        e < 1 / 6
                          ? t + 6 * (r - t) * e
                          : e < 0.5
                          ? r
                          : e < 2 / 3
                          ? t + (r - t) * (2 / 3 - e) * 6
                          : t
                      );
                    }
                    if (
                      ((t = $(t, 360)),
                      (r = $(r, 100)),
                      (e = $(e, 100)),
                      0 === r)
                    )
                      n = a = i = e;
                    else {
                      var o = e < 0.5 ? e * (1 + r) : e + r - e * r,
                        f = 2 * e - o;
                      (n = s(f, o, t + 1 / 3)),
                        (a = s(f, o, t)),
                        (i = s(f, o, t - 1 / 3));
                    }
                    return {r: 255 * n, g: 255 * a, b: 255 * i};
                  })(n.h, f, l)),
                  (u = !0),
                  (c = 'hsl')),
              n.hasOwnProperty('a') && (o = n.a));
            var g, b, d;
            return (
              (o = F(o)),
              {
                ok: u,
                format: n.format || c,
                r: i(255, s(a.r, 0)),
                g: i(255, s(a.g, 0)),
                b: i(255, s(a.b, 0)),
                a: o,
              }
            );
          })(o);
          (this._originalInput = o),
            (this._r = l.r),
            (this._g = l.g),
            (this._b = l.b),
            (this._a = l.a),
            (this._roundA = a(100 * this._a) / 100),
            (this._format = h.format || l.format),
            (this._gradientType = h.gradientType),
            this._r < 1 && (this._r = a(this._r)),
            this._g < 1 && (this._g = a(this._g)),
            this._b < 1 && (this._b = a(this._b)),
            (this._ok = l.ok),
            (this._tc_id = n++);
        }
        function h(t, r, e) {
          (t = $(t, 255)), (r = $(r, 255)), (e = $(e, 255));
          var n,
            a,
            o = s(t, r, e),
            f = i(t, r, e),
            h = (o + f) / 2;
          if (o == f) n = a = 0;
          else {
            var l = o - f;
            switch (((a = h > 0.5 ? l / (2 - o - f) : l / (o + f)), o)) {
              case t:
                n = (r - e) / l + (r < e ? 6 : 0);
                break;
              case r:
                n = (e - t) / l + 2;
                break;
              case e:
                n = (t - r) / l + 4;
            }
            n /= 6;
          }
          return {h: n, s: a, l: h};
        }
        function l(t, r, e) {
          (t = $(t, 255)), (r = $(r, 255)), (e = $(e, 255));
          var n,
            a,
            o = s(t, r, e),
            f = i(t, r, e),
            h = o,
            l = o - f;
          if (((a = 0 === o ? 0 : l / o), o == f)) n = 0;
          else {
            switch (o) {
              case t:
                n = (r - e) / l + (r < e ? 6 : 0);
                break;
              case r:
                n = (e - t) / l + 2;
                break;
              case e:
                n = (t - r) / l + 4;
            }
            n /= 6;
          }
          return {h: n, s: a, v: h};
        }
        function u(t, r, e, n) {
          var i = [
            M(a(t).toString(16)),
            M(a(r).toString(16)),
            M(a(e).toString(16)),
          ];
          return n &&
            i[0].charAt(0) == i[0].charAt(1) &&
            i[1].charAt(0) == i[1].charAt(1) &&
            i[2].charAt(0) == i[2].charAt(1)
            ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
            : i.join('');
        }
        function c(t, r, e, n) {
          return [
            M(L(n)),
            M(a(t).toString(16)),
            M(a(r).toString(16)),
            M(a(e).toString(16)),
          ].join('');
        }
        function g(t, r) {
          r = 0 === r ? 0 : r || 10;
          var e = f(t).toHsl();
          return (e.s -= r / 100), (e.s = C(e.s)), f(e);
        }
        function b(t, r) {
          r = 0 === r ? 0 : r || 10;
          var e = f(t).toHsl();
          return (e.s += r / 100), (e.s = C(e.s)), f(e);
        }
        function d(t) {
          return f(t).desaturate(100);
        }
        function _(t, r) {
          r = 0 === r ? 0 : r || 10;
          var e = f(t).toHsl();
          return (e.l += r / 100), (e.l = C(e.l)), f(e);
        }
        function p(t, r) {
          r = 0 === r ? 0 : r || 10;
          var e = f(t).toRgb();
          return (
            (e.r = s(0, i(255, e.r - a((-r / 100) * 255)))),
            (e.g = s(0, i(255, e.g - a((-r / 100) * 255)))),
            (e.b = s(0, i(255, e.b - a((-r / 100) * 255)))),
            f(e)
          );
        }
        function m(t, r) {
          r = 0 === r ? 0 : r || 10;
          var e = f(t).toHsl();
          return (e.l -= r / 100), (e.l = C(e.l)), f(e);
        }
        function v(t, r) {
          var e = f(t).toHsl(),
            n = (e.h + r) % 360;
          return (e.h = n < 0 ? 360 + n : n), f(e);
        }
        function y(t) {
          var r = f(t).toHsl();
          return (r.h = (r.h + 180) % 360), f(r);
        }
        function A(t) {
          var r = f(t).toHsl(),
            e = r.h;
          return [
            f(t),
            f({h: (e + 120) % 360, s: r.s, l: r.l}),
            f({h: (e + 240) % 360, s: r.s, l: r.l}),
          ];
        }
        function x(t) {
          var r = f(t).toHsl(),
            e = r.h;
          return [
            f(t),
            f({h: (e + 90) % 360, s: r.s, l: r.l}),
            f({h: (e + 180) % 360, s: r.s, l: r.l}),
            f({h: (e + 270) % 360, s: r.s, l: r.l}),
          ];
        }
        function k(t) {
          var r = f(t).toHsl(),
            e = r.h;
          return [
            f(t),
            f({h: (e + 72) % 360, s: r.s, l: r.l}),
            f({h: (e + 216) % 360, s: r.s, l: r.l}),
          ];
        }
        function w(t, r, e) {
          (r = r || 6), (e = e || 30);
          var n = f(t).toHsl(),
            a = 360 / e,
            i = [f(t)];
          for (n.h = (n.h - ((a * r) >> 1) + 720) % 360; --r; )
            (n.h = (n.h + a) % 360), i.push(f(n));
          return i;
        }
        function S(t, r) {
          r = r || 6;
          for (
            var e = f(t).toHsv(), n = e.h, a = e.s, i = e.v, s = [], o = 1 / r;
            r--;

          )
            s.push(f({h: n, s: a, v: i})), (i = (i + o) % 1);
          return s;
        }
        (f.prototype = {
          isDark: function () {
            return this.getBrightness() < 128;
          },
          isLight: function () {
            return !this.isDark();
          },
          isValid: function () {
            return this._ok;
          },
          getOriginalInput: function () {
            return this._originalInput;
          },
          getFormat: function () {
            return this._format;
          },
          getAlpha: function () {
            return this._a;
          },
          getBrightness: function () {
            var t = this.toRgb();
            return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3;
          },
          getLuminance: function () {
            var r,
              e,
              n,
              a = this.toRgb();
            return (
              (r = a.r / 255),
              (e = a.g / 255),
              (n = a.b / 255),
              0.2126 *
                (r <= 0.03928 ? r / 12.92 : t.pow((r + 0.055) / 1.055, 2.4)) +
                0.7152 *
                  (e <= 0.03928 ? e / 12.92 : t.pow((e + 0.055) / 1.055, 2.4)) +
                0.0722 *
                  (n <= 0.03928 ? n / 12.92 : t.pow((n + 0.055) / 1.055, 2.4))
            );
          },
          setAlpha: function (t) {
            return (
              (this._a = F(t)), (this._roundA = a(100 * this._a) / 100), this
            );
          },
          toHsv: function () {
            var t = l(this._r, this._g, this._b);
            return {h: 360 * t.h, s: t.s, v: t.v, a: this._a};
          },
          toHsvString: function () {
            var t = l(this._r, this._g, this._b),
              r = a(360 * t.h),
              e = a(100 * t.s),
              n = a(100 * t.v);
            return 1 == this._a
              ? 'hsv(' + r + ', ' + e + '%, ' + n + '%)'
              : 'hsva(' + r + ', ' + e + '%, ' + n + '%, ' + this._roundA + ')';
          },
          toHsl: function () {
            var t = h(this._r, this._g, this._b);
            return {h: 360 * t.h, s: t.s, l: t.l, a: this._a};
          },
          toHslString: function () {
            var t = h(this._r, this._g, this._b),
              r = a(360 * t.h),
              e = a(100 * t.s),
              n = a(100 * t.l);
            return 1 == this._a
              ? 'hsl(' + r + ', ' + e + '%, ' + n + '%)'
              : 'hsla(' + r + ', ' + e + '%, ' + n + '%, ' + this._roundA + ')';
          },
          toHex: function (t) {
            return u(this._r, this._g, this._b, t);
          },
          toHexString: function (t) {
            return '#' + this.toHex(t);
          },
          toHex8: function (t) {
            return (function (t, r, e, n, i) {
              var s = [
                M(a(t).toString(16)),
                M(a(r).toString(16)),
                M(a(e).toString(16)),
                M(L(n)),
              ];
              if (
                i &&
                s[0].charAt(0) == s[0].charAt(1) &&
                s[1].charAt(0) == s[1].charAt(1) &&
                s[2].charAt(0) == s[2].charAt(1) &&
                s[3].charAt(0) == s[3].charAt(1)
              )
                return (
                  s[0].charAt(0) +
                  s[1].charAt(0) +
                  s[2].charAt(0) +
                  s[3].charAt(0)
                );
              return s.join('');
            })(this._r, this._g, this._b, this._a, t);
          },
          toHex8String: function (t) {
            return '#' + this.toHex8(t);
          },
          toRgb: function () {
            return {r: a(this._r), g: a(this._g), b: a(this._b), a: this._a};
          },
          toRgbString: function () {
            return 1 == this._a
              ? 'rgb(' +
                  a(this._r) +
                  ', ' +
                  a(this._g) +
                  ', ' +
                  a(this._b) +
                  ')'
              : 'rgba(' +
                  a(this._r) +
                  ', ' +
                  a(this._g) +
                  ', ' +
                  a(this._b) +
                  ', ' +
                  this._roundA +
                  ')';
          },
          toPercentageRgb: function () {
            return {
              r: a(100 * $(this._r, 255)) + '%',
              g: a(100 * $(this._g, 255)) + '%',
              b: a(100 * $(this._b, 255)) + '%',
              a: this._a,
            };
          },
          toPercentageRgbString: function () {
            return 1 == this._a
              ? 'rgb(' +
                  a(100 * $(this._r, 255)) +
                  '%, ' +
                  a(100 * $(this._g, 255)) +
                  '%, ' +
                  a(100 * $(this._b, 255)) +
                  '%)'
              : 'rgba(' +
                  a(100 * $(this._r, 255)) +
                  '%, ' +
                  a(100 * $(this._g, 255)) +
                  '%, ' +
                  a(100 * $(this._b, 255)) +
                  '%, ' +
                  this._roundA +
                  ')';
          },
          toName: function () {
            return 0 === this._a
              ? 'transparent'
              : !(this._a < 1) && (R[u(this._r, this._g, this._b, !0)] || !1);
          },
          toFilter: function (t) {
            var r = '#' + c(this._r, this._g, this._b, this._a),
              e = r,
              n = this._gradientType ? 'GradientType = 1, ' : '';
            if (t) {
              var a = f(t);
              e = '#' + c(a._r, a._g, a._b, a._a);
            }
            return (
              'progid:DXImageTransform.Microsoft.gradient(' +
              n +
              'startColorstr=' +
              r +
              ',endColorstr=' +
              e +
              ')'
            );
          },
          toString: function (t) {
            var r = !!t;
            t = t || this._format;
            var e = !1,
              n = this._a < 1 && this._a >= 0;
            return r ||
              !n ||
              ('hex' !== t &&
                'hex6' !== t &&
                'hex3' !== t &&
                'hex4' !== t &&
                'hex8' !== t &&
                'name' !== t)
              ? ('rgb' === t && (e = this.toRgbString()),
                'prgb' === t && (e = this.toPercentageRgbString()),
                ('hex' !== t && 'hex6' !== t) || (e = this.toHexString()),
                'hex3' === t && (e = this.toHexString(!0)),
                'hex4' === t && (e = this.toHex8String(!0)),
                'hex8' === t && (e = this.toHex8String()),
                'name' === t && (e = this.toName()),
                'hsl' === t && (e = this.toHslString()),
                'hsv' === t && (e = this.toHsvString()),
                e || this.toHexString())
              : 'name' === t && 0 === this._a
              ? this.toName()
              : this.toRgbString();
          },
          clone: function () {
            return f(this.toString());
          },
          _applyModification: function (t, r) {
            var e = t.apply(null, [this].concat([].slice.call(r)));
            return (
              (this._r = e._r),
              (this._g = e._g),
              (this._b = e._b),
              this.setAlpha(e._a),
              this
            );
          },
          lighten: function () {
            return this._applyModification(_, arguments);
          },
          brighten: function () {
            return this._applyModification(p, arguments);
          },
          darken: function () {
            return this._applyModification(m, arguments);
          },
          desaturate: function () {
            return this._applyModification(g, arguments);
          },
          saturate: function () {
            return this._applyModification(b, arguments);
          },
          greyscale: function () {
            return this._applyModification(d, arguments);
          },
          spin: function () {
            return this._applyModification(v, arguments);
          },
          _applyCombination: function (t, r) {
            return t.apply(null, [this].concat([].slice.call(r)));
          },
          analogous: function () {
            return this._applyCombination(w, arguments);
          },
          complement: function () {
            return this._applyCombination(y, arguments);
          },
          monochromatic: function () {
            return this._applyCombination(S, arguments);
          },
          splitcomplement: function () {
            return this._applyCombination(k, arguments);
          },
          triad: function () {
            return this._applyCombination(A, arguments);
          },
          tetrad: function () {
            return this._applyCombination(x, arguments);
          },
        }),
          (f.fromRatio = function (t, r) {
            if ('object' == typeof t) {
              var e = {};
              for (var n in t)
                t.hasOwnProperty(n) && (e[n] = 'a' === n ? t[n] : I(t[n]));
              t = e;
            }
            return f(t, r);
          }),
          (f.equals = function (t, r) {
            return !(!t || !r) && f(t).toRgbString() == f(r).toRgbString();
          }),
          (f.random = function () {
            return f.fromRatio({r: o(), g: o(), b: o()});
          }),
          (f.mix = function (t, r, e) {
            e = 0 === e ? 0 : e || 50;
            var n = f(t).toRgb(),
              a = f(r).toRgb(),
              i = e / 100;
            return f({
              r: (a.r - n.r) * i + n.r,
              g: (a.g - n.g) * i + n.g,
              b: (a.b - n.b) * i + n.b,
              a: (a.a - n.a) * i + n.a,
            });
          }),
          (f.readability = function (r, e) {
            var n = f(r),
              a = f(e);
            return (
              (t.max(n.getLuminance(), a.getLuminance()) + 0.05) /
              (t.min(n.getLuminance(), a.getLuminance()) + 0.05)
            );
          }),
          (f.isReadable = function (t, r, e) {
            var n,
              a,
              i = f.readability(t, r);
            switch (
              ((a = !1),
              (n = (function (t) {
                var r, e;
                (r = (
                  (t = t || {level: 'AA', size: 'small'}).level || 'AA'
                ).toUpperCase()),
                  (e = (t.size || 'small').toLowerCase()),
                  'AA' !== r && 'AAA' !== r && (r = 'AA');
                'small' !== e && 'large' !== e && (e = 'small');
                return {level: r, size: e};
              })(e)).level + n.size)
            ) {
              case 'AAsmall':
              case 'AAAlarge':
                a = i >= 4.5;
                break;
              case 'AAlarge':
                a = i >= 3;
                break;
              case 'AAAsmall':
                a = i >= 7;
            }
            return a;
          }),
          (f.mostReadable = function (t, r, e) {
            var n,
              a,
              i,
              s,
              o = null,
              h = 0;
            (a = (e = e || {}).includeFallbackColors),
              (i = e.level),
              (s = e.size);
            for (var l = 0; l < r.length; l++)
              (n = f.readability(t, r[l])) > h && ((h = n), (o = f(r[l])));
            return f.isReadable(t, o, {level: i, size: s}) || !a
              ? o
              : ((e.includeFallbackColors = !1),
                f.mostReadable(t, ['#fff', '#000'], e));
          });
        var H = (f.names = {
            aliceblue: 'f0f8ff',
            antiquewhite: 'faebd7',
            aqua: '0ff',
            aquamarine: '7fffd4',
            azure: 'f0ffff',
            beige: 'f5f5dc',
            bisque: 'ffe4c4',
            black: '000',
            blanchedalmond: 'ffebcd',
            blue: '00f',
            blueviolet: '8a2be2',
            brown: 'a52a2a',
            burlywood: 'deb887',
            burntsienna: 'ea7e5d',
            cadetblue: '5f9ea0',
            chartreuse: '7fff00',
            chocolate: 'd2691e',
            coral: 'ff7f50',
            cornflowerblue: '6495ed',
            cornsilk: 'fff8dc',
            crimson: 'dc143c',
            cyan: '0ff',
            darkblue: '00008b',
            darkcyan: '008b8b',
            darkgoldenrod: 'b8860b',
            darkgray: 'a9a9a9',
            darkgreen: '006400',
            darkgrey: 'a9a9a9',
            darkkhaki: 'bdb76b',
            darkmagenta: '8b008b',
            darkolivegreen: '556b2f',
            darkorange: 'ff8c00',
            darkorchid: '9932cc',
            darkred: '8b0000',
            darksalmon: 'e9967a',
            darkseagreen: '8fbc8f',
            darkslateblue: '483d8b',
            darkslategray: '2f4f4f',
            darkslategrey: '2f4f4f',
            darkturquoise: '00ced1',
            darkviolet: '9400d3',
            deeppink: 'ff1493',
            deepskyblue: '00bfff',
            dimgray: '696969',
            dimgrey: '696969',
            dodgerblue: '1e90ff',
            firebrick: 'b22222',
            floralwhite: 'fffaf0',
            forestgreen: '228b22',
            fuchsia: 'f0f',
            gainsboro: 'dcdcdc',
            ghostwhite: 'f8f8ff',
            gold: 'ffd700',
            goldenrod: 'daa520',
            gray: '808080',
            green: '008000',
            greenyellow: 'adff2f',
            grey: '808080',
            honeydew: 'f0fff0',
            hotpink: 'ff69b4',
            indianred: 'cd5c5c',
            indigo: '4b0082',
            ivory: 'fffff0',
            khaki: 'f0e68c',
            lavender: 'e6e6fa',
            lavenderblush: 'fff0f5',
            lawngreen: '7cfc00',
            lemonchiffon: 'fffacd',
            lightblue: 'add8e6',
            lightcoral: 'f08080',
            lightcyan: 'e0ffff',
            lightgoldenrodyellow: 'fafad2',
            lightgray: 'd3d3d3',
            lightgreen: '90ee90',
            lightgrey: 'd3d3d3',
            lightpink: 'ffb6c1',
            lightsalmon: 'ffa07a',
            lightseagreen: '20b2aa',
            lightskyblue: '87cefa',
            lightslategray: '789',
            lightslategrey: '789',
            lightsteelblue: 'b0c4de',
            lightyellow: 'ffffe0',
            lime: '0f0',
            limegreen: '32cd32',
            linen: 'faf0e6',
            magenta: 'f0f',
            maroon: '800000',
            mediumaquamarine: '66cdaa',
            mediumblue: '0000cd',
            mediumorchid: 'ba55d3',
            mediumpurple: '9370db',
            mediumseagreen: '3cb371',
            mediumslateblue: '7b68ee',
            mediumspringgreen: '00fa9a',
            mediumturquoise: '48d1cc',
            mediumvioletred: 'c71585',
            midnightblue: '191970',
            mintcream: 'f5fffa',
            mistyrose: 'ffe4e1',
            moccasin: 'ffe4b5',
            navajowhite: 'ffdead',
            navy: '000080',
            oldlace: 'fdf5e6',
            olive: '808000',
            olivedrab: '6b8e23',
            orange: 'ffa500',
            orangered: 'ff4500',
            orchid: 'da70d6',
            palegoldenrod: 'eee8aa',
            palegreen: '98fb98',
            paleturquoise: 'afeeee',
            palevioletred: 'db7093',
            papayawhip: 'ffefd5',
            peachpuff: 'ffdab9',
            peru: 'cd853f',
            pink: 'ffc0cb',
            plum: 'dda0dd',
            powderblue: 'b0e0e6',
            purple: '800080',
            rebeccapurple: '663399',
            red: 'f00',
            rosybrown: 'bc8f8f',
            royalblue: '4169e1',
            saddlebrown: '8b4513',
            salmon: 'fa8072',
            sandybrown: 'f4a460',
            seagreen: '2e8b57',
            seashell: 'fff5ee',
            sienna: 'a0522d',
            silver: 'c0c0c0',
            skyblue: '87ceeb',
            slateblue: '6a5acd',
            slategray: '708090',
            slategrey: '708090',
            snow: 'fffafa',
            springgreen: '00ff7f',
            steelblue: '4682b4',
            tan: 'd2b48c',
            teal: '008080',
            thistle: 'd8bfd8',
            tomato: 'ff6347',
            turquoise: '40e0d0',
            violet: 'ee82ee',
            wheat: 'f5deb3',
            white: 'fff',
            whitesmoke: 'f5f5f5',
            yellow: 'ff0',
            yellowgreen: '9acd32',
          }),
          R = (f.hexNames = (function (t) {
            var r = {};
            for (var e in t) t.hasOwnProperty(e) && (r[t[e]] = e);
            return r;
          })(H));
        function F(t) {
          return (
            (t = parseFloat(t)), (isNaN(t) || t < 0 || t > 1) && (t = 1), t
          );
        }
        function $(r, e) {
          (function (t) {
            return (
              'string' == typeof t &&
              -1 != t.indexOf('.') &&
              1 === parseFloat(t)
            );
          })(r) && (r = '100%');
          var n = (function (t) {
            return 'string' == typeof t && -1 != t.indexOf('%');
          })(r);
          return (
            (r = i(e, s(0, parseFloat(r)))),
            n && (r = parseInt(r * e, 10) / 100),
            t.abs(r - e) < 1e-6 ? 1 : (r % e) / parseFloat(e)
          );
        }
        function C(t) {
          return i(1, s(0, t));
        }
        function q(t) {
          return parseInt(t, 16);
        }
        function M(t) {
          return 1 == t.length ? '0' + t : '' + t;
        }
        function I(t) {
          return t <= 1 && (t = 100 * t + '%'), t;
        }
        function L(r) {
          return t.round(255 * parseFloat(r)).toString(16);
        }
        function N(t) {
          return q(t) / 255;
        }
        var X,
          z,
          E,
          T =
            ((z =
              '[\\s|\\(]+(' +
              (X = '(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)') +
              ')[,|\\s]+(' +
              X +
              ')[,|\\s]+(' +
              X +
              ')\\s*\\)?'),
            (E =
              '[\\s|\\(]+(' +
              X +
              ')[,|\\s]+(' +
              X +
              ')[,|\\s]+(' +
              X +
              ')[,|\\s]+(' +
              X +
              ')\\s*\\)?'),
            {
              CSS_UNIT: new RegExp(X),
              rgb: new RegExp('rgb' + z),
              rgba: new RegExp('rgba' + E),
              hsl: new RegExp('hsl' + z),
              hsla: new RegExp('hsla' + E),
              hsv: new RegExp('hsv' + z),
              hsva: new RegExp('hsva' + E),
              hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
              hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
              hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
              hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            });
        function j(t) {
          return !!T.CSS_UNIT.exec(t);
        }
        Rq
          ? (Rq = f)
          : 'function' == typeof Mj && Mj.amd
          ? Mj(function () {
              return f;
            })
          : (window.tinycolor = f);
      })(Math);
      var qD =
          (cg && cg.__assign) ||
          function () {
            return (qD =
              Object.assign ||
              function (e) {
                for (var o, t = 1, n = arguments.length; t < n; t++)
                  for (var i in (o = arguments[t]))
                    Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
                return e;
              }).apply(this, arguments);
          },
        rD = {
          ChatWindowContainer: {
            margin: 0,
            height: '100%',
            width: '100%',
            minHeight: 320,
          },
          WidgetContainer: {
            margin: 0,
            zIndex: 2147483e3,
            position: 'fixed',
            bottom: 100,
            left: 20,
            width: 376,
            maxWidth: ['90%', '376px'],
            minHeight: 250,
            maxHeight: ['60%', '704px'],
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 5px 40px',
            height: 'calc(100% - 120px)',
            borderRadius: 8,
            overflow: 'hidden',
            notifications: {
              background: 'transparent',
              margin: 0,
              zIndex: 2147483e3,
              position: 'fixed',
              bottom: 80,
              right: 20,
              width: 'auto',
              maxWidth: ['90%', '300px'],
              minHeight: 0,
              maxHeight: ['60%', '400px'],
              boxShadow: 'none',
              height: 200,
              overflow: 'hidden',
            },
          },
          WidgetToggleContainer: {
            position: 'fixed',
            zIndex: 2147483003,
            bottom: '20px',
            left: '20px',
          },
          WidgetToggle: {
            outline: 'none !important',
            border: 'none !important',
            userSelect: 'none !important',
            cursor: 'pointer',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        },
        Nj = function (e) {
          var $ilXr$$interop$default = za(Rq);
          var o = e.primary,
            t = $ilXr$$interop$default.d(void 0 === o ? '#1890ff' : o),
            n = {
              primary: t.toString(),
              light: t.lighten().toString(),
              dark: t.darken().toString(),
            };
          return {
            useBodyStyles: !1,
            space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
            fonts: {
              body: '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;',
              heading:
                '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;',
              monospace: '"Roboto Mono", monospace',
            },
            fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
            fontWeights: {body: 400, heading: 600, bold: 600},
            lineHeights: {body: 1.5, heading: 1.125},
            colors: {
              text: '#141414',
              background: '#fff',
              primary: n.primary,
              secondary: '#722ed1',
              muted: '#f0f0f0',
              gray: 'rgba(0, 0, 0, 0.45)',
              input: 'rgba(0, 0, 0, 0.65)',
              offset: 'rgba(255, 255, 255, 0.8)',
            },
            text: {
              default: {color: 'text', fontSize: 1},
              caps: {textTransform: 'uppercase', letterSpacing: '0.2em'},
              heading: {
                fontFamily: 'heading',
                fontWeight: 'heading',
                lineHeight: 'heading',
              },
            },
            buttons: {
              primary: {
                cursor: 'pointer',
                outline: 0,
                boxShadow: 'rgba(0, 0, 0, 0.08) 0 2px 4px',
                transition: '0.2s',
                '&:hover': {
                  background: n.light,
                  borderColor: n.light,
                  boxShadow: 'rgba(0, 0, 0, 0.12) 0px 2px 8px',
                },
                '&:active': {background: n.dark, borderColor: n.dark},
              },
            },
            styles: qD(
              {
                root: {
                  fontFamily: 'body',
                  lineHeight: 'body',
                  fontWeight: 'body',
                  fontSize: 1,
                },
                h1: {
                  color: 'text',
                  fontFamily: 'heading',
                  lineHeight: 'heading',
                  fontWeight: 'heading',
                  fontSize: 5,
                },
                h2: {
                  color: 'text',
                  fontFamily: 'heading',
                  lineHeight: 'heading',
                  fontWeight: 'heading',
                  fontSize: 4,
                },
                h3: {
                  color: 'text',
                  fontFamily: 'heading',
                  lineHeight: 'heading',
                  fontWeight: 'heading',
                  fontSize: 3,
                },
                h4: {
                  color: 'text',
                  fontFamily: 'heading',
                  lineHeight: 'heading',
                  fontWeight: 'heading',
                  fontSize: 2,
                },
                h5: {
                  color: 'text',
                  fontFamily: 'heading',
                  lineHeight: 'heading',
                  fontWeight: 'heading',
                  fontSize: 1,
                },
                h6: {
                  color: 'text',
                  fontFamily: 'heading',
                  lineHeight: 'heading',
                  fontWeight: 'heading',
                  fontSize: 0,
                },
                p: {
                  color: 'text',
                  fontFamily: 'body',
                  fontWeight: 'body',
                  lineHeight: 'body',
                },
                a: {color: 'primary'},
                pre: {
                  fontFamily: 'monospace',
                  overflowX: 'auto',
                  code: {color: 'inherit'},
                },
                code: {fontFamily: 'monospace', fontSize: 'inherit'},
                table: {
                  width: '100%',
                  borderCollapse: 'separate',
                  borderSpacing: 0,
                },
                th: {textAlign: 'left', borderBottomStyle: 'solid'},
                td: {textAlign: 'left', borderBottomStyle: 'solid'},
                img: {maxWidth: '100%'},
                textarea: {
                  transparent: {
                    border: 'none',
                    boxShadow: 'none',
                    resize: 'none',
                    outline: 0,
                    '&:hover': {
                      border: 'none',
                      boxShadow: 'none',
                      resize: 'none',
                      outline: 0,
                    },
                    '&:active': {
                      border: 'none',
                      boxShadow: 'none',
                      resize: 'none',
                      outline: 0,
                    },
                    '&:focus': {
                      border: 'none',
                      boxShadow: 'none',
                      resize: 'none',
                      outline: 0,
                    },
                  },
                },
              },
              rD
            ),
          };
        };
      (cg.getThemeConfig = Nj), (cg.default = Nj);
      var Oj = {},
        dg =
          (Oj && Oj.__assign) ||
          function () {
            return (dg =
              Object.assign ||
              function (t) {
                for (var e, r = 1, n = arguments.length; r < n; r++)
                  for (var o in (e = arguments[r]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }).apply(this, arguments);
          },
        eg = '__PAPERCUPS__',
        ve = function () {
          return {
            _db: {},
            getItem: function (t) {
              return this._db[t] || null;
            },
            setItem: function (t, e) {
              this._db[t] = e;
            },
            removeItem: function (t) {
              delete this._db[t];
            },
            get: function (t) {
              return this._db[t] || null;
            },
            set: function (t, e) {
              this._db[t] = e;
            },
            remove: function (t) {
              delete this._db[t];
            },
          };
        },
        sD = function (t) {
          try {
            var e = t && t.localStorage;
            return dg(dg({}, e), {
              get: function (t) {
                var r = e.getItem('' + eg + t);
                if (!r) return null;
                try {
                  return JSON.parse(r);
                } catch (n) {
                  return r;
                }
              },
              set: function (t, r) {
                e.setItem('' + eg + t, JSON.stringify(r));
              },
              remove: function (t) {
                e.removeItem(t);
              },
            });
          } catch (r) {
            return ve();
          }
        },
        tD = function (t) {
          try {
            var e = t && t.sessionStorage;
            return dg(dg({}, e), {
              get: function (t) {
                var r = e.getItem('' + eg + t);
                if (!r) return null;
                try {
                  return JSON.parse(r);
                } catch (n) {
                  return r;
                }
              },
              set: function (t, r) {
                e.setItem('' + eg + t, JSON.stringify(r));
              },
              remove: function (t) {
                e.removeItem(t);
              },
            });
          } catch (r) {
            return ve();
          }
        },
        uD = function () {
          try {
            throw new Error('Cookie storage has not been implemented!');
          } catch (t) {
            return ve();
          }
        },
        Sq = function (t, e) {
          void 0 === e && (e = 'local');
          try {
            switch (e) {
              case 'local':
                return sD(t);
              case 'session':
                return tD(t);
              case 'cookie':
                return uD();
              case 'memory':
              default:
                return ve();
            }
          } catch (r) {
            return ve();
          }
        };
      function Tq(t, e) {
        void 0 === e && (e = {});
        var r = e.defaultType,
          n = void 0 === r ? 'local' : r,
          o = e.openStateType,
          a = void 0 === o ? 'session' : o,
          $ = Sq(t, n),
          u = Sq(t, a);
        return {
          getCustomerId: function () {
            return $.get('__CUSTOMER_ID__');
          },
          setCustomerId: function (t) {
            return $.set('__CUSTOMER_ID__', t);
          },
          removeCustomerId: function () {
            return $.remove('__CUSTOMER_ID__');
          },
          getOpenState: function () {
            return u.get(':open');
          },
          setOpenState: function (t) {
            return u.set(':open', t);
          },
          clearOpenState: function () {
            return u.remove(':open');
          },
          getPopupSeen: function () {
            return u.get(':pop_up_seen');
          },
          setPopupSeen: function (t) {
            return u.set(':pop_up_seen', t);
          },
          clearPopupSeen: function () {
            return u.remove(':pop_up_seen');
          },
        };
      }
      Oj.default = Tq;
      var Pj = {},
        we =
          (Pj && Pj.__spreadArrays) ||
          function () {
            for (var r = 0, o = 0, e = arguments.length; o < e; o++)
              r += arguments[o].length;
            var a = Array(r),
              s = 0;
            for (o = 0; o < e; o++)
              for (var n = arguments[o], p = 0, t = n.length; p < t; p++, s++)
                a[s] = n[p];
            return a;
          },
        Uq = (function () {
          function r(r) {
            this.debugModeEnabled = !!r;
          }
          return (
            (r.prototype.debug = function () {
              for (var r = [], o = 0; o < arguments.length; o++)
                r[o] = arguments[o];
              this.debugModeEnabled &&
                console.debug.apply(console, we(['[InhotelChatWindow]'], r));
            }),
            (r.prototype.log = function () {
              for (var r = [], o = 0; o < arguments.length; o++)
                r[o] = arguments[o];
              this.debugModeEnabled &&
                console.log.apply(console, we(['[InhotelChatWindow]'], r));
            }),
            (r.prototype.info = function () {
              for (var r = [], o = 0; o < arguments.length; o++)
                r[o] = arguments[o];
              console.info.apply(console, we(['[InhotelChatWindow]'], r));
            }),
            (r.prototype.warn = function () {
              for (var r = [], o = 0; o < arguments.length; o++)
                r[o] = arguments[o];
              console.warn.apply(console, we(['[InhotelChatWindow]'], r));
            }),
            (r.prototype.error = function () {
              for (var r = [], o = 0; o < arguments.length; o++)
                r[o] = arguments[o];
              console.error.apply(console, we(['[InhotelChatWindow]'], r));
            }),
            r
          );
        })();
      Pj.default = Uq;
      function Qj(e) {
        var r = vD(e),
          o = r.navigator,
          t = r.userAgent,
          n = r.windowOpera,
          i = r.intl,
          d = r.each,
          s = r.extend,
          a = r.includes,
          c = r.timestamp,
          u = r.stripEmptyProperties,
          l = r.getQueryParam,
          h = {
            campaignParams: function () {
              var e =
                  'utm_source utm_medium utm_campaign utm_content utm_term'.split(
                    ' '
                  ),
                r = '',
                o = {};
              return (
                d(e, function (e) {
                  (r = l(document.URL, e)).length && (o[e] = r);
                }),
                o
              );
            },
            searchEngine: function (e) {
              return 0 === e.search('https?://(.*)google.([^/?]*)')
                ? 'google'
                : 0 === e.search('https?://(.*)bing.com')
                ? 'bing'
                : 0 === e.search('https?://(.*)yahoo.com')
                ? 'yahoo'
                : 0 === e.search('https?://(.*)duckduckgo.com')
                ? 'duckduckgo'
                : null;
            },
            searchInfo: function (e) {
              var r = h.searchEngine(e),
                o = 'yahoo' != r ? 'q' : 'p',
                t = {};
              if (null !== r) {
                t.$search_engine = r;
                var n = l(e, o);
                n.length && (t.ph_keyword = n);
              }
              return t;
            },
            browser: function (e, r, o) {
              return (
                (r = r || ''),
                o || a(e, ' OPR/')
                  ? a(e, 'Mini')
                    ? 'Opera Mini'
                    : 'Opera'
                  : /(BlackBerry|PlayBook|BB10)/i.test(e)
                  ? 'BlackBerry'
                  : a(e, 'IEMobile') || a(e, 'WPDesktop')
                  ? 'Internet Explorer Mobile'
                  : a(e, 'SamsungBrowser/')
                  ? 'Samsung Internet'
                  : a(e, 'Edge') || a(e, 'Edg/')
                  ? 'Microsoft Edge'
                  : a(e, 'FBIOS')
                  ? 'Facebook Mobile'
                  : a(e, 'Chrome')
                  ? 'Chrome'
                  : a(e, 'CriOS')
                  ? 'Chrome iOS'
                  : a(e, 'UCWEB') || a(e, 'UCBrowser')
                  ? 'UC Browser'
                  : a(e, 'FxiOS')
                  ? 'Firefox iOS'
                  : a(r, 'Apple')
                  ? a(e, 'Mobile')
                    ? 'Mobile Safari'
                    : 'Safari'
                  : a(e, 'Android')
                  ? 'Android Mobile'
                  : a(e, 'Konqueror')
                  ? 'Konqueror'
                  : a(e, 'Firefox')
                  ? 'Firefox'
                  : a(e, 'MSIE') || a(e, 'Trident/')
                  ? 'Internet Explorer'
                  : a(e, 'Gecko')
                  ? 'Mozilla'
                  : ''
              );
            },
            browserVersion: function (e, r, o) {
              var t = {
                'Internet Explorer Mobile': /rv:(\d+(\.\d+)?)/,
                'Microsoft Edge': /Edge?\/(\d+(\.\d+)?)/,
                Chrome: /Chrome\/(\d+(\.\d+)?)/,
                'Chrome iOS': /CriOS\/(\d+(\.\d+)?)/,
                'UC Browser': /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
                Safari: /Version\/(\d+(\.\d+)?)/,
                'Mobile Safari': /Version\/(\d+(\.\d+)?)/,
                Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
                Firefox: /Firefox\/(\d+(\.\d+)?)/,
                'Firefox iOS': /FxiOS\/(\d+(\.\d+)?)/,
                Konqueror: /Konqueror:(\d+(\.\d+)?)/,
                BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
                'Android Mobile': /android\s(\d+(\.\d+)?)/,
                'Samsung Internet': /SamsungBrowser\/(\d+(\.\d+)?)/,
                'Internet Explorer': /(rv:|MSIE )(\d+(\.\d+)?)/,
                Mozilla: /rv:(\d+(\.\d+)?)/,
              }[h.browser(e, r, o)];
              if (void 0 === t) return null;
              var n = e.match(t);
              return n ? parseFloat(n[n.length - 2]) : null;
            },
            os: function () {
              var e = t;
              return /Windows/i.test(e)
                ? /Phone/.test(e) || /WPDesktop/.test(e)
                  ? 'Windows Phone'
                  : 'Windows'
                : /(iPhone|iPad|iPod)/.test(e)
                ? 'iOS'
                : /Android/.test(e)
                ? 'Android'
                : /(BlackBerry|PlayBook|BB10)/i.test(e)
                ? 'BlackBerry'
                : /Mac/i.test(e)
                ? 'Mac OS X'
                : /Linux/.test(e)
                ? 'Linux'
                : /CrOS/.test(e)
                ? 'Chrome OS'
                : '';
            },
            device: function (e) {
              return /Windows Phone/i.test(e) || /WPDesktop/.test(e)
                ? 'Windows Phone'
                : /iPad/.test(e)
                ? 'iPad'
                : /iPod/.test(e)
                ? 'iPod Touch'
                : /iPhone/.test(e)
                ? 'iPhone'
                : /(BlackBerry|PlayBook|BB10)/i.test(e)
                ? 'BlackBerry'
                : /Android/.test(e)
                ? 'Android'
                : '';
            },
            referringDomain: function (e) {
              var r = e.split('/');
              return r.length >= 3 ? r[2] : '';
            },
            timezone: function (e) {
              try {
                return e.DateTimeFormat().resolvedOptions().timeZone;
              } catch (r) {
                return null;
              }
            },
            properties: function () {
              var r;
              return s(
                u({
                  os: h.os(),
                  browser: h.browser(t, o.vendor, n),
                  referrer: document.referrer,
                  referring_domain: h.referringDomain(document.referrer),
                  device: h.device(t),
                  time_zone: h.timezone(i),
                }),
                {
                  current_url: e.location.href,
                  host: e.location.host,
                  pathname: e.location.pathname,
                  browser_version:
                    null === (r = h.browserVersion(t, o.vendor, n)) ||
                    void 0 === r
                      ? void 0
                      : r.toString(),
                  screen_height: screen.height,
                  screen_width: screen.width,
                  lib: 'web',
                  insert_id:
                    Math.random().toString(36).substring(2, 10) +
                    Math.random().toString(36).substring(2, 10),
                  time: c() / 1e3,
                }
              );
            },
          };
        return h.properties();
      }
      function Vq(r) {
        return (Vq =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (r) {
                return typeof r;
              }
            : function (r) {
                return r &&
                  'function' == typeof Symbol &&
                  r.constructor === Symbol &&
                  r !== Symbol.prototype
                  ? 'symbol'
                  : typeof r;
              })(r);
      }
      var vD = function (r) {
        var n = Array.prototype,
          t = Function.prototype,
          e = Object.prototype,
          o = e.toString,
          i = e.hasOwnProperty,
          u = r.console,
          c = r.navigator,
          a = r.document,
          f = r.opera,
          l = r.screen,
          s = c.userAgent,
          p = r.Intl,
          y = t.bind,
          h = n.forEach,
          d = n.indexOf,
          g = Array.isArray,
          v = n.slice,
          b = {},
          j =
            g ||
            function (r) {
              return '[object Array]' === o.call(r);
            };
        function m(r) {
          try {
            return /^\s*\bfunction\b/.test(r);
          } catch (n) {
            return !1;
          }
        }
        function S(r) {
          return '[object String]' == o.call(r);
        }
        function w(r) {
          return void 0 === r;
        }
        function x(r, n, t) {
          if (null != r)
            if (h && r.forEach === h) r.forEach(n, t);
            else if (r.length === +r.length) {
              for (var e = 0, o = r.length; e < o; e++)
                if (e in r && n.call(t, r[e], e, r) === b) return;
            } else
              for (var u in r)
                if (i.call(r, u) && n.call(t, r[u], u, r) === b) return;
        }
        var $,
          A,
          F,
          O,
          C,
          E,
          B,
          P,
          I,
          N,
          _,
          D,
          k = function (r) {
            var n = function (r) {
              var n =
                  /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                t = {
                  '\b': '\\b',
                  '\t': '\\t',
                  '\n': '\\n',
                  '\f': '\\f',
                  '\r': '\\r',
                  '"': '\\"',
                  '\\': '\\\\',
                };
              return (
                (n.lastIndex = 0),
                n.test(r)
                  ? '"' +
                    r.replace(n, function (r) {
                      var n = t[r];
                      return 'string' == typeof n
                        ? n
                        : '\\u' +
                            ('0000' + r.charCodeAt(0).toString(16)).slice(-4);
                    }) +
                    '"'
                  : '"' + r + '"'
              );
            };
            return (function r(t, e) {
              var u = '',
                c = 0,
                a = '',
                f = '',
                l = 0,
                s = u,
                p = [],
                y = e[t];
              switch (
                (y &&
                  'object' === Vq(y) &&
                  'function' == typeof y.toJSON &&
                  (y = y.toJSON(t)),
                Vq(y))
              ) {
                case 'string':
                  return n(y);
                case 'number':
                  return isFinite(y) ? String(y) : 'null';
                case 'boolean':
                case 'undefined':
                  return String(y);
                case 'object':
                  if (!y) return 'null';
                  if (
                    ((u += '    '), (p = []), '[object Array]' === o.apply(y))
                  ) {
                    for (l = y.length, c = 0; c < l; c += 1)
                      p[c] = r(c, y) || 'null';
                    return (
                      (f =
                        0 === p.length
                          ? '[]'
                          : u
                          ? '[\n' + u + p.join(',\n' + u) + '\n' + s + ']'
                          : '[' + p.join(',') + ']'),
                      (u = s),
                      f
                    );
                  }
                  for (a in y)
                    i.call(y, a) &&
                      (f = r(a, y)) &&
                      p.push(n(a) + (u ? ': ' : ':') + f);
                  return (
                    (f =
                      0 === p.length
                        ? '{}'
                        : u
                        ? '{' + p.join(',') + s + '}'
                        : '{' + p.join(',') + '}'),
                    (u = s),
                    f
                  );
              }
            })('', {'': r});
          },
          U =
            ((C = {
              '"': '"',
              '\\': '\\',
              '/': '/',
              b: '\b',
              f: '\f',
              n: '\n',
              r: '\r',
              t: '\t',
            }),
            (E = function (r) {
              var n = new SyntaxError(r);
              throw ((n.at = $), (n.text = F), n);
            }),
            (B = function (r) {
              return (
                r &&
                  r !== A &&
                  E("Expected '" + r + "' instead of '" + A + "'"),
                (A = F.charAt($)),
                ($ += 1),
                A
              );
            }),
            (P = function () {
              var r,
                n = '';
              for ('-' === A && ((n = '-'), B('-')); A >= '0' && A <= '9'; )
                (n += A), B();
              if ('.' === A)
                for (n += '.'; B() && A >= '0' && A <= '9'; ) n += A;
              if ('e' === A || 'E' === A)
                for (
                  n += A, B(), ('-' !== A && '+' !== A) || ((n += A), B());
                  A >= '0' && A <= '9';

                )
                  (n += A), B();
              if (((r = +n), isFinite(r))) return r;
              E('Bad number');
            }),
            (I = function () {
              var r,
                n,
                t,
                e = '';
              if ('"' === A)
                for (; B(); ) {
                  if ('"' === A) return B(), e;
                  if ('\\' === A) {
                    if ((B(), 'u' === A)) {
                      for (
                        t = 0, n = 0;
                        n < 4 && ((r = parseInt(B(), 16)), isFinite(r));
                        n += 1
                      )
                        t = 16 * t + r;
                      e += String.fromCharCode(t);
                    } else {
                      if ('string' != typeof C[A]) break;
                      e += C[A];
                    }
                  } else e += A;
                }
              E('Bad string');
            }),
            (N = function () {
              for (; A && A <= ' '; ) B();
            }),
            (_ = function () {
              var r = [];
              if ('[' === A) {
                if ((B('['), N(), ']' === A)) return B(']'), r;
                for (; A; ) {
                  if ((r.push(O()), N(), ']' === A)) return B(']'), r;
                  B(','), N();
                }
              }
              E('Bad array');
            }),
            (D = function () {
              var r,
                n = {};
              if ('{' === A) {
                if ((B('{'), N(), '}' === A)) return B('}'), n;
                for (; A; ) {
                  if (
                    ((r = I()),
                    N(),
                    B(':'),
                    Object.hasOwnProperty.call(n, r) &&
                      E('Duplicate key "' + r + '"'),
                    (n[r] = O()),
                    N(),
                    '}' === A)
                  )
                    return B('}'), n;
                  B(','), N();
                }
              }
              E('Bad object');
            }),
            (O = function () {
              switch ((N(), A)) {
                case '{':
                  return D();
                case '[':
                  return _();
                case '"':
                  return I();
                case '-':
                  return P();
                default:
                  return A >= '0' && A <= '9'
                    ? P()
                    : (function () {
                        switch (A) {
                          case 't':
                            return B('t'), B('r'), B('u'), B('e'), !0;
                          case 'f':
                            return B('f'), B('a'), B('l'), B('s'), B('e'), !1;
                          case 'n':
                            return B('n'), B('u'), B('l'), B('l'), null;
                        }
                        E('Unexpected "' + A + '"');
                      })();
              }
            }),
            function (r) {
              var n;
              return (
                (F = r),
                ($ = 0),
                (A = ' '),
                (n = O()),
                N(),
                A && E('Syntax error'),
                n
              );
            });
        function J(r) {
          var n,
            t,
            e,
            o,
            i = '';
          for (
            n = t = 0,
              e = (r = (r + '').replace(/\r\n/g, '\n').replace(/\r/g, '\n'))
                .length,
              o = 0;
            o < e;
            o++
          ) {
            var u = r.charCodeAt(o),
              c = null;
            u < 128
              ? t++
              : (c =
                  u > 127 && u < 2048
                    ? String.fromCharCode((u >> 6) | 192, (63 & u) | 128)
                    : String.fromCharCode(
                        (u >> 12) | 224,
                        ((u >> 6) & 63) | 128,
                        (63 & u) | 128
                      )),
              null !== c &&
                (t > n && (i += r.substring(n, t)), (i += c), (n = t = o + 1));
          }
          return t > n && (i += r.substring(n, r.length)), i;
        }
        return {
          ArrayProto: n,
          FuncProto: t,
          ObjProto: e,
          toString: o,
          hasOwnProperty: i,
          win: r,
          windowConsole: u,
          navigator: c,
          document: a,
          windowOpera: f,
          screen: l,
          userAgent: s,
          intl: p,
          nativeBind: y,
          nativeForEach: h,
          nativeIndexOf: d,
          nativeIsArray: g,
          slice: v,
          breaker: b,
          __NOOP: function () {},
          __NOOPTIONS: {},
          isFunction: m,
          isString: S,
          includes: function (r, n) {
            return -1 !== r.indexOf(n);
          },
          isUndefined: w,
          timestamp: function () {
            return (
              (Date.now =
                Date.now ||
                function () {
                  return +new Date();
                }),
              Date.now()
            );
          },
          each: x,
          trim: function (r) {
            return r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
          },
          extend: function (r) {
            for (var n = [], t = 1; t < arguments.length; t++)
              n[t - 1] = arguments[t];
            return (
              x(n, function (n) {
                for (var t in n) void 0 !== n[t] && (r[t] = n[t]);
              }),
              r
            );
          },
          bind: function (r, n) {
            var t, e;
            if (y && r.bind === y) return y.apply(r, v.call(arguments, 1));
            if (!m(r)) throw new TypeError();
            return (
              (t = v.call(arguments, 2)),
              (e = function () {
                if (!(this instanceof e))
                  return r.apply(n, t.concat(v.call(arguments)));
                var o = {};
                o.prototype = r.prototype;
                var i = new o();
                o.prototype = null;
                var u = r.apply(i, t.concat(v.call(arguments)));
                return Object(u) === u ? u : i;
              })
            );
          },
          truncate: function r(n, t) {
            var e;
            return (
              'string' == typeof n
                ? (e = n.slice(0, t))
                : j(n)
                ? ((e = []),
                  x(n, function (n) {
                    e.push(r(n, t));
                  }))
                : (function (r) {
                    return r === Object(r) && !j(r);
                  })(n)
                ? ((e = {}),
                  x(n, function (n, o) {
                    e[o] = r(n, t);
                  }))
                : (e = n),
              e
            );
          },
          stripEmptyProperties: function (r) {
            var n = {};
            return (
              x(r, function (r, t) {
                S(r) && r.length > 0 && (n[t] = r);
              }),
              n
            );
          },
          HTTPBuildQuery: function (r, n) {
            var t,
              e,
              o = [];
            return (
              w(n) && (n = '&'),
              x(r, function (r, n) {
                (t = encodeURIComponent(r.toString())),
                  (e = encodeURIComponent(n)),
                  (o[o.length] = e + '=' + t);
              }),
              o.join(n)
            );
          },
          JSONEncode: k,
          JSONDecode: U,
          utf8Encode: J,
          base64Encode: function (r) {
            var n,
              t,
              e,
              o,
              i,
              u =
                'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
              c = 0,
              a = 0,
              f = '',
              l = [];
            if (!r) return r;
            r = J(r);
            do {
              (n =
                ((i =
                  (r.charCodeAt(c++) << 16) |
                  (r.charCodeAt(c++) << 8) |
                  r.charCodeAt(c++)) >>
                  18) &
                63),
                (t = (i >> 12) & 63),
                (e = (i >> 6) & 63),
                (o = 63 & i),
                (l[a++] =
                  u.charAt(n) + u.charAt(t) + u.charAt(e) + u.charAt(o));
            } while (c < r.length);
            switch (((f = l.join('')), r.length % 3)) {
              case 1:
                f = f.slice(0, -2) + '==';
                break;
              case 2:
                f = f.slice(0, -1) + '=';
            }
            return f;
          },
          getQueryParam: function (r, n) {
            n = n.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
            var t = new RegExp('[\\?&]' + n + '=([^&#]*)').exec(r);
            if (null === t || (t && 'string' != typeof t[1] && t[1].length))
              return '';
            var e = t[1];
            try {
              e = decodeURIComponent(e);
            } catch (o) {
              console.error(
                'Skipping decoding for malformed query param: ' + e
              );
            }
            return e.replace(/\+/g, ' ');
          },
        };
      };
      Ka();
      var wD =
          (ob && ob.__extends) ||
          (function () {
            var e = function (t, n) {
              return (e =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                })(t, n);
            };
            return function (t, n) {
              function r() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
            };
          })(),
        Bb =
          (ob && ob.__assign) ||
          function () {
            return (Bb =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var a in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }).apply(this, arguments);
          },
        fd =
          (ob && ob.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (a, i) {
              function o(e) {
                try {
                  u(r.next(e));
                } catch (t) {
                  i(t);
                }
              }
              function s(e) {
                try {
                  u(r.throw(e));
                } catch (t) {
                  i(t);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? a(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(o, s);
              }
              u((r = r.apply(e, t || [])).next());
            });
          },
        gd =
          (ob && ob.__generator) ||
          function (e, t) {
            var n,
              r,
              a,
              i,
              o = {
                label: 0,
                sent: function () {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = {next: s(0), throw: s(1), return: s(2)}),
              'function' == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function s(i) {
              return function (s) {
                return (function (i) {
                  if (n) throw new TypeError('Generator is already executing.');
                  for (; o; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (a =
                            2 & i[0]
                              ? r.return
                              : i[0]
                              ? r.throw || ((a = r.return) && a.call(r), 0)
                              : r.next) &&
                          !(a = a.call(r, i[1])).done)
                      )
                        return a;
                      switch (((r = 0), a && (i = [2 & i[0], a.value]), i[0])) {
                        case 0:
                        case 1:
                          a = i;
                          break;
                        case 4:
                          return o.label++, {value: i[1], done: !1};
                        case 5:
                          o.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = o.ops.pop()), o.trys.pop();
                          continue;
                        default:
                          if (
                            !(a = (a = o.trys).length > 0 && a[a.length - 1]) &&
                            (6 === i[0] || 2 === i[0])
                          ) {
                            o = 0;
                            continue;
                          }
                          if (
                            3 === i[0] &&
                            (!a || (i[1] > a[0] && i[1] < a[3]))
                          ) {
                            o.label = i[1];
                            break;
                          }
                          if (6 === i[0] && o.label < a[1]) {
                            (o.label = a[1]), (a = i);
                            break;
                          }
                          if (a && o.label < a[2]) {
                            (o.label = a[2]), o.ops.push(i);
                            break;
                          }
                          a[2] && o.ops.pop(), o.trys.pop();
                          continue;
                      }
                      i = t.call(e, o);
                    } catch (s) {
                      (i = [6, s]), (r = 0);
                    } finally {
                      n = a = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return {value: i[0] ? i[1] : void 0, done: !0};
                })([i, s]);
              };
            }
          },
        Wq =
          (ob && ob.__rest) ||
          function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                t.indexOf(r) < 0 &&
                (n[r] = e[r]);
            if (
              null != e &&
              'function' == typeof Object.getOwnPropertySymbols
            ) {
              var a = 0;
              for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                t.indexOf(r[a]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                  (n[r[a]] = e[r[a]]);
            }
            return n;
          },
        yD = function (e, t) {
          var n = function (e) {
            t(e);
          };
          return e.addEventListener
            ? (e.addEventListener('message', n),
              function () {
                return e.removeEventListener('message', n);
              })
            : (e.attachEvent('onmessage', n),
              function () {
                return e.detachEvent('onmessage', n);
              });
        },
        zD = function (e, t, n) {
          if (e.addEventListener) {
            for (var r = 0, a = t; r < a.length; r++) {
              var i = a[r];
              e.addEventListener(i, n);
            }
            return function () {
              return t.map(function (t) {
                return e.removeEventListener(t, n);
              });
            };
          }
          return (
            console.error('Custom events are not supported in your browser!'),
            ed
          );
        },
        Xq = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            (n.subscriptions = []),
              (n.EVENTS = [
                'papercups:open',
                'papercups:close',
                'papercups:toggle',
                'papercups:identify',
                'storytime:customer:set',
              ]),
              (n.shouldUpdateCustomer = function (e, t) {
                if (!e) return !1;
                if (e && !t) return !0;
                var n = e || {},
                  r = n.metadata,
                  a = void 0 === r ? {} : r,
                  i = Wq(n, ['metadata']),
                  o = t || {},
                  s = o.metadata,
                  u = void 0 === s ? {} : s,
                  l = Wq(o, ['metadata']),
                  c = Object.keys(i).every(function (e) {
                    return i[e] === l[e];
                  }),
                  p = Object.keys(a).every(function (e) {
                    return a[e] === u[e];
                  });
                return !(c && p);
              }),
              (n.getDefaultTitle = function (e) {
                return fd(n, void 0, void 0, function () {
                  var t, n, r;
                  return gd(this, function (a) {
                    return (
                      (t = this.props),
                      (n = t.title),
                      (r = t.setDefaultTitle) && 'function' == typeof r
                        ? [2, r(e)]
                        : [2, n || e.title]
                    );
                  });
                });
              }),
              (n.getDefaultSubtitle = function (e) {
                return fd(n, void 0, void 0, function () {
                  var t, n, r;
                  return gd(this, function (a) {
                    return (
                      (t = this.props),
                      (n = t.subtitle),
                      (r = t.setDefaultSubtitle) && 'function' == typeof r
                        ? [2, r(e)]
                        : [2, n || e.subtitle]
                    );
                  });
                });
              }),
              (n.getDefaultGreeting = function (e) {
                return fd(n, void 0, void 0, function () {
                  var t, n, r;
                  return gd(this, function (a) {
                    return (
                      (t = this.props),
                      (n = t.greeting),
                      (r = t.setDefaultGreeting) && 'function' == typeof r
                        ? [2, r(e)]
                        : [2, n || e.greeting]
                    );
                  });
                });
              }),
              (n.setIframeRef = function (e) {
                n.iframeRef = e;
              }),
              (n.getIframeUrl = function () {
                return n.props.iframeUrlOverride || xD;
              }),
              (n.handleConfigUpdated = function (e) {
                // console.trace();
                n.setState({config: Bb(Bb({}, n.state.config), e)}),
                  n.send('config:update', e);
              }),
              (n.handleCustomerIdUpdated = function (e) {
                var t = n.storage.getCustomerId(),
                  r = e || t,
                  a = Bb(Bb({}, n.state.config), {customerId: r});
                var $FvpG$$interop$default = za(yc);
                n.setState({
                  config: a,
                  query: $FvpG$$interop$default.d.stringify(a, {
                    skipEmptyString: !0,
                    skipNull: !0,
                  }),
                }),
                  n.logger.debug('Updated customer ID:', r);
              }),
              (n.fetchWidgetSettings = function () {
                return fd(n, void 0, Promise, function () {
                  var e, t, n, r, a, i;
                  return gd(this, function (o) {
                    return (
                      (e = this.props),
                      (t = e.token),
                      (n = e.inbox),
                      (r = e.accountId),
                      (a = e.baseUrl),
                      (i = {}),
                      [
                        2,
                        Pq({account_id: r || t, inbox_id: n}, a)
                          .then(function (e) {
                            return e || i;
                          })
                          .catch(function () {
                            return i;
                          }),
                      ]
                    );
                  });
                });
              }),
              (n.updateWidgetSettingsMetadata = function () {
                return fd(n, void 0, void 0, function () {
                  var e,
                    t,
                    n,
                    r,
                    a,
                    i,
                    o = this;
                  return gd(this, function (s) {
                    return (
                      (e = this.props),
                      (t = e.token),
                      (n = e.inbox),
                      (r = e.accountId),
                      (a = e.baseUrl),
                      (i = {
                        account_id: r || t,
                        inbox_id: n,
                        metadata: Qj(window),
                      }),
                      [
                        2,
                        Qq(i, a).catch(function (e) {
                          o.logger.error(
                            'Failed to update widget metadata:',
                            e
                          );
                        }),
                      ]
                    );
                  });
                });
              }),
              (n.hasValidPayloadIdentity = function (e) {
                var t = e && e.ts,
                  r = n.state.config;
                return !t || (void 0 === r ? {} : r).ts === t;
              }),
              (n.customEventHandlers = function (e) {
                if (!e || !e.type) return null;
                var t = e.type,
                  r = e.detail;
                switch (t) {
                  case 'papercups:open':
                    return n.handleOpenWidget();
                  case 'papercups:close':
                    return n.handleCloseWidget();
                  case 'papercups:toggle':
                    return n.handleToggleOpen();
                  case 'storytime:customer:set':
                    return n.handleCustomerIdUpdated(r);
                  default:
                    return null;
                }
              }),
              (n.postMessageHandlers = function (e) {
                n.logger.debug('Handling in parent:', e.data);
                var t = n.getIframeUrl(),
                  r = new URL(t).origin;
                if (e.origin !== r) return null;
                var a = e.data,
                  i = a.event,
                  o = a.payload,
                  s = void 0 === o ? {} : o;
                if (!n.hasValidPayloadIdentity(s))
                  return (
                    n.logger.warn(
                      'Payload identifer from iframe does not match parent \u2014 halting message handlers.'
                    ),
                    null
                  );
                switch (i) {
                  case 'chat:loaded':
                    return n.handleChatLoaded();
                  case 'customer:created':
                  case 'customer:updated':
                    return n.handleCacheCustomerId(s);
                  case 'conversation:join':
                    return n.sendCustomerUpdate(s);
                  case 'message:received':
                    return n.handleMessageReceived(s);
                  case 'message:sent':
                    return n.handleMessageSent(s);
                  case 'messages:unseen':
                    return n.handleUnseenMessages(s);
                  case 'messages:seen':
                    return n.handleMessagesSeen();
                  case 'papercups:open':
                  case 'papercups:close':
                    return n.handleToggleOpen();
                  default:
                    return null;
                }
              }),
              (n.send = function (e, t) {
                n.logger.debug('Sending from parent:', {
                  event: e,
                  payload: t,
                });
                var r = n.iframeRef;
                if (!r)
                  throw new Error(
                    'Attempted to send event ' +
                      e +
                      ' with payload ' +
                      JSON.stringify(t) +
                      ' before iframeRef was ready'
                  );
                r.contentWindow.postMessage(
                  {event: e, payload: t},
                  n.getIframeUrl()
                );
              }),
              (n.handleMessageReceived = function (e) {
                var t = n.props.onMessageReceived,
                  r = void 0 === t ? ed : t,
                  a = e.user_id,
                  i = e.customer_id;
                !!a && !i && r && r(e);
              }),
              (n.handleMessageSent = function (e) {
                var t = n.props.onMessageSent,
                  r = void 0 === t ? ed : t;
                r && r(e);
              }),
              (n.handleUnseenMessages = function (e) {
                n.logger.debug('Handling unseen messages:', e),
                  n.setState({shouldDisplayNotifications: !0}),
                  n.send('notifications:display', {
                    shouldDisplayNotifications: !0,
                  });
              }),
              (n.handleMessagesSeen = function () {
                n.logger.debug('Handling messages seen'),
                  n.setState({shouldDisplayNotifications: !1}),
                  n.storage.setPopupSeen(!0),
                  n.send('notifications:display', {
                    shouldDisplayNotifications: !1,
                  });
              }),
              (n.shouldOpenByDefault = function () {
                var e = n.props,
                  t = e.defaultIsOpen,
                  r = e.isOpenByDefault,
                  a = e.persistOpenState;
                if (!e.canToggle) return !0;
                var i = n.storage.getOpenState();
                return a ? i : !(!r && !t);
              }),
              (n.handleChatLoaded = function () {
                n.setState({isLoaded: !0});
                var e = n.state.config,
                  t = (void 0 === e ? {} : e).subscriptionPlan,
                  r = void 0 === t ? null : t,
                  a = n.props,
                  i = a.popUpInitialMessage,
                  o = a.onChatLoaded,
                  s = void 0 === o ? ed : o;
                (s &&
                  'function' == typeof s &&
                  s({
                    open: n.handleOpenWidget,
                    close: n.handleCloseWidget,
                    identify: n.identify,
                  }),
                n.shouldOpenByDefault() &&
                  n.setState({isOpen: !0}, function () {
                    return n.emitToggleEvent(!0);
                  }),
                i && !n.storage.getPopupSeen()) &&
                  setTimeout(
                    function () {
                      n.setState({shouldDisplayNotifications: !0}),
                        n.send('notifications:display', {
                          shouldDisplayNotifications: !0,
                          popUpInitialMessage: !0,
                        });
                    },
                    'number' == typeof i ? i : 0
                  );
                n.send('papercups:plan', {plan: r});
              }),
              (n.formatCustomerMetadata = function (e) {
                return e
                  ? Object.keys(e).reduce(function (t, n) {
                      var r, a;
                      return Bb(
                        Bb({}, t),
                        'metadata' === n
                          ? (((r = {})[n] = e[n]), r)
                          : (((a = {})[n] = String(e[n])), a)
                      );
                    }, {})
                  : {};
              }),
              (n.identify = function (e) {
                var t = n.state.config.customerId;
                return t ? n.updateCustomerMetadata(t, e) : null;
              }),
              (n.updateCustomerMetadata = function (e, t) {
                var r = Qj(window),
                  a = Bb(Bb({}, r), n.formatCustomerMetadata(t));
                return n.send('customer:update', {
                  customerId: e,
                  metadata: a,
                });
              }),
              (n.sendCustomerUpdate = function (e) {
                var t = e.customerId,
                  r = n.props.customer;
                n.updateCustomerMetadata(t, r);
              }),
              (n.handleCacheCustomerId = function (e) {
                var t = e.customerId;
                n.logger.debug('Caching customer ID:', t),
                  window.dispatchEvent(
                    new CustomEvent('papercups:customer:set', {detail: t})
                  ),
                  n.storage.setCustomerId(t);
              }),
              (n.emitToggleEvent = function (e) {
                n.send('papercups:toggle', {isOpen: e});
                var t = n.props,
                  r = t.persistOpenState,
                  a = void 0 !== r && r,
                  i = t.onChatOpened,
                  o = void 0 === i ? ed : i,
                  s = t.onChatClosed,
                  u = void 0 === s ? ed : s;
                a && n.storage.setOpenState(e), e ? o && o() : u && u();
              }),
              (n.handleOpenWidget = function () {
                n.props.canToggle &&
                  !n.state.isOpen &&
                  (n.state.shouldDisplayNotifications
                    ? n.setState({isTransitioning: !0}, function () {
                        setTimeout(function () {
                          n.setState(
                            {isOpen: !0, isTransitioning: !1},
                            function () {
                              return n.emitToggleEvent(!0);
                            }
                          );
                        }, 200);
                      })
                    : n.setState({isOpen: !0}, function () {
                        return n.emitToggleEvent(!0);
                      }));
              }),
              (n.handleCloseWidget = function () {
                n.props.canToggle &&
                  n.state.isOpen &&
                  n.setState({isOpen: !1}, function () {
                    return n.emitToggleEvent(!1);
                  });
              }),
              (n.handleToggleOpen = function () {
                var e = n.state,
                  t = e.isOpen,
                  r = e.isLoaded,
                  a = e.shouldDisplayNotifications,
                  i = !t;
                r &&
                  n.props.canToggle &&
                  (!t && a
                    ? n.setState({isTransitioning: !0}, function () {
                        setTimeout(function () {
                          n.setState(
                            {isOpen: i, isTransitioning: !1},
                            function () {
                              return n.emitToggleEvent(i);
                            }
                          );
                        }, 200);
                      })
                    : n.setState({isOpen: i}, function () {
                        return n.emitToggleEvent(i);
                      }));
              });
            var r = t.token || t.accountId;
            if (!r)
              throw new Error(
                'A `token` is required to run the InhotelChatWindow chat!'
              );
            if (!pD(r))
              throw (
                (console.error(
                  'The `token` must be a valid UUID. (Received invalid `token`: ' +
                    r +
                    ')'
                ),
                console.error(
                  "If you're missing a InhotelChatWindow `token`, you can get one by signing up for a free account at https://inhotel-chat.eastus.cloudapp.azure.com/register"
                ),
                new Error('Invalid `token`: ' + r))
              );
            return (
              (n.state = {
                isOpen: !1,
                isLoaded: !1,
                query: '',
                config: {},
                shouldDisplayNotifications: !1,
                isTransitioning: !1,
              }),
              n
            );
          }
          return (
            wD(t, e),
            (t.prototype.componentDidMount = function () {
              var e, t, n;
              return fd(this, void 0, void 0, function () {
                var r,
                  a,
                  i,
                  o,
                  s,
                  u,
                  l,
                  c,
                  p,
                  d,
                  g,
                  f,
                  $,
                  v,
                  m,
                  h,
                  U,
                  y,
                  _,
                  b,
                  w,
                  J,
                  X,
                  O,
                  T,
                  x,
                  position,
                  email,
                  phone;

                return gd(this, function (I) {
                  switch (I.label) {
                    case 0:
                      return (r = +new Date()), [4, this.fetchWidgetSettings()];
                    case 1:
                      a = I.sent();
                      (m = BD(a.position || this.props.position)),
                        (_ = CD({}, m));
                      y = _.chatContainer;
                      C = void 0 === y ? {} : y;
                      T = _.toggleContainer;
                      xT = void 0 === T ? {} : T;
                      F = _.toggleButton;
                      E = void 0 === F ? {} : F;
                      return (
                        (i = this.props),
                        (o = i.token),
                        (s = i.inbox),
                        (u = i.accountId),
                        (l = i.primaryColor),
                        (c = i.baseUrl),
                        (p = i.awayMessage),
                        (d = i.newMessagePlaceholder),
                        (g = i.emailInputPlaceholder),
                        (f = i.newMessagesNotificationText),
                        ($ = i.agentAvailableText),
                        (v = i.agentUnavailableText),
                        (m = i.showAgentAvailability),
                        (h = i.requireEmailUpfront),
                        (U = i.disableAnalyticsTracking),
                        (y = i.canToggle),
                        (_ = i.customer),
                        (b = void 0 === _ ? {} : _),
                        (w = i.debug),
                        (J = void 0 !== w && w),
                        (position = a.position || i.position),
                        (email = a.hotel_email || i.hotelEmail),
                        (phone = a.hotel_phone || i.hotelPhone),
                        (this.logger = new Uq(!!J)),
                        (this.subscriptions = [
                          yD(window, this.postMessageHandlers),
                          zD(window, this.EVENTS, this.customEventHandlers),
                        ]),
                        (this.storage = Tq(window)),
                        (X = Bb(Bb({}, Qj(window)), b)),
                        (T = {
                          baseUrl: c,
                          inbox: s,
                          token: o || u,
                          accountId: o || u,
                        }),
                        [4, this.getDefaultTitle(a)]
                      );
                    case 2:
                      return (
                        (T.title = I.sent()), [4, this.getDefaultSubtitle(a)]
                      );
                    case 3:
                      return (
                        (T.subtitle = I.sent()),
                        (T.primaryColor = l || a.color),
                        [4, this.getDefaultGreeting(a)]
                      );
                    case 4:
                      var $FvpG$$interop$default = za(yc);
                      console.log(
                        'Widget.js: ',
                        a.should_show_contact_form,
                        'Type: ',
                        typeof a.should_show_contact_form
                      );
                      return (
                        (T.greeting = I.sent()),
                        (T.awayMessage = p || a.away_message),
                        (T.newMessagePlaceholder =
                          d || a.new_message_placeholder),
                        (T.emailInputPlaceholder =
                          g || a.email_input_placeholder),
                        (T.newMessagesNotificationText =
                          f || a.new_messages_notification_text),
                        (T.companyName =
                          null === (e = null == a ? void 0 : a.account) ||
                          void 0 === e
                            ? void 0
                            : e.company_name),
                        (T.requireEmailUpfront =
                          h || a.require_email_upfront ? 1 : 0),
                        (T.showAgentAvailability =
                          m || a.show_agent_availability ? 1 : 0),
                        (T.agentAvailableText = a.agent_available_text || $),
                        (T.agentUnavailableText =
                          a.agent_unavailable_text || v),
                        (T.closeable = y ? 1 : 0),
                        (T.customerId = this.storage.getCustomerId()),
                        (T.subscriptionPlan =
                          null === (t = null == a ? void 0 : a.account) ||
                          void 0 === t
                            ? void 0
                            : t.subscription_plan),
                        (T.isOutsideWorkingHours =
                          null === (n = null == a ? void 0 : a.account) ||
                          void 0 === n
                            ? void 0
                            : n.is_outside_working_hours),
                        (T.isBrandingHidden =
                          null == a ? void 0 : a.is_branding_hidden),
                        (T.metadata = JSON.stringify(X)),
                        (T.disableAnalyticsTracking = U ? 1 : 0),
                        (T.debug = J ? 1 : 0),
                        (T.version = '1.2.0'),
                        (T.ts = r.toString()),
                        (T.position = position),
                        (T.shouldShowContactForm = Boolean(
                          a.should_show_contact_form
                        )),
                        (T.hotelEmail = a.hotel_email),
                        (T.hotelPhone = a.hotel_phone),
                        (O = T),
                        (x = $FvpG$$interop$default.d.stringify(O, {
                          skipEmptyString: !0,
                          skipNull: !0,
                        })),
                        this.setState({config: O, query: x}),
                        [4, this.updateWidgetSettingsMetadata()]
                      );
                    case 5:
                      return I.sent(), [2];
                  }
                });
              });
            }),
            (t.prototype.componentWillUnmount = function () {
              this.subscriptions.forEach(function (e) {
                'function' == typeof e && e();
              });
            }),
            (t.prototype.componentDidUpdate = function (e) {
              var t = this.props,
                n = t.token,
                r = t.inbox,
                a = t.accountId,
                i = t.title,
                o = t.subtitle,
                s = t.primaryColor,
                u = t.baseUrl,
                l = t.greeting,
                c = t.newMessagePlaceholder,
                p = t.emailInputPlaceholder,
                d = t.newMessagesNotificationText,
                g = t.requireEmailUpfront,
                f = t.showAgentAvailability,
                $ = t.agentAvailableText,
                v = t.agentUnavailableText,
                m = t.customer,
                pt = t.position,
                h = [n, r, a, i, o, s, u, l, c, p, d, g, f, $, v, pt],
                U = [
                  e.token,
                  e.inbox,
                  e.accountId,
                  e.title,
                  e.subtitle,
                  e.primaryColor,
                  e.baseUrl,
                  e.greeting,
                  e.newMessagePlaceholder,
                  e.emailInputPlaceholder,
                  e.newMessagesNotificationText,
                  e.requireEmailUpfront,
                  e.showAgentAvailability,
                  e.agentAvailableText,
                  e.agentUnavailableText,
                  e.position,
                ],
                y = this.state.config.customerId;
              h.some(function (e, t) {
                return e !== U[t];
              }) &&
                this.handleConfigUpdated({
                  token: n,
                  inbox: r,
                  accountId: a,
                  title: i,
                  subtitle: o,
                  primaryColor: s,
                  baseUrl: u,
                  greeting: l,
                  newMessagePlaceholder: c,
                  emailInputPlaceholder: p,
                  newMessagesNotificationText: d,
                  agentAvailableText: $,
                  agentUnavailableText: v,
                  requireEmailUpfront: g ? 1 : 0,
                  showAgentAvailability: f ? 1 : 0,
                  position: pt,
                }),
                y &&
                  this.shouldUpdateCustomer(m, e.customer) &&
                  this.updateCustomerMetadata(y, m);
            }),
            (t.prototype.render = function () {
              var e = this.state,
                t = e.isOpen,
                n = e.isLoaded,
                r = e.query,
                a = e.config,
                i = e.shouldDisplayNotifications,
                o = e.isTransitioning,
                s = this.props,
                u = s.customIconUrl,
                l = s.hideOutsideWorkingHours,
                c = void 0 !== l && l,
                p = s.children,
                d = a.primaryColor;
              if (!r) return null;
              if (c && a.isOutsideWorkingHours) return null;
              var g = this.getIframeUrl(),
                f = (t || i) && !o,
                $ = Nj({primary: d}),
                v = [
                  'allow-scripts',
                  'allow-popups',
                  'allow-same-origin',
                  'allow-forms',
                ].join(' ');
              return ta(
                sB,
                {theme: $},
                p({
                  sandbox: v,
                  isLoaded: n,
                  isActive: f,
                  isOpen: t,
                  isTransitioning: o,
                  customIconUrl: u,
                  iframeUrl: g,
                  query: r,
                  shouldDisplayNotifications: i,
                  setIframeRef: this.setIframeRef,
                  onToggleOpen: this.handleToggleOpen,
                })
              );
            }),
            t
          );
        })(Q.d.Component);
      ob.default = Xq;
      var Rj = {};
      Ka();
      var AD =
          (Rj && Rj.__extends) ||
          (function () {
            var t = function (r, e) {
              return (t =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                  function (t, r) {
                    t.__proto__ = r;
                  }) ||
                function (t, r) {
                  for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e]);
                })(r, e);
            };
            return function (r, e) {
              function o() {
                this.constructor = r;
              }
              t(r, e),
                (r.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            };
          })(),
        Yq = (function (t) {
          function r() {
            var r = (null !== t && t.apply(this, arguments)) || this;
            return (r.state = {error: null}), r;
          }
          return (
            AD(r, t),
            (r.getDerivedStateFromError = function (t) {
              return {error: t};
            }),
            (r.prototype.componentDidCatch = function (t, r) {
              console.error('Error rendering InhotelChatWindow chat:', t, r);
            }),
            (r.prototype.render = function () {
              return this.state.error ? null : this.props.children;
            }),
            r
          );
        })(Q.d.Component);
      Rj.default = Yq;
      Ka();
      var xe =
          (di && di.__assign) ||
          function () {
            return (xe =
              Object.assign ||
              function (t) {
                for (var e, i = 1, r = arguments.length; i < r; i++)
                  for (var o in (e = arguments[i]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }).apply(this, arguments);
          },
        fg = 20,
        BD = function (t) {
          if (!t) return {side: 'right', offset: fg};
          switch (t) {
            case 'left':
              return {side: 'left', offset: fg};
            case 'right':
              return {side: 'right', offset: fg};
            default:
              return t;
          }
        },
        CD = function (t, e) {
          void 0 === t && (t = {});
          var i = t.chatContainer,
            r = void 0 === i ? {} : i,
            o = t.toggleContainer,
            n = void 0 === o ? {} : o,
            a = t.toggleButton,
            $ = void 0 === a ? {} : a,
            s = e.side,
            g = void 0 === s ? 'right' : s,
            l = e.offset,
            h = void 0 === l ? fg : l;
          switch (g) {
            case 'left':
              return {
                chatContainer: xe({left: h, right: 'auto'}, r),
                toggleContainer: xe({left: h, right: 'auto'}, n),
                toggleButton: $,
              };
            case 'right':
            default:
              return {
                chatContainer: xe({right: h, left: 'auto'}, r),
                toggleContainer: xe({right: h, left: 'auto'}, n),
                toggleButton: $,
              };
          }
        },
        Zq = function (t) {
          return ta(
            Yq,
            null,
            ta(Xq, xe({}, t, {canToggle: !0}), function (e) {
              var i = e.sandbox,
                r = e.isLoaded,
                o = e.isActive,
                n = e.isOpen,
                a = e.isTransitioning,
                $ = e.customIconUrl,
                s = e.iframeUrl,
                g = e.query,
                l = e.shouldDisplayNotifications,
                h = e.setIframeRef,
                u = e.onToggleOpen,
                O = t.hideToggleButton,
                c = t.iconVariant,
                d = t.renderToggleButton,
                p = t.position,
                X = void 0 === p ? 'right' : p,
                f = t.styles,
                v = void 0 === f ? {} : f;
              // m = BD(X),
              // _ = CD(v, m),
              // y = _.chatContainer,
              // C = void 0 === y ? {} : y,
              // T = _.toggleContainer,
              // x = void 0 === T ? {} : T,
              // F = _.toggleButton,
              // E = void 0 === F ? {} : F;
              return ta(
                Q.d.Fragment,
                null,
                ta(
                  je.iframe,
                  {
                    ref: h,
                    title: 'InhotelChatWindow Chat Widget Container',
                    className: 'Papercups-chatWindowContainer',
                    sandbox: i,
                    animate: o ? 'open' : 'closed',
                    initial: 'closed',
                    variants: {
                      closed: {opacity: 0, y: 4},
                      open: {opacity: 1, y: 0},
                    },
                    transition: {duration: 0.2, ease: 'easeIn'},
                    src: s + '?' + g,
                    style: o
                      ? C
                      : {pointerEvents: 'none', height: 0, minHeight: 0},
                    sx: {
                      border: 'none',
                      bg: 'background',
                      variant:
                        !n && l
                          ? 'styles.WidgetContainer.notifications'
                          : 'styles.WidgetContainer',
                    },
                  },
                  'Loading...'
                ),
                r &&
                  !O &&
                  ta(
                    je.div,
                    {
                      className: 'Papercups-toggleButtonContainer',
                      initial: !1,
                      style: xT,
                      animate: n ? 'open' : 'closed',
                      sx: {variant: 'styles.WidgetToggleContainer'},
                    },
                    d && 'function' == typeof d
                      ? d({isOpen: n, onToggleOpen: u, isDisabled: a})
                      : ta(Aj, {
                          style: E,
                          isDisabled: a,
                          isOpen: n,
                          customIconUrl: $,
                          iconVariant: c,
                          toggle: u,
                        })
                  )
              );
            })
          );
        };
      di.default = Zq;
      Ka();

      var ye = function () {},
        $q = window,
        ga = ($q.InhotelChatWindow && $q.InhotelChatWindow.config) || {},
        _q = ACCOUNT_ID,
        DD = ASSISTANT_INTERACTION_PROFILE_ID || ga.inbox,
        ar = ga.accountId,
        ED = ga.title,
        FD = ga.subtitle,
        GD = ga.newMessagePlaceholder,
        HD = ga.emailInputPlaceholder,
        ID = ga.newMessagesNotificationText,
        JD = ga.primaryColor,
        KD = ga.greeting,
        LD = ga.awayMessage,
        MD = ga.customer,
        PD = ga.customIconUrl,
        QD = ga.agentAvailableText,
        RD = ga.agentUnavailableText,
        SD = ga.showAgentAvailability,
        br = ga.iconVariant,
        TD = void 0 === br ? 'outlined' : br,
        cr = ga.hideToggleButton,
        UD = void 0 !== cr && cr,
        dr = ga.requireEmailUpfront,
        VD = void 0 !== dr && dr,
        er = ga.defaultIsOpen,
        WD = void 0 !== er && er,
        fr = ga.isOpenByDefault,
        XD = void 0 !== fr && fr,
        gr = ga.persistOpenState,
        YD = void 0 !== gr && gr,
        hr = ga.hideOutsideWorkingHours,
        ZD = void 0 !== hr && hr,
        ir = ga.popUpInitialMessage,
        $D = void 0 !== ir && ir,
        jr = ga.disableAnalyticsTracking,
        _D = void 0 !== jr && jr,
        kr = ga.debug,
        aE = void 0 !== kr && kr,
        lr = ga.position,
        bE = void 0 === lr ? 'right' : lr,
        mr = ga.styles,
        cE = void 0 === mr ? {} : mr,
        nr = ga.onChatLoaded,
        dE = void 0 === nr ? ye : nr,
        or = ga.onChatOpened,
        eE = void 0 === or ? ye : or,
        pr = ga.onChatClosed,
        fE = void 0 === pr ? ye : pr,
        qr = ga.onMessageSent,
        gE = void 0 === qr ? ye : qr,
        rr = ga.onMessageReceived,
        hE = void 0 === rr ? ye : rr,
        iE = _q || ar;
      if (!iE)
        throw new Error(
          'An account token is required to render the InhotelChatWindow chat widget!'
        );
      var sr = document.createElement('div');
      var jE = za(qs);
      (sr.id = 'InhotelChatWidget'),
        document.body.appendChild(sr),
        jE.d.render(
          Q.d.createElement(Zq, {
            token: _q,
            inbox: DD,
            accountId: ar,
            title: ED,
            subtitle: FD,
            newMessagePlaceholder: GD,
            emailInputPlaceholder: HD,
            newMessagesNotificationText: ID,
            primaryColor: JD,
            greeting: KD,
            awayMessage: LD,
            customer: MD,
            baseUrl: ND,
            iframeUrlOverride: OD,
            customIconUrl: PD,
            agentAvailableText: QD,
            agentUnavailableText: RD,
            showAgentAvailability: SD,
            requireEmailUpfront: VD,
            defaultIsOpen: WD,
            isOpenByDefault: XD,
            persistOpenState: YD,
            iconVariant: TD,
            hideToggleButton: UD,
            hideOutsideWorkingHours: ZD,
            popUpInitialMessage: $D,
            styles: cE,
            position: bE,
            debug: aE,
            disableAnalyticsTracking: _D,
            onChatLoaded: dE,
            onChatOpened: eE,
            onChatClosed: fE,
            onMessageSent: gE,
            onMessageReceived: hE,
          }),
          document.getElementById('InhotelChatWidget')
        );
    })();
  });
