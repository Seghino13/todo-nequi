'use strict';
(self.webpackChunkapp = self.webpackChunkapp || []).push([
  [1260],
  {
    1260: (c, m, i) => {
      var r = i(3345),
        a = i(1362),
        t = i(8663);
      class g {
        constructor(e, n) {
          (this.app = e), (this._delegate = n);
        }
        get defaultConfig() {
          return this._delegate.defaultConfig;
        }
        set defaultConfig(e) {
          this._delegate.defaultConfig = e;
        }
        get fetchTimeMillis() {
          return this._delegate.fetchTimeMillis;
        }
        get lastFetchStatus() {
          return this._delegate.lastFetchStatus;
        }
        get settings() {
          return this._delegate.settings;
        }
        set settings(e) {
          this._delegate.settings = e;
        }
        activate() {
          return (0, t.Yf)(this._delegate);
        }
        ensureInitialized() {
          return (0, t.Zn)(this._delegate);
        }
        fetch() {
          return (0, t.Dz)(this._delegate);
        }
        fetchAndActivate() {
          return (0, t.LF)(this._delegate);
        }
        getAll() {
          return (0, t.UK)(this._delegate);
        }
        getBoolean(e) {
          return (0, t.pW)(this._delegate, e);
        }
        getNumber(e) {
          return (0, t.WZ)(this._delegate, e);
        }
        getString(e) {
          return (0, t.AA)(this._delegate, e);
        }
        getValue(e) {
          return (0, t._W)(this._delegate, e);
        }
        setLogLevel(e) {
          (0, t.He)(this._delegate, e);
        }
      }
      function u(s, { instanceIdentifier: e }) {
        const n = s.getProvider('app-compat').getImmediate(),
          _ = s.getProvider('remote-config').getImmediate({ identifier: e });
        return new g(n, _);
      }
      !(function d(s) {
        s.INTERNAL.registerComponent(
          new a.uA('remoteConfig-compat', u, 'PUBLIC')
            .setMultipleInstances(!0)
            .setServiceProps({ isSupported: t.TT }),
        ),
          s.registerVersion('@firebase/remote-config-compat', '0.2.8');
      })(r.A);
    },
  },
]);
