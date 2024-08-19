'use strict';
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [7372],
  {
    7372: (C, h, a) => {
      a.r(h), a.d(h, { ion_loading: () => E });
      var g = a(467),
        t = a(4261),
        m = a(464),
        f = a(4920),
        u = a(7838),
        r = a(9440),
        b = a(333),
        d = a(9483),
        s = a(9986);
      a(8476), a(7192), a(1970);
      const y = (o) => {
          const i = (0, s.c)(),
            n = (0, s.c)(),
            e = (0, s.c)();
          return (
            n
              .addElement(o.querySelector('ion-backdrop'))
              .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
              .beforeStyles({ 'pointer-events': 'none' })
              .afterClearStyles(['pointer-events']),
            e.addElement(o.querySelector('.loading-wrapper')).keyframes([
              { offset: 0, opacity: 0.01, transform: 'scale(1.1)' },
              { offset: 1, opacity: 1, transform: 'scale(1)' },
            ]),
            i
              .addElement(o)
              .easing('ease-in-out')
              .duration(200)
              .addAnimation([n, e])
          );
        },
        v = (o) => {
          const i = (0, s.c)(),
            n = (0, s.c)(),
            e = (0, s.c)();
          return (
            n
              .addElement(o.querySelector('ion-backdrop'))
              .fromTo('opacity', 'var(--backdrop-opacity)', 0),
            e.addElement(o.querySelector('.loading-wrapper')).keyframes([
              { offset: 0, opacity: 0.99, transform: 'scale(1)' },
              { offset: 1, opacity: 0, transform: 'scale(0.9)' },
            ]),
            i
              .addElement(o)
              .easing('ease-in-out')
              .duration(200)
              .addAnimation([n, e])
          );
        },
        x = (o) => {
          const i = (0, s.c)(),
            n = (0, s.c)(),
            e = (0, s.c)();
          return (
            n
              .addElement(o.querySelector('ion-backdrop'))
              .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
              .beforeStyles({ 'pointer-events': 'none' })
              .afterClearStyles(['pointer-events']),
            e.addElement(o.querySelector('.loading-wrapper')).keyframes([
              { offset: 0, opacity: 0.01, transform: 'scale(1.1)' },
              { offset: 1, opacity: 1, transform: 'scale(1)' },
            ]),
            i
              .addElement(o)
              .easing('ease-in-out')
              .duration(200)
              .addAnimation([n, e])
          );
        },
        _ = (o) => {
          const i = (0, s.c)(),
            n = (0, s.c)(),
            e = (0, s.c)();
          return (
            n
              .addElement(o.querySelector('ion-backdrop'))
              .fromTo('opacity', 'var(--backdrop-opacity)', 0),
            e.addElement(o.querySelector('.loading-wrapper')).keyframes([
              { offset: 0, opacity: 0.99, transform: 'scale(1)' },
              { offset: 1, opacity: 0, transform: 'scale(0.9)' },
            ]),
            i
              .addElement(o)
              .easing('ease-in-out')
              .duration(200)
              .addAnimation([n, e])
          );
        },
        E = (() => {
          let o = class {
            constructor(i) {
              (0, t.r)(this, i),
                (this.didPresent = (0, t.d)(this, 'ionLoadingDidPresent', 7)),
                (this.willPresent = (0, t.d)(this, 'ionLoadingWillPresent', 7)),
                (this.willDismiss = (0, t.d)(this, 'ionLoadingWillDismiss', 7)),
                (this.didDismiss = (0, t.d)(this, 'ionLoadingDidDismiss', 7)),
                (this.didPresentShorthand = (0, t.d)(this, 'didPresent', 7)),
                (this.willPresentShorthand = (0, t.d)(this, 'willPresent', 7)),
                (this.willDismissShorthand = (0, t.d)(this, 'willDismiss', 7)),
                (this.didDismissShorthand = (0, t.d)(this, 'didDismiss', 7)),
                (this.delegateController = (0, r.d)(this)),
                (this.lockController = (0, u.c)()),
                (this.triggerController = (0, r.e)()),
                (this.customHTMLEnabled = d.c.get(
                  'innerHTMLTemplatesEnabled',
                  m.E,
                )),
                (this.presented = !1),
                (this.onBackdropTap = () => {
                  this.dismiss(void 0, r.B);
                }),
                (this.overlayIndex = void 0),
                (this.delegate = void 0),
                (this.hasController = !1),
                (this.keyboardClose = !0),
                (this.enterAnimation = void 0),
                (this.leaveAnimation = void 0),
                (this.message = void 0),
                (this.cssClass = void 0),
                (this.duration = 0),
                (this.backdropDismiss = !1),
                (this.showBackdrop = !0),
                (this.spinner = void 0),
                (this.translucent = !1),
                (this.animated = !0),
                (this.htmlAttributes = void 0),
                (this.isOpen = !1),
                (this.trigger = void 0);
            }
            onIsOpenChange(i, n) {
              !0 === i && !1 === n
                ? this.present()
                : !1 === i && !0 === n && this.dismiss();
            }
            triggerChanged() {
              const { trigger: i, el: n, triggerController: e } = this;
              i && e.addClickListener(n, i);
            }
            connectedCallback() {
              (0, r.j)(this.el), this.triggerChanged();
            }
            componentWillLoad() {
              var i;
              if (void 0 === this.spinner) {
                const n = (0, d.b)(this);
                this.spinner = d.c.get(
                  'loadingSpinner',
                  d.c.get('spinner', 'ios' === n ? 'lines' : 'crescent'),
                );
              }
              (null !== (i = this.htmlAttributes) && void 0 !== i && i.id) ||
                (0, r.k)(this.el);
            }
            componentDidLoad() {
              !0 === this.isOpen && (0, f.r)(() => this.present()),
                this.triggerChanged();
            }
            disconnectedCallback() {
              this.triggerController.removeClickListener();
            }
            present() {
              var i = this;
              return (0, g.A)(function* () {
                const n = yield i.lockController.lock();
                yield i.delegateController.attachViewToDom(),
                  yield (0, r.f)(i, 'loadingEnter', y, x),
                  i.duration > 0 &&
                    (i.durationTimeout = setTimeout(
                      () => i.dismiss(),
                      i.duration + 10,
                    )),
                  n();
              })();
            }
            dismiss(i, n) {
              var e = this;
              return (0, g.A)(function* () {
                const c = yield e.lockController.lock();
                e.durationTimeout && clearTimeout(e.durationTimeout);
                const l = yield (0, r.g)(e, i, n, 'loadingLeave', v, _);
                return l && e.delegateController.removeViewFromDom(), c(), l;
              })();
            }
            onDidDismiss() {
              return (0, r.h)(this.el, 'ionLoadingDidDismiss');
            }
            onWillDismiss() {
              return (0, r.h)(this.el, 'ionLoadingWillDismiss');
            }
            renderLoadingMessage(i) {
              const { customHTMLEnabled: n, message: e } = this;
              return n
                ? (0, t.h)('div', {
                    class: 'loading-content',
                    id: i,
                    innerHTML: (0, m.a)(e),
                  })
                : (0, t.h)('div', { class: 'loading-content', id: i }, e);
            }
            render() {
              const {
                  message: i,
                  spinner: n,
                  htmlAttributes: e,
                  overlayIndex: c,
                } = this,
                l = (0, d.b)(this),
                p = `loading-${c}-msg`;
              return (0, t.h)(
                t.f,
                Object.assign(
                  {
                    key: 'fb3d2cd7cd0539ed6540d8be50e243c7916b3ca2',
                    role: 'dialog',
                    'aria-modal': 'true',
                    'aria-labelledby': void 0 !== i ? p : null,
                    tabindex: '-1',
                  },
                  e,
                  {
                    style: { zIndex: `${4e4 + this.overlayIndex}` },
                    onIonBackdropTap: this.onBackdropTap,
                    class: Object.assign(
                      Object.assign({}, (0, b.g)(this.cssClass)),
                      {
                        [l]: !0,
                        'overlay-hidden': !0,
                        'loading-translucent': this.translucent,
                      },
                    ),
                  },
                ),
                (0, t.h)('ion-backdrop', {
                  key: 'c8bd30782f3040b1b80e88aa924861e439d40754',
                  visible: this.showBackdrop,
                  tappable: this.backdropDismiss,
                }),
                (0, t.h)('div', {
                  key: '4ebfbb67c92e8eb56c27dd7c199b35bf6be1cf63',
                  tabindex: '0',
                }),
                (0, t.h)(
                  'div',
                  {
                    key: '9492723cd87f1ef75534e449d4bc2b2deb0cb3cc',
                    class: 'loading-wrapper ion-overlay-wrapper',
                  },
                  n &&
                    (0, t.h)(
                      'div',
                      {
                        key: 'd9eb42454e48c82704d974a68b80ceb4de990417',
                        class: 'loading-spinner',
                      },
                      (0, t.h)('ion-spinner', {
                        key: 'cdb046bad89872f4208ae466979315652766bf3a',
                        name: n,
                        'aria-hidden': 'true',
                      }),
                    ),
                  void 0 !== i && this.renderLoadingMessage(p),
                ),
                (0, t.h)('div', {
                  key: '412d1bb537dafa6e6863d07ddc15f5969fe0617d',
                  tabindex: '0',
                }),
              );
            }
            get el() {
              return (0, t.i)(this);
            }
            static get watchers() {
              return {
                isOpen: ['onIsOpenChange'],
                trigger: ['triggerChanged'],
              };
            }
          };
          return (
            (o.style = {
              ios: '.sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, var(--ion-background-color-step-100, #f9f9f9)));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:0.875rem}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{-webkit-margin-start:16px;margin-inline-start:16px}',
              md: '.sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #0054e9);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));font-size:0.875rem}.loading-wrapper.sc-ion-loading-md{border-radius:2px;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{-webkit-margin-start:16px;margin-inline-start:16px}',
            }),
            o
          );
        })();
    },
  },
]);
