'use strict';
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [5222],
  {
    5222: (M, g, l) => {
      l.r(g), l.d(g, { ion_alert: () => x });
      var m = l(467),
        o = l(4261),
        u = l(464),
        k = l(4556),
        w = l(4920),
        y = l(7838),
        c = l(9440),
        b = l(333),
        h = l(9483),
        p = l(9986);
      l(1086), l(8438), l(8476), l(8607), l(1970), l(7192);
      const _ = (e) => {
          const t = (0, p.c)(),
            r = (0, p.c)(),
            i = (0, p.c)();
          return (
            r
              .addElement(e.querySelector('ion-backdrop'))
              .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
              .beforeStyles({ 'pointer-events': 'none' })
              .afterClearStyles(['pointer-events']),
            i.addElement(e.querySelector('.alert-wrapper')).keyframes([
              { offset: 0, opacity: '0.01', transform: 'scale(1.1)' },
              { offset: 1, opacity: '1', transform: 'scale(1)' },
            ]),
            t
              .addElement(e)
              .easing('ease-in-out')
              .duration(200)
              .addAnimation([r, i])
          );
        },
        C = (e) => {
          const t = (0, p.c)(),
            r = (0, p.c)(),
            i = (0, p.c)();
          return (
            r
              .addElement(e.querySelector('ion-backdrop'))
              .fromTo('opacity', 'var(--backdrop-opacity)', 0),
            i.addElement(e.querySelector('.alert-wrapper')).keyframes([
              { offset: 0, opacity: 0.99, transform: 'scale(1)' },
              { offset: 1, opacity: 0, transform: 'scale(0.9)' },
            ]),
            t
              .addElement(e)
              .easing('ease-in-out')
              .duration(200)
              .addAnimation([r, i])
          );
        },
        A = (e) => {
          const t = (0, p.c)(),
            r = (0, p.c)(),
            i = (0, p.c)();
          return (
            r
              .addElement(e.querySelector('ion-backdrop'))
              .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
              .beforeStyles({ 'pointer-events': 'none' })
              .afterClearStyles(['pointer-events']),
            i.addElement(e.querySelector('.alert-wrapper')).keyframes([
              { offset: 0, opacity: '0.01', transform: 'scale(0.9)' },
              { offset: 1, opacity: '1', transform: 'scale(1)' },
            ]),
            t
              .addElement(e)
              .easing('ease-in-out')
              .duration(150)
              .addAnimation([r, i])
          );
        },
        E = (e) => {
          const t = (0, p.c)(),
            r = (0, p.c)(),
            i = (0, p.c)();
          return (
            r
              .addElement(e.querySelector('ion-backdrop'))
              .fromTo('opacity', 'var(--backdrop-opacity)', 0),
            i
              .addElement(e.querySelector('.alert-wrapper'))
              .fromTo('opacity', 0.99, 0),
            t
              .addElement(e)
              .easing('ease-in-out')
              .duration(150)
              .addAnimation([r, i])
          );
        },
        x = class {
          constructor(e) {
            (0, o.r)(this, e),
              (this.didPresent = (0, o.d)(this, 'ionAlertDidPresent', 7)),
              (this.willPresent = (0, o.d)(this, 'ionAlertWillPresent', 7)),
              (this.willDismiss = (0, o.d)(this, 'ionAlertWillDismiss', 7)),
              (this.didDismiss = (0, o.d)(this, 'ionAlertDidDismiss', 7)),
              (this.didPresentShorthand = (0, o.d)(this, 'didPresent', 7)),
              (this.willPresentShorthand = (0, o.d)(this, 'willPresent', 7)),
              (this.willDismissShorthand = (0, o.d)(this, 'willDismiss', 7)),
              (this.didDismissShorthand = (0, o.d)(this, 'didDismiss', 7)),
              (this.delegateController = (0, c.d)(this)),
              (this.lockController = (0, y.c)()),
              (this.triggerController = (0, c.e)()),
              (this.customHTMLEnabled = h.c.get(
                'innerHTMLTemplatesEnabled',
                u.E,
              )),
              (this.processedInputs = []),
              (this.processedButtons = []),
              (this.presented = !1),
              (this.onBackdropTap = () => {
                this.dismiss(void 0, c.B);
              }),
              (this.dispatchCancelHandler = (t) => {
                if ((0, c.i)(t.detail.role)) {
                  const i = this.processedButtons.find(
                    (n) => 'cancel' === n.role,
                  );
                  this.callButtonHandler(i);
                }
              }),
              (this.overlayIndex = void 0),
              (this.delegate = void 0),
              (this.hasController = !1),
              (this.keyboardClose = !0),
              (this.enterAnimation = void 0),
              (this.leaveAnimation = void 0),
              (this.cssClass = void 0),
              (this.header = void 0),
              (this.subHeader = void 0),
              (this.message = void 0),
              (this.buttons = []),
              (this.inputs = []),
              (this.backdropDismiss = !0),
              (this.translucent = !1),
              (this.animated = !0),
              (this.htmlAttributes = void 0),
              (this.isOpen = !1),
              (this.trigger = void 0);
          }
          onIsOpenChange(e, t) {
            !0 === e && !1 === t
              ? this.present()
              : !1 === e && !0 === t && this.dismiss();
          }
          triggerChanged() {
            const { trigger: e, el: t, triggerController: r } = this;
            e && r.addClickListener(t, e);
          }
          onKeydown(e) {
            const t = new Set(this.processedInputs.map((s) => s.type));
            if (t.has('checkbox') && 'Enter' === e.key)
              return void e.preventDefault();
            if (
              !t.has('radio') ||
              (e.target && !this.el.contains(e.target)) ||
              e.target.classList.contains('alert-button')
            )
              return;
            const r = this.el.querySelectorAll('.alert-radio'),
              i = Array.from(r).filter((s) => !s.disabled),
              n = i.findIndex((s) => s.id === e.target.id);
            let a;
            if (
              (['ArrowDown', 'ArrowRight'].includes(e.key) &&
                (a = n === i.length - 1 ? i[0] : i[n + 1]),
              ['ArrowUp', 'ArrowLeft'].includes(e.key) &&
                (a = 0 === n ? i[i.length - 1] : i[n - 1]),
              a && i.includes(a))
            ) {
              const s = this.processedInputs.find(
                (d) => d.id === (null == a ? void 0 : a.id),
              );
              s && (this.rbClick(s), a.focus());
            }
          }
          buttonsChanged() {
            this.processedButtons = this.buttons.map((t) =>
              'string' == typeof t
                ? {
                    text: t,
                    role: 'cancel' === t.toLowerCase() ? 'cancel' : void 0,
                  }
                : t,
            );
          }
          inputsChanged() {
            const e = this.inputs,
              t = e.find((a) => !a.disabled),
              i = e.find((a) => a.checked && !a.disabled) || t,
              n = new Set(e.map((a) => a.type));
            n.has('checkbox') &&
              n.has('radio') &&
              console.warn(
                `Alert cannot mix input types: ${Array.from(n.values()).join('/')}. Please see alert docs for more info.`,
              ),
              (this.inputType = n.values().next().value),
              (this.processedInputs = e.map((a, s) => {
                var d;
                return {
                  type: a.type || 'text',
                  name: a.name || `${s}`,
                  placeholder: a.placeholder || '',
                  value: a.value,
                  label: a.label,
                  checked: !!a.checked,
                  disabled: !!a.disabled,
                  id: a.id || `alert-input-${this.overlayIndex}-${s}`,
                  handler: a.handler,
                  min: a.min,
                  max: a.max,
                  cssClass: null !== (d = a.cssClass) && void 0 !== d ? d : '',
                  attributes: a.attributes || {},
                  tabindex: 'radio' === a.type && a !== i ? -1 : 0,
                };
              }));
          }
          connectedCallback() {
            (0, c.j)(this.el), this.triggerChanged();
          }
          componentWillLoad() {
            var e;
            (!(null === (e = this.htmlAttributes) || void 0 === e) && e.id) ||
              (0, c.k)(this.el),
              this.inputsChanged(),
              this.buttonsChanged();
          }
          disconnectedCallback() {
            this.triggerController.removeClickListener(),
              this.gesture && (this.gesture.destroy(), (this.gesture = void 0));
          }
          componentDidLoad() {
            !this.gesture &&
              'ios' === (0, h.b)(this) &&
              this.wrapperEl &&
              ((this.gesture = (0, k.c)(this.wrapperEl, (e) =>
                e.classList.contains('alert-button'),
              )),
              this.gesture.enable(!0)),
              !0 === this.isOpen && (0, w.r)(() => this.present()),
              this.triggerChanged();
          }
          present() {
            var e = this;
            return (0, m.A)(function* () {
              const t = yield e.lockController.lock();
              yield e.delegateController.attachViewToDom(),
                yield (0, c.f)(e, 'alertEnter', _, A),
                t();
            })();
          }
          dismiss(e, t) {
            var r = this;
            return (0, m.A)(function* () {
              const i = yield r.lockController.lock(),
                n = yield (0, c.g)(r, e, t, 'alertLeave', C, E);
              return n && r.delegateController.removeViewFromDom(), i(), n;
            })();
          }
          onDidDismiss() {
            return (0, c.h)(this.el, 'ionAlertDidDismiss');
          }
          onWillDismiss() {
            return (0, c.h)(this.el, 'ionAlertWillDismiss');
          }
          rbClick(e) {
            for (const t of this.processedInputs)
              (t.checked = t === e), (t.tabindex = t === e ? 0 : -1);
            (this.activeId = e.id), (0, c.s)(e.handler, e), (0, o.j)(this);
          }
          cbClick(e) {
            (e.checked = !e.checked), (0, c.s)(e.handler, e), (0, o.j)(this);
          }
          buttonClick(e) {
            var t = this;
            return (0, m.A)(function* () {
              const r = e.role,
                i = t.getValues();
              if ((0, c.i)(r)) return t.dismiss({ values: i }, r);
              const n = yield t.callButtonHandler(e, i);
              return (
                !1 !== n && t.dismiss(Object.assign({ values: i }, n), e.role)
              );
            })();
          }
          callButtonHandler(e, t) {
            return (0, m.A)(function* () {
              if (null != e && e.handler) {
                const r = yield (0, c.s)(e.handler, t);
                if (!1 === r) return !1;
                if ('object' == typeof r) return r;
              }
              return {};
            })();
          }
          getValues() {
            if (0 === this.processedInputs.length) return;
            if ('radio' === this.inputType) {
              const t = this.processedInputs.find((r) => !!r.checked);
              return t ? t.value : void 0;
            }
            if ('checkbox' === this.inputType)
              return this.processedInputs
                .filter((t) => t.checked)
                .map((t) => t.value);
            const e = {};
            return (
              this.processedInputs.forEach((t) => {
                e[t.name] = t.value || '';
              }),
              e
            );
          }
          renderAlertInputs() {
            switch (this.inputType) {
              case 'checkbox':
                return this.renderCheckbox();
              case 'radio':
                return this.renderRadio();
              default:
                return this.renderInput();
            }
          }
          renderCheckbox() {
            const e = this.processedInputs,
              t = (0, h.b)(this);
            return 0 === e.length
              ? null
              : (0, o.h)(
                  'div',
                  { class: 'alert-checkbox-group' },
                  e.map((r) =>
                    (0, o.h)(
                      'button',
                      {
                        type: 'button',
                        onClick: () => this.cbClick(r),
                        'aria-checked': `${r.checked}`,
                        id: r.id,
                        disabled: r.disabled,
                        tabIndex: r.tabindex,
                        role: 'checkbox',
                        class: Object.assign(
                          Object.assign({}, (0, b.g)(r.cssClass)),
                          {
                            'alert-tappable': !0,
                            'alert-checkbox': !0,
                            'alert-checkbox-button': !0,
                            'ion-focusable': !0,
                            'alert-checkbox-button-disabled': r.disabled || !1,
                          },
                        ),
                      },
                      (0, o.h)(
                        'div',
                        { class: 'alert-button-inner' },
                        (0, o.h)(
                          'div',
                          { class: 'alert-checkbox-icon' },
                          (0, o.h)('div', { class: 'alert-checkbox-inner' }),
                        ),
                        (0, o.h)(
                          'div',
                          { class: 'alert-checkbox-label' },
                          r.label,
                        ),
                      ),
                      'md' === t && (0, o.h)('ion-ripple-effect', null),
                    ),
                  ),
                );
          }
          renderRadio() {
            const e = this.processedInputs;
            return 0 === e.length
              ? null
              : (0, o.h)(
                  'div',
                  {
                    class: 'alert-radio-group',
                    role: 'radiogroup',
                    'aria-activedescendant': this.activeId,
                  },
                  e.map((t) =>
                    (0, o.h)(
                      'button',
                      {
                        type: 'button',
                        onClick: () => this.rbClick(t),
                        'aria-checked': `${t.checked}`,
                        disabled: t.disabled,
                        id: t.id,
                        tabIndex: t.tabindex,
                        class: Object.assign(
                          Object.assign({}, (0, b.g)(t.cssClass)),
                          {
                            'alert-radio-button': !0,
                            'alert-tappable': !0,
                            'alert-radio': !0,
                            'ion-focusable': !0,
                            'alert-radio-button-disabled': t.disabled || !1,
                          },
                        ),
                        role: 'radio',
                      },
                      (0, o.h)(
                        'div',
                        { class: 'alert-button-inner' },
                        (0, o.h)(
                          'div',
                          { class: 'alert-radio-icon' },
                          (0, o.h)('div', { class: 'alert-radio-inner' }),
                        ),
                        (0, o.h)(
                          'div',
                          { class: 'alert-radio-label' },
                          t.label,
                        ),
                      ),
                    ),
                  ),
                );
          }
          renderInput() {
            const e = this.processedInputs;
            return 0 === e.length
              ? null
              : (0, o.h)(
                  'div',
                  { class: 'alert-input-group' },
                  e.map((t) => {
                    var r, i, n, a;
                    return (0, o.h)(
                      'div',
                      { class: 'alert-input-wrapper' },
                      'textarea' === t.type
                        ? (0, o.h)(
                            'textarea',
                            Object.assign(
                              {
                                placeholder: t.placeholder,
                                value: t.value,
                                id: t.id,
                                tabIndex: t.tabindex,
                              },
                              t.attributes,
                              {
                                disabled:
                                  null !==
                                    (i =
                                      null === (r = t.attributes) ||
                                      void 0 === r
                                        ? void 0
                                        : r.disabled) && void 0 !== i
                                    ? i
                                    : t.disabled,
                                class: f(t),
                                onInput: (s) => {
                                  var d;
                                  (t.value = s.target.value),
                                    null !== (d = t.attributes) &&
                                      void 0 !== d &&
                                      d.onInput &&
                                      t.attributes.onInput(s);
                                },
                              },
                            ),
                          )
                        : (0, o.h)(
                            'input',
                            Object.assign(
                              {
                                placeholder: t.placeholder,
                                type: t.type,
                                min: t.min,
                                max: t.max,
                                value: t.value,
                                id: t.id,
                                tabIndex: t.tabindex,
                              },
                              t.attributes,
                              {
                                disabled:
                                  null !==
                                    (a =
                                      null === (n = t.attributes) ||
                                      void 0 === n
                                        ? void 0
                                        : n.disabled) && void 0 !== a
                                    ? a
                                    : t.disabled,
                                class: f(t),
                                onInput: (s) => {
                                  var d;
                                  (t.value = s.target.value),
                                    null !== (d = t.attributes) &&
                                      void 0 !== d &&
                                      d.onInput &&
                                      t.attributes.onInput(s);
                                },
                              },
                            ),
                          ),
                    );
                  }),
                );
          }
          renderAlertButtons() {
            const e = this.processedButtons,
              t = (0, h.b)(this);
            return (0, o.h)(
              'div',
              {
                class: {
                  'alert-button-group': !0,
                  'alert-button-group-vertical': e.length > 2,
                },
              },
              e.map((i) =>
                (0, o.h)(
                  'button',
                  Object.assign({}, i.htmlAttributes, {
                    type: 'button',
                    id: i.id,
                    class: z(i),
                    tabIndex: 0,
                    onClick: () => this.buttonClick(i),
                  }),
                  (0, o.h)('span', { class: 'alert-button-inner' }, i.text),
                  'md' === t && (0, o.h)('ion-ripple-effect', null),
                ),
              ),
            );
          }
          renderAlertMessage(e) {
            const { customHTMLEnabled: t, message: r } = this;
            return t
              ? (0, o.h)('div', {
                  id: e,
                  class: 'alert-message',
                  innerHTML: (0, u.a)(r),
                })
              : (0, o.h)('div', { id: e, class: 'alert-message' }, r);
          }
          render() {
            const {
                overlayIndex: e,
                header: t,
                subHeader: r,
                message: i,
                htmlAttributes: n,
              } = this,
              a = (0, h.b)(this),
              s = `alert-${e}-hdr`,
              d = `alert-${e}-sub-hdr`,
              v = `alert-${e}-msg`;
            return (0, o.h)(
              o.f,
              Object.assign(
                {
                  key: 'c7d53f48b359f2bc3480a2e1ba34948fc9378fb0',
                  role:
                    this.inputs.length > 0 || this.buttons.length > 0
                      ? 'alertdialog'
                      : 'alert',
                  'aria-modal': 'true',
                  'aria-labelledby': t ? s : r ? d : null,
                  'aria-describedby': void 0 !== i ? v : null,
                  tabindex: '-1',
                },
                n,
                {
                  style: { zIndex: `${2e4 + e}` },
                  class: Object.assign(
                    Object.assign({}, (0, b.g)(this.cssClass)),
                    {
                      [a]: !0,
                      'overlay-hidden': !0,
                      'alert-translucent': this.translucent,
                    },
                  ),
                  onIonAlertWillDismiss: this.dispatchCancelHandler,
                  onIonBackdropTap: this.onBackdropTap,
                },
              ),
              (0, o.h)('ion-backdrop', {
                key: '18c7e6b5d63435d9a6a82bda951158e7e1af6e92',
                tappable: this.backdropDismiss,
              }),
              (0, o.h)('div', {
                key: 'e35e1a4b81286976c8a6bab570c986f3196b21f4',
                tabindex: '0',
              }),
              (0, o.h)(
                'div',
                {
                  key: '9089864c80d96ed834bf723f3de863cf1c4a5b97',
                  class: 'alert-wrapper ion-overlay-wrapper',
                  ref: (j) => (this.wrapperEl = j),
                },
                (0, o.h)(
                  'div',
                  {
                    key: 'dd600f02c84352059c6cdf98821b9c9a831bcdcb',
                    class: 'alert-head',
                  },
                  t &&
                    (0, o.h)(
                      'h2',
                      {
                        key: '11afb605e1ccefc889fbdd2533d491bea8fbf183',
                        id: s,
                        class: 'alert-title',
                      },
                      t,
                    ),
                  r &&
                    (0, o.h)(
                      'h2',
                      {
                        key: 'e53b0613d09d26e5a2cd7c9c6e63ec2535625ce5',
                        id: d,
                        class: 'alert-sub-title',
                      },
                      r,
                    ),
                ),
                this.renderAlertMessage(v),
                this.renderAlertInputs(),
                this.renderAlertButtons(),
              ),
              (0, o.h)('div', {
                key: 'cef60ec8b34c9aec8bc698f16f55324d1ce67c72',
                tabindex: '0',
              }),
            );
          }
          get el() {
            return (0, o.i)(this);
          }
          static get watchers() {
            return {
              isOpen: ['onIsOpenChange'],
              trigger: ['triggerChanged'],
              buttons: ['buttonsChanged'],
              inputs: ['inputsChanged'],
            };
          }
        },
        f = (e) => {
          var t, r, i;
          return Object.assign(
            Object.assign(
              {
                'alert-input': !0,
                'alert-input-disabled':
                  (null !==
                    (r =
                      null === (t = e.attributes) || void 0 === t
                        ? void 0
                        : t.disabled) && void 0 !== r
                    ? r
                    : e.disabled) || !1,
              },
              (0, b.g)(e.cssClass),
            ),
            (0, b.g)(
              e.attributes
                ? null === (i = e.attributes.class) || void 0 === i
                  ? void 0
                  : i.toString()
                : '',
            ),
          );
        },
        z = (e) =>
          Object.assign(
            {
              'alert-button': !0,
              'ion-focusable': !0,
              'ion-activatable': !0,
              [`alert-button-role-${e.role}`]: void 0 !== e.role,
            },
            (0, b.g)(e.cssClass),
          );
      x.style = {
        ios: '.sc-ion-alert-ios-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-ios-h{display:none}.alert-top.sc-ion-alert-ios-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-weight:normal}.alert-message.sc-ion-alert-ios,.alert-input-group.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-label.sc-ion-alert-ios,.alert-radio-label.sc-ion-alert-ios{overflow-wrap:anywhere}@media (any-pointer: coarse){.alert-checkbox-group.sc-ion-alert-ios::-webkit-scrollbar,.alert-radio-group.sc-ion-alert-ios::-webkit-scrollbar,.alert-message.sc-ion-alert-ios::-webkit-scrollbar{display:none}}.alert-input.sc-ion-alert-ios{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-ios{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;border:0;font-size:0.875rem;line-height:1.25rem;z-index:0}.alert-button.ion-focused.sc-ion-alert-ios,.alert-tappable.ion-focused.sc-ion-alert-ios{background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6))}.alert-button-inner.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit}.alert-input-disabled.sc-ion-alert-ios,.alert-checkbox-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios,.alert-radio-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios{cursor:default;opacity:0.5;pointer-events:none}.alert-tappable.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:initial;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:content}.alert-button.sc-ion-alert-ios,.alert-checkbox.sc-ion-alert-ios,.alert-input.sc-ion-alert-ios,.alert-radio.sc-ion-alert-ios{outline:none}.alert-radio-icon.sc-ion-alert-ios,.alert-checkbox-icon.sc-ion-alert-ios,.alert-checkbox-inner.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box}textarea.alert-input.sc-ion-alert-ios{min-height:37px;resize:none}.sc-ion-alert-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, var(--ion-background-color-step-100, #f9f9f9)));--max-width:clamp(270px, 16.875rem, 324px);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);font-size:max(14px, 0.875rem)}.alert-wrapper.sc-ion-alert-ios{border-radius:13px;-webkit-box-shadow:none;box-shadow:none;overflow:hidden}.alert-button.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios{pointer-events:none}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.alert-translucent.sc-ion-alert-ios-h .alert-wrapper.sc-ion-alert-ios{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.alert-head.sc-ion-alert-ios{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:12px;padding-bottom:7px;text-align:center}.alert-title.sc-ion-alert-ios{margin-top:8px;color:var(--ion-text-color, #000);font-size:max(17px, 1.0625rem);font-weight:600}.alert-sub-title.sc-ion-alert-ios{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));font-size:max(14px, 0.875rem)}.alert-message.sc-ion-alert-ios,.alert-input-group.sc-ion-alert-ios{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:21px;color:var(--ion-text-color, #000);font-size:max(13px, 0.8125rem);text-align:center}.alert-message.sc-ion-alert-ios{max-height:240px}.alert-message.sc-ion-alert-ios:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:12px}.alert-input.sc-ion-alert-ios{border-radius:7px;margin-top:10px;-webkit-padding-start:7px;padding-inline-start:7px;-webkit-padding-end:7px;padding-inline-end:7px;padding-top:7px;padding-bottom:7px;border:0.55px solid var(--ion-color-step-250, var(--ion-background-color-step-250, #bfbfbf));background-color:var(--ion-background-color, #fff);-webkit-appearance:none;-moz-appearance:none;appearance:none;font-size:1rem}.alert-input.sc-ion-alert-ios::-webkit-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-moz-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios:-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-clear{display:none}.alert-input.sc-ion-alert-ios::-webkit-date-and-time-value{height:18px}.alert-radio-group.sc-ion-alert-ios,.alert-checkbox-group.sc-ion-alert-ios{-ms-scroll-chaining:none;overscroll-behavior:contain;max-height:240px;border-top:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);overflow-y:auto;-webkit-overflow-scrolling:touch}.alert-tappable.sc-ion-alert-ios{min-height:44px}.alert-radio-label.sc-ion-alert-ios{-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;-ms-flex-order:0;order:0;color:var(--ion-text-color, #000)}[aria-checked=true].sc-ion-alert-ios .alert-radio-label.sc-ion-alert-ios{color:var(--ion-color-primary, #0054e9)}.alert-radio-icon.sc-ion-alert-ios{position:relative;-ms-flex-order:1;order:1;min-width:30px}[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{top:-7px;position:absolute;width:6px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary, #0054e9)}[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{inset-inline-start:7px}.alert-checkbox-label.sc-ion-alert-ios{-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-text-color, #000)}.alert-checkbox-icon.sc-ion-alert-ios{border-radius:50%;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:6px;margin-inline-end:6px;margin-top:10px;margin-bottom:10px;position:relative;width:min(1.375rem, 55.836px);height:min(1.375rem, 55.836px);border-width:0.125rem;border-style:solid;border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));background-color:var(--ion-item-background, var(--ion-background-color, #fff));contain:strict}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-icon.sc-ion-alert-ios{border-color:var(--ion-color-primary, #0054e9);background-color:var(--ion-color-primary, #0054e9)}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{top:calc(min(1.375rem, 55.836px) / 8);position:absolute;width:calc(min(1.375rem, 55.836px) / 6 + 1px);height:calc(min(1.375rem, 55.836px) * 0.5);-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:0.125rem;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-background-color, #fff)}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{inset-inline-start:calc(min(1.375rem, 55.836px) / 3)}.alert-button-group.sc-ion-alert-ios{-webkit-margin-end:-0.55px;margin-inline-end:-0.55px;-ms-flex-wrap:wrap;flex-wrap:wrap}.alert-button-group-vertical.sc-ion-alert-ios .alert-button.sc-ion-alert-ios{border-right:none}[dir=rtl].sc-ion-alert-ios-h .alert-button-group-vertical.sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child,[dir=rtl] .sc-ion-alert-ios-h .alert-button-group-vertical.sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child{border-right:none}[dir=rtl].sc-ion-alert-ios .alert-button-group-vertical.sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child{border-right:none}@supports selector(:dir(rtl)){.alert-button-group-vertical.sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child:dir(rtl){border-right:none}}.alert-button.sc-ion-alert-ios{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:0;-ms-flex:1 1 auto;flex:1 1 auto;min-width:50%;height:max(44px, 2.75rem);border-top:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);background-color:transparent;color:var(--ion-color-primary, #0054e9);font-size:max(17px, 1.0625rem);overflow:hidden}[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child,[dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child{border-right:0}[dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:first-child{border-right:0}@supports selector(:dir(rtl)){.alert-button.sc-ion-alert-ios:first-child:dir(rtl){border-right:0}}.alert-button.sc-ion-alert-ios:last-child{border-right:0;font-weight:bold}[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child,[dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child{border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}[dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child{border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}@supports selector(:dir(rtl)){.alert-button.sc-ion-alert-ios:last-child:dir(rtl){border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}}.alert-button.ion-activated.sc-ion-alert-ios{background-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1)}.alert-button-role-destructive.sc-ion-alert-ios,.alert-button-role-destructive.ion-activated.sc-ion-alert-ios,.alert-button-role-destructive.ion-focused.sc-ion-alert-ios{color:var(--ion-color-danger, #c5000f)}',
        md: '.sc-ion-alert-md-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-md-h{display:none}.alert-top.sc-ion-alert-md-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-weight:normal}.alert-message.sc-ion-alert-md,.alert-input-group.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-label.sc-ion-alert-md,.alert-radio-label.sc-ion-alert-md{overflow-wrap:anywhere}@media (any-pointer: coarse){.alert-checkbox-group.sc-ion-alert-md::-webkit-scrollbar,.alert-radio-group.sc-ion-alert-md::-webkit-scrollbar,.alert-message.sc-ion-alert-md::-webkit-scrollbar{display:none}}.alert-input.sc-ion-alert-md{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-md{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;border:0;font-size:0.875rem;line-height:1.25rem;z-index:0}.alert-button.ion-focused.sc-ion-alert-md,.alert-tappable.ion-focused.sc-ion-alert-md{background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6))}.alert-button-inner.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit}.alert-input-disabled.sc-ion-alert-md,.alert-checkbox-button-disabled.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md,.alert-radio-button-disabled.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md{cursor:default;opacity:0.5;pointer-events:none}.alert-tappable.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:initial;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:content}.alert-button.sc-ion-alert-md,.alert-checkbox.sc-ion-alert-md,.alert-input.sc-ion-alert-md,.alert-radio.sc-ion-alert-md{outline:none}.alert-radio-icon.sc-ion-alert-md,.alert-checkbox-icon.sc-ion-alert-md,.alert-checkbox-inner.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box}textarea.alert-input.sc-ion-alert-md{min-height:37px;resize:none}.sc-ion-alert-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--max-width:280px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);font-size:0.875rem}.alert-wrapper.sc-ion-alert-md{border-radius:4px;-webkit-box-shadow:0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);box-shadow:0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12)}.alert-head.sc-ion-alert-md{-webkit-padding-start:23px;padding-inline-start:23px;-webkit-padding-end:23px;padding-inline-end:23px;padding-top:20px;padding-bottom:15px;text-align:start}.alert-title.sc-ion-alert-md{color:var(--ion-text-color, #000);font-size:1.25rem;font-weight:500}.alert-sub-title.sc-ion-alert-md{color:var(--ion-text-color, #000);font-size:1rem}.alert-message.sc-ion-alert-md,.alert-input-group.sc-ion-alert-md{-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px;padding-top:20px;padding-bottom:20px;color:var(--ion-color-step-550, var(--ion-text-color-step-450, #737373))}.alert-message.sc-ion-alert-md{font-size:1rem}@media screen and (max-width: 767px){.alert-message.sc-ion-alert-md{max-height:266px}}.alert-message.sc-ion-alert-md:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-head.sc-ion-alert-md+.alert-message.sc-ion-alert-md{padding-top:0}.alert-input.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;border-bottom:1px solid var(--ion-color-step-150, var(--ion-background-color-step-150, #d9d9d9));color:var(--ion-text-color, #000)}.alert-input.sc-ion-alert-md::-webkit-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-moz-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md:-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-clear{display:none}.alert-input.sc-ion-alert-md:focus{margin-bottom:4px;border-bottom:2px solid var(--ion-color-primary, #0054e9)}.alert-radio-group.sc-ion-alert-md,.alert-checkbox-group.sc-ion-alert-md{position:relative;border-top:1px solid var(--ion-color-step-150, var(--ion-background-color-step-150, #d9d9d9));border-bottom:1px solid var(--ion-color-step-150, var(--ion-background-color-step-150, #d9d9d9));overflow:auto}@media screen and (max-width: 767px){.alert-radio-group.sc-ion-alert-md,.alert-checkbox-group.sc-ion-alert-md{max-height:266px}}.alert-tappable.sc-ion-alert-md{position:relative;min-height:48px}.alert-radio-label.sc-ion-alert-md{-webkit-padding-start:52px;padding-inline-start:52px;-webkit-padding-end:26px;padding-inline-end:26px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));font-size:1rem}.alert-radio-icon.sc-ion-alert-md{top:0;border-radius:50%;display:block;position:relative;width:20px;height:20px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550, var(--ion-background-color-step-550, #737373))}.alert-radio-icon.sc-ion-alert-md{inset-inline-start:26px}.alert-radio-inner.sc-ion-alert-md{top:3px;border-radius:50%;position:absolute;width:10px;height:10px;-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:var(--ion-color-primary, #0054e9)}.alert-radio-inner.sc-ion-alert-md{inset-inline-start:3px}[aria-checked=true].sc-ion-alert-md .alert-radio-label.sc-ion-alert-md{color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626))}[aria-checked=true].sc-ion-alert-md .alert-radio-icon.sc-ion-alert-md{border-color:var(--ion-color-primary, #0054e9)}[aria-checked=true].sc-ion-alert-md .alert-radio-inner.sc-ion-alert-md{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}.alert-checkbox-label.sc-ion-alert-md{-webkit-padding-start:53px;padding-inline-start:53px;-webkit-padding-end:26px;padding-inline-end:26px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;width:calc(100% - 53px);color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));font-size:1rem}.alert-checkbox-icon.sc-ion-alert-md{top:0;border-radius:2px;position:relative;width:16px;height:16px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550, var(--ion-background-color-step-550, #737373));contain:strict}.alert-checkbox-icon.sc-ion-alert-md{inset-inline-start:26px}[aria-checked=true].sc-ion-alert-md .alert-checkbox-icon.sc-ion-alert-md{border-color:var(--ion-color-primary, #0054e9);background-color:var(--ion-color-primary, #0054e9)}[aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{top:0;position:absolute;width:6px;height:10px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary-contrast, #fff)}[aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{inset-inline-start:3px}.alert-button-group.sc-ion-alert-md{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse;-ms-flex-pack:end;justify-content:flex-end}.alert-button.sc-ion-alert-md{border-radius:2px;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:0;margin-bottom:0;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;color:var(--ion-color-primary, #0054e9);font-weight:500;text-align:end;text-transform:uppercase;overflow:hidden}.alert-button-inner.sc-ion-alert-md{-ms-flex-pack:end;justify-content:flex-end}@media screen and (min-width: 768px){.sc-ion-alert-md-h{--max-width:min(100vw - 96px, 560px);--max-height:min(100vh - 96px, 560px)}}',
      };
    },
  },
]);
