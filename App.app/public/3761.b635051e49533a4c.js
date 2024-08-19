'use strict';
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [3761],
  {
    3761: (Re, J, H) => {
      H.d(J, {
        A: () => v,
        B: () => ze,
        C: () => Le,
        D: () => G,
        E: () => Ye,
        F: () => Q,
        G: () => We,
        H: () => q,
        I: () => Se,
        J: () => we,
        K: () => _e,
        L: () => A,
        M: () => ve,
        N: () => z,
        O: () => be,
        P: () => _,
        Q: () => N,
        R: () => he,
        a: () => Te,
        b: () => w,
        c: () => g,
        d: () => E,
        e: () => O,
        f: () => ee,
        g: () => De,
        h: () => se,
        i: () => p,
        j: () => fe,
        k: () => re,
        l: () => ue,
        m: () => de,
        n: () => ie,
        o: () => ce,
        p: () => le,
        q: () => te,
        r: () => ne,
        s: () => I,
        t: () => P,
        u: () => k,
        v: () => ae,
        w: () => K,
        x: () => ke,
        y: () => me,
        z: () => Ue,
      });
      var S = H(4929);
      const g = (e, n) =>
          e.month === n.month && e.day === n.day && e.year === n.year,
        p = (e, n) =>
          e.year < n.year ||
          (e.year === n.year && e.month < n.month) ||
          (e.year === n.year &&
            e.month === n.month &&
            null !== e.day &&
            e.day < n.day),
        w = (e, n) =>
          e.year > n.year ||
          (e.year === n.year && e.month > n.month) ||
          (e.year === n.year &&
            e.month === n.month &&
            null !== e.day &&
            e.day > n.day),
        K = (e, n, t) => {
          const o = Array.isArray(e) ? e : [e];
          for (const r of o)
            if ((void 0 !== n && p(r, n)) || (void 0 !== t && w(r, t))) {
              (0, S.p)(
                `The value provided to ion-datetime is out of bounds.\n\nMin: ${JSON.stringify(n)}\nMax: ${JSON.stringify(t)}\nValue: ${JSON.stringify(e)}`,
              );
              break;
            }
        },
        A = (e, n) => {
          if (void 0 !== n) return n;
          const t = new Intl.DateTimeFormat(e, { hour: 'numeric' }),
            o = t.resolvedOptions();
          if (void 0 !== o.hourCycle) return o.hourCycle;
          const u = t
            .formatToParts(new Date('5/18/2021 00:00'))
            .find((i) => 'hour' === i.type);
          if (!u) throw new Error('Hour value not found from DateTimeFormat');
          switch (u.value) {
            case '0':
              return 'h11';
            case '12':
              return 'h12';
            case '00':
              return 'h23';
            case '24':
              return 'h24';
            default:
              throw new Error(`Invalid hour cycle "${n}"`);
          }
        },
        b = (e) => 'h23' === e || 'h24' === e,
        v = (e, n) =>
          4 === e || 6 === e || 9 === e || 11 === e
            ? 30
            : 2 === e
              ? ((e) => (e % 4 == 0 && e % 100 != 0) || e % 400 == 0)(n)
                ? 29
                : 28
              : 31,
        Q = (e, n = { month: 'numeric', year: 'numeric' }) =>
          'month' ===
          new Intl.DateTimeFormat(e, n).formatToParts(new Date())[0].type,
        q = (e) =>
          'dayPeriod' ===
          new Intl.DateTimeFormat(e, { hour: 'numeric' }).formatToParts(
            new Date(),
          )[0].type,
        V =
          /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,
        x =
          /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,
        P = (e) => {
          if (void 0 === e) return;
          let t,
            n = e;
          return (
            'string' == typeof e && (n = e.replace(/\[|\]|\s/g, '').split(',')),
            (t = Array.isArray(n)
              ? n.map((o) => parseInt(o, 10)).filter(isFinite)
              : [n]),
            t
          );
        },
        ee = (e) => ({
          month: parseInt(e.getAttribute('data-month'), 10),
          day: parseInt(e.getAttribute('data-day'), 10),
          year: parseInt(e.getAttribute('data-year'), 10),
          dayOfWeek: parseInt(e.getAttribute('data-day-of-week'), 10),
        });
      function I(e) {
        if (Array.isArray(e)) {
          const t = [];
          for (const o of e) {
            const r = I(o);
            if (!r) return;
            t.push(r);
          }
          return t;
        }
        let n = null;
        if (
          (null != e &&
            '' !== e &&
            ((n = x.exec(e)),
            n
              ? (n.unshift(void 0, void 0), (n[2] = n[3] = void 0))
              : (n = V.exec(e))),
          null !== n)
        ) {
          for (let t = 1; t < 8; t++)
            n[t] = void 0 !== n[t] ? parseInt(n[t], 10) : void 0;
          return {
            year: n[1],
            month: n[2],
            day: n[3],
            hour: n[4],
            minute: n[5],
            ampm: n[4] < 12 ? 'am' : 'pm',
          };
        }
        (0, S.p)(
          `Unable to parse date string: ${e}. Please provide a valid ISO 8601 datetime string.`,
        );
      }
      const _ = (e, n, t) => (n && p(e, n) ? n : t && w(e, t) ? t : e),
        N = (e) => (e >= 12 ? 'pm' : 'am'),
        ne = (e, n) => {
          const t = I(e);
          if (void 0 === t) return;
          const { month: o, day: r, year: d, hour: u, minute: i } = t,
            l = null != d ? d : n.year,
            f = null != o ? o : 12;
          return {
            month: f,
            day: null != r ? r : v(f, l),
            year: l,
            hour: null != u ? u : 23,
            minute: null != i ? i : 59,
          };
        },
        te = (e, n) => {
          const t = I(e);
          if (void 0 === t) return;
          const { month: o, day: r, year: d, hour: u, minute: i } = t;
          return {
            month: null != o ? o : 1,
            day: null != r ? r : 1,
            year: null != d ? d : n.year,
            hour: null != u ? u : 0,
            minute: null != i ? i : 0,
          };
        },
        D = (e) => ('0' + (void 0 !== e ? Math.abs(e) : '0')).slice(-2),
        oe = (e) => ('000' + (void 0 !== e ? Math.abs(e) : '0')).slice(-4);
      function k(e) {
        if (Array.isArray(e)) return e.map((t) => k(t));
        let n = '';
        return (
          void 0 !== e.year
            ? ((n = oe(e.year)),
              void 0 !== e.month &&
                ((n += '-' + D(e.month)),
                void 0 !== e.day &&
                  ((n += '-' + D(e.day)),
                  void 0 !== e.hour &&
                    (n += `T${D(e.hour)}:${D(e.minute)}:00`))))
            : void 0 !== e.hour && (n = D(e.hour) + ':' + D(e.minute)),
          n
        );
      }
      const Z = (e, n) =>
          void 0 === n
            ? e
            : 'am' === n
              ? 12 === e
                ? 0
                : e
              : 12 === e
                ? 12
                : e + 12,
        ue = (e) => {
          const { dayOfWeek: n } = e;
          if (null == n) throw new Error('No day of week provided');
          return C(e, n);
        },
        re = (e) => {
          const { dayOfWeek: n } = e;
          if (null == n) throw new Error('No day of week provided');
          return F(e, 6 - n);
        },
        ie = (e) => F(e, 1),
        de = (e) => C(e, 1),
        ce = (e) => C(e, 7),
        le = (e) => F(e, 7),
        C = (e, n) => {
          const { month: t, day: o, year: r } = e;
          if (null === o) throw new Error('No day provided');
          const d = { month: t, day: o, year: r };
          if (
            ((d.day = o - n),
            d.day < 1 && (d.month -= 1),
            d.month < 1 && ((d.month = 12), (d.year -= 1)),
            d.day < 1)
          ) {
            const u = v(d.month, d.year);
            d.day = u + d.day;
          }
          return d;
        },
        F = (e, n) => {
          const { month: t, day: o, year: r } = e;
          if (null === o) throw new Error('No day provided');
          const d = { month: t, day: o, year: r },
            u = v(t, r);
          return (
            (d.day = o + n),
            d.day > u && ((d.day -= u), (d.month += 1)),
            d.month > 12 && ((d.month = 1), (d.year += 1)),
            d
          );
        },
        E = (e) => {
          const n = 1 === e.month ? 12 : e.month - 1,
            t = 1 === e.month ? e.year - 1 : e.year,
            o = v(n, t);
          return { month: n, year: t, day: o < e.day ? o : e.day };
        },
        O = (e) => {
          const n = 12 === e.month ? 1 : e.month + 1,
            t = 12 === e.month ? e.year + 1 : e.year,
            o = v(n, t);
          return { month: n, year: t, day: o < e.day ? o : e.day };
        },
        U = (e, n) => {
          const t = e.month,
            o = e.year + n,
            r = v(t, o);
          return { month: t, year: o, day: r < e.day ? r : e.day };
        },
        fe = (e) => U(e, -1),
        se = (e) => U(e, 1),
        ye = (e, n, t) => (n ? e : Z(e, t)),
        he = (e, n) => {
          const { ampm: t, hour: o } = e;
          let r = o;
          return (
            'am' === t && 'pm' === n
              ? (r = Z(r, 'pm'))
              : 'pm' === t && 'am' === n && (r = Math.abs(r - 12)),
            r
          );
        },
        ae = (e, n, t) => {
          const { month: o, day: r, year: d } = e,
            u = _(Object.assign({}, e), n, t),
            i = v(o, d);
          return (
            null !== r && i < r && (u.day = i),
            void 0 !== n &&
              g(u, n) &&
              void 0 !== u.hour &&
              void 0 !== n.hour &&
              (u.hour < n.hour
                ? ((u.hour = n.hour), (u.minute = n.minute))
                : u.hour === n.hour &&
                  void 0 !== u.minute &&
                  void 0 !== n.minute &&
                  u.minute < n.minute &&
                  (u.minute = n.minute)),
            void 0 !== t &&
              g(e, t) &&
              void 0 !== u.hour &&
              void 0 !== t.hour &&
              (u.hour > t.hour
                ? ((u.hour = t.hour), (u.minute = t.minute))
                : u.hour === t.hour &&
                  void 0 !== u.minute &&
                  void 0 !== t.minute &&
                  u.minute > t.minute &&
                  (u.minute = t.minute)),
            u
          );
        },
        me = ({
          refParts: e,
          monthValues: n,
          dayValues: t,
          yearValues: o,
          hourValues: r,
          minuteValues: d,
          minParts: u,
          maxParts: i,
        }) => {
          const { hour: l, minute: f, day: s, month: m, year: h } = e,
            c = Object.assign(Object.assign({}, e), { dayOfWeek: void 0 });
          if (void 0 !== o) {
            const y = o.filter(
              (a) =>
                !((void 0 !== u && a < u.year) || (void 0 !== i && a > i.year)),
            );
            c.year = T(h, y);
          }
          if (void 0 !== n) {
            const y = n.filter(
              (a) =>
                !(
                  (void 0 !== u && c.year === u.year && a < u.month) ||
                  (void 0 !== i && c.year === i.year && a > i.month)
                ),
            );
            c.month = T(m, y);
          }
          if (null !== s && void 0 !== t) {
            const y = t.filter(
              (a) =>
                !(
                  (void 0 !== u &&
                    p(Object.assign(Object.assign({}, c), { day: a }), u)) ||
                  (void 0 !== i &&
                    w(Object.assign(Object.assign({}, c), { day: a }), i))
                ),
            );
            c.day = T(s, y);
          }
          if (void 0 !== l && void 0 !== r) {
            const y = r.filter(
              (a) =>
                !(
                  (void 0 !== (null == u ? void 0 : u.hour) &&
                    g(c, u) &&
                    a < u.hour) ||
                  (void 0 !== (null == i ? void 0 : i.hour) &&
                    g(c, i) &&
                    a > i.hour)
                ),
            );
            (c.hour = T(l, y)), (c.ampm = N(c.hour));
          }
          if (void 0 !== f && void 0 !== d) {
            const y = d.filter(
              (a) =>
                !(
                  (void 0 !== (null == u ? void 0 : u.minute) &&
                    g(c, u) &&
                    c.hour === u.hour &&
                    a < u.minute) ||
                  (void 0 !== (null == i ? void 0 : i.minute) &&
                    g(c, i) &&
                    c.hour === i.hour &&
                    a > i.minute)
                ),
            );
            c.minute = T(f, y);
          }
          return c;
        },
        T = (e, n) => {
          let t = n[0],
            o = Math.abs(t - e);
          for (let r = 1; r < n.length; r++) {
            const d = n[r],
              u = Math.abs(d - e);
            u < o && ((t = d), (o = u));
          }
          return t;
        },
        L = (e) =>
          Object.assign(Object.assign({}, e), {
            timeZone: 'UTC',
            timeZoneName: void 0,
          }),
        ve = (e, n, t, o = { hour: 'numeric', minute: 'numeric' }) => {
          const r = { hour: n.hour, minute: n.minute };
          return void 0 === r.hour || void 0 === r.minute
            ? 'Invalid Time'
            : new Intl.DateTimeFormat(
                e,
                Object.assign(Object.assign({}, L(o)), { hourCycle: t }),
              ).format(
                new Date(
                  k(Object.assign({ year: 2023, day: 1, month: 1 }, r)) + 'Z',
                ),
              );
        },
        Y = (e) => {
          const n = e.toString();
          return n.length > 1 ? n : `0${n}`;
        },
        pe = (e, n) => {
          if (0 === e)
            switch (n) {
              case 'h11':
                return '0';
              case 'h12':
                return '12';
              case 'h23':
                return '00';
              case 'h24':
                return '24';
              default:
                throw new Error(`Invalid hour cycle "${n}"`);
            }
          return b(n) ? Y(e) : e.toString();
        },
        De = (e, n, t) => {
          if (null === t.day) return null;
          const o = $(t),
            r = new Intl.DateTimeFormat(e, {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
              timeZone: 'UTC',
            }).format(o);
          return n ? `Today, ${r}` : r;
        },
        we = (e, n) => {
          const t = $(n);
          return new Intl.DateTimeFormat(e, {
            month: 'long',
            year: 'numeric',
            timeZone: 'UTC',
          }).format(t);
        },
        Te = (e, n) =>
          Ie(e, n, { day: 'numeric' }).find((t) => 'day' === t.type).value,
        Me = (e, n) => z(e, n, { year: 'numeric' }),
        $ = (e) => {
          var n, t, o;
          return new Date(
            `${null !== (n = e.month) && void 0 !== n ? n : 1}/${null !== (t = e.day) && void 0 !== t ? t : 1}/${null !== (o = e.year) && void 0 !== o ? o : 2023}${void 0 !== e.hour && void 0 !== e.minute ? ` ${e.hour}:${e.minute}` : ''} GMT+0000`,
          );
        },
        z = (e, n, t) => {
          const o = $(n);
          return W(e, L(t)).format(o);
        },
        Ie = (e, n, t) => {
          const o = $(n);
          return W(e, t).formatToParts(o);
        },
        W = (e, n) =>
          new Intl.DateTimeFormat(
            e,
            Object.assign(Object.assign({}, n), { timeZone: 'UTC' }),
          ),
        Oe = (e) => {
          if ('RelativeTimeFormat' in Intl) {
            const n = new Intl.RelativeTimeFormat(e, {
              numeric: 'auto',
            }).format(0, 'day');
            return n.charAt(0).toUpperCase() + n.slice(1);
          }
          return 'Today';
        },
        j = (e) => {
          const n = e.getTimezoneOffset();
          return e.setMinutes(e.getMinutes() - n), e;
        },
        $e = j(new Date('2022T01:00')),
        Ae = j(new Date('2022T13:00')),
        R = (e, n) => {
          const t = 'am' === n ? $e : Ae,
            o = new Intl.DateTimeFormat(e, { hour: 'numeric', timeZone: 'UTC' })
              .formatToParts(t)
              .find((r) => 'dayPeriod' === r.type);
          return o
            ? o.value
            : ((e) => (void 0 === e ? '' : e.toUpperCase()))(n);
        },
        be = (e) => (Array.isArray(e) ? e.join(',') : e),
        ke = () => j(new Date()).toISOString(),
        Ce = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
          37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
          54, 55, 56, 57, 58, 59,
        ],
        Fe = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        Ee = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        je = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23,
        ],
        He = [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 0,
        ],
        Se = (e, n, t = 0) => {
          const r = new Intl.DateTimeFormat(e, {
              weekday: 'ios' === n ? 'short' : 'narrow',
            }),
            d = new Date('11/01/2020'),
            u = [];
          for (let i = t; i < t + 7; i++) {
            const l = new Date(d);
            l.setDate(l.getDate() + i), u.push(r.format(l));
          }
          return u;
        },
        _e = (e, n, t) => {
          const o = v(e, n),
            r = new Date(`${e}/1/${n}`).getDay(),
            d = r >= t ? r - (t + 1) : 6 - (t - r);
          let u = [];
          for (let i = 1; i <= o; i++)
            u.push({ day: i, dayOfWeek: (d + i) % 7 });
          for (let i = 0; i <= d; i++)
            u = [{ day: null, dayOfWeek: null }, ...u];
          return u;
        },
        Ue = (e, n) => {
          const t = { month: e.month, year: e.year, day: e.day };
          if (void 0 !== n && (e.month !== n.month || e.year !== n.year)) {
            const o = { month: n.month, year: n.year, day: n.day };
            return p(o, t) ? [o, t, O(e)] : [E(e), t, o];
          }
          return [E(e), t, O(e)];
        },
        Le = (e, n, t, o, r, d = { month: 'long' }) => {
          const { year: u } = n,
            i = [];
          if (void 0 !== r) {
            let l = r;
            void 0 !== (null == o ? void 0 : o.month) &&
              (l = l.filter((f) => f <= o.month)),
              void 0 !== (null == t ? void 0 : t.month) &&
                (l = l.filter((f) => f >= t.month)),
              l.forEach((f) => {
                const s = new Date(`${f}/1/${u} GMT+0000`),
                  m = new Intl.DateTimeFormat(
                    e,
                    Object.assign(Object.assign({}, d), { timeZone: 'UTC' }),
                  ).format(s);
                i.push({ text: m, value: f });
              });
          } else {
            const l = o && o.year === u ? o.month : 12;
            for (let s = t && t.year === u ? t.month : 1; s <= l; s++) {
              const m = new Date(`${s}/1/${u} GMT+0000`),
                h = new Intl.DateTimeFormat(
                  e,
                  Object.assign(Object.assign({}, d), { timeZone: 'UTC' }),
                ).format(m);
              i.push({ text: h, value: s });
            }
          }
          return i;
        },
        G = (e, n, t, o, r, d = { day: 'numeric' }) => {
          const { month: u, year: i } = n,
            l = [],
            f = v(u, i),
            s =
              null != (null == o ? void 0 : o.day) &&
              o.year === i &&
              o.month === u
                ? o.day
                : f,
            m =
              null != (null == t ? void 0 : t.day) &&
              t.year === i &&
              t.month === u
                ? t.day
                : 1;
          if (void 0 !== r) {
            let h = r;
            (h = h.filter((c) => c >= m && c <= s)),
              h.forEach((c) => {
                const y = new Date(`${u}/${c}/${i} GMT+0000`),
                  a = new Intl.DateTimeFormat(
                    e,
                    Object.assign(Object.assign({}, d), { timeZone: 'UTC' }),
                  ).format(y);
                l.push({ text: a, value: c });
              });
          } else
            for (let h = m; h <= s; h++) {
              const c = new Date(`${u}/${h}/${i} GMT+0000`),
                y = new Intl.DateTimeFormat(
                  e,
                  Object.assign(Object.assign({}, d), { timeZone: 'UTC' }),
                ).format(c);
              l.push({ text: y, value: h });
            }
          return l;
        },
        Ye = (e, n, t, o, r) => {
          var d, u;
          let i = [];
          if (void 0 !== r)
            (i = r),
              void 0 !== (null == o ? void 0 : o.year) &&
                (i = i.filter((l) => l <= o.year)),
              void 0 !== (null == t ? void 0 : t.year) &&
                (i = i.filter((l) => l >= t.year));
          else {
            const { year: l } = n,
              f =
                null !== (d = null == o ? void 0 : o.year) && void 0 !== d
                  ? d
                  : l;
            for (
              let m =
                null !== (u = null == t ? void 0 : t.year) && void 0 !== u
                  ? u
                  : l - 100;
              m <= f;
              m++
            )
              i.push(m);
          }
          return i.map((l) => ({
            text: Me(e, { year: l, month: n.month, day: n.day }),
            value: l,
          }));
        },
        B = (e, n) =>
          e.month === n.month && e.year === n.year ? [e] : [e, ...B(O(e), n)],
        ze = (e, n, t, o, r, d) => {
          let u = [],
            i = [],
            l = B(t, o);
          return (
            d && (l = l.filter(({ month: f }) => d.includes(f))),
            l.forEach((f) => {
              const s = { month: f.month, day: null, year: f.year },
                m = G(e, s, t, o, r, {
                  month: 'short',
                  day: 'numeric',
                  weekday: 'short',
                }),
                h = [],
                c = [];
              m.forEach((y) => {
                const a = g(
                  Object.assign(Object.assign({}, s), { day: y.value }),
                  n,
                );
                c.push({
                  text: a ? Oe(e) : y.text,
                  value: `${s.year}-${s.month}-${y.value}`,
                }),
                  h.push({ month: s.month, year: s.year, day: y.value });
              }),
                (i = [...i, ...h]),
                (u = [...u, ...c]);
            }),
            { parts: i, items: u }
          );
        },
        We = (e, n, t, o, r, d, u) => {
          const i = A(e, t),
            l = b(i),
            {
              hours: f,
              minutes: s,
              am: m,
              pm: h,
            } = ((e, n, t = 'h12', o, r, d, u) => {
              const i = A(e, t),
                l = b(i);
              let f = ((e) => {
                  switch (e) {
                    case 'h11':
                      return Fe;
                    case 'h12':
                      return Ee;
                    case 'h23':
                      return je;
                    case 'h24':
                      return He;
                    default:
                      throw new Error(`Invalid hour cycle "${e}"`);
                  }
                })(i),
                s = Ce,
                m = !0,
                h = !0;
              if (
                (d && (f = f.filter((c) => d.includes(c))),
                u && (s = s.filter((c) => u.includes(c))),
                o)
              )
                if (g(n, o)) {
                  if (
                    (void 0 !== o.hour &&
                      ((f = f.filter(
                        (c) =>
                          (l ? c : 'pm' === n.ampm ? (c + 12) % 24 : c) >=
                          o.hour,
                      )),
                      (m = o.hour < 13)),
                    void 0 !== o.minute)
                  ) {
                    let c = !1;
                    void 0 !== o.hour &&
                      void 0 !== n.hour &&
                      n.hour > o.hour &&
                      (c = !0),
                      (s = s.filter((y) => !!c || y >= o.minute));
                  }
                } else p(n, o) && ((f = []), (s = []), (m = h = !1));
              return (
                r &&
                  (g(n, r)
                    ? (void 0 !== r.hour &&
                        ((f = f.filter(
                          (c) =>
                            (l ? c : 'pm' === n.ampm ? (c + 12) % 24 : c) <=
                            r.hour,
                        )),
                        (h = r.hour >= 12)),
                      void 0 !== r.minute &&
                        n.hour === r.hour &&
                        (s = s.filter((c) => c <= r.minute)))
                    : w(n, r) && ((f = []), (s = []), (m = h = !1))),
                { hours: f, minutes: s, am: m, pm: h }
              );
            })(e, n, i, o, r, d, u),
            c = f.map((M) => ({ text: pe(M, i), value: ye(M, l, n.ampm) })),
            y = s.map((M) => ({ text: Y(M), value: M })),
            a = [];
          return (
            m && !l && a.push({ text: R(e, 'am'), value: 'am' }),
            h && !l && a.push({ text: R(e, 'pm'), value: 'pm' }),
            { minutesData: y, hoursData: c, dayPeriodData: a }
          );
        };
    },
  },
]);
