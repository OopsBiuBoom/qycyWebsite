module.exports = {
    devServer: {
        port: 6677,
        host: '192.168.31.66',
        open: true, // 编译完成自动打开
        https: false, // 不开启https
    },
    publicPath: './',

    productionSourceMap: false,  // 关闭生成map，加快生产环境编译速度

    lintOnSave: false // 关闭保存时的格式检查，因为我们安装了检查的命令
}