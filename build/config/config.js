/**
 * Created by allen on 2019/2/11.
 */
let argv = require('yargs').argv
let fs = require('fs')
let colors = require('colors/safe');
let deleteDist = require('../task/deleteDist')
let path = require('path')

let config = {
    isDesign:argv.design,
    mainDir:!argv.design?'../src':'../design',
    project:'project',
    dist:'dist',
    port:'9999',
    designPort:'8181',
    apps:['portal'],
    host:'127.0.0.1',
    dev:{
        publicPath:'/'
    },
    build:{
        publicPath:'/'
    }
}
if(argv.design){
    config.port = config.designPort;
}
if(!argv.devdist){
    deleteDist(config)
}else{
    if(argv.mode==='production'){
        deleteDist(config)
    }
}
module.exports = config