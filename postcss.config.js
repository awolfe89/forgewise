module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? {
      // CSS optimization for production
      'postcss-preset-env': {
        stage: 3,
        features: {
          'custom-properties': false
        }
      },
      'cssnano': {
        preset: ['advanced', {
          discardComments: {
            removeAll: true
          },
          reduceIdents: true,
          mergeRules: true,
          discardDuplicates: true,
          discardEmpty: true,
          minifySelectors: true,
          minifyFontValues: true,
          normalizeWhitespace: true
        }]
      }
    } : {})
  },
};