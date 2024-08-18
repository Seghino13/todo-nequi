/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-require-imports */
module.exports = function (config: {
  set: (arg0: {
    basePath: string;
    frameworks: string[];
    plugins: any[];
    client: { jasmine: {}; clearContext: boolean };
    jasmineHtmlReporter: { suppressAll: boolean };
    coverageReporter: {
      dir: any;
      subdir: string;
      reporters: { type: string }[];
    };
    reporters: string[];
    port: number;
    colors: boolean;
    logLevel: any;
    autoWatch: boolean;
    browsers: string[];
    singleRun: boolean;
    restartOnFileChange: boolean;
  }) => void;
  LOG_INFO: any;
}) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    client: {
      jasmine: {
        // Puedes añadir opciones de configuración para Jasmine aquí
      },
      clearContext: false, // Deja la salida del Jasmine Spec Runner visible en el navegador
    },
    jasmineHtmlReporter: {
      suppressAll: true, // Elimina las trazas duplicadas
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/app'),
      subdir: '.',
      reporters: [{ type: 'html' }, { type: 'text-summary' }],
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true,
  });
};
