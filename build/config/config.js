/**
 * Created by allen on 2019/2/11.
 */
let argv = require('yargs').argv
let fs = require('fs')
let colors = require('colors/safe');
let path = require('path')

let config = {
    isDesign:argv.design,
    mainDir:!argv.design?'../src':'../design',
    project:'project',
    dist:'dist',
    port:'7878',
    designPort:'7979',
    apps:['portal'],
    host:'127.0.0.1',
    dev:{
        publicPath:'/'
    },
    build:{
        publicPath:'/'
    },
    proxyList : {
        '/actions': {
            target: 'http://192.168.28.248:8080/'
            // changeOrigin: false
        },
        '/socket.io': {
            target: 'http://192.168.28.248:8080/'
            // changeOrigin: false
        }
    }
}
if(argv.design){
    config.port = config.designPort;
}
module.exports = config