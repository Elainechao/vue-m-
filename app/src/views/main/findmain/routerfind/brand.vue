<template>
    <div>
        <vue-element-loading :active="true" spinner="bar-fade-scale" size="128" is-full-screen color="#edf" v-if="!brands.floorList">
        </vue-element-loading>
       <FindList :resource="brands"></FindList> 
    </div>
</template>
<script>
import request from 'utils/request.js'
import FindList from '@/components/find/FindList'
import BScroll from 'better-scroll'
import{Indicator} from 'mint-ui'
import VueElementLoading from 'vue-element-loading'
export default {
    data(){
        return{
            brands:[],
            num:1
        }
    },
    components:{
        FindList,
        VueElementLoading
    },
    async created(){
        // console.log(this.brands.lenght)
        // if(this.brands.lenght===0){
        // console.log(typeof(this.brands))
        //     // console.log(this.brands.lenght)
        //     console.log(1)
        // }
      let datas=await request({
          url:'/ajax/api?appid=topLife&functionId=qryTopLifeH5BabelFloors&body=%7B%22activityId%22%3A%22MAR6YFT6qwpBmUoY7jHGWbsyh9X%22%2C%22closePagination%22%3A%221%22%2C%22geo%22%3A%7B%22lat%22%3A%220.0%22%2C%22lng%22%3A%220.0%22%7D%7D&clientVersion=7.2.0&client=babelnode&callback=jsonp9&_=1553513970716'
      })
      if(typeof datas === "string"){            
            // 返回的是jsonp类型的数据，所以要用正则表达式来匹配截取json数据
            let reg = /^\w+\((\{[^()]+\})\)$/;
            let matches = datas.match(reg);
            // matches匹配到的是数组，数组第一个是所有正则表达式匹配的字符串，第二个是第一个小括号匹配到的字符串
            if(matches){
                this.brands = JSON.parse(matches[1]);
                console.log(this.brands)
            }            

        }
      

    },

}
</script>
<style lang="stylus" scoped>


</style>

