'use strict';
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [6521],
  {
    6521: (w, e, o) => {
      o.r(e), o.d(e, { ion_input_password_toggle: () => g });
      var n = o(4261),
        i = o(4929),
        p = o(333),
        d = o(3992),
        u = o(9483);
      const g = (() => {
        let c = class {
          constructor(s) {
            (0, n.r)(this, s),
              (this.togglePasswordVisibility = () => {
                const { inputElRef: t } = this;
                t && (t.type = 'text' === t.type ? 'password' : 'text');
              }),
              (this.color = void 0),
              (this.showIcon = void 0),
              (this.hideIcon = void 0),
              (this.type = 'password');
          }
          onTypeChange(s) {
            'text' === s ||
              'password' === s ||
              (0, i.p)(
                `ion-input-password-toggle only supports inputs of type "text" or "password". Input of type "${s}" is not compatible.`,
                this.el,
              );
          }
          connectedCallback() {
            const { el: s } = this,
              t = (this.inputElRef = s.closest('ion-input'));
            t
              ? (this.type = t.type)
              : (0, i.p)(
                  'No ancestor ion-input found for ion-input-password-toggle. This component must be slotted inside of an ion-input.',
                  s,
                );
          }
          disconnectedCallback() {
            this.inputElRef = null;
          }
          render() {
            var s, t;
            const { color: l, type: _ } = this,
              a = (0, u.b)(this),
              P = null !== (s = this.showIcon) && void 0 !== s ? s : d.x,
              y = null !== (t = this.hideIcon) && void 0 !== t ? t : d.y,
              r = 'text' === _;
            return (0, n.h)(
              n.f,
              {
                key: 'ed1c29726ce0c91548f0e2ada61e3f8b5c813d2d',
                class: (0, p.c)(l, { [a]: !0 }),
              },
              (0, n.h)(
                'ion-button',
                {
                  key: '9698eccdaedb86cf12d20acc53660371b3af3c55',
                  mode: a,
                  color: l,
                  fill: 'clear',
                  shape: 'round',
                  'aria-checked': r ? 'true' : 'false',
                  'aria-label': 'show password',
                  role: 'switch',
                  type: 'button',
                  onPointerDown: (I) => {
                    I.preventDefault();
                  },
                  onClick: this.togglePasswordVisibility,
                },
                (0, n.h)('ion-icon', {
                  key: '1f2119c30b56c800d9af44e6499445a0ebb466cf',
                  slot: 'icon-only',
                  'aria-hidden': 'true',
                  icon: r ? y : P,
                }),
              ),
            );
          }
          get el() {
            return (0, n.i)(this);
          }
          static get watchers() {
            return { type: ['onTypeChange'] };
          }
        };
        return (c.style = { ios: '', md: '' }), c;
      })();
    },
  },
]);
