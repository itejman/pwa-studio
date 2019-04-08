module.exports = {
    configureWebpack: require('./configureWebpack'),
    makeMagentoRootComponentsPlugin: require('./plugins/makeMagentoRootComponentsPlugin'),
    ServiceWorkerPlugin: require('./plugins/ServiceWorkerPlugin'),
    MagentoResolver: require('./MagentoResolver'),
    PWADevServer: require('./PWADevServer'),
    UpwardPlugin: require('./plugins/UpwardPlugin')
};
