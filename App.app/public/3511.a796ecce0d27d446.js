'use strict';
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [3511],
  {
    3511: (_, n, o) => {
      o.r(n), o.d(n, { ion_checkbox: () => h });
      var e = o(4261),
        s = o(4920),
        l = o(333),
        p = o(9483);
      const h = class {
        constructor(c) {
          (0, e.r)(this, c),
            (this.ionChange = (0, e.d)(this, 'ionChange', 7)),
            (this.ionFocus = (0, e.d)(this, 'ionFocus', 7)),
            (this.ionBlur = (0, e.d)(this, 'ionBlur', 7)),
            (this.inputId = 'ion-cb-' + k++),
            (this.inheritedAttributes = {}),
            (this.setChecked = (t) => {
              const r = (this.checked = t);
              this.ionChange.emit({ checked: r, value: this.value });
            }),
            (this.toggleChecked = (t) => {
              t.preventDefault(),
                this.setFocus(),
                this.setChecked(!this.checked),
                (this.indeterminate = !1);
            }),
            (this.onFocus = () => {
              this.ionFocus.emit();
            }),
            (this.onBlur = () => {
              this.ionBlur.emit();
            }),
            (this.onClick = (t) => {
              this.disabled || this.toggleChecked(t);
            }),
            (this.color = void 0),
            (this.name = this.inputId),
            (this.checked = !1),
            (this.indeterminate = !1),
            (this.disabled = !1),
            (this.value = 'on'),
            (this.labelPlacement = 'start'),
            (this.justify = 'space-between'),
            (this.alignment = 'center');
        }
        componentWillLoad() {
          this.inheritedAttributes = Object.assign({}, (0, s.i)(this.el));
        }
        setFocus() {
          this.focusEl && this.focusEl.focus();
        }
        render() {
          const {
              color: c,
              checked: t,
              disabled: r,
              el: i,
              getSVGPath: m,
              indeterminate: a,
              inheritedAttributes: f,
              inputId: g,
              justify: w,
              labelPlacement: u,
              name: v,
              value: y,
              alignment: C,
            } = this,
            b = (0, p.b)(this),
            j = m(b, a);
          return (
            (0, s.d)(!0, i, v, t ? y : '', r),
            (0, e.h)(
              e.f,
              {
                key: '0ac95890562c7f035704c40959c69f8c8ca4bc9f',
                'aria-checked': a ? 'mixed' : `${t}`,
                class: (0, l.c)(c, {
                  [b]: !0,
                  'in-item': (0, l.h)('ion-item', i),
                  'checkbox-checked': t,
                  'checkbox-disabled': r,
                  'checkbox-indeterminate': a,
                  interactive: !0,
                  [`checkbox-justify-${w}`]: !0,
                  [`checkbox-alignment-${C}`]: !0,
                  [`checkbox-label-placement-${u}`]: !0,
                }),
                onClick: this.onClick,
              },
              (0, e.h)(
                'label',
                {
                  key: '3f9f7c8383dded8f7997086b25399d052df76b5c',
                  class: 'checkbox-wrapper',
                },
                (0, e.h)(
                  'input',
                  Object.assign(
                    {
                      key: '6fb11d06c424c289357d5d7c1a4d1b967be231d0',
                      type: 'checkbox',
                      checked: !!t || void 0,
                      disabled: r,
                      id: g,
                      onChange: this.toggleChecked,
                      onFocus: () => this.onFocus(),
                      onBlur: () => this.onBlur(),
                      ref: (z) => (this.focusEl = z),
                    },
                    f,
                  ),
                ),
                (0, e.h)(
                  'div',
                  {
                    key: 'f577a272e5e3f9f1852fc95e40466c80b76309c7',
                    class: {
                      'label-text-wrapper': !0,
                      'label-text-wrapper-hidden': '' === i.textContent,
                    },
                    part: 'label',
                  },
                  (0, e.h)('slot', {
                    key: '7c9b0b4513e797a1acdf55a5f286563e5f397e9c',
                  }),
                ),
                (0, e.h)(
                  'div',
                  {
                    key: 'e47c50a078b8d761ddc5efcb9a9635281b5818f6',
                    class: 'native-wrapper',
                  },
                  (0, e.h)(
                    'svg',
                    {
                      key: '4dca47179ae15e9094e01c799ef4ed25fbb0d840',
                      class: 'checkbox-icon',
                      viewBox: '0 0 24 24',
                      part: 'container',
                    },
                    j,
                  ),
                ),
              ),
            )
          );
        }
        getSVGPath(c, t) {
          let r = (0, e.h)(
            'path',
            t
              ? { d: 'M6 12L18 12', part: 'mark' }
              : { d: 'M5.9,12.5l3.8,3.8l8.8-8.8', part: 'mark' },
          );
          return (
            'md' === c &&
              (r = (0, e.h)(
                'path',
                t
                  ? { d: 'M2 12H22', part: 'mark' }
                  : { d: 'M1.73,12.91 8.1,19.28 22.79,4.59', part: 'mark' },
              )),
            r
          );
        }
        get el() {
          return (0, e.i)(this);
        }
      };
      let k = 0;
      h.style = {
        ios: ':host{--checkbox-background-checked:var(--ion-color-primary, #0054e9);--border-color-checked:var(--ion-color-primary, #0054e9);--checkmark-color:var(--ion-color-primary-contrast, #fff);--transition:none;display:inline-block;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.in-item){-ms-flex:1 1 0px;flex:1 1 0;width:100%;height:100%}:host([slot=start]),:host([slot=end]){-ms-flex:initial;flex:initial;width:auto}:host(.ion-color){--checkbox-background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}.checkbox-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.checkbox-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.checkbox-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.checkbox-icon{border-radius:var(--border-radius);position:relative;width:var(--size);height:var(--size);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--checkbox-background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-justify-space-between) .checkbox-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.checkbox-justify-start) .checkbox-wrapper{-ms-flex-pack:start;justify-content:start}:host(.checkbox-justify-end) .checkbox-wrapper{-ms-flex-pack:end;justify-content:end}:host(.checkbox-alignment-start) .checkbox-wrapper{-ms-flex-align:start;align-items:start}:host(.checkbox-alignment-center) .checkbox-wrapper{-ms-flex-align:center;align-items:center}:host(.checkbox-label-placement-start) .checkbox-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.checkbox-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.checkbox-label-placement-end) .checkbox-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.checkbox-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.checkbox-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.checkbox-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.checkbox-label-placement-stacked) .checkbox-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.checkbox-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.checkbox-label-placement-stacked.checkbox-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.checkbox-label-placement-stacked.checkbox-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).checkbox-label-placement-stacked.checkbox-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.checkbox-label-placement-stacked.checkbox-alignment-start:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.checkbox-label-placement-stacked.checkbox-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.checkbox-label-placement-stacked.checkbox-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).checkbox-label-placement-stacked.checkbox-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.checkbox-label-placement-stacked.checkbox-alignment-center:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--checkbox-background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:50%;--border-width:0.125rem;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.23);--checkbox-background:var(--ion-item-background, var(--ion-background-color, #fff));--size:min(1.375rem, 55.836px);--checkmark-width:1.5px}:host(.checkbox-disabled){opacity:0.3}',
        md: ':host{--checkbox-background-checked:var(--ion-color-primary, #0054e9);--border-color-checked:var(--ion-color-primary, #0054e9);--checkmark-color:var(--ion-color-primary-contrast, #fff);--transition:none;display:inline-block;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.in-item){-ms-flex:1 1 0px;flex:1 1 0;width:100%;height:100%}:host([slot=start]),:host([slot=end]){-ms-flex:initial;flex:initial;width:auto}:host(.ion-color){--checkbox-background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}.checkbox-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.checkbox-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.checkbox-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.checkbox-icon{border-radius:var(--border-radius);position:relative;width:var(--size);height:var(--size);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--checkbox-background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-justify-space-between) .checkbox-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.checkbox-justify-start) .checkbox-wrapper{-ms-flex-pack:start;justify-content:start}:host(.checkbox-justify-end) .checkbox-wrapper{-ms-flex-pack:end;justify-content:end}:host(.checkbox-alignment-start) .checkbox-wrapper{-ms-flex-align:start;align-items:start}:host(.checkbox-alignment-center) .checkbox-wrapper{-ms-flex-align:center;align-items:center}:host(.checkbox-label-placement-start) .checkbox-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.checkbox-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.checkbox-label-placement-end) .checkbox-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.checkbox-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.checkbox-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.checkbox-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.checkbox-label-placement-stacked) .checkbox-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.checkbox-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.checkbox-label-placement-stacked.checkbox-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.checkbox-label-placement-stacked.checkbox-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).checkbox-label-placement-stacked.checkbox-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.checkbox-label-placement-stacked.checkbox-alignment-start:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.checkbox-label-placement-stacked.checkbox-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.checkbox-label-placement-stacked.checkbox-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).checkbox-label-placement-stacked.checkbox-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.checkbox-label-placement-stacked.checkbox-alignment-center:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--checkbox-background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:rgb(var(--ion-text-color-rgb, 0, 0, 0), 0.6);--checkmark-width:3;--checkbox-background:var(--ion-item-background, var(--ion-background-color, #fff));--transition:background 180ms cubic-bezier(0.4, 0, 0.2, 1);--size:18px}.checkbox-icon path{stroke-dasharray:30;stroke-dashoffset:30}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{stroke-dashoffset:0;-webkit-transition:stroke-dashoffset 90ms linear 90ms;transition:stroke-dashoffset 90ms linear 90ms}:host(.checkbox-disabled) .label-text-wrapper{opacity:0.38}:host(.checkbox-disabled) .native-wrapper{opacity:0.63}',
      };
    },
  },
]);
