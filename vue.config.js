module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    // devServer: {
    //   disableHostCheck: true,
    //   port: 80
    // }
    devServer: {
      proxy: {
        "/api": {
          target: "http://petra.css.wonderfull.cn",
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/api'
          }
        }
      }
    }
  }