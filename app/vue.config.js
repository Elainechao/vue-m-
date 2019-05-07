const path =require('path')
function resolve(pathname){
    return path.resolve(__dirname,pathname)

}
module.exports ={
    configureWebpack:config=>{
        config.resolve.alias={
            ...config.resolve.alias,
            home:resolve('.src/views/home'),
            layout:resolve('./src/components/layout'),
            assets:resolve('./src/assets'),
            utils:resolve('./src/utils'),
            api:resolve('./src/api'),
            mainS:resolve('./src/views/main')
        }
    },
    devServer:{
        proxy:{
            '/ajax':{
                target:'https://api.m.jd.com',
                changeOrigin:true
            },
            '/api':{
                target:' https://translate.googleapis.com',
                changeOrigin:true
            },
            '/biyao':{
                    target:'http://m.biyao.com',
                    changeOrigin:true,
                    // pathRewrite:{'^/biyao': '/'}
            }
        }
    }
}