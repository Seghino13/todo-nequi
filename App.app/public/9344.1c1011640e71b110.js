'use strict';
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [9344],
  {
    9344: (S, h, e) => {
      e.r(h), e.d(h, { ion_input: () => v });
      var m = e(467),
        n = e(4261),
        k = e(9001),
        l = e(4920),
        b = e(243),
        p = e(333),
        g = e(3992),
        f = e(9483);
      e(8476);
      const v = class {
        constructor(i) {
          (0, n.r)(this, i),
            (this.ionInput = (0, n.d)(this, 'ionInput', 7)),
            (this.ionChange = (0, n.d)(this, 'ionChange', 7)),
            (this.ionBlur = (0, n.d)(this, 'ionBlur', 7)),
            (this.ionFocus = (0, n.d)(this, 'ionFocus', 7)),
            (this.inputId = 'ion-input-' + _++),
            (this.inheritedAttributes = {}),
            (this.isComposing = !1),
            (this.didInputClearOnEdit = !1),
            (this.onInput = (t) => {
              const o = t.target;
              o && (this.value = o.value || ''), this.emitInputChange(t);
            }),
            (this.onChange = (t) => {
              this.emitValueChange(t);
            }),
            (this.onBlur = (t) => {
              (this.hasFocus = !1),
                this.focusedValue !== this.value && this.emitValueChange(t),
                (this.didInputClearOnEdit = !1),
                this.ionBlur.emit(t);
            }),
            (this.onFocus = (t) => {
              (this.hasFocus = !0),
                (this.focusedValue = this.value),
                this.ionFocus.emit(t);
            }),
            (this.onKeydown = (t) => {
              this.checkClearOnEdit(t);
            }),
            (this.onCompositionStart = () => {
              this.isComposing = !0;
            }),
            (this.onCompositionEnd = () => {
              this.isComposing = !1;
            }),
            (this.clearTextInput = (t) => {
              this.clearInput &&
                !this.readonly &&
                !this.disabled &&
                t &&
                (t.preventDefault(), t.stopPropagation(), this.setFocus()),
                (this.value = ''),
                this.emitInputChange(t);
            }),
            (this.hasFocus = !1),
            (this.color = void 0),
            (this.autocapitalize = 'off'),
            (this.autocomplete = 'off'),
            (this.autocorrect = 'off'),
            (this.autofocus = !1),
            (this.clearInput = !1),
            (this.clearInputIcon = void 0),
            (this.clearOnEdit = void 0),
            (this.counter = !1),
            (this.counterFormatter = void 0),
            (this.debounce = void 0),
            (this.disabled = !1),
            (this.enterkeyhint = void 0),
            (this.errorText = void 0),
            (this.fill = void 0),
            (this.inputmode = void 0),
            (this.helperText = void 0),
            (this.label = void 0),
            (this.labelPlacement = 'start'),
            (this.max = void 0),
            (this.maxlength = void 0),
            (this.min = void 0),
            (this.minlength = void 0),
            (this.multiple = void 0),
            (this.name = this.inputId),
            (this.pattern = void 0),
            (this.placeholder = void 0),
            (this.readonly = !1),
            (this.required = !1),
            (this.shape = void 0),
            (this.spellcheck = !1),
            (this.step = void 0),
            (this.type = 'text'),
            (this.value = '');
        }
        debounceChanged() {
          const { ionInput: i, debounce: t, originalIonInput: o } = this;
          this.ionInput = void 0 === t ? (null != o ? o : i) : (0, l.e)(i, t);
        }
        onTypeChange() {
          const i = this.el.querySelector('ion-input-password-toggle');
          i && (i.type = this.type);
        }
        valueChanged() {
          const i = this.nativeInput,
            t = this.getValue();
          i && i.value !== t && !this.isComposing && (i.value = t);
        }
        componentWillLoad() {
          this.inheritedAttributes = Object.assign(
            Object.assign({}, (0, l.i)(this.el)),
            (0, l.h)(this.el, ['tabindex', 'title', 'data-form-type']),
          );
        }
        connectedCallback() {
          const { el: i } = this;
          (this.slotMutationController = (0, b.c)(
            i,
            ['label', 'start', 'end'],
            () => (0, n.j)(this),
          )),
            (this.notchController = (0, k.c)(
              i,
              () => this.notchSpacerEl,
              () => this.labelSlot,
            )),
            this.debounceChanged(),
            document.dispatchEvent(
              new CustomEvent('ionInputDidLoad', { detail: this.el }),
            );
        }
        componentDidLoad() {
          (this.originalIonInput = this.ionInput),
            this.onTypeChange(),
            this.debounceChanged();
        }
        componentDidRender() {
          var i;
          null === (i = this.notchController) ||
            void 0 === i ||
            i.calculateNotchWidth();
        }
        disconnectedCallback() {
          document.dispatchEvent(
            new CustomEvent('ionInputDidUnload', { detail: this.el }),
          ),
            this.slotMutationController &&
              (this.slotMutationController.destroy(),
              (this.slotMutationController = void 0)),
            this.notchController &&
              (this.notchController.destroy(), (this.notchController = void 0));
        }
        setFocus() {
          var i = this;
          return (0, m.A)(function* () {
            i.nativeInput && i.nativeInput.focus();
          })();
        }
        getInputElement() {
          var i = this;
          return (0, m.A)(function* () {
            return (
              i.nativeInput || (yield new Promise((t) => (0, l.c)(i.el, t))),
              Promise.resolve(i.nativeInput)
            );
          })();
        }
        emitValueChange(i) {
          const { value: t } = this,
            o = null == t ? t : t.toString();
          (this.focusedValue = o), this.ionChange.emit({ value: o, event: i });
        }
        emitInputChange(i) {
          const { value: t } = this,
            o = null == t ? t : t.toString();
          this.ionInput.emit({ value: o, event: i });
        }
        shouldClearOnEdit() {
          const { type: i, clearOnEdit: t } = this;
          return void 0 === t ? 'password' === i : t;
        }
        getValue() {
          return 'number' == typeof this.value
            ? this.value.toString()
            : (this.value || '').toString();
        }
        checkClearOnEdit(i) {
          if (!this.shouldClearOnEdit()) return;
          const o = [
            'Enter',
            'Tab',
            'Shift',
            'Meta',
            'Alt',
            'Control',
          ].includes(i.key);
          !this.didInputClearOnEdit &&
            this.hasValue() &&
            !o &&
            ((this.value = ''), this.emitInputChange(i)),
            o || (this.didInputClearOnEdit = !0);
        }
        hasValue() {
          return this.getValue().length > 0;
        }
        renderHintText() {
          const { helperText: i, errorText: t } = this;
          return [
            (0, n.h)('div', { class: 'helper-text' }, i),
            (0, n.h)('div', { class: 'error-text' }, t),
          ];
        }
        renderCounter() {
          const {
            counter: i,
            maxlength: t,
            counterFormatter: o,
            value: a,
          } = this;
          if (!0 === i && void 0 !== t)
            return (0, n.h)('div', { class: 'counter' }, (0, b.g)(a, t, o));
        }
        renderBottomContent() {
          const {
            counter: i,
            helperText: t,
            errorText: o,
            maxlength: a,
          } = this;
          if (t || o || (!0 === i && void 0 !== a))
            return (0, n.h)(
              'div',
              { class: 'input-bottom' },
              this.renderHintText(),
              this.renderCounter(),
            );
        }
        renderLabel() {
          const { label: i } = this;
          return (0, n.h)(
            'div',
            {
              class: {
                'label-text-wrapper': !0,
                'label-text-wrapper-hidden': !this.hasLabel,
              },
            },
            void 0 === i
              ? (0, n.h)('slot', { name: 'label' })
              : (0, n.h)('div', { class: 'label-text' }, i),
          );
        }
        get labelSlot() {
          return this.el.querySelector('[slot="label"]');
        }
        get hasLabel() {
          return void 0 !== this.label || null !== this.labelSlot;
        }
        renderLabelContainer() {
          return 'md' === (0, f.b)(this) && 'outline' === this.fill
            ? [
                (0, n.h)(
                  'div',
                  { class: 'input-outline-container' },
                  (0, n.h)('div', { class: 'input-outline-start' }),
                  (0, n.h)(
                    'div',
                    {
                      class: {
                        'input-outline-notch': !0,
                        'input-outline-notch-hidden': !this.hasLabel,
                      },
                    },
                    (0, n.h)(
                      'div',
                      {
                        class: 'notch-spacer',
                        'aria-hidden': 'true',
                        ref: (o) => (this.notchSpacerEl = o),
                      },
                      this.label,
                    ),
                  ),
                  (0, n.h)('div', { class: 'input-outline-end' }),
                ),
                this.renderLabel(),
              ]
            : this.renderLabel();
        }
        render() {
          const {
              disabled: i,
              fill: t,
              readonly: o,
              shape: a,
              inputId: d,
              labelPlacement: s,
              el: E,
              hasFocus: x,
              clearInputIcon: c,
            } = this,
            u = (0, f.b)(this),
            z = this.getValue(),
            w = (0, p.h)('ion-item', this.el),
            O = 'md' === u && 'outline' !== t && !w,
            T = null != c ? c : 'ios' === u ? g.b : g.d,
            y = this.hasValue(),
            M = null !== E.querySelector('[slot="start"], [slot="end"]'),
            P = 'stacked' === s || ('floating' === s && (y || x || M));
          return (0, n.h)(
            n.f,
            {
              key: '907ce98a82b5cfae5a08504cd79e00a2330b7444',
              class: (0, p.c)(this.color, {
                [u]: !0,
                'has-value': y,
                'has-focus': x,
                'label-floating': P,
                [`input-fill-${t}`]: void 0 !== t,
                [`input-shape-${a}`]: void 0 !== a,
                [`input-label-placement-${s}`]: !0,
                'in-item': w,
                'in-item-color': (0, p.h)('ion-item.ion-color', this.el),
                'input-disabled': i,
              }),
            },
            (0, n.h)(
              'label',
              {
                key: '59d5bb45d2a5b828bba0ed8687a632a551e2f4d8',
                class: 'input-wrapper',
                htmlFor: d,
              },
              this.renderLabelContainer(),
              (0, n.h)(
                'div',
                {
                  key: 'f93f129d08246d0e9a601c100d718534d6403853',
                  class: 'native-wrapper',
                },
                (0, n.h)('slot', {
                  key: '54eeb1a6bace662b7eb0d7e27180ea3d7e3a3729',
                  name: 'start',
                }),
                (0, n.h)(
                  'input',
                  Object.assign(
                    {
                      key: 'b3e0be55bc1a4a539ae3b0fdcf7fc078723cca16',
                      class: 'native-input',
                      ref: (r) => (this.nativeInput = r),
                      id: d,
                      disabled: i,
                      autoCapitalize: this.autocapitalize,
                      autoComplete: this.autocomplete,
                      autoCorrect: this.autocorrect,
                      autoFocus: this.autofocus,
                      enterKeyHint: this.enterkeyhint,
                      inputMode: this.inputmode,
                      min: this.min,
                      max: this.max,
                      minLength: this.minlength,
                      maxLength: this.maxlength,
                      multiple: this.multiple,
                      name: this.name,
                      pattern: this.pattern,
                      placeholder: this.placeholder || '',
                      readOnly: o,
                      required: this.required,
                      spellcheck: this.spellcheck,
                      step: this.step,
                      type: this.type,
                      value: z,
                      onInput: this.onInput,
                      onChange: this.onChange,
                      onBlur: this.onBlur,
                      onFocus: this.onFocus,
                      onKeyDown: this.onKeydown,
                      onCompositionstart: this.onCompositionStart,
                      onCompositionend: this.onCompositionEnd,
                    },
                    this.inheritedAttributes,
                  ),
                ),
                this.clearInput &&
                  !o &&
                  !i &&
                  (0, n.h)(
                    'button',
                    {
                      key: '5f6373504a6d0d074bfbf875c794d45ea2748175',
                      'aria-label': 'reset',
                      type: 'button',
                      class: 'input-clear-icon',
                      onPointerDown: (r) => {
                        r.preventDefault();
                      },
                      onFocusin: (r) => {
                        r.stopPropagation();
                      },
                      onClick: this.clearTextInput,
                    },
                    (0, n.h)('ion-icon', {
                      key: '230d77973aa83458ceb32bf52e3abe9bc322cfe6',
                      'aria-hidden': 'true',
                      icon: T,
                    }),
                  ),
                (0, n.h)('slot', {
                  key: '9d69ac6e8a3c4b2b303dba2478f82695d5755ed2',
                  name: 'end',
                }),
              ),
              O &&
                (0, n.h)('div', {
                  key: 'ac61f16237ce731e0745ab72d0fc3f066252464a',
                  class: 'input-highlight',
                }),
            ),
            this.renderBottomContent(),
          );
        }
        get el() {
          return (0, n.i)(this);
        }
        static get watchers() {
          return {
            debounce: ['debounceChanged'],
            type: ['onTypeChange'],
            value: ['valueChanged'],
          };
        }
      };
      let _ = 0;
      v.style = {
        ios: '.sc-ion-input-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--background:transparent;--color:initial;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #0054e9);--highlight-color-valid:var(--ion-color-success, #2dd55b);--highlight-color-invalid:var(--ion-color-danger, #c5000f);--highlight-color:var(--highlight-color-focused);display:block;position:relative;width:100%;min-height:44px;padding:0 !important;color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2}ion-item[slot=start].sc-ion-input-ios-h,ion-item [slot=start].sc-ion-input-ios-h,ion-item[slot=end].sc-ion-input-ios-h,ion-item [slot=end].sc-ion-input-ios-h{width:auto}.ion-color.sc-ion-input-ios-h{--highlight-color-focused:var(--ion-color-base)}.input-label-placement-floating.sc-ion-input-ios-h,.input-label-placement-stacked.sc-ion-input-ios-h{min-height:56px}.native-input.sc-ion-input-ios{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:1}.native-input.sc-ion-input-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-ios:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input.sc-ion-input-ios::-ms-clear{display:none}.cloned-input.sc-ion-input-ios{top:0;bottom:0;position:absolute;pointer-events:none}.cloned-input.sc-ion-input-ios{inset-inline-start:0}.cloned-input.sc-ion-input-ios:disabled{opacity:1}.input-clear-icon.sc-ion-input-ios{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:center;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:30px;height:30px;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.in-item-color.sc-ion-input-ios-h .input-clear-icon.sc-ion-input-ios{color:inherit}.input-clear-icon.sc-ion-input-ios:focus{opacity:0.5}.has-value.sc-ion-input-ios-h .input-clear-icon.sc-ion-input-ios{visibility:visible}.input-wrapper.sc-ion-input-ios{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:stretch;align-items:stretch;height:inherit;min-height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;background:var(--background);line-height:normal}.native-wrapper.sc-ion-input-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;width:100%}.ion-touched.ion-invalid.sc-ion-input-ios-h{--highlight-color:var(--highlight-color-invalid)}.ion-valid.sc-ion-input-ios-h{--highlight-color:var(--highlight-color-valid)}.input-bottom.sc-ion-input-ios{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:5px;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-top:var(--border-width) var(--border-style) var(--border-color);font-size:0.75rem}.has-focus.ion-valid.sc-ion-input-ios-h,.ion-touched.ion-invalid.sc-ion-input-ios-h{--border-color:var(--highlight-color)}.input-bottom.sc-ion-input-ios .error-text.sc-ion-input-ios{display:none;color:var(--highlight-color-invalid)}.input-bottom.sc-ion-input-ios .helper-text.sc-ion-input-ios{display:block;color:var(--ion-color-step-550, var(--ion-text-color-step-450, #737373))}.ion-touched.ion-invalid.sc-ion-input-ios-h .input-bottom.sc-ion-input-ios .error-text.sc-ion-input-ios{display:block}.ion-touched.ion-invalid.sc-ion-input-ios-h .input-bottom.sc-ion-input-ios .helper-text.sc-ion-input-ios{display:none}.input-bottom.sc-ion-input-ios .counter.sc-ion-input-ios{-webkit-margin-start:auto;margin-inline-start:auto;color:var(--ion-color-step-550, var(--ion-text-color-step-450, #737373));white-space:nowrap;-webkit-padding-start:16px;padding-inline-start:16px}.has-focus.sc-ion-input-ios-h input.sc-ion-input-ios{caret-color:var(--highlight-color)}.label-text-wrapper.sc-ion-input-ios{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;max-width:200px;-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text.sc-ion-input-ios,.sc-ion-input-ios-s>[slot=label]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden.sc-ion-input-ios,.input-outline-notch-hidden.sc-ion-input-ios{display:none}.input-wrapper.sc-ion-input-ios input.sc-ion-input-ios{-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.input-label-placement-start.sc-ion-input-ios-h .input-wrapper.sc-ion-input-ios{-ms-flex-direction:row;flex-direction:row}.input-label-placement-start.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}.input-label-placement-end.sc-ion-input-ios-h .input-wrapper.sc-ion-input-ios{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.input-label-placement-end.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}.input-label-placement-fixed.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}.input-label-placement-fixed.sc-ion-input-ios-h .label-text.sc-ion-input-ios{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.input-label-placement-stacked.sc-ion-input-ios-h .input-wrapper.sc-ion-input-ios,.input-label-placement-floating.sc-ion-input-ios-h .input-wrapper.sc-ion-input-ios{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start}.input-label-placement-stacked.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios,.input-label-placement-floating.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios{-webkit-transform-origin:left top;transform-origin:left top;max-width:100%;z-index:2}[dir=rtl].sc-ion-input-ios-h -no-combinator.input-label-placement-stacked.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios,[dir=rtl] .sc-ion-input-ios-h -no-combinator.input-label-placement-stacked.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios,[dir=rtl].input-label-placement-stacked.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios,[dir=rtl] .input-label-placement-stacked.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios,[dir=rtl].sc-ion-input-ios-h -no-combinator.input-label-placement-floating.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios,[dir=rtl] .sc-ion-input-ios-h -no-combinator.input-label-placement-floating.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios,[dir=rtl].input-label-placement-floating.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios,[dir=rtl] .input-label-placement-floating.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.input-label-placement-stacked.sc-ion-input-ios-h:dir(rtl) .label-text-wrapper.sc-ion-input-ios,.input-label-placement-floating.sc-ion-input-ios-h:dir(rtl) .label-text-wrapper.sc-ion-input-ios{-webkit-transform-origin:right top;transform-origin:right top}}.input-label-placement-stacked.sc-ion-input-ios-h input.sc-ion-input-ios,.input-label-placement-floating.sc-ion-input-ios-h input.sc-ion-input-ios{margin-left:0;margin-right:0;margin-top:1px;margin-bottom:0}.input-label-placement-floating.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios{-webkit-transform:translateY(100%) scale(1);transform:translateY(100%) scale(1)}.input-label-placement-floating.sc-ion-input-ios-h input.sc-ion-input-ios{opacity:0}.has-focus.input-label-placement-floating.sc-ion-input-ios-h input.sc-ion-input-ios,.has-value.input-label-placement-floating.sc-ion-input-ios-h input.sc-ion-input-ios{opacity:1}.label-floating.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}.sc-ion-input-ios-s>[slot=start]:last-of-type{-webkit-margin-end:16px;margin-inline-end:16px;-webkit-margin-start:0;margin-inline-start:0}.sc-ion-input-ios-s>[slot=end]:first-of-type{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}.sc-ion-input-ios-h[disabled].sc-ion-input-ios-s>ion-input-password-toggle,.sc-ion-input-ios-h[disabled] .sc-ion-input-ios-s>ion-input-password-toggle,.sc-ion-input-ios-h[readonly].sc-ion-input-ios-s>ion-input-password-toggle,.sc-ion-input-ios-h[readonly] .sc-ion-input-ios-s>ion-input-password-toggle{display:none}.sc-ion-input-ios-h{--border-width:0.55px;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));--highlight-height:0px;font-size:inherit}.input-clear-icon.sc-ion-input-ios ion-icon.sc-ion-input-ios{width:18px;height:18px}.input-disabled.sc-ion-input-ios-h{opacity:0.3}.sc-ion-input-ios-s>ion-button[slot=start].button-has-icon-only,.sc-ion-input-ios-s>ion-button[slot=end].button-has-icon-only{--border-radius:50%;--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;aspect-ratio:1}',
        md: '.sc-ion-input-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--background:transparent;--color:initial;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #0054e9);--highlight-color-valid:var(--ion-color-success, #2dd55b);--highlight-color-invalid:var(--ion-color-danger, #c5000f);--highlight-color:var(--highlight-color-focused);display:block;position:relative;width:100%;min-height:44px;padding:0 !important;color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2}ion-item[slot=start].sc-ion-input-md-h,ion-item [slot=start].sc-ion-input-md-h,ion-item[slot=end].sc-ion-input-md-h,ion-item [slot=end].sc-ion-input-md-h{width:auto}.ion-color.sc-ion-input-md-h{--highlight-color-focused:var(--ion-color-base)}.input-label-placement-floating.sc-ion-input-md-h,.input-label-placement-stacked.sc-ion-input-md-h{min-height:56px}.native-input.sc-ion-input-md{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:1}.native-input.sc-ion-input-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-md:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input.sc-ion-input-md::-ms-clear{display:none}.cloned-input.sc-ion-input-md{top:0;bottom:0;position:absolute;pointer-events:none}.cloned-input.sc-ion-input-md{inset-inline-start:0}.cloned-input.sc-ion-input-md:disabled{opacity:1}.input-clear-icon.sc-ion-input-md{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:center;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:30px;height:30px;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.in-item-color.sc-ion-input-md-h .input-clear-icon.sc-ion-input-md{color:inherit}.input-clear-icon.sc-ion-input-md:focus{opacity:0.5}.has-value.sc-ion-input-md-h .input-clear-icon.sc-ion-input-md{visibility:visible}.input-wrapper.sc-ion-input-md{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:stretch;align-items:stretch;height:inherit;min-height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;background:var(--background);line-height:normal}.native-wrapper.sc-ion-input-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;width:100%}.ion-touched.ion-invalid.sc-ion-input-md-h{--highlight-color:var(--highlight-color-invalid)}.ion-valid.sc-ion-input-md-h{--highlight-color:var(--highlight-color-valid)}.input-bottom.sc-ion-input-md{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:5px;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-top:var(--border-width) var(--border-style) var(--border-color);font-size:0.75rem}.has-focus.ion-valid.sc-ion-input-md-h,.ion-touched.ion-invalid.sc-ion-input-md-h{--border-color:var(--highlight-color)}.input-bottom.sc-ion-input-md .error-text.sc-ion-input-md{display:none;color:var(--highlight-color-invalid)}.input-bottom.sc-ion-input-md .helper-text.sc-ion-input-md{display:block;color:var(--ion-color-step-550, var(--ion-text-color-step-450, #737373))}.ion-touched.ion-invalid.sc-ion-input-md-h .input-bottom.sc-ion-input-md .error-text.sc-ion-input-md{display:block}.ion-touched.ion-invalid.sc-ion-input-md-h .input-bottom.sc-ion-input-md .helper-text.sc-ion-input-md{display:none}.input-bottom.sc-ion-input-md .counter.sc-ion-input-md{-webkit-margin-start:auto;margin-inline-start:auto;color:var(--ion-color-step-550, var(--ion-text-color-step-450, #737373));white-space:nowrap;-webkit-padding-start:16px;padding-inline-start:16px}.has-focus.sc-ion-input-md-h input.sc-ion-input-md{caret-color:var(--highlight-color)}.label-text-wrapper.sc-ion-input-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;max-width:200px;-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text.sc-ion-input-md,.sc-ion-input-md-s>[slot=label]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden.sc-ion-input-md,.input-outline-notch-hidden.sc-ion-input-md{display:none}.input-wrapper.sc-ion-input-md input.sc-ion-input-md{-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.input-label-placement-start.sc-ion-input-md-h .input-wrapper.sc-ion-input-md{-ms-flex-direction:row;flex-direction:row}.input-label-placement-start.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}.input-label-placement-end.sc-ion-input-md-h .input-wrapper.sc-ion-input-md{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.input-label-placement-end.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}.input-label-placement-fixed.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}.input-label-placement-fixed.sc-ion-input-md-h .label-text.sc-ion-input-md{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.input-label-placement-stacked.sc-ion-input-md-h .input-wrapper.sc-ion-input-md,.input-label-placement-floating.sc-ion-input-md-h .input-wrapper.sc-ion-input-md{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start}.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-transform-origin:left top;transform-origin:left top;max-width:100%;z-index:2}[dir=rtl].sc-ion-input-md-h -no-combinator.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl] .sc-ion-input-md-h -no-combinator.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl].input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl] .input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl].sc-ion-input-md-h -no-combinator.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl] .sc-ion-input-md-h -no-combinator.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl].input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl] .input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.input-label-placement-stacked.sc-ion-input-md-h:dir(rtl) .label-text-wrapper.sc-ion-input-md,.input-label-placement-floating.sc-ion-input-md-h:dir(rtl) .label-text-wrapper.sc-ion-input-md{-webkit-transform-origin:right top;transform-origin:right top}}.input-label-placement-stacked.sc-ion-input-md-h input.sc-ion-input-md,.input-label-placement-floating.sc-ion-input-md-h input.sc-ion-input-md{margin-left:0;margin-right:0;margin-top:1px;margin-bottom:0}.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-transform:translateY(100%) scale(1);transform:translateY(100%) scale(1)}.input-label-placement-floating.sc-ion-input-md-h input.sc-ion-input-md{opacity:0}.has-focus.input-label-placement-floating.sc-ion-input-md-h input.sc-ion-input-md,.has-value.input-label-placement-floating.sc-ion-input-md-h input.sc-ion-input-md{opacity:1}.label-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}.sc-ion-input-md-s>[slot=start]:last-of-type{-webkit-margin-end:16px;margin-inline-end:16px;-webkit-margin-start:0;margin-inline-start:0}.sc-ion-input-md-s>[slot=end]:first-of-type{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}.sc-ion-input-md-h[disabled].sc-ion-input-md-s>ion-input-password-toggle,.sc-ion-input-md-h[disabled] .sc-ion-input-md-s>ion-input-password-toggle,.sc-ion-input-md-h[readonly].sc-ion-input-md-s>ion-input-password-toggle,.sc-ion-input-md-h[readonly] .sc-ion-input-md-s>ion-input-password-toggle{display:none}.input-fill-solid.sc-ion-input-md-h{--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--border-color:var(--ion-color-step-500, var(--ion-background-color-step-500, gray));--border-radius:4px;--padding-start:16px;--padding-end:16px;min-height:56px}.input-fill-solid.sc-ion-input-md-h .input-wrapper.sc-ion-input-md{border-bottom:var(--border-width) var(--border-style) var(--border-color)}.has-focus.input-fill-solid.ion-valid.sc-ion-input-md-h,.input-fill-solid.ion-touched.ion-invalid.sc-ion-input-md-h{--border-color:var(--highlight-color)}.input-fill-solid.sc-ion-input-md-h .input-bottom.sc-ion-input-md{border-top:none}@media (any-hover: hover){.input-fill-solid.sc-ion-input-md-h:hover{--background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6));--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}}.input-fill-solid.has-focus.sc-ion-input-md-h{--background:var(--ion-color-step-150, var(--ion-background-color-step-150, #d9d9d9));--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}.input-fill-solid.sc-ion-input-md-h .input-wrapper.sc-ion-input-md{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0px;border-end-start-radius:0px}.label-floating.input-fill-solid.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{max-width:calc(100% / 0.75)}.input-fill-outline.sc-ion-input-md-h{--border-color:var(--ion-color-step-300, var(--ion-background-color-step-300, #b3b3b3));--border-radius:4px;--padding-start:16px;--padding-end:16px;min-height:56px}.input-fill-outline.input-shape-round.sc-ion-input-md-h{--border-radius:28px;--padding-start:32px;--padding-end:32px}.has-focus.input-fill-outline.ion-valid.sc-ion-input-md-h,.input-fill-outline.ion-touched.ion-invalid.sc-ion-input-md-h{--border-color:var(--highlight-color)}@media (any-hover: hover){.input-fill-outline.sc-ion-input-md-h:hover{--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}}.input-fill-outline.has-focus.sc-ion-input-md-h{--border-width:var(--highlight-height);--border-color:var(--highlight-color)}.input-fill-outline.sc-ion-input-md-h .input-bottom.sc-ion-input-md{border-top:none}.input-fill-outline.sc-ion-input-md-h .input-wrapper.sc-ion-input-md{border-bottom:none}.input-fill-outline.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,.input-fill-outline.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-transform-origin:left top;transform-origin:left top;position:absolute;max-width:calc(100% - var(--padding-start) - var(--padding-end))}[dir=rtl].sc-ion-input-md-h -no-combinator.input-fill-outline.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl] .sc-ion-input-md-h -no-combinator.input-fill-outline.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl].input-fill-outline.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl] .input-fill-outline.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl].sc-ion-input-md-h -no-combinator.input-fill-outline.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl] .sc-ion-input-md-h -no-combinator.input-fill-outline.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl].input-fill-outline.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl] .input-fill-outline.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.input-fill-outline.input-label-placement-stacked.sc-ion-input-md-h:dir(rtl) .label-text-wrapper.sc-ion-input-md,.input-fill-outline.input-label-placement-floating.sc-ion-input-md-h:dir(rtl) .label-text-wrapper.sc-ion-input-md{-webkit-transform-origin:right top;transform-origin:right top}}.input-fill-outline.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{position:relative}.label-floating.input-fill-outline.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-transform:translateY(-32%) scale(0.75);transform:translateY(-32%) scale(0.75);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;max-width:calc((100% - var(--padding-start) - var(--padding-end) - 8px) / 0.75)}.input-fill-outline.input-label-placement-stacked.sc-ion-input-md-h input.sc-ion-input-md,.input-fill-outline.input-label-placement-floating.sc-ion-input-md-h input.sc-ion-input-md{margin-left:0;margin-right:0;margin-top:6px;margin-bottom:6px}.input-fill-outline.sc-ion-input-md-h .input-outline-container.sc-ion-input-md{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;width:100%;height:100%}.input-fill-outline.sc-ion-input-md-h .input-outline-start.sc-ion-input-md,.input-fill-outline.sc-ion-input-md-h .input-outline-end.sc-ion-input-md{pointer-events:none}.input-fill-outline.sc-ion-input-md-h .input-outline-start.sc-ion-input-md,.input-fill-outline.sc-ion-input-md-h .input-outline-notch.sc-ion-input-md,.input-fill-outline.sc-ion-input-md-h .input-outline-end.sc-ion-input-md{border-top:var(--border-width) var(--border-style) var(--border-color);border-bottom:var(--border-width) var(--border-style) var(--border-color)}.input-fill-outline.sc-ion-input-md-h .input-outline-notch.sc-ion-input-md{max-width:calc(100% - var(--padding-start) - var(--padding-end))}.input-fill-outline.sc-ion-input-md-h .notch-spacer.sc-ion-input-md{-webkit-padding-end:8px;padding-inline-end:8px;font-size:calc(1em * 0.75);opacity:0;pointer-events:none;-webkit-box-sizing:content-box;box-sizing:content-box}.input-fill-outline.sc-ion-input-md-h .input-outline-start.sc-ion-input-md{border-start-start-radius:var(--border-radius);border-start-end-radius:0px;border-end-end-radius:0px;border-end-start-radius:var(--border-radius);-webkit-border-start:var(--border-width) var(--border-style) var(--border-color);border-inline-start:var(--border-width) var(--border-style) var(--border-color);width:calc(var(--padding-start) - 4px)}.input-fill-outline.sc-ion-input-md-h .input-outline-end.sc-ion-input-md{-webkit-border-end:var(--border-width) var(--border-style) var(--border-color);border-inline-end:var(--border-width) var(--border-style) var(--border-color);border-start-start-radius:0px;border-start-end-radius:var(--border-radius);border-end-end-radius:var(--border-radius);border-end-start-radius:0px;-ms-flex-positive:1;flex-grow:1}.label-floating.input-fill-outline.sc-ion-input-md-h .input-outline-notch.sc-ion-input-md{border-top:none}.sc-ion-input-md-h{--border-width:1px;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--highlight-height:2px;font-size:inherit}.input-clear-icon.sc-ion-input-md ion-icon.sc-ion-input-md{width:22px;height:22px}.input-disabled.sc-ion-input-md-h{opacity:0.38}.has-focus.ion-valid.sc-ion-input-md-h,.ion-touched.ion-invalid.sc-ion-input-md-h{--border-color:var(--highlight-color)}.input-bottom.sc-ion-input-md .counter.sc-ion-input-md{letter-spacing:0.0333333333em}.input-label-placement-floating.has-focus.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,.input-label-placement-stacked.has-focus.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{color:var(--highlight-color)}.has-focus.input-label-placement-floating.ion-valid.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,.input-label-placement-floating.ion-touched.ion-invalid.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,.has-focus.input-label-placement-stacked.ion-valid.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,.input-label-placement-stacked.ion-touched.ion-invalid.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{color:var(--highlight-color)}.input-highlight.sc-ion-input-md{bottom:-1px;position:absolute;width:100%;height:var(--highlight-height);-webkit-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform 200ms;transition:-webkit-transform 200ms;transition:transform 200ms;transition:transform 200ms, -webkit-transform 200ms;background:var(--highlight-color)}.input-highlight.sc-ion-input-md{inset-inline-start:0}.has-focus.sc-ion-input-md-h .input-highlight.sc-ion-input-md{-webkit-transform:scale(1);transform:scale(1)}.in-item.sc-ion-input-md-h .input-highlight.sc-ion-input-md{bottom:0}.in-item.sc-ion-input-md-h .input-highlight.sc-ion-input-md{inset-inline-start:0}.input-shape-round.sc-ion-input-md-h{--border-radius:16px}.sc-ion-input-md-s>ion-button[slot=start].button-has-icon-only,.sc-ion-input-md-s>ion-button[slot=end].button-has-icon-only{--border-radius:50%;--padding-start:8px;--padding-end:8px;--padding-top:8px;--padding-bottom:8px;aspect-ratio:1;min-height:40px}',
      };
    },
  },
]);
