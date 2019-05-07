import originJSONP from 'jsonp'
export default function jsonp(url,data,options){
    //地址判断和调用处理函数
    url+=(url.indexOf('?')<0 ? '?':'&')+param(data)
    //返回一个promise
    return new Promise((resolve,reject)=>{
        originJSONP(url,options,(err,data)=>{
            //用原始的jsonp调用三个参数
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
        })
    })
}
function param(data){
    let url =''
    for (var i in data){
        let value =data[i]!==undefined?data[i]:''
        url += `&${i}=${encodeURIComponent(value)}`//地址拼接参数
    }
    return url ? url.substring(1):''
}