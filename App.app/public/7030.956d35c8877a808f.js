'use strict';
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [7030],
  {
    7030: (B, f, i) => {
      i.r(f), i.d(f, { ion_reorder: () => C, ion_reorder_group: () => p });
      var x = i(467),
        l = i(4261),
        u = i(3992),
        E = i(9483),
        g = i(909),
        y = i(4920),
        m = i(1086);
      i(8438), i(8476);
      const C = (() => {
          let e = class {
            constructor(t) {
              (0, l.r)(this, t);
            }
            onClick(t) {
              const s = this.el.closest('ion-reorder-group');
              t.preventDefault(),
                (!s || !s.disabled) && t.stopImmediatePropagation();
            }
            render() {
              const t = (0, E.b)(this);
              return (0, l.h)(
                l.f,
                { key: '663d74e231e3af56b6298ee2539fdac9c8465839', class: t },
                (0, l.h)(
                  'slot',
                  { key: 'c7c384ab8c9ca8abdc89cd984a39dfde70e342ca' },
                  (0, l.h)('ion-icon', {
                    key: 'c8b6052db03d4b9e33a90e600c20861c73ee73ce',
                    icon: 'ios' === t ? u.j : u.k,
                    lazy: !1,
                    class: 'reorder-icon',
                    part: 'icon',
                    'aria-hidden': 'true',
                  }),
                ),
              );
            }
            get el() {
              return (0, l.i)(this);
            }
          };
          return (
            (e.style = {
              ios: ':host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block}::slotted(ion-icon){font-size:dynamic-font(16px)}.reorder-icon{font-size:2.125rem;opacity:0.4}',
              md: ':host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block}::slotted(ion-icon){font-size:dynamic-font(16px)}.reorder-icon{font-size:1.9375rem;opacity:0.3}',
            }),
            e
          );
        })(),
        p = class {
          constructor(e) {
            (0, l.r)(this, e),
              (this.ionItemReorder = (0, l.d)(this, 'ionItemReorder', 7)),
              (this.lastToIndex = -1),
              (this.cachedHeights = []),
              (this.scrollElTop = 0),
              (this.scrollElBottom = 0),
              (this.scrollElInitial = 0),
              (this.containerTop = 0),
              (this.containerBottom = 0),
              (this.state = 0),
              (this.disabled = !0);
          }
          disabledChanged() {
            this.gesture && this.gesture.enable(!this.disabled);
          }
          connectedCallback() {
            var e = this;
            return (0, x.A)(function* () {
              const t = (0, g.f)(e.el);
              t && (e.scrollEl = yield (0, g.g)(t)),
                (e.gesture = (yield Promise.resolve().then(
                  i.bind(i, 8607),
                )).createGesture({
                  el: e.el,
                  gestureName: 'reorder',
                  gesturePriority: 110,
                  threshold: 0,
                  direction: 'y',
                  passive: !1,
                  canStart: (s) => e.canStart(s),
                  onStart: (s) => e.onStart(s),
                  onMove: (s) => e.onMove(s),
                  onEnd: () => e.onEnd(),
                })),
                e.disabledChanged();
            })();
          }
          disconnectedCallback() {
            this.onEnd(),
              this.gesture && (this.gesture.destroy(), (this.gesture = void 0));
          }
          complete(e) {
            return Promise.resolve(this.completeReorder(e));
          }
          canStart(e) {
            if (this.selectedItemEl || 0 !== this.state) return !1;
            const s = e.event.target.closest('ion-reorder');
            if (!s) return !1;
            const r = v(s, this.el);
            return !!r && ((e.data = r), !0);
          }
          onStart(e) {
            e.event.preventDefault();
            const t = (this.selectedItemEl = e.data),
              s = this.cachedHeights;
            s.length = 0;
            const r = this.el,
              o = r.children;
            if (!o || 0 === o.length) return;
            let c = 0;
            for (let d = 0; d < o.length; d++) {
              const a = o[d];
              (c += a.offsetHeight), s.push(c), (a.$ionIndex = d);
            }
            const n = r.getBoundingClientRect();
            if (
              ((this.containerTop = n.top),
              (this.containerBottom = n.bottom),
              this.scrollEl)
            ) {
              const d = this.scrollEl.getBoundingClientRect();
              (this.scrollElInitial = this.scrollEl.scrollTop),
                (this.scrollElTop = d.top + I),
                (this.scrollElBottom = d.bottom - I);
            } else
              (this.scrollElInitial = 0),
                (this.scrollElTop = 0),
                (this.scrollElBottom = 0);
            (this.lastToIndex = h(t)),
              (this.selectedItemHeight = t.offsetHeight),
              (this.state = 1),
              t.classList.add(_),
              (0, m.a)();
          }
          onMove(e) {
            const t = this.selectedItemEl;
            if (!t) return;
            const s = this.autoscroll(e.currentY),
              r = this.containerTop - s,
              c = Math.max(r, Math.min(e.currentY, this.containerBottom - s)),
              n = s + c - e.startY,
              a = this.itemIndexForTop(c - r);
            if (a !== this.lastToIndex) {
              const P = h(t);
              (this.lastToIndex = a), (0, m.b)(), this.reorderMove(P, a);
            }
            t.style.transform = `translateY(${n}px)`;
          }
          onEnd() {
            const e = this.selectedItemEl;
            if (((this.state = 2), !e)) return void (this.state = 0);
            const t = this.lastToIndex,
              s = h(e);
            t === s
              ? this.completeReorder()
              : this.ionItemReorder.emit({
                  from: s,
                  to: t,
                  complete: this.completeReorder.bind(this),
                }),
              (0, m.h)();
          }
          completeReorder(e) {
            const t = this.selectedItemEl;
            if (t && 2 === this.state) {
              const s = this.el.children,
                r = s.length,
                o = this.lastToIndex,
                c = h(t);
              (0, y.r)(() => {
                o === c ||
                  (void 0 !== e && !0 !== e) ||
                  this.el.insertBefore(t, c < o ? s[o + 1] : s[o]);
                for (let n = 0; n < r; n++) s[n].style.transform = '';
              }),
                Array.isArray(e) && (e = D(e, c, o)),
                (t.style.transition = ''),
                t.classList.remove(_),
                (this.selectedItemEl = void 0),
                (this.state = 0);
            }
            return e;
          }
          itemIndexForTop(e) {
            const t = this.cachedHeights;
            for (let s = 0; s < t.length; s++) if (t[s] > e) return s;
            return t.length - 1;
          }
          reorderMove(e, t) {
            const s = this.selectedItemHeight,
              r = this.el.children;
            for (let o = 0; o < r.length; o++) {
              let n = '';
              o > e && o <= t
                ? (n = `translateY(${-s}px)`)
                : o < e && o >= t && (n = `translateY(${s}px)`),
                (r[o].style.transform = n);
            }
          }
          autoscroll(e) {
            if (!this.scrollEl) return 0;
            let t = 0;
            return (
              e < this.scrollElTop
                ? (t = -b)
                : e > this.scrollElBottom && (t = b),
              0 !== t && this.scrollEl.scrollBy(0, t),
              this.scrollEl.scrollTop - this.scrollElInitial
            );
          }
          render() {
            const e = (0, E.b)(this);
            return (0, l.h)(l.f, {
              key: '491f3e5843cf728ff4589e58bd86b8ce6709b293',
              class: {
                [e]: !0,
                'reorder-enabled': !this.disabled,
                'reorder-list-active': 0 !== this.state,
              },
            });
          }
          get el() {
            return (0, l.i)(this);
          }
          static get watchers() {
            return { disabled: ['disabledChanged'] };
          }
        },
        h = (e) => e.$ionIndex,
        v = (e, t) => {
          let s;
          for (; e; ) {
            if (((s = e.parentElement), s === t)) return e;
            e = s;
          }
        },
        I = 60,
        b = 10,
        _ = 'reorder-selected',
        D = (e, t, s) => {
          const r = e[t];
          return e.splice(t, 1), e.splice(s, 0, r), e.slice();
        };
      p.style =
        '.reorder-list-active>*{display:block;-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}';
    },
  },
]);
