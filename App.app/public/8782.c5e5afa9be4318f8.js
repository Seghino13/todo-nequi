'use strict';
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [8782],
  {
    8782: (h, n, t) => {
      t.r(n), t.d(n, { startStatusTap: () => a });
      var i = t(467),
        o = t(4261),
        _ = t(909),
        r = t(4920);
      const a = () => {
        const s = window;
        s.addEventListener('statusTap', () => {
          (0, o.e)(() => {
            const d = document.elementFromPoint(
              s.innerWidth / 2,
              s.innerHeight / 2,
            );
            if (!d) return;
            const e = (0, _.f)(d);
            e &&
              new Promise((c) => (0, r.c)(e, c)).then(() => {
                (0, o.w)(
                  (0, i.A)(function* () {
                    e.style.setProperty('--overflow', 'hidden'),
                      yield (0, _.s)(e, 300),
                      e.style.removeProperty('--overflow');
                  }),
                );
              });
          });
        });
      };
    },
  },
]);
