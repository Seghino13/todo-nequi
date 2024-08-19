'use strict';
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [2075],
  {
    2075: (N, x, o) => {
      o.r(x),
        o.d(x, {
          ion_menu: () => y,
          ion_menu_button: () => U,
          ion_menu_toggle: () => G,
        });
      var l = o(467),
        i = o(4261),
        S = o(3351),
        g = o(9440),
        P = o(1970),
        D = o(7192),
        h = o(4920),
        u = o(9568),
        b = o(333),
        m = o(9483),
        w = o(3992);
      o(8476), o(9986);
      const y = class {
          constructor(e) {
            (0, i.r)(this, e),
              (this.ionWillOpen = (0, i.d)(this, 'ionWillOpen', 7)),
              (this.ionWillClose = (0, i.d)(this, 'ionWillClose', 7)),
              (this.ionDidOpen = (0, i.d)(this, 'ionDidOpen', 7)),
              (this.ionDidClose = (0, i.d)(this, 'ionDidClose', 7)),
              (this.ionMenuChange = (0, i.d)(this, 'ionMenuChange', 7)),
              (this.lastOnEnd = 0),
              (this.blocker = P.G.createBlocker({ disableScroll: !0 })),
              (this.didLoad = !1),
              (this.operationCancelled = !1),
              (this.isAnimating = !1),
              (this._isOpen = !1),
              (this.inheritedAttributes = {}),
              (this.handleFocus = (t) => {
                const n = (0, g.o)(document);
                (n && !n.contains(this.el)) ||
                  this.trapKeyboardFocus(t, document);
              }),
              (this.isPaneVisible = !1),
              (this.isEndSide = !1),
              (this.contentId = void 0),
              (this.menuId = void 0),
              (this.type = void 0),
              (this.disabled = !1),
              (this.side = 'start'),
              (this.swipeGesture = !0),
              (this.maxEdgeStart = 50);
          }
          typeChanged(e, t) {
            const n = this.contentEl;
            n &&
              (void 0 !== t && n.classList.remove(`menu-content-${t}`),
              n.classList.add(`menu-content-${e}`),
              n.removeAttribute('style')),
              this.menuInnerEl && this.menuInnerEl.removeAttribute('style'),
              (this.animation = void 0);
          }
          disabledChanged() {
            this.updateState(),
              this.ionMenuChange.emit({
                disabled: this.disabled,
                open: this._isOpen,
              });
          }
          sideChanged() {
            (this.isEndSide = (0, h.n)(this.side)), (this.animation = void 0);
          }
          swipeGestureChanged() {
            this.updateState();
          }
          connectedCallback() {
            var e = this;
            return (0, l.A)(function* () {
              typeof customElements < 'u' &&
                null != customElements &&
                (yield customElements.whenDefined('ion-menu')),
                void 0 === e.type && (e.type = m.c.get('menuType', 'overlay'));
              const t =
                void 0 !== e.contentId
                  ? document.getElementById(e.contentId)
                  : null;
              null !== t
                ? (e.el.contains(t) &&
                    console.error(
                      'Menu: "contentId" should refer to the main view\'s ion-content, not the ion-content inside of the ion-menu.',
                    ),
                  (e.contentEl = t),
                  t.classList.add('menu-content'),
                  e.typeChanged(e.type, void 0),
                  e.sideChanged(),
                  u.m._register(e),
                  e.menuChanged(),
                  (e.gesture = (yield Promise.resolve().then(
                    o.bind(o, 8607),
                  )).createGesture({
                    el: document,
                    gestureName: 'menu-swipe',
                    gesturePriority: 30,
                    threshold: 10,
                    blurOnStart: !0,
                    canStart: (n) => e.canStart(n),
                    onWillStart: () => e.onWillStart(),
                    onStart: () => e.onStart(),
                    onMove: (n) => e.onMove(n),
                    onEnd: (n) => e.onEnd(n),
                  })),
                  e.updateState())
                : console.error(
                    'Menu: must have a "content" element to listen for drag events on.',
                  );
            })();
          }
          componentWillLoad() {
            this.inheritedAttributes = (0, h.i)(this.el);
          }
          componentDidLoad() {
            var e = this;
            return (0, l.A)(function* () {
              e.didLoad = !0;
              const t = e.el.closest('ion-split-pane');
              null !== t && (e.isPaneVisible = yield t.isVisible()),
                e.menuChanged(),
                e.updateState();
            })();
          }
          menuChanged() {
            this.didLoad &&
              this.ionMenuChange.emit({
                disabled: this.disabled,
                open: this._isOpen,
              });
          }
          disconnectedCallback() {
            var e = this;
            return (0, l.A)(function* () {
              yield e.close(!1),
                e.blocker.destroy(),
                u.m._unregister(e),
                e.animation && e.animation.destroy(),
                e.gesture && (e.gesture.destroy(), (e.gesture = void 0)),
                (e.animation = void 0),
                (e.contentEl = void 0);
            })();
          }
          onSplitPaneChanged(e) {
            const t = this.el.closest('ion-split-pane');
            null !== t &&
              t === e.target &&
              ((this.isPaneVisible = e.detail.visible), this.updateState());
          }
          onBackdropClick(e) {
            this._isOpen &&
              this.lastOnEnd < e.timeStamp - 100 &&
              e.composedPath &&
              !e.composedPath().includes(this.menuInnerEl) &&
              (e.preventDefault(), e.stopPropagation(), this.close());
          }
          onKeydown(e) {
            'Escape' === e.key && this.close();
          }
          isOpen() {
            return Promise.resolve(this._isOpen);
          }
          isActive() {
            return Promise.resolve(this._isActive());
          }
          open(e = !0) {
            return this.setOpen(!0, e);
          }
          close(e = !0) {
            return this.setOpen(!1, e);
          }
          toggle(e = !0) {
            return this.setOpen(!this._isOpen, e);
          }
          setOpen(e, t = !0) {
            return u.m._setOpen(this, e, t);
          }
          trapKeyboardFocus(e, t) {
            const n = e.target;
            if (n)
              if (this.el.contains(n)) this.lastFocus = n;
              else {
                const { el: s } = this;
                (0, g.n)(s), this.lastFocus === t.activeElement && (0, g.q)(s);
              }
          }
          _setOpen(e, t = !0) {
            var n = this;
            return (0, l.A)(function* () {
              return !(
                !n._isActive() ||
                n.isAnimating ||
                e === n._isOpen ||
                (n.beforeAnimation(e),
                yield n.loadAnimation(),
                yield n.startAnimation(e, t),
                n.operationCancelled
                  ? ((n.operationCancelled = !1), 1)
                  : (n.afterAnimation(e), 0))
              );
            })();
          }
          loadAnimation() {
            var e = this;
            return (0, l.A)(function* () {
              const t = e.menuInnerEl.offsetWidth,
                n = (0, h.n)(e.side);
              if (t === e.width && void 0 !== e.animation && n === e.isEndSide)
                return;
              (e.width = t),
                (e.isEndSide = n),
                e.animation && (e.animation.destroy(), (e.animation = void 0));
              const s = (e.animation = yield u.m._createAnimation(e.type, e));
              m.c.getBoolean('animated', !0) || s.duration(0), s.fill('both');
            })();
          }
          startAnimation(e, t) {
            var n = this;
            return (0, l.A)(function* () {
              const s = !e,
                r = (0, m.b)(n),
                c =
                  'ios' === r
                    ? 'cubic-bezier(0.32,0.72,0,1)'
                    : 'cubic-bezier(0.0,0.0,0.2,1)',
                d =
                  'ios' === r
                    ? 'cubic-bezier(1, 0, 0.68, 0.28)'
                    : 'cubic-bezier(0.4, 0, 0.6, 1)',
                a = n.animation
                  .direction(s ? 'reverse' : 'normal')
                  .easing(s ? d : c);
              t ? yield a.play() : a.play({ sync: !0 }),
                'reverse' === a.getDirection() && a.direction('normal');
            })();
          }
          _isActive() {
            return !this.disabled && !this.isPaneVisible;
          }
          canSwipe() {
            return this.swipeGesture && !this.isAnimating && this._isActive();
          }
          canStart(e) {
            return (
              !(
                document.querySelector('ion-modal.show-modal') ||
                !this.canSwipe()
              ) &&
              (!!this._isOpen ||
                (!u.m._getOpenSync() &&
                  j(window, e.currentX, this.isEndSide, this.maxEdgeStart)))
            );
          }
          onWillStart() {
            return this.beforeAnimation(!this._isOpen), this.loadAnimation();
          }
          onStart() {
            this.isAnimating && this.animation
              ? this.animation.progressStart(!0, this._isOpen ? 1 : 0)
              : (0, h.m)(!1, 'isAnimating has to be true');
          }
          onMove(e) {
            if (!this.isAnimating || !this.animation)
              return void (0, h.m)(!1, 'isAnimating has to be true');
            const n = k(e.deltaX, this._isOpen, this.isEndSide) / this.width;
            this.animation.progressStep(this._isOpen ? 1 - n : n);
          }
          onEnd(e) {
            if (!this.isAnimating || !this.animation)
              return void (0, h.m)(!1, 'isAnimating has to be true');
            const t = this._isOpen,
              n = this.isEndSide,
              s = k(e.deltaX, t, n),
              r = this.width,
              c = s / r,
              d = e.velocityX,
              a = r / 2,
              f = d >= 0 && (d > 0.2 || e.deltaX > a),
              O = d <= 0 && (d < -0.2 || e.deltaX < -a),
              p = t ? (n ? f : O) : n ? O : f;
            let M = !t && p;
            t && !p && (M = !0), (this.lastOnEnd = e.currentTime);
            let v = p ? 0.001 : -0.001;
            v +=
              (0, S.g)(
                [0, 0],
                [0.4, 0],
                [0.6, 1],
                [1, 1],
                (0, h.j)(0, c < 0 ? 0.01 : c, 0.9999),
              )[0] || 0;
            const X = this._isOpen ? !p : p;
            this.animation
              .easing('cubic-bezier(0.4, 0.0, 0.6, 1)')
              .onFinish(() => this.afterAnimation(M), { oneTimeCallback: !0 })
              .progressEnd(X ? 1 : 0, this._isOpen ? 1 - v : v, 300);
          }
          beforeAnimation(e) {
            (0, h.m)(
              !this.isAnimating,
              '_before() should not be called while animating',
            ),
              this.el.classList.add(_),
              this.el.setAttribute('tabindex', '0'),
              this.backdropEl && this.backdropEl.classList.add(E),
              this.contentEl &&
                (this.contentEl.classList.add(C),
                this.contentEl.setAttribute('aria-hidden', 'true')),
              this.blocker.block(),
              (this.isAnimating = !0),
              e ? this.ionWillOpen.emit() : this.ionWillClose.emit();
          }
          afterAnimation(e) {
            var t;
            (this._isOpen = e),
              (this.isAnimating = !1),
              this._isOpen || this.blocker.unblock(),
              e
                ? (this.ionDidOpen.emit(),
                  (null === (t = document.activeElement) || void 0 === t
                    ? void 0
                    : t.closest('ion-menu')) !== this.el && this.el.focus(),
                  document.addEventListener('focus', this.handleFocus, !0))
                : (this.el.classList.remove(_),
                  this.el.removeAttribute('tabindex'),
                  this.contentEl &&
                    (this.contentEl.classList.remove(C),
                    this.contentEl.removeAttribute('aria-hidden')),
                  this.backdropEl && this.backdropEl.classList.remove(E),
                  this.animation && this.animation.stop(),
                  this.ionDidClose.emit(),
                  document.removeEventListener('focus', this.handleFocus, !0));
          }
          updateState() {
            const e = this._isActive();
            this.gesture && this.gesture.enable(e && this.swipeGesture),
              e ||
                (this.isAnimating && (this.operationCancelled = !0),
                this.afterAnimation(!1));
          }
          render() {
            const {
                type: e,
                disabled: t,
                el: n,
                isPaneVisible: s,
                inheritedAttributes: r,
                side: c,
              } = this,
              d = (0, m.b)(this);
            return (0, i.h)(
              i.f,
              {
                key: '30c0c9bfb8973e4a6feb658f8c4ee8e362f464ed',
                onKeyDown: (0, D.shouldUseCloseWatcher)()
                  ? null
                  : this.onKeydown,
                role: 'navigation',
                'aria-label': r['aria-label'] || 'menu',
                class: {
                  [d]: !0,
                  [`menu-type-${e}`]: !0,
                  'menu-enabled': !t,
                  [`menu-side-${c}`]: !0,
                  'menu-pane-visible': s,
                  'split-pane-side': (0, b.h)('ion-split-pane', n),
                },
              },
              (0, i.h)(
                'div',
                {
                  key: '34b0e5840906862cf1bc27207e089004b0402c56',
                  class: 'menu-inner',
                  part: 'container',
                  ref: (a) => (this.menuInnerEl = a),
                },
                (0, i.h)('slot', {
                  key: '2cd7e61a8c0987ca4b3f1f8b33cba7152f1275fe',
                }),
              ),
              (0, i.h)('ion-backdrop', {
                key: 'd190b1f9b66c76e276f27bfe074d3aab796180fb',
                ref: (a) => (this.backdropEl = a),
                class: 'menu-backdrop',
                tappable: !1,
                stopPropagation: !1,
                part: 'backdrop',
              }),
            );
          }
          get el() {
            return (0, i.i)(this);
          }
          static get watchers() {
            return {
              type: ['typeChanged'],
              disabled: ['disabledChanged'],
              side: ['sideChanged'],
              swipeGesture: ['swipeGestureChanged'],
            };
          }
        },
        k = (e, t, n) => Math.max(0, t !== n ? -e : e),
        j = (e, t, n, s) => (n ? t >= e.innerWidth - s : t <= s),
        _ = 'show-menu',
        E = 'show-backdrop',
        C = 'menu-content-open';
      y.style = {
        ios: ':host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width, var(--width));min-width:var(--side-min-width, var(--min-width));max-width:var(--side-max-width, var(--max-width))}:host(.menu-pane-visible.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none;box-shadow:none;z-index:0}:host(.menu-pane-visible.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}:host(.menu-pane-visible.split-pane-side){-ms-flex-order:-1;order:-1}:host(.menu-pane-visible.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none;transform:none;-webkit-box-shadow:none;box-shadow:none}:host(.menu-pane-visible) ion-backdrop{display:hidden !important}:host(.menu-pane-visible.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-pane-visible.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}',
        md: ':host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width, var(--width));min-width:var(--side-min-width, var(--min-width));max-width:var(--side-max-width, var(--max-width))}:host(.menu-pane-visible.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none;box-shadow:none;z-index:0}:host(.menu-pane-visible.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}:host(.menu-pane-visible.split-pane-side){-ms-flex-order:-1;order:-1}:host(.menu-pane-visible.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none;transform:none;-webkit-box-shadow:none;box-shadow:none}:host(.menu-pane-visible) ion-backdrop{display:hidden !important}:host(.menu-pane-visible.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-pane-visible.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}',
      };
      const A = (function () {
          var e = (0, l.A)(function* (t) {
            const n = yield u.m.get(t);
            return !(!n || !(yield n.isActive()));
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        U = (() => {
          let e = class {
            constructor(t) {
              var n = this;
              (0, i.r)(this, t),
                (this.inheritedAttributes = {}),
                (this.onClick = (0, l.A)(function* () {
                  return u.m.toggle(n.menu);
                })),
                (this.visible = !1),
                (this.color = void 0),
                (this.disabled = !1),
                (this.menu = void 0),
                (this.autoHide = !0),
                (this.type = 'button');
            }
            componentWillLoad() {
              this.inheritedAttributes = (0, h.i)(this.el);
            }
            componentDidLoad() {
              this.visibilityChanged();
            }
            visibilityChanged() {
              var t = this;
              return (0, l.A)(function* () {
                t.visible = yield A(t.menu);
              })();
            }
            render() {
              const { color: t, disabled: n, inheritedAttributes: s } = this,
                r = (0, m.b)(this),
                c = m.c.get('menuIcon', 'ios' === r ? w.u : w.v),
                d = this.autoHide && !this.visible,
                a = { type: this.type },
                f = s['aria-label'] || 'menu';
              return (0, i.h)(
                i.f,
                {
                  key: '95a8b9f09c7fae9713a8dc003ed277f6f31403da',
                  onClick: this.onClick,
                  'aria-disabled': n ? 'true' : null,
                  'aria-hidden': d ? 'true' : null,
                  class: (0, b.c)(t, {
                    [r]: !0,
                    button: !0,
                    'menu-button-hidden': d,
                    'menu-button-disabled': n,
                    'in-toolbar': (0, b.h)('ion-toolbar', this.el),
                    'in-toolbar-color': (0, b.h)('ion-toolbar[color]', this.el),
                    'ion-activatable': !0,
                    'ion-focusable': !0,
                  }),
                },
                (0, i.h)(
                  'button',
                  Object.assign(
                    { key: '39f3ce20c400d2fac4890a042e8e44426709fca5' },
                    a,
                    {
                      disabled: n,
                      class: 'button-native',
                      part: 'native',
                      'aria-label': f,
                    },
                  ),
                  (0, i.h)(
                    'span',
                    {
                      key: '310978dc1cdef668de6720cde2a2304253679176',
                      class: 'button-inner',
                    },
                    (0, i.h)(
                      'slot',
                      { key: '2a2b9de524c1fc3c526fe9559cb077b976852725' },
                      (0, i.h)('ion-icon', {
                        key: '9c22d7ea9fc3d76c32ec1c1b4b13d982c60b8c2d',
                        part: 'icon',
                        icon: c,
                        mode: r,
                        lazy: !1,
                        'aria-hidden': 'true',
                      }),
                    ),
                  ),
                  'md' === r &&
                    (0, i.h)('ion-ripple-effect', {
                      key: 'c58c9e29c763070383472f65a9d322a684bcb564',
                      type: 'unbounded',
                    }),
                ),
              );
            }
            get el() {
              return (0, i.i)(this);
            }
          };
          return (
            (e.style = {
              ios: ':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #0054e9);--padding-start:5px;--padding-end:5px;min-height:32px;font-size:clamp(31px, 1.9375rem, 38.13px)}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}',
              md: ':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:3rem;height:3rem;font-size:1.5rem}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}',
            }),
            e
          );
        })(),
        G = (() => {
          let e = class {
            constructor(t) {
              (0, i.r)(this, t),
                (this.onClick = () => u.m.toggle(this.menu)),
                (this.visible = !1),
                (this.menu = void 0),
                (this.autoHide = !0);
            }
            connectedCallback() {
              this.visibilityChanged();
            }
            visibilityChanged() {
              var t = this;
              return (0, l.A)(function* () {
                t.visible = yield A(t.menu);
              })();
            }
            render() {
              const t = (0, m.b)(this),
                n = this.autoHide && !this.visible;
              return (0, i.h)(
                i.f,
                {
                  key: '90e621f09792383f1badcc1b402b1ac7d08c5f98',
                  onClick: this.onClick,
                  'aria-hidden': n ? 'true' : null,
                  class: { [t]: !0, 'menu-toggle-hidden': n },
                },
                (0, i.h)('slot', {
                  key: 'c0abdd1d91e9d80ee3704e3e374ebe1f29078460',
                }),
              );
            }
          };
          return (e.style = ':host(.menu-toggle-hidden){display:none}'), e;
        })();
    },
  },
]);
