'use strict';
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [3461],
  {
    4050: (me, Re, Se) => {
      Se(6876), Se(9719);
    },
    6876: () => {
      window.__Zone_disable_customElements = !0;
    },
    9719: function (me, Re, Se) {
      var Te,
        Fe,
        Oe =
          (this && this.__assign) ||
          function () {
            return (
              (Oe =
                Object.assign ||
                function (ne) {
                  for (var re, Ce = 1, Be = arguments.length; Ce < Be; Ce++)
                    for (var fe in (re = arguments[Ce]))
                      Object.prototype.hasOwnProperty.call(re, fe) &&
                        (ne[fe] = re[fe]);
                  return ne;
                }),
              Oe.apply(this, arguments)
            );
          };
      (Te = function () {
        var ne = globalThis;
        function re(r) {
          return (ne.__Zone_symbol_prefix || '__zone_symbol__') + r;
        }
        var fe = Object.getOwnPropertyDescriptor,
          Ve = Object.defineProperty,
          Ge = Object.getPrototypeOf,
          br = Object.create,
          Pr = Array.prototype.slice,
          Ue = 'addEventListener',
          xe = 'removeEventListener',
          ze = re(Ue),
          We = re(xe),
          le = 'true',
          he = 'false',
          De = re('');
        function Xe(r, e) {
          return Zone.current.wrap(r, e);
        }
        function Ye(r, e, u, t, s) {
          return Zone.current.scheduleMacroTask(r, e, u, t, s);
        }
        var V = re,
          Ne = typeof window < 'u',
          ke = Ne ? window : void 0,
          Q = (Ne && ke) || globalThis,
          wr = 'removeAttribute';
        function qe(r, e) {
          for (var u = r.length - 1; u >= 0; u--)
            'function' == typeof r[u] && (r[u] = Xe(r[u], e + '_' + u));
          return r;
        }
        function er(r) {
          return (
            !r ||
            (!1 !== r.writable &&
              !('function' == typeof r.get && typeof r.set > 'u'))
          );
        }
        var rr =
            typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope,
          Le =
            !('nw' in Q) &&
            typeof Q.process < 'u' &&
            '[object process]' === Q.process.toString(),
          Ke = !Le && !rr && !(!Ne || !ke.HTMLElement),
          tr =
            typeof Q.process < 'u' &&
            '[object process]' === Q.process.toString() &&
            !rr &&
            !(!Ne || !ke.HTMLElement),
          Me = {},
          Sr = V('enable_beforeunload'),
          nr = function (r) {
            if ((r = r || Q.event)) {
              var e = Me[r.type];
              e || (e = Me[r.type] = V('ON_PROPERTY' + r.type));
              var s,
                u = this || r.target || Q,
                t = u[e];
              return (
                Ke && u === ke && 'error' === r.type
                  ? !0 ===
                      (s =
                        t &&
                        t.call(
                          this,
                          r.message,
                          r.filename,
                          r.lineno,
                          r.colno,
                          r.error,
                        )) && r.preventDefault()
                  : ((s = t && t.apply(this, arguments)),
                    'beforeunload' === r.type && Q[Sr] && 'string' == typeof s
                      ? (r.returnValue = s)
                      : null != s && !s && r.preventDefault()),
                s
              );
            }
          };
        function ar(r, e, u) {
          var t = fe(r, e);
          if (
            (!t && u && fe(u, e) && (t = { enumerable: !0, configurable: !0 }),
            t && t.configurable)
          ) {
            var f = V('on' + e + 'patched');
            if (!r.hasOwnProperty(f) || !r[f]) {
              delete t.writable, delete t.value;
              var _ = t.get,
                T = t.set,
                m = e.slice(2),
                O = Me[m];
              O || (O = Me[m] = V('ON_PROPERTY' + m)),
                (t.set = function (y) {
                  var k = this;
                  !k && r === Q && (k = Q),
                    k &&
                      ('function' == typeof k[O] &&
                        k.removeEventListener(m, nr),
                      T && T.call(k, null),
                      (k[O] = y),
                      'function' == typeof y && k.addEventListener(m, nr, !1));
                }),
                (t.get = function () {
                  var y = this;
                  if ((!y && r === Q && (y = Q), !y)) return null;
                  var k = y[O];
                  if (k) return k;
                  if (_) {
                    var b = _.call(this);
                    if (b)
                      return (
                        t.set.call(this, b),
                        'function' == typeof y[wr] && y.removeAttribute(e),
                        b
                      );
                  }
                  return null;
                }),
                Ve(r, e, t),
                (r[f] = !0);
            }
          }
        }
        function or(r, e, u) {
          if (e) for (var t = 0; t < e.length; t++) ar(r, 'on' + e[t], u);
          else {
            var s = [];
            for (var f in r) 'on' == f.slice(0, 2) && s.push(f);
            for (var _ = 0; _ < s.length; _++) ar(r, s[_], u);
          }
        }
        var ue = V('originalInstance');
        function Ze(r) {
          var e = Q[r];
          if (e) {
            (Q[V(r)] = e),
              (Q[r] = function () {
                var s = qe(arguments, r);
                switch (s.length) {
                  case 0:
                    this[ue] = new e();
                    break;
                  case 1:
                    this[ue] = new e(s[0]);
                    break;
                  case 2:
                    this[ue] = new e(s[0], s[1]);
                    break;
                  case 3:
                    this[ue] = new e(s[0], s[1], s[2]);
                    break;
                  case 4:
                    this[ue] = new e(s[0], s[1], s[2], s[3]);
                    break;
                  default:
                    throw new Error('Arg list too long.');
                }
              }),
              de(Q[r], e);
            var t,
              u = new e(function () {});
            for (t in u)
              ('XMLHttpRequest' === r && 'responseBlob' === t) ||
                (function (s) {
                  'function' == typeof u[s]
                    ? (Q[r].prototype[s] = function () {
                        return this[ue][s].apply(this[ue], arguments);
                      })
                    : Ve(Q[r].prototype, s, {
                        set: function (f) {
                          'function' == typeof f
                            ? ((this[ue][s] = Xe(f, r + '.' + s)),
                              de(this[ue][s], f))
                            : (this[ue][s] = f);
                        },
                        get: function () {
                          return this[ue][s];
                        },
                      });
                })(t);
            for (t in e)
              'prototype' !== t && e.hasOwnProperty(t) && (Q[r][t] = e[t]);
          }
        }
        function ve(r, e, u) {
          for (var t = r; t && !t.hasOwnProperty(e); ) t = Ge(t);
          !t && r[e] && (t = r);
          var s = V(e),
            f = null;
          if (
            t &&
            (!(f = t[s]) || !t.hasOwnProperty(s)) &&
            ((f = t[s] = t[e]), er(t && fe(t, e)))
          ) {
            var T = u(f, s, e);
            (t[e] = function () {
              return T(this, arguments);
            }),
              de(t[e], f);
          }
          return f;
        }
        function Or(r, e, u) {
          var t = null;
          function s(f) {
            var _ = f.data;
            return (
              (_.args[_.cbIdx] = function () {
                f.invoke.apply(this, arguments);
              }),
              t.apply(_.target, _.args),
              f
            );
          }
          t = ve(r, e, function (f) {
            return function (_, T) {
              var m = u(_, T);
              return m.cbIdx >= 0 && 'function' == typeof T[m.cbIdx]
                ? Ye(m.name, T[m.cbIdx], m, s)
                : f.apply(_, T);
            };
          });
        }
        function de(r, e) {
          r[V('OriginalDelegate')] = e;
        }
        var ir = !1,
          Je = !1;
        function Dr() {
          if (ir) return Je;
          ir = !0;
          try {
            var r = ke.navigator.userAgent;
            (-1 !== r.indexOf('MSIE ') ||
              -1 !== r.indexOf('Trident/') ||
              -1 !== r.indexOf('Edge/')) &&
              (Je = !0);
          } catch {}
          return Je;
        }
        function ur(r) {
          return 'function' == typeof r;
        }
        function sr(r) {
          return 'number' == typeof r;
        }
        var be = !1;
        if (typeof window < 'u')
          try {
            var Ae = Object.defineProperty({}, 'passive', {
              get: function () {
                be = !0;
              },
            });
            window.addEventListener('test', Ae, Ae),
              window.removeEventListener('test', Ae, Ae);
          } catch {
            be = !1;
          }
        var Zr = { useG: !0 },
          ie = {},
          cr = {},
          fr = new RegExp('^' + De + '(\\w+)(true|false)$'),
          lr = V('propagationStopped');
        function hr(r, e) {
          var u = (e ? e(r) : r) + he,
            t = (e ? e(r) : r) + le,
            s = De + u,
            f = De + t;
          (ie[r] = {}), (ie[r][he] = s), (ie[r][le] = f);
        }
        function Ir(r, e, u, t) {
          var s = (t && t.add) || Ue,
            f = (t && t.rm) || xe,
            _ = (t && t.listeners) || 'eventListeners',
            T = (t && t.rmAll) || 'removeAllListeners',
            m = V(s),
            O = '.' + s + ':',
            y = 'prependListener',
            k = '.' + y + ':',
            b = function (S, E, Y) {
              if (!S.isRemoved) {
                var X,
                  U = S.callback;
                'object' == typeof U &&
                  U.handleEvent &&
                  ((S.callback = function (G) {
                    return U.handleEvent(G);
                  }),
                  (S.originalDelegate = U));
                try {
                  S.invoke(S, E, [Y]);
                } catch (G) {
                  X = G;
                }
                var F = S.options;
                return (
                  F &&
                    'object' == typeof F &&
                    F.once &&
                    E[f].call(
                      E,
                      Y.type,
                      S.originalDelegate ? S.originalDelegate : S.callback,
                      F,
                    ),
                  X
                );
              }
            };
          function M(S, E, Y) {
            if ((E = E || r.event)) {
              var U = S || E.target || r,
                X = U[ie[E.type][Y ? le : he]];
              if (X) {
                var F = [];
                if (1 === X.length) (R = b(X[0], U, E)) && F.push(R);
                else
                  for (
                    var G = X.slice(), C = 0;
                    C < G.length && (!E || !0 !== E[lr]);
                    C++
                  ) {
                    var R;
                    (R = b(G[C], U, E)) && F.push(R);
                  }
                if (1 === F.length) throw F[0];
                var ee = function (p) {
                  var B = F[p];
                  e.nativeScheduleMicroTask(function () {
                    throw B;
                  });
                };
                for (C = 0; C < F.length; C++) ee(C);
              }
            }
          }
          var J = function (S) {
              return M(this, S, !1);
            },
            W = function (S) {
              return M(this, S, !0);
            };
          function ae(S, E) {
            if (!S) return !1;
            var Y = !0;
            E && void 0 !== E.useG && (Y = E.useG);
            var U = E && E.vh,
              X = !0;
            E && void 0 !== E.chkDup && (X = E.chkDup);
            var F = !1;
            E && void 0 !== E.rt && (F = E.rt);
            for (var R = S; R && !R.hasOwnProperty(s); ) R = Ge(R);
            if ((!R && S[s] && (R = S), !R || R[m])) return !1;
            var H,
              G = E && E.eventNameToString,
              C = {},
              ee = (R[m] = R[s]),
              p = (R[V(f)] = R[f]),
              B = (R[V(_)] = R[_]),
              D = (R[V(T)] = R[T]);
            E && E.prepend && (H = R[V(E.prepend)] = R[E.prepend]);
            var q = Y
                ? function (i) {
                    if (!C.isExisting)
                      return ee.call(
                        C.target,
                        C.eventName,
                        C.capture ? W : J,
                        C.options,
                      );
                  }
                : function (i) {
                    return ee.call(C.target, C.eventName, i.invoke, C.options);
                  },
              ce = Y
                ? function (i) {
                    if (!i.isRemoved) {
                      var d = ie[i.eventName],
                        w = void 0;
                      d && (w = d[i.capture ? le : he]);
                      var P = w && i.target[w];
                      if (P)
                        for (var Z = 0; Z < P.length; Z++)
                          if (P[Z] === i) {
                            P.splice(Z, 1),
                              (i.isRemoved = !0),
                              i.removeAbortListener &&
                                (i.removeAbortListener(),
                                (i.removeAbortListener = null)),
                              0 === P.length &&
                                ((i.allRemoved = !0), (i.target[w] = null));
                            break;
                          }
                    }
                    if (i.allRemoved)
                      return p.call(
                        i.target,
                        i.eventName,
                        i.capture ? W : J,
                        i.options,
                      );
                  }
                : function (i) {
                    return p.call(i.target, i.eventName, i.invoke, i.options);
                  },
              _e =
                E && E.diff
                  ? E.diff
                  : function (i, d) {
                      var w = typeof d;
                      return (
                        ('function' === w && i.callback === d) ||
                        ('object' === w && i.originalDelegate === d)
                      );
                    },
              ye = Zone[V('UNPATCHED_EVENTS')],
              c = r[V('PASSIVE_EVENTS')];
            var h = function (i, d, w, P, Z, I) {
              return (
                void 0 === Z && (Z = !1),
                void 0 === I && (I = !1),
                function () {
                  var L = this || r,
                    j = arguments[0];
                  E && E.transferEventName && (j = E.transferEventName(j));
                  var x = arguments[1];
                  if (!x) return i.apply(this, arguments);
                  if (Le && 'uncaughtException' === j)
                    return i.apply(this, arguments);
                  var te = !1;
                  if ('function' != typeof x) {
                    if (!x.handleEvent) return i.apply(this, arguments);
                    te = !0;
                  }
                  if (!U || U(i, x, L, arguments)) {
                    var Ee = be && !!c && -1 !== c.indexOf(j),
                      K = (function l(i) {
                        if ('object' == typeof i && null !== i) {
                          var d = Oe({}, i);
                          return i.signal && (d.signal = i.signal), d;
                        }
                        return i;
                      })(
                        (function v(i, d) {
                          return !be && 'object' == typeof i && i
                            ? !!i.capture
                            : be && d
                              ? 'boolean' == typeof i
                                ? { capture: i, passive: !0 }
                                : i
                                  ? 'object' == typeof i && !1 !== i.passive
                                    ? Oe(Oe({}, i), { passive: !0 })
                                    : i
                                  : { passive: !0 }
                              : i;
                        })(arguments[2], Ee),
                      ),
                      $ = null == K ? void 0 : K.signal;
                    if (null == $ || !$.aborted) {
                      if (ye)
                        for (var z = 0; z < ye.length; z++)
                          if (j === ye[z])
                            return Ee
                              ? i.call(L, j, x, K)
                              : i.apply(this, arguments);
                      var ge = !!K && ('boolean' == typeof K || K.capture),
                        Tr = !(!K || 'object' != typeof K) && K.once,
                        zr = Zone.current,
                        $e = ie[j];
                      $e || (hr(j, G), ($e = ie[j]));
                      var yr = $e[ge ? le : he],
                        we = L[yr],
                        pr = !1;
                      if (we) {
                        if (((pr = !0), X))
                          for (z = 0; z < we.length; z++)
                            if (_e(we[z], x)) return;
                      } else we = L[yr] = [];
                      var He,
                        gr = L.constructor.name,
                        mr = cr[gr];
                      mr && (He = mr[j]),
                        He || (He = gr + d + (G ? G(j) : j)),
                        (C.options = K),
                        Tr && (C.options.once = !1),
                        (C.target = L),
                        (C.capture = ge),
                        (C.eventName = j),
                        (C.isExisting = pr);
                      var Ie = Y ? Zr : void 0;
                      Ie && (Ie.taskData = C), $ && (C.options.signal = void 0);
                      var se = zr.scheduleEventTask(He, x, Ie, w, P);
                      if ($) {
                        C.options.signal = $;
                        var kr = function () {
                          return se.zone.cancelTask(se);
                        };
                        i.call($, 'abort', kr, { once: !0 }),
                          (se.removeAbortListener = function () {
                            return $.removeEventListener('abort', kr);
                          });
                      }
                      if (
                        ((C.target = null),
                        Ie && (Ie.taskData = null),
                        Tr && (C.options.once = !0),
                        (!be && 'boolean' == typeof se.options) ||
                          (se.options = K),
                        (se.target = L),
                        (se.capture = ge),
                        (se.eventName = j),
                        te && (se.originalDelegate = x),
                        I ? we.unshift(se) : we.push(se),
                        Z)
                      )
                        return L;
                    }
                  }
                }
              );
            };
            return (
              (R[s] = h(ee, O, q, ce, F)),
              H &&
                (R[y] = h(
                  H,
                  k,
                  function (i) {
                    return H.call(C.target, C.eventName, i.invoke, C.options);
                  },
                  ce,
                  F,
                  !0,
                )),
              (R[f] = function () {
                var i = this || r,
                  d = arguments[0];
                E && E.transferEventName && (d = E.transferEventName(d));
                var w = arguments[2],
                  P = !!w && ('boolean' == typeof w || w.capture),
                  Z = arguments[1];
                if (!Z) return p.apply(this, arguments);
                if (!U || U(p, Z, i, arguments)) {
                  var L,
                    I = ie[d];
                  I && (L = I[P ? le : he]);
                  var j = L && i[L];
                  if (j)
                    for (var x = 0; x < j.length; x++) {
                      var te = j[x];
                      if (_e(te, Z))
                        return (
                          j.splice(x, 1),
                          (te.isRemoved = !0),
                          0 !== j.length ||
                            ((te.allRemoved = !0),
                            (i[L] = null),
                            P || 'string' != typeof d) ||
                            (i[De + 'ON_PROPERTY' + d] = null),
                          te.zone.cancelTask(te),
                          F ? i : void 0
                        );
                    }
                  return p.apply(this, arguments);
                }
              }),
              (R[_] = function () {
                var i = this || r,
                  d = arguments[0];
                E && E.transferEventName && (d = E.transferEventName(d));
                for (
                  var w = [], P = vr(i, G ? G(d) : d), Z = 0;
                  Z < P.length;
                  Z++
                ) {
                  var I = P[Z];
                  w.push(I.originalDelegate ? I.originalDelegate : I.callback);
                }
                return w;
              }),
              (R[T] = function () {
                var i = this || r,
                  d = arguments[0];
                if (d) {
                  E && E.transferEventName && (d = E.transferEventName(d));
                  var j = ie[d];
                  if (j) {
                    var Ee = i[j[he]],
                      K = i[j[le]];
                    if (Ee)
                      for (var $ = Ee.slice(), P = 0; P < $.length; P++)
                        this[f].call(
                          this,
                          d,
                          (z = $[P]).originalDelegate
                            ? z.originalDelegate
                            : z.callback,
                          z.options,
                        );
                    if (K)
                      for ($ = K.slice(), P = 0; P < $.length; P++) {
                        var z;
                        this[f].call(
                          this,
                          d,
                          (z = $[P]).originalDelegate
                            ? z.originalDelegate
                            : z.callback,
                          z.options,
                        );
                      }
                  }
                } else {
                  var w = Object.keys(i);
                  for (P = 0; P < w.length; P++) {
                    var I = fr.exec(w[P]),
                      L = I && I[1];
                    L && 'removeListener' !== L && this[T].call(this, L);
                  }
                  this[T].call(this, 'removeListener');
                }
                if (F) return this;
              }),
              de(R[s], ee),
              de(R[f], p),
              D && de(R[T], D),
              B && de(R[_], B),
              !0
            );
          }
          for (var oe = [], N = 0; N < u.length; N++) oe[N] = ae(u[N], t);
          return oe;
        }
        function vr(r, e) {
          if (!e) {
            var u = [];
            for (var t in r) {
              var s = fr.exec(t),
                f = s && s[1];
              if (f && (!e || f === e)) {
                var _ = r[t];
                if (_) for (var T = 0; T < _.length; T++) u.push(_[T]);
              }
            }
            return u;
          }
          var m = ie[e];
          m || (hr(e), (m = ie[e]));
          var O = r[m[he]],
            y = r[m[le]];
          return O ? (y ? O.concat(y) : O.slice()) : y ? y.slice() : [];
        }
        function Nr(r, e) {
          var u = r.Event;
          u &&
            u.prototype &&
            e.patchMethod(
              u.prototype,
              'stopImmediatePropagation',
              function (t) {
                return function (s, f) {
                  (s[lr] = !0), t && t.apply(s, f);
                };
              },
            );
        }
        var je = V('zoneTask');
        function Pe(r, e, u, t) {
          var s = null,
            f = null;
          u += t;
          var _ = {};
          function T(O) {
            var y = O.data;
            y.args[0] = function () {
              return O.invoke.apply(this, arguments);
            };
            var k = s.apply(r, y.args);
            return (
              sr(k)
                ? (y.handleId = k)
                : ((y.handle = k), (y.isRefreshable = ur(k.refresh))),
              O
            );
          }
          function m(O) {
            var y = O.data,
              k = y.handle;
            return f.call(r, null != k ? k : y.handleId);
          }
          (s = ve(r, (e += t), function (O) {
            return function (y, k) {
              var b;
              if (ur(k[0])) {
                var M = {
                    isRefreshable: !1,
                    isPeriodic: 'Interval' === t,
                    delay:
                      'Timeout' === t || 'Interval' === t ? k[1] || 0 : void 0,
                    args: k,
                  },
                  J = k[0];
                k[0] = function () {
                  try {
                    return J.apply(this, arguments);
                  } finally {
                    var X = M.handle,
                      F = M.handleId;
                    !M.isPeriodic &&
                      !M.isRefreshable &&
                      (F ? delete _[F] : X && (X[je] = null));
                  }
                };
                var W = Ye(e, k[0], M, T, m);
                if (!W) return W;
                var ae = W.data,
                  oe = ae.handleId,
                  N = ae.handle,
                  S = ae.isRefreshable,
                  E = ae.isPeriodic;
                if (oe) _[oe] = W;
                else if (N && ((N[je] = W), S && !E)) {
                  var Y = N.refresh;
                  N.refresh = function () {
                    var U = W.zone,
                      X = W.state;
                    return (
                      'notScheduled' === X
                        ? ((W._state = 'scheduled'), U._updateTaskCount(W, 1))
                        : 'running' === X && (W._state = 'scheduling'),
                      Y.call(this)
                    );
                  };
                }
                return null !== (b = null != N ? N : oe) && void 0 !== b
                  ? b
                  : W;
              }
              return O.apply(r, k);
            };
          })),
            (f = ve(r, u, function (O) {
              return function (y, k) {
                var M,
                  b = k[0];
                sr(b)
                  ? ((M = _[b]), delete _[b])
                  : (M = null == b ? void 0 : b[je])
                    ? (b[je] = null)
                    : (M = b),
                  null != M && M.type
                    ? M.cancelFn && M.zone.cancelTask(M)
                    : O.apply(r, k);
              };
            }));
        }
        function dr(r, e, u) {
          if (!u || 0 === u.length) return e;
          var t = u.filter(function (f) {
            return f.target === r;
          });
          if (!t || 0 === t.length) return e;
          var s = t[0].ignoreProperties;
          return e.filter(function (f) {
            return -1 === s.indexOf(f);
          });
        }
        function _r(r, e, u, t) {
          r && or(r, dr(r, e, u), t);
        }
        function Qe(r) {
          return Object.getOwnPropertyNames(r)
            .filter(function (e) {
              return e.startsWith('on') && e.length > 2;
            })
            .map(function (e) {
              return e.substring(2);
            });
        }
        function Hr(r, e) {
          if ((!Le || tr) && !Zone[r.symbol('patchEvents')]) {
            var u = e.__Zone_ignore_on_properties,
              t = [];
            if (Ke) {
              var s = window;
              t = t.concat([
                'Document',
                'SVGElement',
                'Element',
                'HTMLElement',
                'HTMLBodyElement',
                'HTMLMediaElement',
                'HTMLFrameSetElement',
                'HTMLFrameElement',
                'HTMLIFrameElement',
                'HTMLMarqueeElement',
                'Worker',
              ]);
              var f = (function Cr() {
                try {
                  var r = ke.navigator.userAgent;
                  if (-1 !== r.indexOf('MSIE ') || -1 !== r.indexOf('Trident/'))
                    return !0;
                } catch {}
                return !1;
              })()
                ? [{ target: s, ignoreProperties: ['error'] }]
                : [];
              _r(s, Qe(s), u && u.concat(f), Ge(s));
            }
            t = t.concat([
              'XMLHttpRequest',
              'XMLHttpRequestEventTarget',
              'IDBIndex',
              'IDBRequest',
              'IDBOpenDBRequest',
              'IDBDatabase',
              'IDBTransaction',
              'IDBCursor',
              'WebSocket',
            ]);
            for (var _ = 0; _ < t.length; _++) {
              var T = e[t[_]];
              T && T.prototype && _r(T.prototype, Qe(T.prototype), u);
            }
          }
        }
        function Br(r) {
          r.__load_patch('ZoneAwarePromise', function (e, u, t) {
            var s = Object.getOwnPropertyDescriptor,
              f = Object.defineProperty;
            var T = t.symbol,
              m = [],
              O = !1 !== e[T('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')],
              y = T('Promise'),
              k = T('then'),
              b = '__creationTrace__';
            (t.onUnhandledError = function (c) {
              if (t.showUncaughtError()) {
                var l = c && c.rejection;
                l
                  ? console.error(
                      'Unhandled Promise rejection:',
                      l instanceof Error ? l.message : l,
                      '; Zone:',
                      c.zone.name,
                      '; Task:',
                      c.task && c.task.source,
                      '; Value:',
                      l,
                      l instanceof Error ? l.stack : void 0,
                    )
                  : console.error(c);
              }
            }),
              (t.microtaskDrainDone = function () {
                for (
                  var c = function () {
                    var l = m.shift();
                    try {
                      l.zone.runGuarded(function () {
                        throw l.throwOriginal ? l.rejection : l;
                      });
                    } catch (h) {
                      !(function J(c) {
                        t.onUnhandledError(c);
                        try {
                          var l = u[M];
                          'function' == typeof l && l.call(this, c);
                        } catch {}
                      })(h);
                    }
                  };
                  m.length;

                )
                  c();
              });
            var M = T('unhandledPromiseRejectionHandler');
            function W(c) {
              return c && c.then;
            }
            function ae(c) {
              return c;
            }
            function oe(c) {
              return q.reject(c);
            }
            var N = T('state'),
              S = T('value'),
              E = T('finally'),
              Y = T('parentPromiseValue'),
              U = T('parentPromiseState'),
              X = 'Promise.then',
              F = null,
              R = !0,
              G = !1,
              C = 0;
            function ee(c, l) {
              return function (h) {
                try {
                  H(c, l, h);
                } catch (i) {
                  H(c, !1, i);
                }
              };
            }
            var p = function () {
                var c = !1;
                return function (h) {
                  return function () {
                    c || ((c = !0), h.apply(null, arguments));
                  };
                };
              },
              B = 'Promise resolved with itself',
              D = T('currentTaskTrace');
            function H(c, l, h) {
              var i = p();
              if (c === h) throw new TypeError(B);
              if (c[N] === F) {
                var d = null;
                try {
                  ('object' == typeof h || 'function' == typeof h) &&
                    (d = h && h.then);
                } catch (L) {
                  return (
                    i(function () {
                      H(c, !1, L);
                    })(),
                    c
                  );
                }
                if (
                  l !== G &&
                  h instanceof q &&
                  h.hasOwnProperty(N) &&
                  h.hasOwnProperty(S) &&
                  h[N] !== F
                )
                  a(h), H(c, h[N], h[S]);
                else if (l !== G && 'function' == typeof d)
                  try {
                    d.call(h, i(ee(c, l)), i(ee(c, !1)));
                  } catch (L) {
                    i(function () {
                      H(c, !1, L);
                    })();
                  }
                else {
                  c[N] = l;
                  var w = c[S];
                  if (
                    ((c[S] = h),
                    c[E] === E && l === R && ((c[N] = c[U]), (c[S] = c[Y])),
                    l === G && h instanceof Error)
                  ) {
                    var P =
                      u.currentTask &&
                      u.currentTask.data &&
                      u.currentTask.data[b];
                    P &&
                      f(h, D, {
                        configurable: !0,
                        enumerable: !1,
                        writable: !0,
                        value: P,
                      });
                  }
                  for (var Z = 0; Z < w.length; )
                    n(c, w[Z++], w[Z++], w[Z++], w[Z++]);
                  if (0 == w.length && l == G) {
                    c[N] = C;
                    var I = h;
                    try {
                      throw new Error(
                        'Uncaught (in promise): ' +
                          (function _(c) {
                            return c && c.toString === Object.prototype.toString
                              ? ((c.constructor && c.constructor.name) || '') +
                                  ': ' +
                                  JSON.stringify(c)
                              : c
                                ? c.toString()
                                : Object.prototype.toString.call(c);
                          })(h) +
                          (h && h.stack ? '\n' + h.stack : ''),
                      );
                    } catch (L) {
                      I = L;
                    }
                    O && (I.throwOriginal = !0),
                      (I.rejection = h),
                      (I.promise = c),
                      (I.zone = u.current),
                      (I.task = u.currentTask),
                      m.push(I),
                      t.scheduleMicroTask();
                  }
                }
              }
              return c;
            }
            var v = T('rejectionHandledHandler');
            function a(c) {
              if (c[N] === C) {
                try {
                  var l = u[v];
                  l &&
                    'function' == typeof l &&
                    l.call(this, { rejection: c[S], promise: c });
                } catch {}
                c[N] = G;
                for (var h = 0; h < m.length; h++)
                  c === m[h].promise && m.splice(h, 1);
              }
            }
            function n(c, l, h, i, d) {
              a(c);
              var w = c[N],
                P = w
                  ? 'function' == typeof i
                    ? i
                    : ae
                  : 'function' == typeof d
                    ? d
                    : oe;
              l.scheduleMicroTask(
                X,
                function () {
                  try {
                    var Z = c[S],
                      I = !!h && E === h[E];
                    I && ((h[Y] = Z), (h[U] = w));
                    var L = l.run(
                      P,
                      void 0,
                      I && P !== oe && P !== ae ? [] : [Z],
                    );
                    H(h, !0, L);
                  } catch (j) {
                    H(h, !1, j);
                  }
                },
                h,
              );
            }
            var g = function () {},
              A = e.AggregateError,
              q = (function () {
                function c(l) {
                  var h = this;
                  if (!(h instanceof c))
                    throw new Error('Must be an instanceof Promise.');
                  (h[N] = F), (h[S] = []);
                  try {
                    var i = p();
                    l && l(i(ee(h, R)), i(ee(h, G)));
                  } catch (d) {
                    H(h, !1, d);
                  }
                }
                return (
                  (c.toString = function () {
                    return 'function ZoneAwarePromise() { [native code] }';
                  }),
                  (c.resolve = function (l) {
                    return l instanceof c ? l : H(new this(null), R, l);
                  }),
                  (c.reject = function (l) {
                    return H(new this(null), G, l);
                  }),
                  (c.withResolvers = function () {
                    var l = {};
                    return (
                      (l.promise = new c(function (h, i) {
                        (l.resolve = h), (l.reject = i);
                      })),
                      l
                    );
                  }),
                  (c.any = function (l) {
                    if (!l || 'function' != typeof l[Symbol.iterator])
                      return Promise.reject(
                        new A([], 'All promises were rejected'),
                      );
                    var h = [],
                      i = 0;
                    try {
                      for (var d = 0, w = l; d < w.length; d++)
                        i++, h.push(c.resolve(w[d]));
                    } catch {
                      return Promise.reject(
                        new A([], 'All promises were rejected'),
                      );
                    }
                    if (0 === i)
                      return Promise.reject(
                        new A([], 'All promises were rejected'),
                      );
                    var Z = !1,
                      I = [];
                    return new c(function (L, j) {
                      for (var x = 0; x < h.length; x++)
                        h[x].then(
                          function (te) {
                            Z || ((Z = !0), L(te));
                          },
                          function (te) {
                            I.push(te),
                              0 == --i &&
                                ((Z = !0),
                                j(new A(I, 'All promises were rejected')));
                          },
                        );
                    });
                  }),
                  (c.race = function (l) {
                    var h,
                      i,
                      d = new this(function (j, x) {
                        (h = j), (i = x);
                      });
                    function w(j) {
                      h(j);
                    }
                    function P(j) {
                      i(j);
                    }
                    for (var Z = 0, I = l; Z < I.length; Z++) {
                      var L = I[Z];
                      W(L) || (L = this.resolve(L)), L.then(w, P);
                    }
                    return d;
                  }),
                  (c.all = function (l) {
                    return c.allWithCallback(l);
                  }),
                  (c.allSettled = function (l) {
                    return (
                      this && this.prototype instanceof c ? this : c
                    ).allWithCallback(l, {
                      thenCallback: function (i) {
                        return { status: 'fulfilled', value: i };
                      },
                      errorCallback: function (i) {
                        return { status: 'rejected', reason: i };
                      },
                    });
                  }),
                  (c.allWithCallback = function (l, h) {
                    for (
                      var i,
                        d,
                        w = new this(function (K, $) {
                          (i = K), (d = $);
                        }),
                        P = 2,
                        Z = 0,
                        I = [],
                        L = function (K) {
                          W(K) || (K = j.resolve(K));
                          var $ = Z;
                          try {
                            K.then(
                              function (z) {
                                (I[$] = h ? h.thenCallback(z) : z),
                                  0 == --P && i(I);
                              },
                              function (z) {
                                h
                                  ? ((I[$] = h.errorCallback(z)),
                                    0 == --P && i(I))
                                  : d(z);
                              },
                            );
                          } catch (z) {
                            d(z);
                          }
                          P++, Z++;
                        },
                        j = this,
                        x = 0,
                        te = l;
                      x < te.length;
                      x++
                    )
                      L(te[x]);
                    return 0 == (P -= 2) && i(I), w;
                  }),
                  Object.defineProperty(c.prototype, Symbol.toStringTag, {
                    get: function () {
                      return 'Promise';
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  Object.defineProperty(c.prototype, Symbol.species, {
                    get: function () {
                      return c;
                    },
                    enumerable: !1,
                    configurable: !0,
                  }),
                  (c.prototype.then = function (l, h) {
                    var i,
                      d =
                        null === (i = this.constructor) || void 0 === i
                          ? void 0
                          : i[Symbol.species];
                    (!d || 'function' != typeof d) &&
                      (d = this.constructor || c);
                    var w = new d(g),
                      P = u.current;
                    return (
                      this[N] == F
                        ? this[S].push(P, w, l, h)
                        : n(this, P, w, l, h),
                      w
                    );
                  }),
                  (c.prototype.catch = function (l) {
                    return this.then(null, l);
                  }),
                  (c.prototype.finally = function (l) {
                    var h,
                      i =
                        null === (h = this.constructor) || void 0 === h
                          ? void 0
                          : h[Symbol.species];
                    (!i || 'function' != typeof i) && (i = c);
                    var d = new i(g);
                    d[E] = E;
                    var w = u.current;
                    return (
                      this[N] == F
                        ? this[S].push(w, d, l, l)
                        : n(this, w, d, l, l),
                      d
                    );
                  }),
                  c
                );
              })();
            (q.resolve = q.resolve),
              (q.reject = q.reject),
              (q.race = q.race),
              (q.all = q.all);
            var ce = (e[y] = e.Promise);
            e.Promise = q;
            var pe = T('thenPatched');
            function _e(c) {
              var l = c.prototype,
                h = s(l, 'then');
              if (!h || (!1 !== h.writable && h.configurable)) {
                var i = l.then;
                (l[k] = i),
                  (c.prototype.then = function (d, w) {
                    var P = this;
                    return new q(function (I, L) {
                      i.call(P, I, L);
                    }).then(d, w);
                  }),
                  (c[pe] = !0);
              }
            }
            return (
              (t.patchThen = _e),
              ce &&
                (_e(ce),
                ve(e, 'fetch', function (c) {
                  return (function ye(c) {
                    return function (l, h) {
                      var i = c.apply(l, h);
                      if (i instanceof q) return i;
                      var d = i.constructor;
                      return d[pe] || _e(d), i;
                    };
                  })(c);
                })),
              (Promise[u.__symbol__('uncaughtPromiseErrors')] = m),
              q
            );
          });
        }
        function Gr(r, e, u, t, s) {
          var f = Zone.__symbol__(t);
          if (!e[f]) {
            var _ = (e[f] = e[t]);
            (e[t] = function (T, m, O) {
              return (
                m &&
                  m.prototype &&
                  s.forEach(function (y) {
                    var k = ''.concat(u, '.').concat(t, '::') + y,
                      b = m.prototype;
                    try {
                      if (b.hasOwnProperty(y)) {
                        var M = r.ObjectGetOwnPropertyDescriptor(b, y);
                        M && M.value
                          ? ((M.value = r.wrapWithCurrentZone(M.value, k)),
                            r._redefineProperty(m.prototype, y, M))
                          : b[y] && (b[y] = r.wrapWithCurrentZone(b[y], k));
                      } else b[y] && (b[y] = r.wrapWithCurrentZone(b[y], k));
                    } catch {}
                  }),
                _.call(e, T, m, O)
              );
            }),
              r.attachOriginToPatched(e[t], _);
          }
        }
        var Er = (function Be() {
          var r,
            e = globalThis,
            u = !0 === e[re('forceDuplicateZoneCheck')];
          if (e.Zone && (u || 'function' != typeof e.Zone.__symbol__))
            throw new Error('Zone already loaded.');
          return (
            (null !== (r = e.Zone) && void 0 !== r) ||
              (e.Zone = (function Ce() {
                var r,
                  e = ne.performance;
                function u(v) {
                  e && e.mark && e.mark(v);
                }
                function t(v, a) {
                  e && e.measure && e.measure(v, a);
                }
                u('Zone');
                var s = (function () {
                  function v(a, n) {
                    (this._parent = a),
                      (this._name = n ? n.name || 'unnamed' : '<root>'),
                      (this._properties = (n && n.properties) || {}),
                      (this._zoneDelegate = new _(
                        this,
                        this._parent && this._parent._zoneDelegate,
                        n,
                      ));
                  }
                  return (
                    (v.assertZonePatched = function () {
                      if (ne.Promise !== C.ZoneAwarePromise)
                        throw new Error(
                          'Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)',
                        );
                    }),
                    Object.defineProperty(v, 'root', {
                      get: function () {
                        for (var a = r.current; a.parent; ) a = a.parent;
                        return a;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(v, 'current', {
                      get: function () {
                        return p.zone;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(v, 'currentTask', {
                      get: function () {
                        return B;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (v.__load_patch = function (a, n, o) {
                      if ((void 0 === o && (o = !1), C.hasOwnProperty(a))) {
                        var g = !0 === ne[re('forceDuplicateZoneCheck')];
                        if (!o && g) throw Error('Already loaded patch: ' + a);
                      } else if (!ne['__Zone_disable_' + a]) {
                        var A = 'Zone:' + a;
                        u(A), (C[a] = n(ne, r, ee)), t(A, A);
                      }
                    }),
                    Object.defineProperty(v.prototype, 'parent', {
                      get: function () {
                        return this._parent;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(v.prototype, 'name', {
                      get: function () {
                        return this._name;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (v.prototype.get = function (a) {
                      var n = this.getZoneWith(a);
                      if (n) return n._properties[a];
                    }),
                    (v.prototype.getZoneWith = function (a) {
                      for (var n = this; n; ) {
                        if (n._properties.hasOwnProperty(a)) return n;
                        n = n._parent;
                      }
                      return null;
                    }),
                    (v.prototype.fork = function (a) {
                      if (!a) throw new Error('ZoneSpec required!');
                      return this._zoneDelegate.fork(this, a);
                    }),
                    (v.prototype.wrap = function (a, n) {
                      if ('function' != typeof a)
                        throw new Error('Expecting function got: ' + a);
                      var o = this._zoneDelegate.intercept(this, a, n),
                        g = this;
                      return function () {
                        return g.runGuarded(o, this, arguments, n);
                      };
                    }),
                    (v.prototype.run = function (a, n, o, g) {
                      p = { parent: p, zone: this };
                      try {
                        return this._zoneDelegate.invoke(this, a, n, o, g);
                      } finally {
                        p = p.parent;
                      }
                    }),
                    (v.prototype.runGuarded = function (a, n, o, g) {
                      void 0 === n && (n = null),
                        (p = { parent: p, zone: this });
                      try {
                        try {
                          return this._zoneDelegate.invoke(this, a, n, o, g);
                        } catch (A) {
                          if (this._zoneDelegate.handleError(this, A)) throw A;
                        }
                      } finally {
                        p = p.parent;
                      }
                    }),
                    (v.prototype.runTask = function (a, n, o) {
                      if (a.zone != this)
                        throw new Error(
                          'A task can only be run in the zone of creation! (Creation: ' +
                            (a.zone || oe).name +
                            '; Execution: ' +
                            this.name +
                            ')',
                        );
                      var g = a,
                        A = a.type,
                        q = a.data,
                        ce = void 0 === q ? {} : q,
                        pe = ce.isPeriodic,
                        _e = void 0 !== pe && pe,
                        ye = ce.isRefreshable,
                        c = void 0 !== ye && ye;
                      if (a.state !== N || (A !== G && A !== R)) {
                        var l = a.state != Y;
                        l && g._transitionTo(Y, E);
                        var h = B;
                        (B = g), (p = { parent: p, zone: this });
                        try {
                          A == R &&
                            a.data &&
                            !_e &&
                            !c &&
                            (a.cancelFn = void 0);
                          try {
                            return this._zoneDelegate.invokeTask(this, g, n, o);
                          } catch (w) {
                            if (this._zoneDelegate.handleError(this, w))
                              throw w;
                          }
                        } finally {
                          var i = a.state;
                          if (i !== N && i !== X)
                            if (A == G || _e || (c && i === S))
                              l && g._transitionTo(E, Y, S);
                            else {
                              var d = g._zoneDelegates;
                              this._updateTaskCount(g, -1),
                                l && g._transitionTo(N, Y, N),
                                c && (g._zoneDelegates = d);
                            }
                          (p = p.parent), (B = h);
                        }
                      }
                    }),
                    (v.prototype.scheduleTask = function (a) {
                      if (a.zone && a.zone !== this)
                        for (var n = this; n; ) {
                          if (n === a.zone)
                            throw Error(
                              'can not reschedule task to '
                                .concat(
                                  this.name,
                                  ' which is descendants of the original zone ',
                                )
                                .concat(a.zone.name),
                            );
                          n = n.parent;
                        }
                      a._transitionTo(S, N);
                      var o = [];
                      (a._zoneDelegates = o), (a._zone = this);
                      try {
                        a = this._zoneDelegate.scheduleTask(this, a);
                      } catch (g) {
                        throw (
                          (a._transitionTo(X, S, N),
                          this._zoneDelegate.handleError(this, g),
                          g)
                        );
                      }
                      return (
                        a._zoneDelegates === o && this._updateTaskCount(a, 1),
                        a.state == S && a._transitionTo(E, S),
                        a
                      );
                    }),
                    (v.prototype.scheduleMicroTask = function (a, n, o, g) {
                      return this.scheduleTask(new T(F, a, n, o, g, void 0));
                    }),
                    (v.prototype.scheduleMacroTask = function (a, n, o, g, A) {
                      return this.scheduleTask(new T(R, a, n, o, g, A));
                    }),
                    (v.prototype.scheduleEventTask = function (a, n, o, g, A) {
                      return this.scheduleTask(new T(G, a, n, o, g, A));
                    }),
                    (v.prototype.cancelTask = function (a) {
                      if (a.zone != this)
                        throw new Error(
                          'A task can only be cancelled in the zone of creation! (Creation: ' +
                            (a.zone || oe).name +
                            '; Execution: ' +
                            this.name +
                            ')',
                        );
                      if (a.state === E || a.state === Y) {
                        a._transitionTo(U, E, Y);
                        try {
                          this._zoneDelegate.cancelTask(this, a);
                        } catch (n) {
                          throw (
                            (a._transitionTo(X, U),
                            this._zoneDelegate.handleError(this, n),
                            n)
                          );
                        }
                        return (
                          this._updateTaskCount(a, -1),
                          a._transitionTo(N, U),
                          (a.runCount = -1),
                          a
                        );
                      }
                    }),
                    (v.prototype._updateTaskCount = function (a, n) {
                      var o = a._zoneDelegates;
                      -1 == n && (a._zoneDelegates = null);
                      for (var g = 0; g < o.length; g++)
                        o[g]._updateTaskCount(a.type, n);
                    }),
                    v
                  );
                })();
                (r = s).__symbol__ = re;
                var M,
                  f = {
                    name: '',
                    onHasTask: function (v, a, n, o) {
                      return v.hasTask(n, o);
                    },
                    onScheduleTask: function (v, a, n, o) {
                      return v.scheduleTask(n, o);
                    },
                    onInvokeTask: function (v, a, n, o, g, A) {
                      return v.invokeTask(n, o, g, A);
                    },
                    onCancelTask: function (v, a, n, o) {
                      return v.cancelTask(n, o);
                    },
                  },
                  _ = (function () {
                    function v(a, n, o) {
                      (this._taskCounts = {
                        microTask: 0,
                        macroTask: 0,
                        eventTask: 0,
                      }),
                        (this._zone = a),
                        (this._parentDelegate = n),
                        (this._forkZS = o && (o && o.onFork ? o : n._forkZS)),
                        (this._forkDlgt = o && (o.onFork ? n : n._forkDlgt)),
                        (this._forkCurrZone =
                          o && (o.onFork ? this._zone : n._forkCurrZone)),
                        (this._interceptZS =
                          o && (o.onIntercept ? o : n._interceptZS)),
                        (this._interceptDlgt =
                          o && (o.onIntercept ? n : n._interceptDlgt)),
                        (this._interceptCurrZone =
                          o &&
                          (o.onIntercept ? this._zone : n._interceptCurrZone)),
                        (this._invokeZS = o && (o.onInvoke ? o : n._invokeZS)),
                        (this._invokeDlgt =
                          o && (o.onInvoke ? n : n._invokeDlgt)),
                        (this._invokeCurrZone =
                          o && (o.onInvoke ? this._zone : n._invokeCurrZone)),
                        (this._handleErrorZS =
                          o && (o.onHandleError ? o : n._handleErrorZS)),
                        (this._handleErrorDlgt =
                          o && (o.onHandleError ? n : n._handleErrorDlgt)),
                        (this._handleErrorCurrZone =
                          o &&
                          (o.onHandleError
                            ? this._zone
                            : n._handleErrorCurrZone)),
                        (this._scheduleTaskZS =
                          o && (o.onScheduleTask ? o : n._scheduleTaskZS)),
                        (this._scheduleTaskDlgt =
                          o && (o.onScheduleTask ? n : n._scheduleTaskDlgt)),
                        (this._scheduleTaskCurrZone =
                          o &&
                          (o.onScheduleTask
                            ? this._zone
                            : n._scheduleTaskCurrZone)),
                        (this._invokeTaskZS =
                          o && (o.onInvokeTask ? o : n._invokeTaskZS)),
                        (this._invokeTaskDlgt =
                          o && (o.onInvokeTask ? n : n._invokeTaskDlgt)),
                        (this._invokeTaskCurrZone =
                          o &&
                          (o.onInvokeTask
                            ? this._zone
                            : n._invokeTaskCurrZone)),
                        (this._cancelTaskZS =
                          o && (o.onCancelTask ? o : n._cancelTaskZS)),
                        (this._cancelTaskDlgt =
                          o && (o.onCancelTask ? n : n._cancelTaskDlgt)),
                        (this._cancelTaskCurrZone =
                          o &&
                          (o.onCancelTask
                            ? this._zone
                            : n._cancelTaskCurrZone)),
                        (this._hasTaskZS = null),
                        (this._hasTaskDlgt = null),
                        (this._hasTaskDlgtOwner = null),
                        (this._hasTaskCurrZone = null);
                      var g = o && o.onHasTask;
                      (g || (n && n._hasTaskZS)) &&
                        ((this._hasTaskZS = g ? o : f),
                        (this._hasTaskDlgt = n),
                        (this._hasTaskDlgtOwner = this),
                        (this._hasTaskCurrZone = this._zone),
                        o.onScheduleTask ||
                          ((this._scheduleTaskZS = f),
                          (this._scheduleTaskDlgt = n),
                          (this._scheduleTaskCurrZone = this._zone)),
                        o.onInvokeTask ||
                          ((this._invokeTaskZS = f),
                          (this._invokeTaskDlgt = n),
                          (this._invokeTaskCurrZone = this._zone)),
                        o.onCancelTask ||
                          ((this._cancelTaskZS = f),
                          (this._cancelTaskDlgt = n),
                          (this._cancelTaskCurrZone = this._zone)));
                    }
                    return (
                      Object.defineProperty(v.prototype, 'zone', {
                        get: function () {
                          return this._zone;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (v.prototype.fork = function (a, n) {
                        return this._forkZS
                          ? this._forkZS.onFork(this._forkDlgt, this.zone, a, n)
                          : new s(a, n);
                      }),
                      (v.prototype.intercept = function (a, n, o) {
                        return this._interceptZS
                          ? this._interceptZS.onIntercept(
                              this._interceptDlgt,
                              this._interceptCurrZone,
                              a,
                              n,
                              o,
                            )
                          : n;
                      }),
                      (v.prototype.invoke = function (a, n, o, g, A) {
                        return this._invokeZS
                          ? this._invokeZS.onInvoke(
                              this._invokeDlgt,
                              this._invokeCurrZone,
                              a,
                              n,
                              o,
                              g,
                              A,
                            )
                          : n.apply(o, g);
                      }),
                      (v.prototype.handleError = function (a, n) {
                        return (
                          !this._handleErrorZS ||
                          this._handleErrorZS.onHandleError(
                            this._handleErrorDlgt,
                            this._handleErrorCurrZone,
                            a,
                            n,
                          )
                        );
                      }),
                      (v.prototype.scheduleTask = function (a, n) {
                        var o = n;
                        if (this._scheduleTaskZS)
                          this._hasTaskZS &&
                            o._zoneDelegates.push(this._hasTaskDlgtOwner),
                            (o = this._scheduleTaskZS.onScheduleTask(
                              this._scheduleTaskDlgt,
                              this._scheduleTaskCurrZone,
                              a,
                              n,
                            )) || (o = n);
                        else if (n.scheduleFn) n.scheduleFn(n);
                        else {
                          if (n.type != F)
                            throw new Error('Task is missing scheduleFn.');
                          W(n);
                        }
                        return o;
                      }),
                      (v.prototype.invokeTask = function (a, n, o, g) {
                        return this._invokeTaskZS
                          ? this._invokeTaskZS.onInvokeTask(
                              this._invokeTaskDlgt,
                              this._invokeTaskCurrZone,
                              a,
                              n,
                              o,
                              g,
                            )
                          : n.callback.apply(o, g);
                      }),
                      (v.prototype.cancelTask = function (a, n) {
                        var o;
                        if (this._cancelTaskZS)
                          o = this._cancelTaskZS.onCancelTask(
                            this._cancelTaskDlgt,
                            this._cancelTaskCurrZone,
                            a,
                            n,
                          );
                        else {
                          if (!n.cancelFn)
                            throw Error('Task is not cancelable');
                          o = n.cancelFn(n);
                        }
                        return o;
                      }),
                      (v.prototype.hasTask = function (a, n) {
                        try {
                          this._hasTaskZS &&
                            this._hasTaskZS.onHasTask(
                              this._hasTaskDlgt,
                              this._hasTaskCurrZone,
                              a,
                              n,
                            );
                        } catch (o) {
                          this.handleError(a, o);
                        }
                      }),
                      (v.prototype._updateTaskCount = function (a, n) {
                        var o = this._taskCounts,
                          g = o[a],
                          A = (o[a] = g + n);
                        if (A < 0)
                          throw new Error(
                            'More tasks executed then were scheduled.',
                          );
                        (0 != g && 0 != A) ||
                          this.hasTask(this._zone, {
                            microTask: o.microTask > 0,
                            macroTask: o.macroTask > 0,
                            eventTask: o.eventTask > 0,
                            change: a,
                          });
                      }),
                      v
                    );
                  })(),
                  T = (function () {
                    function v(a, n, o, g, A, q) {
                      if (
                        ((this._zone = null),
                        (this.runCount = 0),
                        (this._zoneDelegates = null),
                        (this._state = 'notScheduled'),
                        (this.type = a),
                        (this.source = n),
                        (this.data = g),
                        (this.scheduleFn = A),
                        (this.cancelFn = q),
                        !o)
                      )
                        throw new Error('callback is not defined');
                      this.callback = o;
                      var ce = this;
                      this.invoke =
                        a === G && g && g.useG
                          ? v.invokeTask
                          : function () {
                              return v.invokeTask.call(ne, ce, this, arguments);
                            };
                    }
                    return (
                      (v.invokeTask = function (a, n, o) {
                        a || (a = this), D++;
                        try {
                          return a.runCount++, a.zone.runTask(a, n, o);
                        } finally {
                          1 == D && ae(), D--;
                        }
                      }),
                      Object.defineProperty(v.prototype, 'zone', {
                        get: function () {
                          return this._zone;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      Object.defineProperty(v.prototype, 'state', {
                        get: function () {
                          return this._state;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      (v.prototype.cancelScheduleRequest = function () {
                        this._transitionTo(N, S);
                      }),
                      (v.prototype._transitionTo = function (a, n, o) {
                        if (this._state !== n && this._state !== o)
                          throw new Error(
                            ''
                              .concat(this.type, " '")
                              .concat(this.source, "': can not transition to '")
                              .concat(a, "', expecting state '")
                              .concat(n, "'")
                              .concat(o ? " or '" + o + "'" : '', ", was '")
                              .concat(this._state, "'."),
                          );
                        (this._state = a),
                          a == N && (this._zoneDelegates = null);
                      }),
                      (v.prototype.toString = function () {
                        return this.data && typeof this.data.handleId < 'u'
                          ? this.data.handleId.toString()
                          : Object.prototype.toString.call(this);
                      }),
                      (v.prototype.toJSON = function () {
                        return {
                          type: this.type,
                          state: this.state,
                          source: this.source,
                          zone: this.zone.name,
                          runCount: this.runCount,
                        };
                      }),
                      v
                    );
                  })(),
                  m = re('setTimeout'),
                  O = re('Promise'),
                  y = re('then'),
                  k = [],
                  b = !1;
                function J(v) {
                  if ((M || (ne[O] && (M = ne[O].resolve(0))), M)) {
                    var a = M[y];
                    a || (a = M.then), a.call(M, v);
                  } else ne[m](v, 0);
                }
                function W(v) {
                  0 === D && 0 === k.length && J(ae), v && k.push(v);
                }
                function ae() {
                  if (!b) {
                    for (b = !0; k.length; ) {
                      var v = k;
                      k = [];
                      for (var a = 0; a < v.length; a++) {
                        var n = v[a];
                        try {
                          n.zone.runTask(n, null, null);
                        } catch (o) {
                          ee.onUnhandledError(o);
                        }
                      }
                    }
                    ee.microtaskDrainDone(), (b = !1);
                  }
                }
                var oe = { name: 'NO ZONE' },
                  N = 'notScheduled',
                  S = 'scheduling',
                  E = 'scheduled',
                  Y = 'running',
                  U = 'canceling',
                  X = 'unknown',
                  F = 'microTask',
                  R = 'macroTask',
                  G = 'eventTask',
                  C = {},
                  ee = {
                    symbol: re,
                    currentZoneFrame: function () {
                      return p;
                    },
                    onUnhandledError: H,
                    microtaskDrainDone: H,
                    scheduleMicroTask: W,
                    showUncaughtError: function () {
                      return !s[re('ignoreConsoleErrorUncaughtError')];
                    },
                    patchEventTarget: function () {
                      return [];
                    },
                    patchOnProperties: H,
                    patchMethod: function () {
                      return H;
                    },
                    bindArguments: function () {
                      return [];
                    },
                    patchThen: function () {
                      return H;
                    },
                    patchMacroTask: function () {
                      return H;
                    },
                    patchEventPrototype: function () {
                      return H;
                    },
                    isIEOrEdge: function () {
                      return !1;
                    },
                    getGlobalObjects: function () {},
                    ObjectDefineProperty: function () {
                      return H;
                    },
                    ObjectGetOwnPropertyDescriptor: function () {},
                    ObjectCreate: function () {},
                    ArraySlice: function () {
                      return [];
                    },
                    patchClass: function () {
                      return H;
                    },
                    wrapWithCurrentZone: function () {
                      return H;
                    },
                    filterProperties: function () {
                      return [];
                    },
                    attachOriginToPatched: function () {
                      return H;
                    },
                    _redefineProperty: function () {
                      return H;
                    },
                    patchCallbacks: function () {
                      return H;
                    },
                    nativeScheduleMicroTask: J,
                  },
                  p = { parent: null, zone: new s(null, null) },
                  B = null,
                  D = 0;
                function H() {}
                return t('Zone', 'Zone'), s;
              })()),
            e.Zone
          );
        })();
        (function xr(r) {
          Br(r),
            (function Vr(r) {
              r.__load_patch('toString', function (e) {
                var u = Function.prototype.toString,
                  t = V('OriginalDelegate'),
                  s = V('Promise'),
                  f = V('Error'),
                  _ = function () {
                    if ('function' == typeof this) {
                      var y = this[t];
                      if (y)
                        return 'function' == typeof y
                          ? u.call(y)
                          : Object.prototype.toString.call(y);
                      if (this === Promise) {
                        var k = e[s];
                        if (k) return u.call(k);
                      }
                      if (this === Error) {
                        var b = e[f];
                        if (b) return u.call(b);
                      }
                    }
                    return u.call(this);
                  };
                (_[t] = u), (Function.prototype.toString = _);
                var T = Object.prototype.toString;
                Object.prototype.toString = function () {
                  return 'function' == typeof Promise && this instanceof Promise
                    ? '[object Promise]'
                    : T.call(this);
                };
              });
            })(r),
            (function Ur(r) {
              r.__load_patch('util', function (e, u, t) {
                var s = Qe(e);
                (t.patchOnProperties = or),
                  (t.patchMethod = ve),
                  (t.bindArguments = qe),
                  (t.patchMacroTask = Or);
                var f = u.__symbol__('BLACK_LISTED_EVENTS'),
                  _ = u.__symbol__('UNPATCHED_EVENTS');
                e[_] && (e[f] = e[_]),
                  e[f] && (u[f] = u[_] = e[f]),
                  (t.patchEventPrototype = Nr),
                  (t.patchEventTarget = Ir),
                  (t.isIEOrEdge = Dr),
                  (t.ObjectDefineProperty = Ve),
                  (t.ObjectGetOwnPropertyDescriptor = fe),
                  (t.ObjectCreate = br),
                  (t.ArraySlice = Pr),
                  (t.patchClass = Ze),
                  (t.wrapWithCurrentZone = Xe),
                  (t.filterProperties = dr),
                  (t.attachOriginToPatched = de),
                  (t._redefineProperty = Object.defineProperty),
                  (t.patchCallbacks = Gr),
                  (t.getGlobalObjects = function () {
                    return {
                      globalSources: cr,
                      zoneSymbolEventNames: ie,
                      eventNames: s,
                      isBrowser: Ke,
                      isMix: tr,
                      isNode: Le,
                      TRUE_STR: le,
                      FALSE_STR: he,
                      ZONE_SYMBOL_PREFIX: De,
                      ADD_EVENT_LISTENER_STR: Ue,
                      REMOVE_EVENT_LISTENER_STR: xe,
                    };
                  });
              });
            })(r);
        })(Er),
          (function Fr(r) {
            r.__load_patch('legacy', function (e) {
              var u = e[r.__symbol__('legacyPatch')];
              u && u();
            }),
              r.__load_patch('timers', function (e) {
                var u = 'set',
                  t = 'clear';
                Pe(e, u, t, 'Timeout'),
                  Pe(e, u, t, 'Interval'),
                  Pe(e, u, t, 'Immediate');
              }),
              r.__load_patch('requestAnimationFrame', function (e) {
                Pe(e, 'request', 'cancel', 'AnimationFrame'),
                  Pe(e, 'mozRequest', 'mozCancel', 'AnimationFrame'),
                  Pe(e, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
              }),
              r.__load_patch('blocking', function (e, u) {
                for (
                  var t = ['alert', 'prompt', 'confirm'], s = 0;
                  s < t.length;
                  s++
                )
                  ve(e, t[s], function (_, T, m) {
                    return function (O, y) {
                      return u.current.run(_, e, y, m);
                    };
                  });
              }),
              r.__load_patch('EventTarget', function (e, u, t) {
                (function jr(r, e) {
                  e.patchEventPrototype(r, e);
                })(e, t),
                  (function Ar(r, e) {
                    if (!Zone[e.symbol('patchEventTarget')]) {
                      for (
                        var u = e.getGlobalObjects(),
                          t = u.eventNames,
                          s = u.zoneSymbolEventNames,
                          f = u.TRUE_STR,
                          _ = u.FALSE_STR,
                          T = u.ZONE_SYMBOL_PREFIX,
                          m = 0;
                        m < t.length;
                        m++
                      ) {
                        var O = t[m],
                          b = T + (O + _),
                          M = T + (O + f);
                        (s[O] = {}), (s[O][_] = b), (s[O][f] = M);
                      }
                      var J = r.EventTarget;
                      if (J && J.prototype)
                        return e.patchEventTarget(r, e, [J && J.prototype]), !0;
                    }
                  })(e, t);
                var s = e.XMLHttpRequestEventTarget;
                s && s.prototype && t.patchEventTarget(e, t, [s.prototype]);
              }),
              r.__load_patch('MutationObserver', function (e, u, t) {
                Ze('MutationObserver'), Ze('WebKitMutationObserver');
              }),
              r.__load_patch('IntersectionObserver', function (e, u, t) {
                Ze('IntersectionObserver');
              }),
              r.__load_patch('FileReader', function (e, u, t) {
                Ze('FileReader');
              }),
              r.__load_patch('on_property', function (e, u, t) {
                Hr(t, e);
              }),
              r.__load_patch('customElements', function (e, u, t) {
                !(function Mr(r, e) {
                  var u = e.getGlobalObjects();
                  (u.isBrowser || u.isMix) &&
                    r.customElements &&
                    'customElements' in r &&
                    e.patchCallbacks(
                      e,
                      r.customElements,
                      'customElements',
                      'define',
                      [
                        'connectedCallback',
                        'disconnectedCallback',
                        'adoptedCallback',
                        'attributeChangedCallback',
                        'formAssociatedCallback',
                        'formDisabledCallback',
                        'formResetCallback',
                        'formStateRestoreCallback',
                      ],
                    );
                })(e, t);
              }),
              r.__load_patch('XHR', function (e, u) {
                !(function O(y) {
                  var k = y.XMLHttpRequest;
                  if (k) {
                    var b = k.prototype,
                      J = b[ze],
                      W = b[We];
                    if (!J) {
                      var ae = y.XMLHttpRequestEventTarget;
                      if (ae) {
                        var oe = ae.prototype;
                        (J = oe[ze]), (W = oe[We]);
                      }
                    }
                    var N = 'readystatechange',
                      S = 'scheduled',
                      X = ve(b, 'open', function () {
                        return function (p, B) {
                          return (
                            (p[s] = 0 == B[2]), (p[T] = B[1]), X.apply(p, B)
                          );
                        };
                      }),
                      R = V('fetchTaskAborting'),
                      G = V('fetchTaskScheduling'),
                      C = ve(b, 'send', function () {
                        return function (p, B) {
                          if (!0 === u.current[G] || p[s]) return C.apply(p, B);
                          var D = {
                              target: p,
                              url: p[T],
                              isPeriodic: !1,
                              args: B,
                              aborted: !1,
                            },
                            H = Ye('XMLHttpRequest.send', Y, D, E, U);
                          p &&
                            !0 === p[m] &&
                            !D.aborted &&
                            H.state === S &&
                            H.invoke();
                        };
                      }),
                      ee = ve(b, 'abort', function () {
                        return function (p, B) {
                          var D = (function M(p) {
                            return p[t];
                          })(p);
                          if (D && 'string' == typeof D.type) {
                            if (
                              null == D.cancelFn ||
                              (D.data && D.data.aborted)
                            )
                              return;
                            D.zone.cancelTask(D);
                          } else if (!0 === u.current[R]) return ee.apply(p, B);
                        };
                      });
                  }
                  function E(p) {
                    var B = p.data,
                      D = B.target;
                    (D[_] = !1), (D[m] = !1);
                    var H = D[f];
                    J || ((J = D[ze]), (W = D[We])), H && W.call(D, N, H);
                    var v = (D[f] = function () {
                      if (D.readyState === D.DONE)
                        if (!B.aborted && D[_] && p.state === S) {
                          var n = D[u.__symbol__('loadfalse')];
                          if (0 !== D.status && n && n.length > 0) {
                            var o = p.invoke;
                            (p.invoke = function () {
                              for (
                                var g = D[u.__symbol__('loadfalse')], A = 0;
                                A < g.length;
                                A++
                              )
                                g[A] === p && g.splice(A, 1);
                              !B.aborted && p.state === S && o.call(p);
                            }),
                              n.push(p);
                          } else p.invoke();
                        } else !B.aborted && !1 === D[_] && (D[m] = !0);
                    });
                    return (
                      J.call(D, N, v),
                      D[t] || (D[t] = p),
                      C.apply(D, B.args),
                      (D[_] = !0),
                      p
                    );
                  }
                  function Y() {}
                  function U(p) {
                    var B = p.data;
                    return (B.aborted = !0), ee.apply(B.target, B.args);
                  }
                })(e);
                var t = V('xhrTask'),
                  s = V('xhrSync'),
                  f = V('xhrListener'),
                  _ = V('xhrScheduled'),
                  T = V('xhrURL'),
                  m = V('xhrErrorBeforeScheduled');
              }),
              r.__load_patch('geolocation', function (e) {
                e.navigator &&
                  e.navigator.geolocation &&
                  (function Rr(r, e) {
                    for (
                      var u = r.constructor.name,
                        t = function (f) {
                          var O,
                            y,
                            _ = e[f],
                            T = r[_];
                          if (T) {
                            if (!er(fe(r, _))) return 'continue';
                            r[_] =
                              ((y = function () {
                                return O.apply(
                                  this,
                                  qe(arguments, u + '.' + _),
                                );
                              }),
                              de(y, (O = T)),
                              y);
                          }
                        },
                        s = 0;
                      s < e.length;
                      s++
                    )
                      t(s);
                  })(e.navigator.geolocation, [
                    'getCurrentPosition',
                    'watchPosition',
                  ]);
              }),
              r.__load_patch('PromiseRejectionEvent', function (e, u) {
                function t(s) {
                  return function (f) {
                    vr(e, s).forEach(function (T) {
                      var m = e.PromiseRejectionEvent;
                      if (m) {
                        var O = new m(s, {
                          promise: f.promise,
                          reason: f.rejection,
                        });
                        T.invoke(O);
                      }
                    });
                  };
                }
                e.PromiseRejectionEvent &&
                  ((u[V('unhandledPromiseRejectionHandler')] =
                    t('unhandledrejection')),
                  (u[V('rejectionHandledHandler')] = t('rejectionhandled')));
              }),
              r.__load_patch('queueMicrotask', function (e, u, t) {
                !(function Lr(r, e) {
                  e.patchMethod(r, 'queueMicrotask', function (u) {
                    return function (t, s) {
                      Zone.current.scheduleMicroTask('queueMicrotask', s[0]);
                    };
                  });
                })(e, t);
              });
          })(Er);
      }),
        void 0 !== (Fe = Te.call(Re, Se, Re, me)) && (me.exports = Fe);
    },
  },
  (me) => {
    me((me.s = 4050));
  },
]);
