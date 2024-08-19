'use strict';
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [6433],
  {
    6433: (Se, z, v) => {
      v.r(z), v.d(z, { ion_popover: () => G });
      var S = v(467),
        l = v(4261),
        E = v(9440),
        K = v(8621),
        P = v(4920),
        J = v(7838),
        Z = v(4929),
        N = v(9483),
        ee = v(333),
        U = v(3604),
        g = v(9986);
      v(8476), v(7192), v(1970);
      const X = (t, e, o) => {
          const r = e.getBoundingClientRect(),
            i = r.height;
          let n = r.width;
          return (
            'cover' === t && o && (n = o.getBoundingClientRect().width),
            { contentWidth: n, contentHeight: i }
          );
        },
        re = (t, e, o) => {
          let r = [];
          switch (e) {
            case 'hover':
              let i;
              r = [
                {
                  eventName: 'mouseenter',
                  callback:
                    ((n = (0, S.A)(function* (s) {
                      s.stopPropagation(),
                        i && clearTimeout(i),
                        (i = setTimeout(() => {
                          (0, P.r)(() => {
                            o.presentFromTrigger(s), (i = void 0);
                          });
                        }, 100));
                    })),
                    function (a) {
                      return n.apply(this, arguments);
                    }),
                },
                {
                  eventName: 'mouseleave',
                  callback: (n) => {
                    i && clearTimeout(i);
                    const s = n.relatedTarget;
                    s &&
                      s.closest('ion-popover') !== o &&
                      o.dismiss(void 0, void 0, !1);
                  },
                },
                { eventName: 'click', callback: (n) => n.stopPropagation() },
                {
                  eventName: 'ionPopoverActivateTrigger',
                  callback: (n) => o.presentFromTrigger(n, !0),
                },
              ];
              break;
            case 'context-menu':
              r = [
                {
                  eventName: 'contextmenu',
                  callback: (n) => {
                    n.preventDefault(), o.presentFromTrigger(n);
                  },
                },
                { eventName: 'click', callback: (n) => n.stopPropagation() },
                {
                  eventName: 'ionPopoverActivateTrigger',
                  callback: (n) => o.presentFromTrigger(n, !0),
                },
              ];
              break;
            default:
              r = [
                {
                  eventName: 'click',
                  callback: (n) => o.presentFromTrigger(n),
                },
                {
                  eventName: 'ionPopoverActivateTrigger',
                  callback: (n) => o.presentFromTrigger(n, !0),
                },
              ];
          }
          var n;
          return (
            r.forEach(({ eventName: i, callback: n }) =>
              t.addEventListener(i, n),
            ),
            t.setAttribute('data-ion-popover-trigger', 'true'),
            () => {
              r.forEach(({ eventName: i, callback: n }) =>
                t.removeEventListener(i, n),
              ),
                t.removeAttribute('data-ion-popover-trigger');
            }
          );
        },
        F = (t, e) =>
          e && 'ION-ITEM' === e.tagName ? t.findIndex((o) => o === e) : -1,
        R = (t) => {
          const o = (0, P.g)(t).querySelector('button');
          o && (0, P.r)(() => o.focus());
        },
        ae = (t) => {
          const e = (function () {
            var o = (0, S.A)(function* (r) {
              var i;
              const n = document.activeElement;
              let s = [];
              const a =
                null === (i = r.target) || void 0 === i ? void 0 : i.tagName;
              if ('ION-POPOVER' === a || 'ION-ITEM' === a) {
                try {
                  s = Array.from(
                    t.querySelectorAll(
                      'ion-item:not(ion-popover ion-popover *):not([disabled])',
                    ),
                  );
                } catch {}
                switch (r.key) {
                  case 'ArrowLeft':
                    (yield t.getParentPopover()) &&
                      t.dismiss(void 0, void 0, !1);
                    break;
                  case 'ArrowDown':
                    r.preventDefault();
                    const d = ((t, e) => t[F(t, e) + 1])(s, n);
                    void 0 !== d && R(d);
                    break;
                  case 'ArrowUp':
                    r.preventDefault();
                    const b = ((t, e) => t[F(t, e) - 1])(s, n);
                    void 0 !== b && R(b);
                    break;
                  case 'Home':
                    r.preventDefault();
                    const f = s[0];
                    void 0 !== f && R(f);
                    break;
                  case 'End':
                    r.preventDefault();
                    const u = s[s.length - 1];
                    void 0 !== u && R(u);
                    break;
                  case 'ArrowRight':
                  case ' ':
                  case 'Enter':
                    if (
                      n &&
                      ((t) => t.hasAttribute('data-ion-popover-trigger'))(n)
                    ) {
                      const h = new CustomEvent('ionPopoverActivateTrigger');
                      n.dispatchEvent(h);
                    }
                }
              }
            });
            return function (i) {
              return o.apply(this, arguments);
            };
          })();
          return (
            t.addEventListener('keydown', e),
            () => t.removeEventListener('keydown', e)
          );
        },
        V = (t, e, o, r, i, n, s, a, c, d, b) => {
          var f;
          let u = { top: 0, left: 0, width: 0, height: 0 };
          if ('event' === n) {
            if (!b) return c;
            u = { top: b.clientY, left: b.clientX, width: 1, height: 1 };
          } else {
            const T =
              d ||
              (null === (f = null == b ? void 0 : b.detail) || void 0 === f
                ? void 0
                : f.ionShadowTarget) ||
              (null == b ? void 0 : b.target);
            if (!T) return c;
            const k = T.getBoundingClientRect();
            u = { top: k.top, left: k.left, width: k.width, height: k.height };
          }
          const h = de(s, u, e, o, r, i, t),
            x = le(a, s, u, e, o),
            y = h.top + x.top,
            _ = h.left + x.left,
            { arrowTop: m, arrowLeft: D } = pe(s, r, i, y, _, e, o, t),
            { originX: w, originY: A } = ce(s, a, t);
          return {
            top: y,
            left: _,
            referenceCoordinates: u,
            arrowTop: m,
            arrowLeft: D,
            originX: w,
            originY: A,
          };
        },
        ce = (t, e, o) => {
          switch (t) {
            case 'top':
              return { originX: B(e), originY: 'bottom' };
            case 'bottom':
              return { originX: B(e), originY: 'top' };
            case 'left':
              return { originX: 'right', originY: $(e) };
            case 'right':
              return { originX: 'left', originY: $(e) };
            case 'start':
              return { originX: o ? 'left' : 'right', originY: $(e) };
            case 'end':
              return { originX: o ? 'right' : 'left', originY: $(e) };
          }
        },
        B = (t) => {
          switch (t) {
            case 'start':
              return 'left';
            case 'center':
              return 'center';
            case 'end':
              return 'right';
          }
        },
        $ = (t) => {
          switch (t) {
            case 'start':
              return 'top';
            case 'center':
              return 'center';
            case 'end':
              return 'bottom';
          }
        },
        pe = (t, e, o, r, i, n, s, a) => {
          const c = { arrowTop: r + s / 2 - e / 2, arrowLeft: i + n - e / 2 },
            d = { arrowTop: r + s / 2 - e / 2, arrowLeft: i - 1.5 * e };
          switch (t) {
            case 'top':
              return { arrowTop: r + s, arrowLeft: i + n / 2 - e / 2 };
            case 'bottom':
              return { arrowTop: r - o, arrowLeft: i + n / 2 - e / 2 };
            case 'left':
              return c;
            case 'right':
              return d;
            case 'start':
              return a ? d : c;
            case 'end':
              return a ? c : d;
            default:
              return { arrowTop: 0, arrowLeft: 0 };
          }
        },
        de = (t, e, o, r, i, n, s) => {
          const a = { top: e.top, left: e.left - o - i },
            c = { top: e.top, left: e.left + e.width + i };
          switch (t) {
            case 'top':
              return { top: e.top - r - n, left: e.left };
            case 'right':
              return c;
            case 'bottom':
              return { top: e.top + e.height + n, left: e.left };
            case 'left':
              return a;
            case 'start':
              return s ? c : a;
            case 'end':
              return s ? a : c;
          }
        },
        le = (t, e, o, r, i) => {
          switch (t) {
            case 'center':
              return he(e, o, r, i);
            case 'end':
              return fe(e, o, r, i);
            default:
              return { top: 0, left: 0 };
          }
        },
        fe = (t, e, o, r) => {
          switch (t) {
            case 'start':
            case 'end':
            case 'left':
            case 'right':
              return { top: -(r - e.height), left: 0 };
            default:
              return { top: 0, left: -(o - e.width) };
          }
        },
        he = (t, e, o, r) => {
          switch (t) {
            case 'start':
            case 'end':
            case 'left':
            case 'right':
              return { top: -(r / 2 - e.height / 2), left: 0 };
            default:
              return { top: 0, left: -(o / 2 - e.width / 2) };
          }
        },
        q = (t, e, o, r, i, n, s, a, c, d, b, f, u = 0, h = 0, x = 0) => {
          let y = u;
          const _ = h;
          let w,
            m = o,
            D = e,
            A = d,
            I = b,
            p = !1,
            T = !1;
          const k = f ? f.top + f.height : n / 2 - a / 2,
            O = f ? f.height : 0;
          let L = !1;
          return (
            m < r + c
              ? ((m = r), (p = !0), (A = 'left'))
              : s + r + m + c > i && ((T = !0), (m = i - s - r), (A = 'right')),
            k + O + a > n &&
              ('top' === t || 'bottom' === t) &&
              (k - a > 0
                ? ((D = Math.max(12, k - a - O - (x - 1))),
                  (y = D + a),
                  (I = 'bottom'),
                  (L = !0))
                : (w = r)),
            {
              top: D,
              left: m,
              bottom: w,
              originX: A,
              originY: I,
              checkSafeAreaLeft: p,
              checkSafeAreaRight: T,
              arrowTop: y,
              arrowLeft: _,
              addPopoverBottomClass: L,
            }
          );
        },
        me = (t, e) => {
          var o;
          const {
              event: r,
              size: i,
              trigger: n,
              reference: s,
              side: a,
              align: c,
            } = e,
            d = t.ownerDocument,
            b = 'rtl' === d.dir,
            f = d.defaultView.innerWidth,
            u = d.defaultView.innerHeight,
            h = (0, P.g)(t),
            x = h.querySelector('.popover-content'),
            y = h.querySelector('.popover-arrow'),
            _ =
              n ||
              (null === (o = null == r ? void 0 : r.detail) || void 0 === o
                ? void 0
                : o.ionShadowTarget) ||
              (null == r ? void 0 : r.target),
            { contentWidth: m, contentHeight: D } = X(i, x, _),
            { arrowWidth: w, arrowHeight: A } = ((t) => {
              if (!t) return { arrowWidth: 0, arrowHeight: 0 };
              const { width: e, height: o } = t.getBoundingClientRect();
              return { arrowWidth: e, arrowHeight: o };
            })(y),
            p = V(
              b,
              m,
              D,
              w,
              A,
              s,
              a,
              c,
              {
                top: u / 2 - D / 2,
                left: f / 2 - m / 2,
                originX: b ? 'right' : 'left',
                originY: 'top',
              },
              n,
              r,
            ),
            T = 'cover' === i ? 0 : 5,
            k = 'cover' === i ? 0 : 25,
            {
              originX: O,
              originY: L,
              top: M,
              left: C,
              bottom: W,
              checkSafeAreaLeft: j,
              checkSafeAreaRight: _e,
              arrowTop: De,
              arrowLeft: Ae,
              addPopoverBottomClass: Ee,
            } = q(
              a,
              p.top,
              p.left,
              T,
              f,
              u,
              m,
              D,
              k,
              p.originX,
              p.originY,
              p.referenceCoordinates,
              p.arrowTop,
              p.arrowLeft,
              A,
            ),
            Ie = (0, g.c)(),
            Q = (0, g.c)(),
            H = (0, g.c)();
          return (
            Q.addElement(h.querySelector('ion-backdrop'))
              .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
              .beforeStyles({ 'pointer-events': 'none' })
              .afterClearStyles(['pointer-events']),
            H.addElement(h.querySelector('.popover-arrow'))
              .addElement(h.querySelector('.popover-content'))
              .fromTo('opacity', 0.01, 1),
            Ie.easing('ease')
              .duration(100)
              .beforeAddWrite(() => {
                'cover' === i && t.style.setProperty('--width', `${m}px`),
                  Ee && t.classList.add('popover-bottom'),
                  void 0 !== W && x.style.setProperty('bottom', `${W}px`);
                let Y = `${C}px`;
                j && (Y = `${C}px + var(--ion-safe-area-left, 0)`),
                  _e && (Y = `${C}px - var(--ion-safe-area-right, 0)`),
                  x.style.setProperty(
                    'top',
                    `calc(${M}px + var(--offset-y, 0))`,
                  ),
                  x.style.setProperty(
                    'left',
                    `calc(${Y} + var(--offset-x, 0))`,
                  ),
                  x.style.setProperty('transform-origin', `${L} ${O}`),
                  null !== y &&
                    (((t, e = !1, o, r) =>
                      !((!o && !r) || ('top' !== t && 'bottom' !== t && e)))(
                      a,
                      p.top !== M || p.left !== C,
                      r,
                      n,
                    )
                      ? (y.style.setProperty(
                          'top',
                          `calc(${De}px + var(--offset-y, 0))`,
                        ),
                        y.style.setProperty(
                          'left',
                          `calc(${Ae}px + var(--offset-x, 0))`,
                        ))
                      : y.style.setProperty('display', 'none'));
              })
              .addAnimation([Q, H])
          );
        },
        ge = (t) => {
          const e = (0, P.g)(t),
            o = e.querySelector('.popover-content'),
            r = e.querySelector('.popover-arrow'),
            i = (0, g.c)(),
            n = (0, g.c)(),
            s = (0, g.c)();
          return (
            n
              .addElement(e.querySelector('ion-backdrop'))
              .fromTo('opacity', 'var(--backdrop-opacity)', 0),
            s
              .addElement(e.querySelector('.popover-arrow'))
              .addElement(e.querySelector('.popover-content'))
              .fromTo('opacity', 0.99, 0),
            i
              .easing('ease')
              .afterAddWrite(() => {
                t.style.removeProperty('--width'),
                  t.classList.remove('popover-bottom'),
                  o.style.removeProperty('top'),
                  o.style.removeProperty('left'),
                  o.style.removeProperty('bottom'),
                  o.style.removeProperty('transform-origin'),
                  r &&
                    (r.style.removeProperty('top'),
                    r.style.removeProperty('left'),
                    r.style.removeProperty('display'));
              })
              .duration(300)
              .addAnimation([n, s])
          );
        },
        xe = (t, e) => {
          var o;
          const {
              event: r,
              size: i,
              trigger: n,
              reference: s,
              side: a,
              align: c,
            } = e,
            d = t.ownerDocument,
            b = 'rtl' === d.dir,
            f = d.defaultView.innerWidth,
            u = d.defaultView.innerHeight,
            h = (0, P.g)(t),
            x = h.querySelector('.popover-content'),
            y =
              n ||
              (null === (o = null == r ? void 0 : r.detail) || void 0 === o
                ? void 0
                : o.ionShadowTarget) ||
              (null == r ? void 0 : r.target),
            { contentWidth: _, contentHeight: m } = X(i, x, y),
            w = V(
              b,
              _,
              m,
              0,
              0,
              s,
              a,
              c,
              {
                top: u / 2 - m / 2,
                left: f / 2 - _ / 2,
                originX: b ? 'right' : 'left',
                originY: 'top',
              },
              n,
              r,
            ),
            A = 'cover' === i ? 0 : 12,
            {
              originX: I,
              originY: p,
              top: T,
              left: k,
              bottom: O,
            } = q(
              a,
              w.top,
              w.left,
              A,
              f,
              u,
              _,
              m,
              0,
              w.originX,
              w.originY,
              w.referenceCoordinates,
            ),
            L = (0, g.c)(),
            M = (0, g.c)(),
            C = (0, g.c)(),
            W = (0, g.c)(),
            j = (0, g.c)();
          return (
            M.addElement(h.querySelector('ion-backdrop'))
              .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
              .beforeStyles({ 'pointer-events': 'none' })
              .afterClearStyles(['pointer-events']),
            C.addElement(h.querySelector('.popover-wrapper'))
              .duration(150)
              .fromTo('opacity', 0.01, 1),
            W.addElement(x)
              .beforeStyles({
                top: `calc(${T}px + var(--offset-y, 0px))`,
                left: `calc(${k}px + var(--offset-x, 0px))`,
                'transform-origin': `${p} ${I}`,
              })
              .beforeAddWrite(() => {
                void 0 !== O && x.style.setProperty('bottom', `${O}px`);
              })
              .fromTo('transform', 'scale(0.8)', 'scale(1)'),
            j
              .addElement(h.querySelector('.popover-viewport'))
              .fromTo('opacity', 0.01, 1),
            L.easing('cubic-bezier(0.36,0.66,0.04,1)')
              .duration(300)
              .beforeAddWrite(() => {
                'cover' === i && t.style.setProperty('--width', `${_}px`),
                  'bottom' === p && t.classList.add('popover-bottom');
              })
              .addAnimation([M, C, W, j])
          );
        },
        ye = (t) => {
          const e = (0, P.g)(t),
            o = e.querySelector('.popover-content'),
            r = (0, g.c)(),
            i = (0, g.c)(),
            n = (0, g.c)();
          return (
            i
              .addElement(e.querySelector('ion-backdrop'))
              .fromTo('opacity', 'var(--backdrop-opacity)', 0),
            n
              .addElement(e.querySelector('.popover-wrapper'))
              .fromTo('opacity', 0.99, 0),
            r
              .easing('ease')
              .afterAddWrite(() => {
                t.style.removeProperty('--width'),
                  t.classList.remove('popover-bottom'),
                  o.style.removeProperty('top'),
                  o.style.removeProperty('left'),
                  o.style.removeProperty('bottom'),
                  o.style.removeProperty('transform-origin');
              })
              .duration(150)
              .addAnimation([i, n])
          );
        },
        G = class {
          constructor(t) {
            (0, l.r)(this, t),
              (this.didPresent = (0, l.d)(this, 'ionPopoverDidPresent', 7)),
              (this.willPresent = (0, l.d)(this, 'ionPopoverWillPresent', 7)),
              (this.willDismiss = (0, l.d)(this, 'ionPopoverWillDismiss', 7)),
              (this.didDismiss = (0, l.d)(this, 'ionPopoverDidDismiss', 7)),
              (this.didPresentShorthand = (0, l.d)(this, 'didPresent', 7)),
              (this.willPresentShorthand = (0, l.d)(this, 'willPresent', 7)),
              (this.willDismissShorthand = (0, l.d)(this, 'willDismiss', 7)),
              (this.didDismissShorthand = (0, l.d)(this, 'didDismiss', 7)),
              (this.ionMount = (0, l.d)(this, 'ionMount', 7)),
              (this.parentPopover = null),
              (this.coreDelegate = (0, K.C)()),
              (this.lockController = (0, J.c)()),
              (this.inline = !1),
              (this.focusDescendantOnPresent = !1),
              (this.onBackdropTap = () => {
                this.dismiss(void 0, E.B);
              }),
              (this.onLifecycle = (e) => {
                const o = this.usersElement,
                  r = Pe[e.type];
                if (o && r) {
                  const i = new CustomEvent(r, {
                    bubbles: !1,
                    cancelable: !1,
                    detail: e.detail,
                  });
                  o.dispatchEvent(i);
                }
              }),
              (this.configureTriggerInteraction = () => {
                const {
                  trigger: e,
                  triggerAction: o,
                  el: r,
                  destroyTriggerInteraction: i,
                } = this;
                if ((i && i(), void 0 === e)) return;
                const n = (this.triggerEl =
                  void 0 !== e ? document.getElementById(e) : null);
                n
                  ? (this.destroyTriggerInteraction = re(n, o, r))
                  : (0, Z.p)(
                      `A trigger element with the ID "${e}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on ion-popover.`,
                      this.el,
                    );
              }),
              (this.configureKeyboardInteraction = () => {
                const { destroyKeyboardInteraction: e, el: o } = this;
                e && e(), (this.destroyKeyboardInteraction = ae(o));
              }),
              (this.configureDismissInteraction = () => {
                const {
                  destroyDismissInteraction: e,
                  parentPopover: o,
                  triggerAction: r,
                  triggerEl: i,
                  el: n,
                } = this;
                !o ||
                  !i ||
                  (e && e(),
                  (this.destroyDismissInteraction = ((t, e, o, r) => {
                    let i = [];
                    const s = (0, P.g)(r).querySelector('.popover-content');
                    return (
                      (i =
                        'hover' === e
                          ? [
                              {
                                eventName: 'mouseenter',
                                callback: (a) => {
                                  document.elementFromPoint(
                                    a.clientX,
                                    a.clientY,
                                  ) !== t && o.dismiss(void 0, void 0, !1);
                                },
                              },
                            ]
                          : [
                              {
                                eventName: 'click',
                                callback: (a) => {
                                  a.target.closest(
                                    '[data-ion-popover-trigger]',
                                  ) !== t
                                    ? o.dismiss(void 0, void 0, !1)
                                    : a.stopPropagation();
                                },
                              },
                            ]),
                      i.forEach(({ eventName: a, callback: c }) =>
                        s.addEventListener(a, c),
                      ),
                      () => {
                        i.forEach(({ eventName: a, callback: c }) =>
                          s.removeEventListener(a, c),
                        );
                      }
                    );
                  })(i, r, n, o)));
              }),
              (this.presented = !1),
              (this.hasController = !1),
              (this.delegate = void 0),
              (this.overlayIndex = void 0),
              (this.enterAnimation = void 0),
              (this.leaveAnimation = void 0),
              (this.component = void 0),
              (this.componentProps = void 0),
              (this.keyboardClose = !0),
              (this.cssClass = void 0),
              (this.backdropDismiss = !0),
              (this.event = void 0),
              (this.showBackdrop = !0),
              (this.translucent = !1),
              (this.animated = !0),
              (this.htmlAttributes = void 0),
              (this.triggerAction = 'click'),
              (this.trigger = void 0),
              (this.size = 'auto'),
              (this.dismissOnSelect = !1),
              (this.reference = 'trigger'),
              (this.side = 'bottom'),
              (this.alignment = void 0),
              (this.arrow = !0),
              (this.isOpen = !1),
              (this.keyboardEvents = !1),
              (this.focusTrap = !0),
              (this.keepContentsMounted = !1);
          }
          onTriggerChange() {
            this.configureTriggerInteraction();
          }
          onIsOpenChange(t, e) {
            !0 === t && !1 === e
              ? this.present()
              : !1 === t && !0 === e && this.dismiss();
          }
          connectedCallback() {
            const { configureTriggerInteraction: t, el: e } = this;
            (0, E.j)(e), t();
          }
          disconnectedCallback() {
            const { destroyTriggerInteraction: t } = this;
            t && t();
          }
          componentWillLoad() {
            var t, e;
            const { el: o } = this,
              r =
                null !==
                  (e =
                    null === (t = this.htmlAttributes) || void 0 === t
                      ? void 0
                      : t.id) && void 0 !== e
                  ? e
                  : (0, E.k)(o);
            (this.parentPopover = o.closest(`ion-popover:not(#${r})`)),
              void 0 === this.alignment &&
                (this.alignment =
                  'ios' === (0, N.b)(this) ? 'center' : 'start');
          }
          componentDidLoad() {
            const { parentPopover: t, isOpen: e } = this;
            !0 === e && (0, P.r)(() => this.present()),
              t &&
                (0, P.a)(t, 'ionPopoverWillDismiss', () => {
                  this.dismiss(void 0, void 0, !1);
                }),
              this.configureTriggerInteraction();
          }
          presentFromTrigger(t, e = !1) {
            var o = this;
            return (0, S.A)(function* () {
              (o.focusDescendantOnPresent = e),
                yield o.present(t),
                (o.focusDescendantOnPresent = !1);
            })();
          }
          getDelegate(t = !1) {
            if (this.workingDelegate && !t)
              return { delegate: this.workingDelegate, inline: this.inline };
            const o = (this.inline =
              null !== this.el.parentNode && !this.hasController);
            return {
              inline: o,
              delegate: (this.workingDelegate = o
                ? this.delegate || this.coreDelegate
                : this.delegate),
            };
          }
          present(t) {
            var e = this;
            return (0, S.A)(function* () {
              const o = yield e.lockController.lock();
              if (e.presented) return void o();
              const { el: r } = e,
                { inline: i, delegate: n } = e.getDelegate(!0);
              e.ionMount.emit(),
                (e.usersElement = yield (0, K.a)(
                  n,
                  r,
                  e.component,
                  ['popover-viewport'],
                  e.componentProps,
                  i,
                )),
                e.keyboardEvents || e.configureKeyboardInteraction(),
                e.configureDismissInteraction(),
                (0, P.k)(r)
                  ? yield (0, U.e)(e.usersElement)
                  : e.keepContentsMounted || (yield (0, U.w)()),
                yield (0, E.f)(e, 'popoverEnter', me, xe, {
                  event: t || e.event,
                  size: e.size,
                  trigger: e.triggerEl,
                  reference: e.reference,
                  side: e.side,
                  align: e.alignment,
                }),
                e.focusDescendantOnPresent && (0, E.n)(r),
                o();
            })();
          }
          dismiss(t, e, o = !0) {
            var r = this;
            return (0, S.A)(function* () {
              const i = yield r.lockController.lock(),
                {
                  destroyKeyboardInteraction: n,
                  destroyDismissInteraction: s,
                } = r;
              o && r.parentPopover && r.parentPopover.dismiss(t, e, o);
              const a = yield (0, E.g)(
                r,
                t,
                e,
                'popoverLeave',
                ge,
                ye,
                r.event,
              );
              if (a) {
                n && (n(), (r.destroyKeyboardInteraction = void 0)),
                  s && (s(), (r.destroyDismissInteraction = void 0));
                const { delegate: c } = r.getDelegate();
                yield (0, K.d)(c, r.usersElement);
              }
              return i(), a;
            })();
          }
          getParentPopover() {
            var t = this;
            return (0, S.A)(function* () {
              return t.parentPopover;
            })();
          }
          onDidDismiss() {
            return (0, E.h)(this.el, 'ionPopoverDidDismiss');
          }
          onWillDismiss() {
            return (0, E.h)(this.el, 'ionPopoverWillDismiss');
          }
          render() {
            const t = (0, N.b)(this),
              {
                onLifecycle: e,
                parentPopover: o,
                dismissOnSelect: r,
                side: i,
                arrow: n,
                htmlAttributes: s,
                focusTrap: a,
              } = this,
              c = (0, N.a)('desktop'),
              d = n && !o;
            return (0, l.h)(
              l.f,
              Object.assign(
                {
                  key: '3a7c4c39384bab1447c4bd6b9b06d7837a09353b',
                  'aria-modal': 'true',
                  'no-router': !0,
                  tabindex: '-1',
                },
                s,
                {
                  style: { zIndex: `${2e4 + this.overlayIndex}` },
                  class: Object.assign(
                    Object.assign({}, (0, ee.g)(this.cssClass)),
                    {
                      [t]: !0,
                      'popover-translucent': this.translucent,
                      'overlay-hidden': !0,
                      'popover-desktop': c,
                      [`popover-side-${i}`]: !0,
                      [E.F]: !1 === a,
                      'popover-nested': !!o,
                    },
                  ),
                  onIonPopoverDidPresent: e,
                  onIonPopoverWillPresent: e,
                  onIonPopoverWillDismiss: e,
                  onIonPopoverDidDismiss: e,
                  onIonBackdropTap: this.onBackdropTap,
                },
              ),
              !o &&
                (0, l.h)('ion-backdrop', {
                  key: '38a1c4ad29238d1e81cab407f099121fa4947cce',
                  tappable: this.backdropDismiss,
                  visible: this.showBackdrop,
                  part: 'backdrop',
                }),
              (0, l.h)(
                'div',
                {
                  key: 'f825494c5e3be89d7fcf0229e29b405bccb13edb',
                  class: 'popover-wrapper ion-overlay-wrapper',
                  onClick: r ? () => this.dismiss() : void 0,
                },
                d &&
                  (0, l.h)('div', {
                    key: '3acae5a0106389c776c8ffe5bf10f3ff006e0346',
                    class: 'popover-arrow',
                    part: 'arrow',
                  }),
                (0, l.h)(
                  'div',
                  {
                    key: '2aa73e9f06b1d2ac4c0d36c23186b9164f395079',
                    class: 'popover-content',
                    part: 'content',
                  },
                  (0, l.h)('slot', {
                    key: '62f5713414aae47dde6a8aef1f9b69af287534ae',
                  }),
                ),
              ),
            );
          }
          get el() {
            return (0, l.i)(this);
          }
          static get watchers() {
            return {
              trigger: ['onTriggerChange'],
              triggerAction: ['onTriggerChange'],
              isOpen: ['onIsOpenChange'],
            };
          }
        },
        Pe = {
          ionPopoverDidPresent: 'ionViewDidEnter',
          ionPopoverWillPresent: 'ionViewWillEnter',
          ionPopoverWillDismiss: 'ionViewWillLeave',
          ionPopoverDidDismiss: 'ionViewDidLeave',
        };
      G.style = {
        ios: ':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}::slotted(.popover-viewport){--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-start:dir(rtl)){--offset-x:-5px}}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-end:dir(rtl)){--offset-x:5px}}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6))}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden;z-index:11}.popover-arrow::after{top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}.popover-arrow::after{inset-inline-start:3px}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}@supports selector(:dir(rtl)){:host(.popover-side-start:dir(rtl)) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports selector(:dir(rtl)){:host(.popover-side-end:dir(rtl)) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}}.popover-arrow,.popover-content{opacity:0}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',
        md: ':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}::slotted(.popover-viewport){--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-start:dir(rtl)){--offset-x:-5px}}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}@supports selector(:dir(rtl)){:host(.popover-nested.popover-side-end:dir(rtl)){--offset-x:5px}}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}[dir=rtl] .popover-content{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.popover-content:dir(rtl){-webkit-transform-origin:right top;transform-origin:right top}}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}.popover-wrapper{opacity:0}',
      };
    },
  },
]);
