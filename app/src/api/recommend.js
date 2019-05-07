import jsonp from 'jsonp'
import {commonParams,options} from './config.js'
export function getRemented(){
    const url ='https://api.m.jd.com/api?appid=topLife&functionId=qryTopLifeH5BabelFloors&body=%7B%22activityId%22%3A%222reXDuX1YpbxyCNajQyVWvyCWBd5%22%2C%22closePagination%22%3A%221%22%2C%22geo%22%3A%7B%22lat%22%3A%220.0%22%2C%22lng%22%3A%220.0%22%7D%7D&clientVersion=7.2.0&client=babelnode&callback=jsonp9&_=1552994038373'
    const data = Object.assign({},commonParams,{
        　　　　　　platform:'h5',
        　　　　　　uin:0,
        　　　　　　needNewCode:1
         　　　　})
    return jsonp(url,data,options)
}