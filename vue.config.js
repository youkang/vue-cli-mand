module.exports = {
    publicPath: '/',
    outputDir: 'mimi',
    lintOnSave: process.env.NODE_ENV !== 'production',
    devServer: {
        port: 3000,
        proxy: {
            // 商户
            '/merchant-admin': {
                target: 'http://192.168.0.235:8081',
                // target: 'https://merchant.jinzun666.com/',
                ws: false,
                changeOrigin: true
            }
        }
    },
    chainWebpack: (config) => {
        config.plugin('html').tap(args => {
            args[0].title = '秘密接入'
            return args
        })
        if(process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.devtool('')
        }else{
            // 为开发环境修改配置...
        }
    }
}
  