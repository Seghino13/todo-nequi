'use strict';
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [3162],
  {
    3162: (B, l, t) => {
      t.r(l), t.d(l, { ion_back_button: () => k });
      var u = t(467),
        n = t(4261),
        v = t(4920),
        d = t(333),
        p = t(3992),
        i = t(9483);
      const k = (() => {
        let g = class {
          constructor(o) {
            var e = this;
            (0, n.r)(this, o),
              (this.inheritedAttributes = {}),
              (this.onClick = (function () {
                var c = (0, u.A)(function* (a) {
                  const r = e.el.closest('ion-nav');
                  return (
                    a.preventDefault(),
                    r && (yield r.canGoBack())
                      ? r.pop({
                          animationBuilder: e.routerAnimation,
                          skipIfBusy: !0,
                        })
                      : (0, d.o)(e.defaultHref, a, 'back', e.routerAnimation)
                  );
                });
                return function (a) {
                  return c.apply(this, arguments);
                };
              })()),
              (this.color = void 0),
              (this.defaultHref = void 0),
              (this.disabled = !1),
              (this.icon = void 0),
              (this.text = void 0),
              (this.type = 'button'),
              (this.routerAnimation = void 0);
          }
          componentWillLoad() {
            (this.inheritedAttributes = (0, v.i)(this.el)),
              void 0 === this.defaultHref &&
                (this.defaultHref = i.c.get('backButtonDefaultHref'));
          }
          get backButtonIcon() {
            const o = this.icon;
            return null != o
              ? o
              : 'ios' === (0, i.b)(this)
                ? i.c.get('backButtonIcon', p.c)
                : i.c.get('backButtonIcon', p.a);
          }
          get backButtonText() {
            const o = 'ios' === (0, i.b)(this) ? 'Back' : null;
            return null != this.text ? this.text : i.c.get('backButtonText', o);
          }
          get hasIconOnly() {
            return this.backButtonIcon && !this.backButtonText;
          }
          get rippleType() {
            return this.hasIconOnly ? 'unbounded' : 'bounded';
          }
          render() {
            const {
                color: o,
                defaultHref: e,
                disabled: c,
                type: a,
                hasIconOnly: r,
                backButtonIcon: b,
                backButtonText: s,
                icon: y,
                inheritedAttributes: w,
              } = this,
              x = void 0 !== e,
              h = (0, i.b)(this),
              _ = w['aria-label'] || s || 'back';
            return (0, n.h)(
              n.f,
              {
                key: '8351c93a1812c94c979fb115f07a9ad7b3152188',
                onClick: this.onClick,
                class: (0, d.c)(o, {
                  [h]: !0,
                  button: !0,
                  'back-button-disabled': c,
                  'back-button-has-icon-only': r,
                  'in-toolbar': (0, d.h)('ion-toolbar', this.el),
                  'in-toolbar-color': (0, d.h)('ion-toolbar[color]', this.el),
                  'ion-activatable': !0,
                  'ion-focusable': !0,
                  'show-back-button': x,
                }),
              },
              (0, n.h)(
                'button',
                {
                  key: '991b8baa784dbfbdf8d3581cbbf6a858ac1f1e6e',
                  type: a,
                  disabled: c,
                  class: 'button-native',
                  part: 'native',
                  'aria-label': _,
                },
                (0, n.h)(
                  'span',
                  {
                    key: '929fcd83a4fdb00cf97ca803f234719171602a5e',
                    class: 'button-inner',
                  },
                  b &&
                    (0, n.h)('ion-icon', {
                      key: '0c10d412ae8342d96f221e626b421c9abadac748',
                      part: 'icon',
                      icon: b,
                      'aria-hidden': 'true',
                      lazy: !1,
                      'flip-rtl': void 0 === y,
                    }),
                  s &&
                    (0, n.h)(
                      'span',
                      {
                        key: '96f505880a80f36ee8b8c78268b450f3629ee613',
                        part: 'text',
                        'aria-hidden': 'true',
                        class: 'button-text',
                      },
                      s,
                    ),
                ),
                'md' === h &&
                  (0, n.h)('ion-ripple-effect', {
                    key: '0aecf5d415c608069eb1a10043530bd0929b6383',
                    type: this.rippleType,
                  }),
              ),
            );
          }
          get el() {
            return (0, n.i)(this);
          }
        };
        return (
          (g.style = {
            ios: ':host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color, opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}ion-ripple-effect{color:var(--ripple-color)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:0.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-hover:transparent;--background-hover-opacity:1;--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #0054e9);--icon-margin-end:1px;--icon-margin-start:-4px;--icon-font-size:1.6em;--min-height:32px;font-size:clamp(17px, 1.0625rem, 21.998px)}.button-native{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:visible;z-index:99}:host(.ion-activated) .button-native{opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}',
            md: ':host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color, opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}ion-ripple-effect{color:var(--ripple-color)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:0.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--border-radius:4px;--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:0.04;--color:currentColor;--icon-margin-end:0;--icon-margin-start:0;--icon-font-size:1.5rem;--icon-font-weight:normal;--min-height:32px;--min-width:44px;--padding-start:12px;--padding-end:12px;font-size:0.875rem;font-weight:500;text-transform:uppercase}:host(.back-button-has-icon-only){--border-radius:50%;min-width:48px;min-height:48px;aspect-ratio:1/1}.button-native{-webkit-box-shadow:none;box-shadow:none}.button-text{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:0;padding-bottom:0}ion-icon{line-height:0.67;text-align:start}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}',
          }),
          g
        );
      })();
    },
  },
]);
