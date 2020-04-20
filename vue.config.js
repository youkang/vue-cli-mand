module.exports = {
    publicPath: '/',
    outputDir: 'test',
    lintOnSave: process.env.NODE_ENV !== 'production',
    devServer: {
        port: 3000,
        proxy: {
            '/': {
                target: '',
                ws: false,
                changeOrigin: true
            }
        }
    },
    chainWebpack: (config) => {
        config.plugin('html').tap(args => {
            args[0].title = 'test'
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
  