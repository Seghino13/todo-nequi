'use strict';
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [8805],
  {
    8805: (y, f, i) => {
      i.r(f), i.d(f, { ion_spinner: () => d });
      var r = i(4261),
        h = i(333),
        l = i(9483),
        m = i(7895);
      const d = class {
          constructor(s) {
            (0, r.r)(this, s),
              (this.color = void 0),
              (this.duration = void 0),
              (this.name = void 0),
              (this.paused = !1);
          }
          getName() {
            const s = this.name || l.c.get('spinner'),
              n = (0, l.b)(this);
            return s || ('ios' === n ? 'lines' : 'circular');
          }
          render() {
            var s;
            const n = this,
              o = (0, l.b)(n),
              a = n.getName(),
              e = null !== (s = m.S[a]) && void 0 !== s ? s : m.S.lines,
              c =
                'number' == typeof n.duration && n.duration > 10
                  ? n.duration
                  : e.dur,
              p = [];
            if (void 0 !== e.circles)
              for (let t = 0; t < e.circles; t++) p.push(k(e, c, t, e.circles));
            else if (void 0 !== e.lines)
              for (let t = 0; t < e.lines; t++) p.push(b(e, c, t, e.lines));
            return (0, r.h)(
              r.f,
              {
                key: '50cbaed55eeab15292447d106a80b93db4cb40de',
                class: (0, h.c)(n.color, {
                  [o]: !0,
                  [`spinner-${a}`]: !0,
                  'spinner-paused': n.paused || l.c.getBoolean('_testing'),
                }),
                role: 'progressbar',
                style: e.elmDuration ? { animationDuration: c + 'ms' } : {},
              },
              p,
            );
          }
        },
        k = (s, n, o, a) => {
          const e = s.fn(n, o, a);
          return (
            (e.style['animation-duration'] = n + 'ms'),
            (0, r.h)(
              'svg',
              { viewBox: e.viewBox || '0 0 64 64', style: e.style },
              (0, r.h)('circle', {
                transform: e.transform || 'translate(32,32)',
                cx: e.cx,
                cy: e.cy,
                r: e.r,
                style: s.elmDuration ? { animationDuration: n + 'ms' } : {},
              }),
            )
          );
        },
        b = (s, n, o, a) => {
          const e = s.fn(n, o, a);
          return (
            (e.style['animation-duration'] = n + 'ms'),
            (0, r.h)(
              'svg',
              { viewBox: e.viewBox || '0 0 64 64', style: e.style },
              (0, r.h)('line', {
                transform: 'translate(32,32)',
                y1: e.y1,
                y2: e.y2,
              }),
            )
          );
        };
      d.style =
        ':host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{-webkit-transform-origin:center;transform-origin:center;position:absolute;top:0;left:0;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){svg:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:7px}:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-width:4px}:host(.spinner-lines) line,:host(.spinner-lines-small) line,:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg,:host(.spinner-lines-sharp) svg,:host(.spinner-lines-sharp-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular) svg{-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}';
    },
  },
]);
