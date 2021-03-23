module.exports = {
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/contact': {page: '/contact'},
            '/work': { page: '/work' }
        };
    },
    webpack: (config) => {
        config.module.rules.push(
          {
            test: /\.md$/,
            use: 'raw-loader'
          }
        )
    
        return config
      },
}