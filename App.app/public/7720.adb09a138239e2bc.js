'use strict';
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [7720],
  {
    7720: (ut, S, l) => {
      l.r(S),
        l.d(S, {
          ion_app: () => z,
          ion_buttons: () => K,
          ion_content: () => A,
          ion_footer: () => Q,
          ion_header: () => rt,
          ion_router_outlet: () => at,
          ion_title: () => dt,
          ion_toolbar: () => pt,
        });
      var h = l(467),
        r = l(4261),
        E = l(7192),
        D = l(4929),
        d = l(9483),
        u = l(4920),
        L = l(5083),
        v = l(333),
        g = l(909),
        H = l(4731),
        T = l(3351),
        I = l(8621),
        _ = l(7838),
        R = l(3604);
      l(8476), l(4379), l(8438);
      const z = class {
          constructor(o) {
            (0, r.r)(this, o);
          }
          componentDidLoad() {
            var o = this;
            F(
              (0, h.A)(function* () {
                const t = (0, d.a)(window, 'hybrid');
                if (
                  (d.c.getBoolean('_testing') ||
                    l
                      .e(7356)
                      .then(l.bind(l, 7356))
                      .then((i) => i.startTapClick(d.c)),
                  d.c.getBoolean('statusTap', t) &&
                    l
                      .e(8782)
                      .then(l.bind(l, 8782))
                      .then((i) => i.startStatusTap()),
                  d.c.getBoolean('inputShims', W()))
                ) {
                  const i = (0, d.a)(window, 'ios') ? 'ios' : 'android';
                  l.e(8361)
                    .then(l.bind(l, 8361))
                    .then((s) => s.startInputShims(d.c, i));
                }
                const e = yield Promise.resolve().then(l.bind(l, 7192)),
                  n = t || (0, E.shouldUseCloseWatcher)();
                d.c.getBoolean('hardwareBackButton', n)
                  ? e.startHardwareBackButton()
                  : ((0, E.shouldUseCloseWatcher)() &&
                      (0, D.p)(
                        'experimentalCloseWatcher was set to `true`, but hardwareBackButton was set to `false`. Both config options must be `true` for the Close Watcher API to be used.',
                      ),
                    e.blockHardwareBackButton()),
                  typeof window < 'u' &&
                    l
                      .e(2076)
                      .then(l.bind(l, 1622))
                      .then((i) => i.startKeyboardAssist(window)),
                  l
                    .e(2076)
                    .then(l.bind(l, 3126))
                    .then((i) => (o.focusVisible = i.startFocusVisible()));
              }),
            );
          }
          setFocus(o) {
            var t = this;
            return (0, h.A)(function* () {
              t.focusVisible && t.focusVisible.setFocus(o);
            })();
          }
          render() {
            const o = (0, d.b)(this);
            return (0, r.h)(r.f, {
              key: 'a562850f242d9d45573e35efdd4bd178254677ef',
              class: {
                [o]: !0,
                'ion-page': !0,
                'force-statusbar-padding': d.c.getBoolean(
                  '_forceStatusbarPadding',
                ),
              },
            });
          }
          get el() {
            return (0, r.i)(this);
          }
        },
        W = () =>
          !!(
            ((0, d.a)(window, 'ios') && (0, d.a)(window, 'mobile')) ||
            ((0, d.a)(window, 'android') && (0, d.a)(window, 'mobileweb'))
          ),
        F = (o) => {
          'requestIdleCallback' in window
            ? window.requestIdleCallback(o)
            : setTimeout(o, 32);
        };
      z.style =
        'html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html.plt-mobile ion-app [contenteditable]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}';
      const K = (() => {
          let o = class {
            constructor(t) {
              (0, r.r)(this, t), (this.collapse = !1);
            }
            render() {
              const t = (0, d.b)(this);
              return (0, r.h)(
                r.f,
                {
                  key: '4e5ce9abb3f56e8c91e3eb58c2819300e61eba24',
                  class: { [t]: !0, 'buttons-collapse': this.collapse },
                },
                (0, r.h)('slot', {
                  key: 'f2f360ec888b6e946b512fed07431fab47c61482',
                }),
              );
            }
          };
          return (
            (o.style = {
              ios: '.sc-ion-buttons-ios-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-ios-s ion-button{--padding-top:3px;--padding-bottom:3px;--padding-start:5px;--padding-end:5px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;min-height:32px}.sc-ion-buttons-ios-s .button-has-icon-only{--padding-top:0;--padding-bottom:0}.sc-ion-buttons-ios-s ion-button:not(.button-round){--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button{--color:initial;--border-color:initial;--background-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-solid,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-solid{--background:var(--ion-color-contrast);--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12;--background-hover:var(--ion-color-base);--background-hover-opacity:0.45;--color:var(--ion-color-base);--color-focused:var(--ion-color-base)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-clear,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-clear{--color-activated:var(--ion-color-contrast);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-outline,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-outline{--color-activated:var(--ion-color-base);--color-focused:var(--ion-color-contrast);--background-activated:var(--ion-color-contrast)}.sc-ion-buttons-ios-s .button-clear,.sc-ion-buttons-ios-s .button-outline{--background-activated:transparent;--background-focused:currentColor;--background-hover:transparent}.sc-ion-buttons-ios-s .button-solid:not(.ion-color){--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12}.sc-ion-buttons-ios-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:1.41em;line-height:0.67}.sc-ion-buttons-ios-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-start:0.4em;margin-inline-start:0.4em;font-size:1.41em;line-height:0.67}.sc-ion-buttons-ios-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.65em;line-height:0.67}',
              md: '.sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-md-s ion-button{--padding-top:3px;--padding-bottom:3px;--padding-start:8px;--padding-end:8px;--box-shadow:none;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;min-height:32px}.sc-ion-buttons-md-s .button-has-icon-only{--padding-top:0;--padding-bottom:0}.sc-ion-buttons-md-s ion-button:not(.button-round){--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button{--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-contrast);--background-hover:var(--ion-color-contrast)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-solid,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-solid{--background:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-base);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-outline,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-outline{--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s .button-has-icon-only.button-clear{--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:3rem;height:3rem}.sc-ion-buttons-md-s .button{--background-hover:currentColor}.sc-ion-buttons-md-s .button-solid{--color:var(--ion-toolbar-background, var(--ion-background-color, #fff));--background:var(--ion-toolbar-color, var(--ion-text-color, #424242));--background-activated:transparent;--background-focused:currentColor}.sc-ion-buttons-md-s .button-outline{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--border-color:currentColor}.sc-ion-buttons-md-s .button-clear{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor}.sc-ion-buttons-md-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:1.4em}.sc-ion-buttons-md-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-start:0.4em;margin-inline-start:0.4em;font-size:1.4em}.sc-ion-buttons-md-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}',
            }),
            o
          );
        })(),
        A = class {
          constructor(o) {
            (0, r.r)(this, o),
              (this.ionScrollStart = (0, r.d)(this, 'ionScrollStart', 7)),
              (this.ionScroll = (0, r.d)(this, 'ionScroll', 7)),
              (this.ionScrollEnd = (0, r.d)(this, 'ionScrollEnd', 7)),
              (this.watchDog = null),
              (this.isScrolling = !1),
              (this.lastScroll = 0),
              (this.queued = !1),
              (this.cTop = -1),
              (this.cBottom = -1),
              (this.isMainContent = !0),
              (this.resizeTimeout = null),
              (this.inheritedAttributes = {}),
              (this.tabsElement = null),
              (this.detail = {
                scrollTop: 0,
                scrollLeft: 0,
                type: 'scroll',
                event: void 0,
                startX: 0,
                startY: 0,
                startTime: 0,
                currentX: 0,
                currentY: 0,
                velocityX: 0,
                velocityY: 0,
                deltaX: 0,
                deltaY: 0,
                currentTime: 0,
                data: void 0,
                isScrolling: !0,
              }),
              (this.color = void 0),
              (this.fullscreen = !1),
              (this.fixedSlotPlacement = 'after'),
              (this.forceOverscroll = void 0),
              (this.scrollX = !1),
              (this.scrollY = !0),
              (this.scrollEvents = !1);
          }
          componentWillLoad() {
            this.inheritedAttributes = (0, u.i)(this.el);
          }
          connectedCallback() {
            if (
              ((this.isMainContent =
                null === this.el.closest('ion-menu, ion-popover, ion-modal')),
              (0, u.k)(this.el))
            ) {
              const o = (this.tabsElement = this.el.closest('ion-tabs'));
              null !== o &&
                ((this.tabsLoadCallback = () => this.resize()),
                o.addEventListener('ionTabBarLoaded', this.tabsLoadCallback));
            }
          }
          disconnectedCallback() {
            if ((this.onScrollEnd(), (0, u.k)(this.el))) {
              const { tabsElement: o, tabsLoadCallback: t } = this;
              null !== o &&
                void 0 !== t &&
                o.removeEventListener('ionTabBarLoaded', t),
                (this.tabsElement = null),
                (this.tabsLoadCallback = void 0);
            }
          }
          onResize() {
            this.resizeTimeout &&
              (clearTimeout(this.resizeTimeout), (this.resizeTimeout = null)),
              (this.resizeTimeout = setTimeout(() => {
                null !== this.el.offsetParent && this.resize();
              }, 100));
          }
          shouldForceOverscroll() {
            const { forceOverscroll: o } = this,
              t = (0, d.b)(this);
            return void 0 === o ? 'ios' === t && (0, d.a)('ios') : o;
          }
          resize() {
            this.fullscreen
              ? (0, r.e)(() => this.readDimensions())
              : (0 !== this.cTop || 0 !== this.cBottom) &&
                ((this.cTop = this.cBottom = 0), (0, r.j)(this));
          }
          readDimensions() {
            const o = Z(this.el),
              t = Math.max(this.el.offsetTop, 0),
              e = Math.max(o.offsetHeight - t - this.el.offsetHeight, 0);
            (t !== this.cTop || e !== this.cBottom) &&
              ((this.cTop = t), (this.cBottom = e), (0, r.j)(this));
          }
          onScroll(o) {
            const t = Date.now(),
              e = !this.isScrolling;
            (this.lastScroll = t),
              e && this.onScrollStart(),
              !this.queued &&
                this.scrollEvents &&
                ((this.queued = !0),
                (0, r.e)((n) => {
                  (this.queued = !1),
                    (this.detail.event = o),
                    $(this.detail, this.scrollEl, n, e),
                    this.ionScroll.emit(this.detail);
                }));
          }
          getScrollElement() {
            var o = this;
            return (0, h.A)(function* () {
              return (
                o.scrollEl || (yield new Promise((t) => (0, u.c)(o.el, t))),
                Promise.resolve(o.scrollEl)
              );
            })();
          }
          getBackgroundElement() {
            var o = this;
            return (0, h.A)(function* () {
              return (
                o.backgroundContentEl ||
                  (yield new Promise((t) => (0, u.c)(o.el, t))),
                Promise.resolve(o.backgroundContentEl)
              );
            })();
          }
          scrollToTop(o = 0) {
            return this.scrollToPoint(void 0, 0, o);
          }
          scrollToBottom(o = 0) {
            var t = this;
            return (0, h.A)(function* () {
              const e = yield t.getScrollElement();
              return t.scrollToPoint(
                void 0,
                e.scrollHeight - e.clientHeight,
                o,
              );
            })();
          }
          scrollByPoint(o, t, e) {
            var n = this;
            return (0, h.A)(function* () {
              const i = yield n.getScrollElement();
              return n.scrollToPoint(o + i.scrollLeft, t + i.scrollTop, e);
            })();
          }
          scrollToPoint(o, t, e = 0) {
            var n = this;
            return (0, h.A)(function* () {
              const i = yield n.getScrollElement();
              if (e < 32)
                return (
                  null != t && (i.scrollTop = t),
                  void (null != o && (i.scrollLeft = o))
                );
              let s,
                a = 0;
              const c = new Promise((m) => (s = m)),
                b = i.scrollTop,
                p = i.scrollLeft,
                f = null != t ? t - b : 0,
                x = null != o ? o - p : 0,
                k = (m) => {
                  const ft = Math.min(1, (m - a) / e) - 1,
                    C = Math.pow(ft, 3) + 1;
                  0 !== f && (i.scrollTop = Math.floor(C * f + b)),
                    0 !== x && (i.scrollLeft = Math.floor(C * x + p)),
                    C < 1 ? requestAnimationFrame(k) : s();
                };
              return (
                requestAnimationFrame((m) => {
                  (a = m), k(m);
                }),
                c
              );
            })();
          }
          onScrollStart() {
            (this.isScrolling = !0),
              this.ionScrollStart.emit({ isScrolling: !0 }),
              this.watchDog && clearInterval(this.watchDog),
              (this.watchDog = setInterval(() => {
                this.lastScroll < Date.now() - 120 && this.onScrollEnd();
              }, 100));
          }
          onScrollEnd() {
            this.watchDog && clearInterval(this.watchDog),
              (this.watchDog = null),
              this.isScrolling &&
                ((this.isScrolling = !1),
                this.ionScrollEnd.emit({ isScrolling: !1 }));
          }
          render() {
            const {
                fixedSlotPlacement: o,
                inheritedAttributes: t,
                isMainContent: e,
                scrollX: n,
                scrollY: i,
                el: s,
              } = this,
              a = (0, L.i)(s) ? 'rtl' : 'ltr',
              c = (0, d.b)(this),
              b = this.shouldForceOverscroll(),
              p = 'ios' === c;
            return (
              this.resize(),
              (0, r.h)(
                r.f,
                Object.assign(
                  {
                    key: '92a7cbc2e9c812930f4231bd846411933a5dded6',
                    role: e ? 'main' : void 0,
                    class: (0, v.c)(this.color, {
                      [c]: !0,
                      'content-sizing': (0, v.h)('ion-popover', this.el),
                      overscroll: b,
                      [`content-${a}`]: !0,
                    }),
                    style: {
                      '--offset-top': `${this.cTop}px`,
                      '--offset-bottom': `${this.cBottom}px`,
                    },
                  },
                  t,
                ),
                (0, r.h)('div', {
                  key: '52498d8874b9944b8245e448ea9dfc75b3929c2d',
                  ref: (f) => (this.backgroundContentEl = f),
                  id: 'background-content',
                  part: 'background',
                }),
                'before' === o ? (0, r.h)('slot', { name: 'fixed' }) : null,
                (0, r.h)(
                  'div',
                  {
                    key: '00e157a53485b285300404178436276afceb63f5',
                    class: {
                      'inner-scroll': !0,
                      'scroll-x': n,
                      'scroll-y': i,
                      overscroll: (n || i) && b,
                    },
                    ref: (f) => (this.scrollEl = f),
                    onScroll: this.scrollEvents
                      ? (f) => this.onScroll(f)
                      : void 0,
                    part: 'scroll',
                  },
                  (0, r.h)('slot', {
                    key: '8522320514a2e8a63f7dc9ade6c1fb3fb00f454e',
                  }),
                ),
                p
                  ? (0, r.h)(
                      'div',
                      { class: 'transition-effect' },
                      (0, r.h)('div', { class: 'transition-cover' }),
                      (0, r.h)('div', { class: 'transition-shadow' }),
                    )
                  : null,
                'after' === o ? (0, r.h)('slot', { name: 'fixed' }) : null,
              )
            );
          }
          get el() {
            return (0, r.i)(this);
          }
        },
        Z = (o) => {
          const t = o.closest('ion-tabs');
          return (
            t ||
            o.closest(
              'ion-app, ion-page, .ion-page, page-inner, .popover-content',
            ) ||
            ((o) => {
              var t;
              return o.parentElement
                ? o.parentElement
                : null !== (t = o.parentNode) && void 0 !== t && t.host
                  ? o.parentNode.host
                  : null;
            })(o)
          );
        },
        $ = (o, t, e, n) => {
          const i = o.currentX,
            s = o.currentY,
            c = t.scrollLeft,
            b = t.scrollTop,
            p = e - o.currentTime;
          if (
            (n &&
              ((o.startTime = e),
              (o.startX = c),
              (o.startY = b),
              (o.velocityX = o.velocityY = 0)),
            (o.currentTime = e),
            (o.currentX = o.scrollLeft = c),
            (o.currentY = o.scrollTop = b),
            (o.deltaX = c - o.startX),
            (o.deltaY = b - o.startY),
            p > 0 && p < 100)
          ) {
            const x = (b - s) / p;
            (o.velocityX = ((c - i) / p) * 0.7 + 0.3 * o.velocityX),
              (o.velocityY = 0.7 * x + 0.3 * o.velocityY);
          }
        };
      A.style =
        ':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;-ms-touch-action:pan-x pan-y pinch-zoom;touch-action:pan-x pan-y pinch-zoom}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;z-index:0;will-change:scroll-position}.scroll-y{overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{overflow-x:var(--overflow);overscroll-behavior-x:contain}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:0;contain:none}:host(.content-sizing) .inner-scroll{position:relative;top:0;bottom:0;margin-top:calc(var(--offset-top) * -1);margin-bottom:calc(var(--offset-bottom) * -1)}.transition-effect{display:none;position:absolute;width:100%;height:100vh;opacity:0;pointer-events:none}:host(.content-ltr) .transition-effect{left:-100%;}:host(.content-rtl) .transition-effect{right:-100%;}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;width:100%;height:100%;-webkit-box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03);box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03)}:host(.content-ltr) .transition-shadow{right:0;}:host(.content-rtl) .transition-shadow{left:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}::slotted([slot=fixed]){position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0)}';
      const P = (o, t) => {
          (0, r.e)(() => {
            const c = (0, u.j)(
              0,
              1 - (o.scrollTop - (o.scrollHeight - o.clientHeight - 10)) / 10,
              1,
            );
            (0, r.w)(() => {
              t.style.setProperty('--opacity-scale', c.toString());
            });
          });
        },
        Q = (() => {
          let o = class {
            constructor(t) {
              var e = this;
              (0, r.r)(this, t),
                (this.keyboardCtrl = null),
                (this.checkCollapsibleFooter = () => {
                  if ('ios' !== (0, d.b)(this)) return;
                  const { collapse: i } = this,
                    s = 'fade' === i;
                  if ((this.destroyCollapsibleFooter(), s)) {
                    const a = this.el.closest(
                        'ion-app,ion-page,.ion-page,page-inner',
                      ),
                      c = a ? (0, g.a)(a) : null;
                    if (!c) return void (0, g.p)(this.el);
                    this.setupFadeFooter(c);
                  }
                }),
                (this.setupFadeFooter = (function () {
                  var n = (0, h.A)(function* (i) {
                    const s = (e.scrollEl = yield (0, g.g)(i));
                    (e.contentScrollCallback = () => {
                      P(s, e.el);
                    }),
                      s.addEventListener('scroll', e.contentScrollCallback),
                      P(s, e.el);
                  });
                  return function (i) {
                    return n.apply(this, arguments);
                  };
                })()),
                (this.keyboardVisible = !1),
                (this.collapse = void 0),
                (this.translucent = !1);
            }
            componentDidLoad() {
              this.checkCollapsibleFooter();
            }
            componentDidUpdate() {
              this.checkCollapsibleFooter();
            }
            connectedCallback() {
              var t = this;
              return (0, h.A)(function* () {
                t.keyboardCtrl = yield (0, H.c)(
                  (function () {
                    var e = (0, h.A)(function* (n, i) {
                      !1 === n && void 0 !== i && (yield i),
                        (t.keyboardVisible = n);
                    });
                    return function (n, i) {
                      return e.apply(this, arguments);
                    };
                  })(),
                );
              })();
            }
            disconnectedCallback() {
              this.keyboardCtrl && this.keyboardCtrl.destroy();
            }
            destroyCollapsibleFooter() {
              this.scrollEl &&
                this.contentScrollCallback &&
                (this.scrollEl.removeEventListener(
                  'scroll',
                  this.contentScrollCallback,
                ),
                (this.contentScrollCallback = void 0));
            }
            render() {
              const { translucent: t, collapse: e } = this,
                n = (0, d.b)(this),
                i = this.el.closest('ion-tabs'),
                s =
                  null == i ? void 0 : i.querySelector(':scope > ion-tab-bar');
              return (0, r.h)(
                r.f,
                {
                  key: '5da19dc38ba73e1ddfd1bef3ebd485105d77c751',
                  role: 'contentinfo',
                  class: {
                    [n]: !0,
                    [`footer-${n}`]: !0,
                    'footer-translucent': t,
                    [`footer-translucent-${n}`]: t,
                    'footer-toolbar-padding': !(
                      this.keyboardVisible ||
                      (s && 'bottom' === s.slot)
                    ),
                    [`footer-collapse-${e}`]: void 0 !== e,
                  },
                },
                'ios' === n &&
                  t &&
                  (0, r.h)('div', {
                    key: 'fafad08090a33d8c4e8a5b63d61929dcb89aab47',
                    class: 'footer-background',
                  }),
                (0, r.h)('slot', {
                  key: 'e0a443d346afa55e4317c0bc1263fdbe3c619559',
                }),
              );
            }
            get el() {
              return (0, r.i)(this);
            }
          };
          return (
            (o.style = {
              ios: 'ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer.footer-toolbar-padding ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-ios ion-toolbar:first-of-type{--border-width:0.55px 0 0}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.footer-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8}}.footer-ios.ion-no-border ion-toolbar:first-of-type{--border-width:0}.footer-collapse-fade ion-toolbar{--opacity-scale:inherit}',
              md: 'ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer.footer-toolbar-padding ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-md{-webkit-box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.footer-md.ion-no-border{-webkit-box-shadow:none;box-shadow:none}',
            }),
            o
          );
        })(),
        M = (o) => {
          const t = document.querySelector(`${o}.ion-cloned-element`);
          if (null !== t) return t;
          const e = document.createElement(o);
          return (
            e.classList.add('ion-cloned-element'),
            e.style.setProperty('display', 'none'),
            document.body.appendChild(e),
            e
          );
        },
        O = (o) => {
          if (!o) return;
          const t = o.querySelectorAll('ion-toolbar');
          return {
            el: o,
            toolbars: Array.from(t).map((e) => {
              const n = e.querySelector('ion-title');
              return {
                el: e,
                background: e.shadowRoot.querySelector('.toolbar-background'),
                ionTitleEl: n,
                innerTitleEl: n
                  ? n.shadowRoot.querySelector('.toolbar-title')
                  : null,
                ionButtonsEl: Array.from(e.querySelectorAll('ion-buttons')),
              };
            }),
          };
        },
        w = (o, t) => {
          'fade' !== o.collapse &&
            (void 0 === t
              ? o.style.removeProperty('--opacity-scale')
              : o.style.setProperty('--opacity-scale', t.toString()));
        },
        y = (o, t = !0) => {
          const e = o.el;
          t
            ? (e.classList.remove('header-collapse-condense-inactive'),
              e.removeAttribute('aria-hidden'))
            : (e.classList.add('header-collapse-condense-inactive'),
              e.setAttribute('aria-hidden', 'true'));
        },
        B = (o, t, e) => {
          (0, r.e)(() => {
            const n = o.scrollTop,
              i = t.clientHeight,
              s = e ? e.clientHeight : 0;
            if (null !== e && n < s)
              return (
                t.style.setProperty('--opacity-scale', '0'),
                void o.style.setProperty(
                  'clip-path',
                  `inset(${i}px 0px 0px 0px)`,
                )
              );
            const b = (0, u.j)(0, (n - s) / 10, 1);
            (0, r.w)(() => {
              o.style.removeProperty('clip-path'),
                t.style.setProperty('--opacity-scale', b.toString());
            });
          });
        },
        rt = (() => {
          let o = class {
            constructor(t) {
              var e = this;
              (0, r.r)(this, t),
                (this.inheritedAttributes = {}),
                (this.setupFadeHeader = (function () {
                  var n = (0, h.A)(function* (i, s) {
                    const a = (e.scrollEl = yield (0, g.g)(i));
                    (e.contentScrollCallback = () => {
                      B(e.scrollEl, e.el, s);
                    }),
                      a.addEventListener('scroll', e.contentScrollCallback),
                      B(e.scrollEl, e.el, s);
                  });
                  return function (i, s) {
                    return n.apply(this, arguments);
                  };
                })()),
                (this.collapse = void 0),
                (this.translucent = !1);
            }
            componentWillLoad() {
              this.inheritedAttributes = (0, u.i)(this.el);
            }
            componentDidLoad() {
              this.checkCollapsibleHeader();
            }
            componentDidUpdate() {
              this.checkCollapsibleHeader();
            }
            disconnectedCallback() {
              this.destroyCollapsibleHeader();
            }
            checkCollapsibleHeader() {
              var t = this;
              return (0, h.A)(function* () {
                if ('ios' !== (0, d.b)(t)) return;
                const { collapse: n } = t,
                  i = 'condense' === n,
                  s = 'fade' === n;
                if ((t.destroyCollapsibleHeader(), i)) {
                  const a = t.el.closest(
                      'ion-app,ion-page,.ion-page,page-inner',
                    ),
                    c = a ? (0, g.a)(a) : null;
                  (0, r.w)(() => {
                    (M('ion-title').size = 'large'), M('ion-back-button');
                  }),
                    yield t.setupCondenseHeader(c, a);
                } else if (s) {
                  const a = t.el.closest(
                      'ion-app,ion-page,.ion-page,page-inner',
                    ),
                    c = a ? (0, g.a)(a) : null;
                  if (!c) return void (0, g.p)(t.el);
                  const b = c.querySelector('ion-header[collapse="condense"]');
                  yield t.setupFadeHeader(c, b);
                }
              })();
            }
            destroyCollapsibleHeader() {
              this.intersectionObserver &&
                (this.intersectionObserver.disconnect(),
                (this.intersectionObserver = void 0)),
                this.scrollEl &&
                  this.contentScrollCallback &&
                  (this.scrollEl.removeEventListener(
                    'scroll',
                    this.contentScrollCallback,
                  ),
                  (this.contentScrollCallback = void 0)),
                this.collapsibleMainHeader &&
                  (this.collapsibleMainHeader.classList.remove(
                    'header-collapse-main',
                  ),
                  (this.collapsibleMainHeader = void 0));
            }
            setupCondenseHeader(t, e) {
              var n = this;
              return (0, h.A)(function* () {
                if (!t || !e) return void (0, g.p)(n.el);
                if (typeof IntersectionObserver > 'u') return;
                n.scrollEl = yield (0, g.g)(t);
                const i = e.querySelectorAll('ion-header');
                if (
                  ((n.collapsibleMainHeader = Array.from(i).find(
                    (b) => 'condense' !== b.collapse,
                  )),
                  !n.collapsibleMainHeader)
                )
                  return;
                const s = O(n.collapsibleMainHeader),
                  a = O(n.el);
                s &&
                  a &&
                  (y(s, !1),
                  w(s.el, 0),
                  (n.intersectionObserver = new IntersectionObserver(
                    (b) => {
                      ((o, t, e, n) => {
                        (0, r.w)(() => {
                          const i = n.scrollTop;
                          ((o, t, e) => {
                            if (!o[0].isIntersecting) return;
                            const n =
                              o[0].intersectionRatio > 0.9 || e <= 0
                                ? 0
                                : (100 * (1 - o[0].intersectionRatio)) / 75;
                            w(t.el, 1 === n ? void 0 : n);
                          })(o, t, i);
                          const s = o[0],
                            a = s.intersectionRect,
                            c = a.width * a.height,
                            p =
                              0 === c &&
                              0 == s.rootBounds.width * s.rootBounds.height,
                            f = Math.abs(a.left - s.boundingClientRect.left),
                            x = Math.abs(a.right - s.boundingClientRect.right);
                          p ||
                            (c > 0 && (f >= 5 || x >= 5)) ||
                            (s.isIntersecting
                              ? (y(t, !1), y(e))
                              : ((0 === a.x && 0 === a.y) ||
                                  (0 !== a.width && 0 !== a.height)) &&
                                i > 0 &&
                                (y(t), y(e, !1), w(t.el)));
                        });
                      })(b, s, a, n.scrollEl);
                    },
                    {
                      root: t,
                      threshold: [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                    },
                  )),
                  n.intersectionObserver.observe(
                    a.toolbars[a.toolbars.length - 1].el,
                  ),
                  (n.contentScrollCallback = () => {
                    ((o, t, e) => {
                      (0, r.e)(() => {
                        const i = (0, u.j)(1, 1 + -o.scrollTop / 500, 1.1);
                        null ===
                          e.querySelector('ion-refresher.refresher-native') &&
                          (0, r.w)(() => {
                            ((o = [], t = 1, e = !1) => {
                              o.forEach((n) => {
                                const i = n.ionTitleEl,
                                  s = n.innerTitleEl;
                                !i ||
                                  'large' !== i.size ||
                                  ((s.style.transition = e
                                    ? 'all 0.2s ease-in-out'
                                    : ''),
                                  (s.style.transform = `scale3d(${t}, ${t}, 1)`));
                              });
                            })(t.toolbars, i);
                          });
                      });
                    })(n.scrollEl, a, t);
                  }),
                  n.scrollEl.addEventListener(
                    'scroll',
                    n.contentScrollCallback,
                  ),
                  (0, r.w)(() => {
                    void 0 !== n.collapsibleMainHeader &&
                      n.collapsibleMainHeader.classList.add(
                        'header-collapse-main',
                      );
                  }));
              })();
            }
            render() {
              const { translucent: t, inheritedAttributes: e } = this,
                n = (0, d.b)(this),
                i = this.collapse || 'none',
                s = (0, v.h)('ion-menu', this.el) ? 'none' : 'banner';
              return (0, r.h)(
                r.f,
                Object.assign(
                  {
                    key: 'c687314ef290793a9d633ad20cfc5eeb47621e31',
                    role: s,
                    class: {
                      [n]: !0,
                      [`header-${n}`]: !0,
                      'header-translucent': this.translucent,
                      [`header-collapse-${i}`]: !0,
                      [`header-translucent-${n}`]: this.translucent,
                    },
                  },
                  e,
                ),
                'ios' === n &&
                  t &&
                  (0, r.h)('div', {
                    key: 'b429996046082405a91e7c23f95516db0b736f12',
                    class: 'header-background',
                  }),
                (0, r.h)('slot', {
                  key: 'e17a8965f8d3a33c1bfcb056c153d8242e5229fa',
                }),
              );
            }
            get el() {
              return (0, r.i)(this);
            }
          };
          return (
            (o.style = {
              ios: 'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-fade ion-toolbar{--opacity-scale:inherit}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:0px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar:last-of-type{--border-width:0px}.header-collapse-condense ion-toolbar ion-searchbar{padding-top:0px;padding-bottom:13px}.header-collapse-main{--opacity-scale:1}.header-collapse-main ion-toolbar{--opacity-scale:inherit}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}ion-header.header-ios:not(.header-collapse-main):has(~ion-content ion-header.header-ios[collapse=condense],~ion-content ion-header.header-ios.header-collapse-condense){opacity:0}',
              md: 'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md{-webkit-box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.header-collapse-condense{display:none}.header-md.ion-no-border{-webkit-box-shadow:none;box-shadow:none}',
            }),
            o
          );
        })(),
        at = (() => {
          let o = class {
            constructor(t) {
              (0, r.r)(this, t),
                (this.ionNavWillLoad = (0, r.d)(this, 'ionNavWillLoad', 7)),
                (this.ionNavWillChange = (0, r.d)(this, 'ionNavWillChange', 3)),
                (this.ionNavDidChange = (0, r.d)(this, 'ionNavDidChange', 3)),
                (this.lockController = (0, _.c)()),
                (this.gestureOrAnimationInProgress = !1),
                (this.mode = (0, d.b)(this)),
                (this.delegate = void 0),
                (this.animated = !0),
                (this.animation = void 0),
                (this.swipeHandler = void 0);
            }
            swipeHandlerChanged() {
              this.gesture && this.gesture.enable(void 0 !== this.swipeHandler);
            }
            connectedCallback() {
              var t = this;
              return (0, h.A)(function* () {
                (t.gesture = (yield l
                  .e(2076)
                  .then(l.bind(l, 7166))).createSwipeBackGesture(
                  t.el,
                  () =>
                    !t.gestureOrAnimationInProgress &&
                    !!t.swipeHandler &&
                    t.swipeHandler.canStart(),
                  () => (
                    (t.gestureOrAnimationInProgress = !0),
                    void (t.swipeHandler && t.swipeHandler.onStart())
                  ),
                  (n) => {
                    var i;
                    return null === (i = t.ani) || void 0 === i
                      ? void 0
                      : i.progressStep(n);
                  },
                  (n, i, s) => {
                    if (t.ani) {
                      t.ani.onFinish(
                        () => {
                          (t.gestureOrAnimationInProgress = !1),
                            t.swipeHandler && t.swipeHandler.onEnd(n);
                        },
                        { oneTimeCallback: !0 },
                      );
                      let a = n ? -0.001 : 0.001;
                      n
                        ? (a += (0, T.g)(
                            [0, 0],
                            [0.32, 0.72],
                            [0, 1],
                            [1, 1],
                            i,
                          )[0])
                        : (t.ani.easing('cubic-bezier(1, 0, 0.68, 0.28)'),
                          (a += (0, T.g)(
                            [0, 0],
                            [1, 0],
                            [0.68, 0.28],
                            [1, 1],
                            i,
                          )[0])),
                        t.ani.progressEnd(n ? 1 : 0, a, s);
                    } else t.gestureOrAnimationInProgress = !1;
                  },
                )),
                  t.swipeHandlerChanged();
              })();
            }
            componentWillLoad() {
              this.ionNavWillLoad.emit();
            }
            disconnectedCallback() {
              this.gesture && (this.gesture.destroy(), (this.gesture = void 0));
            }
            commit(t, e, n) {
              var i = this;
              return (0, h.A)(function* () {
                const s = yield i.lockController.lock();
                let a = !1;
                try {
                  a = yield i.transition(t, e, n);
                } catch (c) {
                  console.error(c);
                }
                return s(), a;
              })();
            }
            setRouteId(t, e, n, i) {
              var s = this;
              return (0, h.A)(function* () {
                return {
                  changed: yield s.setRoot(t, e, {
                    duration: 'root' === n ? 0 : void 0,
                    direction: 'back' === n ? 'back' : 'forward',
                    animationBuilder: i,
                  }),
                  element: s.activeEl,
                };
              })();
            }
            getRouteId() {
              var t = this;
              return (0, h.A)(function* () {
                const e = t.activeEl;
                return e
                  ? { id: e.tagName, element: e, params: t.activeParams }
                  : void 0;
              })();
            }
            setRoot(t, e, n) {
              var i = this;
              return (0, h.A)(function* () {
                if (i.activeComponent === t && (0, u.s)(e, i.activeParams))
                  return !1;
                const s = i.activeEl,
                  a = yield (0, I.a)(
                    i.delegate,
                    i.el,
                    t,
                    ['ion-page', 'ion-page-invisible'],
                    e,
                  );
                return (
                  (i.activeComponent = t),
                  (i.activeEl = a),
                  (i.activeParams = e),
                  yield i.commit(a, s, n),
                  yield (0, I.d)(i.delegate, s),
                  !0
                );
              })();
            }
            transition(t, e, n = {}) {
              var i = this;
              return (0, h.A)(function* () {
                if (e === t) return !1;
                i.ionNavWillChange.emit();
                const { el: s, mode: a } = i,
                  c = i.animated && d.c.getBoolean('animated', !0),
                  b =
                    n.animationBuilder ||
                    i.animation ||
                    d.c.get('navAnimation');
                return (
                  yield (0, R.t)(
                    Object.assign(
                      Object.assign(
                        {
                          mode: a,
                          animated: c,
                          enteringEl: t,
                          leavingEl: e,
                          baseEl: s,
                          deepWait: (0, u.k)(s),
                          progressCallback: n.progressAnimation
                            ? (p) => {
                                void 0 === p || i.gestureOrAnimationInProgress
                                  ? (i.ani = p)
                                  : ((i.gestureOrAnimationInProgress = !0),
                                    p.onFinish(
                                      () => {
                                        (i.gestureOrAnimationInProgress = !1),
                                          i.swipeHandler &&
                                            i.swipeHandler.onEnd(!1);
                                      },
                                      { oneTimeCallback: !0 },
                                    ),
                                    p.progressEnd(0, 0, 0));
                              }
                            : void 0,
                        },
                        n,
                      ),
                      { animationBuilder: b },
                    ),
                  ),
                  i.ionNavDidChange.emit(),
                  !0
                );
              })();
            }
            render() {
              return (0, r.h)('slot', {
                key: '8279a453c66a766e6e383ff59842b4ae070c13a9',
              });
            }
            get el() {
              return (0, r.i)(this);
            }
            static get watchers() {
              return { swipeHandler: ['swipeHandlerChanged'] };
            }
          };
          return (
            (o.style =
              ':host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}'),
            o
          );
        })(),
        dt = (() => {
          let o = class {
            constructor(t) {
              (0, r.r)(this, t),
                (this.ionStyle = (0, r.d)(this, 'ionStyle', 7)),
                (this.color = void 0),
                (this.size = void 0);
            }
            sizeChanged() {
              this.emitStyle();
            }
            connectedCallback() {
              this.emitStyle();
            }
            emitStyle() {
              const t = this.getSize();
              this.ionStyle.emit({ [`title-${t}`]: !0 });
            }
            getSize() {
              return void 0 !== this.size ? this.size : 'default';
            }
            render() {
              const t = (0, d.b)(this),
                e = this.getSize();
              return (0, r.h)(
                r.f,
                {
                  key: '5a58dc437a6f4257244bbdd7e9a682a17d8c9a6b',
                  class: (0, v.c)(this.color, {
                    [t]: !0,
                    [`title-${e}`]: !0,
                    'title-rtl': 'rtl' === document.dir,
                  }),
                },
                (0, r.h)(
                  'div',
                  {
                    key: '58682ea7b8f47a08adfad419b5c76b34784c6501',
                    class: 'toolbar-title',
                  },
                  (0, r.h)('slot', {
                    key: '8a9248534e4c3076f5e2dfda38ef86069796851c',
                  }),
                ),
              );
            }
            get el() {
              return (0, r.i)(this);
            }
            static get watchers() {
              return { size: ['sizeChanged'] };
            }
          };
          return (
            (o.style = {
              ios: ':host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{top:0;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:min(1.0625rem, 20.4px);font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host{inset-inline-start:0}:host(.title-small){-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:min(0.8125rem, 23.4px);font-weight:normal}:host(.title-large){-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:2px;padding-bottom:4px;-webkit-transform-origin:left center;transform-origin:left center;position:static;-ms-flex-align:end;align-items:flex-end;min-width:100%;font-size:min(2.125rem, 61.2px);font-weight:700;text-align:start}:host(.title-large.title-rtl){-webkit-transform-origin:right center;transform-origin:right center}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000);font-family:var(--ion-font-family)}:host(.title-large) .toolbar-title{-webkit-transform-origin:inherit;transform-origin:inherit;width:auto}:host-context([dir=rtl]):host(.title-large) .toolbar-title,:host-context([dir=rtl]).title-large .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}@supports selector(:dir(rtl)){:host(.title-large:dir(rtl)) .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}}',
              md: ':host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:0;padding-bottom:0;font-size:1.25rem;font-weight:500;letter-spacing:0.0125em}:host(.title-small){width:100%;height:100%;font-size:0.9375rem;font-weight:normal}',
            }),
            o
          );
        })(),
        pt = (() => {
          let o = class {
            constructor(t) {
              (0, r.r)(this, t),
                (this.childrenStyles = new Map()),
                (this.color = void 0);
            }
            componentWillLoad() {
              const t = Array.from(this.el.querySelectorAll('ion-buttons')),
                e = t.find((s) => 'start' === s.slot);
              e && e.classList.add('buttons-first-slot');
              const n = t.reverse(),
                i =
                  n.find((s) => 'end' === s.slot) ||
                  n.find((s) => 'primary' === s.slot) ||
                  n.find((s) => 'secondary' === s.slot);
              i && i.classList.add('buttons-last-slot');
            }
            childrenStyle(t) {
              t.stopPropagation();
              const e = t.target.tagName,
                n = t.detail,
                i = {},
                s = this.childrenStyles.get(e) || {};
              let a = !1;
              Object.keys(n).forEach((c) => {
                const b = `toolbar-${c}`,
                  p = n[c];
                p !== s[b] && (a = !0), p && (i[b] = !0);
              }),
                a && (this.childrenStyles.set(e, i), (0, r.j)(this));
            }
            render() {
              const t = (0, d.b)(this),
                e = {};
              return (
                this.childrenStyles.forEach((n) => {
                  Object.assign(e, n);
                }),
                (0, r.h)(
                  r.f,
                  {
                    key: '4bb3a55001408a3bdf033af76b9196cb96c07c09',
                    class: Object.assign(
                      Object.assign({}, e),
                      (0, v.c)(this.color, {
                        [t]: !0,
                        'in-toolbar': (0, v.h)('ion-toolbar', this.el),
                      }),
                    ),
                  },
                  (0, r.h)('div', {
                    key: '0891db157d6e028c6d03696f13fb510ea91b0296',
                    class: 'toolbar-background',
                  }),
                  (0, r.h)(
                    'div',
                    {
                      key: '95fbc870d808f74af4bb18cd8f8ec8c7828a9e0b',
                      class: 'toolbar-container',
                    },
                    (0, r.h)('slot', {
                      key: '84d4a9644660fe00ca085055ca8d12f3647531ad',
                      name: 'start',
                    }),
                    (0, r.h)('slot', {
                      key: 'fd361dc9c9979f59aed2fedcf94629506fae62b0',
                      name: 'secondary',
                    }),
                    (0, r.h)(
                      'div',
                      {
                        key: '54d2b28616a4627c55766f66dc453707752758a6',
                        class: 'toolbar-content',
                      },
                      (0, r.h)('slot', {
                        key: '8f65e0830cce7135640b90eb694e282cb7e5efd2',
                      }),
                    ),
                    (0, r.h)('slot', {
                      key: 'c78be11a207c8674f222543646398636956087e6',
                      name: 'primary',
                    }),
                    (0, r.h)('slot', {
                      key: 'ab25e1601ccaa8cb0d81921b849bcb7402aa7826',
                      name: 'end',
                    }),
                  ),
                )
              );
            }
            get el() {
              return (0, r.i)(this);
            }
          };
          return (
            (o.style = {
              ios: ':host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;padding-right:var(--ion-safe-area-right);padding-left:var(--ion-safe-area-left);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, var(--ion-background-color-step-50, #f7f7f7)));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.2)))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:-ms-inline-flexbox;display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}',
              md: ':host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;padding-right:var(--ion-safe-area-right);padding-left:var(--ion-safe-area-left);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, #c1c4cd))));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(.buttons-first-slot){-webkit-margin-start:4px;margin-inline-start:4px}::slotted(.buttons-last-slot){-webkit-margin-end:4px;margin-inline-end:4px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}',
            }),
            o
          );
        })();
    },
  },
]);
