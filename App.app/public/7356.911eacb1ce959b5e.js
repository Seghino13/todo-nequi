'use strict';
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [7356],
  {
    7356: (k, p, u) => {
      u.r(p), u.d(p, { startTapClick: () => w });
      var d = u(8476),
        C = u(4920);
      const w = (n) => {
          if (void 0 === d.d) return;
          let t,
            a,
            o,
            s = 0;
          const b =
              n.getBoolean('animated', !0) && n.getBoolean('rippleEffect', !0),
            l = new WeakMap(),
            m = () => {
              o && clearTimeout(o), (o = void 0), t && (h(!1), (t = void 0));
            },
            T = (e, i) => {
              if (e && e === t) return;
              o && clearTimeout(o), (o = void 0);
              const { x: r, y: c } = (0, C.p)(i);
              if (t) {
                if (l.has(t)) throw new Error('internal error');
                t.classList.contains(f) || A(t, r, c), h(!0);
              }
              if (e) {
                const L = l.get(e);
                L && (clearTimeout(L), l.delete(e)), e.classList.remove(f);
                const R = () => {
                  A(e, r, c), (o = void 0);
                };
                E(e) ? R() : (o = setTimeout(R, I));
              }
              t = e;
            },
            A = (e, i, r) => {
              if (((s = Date.now()), e.classList.add(f), !b)) return;
              const c = g(e);
              null !== c && (D(), (a = c.addRipple(i, r)));
            },
            D = () => {
              void 0 !== a && (a.then((e) => e()), (a = void 0));
            },
            h = (e) => {
              D();
              const i = t;
              if (!i) return;
              const r = v - Date.now() + s;
              if (e && r > 0 && !E(i)) {
                const c = setTimeout(() => {
                  i.classList.remove(f), l.delete(i);
                }, v);
                l.set(i, c);
              } else i.classList.remove(f);
            };
          d.d.addEventListener('ionGestureCaptured', m),
            d.d.addEventListener(
              'pointerdown',
              (e) => {
                t || 2 === e.button || T(_(e), e);
              },
              !0,
            ),
            d.d.addEventListener(
              'pointerup',
              (e) => {
                T(void 0, e);
              },
              !0,
            ),
            d.d.addEventListener('pointercancel', m, !0);
        },
        _ = (n) => {
          if (void 0 === n.composedPath)
            return n.target.closest('.ion-activatable');
          {
            const s = n.composedPath();
            for (let t = 0; t < s.length - 2; t++) {
              const a = s[t];
              if (
                !(a instanceof ShadowRoot) &&
                a.classList.contains('ion-activatable')
              )
                return a;
            }
          }
        },
        E = (n) => n.classList.contains('ion-activatable-instant'),
        g = (n) => {
          if (n.shadowRoot) {
            const s = n.shadowRoot.querySelector('ion-ripple-effect');
            if (s) return s;
          }
          return n.querySelector('ion-ripple-effect');
        },
        f = 'ion-activated',
        I = 100,
        v = 150;
    },
  },
]);
