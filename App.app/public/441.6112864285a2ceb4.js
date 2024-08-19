'use strict';
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [441],
  {
    441: (Me, ne, c) => {
      c.r(ne), c.d(ne, { ion_modal: () => me });
      var M = c(467),
        p = c(4261),
        P = c(909),
        V = c(8621),
        m = c(4920),
        ge = c(7838),
        Z = c(4929),
        be = c(8438),
        g = c(9440),
        ye = c(333),
        oe = c(3604),
        W = c(9483),
        ie = c(1622),
        h = c(9986),
        se = c(3351),
        re = c(8607),
        H = c(8476),
        N =
          (c(7192),
          c(1970),
          c(4379),
          (function (e) {
            return (
              (e.Dark = 'DARK'), (e.Light = 'LIGHT'), (e.Default = 'DEFAULT'), e
            );
          })(N || {}));
      const Q = {
          getEngine() {
            const e = (0, be.g)();
            if (null != e && e.isPluginAvailable('StatusBar'))
              return e.Plugins.StatusBar;
          },
          setStyle(e) {
            const t = this.getEngine();
            t && t.setStyle(e);
          },
          getStyle:
            ((e = (0, M.A)(function* () {
              const t = this.getEngine();
              if (!t) return N.Default;
              const { style: n } = yield t.getInfo();
              return n;
            })),
            function () {
              return e.apply(this, arguments);
            }),
        },
        J = (e, t) => {
          if (1 === t) return 0;
          const n = 1 / (1 - t);
          return e * n + -t * n;
        },
        ae = () => {
          !H.w || H.w.innerWidth >= 768 || Q.setStyle({ style: N.Dark });
        },
        X = (e = N.Default) => {
          !H.w || H.w.innerWidth >= 768 || Q.setStyle({ style: e });
        },
        de = (function () {
          var e = (0, M.A)(function* (t, n) {
            'function' != typeof t.canDismiss ||
              !(yield t.canDismiss(void 0, g.G)) ||
              (n.isRunning()
                ? n.onFinish(
                    () => {
                      t.dismiss(void 0, 'handler');
                    },
                    { oneTimeCallback: !0 },
                  )
                : t.dismiss(void 0, 'handler'));
          });
          return function (n, o) {
            return e.apply(this, arguments);
          };
        })(),
        q = (e) =>
          0.00255275 * 2.71828 ** (-14.9619 * e) -
          1.00255 * 2.71828 ** (-0.0380968 * e) +
          1,
        le = (e, t) => (0, m.j)(400, e / Math.abs(1.1 * t), 500),
        ce = (e) => {
          const { currentBreakpoint: t, backdropBreakpoint: n } = e,
            o = void 0 === n || n < t,
            s = o ? `calc(var(--backdrop-opacity) * ${t})` : '0',
            i = (0, h.c)('backdropAnimation').fromTo('opacity', 0, s);
          return (
            o &&
              i
                .beforeStyles({ 'pointer-events': 'none' })
                .afterClearStyles(['pointer-events']),
            {
              wrapperAnimation: (0, h.c)('wrapperAnimation').keyframes([
                { offset: 0, opacity: 1, transform: 'translateY(100%)' },
                {
                  offset: 1,
                  opacity: 1,
                  transform: `translateY(${100 - 100 * t}%)`,
                },
              ]),
              backdropAnimation: i,
            }
          );
        },
        pe = (e) => {
          const { currentBreakpoint: t, backdropBreakpoint: n } = e,
            o = `calc(var(--backdrop-opacity) * ${J(t, n)})`,
            s = [
              { offset: 0, opacity: o },
              { offset: 1, opacity: 0 },
            ],
            i = [
              { offset: 0, opacity: o },
              { offset: n, opacity: 0 },
              { offset: 1, opacity: 0 },
            ],
            r = (0, h.c)('backdropAnimation').keyframes(0 !== n ? i : s);
          return {
            wrapperAnimation: (0, h.c)('wrapperAnimation').keyframes([
              {
                offset: 0,
                opacity: 1,
                transform: `translateY(${100 - 100 * t}%)`,
              },
              { offset: 1, opacity: 1, transform: 'translateY(100%)' },
            ]),
            backdropAnimation: r,
          };
        },
        he = (e, t) => {
          const { presentingEl: n, currentBreakpoint: o } = t,
            s = (0, m.g)(e),
            { wrapperAnimation: i, backdropAnimation: r } =
              void 0 !== o
                ? ce(t)
                : {
                    backdropAnimation: (0, h.c)()
                      .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
                      .beforeStyles({ 'pointer-events': 'none' })
                      .afterClearStyles(['pointer-events']),
                    wrapperAnimation: (0, h.c)().fromTo(
                      'transform',
                      'translateY(100vh)',
                      'translateY(0vh)',
                    ),
                  };
          r.addElement(s.querySelector('ion-backdrop')),
            i
              .addElement(s.querySelectorAll('.modal-wrapper, .modal-shadow'))
              .beforeStyles({ opacity: 1 });
          const a = (0, h.c)('entering-base')
            .addElement(e)
            .easing('cubic-bezier(0.32,0.72,0,1)')
            .duration(500)
            .addAnimation(i);
          if (n) {
            const d = window.innerWidth < 768,
              w = 'ION-MODAL' === n.tagName && void 0 !== n.presentingElement,
              E = (0, m.g)(n),
              b = (0, h.c)().beforeStyles({
                transform: 'translateY(0)',
                'transform-origin': 'top center',
                overflow: 'hidden',
              }),
              v = document.body;
            if (d) {
              const y = CSS.supports('width', 'max(0px, 1px)')
                  ? 'max(30px, var(--ion-safe-area-top))'
                  : '30px',
                S = `translateY(${w ? '-10px' : y}) scale(0.915)`;
              b
                .afterStyles({ transform: S })
                .beforeAddWrite(() =>
                  v.style.setProperty('background-color', 'black'),
                )
                .addElement(n)
                .keyframes([
                  {
                    offset: 0,
                    filter: 'contrast(1)',
                    transform: 'translateY(0px) scale(1)',
                    borderRadius: '0px',
                  },
                  {
                    offset: 1,
                    filter: 'contrast(0.85)',
                    transform: S,
                    borderRadius: '10px 10px 0 0',
                  },
                ]),
                a.addAnimation(b);
            } else if ((a.addAnimation(r), w)) {
              const k = `translateY(-10px) scale(${w ? 0.915 : 1})`;
              b.afterStyles({ transform: k })
                .addElement(E.querySelector('.modal-wrapper'))
                .keyframes([
                  {
                    offset: 0,
                    filter: 'contrast(1)',
                    transform: 'translateY(0) scale(1)',
                  },
                  { offset: 1, filter: 'contrast(0.85)', transform: k },
                ]);
              const l = (0, h.c)()
                .afterStyles({ transform: k })
                .addElement(E.querySelector('.modal-shadow'))
                .keyframes([
                  {
                    offset: 0,
                    opacity: '1',
                    transform: 'translateY(0) scale(1)',
                  },
                  { offset: 1, opacity: '0', transform: k },
                ]);
              a.addAnimation([b, l]);
            } else i.fromTo('opacity', '0', '1');
          } else a.addAnimation(r);
          return a;
        },
        fe = (e, t, n = 500) => {
          const { presentingEl: o, currentBreakpoint: s } = t,
            i = (0, m.g)(e),
            { wrapperAnimation: r, backdropAnimation: a } =
              void 0 !== s
                ? pe(t)
                : {
                    backdropAnimation: (0, h.c)().fromTo(
                      'opacity',
                      'var(--backdrop-opacity)',
                      0,
                    ),
                    wrapperAnimation: (0, h.c)().fromTo(
                      'transform',
                      'translateY(0vh)',
                      'translateY(100vh)',
                    ),
                  };
          a.addElement(i.querySelector('ion-backdrop')),
            r
              .addElement(i.querySelectorAll('.modal-wrapper, .modal-shadow'))
              .beforeStyles({ opacity: 1 });
          const d = (0, h.c)('leaving-base')
            .addElement(e)
            .easing('cubic-bezier(0.32,0.72,0,1)')
            .duration(n)
            .addAnimation(r);
          if (o) {
            const w = window.innerWidth < 768,
              E = 'ION-MODAL' === o.tagName && void 0 !== o.presentingElement,
              b = (0, m.g)(o),
              v = (0, h.c)()
                .beforeClearStyles(['transform'])
                .afterClearStyles(['transform'])
                .onFinish((k) => {
                  1 === k &&
                    (o.style.setProperty('overflow', ''),
                    Array.from(
                      y.querySelectorAll('ion-modal:not(.overlay-hidden)'),
                    ).filter((S) => void 0 !== S.presentingElement).length <=
                      1 && y.style.setProperty('background-color', ''));
                }),
              y = document.body;
            if (w) {
              const k = CSS.supports('width', 'max(0px, 1px)')
                  ? 'max(30px, var(--ion-safe-area-top))'
                  : '30px',
                Y = `translateY(${E ? '-10px' : k}) scale(0.915)`;
              v.addElement(o).keyframes([
                {
                  offset: 0,
                  filter: 'contrast(0.85)',
                  transform: Y,
                  borderRadius: '10px 10px 0 0',
                },
                {
                  offset: 1,
                  filter: 'contrast(1)',
                  transform: 'translateY(0px) scale(1)',
                  borderRadius: '0px',
                },
              ]),
                d.addAnimation(v);
            } else if ((d.addAnimation(a), E)) {
              const l = `translateY(-10px) scale(${E ? 0.915 : 1})`;
              v.addElement(b.querySelector('.modal-wrapper'))
                .afterStyles({ transform: 'translate3d(0, 0, 0)' })
                .keyframes([
                  { offset: 0, filter: 'contrast(0.85)', transform: l },
                  {
                    offset: 1,
                    filter: 'contrast(1)',
                    transform: 'translateY(0) scale(1)',
                  },
                ]);
              const S = (0, h.c)()
                .addElement(b.querySelector('.modal-shadow'))
                .afterStyles({ transform: 'translateY(0) scale(1)' })
                .keyframes([
                  { offset: 0, opacity: '0', transform: l },
                  {
                    offset: 1,
                    opacity: '1',
                    transform: 'translateY(0) scale(1)',
                  },
                ]);
              d.addAnimation([v, S]);
            } else r.fromTo('opacity', '1', '0');
          } else d.addAnimation(a);
          return d;
        },
        Ee = (e, t) => {
          const { currentBreakpoint: n } = t,
            o = (0, m.g)(e),
            { wrapperAnimation: s, backdropAnimation: i } =
              void 0 !== n
                ? ce(t)
                : {
                    backdropAnimation: (0, h.c)()
                      .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
                      .beforeStyles({ 'pointer-events': 'none' })
                      .afterClearStyles(['pointer-events']),
                    wrapperAnimation: (0, h.c)().keyframes([
                      {
                        offset: 0,
                        opacity: 0.01,
                        transform: 'translateY(40px)',
                      },
                      { offset: 1, opacity: 1, transform: 'translateY(0px)' },
                    ]),
                  };
          return (
            i.addElement(o.querySelector('ion-backdrop')),
            s.addElement(o.querySelector('.modal-wrapper')),
            (0, h.c)()
              .addElement(e)
              .easing('cubic-bezier(0.36,0.66,0.04,1)')
              .duration(280)
              .addAnimation([i, s])
          );
        },
        _e = (e, t) => {
          const { currentBreakpoint: n } = t,
            o = (0, m.g)(e),
            { wrapperAnimation: s, backdropAnimation: i } =
              void 0 !== n
                ? pe(t)
                : {
                    backdropAnimation: (0, h.c)().fromTo(
                      'opacity',
                      'var(--backdrop-opacity)',
                      0,
                    ),
                    wrapperAnimation: (0, h.c)().keyframes([
                      {
                        offset: 0,
                        opacity: 0.99,
                        transform: 'translateY(0px)',
                      },
                      { offset: 1, opacity: 0, transform: 'translateY(40px)' },
                    ]),
                  };
          return (
            i.addElement(o.querySelector('ion-backdrop')),
            s.addElement(o.querySelector('.modal-wrapper')),
            (0, h.c)()
              .easing('cubic-bezier(0.47,0,0.745,0.715)')
              .duration(200)
              .addAnimation([i, s])
          );
        },
        me = class {
          constructor(e) {
            (0, p.r)(this, e),
              (this.didPresent = (0, p.d)(this, 'ionModalDidPresent', 7)),
              (this.willPresent = (0, p.d)(this, 'ionModalWillPresent', 7)),
              (this.willDismiss = (0, p.d)(this, 'ionModalWillDismiss', 7)),
              (this.didDismiss = (0, p.d)(this, 'ionModalDidDismiss', 7)),
              (this.ionBreakpointDidChange = (0, p.d)(
                this,
                'ionBreakpointDidChange',
                7,
              )),
              (this.didPresentShorthand = (0, p.d)(this, 'didPresent', 7)),
              (this.willPresentShorthand = (0, p.d)(this, 'willPresent', 7)),
              (this.willDismissShorthand = (0, p.d)(this, 'willDismiss', 7)),
              (this.didDismissShorthand = (0, p.d)(this, 'didDismiss', 7)),
              (this.ionMount = (0, p.d)(this, 'ionMount', 7)),
              (this.lockController = (0, ge.c)()),
              (this.triggerController = (0, g.e)()),
              (this.coreDelegate = (0, V.C)()),
              (this.isSheetModal = !1),
              (this.inheritedAttributes = {}),
              (this.inline = !1),
              (this.gestureAnimationDismissing = !1),
              (this.onHandleClick = () => {
                const { sheetTransition: t, handleBehavior: n } = this;
                'cycle' !== n || void 0 !== t || this.moveToNextBreakpoint();
              }),
              (this.onBackdropTap = () => {
                const { sheetTransition: t } = this;
                void 0 === t && this.dismiss(void 0, g.B);
              }),
              (this.onLifecycle = (t) => {
                const n = this.usersElement,
                  o = Ce[t.type];
                if (n && o) {
                  const s = new CustomEvent(o, {
                    bubbles: !1,
                    cancelable: !1,
                    detail: t.detail,
                  });
                  n.dispatchEvent(s);
                }
              }),
              (this.presented = !1),
              (this.hasController = !1),
              (this.overlayIndex = void 0),
              (this.delegate = void 0),
              (this.keyboardClose = !0),
              (this.enterAnimation = void 0),
              (this.leaveAnimation = void 0),
              (this.breakpoints = void 0),
              (this.initialBreakpoint = void 0),
              (this.backdropBreakpoint = 0),
              (this.handle = void 0),
              (this.handleBehavior = 'none'),
              (this.component = void 0),
              (this.componentProps = void 0),
              (this.cssClass = void 0),
              (this.backdropDismiss = !0),
              (this.showBackdrop = !0),
              (this.animated = !0),
              (this.presentingElement = void 0),
              (this.htmlAttributes = void 0),
              (this.isOpen = !1),
              (this.trigger = void 0),
              (this.keepContentsMounted = !1),
              (this.focusTrap = !0),
              (this.canDismiss = !0);
          }
          onIsOpenChange(e, t) {
            !0 === e && !1 === t
              ? this.present()
              : !1 === e && !0 === t && this.dismiss();
          }
          triggerChanged() {
            const { trigger: e, el: t, triggerController: n } = this;
            e && n.addClickListener(t, e);
          }
          breakpointsChanged(e) {
            void 0 !== e && (this.sortedBreakpoints = e.sort((t, n) => t - n));
          }
          connectedCallback() {
            const { el: e } = this;
            (0, g.j)(e), this.triggerChanged();
          }
          disconnectedCallback() {
            this.triggerController.removeClickListener();
          }
          componentWillLoad() {
            var e;
            const {
                breakpoints: t,
                initialBreakpoint: n,
                el: o,
                htmlAttributes: s,
              } = this,
              i = (this.isSheetModal = void 0 !== t && void 0 !== n),
              r = ['aria-label', 'role'];
            (this.inheritedAttributes = (0, m.h)(o, r)),
              void 0 !== s &&
                r.forEach((a) => {
                  s[a] &&
                    ((this.inheritedAttributes = Object.assign(
                      Object.assign({}, this.inheritedAttributes),
                      { [a]: s[a] },
                    )),
                    delete s[a]);
                }),
              i && (this.currentBreakpoint = this.initialBreakpoint),
              void 0 !== t &&
                void 0 !== n &&
                !t.includes(n) &&
                (0, Z.p)(
                  'Your breakpoints array must include the initialBreakpoint value.',
                ),
              (null !== (e = this.htmlAttributes) && void 0 !== e && e.id) ||
                (0, g.k)(this.el);
          }
          componentDidLoad() {
            !0 === this.isOpen && (0, m.r)(() => this.present()),
              this.breakpointsChanged(this.breakpoints),
              this.triggerChanged();
          }
          getDelegate(e = !1) {
            if (this.workingDelegate && !e)
              return { delegate: this.workingDelegate, inline: this.inline };
            const n = (this.inline =
              null !== this.el.parentNode && !this.hasController);
            return {
              inline: n,
              delegate: (this.workingDelegate = n
                ? this.delegate || this.coreDelegate
                : this.delegate),
            };
          }
          checkCanDismiss(e, t) {
            var n = this;
            return (0, M.A)(function* () {
              const { canDismiss: o } = n;
              return 'function' == typeof o ? o(e, t) : o;
            })();
          }
          present() {
            var e = this;
            return (0, M.A)(function* () {
              const t = yield e.lockController.lock();
              if (e.presented) return void t();
              const { presentingElement: n, el: o } = e;
              e.currentBreakpoint = e.initialBreakpoint;
              const { inline: s, delegate: i } = e.getDelegate(!0);
              e.ionMount.emit(),
                (e.usersElement = yield (0, V.a)(
                  i,
                  o,
                  e.component,
                  ['ion-page'],
                  e.componentProps,
                  s,
                )),
                (0, m.k)(o)
                  ? yield (0, oe.e)(e.usersElement)
                  : e.keepContentsMounted || (yield (0, oe.w)()),
                (0, p.w)(() => e.el.classList.add('show-modal'));
              const r = void 0 !== n;
              r &&
                'ios' === (0, W.b)(e) &&
                ((e.statusBarStyle = yield Q.getStyle()), ae()),
                yield (0, g.f)(e, 'modalEnter', he, Ee, {
                  presentingEl: n,
                  currentBreakpoint: e.initialBreakpoint,
                  backdropBreakpoint: e.backdropBreakpoint,
                }),
                typeof window < 'u' &&
                  ((e.keyboardOpenCallback = () => {
                    e.gesture &&
                      (e.gesture.enable(!1),
                      (0, m.r)(() => {
                        e.gesture && e.gesture.enable(!0);
                      }));
                  }),
                  window.addEventListener(
                    ie.KEYBOARD_DID_OPEN,
                    e.keyboardOpenCallback,
                  )),
                e.isSheetModal
                  ? e.initSheetGesture()
                  : r && e.initSwipeToClose(),
                t();
            })();
          }
          initSwipeToClose() {
            var t,
              e = this;
            if ('ios' !== (0, W.b)(this)) return;
            const { el: n } = this,
              o = this.leaveAnimation || W.c.get('modalLeave', fe),
              s = (this.animation = o(n, {
                presentingEl: this.presentingElement,
              }));
            if (!(0, P.a)(n)) return void (0, P.p)(n);
            const r =
              null !== (t = this.statusBarStyle) && void 0 !== t
                ? t
                : N.Default;
            (this.gesture = ((e, t, n, o) => {
              const i = e.offsetHeight;
              let r = !1,
                a = !1,
                d = null,
                w = null,
                b = !0,
                v = 0;
              const U = (0, re.createGesture)({
                el: e,
                gestureName: 'modalSwipeToClose',
                gesturePriority: g.O,
                direction: 'y',
                threshold: 10,
                canStart: (u) => {
                  const f = u.event.target;
                  return (
                    null === f ||
                    !f.closest ||
                    ((d = (0, P.f)(f)),
                    d
                      ? ((w = (0, P.i)(d)
                          ? (0, m.g)(d).querySelector('.inner-scroll')
                          : d),
                        !d.querySelector('ion-refresher') && 0 === w.scrollTop)
                      : null === f.closest('ion-footer'))
                  );
                },
                onStart: (u) => {
                  const { deltaY: f } = u;
                  (b = !d || !(0, P.i)(d) || d.scrollY),
                    (a = void 0 !== e.canDismiss && !0 !== e.canDismiss),
                    f > 0 && d && (0, P.d)(d),
                    t.progressStart(!0, r ? 1 : 0);
                },
                onMove: (u) => {
                  const { deltaY: f } = u;
                  f > 0 && d && (0, P.d)(d);
                  const A = u.deltaY / i,
                    O = A >= 0 && a,
                    T = O ? 0.2 : 0.9999,
                    j = O ? q(A / T) : A,
                    B = (0, m.j)(1e-4, j, T);
                  t.progressStep(B),
                    B >= 0.5 && v < 0.5 ? X(n) : B < 0.5 && v >= 0.5 && ae(),
                    (v = B);
                },
                onEnd: (u) => {
                  const f = u.velocityY,
                    A = u.deltaY / i,
                    O = A >= 0 && a,
                    T = O ? 0.2 : 0.9999,
                    j = O ? q(A / T) : A,
                    B = (0, m.j)(1e-4, j, T),
                    L = !O && (u.deltaY + 1e3 * f) / i >= 0.5;
                  let G = L ? -0.001 : 0.001;
                  L
                    ? (t.easing('cubic-bezier(0.32, 0.72, 0, 1)'),
                      (G += (0, se.g)(
                        [0, 0],
                        [0.32, 0.72],
                        [0, 1],
                        [1, 1],
                        B,
                      )[0]))
                    : (t.easing('cubic-bezier(1, 0, 0.68, 0.28)'),
                      (G += (0, se.g)(
                        [0, 0],
                        [1, 0],
                        [0.68, 0.28],
                        [1, 1],
                        B,
                      )[0]));
                  const $ = le(L ? A * i : (1 - B) * i, f);
                  (r = L),
                    U.enable(!1),
                    d && (0, P.r)(d, b),
                    t
                      .onFinish(() => {
                        L || U.enable(!0);
                      })
                      .progressEnd(L ? 1 : 0, G, $),
                    O && B > T / 4 ? de(e, t) : L && o();
                },
              });
              return U;
            })(n, s, r, () => {
              (this.gestureAnimationDismissing = !0),
                X(this.statusBarStyle),
                this.animation.onFinish(
                  (0, M.A)(function* () {
                    yield e.dismiss(void 0, g.G),
                      (e.gestureAnimationDismissing = !1);
                  }),
                );
            })),
              this.gesture.enable(!0);
          }
          initSheetGesture() {
            const {
              wrapperEl: e,
              initialBreakpoint: t,
              backdropBreakpoint: n,
            } = this;
            if (!e || void 0 === t) return;
            const o = this.enterAnimation || W.c.get('modalEnter', he),
              s = (this.animation = o(this.el, {
                presentingEl: this.presentingElement,
                currentBreakpoint: t,
                backdropBreakpoint: n,
              }));
            s.progressStart(!0, 1);
            const { gesture: i, moveSheetToBreakpoint: r } = ((
              e,
              t,
              n,
              o,
              s,
              i,
              r = [],
              a,
              d,
              w,
            ) => {
              const v = {
                  WRAPPER_KEYFRAMES: [
                    { offset: 0, transform: 'translateY(0%)' },
                    { offset: 1, transform: 'translateY(100%)' },
                  ],
                  BACKDROP_KEYFRAMES:
                    0 !== s
                      ? [
                          { offset: 0, opacity: 'var(--backdrop-opacity)' },
                          { offset: 1 - s, opacity: 0 },
                          { offset: 1, opacity: 0 },
                        ]
                      : [
                          { offset: 0, opacity: 'var(--backdrop-opacity)' },
                          { offset: 1, opacity: 0.01 },
                        ],
                },
                y = e.querySelector('ion-content'),
                k = n.clientHeight;
              let l = o,
                S = 0,
                Y = !1;
              const u = i.childAnimations.find(
                  (x) => 'wrapperAnimation' === x.id,
                ),
                f = i.childAnimations.find((x) => 'backdropAnimation' === x.id),
                A = r[r.length - 1],
                O = r[0],
                T = () => {
                  e.style.setProperty('pointer-events', 'auto'),
                    t.style.setProperty('pointer-events', 'auto'),
                    e.classList.remove(g.F);
                },
                j = () => {
                  e.style.setProperty('pointer-events', 'none'),
                    t.style.setProperty('pointer-events', 'none'),
                    e.classList.add(g.F);
                };
              u &&
                f &&
                (u.keyframes([...v.WRAPPER_KEYFRAMES]),
                f.keyframes([...v.BACKDROP_KEYFRAMES]),
                i.progressStart(!0, 1 - l),
                l > s ? T() : j()),
                y && l !== A && (y.scrollY = !1);
              const $ = (x) => {
                  const {
                      breakpoint: _,
                      canDismiss: D,
                      breakpointOffset: I,
                      animated: K,
                    } = x,
                    R = D && 0 === _,
                    C = R ? l : _,
                    ue = 0 !== C;
                  return (
                    (l = 0),
                    u &&
                      f &&
                      (u.keyframes([
                        { offset: 0, transform: `translateY(${100 * I}%)` },
                        {
                          offset: 1,
                          transform: `translateY(${100 * (1 - C)}%)`,
                        },
                      ]),
                      f.keyframes([
                        {
                          offset: 0,
                          opacity: `calc(var(--backdrop-opacity) * ${J(1 - I, s)})`,
                        },
                        {
                          offset: 1,
                          opacity: `calc(var(--backdrop-opacity) * ${J(C, s)})`,
                        },
                      ]),
                      i.progressStep(0)),
                    z.enable(!1),
                    R ? de(e, i) : ue || d(),
                    y && C === r[r.length - 1] && (y.scrollY = !0),
                    new Promise((te) => {
                      i.onFinish(
                        () => {
                          ue
                            ? u && f
                              ? (0, m.r)(() => {
                                  u.keyframes([...v.WRAPPER_KEYFRAMES]),
                                    f.keyframes([...v.BACKDROP_KEYFRAMES]),
                                    i.progressStart(!0, 1 - C),
                                    (l = C),
                                    w(l),
                                    l > s ? T() : j(),
                                    z.enable(!0),
                                    te();
                                })
                              : (z.enable(!0), te())
                            : te();
                        },
                        { oneTimeCallback: !0 },
                      ).progressEnd(1, 0, K ? 500 : 0);
                    })
                  );
                },
                z = (0, re.createGesture)({
                  el: n,
                  gestureName: 'modalSheet',
                  gesturePriority: 40,
                  direction: 'y',
                  threshold: 10,
                  canStart: (x) => {
                    const _ = (0, P.f)(x.event.target);
                    if (((l = a()), 1 === l && _)) {
                      const D = (0, P.i)(_)
                        ? (0, m.g)(_).querySelector('.inner-scroll')
                        : _;
                      return (
                        !_.querySelector('ion-refresher') && 0 === D.scrollTop
                      );
                    }
                    return !0;
                  },
                  onStart: (x) => {
                    (Y =
                      void 0 !== e.canDismiss &&
                      !0 !== e.canDismiss &&
                      0 === O),
                      x.deltaY > 0 && y && (y.scrollY = !1),
                      (0, m.r)(() => {
                        e.focus();
                      }),
                      i.progressStart(!0, 1 - l);
                  },
                  onMove: (x) => {
                    x.deltaY > 0 && y && (y.scrollY = !1);
                    const D = r.length > 1 ? 1 - r[1] : void 0,
                      I = 1 - l + x.deltaY / k,
                      K = void 0 !== D && I >= D && Y,
                      R = K ? 0.95 : 0.9999,
                      C = K && void 0 !== D ? D + q((I - D) / (R - D)) : I;
                    (S = (0, m.j)(1e-4, C, R)), i.progressStep(S);
                  },
                  onEnd: (x) => {
                    const I = l - (x.deltaY + 350 * x.velocityY) / k,
                      K = r.reduce((R, C) =>
                        Math.abs(C - I) < Math.abs(R - I) ? C : R,
                      );
                    $({
                      breakpoint: K,
                      breakpointOffset: S,
                      canDismiss: Y,
                      animated: !0,
                    });
                  },
                });
              return { gesture: z, moveSheetToBreakpoint: $ };
            })(
              this.el,
              this.backdropEl,
              e,
              t,
              n,
              s,
              this.sortedBreakpoints,
              () => {
                var a;
                return null !== (a = this.currentBreakpoint) && void 0 !== a
                  ? a
                  : 0;
              },
              () => this.sheetOnDismiss(),
              (a) => {
                this.currentBreakpoint !== a &&
                  ((this.currentBreakpoint = a),
                  this.ionBreakpointDidChange.emit({ breakpoint: a }));
              },
            );
            (this.gesture = i),
              (this.moveSheetToBreakpoint = r),
              this.gesture.enable(!0);
          }
          sheetOnDismiss() {
            var e = this;
            (this.gestureAnimationDismissing = !0),
              this.animation.onFinish(
                (0, M.A)(function* () {
                  (e.currentBreakpoint = 0),
                    e.ionBreakpointDidChange.emit({
                      breakpoint: e.currentBreakpoint,
                    }),
                    yield e.dismiss(void 0, g.G),
                    (e.gestureAnimationDismissing = !1);
                }),
              );
          }
          dismiss(e, t) {
            var n = this;
            return (0, M.A)(function* () {
              var o;
              if (n.gestureAnimationDismissing && t !== g.G) return !1;
              const s = yield n.lockController.lock();
              if ('handler' !== t && !(yield n.checkCanDismiss(e, t)))
                return s(), !1;
              const { presentingElement: i } = n;
              void 0 !== i && 'ios' === (0, W.b)(n) && X(n.statusBarStyle),
                typeof window < 'u' &&
                  n.keyboardOpenCallback &&
                  (window.removeEventListener(
                    ie.KEYBOARD_DID_OPEN,
                    n.keyboardOpenCallback,
                  ),
                  (n.keyboardOpenCallback = void 0));
              const a = yield (0, g.g)(n, e, t, 'modalLeave', fe, _e, {
                presentingEl: i,
                currentBreakpoint:
                  null !== (o = n.currentBreakpoint) && void 0 !== o
                    ? o
                    : n.initialBreakpoint,
                backdropBreakpoint: n.backdropBreakpoint,
              });
              if (a) {
                const { delegate: d } = n.getDelegate();
                yield (0, V.d)(d, n.usersElement),
                  (0, p.w)(() => n.el.classList.remove('show-modal')),
                  n.animation && n.animation.destroy(),
                  n.gesture && n.gesture.destroy();
              }
              return (
                (n.currentBreakpoint = void 0), (n.animation = void 0), s(), a
              );
            })();
          }
          onDidDismiss() {
            return (0, g.h)(this.el, 'ionModalDidDismiss');
          }
          onWillDismiss() {
            return (0, g.h)(this.el, 'ionModalWillDismiss');
          }
          setCurrentBreakpoint(e) {
            var t = this;
            return (0, M.A)(function* () {
              if (!t.isSheetModal)
                return void (0, Z.p)(
                  'setCurrentBreakpoint is only supported on sheet modals.',
                );
              if (!t.breakpoints.includes(e))
                return void (0, Z.p)(
                  `Attempted to set invalid breakpoint value ${e}. Please double check that the breakpoint value is part of your defined breakpoints.`,
                );
              const {
                currentBreakpoint: n,
                moveSheetToBreakpoint: o,
                canDismiss: s,
                breakpoints: i,
                animated: r,
              } = t;
              n !== e &&
                o &&
                ((t.sheetTransition = o({
                  breakpoint: e,
                  breakpointOffset: 1 - n,
                  canDismiss: void 0 !== s && !0 !== s && 0 === i[0],
                  animated: r,
                })),
                yield t.sheetTransition,
                (t.sheetTransition = void 0));
            })();
          }
          getCurrentBreakpoint() {
            var e = this;
            return (0, M.A)(function* () {
              return e.currentBreakpoint;
            })();
          }
          moveToNextBreakpoint() {
            var e = this;
            return (0, M.A)(function* () {
              const { breakpoints: t, currentBreakpoint: n } = e;
              if (!t || null == n) return !1;
              const o = t.filter((a) => 0 !== a),
                i = (o.indexOf(n) + 1) % o.length,
                r = o[i];
              return yield e.setCurrentBreakpoint(r), !0;
            })();
          }
          render() {
            const {
                handle: e,
                isSheetModal: t,
                presentingElement: n,
                htmlAttributes: o,
                handleBehavior: s,
                inheritedAttributes: i,
                focusTrap: r,
              } = this,
              a = !1 !== e && t,
              d = (0, W.b)(this),
              w = void 0 !== n && 'ios' === d,
              E = 'cycle' === s;
            return (0, p.h)(
              p.f,
              Object.assign(
                {
                  key: '013ba4864ca4d2c1052c512f6a4b0732b8decff7',
                  'no-router': !0,
                  tabindex: '-1',
                },
                o,
                {
                  style: { zIndex: `${2e4 + this.overlayIndex}` },
                  class: Object.assign(
                    {
                      [d]: !0,
                      'modal-default': !w && !t,
                      'modal-card': w,
                      'modal-sheet': t,
                      'overlay-hidden': !0,
                      [g.F]: !1 === r,
                    },
                    (0, ye.g)(this.cssClass),
                  ),
                  onIonBackdropTap: this.onBackdropTap,
                  onIonModalDidPresent: this.onLifecycle,
                  onIonModalWillPresent: this.onLifecycle,
                  onIonModalWillDismiss: this.onLifecycle,
                  onIonModalDidDismiss: this.onLifecycle,
                },
              ),
              (0, p.h)('ion-backdrop', {
                key: '498b1c0a03836d6799dcf3b8e9315805c70f6480',
                ref: (b) => (this.backdropEl = b),
                visible: this.showBackdrop,
                tappable: this.backdropDismiss,
                part: 'backdrop',
              }),
              'ios' === d &&
                (0, p.h)('div', {
                  key: 'ce22e4caf1096e87248926fe2477f0d5a4c8a5cf',
                  class: 'modal-shadow',
                }),
              (0, p.h)(
                'div',
                Object.assign(
                  {
                    key: '540e47b15d8290166c39b022c725182114a75682',
                    role: 'dialog',
                  },
                  i,
                  {
                    'aria-modal': 'true',
                    class: 'modal-wrapper ion-overlay-wrapper',
                    part: 'content',
                    ref: (b) => (this.wrapperEl = b),
                  },
                ),
                a &&
                  (0, p.h)('button', {
                    key: 'f3b352ec9a63a7ec801462aacfd8295b4302d115',
                    class: 'modal-handle',
                    tabIndex: E ? 0 : -1,
                    'aria-label':
                      'Activate to adjust the size of the dialog overlaying the screen',
                    onClick: E ? this.onHandleClick : void 0,
                    part: 'handle',
                  }),
                (0, p.h)('slot', {
                  key: '31a3f58f4c733ffdf736523c154200874a96b1d0',
                }),
              ),
            );
          }
          get el() {
            return (0, p.i)(this);
          }
          static get watchers() {
            return { isOpen: ['onIsOpenChange'], trigger: ['triggerChanged'] };
          }
        },
        Ce = {
          ionModalDidPresent: 'ionViewDidEnter',
          ionModalWillPresent: 'ionViewWillEnter',
          ionModalWillDismiss: 'ionViewWillLeave',
          ionModalDidDismiss: 'ionViewDidLeave',
        };
      var e;
      me.style = {
        ios: ':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, var(--ion-background-color-step-350, #c0c0be));cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0;border-end-start-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0;border-end-start-radius:0}',
        md: ':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, var(--ion-background-color-step-350, #c0c0be));cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}',
      };
    },
  },
]);
