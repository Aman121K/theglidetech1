const languages = require('./src/constants/languages');

const lngs = Object.values(languages);
const defaultLng = lngs[0];

module.exports = {
  options: {
    // debug: true,
    func: {
      list: ['i18next.t', 'i18n.t', 't'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    trans: {
      component: 'Trans',
      i18nKey: 'i18nKey',
      defaultsKey: 'defaults',
      extensions: [],
    },
    lngs,
    defaultLng,
    defaultValue: (lng, ns, key) => key,
    resource: {
      loadPath: 'src/services/i18n/translations/{{lng}}.json',
      savePath: 'src/services/i18n/translations/{{lng}}.json',
      jsonIndent: 4,
      lineEnding: '\n',
    },
    nsSeparator: false,
    keySeparator: false,
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
  },
};
